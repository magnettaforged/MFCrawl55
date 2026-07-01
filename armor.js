// =========================
// ARMOR.JS
// v0.6.0
// PDEF / resistance armor data.
// PDEF = physical mitigation percentage.
// MDEF removed; old MDEF was converted directly into Fire/Ice/Shock/Dark resistance by floor(MDEF / 4).
// Legacy def alias is kept for loader compatibility, but UI/combat use PDEF.
// Player Holy resistance is not used.
// =========================

const ARMOR_DATA = {
  "maya_cloth": {
    "itemName": "Maya Cloth Garb",
    "character": "maya",
    "tier": "mt1cloth",
    "material": "cloth",
    "rarity": "common",
    "reqLevel": 1,
    "maxSockets": 1,
    "value": 8,
    "stats": {
      "pdef": 1,
      "def": 1,
      "fireRes": 0,
      "iceRes": 0,
      "shockRes": 0,
      "darkRes": 0,
      "speed": 0,
      "crit": 0,
      "dodge": 2,
      "goldFind": 0
    },
    "assets": {
      "icon": "assets/armor/maya/mt1cloth/mclothicon.png",
      "folder": "assets/armor/maya/mt1cloth/mclothpose",
      "base": "mcloth",
      "poses": [
        "p01",
        "p02",
        "p03",
        "p04",
        "p05"
      ],
      "defaultPose": "p01"
    },
    "text": {
      "description": "Simple cloth armor for Maya.",
      "flavorText": "Light and easy to move in."
    }
  },
  "maya_copper_chain": {
    "itemName": "Maya Copper Chain",
    "character": "maya",
    "tier": "mt2chain",
    "material": "copper",
    "rarity": "common",
    "reqLevel": 3,
    "maxSockets": 1,
    "value": 45,
    "stats": {
      "pdef": 5,
      "def": 5,
      "fireRes": 0,
      "iceRes": 0,
      "shockRes": 0,
      "darkRes": 0,
      "speed": -1,
      "crit": 0,
      "dodge": 1,
      "goldFind": 0
    },
    "assets": {
      "icon": "assets/armor/maya/mt2chain/mcchainicon.png",
      "folder": "assets/armor/maya/mt2chain/mchainpose",
      "base": "mcchain",
      "poses": [
        "p01",
        "p02",
        "p03",
        "p04",
        "p05"
      ],
      "defaultPose": "p01"
    },
    "text": {
      "description": "Copper chain armor for Maya.",
      "flavorText": "Flexible chain with modest protection."
    }
  },
  "maya_gold_chain": {
    "itemName": "Maya Gold Chain",
    "character": "maya",
    "tier": "mt2chain",
    "material": "gold",
    "rarity": "uncommon",
    "reqLevel": 3,
    "maxSockets": 1,
    "value": 90,
    "stats": {
      "pdef": 4,
      "def": 4,
      "fireRes": 0,
      "iceRes": 0,
      "shockRes": 0,
      "darkRes": 0,
      "speed": -2,
      "crit": 0,
      "dodge": 1,
      "goldFind": 10
    },
    "assets": {
      "icon": "assets/armor/maya/mt2chain/mgchainicon.png",
      "folder": "assets/armor/maya/mt2chain/mchainpose",
      "base": "mgchain",
      "poses": [
        "p01",
        "p02",
        "p03",
        "p04",
        "p05"
      ],
      "defaultPose": "p01"
    },
    "text": {
      "description": "Gold chain armor with improved treasure finding.",
      "flavorText": "Soft metal but lucky."
    }
  },
  "maya_steel_chain": {
    "itemName": "Maya Steel Chain",
    "character": "maya",
    "tier": "mt2chain",
    "material": "steel",
    "rarity": "uncommon",
    "reqLevel": 3,
    "maxSockets": 1,
    "value": 95,
    "stats": {
      "pdef": 7,
      "def": 7,
      "fireRes": 0,
      "iceRes": 0,
      "shockRes": 0,
      "darkRes": 0,
      "speed": -1,
      "crit": 0,
      "dodge": 1,
      "goldFind": 0
    },
    "assets": {
      "icon": "assets/armor/maya/mt2chain/mschainicon.png",
      "folder": "assets/armor/maya/mt2chain/mchainpose",
      "base": "mschain",
      "poses": [
        "p01",
        "p02",
        "p03",
        "p04",
        "p05"
      ],
      "defaultPose": "p01"
    },
    "text": {
      "description": "Steel chain armor for Maya.",
      "flavorText": "A practical defensive upgrade."
    }
  },
  "maya_copper_lightplate": {
    "itemName": "Maya Copper Light Plate",
    "character": "maya",
    "tier": "mt3lightplate",
    "material": "copper",
    "rarity": "uncommon",
    "reqLevel": 6,
    "maxSockets": 2,
    "value": 140,
    "stats": {
      "pdef": 9,
      "def": 9,
      "fireRes": 0,
      "iceRes": 0,
      "shockRes": 0,
      "darkRes": 0,
      "speed": -2,
      "crit": 0,
      "dodge": 1,
      "goldFind": 0
    },
    "assets": {
      "icon": "assets/armor/maya/mt3lightplate/mclightplateicon.png",
      "folder": "assets/armor/maya/mt3lightplate/mlppose",
      "base": "mclplate",
      "poses": [
        "p01",
        "p02",
        "p03",
        "p04",
        "p05"
      ],
      "defaultPose": "p01"
    },
    "text": {
      "description": "Copper light plate armor for Maya.",
      "flavorText": "More coverage without becoming too heavy."
    }
  },
  "maya_gold_lightplate": {
    "itemName": "Maya Gold Light Plate",
    "character": "maya",
    "tier": "mt3lightplate",
    "material": "gold",
    "rarity": "rare",
    "reqLevel": 6,
    "maxSockets": 2,
    "value": 260,
    "stats": {
      "pdef": 8,
      "def": 8,
      "fireRes": 0,
      "iceRes": 0,
      "shockRes": 0,
      "darkRes": 0,
      "speed": -3,
      "crit": 0,
      "dodge": 1,
      "goldFind": 20
    },
    "assets": {
      "icon": "assets/armor/maya/mt3lightplate/mglightplateicon.png",
      "folder": "assets/armor/maya/mt3lightplate/mlppose",
      "base": "mglplate",
      "poses": [
        "p01",
        "p02",
        "p03",
        "p04",
        "p05"
      ],
      "defaultPose": "p01"
    },
    "text": {
      "description": "Gold light plate armor with stronger treasure finding.",
      "flavorText": "Heavy shine with profitable luck."
    }
  },
  "maya_steel_lightplate": {
    "itemName": "Maya Steel Light Plate",
    "character": "maya",
    "tier": "mt3lightplate",
    "material": "steel",
    "rarity": "rare",
    "reqLevel": 6,
    "maxSockets": 2,
    "value": 280,
    "stats": {
      "pdef": 12,
      "def": 12,
      "fireRes": 0,
      "iceRes": 0,
      "shockRes": 0,
      "darkRes": 0,
      "speed": -2,
      "crit": 0,
      "dodge": 1,
      "goldFind": 0
    },
    "assets": {
      "icon": "assets/armor/maya/mt3lightplate/mslightplateicon.png",
      "folder": "assets/armor/maya/mt3lightplate/mlppose",
      "base": "mslplate",
      "poses": [
        "p01",
        "p02",
        "p03",
        "p04",
        "p05"
      ],
      "defaultPose": "p01"
    },
    "text": {
      "description": "Steel light plate armor for Maya.",
      "flavorText": "Reliable plate protection."
    }
  },
  "maya_copper_fullplate": {
    "itemName": "Maya Copper Full Plate",
    "character": "maya",
    "tier": "mt4fullplate",
    "material": "copper",
    "rarity": "rare",
    "reqLevel": 10,
    "maxSockets": 2,
    "value": 360,
    "stats": {
      "pdef": 15,
      "def": 15,
      "fireRes": 0,
      "iceRes": 0,
      "shockRes": 0,
      "darkRes": 0,
      "speed": -4,
      "crit": 0,
      "dodge": 0,
      "goldFind": 0
    },
    "assets": {
      "icon": "assets/armor/maya/mt4fullplate/mcfullplateicon.png",
      "folder": "assets/armor/maya/mt4fullplate/mfppose",
      "base": "mcfplate",
      "poses": [
        "p01",
        "p02",
        "p03",
        "p04",
        "p05"
      ],
      "defaultPose": "p01"
    },
    "text": {
      "description": "Copper full plate armor for Maya.",
      "flavorText": "Heavy plated protection."
    }
  },
  "maya_gold_fullplate": {
    "itemName": "Maya Gold Full Plate",
    "character": "maya",
    "tier": "mt4fullplate",
    "material": "gold",
    "rarity": "epic",
    "reqLevel": 10,
    "maxSockets": 2,
    "value": 650,
    "stats": {
      "pdef": 13,
      "def": 13,
      "fireRes": 0,
      "iceRes": 0,
      "shockRes": 0,
      "darkRes": 0,
      "speed": -5,
      "crit": 0,
      "dodge": 0,
      "goldFind": 30
    },
    "assets": {
      "icon": "assets/armor/maya/mt4fullplate/mgfullplateicon.png",
      "folder": "assets/armor/maya/mt4fullplate/mfppose",
      "base": "mgfplate",
      "poses": [
        "p01",
        "p02",
        "p03",
        "p04",
        "p05"
      ],
      "defaultPose": "p01"
    },
    "text": {
      "description": "Gold full plate armor with major treasure finding.",
      "flavorText": "Impractical but profitable."
    }
  },
  "maya_steel_fullplate": {
    "itemName": "Maya Steel Full Plate",
    "character": "maya",
    "tier": "mt4fullplate",
    "material": "steel",
    "rarity": "epic",
    "reqLevel": 10,
    "maxSockets": 2,
    "value": 700,
    "stats": {
      "pdef": 19,
      "def": 19,
      "fireRes": 1,
      "iceRes": 1,
      "shockRes": 1,
      "darkRes": 1,
      "speed": -4,
      "crit": 0,
      "dodge": 0,
      "goldFind": 0
    },
    "assets": {
      "icon": "assets/armor/maya/mt4fullplate/msfullplateicon.png",
      "folder": "assets/armor/maya/mt4fullplate/mfppose",
      "base": "msfplate",
      "poses": [
        "p01",
        "p02",
        "p03",
        "p04",
        "p05"
      ],
      "defaultPose": "p01"
    },
    "text": {
      "description": "Steel full plate armor for Maya.",
      "flavorText": "The standard high-defense full plate."
    }
  },
  "maya_jade_fullplate": {
    "itemName": "Maya Jade Full Plate",
    "character": "maya",
    "tier": "mt4fullplate",
    "material": "jade",
    "rarity": "legendary",
    "reqLevel": 14,
    "maxSockets": 4,
    "value": 1400,
    "stats": {
      "pdef": 26,
      "def": 26,
      "fireRes": 3,
      "iceRes": 3,
      "shockRes": 3,
      "darkRes": 3,
      "speed": -3,
      "crit": 0,
      "dodge": 2,
      "goldFind": 5
    },
    "assets": {
      "icon": "assets/armor/maya/mt4fullplate/mjfullplateicon.png",
      "folder": "assets/armor/maya/mt4fullplate/mfppose",
      "base": "mjfplate",
      "poses": [
        "p01",
        "p02",
        "p03",
        "p04",
        "p05"
      ],
      "defaultPose": "p01"
    },
    "text": {
      "description": "Frosted jade full plate with strong magic defense.",
      "flavorText": "Mystic green armor that bends hostile magic."
    }
  },
  "maya_black_fullplate": {
    "itemName": "Maya Black Full Plate",
    "character": "maya",
    "tier": "mt4fullplate",
    "material": "black",
    "rarity": "mythic",
    "reqLevel": 18,
    "maxSockets": 8,
    "value": 2500,
    "stats": {
      "pdef": 34,
      "def": 34,
      "fireRes": 2,
      "iceRes": 2,
      "shockRes": 2,
      "darkRes": 2,
      "speed": -6,
      "crit": 4,
      "dodge": 0,
      "goldFind": 500
    },
    "assets": {
      "icon": "assets/armor/maya/mt4fullplate/mbfullplateicon.png",
      "folder": "assets/armor/maya/mt4fullplate/mfppose",
      "base": "mbfplate",
      "poses": [
        "p01",
        "p02",
        "p03",
        "p04",
        "p05"
      ],
      "defaultPose": "p01"
    },
    "text": {
      "description": "Black full plate inspired by impossible hacked relic armor.",
      "flavorText": "Too many sockets and too much power."
    }
  },
  "maya_white_fullplate": {
    "itemName": "Maya White Full Plate",
    "character": "maya",
    "tier": "mt4fullplate",
    "material": "white",
    "rarity": "mythic",
    "reqLevel": 18,
    "maxSockets": 8,
    "value": 2600,
    "stats": {
      "pdef": 32,
      "def": 32,
      "fireRes": 4,
      "iceRes": 4,
      "shockRes": 4,
      "darkRes": 4,
      "speed": -4,
      "crit": 2,
      "dodge": 2,
      "goldFind": 10
    },
    "assets": {
      "icon": "assets/armor/maya/mt4fullplate/mwfullplateicon.png",
      "folder": "assets/armor/maya/mt4fullplate/mfppose",
      "base": "mwfplate",
      "poses": [
        "p01",
        "p02",
        "p03",
        "p04",
        "p05"
      ],
      "defaultPose": "p01"
    },
    "text": {
      "description": "White full plate inspired by impossible hacked relic armor.",
      "flavorText": "Blinding armor with absurd socket potential."
    }
  }
};
