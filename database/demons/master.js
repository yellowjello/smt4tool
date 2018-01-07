tribeListJP = [
	// Law
	"大天使", "女神", "霊鳥", "神樹", "天使", "妖鳥", "妖魔", "天女", "邪神", "凶鳥",
	"妖樹",
	// Neutral
	"魔神", "神獣", "聖獣", "幻魔", "妖精", "魔獣", "地霊", "龍王", "死神", "妖獣",
	"邪鬼", "妖虫",
	// Chaos
	"破壊神", "地母神", "龍神", "鬼神", "堕天使", "妖鬼", "鬼女", "夜魔", "魔王",
	"邪龍", "悪霊", "外道", "幽鬼",
	// Special
	"フード", "魔人", "天津神", "国津神", "秘神", "屍鬼", "狂神", "英傑", "威霊",
	"神霊", "混沌王", "精霊"];
tribeListEN = [
	// Law
	"Herald", "Megami", "Avian", "Tree", "Divine", "Flight", "Yoma", "Nymph",
	"Vile", "Raptor", "Wood",
	// Neutral
	"Deity", "Avatar", "Holy", "Genma", "Fairy", "Beast", "Jirae",
	"Snake", "Reaper", "Wilder", "Jaki", "Vermin",
	// Chaos
	"Fury", "Lady", "Dragon", "Kishin", "Fallen", "Brute", "Femme",
	"Night", "Tyrant", "Drake", "Spirit", "Foul", "Ghost",
	// Special
	"Food", "Fiend", "Amatsu", "Kunitsu", "Enigma", "Undead", "Zealot",
	"Famed", "Entity", "Godly", "Chaos", "Element"];
tribeLNC = ["L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N",
	"N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "C", "C", "C", "C", "C",
	"C", "C", "C", "C", "C", "C", "C", "C", "S", "S", "S", "S", "S", "S", "S",
	"S", "S", "S", "S", "S"];
elementals = ["サラマンダー", "ウンディーネ", "シルフ", "ノーム", "エアロス", "アクアンズ",
	"エアロス", "フレイミーズ", "ウンディーネ", "エアロス", "アーシーズ", "サラマンダー",
	"ウンディーネ", "シルフ", "ノーム", "エアロス", "アーシーズ", "アーシーズ", "フレイミーズ",
	"ノーム", "アクアンズ", "フレイミーズ", "アーシーズ", "シルフ", "ノーム", "シルフ", "ノーム",
	"フレイミーズ", "アクアンズ", "アクアンズ", "アーシーズ", "サラマンダー", "フレイミーズ",
	"エアロス", "-", "アクアンズ", "-", "-", "-", "サラマンダー",
	"-", "-", "-", "-", "-", "-", "-"];
elementalRanks = ["------du", "------ud", "----du--", "----ud--", "udud----",
	"dudu----", "duud----", "duud----", "------ud", "dudu----", "udud----",
	"------du", "------ud", "----du--", "------ud", "duud----", "uddu----",
	"uddu----", "dudu----", "----ud--", "dduu----", "uddu----", "udud----",
	"----du--", "----ud--", "----du--", "----ud--", "dduu----", "uudd----",
	"uddu----", "duud----", "------du", "uddu----", "duud----", "--------",
	"uudd----", "uddu----", "--------", "--------", "------du", "--------",
	"--------", "--------", "--------", "--------", "--------", "--------"];
elementalRankers = ["アーシーズ", "エアロス", "アクアンズ", "フレイミーズ", "ノーム",
	"シルフ", "ウンディーネ", "サラマンダー"];
	
dlcNameJPToEN = {
	"地獄の沙汰もレベル次第": "Experience of the Afterlife",
	"地獄の沙汰もマッカ次第": "Underworld Money-Maker",
	"地獄の沙汰もアプリ次第": "Death Has Its Applications",
	"大天使の羽を折れ１": "Clipped Wings 1",
	"大天使の羽を折れ２": "Clipped Wings 2",
	"日の老いたる者": "Ancient One of the Sun",
	"永遠の若者": "The Eternal Youth",
	"東京に未来を": "For the Past… For the Future"
}

demonNamesEN = [ ];
demonByNameJP = { };
demonByNameEN = { };

// Each entry has a key of the skill name (in Japanese) that contains an array
// of demons who learn the skill (at any level - check this in the demon!).
demonSkillMapping = { };

// Current demon being viewed.
currentDemon = { };

// Demons in the COMP.
compList = [ ];

