// =========================
// monster.js
// v0.6.0
// Alphabetical grouped monster stats.
// PDEF / resistance compatible.
// =========================

const MONSTERS = {
  "bandit": {
    "monId": "bandit",
    "monName": "Bandit",
    "monsterType": "human",
    "behavior": "basic",
    "level": 3,
    "hp": 60,
    "mp": 0,
    "attack": 9,
    "defense": 3,
    "magicDefense": 1,
    "speed": 14,
    "critChance": 6,
    "dodgeChance": 5,
    "exp": 30,
    "image": "bandit1.png",
    "drops": [
      {
        "type": "gold",
        "min": 6,
        "max": 18,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "bandit1.png",
      "bandit2.png"
    ],
    "pdef": 3,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "bats": {
    "monId": "bats",
    "monName": "Bat Swarm",
    "monsterType": "swarm",
    "behavior": "swarm",
    "level": 2,
    "hp": 40,
    "mp": 0,
    "attack": 4,
    "defense": 1,
    "magicDefense": 1,
    "speed": 28,
    "critChance": 2,
    "dodgeChance": 18,
    "exp": 18,
    "image": "bats1.png",
    "swarm": {
      "extraAttackChance": 35,
      "maxExtraAttacks": 2
    },
    "drops": [
      {
        "type": "gold",
        "min": 4,
        "max": 12,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "bats1.png",
      "bats2.png"
    ],
    "pdef": 1,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "bcrab": {
    "monId": "bcrab",
    "monName": "Armored Crab",
    "monsterType": "boss",
    "behavior": "boss",
    "level": 10,
    "hp": 430,
    "mp": 0,
    "attack": 32,
    "defense": 22,
    "magicDefense": 8,
    "speed": 7,
    "critChance": 5,
    "dodgeChance": 0,
    "exp": 420,
    "image": "bcrab1.png",
    "drops": [
      {
        "type": "gold",
        "min": 20,
        "max": 60,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 12
      }
    ],
    "images": [
      "bcrab1.png",
      "bcrab2.png"
    ],
    "pdef": 22,
    "fireRes": 2,
    "iceRes": 2,
    "shockRes": 2,
    "darkRes": 2
  },
  "bdragon": {
    "monId": "bdragon",
    "monName": "Young Dragon",
    "monsterType": "boss",
    "behavior": "boss",
    "level": 16,
    "hp": 680,
    "mp": 120,
    "attack": 41,
    "defense": 24,
    "magicDefense": 24,
    "speed": 14,
    "critChance": 8,
    "dodgeChance": 4,
    "exp": 980,
    "image": "bdragon1.png",
    "fireResist": 50,
    "iceWeakness": 15,
    "spell": {
      "element": "fire",
      "chance": 40,
      "damage": 42
    },
    "drops": [
      {
        "type": "gold",
        "min": 32,
        "max": 96,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 12
      }
    ],
    "images": [
      "bdragon1.png",
      "bdragon2.png"
    ],
    "pdef": 24,
    "fireRes": 50,
    "iceRes": -15.0,
    "shockRes": 6,
    "darkRes": 6
  },
  "bgoblin": {
    "monId": "bgoblin",
    "monName": "Goblin Brute",
    "monsterType": "goblin",
    "behavior": "aggressive",
    "level": 7,
    "hp": 145,
    "mp": 0,
    "attack": 22,
    "defense": 8,
    "magicDefense": 3,
    "speed": 13,
    "critChance": 7,
    "dodgeChance": 4,
    "exp": 118,
    "image": "bgoblin1.png",
    "drops": [
      {
        "type": "gold",
        "min": 14,
        "max": 42,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "bgoblin1.png",
      "bgoblin2.png"
    ],
    "pdef": 8,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "bkraken": {
    "monId": "bkraken",
    "monName": "Kraken Spawn",
    "monsterType": "boss",
    "behavior": "boss",
    "level": 14,
    "hp": 630,
    "mp": 80,
    "attack": 36,
    "defense": 18,
    "magicDefense": 20,
    "speed": 12,
    "critChance": 7,
    "dodgeChance": 6,
    "exp": 740,
    "image": "bkraken1.png",
    "spell": {
      "element": "water",
      "chance": 35,
      "damage": 35
    },
    "drops": [
      {
        "type": "gold",
        "min": 28,
        "max": 84,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 12
      }
    ],
    "images": [
      "bkraken1.png",
      "bkraken2.png"
    ],
    "pdef": 18,
    "fireRes": 5,
    "iceRes": 5,
    "shockRes": 5,
    "darkRes": 5
  },
  "borc": {
    "monId": "borc",
    "monName": "Orc Warlord",
    "monsterType": "boss",
    "behavior": "boss",
    "level": 12,
    "hp": 399,
    "mp": 20,
    "attack": 33,
    "defense": 18,
    "magicDefense": 10,
    "speed": 12,
    "critChance": 9,
    "dodgeChance": 3,
    "exp": 420,
    "image": "borc1.png",
    "drops": [
      {
        "type": "gold",
        "min": 90,
        "max": 170,
        "chance": 100
      },
      {
        "type": "item",
        "id": "orc_tusk",
        "name": "Orc Tusk",
        "chance": 100
      },
      {
        "type": "item",
        "id": "iron_ring",
        "name": "Iron Ring",
        "chance": 20
      }
    ],
    "normalAtDifficulty": 5,
    "images": [
      "borc1.png",
      "borc2.png"
    ],
    "pdef": 18,
    "fireRes": 2,
    "iceRes": 2,
    "shockRes": 2,
    "darkRes": 2
  },
  "bpirate": {
    "monId": "bpirate",
    "monName": "Pistol Pirate",
    "monsterType": "boss",
    "behavior": "boss",
    "level": 6,
    "hp": 100,
    "mp": 0,
    "attack": 20,
    "defense": 4,
    "magicDefense": 3,
    "speed": 15,
    "critChance": 10,
    "dodgeChance": 6,
    "exp": 92,
    "image": "bpirate1.png",
    "ranged": {
      "chance": 35,
      "damage": 20
    },
    "drops": [
      {
        "type": "gold",
        "min": 12,
        "max": 36,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "bpirate1.png",
      "bpirate2.png"
    ],
    "pdef": 4,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "bpirate_b": {
    "monId": "bpirate_b",
    "monName": "Boarding Pirate",
    "monsterType": "boss",
    "behavior": "boss",
    "level": 9,
    "hp": 178,
    "mp": 0,
    "attack": 29,
    "defense": 8,
    "magicDefense": 5,
    "speed": 17,
    "critChance": 10,
    "dodgeChance": 7,
    "exp": 190,
    "image": "bpirate3.png",
    "drops": [
      {
        "type": "gold",
        "min": 18,
        "max": 54,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 12
      }
    ],
    "images": [
      "bpirate3.png",
      "bpirate4.png"
    ],
    "pdef": 8,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1
  },
  "captain": {
    "monId": "captain",
    "monName": "Skeleton Captain",
    "monsterType": "boss",
    "behavior": "boss",
    "level": 5,
    "hp": 180,
    "mp": 10,
    "attack": 15,
    "defense": 6,
    "magicDefense": 4,
    "speed": 12,
    "critChance": 5,
    "dodgeChance": 3,
    "exp": 125,
    "image": "captain1.png",
    "holyWeakness": 10,
    "drops": [
      {
        "type": "gold",
        "min": 10,
        "max": 30,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "captain1.png",
      "captain2.png"
    ],
    "pdef": 6,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1
  },
  "crab": {
    "monId": "crab",
    "monName": "Cave Crab",
    "monsterType": "beast",
    "behavior": "guard",
    "level": 4,
    "hp": 88,
    "mp": 0,
    "attack": 11,
    "defense": 8,
    "magicDefense": 2,
    "speed": 7,
    "critChance": 3,
    "dodgeChance": 1,
    "exp": 48,
    "image": "crab1.png",
    "drops": [
      {
        "type": "gold",
        "min": 8,
        "max": 24,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "crab1.png",
      "crab2.png"
    ],
    "pdef": 8,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "fbandit": {
    "monId": "fbandit",
    "monName": "Bandit Rogue",
    "monsterType": "human",
    "behavior": "aggressive",
    "level": 3,
    "hp": 56,
    "mp": 0,
    "attack": 10,
    "defense": 2,
    "magicDefense": 1,
    "speed": 17,
    "critChance": 8,
    "dodgeChance": 8,
    "exp": 32,
    "image": "fbandit1.png",
    "drops": [
      {
        "type": "gold",
        "min": 6,
        "max": 18,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "fbandit1.png",
      "fbandit2.png"
    ],
    "pdef": 2,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "fbandit_b": {
    "monId": "fbandit_b",
    "monName": "Bandit Duelist",
    "monsterType": "human",
    "behavior": "aggressive",
    "level": 7,
    "hp": 122,
    "mp": 0,
    "attack": 21,
    "defense": 6,
    "magicDefense": 3,
    "speed": 22,
    "critChance": 12,
    "dodgeChance": 10,
    "exp": 112,
    "image": "fbandit3.png",
    "drops": [
      {
        "type": "gold",
        "min": 14,
        "max": 42,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "fbandit3.png",
      "fbandit4.png"
    ],
    "pdef": 6,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "fbandit_c": {
    "monId": "fbandit_c",
    "monName": "Bandit Ambusher",
    "monsterType": "human",
    "behavior": "aggressive",
    "level": 9,
    "hp": 178,
    "mp": 0,
    "attack": 22,
    "defense": 8,
    "magicDefense": 5,
    "speed": 24,
    "critChance": 14,
    "dodgeChance": 12,
    "exp": 190,
    "image": "fbandit5.png",
    "drops": [
      {
        "type": "gold",
        "min": 14,
        "max": 42,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "fbandit5.png",
      "fbandit6.png"
    ],
    "pdef": 8,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1
  },
  "fpirate": {
    "monId": "fpirate",
    "monName": "Pirate Raider",
    "monsterType": "human",
    "behavior": "aggressive",
    "level": 4,
    "hp": 72,
    "mp": 0,
    "attack": 14,
    "defense": 3,
    "magicDefense": 2,
    "speed": 16,
    "critChance": 8,
    "dodgeChance": 7,
    "exp": 50,
    "image": "fpirate1.png",
    "drops": [
      {
        "type": "gold",
        "min": 8,
        "max": 24,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "fpirate1.png",
      "fpirate2.png"
    ],
    "pdef": 3,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "fpirate_b": {
    "monId": "fpirate_b",
    "monName": "Corsair Duelist",
    "monsterType": "human",
    "behavior": "aggressive",
    "level": 8,
    "hp": 150,
    "mp": 0,
    "attack": 25,
    "defense": 7,
    "magicDefense": 4,
    "speed": 20,
    "critChance": 11,
    "dodgeChance": 9,
    "exp": 145,
    "image": "fpirate3.png",
    "drops": [
      {
        "type": "gold",
        "min": 16,
        "max": 48,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 12
      }
    ],
    "images": [
      "fpirate3.png",
      "fpirate4.png"
    ],
    "pdef": 7,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1
  },
  "goblin": {
    "monId": "goblin",
    "monName": "Goblin Raider",
    "monsterType": "goblin",
    "behavior": "aggressive",
    "level": 3,
    "hp": 58,
    "mp": 0,
    "attack": 10,
    "defense": 3,
    "magicDefense": 1,
    "speed": 16,
    "critChance": 6,
    "dodgeChance": 8,
    "exp": 34,
    "image": "goblin1.png",
    "drops": [
      {
        "type": "gold",
        "min": 6,
        "max": 18,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "goblin1.png",
      "goblin2.png"
    ],
    "pdef": 3,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "multicrab": {
    "monId": "multicrab",
    "monName": "Crab Pack",
    "monsterType": "swarm",
    "behavior": "swarm",
    "level": 6,
    "hp": 125,
    "mp": 0,
    "attack": 13,
    "defense": 7,
    "magicDefense": 3,
    "speed": 12,
    "critChance": 4,
    "dodgeChance": 5,
    "exp": 95,
    "image": "multicrab1.png",
    "swarm": {
      "extraAttackChance": 30,
      "maxExtraAttacks": 2
    },
    "drops": [
      {
        "type": "gold",
        "min": 12,
        "max": 36,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "multicrab1.png",
      "multicrab2.png"
    ],
    "pdef": 7,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "mushroom": {
    "monId": "mushroom",
    "monName": "Angry Mushroom",
    "monsterType": "plant",
    "behavior": "poison",
    "level": 4,
    "hp": 92,
    "mp": 0,
    "attack": 11,
    "defense": 5,
    "magicDefense": 6,
    "speed": 7,
    "critChance": 2,
    "dodgeChance": 1,
    "exp": 46,
    "image": "mushroom1.png",
    "poison": {
      "chance": 12,
      "damage": 3,
      "duration": 3
    },
    "drops": [
      {
        "type": "gold",
        "min": 8,
        "max": 24,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "mushroom1.png",
      "mushroom2.png"
    ],
    "pdef": 5,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1
  },
  "mzombie": {
    "monId": "mzombie",
    "monName": "Male Zombie",
    "monsterType": "undead",
    "behavior": "slow",
    "level": 2,
    "hp": 72,
    "mp": 0,
    "attack": 9,
    "defense": 2,
    "magicDefense": 1,
    "speed": 5,
    "critChance": 1,
    "dodgeChance": 0,
    "exp": 24,
    "image": "mzombie1.png",
    "holyWeakness": 10,
    "fireWeakness": 10,
    "drops": [
      {
        "type": "gold",
        "min": 4,
        "max": 12,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "mzombie1.png",
      "mzombie2.png"
    ],
    "pdef": 2,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "mzombie_b": {
    "monId": "mzombie_b",
    "monName": "Bloated Zombie",
    "monsterType": "undead",
    "behavior": "poison",
    "level": 7,
    "hp": 168,
    "mp": 0,
    "attack": 19,
    "defense": 7,
    "magicDefense": 4,
    "speed": 5,
    "critChance": 3,
    "dodgeChance": 0,
    "exp": 104,
    "image": "mzombie3.png",
    "holyWeakness": 10,
    "fireWeakness": 10,
    "poison": {
      "chance": 15,
      "damage": 4,
      "duration": 3
    },
    "drops": [
      {
        "type": "gold",
        "min": 14,
        "max": 42,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "mzombie3.png",
      "mzombie4.png"
    ],
    "pdef": 7,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1
  },
  "octopus": {
    "monId": "octopus",
    "monName": "Cave Octopus",
    "monsterType": "beast",
    "behavior": "basic",
    "level": 5,
    "hp": 105,
    "mp": 0,
    "attack": 13,
    "defense": 5,
    "magicDefense": 7,
    "speed": 12,
    "critChance": 4,
    "dodgeChance": 6,
    "exp": 68,
    "image": "octopus1.png",
    "drops": [
      {
        "type": "gold",
        "min": 10,
        "max": 30,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "octopus1.png",
      "octopus2.png"
    ],
    "pdef": 5,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1
  },
  "orc": {
    "monId": "orc",
    "monName": "Orc Grunt",
    "monsterType": "orc",
    "behavior": "aggressive",
    "level": 7,
    "hp": 170,
    "mp": 0,
    "attack": 24,
    "defense": 9,
    "magicDefense": 4,
    "speed": 11,
    "critChance": 7,
    "dodgeChance": 2,
    "exp": 130,
    "image": "orc1.png",
    "drops": [
      {
        "type": "gold",
        "min": 14,
        "max": 42,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "orc1.png",
      "orc2.png"
    ],
    "pdef": 9,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1
  },
  "rat": {
    "monId": "rat",
    "monName": "Giant Rat",
    "monsterType": "beast",
    "behavior": "aggressive",
    "level": 1,
    "hp": 35,
    "mp": 0,
    "attack": 6,
    "defense": 1,
    "magicDefense": 0,
    "speed": 14,
    "critChance": 3,
    "dodgeChance": 8,
    "exp": 12,
    "image": "rat1.png",
    "drops": [
      {
        "type": "gold",
        "min": 2,
        "max": 6,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "rat1.png",
      "rat2.png"
    ],
    "pdef": 1,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "skelemage": {
    "monId": "skelemage",
    "monName": "Skeleton Mage",
    "monsterType": "boss",
    "behavior": "bossCaster",
    "level": 5,
    "hp": 72,
    "mp": 36,
    "attack": 7,
    "defense": 3,
    "magicDefense": 8,
    "speed": 12,
    "critChance": 2,
    "dodgeChance": 4,
    "exp": 68,
    "image": "skelemage1.png",
    "holyWeakness": 10,
    "spell": {
      "element": "arcane",
      "chance": 35,
      "damage": 14
    },
    "drops": [
      {
        "type": "gold",
        "min": 10,
        "max": 30,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "skelemage1.png",
      "skelemage2.png"
    ],
    "pdef": 3,
    "fireRes": 2,
    "iceRes": 2,
    "shockRes": 2,
    "darkRes": 2
  },
  "skelemage_b": {
    "monId": "skelemage_b",
    "monName": "Bone Warlock",
    "monsterType": "boss",
    "behavior": "bossCaster",
    "level": 11,
    "hp": 320,
    "mp": 120,
    "attack": 20,
    "defense": 10,
    "magicDefense": 22,
    "speed": 15,
    "critChance": 5,
    "dodgeChance": 5,
    "exp": 340,
    "image": "skelemage3.png",
    "holyWeakness": 15,
    "spell": {
      "element": "arcane",
      "chance": 50,
      "damage": 42
    },
    "drops": [
      {
        "type": "gold",
        "min": 22,
        "max": 66,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 12
      }
    ],
    "images": [
      "skelemage3.png",
      "skelemage4.png"
    ],
    "pdef": 10,
    "fireRes": 5,
    "iceRes": 5,
    "shockRes": 5,
    "darkRes": 5
  },
  "skeleswsh": {
    "monId": "skeleswsh",
    "monName": "Skeleton Guard",
    "monsterType": "undead",
    "behavior": "guard",
    "level": 4,
    "hp": 90,
    "mp": 0,
    "attack": 12,
    "defense": 8,
    "magicDefense": 3,
    "speed": 8,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 54,
    "image": "skeleswsh1.png",
    "holyWeakness": 10,
    "drops": [
      {
        "type": "gold",
        "min": 8,
        "max": 24,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "skeleswsh1.png",
      "skeleswsh2.png"
    ],
    "pdef": 8,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "skeleton": {
    "monId": "skeleton",
    "monName": "Skeleton",
    "monsterType": "undead",
    "behavior": "basic",
    "level": 2,
    "hp": 52,
    "mp": 0,
    "attack": 8,
    "defense": 3,
    "magicDefense": 1,
    "speed": 8,
    "critChance": 2,
    "dodgeChance": 2,
    "exp": 20,
    "image": "skeleton1.png",
    "holyWeakness": 10,
    "drops": [
      {
        "type": "gold",
        "min": 4,
        "max": 12,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "skeleton1.png",
      "skeleton2.png"
    ],
    "pdef": 3,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "skeleton_b": {
    "monId": "skeleton_b",
    "monName": "Crypt Skeleton",
    "monsterType": "undead",
    "behavior": "basic",
    "level": 4,
    "hp": 78,
    "mp": 0,
    "attack": 13,
    "defense": 5,
    "magicDefense": 3,
    "speed": 11,
    "critChance": 4,
    "dodgeChance": 3,
    "exp": 42,
    "image": "skeleton3.png",
    "holyWeakness": 10,
    "drops": [
      {
        "type": "gold",
        "min": 8,
        "max": 24,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "skeleton3.png",
      "skeleton4.png"
    ],
    "pdef": 5,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "spider": {
    "monId": "spider",
    "monName": "Dungeon Spider",
    "monsterType": "insect",
    "behavior": "poison",
    "level": 3,
    "hp": 48,
    "mp": 0,
    "attack": 7,
    "defense": 2,
    "magicDefense": 2,
    "speed": 16,
    "critChance": 4,
    "dodgeChance": 8,
    "exp": 24,
    "image": "spider1.png",
    "poison": {
      "chance": 18,
      "damage": 3,
      "duration": 3
    },
    "drops": [
      {
        "type": "gold",
        "min": 6,
        "max": 18,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "spider1.png",
      "spider2.png"
    ],
    "pdef": 2,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "spider_b": {
    "monId": "spider_b",
    "monName": "Venom Spider",
    "monsterType": "insect",
    "behavior": "poison",
    "level": 7,
    "hp": 112,
    "mp": 0,
    "attack": 16,
    "defense": 6,
    "magicDefense": 5,
    "speed": 18,
    "critChance": 5,
    "dodgeChance": 9,
    "exp": 100,
    "image": "spider3.png",
    "poison": {
      "chance": 28,
      "damage": 6,
      "duration": 4
    },
    "drops": [
      {
        "type": "gold",
        "min": 14,
        "max": 42,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "spider3.png",
      "spider4.png"
    ],
    "pdef": 6,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1
  },
  "squid": {
    "monId": "squid",
    "monName": "Cave Squid",
    "monsterType": "beast",
    "behavior": "basic",
    "level": 5,
    "hp": 92,
    "mp": 0,
    "attack": 14,
    "defense": 4,
    "magicDefense": 6,
    "speed": 15,
    "critChance": 5,
    "dodgeChance": 8,
    "exp": 66,
    "image": "squid1.png",
    "drops": [
      {
        "type": "gold",
        "min": 10,
        "max": 30,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "squid1.png",
      "squid2.png"
    ],
    "pdef": 4,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1
  },
  "wolf": {
    "monId": "wolf",
    "monName": "Forest Wolf",
    "monsterType": "beast",
    "behavior": "aggressive",
    "level": 4,
    "hp": 72,
    "mp": 0,
    "attack": 12,
    "defense": 3,
    "magicDefense": 1,
    "speed": 22,
    "critChance": 7,
    "dodgeChance": 10,
    "exp": 42,
    "image": "wolf1.png",
    "drops": [
      {
        "type": "gold",
        "min": 8,
        "max": 24,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 8
      }
    ],
    "images": [
      "wolf1.png",
      "wolf2.png"
    ],
    "pdef": 3,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "wraith": {
    "monId": "wraith",
    "monName": "Wraith",
    "monsterType": "undead",
    "behavior": "caster",
    "level": 8,
    "hp": 125,
    "mp": 50,
    "attack": 15,
    "defense": 4,
    "magicDefense": 14,
    "speed": 20,
    "critChance": 5,
    "dodgeChance": 14,
    "exp": 135,
    "image": "wraith1.png",
    "holyWeakness": 20,
    "darkResist": 40,
    "spell": {
      "element": "dark",
      "chance": 35,
      "damage": 24
    },
    "drops": [
      {
        "type": "gold",
        "min": 16,
        "max": 48,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 12
      }
    ],
    "images": [
      "wraith1.png",
      "wraith2.png"
    ],
    "pdef": 4,
    "fireRes": 3,
    "iceRes": 3,
    "shockRes": 3,
    "darkRes": 3
  },
  "wraith_b": {
    "monId": "wraith_b",
    "monName": "Wraith Lord",
    "monsterType": "boss",
    "behavior": "bossCaster",
    "level": 13,
    "hp": 390,
    "mp": 150,
    "attack": 30,
    "defense": 9,
    "magicDefense": 28,
    "speed": 24,
    "critChance": 8,
    "dodgeChance": 18,
    "exp": 500,
    "image": "wraith3.png",
    "holyWeakness": 25,
    "darkResist": 60,
    "spell": {
      "element": "dark",
      "chance": 55,
      "damage": 54
    },
    "drops": [
      {
        "type": "gold",
        "min": 26,
        "max": 78,
        "chance": 70
      },
      {
        "type": "item",
        "id": "potion",
        "name": "Potion",
        "chance": 12
      }
    ],
    "images": [
      "wraith3.png",
      "wraith4.png"
    ],
    "pdef": 9,
    "fireRes": 7,
    "iceRes": 7,
    "shockRes": 7,
    "darkRes": 7
  }
};
