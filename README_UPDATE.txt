Dungeon v0.7.6b generated weapon/armor + ring/map fixes

Replace these files in the repository root:
- index.html
- equipmentLoader.js
- rings.js
- keyitems.js
- plus the included support JS files if you want the full synced package.

Changes:
- Generated magic+ weapons and armor are live from equipment loot rolls.
- Generated weapons/armor preserve their base item's image/icon/status pose assets.
  Example: Warded Black Full Plate of Warding still uses Black Full Plate visuals.
- Generated rings/weapons/armor now show correct generated names in inventory/equipment menus.
- Generated items may roll prefix only, suffix only, or prefix+suffix.
- Chest equipment roll can produce generated equipment.
- Monsters have a small generated equipment drop chance.
- Minimap discovery now uses a fresh floor-instance key so a reused map layout does not appear pre-completed on a new/revisited floor instance.
- Version label: v0.7.6b
