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
    pdef: equipNumber(stats.pdef ?? data.pdef ?? stats.def ?? data.def),
    mdef: equipNumber(stats.mdef ?? data.mdef),
    fireRes: equipNumber(stats.fireRes ?? data.fireRes),
    iceRes: equipNumber(stats.iceRes ?? data.iceRes),
    shockRes: equipNumber(stats.shockRes ?? data.shockRes),
    darkRes: equipNumber(stats.darkRes ?? data.darkRes),
    speed: equipNumber(stats.speed ?? data.speed),

    crit: equipNumber(stats.crit ?? data.crit),
    dodge: equipNumber(stats.dodge ?? data.dodge),
    goldFind: equipNumber(stats.goldFind ?? data.goldFind),
    hpPct: equipNumber(stats.hpPct ?? data.hpPct),
    mpPct: equipNumber(stats.mpPct ?? data.mpPct),
    atkPct: equipNumber(stats.atkPct ?? data.atkPct),
    magPct: equipNumber(stats.magPct ?? data.magPct),
    speedPct: equipNumber(stats.speedPct ?? data.speedPct),
    lifeStealPct: equipNumber(stats.lifeStealPct ?? data.lifeStealPct),
    fireDamagePct: equipNumber(stats.fireDamagePct ?? data.fireDamagePct),
    iceDamagePct: equipNumber(stats.iceDamagePct ?? data.iceDamagePct),
    shockDamagePct: equipNumber(stats.shockDamagePct ?? data.shockDamagePct),
    darkDamagePct: equipNumber(stats.darkDamagePct ?? data.darkDamagePct),
    bonusSockets: equipNumber(stats.bonusSockets ?? data.bonusSockets),

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
    return {
      hp: 0, mp: 0, atk: 0, mag: 0, def: 0, pdef: 0, mdef: 0,
      fireRes: 0, iceRes: 0, shockRes: 0, darkRes: 0,
      speed: 0, crit: 0, dodge: 0, goldFind: 0,
      hpPct: 0, mpPct: 0, atkPct: 0, magPct: 0, speedPct: 0, lifeStealPct: 0,
      fireDamagePct: 0, iceDamagePct: 0, shockDamagePct: 0, darkDamagePct: 0,
      bonusSockets: 0
    };
  }

  const stats = item.stats || {};
  const base = (key, fallback = 0) => {
    if (item.generated && stats[key] !== undefined) return equipNumber(stats[key]);
    return equipNumber(item[key] ?? stats[key] ?? fallback);
  };

  return {
    hp: upgradeStat(base("hp"), upgradeLevel),
    mp: upgradeStat(base("mp"), upgradeLevel),
    atk: upgradeStat(base("atk"), upgradeLevel),
    mag: upgradeStat(base("mag"), upgradeLevel),
    def: upgradeStat(base("def", base("pdef")), upgradeLevel),
    pdef: upgradeStat(base("pdef", base("def")), upgradeLevel),
    mdef: upgradeStat(base("mdef"), upgradeLevel),
    fireRes: upgradeStat(base("fireRes"), upgradeLevel),
    iceRes: upgradeStat(base("iceRes"), upgradeLevel),
    shockRes: upgradeStat(base("shockRes"), upgradeLevel),
    darkRes: upgradeStat(base("darkRes"), upgradeLevel),
    speed: upgradeStat(base("speed"), upgradeLevel),
    crit: base("crit"),
    dodge: base("dodge"),
    goldFind: upgradeStat(base("goldFind"), upgradeLevel),
    hpPct: base("hpPct"),
    mpPct: base("mpPct"),
    atkPct: base("atkPct"),
    magPct: base("magPct"),
    speedPct: base("speedPct"),
    lifeStealPct: base("lifeStealPct"),
    fireDamagePct: base("fireDamagePct"),
    iceDamagePct: base("iceDamagePct"),
    shockDamagePct: base("shockDamagePct"),
    darkDamagePct: base("darkDamagePct"),
    bonusSockets: base("bonusSockets")
  };
}

function getEquipmentStatLine(item, upgradeLevel = 0) {
  if (!item) return "None";

  const stats = getUpgradedEquipmentStats(item, upgradeLevel);
  const parts = [];

  if (stats.atk) parts.push(`Atk ${stats.atk}`);
  if (stats.mag) parts.push(`Mag ${stats.mag}`);
  if (stats.pdef || stats.def) parts.push(`PDEF ${stats.pdef || stats.def}%`);
  if (stats.fireRes || stats.iceRes || stats.shockRes || stats.darkRes) {
    const resValues = [stats.fireRes || 0, stats.iceRes || 0, stats.shockRes || 0, stats.darkRes || 0];
    if (resValues.every(v => v === resValues[0]) && resValues[0]) parts.push(`All Res ${resValues[0]}%`);
    else {
      if (stats.fireRes) parts.push(`Fire Res ${stats.fireRes}%`);
      if (stats.iceRes) parts.push(`Ice Res ${stats.iceRes}%`);
      if (stats.shockRes) parts.push(`Shock Res ${stats.shockRes}%`);
      if (stats.darkRes) parts.push(`Dark Res ${stats.darkRes}%`);
    }
  }
  if (stats.hp) parts.push(`HP ${stats.hp}`);
  if (stats.mp) parts.push(`MP ${stats.mp}`);
  if (stats.speed) parts.push(`Speed ${stats.speed}`);
  if (stats.crit) parts.push(`Crit ${stats.crit}%`);
  if (stats.dodge) parts.push(`Dodge ${stats.dodge}%`);
  if (stats.hpPct) parts.push(`HP ${stats.hpPct}%`);
  if (stats.mpPct) parts.push(`MP ${stats.mpPct}%`);
  if (stats.atkPct) parts.push(`ATK ${stats.atkPct}%`);
  if (stats.magPct) parts.push(`MAG ${stats.magPct}%`);
  if (stats.speedPct) parts.push(`SPD ${stats.speedPct}%`);
  if (stats.lifeStealPct) parts.push(`Life ${stats.lifeStealPct}%`);
  if (stats.fireDamagePct) parts.push(`Fire Dmg ${stats.fireDamagePct}%`);
  if (stats.iceDamagePct) parts.push(`Ice Dmg ${stats.iceDamagePct}%`);
  if (stats.shockDamagePct) parts.push(`Shock Dmg ${stats.shockDamagePct}%`);
  if (stats.darkDamagePct) parts.push(`Dark Dmg ${stats.darkDamagePct}%`);
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
  if (item.slot === "ring" || item.slot === "necklace") return "jewlery";
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
