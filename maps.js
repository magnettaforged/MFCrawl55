// =========================
// MAPS.JS
// Directional 10x20 map pool
//
// Movement design rules:
// - Entrance has one forward path.
// - Main path flows downward toward the shrine.
// - Side paths are horizontal branches only.
// - Side branches are max 2 rooms long.
// - Branch rows are separated so side rooms do not connect upward/downward.
// - This prevents right/right/right or left/left/left chain sections and prevents side paths from traveling back toward the entrance.
// =========================

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
    name: "Directional Dungeon 001",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#####E####",
      "#####R####",
      "####CT####",
      "#####T####",
      "#####R####",
      "###MTR####",
      "#####R####",
      "#####RR###",
      "#####R####",
      "####MM####",
      "#####R####",
      "####CRR###",
      "#####R####",
      "#####M####",
      "#####S####",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_002: {
    id: "random_002",
    name: "Directional Dungeon 002",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#####E####",
      "#####R####",
      "#####M####",
      "#####TC###",
      "#####M####",
      "#####RCR##",
      "#####M####",
      "####CR####",
      "#####T####",
      "####MR####",
      "#####B####",
      "#####S####",
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
    name: "Directional Dungeon 003",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#######E##",
      "#######M##",
      "######CRT#",
      "#######T##",
      "#######M##",
      "#######RR#",
      "#######M##",
      "#####RMRM#",
      "#######R##",
      "#######S##",
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
  random_004: {
    id: "random_004",
    name: "Directional Dungeon 004",
    location: "directional_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "##E#######",
      "##R#######",
      "##M#######",
      "##MRR#####",
      "##M#######",
      "#CR#######",
      "##R#######",
      "##MR######",
      "##R#######",
      "##R#######",
      "##RR######",
      "##R#######",
      "#CT#######",
      "##T#######",
      "##RC######",
      "##R#######",
      "##S#######",
      "##########",
      "##########"
    ]
  },
  random_005: {
    id: "random_005",
    name: "Directional Dungeon 005",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "##E#######",
      "##M#######",
      "#RM#######",
      "##M#######",
      "##MMM#####",
      "##R#######",
      "##RCM#####",
      "##M#######",
      "##B#######",
      "##S#######",
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
  random_006: {
    id: "random_006",
    name: "Directional Dungeon 006",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#######E##",
      "#######M##",
      "#######T##",
      "######MM##",
      "#######T##",
      "#######R##",
      "######RRC#",
      "#######T##",
      "#######M##",
      "#######S##",
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
  random_007: {
    id: "random_007",
    name: "Directional Dungeon 007",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "##E#######",
      "##M#######",
      "#CT#######",
      "##M#######",
      "#TMMC#####",
      "##M#######",
      "#MM#######",
      "##R#######",
      "##MCC#####",
      "##M#######",
      "#RM#######",
      "##R#######",
      "##B#######",
      "##S#######",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_008: {
    id: "random_008",
    name: "Directional Dungeon 008",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "####E#####",
      "####R#####",
      "####M#####",
      "###RM#####",
      "####R#####",
      "###MMC####",
      "####M#####",
      "###RTT####",
      "####M#####",
      "####B#####",
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
  random_009: {
    id: "random_009",
    name: "Directional Dungeon 009",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#######E##",
      "#######T##",
      "######CTM#",
      "#######R##",
      "#######M##",
      "######MR##",
      "#######R##",
      "#######R##",
      "######MR##",
      "#######T##",
      "#######M##",
      "#######S##",
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
    name: "Directional Dungeon 010",
    location: "directional_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "######E###",
      "######R###",
      "#####CRC##",
      "######R###",
      "#####RTR##",
      "######R###",
      "######R###",
      "######R###",
      "######R###",
      "######R###",
      "######R###",
      "######RM##",
      "######R###",
      "######RTT#",
      "######R###",
      "######RCC#",
      "######T###",
      "######S###",
      "##########"
    ]
  },
  random_011: {
    id: "random_011",
    name: "Directional Dungeon 011",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "######E###",
      "######R###",
      "####MCR###",
      "######T###",
      "######TM##",
      "######M###",
      "######M###",
      "####TCT###",
      "######B###",
      "######S###",
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
    name: "Directional Dungeon 012",
    location: "directional_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#######E##",
      "#######R##",
      "#######R##",
      "######CR##",
      "#######R##",
      "#######RM#",
      "#######M##",
      "#######R##",
      "#######R##",
      "#######MC#",
      "#######R##",
      "######CM##",
      "#######M##",
      "#######R##",
      "######RM##",
      "#######B##",
      "#######S##",
      "##########",
      "##########"
    ]
  },
  random_013: {
    id: "random_013",
    name: "Directional Dungeon 013",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "##E#######",
      "##R#######",
      "##RC######",
      "##M#######",
      "##T#######",
      "#RR#######",
      "##R#######",
      "##RCC#####",
      "##M#######",
      "##R#######",
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
  random_014: {
    id: "random_014",
    name: "Directional Dungeon 014",
    location: "directional_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#####E####",
      "#####M####",
      "#####R####",
      "#####R####",
      "#####TM###",
      "#####T####",
      "#####R####",
      "#####R####",
      "####CR####",
      "#####M####",
      "#####R####",
      "#####MCC##",
      "#####M####",
      "###RMRM###",
      "#####R####",
      "###RCM####",
      "#####B####",
      "#####S####",
      "##########"
    ]
  },
  random_015: {
    id: "random_015",
    name: "Directional Dungeon 015",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#######E##",
      "#######R##",
      "#######RM#",
      "#######M##",
      "#######RC#",
      "#######R##",
      "#######M##",
      "#######TC#",
      "#######R##",
      "#######T##",
      "#######M##",
      "######TR##",
      "#######B##",
      "#######S##",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_016: {
    id: "random_016",
    name: "Directional Dungeon 016",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "####E#####",
      "####R#####",
      "###CR#####",
      "####R#####",
      "####RM####",
      "####R#####",
      "####M#####",
      "####TRM###",
      "####M#####",
      "####B#####",
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
  random_017: {
    id: "random_017",
    name: "Directional Dungeon 017",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#######E##",
      "#######M##",
      "#######R##",
      "######MR##",
      "#######R##",
      "#######RC#",
      "#######R##",
      "######MR##",
      "#######T##",
      "#######RT#",
      "#######M##",
      "######MRM#",
      "#######B##",
      "#######S##",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_018: {
    id: "random_018",
    name: "Directional Dungeon 018",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "##E#######",
      "##R#######",
      "#TR#######",
      "##M#######",
      "##RR######",
      "##M#######",
      "##M#######",
      "#RTCC#####",
      "##T#######",
      "##R#######",
      "#RR#######",
      "##R#######",
      "##MCC#####",
      "##B#######",
      "##S#######",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_019: {
    id: "random_019",
    name: "Directional Dungeon 019",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "##E#######",
      "##R#######",
      "#MM#######",
      "##M#######",
      "#CTC######",
      "##R#######",
      "#CR#######",
      "##M#######",
      "##M#######",
      "##R#######",
      "##M#######",
      "#CRRR#####",
      "##T#######",
      "##B#######",
      "##S#######",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_020: {
    id: "random_020",
    name: "Directional Dungeon 020",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "######E###",
      "######M###",
      "#####MR###",
      "######R###",
      "######M###",
      "######RC##",
      "######R###",
      "#####TR###",
      "######M###",
      "######R###",
      "######MM##",
      "######R###",
      "######B###",
      "######S###",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_021: {
    id: "random_021",
    name: "Directional Dungeon 021",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "######E###",
      "######R###",
      "######R###",
      "####MMR###",
      "######R###",
      "######T###",
      "######MT##",
      "######R###",
      "#####CT###",
      "######B###",
      "######S###",
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
  random_022: {
    id: "random_022",
    name: "Directional Dungeon 022",
    location: "directional_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#####E####",
      "#####T####",
      "#####R####",
      "####CTM###",
      "#####R####",
      "#####RR###",
      "#####M####",
      "#####MR###",
      "#####R####",
      "#####RR###",
      "#####R####",
      "#####T####",
      "####CR####",
      "#####R####",
      "#####B####",
      "#####S####",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_023: {
    id: "random_023",
    name: "Directional Dungeon 023",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "######E###",
      "######T###",
      "#####TM###",
      "######M###",
      "######R###",
      "#####CR###",
      "######R###",
      "######TM##",
      "######M###",
      "######B###",
      "######S###",
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
  random_024: {
    id: "random_024",
    name: "Directional Dungeon 024",
    location: "directional_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "##E#######",
      "##R#######",
      "##T#######",
      "##RC######",
      "##T#######",
      "##R#######",
      "##T#######",
      "##MT######",
      "##M#######",
      "#MM#######",
      "##R#######",
      "##TR######",
      "##R#######",
      "#TM#######",
      "##R#######",
      "##B#######",
      "##S#######",
      "##########",
      "##########"
    ]
  },
  random_025: {
    id: "random_025",
    name: "Directional Dungeon 025",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "##E#######",
      "##R#######",
      "#MR#######",
      "##M#######",
      "##RM######",
      "##T#######",
      "#CM#######",
      "##R#######",
      "#RR#######",
      "##M#######",
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
  random_026: {
    id: "random_026",
    name: "Directional Dungeon 026",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "###E######",
      "###R######",
      "###M######",
      "##CM######",
      "###R######",
      "###R######",
      "###MM#####",
      "###M######",
      "###R######",
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
  random_027: {
    id: "random_027",
    name: "Directional Dungeon 027",
    location: "directional_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "###E######",
      "###R######",
      "###MR#####",
      "###R######",
      "###R######",
      "###M######",
      "###T######",
      "###M######",
      "###RCT####",
      "###M######",
      "###M######",
      "###MMC####",
      "###R######",
      "##MMTM####",
      "###R######",
      "###B######",
      "###S######",
      "##########",
      "##########"
    ]
  },
  random_028: {
    id: "random_028",
    name: "Directional Dungeon 028",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "######E###",
      "######R###",
      "######RC##",
      "######R###",
      "#####RT###",
      "######M###",
      "######R###",
      "######MM##",
      "######R###",
      "######S###",
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
    name: "Directional Dungeon 029",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "####E#####",
      "####R#####",
      "####R#####",
      "####RC####",
      "####R#####",
      "##CTR#####",
      "####M#####",
      "####RR####",
      "####R#####",
      "####B#####",
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
  random_030: {
    id: "random_030",
    name: "Directional Dungeon 030",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "##E#######",
      "##M#######",
      "#CR#######",
      "##T#######",
      "##R#######",
      "##RT######",
      "##R#######",
      "##RC######",
      "##R#######",
      "##T#######",
      "##MR######",
      "##R#######",
      "##M#######",
      "##S#######",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_031: {
    id: "random_031",
    name: "Directional Dungeon 031",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "###E######",
      "###M######",
      "#MMR######",
      "###M######",
      "##MRRC####",
      "###R######",
      "##MT######",
      "###M######",
      "###RR#####",
      "###R######",
      "###T######",
      "#CMT######",
      "###B######",
      "###S######",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_032: {
    id: "random_032",
    name: "Directional Dungeon 032",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "###E######",
      "###R######",
      "###RCT####",
      "###T######",
      "###M######",
      "#RTR######",
      "###R######",
      "###R######",
      "###MT#####",
      "###R######",
      "###R######",
      "#RRM######",
      "###M######",
      "###B######",
      "###S######",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_033: {
    id: "random_033",
    name: "Directional Dungeon 033",
    location: "directional_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "####E#####",
      "####R#####",
      "####RC####",
      "####M#####",
      "####RMC###",
      "####T#####",
      "####MMC###",
      "####M#####",
      "####RR####",
      "####R#####",
      "####M#####",
      "###RR#####",
      "####M#####",
      "####R#####",
      "####B#####",
      "####S#####",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_034: {
    id: "random_034",
    name: "Directional Dungeon 034",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "####E#####",
      "####R#####",
      "####R#####",
      "###TMCM###",
      "####M#####",
      "####M#####",
      "###CRM####",
      "####R#####",
      "####T#####",
      "###RM#####",
      "####R#####",
      "####R#####",
      "####MT####",
      "####T#####",
      "####S#####",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_035: {
    id: "random_035",
    name: "Directional Dungeon 035",
    location: "directional_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "####E#####",
      "####R#####",
      "##RRMR####",
      "####R#####",
      "####R#####",
      "####RM####",
      "####T#####",
      "####RC####",
      "####M#####",
      "###MR#####",
      "####R#####",
      "####R#####",
      "##MMM#####",
      "####R#####",
      "####M#####",
      "####M#####",
      "####S#####",
      "##########",
      "##########"
    ]
  },
  random_036: {
    id: "random_036",
    name: "Directional Dungeon 036",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#####E####",
      "#####M####",
      "#####RR###",
      "#####R####",
      "#####R####",
      "####CM####",
      "#####R####",
      "#####TR###",
      "#####R####",
      "####CR####",
      "#####R####",
      "#####R####",
      "#####RMM##",
      "#####R####",
      "#####S####",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_037: {
    id: "random_037",
    name: "Directional Dungeon 037",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "####E#####",
      "####M#####",
      "####M#####",
      "###CR#####",
      "####M#####",
      "####TC####",
      "####M#####",
      "###RRR####",
      "####T#####",
      "####R#####",
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
  random_038: {
    id: "random_038",
    name: "Directional Dungeon 038",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#####E####",
      "#####R####",
      "#####RC###",
      "#####R####",
      "#####TC###",
      "#####R####",
      "####TMMR##",
      "#####M####",
      "#####R####",
      "###MTM####",
      "#####R####",
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
  random_039: {
    id: "random_039",
    name: "Directional Dungeon 039",
    location: "directional_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "##E#######",
      "##R#######",
      "##R#######",
      "##R#######",
      "##M#######",
      "##TMC#####",
      "##R#######",
      "##M#######",
      "##R#######",
      "#CRT######",
      "##M#######",
      "#MRC######",
      "##M#######",
      "##M#######",
      "##RMC#####",
      "##B#######",
      "##S#######",
      "##########",
      "##########"
    ]
  },
  random_040: {
    id: "random_040",
    name: "Directional Dungeon 040",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "##E#######",
      "##R#######",
      "##R#######",
      "#MR#######",
      "##R#######",
      "#RMC######",
      "##R#######",
      "##RRM#####",
      "##B#######",
      "##S#######",
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
  random_041: {
    id: "random_041",
    name: "Directional Dungeon 041",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "####E#####",
      "####R#####",
      "####R#####",
      "####TM####",
      "####R#####",
      "####R#####",
      "##CCM#####",
      "####R#####",
      "####MM####",
      "####M#####",
      "####M#####",
      "####S#####",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_042: {
    id: "random_042",
    name: "Directional Dungeon 042",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "##E#######",
      "##R#######",
      "##M#######",
      "#MMC######",
      "##R#######",
      "##RM######",
      "##T#######",
      "##R#######",
      "#TT#######",
      "##B#######",
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
  random_043: {
    id: "random_043",
    name: "Directional Dungeon 043",
    location: "directional_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#####E####",
      "#####R####",
      "#####R####",
      "#####M####",
      "#####RM###",
      "#####M####",
      "####MRT###",
      "#####R####",
      "#####R####",
      "#####MCC##",
      "#####R####",
      "####CRC###",
      "#####R####",
      "###CTRMC##",
      "#####M####",
      "#####S####",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_044: {
    id: "random_044",
    name: "Directional Dungeon 044",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "######E###",
      "######M###",
      "######R###",
      "####RMT###",
      "######M###",
      "######T###",
      "######RC##",
      "######R###",
      "######RCT#",
      "######R###",
      "######MT##",
      "######T###",
      "######R###",
      "######S###",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_045: {
    id: "random_045",
    name: "Directional Dungeon 045",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "######E###",
      "######T###",
      "#####MTM##",
      "######M###",
      "####CTRR##",
      "######R###",
      "####MRM###",
      "######M###",
      "#####TRR##",
      "######R###",
      "######B###",
      "######S###",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_046: {
    id: "random_046",
    name: "Directional Dungeon 046",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#######E##",
      "#######R##",
      "#######R##",
      "######MMM#",
      "#######M##",
      "######MR##",
      "#######R##",
      "######CMC#",
      "#######R##",
      "#####RCM##",
      "#######B##",
      "#######S##",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_047: {
    id: "random_047",
    name: "Directional Dungeon 047",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "####E#####",
      "####M#####",
      "####R#####",
      "##TMT#####",
      "####M#####",
      "####RRR###",
      "####M#####",
      "####MC####",
      "####B#####",
      "####S#####",
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
  random_048: {
    id: "random_048",
    name: "Directional Dungeon 048",
    location: "directional_pool",
    length: "long",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#####E####",
      "#####T####",
      "#####M####",
      "#####RM###",
      "#####T####",
      "#####R####",
      "###CCMRC##",
      "#####R####",
      "#####MMM##",
      "#####M####",
      "#####MT###",
      "#####M####",
      "###CRR####",
      "#####R####",
      "#####R####",
      "#####S####",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_049: {
    id: "random_049",
    name: "Directional Dungeon 049",
    location: "directional_pool",
    length: "medium",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "#####E####",
      "#####R####",
      "#####RM###",
      "#####R####",
      "###CMMR###",
      "#####R####",
      "#####MRC##",
      "#####M####",
      "####CR####",
      "#####M####",
      "#####R####",
      "#####M####",
      "#####S####",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########"
    ]
  },
  random_050: {
    id: "random_050",
    name: "Directional Dungeon 050",
    location: "directional_pool",
    length: "short",

    monsterPool: "floor_scaled",
    bossPool: "floor_scaled",

    grid: [
      "##########",
      "####E#####",
      "####R#####",
      "####R#####",
      "###MRC####",
      "####R#####",
      "###MMR####",
      "####T#####",
      "####RM####",
      "####T#####",
      "####S#####",
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
  }
};

if (typeof window !== "undefined") window.MAPS = MAPS;