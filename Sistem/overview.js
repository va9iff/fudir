import { data, save, reset, entry, VLit, html, price } from "./v.js"

function downloadBlob(content, filename, contentType) {
	// Create a blob
	var blob = new Blob([content], { type: contentType })
	var url = URL.createObjectURL(blob)

	// Create a link to download it
	var pom = document.createElement("a")
	pom.href = url
	pom.setAttribute("download", filename)
	pom.click()
}

class VOverview extends VLit {
	static properties = {}
	static props = {
		selected: 0,
		willWipe: false,
	}
	constructor() {
		super()
		this.selected = data.overview.length - 1
	}
	deleteOrder(order, e) {
		if (e.target.value != "2024") return this.requestUpdate()
		// console.log(data.orders.includes(order))
		if (
			!confirm(`${order.total}₼ məbləğindəki çek gündəlikdən silinsin mi? 
(${order.table + 1} nömrəli masa)`)
		)
			return this.requestUpdate()
		data.overview = data.overview.filter(
			o => !(o.total == order.total && o.table == order.table)
		)
		// save()
		this.requestUpdate()
	}
	export(e) {
		let csv =
			`ID; Masa; Saat; Yemək; Məbləğ\n` +
			`-1; -1; 00:00; Ümumi; ${price(
				data.overview.reduce((acc, curr) => acc + curr.total, 0)
			)}\n` +
			data.overview
				.map((order, oi) =>
					Object.keys(order.foods)
						.map(
							foodName =>
								`${oi}; ${order.table}; ${order.time}; ${foodName}; ${order.foods[foodName].total}`
						)
						.join("\n")
				)
				.join("\n")

		const today = new Date()
		const day = String(today.getDate()).padStart(2, "0")
		const month = String(today.getMonth() + 1).padStart(2, "0") // January is 0!
		const year = today.getFullYear()
		const formattedDate = `${day}.${month}.${year}`

		console.log(csv)
		// downloadBlob(csv, `${formattedDate}.csv`, 'text/csv;charset=utf-8;')
		var csvString = csv
		var universalBOM = "\uFEFF"
		var a = window.document.createElement("a")
		a.setAttribute(
			"href",
			"data:text/csv; charset=utf-8," +
				encodeURIComponent(universalBOM + csvString)
		)
		a.setAttribute("download", `${formattedDate}.csv`)
		window.document.body.appendChild(a)
		a.click()
	}
	unsafeExport(e) {
		this.export()
		this.willWipe = true
		setTimeout(() => {
			data.overview = entry().overview
			data.orderTotal = entry().orderTotal
			data.selectedOrder = entry().selectedOrder
			data.orders = data.orders.map(_ => ({ total: 0, foods: {} }))
			save()
			this.willWipe = false
			this.requestUpdate()
		}, 5000)
		this.requestUpdate()
	}
	xulase(e) {
		let xulase = data.overview.map(order =>
			Object.keys(order.foods).map(foodName => ({
				name: foodName,
				count: order.foods[foodName].count,
				price: data.sets.find(set=>set.name==foodName)?.setFoods.reduce((curr,acc)=>curr+data.foods[acc.name]*acc.count,0)||data.foods[foodName] * order.foods[foodName].count,
			}))
		).flat()
		console.log(xulase)
		const today = new Date()
		const day = String(today.getDate()).padStart(2, "0")
		const month = String(today.getMonth() + 1).padStart(2, "0") // January is 0!
		const year = today.getFullYear()
		const formattedDate = `${day}.${month}.${year}`

		var csvString = `${formattedDate}; ${xulase.reduce((acc,curr)=>acc+curr.count,0)}; ${xulase.reduce((acc,curr)=>acc+curr.price,0)}\n`
			+ xulase.map(x=>`${x.name}; ${x.count}; ${x.price}`).join('\n')
		var universalBOM = "\uFEFF"
		var a = window.document.createElement("a")
		a.setAttribute(
			"href",
			"data:text/csv; charset=utf-8," +
				encodeURIComponent(universalBOM + csvString)
		)
		a.setAttribute("download", `${formattedDate} xülasə.csv`)
		window.document.body.appendChild(a)
		a.click()
	}
	render() {
		let overview = data.overview[this.selected] || {
			total: 0,
			table: 0,
			foods: {},
		}
		// console.log(overview)
		return html`
			<div class="columns">
				<div class="list orders">
					<span class="order header">
						<span class="numberPart o5"> Nömrə </span>
						<span class="masaPart">Masa</span>
						<span class="totalPart">Cəm</span>
						<span class="totalPart">Saat</span>
						<button class="delete" style="visibility: hidden">sil</button>
					</span>
					${data.overview.map(
						(order, orderI) => html`
							<span
								class="order"
								?active=${orderI == this.selected}
								@click=${e => (this.selected = orderI)}
							>
								<span class="numberPart o5"> ${orderI + 1}№ </span>
								<span class="masaPart">${order.table + 1}</span>
								<span class="totalPart">${order.total}₼</span>
								<span class="totalPart">${order.time}</span>
								<details>
									<summary class="delete">sil <br /></summary>
									<div class="deletePopup">
										silmək üçün admin parolunu <br />
										girməyiniz lazımdır <br />
										<input
											type="password"
											@input=${e => this.deleteOrder(order, e)}
										/>
									</div>
								</details>
							</span>
						`
					)}
				</div>
				<div class="list selectedOrder">
					<div>
						<button @click=${this.export}>çeklər</button>
						<button @click=${this.xulase}>xülasə</button>
						<button @click=${this.unsafeExport}>yeni gün</button>
					</div>
					<br />

					${Object.keys(overview.foods).map(
						food => html`
							<span class="orderLine"
								>${overview.foods[food].count}x ${food}
								${price(overview.foods[food].total)}₼</span
							>
						`
					)}
					<br />
					${this.selected + 1}№ Çek <br />
					${overview.table + 1} Nömrəli masadan ümumi gəlir
					<b class="f3"
						><span class="resultCash">${price(overview.total)}₼</span></b
					>
					<br />
					<h2 class="resultCash">
						Bugünlük ümumi gəlir
						${price(data.overview.reduce((acc, curr) => acc + curr.total, 0))}₼
					</h2>
					${this.willWipe
						? html`<span class="wipeIn"
								>5 saniyə içində yeni gün başladılacaq</span
						  >`
						: ""}
				</div>
			</div>
		`
	}
}

VOverview.tag = "v-overview"