// Order is the same as the tribe list. For example, to combine 女神 and 霊鳥:
// var a = tribeListJP.indexOf("女神");
// var b = tribeListJP.indexOf("霊鳥");
// var result = fusionChart[a][b];
// from there you can use the levels to calculate which demon in the tribe.
// Note: This is in Japanese because there is no "translation" to change.
fusionChart = [
["精霊", "幻魔", "天使", "天使", "邪神", "霊鳥", "神樹", "女神", "-", "-", "-", "女神", "霊鳥", "霊鳥", "女神", "天使", "聖獣", "魔神", "妖鳥", "-", "-", "-", "-", "死神", "女神", "破壊神", "-", "-", "妖鳥", "天女", "妖魔", "-", "-", "-", "邪神", "-", "妖鳥", "女神", "魔神", "魔王", "女神", "天使", "-", "女神", "女神", "魔神", "死神"],
["幻魔", "精霊", "天女", "大天使", "妖魔", "天使", "天女", "神樹", "-", "-", "-", "神獣", "魔神", "霊鳥", "神樹", "幻魔", "堕天使", "神樹", "妖樹", "-", "-", "-", "-", "地母神", "魔神", "大天使", "幻魔", "外道", "天女", "-", "天女", "-", "-", "-", "地母神", "-", "鬼女", "神樹", "天女", "地母神", "神獣", "天女", "-", "地母神", "魔神", "幻魔", "地母神"],
["天使", "天女", "精霊", "妖鳥", "妖鳥", "天使", "外道", "神樹", "-", "-", "-", "聖獣", "大天使", "妖鳥", "聖獣", "女神", "妖鳥", "妖魔", "-", "-", "-", "-", "-", "大天使", "破壊神", "神獣", "夜魔", "凶鳥", "幻魔", "女神", "凶鳥", "-", "-", "-", "凶鳥", "-", "妖鳥", "聖獣", "大天使", "天使", "聖獣", "天使", "-", "大天使", "破壊神", "天使", "大天使"],
["天使", "大天使", "妖鳥", "精霊", "大天使", "霊鳥", "幻魔", "女神", "-", "-", "-", "妖魔", "天女", "地霊", "妖精", "幻魔", "神獣", "妖精", "妖鳥", "-", "-", "-", "-", "国津神", "龍神", "龍王", "国津神", "邪神", "国津神", "地母神", "妖魔", "-", "-", "-", "妖樹", "-", "妖樹", "妖精", "地霊", "地霊", "妖魔", "天使", "-", "魔神", "龍神", "天使", "国津神"],
["邪神", "妖魔", "妖鳥", "大天使", "精霊", "霊鳥", "妖鳥", "女神", "凶鳥", "-", "地霊", "大天使", "妖精", "神獣", "天女", "天女", "妖鬼", "堕天使", "妖虫", "邪神", "凶鳥", "妖精", "幽鬼", "堕天使", "外道", "邪龍", "龍王", "-", "地霊", "天女", "女神", "凶鳥", "凶鳥", "妖魔", "堕天使", "邪鬼", "堕天使", "邪神", "女神", "邪神", "大天使", "-", "堕天使", "大天使", "外道", "邪神", "堕天使"],
["霊鳥", "天使", "天使", "霊鳥", "霊鳥", "精霊", "天女", "霊鳥", "凶鳥", "霊鳥", "凶鳥", "大天使", "妖虫", "神獣", "神獣", "天使", "妖魔", "凶鳥", "魔獣", "悪霊", "外道", "邪龍", "堕天使", "堕天使", "夜魔", "魔獣", "霊鳥", "天使", "魔獣", "魔獣", "堕天使", "邪龍", "外道", "凶鳥", "龍王", "夜魔", "凶鳥", "邪龍", "霊鳥", "龍王", "大天使", "-", "龍神", "霊鳥", "夜魔", "霊鳥", "堕天使"],
["神樹", "天女", "外道", "幻魔", "妖鳥", "天女", "精霊", "妖精", "邪鬼", "天使", "邪龍", "妖精", "地霊", "龍王", "夜魔", "天使", "聖獣", "地母神", "妖鳥", "幽鬼", "魔獣", "幽鬼", "妖獣", "夜魔", "幽鬼", "幻魔", "魔王", "龍王", "邪鬼", "幽鬼", "天使", "邪鬼", "妖鳥", "幽鬼", "夜魔", "-", "夜魔", "幽鬼", "妖精", "堕天使", "妖精", "-", "妖鬼", "幻魔", "幽鬼", "神樹", "夜魔"],
["女神", "神樹", "神樹", "女神", "女神", "霊鳥", "妖精", "精霊", "外道", "堕天使", "神樹", "鬼女", "妖精", "天使", "女神", "女神", "神獣", "天使", "妖樹", "悪霊", "-", "妖魔", "-", "鬼女", "-", "地母神", "天使", "天使", "鬼女", "-", "鬼女", "邪鬼", "-", "夜魔", "鬼女", "悪霊", "鬼女", "死神", "女神", "鬼女", "鬼女", "-", "地母神", "女神", "-", "女神", "鬼女"],
["-", "-", "-", "-", "凶鳥", "凶鳥", "邪鬼", "外道", "精霊", "邪龍", "邪鬼", "-", "-", "-", "-", "邪鬼", "妖獣", "邪鬼", "邪龍", "魔王", "凶鳥", "幽鬼", "凶鳥", "-", "-", "-", "-", "凶鳥", "邪鬼", "邪鬼", "邪鬼", "死神", "妖獣", "幽鬼", "魔王", "凶鳥", "妖獣", "魔王", "-", "-", "-", "女神", "破壊神", "国津神", "-", "-", "-"],
["-", "-", "-", "-", "-", "霊鳥", "天使", "堕天使", "邪龍", "精霊", "邪神", "-", "-", "-", "-", "夜魔", "霊鳥", "外道", "妖虫", "悪霊", "龍神", "霊鳥", "悪霊", "-", "-", "-", "-", "邪龍", "幽鬼", "天女", "妖樹", "妖虫", "聖獣", "妖獣", "霊鳥", "妖獣", "妖虫", "邪龍", "-", "-", "-", "霊鳥", "邪龍", "霊鳥", "-", "-", "-"],
["-", "-", "-", "-", "地霊", "凶鳥", "邪龍", "神樹", "邪鬼", "邪神", "精霊", "-", "-", "-", "-", "妖鬼", "妖獣", "妖虫", "邪龍", "悪霊", "妖虫", "国津神", "地母神", "-", "-", "-", "-", "外道", "外道", "妖虫", "妖精", "邪龍", "凶鳥", "幻魔", "神樹", "死神", "妖獣", "死神", "-", "-", "-", "神樹", "鬼女", "神樹", "-", "-", "-"],
["女神", "神獣", "聖獣", "妖魔", "大天使", "大天使", "妖精", "鬼女", "-", "-", "-", "精霊", "幻魔", "神獣", "死神", "幻魔", "神獣", "妖鬼", "魔獣", "-", "-", "-", "-", "国津神", "聖獣", "国津神", "破壊神", "破壊神", "地霊", "龍王", "妖魔", "-", "-", "-", "死神", "-", "妖精", "幻魔", "大天使", "破壊神", "-", "天使", "-", "破壊神", "聖獣", "女神", "国津神"],
["霊鳥", "魔神", "大天使", "天女", "妖精", "妖虫", "地霊", "妖精", "-", "-", "-", "幻魔", "精霊", "魔獣", "魔神", "鬼神", "地霊", "神樹", "龍神", "-", "-", "-", "-", "龍神", "神樹", "破壊神", "龍神", "龍王", "国津神", "聖獣", "魔獣", "-", "-", "-", "妖獣", "-", "魔獣", "魔神", "魔神", "龍神", "幻魔", "天使", "-", "幻魔", "神樹", "霊鳥", "龍神"],
["霊鳥", "霊鳥", "妖鳥", "地霊", "神獣", "神獣", "龍王", "天使", "-", "-", "-", "神獣", "魔獣", "精霊", "妖精", "魔獣", "霊鳥", "悪霊", "龍神", "-", "-", "-", "-", "龍王", "魔神", "神樹", "妖鬼", "魔獣", "邪鬼", "地霊", "地霊", "-", "-", "-", "妖虫", "-", "魔獣", "妖精", "龍王", "妖精", "神獣", "天使", "-", "神獣", "魔神", "霊鳥", "龍王"],
["女神", "神樹", "聖獣", "妖精", "天女", "神獣", "夜魔", "女神", "-", "-", "-", "死神", "魔神", "妖精", "精霊", "魔神", "聖獣", "死神", "神獣", "-", "-", "-", "-", "鬼神", "国津神", "夜魔", "妖鬼", "聖獣", "鬼神", "鬼神", "妖鬼", "-", "-", "-", "幽鬼", "-", "夜魔", "魔神", "天女", "地霊", "死神", "天使", "-", "魔神", "鬼神", "女神", "鬼神"],
["天使", "幻魔", "女神", "幻魔", "天女", "天使", "天使", "女神", "邪鬼", "夜魔", "妖鬼", "幻魔", "鬼神", "魔獣", "魔神", "精霊", "妖鳥", "魔獣", "霊鳥", "悪霊", "聖獣", "地母神", "妖樹", "魔神", "幻魔", "夜魔", "神樹", "夜魔", "鬼女", "地母神", "天使", "幽鬼", "妖樹", "妖鳥", "地霊", "妖樹", "妖魔", "死神", "天使", "夜魔", "幻魔", "-", "魔神", "幻魔", "幻魔", "天使", "魔神"],
["聖獣", "堕天使", "妖鳥", "神獣", "妖鬼", "妖魔", "聖獣", "神獣", "妖獣", "霊鳥", "妖獣", "神獣", "地霊", "霊鳥", "聖獣", "妖鳥", "精霊", "妖魔", "妖獣", "悪霊", "龍王", "聖獣", "妖獣", "龍王", "龍王", "妖獣", "神獣", "龍王", "龍王", "夜魔", "地母神", "妖獣", "外道", "妖獣", "妖鳥", "妖獣", "妖獣", "妖獣", "聖獣", "堕天使", "聖獣", "-", "神獣", "聖獣", "龍王", "聖獣", "龍王"],
["魔神", "神樹", "妖魔", "妖精", "堕天使", "凶鳥", "地母神", "天使", "邪鬼", "外道", "妖虫", "妖鬼", "神樹", "悪霊", "死神", "魔獣", "妖魔", "精霊", "堕天使", "悪霊", "妖樹", "妖鬼", "外道", "妖鬼", "鬼神", "地母神", "神樹", "龍神", "妖精", "妖鬼", "妖精", "邪鬼", "龍王", "妖虫", "妖精", "邪鬼", "妖虫", "悪霊", "国津神", "地母神", "妖鬼", "-", "国津神", "神樹", "鬼神", "魔神", "妖鬼"],
["妖鳥", "妖樹", "-", "妖鳥", "妖虫", "魔獣", "妖鳥", "妖樹", "邪龍", "妖虫", "邪龍", "魔獣", "龍神", "龍神", "神獣", "霊鳥", "妖獣", "堕天使", "精霊", "悪霊", "妖虫", "邪龍", "堕天使", "龍神", "鬼女", "堕天使", "龍神", "龍神", "龍神", "邪龍", "妖魔", "邪龍", "妖虫", "邪龍", "魔獣", "妖樹", "妖鬼", "邪龍", "天女", "龍神", "魔獣", "-", "龍神", "龍神", "鬼女", "妖鳥", "龍神"],
["-", "-", "-", "-", "邪神", "悪霊", "幽鬼", "悪霊", "魔王", "悪霊", "悪霊", "-", "-", "-", "-", "悪霊", "悪霊", "悪霊", "悪霊", "精霊", "悪霊", "幽鬼", "悪霊", "-", "-", "-", "-", "魔王", "悪霊", "悪霊", "幽鬼", "邪神", "悪霊", "妖樹", "邪神", "悪霊", "悪霊", "邪神", "-", "-", "-", "魔神", "魔王", "魔神", "-", "-", "-"],
["-", "-", "-", "-", "凶鳥", "外道", "魔獣", "-", "凶鳥", "龍神", "妖虫", "-", "-", "-", "-", "聖獣", "龍王", "妖樹", "妖虫", "悪霊", "精霊", "邪龍", "悪霊", "-", "-", "-", "-", "凶鳥", "魔獣", "-", "妖虫", "邪龍", "霊鳥", "邪龍", "聖獣", "妖樹", "妖虫", "外道", "-", "-", "-", "神獣", "神獣", "神獣", "-", "-", "-"],
["-", "-", "-", "-", "妖精", "邪龍", "幽鬼", "妖魔", "幽鬼", "霊鳥", "国津神", "-", "-", "-", "-", "地母神", "聖獣", "妖鬼", "邪龍", "幽鬼", "邪龍", "精霊", "妖獣", "-", "-", "-", "-", "邪龍", "外道", "幽鬼", "地霊", "邪龍", "魔王", "幽鬼", "鬼神", "女神", "幽鬼", "幽鬼", "-", "-", "-", "幻魔", "妖鬼", "幻魔", "-", "-", "-"],
["-", "-", "-", "-", "幽鬼", "堕天使", "妖獣", "-", "凶鳥", "悪霊", "地母神", "-", "-", "-", "-", "妖樹", "妖獣", "外道", "堕天使", "悪霊", "悪霊", "妖獣", "精霊", "-", "-", "-", "-", "地霊", "妖獣", "-", "凶鳥", "凶鳥", "悪霊", "神樹", "神獣", "妖樹", "妖樹", "悪霊", "-", "-", "-", "聖獣", "妖鳥", "聖獣", "-", "-", "-"],
["死神", "地母神", "大天使", "国津神", "堕天使", "堕天使", "夜魔", "鬼女", "-", "-", "-", "国津神", "龍神", "龍王", "鬼神", "魔神", "龍王", "妖鬼", "龍神", "-", "-", "-", "-", "精霊", "鬼神", "堕天使", "堕天使", "魔王", "鬼神", "地母神", "地霊", "-", "-", "-", "魔王", "-", "妖魔", "鬼神", "死神", "魔神", "国津神", "天使", "-", "大天使", "鬼神", "死神", "魔神"],
["女神", "魔神", "破壊神", "龍神", "外道", "夜魔", "幽鬼", "-", "-", "-", "-", "聖獣", "神樹", "魔神", "国津神", "幻魔", "龍王", "鬼神", "鬼女", "-", "-", "-", "-", "鬼神", "精霊", "破壊神", "鬼女", "鬼女", "鬼神", "妖鬼", "鬼女", "-", "-", "-", "女神", "-", "地霊", "国津神", "女神", "地霊", "聖獣", "天女", "-", "女神", "-", "女神", "鬼神"],
["破壊神", "大天使", "神獣", "龍王", "邪龍", "魔獣", "幻魔", "地母神", "-", "-", "-", "国津神", "破壊神", "神樹", "夜魔", "夜魔", "妖獣", "地母神", "堕天使", "-", "-", "-", "-", "堕天使", "破壊神", "精霊", "鬼女", "妖鬼", "国津神", "堕天使", "外道", "-", "-", "-", "邪龍", "-", "龍王", "夜魔", "霊鳥", "魔獣", "地母神", "天使", "-", "神獣", "鬼女", "破壊神", "堕天使"],
["-", "幻魔", "夜魔", "国津神", "龍王", "霊鳥", "魔王", "天使", "-", "-", "-", "破壊神", "龍神", "妖鬼", "妖鬼", "神樹", "神獣", "神樹", "龍神", "-", "-", "-", "-", "堕天使", "鬼女", "鬼女", "精霊", "龍神", "破壊神", "地霊", "魔獣", "-", "-", "-", "邪鬼", "-", "妖鬼", "妖鬼", "妖魔", "破壊神", "破壊神", "天使", "-", "破壊神", "鬼女", "-", "堕天使"],
["-", "外道", "凶鳥", "邪神", "-", "天使", "龍王", "天使", "凶鳥", "邪龍", "外道", "破壊神", "龍王", "魔獣", "聖獣", "夜魔", "龍王", "龍神", "龍神", "魔王", "凶鳥", "邪龍", "地霊", "魔王", "鬼女", "妖鬼", "龍神", "精霊", "夜魔", "地母神", "妖鬼", "邪龍", "凶鳥", "魔獣", "天使", "妖魔", "外道", "魔王", "邪神", "妖精", "国津神", "-", "天使", "大天使", "鬼女", "-", "魔王"],
["妖鳥", "天女", "幻魔", "国津神", "地霊", "魔獣", "邪鬼", "鬼女", "邪鬼", "幽鬼", "外道", "地霊", "国津神", "邪鬼", "鬼神", "鬼女", "龍王", "妖精", "龍神", "悪霊", "魔獣", "外道", "妖獣", "鬼神", "鬼神", "国津神", "破壊神", "夜魔", "精霊", "邪鬼", "悪霊", "邪鬼", "龍神", "邪鬼", "妖精", "外道", "邪鬼", "幽鬼", "国津神", "鬼神", "地霊", "-", "妖魔", "鬼神", "鬼神", "妖鳥", "鬼神"],
["天女", "-", "女神", "地母神", "天女", "魔獣", "幽鬼", "-", "邪鬼", "天女", "妖虫", "龍王", "聖獣", "地霊", "鬼神", "地母神", "夜魔", "妖鬼", "邪龍", "悪霊", "-", "幽鬼", "-", "地母神", "妖鬼", "堕天使", "地霊", "地母神", "邪鬼", "精霊", "地母神", "邪鬼", "外道", "地母神", "天女", "悪霊", "魔獣", "悪霊", "天女", "地母神", "龍王", "-", "女神", "地母神", "妖鬼", "天女", "地母神"],
["妖魔", "天女", "凶鳥", "妖魔", "女神", "堕天使", "天使", "鬼女", "邪鬼", "妖樹", "妖精", "妖魔", "魔獣", "地霊", "妖鬼", "天使", "地母神", "妖精", "妖魔", "幽鬼", "妖虫", "地霊", "凶鳥", "地霊", "鬼女", "外道", "魔獣", "妖鬼", "悪霊", "地母神", "精霊", "邪鬼", "天女", "外道", "妖魔", "邪鬼", "地霊", "幽鬼", "堕天使", "魔獣", "妖魔", "-", "妖鳥", "国津神", "鬼女", "妖魔", "地霊"],
["-", "-", "-", "-", "凶鳥", "邪龍", "邪鬼", "邪鬼", "死神", "妖虫", "邪龍", "-", "-", "-", "-", "幽鬼", "妖獣", "邪鬼", "邪龍", "邪神", "邪龍", "邪龍", "凶鳥", "-", "-", "-", "-", "邪龍", "邪鬼", "邪鬼", "邪鬼", "精霊", "妖獣", "邪鬼", "死神", "邪鬼", "妖獣", "邪神", "-", "-", "-", "破壊神", "邪神", "魔神", "-", "-", "-"],
["-", "-", "-", "-", "凶鳥", "外道", "妖鳥", "-", "妖獣", "聖獣", "凶鳥", "-", "-", "-", "-", "妖樹", "外道", "龍王", "妖虫", "悪霊", "霊鳥", "魔王", "悪霊", "-", "-", "-", "-", "凶鳥", "龍神", "外道", "天女", "妖獣", "精霊", "妖樹", "龍神", "妖樹", "妖虫", "邪鬼", "-", "-", "-", "龍神", "霊鳥", "龍神", "-", "-", "-"],
["-", "-", "-", "-", "妖魔", "凶鳥", "幽鬼", "夜魔", "幽鬼", "妖獣", "幻魔", "-", "-", "-", "-", "妖鳥", "妖獣", "妖虫", "邪龍", "妖樹", "邪龍", "幽鬼", "神樹", "-", "-", "-", "-", "魔獣", "邪鬼", "地母神", "外道", "邪鬼", "妖樹", "精霊", "神樹", "妖樹", "妖獣", "死神", "-", "-", "-", "地母神", "天使", "聖獣", "-", "-", "-"],
["邪神", "地母神", "凶鳥", "妖樹", "堕天使", "龍王", "夜魔", "鬼女", "魔王", "霊鳥", "神樹", "死神", "妖獣", "妖虫", "幽鬼", "地霊", "妖鳥", "妖精", "魔獣", "邪神", "聖獣", "鬼神", "神獣", "魔王", "女神", "邪龍", "邪鬼", "天使", "妖精", "天女", "妖魔", "死神", "龍神", "神樹", "-", "幻魔", "聖獣", "邪神", "凶鳥", "妖獣", "死神", "鬼神", "魔王", "幻魔", "女神", "邪神", "魔王"],
["-", "-", "-", "-", "邪鬼", "夜魔", "-", "悪霊", "凶鳥", "妖獣", "死神", "-", "-", "-", "-", "妖樹", "妖獣", "邪鬼", "妖樹", "悪霊", "妖樹", "女神", "妖樹", "-", "-", "-", "-", "妖魔", "外道", "悪霊", "邪鬼", "邪鬼", "妖樹", "妖樹", "幻魔", "精霊", "妖虫", "邪鬼", "-", "-", "-", "鬼神", "妖魔", "鬼神", "-", "-", "-"],
["妖鳥", "鬼女", "妖鳥", "妖樹", "堕天使", "凶鳥", "夜魔", "鬼女", "妖獣", "妖虫", "妖獣", "妖精", "魔獣", "魔獣", "夜魔", "妖魔", "妖獣", "妖虫", "妖鬼", "悪霊", "妖虫", "幽鬼", "妖樹", "妖魔", "地霊", "龍王", "妖鬼", "外道", "邪鬼", "魔獣", "地霊", "妖獣", "妖虫", "妖獣", "聖獣", "妖虫", "-", "妖獣", "天女", "妖鬼", "魔獣", "外道", "魔獣", "聖獣", "龍王", "妖鳥", "妖魔"],
["女神", "神樹", "聖獣", "妖精", "邪神", "邪龍", "幽鬼", "死神", "魔王", "邪龍", "死神", "幻魔", "魔神", "妖精", "魔神", "死神", "妖獣", "悪霊", "邪龍", "邪神", "外道", "幽鬼", "悪霊", "鬼神", "国津神", "夜魔", "妖鬼", "魔王", "幽鬼", "悪霊", "幽鬼", "邪神", "邪鬼", "死神", "邪神", "邪鬼", "妖獣", "-", "魔王", "破壊神", "死神", "幻魔", "魔王", "破壊神", "鬼神", "女神", "鬼神"],
["魔神", "天女", "大天使", "地霊", "女神", "霊鳥", "妖精", "女神", "-", "-", "-", "大天使", "魔神", "龍王", "天女", "天使", "聖獣", "国津神", "天女", "-", "-", "-", "-", "死神", "女神", "霊鳥", "妖魔", "邪神", "国津神", "天女", "堕天使", "-", "-", "-", "凶鳥", "-", "天女", "魔王", "-", "魔神", "霊鳥", "天使", "-", "大天使", "神樹", "魔神", "死神"],
["魔王", "地母神", "天使", "地霊", "邪神", "龍王", "堕天使", "鬼女", "-", "-", "-", "破壊神", "龍神", "妖精", "地霊", "夜魔", "堕天使", "地母神", "龍神", "-", "-", "-", "-", "魔神", "地霊", "魔獣", "破壊神", "妖精", "鬼神", "地母神", "魔獣", "-", "-", "-", "妖獣", "-", "妖鬼", "破壊神", "魔神", "精霊", "破壊神", "天使", "-", "破壊神", "地母神", "魔王", "魔神"],
["女神", "神獣", "聖獣", "妖魔", "大天使", "大天使", "妖精", "鬼女", "-", "-", "-", "-", "幻魔", "神獣", "死神", "幻魔", "聖獣", "妖鬼", "魔獣", "-", "-", "-", "-", "国津神", "聖獣", "地母神", "破壊神", "国津神", "地霊", "龍王", "妖魔", "-", "-", "-", "死神", "-", "魔獣", "死神", "霊鳥", "破壊神", "-", "天使", "-", "魔神", "聖獣", "女神", "国津神"],
["天使", "天女", "天使", "天使", "-", "-", "-", "-", "女神", "霊鳥", "神樹", "天使", "天使", "天使", "天使", "-", "-", "-", "-", "魔神", "神獣", "幻魔", "聖獣", "天使", "天女", "天使", "天使", "-", "-", "-", "-", "破壊神", "龍神", "地母神", "鬼神", "鬼神", "外道", "幻魔", "天使", "天使", "天使", "-", "破壊神", "幻魔", "-", "天使", "天使"],
["-", "-", "-", "-", "堕天使", "龍神", "妖鬼", "地母神", "破壊神", "邪龍", "鬼女", "-", "-", "-", "-", "魔神", "神獣", "国津神", "龍神", "魔王", "神獣", "妖鬼", "妖鳥", "-", "-", "-", "-", "天使", "妖魔", "女神", "妖鳥", "邪神", "霊鳥", "天使", "魔王", "妖魔", "魔獣", "魔王", "-", "-", "-", "破壊神", "-", "魔神", "-", "-", "-"],
["女神", "地母神", "大天使", "魔神", "大天使", "霊鳥", "幻魔", "女神", "国津神", "霊鳥", "神樹", "破壊神", "幻魔", "神獣", "魔神", "幻魔", "聖獣", "神樹", "龍神", "魔神", "神獣", "幻魔", "聖獣", "大天使", "女神", "神獣", "破壊神", "大天使", "鬼神", "地母神", "国津神", "魔神", "龍神", "聖獣", "幻魔", "鬼神", "聖獣", "破壊神", "大天使", "破壊神", "魔神", "幻魔", "魔神", "-", "地母神", "女神", "大天使"],
["女神", "魔神", "破壊神", "龍神", "外道", "夜魔", "幽鬼", "-", "-", "-", "-", "聖獣", "神樹", "魔神", "鬼神", "幻魔", "龍王", "鬼神", "鬼女", "-", "-", "-", "-", "鬼神", "-", "鬼女", "鬼女", "鬼女", "鬼神", "妖鬼", "鬼女", "-", "-", "-", "女神", "-", "龍王", "鬼神", "神樹", "地母神", "聖獣", "-", "-", "地母神", "-", "女神", "鬼神"],
["魔神", "幻魔", "天使", "天使", "邪神", "霊鳥", "神樹", "女神", "-", "-", "-", "女神", "霊鳥", "霊鳥", "女神", "天使", "聖獣", "魔神", "妖鳥", "-", "-", "-", "-", "死神", "女神", "破壊神", "-", "-", "妖鳥", "天女", "妖魔", "-", "-", "-", "邪神", "-", "妖鳥", "女神", "魔神", "魔王", "女神", "天使", "-", "女神", "女神", "-", "死神"],
["死神", "地母神", "大天使", "国津神", "堕天使", "堕天使", "夜魔", "鬼女", "-", "-", "-", "国津神", "龍神", "龍王", "鬼神", "魔神", "龍王", "妖鬼", "龍神", "-", "-", "-", "-", "魔神", "鬼神", "堕天使", "堕天使", "魔王", "鬼神", "地母神", "地霊", "-", "-", "-", "魔王", "-", "妖魔", "鬼神", "死神", "魔神", "国津神", "天使", "-", "大天使", "鬼神", "死神", "-"]
];

