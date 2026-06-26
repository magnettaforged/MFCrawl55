// =========================
// RUNELOADER.JS
// Supports Image column.
// =========================

function parseRuneCsvTable(rawText) {
  const lines = rawText.trim().split("\n").map(line => line.trim()).filter(line => line.length > 0);
  const headers = lines[0].split(",").map(h => h.trim());
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",").map(v => v.trim());
    const row = {};
    headers.forEach((header, index) => row[header] = values[index] ?? "");
    rows.push(row);
  }

  return rows;
}

function runeNumber(value) {
  if (value === undefined || value === null || value === "") return 0;
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

const GAME_RUNES = {};

function buildRuneTable() {
  if (typeof RUNE_DATA === "undefined") return;

  parseRuneCsvTable(RUNE_DATA).forEach(row => {
    const rune = {
      runeName: row.RuneName || "Unknown",
      runeId: row.RuneID || "",
      image: row.Image || "",
      symbol: row.Symbol || "",
      meaning: row.Meaning || "",
      effectType: row.EffectType || "",
      baseValue: runeNumber(row.BaseValue),
      color: row.Color || "",
      description: row.Description || ""
    };

    if (!rune.runeId) return;
    GAME_RUNES[rune.runeId] = rune;
  });
}

buildRuneTable();

function getRuneById(runeId) { return GAME_RUNES[runeId] || null; }
function getAllRunes() { return Object.values(GAME_RUNES); }

function getRuneValue(runeId, level = 0) {
  const rune = getRuneById(runeId);
  if (!rune) return 0;
  const multipliers = [1, 1.5, 2, 2.5];
  const clampedLevel = Math.max(0, Math.min(3, Number(level) || 0));
  return rune.baseValue * multipliers[clampedLevel];
}

function getRuneDisplayName(runeId, level = 0) {
  const rune = getRuneById(runeId);
  if (!rune) return "Unknown Rune";
  const suffix = level > 0 ? ` +${level}` : "";
  return `${rune.runeName} Rune${suffix}`;
}

function getRuneStatLine(runeId, level = 0) {
  const rune = getRuneById(runeId);
  if (!rune) return "";
  const value = getRuneValue(runeId, level);

  switch (rune.effectType) {
    case "gold_find_pct": return `Gold Find +${value}%`;
    case "attack_pct": return `Attack +${value}%`;
    case "pierce_pct": return `Ignore ${value}% Defense`;
    case "magic_pct": return `Magic +${value}%`;
    case "speed_pct": return `Speed +${value}%`;
    case "fire_weapon_pct": return `${value}% weapon attack as Fire`;
    case "life_steal_pct": return `Life Steal ${value}%`;
    case "shock_weapon_pct": return `${value}% weapon attack as Shock`;
    case "slow_chance_pct": return `Slow Chance ${value}%`;
    case "light_bonus_pct": return `Light enemies take +${value}% damage`;
    case "defense_pct": return `Defense +${value}%`;
    case "undead_bonus_pct": return `Undead enemies take +${value}% damage`;
    default: return rune.description || "";
  }
}

function ensureRuneInventory(player) {
  if (!player.inventory) player.inventory = {};
  if (!player.inventory.runes) player.inventory.runes = {};
}

function normalizeRuneLevelObject(player, runeId) {
  ensureRuneInventory(player);
  if (!player.inventory.runes[runeId]) player.inventory.runes[runeId] = { 0: 0, 1: 0, 2: 0, 3: 0 };
  for (let i = 0; i <= 3; i++) {
    if (player.inventory.runes[runeId][i] === undefined) player.inventory.runes[runeId][i] = 0;
  }
}

function addRune(player, runeId, level = 0, quantity = 1) {
  const rune = getRuneById(runeId);
  if (!rune) return false;
  level = Math.max(0, Math.min(3, Number(level) || 0));
  normalizeRuneLevelObject(player, runeId);
  player.inventory.runes[runeId][level] += quantity;
  return true;
}

function removeRune(player, runeId, level = 0, quantity = 1) {
  level = Math.max(0, Math.min(3, Number(level) || 0));
  normalizeRuneLevelObject(player, runeId);
  if (player.inventory.runes[runeId][level] < quantity) return false;
  player.inventory.runes[runeId][level] -= quantity;
  return true;
}

function getRuneQuantity(player, runeId, level = 0) {
  level = Math.max(0, Math.min(3, Number(level) || 0));
  normalizeRuneLevelObject(player, runeId);
  return player.inventory.runes[runeId][level] || 0;
}

function getSocketedRuneCounts(player, exclude = null) {
  const counts = {};
  if (!player.inventory || !player.inventory.equipment) return counts;

  Object.entries(player.inventory.equipment).forEach(([itemId, record]) => {
    if (!record || !Array.isArray(record.sockets)) return;

    record.sockets.forEach((socket, index) => {
      if (!socket || !socket.runeId) return;
      if (exclude && exclude.itemId === itemId && exclude.socketIndex === index) return;
      const key = `${socket.runeId}:${socket.level || 0}`;
      counts[key] = (counts[key] || 0) + 1;
    });
  });

  return counts;
}

function getAvailableRuneQuantity(player, runeId, level = 0, exclude = null) {
  const owned = getRuneQuantity(player, runeId, level);
  const socketed = getSocketedRuneCounts(player, exclude);
  const key = `${runeId}:${level}`;
  return owned - (socketed[key] || 0);
}

function getRuneInventoryList(player, exclude = null) {
  ensureRuneInventory(player);
  const list = [];

  Object.keys(player.inventory.runes).forEach(runeId => {
    for (let level = 0; level <= 3; level++) {
      const quantity = getRuneQuantity(player, runeId, level);
      if (quantity <= 0) continue;
      const rune = getRuneById(runeId);
      list.push({
        runeId,
        level,
        quantity,
        available: getAvailableRuneQuantity(player, runeId, level, exclude),
        rune,
        image: rune ? rune.image : "",
        displayName: getRuneDisplayName(runeId, level),
        statLine: getRuneStatLine(runeId, level)
      });
    }
  });

  return list;
}

function getSocketedRunesForItemRecord(record) {
  if (!record || !Array.isArray(record.sockets)) return [];
  return record.sockets.filter(socket => socket && socket.runeId);
}

function getRuneBonusTotalsFromRecords(player, records) {
  const totals = {
    goldFindPct: 0,
    attackPct: 0,
    piercePct: 0,
    magicPct: 0,
    speedPct: 0,
    fireWeaponPct: 0,
    lifeStealPct: 0,
    shockWeaponPct: 0,
    slowChancePct: 0,
    lightBonusPct: 0,
    defensePct: 0,
    undeadBonusPct: 0
  };

  records.forEach(record => {
    getSocketedRunesForItemRecord(record).forEach(socket => {
      const rune = getRuneById(socket.runeId);
      if (!rune) return;
      const value = getRuneValue(socket.runeId, socket.level || 0);

      switch (rune.effectType) {
        case "gold_find_pct": totals.goldFindPct += value; break;
        case "attack_pct": totals.attackPct += value; break;
        case "pierce_pct": totals.piercePct += value; break;
        case "magic_pct": totals.magicPct += value; break;
        case "speed_pct": totals.speedPct += value; break;
        case "fire_weapon_pct": totals.fireWeaponPct += value; break;
        case "life_steal_pct": totals.lifeStealPct += value; break;
        case "shock_weapon_pct": totals.shockWeaponPct += value; break;
        case "slow_chance_pct": totals.slowChancePct += value; break;
        case "light_bonus_pct": totals.lightBonusPct += value; break;
        case "defense_pct": totals.defensePct += value; break;
        case "undead_bonus_pct": totals.undeadBonusPct += value; break;
      }
    });
  });

  return totals;
}
