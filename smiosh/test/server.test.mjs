import assert from 'node:assert/strict';
import { once } from 'node:events';
import test from 'node:test';
import WebSocket from 'ws';
import { createGameServer } from '../server.mjs';

async function openServer(t) {
  const gameServer = createGameServer();
  await new Promise((resolve) => gameServer.httpServer.listen(0, '127.0.0.1', resolve));
  const address = gameServer.httpServer.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;
  const clients = [];

  t.after(async () => {
    const closedClients = clients.map((client) => client.readyState === WebSocket.CLOSED
      ? Promise.resolve()
      : once(client, 'close'));
    for (const client of clients) client.terminate();
    await Promise.all(closedClients);
    await new Promise((resolve) => gameServer.webSocketServer.close(resolve));
    await new Promise((resolve) => gameServer.httpServer.close(resolve));
  });

  return {
    ...gameServer,
    baseUrl,
    connect() {
      const client = new WebSocket(baseUrl.replace('http:', 'ws:') + '/ws');
      clients.push(client);
      return client;
    }
  };
}

function expectMessage(socket, expectedType) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      cleanup();
      reject(new Error(`Timed out waiting for ${expectedType} message.`));
    }, 3000);
    const onMessage = (data) => {
      const message = JSON.parse(data.toString());
      if (message.type !== expectedType) return;
      cleanup();
      resolve(message);
    };
    const onError = (error) => {
      cleanup();
      reject(error);
    };
    const cleanup = () => {
      socket.off('message', onMessage);
      socket.off('error', onError);
      clearTimeout(timer);
    };
    socket.on('message', onMessage);
    socket.once('error', onError);
  });
}

test('serves the game from the same origin as its WebSocket endpoint', async (t) => {
  const server = await openServer(t);
  const response = await fetch(server.baseUrl);
  assert.equal(response.status, 200);
  assert.match(await response.text(), /SMASH BATTLEGROUND/);

  const missing = await fetch(`${server.baseUrl}/server.mjs`);
  assert.equal(missing.status, 404);
});

