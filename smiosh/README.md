# Smash Battleground

## Run locally

From this directory, install dependencies and start the game server:

```sh
npm install
npm start
```

Open `http://localhost:3000`. To play online with someone else, expose or forward
port 3000 so both players can open the same game URL.

## Online matches

1. Choose **Host Online** and select **Create Invite Room**.
2. Share the displayed 8-character room code and game URL with one other player.
3. The host chooses and locks Player 1. The guest chooses and locks Player 2.
4. The host chooses the stage and starts the match.

The host runs the game simulation; the guest sends Player 2 inputs and receives
game-state updates. No accounts are required. Anyone with the room code can join
until the room is full.
