// =========================
// monloc.js
// Monster placement pools
// =========================
//
// A1 = normal monster pool for floor/area 1
// B1 = boss pool for floor/area 1
//
// The current index.html calls:
// startEncounter("A1", key) for M tiles
// startEncounter("B1", key) for B tiles

const MONSTER_POOLS = {
  A1: {
    M: [
      "rat1",
      "rat2",
      "skeleton1",
      "skeleton2",
      "spider1",
      "spider2",
      "bandit1",
      "bats1"
    ]
  },

  B1: {
    B: [
      "captain1"
    ],
    M: [
      "captain1"
    ]
  },

  A2: {
    M: [
      "skeleton2",
      "spider2",
      "bandit1",
      "bats1"
    ]
  },

  B2: {
    B: [
      "captain2"
    ],
    M: [
      "captain2"
    ]
  }
};
