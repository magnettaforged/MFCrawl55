// =========================
// monloc.js
// Theme-based monster location table
// =========================
//
// Edit this like a spreadsheet.
//
// Columns:
// c  = normal Castle monster
// b  = normal Beach monster
// f  = normal Forest monster
// bc = Castle boss
// bb = Beach boss
// bf = Forest boss
//
// Y = included
// N = not included
//
// Difficulty is not stored here.
// monsterLoader.js scales selected monsters by floor.
//
// IMPORTANT:
// This file uses the grouped monster IDs from monster.js.
// Example: rat contains rat1.png / rat2.png in images[].

const MONSTER_LOCATION_TABLE = `
monid,c,b,f,bc,bb,bf
bandit,Y,Y,Y,N,N,N
bats,Y,N,Y,N,N,N
bcrab,N,N,N,N,Y,N
bdragon,N,N,N,Y,Y,Y
bgoblin,N,N,Y,N,N,N
bkraken,N,N,N,N,Y,N
borc,N,N,N,N,N,Y
bpirate,N,N,N,N,Y,N
bpirate_b,N,N,N,N,Y,N
captain,N,N,N,Y,N,N
crab,N,Y,N,N,N,N
fbandit,Y,Y,Y,N,N,N
fbandit_b,Y,Y,Y,N,N,N
fbandit_c,Y,Y,Y,N,N,N
fpirate,N,Y,N,N,N,N
fpirate_b,N,Y,N,N,N,N
goblin,N,N,Y,N,N,N
multicrab,N,Y,N,N,N,N
mushroom,N,N,Y,N,N,N
mzombie,Y,Y,Y,N,N,N
mzombie_b,Y,Y,Y,N,N,N
octopus,N,Y,N,N,N,N
orc,N,N,Y,N,N,N
rat,Y,Y,Y,N,N,N
skelemage,N,N,N,Y,N,N
skelemage_b,Y,N,N,N,N,N
skeleswsh,Y,N,N,N,N,N
skeleton,Y,N,N,N,N,N
skeleton_b,Y,N,N,N,N,N
spider,Y,N,Y,N,N,N
spider_b,Y,N,Y,N,N,N
squid,N,Y,N,N,N,N
wolf,Y,Y,Y,N,N,N
wraith,Y,N,N,N,N,N
wraith_b,N,N,N,Y,N,N
`;

function parseMonsterLocationTable(rawText) {
  const lines = rawText.trim().split("\n").map(line => line.trim()).filter(Boolean);
  const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",").map(v => v.trim());
    const row = {};

    headers.forEach((header, index) => {
      row[header] = values[index] || "N";
    });

    rows.push(row);
  }

  return { headers, rows };
}

function isLocationYes(value) {
  return String(value || "").trim().toUpperCase() === "Y";
}

function buildMonsterLocations(rawText) {
  const parsed = parseMonsterLocationTable(rawText);
  const locations = {};

  parsed.rows.forEach(row => {
    const monid = row.monid;
    if (!monid) return;

    locations[monid] = {
      c: isLocationYes(row.c),
      b: isLocationYes(row.b),
      f: isLocationYes(row.f),
      bc: isLocationYes(row.bc),
      bb: isLocationYes(row.bb),
      bf: isLocationYes(row.bf)
    };
  });

  return locations;
}

const MONSTER_LOCATIONS = buildMonsterLocations(MONSTER_LOCATION_TABLE);
