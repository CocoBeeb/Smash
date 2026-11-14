# Smash Battleground

## Run locally

From this directory, install dependencies and start the game server:

```sh
npm start --prefix smiosh
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

## Match controls

- Player 1 moves with **WASD**, aims up with **W**, jumps with **Space**, attacks
  with **F**, and uses specials with **G**. Hold a movement direction with the
  special button for a directional special, such as a side special.
- Player 2 moves with **IJKL** or the arrow keys, aims up with **I** or **Up**,
  jumps with **Right Shift**, attacks with **O**, and uses specials with **P**.
  Hold a movement direction with the special button for a directional special.
- Mash movement, jump, attack, or special buttons to escape a grab. Space
  Dragon's side special automatically carries a grabbed opponent forward; press
  the special button again to throw them for extra damage and knockback.
- Hold the attack button while grounded to charge a stronger smash attack.
  Aerial attacks are quicker and better for extending combos.
