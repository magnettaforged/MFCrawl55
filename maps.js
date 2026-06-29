// =========================
// MAPS.JS
// Random 10x20 map pool
// Tier-agnostic layouts; floor/difficulty should decide enemy and drop pools elsewhere.
// =========================
//
// Legend:
// # = blocked / no room
// E = entrance
// R = regular room
// M = monster room
// C = chest room
// T = trap room
// B = boss room
// S = shrine / end room

const MAPS = {
  random_001: {
    id: "random_001",
    name: "Random Dungeon 001",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#RMR######",
      "##RR######",
      "#RMC######",
      "#TR#######",
      "#R########",
      "#RC#######",
      "#R########",
      "#S########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_002: {
    id: "random_002",
    name: "Random Dungeon 002",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#RR#######",
      "##R#######",
      "##RRC#####",
      "###R######",
      "###R######",
      "###RM#####",
      "###RM#####",
      "##RR######",
      "##S#######",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_003: {
    id: "random_003",
    name: "Random Dungeon 003",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#RR#######",
      "##R#######",
      "##R#######",
      "#RRC######",
      "#RR#######",
      "#RRR######",
      "#MRT######",
      "#R########",
      "#R########",
      "#S########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_004: {
    id: "random_004",
    name: "Random Dungeon 004",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#ERR######",
      "###R######",
      "##MR######",
      "##CRRRC###",
      "####RRR###",
      "######M###",
      "######R###",
      "######R###",
      "####RRR###",
      "#####SR###",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_005: {
    id: "random_005",
    name: "Random Dungeon 005",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#R########",
      "#MC#######",
      "#R########",
      "#R########",
      "#RRM######",
      "###R######",
      "###R######",
      "##CRM#####",
      "####S#####",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_006: {
    id: "random_006",
    name: "Random Dungeon 006",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#ER#######",
      "#RR#######",
      "#R########",
      "#RMRM#####",
      "#RR#C#####",
      "#RR#######",
      "##R#######",
      "##R#######",
      "##R#######",
      "##R#######",
      "##R#######",
      "##S#######",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_007: {
    id: "random_007",
    name: "Random Dungeon 007",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#R########",
      "#RRR######",
      "###RRRRMR#",
      "#####RRR##",
      "#####RMR##",
      "#####RCC##",
      "#####R####",
      "#####R####",
      "#####S####",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_008: {
    id: "random_008",
    name: "Random Dungeon 008",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#ER#######",
      "#RR#######",
      "#RTC######",
      "#RR#######",
      "#RMC######",
      "#R########",
      "#R########",
      "#R########",
      "#RRR######",
      "##RS######",
      "##R#######",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_009: {
    id: "random_009",
    name: "Random Dungeon 009",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#RRR######",
      "#RMRC#####",
      "##RR######",
      "##TRC#####",
      "##RR######",
      "###RR#####",
      "###SR#####",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_010: {
    id: "random_010",
    name: "Random Dungeon 010",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#M########",
      "#RC#######",
      "#RC#######",
      "#RTR######",
      "#R########",
      "#M########",
      "#RS#######",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_011: {
    id: "random_011",
    name: "Random Dungeon 011",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#R########",
      "#R########",
      "#RM#######",
      "##R#######",
      "##RR######",
      "##CMRRRR##",
      "###M######",
      "###S######",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_012: {
    id: "random_012",
    name: "Random Dungeon 012",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#ER#######",
      "##MR######",
      "###RR#####",
      "####RR####",
      "####R#####",
      "###TR#####",
      "###MR#####",
      "###CR#####",
      "##CRRRS###",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_013: {
    id: "random_013",
    name: "Random Dungeon 013",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#M########",
      "#R########",
      "#R########",
      "#R########",
      "#RT#######",
      "#RRRC#####",
      "#RR#######",
      "##S#######",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_014: {
    id: "random_014",
    name: "Random Dungeon 014",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#RM#######",
      "#CR#######",
      "#RM#######",
      "#RRMR#####",
      "##R#R#####",
      "##RR######",
      "###S######",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_015: {
    id: "random_015",
    name: "Random Dungeon 015",
    location: "random_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#RRR######",
      "###RR#####",
      "###RR#####",
      "##RR######",
      "#RRMC#####",
      "#M########",
      "#R########",
      "#S########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_016: {
    id: "random_016",
    name: "Random Dungeon 016",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#TM#######",
      "#RR#######",
      "#R########",
      "#M########",
      "#R########",
      "#R########",
      "#RMR######",
      "#RTM######",
      "#RRM######",
      "#SM#######",
      "##RRC#####",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_017: {
    id: "random_017",
    name: "Random Dungeon 017",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#ER#######",
      "##R#######",
      "##R#######",
      "##R#######",
      "#RRRR#####",
      "#RMRRR####",
      "##RR#T####",
      "##RR#MR###",
      "######T###",
      "######RRR#",
      "######RRM#",
      "######RCR#",
      "########R#",
      "########R#",
      "########M#",
      "#######TR#",
      "#######B##",
      "#######S##",
      "##########"
    ]
  },
  random_018: {
    id: "random_018",
    name: "Random Dungeon 018",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#M########",
      "#MRRR#####",
      "#RRRR#####",
      "###M######",
      "###RRR####",
      "##RM######",
      "##CR######",
      "###T######",
      "##RR######",
      "##TRRR####",
      "#####B####",
      "#####S####",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_019: {
    id: "random_019",
    name: "Random Dungeon 019",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#ER#######",
      "#TR#######",
      "#RR#######",
      "#CRR######",
      "#RRRMC####",
      "#M########",
      "#MR#######",
      "##R#######",
      "##R#######",
      "#RR#######",
      "##RRC#####",
      "##RR######",
      "#RR#######",
      "#R########",
      "#RR#######",
      "#RT#######",
      "#RRB######",
      "#R#S######",
      "##########"
    ]
  },
  random_020: {
    id: "random_020",
    name: "Random Dungeon 020",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#M########",
      "#R########",
      "#M########",
      "#MRRR#####",
      "####RTR###",
      "####RRRC##",
      "####RT####",
      "###RMRMC##",
      "##RM######",
      "##R#######",
      "#RTC######",
      "#RS#######",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_021: {
    id: "random_021",
    name: "Random Dungeon 021",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#MRR######",
      "###R######",
      "###RMRMR##",
      "###R#MRRR#",
      "##CRRM#CM#",
      "####RRR###",
      "###RRRR###",
      "#RRR#R####",
      "#R###T####",
      "#RR##R####",
      "##R#######",
      "##R#######",
      "##B#######",
      "##S#######",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_022: {
    id: "random_022",
    name: "Random Dungeon 022",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#RR#######",
      "##RMMR####",
      "###R#RC###",
      "###RMR####",
      "####RRC###",
      "####RT####",
      "#####RRR##",
      "######RR##",
      "######R###",
      "######M###",
      "#####RRRR#",
      "#######RR#",
      "######CRR#",
      "######RRR#",
      "######S###",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_023: {
    id: "random_023",
    name: "Random Dungeon 023",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#ER#######",
      "##R#######",
      "##R#######",
      "##M#######",
      "##R#######",
      "#RM#######",
      "#RTR######",
      "##RR######",
      "#RRR######",
      "#CRC######",
      "##R#######",
      "##R#######",
      "##RR######",
      "##RR######",
      "##RRMMC###",
      "###MRRS###",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_024: {
    id: "random_024",
    name: "Random Dungeon 024",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#RRR######",
      "#RRR######",
      "#R#R######",
      "###RR#####",
      "####R#####",
      "####R#####",
      "###RR#####",
      "###R######",
      "##RMC#####",
      "#RRC######",
      "#M########",
      "#RRRM#####",
      "###TRR####",
      "###RRC####",
      "####RRRRS#",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_025: {
    id: "random_025",
    name: "Random Dungeon 025",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#ER#######",
      "#RR#######",
      "#MR#######",
      "#RR#######",
      "#RR#######",
      "#CR#######",
      "#MR#######",
      "#R########",
      "#R########",
      "#R########",
      "#MRC######",
      "#R########",
      "#RRR######",
      "#RRRR#####",
      "#T##R#####",
      "#RR#######",
      "##B#######",
      "##S#######",
      "##########"
    ]
  },
  random_026: {
    id: "random_026",
    name: "Random Dungeon 026",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#R########",
      "#RRTR#####",
      "##R#R#####",
      "##RRC#####",
      "###R######",
      "###M######",
      "###RRTRC##",
      "####RR####",
      "##TRRR####",
      "#RM#R#####",
      "#R##C#####",
      "#R########",
      "#RR#######",
      "##RR######",
      "##RM######",
      "##S#######",
      "##########"
    ]
  },
  random_027: {
    id: "random_027",
    name: "Random Dungeon 027",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#M########",
      "#T########",
      "#T########",
      "#R########",
      "#RT#######",
      "##MRMR####",
      "#####RR###",
      "######R###",
      "####RRR###",
      "##MRR#####",
      "##RRM#####",
      "##CRR#####",
      "###RRC####",
      "##MR######",
      "##RR######",
      "###R######",
      "###S######",
      "##########"
    ]
  },
  random_028: {
    id: "random_028",
    name: "Random Dungeon 028",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#M########",
      "#M########",
      "#R########",
      "#RR#######",
      "#RRMR#####",
      "#RRRR#####",
      "##CRT#####",
      "####BS####",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_029: {
    id: "random_029",
    name: "Random Dungeon 029",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#RT#######",
      "##RR######",
      "##TM######",
      "#RR#######",
      "#RR#######",
      "#M########",
      "#M########",
      "#M########",
      "#R########",
      "#RRT######",
      "#R#R######",
      "#RMR######",
      "#BSC######",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_030: {
    id: "random_030",
    name: "Random Dungeon 030",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#M########",
      "#R########",
      "#R########",
      "#R########",
      "#RRRC#####",
      "##CRR#####",
      "###RR#####",
      "###MR#####",
      "###RR#####",
      "#RRRRT####",
      "#RRRMR####",
      "#MRRR#####",
      "#SMR######",
      "##RM######",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_031: {
    id: "random_031",
    name: "Random Dungeon 031",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#R########",
      "#R########",
      "#M########",
      "#RR#######",
      "#RC#######",
      "#R########",
      "#T########",
      "#R########",
      "#R########",
      "#RRR######",
      "###MC#####",
      "###RTRM###",
      "###RRRRR##",
      "###RRRRM##",
      "######RRS#",
      "##########",
      "##########"
    ]
  },
  random_032: {
    id: "random_032",
    name: "Random Dungeon 032",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E##RRRMC#",
      "#RRRRR####",
      "####RR####",
      "#RTRR#####",
      "#CR#######",
      "#TR#######",
      "#RR#######",
      "#RR#######",
      "##RMR#####",
      "###MC#####",
      "#SBT######",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_033: {
    id: "random_033",
    name: "Random Dungeon 033",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#ET#######",
      "#RRRM#####",
      "#C##R#####",
      "####RR####",
      "####MT####",
      "####RR####",
      "#####R####",
      "###RTRRC##",
      "###RRRRSB#",
      "####MRRMR#",
      "#######RR#",
      "#######RR#",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_034: {
    id: "random_034",
    name: "Random Dungeon 034",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#RR#######",
      "##R#######",
      "##RRRRM###",
      "####R#C###",
      "####R#####",
      "####MRRRR#",
      "####RRRM##",
      "####R##RR#",
      "###MT##CR#",
      "###C####M#",
      "########R#",
      "####RRRRR#",
      "########R#",
      "########R#",
      "#######SB#",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_035: {
    id: "random_035",
    name: "Random Dungeon 035",
    location: "random_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#RMM######",
      "#RRR######",
      "#RRR######",
      "#RC#######",
      "#R########",
      "#RT#######",
      "##RMRTM###",
      "######MR##",
      "#######BS#",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_036: {
    id: "random_036",
    name: "Random Dungeon 036",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#RR#######",
      "#RR#######",
      "#RMR######",
      "#TMRRC####",
      "#R##RTRR##",
      "#R#####R##",
      "#R#####RR#",
      "########R#",
      "#######RR#",
      "#######RM#",
      "#######MR#",
      "#######MM#",
      "###RRRRRT#",
      "########R#",
      "#######RR#",
      "######BR##",
      "######S###",
      "##########"
    ]
  },
  random_037: {
    id: "random_037",
    name: "Random Dungeon 037",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#ER#######",
      "#RM#######",
      "#MMR######",
      "#MCR######",
      "#RRR######",
      "#MRRR#####",
      "####R#####",
      "####R#####",
      "#RMRR#####",
      "#RRRRRRR##",
      "#MRRRR#RR#",
      "#RTC###RR#",
      "######RTC#",
      "######T###",
      "######B###",
      "######S###",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_038: {
    id: "random_038",
    name: "Random Dungeon 038",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#ER#######",
      "#RR#######",
      "#R########",
      "#R########",
      "#RR#######",
      "#TR#######",
      "#RMR######",
      "#RR#######",
      "#RR#######",
      "##RRR#####",
      "###RR#####",
      "###MRC####",
      "##RM######",
      "##RRRMRR##",
      "##MMRMRRM#",
      "##RRRRB#R#",
      "###RR#S###",
      "###T######",
      "##########"
    ]
  },
  random_039: {
    id: "random_039",
    name: "Random Dungeon 039",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#RTM######",
      "#MRT######",
      "#MMR######",
      "#MRRR#####",
      "#R########",
      "#R########",
      "#TRC######",
      "#T########",
      "#RR#######",
      "#RRMRRR###",
      "#RRMR#####",
      "####R#####",
      "####M#####",
      "#RRTRRRM##",
      "#C#####R##",
      "#######B##",
      "#######S##",
      "##########"
    ]
  },
  random_040: {
    id: "random_040",
    name: "Random Dungeon 040",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#M########",
      "#R########",
      "#R########",
      "#TR#######",
      "#RRR######",
      "#M########",
      "#R########",
      "#MM#######",
      "#SRRR#####",
      "#BR#R#####",
      "#RR#R#####",
      "#RRMR#####",
      "#TRCR#####",
      "#RRRR#####",
      "#RMR######",
      "#R########",
      "##########"
    ]
  },
  random_041: {
    id: "random_041",
    name: "Random Dungeon 041",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#ERRR#####",
      "####RRR###",
      "#####RR###",
      "###RMM####",
      "##CRRRM###",
      "###RRRR###",
      "##RMRRR###",
      "##M#######",
      "##R#######",
      "##RM######",
      "###RRRR###",
      "##RTRMT###",
      "#RR#RM####",
      "####RRRRR#",
      "####TR####",
      "#####RS###",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_042: {
    id: "random_042",
    name: "Random Dungeon 042",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#M########",
      "#RT#######",
      "#RRRR#####",
      "#MRMRRR###",
      "#M####RR##",
      "#R###RRR##",
      "#R###RRR##",
      "#T###R#R##",
      "#####CRR##",
      "######RR##",
      "######RR##",
      "######MR##",
      "#######R##",
      "###RMRRRR#",
      "###MRRRRR#",
      "####B#MC##",
      "####S#####",
      "##########"
    ]
  },
  random_043: {
    id: "random_043",
    name: "Random Dungeon 043",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#RT#######",
      "##M#######",
      "##T#######",
      "##T#######",
      "#RRR######",
      "#RTR######",
      "#RRC######",
      "#MM#######",
      "##MRM#####",
      "####MM####",
      "####RR####",
      "####RRR###",
      "####MMR###",
      "#####MRR##",
      "#######T##",
      "######BRR#",
      "######SCR#",
      "##########"
    ]
  },
  random_044: {
    id: "random_044",
    name: "Random Dungeon 044",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#M########",
      "#R########",
      "#RMC######",
      "##RTM#####",
      "####R#####",
      "####M#####",
      "###RM#####",
      "#CRT######",
      "###M######",
      "###M######",
      "##TMMRC###",
      "#RMRR#####",
      "####R#####",
      "####R#####",
      "####TB####",
      "#####S####",
      "##########"
    ]
  },
  random_045: {
    id: "random_045",
    name: "Random Dungeon 045",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#RRR######",
      "#TMM######",
      "##TM######",
      "##RRRC####",
      "###RR#####",
      "##RRMRR###",
      "##MRRR####",
      "###TM#####",
      "##RRR#####",
      "###RR#####",
      "##RM######",
      "##T#######",
      "##M#######",
      "##R#######",
      "#RR#######",
      "#S########",
      "##########"
    ]
  },
  random_046: {
    id: "random_046",
    name: "Random Dungeon 046",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#R########",
      "#RRR######",
      "#MRM######",
      "#TTR######",
      "##RR######",
      "###RRRMR##",
      "#####RRRM#",
      "######RRR#",
      "########M#",
      "########R#",
      "########R#",
      "#######RR#",
      "########R#",
      "#####RRRR#",
      "#####MRRR#",
      "#####MBM##",
      "######SMC#",
      "##########"
    ]
  },
  random_047: {
    id: "random_047",
    name: "Random Dungeon 047",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#T########",
      "#RR#######",
      "#MR#######",
      "#RT#######",
      "##R#######",
      "#CR#######",
      "#RRR######",
      "#MM#######",
      "##R#######",
      "#MR#######",
      "#MRR######",
      "#R#R######",
      "#R########",
      "#R########",
      "#MR#######",
      "##RTB#####",
      "####S#####",
      "##########"
    ]
  },
  random_048: {
    id: "random_048",
    name: "Random Dungeon 048",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#MR#######",
      "##MRRR####",
      "##RTMT####",
      "##R#RMRRM#",
      "##RC####R#",
      "#######RR#",
      "#######R##",
      "#####RRR##",
      "###MRRRM##",
      "###RMR####",
      "###RRRC###",
      "###RR#####",
      "###RR#####",
      "###RRC####",
      "###RR#####",
      "####B#####",
      "####S#####",
      "##########"
    ]
  },
  random_049: {
    id: "random_049",
    name: "Random Dungeon 049",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#TM#######",
      "##T#######",
      "##R#######",
      "##R#######",
      "#MRR######",
      "#RMR######",
      "#RTR######",
      "#TR#######",
      "#R########",
      "#R########",
      "#R########",
      "#RMR######",
      "#CRRRT####",
      "##RR#R####",
      "####MR####",
      "###BMC####",
      "###S######",
      "##########"
    ]
  },
  random_050: {
    id: "random_050",
    name: "Random Dungeon 050",
    location: "random_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#E########",
      "#RM#######",
      "##R#######",
      "#RM#######",
      "#M########",
      "#R########",
      "#T########",
      "#R########",
      "#RR#######",
      "#RR#######",
      "#R########",
      "#T########",
      "#M########",
      "#MMR######",
      "##R#######",
      "##M#CTR###",
      "##MRRMB###",
      "###RTCS###",
      "##########"
    ]
  }
};

// Browser/global compatibility
if (typeof window !== "undefined") {
  window.MAPS = MAPS;
}

// CommonJS compatibility
if (typeof module !== "undefined") {
  module.exports = MAPS;
}