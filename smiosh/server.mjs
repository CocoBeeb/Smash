import { randomInt } from 'node:crypto';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { WebSocket, WebSocketServer } from 'ws';

const directory = dirname(fileURLToPath(import.meta.url));
const ROOM_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const ROOM_CODE_LENGTH = 8;
const MAX_MESSAGES_PER_SECOND = 120;
const STATIC_FILES = new Map([
  ['/', ['smoish.html', 'text/html; charset=utf-8']],
  ['/smoish.html', ['smoish.html', 'text/html; charset=utf-8']],
  ['/smoish.js', ['smoish.js', 'text/javascript; charset=utf-8']],
  ['/smoish.css', ['smoish.css', 'text/css; charset=utf-8']]
]);
const INPUT_KEYS = ['j', 'l', 'i', 'k', 'o', 'p', 'rshift'];

function createRoomCode() {
  return Array.from({ length: ROOM_CODE_LENGTH }, () =>
    ROOM_ALPHABET[randomInt(ROOM_ALPHABET.length)]
  ).join('');
}

function send(socket, message) {
  if (socket?.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  }
}

function isFighterId(value) {
  return typeof value === 'string' && /^[a-z0-9-]{1,48}$/.test(value);
}

function isInputState(value) {
  return value && typeof value === 'object' && !Array.isArray(value) &&
    Object.keys(value).every((key) => INPUT_KEYS.includes(key)) &&
    Object.values(value).every((pressed) => typeof pressed === 'boolean');
}

function replyError(socket, message) {
  send(socket, { type: 'error', message });
}

