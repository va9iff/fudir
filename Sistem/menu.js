import {data, save, VLit, html} from "./v.js"

class VMenu extends VLit{
	static properties = {}
	render(){
		return html`
		<div class="menu">
			${
			Object.keys(data.categories).map(cat=> html`
				<h2 class="menuHeader">${cat}</h2>
				${Object.keys(data.foods).map(food=>html`
				<div class="food">
					<span class="name">${food}</span>
					<span class="dots"></span>
					<span class="price">${data.foods[food]}₼</span>
				</div>
				`)}`)
			}
		</div>
		`
	}
}

VMenu.tag = "v-menu"