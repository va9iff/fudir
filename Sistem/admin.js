import {data, save, VLit, html, price} from "./v.js"


console.log('fasaad')

class VAdmin extends VLit{
	static properties = {}
	static props = {
		auth: false,
		newFoodName: "",
		newFoodPrice: 0,
		newFoodCat: 0,
		newCatName: "",
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
		data.foods[food] = +price
		save()
		alert(`"${food}" adlı yeməyin qiyməti "${price}" olaraq dəyişdirildi.`)
		this.requestUpdate()
	}
	deleteFood(food){
		delete data.foods[food]
		Object.keys(data.categories).map(cat=>data.categories[cat]=data.categories[cat].filter(f=>f!=food))
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
	addCat(e){
		data.categories[this.newCatName] = []
		this.newCatName = ""
		save()
		this.requestUpdate()
	}
	close(e){
		this.auth = false
		this.requestUpdate()
		// window.vmain.page="Menyu"
	}
	newSet(e){
		data.sets.push({name: "yeni set", setFoods: [], discount: 0})
		this.requestUpdate()
	}
	render(){
		return this.auth ? html` 
		<button @click=${this.close} class="closeAdmin"><span className="toLef">X</span><h3> Admin pəncərəsi̇ni̇ şifrələ və bağla</h3></button>
		<div class="">
			<hr>
			<h1>Menyu</h1>
			${Object.keys(data.foods).map(food=>html`
				<div class="food">
					<input class="name" .value=${food} disabled>
					<input class="price" type="number" .value=${data.foods[food]} @change=${e=>this.priceChange(food, e.target.value)}>
					<button class="delete" @click = ${e=>this.deleteFood(food)}>sil</button>
					<select @change=${e=>this.catChange(food, e)}>
						<option value="" disabled>   ---Kateqoriya---   </option>
						${Object.keys(data.categories).map(cat=>html`
							<option value=${cat} ?selected=${data.categories[cat].includes(food)}>${cat}</option>
							`)}
					</select>
				</div>
				`)}
		</div>
		<div>
		<hr>
		<h1>Setlər</h1>
		<div>
			${data.sets.map(set=>html`
				<div>
				<br>
					<button class="delete" @click=${e=>{
						data.sets = data.sets.filter(s=>s!=set)
						this.requestUpdate()
					}}>sil</button> ${set.name}
					<s>${price(set.setFoods.reduce((curr,acc)=>curr+data.foods[acc.name]*acc.count,0))}₼</s>
					<b>${price(set.setFoods.reduce((curr,acc)=>curr+data.foods[acc.name]*acc.count,0)-set.discount)}₼</b>
					<br>
					endirim: ₼<input type="number" .value=${set.discount} @change=${e=>{
						set.discount=e.target.value
						this.requestUpdate()
					}}>

					${set.setFoods.map((sf,i)=>html`
						<div>
							<input type="text" disabled .value=${sf.name}>
							<input type="number" class="s"
								.value = ${sf.count} 
								@change = ${e=>{
									sf.count=+e.target.value
									this.requestUpdate()
									save()
								}}
								>
						<button class="delete" @click=${e=> {
							set.setFoods.splice(i,1)
							save()
							this.requestUpdate()}}>sil</button>
							<select @change=${e=>{
								sf.name = e.target.value 
								this.requestUpdate()
							}}>
								${Object.keys(data.foods).map(f=>html`
									<option value="${f}">${f}</option>
									`)}
							</select>
						</div>
						`)}
					<div>
					əlavə
						<select .onchange=${e=>set.setFoods.push({name: e.target.value, count: 1})&&this.requestUpdate()}>
							${Object.keys(data.foods).map(f=>html`
								<option value="${f}">${f}</option>
								`)}
						</select>
					</div>
				</div>
				`)}		
			<br>
			<button @click=${this.newSet}>yeni set</button>
		</div>
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
		<h1>Yeni kateqoriya</h1>
		<input type="text" placeholder="kateqoriyanın adı" @change=${e=>this.newCatName = e.target.value} .value=${this.newCatName}>
		<button @click=${this.addCat}>əlavə et</button>

		<hr>
			<h1>Masaların sayı: ${data.orders.length}</h1>
			<button class="rmvTableBtn" @click= ${this.removeMasa}>Masanın sayını azalt</button>
			<button class="addTableBtn" @click= ${this.addMasa}>Masa əlavə et</button>
		</div>
			<hr>

		` : html`
			<div class="adminAuth">
			<h1>Xüsusi səhifə</h1>
			<p class="f2">Bura yalnız adminlər daxil ola bilər.<br>
				Xaiş olunur parolu daxil edin. <br><br>
			<span class="f1">Parol: <br></span>
			<input type="password" @change=${this.checkAuth}>
			</p>
			</div>
		`
	}
}

VAdmin.tag = "v-admin"


