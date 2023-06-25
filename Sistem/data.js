export const price = x => Number.parseFloat(x).toFixed(2)
export const load = () => JSON.parse(localStorage.getItem("V-DATA") || JSON.stringify(entry()))
export const save = () => localStorage.setItem("V-DATA", JSON.stringify(data));
export const clear = () => localStorage.clear()
export const reset = () => {
	data = entry()
	save()
}
export const entry = () => ({
	foods: {		
		// Şorbalar
		"Mərci şorbası": price(4.50),
		"Göbələk şorbası": price(5.50),
		"Toyuq şorbası": price(6.50),
		"Yayla şorbası": price(4.50),
		
		// Isti yeməklər
		"Toyuq şnitzeli": price(12),
		"Kotlet": price(9),
		"Toyuq sote": price(8),
		"Ət langeti": price(18.90),
		"Yarpaq dolması": price(12),
		"Kabab": price(22),

		// Qarnirlər
		"Düyü": price(2.50), 
		"Bulqur": price(2.50), 
		"Qarabaşaq": price(2.50), 
		"Kartof fri": price(4.50), 
		"Qatıq": price(2),

		
		// Salatlar
		"Çoban salatı": price(5),
		"Paytaxt salatı": price(5.50),
		"Mimoza salatı": price(5.50),
		"Manqal salatı": price(6.50),
		"Sezar salatı": price(13.50),
		
		// Soyuq içkilər
		"Coca Cola 300ml": price(3),
		"Fanta 300ml": price(3),
		"Sprite 300ml": price(3),
		"Pepsi 330ml": price(3),
		"Ayran": price(2.60),
		"Maxito": price(6),

		// Isti içkilər
		"Kofe": price(4.50),
		"Türk qəhvəsi": price(4),
		"Südlü qəhvə": price(5),
		"Kapuçino": price(7),
		"Çay (fincan)": price(1.20),
		"Jasmin çayı (fincan)": price(3),
		"Çay (dəmlik)": price(6),
		"Çay dəzgahı": price(20),		
	},
	orders: [
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		],
	categories: {
		"Şorbalar": ["Mərci şorbası", "Göbələk şorbası", "Toyuq şorbası", "Yayla şorbası"],
		"Isti yeməklər":["Toyuq şnitzeli", "Kotlet", "Toyuq sote", "Ət langeti", "Yarpaq dolması", "Kabab"],
		"Qarnirlər":["Düyü", "Bulqur", "Qarabaşaq", "Kartof fri", "Qatıq"],
		"Salatlar": ["Çoban salatı", "Paytaxt salatı", "Mimoza salatı", "Manqal salatı", "Sezar salatı"],
		"Soyuq içkilər": ["Coca Cola 300ml", "Fanta 300ml", "Sprite 300ml", "Pepsi 330ml", "Ayran", "Maxito"],
		"Isti içkilər": ["Kofe", "Türk qəhvəsi", "Südlü qəhvə", "Kapuçino", "Çay (fincan)", "Jasmin çayı (fincan)", "Çay (dəmlik)", "Çay dəzgahı"],
	},
	orderTotal: 0,
	overview: [/*{total: 0, table: 0, foods: {}}*//*orders*/],
	sets: [{
		name: "Tələbə menyusu",
		setFoods: [
			{name: "Kotlet", count: 1},
			{name: "Ayran", count: 1}
			],
		discount: price(1.70)
	},
	{
		name: "İkili menyu",
		setFoods: [
			{name: "Toyuq şorbası", count: 2},
			{name: "Kofe", count: 2}
		],
		discount: price(4)
	},
	{
		name: "Kabab süfrəsi",
		setFoods: [
			{name: "Kabab", count: 1},
			{name: "Mərci şorbası", count: 2},
			{name: "Çay dəzgahı", count: 1},
			],
		discount: price(0)
	}],
	selectedOrder: 0
})

clear()
export var data = load() // load will either parse from V-DATA or parse the entry as string

window.data = data