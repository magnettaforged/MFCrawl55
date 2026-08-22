// =========================
// monsterLoader.js
// Normalizes monster data and selects random theme-based encounters
// =========================
//
// Theme codes:
// c = castle
// b = beach
// f = forest
//
// Boss columns in monloc.js:
// bc = castle boss
// bb = beach boss
// bf = forest boss
//
// Progression rule:
// - monster.level in monster.js is treated as startFloor / unlockFloor by default
// - live monster level follows the current floor
// - no max floor
// - no weighting; selection is true random from all eligible monsters

function randomChoice(list) {
  return list[Math.floor(Math.random() * list.length)];
}


// Global floor tiers keep 100-floor scaling bounded without duplicating every monster.
// Threat preview is deterministic: one standard tier per floor, no rarity rolls.
// Legendary is a hidden 5% encounter modifier and is not shown in preview or names.
const MONSTER_FLOOR_TIERS = [
  { rarity: "normal", label: "", minFloor: 1, maxFloor: 15, weight: 100, statMult: 1.00, growthMult: 1.00, pdefMult: 1.00, rewardMult: 1.00 },
  { rarity: "magical", label: "Magical", minFloor: 16, maxFloor: 35, weight: 100, statMult: 1.45, growthMult: 1.05, pdefMult: 1.15, rewardMult: 1.60 },
  { rarity: "rare", label: "Rare", minFloor: 36, maxFloor: 70, weight: 100, statMult: 2.20, growthMult: 1.10, pdefMult: 1.30, rewardMult: 2.60 },
  { rarity: "epic", label: "Epic", minFloor: 71, maxFloor: 9999, weight: 100, statMult: 3.20, growthMult: 1.15, pdefMult: 1.50, rewardMult: 4.00 }
];

const HIDDEN_LEGENDARY_CHANCE_PCT = 5;
const HIDDEN_LEGENDARY_MODIFIER = {
  statMult: 1.45,
  growthMult: 1.15,
  pdefMult: 1.15,
  rewardMult: 4.00
};


// Rare Oddity: hidden Easter egg treasure encounters.
// Normal oddities use combat. Ass oddities use a quiz encounter and award panty key items.
const RARE_ODDITY_DEFAULT_DROPS = [
  { type: "gold", min: 250, max: 800, chance: 100 },
  { type: "item", id: "shrine_stone", name: "Shrine Stone", chance: 8 },
  { type: "item", id: "gold_potion", name: "Gold Potion", chance: 35 }
];

const CHEST_MIMIC_CHANCE_PCT = 15;

const RARE_ODDITY_POOL = [
  "missingno",
  "nocowlvl",
  "cblock",
  "deez",
  "gthong",
  "kass",
  "mass",
  "nass",
  "rass"
];

