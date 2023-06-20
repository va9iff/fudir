import {data, save, VLit, html} from "./v.js"


console.log('fasaad')

class VAdmin extends VLit{
	static properties = {}
	static props = {
		auth: false,
		newFoodName: "",
		newFoodPrice: 0,
		newFoodCat: 0
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
		data.categories[this.newFoodCat].push(this.newFoodName)

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
		if (data.orders.at(-1).total && !confirm(`${data.orders.length} nömrəli masa silinəcək və onu bütün sifarişləri silinəcək. Dəvam edilsin mi?`)) return null
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
	close(e){
		this.auth = false
		this.requestUpdate()
		// window.vmain.page="Menyu"
	}
	render(){
		return this.auth ? html` 
		<button @click=${this.close} class="closeAdmin"><span className="toLef">X</span><h3> Admin pəncərəsi̇ni̇ şifrələ və bağla</h3></button>
		<div class="">
			<hr>
			<h1>Menyu</h1>
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
		<h1>Yeni yemək</h1>
		<input type="text" placeholder="yeməyin adı" @change=${e=>this.newFoodName = e.target.value}>
		<input type="number" placeholder="yeməyin qiyməti" @change=${e=>this.newFoodPrice = +e.target.value}>
		<select @change=${e=>this.newFoodCat = e.target.value}>
			<option value="" disabled>Kateqoriya</option>
			${Object.keys(data.categories).map((cat,i)=>html`
				<option value=${cat} ?selected=${i==0}>${cat}</option>
				`)}
		</select>

		<button @click=${this.addFood}>əlavə et</button>

		<hr>
			<h1>Masaların sayı: ${data.orders.length}</h1>
			<button class="rmvTableBtn" @click= ${this.removeMasa}>Masanın sayını azalt</button>
			<button class="addTableBtn" @click= ${this.addMasa}>Masa əlavə et</button>
		</div>
			<hr>

		` : html`
			<div class="adminAuth">
			<h1>Xüsusi səhifə</h1>
			<h3>Bura yalnız adminlər daxil ola bilər.<br>
				Xaiş olunur parolu daxil edin.
			</h3>
			Parol:
			<input type="password" @change=${this.checkAuth}>
			</div>
		`
	}
}

VAdmin.tag = "v-admin"


