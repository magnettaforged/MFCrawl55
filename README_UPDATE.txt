Dungeon v0.7.6c UI cleanup

Replace these files with the contents of this package.

Main changes:
- Armor display names strip leading character names, without changing item IDs or image paths.
- Generated armor names use the clean base armor name and keep the base armor visuals.
- Ring icon paths audited:
  common/basic/normal -> ring1-4
  magical -> magicring1-4
  rare -> rarering1-4
  epic -> epicring1-4
  legendary -> legendaryring1-4
  unique -> character ring icons
- Ring/equipment icons now try .webp first, then .png fallback.
- Equipment detail stats now show final live values only.
- Equipment detail stats/runes use compact two-column grids where possible.
- Rarity-colored generated/equipment names in equipment/shop list contexts.
- Sell confirmation uses an in-game overlay instead of browser confirm().
- Stackable sell items have quantity controls.
- Socketing screen has Remove All Runes for the selected equipped weapon/armor.
