# Parsons 10U

Game-day page for Buzz Elite Parsons 10U softball: next game, our bracket, player spotlight, trading cards, dugout games and weekly awards.

Live at https://litbroboy.github.io/parsons-10u/

## How it stays current

- `.github/workflows/sync-bracket.yml` runs every 10 minutes. It reads the tournament bracket on BracketHQ (`scripts/sync-bracket.mjs`) and commits `data/live.json` when a new final score appears.
- `index.html` checks `data/live.json` every 2 minutes and redraws the board, bracket, road and schedule when a score changes.
- Season stats come from GameChanger, which needs a sign-in, so they are updated by hand after each tournament.

## New tournament

Update `data/config.json` with the new bracket id and its slot-to-game map, and update the `GAMES` list in `index.html`.
