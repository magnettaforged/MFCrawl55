// =========================
// ARMOR.JS
// Maya armor/status icon test data
// Images are full relative paths so the loader/UI can use nested folders.
//
// Current Maya pose folders:
// mt1cloth/mclothpose
// mt2chain/mchainpose
// mt3lightplate/mlppose
// mt4fullplate/mfppose
// =========================

const ARMOR_DATA = `
ItemName,ItemID,Character,Image,Icon,StatusImage,Tier,Rarity,MaxSockets,ReqLevel,ReqStr,Def,MDef,Speed,Crit,Dodge,GoldFind,Value,Description,FlavorText
Maya Cloth Garb,maya_cloth,maya,assets/armor/maya/mt1cloth/mclothpose/mclothp01.png,assets/armor/maya/mt1cloth/mclothicon.png,assets/armor/maya/mt1cloth/mclothpose/mclothp01.png,mt1cloth,common,1,1,0,1,1,0,0,2,0,8,Simple cloth armor for Maya.,Light and easy to move in.
Maya Copper Chain,maya_copper_chain,maya,assets/armor/maya/mt2chain/mchainpose/mcchainp01.png,assets/armor/maya/mt2chain/mcchainicon.png,assets/armor/maya/mt2chain/mchainpose/mcchainp01.png,mt2chain,common,1,3,0,5,1,-1,0,1,0,45,Copper chain armor for Maya.,Flexible chain with modest protection.
Maya Gold Chain,maya_gold_chain,maya,assets/armor/maya/mt2chain/mchainpose/mgchainp01.png,assets/armor/maya/mt2chain/mgchainicon.png,assets/armor/maya/mt2chain/mchainpose/mgchainp01.png,mt2chain,uncommon,1,3,0,4,1,-2,0,1,10,90,Gold chain armor with improved treasure finding.,Soft metal but lucky.
Maya Steel Chain,maya_steel_chain,maya,assets/armor/maya/mt2chain/mchainpose/mschainp01.png,assets/armor/maya/mt2chain/mschainicon.png,assets/armor/maya/mt2chain/mchainpose/mschainp01.png,mt2chain,uncommon,1,3,0,7,2,-1,0,1,0,95,Steel chain armor for Maya.,A practical defensive upgrade.
Maya Copper Light Plate,maya_copper_lightplate,maya,assets/armor/maya/mt3lightplate/mlppose/mclplatep01.png,assets/armor/maya/mt3lightplate/mclightplateicon.png,assets/armor/maya/mt3lightplate/mlppose/mclplatep01.png,mt3lightplate,uncommon,2,6,0,9,2,-2,0,1,0,140,Copper light plate armor for Maya.,More coverage without becoming too heavy.
Maya Gold Light Plate,maya_gold_lightplate,maya,assets/armor/maya/mt3lightplate/mlppose/mglplatep01.png,assets/armor/maya/mt3lightplate/mglightplateicon.png,assets/armor/maya/mt3lightplate/mlppose/mglplatep01.png,mt3lightplate,rare,2,6,0,8,2,-3,0,1,20,260,Gold light plate armor with stronger treasure finding.,Heavy shine with profitable luck.
Maya Steel Light Plate,maya_steel_lightplate,maya,assets/armor/maya/mt3lightplate/mlppose/mslplatep01.png,assets/armor/maya/mt3lightplate/mslightplateicon.png,assets/armor/maya/mt3lightplate/mlppose/mslplatep01.png,mt3lightplate,rare,2,6,0,12,3,-2,0,1,0,280,Steel light plate armor for Maya.,Reliable plate protection.
Maya Copper Full Plate,maya_copper_fullplate,maya,assets/armor/maya/mt4fullplate/mfppose/mcfplatep01.png,assets/armor/maya/mt4fullplate/mcfullplateicon.png,assets/armor/maya/mt4fullplate/mfppose/mcfplatep01.png,mt4fullplate,rare,2,10,0,15,3,-4,0,0,0,360,Copper full plate armor for Maya.,Heavy plated protection.
Maya Gold Full Plate,maya_gold_fullplate,maya,assets/armor/maya/mt4fullplate/mfppose/mgfplatep01.png,assets/armor/maya/mt4fullplate/mgfullplateicon.png,assets/armor/maya/mt4fullplate/mfppose/mgfplatep01.png,mt4fullplate,epic,2,10,0,13,3,-5,0,0,30,650,Gold full plate armor with major treasure finding.,Impractical but profitable.
Maya Steel Full Plate,maya_steel_fullplate,maya,assets/armor/maya/mt4fullplate/mfppose/msfplatep01.png,assets/armor/maya/mt4fullplate/msfullplateicon.png,assets/armor/maya/mt4fullplate/mfppose/msfplatep01.png,mt4fullplate,epic,2,10,0,19,4,-4,0,0,0,700,Steel full plate armor for Maya.,The standard high-defense full plate.
Maya Jade Full Plate,maya_jade_fullplate,maya,assets/armor/maya/mt4fullplate/mfppose/mjfplatep01.png,assets/armor/maya/mt4fullplate/mjfullplateicon.png,assets/armor/maya/mt4fullplate/mfppose/mjfplatep01.png,mt4fullplate,legendary,4,14,0,26,14,-3,0,2,5,1400,Frosted jade full plate with strong magic defense.,Mystic green armor that bends hostile magic.
Maya Black Full Plate,maya_black_fullplate,maya,assets/armor/maya/mt4fullplate/mfppose/mbfplatep01.png,assets/armor/maya/mt4fullplate/mbfullplateicon.png,assets/armor/maya/mt4fullplate/mfppose/mbfplatep01.png,mt4fullplate,mythic,8,18,0,34,10,-6,4,0,0,2500,Black full plate inspired by impossible hacked relic armor.,Too many sockets and too much power.
Maya White Full Plate,maya_white_fullplate,maya,assets/armor/maya/mt4fullplate/mfppose/mwfplatep01.png,assets/armor/maya/mt4fullplate/mwfullplateicon.png,assets/armor/maya/mt4fullplate/mfppose/mwfplatep01.png,mt4fullplate,mythic,8,18,0,32,16,-4,2,2,10,2600,White full plate inspired by impossible hacked relic armor.,Blinding armor with absurd socket potential.
`;
