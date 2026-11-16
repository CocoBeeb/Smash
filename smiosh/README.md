# Smash Battleground

## Run locally

From this directory, install dependencies and start the game server:

```sh
npm start --prefix smiosh
```

Open `http://localhost:3000`. To play online with someone else, expose or forward
port 3000 so both players can open the same game URL.

## Online matches

1. Choose **Host Online**, enter a name, and select **Create Invite Room**.
2. Share the displayed 8-character room code and game URL. Anyone can join by
   entering a name (1–16 characters) and the code; there is no participant cap.
3. Each participant, including the host, chooses a fighter and locks in, or
   unchecks **Join the fight** to spectate. The host can start once at least two
   fighters are ready.
4. The host chooses the stage and starts the free-for-all match.

The host runs the game simulation; all participants send inputs for their
fighters and receive game-state updates. Players who join after the match starts
spectate until the next match. Fighter nametags show each participant's chosen
name. No accounts are required.

## Match controls

- Every online fighter uses **WASD**, jumps with **Space**, attacks with **F**,
  and uses specials with **G**. Hold a movement direction with the special
  button for a directional special.
- Local two-player controls remain separate: Player 1 uses **WASD** and Player 2
  uses **IJKL** or the arrow keys.
- Mash movement, jump, attack, or special buttons to escape a grab. Space
  Dragon's side special automatically carries a grabbed opponent forward; press
  the special button again to throw them for extra damage and knockback.
- Hold the attack button while grounded to charge a stronger smash attack.
  Aerial attacks are quicker and better for extending combos.
- Projectiles have a short cooldown to prevent repeated firing.
- Fighter weights are halfway closer to the roster average than before, with
  the average preserved.