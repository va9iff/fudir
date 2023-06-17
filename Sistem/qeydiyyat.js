class VQeydiyyat extends VLit{
	static properties = {}
	static props = {
		selectedOrder: 0
	}
	foodToOrder(food){
		let order = data.orders[this.selectedOrder]
		order.foods[food] ??= {count: 0, total: 0}
		order.foods[food].count++
		order.foods[food].total += data.foods[food]
		order.total = Object.keys(order.foods).reduce((acc,curr)=>acc+order.foods[curr].total,0)

		save()
		this.requestUpdate()
	}
	removeFromOrder(food){
		let order = data.orders[this.selectedOrder]
		order.foods[food].count--
		order.foods[food].total -= data.foods[food]
		if (order.foods[food].count==0) delete order.foods[food]
		order.total = Object.keys(order.foods).reduce((acc,curr)=>acc+order.foods[curr].total,0)


		save()
		this.requestUpdate()

	}
	done(e){
		let order = data.orders[this.selectedOrder]
		order.table = this.selectedOrder
		data.overview.push(order)
		data.orders[this.selectedOrder] = {total: 0, foods: {}}
		save()
		this.requestUpdate()
		window.vmain.page = "Gündəlik"
	}
	render(){
		let order = data.orders.at(this.selectedOrder)
		return html`
			<div>
				<button @click=${e=>this.selectedOrder=0}>0</button>
				<button @click=${e=>this.selectedOrder=1}>1</button>
				<button @click=${e=>this.selectedOrder=2}>2</button>
				<button @click=${e=>this.selectedOrder=3}>3</button>
				<button @click=${e=>this.selectedOrder=4}>4</button>
			</div>
			<div class="columns">
				<div class="list">
					${Object.keys(data.foods).map(food=>html`
						<span @click = ${e=>{this.foodToOrder(food)}} class="price">${food} ${data.foods[food]}</span>
					`)}
				</div>
				<div class="list order">
					${Object.keys(order.foods).map(food=>html`
						<span class="price">${food} ${order.foods[food].count}x ${order.foods[food].total}
						 <button @click=${e=>this.removeFromOrder(food)}>-</button>
						</span>
					`)}
					<span>${order.total} <button @click=${this.done}>Hesabı Tamamla</button></span> 
				</div>
			</div>
			
		`
	}
}

VQeydiyyat.tag = "v-qeydiyyat"