// =========================
// CONSUMABLES.JS
// Images should be in assets/items/
// =========================

const CONSUMABLE_DATA = `
ItemName,ItemID,Image,UseType,Power,Target,UsableInCombat,UsableOutsideCombat,Value,Description
Potion,potion,hpot1.webp,heal_hp,30,self,y,y,15,Restores 30 HP.
Copper Potion,copper_potion,hpot2.webp,heal_hp,60,self,y,y,30,Restores 60 HP.
Silver Potion,silver_potion,hpot3.webp,heal_hp,120,self,y,y,60,Restores 120 HP.
Gold Potion,gold_potion,hpot4.webp,heal_hp,200,self,y,y,100,Restores 200 HP.
Mana Potion,mana_potion,mpot1.webp,heal_mp,20,self,y,y,15,Restores 20 MP.
Copper Mana Potion,copper_mana_potion,mpot2.webp,heal_mp,40,self,y,y,35,Restores 40 MP.
Silver Mana Potion,silver_mana_potion,mpot3.webp,heal_mp,60,self,y,y,70,Restores 60 MP.
Gold Mana Potion,gold_mana_potion,mpot4.webp,heal_mp,100,self,y,y,130,Restores 100 MP.
Antidote,antidote,antidote.webp,cure_poison,1,self,y,n,15,Cures poison during battle.
Smoke Bomb,smoke_bomb,sbomb1.webp,escape,1,self,y,n,40,Escape from most normal battles.
Rejuvenation Potion,rejuvenation_potion,rpot3.webp,heal_both,60,self,y,y,100,Restores 60 HP and 60 MP.

Raw Meat,rawmeat,rawmeat.webp,currency,0,self,n,n,0,A stackable meat currency favored by certain merchants.
Exotic Meat,exoticmeat,exoticmeat.webp,currency,0,self,n,n,0,A rare meat currency taken from unusual creatures.
Rotten Meat,rottenmeat,rottenmeat.webp,currency,0,self,n,n,0,Spoiled flesh used as a strange merchant currency.
Seafood,seafood,seafood.webp,currency,0,self,n,n,0,A stackable seafood currency favored by feline merchants.
Coin Purse,coinpurse,coinpurse.webp,open_gold,50,self,n,y,0,Open to receive 50 gold.
`;