reverseChart = makeReverseChart();

function makeReverseChart() {
	var revChart = {};
	// initialize empty arrays
	for (var i = 0; i < tribeListJP.length; i++) {
		revChart[tribeListJP[i]] = [];
	}
	for (var i = 0; i < tribeListJP.length-1; i++) { // skip element 
		for (var j = i; j < tribeListJP.length-1; j++) {
			var result = fusionChart[i][j];
			if (result === "-") continue;
			var raceA = tribeListJP[i];
			var raceB = tribeListJP[j];
			revChart[result].push([raceA, raceB]);
		}
	}
	return revChart;
}

function fusionChartCheck() {
	if(fusionChart.length != 47)
		alert('Wrong number of rows!');

	$.each(fusionChart, function(row, columns){
		if(columns.length != fusionChart.length)
			alert('Wrong number of columns!');

		$.each(columns, function(column, result) {
			var a = tribeListJP[row];
			var b = tribeListJP[column];

			// Sanity check same tribe fusions.
			if(column == row && result != "-" && result != "精霊")
				alert("Invalid combination: " + a + "x" + b + "=" + result);
			if(result != "-" && tribeListJP.indexOf(result) < 0)
				alert("Invalid combination: " + a + "x" + b + "=" + result);

			if(result != "-") {
				var combo = [b, a];
				if(a < b)
					combo = [a, b];

				if(!reverseChart[result] || !reverseChart[result].length) {
					reverseChart[result] = [combo];
				} else {
					var hasCombo = false;
					$.each(reverseChart[result], function(index, thisCombo) {
						if(thisCombo[0] == combo[0] &&
							thisCombo[1] == combo[1]) {
								hasCombo = true;
						}
					});

					if(!hasCombo)
						reverseChart[result].push(combo);
				}
			}
		});
	});
}

