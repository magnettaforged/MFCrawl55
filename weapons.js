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
          "image": "sword1.png",
          "icon": "sword1.png"
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
          "image": "sword2.png",
          "icon": "sword2.png"
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
          "image": "sword3.png",
          "icon": "sword3.png"
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
          "image": "sword4.png",
          "icon": "sword4.png"
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
          "image": "hammer1.png",
          "icon": "hammer1.png"
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
          "image": "hammer2.png",
          "icon": "hammer2.png"
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
          "image": "hammer3.png",
          "icon": "hammer3.png"
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
          "image": "hammer4.png",
          "icon": "hammer4.png"
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
          "image": "scythe1.png",
          "icon": "scythe1.png"
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
          "image": "scythe2.png",
          "icon": "scythe2.png"
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
          "image": "scythe3.png",
          "icon": "scythe3.png"
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
          "image": "scythe4.png",
          "icon": "scythe4.png"
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
          "image": "staff1.png",
          "icon": "staff1.png"
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
          "image": "staff2.png",
          "icon": "staff2.png"
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
          "image": "staff3.png",
          "icon": "staff3.png"
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
          "image": "staff4.png",
          "icon": "staff4.png"
      }
  },

};
