export const load = () => JSON.parse(localStorage.getItem("V-DATA") || JSON.stringify(entry))
export const save = () => localStorage.setItem("V-DATA", JSON.stringify(data));
export const clear = () => localStorage.clear()
export const entry = {
	foods: {
		Aş: 35,
		BozBaş: 22,
		Merci: 9
	},
	orders: [
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		{total: 0, foods: {}},
		],
	orderTotal: 0,
	overview: [{total: 0, table: 0, foods: {}}/*orders*/],
	selectedOrder: 0
}

// clear()
export var data = load() || entry()