function renderReverseChart() {
	var html = "";

	$.each(reverseChart, function(result, combos) {
		html += "<p>" + result + ": ";

		var comboList = "";

		$.each(combos, function(index, combo) {
			if(comboList.length)
				comboList += ", ";

			comboList += combo[0] + "x" + combo[1];
		});

		html += comboList + "</p>";
	});

	return html;
}

function fusionBad(result) { return result == "－"; }
function fusionElemental(result) { return result == "精霊" }

function registerDemon(data) {
	if(demonByNameEN[data.nameEN.toLowerCase()] !== undefined ||
		demonByNameJP[data.nameJP] !== undefined) {
			alert("Duplicate demon: " + data.nameEN);
	}

	demonNamesEN.push(data.nameEN);
	demonByNameJP[data.nameJP.toLowerCase()] = data;
	demonByNameEN[data.nameEN.toLowerCase()] = data;
	$.each(data.skills, function(skill, level){
		if(skill in demonSkillMapping)
			demonSkillMapping[skill].push(data);
		else
			demonSkillMapping[skill] = [data];
	});
}

function handleAffinity(affinity, short) {
	if(short) {
		if(affinity == "null")
			return "<a style=\"color: #999999;\">Nu</a>";
		else if(affinity == "weak")
			return "<a style=\"color: #CC0000;\">Wk</a>";
		else if(affinity == "protect")
			return "<a style=\"color: #00CC00;\">Rs</a>";
		else if(affinity == "reflect")
			return "<a style=\"color: #3333FF;\">Rp</a>";
		else if(affinity == "absorb")
			return "<a style=\"color: #CC00CC;\">Dr</a>";
		else
			return "<a style=\"color: #FFFFFF;\">-</a>";
	} else {
		if(affinity == "null")
			return "<a style=\"color: #999999;\">Null</a>";
		else if(affinity == "weak")
			return "<a style=\"color: #CC0000;\">Weak</a>";
		else if(affinity == "protect")
			return "<a style=\"color: #00CC00;\">Resist</a>";
		else if(affinity == "reflect")
			return "<a style=\"color: #3333FF;\">Repel</a>";
		else if(affinity == "absorb")
			return "<a style=\"color: #CC00CC;\">Drain</a>";
		else
			return "<a style=\"color: #FFFFFF;\">N/A</a>";
	}
}