const RARE_ODDITY_DEFINITIONS = {
  missingno: {
    monName: "MissingNo Oddity",
    image: "missingno.webp",
    hp: 45,
    attack: 1,
    pdef: 0,
    magicDefense: 0,
    speed: 55,
    dodgeChance: 98,
    exp: 350,
    flavorText: "A corrupted shape that should not be here."
  },
  nocowlvl: {
    monName: "Cow with Bardiche",
    image: "nocowlvl.webp",
    hp: 80,
    attack: 8,
    pdef: 12,
    magicDefense: 2,
    speed: 18,
    dodgeChance: 82,
    exp: 420,
    drops: [
      { type: "gold", min: 350, max: 900, chance: 100 },
      { type: "item", id: "bardiche", name: "Bardiche", chance: 100 },
      { type: "item", id: "gold_potion", name: "Gold Potion", chance: 35 }
    ],
    flavorText: "The secret herd armed itself."
  },
  cblock: {
    monName: "C-Block Chicken",
    image: "cblock.webp",
    hp: 55,
    attack: 3,
    pdef: 250,
    magicDefense: 8,
    speed: 10,
    dodgeChance: 25,
    exp: 450,
    flavorText: "He lives on the C block."
  },
  deez: {
    monName: "Dee's Lost Nuts",
    image: "deez.webp",
    hp: 70,
    attack: 0,
    pdef: 180,
    magicDefense: 15,
    speed: 8,
    dodgeChance: 35,
    exp: 400,
    drops: [
      { type: "gold", min: 600, max: 1500, chance: 100 },
      { type: "item", id: "shrine_stone", name: "Shrine Stone", chance: 12 },
      { type: "item", id: "gold_potion", name: "Gold Potion", chance: 55 }
    ],
    flavorText: "Dee has been looking everywhere."
  },
  gthong: {
    monName: "Golden Thong",
    image: "gthong.webp",
    hp: 50,
    attack: 1,
    pdef: 30,
    magicDefense: 30,
    speed: 50,
    dodgeChance: 96,
    exp: 500,
    drops: [
      { type: "gold", min: 900, max: 1800, chance: 100 },
      { type: "item", id: "shrine_stone", name: "Shrine Stone", chance: 10 },
      { type: "item", id: "gold_potion", name: "Gold Potion", chance: 50 },
      { type: "item", id: "golden_thong", name: "Golden Thong", chance: 100, minQty: 1, maxQty: 1 }
    ],
    flavorText: "You have been blessed."
  },
  kass: {
    monName: "Kyra's Ass",
    encounterName: "Mysterious Oddity",
    image: "kass.webp",
    quizType: "ass",
    quizAnswer: "kyra",
    quizRewardKey: "kpanty",
    hp: 1,
    attack: 0,
    pdef: 0,
    magicDefense: 0,
    speed: 1,
    dodgeChance: 0,
    exp: 300,
    flavorText: "Identified by questionable field research."
  },
  mass: {
    monName: "Maya's Ass",
    encounterName: "Mysterious Oddity",
    image: "mass.webp",
    quizType: "ass",
    quizAnswer: "maya",
    quizRewardKey: "mpanty",
    hp: 1,
    attack: 0,
    pdef: 0,
    magicDefense: 0,
    speed: 1,
    dodgeChance: 0,
    exp: 300,
    flavorText: "Identified by questionable field research."
  },
  nass: {
    monName: "Nadia's Ass",
    encounterName: "Mysterious Oddity",
    image: "nass.webp",
    quizType: "ass",
    quizAnswer: "nadia",
    quizRewardKey: "npanty",
    hp: 1,
    attack: 0,
    pdef: 0,
    magicDefense: 0,
    speed: 1,
    dodgeChance: 0,
    exp: 300,
    flavorText: "Identified by questionable field research."
  },
  rass: {
    monName: "Reign's Ass",
    encounterName: "Mysterious Oddity",
    image: "rass.webp",
    quizType: "ass",
    quizAnswer: "reign",
    quizRewardKey: "rpanty",
    hp: 1,
    attack: 0,
    pdef: 0,
    magicDefense: 0,
    speed: 1,
    dodgeChance: 0,
    exp: 300,
    flavorText: "Identified by questionable field research."
  }
};

const CHEST_ODDITY_POOL = [
  "kchest",
  "mchest",
  "nchest",
  "rchest"
];

const CHEST_ODDITY_DEFINITIONS = {
  kchest: {
    monName: "Kyra's Chest",
    encounterName: "Mysterious Chest Oddity",
    image: "kchest.webp",
    quizType: "chest",
    quizAnswer: "kyra",
    quizRewardKey: "ktop",
    exp: 300,
    flavorText: "Identified by questionable field research."
  },
  mchest: {
    monName: "Maya's Chest",
    encounterName: "Mysterious Chest Oddity",
    image: "mchest.webp",
    quizType: "chest",
    quizAnswer: "maya",
    quizRewardKey: "mtop",
    exp: 300,
    flavorText: "Identified by questionable field research."
  },
  nchest: {
    monName: "Nadia's Chest",
    encounterName: "Mysterious Chest Oddity",
    image: "nchest.webp",
    quizType: "chest",
    quizAnswer: "nadia",
    quizRewardKey: "ntop",
    exp: 300,
    flavorText: "Identified by questionable field research."
  },
  rchest: {
    monName: "Reign's Chest",
    encounterName: "Mysterious Chest Oddity",
    image: "rchest.webp",
    quizType: "chest",
    quizAnswer: "reign",
    quizRewardKey: "rtop",
    exp: 300,
    flavorText: "Identified by questionable field research."
  }
};

