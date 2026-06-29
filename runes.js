// =========================
// RUNES.JS
// Modern vertical rune data.
// One object per rune, keyed by RuneID.
// =========================

const RUNE_DATA = {
  fehu: {
    runeName: "Fehu",
    image: "rune1.png",
    symbol: "ᚠ",
    meaning: "Wealth and reward",
    effectType: "gold_find_pct",
    baseValue: 10,
    color: "gold",
    shortLabel: "+10% Gold",
    description: "Gold find increased by 10%."
  },

  uruz: {
    runeName: "Uruz",
    image: "rune2.png",
    symbol: "ᚢ",
    meaning: "Strength and endurance",
    effectType: "attack_pct",
    baseValue: 10,
    color: "red",
    shortLabel: "+10% Atk",
    description: "Attack increased by 10%."
  },

  thurisaz: {
    runeName: "Thurisaz",
    image: "rune3.png",
    symbol: "ᚦ",
    meaning: "Thorn and disruption",
    effectType: "pierce_pct",
    baseValue: 10,
    color: "crimson",
    shortLabel: "-10% Enemy Def",
    description: "Ignores 10% of enemy defense."
  },

  ansuz: {
    runeName: "Ansuz",
    image: "rune4.png",
    symbol: "ᚨ",
    meaning: "Wisdom and divine breath",
    effectType: "magic_pct",
    baseValue: 10,
    color: "violet",
    shortLabel: "+10% Mag",
    description: "Magic increased by 10%."
  },

  raidho: {
    runeName: "Raidho",
    image: "rune5.png",
    symbol: "ᚱ",
    meaning: "Journey and movement",
    effectType: "speed_pct",
    baseValue: 10,
    color: "white",
    shortLabel: "+10% Spd",
    description: "Speed increased by 10%."
  },

  kenaz: {
    runeName: "Kenaz",
    image: "rune6.png",
    symbol: "ᚲ",
    meaning: "Torch and craft",
    effectType: "fire_weapon_pct",
    baseValue: 10,
    color: "orange",
    shortLabel: "+10% Fire Atk",
    description: "Adds 10% weapon attack as fire damage."
  },

  gebo: {
    runeName: "Gebo",
    image: "rune7.png",
    symbol: "ᚷ",
    meaning: "Gift and exchange",
    effectType: "life_steal_pct",
    baseValue: 5,
    color: "green",
    shortLabel: "5% Life Steal",
    description: "Life steal 5%."
  },

  hagalaz: {
    runeName: "Hagalaz",
    image: "rune8.png",
    symbol: "ᚺ",
    meaning: "Hail and disruption",
    effectType: "shock_weapon_pct",
    baseValue: 10,
    color: "blue",
    shortLabel: "+10% Shock Atk",
    description: "Adds 10% weapon attack as shock damage."
  },

  isa: {
    runeName: "Isa",
    image: "rune9.png",
    symbol: "ᛁ",
    meaning: "Ice and stillness",
    effectType: "slow_chance_pct",
    baseValue: 10,
    color: "cyan",
    shortLabel: "10% Slow",
    description: "Slow chance 10%."
  },

  eihwaz: {
    runeName: "Eihwaz",
    image: "rune10.png",
    symbol: "ᛇ",
    meaning: "Yew death and endurance",
    effectType: "light_bonus_pct",
    baseValue: 10,
    color: "darkgreen",
    shortLabel: "+10% Light Dmg",
    description: "Light enemies take 10% increased damage."
  },

  algiz: {
    runeName: "Algiz",
    image: "rune11.png",
    symbol: "ᛉ",
    meaning: "Protection and warding",
    effectType: "defense_pct",
    baseValue: 10,
    color: "silver",
    shortLabel: "+10% Def",
    description: "Defense increased by 10%."
  },

  sowilo: {
    runeName: "Sowilo",
    image: "rune12.png",
    symbol: "ᛋ",
    meaning: "Sun victory and cleansing",
    effectType: "undead_bonus_pct",
    baseValue: 10,
    color: "gold",
    shortLabel: "+10% Undead Dmg",
    description: "Undead monsters take 10% increased damage."
  }
};