function parseRank(rank) {
	if(rank == "u")
		return "Up";
	else if(rank == "d")
		return "Down";
	else
		return "-";
}

function showDemon(name) {
	name = name.toLowerCase();

	if(!(name in demonByNameEN))
		return;

	var data = demonByNameEN[name];
	currentDemon = data;
	
	nameHtml = data.nameEN;
	if ("dlc" in data) nameHtml += " <span class='dlcIndicator'>(DLC)</span>";

	$("#demonData_name").html(nameHtml);
	$("#demonData_tribe").text(tribeListEN[tribeListJP.indexOf(data.tribe)]);
	$("#demonData_level").text(data.level);
	$("#demonData_hp").text(data.stats.hp);
	$("#demonData_mp").text(data.stats.mp);
	$("#demonData_str").text(data.stats.strength);
	$("#demonData_skill").text(data.stats.skill);
	$("#demonData_magic").text(data.stats.magic);
	$("#demonData_speed").text(data.stats.speed);
	$("#demonData_luck").text(data.stats.luck);
	$("#demonData_physical").html(handleAffinity(data.affinity.physical));
	$("#demonData_gun").html(handleAffinity(data.affinity.gun));
	$("#demonData_fire").html(handleAffinity(data.affinity.fire));
	$("#demonData_ice").html(handleAffinity(data.affinity.ice));
	$("#demonData_thunder").html(handleAffinity(data.affinity.thunder));
	$("#demonData_shock").html(handleAffinity(data.affinity.shock));
	$("#demonData_banish").html(handleAffinity(data.affinity.banish));
	$("#demonData_curse").html(handleAffinity(data.affinity.curse));
	$("#demonData_bind").html(handleAffinity(data.affinity.bind));
	$("#demonData_sleep").html(handleAffinity(data.affinity.sleep));
	$("#demonData_cold").html(handleAffinity(data.affinity.cold));
	$("#demonData_confusion").html(handleAffinity(data.affinity.confusion));
	$("#demonData_poison").html(handleAffinity(data.affinity.poison));
	$("#tribeListBtn").show();
	$("#demonData").show();
	$("#tribeList").hide();
	$("#demonList").hide();

	var rank = "--------";

	if(tribeListJP.indexOf(data.tribe) >= 0 && tribeListJP.indexOf(data.tribe)
		< elementalRanks.length) {
			rank = elementalRanks[tribeListJP.indexOf(data.tribe)];
	}

	var elemental = "None";

	if(tribeListJP.indexOf(data.tribe) >= 0 && tribeListJP.indexOf(data.tribe)
		< elementals.length && elementals[tribeListJP.indexOf(data.tribe)] != "-") {
			elemental = htmlDemonLink(demonByNameJP[elementals[
				tribeListJP.indexOf(data.tribe)]].nameEN);
	}

	$("#demonData_elementResult").html(elemental);

	$("#demonData_erthys").text(parseRank(rank[0]));
	$("#demonData_aeros").text(parseRank(rank[1]));
	$("#demonData_aquans").text(parseRank(rank[2]));
	$("#demonData_flaemis").text(parseRank(rank[3]));
	$("#demonData_gnome").text(parseRank(rank[4]));
	$("#demonData_sylph").text(parseRank(rank[5]));
	$("#demonData_undine").text(parseRank(rank[6]));
	$("#demonData_salamander").text(parseRank(rank[7]));

	var skillList = "";

	$.each(data.skills, function(nameJP, obtainLvl) {
		if(skillList.length)
			skillList += " / ";

		if(!skillByNameJP[nameJP]) {
			skillList += nameJP
		} else {
			skillList += "<a class=\"demonLink\" onClick=\"skillClicked(" +
				"this);\">" + skillByNameJP[nameJP].nameEN + "</a>";
		}

		if(obtainLvl > 0)
			skillList += " (" + obtainLvl + ")";
	});

	$("#demonData_skills").html(skillList);
	
	if ("dlc" in data) {
		$("#demonData_dlcSection").show();
		
		var dlcHtml = "";
		
		for (let dlcName of data.dlc) {
			if (dlcHtml.length != 0) dlcHtml += ", ";
			dlcHtml += dlcNameJPToEN[dlcName];
		}
		
		$("#demonData_dlc").html(dlcHtml);
	} else {
		$("#demonData_dlcSection").hide();
	}

	if(data["fusions"]) {
		$("#demonData_fusionSection").show();
		
		var fusions = "";
		
		$.each(data.fusions, function(index, fusion) {
			var fusionHTML = "";

			$.each(fusion, function(index, component) {
				if(fusionHTML.length)
					fusionHTML += " x ";

				var componentData = demonByNameJP[component];
				if(!componentData) {
					componentData = {
						"nameEN": component,
						"level": 0
					}
				}

				fusionHTML += "<a class=\"demonLink\" " +
					"onClick=\"demonClicked(this);\">" +
					componentData.nameEN + "</a> (" +
					componentData.level + ")";
			});

			if(fusions.length)
				fusions += " / ";

			fusions += fusionHTML;
		});
		
		if (data.fusions.length == 0) fusions = "Can only be obtained through fusion accident";

		$("#demonData_fusions").html(fusions);
	} else {
		$("#demonData_fusionSection").hide();
	}

	if(data["mutate"]) {
		$("#demonData_mutateSection").show();

		var mutateTarget = demonByNameJP[data.mutate.target];

		var mutation = "<a class=\"demonLink\" " +
					"onClick=\"demonClicked(this);\">" +
					mutateTarget.nameEN + "</a> (" + data.mutate.level +
					" => " + mutateTarget.level + ")";

		$("#demonData_mutation").html(mutation);
	} else {
		$("#demonData_mutateSection").hide();
	}

	$("#demonReverse").html(renderReverseList(data));

	showTab("demons");

	$("#showAllDemonsBtn").show();
	$("#affinityFilterBtn").show();
	$("#tribeListBtn").show();
}