const CHEST_MIMIC_DEFINITION = {
  monId: "chest_mimic",
  monName: "Mimic",
  monsterType: "mimic",
  behavior: "chest_mimic",
  level: 1,
  hp: 90,
  mp: 0,
  attack: 14,
  pdef: 8,
  defense: 8,
  magicDefense: 4,
  speed: 12,
  critChance: 4,
  dodgeChance: 3,
  exp: 90,
  image: "mimic1.webp",
  images: ["mimic1.webp"],
  drops: [
    { type: "gold", min: 25, max: 80, chance: 100 },
    { type: "item", id: "gold_potion", name: "Gold Potion", chance: 18 }
  ],
  tiered: true,
  chestMimic: true,
  flavorText: "It waited for someone greedy enough to open it."
};

function registerRareOddityMonster() {
  if (typeof MONSTERS === "undefined" || !MONSTERS) return;

  // Remove the old single placeholder if it exists from an older save/build.
  if (MONSTERS.mysterious_elusive) delete MONSTERS.mysterious_elusive;
  if (typeof MONSTER_LOCATIONS !== "undefined" && MONSTER_LOCATIONS && MONSTER_LOCATIONS.mysterious_elusive) {
    delete MONSTER_LOCATIONS.mysterious_elusive;
  }

  if (!MONSTERS.chest_mimic) MONSTERS.chest_mimic = { ...CHEST_MIMIC_DEFINITION };
  if (typeof MONSTER_LOCATIONS !== "undefined" && MONSTER_LOCATIONS && MONSTER_LOCATIONS.chest_mimic) delete MONSTER_LOCATIONS.chest_mimic;

  Object.entries(RARE_ODDITY_DEFINITIONS).forEach(([id, def]) => {
    if (!MONSTERS[id]) {
      MONSTERS[id] = {
        monId: id,
        monName: def.monName || "Rare Oddity",
        encounterName: def.encounterName || def.monName || "Rare Oddity",
        monsterType: "rare_oddity",
        behavior: def.quizType ? "quiz" : "treasure",
        level: 1,
        hp: Number(def.hp ?? 60),
        mp: 0,
        attack: Number(def.attack ?? 1),
        pdef: Number(def.pdef ?? 0),
        defense: Number(def.pdef ?? 0),
        magicDefense: Number(def.magicDefense ?? 0),
        speed: Number(def.speed ?? 40),
        critChance: 0,
        dodgeChance: Number(def.dodgeChance ?? 98),
        exp: Number(def.exp ?? 250),
        image: def.image || `${id}.webp`,
        images: [def.image || `${id}.webp`],
        legendaryChancePct: 0,
        drops: Array.isArray(def.drops) ? def.drops : RARE_ODDITY_DEFAULT_DROPS,
        rareOddity: true,
        tiered: false,
        quizType: def.quizType || null,
        quizAnswer: def.quizAnswer || null,
        quizRewardKey: def.quizRewardKey || null,
        flavorText: def.flavorText || "A rare oddity from somewhere it should not be."
      };
    }

    // Do not add Rare Oddities to MONSTER_LOCATIONS. They are selected only through the rare oddity roll,
    // so they do not affect normal pools or floor threat previews.
    if (typeof MONSTER_LOCATIONS !== "undefined" && MONSTER_LOCATIONS && MONSTER_LOCATIONS[id]) {
      delete MONSTER_LOCATIONS[id];
    }
  });

  Object.entries(CHEST_ODDITY_DEFINITIONS).forEach(([id, def]) => {
    if (!MONSTERS[id]) {
      MONSTERS[id] = {
        monId: id,
        monName: def.monName || "Chest Oddity",
        encounterName: def.encounterName || "Mysterious Chest Oddity",
        monsterType: "rare_oddity",
        behavior: "quiz",
        level: 1,
        hp: 1,
        mp: 0,
        attack: 0,
        pdef: 0,
        defense: 0,
        magicDefense: 0,
        speed: 1,
        critChance: 0,
        dodgeChance: 0,
        exp: Number(def.exp ?? 300),
        image: def.image || `${id}.webp`,
        images: [def.image || `${id}.webp`],
        legendaryChancePct: 0,
        drops: [],
        rareOddity: true,
        chestOddity: true,
        tiered: false,
        quizType: def.quizType || "chest",
        quizAnswer: def.quizAnswer || null,
        quizRewardKey: def.quizRewardKey || null,
        flavorText: def.flavorText || "A rare oddity from somewhere it should not be."
      };
    }

    if (typeof MONSTER_LOCATIONS !== "undefined" && MONSTER_LOCATIONS && MONSTER_LOCATIONS[id]) {
      delete MONSTER_LOCATIONS[id];
    }
  });
}

