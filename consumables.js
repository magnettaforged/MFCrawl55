// =========================
// CONSUMABLES.JS
// Images should be in assets/items/
// =========================

const CONSUMABLE_DATA = `
ItemName,ItemID,Image,UseType,Power,Target,UsableInCombat,UsableOutsideCombat,Value,Description
Potion,potion,hpot1.png,heal_hp,20,self,y,y,10,Restores 20 HP.
Copper Potion,copper_potion,hpot2.png,heal_hp,40,self,y,y,20,Restores 40 HP.
Silver Potion,silver_potion,hpot3.png,heal_hp,60,self,y,y,30,Restores 60 HP.
Gold Potion,gold_potion,hpot4.png,heal_hp,100,self,y,y,50,Restores 100 HP.
Mana Potion,mana_potion,mpot1.png,heal_mp,20,self,y,y,15,Restores 20 MP.
Copper Mana Potion,copper_mana_potion,mpot2.png,heal_mp,40,self,y,y,35,Restores 40 MP.
Silver Mana Potion,silver_mana_potion,mpot3.png,heal_mp,60,self,y,y,70,Restores 60 MP.
Gold Mana Potion,gold_mana_potion,mpot4.png,heal_mp,100,self,y,y,130,Restores 100 MP.
Antidote,antidote,antidote.png,cure_poison,1,self,y,y,15,Cures poison.
Smoke Bomb,smoke_bomb,bomb1.png,escape,1,self,y,n,40,Escape from most normal battles.
Rejuvenation Potion,rejuvenation_potion,rpot3.png,heal_both,60,self,y,y,100,Restores 60 HP and 60 MP.
`;
