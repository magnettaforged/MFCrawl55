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
    dodgeChance: Number(baseMonster.dodgeChance ?? 0)
  };
}

function normalizeThemeCode(theme) {
  const value = String(theme || "c").trim().toLowerCase();

  if (value === "castle") return "c";
  if (value === "beach") return "b";
  if (value === "forest") return "f";

  if (value === "c" || value === "b" || value === "f") return value;

  return "c";
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

  const ids = allThemeIds.filter(monId => isMonsterUnlockedForFloor(monId, floorLevel));

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
  const livePdef = Math.max(0, Math.min(85, Math.round(tierBasePdef + (scaleLevel * pdefGrowth))));

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

  const monsterId = randomChoice(ids);
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