registerRareOddityMonster();

function getRareOddityIds() {
  if (typeof MONSTERS === "undefined" || !MONSTERS) return [];
  return RARE_ODDITY_POOL.filter(id => MONSTERS[id]);
}

function getRandomRareOddity() {
  const ids = getRareOddityIds();
  if (!ids.length) return null;
  return randomChoice(ids);
}

function getRareOddityChancePct(floor) {
  return 1; // intentionally rare; monster oddity roll
}

function getChestOddityChancePct(floor) {
  return 1; // intentionally rare; separate roll for chest oddities
}

function shouldRollChestMimic(floor) {
  if (typeof MONSTERS === "undefined" || !MONSTERS.chest_mimic) return false;
  return Math.random() * 100 < CHEST_MIMIC_CHANCE_PCT;
}

function getChestMimicEncounter(floor = 1) {
  if (typeof MONSTERS === "undefined" || !MONSTERS.chest_mimic) return null;
  const monster = normalizeMonster(MONSTERS.chest_mimic);
  return monster ? scaleMonster(monster, floor) : null;
}

function getChestOddityIds() {
  if (typeof MONSTERS === "undefined" || !MONSTERS) return [];
  return CHEST_ODDITY_POOL.filter(id => MONSTERS[id]);
}

function getRandomChestOddity() {
  const ids = getChestOddityIds();
  if (!ids.length) return null;
  const monster = getMonster(randomChoice(ids));
  return monster ? scaleMonster(normalizeMonster(monster), 1) : null;
}

function shouldRollChestOddity(floor) {
  if (typeof MONSTERS === "undefined" || !getChestOddityIds().length) return false;
  return Math.random() * 100 < getChestOddityChancePct(floor);
}

function shouldRollRareOddity(theme, tileType, floor) {
  if (String(tileType || "M").toUpperCase() !== "M") return false;
  if (typeof MONSTERS === "undefined" || !getRareOddityIds().length) return false;
  return Math.random() * 100 < getRareOddityChancePct(floor);
}


function getFloorTierOptions(floor) {
  const liveFloor = Math.max(1, Math.floor(Number(floor) || 1));
  const match = MONSTER_FLOOR_TIERS.find(tier => liveFloor >= tier.minFloor && liveFloor <= tier.maxFloor);
  return [match || MONSTER_FLOOR_TIERS[0]];
}

function getStandardFloorTier(floor) {
  return getFloorTierOptions(floor)[0] || MONSTER_FLOOR_TIERS[0];
}

function shouldUseGlobalMonsterTier(monster) {
  if (!monster) return true;
  if (monster.tiered === false || monster.useGlobalTier === false) return false;
  return true;
}