test('creates invite rooms and relays only the supported player messages', async (t) => {
  const server = await openServer(t);
  const host = server.connect();
  await once(host, 'open');
  const createdMessage = expectMessage(host, 'created');
  host.send(JSON.stringify({ type: 'create-room', name: 'Host' }));
  const { roomCode } = await createdMessage;
  assert.match(roomCode, /^[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{8}$/);

  const guest = server.connect();
  await once(guest, 'open');
  const hostJoined = expectMessage(host, 'room-members');
  const guestJoined = expectMessage(guest, 'joined');
  guest.send(JSON.stringify({ type: 'join-room', roomCode, name: 'Guest' }));
  const joined = await guestJoined;
  assert.equal(joined.roomCode, roomCode);
  assert.ok(joined.playerId);
  assert.equal((await hostJoined).members.length, 2);
  assert.equal(joined.members.find((member) => member.id === 'host').name, 'Host');
  assert.equal(joined.members.find((member) => member.id === joined.playerId).name, 'Guest');

  const selection = { type: 'selection', fighterId: 'jigglypuff', ready: true };
  const receivedSelection = expectMessage(host, 'room-members');
  const guestReceivedSelection = expectMessage(guest, 'room-members');
  guest.send(JSON.stringify({ ...selection, fighting: true }));
  assert.ok((await receivedSelection).members.some((member) =>
    member.id === joined.playerId && member.fighting && member.ready
  ));
  await guestReceivedSelection;

  const hostSelection = {
    type: 'host-selection',
    fighterId: 'steve',
    ready: true,
    fighting: true
  };
  const receivedHostSelection = expectMessage(guest, 'room-members');
  host.send(JSON.stringify(hostSelection));
  assert.ok((await receivedHostSelection).members.some((member) =>
    member.id === 'host' && member.fighterId === hostSelection.fighterId && member.ready
  ));

  const start = {
    type: 'start',
    players: [
      { id: 'host', name: 'Host', fighterId: 'steve' },
      { id: joined.playerId, name: 'Guest', fighterId: 'jigglypuff' }
    ],
    stageId: 'starfall-001'
  };
  const receivedStart = expectMessage(guest, 'start');
  host.send(JSON.stringify(start));
  assert.deepEqual(await receivedStart, start);

  const input = { type: 'input', keys: { a: true, d: false, f: true, space: true } };
  const receivedInput = expectMessage(host, 'input');
  guest.send(JSON.stringify(input));
  assert.deepEqual(await receivedInput, { ...input, playerId: joined.playerId });

  const state = { type: 'state', state: { fighters: [{ stocks: 3 }, { stocks: 2 }] } };
  const receivedState = expectMessage(guest, 'state');
  host.send(JSON.stringify(state));
  assert.deepEqual(await receivedState, state);

  const gameOver = {
    type: 'game-over',
    winner: { char: 'jigglypuff' },
    playerNumber: 3,
    state: { gameRunning: false }
  };
  const receivedGameOver = expectMessage(guest, 'game-over');
  host.send(JSON.stringify(gameOver));
  assert.deepEqual(await receivedGameOver, gameOver);

  const lateGuest = server.connect();
  await once(lateGuest, 'open');
  const lateJoinMessage = expectMessage(lateGuest, 'joined');
  const hostMembers = expectMessage(host, 'room-members');
  lateGuest.send(JSON.stringify({ type: 'join-room', roomCode, name: 'Late Guest' }));
  const lateJoin = await lateJoinMessage;
  assert.equal(lateJoin.inProgress, false);
  assert.equal((await hostMembers).members.length, 3);

  const invalidInput = expectMessage(guest, 'error');
  guest.send(JSON.stringify({ type: 'input', keys: { exec: true } }));
  assert.match((await invalidInput).message, /not allowed/);
});

test('allows an unlimited number of room participants', async (t) => {
  const server = await openServer(t);
  const host = server.connect();
  await once(host, 'open');
  const createdMessage = expectMessage(host, 'created');
  host.send(JSON.stringify({ type: 'create-room', name: 'Room Host' }));
  const { roomCode } = await createdMessage;

  for (let index = 0; index < 6; index++) {
    const guest = server.connect();
    await once(guest, 'open');
    const joined = expectMessage(guest, 'joined');
    guest.send(JSON.stringify({ type: 'join-room', roomCode, name: `Guest ${index + 1}` }));
    const response = await joined;
    assert.equal(response.roomCode, roomCode);
    assert.ok(response.playerId);
  }
  assert.equal(server.rooms.get(roomCode).members.size, 7);
});

test('starts a match with two fighting guests while the host spectates', async (t) => {
  const server = await openServer(t);
  const host = server.connect();
  await once(host, 'open');
  const createdMessage = expectMessage(host, 'created');
  host.send(JSON.stringify({ type: 'create-room', name: 'Host' }));
  const { roomCode } = await createdMessage;
  const guests = [];
  const players = [];

  for (const [index, fighterId] of ['jigglypuff', 'sam'].entries()) {
    const guest = server.connect();
    const name = `Fighter ${index + 1}`;
    guests.push(guest);
    await once(guest, 'open');
    const joined = expectMessage(guest, 'joined');
    const joinBroadcasts = [host, ...guests.slice(0, -1)]
      .map((socket) => expectMessage(socket, 'room-members'));
    guest.send(JSON.stringify({ type: 'join-room', roomCode, name }));
    players.push({ id: (await joined).playerId, name, fighterId });
    await Promise.all(joinBroadcasts);
    const memberBroadcasts = [host, ...guests].map((socket) => expectMessage(socket, 'room-members'));
    guest.send(JSON.stringify({ type: 'selection', fighterId, ready: true, fighting: true }));
    await Promise.all(memberBroadcasts);
  }

  const hostSelectionBroadcasts = guests.map((guest) => expectMessage(guest, 'room-members'));
  host.send(JSON.stringify({
    type: 'host-selection',
    fighterId: 'steve',
    ready: true,
    fighting: false
  }));
  await Promise.all(hostSelectionBroadcasts);

  const start = {
    type: 'start',
    players,
    stageId: 'starfall-001'
  };
  const receivedStarts = guests.map((guest) => expectMessage(guest, 'start'));
  host.send(JSON.stringify(start));
  assert.deepEqual(await Promise.all(receivedStarts), [start, start]);

  const firstInput = expectMessage(host, 'input');
  guests[0].send(JSON.stringify({ type: 'input', keys: { a: true } }));
  const firstRelayedInput = await firstInput;
  const secondInput = expectMessage(host, 'input');
  guests[1].send(JSON.stringify({ type: 'input', keys: { d: true } }));
  const secondRelayedInput = await secondInput;
  assert.deepEqual(
    [firstRelayedInput, secondRelayedInput].map(({ playerId, keys }) => ({ playerId, keys })),
    [
      { playerId: players[0].id, keys: { a: true } },
      { playerId: players[1].id, keys: { d: true } }
    ]
  );

  const lateGuest = server.connect();
  await once(lateGuest, 'open');
  const joined = expectMessage(lateGuest, 'joined');
  const receivedSetup = expectMessage(lateGuest, 'start');
  const updatedMembers = expectMessage(host, 'room-members');
  lateGuest.send(JSON.stringify({ type: 'join-room', roomCode, name: 'Spectator' }));
  const lateJoin = await joined;
  assert.equal(lateJoin.inProgress, true);
  assert.equal(lateJoin.members.length, 4);
  assert.deepEqual(await receivedSetup, start);
  assert.equal((await updatedMembers).members.length, 4);
});
