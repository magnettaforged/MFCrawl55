Dungeon v0.6.4 - Clean Threat / Tier / Reward Test

Replace only:
- index.html
- monsterLoader.js

Changes:
- Floor threat preview is deterministic again.
- Button display restored to simple min-max: Threat X-Y.
- Removed Legendary from normal threat preview/range calculation.
- Main global tiers are now:
  - Normal: Floors 1-15
  - Magical: Floors 16-35
  - Rare: Floors 36-70
  - Epic: Floors 71+
- Legendary is now a hidden 5% encounter modifier.
  - It is not shown in floor previews.
  - It is not added to the displayed threat range.
  - It is not prefixed in the monster name.
- Battle gold drops now scale from the final scaled monster through goldRewardMult/rewardMult.
- EXP continues to use the scaled monster EXP value.
- Player Hardiness remains player-only and uses fixed assumptions.
- Version bumped to v0.6.4.