function generateReverseCache() {
	/*
	var out = "";

	$.each(demonByNameJP, function(nameJP, data) {
		out += JSON.stringify(renderReverseList(data));
	});

	$('#reverseChartTest').text(out);
	*/

	var cache = { };

	$.each(demonByNameJP, function(nameJP, data) {
		cache[nameJP] = renderReverseList(data);
	});

	$('#reverseChartTest').text(JSON.stringify(cache));
}

function renderReverseList(baseDemon) {
	if(baseDemon.fusions === undefined &&
		reverseChart[baseDemon.tribe] !== undefined) {

		var results = [ ];

		$.each(reverseChart[baseDemon.tribe], function(index, combo) {
			var components = [ ];

			$.each(demonByNameEN, function(nameEN, data) {
				if(data.tribe == combo[0] || data.tribe == combo[1])
					components.push(data);
			});

			results = results.concat(computeReverseFusions(baseDemon.nameEN,
				components));
		});

		$.each(demonByNameEN, function(nameEN, data) {
			var components = [ ];

			if(data.tribe == "精霊" || data.tribe == baseDemon.tribe)
				components.push(data);

			results = results.concat(computeReverseFusions(baseDemon.nameEN,
				components));
		});

		var html = "";

		$.each(results, function(index, code) {
			if(html.length)
				html += "<br/>" + code;
			else
				html += code;
		});

		if(html.length) {
			html = "<p><a class=\"button_up\">Fusion Combinations" +
				"</a></p>" + html;
		}

		return html;
	}

	return "";
}

