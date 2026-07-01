Dungeon v0.6.2 - Global Tier Scaling Test

Replace only:
- index.html
- monsterLoader.js

Changes:
- Added global monster floor tiers in monsterLoader.js.
- Normal: floors 1-15.
- Magical: floors 16-35.
- Rare: floors 36-70.
- Epic/Legendary: floors 71+ with 75/25 weighting.
- Monster scaling now resets from the active tier start floor instead of always scaling from original unlock floor.
- Monster names receive rarity prefixes automatically, such as Epic Young Dragon or Legendary Giant Rat.
- Hardiness formula changed from multiplier-style HP/(remaining damage) to additive 60-second survival estimate.
- Floor button threat display now shows Avg / Spike instead of raw min-max.