export function createGameServer() {
  const rooms = new Map();
  const connections = new Map();
  const httpServer = createServer(async (request, response) => {
    if (request.method !== 'GET') {
      response.writeHead(405, { Allow: 'GET' });
      response.end('Method not allowed');
      return;
    }

    let pathname;
    try {
      pathname = new URL(request.url || '/', 'http://localhost').pathname;
    } catch {
      response.writeHead(400);
      response.end('Bad request');
      return;
    }

    const file = STATIC_FILES.get(pathname);
    if (!file) {
      response.writeHead(404);
      response.end('Not found');
      return;
    }

    try {
      const contents = await readFile(join(directory, file[0]));
      response.writeHead(200, {
        'Content-Type': file[1],
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff'
      });
      response.end(contents);
    } catch (error) {
      console.error(`Failed to serve ${pathname}:`, error);
      response.writeHead(500);
      response.end('Unable to serve game files');
    }
  });

  const webSocketServer = new WebSocketServer({
    noServer: true,
    maxPayload: 65_536
  });

  httpServer.on('upgrade', (request, socket, head) => {
    let pathname;
    try {
      pathname = new URL(request.url || '/', 'http://localhost').pathname;
    } catch {
      socket.write('HTTP/1.1 400 Bad Request\r\n\r\n');
      socket.destroy();
      return;
    }
    if (pathname !== '/ws') {
      socket.write('HTTP/1.1 404 Not Found\r\n\r\n');
      socket.destroy();
      return;
    }

    const origin = request.headers.origin;
    if (origin) {
      try {
        if (new URL(origin).host !== request.headers.host) {
          socket.write('HTTP/1.1 403 Forbidden\r\n\r\n');
          socket.destroy();
          return;
        }
      } catch {
        socket.write('HTTP/1.1 403 Forbidden\r\n\r\n');
        socket.destroy();
        return;
      }
    }

    webSocketServer.handleUpgrade(request, socket, head, (client) => {
      webSocketServer.emit('connection', client, request);
    });
  });

  webSocketServer.on('connection', (socket) => {
    let windowStartedAt = Date.now();
    let messageCount = 0;

    socket.on('message', (rawMessage) => {
      const now = Date.now();
      if (now - windowStartedAt >= 1000) {
        windowStartedAt = now;
        messageCount = 0;
      }
      if (++messageCount > MAX_MESSAGES_PER_SECOND) {
        replyError(socket, 'Too many messages; connection closed.');
        socket.close(1008, 'Rate limit exceeded');
        return;
      }

      let message;
      try {
        message = JSON.parse(rawMessage.toString());
      } catch {
        replyError(socket, 'Invalid message format.');
        socket.close(1008, 'Invalid message');
        return;
      }
      if (!message || typeof message !== 'object' || Array.isArray(message)) {
        replyError(socket, 'Invalid message format.');
        socket.close(1008, 'Invalid message');
        return;
      }

      const connection = connections.get(socket);
      if (!connection) {
        if (message.type === 'create-room') {
          let roomCode = createRoomCode();
          while (rooms.has(roomCode)) roomCode = createRoomCode();
          const room = { host: socket, guest: null };
          rooms.set(roomCode, room);
          connections.set(socket, { roomCode, role: 'host' });
          send(socket, { type: 'created', roomCode });
          return;
        }

        if (message.type === 'join-room') {
          if (typeof message.roomCode !== 'string' ||
              !new RegExp(`^[${ROOM_ALPHABET}]{${ROOM_CODE_LENGTH}}$`).test(message.roomCode)) {
            replyError(socket, 'Enter a valid room code.');
            return;
          }
          const room = rooms.get(message.roomCode);
          if (!room) {
            replyError(socket, 'Room not found. Check the code and try again.');
            return;
          }
          if (room.guest) {
            replyError(socket, 'That room already has two players.');
            return;
          }
          room.guest = socket;
          connections.set(socket, { roomCode: message.roomCode, role: 'guest' });
          send(socket, { type: 'joined', roomCode: message.roomCode });
          send(room.host, { type: 'peer-joined' });
          return;
        }

        replyError(socket, 'Create or join a room first.');
        return;
      }

      const room = rooms.get(connection.roomCode);
      if (!room) {
        replyError(socket, 'This room is no longer available.');
        socket.close(1000, 'Room closed');
        return;
      }

      if (connection.role === 'host') {
        if (message.type === 'host-selection' &&
            isFighterId(message.fighterId) && typeof message.ready === 'boolean') {
          send(room.guest, message);
          return;
        }
        if (message.type === 'start' &&
            isFighterId(message.fighter1) && isFighterId(message.fighter2) &&
            isFighterId(message.stageId)) {
          send(room.guest, message);
          return;
        }
        if (message.type === 'state' && message.state &&
            typeof message.state === 'object' && !Array.isArray(message.state)) {
          send(room.guest, message);
          return;
        }
        if (message.type === 'game-over' &&
            isFighterId(message.winner?.char) &&
            (message.playerNumber === 1 || message.playerNumber === 2) &&
            message.state && typeof message.state === 'object' &&
            message.state.gameRunning === false) {
          send(room.guest, message);
          return;
        }
      } else {
        if (message.type === 'selection' &&
            isFighterId(message.fighterId) && typeof message.ready === 'boolean') {
          send(room.host, message);
          return;
        }
        if (message.type === 'input' && isInputState(message.keys)) {
          send(room.host, message);
          return;
        }
      }

      replyError(socket, 'Message is not allowed for this player.');
    });

    socket.on('close', () => {
      const connection = connections.get(socket);
      if (!connection) return;
      connections.delete(socket);
      const room = rooms.get(connection.roomCode);
      if (!room) return;
      if (connection.role === 'host') {
        rooms.delete(connection.roomCode);
        send(room.guest, { type: 'peer-left' });
        room.guest?.close(1000, 'Host left the room');
        if (room.guest) connections.delete(room.guest);
      } else {
        room.guest = null;
        send(room.host, { type: 'peer-left' });
      }
    });
  });

  return { httpServer, webSocketServer, rooms };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const { httpServer } = createGameServer();
  const port = Number(process.env.PORT || 3000);
  if (!Number.isInteger(port) || port < 1 || port > 65_535) {
    throw new Error('PORT must be an integer between 1 and 65535.');
  }
  httpServer.listen(port, '0.0.0.0', () => {
    console.log(`Smash Battleground online at http://localhost:${port}`);
  });
}
