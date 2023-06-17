class VOverview extends VLit{
	static properties = {}
	static props = {
		selected: 0
	}
	render(){
		let overview = data.overview.at(this.selected)
		console.log(overview)
		return html`
		HI
		<div class="columns">
			<div class="list">
				${data.overview.map((order, orderI)=>html`
					<span @click = ${e=>this.selected = orderI}>#${orderI} ${order.table} ${order.total}</span>
				`)}
			</div>
			<div class="list">
				${Object.keys(overview.foods).map(food=>html`
					<span>${overview.foods[food].count}x ${food} ${overview.foods[food].total}m</span>
					`)}
				${overview.total}
			</div>
		</div>
		`
	}
}

VOverview.tag = "v-overview"