import {data, save, VLit, html} from "./v.js"

class VQeydiyyat extends VLit{
	static properties = {
		selectedOrder: {}
	}
	static props = {}
	constructor(){
		super()
		this.selectedOrder = data.selectedOrder
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
		let today = new Date()
		order.time = String(today.getHours()).padStart(2, 0) + ":" + String(today.getMinutes()).padStart(2, 0) //+ ":" + today.getSeconds();
		data.overview.push(order)
		data.orders[this.selectedOrder] = {total: 0, foods: {}}
		save()
		this.requestUpdate()
		window.vmain.page = "Gündəlik"
	}
	selectMasa(i){
		data.selectedOrder = i
		this.selectedOrder = data.selectedOrder
		console.log(this.selectedOrder, data.selectedOrder)
		save()
	}
	render(){
		let order = data.orders[this.selectedOrder]
		return html`
			<div class="masalar">
				${data.orders.map((order,i)=>html`
						<button @click=${e=>this.selectMasa(i)} class="masa" ?selected = ${this.selectedOrder == i} ?dolu=${data.orders[i].total}>${i+1}</button>

					`)}
			</div>
			<div class="columns">
				<div class="adderColumn">
					${Object.keys(data.categories).map(cat=> html`
						<details>
						<summary>${cat}</summary>
							<div class="list addingFoods">
								${data.categories[cat].map(food=>html`
									<button @click = ${e=>{this.foodToOrder(food)}} class="addingFood"><span class="plus">+</span>${food} ${data.foods[food]}₼</button>
								`)}
							</div>
						</details>
					`)}
				</div>
				<div class="list cek">
					<span>${this.selectedOrder+1} nömrəli masanın çeki <br><br></span>
					${Object.keys(order.foods).map(food=>html`
						<span class="addedFood">
						<button @click=${e=>this.removeFromOrder(food)} class="delete">-</button> ${order.foods[food].count}x ${food} ${order.foods[food].total}₼
						</span>
					`)}
					<span class="dayResult">${order.total ? html`<h2>${order.total}₼</h2>` : html`Masa boşdur!<br><br><h2>0₼</h2>`} <button class="btn finishOrder" @click=${this.done} ?disabled=${!order.total}>Hesabı Tamamla</button></span> 
				</div>
			</div>
			
		`
	}
}

VQeydiyyat.tag = "v-qeydiyyat"