function demonTableHeader() {
	var demonList = "";
	demonList += "<table>";
	demonList += "<th><a>Lv</a></th>";
	demonList += "<th><a>Name</a></th>";
	demonList += "<th><a>HP</a></th>";
	demonList += "<th><a>MP</a></th>";
	demonList += "<th><a>St</a></th>";
	demonList += "<th><a>Dx</a></th>";
	demonList += "<th><a>Ma</a></th>";
	demonList += "<th><a>Ag</a></th>";
	demonList += "<th><a>Lu</a></th>";
	demonList += "<th><a>Phys</a></th>";
	demonList += "<th><a>Gun</a></th>";
	demonList += "<th><a>Fire</a></th>";
	demonList += "<th><a>Ice</a></th>";
	demonList += "<th><a>Elec</a></th>";
	demonList += "<th><a>Force</a></th>";
	demonList += "<th><a>Light</a></th>";
	demonList += "<th><a>Dark</a></th>";

	return demonList;
}

function demonClicked(obj) {
	showDemon($(obj).text());
}

function demonTableEntry(data, targetLevel) {
	var demonList = "";
	demonList += "<tr>";

	if(targetLevel !== undefined && targetLevel > data.level) {
		demonList += "<td>" + data.level + "=>" + targetLevel + "</td>";
	} else {
		demonList += "<td>" + data.level + "</td>";
	}

	demonList += "<td><a class=\"demonLink\" onClick=\"demonClicked(this);\">" +
		data.nameEN + "</a>";
	if ("dlc" in data) demonList += " <span class='dlcIndicator'>(DLC)</span>";
	demonList += "</td>";
	
	demonList += "<td>" + data.stats.hp + "</td>";
	demonList += "<td>" + data.stats.mp + "</td>";
	demonList += "<td>" + data.stats.strength + "</td>";
	demonList += "<td>" + data.stats.skill + "</td>";
	demonList += "<td>" + data.stats.magic + "</td>";
	demonList += "<td>" + data.stats.speed + "</td>";
	demonList += "<td>" + data.stats.luck + "</td>";
	demonList += "<td>" + handleAffinity(
		data.affinity.physical, false) + "</td>";
	demonList += "<td>" + handleAffinity(
		data.affinity.gun, false) + "</td>";
	demonList += "<td>" + handleAffinity(
		data.affinity.fire, false) + "</td>";
	demonList += "<td>" + handleAffinity(
		data.affinity.ice, false) + "</td>";
	demonList += "<td>" + handleAffinity(
		data.affinity.thunder, false) + "</td>";
	demonList += "<td>" + handleAffinity(
		data.affinity.shock, false) + "</td>";
	demonList += "<td>" + handleAffinity(
		data.affinity.banish, false) + "</td>";
	demonList += "<td>" + handleAffinity(
		data.affinity.curse, false) + "</td>";
	demonList += "</tr>";

	return demonList;
}

