const pages = {
	Menyu: ()=>html`<v-menu></v-menu>`,
	Qeydiyyat: ()=>html`<v-qeydiyyat></v-qeydiyyat>`,
	Gündəlik: ()=>html`<v-overview></v-overview>`,
	// Ayarlar: ()=>html`<v-settings></v-settings>`,
	Admin: ()=>html`<v-admin></v-admin>`,
}


class VMain extends VLit{
	static properties = {
		page: {}
	}
	static props = {
		page: "Gündəlik"
	}
	constructor(){
		super()
		window.vmain = this
	}
	render(){
		console.log(this.page)
		return html`
			<div class="main">
				<div class="container">
					<div class="sidebar">
						${Object.keys(pages).map(page=>html`
								<button @click=${e=>this.page=page} ?active=${this.page==page}>
									${page}
								</button>
							`)}
					</div>
					<div class="content">
						${pages[this.page]()}
					</div>
				</div>
			</div>
		`
	}
}

VMain.tag = "v-main"