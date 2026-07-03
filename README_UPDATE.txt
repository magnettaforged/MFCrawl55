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


v0.7.6d hotfix:
- Equipment detail titles no longer append Req Lv as if it were an upgrade level.
- Generated weapons/armor now expose affix stats correctly instead of only showing base stats.
- Existing generated equipment from prior saves is repaired on load.
- Rune detail rows now show only rune name + level, not full stat descriptions.
- Two-column rune display tightened to avoid text collision.


v0.7.6e hotfix:
- Ring icon paths now use assets/jewlery/ instead of assets/items/rings/.
- Ring/necklace fallback image folder now uses assets/jewlery/.


v0.7.6f hotfix:
- Renamed top-level oddity quiz variable from prompt to quizPromptText to avoid redeclaring the browser prompt global.
