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

function normalizeMonsterImage(image) {
  if (!image) return "";
  return String(image).replace(/^.*[\\/]/, "");
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
    defense: Number(baseMonster.defense ?? 0),
    magicDefense: Number(baseMonster.magicDefense ?? 0),
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

function scaleMonster(monster, floor = 1) {
  const liveFloor = Math.max(1, Math.floor(Number(floor) || 1));
  const startFloor = Math.max(1, Math.floor(Number(monster.startFloor ?? monster.unlockFloor ?? monster.baseLevel ?? 1) || 1));

  // Scale from the monster's unlock floor so late monsters do not double-scale
  // the moment they first appear.
  const growthFloor = Math.max(1, liveFloor - startFloor + 1);

  const hpMult = 1 + ((growthFloor - 1) * 0.10);
  const statMult = 1 + ((growthFloor - 1) * 0.07);
  const expMult = 1 + ((growthFloor - 1) * 0.10);

  const maxHp = Math.max(1, Math.round(monster.maxHp * hpMult));

  return {
    ...monster,

    floor: liveFloor,
    difficulty: liveFloor,
    level: liveFloor,
    liveLevel: liveFloor,

    hp: maxHp,
    maxHp,
    currentHp: maxHp,

    attack: Math.max(1, Math.round(monster.attack * statMult)),
    defense: Math.max(0, Math.round(monster.defense * statMult)),
    magicDefense: Math.max(0, Math.round(monster.magicDefense * statMult)),

    exp: Math.max(0, Math.round(monster.exp * expMult))
  };
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
