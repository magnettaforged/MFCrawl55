// =========================
// drops.js
// Monster drop rolling
// =========================

function rollBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollMonsterDrops(monsterOrId) {
  const monster = typeof monsterOrId === "string"
    ? (typeof MONSTERS !== "undefined" ? MONSTERS[monsterOrId] : null)
    : monsterOrId;

  const drops = [];

  if (!monster || !Array.isArray(monster.drops)) {
    return drops;
  }

  monster.drops.forEach(drop => {
    const roll = Math.random() * 100;

    if (roll > Number(drop.chance || 0)) return;

    if (drop.type === "gold") {
      drops.push({
        type: "gold",
        name: "Gold",
        amount: rollBetween(Number(drop.min || 0), Number(drop.max || 0))
      });
      return;
    }

    const minQty = Math.max(1, Math.floor(Number(drop.minQty ?? drop.min ?? 1) || 1));
    const maxQty = Math.max(minQty, Math.floor(Number(drop.maxQty ?? drop.max ?? minQty) || minQty));
    drops.push({
      type: "item",
      id: drop.id,
      name: drop.name || drop.id,
      amount: rollBetween(minQty, maxQty)
    });
  });

  return drops;
}
