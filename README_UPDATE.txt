Dungeon v0.6.0 DEF/Hardiness update

Replace only these files:
- index.html
- armor.js
- monster.js
- monsterLoader.js
- runes.js

Do not replace skills.js; it was not changed in this update.

Main changes:
- DEF renamed in UI/combat to PDEF.
- PDEF is physical mitigation percentage instead of flat subtraction.
- MDEF removed from armor data.
- Old armor MDEF converted directly into Fire/Ice/Shock/Dark resistance using floor(MDEF / 4).
- Player Holy resistance is not used.
- Resistance lines hide when 0.
- Equal Fire/Ice/Shock/Dark resistance displays as All Res.
- Hardiness added as a 30-second survival estimate.
- Floor Threat range calculates from the actual current floor monster pool.
- Entrance and floor travel menus show Hardiness and threat.
- Help menu includes retreat, H18 shrine, death tax, Shrine Stone reminders.
- Splash menu for new/returning players.
- Local leaderboard stats object tracks floors, rooms, gold, XP, potions, deaths, kills, level.
- First monster smoothing pass for Dragon, Kraken, Orc Warlord, and Bandit Ambusher.
