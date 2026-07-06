// =========================
// WEAPONS.JS
// Modern vertical equipment data.
// Keep each weapon as an object keyed by ItemID.
// equipmentLoader.js normalizes this into the internal equipment table.
// =========================

const WEAPON_DATA = {

  // =========================
  // MAYA WEAPONS
  // =========================
  rusty_sword: {
      "itemName": "Rusty Sword",
      "character": "maya",
      "tier": "iron",
      "rarity": "common",
      "reqLevel": 1,
      "maxSockets": 1,
      "value": 10,
      "stats": {
          "atk": 4,
          "mag": 0,
          "speed": 0,
          "crit": 2,
          "dodge": 0
      },
      "assets": {
          "image": "sword1.webp",
          "icon": "sword1.webp"
      }
  },

  iron_sword: {
      "itemName": "Iron Sword",
      "character": "maya",
      "tier": "iron",
      "rarity": "common",
      "reqLevel": 1,
      "maxSockets": 1,
      "value": 25,
      "stats": {
          "atk": 8,
          "mag": 0,
          "speed": 0,
          "crit": 3,
          "dodge": 0
      },
      "assets": {
          "image": "sword2.webp",
          "icon": "sword2.webp"
      }
  },

  obsidian_sword: {
      "itemName": "Obsidian Sword",
      "character": "maya",
      "tier": "obsidian",
      "rarity": "rare",
      "reqLevel": 6,
      "maxSockets": 2,
      "value": 120,
      "stats": {
          "atk": 18,
          "mag": 0,
          "speed": 0,
          "crit": 5,
          "dodge": 0
      },
      "assets": {
          "image": "sword3.webp",
          "icon": "sword3.webp"
      }
  },

  mythic_sword: {
      "itemName": "Mythic Sword",
      "character": "maya",
      "tier": "mythic",
      "rarity": "mythic",
      "reqLevel": 12,
      "maxSockets": 3,
      "value": 500,
      "stats": {
          "atk": 34,
          "mag": 4,
          "speed": 1,
          "crit": 8,
          "dodge": 0
      },
      "assets": {
          "image": "sword4.webp",
          "icon": "sword4.webp"
      }
  },

  iron_sword_shield: {
      "itemName": "Iron Sword and Shield",
      "character": "maya",
      "tier": "iron",
      "rarity": "common",
      "reqLevel": 1,
      "maxSockets": 1,
      "value": 40,
      "stats": { "atk": 6, "mag": 0, "pdef": 4, "def": 4, "speed": -1, "crit": 1, "dodge": 0 },
      "assets": { "image": "swordshield1.webp", "icon": "swordshield1.webp" }
  },

  steel_sword_shield: {
      "itemName": "Steel Sword and Shield",
      "character": "maya",
      "tier": "steel",
      "rarity": "common",
      "reqLevel": 1,
      "maxSockets": 1,
      "value": 95,
      "stats": { "atk": 11, "mag": 0, "pdef": 7, "def": 7, "speed": -1, "crit": 2, "dodge": 0 },
      "assets": { "image": "swordshield2.webp", "icon": "swordshield2.webp" }
  },

  obsidian_sword_shield: {
      "itemName": "Obsidian Sword and Shield",
      "character": "maya",
      "tier": "obsidian",
      "rarity": "rare",
      "reqLevel": 6,
      "maxSockets": 2,
      "value": 220,
      "stats": { "atk": 20, "mag": 1, "pdef": 10, "def": 10, "speed": -1, "crit": 4, "dodge": 0 },
      "assets": { "image": "swordshield3.webp", "icon": "swordshield3.webp" }
  },

  mythic_sword_shield: {
      "itemName": "Mythic Sword and Shield",
      "character": "maya",
      "tier": "mythic",
      "rarity": "mythic",
      "reqLevel": 12,
      "maxSockets": 3,
      "value": 650,
      "stats": { "atk": 32, "mag": 3, "pdef": 14, "def": 14, "speed": 0, "crit": 6, "dodge": 1 },
      "assets": { "image": "swordshield4.webp", "icon": "swordshield4.webp" }
  },

  white_mythic_sword: {
      "itemName": "White Mythic Sword",
      "character": "maya",
      "tier": "mythic",
      "rarity": "mythic",
      "reqLevel": 45,
      "maxSockets": 8,
      "value": 500,
      "stats": {
          "atk": 64,
          "mag": 8,
          "speed": 2,
          "crit": 16,
          "dodge": 0
      },
      "assets": {
          "image": "wsword4.webp",
          "icon": "wsword4.webp"
      }
  },


  // =========================
  // REIGN WEAPONS
  // =========================
  cracked_hammer: {
      "itemName": "Cracked Hammer",
      "character": "reign",
      "tier": "iron",
      "rarity": "common",
      "reqLevel": 1,
      "maxSockets": 1,
      "value": 10,
      "stats": {
          "atk": 6,
          "mag": 0,
          "speed": -1,
          "crit": 1,
          "dodge": 0
      },
      "assets": {
          "image": "hammer1.webp",
          "icon": "hammer1.webp"
      }
  },

  iron_hammer: {
      "itemName": "Iron Hammer",
      "character": "reign",
      "tier": "iron",
      "rarity": "common",
      "reqLevel": 1,
      "maxSockets": 1,
      "value": 30,
      "stats": {
          "atk": 11,
          "mag": 0,
          "speed": -1,
          "crit": 2,
          "dodge": 0
      },
      "assets": {
          "image": "hammer2.webp",
          "icon": "hammer2.webp"
      }
  },

  obsidian_hammer: {
      "itemName": "Obsidian Hammer",
      "character": "reign",
      "tier": "obsidian",
      "rarity": "rare",
      "reqLevel": 6,
      "maxSockets": 2,
      "value": 140,
      "stats": {
          "atk": 24,
          "mag": 0,
          "speed": -2,
          "crit": 4,
          "dodge": 0
      },
      "assets": {
          "image": "hammer3.webp",
          "icon": "hammer3.webp"
      }
  },

  mythic_hammer: {
      "itemName": "Mythic Hammer",
      "character": "reign",
      "tier": "mythic",
      "rarity": "mythic",
      "reqLevel": 12,
      "maxSockets": 3,
      "value": 550,
      "stats": {
          "atk": 42,
          "mag": 3,
          "speed": -1,
          "crit": 7,
          "dodge": 0
      },
      "assets": {
          "image": "hammer4.webp",
          "icon": "hammer4.webp"
      }
  },


  // =========================
  // KYRA WEAPONS
  // =========================
  training_scythe: {
      "itemName": "Training Scythe",
      "character": "kyra",
      "tier": "iron",
      "rarity": "common",
      "reqLevel": 1,
      "maxSockets": 1,
      "value": 10,
      "stats": {
          "atk": 5,
          "mag": 0,
          "speed": 1,
          "crit": 4,
          "dodge": 1
      },
      "assets": {
          "image": "scythe1.webp",
          "icon": "scythe1.webp"
      }
  },

  steel_scythe: {
      "itemName": "Steel Scythe",
      "character": "kyra",
      "tier": "steel",
      "rarity": "common",
      "reqLevel": 1,
      "maxSockets": 1,
      "value": 30,
      "stats": {
          "atk": 9,
          "mag": 0,
          "speed": 1,
          "crit": 5,
          "dodge": 1
      },
      "assets": {
          "image": "scythe2.webp",
          "icon": "scythe2.webp"
      }
  },

  obsidian_scythe: {
      "itemName": "Obsidian Scythe",
      "character": "kyra",
      "tier": "obsidian",
      "rarity": "rare",
      "reqLevel": 6,
      "maxSockets": 2,
      "value": 150,
      "stats": {
          "atk": 20,
          "mag": 0,
          "speed": 2,
          "crit": 8,
          "dodge": 2
      },
      "assets": {
          "image": "scythe3.webp",
          "icon": "scythe3.webp"
      }
  },

  mythic_scythe: {
      "itemName": "Mythic Scythe",
      "character": "kyra",
      "tier": "mythic",
      "rarity": "mythic",
      "reqLevel": 12,
      "maxSockets": 3,
      "value": 600,
      "stats": {
          "atk": 36,
          "mag": 5,
          "speed": 2,
          "crit": 12,
          "dodge": 3
      },
      "assets": {
          "image": "scythe4.webp",
          "icon": "scythe4.webp"
      }
  },


  // =========================
  // NADIA WEAPONS
  // =========================
  pine_staff: {
      "itemName": "Pine Staff",
      "character": "nadia",
      "tier": "pine",
      "rarity": "common",
      "reqLevel": 1,
      "maxSockets": 1,
      "value": 10,
      "stats": {
          "atk": 2,
          "mag": 7,
          "speed": 0,
          "crit": 1,
          "dodge": 0
      },
      "assets": {
          "image": "staff1.webp",
          "icon": "staff1.webp"
      }
  },

  oak_staff: {
      "itemName": "Oak Staff",
      "character": "nadia",
      "tier": "oak",
      "rarity": "common",
      "reqLevel": 1,
      "maxSockets": 1,
      "value": 30,
      "stats": {
          "atk": 4,
          "mag": 12,
          "speed": 0,
          "crit": 2,
          "dodge": 0
      },
      "assets": {
          "image": "staff2.webp",
          "icon": "staff2.webp"
      }
  },

  cocobolo_staff: {
      "itemName": "Cocobolo Staff",
      "character": "nadia",
      "tier": "cocobolo",
      "rarity": "rare",
      "reqLevel": 6,
      "maxSockets": 2,
      "value": 150,
      "stats": {
          "atk": 8,
          "mag": 24,
          "speed": 0,
          "crit": 4,
          "dodge": 0
      },
      "assets": {
          "image": "staff3.webp",
          "icon": "staff3.webp"
      }
  },

  mythic_staff: {
      "itemName": "Mythic Staff",
      "character": "nadia",
      "tier": "mythic",
      "rarity": "mythic",
      "reqLevel": 12,
      "maxSockets": 3,
      "value": 600,
      "stats": {
          "atk": 14,
          "mag": 42,
          "speed": 1,
          "crit": 6,
          "dodge": 1
      },
      "assets": {
          "image": "staff4.webp",
          "icon": "staff4.webp"
      }
  },

};
