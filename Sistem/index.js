window.load = () =>JSON.parse(localStorage.getItem("V-DATA", JSON.stringify(window.data)))
window.save = () => localStorage.setItem("V-DATA", JSON.stringify(window.data));
window.clear = () => localStorage.clear()
window.entry = () => ({
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
})

clear()
window.data = load() || entry()


console.log(window.data)