function demonTableFooter() {
	return "</table>";
}

function showDemonList(html) {
	$("#demonData").hide();
	$("#demonList").html(html);
	$("#showAllDemonsBtn").show();
	$("#affinityFilterBtn").show();
	$("#affinityFilter").hide();
	$("#tribeListBtn").show();
	$("#tribeList").hide();
	$("#demonList").show();
}

function showTribe(index) {
	var demons = [ ];

	$.each(demonByNameEN, function(name, data) {
		if(tribeListJP.indexOf(data.tribe) == index) {
			demons.push(data);
		}
	});

	demons.sort(function(a, b) {
		if(a.level == b.level)
			return a.nameEN > b.nameEN ? 1 : -1;

		return a.level - b.level;
	});

	var demonList = demonTableHeader();

	$.each(demons, function(index, data) {
		demonList += demonTableEntry(data);
	});

	demonList += demonTableFooter();

	showDemonList(demonList);
}

function findAffinity() {
	var a = $("#affinitySelectA").val();
	var b = $("#affinitySelectB").val();
	var demons = [ ];

	$.each(demonByNameEN, function(name, data) {
		if(data.affinity[a] == b) {
			demons.push(data);
		}
	});

	demons.sort(function(a, b) {
		if(a.level == b.level)
			return a.nameEN > b.nameEN ? 1 : -1;

		return a.level - b.level;
	});

	var demonList = demonTableHeader();

	$.each(demons, function(index, data) {
		demonList += demonTableEntry(data);
	});

	demonList += demonTableFooter();

	showDemonList(demonList);
}

function restoreTribeList() {
	$("#showAllDemonsBtn").show();
	$("#affinityFilterBtn").show();
	$("#affinityFilter").hide();
	$("#tribeListBtn").hide();
	$("#demonData").hide();
	$("#demonList").hide();
	$("#tribeList").show();
	$("#demonSearch").val("");
}

function restoreAffinityFilter() {
	restoreTribeList();

	$("#showAllDemonsBtn").hide();
	$("#affinityFilterBtn").hide();
	$("#affinityFilter").show();
	$("#tribeListBtn").show();
	$("#tribeList").hide();
}

function showAllDemons() {
	var demons = [ ];

	$.each(demonByNameEN, function(name, data) {
		demons.push(data);
	});

	demons.sort(function(a, b) {
		if(a.level == b.level)
			return a.nameEN > b.nameEN ? 1 : -1;

		return a.level - b.level;
	});

	var demonList = demonTableHeader();

	$.each(demons, function(index, data) {
		demonList += demonTableEntry(data);
	});

	demonList += demonTableFooter();

	showDemonList(demonList);

	$("#showAllDemonsBtn").hide();
}

function showTab(name) {
	if(name == "demons") {
		$("#demonTab").show();
		$("#demonButton").removeClass("button_up");
		$("#demonButton").addClass("button_down");
	} else {
		$("#demonTab").hide();
		$("#demonButton").removeClass("button_down");
		$("#demonButton").addClass("button_up");
	}

	if(name == "skills") {
		$("#skillTab").show();
		$("#skillButton").removeClass("button_up");
		$("#skillButton").addClass("button_down");
	} else {
		$("#skillTab").hide();
		$("#skillButton").removeClass("button_down");
		$("#skillButton").addClass("button_up");
	}

	if(name == "comp") {
		$("#compTab").show();
		$("#compButton").removeClass("button_up");
		$("#compButton").addClass("button_down");
	} else {
		$("#compTab").hide();
		$("#compButton").removeClass("button_down");
		$("#compButton").addClass("button_up");
	}

	if(name == "walkthrough" || name == "walk") {
		$("#walkTab").show();
		$("#walkButton").removeClass("button_up");
		$("#walkButton").addClass("button_down");
	} else {
		$("#walkTab").hide();
		$("#walkButton").removeClass("button_down");
		$("#walkButton").addClass("button_up");
	}

	if(name == "apps") {
		$("#appTab").show();
		$("#appButton").removeClass("button_up");
		$("#appButton").addClass("button_down");
	} else {
		$("#appTab").hide();
		$("#appButton").removeClass("button_down");
		$("#appButton").addClass("button_up");
	}
}

function demonQuickList(demonNames) {
	var demons = [ ];

	$.each(demonNames, function(index, name) {
		demons.push(demonByNameEN[name.toLowerCase()]);
	});

	demons.sort(function(a, b) {
		if(a.level == b.level)
			return a.nameEN > b.nameEN ? 1 : -1;

		return a.level - b.level;
	});

	var demonList = demonTableHeader();

	$.each(demons, function(index, data) {
		demonList += demonTableEntry(data);
	});

	demonList += demonTableFooter();

	return demonList;
}
