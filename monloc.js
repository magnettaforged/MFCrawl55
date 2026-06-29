// =========================
// monloc.js
// Modern vertical monster location data.
//
// Theme flags:
// c  = normal Castle monster
// b  = normal Beach monster
// f  = normal Forest monster
// bc = Castle boss
// bb = Beach boss
// bf = Forest boss
// =========================

const MONSTER_LOCATIONS = {
  bandit: {"c": true, "b": true, "f": true, "bc": false, "bb": false, "bf": false},
  bats: {"c": true, "b": false, "f": true, "bc": false, "bb": false, "bf": false},
  bcrab: {"c": false, "b": false, "f": false, "bc": false, "bb": true, "bf": false},
  bdragon: {"c": false, "b": false, "f": false, "bc": true, "bb": true, "bf": true},
  bgoblin: {"c": false, "b": false, "f": true, "bc": false, "bb": false, "bf": false},
  bkraken: {"c": false, "b": false, "f": false, "bc": false, "bb": true, "bf": false},
  borc: {"c": false, "b": false, "f": false, "bc": false, "bb": false, "bf": true},
  bpirate: {"c": false, "b": false, "f": false, "bc": false, "bb": true, "bf": false},
  bpirate_b: {"c": false, "b": false, "f": false, "bc": false, "bb": true, "bf": false},
  captain: {"c": false, "b": false, "f": false, "bc": true, "bb": false, "bf": false},
  crab: {"c": false, "b": true, "f": false, "bc": false, "bb": false, "bf": false},
  fbandit: {"c": true, "b": true, "f": true, "bc": false, "bb": false, "bf": false},
  fbandit_b: {"c": true, "b": true, "f": true, "bc": false, "bb": false, "bf": false},
  fbandit_c: {"c": true, "b": true, "f": true, "bc": false, "bb": false, "bf": false},
  fpirate: {"c": false, "b": true, "f": false, "bc": false, "bb": false, "bf": false},
  fpirate_b: {"c": false, "b": true, "f": false, "bc": false, "bb": false, "bf": false},
  goblin: {"c": false, "b": false, "f": true, "bc": false, "bb": false, "bf": false},
  multicrab: {"c": false, "b": true, "f": false, "bc": false, "bb": false, "bf": false},
  mushroom: {"c": false, "b": false, "f": true, "bc": false, "bb": false, "bf": false},
  mzombie: {"c": true, "b": true, "f": true, "bc": false, "bb": false, "bf": false},
  mzombie_b: {"c": true, "b": true, "f": true, "bc": false, "bb": false, "bf": false},
  octopus: {"c": false, "b": true, "f": false, "bc": false, "bb": false, "bf": false},
  orc: {"c": false, "b": false, "f": true, "bc": false, "bb": false, "bf": false},
  rat: {"c": true, "b": true, "f": true, "bc": false, "bb": false, "bf": false},
  skelemage: {"c": false, "b": false, "f": false, "bc": true, "bb": false, "bf": false},
  skelemage_b: {"c": true, "b": false, "f": false, "bc": false, "bb": false, "bf": false},
  skeleswsh: {"c": true, "b": false, "f": false, "bc": false, "bb": false, "bf": false},
  skeleton: {"c": true, "b": false, "f": false, "bc": false, "bb": false, "bf": false},
  skeleton_b: {"c": true, "b": false, "f": false, "bc": false, "bb": false, "bf": false},
  spider: {"c": true, "b": false, "f": true, "bc": false, "bb": false, "bf": false},
  spider_b: {"c": true, "b": false, "f": true, "bc": false, "bb": false, "bf": false},
  squid: {"c": false, "b": true, "f": false, "bc": false, "bb": false, "bf": false},
  wolf: {"c": true, "b": true, "f": true, "bc": false, "bb": false, "bf": false},
  wraith: {"c": true, "b": false, "f": false, "bc": false, "bb": false, "bf": false},
  wraith_b: {"c": false, "b": false, "f": false, "bc": true, "bb": false, "bf": false},
};
