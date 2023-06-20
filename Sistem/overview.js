import {data, save, VLit, html, price} from "./v.js"


class VOverview extends VLit{
	static properties = {}
	static props = {
		selected: 0
	}
	constructor(){
		super()
		this.selected = data.overview.length - 1
	}
	render(){
		let overview = data.overview[this.selected] || { total: 0, table: 0, foods: {} }
		console.log(overview)
		return html`
		<div class="columns">
			<div class="list orders">
				${data.overview.map((order, orderI)=>html`
					<span class="order" ?active=${orderI==this.selected} @click = ${e=>this.selected = orderI}>
						<span class="numberPart o5"> ${orderI+1}№ </span> <span class="masaPart">${order.table+1}</span> <span class="totalPart">${order.total}₼</span>
					</span>
				`)}
			</div>
			<div class="list selectedOrder">
				${Object.keys(overview.foods).map(food=>html`
					<span class="orderLine">${overview.foods[food].count}x ${food} ${price(overview.foods[food].total)}₼</span>
					`)}
				<br>
				${this.selected+1}№ Çek <br> 
				${overview.table+1} Nömrəli masadan ümumi gəlir <b class="f3"><span class="resultCash">${price(overview.total)}₼</span></b> <br>
				<h2 class="resultCash"> Bugünlük ümumi gəlir ${price(data.overview.reduce((acc, curr) => acc + curr.total, 0))}₼</h2>
			</div>
		</div>
		`
	}
}

VOverview.tag = "v-overview"