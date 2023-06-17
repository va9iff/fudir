class VMenu extends VLit{
	static properties = {}
	render(){
		return html`
		<div class="menu">
			${Object.keys(data.foods).map(food=>html`
				<div class="food">
					<span class="name">${food}</span>
					<span class="price">${data.foods[food]}</span>
				</div>
				`)}
		</div>
		`
	}
}

VMenu.tag = "v-menu"