// =========================
// RINGS.JS
// Starter/static ring data plus icon pool note for generated rings.
// Generated rings are created at runtime in index.html.
// =========================

const RING_DATA = {
  copper_ring: {
    itemName: "Copper Ring",
    character: "all",
    tier: "ring",
    rarity: "common",
    reqLevel: 1,
    maxSockets: 0,
    value: 15,
    stats: { hp: 10 },
    assets: { icon: "assets/jewelry/ring2.webp", image: "ring2.webp" },
    text: { description: "A simple starter ring." }
  },
  iron_ring: {
    itemName: "Iron Ring",
    character: "all",
    tier: "ring",
    rarity: "common",
    reqLevel: 1,
    maxSockets: 0,
    value: 15,
    stats: { mp: 10 },
    assets: { icon: "assets/jewelry/ring1.webp", image: "ring1.webp" },
    text: { description: "A simple starter ring." }
  }
};

const RING_ICON_POOLS_DATA = {
  common: ["ring1", "ring2", "ring3", "ring4"],
  normal: ["ring1", "ring2", "ring3", "ring4"],
  basic: ["ring1", "ring2", "ring3", "ring4"],
  magical: ["magicring1", "magicring2", "magicring3", "magicring4"],
  rare: ["rarering1", "rarering2", "rarering3", "rarering4"],
  epic: ["epicring1", "epicring2", "epicring3", "epicring4"],
  legendary: ["legendaryring1", "legendaryring2", "legendaryring3", "legendaryring4"],
  unique: ["reignring1", "mayaring1", "nadiaring1", "kyraring1"]
};
