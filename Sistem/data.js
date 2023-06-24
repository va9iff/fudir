export const load = () => JSON.parse(localStorage.getItem("V-DATA") || JSON.stringify(entry()))
export const save = () => localStorage.setItem("V-DATA", JSON.stringify(data));
export const clear = () => localStorage.clear()
export const reset = () => {
	data = entry()
	save()
}
export const entry = () => ({
	foods: {
		Aş: 35,
		BozBaş: 22,
		Merci: 9,
		salat: 6,
		ayran: 1,
		dovğa: 1.20,
		piti: 70,
		xaş: 49,
		cola: 0.7,
		maxiato: 8,
		espresso: 9,
		"flat white": 16,
		tea: 77,
		portağal: 1,
		alma: 7,
		banan: 70,
		dolma: 60
	},
	orders: [
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		],
	categories: {
		"Əsas": ["Aş", "BozBaş", "piti", "xaş", "portağal", "alma", "banan", "dolma"],
		"İçkilər": ["ayran", "dovğa", "maxiato", "espresso", "flat white", "tea"]
	},
	orderTotal: 0,
	overview: [/*{total: 0, table: 0, foods: {}}*//*orders*/],
	sets: [{
		name: "Tələbə menyusu",
		setFoods: [
			{name: "ayran", count: 1},
			{name: "portağal", count: 1}
			],
		discount: 0
	},
	{
		name: "Tələbə menyusu",
		setFoods: [
			{name: "ayran", count: 1},
			{name: "portağal", count: 1}
			],
		discount: 0
	}],
	selectedOrder: 0
})

clear()
export var data = load() // load will either parse from V-DATA or parse the entry as string

window.data = data