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

function scaleMonster(monster, floor = 1) {
  const liveFloor = Math.max(1, Math.floor(Number(floor) || 1));
  const startFloor = Math.max(1, Math.floor(Number(monster.startFloor ?? monster.unlockFloor ?? monster.baseLevel ?? 1) || 1));

  // New rule:
  // A monster's base stats are its strength when it first enters the pool.
  // Scaling only starts after that.
  //
  // Example:
  // startFloor 30, currentFloor 35 => scaleLevel 5.
  const scaleLevel = Math.max(0, liveFloor - startFloor);
  const boss = isBossMonster(monster);

  const hpGrowth = getMonsterGrowthValue(monster, "hp", boss ? Math.max(8, Math.round(monster.maxHp * 0.055)) : Math.max(3, Math.round(monster.maxHp * 0.075)));
  const mpGrowth = getMonsterGrowthValue(monster, "mp", boss ? 3 : 1);
  const attackGrowth = getMonsterGrowthValue(monster, "attack", boss ? Math.max(1, Math.round(monster.attack * 0.035)) : Math.max(1, Math.round(monster.attack * 0.055)));
  const defenseGrowth = getMonsterGrowthValue(monster, "defense", boss ? Math.max(1, Math.round(monster.defense * 0.035)) : Math.max(0, Math.round(monster.defense * 0.05)));
  const magicDefenseGrowth = getMonsterGrowthValue(monster, "magicDefense", boss ? Math.max(1, Math.round(monster.magicDefense * 0.035)) : Math.max(0, Math.round(monster.magicDefense * 0.05)));
  const speedGrowth = getMonsterGrowthValue(monster, "speed", 0);
  const expGrowth = getMonsterGrowthValue(monster, "exp", boss ? Math.max(8, Math.round(monster.exp * 0.055)) : Math.max(3, Math.round(monster.exp * 0.075)));

  const maxHp = Math.max(1, Math.round(monster.maxHp + (scaleLevel * hpGrowth)));
  const maxMp = Math.max(0, Math.round(monster.maxMp + (scaleLevel * mpGrowth)));

  const spell = monster.spell
    ? {
        ...monster.spell,
        damage: Math.max(1, Math.round(Number(monster.spell.damage || 0) + (scaleLevel * getMonsterGrowthValue(monster, "spellDamage", boss ? 2 : 1))))
      }
    : monster.spell;

  const ranged = monster.ranged
    ? {
        ...monster.ranged,
        damage: Math.max(1, Math.round(Number(monster.ranged.damage || 0) + (scaleLevel * getMonsterGrowthValue(monster, "rangedDamage", boss ? 2 : 1))))
      }
    : monster.ranged;

  return {
    ...monster,

    floor: liveFloor,
    difficulty: liveFloor,
    level: liveFloor,
    liveLevel: liveFloor,
    startFloor,
    scaleLevel,

    hp: maxHp,
    maxHp,
    currentHp: maxHp,

    mp: maxMp,
    maxMp,
    currentMp: maxMp,

    attack: Math.max(1, Math.round(monster.attack + (scaleLevel * attackGrowth))),
    defense: Math.max(0, Math.round(monster.defense + (scaleLevel * defenseGrowth))),
    magicDefense: Math.max(0, Math.round(monster.magicDefense + (scaleLevel * magicDefenseGrowth))),
    speed: Math.max(0, Math.round(monster.speed + (scaleLevel * speedGrowth))),

    exp: Math.max(0, Math.round(monster.exp + (scaleLevel * expGrowth))),

    spell,
    ranged
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
