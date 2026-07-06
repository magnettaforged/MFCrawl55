// =========================
// ITEMLOADER.JS
// Supports Image column.
// =========================

function parseItemCsvTable(rawText) {
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

function itemNumber(value) {
  if (value === undefined || value === null || value === "") return 0;
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function yesNo(value) {
  return String(value || "").trim().toLowerCase() === "y";
}

const GAME_CONSUMABLES = {};
const GAME_KEYITEMS = {};
const GAME_ITEMS_BY_ID = {};

function buildConsumableTable() {
  if (typeof CONSUMABLE_DATA === "undefined") return;

  parseItemCsvTable(CONSUMABLE_DATA).forEach(row => {
    const item = {
      category: "consumable",
      itemName: row.ItemName || "Unknown",
      itemId: row.ItemID || "",
      image: row.Image || "",
      useType: row.UseType || "",
      power: itemNumber(row.Power),
      target: row.Target || "self",
      usableInCombat: yesNo(row.UsableInCombat),
      usableOutsideCombat: yesNo(row.UsableOutsideCombat),
      value: itemNumber(row.Value),
      description: row.Description || ""
    };

    if (!item.itemId) return;
    GAME_CONSUMABLES[item.itemId] = item;
    GAME_ITEMS_BY_ID[item.itemId] = item;
  });
}

function buildKeyItemTable() {
  if (typeof KEYITEM_DATA === "undefined") return;

  parseItemCsvTable(KEYITEM_DATA).forEach(row => {
    const item = {
      category: "keyitem",
      itemName: row.ItemName || "Unknown",
      itemId: row.ItemID || "",
      image: row.Image || "",
      scope: row.Scope || "floor",
      useType: row.UseType || "",
      value: itemNumber(row.Value),
      description: row.Description || ""
    };

    if (!item.itemId) return;
    GAME_KEYITEMS[item.itemId] = item;
    GAME_ITEMS_BY_ID[item.itemId] = item;
  });
}

function buildItemTables() {
  buildConsumableTable();
  buildKeyItemTable();
}

buildItemTables();

function getConsumable(itemId) { return GAME_CONSUMABLES[itemId] || null; }
function getKeyItem(itemId) { return GAME_KEYITEMS[itemId] || null; }
function getItemById(itemId) { return GAME_ITEMS_BY_ID[itemId] || null; }
function getItemDisplayName(itemId) {
  const item = getItemById(itemId);
  return item ? item.itemName : "Unknown Item";
}

function ensureInventoryShape(player) {
  if (!player.inventory || Array.isArray(player.inventory)) player.inventory = {};
  if (!player.inventory.consumables) player.inventory.consumables = {};
  if (!player.inventory.equipment) player.inventory.equipment = {};
  if (!player.inventory.keyitems) player.inventory.keyitems = {};
  if (!player.inventory.runes) player.inventory.runes = {};
  if (!player.inventory.gems) player.inventory.gems = {};
}

function getConsumableQuantity(player, itemId) {
  ensureInventoryShape(player);
  return player.inventory.consumables[itemId] || 0;
}

function addConsumable(player, itemId, amount = 1) {
  ensureInventoryShape(player);
  const item = getConsumable(itemId);
  if (!item) return false;
  player.inventory.consumables[itemId] = (player.inventory.consumables[itemId] || 0) + amount;
  return true;
}

function removeConsumable(player, itemId, amount = 1) {
  ensureInventoryShape(player);
  const current = player.inventory.consumables[itemId] || 0;
  if (current < amount) return false;
  player.inventory.consumables[itemId] = current - amount;
  if (player.inventory.consumables[itemId] <= 0) delete player.inventory.consumables[itemId];
  return true;
}

function hasConsumable(player, itemId, amount = 1) {
  return getConsumableQuantity(player, itemId) >= amount;
}

function addKeyItem(player, itemId, amount = 1) {
  ensureInventoryShape(player);
  const item = getKeyItem(itemId);
  if (!item) return false;
  const current = player.inventory.keyitems[itemId] === true ? 1 : Number(player.inventory.keyitems[itemId] || 0);
  player.inventory.keyitems[itemId] = Math.max(0, current) + Math.max(1, Math.floor(Number(amount) || 1));
  return true;
}

function hasKeyItem(player, itemId, amount = 1) {
  ensureInventoryShape(player);
  const current = player.inventory.keyitems[itemId] === true ? 1 : Number(player.inventory.keyitems[itemId] || 0);
  return current >= Math.max(1, Math.floor(Number(amount) || 1));
}

function removeKeyItem(player, itemId, amount = 1) {
  ensureInventoryShape(player);
  const current = player.inventory.keyitems[itemId] === true ? 1 : Number(player.inventory.keyitems[itemId] || 0);
  const qty = Math.max(1, Math.floor(Number(amount) || 1));
  if (current < qty) return false;
  const remaining = current - qty;
  if (remaining > 0) player.inventory.keyitems[itemId] = remaining;
  else delete player.inventory.keyitems[itemId];
  return true;
}

function canUseConsumableNow(item, gameMode = "roaming") {
  if (!item) return false;
  if (gameMode === "encounter") return item.usableInCombat;
  return item.usableOutsideCombat;
}

function useConsumable(itemId, player, gameMode = "roaming") {
  ensureInventoryShape(player);
  const item = getConsumable(itemId);

  if (!item) return { ok: false, message: "Item not found." };
  if (!hasConsumable(player, itemId, 1)) return { ok: false, message: `You do not have ${item.itemName}.` };
  if (!canUseConsumableNow(item, gameMode)) return { ok: false, message: `${item.itemName} cannot be used now.` };

  if (item.useType === "heal_hp") {
    const before = player.hp;
    player.hp = Math.min(player.maxHp, player.hp + item.power);
    removeConsumable(player, itemId, 1);
    return { ok: true, message: `${item.itemName} restored ${player.hp - before} HP.` };
  }

  if (item.useType === "heal_mp") {
    const before = player.mp;
    player.mp = Math.min(player.maxMp, player.mp + item.power);
    removeConsumable(player, itemId, 1);
    return { ok: true, message: `${item.itemName} restored ${player.mp - before} MP.` };
  }

  if (item.useType === "heal_both") {
    const beforeHp = player.hp;
    const beforeMp = player.mp;
    player.hp = Math.min(player.maxHp, player.hp + item.power);
    player.mp = Math.min(player.maxMp, player.mp + item.power);
    removeConsumable(player, itemId, 1);
    return { ok: true, message: `${item.itemName} restored ${player.hp - beforeHp} HP and ${player.mp - beforeMp} MP.` };
  }

  if (item.useType === "cure_poison") {
    if (!player.statusEffects) player.statusEffects = {};
    player.statusEffects.poison = false;
    removeConsumable(player, itemId, 1);
    return { ok: true, message: `${item.itemName} cured poison.` };
  }

  if (item.useType === "open_gold") {
    const amount = Math.max(0, Math.floor(Number(item.power || 0)));
    player.gold = Math.max(0, Number(player.gold || 0)) + amount;
    removeConsumable(player, itemId, 1);
    return { ok: true, goldGained: amount, message: `${item.itemName} contained ${amount} gold.` };
  }

  if (item.useType === "currency") {
    return { ok: false, message: `${item.itemName} is merchant currency and cannot be used directly.` };
  }

  if (item.useType === "escape") {
    removeConsumable(player, itemId, 1);
    return { ok: true, escape: true, message: `${item.itemName} used. You attempt to escape.` };
  }

  return { ok: false, message: `${item.itemName} has no usable effect yet.` };
}

function getConsumableInventoryList(player) {
  ensureInventoryShape(player);

  return Object.entries(player.inventory.consumables).map(([itemId, quantity]) => {
    const item = getConsumable(itemId);
    return {
      itemId,
      quantity,
      itemName: item ? item.itemName : itemId,
      image: item ? item.image : "",
      description: item ? item.description : "",
      useType: item ? item.useType : "",
      power: item ? item.power : 0,
      value: item ? item.value : 0
    };
  });
}

function getKeyItemInventoryList(player) {
  ensureInventoryShape(player);

  return Object.keys(player.inventory.keyitems).filter(itemId => player.inventory.keyitems[itemId]).map(itemId => {
    const item = getKeyItem(itemId);
    const quantity = player.inventory.keyitems[itemId] === true ? 1 : Math.max(1, Number(player.inventory.keyitems[itemId] || 1));
    return {
      quantity,
      itemId,
      itemName: item ? item.itemName : itemId,
      image: item ? item.image : "",
      description: item ? item.description : "",
      scope: item ? item.scope : "",
      useType: item ? item.useType : "",
      value: item ? item.value : 0
    };
  });
}
