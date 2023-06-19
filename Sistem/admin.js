import {data, save, VLit, html} from "./v.js"


console.log('fasaad')

class VAdmin extends VLit{
	static properties = {}
	static props = {
		auth: true,
		newFoodName: "",
		newFoodPrice: 0,
	}
	wipe(e){
		if (confirm(`Diqqət! OK düyməsinə basmağınız qeyd olunmuş bütün məlumatları siləcək! Dəvam edilsin mi?`)){
			window.data = entry()
			save()
		}
		this.requestUpdate()
	}
	nameChange(food, name){
		data.foods[name] = data.foods[food]
		delete data.foods[food]
		save()
		alert(`"${food}" adlı yeməyin adı "${name}" olaraq dəyişdirildi.`)
		this.requestUpdate()
	}
	priceChange(food, price){
		data.foods[food] = price
		save()
		alert(`"${food}" adlı yeməyin qiyməti "${price}" olaraq dəyişdirildi.`)
		this.requestUpdate()
	}
	deleteFood(food){
		delete data.foods[food]
		save()
		alert(`"${food}" adlı yemək menyudan silindi.`)
		this.requestUpdate()
	}
	addFood(e){
		data.foods[this.newFoodName] = this.newFoodPrice
		save()
		this.requestUpdate()
	}
	checkAuth(e){
		if (e.target.value == "2024")
			this.auth = true
	}
	addMasa(e){
		data.orders.push({total: 0, foods: {}})
		save()
		this.requestUpdate()
	}
	removeMasa(e){
		if (data.orders.at(-1).total && confirm(`${data.orders.length} nömrəli masa silinəcək və onu bütün sifarişləri silinəcək. Dəvam edilsin mi?`))
		if (data.orders.length < 2) return null
		data.orders.pop()
		save()
		this.requestUpdate()
	}
	catChange(food, e){
		for (let cat in data.categories){
			data.categories[cat] = data.categories[cat].filter(f=>f!=food)
		}
		data.categories[e.target.value].push(food)
		save()
		this.requestUpdate()
	}
	render(){
		return this.auth ? html` 
		<button @click=${e=>window.vmain.page="Menyu"}>ADMIN PƏNCƏRƏSİNİ BAĞLA</button>
		<br><br><br><br>
		<div class="">
			<hr>
			Yeni yemək <br><br>
			<input type="text" placeholder="yeməyin adı" @change=${e=>this.newFoodName = e.target.value}>
			<input type="number" placeholder="yeməyin qiyməti" @change=${e=>this.newFoodPrice = +e.target.value}>
			<button @click=${this.addFood}>əlavə et</button>
			<hr>
			Menyu <br><br>
			${Object.keys(data.foods).map(food=>html`
				<div class="food">
					<input class="name" .value=${food} @change=${e=>this.nameChange(food, e.target.value)}>
					<input class="price" .value=${data.foods[food]} @change=${e=>this.priceChange(food, e.target.value)}>
					<button class="delete" @click = ${e=>this.deleteFood(food)}>sil</button>
					<select @change=${e=>this.catChange(food, e)}>
						<option value="" disabled>Kateqoriya</option>
						${Object.keys(data.categories).map(cat=>html`
							<option value=${cat} ?selected=${data.categories[cat].includes(food)}>${cat}</option>
							`)}
					</select>
				</div>
				`)}
		</div>
		<div>
		<hr>
			<div>Masaların sayı: ${data.orders.length}</div> <br>
			<button class="rmvTableBtn" @click= ${this.removeMasa}>Masanın sayını azalt</button>
			<button class="addTableBtn" @click= ${this.addMasa}>Masa əlavə et</button>
		</div>
		` : html`
			<h1>Bura xüsusi bir səhifədir. Yalnız adminlər daxil ola bilər. <br><br>
				Xaiş olunur parolu daxil edin.
			</h1>
			Parol:
			<input type="text" @change=${this.checkAuth}>
		`
	}
}

VAdmin.tag = "v-admin"


