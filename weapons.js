// =========================
// WEAPONS.JS
// Images should be in assets/weapons/
// Current test naming:
// sword1.png-sword4.png
// hammer1.png-hammer4.png
// scythe1.png-scythe4.png
// staff1.png-staff4.png
// =========================

const WEAPON_DATA = `
ItemName,ItemID,Image,Character,Tier,Rarity,MaxSockets,ReqLevel,ReqStr,ReqDex,Atk,Mag,Speed,Crit,Dodge,Value
Rusty Sword,rusty_sword,sword1.png,maya,iron,common,1,1,0,0,4,0,0,2,0,10
Iron Sword,iron_sword,sword2.png,maya,iron,common,1,1,0,0,8,0,0,3,0,25
Obsidian Sword,obsidian_sword,sword3.png,maya,obsidian,rare,2,6,10,4,18,0,0,5,0,120
Mythic Sword,mythic_sword,sword4.png,maya,mythic,mythic,3,12,18,8,34,4,1,8,0,500
Cracked Hammer,cracked_hammer,hammer1.png,reign,iron,common,1,1,0,0,6,0,-1,1,0,10
Iron Hammer,iron_hammer,hammer2.png,reign,iron,common,1,1,0,0,11,0,-1,2,0,30
Obsidian Hammer,obsidian_hammer,hammer3.png,reign,obsidian,rare,2,6,14,0,24,0,-2,4,0,140
Mythic Hammer,mythic_hammer,hammer4.png,reign,mythic,mythic,3,12,24,0,42,3,-1,7,0,550
Training Scythe,training_scythe,scythe1.png,kyra,iron,common,1,1,0,0,5,0,1,4,1,10
Steel Scythe,steel_scythe,scythe2.png,kyra,steel,common,1,1,0,0,9,0,1,5,1,30
Obsidian Scythe,obsidian_scythe,scythe3.png,kyra,obsidian,rare,2,6,8,8,20,0,2,8,2,150
Mythic Scythe,mythic_scythe,scythe4.png,kyra,mythic,mythic,3,12,14,14,36,5,2,12,3,600
Pine Staff,pine_staff,staff1.png,nadia,pine,common,1,1,0,0,2,7,0,1,0,10
Oak Staff,oak_staff,staff2.png,nadia,oak,common,1,1,0,0,4,12,0,2,0,30
Cocobolo Staff,cocobolo_staff,staff3.png,nadia,cocobolo,rare,2,6,0,6,8,24,0,4,0,150
Mythic Staff,mythic_staff,staff4.png,nadia,mythic,mythic,3,12,0,12,14,42,1,6,1,600
`;
