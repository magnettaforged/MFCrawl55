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
// monsterLoader.js can scale selected monsters by floor/difficulty.

const MONSTER_LOCATION_TABLE = `
monid,c,b,f,bc,bb,bf
bandit1,Y,Y,Y,N,N,N
bandit2,Y,Y,Y,N,N,N
bats1,Y,N,Y,N,N,N
bats2,Y,N,Y,N,N,N
bcrab1,N,N,N,N,Y,N
bcrab2,N,N,N,N,Y,N
bdragon1,N,N,N,Y,Y,Y
bdragon2,N,N,N,Y,Y,Y
bgoblin1,N,N,Y,N,N,N
bgoblin2,N,N,Y,N,N,N
bkraken1,N,N,N,N,Y,N
bkraken2,N,N,N,N,Y,N
borc1,N,N,N,N,N,Y
borc2,N,N,N,N,N,Y
bpirate1,N,N,N,N,Y,N
bpirate2,N,N,N,N,Y,N
bpirate3,N,N,N,N,Y,N
bpirate4,N,N,N,N,Y,N
captain1,N,N,N,Y,N,N
captain2,N,N,N,Y,N,N
crab1,N,Y,N,N,N,N
crab2,N,Y,N,N,N,N
fbandit1,Y,Y,Y,N,N,N
fbandit2,Y,Y,Y,N,N,N
fbandit3,Y,Y,Y,N,N,N
fbandit4,Y,Y,Y,N,N,N
fbandit5,Y,Y,Y,N,N,N
fbandit6,Y,Y,Y,N,N,N
fpirate1,N,Y,N,N,N,N
fpirate2,N,Y,N,N,N,N
fpirate3,N,Y,N,N,N,N
fpirate4,N,Y,N,N,N,N
goblin1,N,N,Y,N,N,N
goblin2,N,N,Y,N,N,N
multicrab1,N,Y,N,N,N,N
multicrab2,N,Y,N,N,N,N
mushroom1,N,N,Y,N,N,N
mushroom2,N,N,Y,N,N,N
mzombie1,Y,Y,Y,N,N,N
mzombie2,Y,Y,Y,N,N,N
mzombie3,Y,Y,Y,N,N,N
mzombie4,Y,Y,Y,N,N,N
octopus1,N,Y,N,N,N,N
octopus2,N,Y,N,N,N,N
orc1,N,N,Y,N,N,N
orc2,N,N,Y,N,N,N
rat1,Y,Y,Y,N,N,N
rat2,Y,Y,Y,N,N,N
skelemage1,N,N,N,Y,N,N
skelemage2,N,N,N,Y,N,N
skelemage3,Y,N,N,N,N,N
skelemage4,Y,N,N,N,N,N
skeleswsh1,Y,N,N,N,N,N
skeleswsh2,Y,N,N,N,N,N
skeleton1,Y,N,N,N,N,N
skeleton2,Y,N,N,N,N,N
skeleton3,Y,N,N,N,N,N
skeleton4,Y,N,N,N,N,N
spider1,Y,N,Y,N,N,N
spider2,Y,N,Y,N,N,N
spider3,Y,N,Y,N,N,N
spider4,Y,N,Y,N,N,N
squid1,N,Y,N,N,N,N
squid2,N,Y,N,N,N,N
wolf1,Y,Y,Y,N,N,N
wolf2,Y,Y,Y,N,N,N
wraith1,Y,N,N,N,N,N
wraith2,Y,N,N,N,N,N
wraith3,N,N,N,Y,N,N
wraith4,N,N,N,Y,N,N
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