function getMonsterTierForFloor(monster, floor, forcedRarity = null) {
  if (!shouldUseGlobalMonsterTier(monster)) {
    return { rarity: "base", label: "", minFloor: getMonsterStartFloor(monster), maxFloor: 9999, weight: 100, statMult: 1, growthMult: 1, pdefMult: 1, rewardMult: 1 };
  }

  const standard = getStandardFloorTier(floor);
  if (forcedRarity) {
    const match = MONSTER_FLOOR_TIERS.find(tier => tier.rarity === forcedRarity);
    if (match) return match;
  }

  return standard;
}

function shouldApplyHiddenLegendary(monster, options = {}) {
  if (!shouldUseGlobalMonsterTier(monster)) return false;
  if (options.legendary === true) return true;
  if (options.legendary === false || options.preview === true) return false;
  const chance = Number(monster.legendaryChancePct ?? HIDDEN_LEGENDARY_CHANCE_PCT);
  return Math.random() * 100 < Math.max(0, Math.min(100, chance));
}

function applyRarityName(monName, tier) {
  const label = tier && tier.label ? String(tier.label).trim() : "";
  if (!label) return monName;
  const name = String(monName || "Monster");
  return name.toLowerCase().startsWith(label.toLowerCase() + " ") ? name : `${label} ${name}`;
}

function normalizeMonsterImage(image) {
  if (!image) return "";
  const name = String(image).replace(/^.*[\\/]/, "");
  return name.replace(/\.(png|jpg|jpeg|webp)$/i, "") + ".webp";
}

function chooseMonsterImage(baseMonster) {
  if (Array.isArray(baseMonster.images) && baseMonster.images.length) {
    return normalizeMonsterImage(randomChoice(baseMonster.images));
  }

  return normalizeMonsterImage(baseMonster.image);
}

function getMonster(monsterId) {
  if (typeof MONSTERS === "undefined") return null;
  return MONSTERS[monsterId] || null;
}

function getMonsterStartFloor(baseMonster) {
  if (!baseMonster) return 1;

  const value = baseMonster.startFloor ??
    baseMonster.unlockFloor ??
    baseMonster.appearFloor ??
    baseMonster.level ??
    1;

  const n = Number(value);
  return Number.isFinite(n) ? Math.max(1, Math.floor(n)) : 1;
}

function normalizeMonster(baseMonster) {
  if (!baseMonster) return null;

  const monId = baseMonster.monId || baseMonster.id;
  const monName = baseMonster.monName || baseMonster.name || "Monster";
  const hp = Number(baseMonster.hp ?? baseMonster.maxHp ?? 1);
  const mp = Number(baseMonster.mp ?? baseMonster.maxMp ?? 0);
  const startFloor = getMonsterStartFloor(baseMonster);
  const pdef = Number(baseMonster.pdef ?? baseMonster.defense ?? baseMonster.def ?? 0);
  const oldMdef = Number(baseMonster.magicDefense ?? baseMonster.mdef ?? 0);
  const convertedRes = Math.floor(oldMdef / 4);

  return {
    ...baseMonster,

    monId,
    monName,
    monsterType: baseMonster.monsterType || baseMonster.type || "normal",
    exp: Number(baseMonster.exp ?? baseMonster.expReward ?? 0),
    image: chooseMonsterImage(baseMonster),

    // Original monster.js level is now used as unlock/start floor.
    baseLevel: Number(baseMonster.level ?? startFloor),
    startFloor,
    unlockFloor: startFloor,

    hp,
    maxHp: hp,
    currentHp: hp,
    mp,
    maxMp: mp,
    currentMp: mp,
    attack: Number(baseMonster.attack ?? 1),

    // PDEF is physical mitigation percentage. defense is kept as a compatibility alias.
    pdef,
    defense: pdef,

    fireRes: Number(baseMonster.fireRes ?? baseMonster.fireResist ?? convertedRes),
    iceRes: Number(baseMonster.iceRes ?? baseMonster.iceResist ?? (baseMonster.iceWeakness !== undefined ? -Math.abs(Number(baseMonster.iceWeakness || 0)) : convertedRes)),
    shockRes: Number(baseMonster.shockRes ?? baseMonster.shockResist ?? convertedRes),
    darkRes: Number(baseMonster.darkRes ?? convertedRes),

    speed: Number(baseMonster.speed ?? 0),
    critChance: Number(baseMonster.critChance ?? 0),
    dodgeChance: Number(baseMonster.dodgeChance ?? 0),
    poison: baseMonster.poison ? { chance: Number(baseMonster.poison.chance || 0), damagePerTick: Number(baseMonster.poison.damagePerTick || 0) } : null
  };
}

