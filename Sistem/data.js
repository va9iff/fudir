export const load = () => JSON.parse(localStorage.getItem("V-DATA") || JSON.stringify(entry))
export const save = () => localStorage.setItem("V-DATA", JSON.stringify(data));
export const clear = () => localStorage.clear()
export const entry = {
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
	},
	orders: [
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		],
	categories: {
		"Əsas": ["Aş", "BozBaş", "piti", "xaş"],
		"İçkilər": ["ayran", "dovğa"]
	},
	orderTotal: 0,
	overview: [{total: 0, table: 0, foods: {}}/*orders*/],
	selectedOrder: 0
}

clear()
export var data = load() || entry()

