import {data, save, price, VLit, html} from "./v.js"

class VMenu extends VLit{
	static properties = {}
	render(){
		return html`
		<div class="menu">
			${
			Object.keys(data.categories).map(cat=> html`
				<h2 class="menuHeader">${cat}</h2>
				${data.categories[cat].map(food=>html`
				<div class="food">
					<span class="name">${food}</span>
					<span class="dots"></span>
					<span class="price">${data.foods[food]}₼</span>
				</div>
				`)}`)
			}

			<h2 class="menuHeader">Setlər</h2>
			${data.sets.map(set=>html`
			<div class="food" style="align-items:center; gap: 10px">
				<span class="name"><b>${set.name}</b>
					<br>
					${set.setFoods.map(sf=>html`${sf.name} x${sf.count}<br>`)}
				</span>
				<span class="dotsssssss"></span>
				<span class="price" style="margin-left: auto">
					${
					price(set.setFoods.reduce((curr,acc)=>curr+data.foods[acc.name]*acc.count,0)) != price(set.setFoods.reduce((curr,acc)=>curr+data.foods[acc.name]*acc.count,0)-set.discount) 
					? html`
					<s>${price(set.setFoods.reduce((curr,acc)=>curr+data.foods[acc.name]*acc.count,0))}₼</s>` : ""}
					<b>${price(set.setFoods.reduce((curr,acc)=>curr+data.foods[acc.name]*acc.count,0)-set.discount)}₼</b>
				</span>
			</div>
			`)}
			
		</div>
		`
	}
}

VMenu.tag = "v-menu"