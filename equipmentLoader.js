// =========================
// EQUIPMENTLOADER.JS
// Connects weapons.js, armor.js, cloaks.js, necklace.js, rings.js
// Supports Image, Icon, StatusImage, Tier, Rarity, MaxSockets.
// =========================

function parseEquipmentCsvTable(rawText) {
  const lines = rawText.trim().split("\n").map(line => line.trim()).filter(line => line.length > 0);
  const headers = lines[0].split(",").map(h => h.trim());
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",").map(v => v.trim());
    const row = {};

    headers.forEach((header, index) => {
      row[header] = values[index] ?? "";
    });

    rows.push(row);
  }

  return rows;
}

function equipNumber(value) {
  if (value === undefined || value === null || value === "") return 0;
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function defaultMaxSocketsForSlot(slot) {
  if (slot === "weapon" || slot === "armor") return 1;
  return 0;
}

function buildPosePath(assets) {
  if (!assets) return "";
  const folder = assets.folder || assets.poseFolder || "";
  const base = assets.base || assets.poseBase || "";
  const pose = assets.defaultPose || (Array.isArray(assets.poses) && assets.poses.length ? assets.poses[0] : "p01");

  if (folder && base) return `${folder}/${base}${pose}.png`;
  return "";
}

function normalizeEquipmentRow(row, slot) {
  return {
    slot,

    itemName: row.ItemName || row.Name || "Unknown",
    itemId: row.ItemID || row.ID || row.Id || "",
    image: row.Image || "",
    icon: row.Icon || row.IconImage || row.Image || "",
    statusImage: row.StatusImage || row.PoseImage || row.Image || "",

    character: (row.Character || "all").toLowerCase(),

    tier: (row.Tier || "").toLowerCase(),
    material: (row.Material || "").toLowerCase(),
    rarity: (row.Rarity || "common").toLowerCase(),
    maxSockets: row.MaxSockets === undefined || row.MaxSockets === ""
      ? defaultMaxSocketsForSlot(slot)
      : equipNumber(row.MaxSockets),

    reqLevel: equipNumber(row.ReqLevel),
    reqStr: equipNumber(row.ReqStr),
    reqDex: equipNumber(row.ReqDex),

    hp: equipNumber(row.Hp),
    mp: equipNumber(row.Mp),

    atk: equipNumber(row.Atk),
    mag: equipNumber(row.Mag),
    def: equipNumber(row.Def),
    mdef: equipNumber(row.MDef),
    speed: equipNumber(row.Speed),

    crit: equipNumber(row.Crit),
    dodge: equipNumber(row.Dodge),
    goldFind: equipNumber(row.GoldFind || row.GoldFindPct || row.GoldFindPercent),

    value: equipNumber(row.Value),

    description: row.Description || row.Desc || "",
    flavorText: row.FlavorText || row.Flavor || ""
  };
}

function normalizeEquipmentObject(itemId, data, slot) {
  const stats = data.stats || {};
  const assets = data.assets || {};
  const text = data.text || {};

  const posePath = buildPosePath(assets);
  const image = assets.image || assets.inventory || posePath || assets.icon || "";

  return {
    slot,

    itemName: data.itemName || data.name || itemId,
    itemId: data.itemId || itemId,
    image,
    icon: assets.icon || image,
    statusImage: assets.statusImage || assets.poseImage || posePath || image,

    character: (data.character || "all").toLowerCase(),

    tier: (data.tier || "").toLowerCase(),
    material: (data.material || "").toLowerCase(),
    rarity: (data.rarity || "common").toLowerCase(),
    maxSockets: data.maxSockets === undefined || data.maxSockets === ""
      ? defaultMaxSocketsForSlot(slot)
      : equipNumber(data.maxSockets),

    reqLevel: equipNumber(data.reqLevel),
    reqStr: equipNumber(data.reqStr),
    reqDex: equipNumber(data.reqDex),

    hp: equipNumber(stats.hp ?? data.hp),
    mp: equipNumber(stats.mp ?? data.mp),

    atk: equipNumber(stats.atk ?? data.atk),
    mag: equipNumber(stats.mag ?? data.mag),
    def: equipNumber(stats.def ?? data.def),
    mdef: equipNumber(stats.mdef ?? data.mdef),
    speed: equipNumber(stats.speed ?? data.speed),

    crit: equipNumber(stats.crit ?? data.crit),
    dodge: equipNumber(stats.dodge ?? data.dodge),
    goldFind: equipNumber(stats.goldFind ?? data.goldFind),

    value: equipNumber(data.value),

    description: text.description || data.description || "",
    flavorText: text.flavorText || data.flavorText || text.flavor || data.flavor || "",

    assets,
    text
  };
}

const GAME_EQUIPMENT = {
  weapon: {},
  armor: {},
  cloak: {},
  necklace: {},
  ring: {}
};

const GAME_EQUIPMENT_BY_ID = {};

function addEquipmentRows(rawData, slot) {
  if (!rawData) return;

  if (typeof rawData === "string") {
    const rows = parseEquipmentCsvTable(rawData);

    rows.forEach(row => {
      const item = normalizeEquipmentRow(row, slot);

      if (!item.itemId) {
        console.warn("Equipment row missing ItemID:", row);
        return;
      }

      GAME_EQUIPMENT[slot][item.itemId] = item;
      GAME_EQUIPMENT_BY_ID[item.itemId] = item;
    });

    return;
  }

  if (typeof rawData === "object") {
    Object.entries(rawData).forEach(([itemId, data]) => {
      const item = normalizeEquipmentObject(itemId, data || {}, slot);

      if (!item.itemId) {
        console.warn("Equipment object missing ItemID:", itemId, data);
        return;
      }

      GAME_EQUIPMENT[slot][item.itemId] = item;
      GAME_EQUIPMENT_BY_ID[item.itemId] = item;
    });

    return;
  }

  console.warn("Unsupported equipment data format:", slot, rawData);
}

function buildEquipmentTables() {
  if (typeof WEAPON_DATA !== "undefined") addEquipmentRows(WEAPON_DATA, "weapon");
  if (typeof ARMOR_DATA !== "undefined") addEquipmentRows(ARMOR_DATA, "armor");
  if (typeof CLOAK_DATA !== "undefined") addEquipmentRows(CLOAK_DATA, "cloak");
  if (typeof NECKLACE_DATA !== "undefined") addEquipmentRows(NECKLACE_DATA, "necklace");
  if (typeof RING_DATA !== "undefined") addEquipmentRows(RING_DATA, "ring");
}

buildEquipmentTables();

function getEquipmentById(itemId) {
  return GAME_EQUIPMENT_BY_ID[itemId] || null;
}

function getEquipmentBySlot(slot) {
  if (slot === "ring1" || slot === "ring2") slot = "ring";
  return Object.values(GAME_EQUIPMENT[slot] || {});
}

function getAllEquipment() {
  return Object.values(GAME_EQUIPMENT_BY_ID);
}

function getEquipmentDisplayName(itemId, upgradeLevel = 0) {
  const item = getEquipmentById(itemId);
  if (!item) return "None";
  return upgradeLevel > 0 ? `${item.itemName} +${upgradeLevel}` : item.itemName;
}

function upgradeStat(baseValue, upgradeLevel) {
  if (!baseValue || upgradeLevel <= 0) return baseValue;
  const bonus = Math.max(1, Math.floor(baseValue * 0.2 * upgradeLevel));
  return baseValue + bonus;
}

function getUpgradedEquipmentStats(item, upgradeLevel = 0) {
  if (!item) {
    return { hp: 0, mp: 0, atk: 0, mag: 0, def: 0, mdef: 0, speed: 0, crit: 0, dodge: 0, goldFind: 0 };
  }

  return {
    hp: upgradeStat(item.hp, upgradeLevel),
    mp: upgradeStat(item.mp, upgradeLevel),
    atk: upgradeStat(item.atk, upgradeLevel),
    mag: upgradeStat(item.mag, upgradeLevel),
    def: upgradeStat(item.def, upgradeLevel),
    mdef: upgradeStat(item.mdef, upgradeLevel),
    speed: upgradeStat(item.speed, upgradeLevel),
    crit: item.crit || 0,
    dodge: item.dodge || 0,
    goldFind: upgradeStat(item.goldFind, upgradeLevel)
  };
}

function getEquipmentStatLine(item, upgradeLevel = 0) {
  if (!item) return "None";

  const stats = getUpgradedEquipmentStats(item, upgradeLevel);
  const parts = [];

  if (stats.atk) parts.push(`Atk ${stats.atk}`);
  if (stats.mag) parts.push(`Mag ${stats.mag}`);
  if (stats.def) parts.push(`Def ${stats.def}`);
  if (stats.mdef) parts.push(`MDef ${stats.mdef}`);
  if (stats.hp) parts.push(`HP ${stats.hp}`);
  if (stats.mp) parts.push(`MP ${stats.mp}`);
  if (stats.speed) parts.push(`Speed ${stats.speed}`);
  if (stats.crit) parts.push(`Crit ${stats.crit}%`);
  if (stats.dodge) parts.push(`Dodge ${stats.dodge}%`);
  if (stats.goldFind) parts.push(`Gold Find ${stats.goldFind}%`);

  const req = [];
  if (item.reqLevel) req.push(`Lv ${item.reqLevel}`);

  if (req.length) parts.push(`Req: ${req.join("/")}`);
  if (item.maxSockets) parts.push(`Sockets ${item.maxSockets}`);

  return parts.length ? parts.join(" · ") : "No stats";
}


function isFullAssetPath(path) {
  return typeof path === "string" && (/^(assets\/|\.\/|\.\.\/|https?:\/\/|data:)/i).test(path);
}

function getEquipmentImageFolder(item) {
  if (!item) return "items";
  if (item.slot === "weapon") return "weapons";
  if (item.slot === "armor") return "armor";
  if (item.slot === "ring" || item.slot === "necklace") return "jewelry";
  if (item.slot === "cloak") return "cloaks";
  return "items";
}

function resolveEquipmentImagePath(item, imageValue) {
  if (!item || !imageValue) return "";
  const image = String(imageValue).trim();
  if (!image) return "";
  if (isFullAssetPath(image)) return image;
  return `assets/${getEquipmentImageFolder(item)}/${image}`;
}

function getEquipmentIconPath(item) {
  return resolveEquipmentImagePath(item, item ? (item.icon || item.image) : "");
}

function getEquipmentStatusImagePath(item) {
  return resolveEquipmentImagePath(item, item ? (item.statusImage || item.image || item.icon) : "");
}

function canCharacterEquipItem(player, item) {
  if (!player || !item) return false;

  const character = (player.character || "").toLowerCase();

  if (item.character !== "all" && item.character !== character) return false;
  if ((player.level || 1) < item.reqLevel) return false;

  return true;
}