function normalizeThemeCode(theme) {
  const value = String(theme || "c").trim().toLowerCase();
  const names = { crystal: "a", ancient: "a", beach: "b", castle: "c", winter: "d", winterized: "d", forest: "f", pyramid: "g", pyramids: "g" };
  if (names[value]) return names[value];
  return ["a", "b", "c", "d", "f", "g"].includes(value) ? value : "c";
}

function bossColumnForTheme(theme) {
  return "b" + normalizeThemeCode(theme);
}

function isMonsterUnlockedForFloor(monsterId, floor) {
  const monster = getMonster(monsterId);
  if (!monster) return false;

  return Math.max(1, Number(floor) || 1) >= getMonsterStartFloor(monster);
}

function getMonsterIdsForTheme(theme = "c", tileType = "M", floor = 1) {
  if (typeof MONSTER_LOCATIONS === "undefined") {
    console.warn("MONSTER_LOCATIONS is missing. Check monloc.js load order.");
    return [];
  }

  const themeCode = normalizeThemeCode(theme);
  const floorLevel = Math.max(1, Math.floor(Number(floor) || 1));
  const isBossTile = String(tileType || "M").toUpperCase() === "B";
  const column = isBossTile ? bossColumnForTheme(themeCode) : themeCode;

  const allThemeIds = Object.keys(MONSTER_LOCATIONS).filter(monId => {
    const row = MONSTER_LOCATIONS[monId];
    return row && row[column] === true && getMonster(monId);
  });

  let ids = allThemeIds.filter(monId => isMonsterUnlockedForFloor(monId, floorLevel));

  // Accessibility: creature/phobia filters remove selected families when another valid enemy exists.
  if (typeof window !== "undefined" && typeof window.isMonsterFilteredByPhobia === "function") {
    const filtered = ids.filter(monId => !window.isMonsterFilteredByPhobia(monId));
    if (filtered.length) ids = filtered;
  } else if (typeof window !== "undefined" && typeof window.isSpiderPhobiaMode === "function" && window.isSpiderPhobiaMode()) {
    const filtered = ids.filter(monId => {
      const mon = getMonster(monId) || {};
      const haystack = `${monId} ${mon.monId || ""} ${mon.monName || ""} ${mon.monsterType || ""}`.toLowerCase();
      return !haystack.includes("spider");
    });
    if (filtered.length) ids = filtered;
  }

  // Early-floor safety fallback:
  // If a map contains a boss tile before any boss is unlocked for that theme,
  // use the lowest-startFloor boss for that theme, scaled to the current floor.
  // This prevents empty encounters without allowing high-level live stats.
  if (!ids.length && allThemeIds.length) {
    const lowestStart = Math.min(...allThemeIds.map(monId => getMonsterStartFloor(getMonster(monId))));
    return allThemeIds.filter(monId => getMonsterStartFloor(getMonster(monId)) === lowestStart);
  }

  return ids;
}

