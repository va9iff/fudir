/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";const t=t=>Number.parseFloat(t).toFixed(2),e=()=>localStorage.setItem("V-DATA",JSON.stringify(i)),s=()=>({foods:{"Mərci şorbası":t(4.5),"Göbələk şorbası":t(5.5),"Toyuq şorbası":t(6.5),"Yayla şorbası":t(4.5),"Toyuq şnitzeli":t(12),Kotlet:t(9),"Toyuq sote":t(8),"Ət langeti":t(18.9),"Yarpaq dolması":t(12),Kabab:t(22),Düyü:t(2.5),Bulqur:t(2.5),Qarabaşaq:t(2.5),"Kartof fri":t(4.5),Qatıq:t(2),"Çoban salatı":t(5),"Paytaxt salatı":t(5.5),"Mimoza salatı":t(5.5),"Manqal salatı":t(6.5),"Sezar salatı":t(13.5),"Coca Cola 300ml":t(3),"Fanta 300ml":t(3),"Sprite 300ml":t(3),"Pepsi 330ml":t(3),Ayran:t(2.6),Maxito:t(6),Kofe:t(4.5),"Türk qəhvəsi":t(4),"Südlü qəhvə":t(5),Kapuçino:t(7),"Çay (fincan)":t(1.2),"Jasmin çayı (fincan)":t(3),"Çay (dəmlik)":t(6),"Çay dəzgahı":t(20)},orders:[{total:0,foods:{}},{total:0,foods:{}},{total:0,foods:{}},{total:0,foods:{}},{total:0,foods:{}}],categories:{Şorbalar:["Mərci şorbası","Göbələk şorbası","Toyuq şorbası","Yayla şorbası"],"Isti yeməklər":["Toyuq şnitzeli","Kotlet","Toyuq sote","Ət langeti","Yarpaq dolması","Kabab"],Qarnirlər:["Düyü","Bulqur","Qarabaşaq","Kartof fri","Qatıq"],Salatlar:["Çoban salatı","Paytaxt salatı","Mimoza salatı","Manqal salatı","Sezar salatı"],"Soyuq içkilər":["Coca Cola 300ml","Fanta 300ml","Sprite 300ml","Pepsi 330ml","Ayran","Maxito"],"Isti içkilər":["Kofe","Türk qəhvəsi","Südlü qəhvə","Kapuçino","Çay (fincan)","Jasmin çayı (fincan)","Çay (dəmlik)","Çay dəzgahı"]},orderTotal:0,overview:[],sets:[{name:"Tələbə menyusu",setFoods:[{name:"Kotlet",count:1},{name:"Ayran",count:1}],discount:t(1.7)},{name:"İkili menyu",setFoods:[{name:"Toyuq şorbası",count:2},{name:"Kofe",count:2}],discount:t(4)},{name:"Kabab süfrəsi",setFoods:[{name:"Kabab",count:1},{name:"Mərci şorbası",count:2},{name:"Çay dəzgahı",count:1}],discount:t(0)}],selectedOrder:0});var i=JSON.parse(localStorage.getItem("V-DATA")||JSON.stringify(s()));window.data=i;const o=window,a=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;class l{constructor(t,e,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.i;const e=this.t;if(a&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.i=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}}const d=(t,e)=>{a?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),i=o.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=e.cssText,t.appendChild(s)}))},c=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var h;const u=window,p=u.trustedTypes,v=p?p.emptyScript:"",m=u.reactiveElementPolyfillSupport,$={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},f=(t,e)=>e!==t&&(e==e||t==t),y={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:f},g="finalized";class b extends HTMLElement{constructor(){super(),this.o=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this.l=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.v)&&void 0!==e?e:this.v=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this.p(s,e);void 0!==i&&(this.m.set(i,s),t.push(i))})),t}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||y}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.v&&(this.v=[...t.v]),this.elementProperties=new Map(t.elementProperties),this.m=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static p(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this.g(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this.S)&&void 0!==e?e:this.S=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this.S)||void 0===e||e.splice(this.S.indexOf(t)>>>0,1)}g(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.o.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.S)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.S)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}$(t,e,s=y){var i;const o=this.constructor.p(t,s);if(void 0!==o&&!0===s.reflect){const a=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:$).toAttribute(e,s.type);this.l=t,null==a?this.removeAttribute(o):this.setAttribute(o,a),this.l=null}}_$AK(t,e){var s;const i=this.constructor,o=i.m.get(t);if(void 0!==o&&this.l!==o){const t=i.getPropertyOptions(o),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:$;this.l=o,this[o]=a.fromAttribute(e,t.type),this.l=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this.l!==t&&(void 0===this.C&&(this.C=new Map),this.C.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._=this.T())}async T(){this.isUpdatePending=!0;try{await this._}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.o&&(this.o.forEach(((t,e)=>this[e]=t)),this.o=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this.S)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this.P()}catch(t){throw e=!1,this.P(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this.S)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}P(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._}shouldUpdate(t){return!0}update(t){void 0!==this.C&&(this.C.forEach(((t,e)=>this.$(e,this[e],t))),this.C=void 0),this.P()}updated(t){}firstUpdated(t){}}var A;b[g]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:b}),(null!==(h=u.reactiveElementVersions)&&void 0!==h?h:u.reactiveElementVersions=[]).push("1.6.2");const w=window,S=w.trustedTypes,_=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,C="?"+O,x=`<${C}>`,U=document,q=()=>U.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,M="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,E=/>/g,H=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,j=/"/g,z=/^(?:script|style|textarea|title)$/i,I=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),B=I(1),D=(I(2),Symbol.for("lit-noChange")),L=Symbol.for("lit-nothing"),K=new WeakMap,V=U.createTreeWalker(U,129,null,!1);class W{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,a=0;const n=t.length-1,r=this.parts,[l,d]=((t,e)=>{const s=t.length-1,i=[];let o,a=2===e?"<svg>":"",n=T;for(let e=0;e<s;e++){const s=t[e];let r,l,d=-1,c=0;for(;c<s.length&&(n.lastIndex=c,l=n.exec(s),null!==l);)c=n.lastIndex,n===T?"!--"===l[1]?n=F:void 0!==l[1]?n=E:void 0!==l[2]?(z.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=H):void 0!==l[3]&&(n=H):n===H?">"===l[0]?(n=null!=o?o:T,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?H:'"'===l[3]?j:R):n===j||n===R?n=H:n===F||n===E?n=T:(n=H,o=void 0);const h=n===H&&t[e+1].startsWith("/>")?" ":"";a+=n===T?s+x:d>=0?(i.push(r),s.slice(0,d)+k+s.slice(d)+O+h):s+O+(-2===d?(i.push(void 0),e):h)}const r=a+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(r):r,i]})(t,e);if(this.el=W.createElement(l,s),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=V.nextNode())&&r.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(k)||e.startsWith(O)){const s=d[a++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+k).split(O),e=/([.?@])?(.*)/.exec(s);r.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?tt:"@"===e[1]?et:G})}else r.push({type:6,index:o})}for(const e of t)i.removeAttribute(e)}if(z.test(i.tagName)){const t=i.textContent.split(O),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],q()),V.nextNode(),r.push({type:2,index:++o});i.append(t[e],q())}}}else if(8===i.nodeType)if(i.data===C)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(O,t+1));)r.push({type:7,index:o}),t+=O.length-1}o++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){var o,a,n,r;if(e===D)return e;let l=void 0!==i?null===(o=s.A)||void 0===o?void 0:o[i]:s.k;const d=P(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,s,i)),void 0!==i?(null!==(n=(r=s).A)&&void 0!==n?n:r.A=[])[i]=l:s.k=l),void 0!==l&&(e=Y(t,l._$AS(t,e.values),l,i)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}M(t){var e;const{el:{content:s},parts:i}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:U).importNode(s,!0);V.currentNode=o;let a=V.nextNode(),n=0,r=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new Q(a,a.nextSibling,this,t):1===l.type?e=new l.ctor(a,l.name,l.strings,this,t):6===l.type&&(e=new st(a,this,t)),this._$AV.push(e),l=i[++r]}n!==(null==l?void 0:l.index)&&(a=V.nextNode(),n++)}return V.currentNode=U,o}U(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{constructor(t,e,s,i){var o;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this.N=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this.N}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),P(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==D&&this.R(t):void 0!==t._$litType$?this.O(t):void 0!==t.nodeType?this.V(t):(t=>N(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.j(t):this.R(t)}L(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}V(t){this._$AH!==t&&(this._$AR(),this._$AH=this.L(t))}R(t){this._$AH!==L&&P(this._$AH)?this._$AA.nextSibling.data=t:this.V(U.createTextNode(t)),this._$AH=t}O(t){var e;const{values:s,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=W.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.U(s);else{const t=new J(o,this),e=t.M(this.options);t.U(s),this.V(e),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new W(t)),e}j(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new Q(this.L(q()),this.L(q()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this.N=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,s,i,o){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let a=!1;if(void 0===o)t=Y(this,t,e,0),a=!P(t)||t!==this._$AH&&t!==D,a&&(this._$AH=t);else{const i=t;let n,r;for(t=o[0],n=0;n<o.length-1;n++)r=Y(this,i[s+n],e,n),r===D&&(r=this._$AH[n]),a||(a=!P(r)||r!==this._$AH[n]),r===L?t=L:t!==L&&(t+=(null!=r?r:"")+o[n+1]),this._$AH[n]=r}a&&!i&&this.I(t)}I(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends G{constructor(){super(...arguments),this.type=3}I(t){this.element[this.name]=t===L?void 0:t}}const Z=S?S.emptyScript:"";class tt extends G{constructor(){super(...arguments),this.type=4}I(t){t&&t!==L?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class et extends G{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=Y(this,t,e,0))&&void 0!==s?s:L)===D)return;const i=this._$AH,o=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==L&&(i===L||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const it=w.litHtmlPolyfillSupport;var ot,at;null==it||it(W,Q),(null!==(A=w.litHtmlVersions)&&void 0!==A?A:w.litHtmlVersions=[]).push("2.7.4");class nt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this.st=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.st=((t,e,s)=>{var i,o;const a=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let n=a._$litPart$;if(void 0===n){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;a._$litPart$=n=new Q(e.insertBefore(q(),t),t,void 0,null!=s?s:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.st)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.st)||void 0===t||t.setConnected(!1)}render(){return D}}nt.finalized=!0,nt._$litElement$=!0,null===(ot=globalThis.litElementHydrateSupport)||void 0===ot||ot.call(globalThis,{LitElement:nt});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:nt}),(null!==(at=globalThis.litElementVersions)&&void 0!==at?at:globalThis.litElementVersions=[]).push("3.3.2");class lt extends nt{static props={};static properties={};createRenderRoot(){return this}constructor(){super();for(let t in this.constructor.props)this[t]=this.constructor.props[t]}static set tag(t){for(const t in this.props)this.properties[t]??={};customElements.define(t,this)}}(class extends lt{static properties={};render(){return B`
		<div class="menu">
			${Object.keys(i.categories).map((t=>B`
				<h2 class="menuHeader">${t}</h2>
				${i.categories[t].map((t=>B`
				<div class="food">
					<span class="name">${t}</span>
					<span class="dots"></span>
					<span class="price">${i.foods[t]}₼</span>
				</div>
				`))}`))}

			<h2 class="menuHeader">Setlər</h2>
			${i.sets.map((e=>B`
			<div class="food" style="align-items:center; gap: 10px">
				<span class="name"><b>${e.name}</b>
					<br>
					${e.setFoods.map((t=>B`${t.name} x${t.count}<br>`))}
				</span>
				<span class="dotsssssss"></span>
				<span class="price" style="margin-left: auto">
					${t(e.setFoods.reduce(((t,e)=>t+i.foods[e.name]*e.count),0))!=t(e.setFoods.reduce(((t,e)=>t+i.foods[e.name]*e.count),0)-e.discount)?B`
					<s>${t(e.setFoods.reduce(((t,e)=>t+i.foods[e.name]*e.count),0))}₼</s>`:""}
					<b>${t(e.setFoods.reduce(((t,e)=>t+i.foods[e.name]*e.count),0)-e.discount)}₼</b>
				</span>
			</div>
			`))}
			
		</div>
		`}}).tag="v-menu",class extends lt{static properties={selectedOrder:{}};static props={};constructor(){super(),this.selectedOrder=i.selectedOrder}foodToOrder(s){let o=i.orders[this.selectedOrder];o.foods[s]??={count:0,total:0},o.foods[s].count++,o.foods[s].total=+t(i.foods[s]*o.foods[s].count),o.total=Object.keys(o.foods).reduce(((t,e)=>t+o.foods[e].total),0),e(),this.requestUpdate()}setToOrder(s){let o=i.orders[this.selectedOrder];o.foods[s.name]??={count:0,total:0},o.foods[s.name].count++,o.foods[s.name].total=+t(o.foods[s.name].total+s.setFoods.reduce(((t,e)=>t+i.foods[e.name]*e.count),0)-s.discount),o.total=t(Object.keys(o.foods).reduce(((t,e)=>t+o.foods[e].total),0)),e(),this.requestUpdate()}removeFromOrder(s){let o=i.orders[this.selectedOrder];o.foods[s].count--,o.foods[s].total-=i.foods[s],0==o.foods[s].count&&delete o.foods[s],o.total=t(Object.keys(o.foods).reduce(((t,e)=>t+o.foods[e].total),0)),e(),this.requestUpdate()}done(t){let s=i.orders[this.selectedOrder];s.table=this.selectedOrder;let o=new Date;s.time=String(o.getHours()).padStart(2,0)+":"+String(o.getMinutes()).padStart(2,0),i.overview.push(s),i.orders[this.selectedOrder]={total:0,foods:{}},e(),this.requestUpdate(),window.vmain.page="Gündəlik"}selectMasa(t){i.selectedOrder=t,this.selectedOrder=i.selectedOrder,console.log(this.selectedOrder,i.selectedOrder),e()}render(){let e=i.orders[this.selectedOrder];return B`
			<div class="masalar">
				${i.orders.map(((t,e)=>B`
						<button @click=${t=>this.selectMasa(e)} class="masa" ?selected = ${this.selectedOrder==e} ?dolu=${i.orders[e].total}>${e+1}</button>

					`))}
			</div>
			<div class="columns">
				<div class="adderColumn">
					${Object.keys(i.categories).map((t=>B`
						<details>
						<summary>${t}</summary>
							<div class="list addingFoods">
								${i.categories[t].map((t=>B`
									<button @click = ${e=>{this.foodToOrder(t)}} class="addingFood"><span class="plus">+</span>${t} ${i.foods[t]}₼</button>
								`))}
							</div>
						</details>
					`))}
						<details>
						<summary>Setlər</summary>
							<div class="list addingFoods">
								${i.sets.map((e=>B`
									<button @click = ${t=>{this.setToOrder(e)}} class="addingFood"><span class="plus">+</span>${e.name} ${t(e.setFoods.reduce(((t,e)=>t+i.foods[e.name]*e.count),0)-e.discount)}₼</button>
								`))}
							</div>
						</details>
				</div>
				<div class="list cek">
					<span>${this.selectedOrder+1} nömrəli masanın çeki <br><br></span>
					${Object.keys(e.foods).map((t=>B`
						<span class="addedFood">
						<button @click=${e=>this.removeFromOrder(t)} class="delete">-</button> ${e.foods[t].count}x ${t} ${e.foods[t].total}₼
						</span>
					`))}
					<span class="dayResult">${e.total?B`<h2>${e.total}₼</h2>`:B`Masa boşdur!<br><br><h2>0₼</h2>`} <button class="btn finishOrder" @click=${this.done} ?disabled=${!e.total}>Hesabı Tamamla</button></span> 
				</div>
			</div>
			
		`}}.tag="v-qeydiyyat",class extends lt{static properties={};static props={selected:0,willWipe:!1};constructor(){super(),this.selected=i.overview.length-1}deleteOrder(t,e){return"2024"!=e.target.value?this.requestUpdate():confirm(`${t.total}₼ məbləğindəki çek gündəlikdən silinsin mi? \n(${t.table+1} nömrəli masa)`)?(i.overview=i.overview.filter((e=>!(e.total==t.total&&e.table==t.table))),void this.requestUpdate()):this.requestUpdate()}export(e){let s=`ID; Masa; Saat; Yemək; Məbləğ\n-1; -1; 00:00; Ümumi; ${t(i.overview.reduce(((e,s)=>t(e+s.total)),0))}\n`+i.overview.map(((t,e)=>Object.keys(t.foods).map((s=>`${e}; ${t.table+1}; ${t.time}; ${s}; ${t.foods[s].total}`)).join("\n"))).join("\n");const o=new Date,a=`${String(o.getDate()).padStart(2,"0")}.${String(o.getMonth()+1).padStart(2,"0")}.${o.getFullYear()}`;console.log(s);var n=s,r=window.document.createElement("a");r.setAttribute("href","data:text/csv; charset=utf-8,"+encodeURIComponent("\ufeff"+n)),r.setAttribute("download",`${a}.csv`),window.document.body.appendChild(r),r.click()}unsafeExport(t){this.export(),this.willWipe=!0,setTimeout((()=>{i.overview=s().overview,i.orderTotal=s().orderTotal,i.selectedOrder=s().selectedOrder,i.orders=i.orders.map((t=>({total:0,foods:{}}))),e(),this.willWipe=!1,this.requestUpdate()}),5e3),this.requestUpdate()}xulase(t){let e=i.overview.map((t=>Object.keys(t.foods).map((e=>({name:e,count:t.foods[e].count,price:i.sets.find((t=>t.name==e))?.setFoods.reduce(((t,e)=>t+i.foods[e.name]*e.count),0)||i.foods[e]*t.foods[e].count}))))).flat();console.log(e);const s=new Date,o=`${String(s.getDate()).padStart(2,"0")}.${String(s.getMonth()+1).padStart(2,"0")}.${s.getFullYear()}`;var a=`${o}; ${e.reduce(((t,e)=>t+e.count),0)}; ${e.reduce(((t,e)=>t+e.price),0)}\n`+e.map((t=>`${t.name}; ${t.count}; ${t.price}`)).join("\n"),n=window.document.createElement("a");n.setAttribute("href","data:text/csv; charset=utf-8,"+encodeURIComponent("\ufeff"+a)),n.setAttribute("download",`${o} xülasə.csv`),window.document.body.appendChild(n),n.click()}render(){let e=i.overview[this.selected]||{total:0,table:0,foods:{}};return B`
			<div class="columns">
				<div class="list orders">
					<span class="order header">
						<span class="numberPart o5"> Nömrə </span>
						<span class="masaPart">Masa</span>
						<span class="totalPart">Cəm</span>
						<span class="totalPart">Saat</span>
						<button class="delete" style="visibility: hidden">sil</button>
					</span>
					${i.overview.map(((t,e)=>B`
							<span
								class="order"
								?active=${e==this.selected}
								@click=${t=>this.selected=e}
							>
								<span class="numberPart o5"> ${e+1}№ </span>
								<span class="masaPart">${t.table+1}</span>
								<span class="totalPart">${t.total}₼</span>
								<span class="totalPart">${t.time}</span>
								<details>
									<summary class="delete">sil <br /></summary>
									<div class="deletePopup">
										silmək üçün admin parolunu <br />
										girməyiniz lazımdır <br />
										<input
											type="password"
											@input=${e=>this.deleteOrder(t,e)}
										/>
									</div>
								</details>
							</span>
						`))}
				</div>
				<div class="list selectedOrder">
					<div>
						<button @click=${this.export}>çeklər</button>
						<button @click=${this.xulase}>xülasə</button>
						<button @click=${this.unsafeExport}>yeni gün</button>
					</div>
					<br />

					${Object.keys(e.foods).map((s=>B`
							<span class="orderLine"
								>${e.foods[s].count}x ${s}
								${t(e.foods[s].total)}₼</span
							>
						`))}
					<br />
					${this.selected+1}№ Çek <br />
					${e.table+1} Nömrəli masadan ümumi gəlir
					<b class="f3"
						><span class="resultCash">${t(e.total)}₼</span></b
					>
					<br />
					<h2 class="resultCash">
						Bugünlük ümumi gəlir
						${t(i.overview.reduce(((e,s)=>t(+e+ +s.total)),0))}₼
					</h2>
					${this.willWipe?B`<span class="wipeIn"
								>5 saniyə içində yeni gün başladılacaq</span
						  >`:""}
				</div>
			</div>
		`}}.tag="v-overview",class extends lt{static properties={};render(){return B`
		qara agh mod belke
		`}}.tag="v-settings",console.log("fasaad"),class extends lt{static properties={};static props={auth:!1,newFoodName:"",newFoodPrice:0,newFoodCat:0,newCatName:"",newSetName:""};wipe(t){confirm("Diqqət! OK düyməsinə basmağınız qeyd olunmuş bütün məlumatları siləcək! Dəvam edilsin mi?")&&(window.data=s(),e()),this.requestUpdate()}nameChange(t,s){i.foods[s]=i.foods[t],delete i.foods[t],e(),alert(`"${t}" adlı yeməyin adı "${s}" olaraq dəyişdirildi.`),this.requestUpdate()}priceChange(s,o){i.foods[s]=t(o),e(),alert(`"${s}" adlı yeməyin qiyməti "${t}" olaraq dəyişdirildi.`),this.requestUpdate()}deleteFood(t){delete i.foods[t],Object.keys(i.categories).map((e=>i.categories[e]=i.categories[e].filter((e=>e!=t)))),e(),alert(`"${t}" adlı yemək menyudan silindi.`),this.requestUpdate()}addFood(s){i.foods[this.newFoodName]=t(this.newFoodPrice),this.newFoodName="",this.requestUpdate(),this.newFoodCat&&i.categories[this.newFoodCat].push(this.newFoodName),e(),this.requestUpdate()}checkAuth(t){"2024"==t.target.value&&(this.auth=!0)}addMasa(t){i.orders.push({total:0,foods:{}}),e(),this.requestUpdate()}removeMasa(t){return i.orders.at(-1).total&&!confirm(`${i.orders.length} nömrəli masa silinəcək və onu bütün sifarişləri silinəcək. Dəvam edilsin mi?`)||i.orders.length<2?null:(i.orders.pop(),e(),void this.requestUpdate())}catChange(t,s){for(let e in i.categories)i.categories[e]=i.categories[e].filter((e=>e!=t));s.target.value&&i.categories[s.target.value].push(t),e(),this.requestUpdate()}addCat(t){i.categories[this.newCatName]=[],this.newCatName="",e(),this.requestUpdate()}close(t){this.auth=!1,this.requestUpdate()}newSet(t){i.sets.push({name:this.newSetName,setFoods:[],discount:0}),this.requestUpdate()}render(){return this.auth?B` 
		<button @click=${this.close} class="closeAdmin"><span className="toLef">X</span><h3> Admin pəncərəsi̇ni̇ şifrələ və bağla</h3></button>
		<div class="">
			<hr>
			<h1>Menyu</h1>
			${Object.keys(i.foods).map((t=>B`
				<div class="food">
					<input class="name" .value=${t} disabled>
					<input class="price" type="number" .value=${i.foods[t]} @change=${e=>this.priceChange(t,e.target.value)}>
					<button class="delete" @click = ${e=>this.deleteFood(t)}>sil</button>
					<select @change=${e=>this.catChange(t,e)}>
						<option value="">   ---Kateqoriya---   </option>
						${Object.keys(i.categories).map((e=>B`
							<option value=${e} ?selected=${i.categories[e].includes(t)}>${e}</option>
							`))}
					</select>
				</div>
				`))}
		</div>
		<div>
		<hr>
		<h1>Setlər</h1>
		<div>
			${i.sets.map((s=>B`
				<div>
				<br>
					<button class="delete" @click=${t=>{i.sets=i.sets.filter((t=>t!=s)),this.requestUpdate()}}>sil</button> ${s.name}
					<s>${t(s.setFoods.reduce(((t,e)=>t+i.foods[e.name]*e.count),0))}₼</s>
					<b>${t(s.setFoods.reduce(((t,e)=>t+i.foods[e.name]*e.count),0)-s.discount)}₼</b>
					<br>
					endirim: ₼<input type="number" .value=${s.discount} @change=${t=>{s.discount=t.target.value,this.requestUpdate()}}>

					${s.setFoods.map(((t,o)=>B`
						<div>
							<input type="text" disabled .value=${t.name}>
							<input type="number" class="s"
								.value = ${t.count} 
								@change = ${s=>{t.count=+s.target.value,this.requestUpdate(),e()}}
								>
						<button class="delete" @click=${t=>{s.setFoods.splice(o,1),e(),this.requestUpdate()}}>sil</button>
							<select @change=${e=>{t.name=e.target.value,this.requestUpdate()}}>
								${Object.keys(i.foods).map((e=>B`
									<option value="${e}" ?selected=${e==t.name}>${e}</option>
									`))}
							</select>
						</div>
						`))}
					<div>
					Setə yemək əlavə et
						<select @change=${t=>{console.log(t.target.value),s.setFoods.push({name:t.target.value,count:1}),this.requestUpdate()}}>
							${Object.keys(i.foods).map((t=>B`
								<option value=${t}>${t}</option>
								`))}
						</select>
					</div>
				</div>
				`))}		
			<br>
			<input type="text" .value=${this.newSetName} placeholder="set adı" @change=${t=>this.newSetName=t.target.value}>
			<button @click=${this.newSet}>yeni set</button>
		</div>
		<h1>Yeni yemək</h1>
		<input type="text" placeholder="yeməyin adı" @change=${t=>this.newFoodName=t.target.value} .value=${this.newFoodName}>
		<input type="number" placeholder="yeməyin qiyməti" @change=${t=>this.newFoodPrice=+t.target.value}>
		<select @change=${t=>this.newFoodCat=t.target.value}>
			<option value="">Kateqoriya</option>
			${Object.keys(i.categories).map(((t,e)=>B`
				<option value=${t}>${t}</option>
				`))}
		</select>

		<button @click=${this.addFood}>əlavə et</button>

		<hr>
		<h1>Yeni kateqoriya</h1>
		<input type="text" placeholder="kateqoriyanın adı" @change=${t=>this.newCatName=t.target.value} .value=${this.newCatName}>
		<button @click=${this.addCat}>əlavə et</button> <br><br>
		Kateqoriyalar <br>
		${Object.keys(i.categories).map((t=>B`
			<button class="delete" @click=${e=>{if(!confirm(`${t} adlı kateqoriya silinsin mi?`))return null;delete i.categories[t],this.requestUpdate()}}>${t}</button>
			`))}

		<hr>
			<h1>Masaların sayı: ${i.orders.length}</h1>
			<button class="rmvTableBtn" @click= ${this.removeMasa}>Masanın sayını azalt</button>
			<button class="addTableBtn" @click= ${this.addMasa}>Masa əlavə et</button>
		</div>
			<hr>
		<details>
			<summary>
				Bütün verilənləri sil
			</summary>
			<details style="padding: 20px">
				<summary>
					Bu sifarişlər, masa sayları, menyudakı yeməklər, setlər və bütün qeydlərin silinməsi ilə nəticələnəcək
				</summary>
				<details style="padding: 20px">
					<summary>
						Dəvam edilsin?
					</summary>
					<button @click=${this.wipe} style="padding: 20px" class="delete">Bütün məlumatlar silinsin</button>
				</details>

			</details>

		</details>

		`:B`
			<div class="adminAuth">
			<h1>Xüsusi səhifə</h1>
			<p class="f2">Bura yalnız adminlər daxil ola bilər.<br>
				Xaiş olunur parolu daxil edin. <br><br>
			<span class="f1">Parol: <br></span>
			<input type="password" @change=${this.checkAuth}>
			</p>
			</div>
		`}}.tag="v-admin";const dt={Menyu:()=>B`<v-menu></v-menu>`,Qeydiyyat:()=>B`<v-qeydiyyat></v-qeydiyyat>`,Gündəlik:()=>B`<v-overview></v-overview>`,Admin:()=>B`<v-admin></v-admin>`};(class extends lt{static properties={page:{}};static props={page:"Gündəlik"};constructor(){super(),window.vmain=this}render(){return console.log(this.page),B`
			<div class="main">
				<div class="container">
					<div class="sidebar">
					<img src="./logo.png" alt="fodir">
						${Object.keys(dt).map((t=>B`
								<button @click=${e=>this.page=t} ?active=${this.page==t}>
									${t}
								</button>
							`))}
					</div>
					<div class="content">
						${dt[this.page]()}
					</div>
				</div>
			</div>
		`}}).tag="v-main",console.log(window.data)})();