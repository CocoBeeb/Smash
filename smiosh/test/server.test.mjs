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
    for (const client of clients) client.terminate();
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
  host.send(JSON.stringify({ type: 'create-room' }));
  const { roomCode } = await createdMessage;
  assert.match(roomCode, /^[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{8}$/);

  const guest = server.connect();
  await once(guest, 'open');
  const hostJoined = expectMessage(host, 'peer-joined');
  const guestJoined = expectMessage(guest, 'joined');
  guest.send(JSON.stringify({ type: 'join-room', roomCode }));
  assert.equal((await guestJoined).roomCode, roomCode);
  await hostJoined;

  const selection = { type: 'selection', fighterId: 'jigglypuff', ready: true };
  const receivedSelection = expectMessage(host, 'selection');
  guest.send(JSON.stringify(selection));
  assert.deepEqual(await receivedSelection, selection);

  const hostSelection = {
    type: 'host-selection',
    fighterId: 'steve',
    ready: true
  };
  const receivedHostSelection = expectMessage(guest, 'host-selection');
  host.send(JSON.stringify(hostSelection));
  assert.deepEqual(await receivedHostSelection, hostSelection);

  const start = {
    type: 'start',
    fighter1: 'steve',
    fighter2: 'jigglypuff',
    stageId: 'starfall-001'
  };
  const receivedStart = expectMessage(guest, 'start');
  host.send(JSON.stringify(start));
  assert.deepEqual(await receivedStart, start);

  const input = { type: 'input', keys: { j: true, p: false } };
  const receivedInput = expectMessage(host, 'input');
  guest.send(JSON.stringify(input));
  assert.deepEqual(await receivedInput, input);

  const state = { type: 'state', state: { p1: { stocks: 3 }, p2: { stocks: 2 } } };
  const receivedState = expectMessage(guest, 'state');
  host.send(JSON.stringify(state));
  assert.deepEqual(await receivedState, state);

  const gameOver = {
    type: 'game-over',
    winner: { char: 'jigglypuff' },
    playerNumber: 1,
    state: { gameRunning: false }
  };
  const receivedGameOver = expectMessage(guest, 'game-over');
  host.send(JSON.stringify(gameOver));
  assert.deepEqual(await receivedGameOver, gameOver);

  const invalidInput = expectMessage(guest, 'error');
  guest.send(JSON.stringify({ type: 'input', keys: { exec: true } }));
  assert.match((await invalidInput).message, /not allowed/);
});

test('rejects a third player from a full room', async (t) => {
  const server = await openServer(t);
  const host = server.connect();
  await once(host, 'open');
  const createdMessage = expectMessage(host, 'created');
  host.send(JSON.stringify({ type: 'create-room' }));
  const { roomCode } = await createdMessage;

  const guest = server.connect();
  await once(guest, 'open');
  const joined = expectMessage(guest, 'joined');
  guest.send(JSON.stringify({ type: 'join-room', roomCode }));
  await joined;

  const thirdPlayer = server.connect();
  await once(thirdPlayer, 'open');
  const roomFull = expectMessage(thirdPlayer, 'error');
  thirdPlayer.send(JSON.stringify({ type: 'join-room', roomCode }));
  assert.match((await roomFull).message, /already has two players/);
});