function getMonsterGrowthValue(monster, key, fallback) {
  const growth = monster.growth || monster.scaling || monster.floorGrowth || {};
  const value = growth[key];
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function isBossMonster(monster) {
  const type = String(monster.monsterType || monster.type || "").toLowerCase();
  const behavior = String(monster.behavior || "").toLowerCase();
  return type === "boss" || behavior === "boss";
}

function scaleMonster(monster, floor = 1, options = {}) {
  const liveFloor = Math.max(1, Math.floor(Number(floor) || 1));
  const startFloor = Math.max(1, Math.floor(Number(monster.startFloor ?? monster.unlockFloor ?? monster.baseLevel ?? 1) || 1));
  const tier = getMonsterTierForFloor(monster, liveFloor, options.rarity || options.forcedRarity || null);
  const hiddenLegendary = shouldApplyHiddenLegendary(monster, options);
  const tierStartFloor = Math.max(startFloor, Math.max(1, Math.floor(Number(tier.minFloor || startFloor) || startFloor)));

  // Scaling is now constrained by the current floor tier.
  // Example: floor 100 Epic monster scales from floor 71, not from floor 1.
  const scaleLevel = Math.max(0, liveFloor - tierStartFloor);
  const boss = isBossMonster(monster);

  const legendaryMod = hiddenLegendary ? HIDDEN_LEGENDARY_MODIFIER : { statMult: 1, growthMult: 1, pdefMult: 1, rewardMult: 1 };
  const statMult = Math.max(0.01, Number(tier.statMult || 1) * Number(legendaryMod.statMult || 1));
  const growthMult = Math.max(0.01, Number(tier.growthMult || 1) * Number(legendaryMod.growthMult || 1));
  const pdefMult = Math.max(0.01, Number(tier.pdefMult || 1) * Number(legendaryMod.pdefMult || 1));
  const rewardMult = Math.max(0.01, Number(tier.rewardMult || statMult || 1) * Number(legendaryMod.rewardMult || 1));
  const floorRewardMult = 1 + (scaleLevel * 0.03);

  const tierBaseHp = Math.max(1, Math.round(Number(monster.maxHp || monster.hp || 1) * statMult));
  const tierBaseMp = Math.max(0, Math.round(Number(monster.maxMp || monster.mp || 0) * statMult));
  const tierBaseAttack = Math.max(1, Math.round(Number(monster.attack || 1) * statMult));

  const hpGrowth = Math.max(1, Math.round(getMonsterGrowthValue(monster, "hp", boss ? Math.max(8, Math.round(tierBaseHp * 0.055)) : Math.max(3, Math.round(tierBaseHp * 0.075))) * growthMult));
  const mpGrowth = Math.max(0, Math.round(getMonsterGrowthValue(monster, "mp", boss ? 3 : 1) * growthMult));
  const attackGrowth = Math.max(1, Math.round(getMonsterGrowthValue(monster, "attack", boss ? Math.max(1, Math.round(tierBaseAttack * 0.035)) : Math.max(1, Math.round(tierBaseAttack * 0.055))) * growthMult));

  // PDEF is mitigation percentage, so it grows slowly and is not multiplied like HP/attack.
  const basePdef = Number(monster.pdef ?? monster.defense ?? 0);
  const tierBasePdef = Math.max(0, basePdef * pdefMult);
  const pdefGrowth = getMonsterGrowthValue(monster, "pdef", boss ? 0.08 : 0.05) * growthMult;

  const speedGrowth = getMonsterGrowthValue(monster, "speed", 0);
  const expGrowth = Math.max(1, Math.round(getMonsterGrowthValue(monster, "exp", boss ? Math.max(8, Math.round(monster.exp * 0.055)) : Math.max(3, Math.round(monster.exp * 0.075))) * growthMult));

  const maxHp = Math.max(1, Math.round(tierBaseHp + (scaleLevel * hpGrowth)));
  const maxMp = Math.max(0, Math.round(tierBaseMp + (scaleLevel * mpGrowth)));
  const livePdef = Math.round(tierBasePdef + (scaleLevel * pdefGrowth));

  const spell = monster.spell
    ? {
        ...monster.spell,
        damage: Math.max(1, Math.round((Number(monster.spell.damage || 0) * statMult) + (scaleLevel * getMonsterGrowthValue(monster, "spellDamage", boss ? 2 : 1) * growthMult)))
      }
    : monster.spell;

  const ranged = monster.ranged
    ? {
        ...monster.ranged,
        damage: Math.max(1, Math.round((Number(monster.ranged.damage || 0) * statMult) + (scaleLevel * getMonsterGrowthValue(monster, "rangedDamage", boss ? 2 : 1) * growthMult)))
      }
    : monster.ranged;

  const rarityLabel = tier.rarity === "base" ? "" : tier.rarity;

  return {
    ...monster,

    floor: liveFloor,
    difficulty: liveFloor,
    level: liveFloor,
    liveLevel: liveFloor,
    startFloor,
    tierStartFloor,
    scaleLevel,
    rarity: rarityLabel || undefined,
    rarityWeight: Number(tier.weight || 100),
    hiddenLegendary: hiddenLegendary || undefined,
    rewardMult: rewardMult * floorRewardMult,
    goldRewardMult: rewardMult * floorRewardMult,
    monName: applyRarityName(monster.monName || monster.name || "Monster", tier),

    hp: maxHp,
    maxHp,
    currentHp: maxHp,

    mp: maxMp,
    maxMp,
    currentMp: maxMp,

    attack: Math.max(1, Math.round(tierBaseAttack + (scaleLevel * attackGrowth))),
    pdef: livePdef,
    defense: livePdef,
    speed: Math.max(0, Math.round(monster.speed + (scaleLevel * speedGrowth))),

    exp: Math.max(0, Math.round((monster.exp * statMult) + (scaleLevel * expGrowth))),

    spell,
    ranged
  };
}

function getScaledMonsterVariantsForFloor(monster, floor = 1) {
  if (!monster) return [];
  const liveFloor = Math.max(1, Math.floor(Number(floor) || 1));

  if (!shouldUseGlobalMonsterTier(monster)) {
    return [scaleMonster(monster, liveFloor)];
  }

  return getFloorTierOptions(liveFloor).map(tier => scaleMonster(monster, liveFloor, { rarity: tier.rarity, preview: true, legendary: false }));
}

function getRandomMonsterForTheme(theme = "c", tileType = "M", floor = 1) {
  const ids = getMonsterIdsForTheme(theme, tileType, floor);

  if (!ids.length) {
    console.warn("Missing theme monster pool:", theme, tileType, floor);
    return null;
  }

  const oddityId = shouldRollRareOddity(theme, tileType, floor) ? getRandomRareOddity() : null;
  const monsterId = oddityId || randomChoice(ids);
  const monster = getMonster(monsterId);

  if (!monster) {
    console.warn("Missing monster:", monsterId);
    return null;
  }

  return scaleMonster(normalizeMonster(monster), floor);
}

// Backward compatibility.
// Existing code can still call getRandomMonsterFromPool(poolId, tileType).
//
// Accepted poolId examples:
// c, b, f
// C, B, F
// castle, beach, forest
// C3, B2, F4
// castle_3, beach_2, forest_4
function getRandomMonsterFromPool(poolId, tileType = "M") {
  const parsed = parseThemePoolId(poolId);
  return getRandomMonsterForTheme(parsed.theme, tileType, parsed.floor);
}

function getMonsterPool(poolId, tileType = "M") {
  const parsed = parseThemePoolId(poolId);
  return getMonsterIdsForTheme(parsed.theme, tileType, parsed.floor);
}

function parseThemePoolId(poolId) {
  const raw = String(poolId || "c").trim().toLowerCase();

  const compact = raw.match(/^([cbf])(\d+)$/);
  if (compact) {
    return {
      theme: compact[1],
      floor: Number(compact[2])
    };
  }

  const named = raw.match(/^(castle|beach|forest)[_-]?(\d+)?$/);
  if (named) {
    return {
      theme: normalizeThemeCode(named[1]),
      floor: Number(named[2] || 1)
    };
  }

  if (raw === "c" || raw === "b" || raw === "f") {
    return { theme: raw, floor: 1 };
  }

  return { theme: "c", floor: 1 };
}
