// =========================
// monster.js
// v0.9.0 monster family action-pool rework
// =========================

const MONSTERS = {
  "bandit": {
    "monId": "bandit",
    "monName": "Bandit",
    "monsterType": "humanoid",
    "behavior": "action_pool",
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
    "image": "bandit1.webp",
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
      },
      {
        "type": "item",
        "id": "coinpurse",
        "name": "Coin Purse",
        "chance": 15,
        "minQty": 1,
        "maxQty": 1
      }
    ],
    "images": [
      "bandit1.webp",
      "bandit2.webp"
    ],
    "pdef": 3,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "quick_strike",
        "name": "Quick Strike",
        "type": "physical",
        "power": 0.9,
        "weight": 55,
        "rarity": "normal"
      },
      {
        "id": "poison_dart",
        "name": "Poison Dart",
        "type": "physical",
        "power": 0.55,
        "weight": 22,
        "rarity": "magical",
        "poisonChance": 45,
        "poisonDamagePerTick": 4
      },
      {
        "id": "quickness",
        "name": "Quickness",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 18,
        "turns": 3,
        "weight": 16,
        "rarity": "rare"
      },
      {
        "id": "backstab",
        "name": "Backstab",
        "type": "physical",
        "power": 1.15,
        "critBonus": 35,
        "weight": 16,
        "rarity": "epic"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "potion",
        "name": "Potion",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 40,
        "weight": 28,
        "rarity": "magical"
      }
    ]
  },
  "bats": {
    "monId": "bats",
    "monName": "Bat Swarm",
    "monsterType": "swarm",
    "behavior": "action_pool",
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
    "image": "bats1.webp",
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
      "bats1.webp",
      "bats2.webp"
    ],
    "pdef": 1,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "swarm_bite",
        "name": "Swarm Bite",
        "type": "physical",
        "power": 0.75,
        "weight": 70,
        "rarity": "normal"
      },
      {
        "id": "frenzy",
        "name": "Frenzy",
        "type": "physical",
        "power": 0.45,
        "hits": 3,
        "weight": 25,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "bcrab": {
    "monId": "bcrab",
    "monName": "Armored Crab",
    "monsterType": "boss",
    "behavior": "action_pool",
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
    "image": "bcrab1.webp",
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
      },
      {
        "type": "item",
        "id": "seafood",
        "name": "Seafood",
        "chance": 100,
        "minQty": 3,
        "maxQty": 7
      }
    ],
    "images": [
      "bcrab1.webp",
      "bcrab2.webp"
    ],
    "pdef": 22,
    "fireRes": 2,
    "iceRes": 2,
    "shockRes": 2,
    "darkRes": 2,
    "actions": [
      {
        "id": "claw",
        "name": "Claw",
        "type": "physical",
        "power": 1,
        "weight": 62,
        "rarity": "normal"
      },
      {
        "id": "crush",
        "name": "Crushing Claw",
        "type": "physical",
        "power": 1.35,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "bdragon": {
    "monId": "bdragon",
    "monName": "Young Dragon",
    "monsterType": "boss",
    "behavior": "action_pool",
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
    "image": "bdragon1.webp",
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
      },
      {
        "type": "item",
        "id": "exoticmeat",
        "name": "Exotic Meat",
        "chance": 100,
        "minQty": 3,
        "maxQty": 6
      }
    ],
    "images": [
      "bdragon1.webp",
      "bdragon2.webp"
    ],
    "pdef": 24,
    "fireRes": 50,
    "iceRes": -15,
    "shockRes": 6,
    "darkRes": 6,
    "actions": [
      {
        "id": "claw",
        "name": "Claw",
        "type": "physical",
        "power": 1,
        "weight": 48,
        "rarity": "normal"
      },
      {
        "id": "fire_breath",
        "name": "Fire Breath",
        "type": "magic",
        "element": "fire",
        "power": 1.5,
        "weight": 28,
        "rarity": "normal"
      },
      {
        "id": "tail_slam",
        "name": "Tail Slam",
        "type": "physical",
        "power": 1.4,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "bgoblin": {
    "monId": "bgoblin",
    "monName": "Goblin Brute",
    "monsterType": "humanoid",
    "behavior": "action_pool",
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
    "image": "bgoblin1.webp",
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
      },
      {
        "type": "item",
        "id": "coinpurse",
        "name": "Coin Purse",
        "chance": 25,
        "minQty": 1,
        "maxQty": 2
      }
    ],
    "images": [
      "bgoblin1.webp",
      "bgoblin2.webp"
    ],
    "pdef": 8,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "stab",
        "name": "Stab",
        "type": "physical",
        "power": 0.9,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "quickness",
        "name": "Quickness",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 12,
        "turns": 3,
        "weight": 14,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "potion",
        "name": "Potion",
        "type": "heal",
        "healPct": 20,
        "maxUses": 1,
        "hpBelowPct": 35,
        "weight": 22,
        "rarity": "rare"
      }
    ]
  },
  "bkraken": {
    "monId": "bkraken",
    "monName": "Kraken Spawn",
    "monsterType": "boss",
    "behavior": "action_pool",
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
    "image": "bkraken1.webp",
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
      },
      {
        "type": "item",
        "id": "seafood",
        "name": "Seafood",
        "chance": 100,
        "minQty": 4,
        "maxQty": 9
      }
    ],
    "images": [
      "bkraken1.webp",
      "bkraken2.webp"
    ],
    "pdef": 18,
    "fireRes": 5,
    "iceRes": 5,
    "shockRes": 5,
    "darkRes": 5,
    "actions": [
      {
        "id": "tentacle",
        "name": "Tentacle",
        "type": "physical",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "ink_lash",
        "name": "Ink Lash",
        "type": "physical",
        "power": 1.2,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "entangle",
        "name": "Entangle",
        "type": "charm",
        "charmChance": 30,
        "weight": 16,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "borc": {
    "monId": "borc",
    "monName": "Orc Warlord",
    "monsterType": "humanoid",
    "behavior": "action_pool",
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
    "image": "borc1.webp",
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
      },
      {
        "type": "item",
        "id": "orc_tusk",
        "name": "Orc Tusk",
        "chance": 100,
        "minQty": 2,
        "maxQty": 5
      }
    ],
    "normalAtDifficulty": 5,
    "images": [
      "borc1.webp",
      "borc2.webp"
    ],
    "pdef": 18,
    "fireRes": 2,
    "iceRes": 2,
    "shockRes": 2,
    "darkRes": 2,
    "actions": [
      {
        "id": "cleave",
        "name": "Cleave",
        "type": "physical",
        "power": 1.05,
        "weight": 62,
        "rarity": "normal"
      },
      {
        "id": "heavy_smash",
        "name": "Heavy Smash",
        "type": "physical",
        "power": 1.45,
        "weight": 18,
        "rarity": "magical"
      },
      {
        "id": "war_cry",
        "name": "War Cry",
        "type": "buff",
        "buff": "attack",
        "attackBonusPct": 25,
        "turns": 3,
        "weight": 15,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "potion",
        "name": "Potion",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 35,
        "weight": 20,
        "rarity": "epic"
      }
    ]
  },
  "bpirate": {
    "monId": "bpirate",
    "monName": "Pistol Pirate",
    "monsterType": "humanoid",
    "behavior": "action_pool",
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
    "image": "bpirate1.webp",
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
      },
      {
        "type": "item",
        "id": "coinpurse",
        "name": "Coin Purse",
        "chance": 100,
        "minQty": 2,
        "maxQty": 5
      }
    ],
    "images": [
      "bpirate1.webp",
      "bpirate2.webp"
    ],
    "pdef": 4,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "cutlass_slash",
        "name": "Cutlass Slash",
        "type": "physical",
        "power": 1,
        "weight": 55,
        "rarity": "normal"
      },
      {
        "id": "pistol_shot",
        "name": "Pistol Shot",
        "type": "physical",
        "power": 1.15,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "drink_rum",
        "name": "Drink Rum",
        "type": "heal",
        "healPct": 28,
        "maxUses": 1,
        "hpBelowPct": 45,
        "weight": 30,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "bpirate_b": {
    "monId": "bpirate_b",
    "monName": "Boarding Pirate",
    "monsterType": "humanoid",
    "behavior": "action_pool",
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
    "image": "bpirate3.webp",
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
      },
      {
        "type": "item",
        "id": "coinpurse",
        "name": "Coin Purse",
        "chance": 100,
        "minQty": 2,
        "maxQty": 5
      }
    ],
    "images": [
      "bpirate3.webp",
      "bpirate4.webp"
    ],
    "pdef": 8,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1,
    "actions": [
      {
        "id": "cutlass_slash",
        "name": "Cutlass Slash",
        "type": "physical",
        "power": 1,
        "weight": 55,
        "rarity": "normal"
      },
      {
        "id": "pistol_shot",
        "name": "Pistol Shot",
        "type": "physical",
        "power": 1.15,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "drink_rum",
        "name": "Drink Rum",
        "type": "heal",
        "healPct": 28,
        "maxUses": 1,
        "hpBelowPct": 45,
        "weight": 30,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "captain": {
    "monId": "captain",
    "monName": "Skeleton Captain",
    "monsterType": "humanoid",
    "behavior": "action_pool",
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
    "image": "captain1.webp",
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
      "captain1.webp",
      "captain2.webp"
    ],
    "pdef": 6,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1,
    "actions": [
      {
        "id": "quick_strike",
        "name": "Quick Strike",
        "type": "physical",
        "power": 0.9,
        "weight": 55,
        "rarity": "normal"
      },
      {
        "id": "poison_dart",
        "name": "Poison Dart",
        "type": "physical",
        "power": 0.55,
        "weight": 22,
        "rarity": "magical",
        "poisonChance": 45,
        "poisonDamagePerTick": 4
      },
      {
        "id": "quickness",
        "name": "Quickness",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 18,
        "turns": 3,
        "weight": 16,
        "rarity": "rare"
      },
      {
        "id": "backstab",
        "name": "Backstab",
        "type": "physical",
        "power": 1.15,
        "critBonus": 35,
        "weight": 16,
        "rarity": "epic"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "potion",
        "name": "Potion",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 40,
        "weight": 28,
        "rarity": "magical"
      }
    ]
  },
  "crab": {
    "monId": "crab",
    "monName": "Cave Crab",
    "monsterType": "beast",
    "behavior": "action_pool",
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
    "image": "crab1.webp",
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
      },
      {
        "type": "item",
        "id": "seafood",
        "name": "Seafood",
        "chance": 28,
        "minQty": 1,
        "maxQty": 1
      }
    ],
    "images": [
      "crab1.webp",
      "crab2.webp"
    ],
    "pdef": 8,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "claw",
        "name": "Claw",
        "type": "physical",
        "power": 1,
        "weight": 62,
        "rarity": "normal"
      },
      {
        "id": "crush",
        "name": "Crushing Claw",
        "type": "physical",
        "power": 1.35,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "fbandit": {
    "monId": "fbandit",
    "monName": "Bandit Rogue",
    "monsterType": "humanoid",
    "behavior": "action_pool",
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
    "image": "fbandit1.webp",
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
      },
      {
        "type": "item",
        "id": "coinpurse",
        "name": "Coin Purse",
        "chance": 18,
        "minQty": 1,
        "maxQty": 1
      }
    ],
    "images": [
      "fbandit1.webp",
      "fbandit2.webp"
    ],
    "pdef": 2,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "quick_strike",
        "name": "Quick Strike",
        "type": "physical",
        "power": 0.9,
        "weight": 55,
        "rarity": "normal"
      },
      {
        "id": "poison_dart",
        "name": "Poison Dart",
        "type": "physical",
        "power": 0.55,
        "weight": 22,
        "rarity": "magical",
        "poisonChance": 45,
        "poisonDamagePerTick": 4
      },
      {
        "id": "quickness",
        "name": "Quickness",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 18,
        "turns": 3,
        "weight": 16,
        "rarity": "rare"
      },
      {
        "id": "backstab",
        "name": "Backstab",
        "type": "physical",
        "power": 1.15,
        "critBonus": 35,
        "weight": 16,
        "rarity": "epic"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "potion",
        "name": "Potion",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 40,
        "weight": 28,
        "rarity": "magical"
      }
    ]
  },
  "fbandit_b": {
    "monId": "fbandit_b",
    "monName": "Bandit Duelist",
    "monsterType": "humanoid",
    "behavior": "action_pool",
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
    "image": "fbandit3.webp",
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
      },
      {
        "type": "item",
        "id": "coinpurse",
        "name": "Coin Purse",
        "chance": 18,
        "minQty": 1,
        "maxQty": 1
      }
    ],
    "images": [
      "fbandit3.webp",
      "fbandit4.webp"
    ],
    "pdef": 6,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "quick_strike",
        "name": "Quick Strike",
        "type": "physical",
        "power": 0.9,
        "weight": 55,
        "rarity": "normal"
      },
      {
        "id": "poison_dart",
        "name": "Poison Dart",
        "type": "physical",
        "power": 0.55,
        "weight": 22,
        "rarity": "magical",
        "poisonChance": 45,
        "poisonDamagePerTick": 4
      },
      {
        "id": "quickness",
        "name": "Quickness",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 18,
        "turns": 3,
        "weight": 16,
        "rarity": "rare"
      },
      {
        "id": "backstab",
        "name": "Backstab",
        "type": "physical",
        "power": 1.15,
        "critBonus": 35,
        "weight": 16,
        "rarity": "epic"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "potion",
        "name": "Potion",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 40,
        "weight": 28,
        "rarity": "magical"
      }
    ]
  },
  "fbandit_c": {
    "monId": "fbandit_c",
    "monName": "Bandit Ambusher",
    "monsterType": "humanoid",
    "behavior": "action_pool",
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
    "image": "fbandit5.webp",
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
      },
      {
        "type": "item",
        "id": "coinpurse",
        "name": "Coin Purse",
        "chance": 18,
        "minQty": 1,
        "maxQty": 1
      }
    ],
    "images": [
      "fbandit5.webp",
      "fbandit6.webp"
    ],
    "pdef": 8,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1,
    "actions": [
      {
        "id": "quick_strike",
        "name": "Quick Strike",
        "type": "physical",
        "power": 0.9,
        "weight": 55,
        "rarity": "normal"
      },
      {
        "id": "poison_dart",
        "name": "Poison Dart",
        "type": "physical",
        "power": 0.55,
        "weight": 22,
        "rarity": "magical",
        "poisonChance": 45,
        "poisonDamagePerTick": 4
      },
      {
        "id": "quickness",
        "name": "Quickness",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 18,
        "turns": 3,
        "weight": 16,
        "rarity": "rare"
      },
      {
        "id": "backstab",
        "name": "Backstab",
        "type": "physical",
        "power": 1.15,
        "critBonus": 35,
        "weight": 16,
        "rarity": "epic"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "potion",
        "name": "Potion",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 40,
        "weight": 28,
        "rarity": "magical"
      }
    ]
  },
  "fpirate": {
    "monId": "fpirate",
    "monName": "Pirate Raider",
    "monsterType": "humanoid",
    "behavior": "action_pool",
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
    "image": "fpirate1.webp",
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
      },
      {
        "type": "item",
        "id": "coinpurse",
        "name": "Coin Purse",
        "chance": 25,
        "minQty": 1,
        "maxQty": 2
      }
    ],
    "images": [
      "fpirate1.webp",
      "fpirate2.webp"
    ],
    "pdef": 3,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "cutlass_slash",
        "name": "Cutlass Slash",
        "type": "physical",
        "power": 1,
        "weight": 55,
        "rarity": "normal"
      },
      {
        "id": "pistol_shot",
        "name": "Pistol Shot",
        "type": "physical",
        "power": 1.15,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "drink_rum",
        "name": "Drink Rum",
        "type": "heal",
        "healPct": 28,
        "maxUses": 1,
        "hpBelowPct": 45,
        "weight": 30,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "fpirate_b": {
    "monId": "fpirate_b",
    "monName": "Corsair Duelist",
    "monsterType": "humanoid",
    "behavior": "action_pool",
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
    "image": "fpirate3.webp",
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
      },
      {
        "type": "item",
        "id": "coinpurse",
        "name": "Coin Purse",
        "chance": 25,
        "minQty": 1,
        "maxQty": 2
      }
    ],
    "images": [
      "fpirate3.webp",
      "fpirate4.webp"
    ],
    "pdef": 7,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1,
    "actions": [
      {
        "id": "cutlass_slash",
        "name": "Cutlass Slash",
        "type": "physical",
        "power": 1,
        "weight": 55,
        "rarity": "normal"
      },
      {
        "id": "pistol_shot",
        "name": "Pistol Shot",
        "type": "physical",
        "power": 1.15,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "drink_rum",
        "name": "Drink Rum",
        "type": "heal",
        "healPct": 28,
        "maxUses": 1,
        "hpBelowPct": 45,
        "weight": 30,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "goblin": {
    "monId": "goblin",
    "monName": "Goblin Raider",
    "monsterType": "humanoid",
    "behavior": "action_pool",
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
    "image": "goblin1.webp",
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
      },
      {
        "type": "item",
        "id": "coinpurse",
        "name": "Coin Purse",
        "chance": 18,
        "minQty": 1,
        "maxQty": 1
      }
    ],
    "images": [
      "goblin1.webp",
      "goblin2.webp"
    ],
    "pdef": 3,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "stab",
        "name": "Stab",
        "type": "physical",
        "power": 0.9,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "quickness",
        "name": "Quickness",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 12,
        "turns": 3,
        "weight": 14,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "potion",
        "name": "Potion",
        "type": "heal",
        "healPct": 20,
        "maxUses": 1,
        "hpBelowPct": 35,
        "weight": 22,
        "rarity": "rare"
      }
    ]
  },
  "multicrab": {
    "monId": "multicrab",
    "monName": "Crab Pack",
    "monsterType": "swarm",
    "behavior": "action_pool",
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
    "image": "multicrab1.webp",
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
      },
      {
        "type": "item",
        "id": "seafood",
        "name": "Seafood",
        "chance": 38,
        "minQty": 1,
        "maxQty": 2
      }
    ],
    "images": [
      "multicrab1.webp",
      "multicrab2.webp"
    ],
    "pdef": 7,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "claw",
        "name": "Claw",
        "type": "physical",
        "power": 1,
        "weight": 62,
        "rarity": "normal"
      },
      {
        "id": "crush",
        "name": "Crushing Claw",
        "type": "physical",
        "power": 1.35,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "mushroom": {
    "monId": "mushroom",
    "monName": "Angry Mushroom",
    "monsterType": "plant",
    "behavior": "action_pool",
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
    "image": "mushroom1.webp",
    "poison": {
      "chance": 25,
      "damagePerTick": 3
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
      "mushroom1.webp",
      "mushroom2.webp"
    ],
    "pdef": 5,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1,
    "actions": [
      {
        "id": "bump",
        "name": "Bump",
        "type": "physical",
        "power": 0.7,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "toxic_spores",
        "name": "Toxic Spores",
        "type": "magic",
        "element": "dark",
        "power": 0.45,
        "weight": 28,
        "rarity": "magical",
        "poisonChance": 60,
        "poisonDamagePerTick": 4
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "mzombie": {
    "monId": "mzombie",
    "monName": "Male Zombie",
    "monsterType": "undead",
    "behavior": "action_pool",
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
    "image": "mzombie1.webp",
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
      },
      {
        "type": "item",
        "id": "rottenmeat",
        "name": "Rotten Meat",
        "chance": 30,
        "minQty": 1,
        "maxQty": 1
      }
    ],
    "images": [
      "mzombie1.webp",
      "mzombie2.webp"
    ],
    "pdef": 2,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "rotting_slam",
        "name": "Rotting Slam",
        "type": "physical",
        "power": 1,
        "weight": 65,
        "rarity": "normal"
      },
      {
        "id": "infected_bite",
        "name": "Infected Bite",
        "type": "physical",
        "power": 0.75,
        "weight": 24,
        "rarity": "magical",
        "poisonChance": 40,
        "poisonDamagePerTick": 5
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "mzombie_b": {
    "monId": "mzombie_b",
    "monName": "Bloated Zombie",
    "monsterType": "undead",
    "behavior": "action_pool",
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
    "image": "mzombie3.webp",
    "holyWeakness": 10,
    "fireWeakness": 10,
    "poison": {
      "chance": 30,
      "damagePerTick": 5
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
      },
      {
        "type": "item",
        "id": "rottenmeat",
        "name": "Rotten Meat",
        "chance": 40,
        "minQty": 1,
        "maxQty": 2
      }
    ],
    "images": [
      "mzombie3.webp",
      "mzombie4.webp"
    ],
    "pdef": 7,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1,
    "actions": [
      {
        "id": "rotting_slam",
        "name": "Rotting Slam",
        "type": "physical",
        "power": 1,
        "weight": 65,
        "rarity": "normal"
      },
      {
        "id": "infected_bite",
        "name": "Infected Bite",
        "type": "physical",
        "power": 0.75,
        "weight": 24,
        "rarity": "magical",
        "poisonChance": 40,
        "poisonDamagePerTick": 5
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "octopus": {
    "monId": "octopus",
    "monName": "Cave Octopus",
    "monsterType": "beast",
    "behavior": "action_pool",
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
    "image": "octopus1.webp",
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
      },
      {
        "type": "item",
        "id": "seafood",
        "name": "Seafood",
        "chance": 28,
        "minQty": 1,
        "maxQty": 1
      }
    ],
    "images": [
      "octopus1.webp",
      "octopus2.webp"
    ],
    "pdef": 5,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1,
    "actions": [
      {
        "id": "tentacle",
        "name": "Tentacle",
        "type": "physical",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "ink_lash",
        "name": "Ink Lash",
        "type": "physical",
        "power": 1.2,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "entangle",
        "name": "Entangle",
        "type": "charm",
        "charmChance": 30,
        "weight": 16,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "orc": {
    "monId": "orc",
    "monName": "Orc Grunt",
    "monsterType": "humanoid",
    "behavior": "action_pool",
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
    "image": "orc1.webp",
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
      },
      {
        "type": "item",
        "id": "orc_tusk",
        "name": "Orc Tusk",
        "chance": 22,
        "minQty": 1,
        "maxQty": 1
      }
    ],
    "images": [
      "orc1.webp",
      "orc2.webp"
    ],
    "pdef": 9,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1,
    "actions": [
      {
        "id": "cleave",
        "name": "Cleave",
        "type": "physical",
        "power": 1.05,
        "weight": 62,
        "rarity": "normal"
      },
      {
        "id": "heavy_smash",
        "name": "Heavy Smash",
        "type": "physical",
        "power": 1.45,
        "weight": 18,
        "rarity": "magical"
      },
      {
        "id": "war_cry",
        "name": "War Cry",
        "type": "buff",
        "buff": "attack",
        "attackBonusPct": 25,
        "turns": 3,
        "weight": 15,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "potion",
        "name": "Potion",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 35,
        "weight": 20,
        "rarity": "epic"
      }
    ]
  },
  "rat": {
    "monId": "rat",
    "monName": "Giant Rat",
    "monsterType": "beast",
    "behavior": "action_pool",
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
    "image": "rat1.webp",
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
      },
      {
        "type": "item",
        "id": "rawmeat",
        "name": "Raw Meat",
        "chance": 20,
        "minQty": 1,
        "maxQty": 1
      }
    ],
    "images": [
      "rat1.webp",
      "rat2.webp"
    ],
    "pdef": 1,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "bite",
        "name": "Bite",
        "type": "physical",
        "power": 0.8,
        "weight": 65,
        "rarity": "normal"
      },
      {
        "id": "quickness",
        "name": "Quickness",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 20,
        "turns": 3,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "skelemage": {
    "monId": "skelemage",
    "monName": "Skeleton Mage",
    "monsterType": "undead",
    "behavior": "action_pool",
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
    "image": "skelemage1.webp",
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
      "skelemage1.webp",
      "skelemage2.webp"
    ],
    "pdef": 3,
    "fireRes": 2,
    "iceRes": 2,
    "shockRes": 2,
    "darkRes": 2,
    "actions": [
      {
        "id": "dark_bolt",
        "name": "Dark Bolt",
        "type": "magic",
        "element": "dark",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "soul_burst",
        "name": "Soul Burst",
        "type": "magic",
        "element": "dark",
        "power": 1.45,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "skelemage_b": {
    "monId": "skelemage_b",
    "monName": "Bone Warlock",
    "monsterType": "undead",
    "behavior": "action_pool",
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
    "image": "skelemage3.webp",
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
      "skelemage3.webp",
      "skelemage4.webp"
    ],
    "pdef": 10,
    "fireRes": 5,
    "iceRes": 5,
    "shockRes": 5,
    "darkRes": 5,
    "actions": [
      {
        "id": "dark_bolt",
        "name": "Dark Bolt",
        "type": "magic",
        "element": "dark",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "soul_burst",
        "name": "Soul Burst",
        "type": "magic",
        "element": "dark",
        "power": 1.45,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "skeleswsh": {
    "monId": "skeleswsh",
    "monName": "Skeleton Guard",
    "monsterType": "undead",
    "behavior": "action_pool",
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
    "image": "skeleswsh1.webp",
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
      "skeleswsh1.webp",
      "skeleswsh2.webp"
    ],
    "pdef": 8,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "bone_strike",
        "name": "Bone Strike",
        "type": "physical",
        "power": 1,
        "weight": 65,
        "rarity": "normal"
      },
      {
        "id": "shield_bash",
        "name": "Shield Bash",
        "type": "physical",
        "power": 0.8,
        "weight": 18,
        "rarity": "magical",
        "charmChance": 15
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "skeleton": {
    "monId": "skeleton",
    "monName": "Skeleton",
    "monsterType": "undead",
    "behavior": "action_pool",
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
    "image": "skeleton1.webp",
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
      "skeleton1.webp",
      "skeleton2.webp"
    ],
    "pdef": 3,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "bone_strike",
        "name": "Bone Strike",
        "type": "physical",
        "power": 1,
        "weight": 65,
        "rarity": "normal"
      },
      {
        "id": "shield_bash",
        "name": "Shield Bash",
        "type": "physical",
        "power": 0.8,
        "weight": 18,
        "rarity": "magical",
        "charmChance": 15
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "skeleton_b": {
    "monId": "skeleton_b",
    "monName": "Crypt Skeleton",
    "monsterType": "undead",
    "behavior": "action_pool",
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
    "image": "skeleton3.webp",
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
      "skeleton3.webp",
      "skeleton4.webp"
    ],
    "pdef": 5,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "bone_strike",
        "name": "Bone Strike",
        "type": "physical",
        "power": 1,
        "weight": 65,
        "rarity": "normal"
      },
      {
        "id": "shield_bash",
        "name": "Shield Bash",
        "type": "physical",
        "power": 0.8,
        "weight": 18,
        "rarity": "magical",
        "charmChance": 15
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "spider": {
    "monId": "spider",
    "monName": "Dungeon Spider",
    "monsterType": "insect",
    "behavior": "action_pool",
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
    "image": "spider1.webp",
    "poison": {
      "chance": 30,
      "damagePerTick": 4
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
      "spider1.webp",
      "spider2.webp"
    ],
    "pdef": 2,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "bite",
        "name": "Bite",
        "type": "physical",
        "power": 0.75,
        "weight": 55,
        "rarity": "normal"
      },
      {
        "id": "venom_bite",
        "name": "Venom Bite",
        "type": "physical",
        "power": 0.6,
        "weight": 28,
        "rarity": "magical",
        "poisonChance": 55,
        "poisonDamagePerTick": 5
      },
      {
        "id": "skitter",
        "name": "Skitter",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 16,
        "turns": 3,
        "weight": 14,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "spider_b": {
    "monId": "spider_b",
    "monName": "Venom Spider",
    "monsterType": "insect",
    "behavior": "action_pool",
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
    "image": "spider3.webp",
    "poison": {
      "chance": 45,
      "damagePerTick": 8
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
      "spider3.webp",
      "spider4.webp"
    ],
    "pdef": 6,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1,
    "actions": [
      {
        "id": "bite",
        "name": "Bite",
        "type": "physical",
        "power": 0.75,
        "weight": 55,
        "rarity": "normal"
      },
      {
        "id": "venom_bite",
        "name": "Venom Bite",
        "type": "physical",
        "power": 0.6,
        "weight": 28,
        "rarity": "magical",
        "poisonChance": 55,
        "poisonDamagePerTick": 5
      },
      {
        "id": "skitter",
        "name": "Skitter",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 16,
        "turns": 3,
        "weight": 14,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "squid": {
    "monId": "squid",
    "monName": "Cave Squid",
    "monsterType": "beast",
    "behavior": "action_pool",
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
    "image": "squid1.webp",
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
      },
      {
        "type": "item",
        "id": "seafood",
        "name": "Seafood",
        "chance": 28,
        "minQty": 1,
        "maxQty": 1
      }
    ],
    "images": [
      "squid1.webp",
      "squid2.webp"
    ],
    "pdef": 4,
    "fireRes": 1,
    "iceRes": 1,
    "shockRes": 1,
    "darkRes": 1,
    "actions": [
      {
        "id": "tentacle",
        "name": "Tentacle",
        "type": "physical",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "ink_lash",
        "name": "Ink Lash",
        "type": "physical",
        "power": 1.2,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "entangle",
        "name": "Entangle",
        "type": "charm",
        "charmChance": 30,
        "weight": 16,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "wolf": {
    "monId": "wolf",
    "monName": "Forest Wolf",
    "monsterType": "beast",
    "behavior": "action_pool",
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
    "image": "wolf1.webp",
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
      },
      {
        "type": "item",
        "id": "rawmeat",
        "name": "Raw Meat",
        "chance": 30,
        "minQty": 1,
        "maxQty": 2
      }
    ],
    "images": [
      "wolf1.webp",
      "wolf2.webp"
    ],
    "pdef": 3,
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0,
    "actions": [
      {
        "id": "bite",
        "name": "Bite",
        "type": "physical",
        "power": 1,
        "weight": 62,
        "rarity": "normal"
      },
      {
        "id": "pounce",
        "name": "Pounce",
        "type": "physical",
        "power": 1.3,
        "critBonus": 15,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "quickness",
        "name": "Quickness",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 14,
        "turns": 3,
        "weight": 15,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "wraith": {
    "monId": "wraith",
    "monName": "Wraith",
    "monsterType": "undead",
    "behavior": "action_pool",
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
    "image": "wraith1.webp",
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
      "wraith1.webp",
      "wraith2.webp"
    ],
    "pdef": 4,
    "fireRes": 3,
    "iceRes": 3,
    "shockRes": 3,
    "darkRes": 3,
    "actions": [
      {
        "id": "spectral_touch",
        "name": "Spectral Touch",
        "type": "magic",
        "element": "dark",
        "power": 0.95,
        "weight": 60,
        "rarity": "normal"
      },
      {
        "id": "soul_drain",
        "name": "Soul Drain",
        "type": "magic",
        "element": "dark",
        "power": 1.25,
        "weight": 22,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "wraith_b": {
    "monId": "wraith_b",
    "monName": "Wraith Lord",
    "monsterType": "undead",
    "behavior": "action_pool",
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
    "image": "wraith3.webp",
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
      "wraith3.webp",
      "wraith4.webp"
    ],
    "pdef": 9,
    "fireRes": 7,
    "iceRes": 7,
    "shockRes": 7,
    "darkRes": 7,
    "actions": [
      {
        "id": "spectral_touch",
        "name": "Spectral Touch",
        "type": "magic",
        "element": "dark",
        "power": 0.95,
        "weight": 60,
        "rarity": "normal"
      },
      {
        "id": "soul_drain",
        "name": "Soul Drain",
        "type": "magic",
        "element": "dark",
        "power": 1.25,
        "weight": 22,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ]
  },
  "scorpion": {
    "monId": "scorpion",
    "monName": "Scorpion",
    "monsterType": "beast",
    "behavior": "action_pool",
    "level": 3,
    "hp": 58,
    "mp": 0,
    "attack": 7,
    "defense": 8,
    "pdef": 8,
    "magicDefense": 0,
    "speed": 12,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 28,
    "image": "scorpion1.webp",
    "images": [
      "scorpion1.webp",
      "scorpion2.webp"
    ],
    "actions": [
      {
        "id": "pinch",
        "name": "Pinch",
        "type": "physical",
        "power": 1,
        "weight": 60,
        "rarity": "normal"
      },
      {
        "id": "sting",
        "name": "Sting",
        "type": "physical",
        "power": 0.7,
        "weight": 28,
        "rarity": "magical",
        "poisonChance": 55,
        "poisonDamagePerTick": 5
      },
      {
        "id": "venom_sting",
        "name": "Venom Sting",
        "type": "physical",
        "power": 0.9,
        "weight": 18,
        "rarity": "rare",
        "poisonChance": 75,
        "poisonDamagePerTick": 8
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 6,
        "max": 15,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "scorpion_elite": {
    "monId": "scorpion_elite",
    "monName": "Armored Scorpion",
    "monsterType": "beast",
    "behavior": "action_pool",
    "level": 14,
    "hp": 120,
    "mp": 0,
    "attack": 15,
    "defense": 18,
    "pdef": 18,
    "magicDefense": 0,
    "speed": 10,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 90,
    "image": "scorpion3.webp",
    "images": [
      "scorpion3.webp",
      "scorpion4.webp"
    ],
    "actions": [
      {
        "id": "pinch",
        "name": "Pinch",
        "type": "physical",
        "power": 1,
        "weight": 52,
        "rarity": "normal"
      },
      {
        "id": "sting",
        "name": "Sting",
        "type": "physical",
        "power": 0.8,
        "weight": 25,
        "rarity": "normal",
        "poisonChance": 60,
        "poisonDamagePerTick": 7
      },
      {
        "id": "venom_sting",
        "name": "Venom Sting",
        "type": "physical",
        "power": 1.05,
        "weight": 20,
        "rarity": "magical",
        "poisonChance": 80,
        "poisonDamagePerTick": 10
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 28,
        "max": 70,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "snake": {
    "monId": "snake",
    "monName": "Snake",
    "monsterType": "beast",
    "behavior": "action_pool",
    "level": 2,
    "hp": 42,
    "mp": 0,
    "attack": 6,
    "defense": 2,
    "pdef": 2,
    "magicDefense": 0,
    "speed": 18,
    "critChance": 3,
    "dodgeChance": 12,
    "exp": 20,
    "image": "snake1.webp",
    "images": [
      "snake1.webp",
      "snake2.webp"
    ],
    "actions": [
      {
        "id": "bite",
        "name": "Bite",
        "type": "physical",
        "power": 0.8,
        "weight": 62,
        "rarity": "normal"
      },
      {
        "id": "venom_bite",
        "name": "Venom Bite",
        "type": "physical",
        "power": 0.55,
        "weight": 28,
        "rarity": "magical",
        "poisonChance": 55,
        "poisonDamagePerTick": 4
      },
      {
        "id": "coil",
        "name": "Coil",
        "type": "defend",
        "damageReductionPct": 65,
        "weight": 14,
        "rarity": "rare"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 4,
        "max": 10,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "snake_elite": {
    "monId": "snake_elite",
    "monName": "Royal Serpent",
    "monsterType": "beast",
    "behavior": "action_pool",
    "level": 13,
    "hp": 95,
    "mp": 0,
    "attack": 13,
    "defense": 5,
    "pdef": 5,
    "magicDefense": 0,
    "speed": 20,
    "critChance": 3,
    "dodgeChance": 15,
    "exp": 82,
    "image": "snake3.webp",
    "images": [
      "snake3.webp",
      "snake4.webp"
    ],
    "actions": [
      {
        "id": "bite",
        "name": "Bite",
        "type": "physical",
        "power": 0.9,
        "weight": 55,
        "rarity": "normal"
      },
      {
        "id": "venom_bite",
        "name": "Venom Bite",
        "type": "physical",
        "power": 0.7,
        "weight": 28,
        "rarity": "normal",
        "poisonChance": 65,
        "poisonDamagePerTick": 7
      },
      {
        "id": "constrict",
        "name": "Constrict",
        "type": "charm",
        "charmChance": 28,
        "weight": 18,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 26,
        "max": 65,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "warlock": {
    "monId": "warlock",
    "monName": "Warlock",
    "monsterType": "humanoid",
    "behavior": "action_pool",
    "level": 5,
    "hp": 85,
    "mp": 60,
    "attack": 12,
    "defense": 4,
    "pdef": 4,
    "magicDefense": 12,
    "speed": 11,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 80,
    "image": "warlock1.webp",
    "images": [
      "warlock1.webp",
      "warlock2.webp"
    ],
    "actions": [
      {
        "id": "dark_bolt",
        "name": "Dark Bolt",
        "type": "magic",
        "element": "dark",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "dark_burst",
        "name": "Dark Burst",
        "type": "magic",
        "element": "dark",
        "power": 1.45,
        "weight": 23,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "elixir",
        "name": "Elixir",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 40,
        "weight": 24,
        "rarity": "rare"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 10,
        "max": 25,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 25
  },
  "witch": {
    "monId": "witch",
    "monName": "Witch",
    "monsterType": "humanoid",
    "behavior": "action_pool",
    "level": 5,
    "hp": 85,
    "mp": 60,
    "attack": 12,
    "defense": 4,
    "pdef": 4,
    "magicDefense": 12,
    "speed": 11,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 80,
    "image": "witch1.webp",
    "images": [
      "witch1.webp",
      "witch2.webp"
    ],
    "actions": [
      {
        "id": "dark_bolt",
        "name": "Dark Bolt",
        "type": "magic",
        "element": "dark",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "dark_burst",
        "name": "Dark Burst",
        "type": "magic",
        "element": "dark",
        "power": 1.45,
        "weight": 23,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "elixir",
        "name": "Elixir",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 40,
        "weight": 24,
        "rarity": "rare"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 10,
        "max": 25,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 25
  },
  "firewarlock": {
    "monId": "firewarlock",
    "monName": "Fire Warlock",
    "monsterType": "humanoid",
    "behavior": "action_pool",
    "level": 8,
    "hp": 94,
    "mp": 60,
    "attack": 15,
    "defense": 4,
    "pdef": 4,
    "magicDefense": 12,
    "speed": 11,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 95,
    "image": "firewarlock1.webp",
    "images": [
      "firewarlock1.webp",
      "firewarlock2.webp"
    ],
    "actions": [
      {
        "id": "fire_bolt",
        "name": "Fire Bolt",
        "type": "magic",
        "element": "fire",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "fire_burst",
        "name": "Fire Burst",
        "type": "magic",
        "element": "fire",
        "power": 1.45,
        "weight": 23,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "elixir",
        "name": "Elixir",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 40,
        "weight": 24,
        "rarity": "rare"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 16,
        "max": 40,
        "chance": 70
      }
    ],
    "fireRes": 25,
    "iceRes": -15,
    "shockRes": 0,
    "darkRes": 0
  },
  "firewitch": {
    "monId": "firewitch",
    "monName": "Fire Witch",
    "monsterType": "humanoid",
    "behavior": "action_pool",
    "level": 8,
    "hp": 94,
    "mp": 60,
    "attack": 15,
    "defense": 4,
    "pdef": 4,
    "magicDefense": 12,
    "speed": 11,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 95,
    "image": "firewitch1.webp",
    "images": [
      "firewitch1.webp",
      "firewitch2.webp"
    ],
    "actions": [
      {
        "id": "fire_bolt",
        "name": "Fire Bolt",
        "type": "magic",
        "element": "fire",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "fire_burst",
        "name": "Fire Burst",
        "type": "magic",
        "element": "fire",
        "power": 1.45,
        "weight": 23,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "elixir",
        "name": "Elixir",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 40,
        "weight": 24,
        "rarity": "rare"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 16,
        "max": 40,
        "chance": 70
      }
    ],
    "fireRes": 25,
    "iceRes": -15,
    "shockRes": 0,
    "darkRes": 0
  },
  "icewarlock": {
    "monId": "icewarlock",
    "monName": "Ice Warlock",
    "monsterType": "humanoid",
    "behavior": "action_pool",
    "level": 8,
    "hp": 94,
    "mp": 60,
    "attack": 15,
    "defense": 4,
    "pdef": 4,
    "magicDefense": 12,
    "speed": 11,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 95,
    "image": "icewarlock1.webp",
    "images": [
      "icewarlock1.webp",
      "icewarlock2.webp"
    ],
    "actions": [
      {
        "id": "ice_bolt",
        "name": "Ice Bolt",
        "type": "magic",
        "element": "ice",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "ice_burst",
        "name": "Ice Burst",
        "type": "magic",
        "element": "ice",
        "power": 1.45,
        "weight": 23,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "elixir",
        "name": "Elixir",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 40,
        "weight": 24,
        "rarity": "rare"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 16,
        "max": 40,
        "chance": 70
      }
    ],
    "fireRes": -15,
    "iceRes": 25,
    "shockRes": 0,
    "darkRes": 0
  },
  "icewitch": {
    "monId": "icewitch",
    "monName": "Ice Witch",
    "monsterType": "humanoid",
    "behavior": "action_pool",
    "level": 8,
    "hp": 94,
    "mp": 60,
    "attack": 15,
    "defense": 4,
    "pdef": 4,
    "magicDefense": 12,
    "speed": 11,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 95,
    "image": "icewitch1.webp",
    "images": [
      "icewitch1.webp",
      "icewitch2.webp"
    ],
    "actions": [
      {
        "id": "ice_bolt",
        "name": "Ice Bolt",
        "type": "magic",
        "element": "ice",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "ice_burst",
        "name": "Ice Burst",
        "type": "magic",
        "element": "ice",
        "power": 1.45,
        "weight": 23,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "elixir",
        "name": "Elixir",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 40,
        "weight": 24,
        "rarity": "rare"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 16,
        "max": 40,
        "chance": 70
      }
    ],
    "fireRes": -15,
    "iceRes": 25,
    "shockRes": 0,
    "darkRes": 0
  },
  "shockwarlock": {
    "monId": "shockwarlock",
    "monName": "Shock Warlock",
    "monsterType": "humanoid",
    "behavior": "action_pool",
    "level": 10,
    "hp": 100,
    "mp": 60,
    "attack": 17,
    "defense": 4,
    "pdef": 4,
    "magicDefense": 12,
    "speed": 11,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 105,
    "image": "shockwarlock1.webp",
    "images": [
      "shockwarlock1.webp",
      "shockwarlock2.webp"
    ],
    "actions": [
      {
        "id": "shock_bolt",
        "name": "Shock Bolt",
        "type": "magic",
        "element": "shock",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "shock_burst",
        "name": "Shock Burst",
        "type": "magic",
        "element": "shock",
        "power": 1.45,
        "weight": 23,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "elixir",
        "name": "Elixir",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 40,
        "weight": 24,
        "rarity": "rare"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 20,
        "max": 50,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 25,
    "darkRes": -15
  },
  "shockwitch": {
    "monId": "shockwitch",
    "monName": "Shock Witch",
    "monsterType": "humanoid",
    "behavior": "action_pool",
    "level": 10,
    "hp": 100,
    "mp": 60,
    "attack": 17,
    "defense": 4,
    "pdef": 4,
    "magicDefense": 12,
    "speed": 11,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 105,
    "image": "shockwitch1.webp",
    "images": [
      "shockwitch1.webp",
      "shockwitch2.webp"
    ],
    "actions": [
      {
        "id": "shock_bolt",
        "name": "Shock Bolt",
        "type": "magic",
        "element": "shock",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "shock_burst",
        "name": "Shock Burst",
        "type": "magic",
        "element": "shock",
        "power": 1.45,
        "weight": 23,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "elixir",
        "name": "Elixir",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 40,
        "weight": 24,
        "rarity": "rare"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 20,
        "max": 50,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 25,
    "darkRes": -15
  },
  "incubus": {
    "monId": "incubus",
    "monName": "Incubus",
    "monsterType": "demon",
    "behavior": "action_pool",
    "level": 12,
    "hp": 140,
    "mp": 0,
    "attack": 15,
    "defense": 8,
    "pdef": 8,
    "magicDefense": 0,
    "speed": 16,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 110,
    "image": "incubus1.webp",
    "images": [
      "incubus1.webp",
      "incubus2.webp"
    ],
    "actions": [
      {
        "id": "claw",
        "name": "Claw",
        "type": "physical",
        "power": 0.9,
        "weight": 52,
        "rarity": "normal"
      },
      {
        "id": "charm",
        "name": "Charm",
        "type": "charm",
        "charmChance": 35,
        "weight": 24,
        "rarity": "magical"
      },
      {
        "id": "dark_kiss",
        "name": "Dark Kiss",
        "type": "magic",
        "element": "dark",
        "power": 1.25,
        "weight": 20,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 24,
        "max": 60,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 35
  },
  "succubus": {
    "monId": "succubus",
    "monName": "Succubus",
    "monsterType": "demon",
    "behavior": "action_pool",
    "level": 12,
    "hp": 130,
    "mp": 0,
    "attack": 14,
    "defense": 7,
    "pdef": 7,
    "magicDefense": 0,
    "speed": 18,
    "critChance": 3,
    "dodgeChance": 10,
    "exp": 110,
    "image": "succubus1.webp",
    "images": [
      "succubus1.webp",
      "succubus2.webp"
    ],
    "actions": [
      {
        "id": "claw",
        "name": "Claw",
        "type": "physical",
        "power": 0.85,
        "weight": 50,
        "rarity": "normal"
      },
      {
        "id": "charm",
        "name": "Charm",
        "type": "charm",
        "charmChance": 40,
        "weight": 26,
        "rarity": "magical"
      },
      {
        "id": "soul_kiss",
        "name": "Soul Kiss",
        "type": "magic",
        "element": "dark",
        "power": 1.3,
        "weight": 20,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 24,
        "max": 60,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 35
  },
  "male_vampire": {
    "monId": "male_vampire",
    "monName": "Vampire",
    "monsterType": "undead",
    "behavior": "action_pool",
    "level": 14,
    "hp": 155,
    "mp": 0,
    "attack": 18,
    "defense": 10,
    "pdef": 10,
    "magicDefense": 0,
    "speed": 17,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 135,
    "image": "mvamp1.webp",
    "images": [
      "mvamp1.webp",
      "mvamp2.webp",
      "mvamp4.webp"
    ],
    "actions": [
      {
        "id": "claw",
        "name": "Claw",
        "type": "physical",
        "power": 1,
        "weight": 52,
        "rarity": "normal"
      },
      {
        "id": "blood_bolt",
        "name": "Blood Bolt",
        "type": "magic",
        "element": "dark",
        "power": 1.2,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "quickness",
        "name": "Mist Step",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 18,
        "turns": 3,
        "weight": 16,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 28,
        "max": 70,
        "chance": 70
      }
    ],
    "fireRes": -15,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 40
  },
  "female_vampire": {
    "monId": "female_vampire",
    "monName": "Vampiress",
    "monsterType": "undead",
    "behavior": "action_pool",
    "level": 14,
    "hp": 145,
    "mp": 0,
    "attack": 17,
    "defense": 9,
    "pdef": 9,
    "magicDefense": 0,
    "speed": 19,
    "critChance": 3,
    "dodgeChance": 10,
    "exp": 135,
    "image": "fvamp1.webp",
    "images": [
      "fvamp1.webp",
      "fvamp2.webp",
      "fvamp3.webp",
      "fvamp4.webp"
    ],
    "actions": [
      {
        "id": "claw",
        "name": "Claw",
        "type": "physical",
        "power": 0.95,
        "weight": 50,
        "rarity": "normal"
      },
      {
        "id": "charm",
        "name": "Charm",
        "type": "charm",
        "charmChance": 30,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "blood_bolt",
        "name": "Blood Bolt",
        "type": "magic",
        "element": "dark",
        "power": 1.25,
        "weight": 20,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 28,
        "max": 70,
        "chance": 70
      }
    ],
    "fireRes": -15,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 40
  },
  "male_werewolf": {
    "monId": "male_werewolf",
    "monName": "Werewolf",
    "monsterType": "beast",
    "behavior": "action_pool",
    "level": 10,
    "hp": 150,
    "mp": 0,
    "attack": 20,
    "defense": 8,
    "pdef": 8,
    "magicDefense": 0,
    "speed": 18,
    "critChance": 12,
    "dodgeChance": 8,
    "exp": 105,
    "image": "mwerewolf1.webp",
    "images": [
      "mwerewolf1.webp",
      "mwerewolf2.webp",
      "mwerewolf3.webp",
      "mwerewolf4.webp"
    ],
    "actions": [
      {
        "id": "slash",
        "name": "Slash",
        "type": "physical",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "pounce",
        "name": "Pounce",
        "type": "physical",
        "power": 1.35,
        "critBonus": 18,
        "weight": 22,
        "rarity": "magical"
      },
      {
        "id": "frenzy",
        "name": "Frenzy",
        "type": "physical",
        "power": 0.65,
        "hits": 2,
        "weight": 18,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 20,
        "max": 50,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "female_werewolf": {
    "monId": "female_werewolf",
    "monName": "Werewolf Huntress",
    "monsterType": "beast",
    "behavior": "action_pool",
    "level": 10,
    "hp": 135,
    "mp": 0,
    "attack": 18,
    "defense": 7,
    "pdef": 7,
    "magicDefense": 0,
    "speed": 21,
    "critChance": 15,
    "dodgeChance": 12,
    "exp": 105,
    "image": "fwerewolf1.webp",
    "images": [
      "fwerewolf1.webp",
      "fwerewolf2.webp",
      "fwerewolf3.webp",
      "fwerewolf4.webp"
    ],
    "actions": [
      {
        "id": "slash",
        "name": "Slash",
        "type": "physical",
        "power": 0.9,
        "weight": 55,
        "rarity": "normal"
      },
      {
        "id": "quickness",
        "name": "Quickness",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 18,
        "turns": 3,
        "weight": 18,
        "rarity": "magical"
      },
      {
        "id": "pounce",
        "name": "Pounce",
        "type": "physical",
        "power": 1.3,
        "critBonus": 25,
        "weight": 22,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 20,
        "max": 50,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "male_wraith": {
    "monId": "male_wraith",
    "monName": "Male Wraith",
    "monsterType": "undead",
    "behavior": "action_pool",
    "level": 9,
    "hp": 105,
    "mp": 0,
    "attack": 12,
    "defense": 3,
    "magicDefense": 0,
    "speed": 17,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 88,
    "image": "mwraith1.webp",
    "images": [
      "mwraith1.webp",
      "mwraith2.webp"
    ],
    "actions": [
      {
        "id": "spectral_touch",
        "name": "Spectral Touch",
        "type": "magic",
        "element": "dark",
        "power": 1,
        "weight": 60,
        "rarity": "normal"
      },
      {
        "id": "soul_burst",
        "name": "Soul Burst",
        "type": "magic",
        "element": "dark",
        "power": 1.4,
        "weight": 23,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 18,
        "max": 45,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 60,
    "pdef": 3
  },
  "female_wraith": {
    "monId": "female_wraith",
    "monName": "Female Wraith",
    "monsterType": "undead",
    "behavior": "action_pool",
    "level": 9,
    "hp": 100,
    "mp": 0,
    "attack": 12,
    "defense": 3,
    "magicDefense": 0,
    "speed": 18,
    "critChance": 3,
    "dodgeChance": 12,
    "exp": 88,
    "image": "fwraith1.webp",
    "images": [
      "fwraith1.webp",
      "fwraith2.webp"
    ],
    "actions": [
      {
        "id": "spectral_touch",
        "name": "Spectral Touch",
        "type": "magic",
        "element": "dark",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "haunt",
        "name": "Haunt",
        "type": "charm",
        "charmChance": 28,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "soul_burst",
        "name": "Soul Burst",
        "type": "magic",
        "element": "dark",
        "power": 1.35,
        "weight": 18,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 18,
        "max": 45,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 60,
    "pdef": 3
  },
  "male_cyborg": {
    "monId": "male_cyborg",
    "monName": "Cyborg",
    "monsterType": "construct",
    "behavior": "action_pool",
    "level": 16,
    "hp": 190,
    "mp": 0,
    "attack": 22,
    "defense": 20,
    "pdef": 20,
    "magicDefense": 0,
    "speed": 12,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 150,
    "image": "mcyborg1.webp",
    "images": [
      "mcyborg1.webp",
      "mcyborg2.webp"
    ],
    "actions": [
      {
        "id": "metal_fist",
        "name": "Metal Fist",
        "type": "physical",
        "power": 1,
        "weight": 56,
        "rarity": "normal"
      },
      {
        "id": "pulse_shot",
        "name": "Pulse Shot",
        "type": "magic",
        "element": "shock",
        "power": 1.25,
        "weight": 24,
        "rarity": "magical"
      },
      {
        "id": "overclock",
        "name": "Overclock",
        "type": "buff",
        "buff": "attack",
        "attackBonusPct": 30,
        "turns": 3,
        "weight": 16,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "repair",
        "name": "Repair Injector",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 35,
        "weight": 24,
        "rarity": "epic"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 32,
        "max": 80,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 40,
    "darkRes": 0
  },
  "female_cyborg": {
    "monId": "female_cyborg",
    "monName": "Cyborg Huntress",
    "monsterType": "construct",
    "behavior": "action_pool",
    "level": 16,
    "hp": 170,
    "mp": 0,
    "attack": 19,
    "defense": 16,
    "pdef": 16,
    "magicDefense": 0,
    "speed": 16,
    "critChance": 3,
    "dodgeChance": 10,
    "exp": 150,
    "image": "fcyborg1.webp",
    "images": [
      "fcyborg1.webp",
      "fcyborg2.webp"
    ],
    "actions": [
      {
        "id": "blade_strike",
        "name": "Blade Strike",
        "type": "physical",
        "power": 0.9,
        "weight": 52,
        "rarity": "normal"
      },
      {
        "id": "pulse_shot",
        "name": "Pulse Shot",
        "type": "magic",
        "element": "shock",
        "power": 1.2,
        "weight": 24,
        "rarity": "magical"
      },
      {
        "id": "quickness",
        "name": "Overclock",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 20,
        "turns": 3,
        "weight": 18,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "repair",
        "name": "Repair Injector",
        "type": "heal",
        "healPct": 25,
        "maxUses": 1,
        "hpBelowPct": 35,
        "weight": 24,
        "rarity": "epic"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 32,
        "max": 80,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 40,
    "darkRes": 0
  },
  "merman": {
    "monId": "merman",
    "monName": "Merman",
    "monsterType": "humanoid",
    "behavior": "action_pool",
    "level": 7,
    "hp": 105,
    "mp": 0,
    "attack": 14,
    "defense": 10,
    "pdef": 10,
    "magicDefense": 0,
    "speed": 13,
    "critChance": 3,
    "dodgeChance": 2,
    "exp": 72,
    "image": "merman1.webp",
    "images": [
      "merman1.webp",
      "merman2.webp"
    ],
    "actions": [
      {
        "id": "trident_thrust",
        "name": "Trident Thrust",
        "type": "physical",
        "power": 1,
        "weight": 60,
        "rarity": "normal"
      },
      {
        "id": "tidal_strike",
        "name": "Tidal Strike",
        "type": "magic",
        "element": "ice",
        "power": 1.2,
        "weight": 22,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "seafood_tonic",
        "name": "Sea Tonic",
        "type": "heal",
        "healPct": 22,
        "maxUses": 1,
        "hpBelowPct": 35,
        "weight": 20,
        "rarity": "rare"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 14,
        "max": 35,
        "chance": 70
      }
    ],
    "fireRes": -10,
    "iceRes": 25,
    "shockRes": 0,
    "darkRes": 0
  },
  "mermaid": {
    "monId": "mermaid",
    "monName": "Mermaid",
    "monsterType": "humanoid",
    "behavior": "action_pool",
    "level": 7,
    "hp": 95,
    "mp": 0,
    "attack": 11,
    "defense": 7,
    "pdef": 7,
    "magicDefense": 0,
    "speed": 15,
    "critChance": 3,
    "dodgeChance": 8,
    "exp": 72,
    "image": "mermaid1.webp",
    "images": [
      "mermaid1.webp",
      "mermaid2.webp"
    ],
    "actions": [
      {
        "id": "water_bolt",
        "name": "Water Bolt",
        "type": "magic",
        "element": "ice",
        "power": 1,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "siren_song",
        "name": "Siren Song",
        "type": "charm",
        "charmChance": 32,
        "weight": 22,
        "rarity": "magical"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "sea_tonic",
        "name": "Sea Tonic",
        "type": "heal",
        "healPct": 22,
        "maxUses": 1,
        "hpBelowPct": 35,
        "weight": 20,
        "rarity": "rare"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 14,
        "max": 35,
        "chance": 70
      }
    ],
    "fireRes": -10,
    "iceRes": 30,
    "shockRes": 0,
    "darkRes": 0
  },
  "satyr": {
    "monId": "satyr",
    "monName": "Satyr",
    "monsterType": "humanoid",
    "behavior": "action_pool",
    "level": 6,
    "hp": 90,
    "mp": 0,
    "attack": 12,
    "defense": 5,
    "pdef": 5,
    "magicDefense": 0,
    "speed": 17,
    "critChance": 3,
    "dodgeChance": 8,
    "exp": 62,
    "image": "satyr1.webp",
    "images": [
      "satyr1.webp",
      "satyr2.webp"
    ],
    "actions": [
      {
        "id": "spear_jab",
        "name": "Spear Jab",
        "type": "physical",
        "power": 0.95,
        "weight": 58,
        "rarity": "normal"
      },
      {
        "id": "quickness",
        "name": "Fleet Hooves",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 15,
        "turns": 3,
        "weight": 18,
        "rarity": "magical"
      },
      {
        "id": "wild_charge",
        "name": "Wild Charge",
        "type": "physical",
        "power": 1.3,
        "weight": 20,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "potion",
        "name": "Potion",
        "type": "heal",
        "healPct": 20,
        "maxUses": 1,
        "hpBelowPct": 35,
        "weight": 18,
        "rarity": "epic"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 12,
        "max": 30,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  },
  "satyress": {
    "monId": "satyress",
    "monName": "Satyress",
    "monsterType": "humanoid",
    "behavior": "action_pool",
    "level": 6,
    "hp": 82,
    "mp": 0,
    "attack": 10,
    "defense": 4,
    "pdef": 4,
    "magicDefense": 0,
    "speed": 19,
    "critChance": 3,
    "dodgeChance": 12,
    "exp": 62,
    "image": "satyress1.webp",
    "images": [
      "satyress1.webp",
      "satyress2.webp"
    ],
    "actions": [
      {
        "id": "dagger_jab",
        "name": "Dagger Jab",
        "type": "physical",
        "power": 0.85,
        "weight": 55,
        "rarity": "normal"
      },
      {
        "id": "quickness",
        "name": "Fleet Hooves",
        "type": "buff",
        "buff": "quickness",
        "dodgeBonus": 18,
        "turns": 3,
        "weight": 20,
        "rarity": "magical"
      },
      {
        "id": "charm",
        "name": "Enthrall",
        "type": "charm",
        "charmChance": 25,
        "weight": 18,
        "rarity": "rare"
      },
      {
        "id": "defend",
        "name": "Defend",
        "type": "defend",
        "damageReductionPct": 50,
        "weight": 12,
        "rarity": "normal"
      },
      {
        "id": "potion",
        "name": "Potion",
        "type": "heal",
        "healPct": 20,
        "maxUses": 1,
        "hpBelowPct": 35,
        "weight": 18,
        "rarity": "epic"
      }
    ],
    "drops": [
      {
        "type": "gold",
        "min": 12,
        "max": 30,
        "chance": 70
      }
    ],
    "fireRes": 0,
    "iceRes": 0,
    "shockRes": 0,
    "darkRes": 0
  }
};
