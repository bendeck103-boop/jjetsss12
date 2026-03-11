(()=>{var an={178:()=>{"use strict"},3966:()=>{},6305:()=>{},7774:V=>{"use strict";V.exports=JSON.parse('{"A":{"t":[{"key":"enus","locale":"en-US","country":"us","lang":"en","name":"English - USA"},{"key":"escl","locale":"es-CL","country":"cl","lang":"es","name":"Spanish - Chile"},{"key":"espe","locale":"es-PE","country":"pe","lang":"es","name":"Spanish - Per\xFA"},{"key":"esco","locale":"es-CO","country":"co","lang":"es","name":"Spanish - Colombia"},{"key":"espy","locale":"es-PY","country":"py","lang":"es","name":"Spanish - Paraguay"},{"key":"esuy","locale":"es-UY","country":"uy","lang":"es","name":"Spanish - Uruguay"},{"key":"ptbr","locale":"pt-BR","country":"br","lang":"pt","name":"Portuguese - Brasil"},{"key":"esar","locale":"es-AR","country":"ar","lang":"es","name":"Spanish - Argentina"},{"key":"esec","locale":"es-EC","country":"ec","lang":"es","name":"Spanish - Ecuador"},{"key":"esdo","locale":"es-DO","country":"do","lang":"es","name":"Spanish - Dominican Republic"},{"key":"engb","locale":"en-GB","country":"gb","lang":"en","name":"English - Great Britain"}]}}')},7794:(V,ie,E)=>{"use strict";E.d(ie,{J0:()=>re,Kr:()=>fe,fO:()=>pe,xG:()=>ge});var ve=E(2597),me=(g,Ae,Se)=>new Promise((ke,dt)=>{var h=I=>{try{T(Se.next(I))}catch(Ee){dt(Ee)}},sn=I=>{try{T(Se.throw(I))}catch(Ee){dt(Ee)}},T=I=>I.done?ke(I.value):Promise.resolve(I.value).then(h,sn);T((Se=Se.apply(g,Ae)).next())});const re=ve.J0,fe=ve.Kr,ge=(g,Ae)=>(0,ve.vJ)(()=>{window.setTimeout(()=>{const Se=g();Se instanceof Promise&&Se.catch(ke=>me(void 0,null,function*(){console.log(ke)}))},0)},Ae),pe=ve.vJ},9541:(V,ie,E)=>{"use strict";E.d(ie,{J:()=>ct});var ve=E(5860),me=E(1200),re=E.n(me),fe=E(7759),ge=E(4556),pe=E(3817),g=E(5854),Ae=E(1521),Se=E(5795),ke=E(2464),dt=E(807),h=E(2597),sn=E(8086),T=E(7794),I=E(2617),Ee=E(6260),Ua=E(1821),Le=E(6866),Ja=E(8941);const Dt={date:void 0,destinationCity:void 0,originCity:void 0};var Va=Object.defineProperty,Wa=Object.defineProperties,Ha=Object.getOwnPropertyDescriptors,ln=Object.getOwnPropertySymbols,Ga=Object.prototype.hasOwnProperty,za=Object.prototype.propertyIsEnumerable,cn=(e,t,n)=>t in e?Va(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ya=(e,t)=>{for(var n in t||(t={}))Ga.call(t,n)&&cn(e,n,t[n]);if(ln)for(var n of ln(t))za.call(t,n)&&cn(e,n,t[n]);return e},Ka=(e,t)=>Wa(e,Ha(t));const ze=class{static dispatch(e){ze.store.dispatch(e)}static registerReducer(e,t){ze.reducerRegistry[e]=t}static createStore(){const e=window,t=(0,Ja.H)(ze.reducerRegistry);ze.store=Ua.y$(t,e.__REDUX_DEVTOOLS_EXTENSION__&&e.__REDUX_DEVTOOLS_EXTENSION__())}};let Be=ze;Be.reducerRegistry={};const dn="js-reducer",Xa=(e,t,n)=>{const s=t.split("."),r=s.pop(),l=s.reduce((d,o)=>d[o]=d[o]||{},e);return l[r]=n,e},Mt=[{action:(0,Le.VP)("countries"),initialValue:[],propertyName:"countries"},{action:(0,Le.VP)("currentStatusSearch"),initialValue:Dt,propertyName:"currentStatusSearch"},{action:(0,Le.VP)("captchaStatus"),initialValue:"loading",propertyName:"captchaStatus"},{action:(0,Le.VP)("kontent"),initialValue:void 0,propertyName:"kontent"},{action:(0,Le.VP)("navitaireSettings"),initialValue:void 0,propertyName:"navitaireSettings"},{action:(0,Le.VP)("userInfo"),initialValue:void 0,propertyName:"userInfo"}],Qa=Mt.reduce((e,{propertyName:t,action:n})=>Ka(Ya({},e),{[n.toString()]:(s,r)=>s.updateIn([...t.split(".")],l=>Ee.fromJS(r))}),{}),Za=Mt.reduce((e,{propertyName:t,initialValue:n})=>Xa(e,t,n),{});Be.registerReducer(dn,(0,Le.vy)(Qa,Ee.fromJS(Za))),Be.createStore();function Y(e){const t=()=>Be.store.getState().getIn([dn,...e.split(".")]),n=(0,h.li)(t()),[,s]=(0,h.J0)(0),r=o=>(0,Ee.isCollection)(o)?o.toJS():o,l=(0,h.Kr)(()=>r(n.current),[n.current]),d=o=>{const a=Mt.find(v=>v.propertyName===e);if(!a||!a.action)throw new Error(`No action mapped for property "${String(e)}"`);const i=a.action;Be.dispatch(i(o))};return(0,h.vJ)(()=>{let o=!1;const a=()=>{const i=t();i!==n.current&&(n.current=i,o||(o=!0,queueMicrotask(()=>{o=!1,s(v=>v+1)})))};return a(),Be.store.subscribe(a)},[e]),[l,d]}const er=!1,tr="ac-bancoe-bar",nr=e=>{var t,n,s,r,l,d,o,a,i,v;const x={isBarOpen:e.isBarOpen},[y]=Y("userInfo"),[w,O]=(0,T.J0)(!1),[S,p]=(0,T.J0)(!1),[u,b]=(0,T.J0)(!1),f=(0,h.qy)`
		<div class="beb-tooltip bg-be-cyan">
			<div class="beb-tooltip-close-btn" @click=${()=>O(!1)}>&times;</div>
			<div class="bebtt-membership-info">
				<div class="text-center">
					${g.A.t("\xBFA\xFAn no eres parte del")}
					<br />
					<span>${g.A.t("Club de Descuentos")}</span> ${g.A.t("de")}
					<span>${g.A.t("JetSMART")}</span>?
				</div>
				<div class="mt-4 text-left">
					${g.A.t("Aprovecha tu precio preferente con tu")}
					<br />
					<span>${g.A.t("Tarjeta SMART")}</span> ${g.A.t("y obt\xE9n \xE9stos beneficios")}:
				</div>
				<div class="bebtt-list-plus mt-4 text-left">
					<i class="js-icon-be2 js-be2-circle-plus"></i>
					${g.A.t("Ahorra hasta")}
					<span class="emphasis">${g.A.t("$5.000")}</span>
					${g.A.t("por tramo para tarifas sobre $15.000.")}
				</div>
				<div class="bebtt-list-plus mt-2 text-left">
					<i class="js-icon-be2 js-be2-circle-plus"></i>
					${g.A.t("Ahorra")}
					<span class="emphasis">${g.A.t("$1.000")}</span>
					${g.A.t("por maleta por cada tramo de tu viaje.")}
				</div>
				<div class="bebtt-list-plus mt-2 text-left">
					<i class="js-icon-be2 js-be2-circle-plus"></i>
					${g.A.t("Descuentos aplican para ti, y uno o 5 acompa\xF1antes, seg\xFAn membres\xEDa.")}
				</div>
				<div class="bebtt-list-plus mt-2 text-left">
					<i class="js-icon-be2 js-be2-circle-plus"></i>
					${g.A.t("Acceso a ofertas exclusivas del")}
					<span class="emphasis">${g.A.t("Club de Descuentos.")}</span>
				</div>
			</div>
			<div class="mt-4">
				<a class="be-tooltip-btn" href=${I.A.DC} target="_blank">
					${g.A.t("\xA1Lo quiero!")}
					<i class="jsh-icon jsh-circle-chevron-right"></i>
				</a>
			</div>
		</div>
	`,m=(0,h.qy)`
		<div class="beb-tooltip bg-be-cyan">
			<div class="beb-tooltip-close-btn" @click=${()=>p(!1)}>
				&times;
			</div>
			<div class="bebtt-membership-info">
				<div class="bebtt-list-plus mt-2 text-left">
					<i class="js-icon-be2 js-be2-circle-tick"></i>
					${g.A.t("Ahorra hasta")}
					<span class="emphasis">${g.A.t("$5.000")}</span>
					${g.A.t("por tramo para tarifas sobre $15.000.")}
				</div>
				<div class="bebtt-list-plus mt-2 text-left">
					<i class="js-icon-be2 js-be2-circle-tick"></i>
					${g.A.t("Ahorra")}
					<span class="emphasis">${g.A.t("$1.000")}</span>
					${g.A.t("por maleta por cada tramo de tu viaje.")}
				</div>
				<div class="bebtt-list-plus mt-2 text-left">
					<i class="js-icon-be2 js-be2-circle-tick"></i>
					${g.A.t("Descuentos aplican para ti, y un acompa\xF1ante.")}
				</div>
				<div class="bebtt-list-plus mt-2 text-left">
					<i class="js-icon-be2 js-be2-circle-tick"></i>
					${g.A.t("Acceso a ofertas exclusivas del")}
					<span class="emphasis">${g.A.t("Club de Descuentos.")}</span>
				</div>
			</div>
		</div>
	`,$=(0,h.qy)`
		<div class="beb-tooltip bg-be-cyan">
			<div class="beb-tooltip-close-btn" @click=${()=>b(!1)}>
				&times;
			</div>
			<div class="bebtt-membership-info">
				<div class="bebtt-list-plus mt-2 text-left">
					<i class="js-icon-be2 js-be2-circle-tick"></i>
					${g.A.t("Ahorra hasta")}
					<span class="emphasis">${g.A.t("$5.000")}</span>
					${g.A.t("por tramo para tarifas sobre $15.000.")}
				</div>
				<div class="bebtt-list-plus mt-2 text-left">
					<i class="js-icon-be2 js-be2-circle-tick"></i>
					${g.A.t("Ahorra")}
					<span class="emphasis">${g.A.t("$1.000")}</span>
					${g.A.t("por maleta por cada tramo de tu viaje.")}
				</div>
				<div class="bebtt-list-plus mt-2 text-left">
					<i class="js-icon-be2 js-be2-circle-tick"></i>
					${g.A.t("Descuentos aplican para ti, y hasta 5 acompa\xF1antes.")}
				</div>
				<div class="bebtt-list-plus mt-2 text-left">
					<i class="js-icon-be2 js-be2-circle-tick"></i>
					${g.A.t("Acceso a ofertas exclusivas del")}
					<span class="emphasis">${g.A.t("Club de Descuentos.")}</span>
				</div>
			</div>
		</div>
	`,C=(0,h.qy)`
		<div class="beb-section beb-section-3">
			<i class="beb-section-icon js-icon-be2 js-be2-money"></i>
			${g.A.t("Precio Preferente")}
			<span>${g.A.t("Club de Descuentos")}</span>
			<i
				class="js-icon js-flight-help beb-tooltip-opener"
				@click=${()=>O(!0)}
				>${f}</i
			>
		</div>
	`,M=(0,h.qy)`
		<div class="beb-section beb-section-3">
			<i class="beb-section-icon js-icon-be2 js-be2-money"></i>
			${g.A.t("Membres\xEDa Est\xE1ndar")}
			<span>${g.A.t("Club de Descuentos")}</span>
			<img class="beb-section-tick" src="/images/banco-estado/bar-tick-color.png" />
			<i
				class="js-icon js-flight-help beb-tooltip-opener"
				@click=${()=>p(!0)}
			>
				${m}
			</i>
		</div>
	`,R=(0,h.qy)`
		<div class="beb-section beb-section-3">
			<i class="beb-section-icon js-icon-be2 js-be2-money"></i>
			${g.A.t("Membres\xEDa Grupal")}
			<span>${g.A.t("Club de Descuentos")}</span>
			<img class="beb-section-tick" src="/images/banco-estado/bar-tick-color.png" />
			<i
				class="js-icon js-flight-help beb-tooltip-opener"
				@click=${()=>b(!0)}
			>
				${$}
			</i>
		</div>
	`,z=(0,h.qy)`
		<div class="beb-section beb-section-4">
			<i class="beb-section-icon js-icon-be2 js-be2-seat"></i>
			<div class="hidden-sm">${g.A.t("Desde")} <span>${g.A.t("40% descuento")}</span></div>
			<div class="hidden-sm"><span>${g.A.t("asientos")}</span> ${g.A.t("Zona BancoEstado")}</div>
		</div>
	`,J=()=>{var A,j,U,te;const Q=Number((A=y?.BancoEstado)==null?void 0:A.FreeSeats)>1?"s":"";return(0,h.qy)`
			<div class="beb-section beb-section-4">
				<i
					class="beb-section-icon js-icon-be2 js-be2-star${((j=y?.BancoEstado)==null?void 0:j.FreeSeats)<=4?`-${(U=y?.BancoEstado)==null?void 0:U.FreeSeats}`:"s-plus"}"
				></i>
				<div class="hidden-sm">
					<span>${g.A.t("Tienes")} ${(te=y?.BancoEstado)==null?void 0:te.FreeSeats}</span>
				</div>
				<div class="hidden-sm">
					${g.A.t("asiento{{plural}} gratis",{plural:Q})}
				</div>
			</div>
		`};return((t=y?.BancoEstado)==null?void 0:t.Category)===5||((n=y?.BancoEstado)==null?void 0:n.Category)===6?(0,h.qy)`
				<div
					class="be-bar ${((s=y?.BancoEstado)==null?void 0:s.Category)===6?"bg-be-gray":"bg-be-orange"} ${x.isBarOpen?"":"closed"}"
				>
					<div class="be-bar-container">
						<img src="/images/banco-estado/topbar-logo-2.svg" />
						<div class="beb-section beb-section-1">
							${g.A.t("Tus beneficios")}
							<span>${g.A.t("Tarjeta")}</span>
							<img
								src="/images/banco-estado/logo-smart-${((r=y?.BancoEstado)==null?void 0:r.Category)===6?"plus-bg-gray":"bg-orange"}.png"
							/>
						</div>
						<div class="beb-divider"></div>
						${!((l=y?.Dc)!=null&&l.IsGroupMember)&&!((d=y?.Dc)!=null&&d.IsStandardMember)?C:""}
						${(o=y?.Dc)!=null&&o.IsStandardMember?M:""}
						${(a=y?.Dc)!=null&&a.IsGroupMember?R:""}
						<div class="beb-divider"></div>
						${((i=y?.BancoEstado)==null?void 0:i.FreeSeats)===0||((v=y?.BancoEstado)==null?void 0:v.Category)===5?z:J}
						<div class="beb-divider"></div>
						<div class="beb-section beb-section-6">
							<i class="beb-section-icon js-icon-be2 js-be2-priority"></i>
							<div class="hidden-sm">${g.A.t("Embarque")}</div>
							<div class="hidden-sm"><span>${g.A.t("Prioritario")}</span></div>
						</div>
						<div class="beb-divider"></div>
						<div class="beb-section beb-section-5">
							<i class="beb-section-icon js-icon-be2 js-be2-percent"></i>
							<div class="hidden-sm"><span>${g.A.t("6 o 12 cuotas")}</span></div>
							<div class="hidden-sm">${g.A.t("sin inter\xE9s")}</div>
						</div>
					</div>
				</div>
				<div class="be-bar-mobile-tooltip ${w?"open":""}">
					<div class="dg-be-modal"></div>
					${f}
				</div>
				<div class="be-bar-mobile-tooltip ${S?"open":""}">
					<div class="dg-be-modal"></div>
					${m}
				</div>
				<div class="be-bar-mobile-tooltip ${u?"open":""}">
					<div class="dg-be-modal"></div>
					${$}
				</div>
		  `:(0,h.qy)``};var K=E(8848);const ut=()=>{const e=new Headers({Accept:"application/json"});return window.JetSmart.NavitaireSettingsOptions.Mode==="DirectFareCache"&&e.append("x-api-key",window.JetSmart.NavitaireSettingsOptions.ApiKey),e};var Ot=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const ar=()=>{const[e,t]=Y("navitaireSettings"),n=()=>Ot(void 0,null,function*(){const l=ut(),o=`${(0,K.UC)(window.JetSmart.NavitaireSettingsOptions.BaseAddress)}${I.hJ}`,a=yield fetch(o,{headers:l});if(a.ok)return yield a.json();throw new Error("Network response was not ok.")}),s=l=>Ot(void 0,null,function*(){var d;const o=yield n();return{abTestSettings:o.AbTestSettings,cultureSettings:o.CultureSettings,currency:(d=o.DefaultCurrencies.find(a=>a.Culture===l))==null?void 0:d.Currency,stationSettings:o.StationSettings}});return{init:l=>Ot(void 0,null,function*(){const d=yield window.JetSmart.NavitaireSettingsOptions.Mode==="DirectFareCache"?s(l.culture):Promise.resolve(l.loadedValues);t(d)})}};var rr=E(4452),P=E.n(rr),un=E(7417),oe=E(5285),se=E.n(oe),mn=E(4486),Re=E(8809),or=Object.defineProperty,sr=Object.defineProperties,ir=Object.getOwnPropertyDescriptors,vn=Object.getOwnPropertySymbols,lr=Object.prototype.hasOwnProperty,cr=Object.prototype.propertyIsEnumerable,gn=(e,t,n)=>t in e?or(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dr=(e,t)=>{for(var n in t||(t={}))lr.call(t,n)&&gn(e,n,t[n]);if(vn)for(var n of vn(t))cr.call(t,n)&&gn(e,n,t[n]);return e},ur=(e,t)=>sr(e,ir(t));oe.extend(Re),oe.extend(mn);const hn=()=>{const e=s=>{try{(0,un.k)(I.AZ.PREVIOUS_SEARCH,btoa(JSON.stringify(ur(dr({},s),{lastVisit:oe().utc().format(I.or)}))),14)}catch{}},t=()=>{const s=(0,un.R)(I.AZ.PREVIOUS_SEARCH);if(s)try{return JSON.parse(atob(s))}catch{return}};return{load:t,save:e,refresh:()=>{const s=t();s&&e(s)}}};var c=E(7485),mr=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const Te=e=>{const t=s=>mr(void 0,null,function*(){s.preventDefault(),s.stopPropagation(),!e.isDisabled&&(yield e.onClick())});return{htmlTemplate:()=>(0,c.qy)`
		<div
			class=${P()("flex h-[42px] w-full cursor-pointer select-none whitespace-nowrap items-center justify-center rounded-full px-5 text-white common-transition","sm:w-auto",{"bg-n-blue text-sm/none font-semibold":!e.isAction,"hover:bg-n-cyan":!e.isAction,"bg-[#af272f] text-lg/none":e.isAction,"hover:bg-n-blue":e.isAction,"opacity-50 cursor-not-allowed pointer-events-none":e.isDisabled})}
			data-test-id=${e.dataTestId||""}
			@click=${t}
		>
			<div class="mr-2 font-body">${e.label}</div>
			${e.icon}
		</div>
	`}};var vr=E(1888),De=E.n(vr),N=E(8894),gr=E(5044),bn=E(4212),fn=E(1101),hr=Object.defineProperty,br=Object.defineProperties,fr=Object.getOwnPropertyDescriptors,pn=Object.getOwnPropertySymbols,pr=Object.prototype.hasOwnProperty,yr=Object.prototype.propertyIsEnumerable,yn=(e,t,n)=>t in e?hr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xr=(e,t)=>{for(var n in t||(t={}))pr.call(t,n)&&yn(e,n,t[n]);if(pn)for(var n of pn(t))yr.call(t,n)&&yn(e,n,t[n]);return e},Sr=(e,t)=>br(e,fr(t)),Pt=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const mt=e=>{const[t]=Y("kontent"),[n]=Y("captchaStatus"),s=(0,h.li)(void 0),[r]=(0,T.J0)(`admin-tab-${e.type}-${Date.now().toString()}`),[l]=(0,T.J0)(`captcha-container-${e.type}-${Date.now().toString()}`),[d,o]=(0,T.J0)(!1),[a,i]=(0,T.J0)(!1),[v,x]=(0,T.J0)(!1),[y,w]=(0,T.J0)(!1),[O,S]=(0,T.J0)(!1),[p,u]=(0,T.J0)(!1),[b,f]=(0,T.J0)({nameOrEmail:"",pnr:""}),m=(0,h.li)(b),$=()=>{const X=document.createElement("div");X.id=l,document.body.appendChild(X),s.current=grecaptcha.render(X,{sitekey:window.JetSmart.Settings.GoogleReCaptchaSiteKey,size:"invisible",callback:ne=>j(ne)})},C=(0,gr._)({vm:b,validated:p,validations:[fn.O.ruleFor("nameOrEmail",X=>X.nameOrEmail).isRequired(),fn.O.ruleFor("pnr",X=>X.pnr).isRequired()]}),M=(0,bn.b)({errorMessage:C.getFormMessages(),verticalGap:!0}),R=()=>{const X=window.newRtLoader(`#${r}`);return X.startLoader(),X},z=X=>{X&&(X.stopLoader(),X.destroy())},J=X=>{const ne=new FormData,$e=De().enc.Utf8.parse(I.Qf),Oe=De().enc.Utf8.parse(I.yz),Pe=m.current.pnr.trim(),xe=m.current.nameOrEmail.trim(),$t=De().AES.encrypt(De().enc.Utf8.parse(Pe),$e,{keySize:128/8,iv:Oe,mode:De().mode.CBC,padding:De().pad.Pkcs7});ne.append("booking",btoa($t.toString()));const F=De().AES.encrypt(De().enc.Utf8.parse(xe),$e,{keySize:128/8,iv:Oe,mode:De().mode.CBC,padding:De().pad.Pkcs7});return ne.append(I.Xw.test(xe)?"email":"lastName",btoa(F.toString())),ne.append("culture",e.culture),ne.append("gRecaptchaResponse",X),ne},A=(X,ne)=>Pt(void 0,null,function*(){const $e=yield X.text(),Oe=JSON.parse(atob($e)),Pe=m.current.pnr.trim(),xe=m.current.nameOrEmail.trim();switch(Oe.code){case 0:const $t=`culture=${e.culture}`,F=`rl=${Pe}`,ce=I.Xw.test(xe)?`em=${xe}`:`ln=${xe}`,Fe=`?${F}&${ce}&${$t}`;location.href=`${window.JetSmart.Settings.BookingUrl}/Booking/Retrieve${Fe}`;break;case 2:i(!0),ne.stopLoader(),grecaptcha.reset(s.current);break;case 3:i(!0),ne.stopLoader(),grecaptcha.reset(s.current);break;case 4:break;case 5:x(!0),ne.stopLoader(),grecaptcha.reset(s.current);break;case 6:w(!0),ne.stopLoader(),grecaptcha.reset(s.current);break;case 7:S(!0),ne.stopLoader(),grecaptcha.reset(s.current);break;case 8:i(!0),ne.stopLoader(),grecaptcha.reset(s.current);break;default:o(!0),ne.stopLoader(),grecaptcha.reset(s.current);break}}),j=X=>Pt(void 0,null,function*(){const ne=R(),$e=window.JetSmart.Settings.BookingUrl+"/api/Booking/RetrieveBookingFromCorp",Pe={options:{body:J(X),credentials:"omit",method:"POST",mode:"cors"},url:$e};try{const xe=yield fetch(Pe.url,Pe.options);xe.ok&&(yield A(xe,ne))}catch{z(ne)}}),U=(X,ne)=>{f($e=>Sr(xr({},$e),{[ne]:X}))},te=()=>Pt(void 0,null,function*(){o(!1),i(!1),x(!1),w(!1),u(!0),(yield C.validate())&&grecaptcha.execute(s.current)}),Q=Te({isAction:!0,icon:(0,c.qy)`<i class="jsh-circle-chevron-right1 text-base"></i>`,label:g.A.t("Continuar"),onClick:te}),G=X=>{const ne=X.target,Oe=ne.value.split("").filter(Pe=>/[a-zA-Z0-9]/.test(Pe)).join("").substring(0,6).toUpperCase();return ne.value=Oe,Oe};(0,T.xG)(()=>{m.current=b},[b]),(0,T.xG)(()=>{o(!1),i(!1),x(!1),w(!1),u(!1),f({nameOrEmail:"",pnr:""})},[e.isActive]),(0,T.xG)(()=>{n==="loaded"&&e.isActive&&s.current===void 0&&$()},[n,e.isActive]);const k=X=>(0,c.qy)`
		<div class="w-full text-center">
			<span
				class="mx-auto mb-5 mt-2 inline-block rounded-md bg-[#e299a1] px-6 py-3 text-left text-sm/4 text-[#163a6f]"
			>
				${(0,N._)(X)}
			</span>
		</div>
	`,W=()=>(0,c.qy)`
			<div class="w-full text-center">
				<div id=${l}>
					<div></div>
				</div>
			</div>
		`,Z=()=>n==="error"?k(g.A.t("CaptchaLoadError")):"",D=()=>d?k(g.A.t("BookingExistenceError")):"",L=()=>a?k(g.A.t("FareLockError")):"",_=()=>v?k(g.A.t("UnauthorizedError")):"",q=()=>y?k(g.A.t("TooManyJourneysError")):"",B=()=>O?k(g.A.t("Tu reserva fue comprada en American Airlines, por favor visita {{-linkStart}}www.aa.com{{-linkEnd}}.",{linkStart:"<a href='http://www.aa.com'>",linkEnd:"</a>"})):"",ee=()=>(0,c.qy)`
		<img
			class="h-auto w-full rounded-lg"
			src=${e.type==="manage"?t.manageYourFlight.manageYourFlightTest.contents.widget.urls[0]:t.checkIn.checkInTest.contents.widget.urls[0]}
		/>
	`,H=()=>(0,c.qy)`
		<div>
			${M.htmlTemplate()} ${Z()} ${D()}
			${L()} ${_()} ${q()}
			${B()}
		</div>
	`,le=()=>(0,c.qy)`
		<div
			class="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-solid border-brand-secondary text-xl text-brand-secondary"
		>
			!
		</div>
	`,ye=X=>(0,c.qy)`
		<div
			class=${P()("absolute -top-2 -translate-y-full left-1/2 transform -translate-x-1/2 opacity-0 group-focus-within:opacity-100","w-full max-w-[340px] h-auto p-4","bg-white shadow-md border border-solid border-n-dark-gray rounded-md","pointer-events-none")}
		>
			<div class="flex w-full items-center justify-between gap-2">
				${le()}
				<div class="text-sm text-brand-secondary">${X}</div>
			</div>
			<div
				class="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-[21px] border-r-[21px] border-t-[21px] border-solid border-l-transparent border-r-transparent border-t-black"
			></div>
			<div
				class="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-[20px] border-r-[20px] border-t-[20px] border-solid border-l-transparent border-r-transparent border-t-white"
			></div>
		</div>
	`,Ct=()=>(0,c.qy)`
		<div class="group relative">
			<ac-input
				.autoComplete=${"off"}
				.errorMessage=${C.getMessage("nameOrEmail")}
				.isInvalid=${!C.isValid("nameOrEmail")}
				.isSmall=${!0}
				.placeholder=${g.A.t("Apellido(s) pasajeros o email comprador")}
				.sanitizer=${X=>(0,K.Jv)(X,"accepted-chars-for-username-or-email")}
				.value=${b.nameOrEmail}
				.onInput=${X=>U(X,"nameOrEmail")}
			></ac-input>
			${ye(g.A.t("admin-modal-name-or-email-tooltip"))}
		</div>
	`,tn=()=>(0,c.qy)`
		<div class="group relative">
			<ac-input
				.autoComplete=${"off"}
				.errorMessage=${C.getMessage("pnr")}
				.isInvalid=${!C.isValid("pnr")}
				.isSmall=${!0}
				.placeholder=${g.A.t("C\xF3digo de Reserva")}
				.sanitizer=${G}
				.value=${b.pnr}
				.onInput=${X=>U(X,"pnr")}
			></ac-input>
			${ye(g.A.t("admin-modal-pnr-tooltip"))}
		</div>
	`,nn=()=>(0,c.qy)`
		<div class="my-4 flex flex-col gap-4 md:w-full md:flex-row">
			<div class="md:basis-1/2">${Ct()}</div>
			<div class="md:basis-1/2">${tn()}</div>
		</div>
		<div>${H()}</div>
		<div class="flex justify-end">${Q.htmlTemplate()}</div>
	`;return{htmlTemplate:()=>{const X=e.type==="manage"?t.manageYourFlight.manageYourFlightTest.contents.title.value:t.checkIn.checkInTest.contents.title.value,ne=e.type==="manage"?t.manageYourFlight.manageYourFlightTest.contents.text.value:t.checkIn.checkInTest.contents.text.value;return(0,c.qy)`
			<div id=${r} class="flex flex-col gap-4 sm:grid sm:grid-cols-[1fr_2fr] sm:p-4">
				${ee()}
				<div class="sm:flex sm:flex-col sm:gap-4">
					<h1 class="font-emphasis text-[28px]/none text-n-blue sm:mt-6">${(0,N._)(X)}</h1>
					<div class="text-sm/5 text-n-blue">${(0,N._)(ne)}</div>
					${nn()}
				</div>
				${W()}
			</div>
		`}}};var Ue=E(2770);const de=(0,c.u$)(e=>t=>{if(!(t instanceof c.ab))throw new Error("ref directive can only be used as an attribute");e.current=t.committer.element}),Ye=()=>{const[e,t]=(0,T.J0)(0),[n,s]=(0,T.J0)(0),r=(0,T.Kr)(()=>e>=1400?"XL":e>=1200?"LG":e>=1024?"MD":e>=768?"SM":"XS",[e,n]);return(0,h.Nf)(()=>{const l=()=>{t(window.innerWidth),s(window.innerHeight)};return window.addEventListener("resize",l),l(),()=>window.removeEventListener("resize",l)},[]),{width:e,height:n,size:r}};function xn(e,t){if(!e)return!1;switch(t){case"es-CL":return e.Cl;case"es-PE":return e.Pe;case"es-AR":return e.Ar;case"es-CO":return e.Co;case"en-US":return e.Us;case"pt-BR":return e.Br;case"es-PY":return e.Py;case"es-UY":return e.Uy;case"es-EC":return e.Ec;case"es-DO":return e.Do;case"en-GB":return e.Gb;default:break}return!1}var Sn=E(9354),wn=E(1742),Cn=E(55),$n=E(2734),he=E(6817);const At=()=>{const e=(r,l)=>Array.from(Array(n(l)?(r+7)%7:r)),t=(r,l)=>Array.from(Array(6-(n(l)?(r+7)%7:r))),n=r=>I.zO.includes(r.toLowerCase());return{doesWeekStartOnSunday:n,getMonthCalendar:(r,l)=>{const d=oe(r).startOf("month").weekday();let o=e(d,l),a=oe(r).startOf("month");const i=oe(r).endOf("month");for(;a.isSameOrBefore(i);)o.push(oe(a)),a=oe(a.add(1,"day"));const v=oe(r).endOf("month").weekday();return o=o.concat(t(v,l)),o.reduce((y,w,O)=>{const S=Math.floor(O/7);return y[S]=[].concat(y[S]||[],w),y},[])}}};var Tn=E(4518);oe.extend(Re),oe.extend(Sn),oe.extend(wn),oe.extend(Cn),oe.extend($n);const Dn=e=>{const{doesWeekStartOnSunday:t}=At(),{formatNumber:n}=(0,Tn.JY)(),[s,r]=(0,h.J0)(void 0),l=m=>{const $=[g.A.t("Lun"),g.A.t("Mar"),g.A.t("Mi\xE9"),g.A.t("Jue"),g.A.t("Vie"),g.A.t("S\xE1b"),g.A.t("Dom")];return t(m)&&$.unshift($.pop()),$},d=m=>e.rangeStart&&m.isAfter(e.rangeStart,"day")&&m.isBefore(s,"day"),o=(m,$,C,M)=>m.isBefore($,"date")||m.isAfter(C,"date")||M.some(R=>R.isSame(m,"date")),a=(m,$,C)=>[$,C].some(M=>M&&M.isSame(m,"day")),i=(m,$,C)=>$&&C&&m.isAfter($,"day")&&m.isBefore(C,"day"),v=(m,$)=>m?$?.find(C=>C.departureDate.isSame(m,"day")):void 0,x=(m,$,C)=>$&&$.price?C({amount:$.price,currency:$.currency,culture:m,leadingSign:!0,forcedToRemoveDecimals:!0}).replace(" ",""):"",y=m=>{s?.isSame(m,"day")||r(m)},w=m=>{s?.isSame(m,"day")&&r(void 0)},O=(m,$)=>{$.preventDefault(),$.stopPropagation(),!o(m,e.min,e.max,e.disabledDates)&&e.onDateClick(m,$)},S=m=>(0,c.qy)`
		<div
			class=${P()("relative inline-flex h-10 w-10 cursor-default flex-col items-center justify-center text-sm font-bold text-n-blue","md:h-14 lg:w-[54px]")}
		>
			${(0,K.NN)(m)}
		</div>
	`,p=(0,h.Kr)(()=>(0,c.qy)`<div class=${P()("grid grid-cols-7 w-full","md:w-[280px] lg:w-[378px]")}>
				${l(e.culture).map(S)}
			</div>`,[e.culture]),u=(m,$)=>(0,c.qy)`
		<div
			class=${P()("grid grid-cols-7",{"w-full":$,"w-[280px] lg:w-[378px]":!$})}
		>
			${m.map(C=>b(C,$))}
		</div>
	`,b=(m,$)=>{const C=v(m,e.availableSchedules),M=x(e.culture,C,n),R=e.usePrices&&e.lowestDisplayedPrice&&C?.price===e.lowestDisplayedPrice;return m?(0,c.qy)`
					<div
						class=${P()("relative inline-flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-solid border-white text-base","lg:h-11 lg:w-[54px]",{"bg-n-cyan text-white":$?a(m,e.selectedDate,e.rangeStart):a(m,e.selectedDate,e.rangeStart)&&!d(m),"bg-[#f2f2f2]":$?i(m,e.rangeStart,e.selectedDate):!s&&i(m,e.rangeStart,e.selectedDate)||d(m),"md:hover:bg-n-cyan md:hover:text-white":!$&&!a(m,e.selectedDate,e.rangeStart)&&!o(m,e.min,e.max,e.disabledDates),"text-n-blue":!a(m,e.selectedDate,e.rangeStart)&&!o(m,e.min,e.max,e.disabledDates)&&($?!0:!R),"cursor-default text-[#c1c1c1]":$?o(m,e.min,e.max,e.disabledDates):o(m,e.min,e.max,e.disabledDates)&&!R,"text-n-cyan":!$&&R&&(!a(m,e.selectedDate,e.rangeStart)||d(m)),"text-white":!$&&a(m,e.selectedDate,e.rangeStart)&&!d(m)})}
						data-test-id=${he.m.DATE.DATE}
						data-test-value=${m.format(I.D2)}
						@mouseenter=${$?void 0:()=>y(m)}
						@mouseleave=${$?void 0:()=>w(m)}
						@click=${z=>O(m,z)}
					>
						${m.format("DD")}
						${e.usePrices?(0,c.qy)`<span class="text-[8px]/none mt-0 md:mt-1 md:text-[10px]/none">${M}</span>`:""}
					</div>
			  `:(0,c.qy)`
					<div class=${P()("relative inline-flex w-10",$?"h-10":"h-[33px]")}>&nbsp;</div>
			  `};return{getCalendarForMonth:(m,$)=>(0,c.qy)`<div class="mb-3 w-full">
			${p} ${m.map(C=>u(C,$))}
		</div>`}};oe.extend(Re),oe.extend(Sn),oe.extend(wn),oe.extend(Cn),oe.extend($n);const wr=e=>{var t,n;const s=Ye(),[r,l]=(0,h.J0)(e.min||oe()),{getMonthCalendar:d}=At(),o=C=>l(r.add(C,"month")),a=()=>{var C;return((C=e.min)==null?void 0:C.year())===r.year()&&e.min.month()>=r.month()},i=()=>{var C;return((C=e.max)==null?void 0:C.year())===r.year()&&e.max.month()<=r.month()},v=(0,T.Kr)(()=>{var C;if(!((C=e.availableSchedules)!=null&&C.length))return 0;const M=d(r,e.culture)[0],R=d(r.add(1,"month"),e.culture)[0],z=M.concat(s.size!=="XS"?R:[])||[],A=e.availableSchedules.filter(j=>z.some(U=>j.departureDate.isSame(U,"date"))).reduce((j,U)=>j&&j.price<U.price?j:U,void 0);return A?.price||0},[e.availableSchedules,r,s.size]),x=C=>{C.stopPropagation(),o(-1)},y=C=>{C.stopPropagation(),o(1)},w=(C,M)=>{M.preventDefault(),M.stopPropagation(),e.onChange(C)};(0,T.xG)(()=>{!e.selectedDate&&!e.rangeStart||l(oe(e.selectedDate||e.rangeStart))},[(t=e.selectedDate)==null?void 0:t.format(I.or),e.rangeStart]),(0,T.xG)(()=>e.min&&l(e.min),[(n=e.min)==null?void 0:n.format(I.or)]);const O=Dn({availableSchedules:e.availableSchedules,culture:e.culture,disabledDates:e.disabledDates,max:e.max,min:e.min,rangeStart:e.rangeStart,usePrices:e.usePrices,selectedDate:e.selectedDate,lowestDisplayedPrice:v,onDateClick:w}),S=(C,M=!1)=>(0,c.qy)`
		<div
			class=${P()("flex h-full w-full cursor-pointer items-center justify-end","md:hover:text-n-cyan",{"pointer-events-none opacity-0":i()||M&&s.size!=="XS"})}
			data-test-id=${C}
			@click=${y}
		>
			<i class="jsh-chevron-right1"></i>
		</div>
	`,p=(C,M=!1)=>(0,c.qy)`
		<div
			class=${P()("flex h-full w-full  cursor-pointer items-center","md:hover:text-n-cyan",{"pointer-events-none opacity-0":a()||M&&s.size!=="XS"})}
			data-test-id=${C}
			@click=${x}
		>
			<i class="jsh-chevron-right1 rotate-180 transform"></i>
		</div>
	`,u=()=>(0,c.qy)`
		<div class=${P()("grid w-[280px] grid-cols-[1fr_3fr_1fr] items-center","lg:w-[378px]")}>
			${p(he.m.DATE.FIRST_MONTH_NAVIGATION_MOVE_BACK)}
			<div
				class="whitespace-nowrap text-center font-emphasis text-xl/none text-n-blue"
				data-test-id=${he.m.DATE.FIRST_MONTH_NAVIGATION_NAME}
				data-test-value=${r.format("YYYY-MM")}
			>
				${(0,K.NN)(oe(r).format("MMMM YYYY"))}
			</div>
			${S(he.m.DATE.FIRST_MONTH_NAVIGATION_MOVE_FORWARD,!0)}
		</div>
	`,b=()=>{const C=oe(r).add(1,"month");return(0,c.qy)`
			<div class=${P()("grid w-[280px] grid-cols-[1fr_3fr_1fr] items-center","lg:w-[378px]")}>
				${p(he.m.DATE.SECOND_MONTH_NAVIGATION_MOVE_BACK,!0)}
				<div
					class="whitespace-nowrap text-center font-emphasis text-xl/none text-n-blue"
					data-test-id=${he.m.DATE.SECOND_MONTH_NAVIGATION_NAME}
					data-test-value=${C.format("YYYY-MM")}
				>
					${(0,K.NN)(C.format("MMMM YYYY"))}
				</div>
				${S(he.m.DATE.SECOND_MONTH_NAVIGATION_MOVE_FORWARD)}
			</div>
		`},f=()=>{const C=d(r,e.culture);return O.getCalendarForMonth(C,!1)},m=()=>{const C=d(r.add(1,"month"),e.culture);return O.getCalendarForMonth(C,!1)};return{htmlTemplate:()=>(0,c.qy)`
		<div class="relative flex h-full w-full bg-white">
			<div
				class=${P()("relative h-full w-full px-5 py-3")}
				data-test-id=${he.m.DATE.FIRST_MONTH_NAVIGATION_CONTAINER}
			>
				${u()} ${f()}
			</div>
			<div
				class=${P()("relative h-full w-1/2 px-5 py-3 tw-hidden","sm:block")}
				data-test-id=${he.m.DATE.SECOND_MONTH_NAVIGATION_CONTAINER}
			>
				${b()} ${m()}
			</div>
		</div>
	`}};oe.extend(Re);function _t(e){const t=(0,h.li)(void 0),n=Ye(),s=(0,h.li)(void 0),r=(0,h.li)(void 0),[l,d]=(0,h.J0)(!1),o=wr({availableSchedules:e.availableSchedules,culture:e.culture,disabledDates:e.disabledDates||[],max:e.max,min:e.min,rangeStart:e.rangeStart,usePrices:xn(e.dynamicSettings.ShowFarePricesCultures,e.culture)&&!e.isUsingAmericanMiles,selectedDate:e.value,onChange:b=>y(b)}),a=()=>{const b=m=>{const $=m.path||m.composedPath&&m.composedPath();$.indexOf(s.current)>-1||$.indexOf(r.current)>-1||d(!1)},f=()=>d(!1);return document.addEventListener("click",b),document.addEventListener("scroll",f),()=>{document.removeEventListener("click",b),document.removeEventListener("scroll",f)}},i=()=>{if((n.size==="XS"||n.size==="SM")&&!e.isReturnDate)return;const b=e.isReturnDate?Ue.m.FLIGHT_CHANGE_SEARCH_RETURN_DATE_CLASS:Ue.m.FLIGHT_CHANGE_SEARCH_OUTBOUND_DATE_CLASS;return document.querySelector(`.${b}`)},v=()=>e.value?(0,K.NN)(e.value.format("ddd DD-MM")):"",x=b=>{b.preventDefault(),!e.isDisabled&&d(!l)},y=b=>{e.onChange(b),d(!1)};(0,T.fO)(a,[]);const w=()=>e.isLoading?(0,c.qy)`
					<div class="loader-container">
						<div class="loader-line">
							<div class="loader-line-wrap"></div>
						</div>
						<div class="loader-line">
							<div class="loader-line-wrap"></div>
						</div>
						<div class="loader-line">
							<div class="loader-line-wrap"></div>
						</div>
					</div>
			  `:"",O=()=>e.isLoading?"":(0,c.qy)` <i class="jsh-calendar absolute right-4 top-1/2 -translate-y-1/2 transform"></i> `,S=()=>(0,c.qy)`
		<ac-dropdown2
			.anchorElement=${i()}
			.content=${o.htmlTemplate()}
			.isOpen=${l&&!e.isLoading}
			.isOutbound=${!e.isReturnDate}
		></ac-dropdown2>
	`,p=()=>(0,c.qy)`
		<input
			ref=${de(s)}
			class=${P()("w-full cursor-pointer appearance-none border-none bg-transparent px-0 pb-0 pt-0.5 text-base outline-none","placeholder:text-base placeholder:text-[#c1c1c1]",e.isReturnDate?Ue.m.FLIGHT_CHANGE_SEARCH_RETURN_DATE_CLASS:Ue.m.FLIGHT_CHANGE_SEARCH_OUTBOUND_DATE_CLASS,{"text-n-blue":v()})}
			data-required
			data-test-id=${e.inputTestId||""}
			placeholder=${e.placeHolder}
			readonly
			value=${v()}
			.value=${v()}
			@click=${x}
		/>
	`;return{htmlTemplate:()=>(0,c.qy)`
		<div
			ref=${de(t)}
			class=${P()("relative flex h-[34px] w-full cursor-pointer items-center rounded-lg border border-solid bg-white px-4","md:h-full",{"border-[#c1c1c1] text-[#c1c1c1]":!l&&!v(),"border-n-cyan text-n-cyan":l&&!v(),"border-n-blue text-n-blue":v(),"pointer-events-none opacity-75":e.isDisabled,[Ue.m.FLIGHT_CHANGE_SEARCH_RETURN_DATE_CLASS]:e.isReturnDate})}
		>
			${p()} ${O()} ${S()} ${w()}
		</div>
	`,open:()=>d(!0)}}const Mn=e=>{const t=s=>(0,c.qy)`
		<div
			class=${P()("relative mr-2 h-6 w-6 rounded-full border-2 border-solid border-n-blue",{"after:absolute after:inset-0 after:scale-[0.66] after:transform after:rounded-full after:bg-n-blue after:content-['']":s})}
		></div>
	`;return{htmlTemplate:()=>(0,c.qy)`
		<div class="flex select-none items-center font-body text-sm">
			<div class="mr-4 flex cursor-pointer items-center" @click=${()=>e.onChange(!0)}>
				${t(!e.isOn)} ${e.firstOptionText}
			</div>
			<div class="flex cursor-pointer items-center" @click=${()=>e.onChange(!1)}>
				${t(e.isOn)} ${e.secondOptionText}
			</div>
		</div>
	`}};var Cr=E(5657);const $r=(0,c.qy)`
	<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="0.727273" y="0.727273" width="30.5455" height="30.5455" rx="15.2727" fill="white" />
		<rect
			x="0.727273"
			y="0.727273"
			width="30.5455"
			height="30.5455"
			rx="15.2727"
			stroke="#C1C1C1"
			stroke-width="1.45455"
		/>
		<g clip-path="url(#clip0_8554_39571)">
			<path
				d="M11.9737 17.1874L10.7369 16L7.22809 19.3684L10.7369 22.7368L11.9737 21.5495L10.5877 20.2105H23.8948V18.5263H10.5877L11.9737 17.1874Z"
				fill="#C1C1C1"
			/>
			<path
				d="M20.0263 14.8126L21.2632 16L24.772 12.6316L21.2632 9.26315L20.0263 10.4505L21.4123 11.7895H8.10529V13.4737H21.4123L20.0263 14.8126Z"
				fill="#C1C1C1"
			/>
		</g>
		<defs>
			<clipPath id="clip0_8554_39571">
				<rect width="21.0526" height="20.2105" fill="white" transform="translate(5.47369 5.89474)" />
			</clipPath>
		</defs>
	</svg>
`,vt=(0,c.qy)`
	<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M13.5 1.5625L7.53125 7.28125C7.34375 7.4375 7.15625 7.5 7 7.5C6.8125 7.5 6.625 7.4375 6.46875 7.3125L0.46875 1.5625C0.15625 1.28125 0.15625 0.78125 0.4375 0.5C0.71875 0.1875 1.21875 0.1875 1.5 0.46875L7 5.71875L12.4688 0.46875C12.75 0.1875 13.25 0.1875 13.5312 0.5C13.8125 0.78125 13.8125 1.28125 13.5 1.5625Z"
			fill="#C1C1C1"
		/>
	</svg>
`,Tr=(0,c.qy)`
	<svg width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M2.34766 0.9375L8.78125 7.65234C8.92188 7.82812 9.02734 8.03906 9.02734 8.25C9.02734 8.46094 8.92188 8.67188 8.78125 8.8125L2.34766 15.5273C2.03125 15.8789 1.46875 15.8789 1.15234 15.5625C0.800781 15.2461 0.800781 14.7188 1.11719 14.3672L7.02344 8.21484L1.11719 2.09766C0.800781 1.78125 0.800781 1.21875 1.15234 0.902344C1.46875 0.585938 2.03125 0.585938 2.34766 0.9375Z"
			fill="currentColor"
		/>
	</svg>
`,Dr=(0,c.qy)`
	<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.00077 5.5H0L2.49962 3L5.00077 0.5L7.50039 3L10 5.5L5.00077 5.5Z" fill="#1B365D" />
	</svg>
`,Mr=(0,c.qy)` <svg
	class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-n-light-gray"
	fill="none"
	stroke="currentColor"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
	></path>
</svg>`,Or=(0,c.qy)`
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M8 0C12.4062 0 16 3.59375 16 8C16 12.4375 12.4062 16 8 16C3.5625 16 0 12.4375 0 8C0 3.59375 3.5625 0 8 0ZM8 14.5C11.5625 14.5 14.5 11.5938 14.5 8C14.5 4.4375 11.5625 1.5 8 1.5C4.40625 1.5 1.5 4.4375 1.5 8C1.5 11.5938 4.40625 14.5 8 14.5ZM9.25 10.5C9.65625 10.5 10 10.8438 10 11.25C10 11.6875 9.65625 12 9.25 12H6.75C6.3125 12 6 11.6875 6 11.25C6 10.8438 6.3125 10.5 6.75 10.5H7.25V8.5H7C6.5625 8.5 6.25 8.1875 6.25 7.75C6.25 7.34375 6.5625 7 7 7H8C8.40625 7 8.75 7.34375 8.75 7.75V10.5H9.25ZM8 6C7.4375 6 7 5.5625 7 5C7 4.46875 7.4375 4 8 4C8.53125 4 9 4.46875 9 5C9 5.5625 8.53125 6 8 6Z"
			fill="#1B365D"
		/>
	</svg>
`,On=(e,t)=>t.markets.includes(e.code);var Pr=Object.defineProperty,Ar=Object.defineProperties,_r=Object.getOwnPropertyDescriptors,Pn=Object.getOwnPropertySymbols,Ir=Object.prototype.hasOwnProperty,kr=Object.prototype.propertyIsEnumerable,An=(e,t,n)=>t in e?Pr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_n=(e,t)=>{for(var n in t||(t={}))Ir.call(t,n)&&An(e,n,t[n]);if(Pn)for(var n of Pn(t))kr.call(t,n)&&An(e,n,t[n]);return e},In=(e,t)=>Ar(e,_r(t));const Me="all",Ke={cities:[],code:Me,isAvailableForPeruCompras:!1,name:g.A.t("Todos los destinos")},gt=()=>{const e=(o,a)=>a?o.map(i=>t(i,a)).filter(i=>i.cities.length>0):o,t=(o,a)=>In(_n({},o),{cities:o.cities.filter(i=>On(a,i))}),n=(o,a)=>o.code.toLowerCase().indexOf(a.toLowerCase())===0||r(o).toLowerCase().indexOf(a.toLowerCase())===0,s=(o,a,i)=>{var v;const x=(v=i.DefaultRouteCountrySettings)==null?void 0:v.find(y=>y.Culture.toLowerCase()===a.toLowerCase());return(o===I.V0?x?.DefaultOriginCountryCode:x?.DefaultDestinationCountryCode)||a.substring(3,5)},r=o=>`${o.name} (${o.code})`;return{getDefaultCountryCodeFromSettings:s,getFilteredModel:(o,a)=>a?o.map(i=>In(_n({},i),{cities:i.cities.filter(v=>n(v,a))})).filter(i=>i.cities.length):o,getRouteModel:(o,a)=>{if(!o)throw new Error("Station handler was not initialized.");return a?{countries:e(o,a)}:{countries:o}},isPossibleDestination:On}},kn=()=>({noResultTemplate:()=>(0,c.qy)`<div class="bg-white p-5 font-body text-lg leading-5 text-n-red">${g.A.t("No hay resultados.")}</div>`}),ht=e=>{var t,n,s,r;const{getFilteredModel:l,getDefaultCountryCodeFromSettings:d}=gt(),{noResultTemplate:o}=kn(),a=(0,h.li)(null),[i,v]=(0,T.J0)(""),[x,y]=(0,T.J0)(""),w=(0,T.Kr)(()=>l(e.countries,x)||[],[e.countries,x]),O=(0,T.Kr)(()=>{if(!w?.length)return[];const D=w.find(L=>L.code===i);return D&&i!==Me?[D,Ke,...w.filter(L=>L.code!==i)]:[Ke,...w]},[i,w]),S=()=>{if(!e.dynamicSettings||!O.length||i)return;const D=d(e.journeyIndex,e.culture,e.dynamicSettings),L=O.find(_=>_.code.toLowerCase()===D.toLowerCase());v(L?.code||Me)},p=()=>{let D;return window.setTimeout(()=>{var L;(L=a.current)!=null&&L.parentElement&&(D=new Cr.A(a.current.parentElement,{wheelPropagation:!1,wheelSpeed:2,swipeEasing:!0,suppressScrollX:!0}))},100),()=>D?.destroy()},u=(0,T.Kr)(()=>{if(!O?.length)return[];const L=O.filter(q=>q.code!==Me).sort((q,B)=>q.cities.length-B.cities.length),_=[];for(;L.length>0;){const q=L.shift(),B=L.pop()||null;_.push([B,q])}return _},[O]),b=e.countries&&i&&(x||u?.length),f=(D,L)=>{D.preventDefault(),D.stopPropagation(),v(L.code)},m=D=>{e.onInput(),y(D.target.value)},$=D=>{y(""),v(D.countryCode),e.onClick(D)};(0,T.xG)(()=>{var D;if(!w?.some(L=>L.code===i)&&i!==Me){const L=(D=w?.[0])==null?void 0:D.code;L&&v(L)}},[e.isOpen,i,w]),(0,T.xG)(()=>{x&&v(Me)},[x]),(0,T.xG)(p,[e.countries,i]),(0,T.xG)(S,[e.isOpen,O,e.dynamicSettings,i]),(0,T.xG)(()=>{var D,L;const _=e.journeyIndex===I.V0?(D=e.originCity)==null?void 0:D.countryCode:(L=e.destinationCity)==null?void 0:L.countryCode;_&&_!==i&&v(_)},[(t=e.originCity)==null?void 0:t.code,(n=e.destinationCity)==null?void 0:n.code]);const C=(D,L)=>(0,c.qy)`
		<span
			class=${P()("whitespace-nowrap font-body text-lg font-normal leading-5 text-n-blue",{"group-hover:text-n-cyan":L!==0,"text-[#636363]":L!==0,"text-white":L===0})}
		>
			${D}
		</span>
	`,M=D=>(0,c.qy)`
		<span
			class=${P()("mt-1 block",{"text-[#636363]":D!==0,"text-white":D===0,"group-hover:text-n-cyan":D!==0})}
		>
			${Tr}
		</span>
	`,R=(D,L)=>(0,c.qy)`
		<li
			class=${P()("group flex h-10 cursor-pointer items-center justify-between gap-x-4 px-5",{"bg-n-cyan":L===0})}
			@click=${_=>f(_,D)}
		>
			${C(D.name,L)} ${M(L)}
		</li>
	`,z=D=>(0,c.qy)`
		<li
			class="group flex w-full cursor-pointer justify-between gap-x-4 font-body text-sm leading-[18px]"
			@click=${()=>$(D)}
		>
			<span class="text-[#444444] group-hover:text-n-cyan"> ${D.name} </span>
			<span class="text-[#a1a1a1] group-hover:text-n-cyan"> ${D.code} </span>
		</li>
	`,J=()=>{var D;return(0,c.qy)`
		<li class="mb-2 block font-body text-base font-bold leading-5 text-n-cyan">${g.A.t("Ciudades")}</li>
		${(D=w.find(L=>L.code===i))==null?void 0:D.cities.map(z)}
	`},A=(D,L)=>D?(0,c.qy)`
					<div
						class=${P()("mb-2 border-b border-solid border-[#e0e0e0] pb-2",{"mb-0 border-none pb-0":L!==0})}
					>
						<div class="mb-2 font-body text-base font-bold leading-5 text-n-cyan">${D.name}</div>
						<ul>
							${D.cities.map(z)}
						</ul>
					</div>
			  `:"",j=D=>(0,c.qy)`
		<div>${D.map(A)}</div>
	`,U=()=>(0,c.qy)`
		<li ref=${de(a)} class="relative grid h-[416px] grid-cols-[auto_auto_auto_auto] gap-x-10">
			${u.map(j)}
		</li>
	`,te=()=>(0,c.qy)`
		<div class="flex max-h-full items-stretch overflow-hidden rounded-lg bg-white">
			<ul class="block flex-1">
				${O.map(R)}
			</ul>
			<ul class="max-h-[416px] min-w-52 shrink-0 overflow-hidden px-5 py-5">
				${i===Me?U():J()}
			</ul>
		</div>
	`,Q=()=>O?.length?te():o(),G=(e.journeyIndex===I.V0?(s=e.originCity)==null?void 0:s.name:(r=e.destinationCity)==null?void 0:r.name)||"",k=()=>(0,c.qy)`
		<input
			?readonly=${(0,K.Y5)()}
			class=${P()("w-full cursor-pointer appearance-none border-none bg-transparent px-0 pb-0 pt-0.5 text-base outline-none","placeholder:text-base placeholder:text-[#c1c1c1]","focus:cursor-text",{"text-n-blue":G})}
			placeholder=${e.journeyIndex===I.V0?g.A.t("Origen"):g.A.t("Destino")}
			value=${x||G||""}
			.value=${x||G||""}
			@input=${m}
		/>
	`,W=()=>(0,c.qy)`
		<ac-dropdown2 .content=${Q()} .isOpen=${e.isOpen}></ac-dropdown2>
	`;return{htmlTemplate:()=>b||e.journeyIndex===I.kC?(0,c.qy)` ${k()} ${W()} `:""}};var Er=Object.defineProperty,Lr=Object.defineProperties,Rr=Object.getOwnPropertyDescriptors,En=Object.getOwnPropertySymbols,jr=Object.prototype.hasOwnProperty,qr=Object.prototype.propertyIsEnumerable,Ln=(e,t,n)=>t in e?Er(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xe=(e,t)=>{for(var n in t||(t={}))jr.call(t,n)&&Ln(e,n,t[n]);if(En)for(var n of En(t))qr.call(t,n)&&Ln(e,n,t[n]);return e},Qe=(e,t)=>Lr(e,Rr(t)),Rn=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const Je=!1,jn=e=>{var t,n,s;const[r]=Y("countries"),[l,d]=Y("currentStatusSearch"),[o]=Y("captchaStatus"),[a]=Y("kontent.flightStatus.flightStatusTest"),{getRouteModel:i}=gt(),v=(0,h.li)(null),x=(0,h.li)(null),y=(0,h.li)(void 0),[w,O]=(0,T.J0)(null),[S,p]=(0,T.J0)(void 0),[u,b]=(0,T.J0)(void 0),[f,m]=(0,T.J0)("route"),[$]=(0,T.J0)(`captcha-container-status-${Date.now().toString()}`),[C]=(0,T.J0)(`status-tab-${Date.now().toString()}`),M=()=>{const H=()=>O(null);if(document.addEventListener("scroll",H),!r?.length||!Je)return()=>document.removeEventListener("scroll",H);const le=i(r);return p(le),()=>document.removeEventListener("scroll",H)},R=()=>{if(!Je)return;const H=document.createElement("div");H.id=$,document.body.appendChild(H),y.current=grecaptcha.render(H,{sitekey:window.JetSmart.Settings.GoogleReCaptchaSiteKey,size:"invisible",callback:le=>Q(le)})},z=Mn({isOn:f==="flightNumber",firstOptionText:g.A.t("Ruta"),secondOptionText:g.A.t("N\xFAmero de vuelo"),onChange:H=>m(H?"route":"flightNumber")}),J=ht({countries:S?.countries,culture:e.culture,dynamicSettings:e.dynamicSettings,isOpen:w==="origin",journeyIndex:I.V0,originCity:l.originCity,destinationCity:l.destinationCity,onInput:()=>d(Qe(Xe({},l),{originCity:void 0})),onClick:H=>d(Qe(Xe({},l),{originCity:H,destinationCity:void 0}))}),A=ht({countries:u?.countries,culture:e.culture,dynamicSettings:e.dynamicSettings,isOpen:w==="destination",journeyIndex:I.kC,originCity:l.originCity,destinationCity:l.destinationCity,onInput:()=>d(Qe(Xe({},l),{destinationCity:void 0})),onClick:H=>d(Qe(Xe({},l),{destinationCity:H}))}),j=_t({isUsingAmericanMiles:e.isUsingAmericanMiles,availableSchedules:[],culture:e.culture,dynamicSettings:e.dynamicSettings,isLoading:!1,isReturnDate:!1,max:se()(new Date).add(1,"year"),min:se()(new Date),placeHolder:g.A.t("Fecha"),rangeStart:void 0,value:l.date,onChange:H=>d(Qe(Xe({},l),{date:H}))}),U=()=>{const H=window.newRtLoader(`#${C}`);return H.startLoader(),H},te=H=>{H&&(H.stopLoader(),H.destroy())},Q=H=>Rn(void 0,null,function*(){const le=U();try{}catch{te(le)}}),G=()=>Rn(void 0,null,function*(){if(!Je){const[H,le]=e.culture.split("-"),ye=`https://jetsmart.com/${le}/${H}/estado-de-vuelo`;window.location.href=ye;return}m("route"),grecaptcha.execute(y.current)}),k=Te({isAction:!0,icon:(0,c.qy)`<i class="jsh-circle-chevron-right1 text-base"></i>`,label:g.A.t("Ver estado de tu vuelo"),onClick:G}),W=()=>{!l.originCity||l.destinationCity||(O(null),window.setTimeout(()=>O("destination"),100))},Z=()=>{l.destinationCity&&(O(null),l.originCity&&l.destinationCity&&j.open())},D=()=>{const H=le=>{const ye=le.path||le.composedPath&&le.composedPath();(w==="origin"?ye.indexOf(v.current)>-1:ye.indexOf(x.current)>-1)||O(null)};return document.addEventListener("click",H),()=>document.removeEventListener("click",H)};(0,T.xG)(W,[(t=l.originCity)==null?void 0:t.code]),(0,T.xG)(Z,[(n=l.destinationCity)==null?void 0:n.code]),(0,T.xG)(()=>{if(l.originCity&&r?.length){const H=i(r,l.originCity);b(H)}},[(s=l.originCity)==null?void 0:s.code,r]),(0,T.fO)(D,[w]),(0,T.fO)(M,[r?.length]),(0,T.xG)(()=>{d(Dt)},[e.isActive]),(0,T.xG)(()=>{o==="loaded"&&e.isActive&&y.current===void 0&&R()},[o,e.isActive]);const L=()=>Je?(0,c.qy)`
					<div
						ref=${de(v)}
						class=${P()("relative flex h-[34px] md:h-full w-full items-center rounded-lg border border-solid bg-white px-4","sm:px-6",{"border-[#c1c1c1]":w!=="origin"&&!l.originCity,"border-n-cyan":w==="origin"&&!l.originCity,"border-n-blue":l.originCity})}
						@click=${()=>O("origin")}
					>
						<div
							class=${P()("absolute right-6 top-1/2 -translate-y-1/2 transform tw-hidden","sm:block")}
						>
							${vt}
						</div>
						${J.htmlTemplate()}
					</div>
			  `:"",_=()=>Je?(0,c.qy)`
					<div
						ref=${de(x)}
						class=${P()("relative flex h-[34px] md:h-full w-full cursor-pointer items-center rounded-lg border border-solid bg-white px-4","sm:px-6",{"border-[#c1c1c1]":w!=="destination"&&!l.destinationCity,"border-n-cyan":w==="destination"&&!l.destinationCity,"border-n-blue":l.destinationCity,"pointer-events-none opacity-75":!l.originCity})}
						@click=${()=>O("destination")}
					>
						<div
							class=${P()("absolute right-4 top-1/2 -translate-y-1/2 transform tw-hidden","sm:block")}
						>
							${vt}
						</div>
						${A.htmlTemplate()}
					</div>
			  `:"",q=()=>f==="route"?(0,c.qy)`
					<div class="grid grid-cols-1 gap-4 md:h-11 md:grid-cols-3">
						${L()} ${_()} ${j.htmlTemplate()}
					</div>
					<div class="flex flex-col-reverse items-center justify-center gap-4 md:flex-row md:justify-end">
						<div
							class="cursor-pointer text-center text-n-blue underline underline-offset-4"
							@click=${()=>d(Dt)}
						>
							${g.A.t("Limpiar")}
						</div>
						${k.htmlTemplate()}
					</div>
			  `:"",B=()=>f==="flightNumber"?(0,c.qy)`<div>NO DESIGN</div>`:"";return{htmlTemplate:()=>(0,c.qy)`
		<div class="flex flex-col gap-4 sm:p-8">
			<div class="text-xl leading-6 text-n-blue sm:text-[28px]">${(0,N._)(a.contents.title.value)}</div>

			<div class="flex gap-4 rounded-lg bg-[#F0F3F7] p-2 text-sm/5 text-n-blue">
				<div class="mr-4 text-[40px]/none">${(0,N._)(a.contents.searchboxIcon.value)}</div>
				<div class="text-sm">${(0,N._)(a.contents.text.value)}</div>
			</div>

			${Je?(0,c.qy)`
						<div class="flex gap-2">${z.htmlTemplate()}<span>@tooltip</span></div>
						${q()} ${B()}
				  `:(0,c.qy)`<div class="flex w-full justify-end">${k.htmlTemplate()}</div>`}
		</div>
	`}},sc=null,Nr=e=>{const[t]=Y("kontent"),[n,s]=(0,T.J0)(void 0),r=mt({culture:e.culture,isActive:n==="manage-your-booking",type:"manage"}),l=mt({culture:e.culture,isActive:n==="check-in",type:"check-in"}),d=jn({culture:e.culture,dynamicSettings:e.dynamicSettings,isActive:n==="flight-status",isUsingAmericanMiles:e.isUsingAmericanMiles}),o=[{icon:t?.manageYourFlight.manageYourFlightTest.contents.searchboxIcon.value,label:t?.manageYourFlight.manageYourFlightTest.contents.searchboxTitle.value,name:"manage-your-booking",contentTemplate:r.htmlTemplate},{icon:t?.checkIn.checkInTest.contents.searchboxIcon.value,label:t?.checkIn.checkInTest.contents.searchboxTitle.value,name:"check-in",contentTemplate:l.htmlTemplate},{icon:t?.flightStatus.flightStatusTest.contents.searchboxIcon.value,label:t?.flightStatus.flightStatusTest.contents.searchboxTitle.value,name:"flight-status",contentTemplate:d.htmlTemplate}],a=y=>s(n===y?void 0:y),i=y=>(0,c.qy)`
		<div class="flex items-center gap-2 text-n-blue">
			<span class="text-xl/none">${(0,N._)(y.icon)}</span
			><span class="text-base/none">${(0,N._)(y.label)}</span>
		</div>
	`,v=()=>o.map((y,w)=>(0,c.qy)`
				<dc-accordion
					class=${P()("w-full px-4 py-4",{"border-b border-solid border-x-0 border-t-0 border-b-[#E0E0E0]":w!==o.length-1})}
					.contentTemplate=${y.contentTemplate}
					.headerTitle=${i(y)}
					.isOpen=${n===y.name}
					.onClick=${()=>a(y.name)}
				></dc-accordion>
			`);return{close:()=>s(void 0),htmlTemplate:()=>(0,c.qy)` <div class="flex w-full flex-col py-2">${v()}</div> `}};var qn=E(3211);const Fr=e=>{const t=()=>{const s=document.createElement("script");s.type="text/javascript",s.id="sp_widget",s.dataset.hash="_c9acebd4a3070ea70",s.dataset.container="hotel_container",s.dataset.size="400x320",s.dataset.tpncy="false";const r=se()().format(I.D2),l=se()().add(1,"day").format(I.D2),d=e.culture.split("-")[0].toLowerCase();s.src=`https://cf.bstatic.com/static/affiliate_base/js/booking_sp_widget.js?checkin=${r}&checkout=${l}&iata_orr=1&iata=SCL&lang=${d}`,document.body.appendChild(s)};return(0,T.fO)(()=>{var s;const r=document.getElementById("hotel_container");return r&&!((s=r.children)!=null&&s.length)&&t(),()=>{var l;(l=document.getElementById("sp_widget"))==null||l.remove()}}),{htmlTemplate:()=>(0,c.qy)` <div id="hotel_container"></div> `}},Br=e=>{const t=()=>{var o;return(o=e.dynamicSettings.DynamicInsuranceTabSettings.find(a=>a.Culture.toLocaleLowerCase()===e.culture.toLocaleLowerCase()))==null?void 0:o.IsActive},n=()=>{var o;return(o=e.dynamicSettings.DynamicInsuranceTabSettings.find(a=>a.Culture.toLocaleLowerCase()===e.culture.toLocaleLowerCase()))==null?void 0:o.Url},s=()=>{window.open(n(),"_blank")},r=Te({isAction:!0,icon:(0,c.qy)`<i class="jsh-circle-chevron-right1 text-base"></i>`,label:g.A.t("search-box-insurance-button"),onClick:s}),l=()=>{const o=e.culture.toLocaleLowerCase()===I.TK?"chubb-logo-en.svg":e.culture.toLocaleLowerCase()===I.HQ?"chubb-logo-pt.svg":"chubb-logo-es.svg";return(0,c.qy)`
			<div class="dg-insurance-btn-container">
				${r.htmlTemplate()}
				<img class="dg-insurance-logo" src=${`/images/header/${o}`} />
			</div>
		`};return{htmlTemplate:()=>t()?(0,c.qy)` <div class="h-full w-full px-4 py-6">${l()}</div> `:(0,c.qy)``}},Ur=e=>({htmlTemplate:()=>{var n,s;const r=((n=I.eR.get(e.culture.toLowerCase()))==null?void 0:n.carUrl)||((s=I.eR.get("default"))==null?void 0:s.carUrl);return(0,c.qy)`
			<div>
				<iframe src=${r} height="432" width="100%" scrolling="no" frameborder="0"></iframe>
			</div>
		`}}),Jr=e=>({htmlTemplate:()=>{var n,s;const r=((n=I.eR.get(e.culture.toLowerCase()))==null?void 0:n.transferUrl)||((s=I.eR.get("default"))==null?void 0:s.transferUrl);return(0,c.qy)`
			<div class="mt-4 text-sm text-n-blue">
				${g.A.t("search-box-transfer")} <span class="text-lg font-semibold italic">Cartrawler</span>
			</div>
			<iframe src=${r} height="432" width="100%" scrolling="no" frameborder="0"></iframe>
		`}});var Nn=E(9983),ue=E(802),bt=E(1720),Fn=E(5647),Vr=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const Wr=e=>()=>({orderStations:t=>t.map(n=>{const s=n.regions.flatMap(r=>r.stations).sort((r,l)=>r.information.name.localeCompare(l.information.name));return n.regions=[{name:"",stations:s}],n}),postStep:()=>Vr(void 0,null,function*(){yield(0,Fn.z)([{ExperimentId:e.CorporateSetting.FlightSearchStationOrder.ExperimentId,Variant:e.CorporateSetting.FlightSearchStationOrder.Variant}])})});var ft=E(9554),Hr=Object.defineProperty,Bn=Object.getOwnPropertySymbols,Gr=Object.prototype.hasOwnProperty,zr=Object.prototype.propertyIsEnumerable,Un=(e,t,n)=>t in e?Hr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jn=(e,t)=>{for(var n in t||(t={}))Gr.call(t,n)&&Un(e,n,t[n]);if(Bn)for(var n of Bn(t))zr.call(t,n)&&Un(e,n,t[n]);return e},Yr=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const Kr=(e,t)=>{const n=l=>t.startsWith("en")?l.En:t.startsWith("pt")?l.Pt:l.Es,s=l=>r(l).map(d=>({[d.information.code]:d.markets})).reduce((d,o)=>Jn(Jn({},d),o),{}),r=l=>l.flatMap(d=>d.regions.flatMap(o=>o.stations));return()=>({orderStations:l=>{if(window.JetSmart.StationsOptions.Mode!=="Legacy")return l;const d=e.CountryOrdersPerCulture.find(i=>(0,ft.t)(i.Culture,t)).Countries,o=s(l),a=r(l);return d.map(i=>({information:{code:i,name:l.find(v=>(0,ft.t)(v.information.code,i)).information.name},regions:e.Countries.find(v=>(0,ft.t)(v.Code,i)).Regions.map(v=>({name:n(v.Name),stations:v.Stations.filter(x=>{var y;return!x.IsHidden&&((y=o[x.Code])==null?void 0:y.length)>0}).map(x=>{var y;return{information:(y=a.find(w=>(0,ft.t)(w.information.code,x.Code)))==null?void 0:y.information,markets:o[x.Code]}})}))}))},postStep:()=>Yr(void 0,null,function*(){return Promise.resolve()})})},Xr=e=>{const[t]=Y("navitaireSettings"),n=new Map([["AlphabeticalAsc",Wr(t?.abTestSettings)],["FromResourceXml",Kr(t?.stationSettings,e)]]),s=()=>{var l;const d=(l=t?.abTestSettings)==null?void 0:l.CorporateSetting.FlightSearchStationOrder;return window.JetSmart.Variants.find(a=>a.ExperimentId===d.ExperimentId&&a.VariantKey===d.Variant)?"AlphabeticalAsc":"FromResourceXml"};return{create:()=>{const l=s();return n.get(l)}}};var Qr=Object.defineProperty,Zr=Object.defineProperties,eo=Object.getOwnPropertyDescriptors,Vn=Object.getOwnPropertySymbols,to=Object.prototype.hasOwnProperty,no=Object.prototype.propertyIsEnumerable,Wn=(e,t,n)=>t in e?Qr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hn=(e,t)=>{for(var n in t||(t={}))to.call(t,n)&&Wn(e,n,t[n]);if(Vn)for(var n of Vn(t))no.call(t,n)&&Wn(e,n,t[n]);return e},Gn=(e,t)=>Zr(e,eo(t)),It=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const ao=e=>{const[t]=Y("userInfo"),[n]=Y("navitaireSettings"),s=Xr(e.opts.culture),[r,l]=(0,h.J0)([]),[d,o]=(0,h.J0)(),[a,i]=Y("countries"),v=S=>{if(!n?.stationSettings)throw new Error("No StationSettings");return n?.stationSettings.Countries.some(p=>{var u,b,f;return p.Code.toLowerCase()===S.information.code.toLowerCase()&&!p.IsHidden&&(!((u=t?.PeruCompra)!=null&&u.IsMember)&&!((b=t?.PeruCompra)!=null&&b.IsAdmin)||p.IsAvailableForPeruCompras)&&(p.Code.toLowerCase()===I.ZQ.toLowerCase()||!((f=t?.ChileCompra)!=null&&f.IsMember))})},x=S=>r.map(p=>Gn(Hn({},p),{regions:p.regions.map(u=>Gn(Hn({},u),{stations:u.stations.filter(b=>S.markets.includes(b.information.code))})).filter(u=>u.stations.length>0)})).filter(p=>p.regions.length>0),y=()=>It(void 0,null,function*(){const S=ut(),p=w(),u=yield fetch(p,{headers:S});if(u.ok)return(yield u.json()).countries;throw new Error("Network response was not ok.")}),w=()=>window.JetSmart.StationsOptions.Mode==="DirectFareCache"?`${(0,K.UC)(window.JetSmart.StationsOptions.BaseAddress)}/stations?culture=${ge.Hg}`:`${I._t}?locale=${ge.Hg}`,O=()=>It(void 0,null,function*(){o(e.startLoading());const S=yield y(),p=s.create(),u=p().orderStations(S);yield p().postStep();const b=u.filter(v);l(b)});return(0,T.xG)(()=>It(void 0,null,function*(){n?.abTestSettings&&n?.stationSettings&&t?.RoleCode&&(yield O())}),[n,t?.RoleCode]),(0,T.xG)(()=>{r?.length>0&&d&&e.stopLoading(d),i(r.map(S=>({code:S.information.code,isAvailableForPeruCompras:!0,cities:S.regions.reduce((p,u)=>[...p,...u.stations.map(b=>({code:b.information.code,countryCode:S.information.code,markets:b.markets,name:b.information.name}))],[]),name:S.information.name})))},[r]),[r,x]},je={departureDate:void 0,destinationCity:void 0,isOneWay:!1,isReloading:!1,originCity:void 0,passengers:{adults:1,children:0,infants:0,teens:0},promoCode:"",returnDate:void 0,useAmericanMiles:!1};let Ve=0,pt="",yt="";const ro=()=>{const e=document.body,t=document.documentElement;!e||!t||(Ve===0&&(pt=e.style.overflow||void 0,yt=t.style.overflow||void 0,e.style.overflow="hidden",t.style.overflow="hidden"),Ve+=1)},oo=()=>{const e=document.body,t=document.documentElement;!e||!t||Ve===0||(Ve=Math.max(Ve-1,0),Ve===0&&(e.style.overflow=pt??"",t.style.overflow=yt??"",pt=null,yt=null))},kt=e=>{const[t,n]=(0,h.J0)(!1),[s,r]=(0,h.J0)(!1),l=()=>{r(!0),window.setTimeout(()=>n(!0),10)},d=i=>{i.preventDefault(),i.stopPropagation(),n(!1),window.setTimeout(()=>{var v;r(!1),(v=e.onClose)==null||v.call(e)},300),ue._.MobileSearchboxModalClosed.publish({})};(0,T.fO)(()=>(t&&ro(),()=>oo()),[t]);const o=()=>(0,c.qy)`
		<div class="relative mb-8 flex items-center justify-between">
			<div class="text-xl font-bold text-n-cyan">${e.title}</div>
			<div
				class="absolute right-0 z-10 flex h-7 w-7 cursor-pointer items-center justify-center pb-0.5 pl-px text-[22px] font-semibold leading-none text-[rgba(51,84,109,0.7)] vertical-center sm:right-3 sm:top-3 sm:h-8 sm:w-8 sm:pl-px sm:text-[26px]"
				data-test-id="modal-close-button"
				@click=${i=>d(i)}
			>
				&times;
			</div>
		</div>
	`;return{htmlTemplate:()=>(0,K.Y5)()&&s?(0,c.qy)`
					<div
						class=${P()("fixed left-0 top-0 z-[11111111] flex h-screen w-screen items-center justify-center bg-white transform transition-transform duration-300 ease-in-out",{"translate-x-0":t,"translate-x-full":!t})}
					>
						<div class="flex h-full w-full flex-col px-4 pb-8 pt-6">
							${o()}
							<div class="flex min-h-0 flex-1 flex-col overflow-hidden">${e.content}</div>
						</div>
					</div>
			  `:(0,c.qy)``,open:l,close:d,isOpen:t}},zn=e=>{var t,n;const{getFilteredModel:s,getDefaultCountryCodeFromSettings:r}=gt(),{noResultTemplate:l}=kn(),[d,o]=(0,h.J0)(new Set),[a,i]=(0,h.J0)(""),[v,x]=(0,h.J0)(""),y=(0,h.Kr)(()=>{var _;return(_=e.journeyCountries)!=null&&_.length?s(e.journeyCountries,a)||[]:[]},[e.journeyCountries,a]),w=(0,h.Kr)(()=>{if(!y?.length)return[Ke];const _=y.find(B=>B.code===v),q=y.filter(B=>B.code!==v);return _?[Ke,_,...q]:[Ke,...y]},[v,y]),O=(0,h.Kr)(()=>{if(!y?.length)return[];const _=[];return y.forEach(q=>{q.cities.forEach(B=>{_.push(B)})}),_},[y]),S=(_,q)=>{var B;return(B=_?.cities.some(ee=>ee.markets.includes(q.code)))!=null?B:!1},p=_=>y.find(q=>q.code.toLowerCase()===_.toLowerCase()),u=_=>{x(_.code),o(new Set([_.code]))},b=()=>{x(Me),o(new Set([Me]))},f=_=>{const q=p(_);if(S(q,e.currentSearchManager.currentSearch.originCity)){u(q);return}const B=p(e.culture.substring(3,5));B&&S(B,e.currentSearchManager.currentSearch.originCity)?u(B):b()},m=_=>{const q=p(_);q&&u(q)},$=()=>{if(!e.dynamicSettings||!y.length||v)return;const _=r(e.journeyIndex,e.culture,e.dynamicSettings);e.journeyType==="destination"&&e.currentSearchManager.currentSearch.originCity?f(_):m(_)},C=(_,q)=>{_.preventDefault(),_.stopPropagation(),o(B=>{const ee=new Set(B);return ee.has(q)?ee.delete(q):(ee.clear(),ee.add(q)),ee})},M=_=>{e.onInput(),i(_.target.value)},R=(_,q)=>{i(""),e.onClick(_,q)},z=_=>(0,c.qy)`
		<span
			class=${P()("common-transition",{"rotate-180 transform":!d.has(_)})}
		>
			${Dr}
		</span>
	`,J=_=>(0,c.qy)`
		<li
			class="group flex w-full cursor-pointer justify-between gap-x-4 py-1 font-body text-sm leading-6"
			@click=${q=>R(_,q)}
		>
			<span class="text-[#444444]"> ${_.name} </span>
			<span class="text-[#a1a1a1]"> ${_.code} </span>
		</li>
	`,A=(_,q)=>{if(!q)return _;const B=_.toLowerCase().indexOf(q.toLowerCase());if(B===-1)return _;const ee=_.substring(0,B),H=_.substring(B,B+q.length),le=_.substring(B+q.length);return(0,c.qy)`${ee}<span class="text-n-cyan">${H}</span>${le}`},j=_=>{const q=`${_.name} (${_.code})`,B=A(q,a);return(0,c.qy)`
			<li
				class="group flex w-full cursor-pointer py-2 font-body text-sm leading-6 hover:bg-[#f0f0f0]"
				@click=${ee=>R(_,ee)}
			>
				<span class="text-[#444444]"> ${B} </span>
			</li>
		`},U=_=>(0,c.qy)`
		<div class="mb-3 border-b border-solid border-[#e0e0e0]">
			<div class="mb-1 font-body text-base font-bold leading-5 text-n-cyan">${_.name}</div>
			<ul class="mb-1">
				${_.cities.map(J)}
			</ul>
		</div>
	`,te=_=>{const q=d.has(_.code),B=_.code===Me;return(0,c.qy)`
			<div class="overflow-hidden">
				<div
					class="flex h-8 cursor-pointer items-center justify-between py-1"
					@click=${ee=>C(ee,_.code)}
				>
					<span class="whitespace-nowrap font-body text-base font-bold leading-5 text-n-blue">
						${_.name}
					</span>
					${z(_.code)}
				</div>
				<div
					class=${P()("transition-all duration-300 ease-in-out",{"max-h-0 opacity-0":!q,"max-h-[800px] opacity-100":q&&!B,"max-h-[2800px] opacity-100":q&&B})}
				>
					${B?(0,c.qy)`
								<div class="mt-2 overflow-y-auto px-2">
									${y.map(U)}
								</div>
						  `:(0,c.qy)`
								<ul class="mt-2 overflow-y-auto px-2">
									${_.cities.map(J)}
								</ul>
						  `}
				</div>
			</div>
		`},Q=()=>O?.length?(0,c.qy)`
					<div class="flex flex-col rounded-lg bg-white">
						<ul class="px-2">
							${O.map(j)}
						</ul>
					</div>
			  `:l(),G=()=>w?.length?(0,c.qy)`
					<div class="flex flex-col rounded-lg bg-white">
						${w.map(te)}
					</div>
			  `:l(),k=()=>a?Q():G(),W=(e.journeyType==="origin"?(t=e.currentSearchManager.currentSearch.originCity)==null?void 0:t.name:(n=e.currentSearchManager.currentSearch.destinationCity)==null?void 0:n.name)||"",Z=()=>(0,c.qy)`
		<div class="relative">
			${Mr}
			<input
				class=${P()("w-full cursor-pointer appearance-none rounded-lg border-none bg-[#F7F7F7] text-n-blue pr-4 pl-10 py-3 text-base outline-none","placeholder:text-base placeholder:text-n-light-gray","focus:cursor-text",{"text-n-blue":W||a})}
				placeholder=${g.A.t("Busca por ciudad o aeropuerto")}
				value=${a||W||""}
				.value=${a||W||""}
				@input=${M}
			/>
		</div>
	`,D=()=>(0,c.qy)`
		<div class="flex h-full flex-col gap-3 overflow-hidden">
			${Z()}
			<div class="flex-1 overflow-y-auto">${k()}</div>
		</div>
	`,L=kt({title:e.journeyType==="origin"?g.A.t("Elige el origen"):g.A.t("Elige el destino"),content:D(),onClose:()=>{i("")}});return(0,T.xG)($,[L.isOpen,y,e.dynamicSettings,v,e.currentSearchManager.currentSearch.originCity]),L},so=e=>{var t;const[n]=Y("countries"),{getRouteModel:s}=gt(),r=(0,h.li)(null),l=(0,h.li)(null),[d,o]=(0,T.J0)(null),[a,i]=(0,T.J0)(void 0),[v,x]=(0,T.J0)(void 0);ao({opts:{culture:e.culture},startLoading:e.startLoading,stopLoading:e.stopLoading});const y=()=>{const J=()=>o(null);if(document.addEventListener("scroll",J),!n?.length)return()=>document.removeEventListener("scroll",J);const A=s(n);return i(A),()=>document.removeEventListener("scroll",J)},w=()=>{const J=A=>{const j=A.path||A.composedPath&&A.composedPath();(d==="origin"?j.indexOf(r.current)>-1:j.indexOf(l.current)>-1)||o(null)};return document.addEventListener("click",J),()=>document.removeEventListener("click",J)},O=zn({journeyType:"origin",currentSearchManager:e.currentSearchManager,journeyIndex:I.V0,journeyCountries:a?.countries,culture:e.culture,dynamicSettings:e.dynamicSettings,onInput:()=>e.currentSearchManager.setOriginCity(void 0),onClick:(J,A)=>{e.currentSearchManager.setDestinationCity(void 0),e.currentSearchManager.setDepartureDate(void 0),e.currentSearchManager.setReturnDate(void 0),e.currentSearchManager.setOriginCity(J),e.currentSearchManager.setPassengers(je.passengers),o(null),O.close(A),window.setTimeout(()=>{p.open()},350)}}),S=ht({countries:a?.countries,culture:e.culture,dynamicSettings:e.dynamicSettings,isOpen:d==="origin",journeyIndex:I.V0,originCity:e.currentSearchManager.currentSearch.originCity,destinationCity:e.currentSearchManager.currentSearch.destinationCity,onInput:()=>{d!=="origin"&&o("origin"),e.currentSearchManager.setOriginCity(void 0)},onClick:J=>{e.currentSearchManager.setOriginCity(J),e.currentSearchManager.setDestinationCity(void 0),e.currentSearchManager.setDepartureDate(void 0),e.currentSearchManager.setReturnDate(void 0),e.currentSearchManager.setPassengers(je.passengers),b()}}),p=zn({journeyType:"destination",currentSearchManager:e.currentSearchManager,culture:e.culture,journeyIndex:I.kC,journeyCountries:v?.countries,dynamicSettings:e.dynamicSettings,onInput:()=>e.currentSearchManager.setDestinationCity(void 0),onClick:(J,A)=>{e.currentSearchManager.setDestinationCity(J),e.currentSearchManager.setDepartureDate(void 0),e.currentSearchManager.setReturnDate(void 0),e.currentSearchManager.setPassengers(je.passengers),o(null),p.close(A)}}),u=ht({countries:v?.countries,culture:e.culture,dynamicSettings:e.dynamicSettings,isOpen:d==="destination",journeyIndex:I.kC,originCity:e.currentSearchManager.currentSearch.originCity,destinationCity:e.currentSearchManager.currentSearch.destinationCity,onInput:()=>{d!=="destination"&&o("destination"),e.currentSearchManager.setDestinationCity(void 0)},onClick:J=>{e.currentSearchManager.setDestinationCity(J),e.currentSearchManager.setDepartureDate(void 0),e.currentSearchManager.setReturnDate(void 0),e.currentSearchManager.setPassengers(je.passengers),f()}}),b=()=>{o(null),window.setTimeout(()=>o("destination"),100)},f=()=>{o(null)},m=()=>{!e.currentSearchManager.currentSearch.originCity||!e.currentSearchManager.currentSearch.destinationCity||e.currentSearchManager.swapStations()};(0,T.xG)(()=>{if(e.currentSearchManager.currentSearch.originCity&&n?.length){const J=s(n,e.currentSearchManager.currentSearch.originCity);x(J)}},[(t=e.currentSearchManager.currentSearch.originCity)==null?void 0:t.code,n]),(0,T.fO)(w,[d]),(0,T.fO)(y,[n?.length]);const $=J=>{if(ue._.StationSelectorOpened.publish({}),(0,K.Y5)())if(ue._.MobileSearchboxModalOpened.publish({}),J==="origin"){O.open();return}else{p.open();return}let A;const j=()=>{window.clearTimeout(A),A=window.setTimeout(()=>{document.removeEventListener("scroll",j),o(J)},100)};document.addEventListener("scroll",j),j()},C=()=>(0,c.qy)`
		<div
			ref=${de(r)}
			class=${P()("relative flex h-full w-full items-center rounded-t-lg border border-solid bg-white pl-4","md:w-1/2 md:rounded-l-lg md:rounded-r-none md:pr-6",{"border-[#c1c1c1]":d!=="origin"&&!e.currentSearchManager.currentSearch.originCity,"border-n-cyan":d==="origin"&&!e.currentSearchManager.currentSearch.originCity,"border-n-blue":e.currentSearchManager.currentSearch.originCity})}
			@click=${()=>$("origin")}
		>
			<div class=${P()("absolute right-6 top-1/2 -translate-y-1/2 transform tw-hidden","md:block")}>
				${vt}
			</div>
			${O.htmlTemplate()} ${S.htmlTemplate()}
		</div>
	`,M=()=>(0,c.qy)`
		<div
			ref=${de(l)}
			class=${P()("relative flex h-full w-full cursor-pointer items-center rounded-b-lg border border-t-0 border-solid bg-white pl-4","md:w-1/2 md:rounded-l-none md:rounded-r-lg md:border-t md:pl-6 md:pr-4",{"border-[#c1c1c1]":d!=="destination"&&!e.currentSearchManager.currentSearch.destinationCity,"border-n-cyan":d==="destination"&&!e.currentSearchManager.currentSearch.destinationCity,"border-n-blue":e.currentSearchManager.currentSearch.destinationCity,"pointer-events-none opacity-75":!e.currentSearchManager.currentSearch.originCity})}
			@click=${()=>$("destination")}
		>
			<div class=${P()("absolute right-4 top-1/2 -translate-y-1/2 transform tw-hidden","md:block")}>
				${vt}
			</div>
			${p.htmlTemplate()} ${u.htmlTemplate()}
		</div>
	`,R=()=>(0,c.qy)`
		<div
			class=${P()("absolute right-4 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rotate-90 transform text-white","md:left-1/2 md:right-auto md:-translate-x-1/2 md:rotate-0 cursor-pointer")}
			@click=${m}
		>
			${$r}
		</div>
	`;return{htmlTemplate:()=>(0,c.qy)`
		<div
			class=${P()("relative col-span-2 !mx-0 flex h-[68px] w-full flex-col items-center !px-0 font-body text-base text-[#c1c1c1]","md:col-span-1 md:h-[42px] md:w-auto md:flex-row")}
		>
			${C()} ${R()} ${M()}
		</div>
	`}},Yn=()=>{const e=o=>{const[a,i]=o.toLowerCase().split("-"),v=`/${i}/${a}/minisitios/grupos`;return(0,c.qy)`
			<div>
				${g.A.t("search-box-group-warning")}<a
					href="${v}"
					class="ml-1 text-n-cyan underline md:hover:no-underline"
					>${g.A.t("search-box-group-warning-2")}</a
				>
			</div>
		`},t=o=>(0,c.qy)`${(0,N._)(g.A.t("Se ha eliminado un infante de tu b\xFAsqueda, ya que los pasajeros entre {{-interval}} a\xF1os no est\xE1n habilitados a volar con m\xE1s de un infante/ni\xF1o a cargo",{interval:o?"14-17":"13-17"}))}`,n=o=>(0,c.qy)`${(0,N._)(g.A.t("Recuerda que si viaja un ni\xF1o y un adolescente ({{-interval}} a\xF1os), este \xFAltimo debe ser su padre/madre o tutor legal",{interval:o?"14-17":"13-17"}))}`,s=()=>(0,c.qy)`${g.A.t("Recuerda que la edad del ni\xF1o o infante se considera al momento de terminar el viaje")}`,r=()=>(0,c.qy)`${g.A.t("En base a la ley colombiana, el descuento en la tarifa s\xF3lo aplica para los menores de 12 a\xF1os")}`;return{getGroupBookingWarning:e,getTeenInfantRemoveWarning:t,getTeenLegalGuardianWarning:n,getMinorOrInfantAgeWarning:s,getChildrenAgeWarningColombia:r,createWarningsMap:(o,a)=>new Map([["groupBooking",e(o)],["teenInfantRemove",t(a)],["teenLegalGuardian",n(a)],["minorOrInfantAge",s()],["childrenAgeWarningColombia",r()]]),getWarningsForCategory:(o,a,i,v,x,y)=>{const w=[];switch(o){case"adults":i&&w.push("groupBooking");break;case"teens":a.teens>0&&w.push("teenLegalGuardian");break;case"children":a.children>0&&x&&y.toLowerCase()==="es-co"&&w.push("childrenAgeWarningColombia");break;case"infants":v&&w.push("teenInfantRemove"),(a.infants>0||a.children>0)&&w.push("minorOrInfantAge");break}return w}}},io=e=>{const{createWarningsMap:t,getWarningsForCategory:n}=Yn(),{adults:s,teens:r,children:l,infants:d}=e.passengers,o=t(e.culture,e.warnings.isChileanSearch),a=p=>{p.preventDefault(),p.stopPropagation(),e.actions.onConfirm(p)},i=p=>(0,c.qy)`<div class="flex h-full w-full items-center justify-center text-lg font-bold text-n-blue">${p}</div>`,v=(p,u,b,f,m,$)=>(0,c.qy)`
		<div class="flex items-center justify-between px-4 py-4">
			<div>
				<div class="font-body text-base font-bold text-n-blue">${u}</div>
				<div class="font-body text-sm text-[#a1a1a1]">${b}</div>
			</div>
			<div class="flex items-center justify-center gap-4">
				<ac-change-passenger-number-button
					.type=${"minus"}
					.isDisabled=${m}
					.onClick=${()=>e.actions.onDecreasePaxNumber(p,m)}
				></ac-change-passenger-number-button>
				${i(f)}
				<ac-change-passenger-number-button
					.type=${"plus"}
					.isDisabled=${$}
					.onClick=${()=>e.actions.onIncreasePaxNumber(p,$)}
				></ac-change-passenger-number-button>
			</div>
		</div>
	`,x=p=>p.length>0?(0,c.qy)`
					<div class="flex flex-col gap-2">
						${p.map(u=>(0,c.qy)`
								<div class="flex items-center gap-3 rounded-lg bg-[#F0F3F7] px-2 py-3">
									<div>${Or}</div>
									<div class="flex-1">
										<div class="font-body text-xs leading-relaxed text-n-blue">
											${o.get(u)}
										</div>
									</div>
								</div>
							`)}
					</div>
			  `:"",y=(p,u,b,f,m,$)=>{const C=n(p,e.passengers,e.warnings.isWithGroupBookingWarning,e.warnings.isWithTeenInfantRemoveWarning,e.warnings.isColombianDomesticFlight,e.culture);return(0,c.qy)`
			<div
				class=${P()("w-full",{"border-b border-solid border-[#e0e0e0]":p!=="infants","pb-4":C.length>0})}
			>
				${v(p,u,b,f,m,$)}
				${x(C)}
			</div>
		`},w=()=>(0,c.qy)`
		<div class="flex justify-center py-6">
			<div
				class=${P()("flex cursor-pointer items-center justify-center rounded-full bg-n-cyan px-12 py-3","font-body text-sm font-semibold text-white")}
				@click=${a}
			>
				<div class="flex items-center justify-center">
					${g.A.t("Confirmar")} <i class="jsh-circle-chevron-right1 ml-2 mt-px text-sm"></i>
				</div>
			</div>
		</div>
	`,O=(0,T.Kr)(()=>(0,c.qy)` <div class="flex h-full flex-col overflow-hidden">
			<div class="flex-1 overflow-y-auto">
				${y("adults",g.A.t("Adultos"),g.A.t("18 o m\xE1s a\xF1os"),s,e.disabledStates.isRemoveAdultsDisabled,e.disabledStates.isAddAdultsDisabled)}
				${y("teens",g.A.t("Adolescentes"),e.warnings.isChileanSearch?g.A.t("14-17 a\xF1os"):g.A.t("13-17 a\xF1os"),r,e.disabledStates.isRemoveTeensDisabled,e.disabledStates.isAddTeensDisabled)}
				${y("children",g.A.t("Ni\xF1os"),e.warnings.isChileanSearch?g.A.t("2-13 a\xF1os"):g.A.t("2-12 a\xF1os"),l,e.disabledStates.isRemoveChildrenDisabled,e.disabledStates.isAddChildrenDisabled)}
				${y("infants",g.A.t("Infantes"),g.A.t("0-23 meses"),d,e.disabledStates.isRemoveInfantsDisabled,e.disabledStates.isAddInfantsDisabled)}
			</div>
			${w()}
		</div>`,[s,r,l,d,e.warnings.isWithGroupBookingWarning,e.warnings.isWithTeenInfantRemoveWarning,e.warnings.isColombianDomesticFlight,e.warnings.isChileanSearch,e.disabledStates]);return kt({title:g.A.t("Elige los pasajeros"),content:O})};var lo=Object.defineProperty,co=Object.defineProperties,uo=Object.getOwnPropertyDescriptors,Kn=Object.getOwnPropertySymbols,mo=Object.prototype.hasOwnProperty,vo=Object.prototype.propertyIsEnumerable,Xn=(e,t,n)=>t in e?lo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xt=(e,t)=>{for(var n in t||(t={}))mo.call(t,n)&&Xn(e,n,t[n]);if(Kn)for(var n of Kn(t))vo.call(t,n)&&Xn(e,n,t[n]);return e},Et=(e,t)=>co(e,uo(t));const{createWarningsMap:go}=Yn(),ho=e=>{var t,n;const{adults:s,teens:r,children:l,infants:d}=e.currentSearchManager.currentSearch.passengers,o=(0,h.li)(null),a=(0,h.li)(null),[i,v]=(0,T.J0)(!1),[x,y]=(0,T.J0)(!1),[w,O]=(0,T.J0)(!1),[S,p]=(0,T.J0)([]),u=s+r+l+d,b=(0,T.Kr)(()=>{var F,ce;return((F=e.currentSearchManager.currentSearch.originCity)==null?void 0:F.countryCode)===I.Od&&((ce=e.currentSearchManager.currentSearch.destinationCity)==null?void 0:ce.countryCode)===I.Od},[(t=e.currentSearchManager.currentSearch.originCity)==null?void 0:t.countryCode,(n=e.currentSearchManager.currentSearch.destinationCity)==null?void 0:n.countryCode]),f=F=>{if(F.adults>0)return Number.POSITIVE_INFINITY;const ce=F.teens-F.infants;return ce>0?ce:0},m=F=>{if(F.adults>0)return F.adults+F.teens;const ce=F.teens-F.children;return ce>0?ce:0},$=()=>{var F,ce;return((F=e.currentSearchManager.currentSearch.originCity)==null?void 0:F.countryCode)===I.ZQ||((ce=e.currentSearchManager.currentSearch.destinationCity)==null?void 0:ce.countryCode)===I.ZQ},C=()=>s+r+l===I.uV-1,M=()=>C(),R=()=>C(),z=()=>l>=f(e.currentSearchManager.currentSearch.passengers)||C(),J=()=>s===1&&r===0||s===0,A=()=>s===0&&r===1||r===0,j=()=>l===0,U=()=>d>=m(e.currentSearchManager.currentSearch.passengers),te=()=>d===0,Q=go(e.culture,$()),G=()=>{const F=Fe=>{const Tt=Fe.path||Fe.composedPath&&Fe.composedPath();Tt.indexOf(a.current)>-1||Tt.indexOf(o.current)>-1||v(!1)},ce=()=>v(!1);return document.addEventListener("click",F),document.addEventListener("scroll",ce),()=>{document.removeEventListener("click",F),document.removeEventListener("scroll",ce)}},k=F=>{if(F!=="infants"&&C()){y(!0);return}y(!1)},W=F=>{if(F!=="adults"&&F!=="teens"){O(!1);return}const ce=F==="adults"?s-1:s,Fe=F==="teens"?r-1:r,Tt=Et(xt({},e.currentSearchManager.currentSearch.passengers),{adults:ce,teens:Fe});if(d>m(Tt)){O(!0);return}O(!1)},Z=(F,ce)=>{if(ce){k(F);return}y(!1),O(!1),e.currentSearchManager.setPassengers(Et(xt({},e.currentSearchManager.currentSearch.passengers),{[F]:e.currentSearchManager.currentSearch.passengers[F]+1}))},D=(F,ce)=>{y(!1),W(F),!ce&&e.currentSearchManager.setPassengers(Et(xt({},e.currentSearchManager.currentSearch.passengers),{[F]:e.currentSearchManager.currentSearch.passengers[F]-1}))},L={isAddAdultsDisabled:M(),isAddTeensDisabled:R(),isAddChildrenDisabled:z(),isAddInfantsDisabled:U(),isRemoveAdultsDisabled:J(),isRemoveTeensDisabled:A(),isRemoveChildrenDisabled:j(),isRemoveInfantsDisabled:te()},_={onIncreasePaxNumber:Z,onDecreasePaxNumber:D,onConfirm:F=>{B.close(F)}},q={isWithGroupBookingWarning:x,isWithTeenInfantRemoveWarning:w,isColombianDomesticFlight:b,isChileanSearch:$()},B=io({culture:e.culture,passengers:e.currentSearchManager.currentSearch.passengers,warnings:q,disabledStates:L,actions:_}),ee=F=>{F.preventDefault(),F.stopPropagation(),ue._.MobileSearchboxModalOpened.publish({}),B.open()};(0,T.xG)(()=>{const F=xt({},e.currentSearchManager.currentSearch.passengers);F.infants>m(F)&&(F.infants=m(F)),F.children>f(F)&&(F.children=f(F)),(F.infants!==e.currentSearchManager.currentSearch.passengers.infants||F.children!==e.currentSearchManager.currentSearch.passengers.children)&&e.currentSearchManager.setPassengers(F)},[s,r,l,d]),(0,T.xG)(()=>{const F=[];x&&F.push("groupBooking"),w&&F.push("teenInfantRemove"),(l>0||d>0)&&F.push("minorOrInfantAge"),l>0&&b&&e.culture.toLowerCase()===I.o8&&F.push("childrenAgeWarningColombia"),r>0&&F.push("teenLegalGuardian"),p(F)},[e.currentSearchManager.currentSearch.passengers,x,w]),(0,T.xG)(()=>{y(!1),O(!1)},[i,B.isOpen]),(0,T.xG)(G,[i]);const H=F=>(0,c.qy)`<div class="font-body text-base font-bold text-n-blue">${F}</div>`,le=F=>(0,c.qy)`<div class="font-body text-xs text-[#a1a1a1]">${F}</div>`,ye=F=>(0,c.qy)`<div class="flex h-full w-full items-center justify-center font-body text-sm font-bold">${F}</div>`,Ct=()=>(0,c.qy)`
		<div class="mb-4 flex w-full items-center justify-between">
			<div>${H(g.A.t("Adultos"))} ${le(g.A.t("18 o m\xE1s a\xF1os"))}</div>
			<div class="grid grid-cols-[24px_24px_24px] grid-rows-[24px]">
				<ac-change-passenger-number-button
					.type=${"minus"}
					.isDisabled=${J()}
					.onClick=${()=>D("adults",J())}
				></ac-change-passenger-number-button>
				${ye(s)}
				<ac-change-passenger-number-button
					.type=${"plus"}
					.isDisabled=${M()}
					.onClick=${()=>Z("adults",M())}
				></ac-change-passenger-number-button>
			</div>
		</div>
	`,tn=()=>(0,c.qy)`
		<div class="mb-4 flex w-full items-center justify-between">
			<div>
				${H(g.A.t("Adolescentes"))}
				${$()?le(g.A.t("14-17 a\xF1os")):le(g.A.t("13-17 a\xF1os"))}
			</div>
			<div class="grid grid-cols-[24px_24px_24px] grid-rows-[24px]">
				<ac-change-passenger-number-button
					.type=${"minus"}
					.isDisabled=${A()}
					.onClick=${()=>D("teens",A())}
				></ac-change-passenger-number-button>
				${ye(r)}
				<ac-change-passenger-number-button
					.type=${"plus"}
					.isDisabled=${R()}
					.onClick=${()=>Z("teens",R())}
				></ac-change-passenger-number-button>
			</div>
		</div>
	`,nn=()=>(0,c.qy)`
		<div class="mb-4 flex w-full items-center justify-between">
			<div>
				${H(g.A.t("Ni\xF1os"))}
				${$()?le(g.A.t("2-13 a\xF1os")):le(g.A.t("2-12 a\xF1os"))}
			</div>
			<div class="grid grid-cols-[24px_24px_24px] grid-rows-[24px]">
				<ac-change-passenger-number-button
					.type=${"minus"}
					.isDisabled=${j()}
					.onClick=${()=>D("children",j())}
				></ac-change-passenger-number-button>
				${ye(l)}
				<ac-change-passenger-number-button
					.type=${"plus"}
					.isDisabled=${z()}
					.onClick=${()=>Z("children",z())}
				></ac-change-passenger-number-button>
			</div>
		</div>
	`,Ba=()=>(0,c.qy)`
		<div class="mb-4 flex w-full items-center justify-between">
			<div>${H(g.A.t("Infantes"))} ${le(g.A.t("0-23 meses"))}</div>
			<div class="grid grid-cols-[24px_24px_24px] grid-rows-[24px]">
				<ac-change-passenger-number-button
					.type=${"minus"}
					.isDisabled=${te()}
					.onClick=${()=>D("infants",te())}
				></ac-change-passenger-number-button>
				${ye(d)}
				<ac-change-passenger-number-button
					.type=${"plus"}
					.isDisabled=${U()}
					.onClick=${()=>Z("infants",U())}
				></ac-change-passenger-number-button>
			</div>
		</div>
	`,X=()=>(0,c.qy)`
		<div
			class="flex w-full cursor-pointer items-center justify-center rounded-full bg-n-cyan py-3 font-body text-sm font-semibold text-white hover:bg-n-blue"
			@click=${()=>v(!1)}
		>
			<div class="flex items-center justify-center">
				${g.A.t("Confirmar")} <i class="jsh-circle-chevron-right1 ml-2 mt-px text-sm"></i>
			</div>
		</div>
	`,ne=()=>S.length>0?(0,c.qy)` <div class="mt-2 flex flex-col items-start">
					${S.map(F=>(0,c.qy)` <div class="mt-2 font-body text-xs text-n-blue">${Q.get(F)}</div> `)}
			  </div>`:"",$e=()=>(0,c.qy)`
		<div
			ref=${de(a)}
			class="max-h-full w-[272px] max-w-full flex-row items-stretch overflow-hidden overflow-y-scroll rounded-lg bg-white p-4"
		>
			${Ct()} ${tn()} ${nn()} ${Ba()} ${X()}
			${ne()}
		</div>
	`,Oe=()=>(0,c.qy)`
		<div
			class=${P()("flex w-full cursor-pointer items-center justify-between rounded-lg border border-solid bg-white px-4 h-[42px]",Ue.m.FLIGHT_CHANGE_SEARCH_PASSENGER_SELECTOR_CLASS,{"border-n-cyan":i,"border-n-blue":!i})}
			@click=${()=>v(!i)}
		>
			<div class="font-body text-base text-n-blue">
				${u} ${u===1?g.A.t("pasajero"):g.A.t("pasajeros")}
			</div>
			<i class="jsh-user text-base text-[#c1c1c1]"></i>
		</div>
	`,Pe=()=>(0,c.qy)`
		<div
			class=${P()("flex h-[34px] w-full cursor-pointer items-center justify-between rounded-lg border border-solid bg-white px-4","border-n-blue")}
			@click=${ee}
		>
			<div class="font-body text-base text-n-blue">
				${u} ${u===1?g.A.t("pasajero"):g.A.t("pasajeros")}
			</div>
			<i class="jsh-user text-base text-[#c1c1c1]"></i>
		</div>
		${B.htmlTemplate()}
	`,xe=()=>(0,c.qy)`
		<div ref=${de(o)} class="relative">
			${Oe()}
			<ac-dropdown2 .content=${$e()} .isOpen=${i}></ac-dropdown2>
		</div>
	`;return{htmlTemplate:()=>(0,K.Y5)()?Pe():xe(),open:()=>{(0,K.Y5)()?(ue._.MobileSearchboxModalOpened.publish({}),B.open()):v(!0)}}},ic=e=>e.replace(/&#(\d+);/g,(t,n)=>String.fromCharCode(n)),bo=(e,t,n)=>{var s,r;const l=fo();if(l)return l;if(t){const d=t.DynamicPromoCodeSettings.sort((a,i)=>a.ProgramCodeAndLevel>i.ProgramCodeAndLevel?1:-1);if(e?.ProgramCodesWithLevels&&e.ProgramCodesWithLevels.length>0){const a=(s=d.find(i=>{var v;return i.ProgramCodeAndLevel&&(!i.Culture||i.Culture.toLowerCase()===n.toLowerCase())&&(!i.RoleCode||i.RoleCode.toLowerCase()===((v=e?.RoleCode)==null?void 0:v.toLowerCase()))&&e.ProgramCodesWithLevels.some(x=>i.ProgramCodeAndLevel===`${x.ProgramCode}-${x.ProgramLevel}`)}))==null?void 0:s.Code;if(a)return a}const o=(r=d.find(a=>{var i;return!a.ProgramCodeAndLevel&&(!a.Culture||a.Culture.toLowerCase()===n.toLowerCase())&&(!a.RoleCode||a.RoleCode.toLowerCase()===((i=e?.RoleCode)==null?void 0:i.toLowerCase()))}))==null?void 0:r.Code;if(o)return o;switch(n){case"es-CL":return t.DefaultPromotionCodeCl;case"es-PE":return t.DefaultPromotionCodePe;case"es-AR":return t.DefaultPromotionCodeAr;case"es-CO":return t.DefaultPromotionCodeCo;case"en-US":return t.DefaultPromotionCodeUs;case"pt-BR":return t.DefaultPromotionCodeBr;case"es-PY":return t.DefaultPromotionCodePy;case"es-UY":return t.DefaultPromotionCodeUy;case"es-EC":return t.DefaultPromotionCodeEc;case"es-DO":return t.DefaultPromotionCodeDo;case"en-GB":return t.DefaultPromotionCodeGb;default:return""}}return""},fo=()=>{const e=window.location.href.split("?");if(e.length<2)return;const t=e[1].split("&");for(const n of t){const[s,r]=n.split("=");if(s.toLowerCase()===I.sO.toLowerCase())return r}},po=e=>{var t;const[n]=Y("userInfo"),[s,r]=(0,T.J0)(""),[l,d]=(0,T.J0)(!1),[o,a]=(0,T.J0)(!1),[i,v]=(0,T.J0)(!1),[x,y]=(0,T.J0)(!1),w=()=>{var M;if(!(x||!n?.RoleCode||!e.dynamicSettings||e.currentSearchManager.currentSearch.promoCode||(M=n.ChileCompra)!=null&&M.IsMember))try{const R=bo(n,e.dynamicSettings,e.culture);e.currentSearchManager.setPromoCode(R),r(R),v(!!R),y(!0)}catch{throw new Error("Unable to parse user info cookie or set WA pc.")}},O=()=>(a(!1),d(!1),e.currentSearchManager.currentSearch.promoCode?I.lc.test(e.currentSearchManager.currentSearch.promoCode)?(a(!0),!1):I.EH.test(e.currentSearchManager.currentSearch.promoCode)?!0:(d(!0),!1):!0),S=()=>s===e.currentSearchManager.currentSearch.promoCode?p():e.currentSearchManager.currentSearch.promoCode,p=()=>{var M,R;if(!e.currentSearchManager.currentSearch.promoCode)return"";const z=(M=n?.PeruCompra)!=null&&M.IsAdmin||(R=n?.PeruCompra)!=null&&R.IsMember?e.currentSearchManager.currentSearch.promoCode.length:e.currentSearchManager.currentSearch.promoCode.length-2;return`${[...Array(z)].map(()=>"*").join("")}${e.currentSearchManager.currentSearch.promoCode.substring(z)}`},u=()=>{window.eventBus.raiseEvent({name:qn.h.PromoCodeAdded,params:{id:"searchbox.promocode",event:"input",data:{code:e.currentSearchManager.currentSearch.promoCode}}})},b=M=>{a(!1),d(!1),e.currentSearchManager.setPromoCode(M)};(0,T.xG)(()=>{var M;e.currentSearchManager.currentSearch.useAmericanMiles&&((M=n?.AmericanAirlines)!=null&&M.IsMember)&&(a(!1),d(!1),e.currentSearchManager.setPromoCode(""))},[e.currentSearchManager.currentSearch.useAmericanMiles,(t=n?.AmericanAirlines)==null?void 0:t.IsMember]),(0,T.fO)(w,[n?.RoleCode,e.culture,e.dynamicSettings,e.currentSearchManager.currentSearch.promoCode,e.currentSearchManager.currentSearch.useAmericanMiles,x]);const f=()=>l||o?(0,h.qy)`
					<div class="absolute inset-x-0 top-full rounded-lg bg-white p-2 text-xs text-n-red shadow-md">
						${o?g.A.t("promoCodeFormatError"):g.A.t("promoCodeVoucherError")}
					</div>
			  `:"",m=()=>{var M,R;return!((M=n?.ChileCompra)!=null&&M.IsMember)&&(!e.currentSearchManager.currentSearch.useAmericanMiles||!((R=n?.AmericanAirlines)!=null&&R.IsMember))},$=()=>{var M,R;return i?(0,h.qy)`
					<div class="relative">
						<ac-input
							.autoComplete=${"off"}
							.isInvalid=${l||o}
							.isDisabled=${((M=n?.PeruCompra)==null?void 0:M.IsAdmin)||((R=n?.PeruCompra)==null?void 0:R.IsMember)}
							.isSmall=${!0}
							.placeholder=${g.A.t("search-box-promo-code")}
							.value=${S()}
							.onInput=${b}
							.onBlur=${u}
						></ac-input>

						${f()}
					</div>
			  `:(0,h.qy)`
					<div
						class="flex cursor-pointer items-center gap-1.5 text-n-blue hover:text-n-cyan"
						@click=${()=>v(!0)}
					>
						<span class="pb-0.5 text-2xl">+</span>
						<span class="text-nowrap text-sm tw-hidden md:block"
							>${g.A.t("A\xF1adir c\xF3digo promocional")}</span
						>
						<span class="text-nowrap text-sm md:hidden">${g.A.t("C\xF3digo promocional")}</span>
					</div>
			  `};return{predefinedPromoCode:s,htmlTemplate:()=>m()?$():(0,h.qy)``,validate:O}};class Lt{}Lt.default=e=>{const t=se()(),s=t.add(e,"months").diff(t,"days"),r=Array.from({length:s},(l,d)=>({departureDate:t.add(d,"day")}));return{outbound:r,inbound:r}};var Ze=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const yo=e=>{var t,n,s,r;const[l]=Y("navitaireSettings"),[d,o]=(0,h.J0)(!1),[a,i]=(0,h.J0)([]),[v,x]=(0,h.J0)([]),[y,w]=(0,h.J0)(void 0),[O,S]=(0,h.J0)(void 0),[p,u]=(0,h.J0)(void 0),[b,f]=(0,h.J0)(void 0),[m,$]=(0,h.J0)([]),[C,M]=(0,h.J0)([]),[R,z]=(0,h.J0)({originCode:void 0,destinationCode:void 0,isOneWay:!1}),J=(D,L,_)=>{const q=[];let B=L.startOf("day");for(;B.isSameOrBefore(_);)D.some(ee=>ee.isSame(B,"day"))||q.push(B),B=B.add(1,"day");return q},A=(D,L)=>{if(D.length===0)return;let _=D[0],q=L(_);for(let B=1;B<D.length;B++){const ee=L(D[B]);ee>q&&(_=D[B],q=ee)}return _},j=(D,L)=>{if(D.length===0)return;let _=D[0],q=L(_);for(let B=1;B<D.length;B++){const ee=L(D[B]);ee<q&&(_=D[B],q=ee)}return _},U=D=>Ze(void 0,null,function*(){var L,_;let q=[];D=D.sort((H,le)=>H.departureDate.isAfter(le.departureDate)?1:-1);const B=(L=j(D,H=>H.departureDate.unix()))==null?void 0:L.departureDate,ee=(_=A(D,H=>H.departureDate.unix()))==null?void 0:_.departureDate;return q=J(D.map(H=>H.departureDate),B||se()(),ee),{min:B||se()(),max:ee||se()(),disabled:q}}),te=()=>{const D=se()().startOf("month").format("YYYY-MM-DD"),L=!window.JetSmart.TimetableOptions.IncludeReturnFlights||e.currentSearchManager.currentSearch.isOneWay;return window.JetSmart.TimetableOptions.Mode==="DirectFareCache"?[`${(0,K.UC)(window.JetSmart.TimetableOptions.BaseAddress)}/timetable?departure=${e.currentSearchManager.currentSearch.originCity.code}`,`destination=${e.currentSearchManager.currentSearch.destinationCity.code}`,`currency=${l?.currency}`,"withPriceRange",`startDate=${D}`,`${L?"return=false":""}`].filter(q=>q).join("&"):[`${I.vN}?departure=${e.currentSearchManager.currentSearch.originCity.code}`,`destination=${e.currentSearchManager.currentSearch.destinationCity.code}`,`currency=${l?.currency}`,`startDate=${D}`,`${L?"return=false":""}`].filter(_=>_).join("&")},Q=D=>({currency:D.currency,departureDate:se()(D.departureDate),price:D.price,priceCategory:D.priceCategory}),G=D=>Ze(void 0,null,function*(){const L=yield U(D);i(L.disabled),w(se()(L.max)),u(se()(L.min))}),k=D=>Ze(void 0,null,function*(){const L=yield U(D),_=e.currentSearchManager.currentSearch.departureDate&&L.min.isSameOrBefore(e.currentSearchManager.currentSearch.departureDate,"day");x(L.disabled),S(se()(L.max)),f(_?se()(e.currentSearchManager.currentSearch.departureDate):se()(L.min))}),W=()=>Ze(void 0,null,function*(){if(!e.currentSearchManager.currentSearch.originCity||!e.currentSearchManager.currentSearch.destinationCity)return;const D={originCode:e.currentSearchManager.currentSearch.originCity.code,destinationCode:e.currentSearchManager.currentSearch.destinationCity.code,isOneWay:e.currentSearchManager.currentSearch.isOneWay};if(R.originCode===D.originCode&&R.destinationCode===D.destinationCode&&R.isOneWay===D.isOneWay)return;z(D),e.currentSearchManager.currentSearch.isReloading||(R.originCode===D.originCode&&R.destinationCode===D.destinationCode&&R.isOneWay!==D.isOneWay||e.currentSearchManager.setDepartureDate(void 0),e.currentSearchManager.setReturnDate(void 0)),o(!0);const _=e.startLoading(),q=yield Z();if(!q){console.error("Failed to load timetable data"),o(!1),e.stopLoading(_);return}$(q.outbound),M(q.inbound),yield G(q.outbound),e.currentSearchManager.currentSearch.isOneWay||(yield k(q.inbound)),o(!1),e.stopLoading(_),e.currentSearchManager.setIsReloading(!1)}),Z=()=>Ze(void 0,null,function*(){var D,L;const _=ut(),q=te(),B={method:"GET",mode:"cors",headers:_};try{const ee=yield fetch(q,B);if(ee.ok){const H=yield ee.json();return{inbound:((D=H.inbound)==null?void 0:D.map(Q))||[],outbound:((L=H.outbound)==null?void 0:L.map(Q))||[]}}return Lt.default(e.dynamicSettings.TimetableMaxMonthsFallback)}catch{return Lt.default(e.dynamicSettings.TimetableMaxMonthsFallback)}});return(0,T.xG)(W,[(t=e.currentSearchManager.currentSearch.originCity)==null?void 0:t.code,(n=e.currentSearchManager.currentSearch.destinationCity)==null?void 0:n.code,e.currentSearchManager.currentSearch.isOneWay]),(0,T.xG)(()=>{e.currentSearchManager.currentSearch.isOneWay||!e.currentSearchManager.currentSearch.departureDate||C.length===0||k(C)},[e.currentSearchManager.currentSearch.departureDate,e.currentSearchManager.currentSearch.isOneWay,C]),{disabledDepartureDates:a,disabledReturnDates:v,isLoading:d,maxDepartureDate:y,maxReturnDate:O,minDepartureDate:p,minReturnDate:b,outboundAvailableDates:m,inboundAvailableDates:C,selectedPriceOutbound:((s=m.find(D=>D.departureDate.isSame(e.currentSearchManager.currentSearch.departureDate,"day")))==null?void 0:s.price)||"",selectedPriceInbound:((r=C.find(D=>D.departureDate.isSame(e.currentSearchManager.currentSearch.returnDate,"day")))==null?void 0:r.price)||"",setMinReturnDate:D=>f(D)}};var xo=Object.defineProperty,So=Object.defineProperties,wo=Object.getOwnPropertyDescriptors,Qn=Object.getOwnPropertySymbols,Co=Object.prototype.hasOwnProperty,$o=Object.prototype.propertyIsEnumerable,Zn=(e,t,n)=>t in e?xo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,To=(e,t)=>{for(var n in t||(t={}))Co.call(t,n)&&Zn(e,n,t[n]);if(Qn)for(var n of Qn(t))$o.call(t,n)&&Zn(e,n,t[n]);return e},Do=(e,t)=>So(e,wo(t));se().extend(Re);const ea="js-date-selector-scroll-container",ta="js-month-index",Mo=e=>{var t,n;const[s,r]=(0,h.J0)(new Set([0])),[l,d]=(0,h.J0)(!1),o=(0,h.Kr)(()=>{const G=[],k=e.timetable.minDepartureDate||se()(),W=e.timetable.maxDepartureDate||se()().add(12,"month");let Z=k.startOf("month"),D=0;for(;Z.isSameOrBefore(W,"month")&&D<12;)G.push({date:Z,index:D}),Z=Z.add(1,"month"),D++;return G},[e.timetable.minDepartureDate,e.timetable.maxDepartureDate]),a=l?e.timetable.inboundAvailableDates:e.timetable.outboundAvailableDates,i=l?e.timetable.disabledReturnDates:e.timetable.disabledDepartureDates,v=l?e.timetable.minReturnDate:e.timetable.minDepartureDate,x=l?e.timetable.maxReturnDate:e.timetable.maxDepartureDate,y=l?e.currentSearchManager.currentSearch.returnDate:e.currentSearchManager.currentSearch.departureDate,w=l?e.currentSearchManager.currentSearch.departureDate:void 0,O=xn(e.dynamicSettings.ShowFarePricesCultures,e.culture)&&!e.currentSearchManager.currentSearch.useAmericanMiles,{getMonthCalendar:S}=At(),p=G=>G?o.findIndex(k=>k.date.isSame(G,"month")):-1,u=G=>{window.setTimeout(()=>{const k=document.querySelector(`.${ta}-${G}`),W=document.querySelector(`.${ea}`);if(!k||!W)return;const Z=W.getBoundingClientRect().top,L=k.getBoundingClientRect().top-Z;W.scrollTo({top:W.scrollTop+L,behavior:"smooth"})},500)},b=()=>{const G=new Set;return o.forEach(k=>{a.some(Z=>{if(!Z.departureDate.isSame(k.date,"month"))return!1;const L=l&&e.currentSearchManager.currentSearch.departureDate||v;return!(Z.departureDate.isBefore(L,"date")||Z.departureDate.isAfter(x,"date")||i.some(B=>B.isSame(Z.departureDate,"date")))})&&G.add(k.index)}),G.size===0&&G.add(0),G},f=()=>{r(b());const G=p(e.currentSearchManager.currentSearch.departureDate),k=p(e.currentSearchManager.currentSearch.returnDate),W=l?k:G;W>=0?u(W):u(0)},m=()=>{d(!1),Q.open()},$=()=>{!e.currentSearchManager.currentSearch.departureDate||e.currentSearchManager.currentSearch.isOneWay||(d(!0),Q.open())},C=G=>{r(k=>{const W=new Set(k);return W.has(G)?W.delete(G):W.add(G),W})},M=(G,k)=>{e.onDepartureChange(G),e.currentSearchManager.currentSearch.isOneWay?Q.close(k):d(!0)},R=(G,k)=>{e.onReturnChange(G),Q.close(k)},z=(G,k)=>{l?R(G,k):M(G,k)},J=Dn({availableSchedules:a,culture:e.culture,disabledDates:i,max:x,min:v,rangeStart:w,usePrices:O,selectedDate:y,lowestDisplayedPrice:0,onDateClick:z}),A=()=>(0,c.qy)`
		<div class="mb-4 flex items-center gap-2">
			<div
				class=${P()("flex-1 rounded-lg",{"p-[2px] bg-[#bfdeff]":!l})}
			>
				<input
					readonly
					class=${P()("w-full cursor-default rounded-lg border border-solid px-3 py-[5px] text-base outline-none","placeholder:text-base placeholder:text-[#c1c1c1]",{"border-[#7D93B2] border-2 text-n-blue":!l,"border-n-blue text-n-blue":l&&e.currentSearchManager.currentSearch.departureDate,"border-[#c1c1c1] text-[#c1c1c1]":l&&!e.currentSearchManager.currentSearch.departureDate})}
					placeholder=${g.A.t("Fecha Ida")}
					value=${e.currentSearchManager.currentSearch.departureDate?(0,K.NN)(e.currentSearchManager.currentSearch.departureDate.format("ddd DD-MM")):""}
				/>
			</div>
			${e.currentSearchManager.currentSearch.isOneWay?"":(0,c.qy)`
						<div
							class=${P()("flex-1 rounded-lg",{"p-[2px] bg-[#bfdeff]":l})}
						>
							<input
								readonly
								class=${P()("w-full cursor-default rounded-lg border border-solid px-3 py-[5px] text-base outline-none","placeholder:text-base placeholder:text-[#c1c1c1]",{"border-[#7D93B2] border-2 text-n-blue":l,"border-n-blue text-n-blue":!l&&e.currentSearchManager.currentSearch.returnDate,"border-[#c1c1c1] text-[#c1c1c1]":!l&&!e.currentSearchManager.currentSearch.returnDate})}
								placeholder=${g.A.t("Fecha Vuelta")}
								value=${e.currentSearchManager.currentSearch.returnDate?(0,K.NN)(e.currentSearchManager.currentSearch.returnDate.format("ddd DD-MM")):""}
							/>
						</div>
				  `}
		</div>
	`,j=G=>{const k=s.has(G.index),W=(0,K.NN)(G.date.format("MMMM YYYY")),Z=S(G.date,e.culture),D=()=>k?J.getCalendarForMonth(Z,!0):"";return(0,c.qy)`
			<dc-accordion
				class=${P()("w-full py-2",[`${ta}-${G.index}`])}
				.headerClass=${P()("text-base font-bold text-n-blue pt-3",{"border-t border-solid border-[#e0e0e0]":G.index!==0,"pb-3":!k})}
				.headerTitle=${W}
				.isOpen=${k}
				.onClick=${()=>C(G.index)}
				.contentTemplate=${D}
			></dc-accordion>
		`},U=()=>e.timetable.isLoading?"":(0,c.qy)`
					<div class=${P()("flex-1 overflow-y-auto",ea)}>
						${o.map(j)}
					</div>
			  `,te=(0,h.Kr)(()=>(0,c.qy)` <div class="flex h-full flex-col overflow-hidden">${A()} ${U()}</div>`,[e.timetable.isLoading,(t=e.currentSearchManager.currentSearch.departureDate)==null?void 0:t.format("YYYY-MM-DD"),(n=e.currentSearchManager.currentSearch.returnDate)==null?void 0:n.format("YYYY-MM-DD"),e.currentSearchManager.currentSearch.isOneWay,l,Array.from(s).join(","),a.length,o.length,v?.format("YYYY-MM-DD"),x?.format("YYYY-MM-DD"),i.length]),Q=kt({title:g.A.t("Elige las fechas"),content:te});return(0,T.xG)(()=>{Q.isOpen&&f()},[Q.isOpen,l]),(0,T.xG)(()=>{Q.isOpen||(d(!1),r(new Set([0])))},[Q.isOpen]),Do(To({},Q),{openAsDeparture:m,openAsReturn:$})};se().extend(Re);const Oo=e=>{var t,n,s,r,l;const[d,o]=(0,T.J0)(!1),a=yo({startLoading:e.startLoading,stopLoading:e.stopLoading,currentSearchManager:e.currentSearchManager,dynamicSettings:e.dynamicSettings}),i=e.currentSearchManager.currentSearch.originCity&&e.currentSearchManager.currentSearch.destinationCity&&!a.isLoading,v=Mo({culture:e.culture,dynamicSettings:e.dynamicSettings,currentSearchManager:e.currentSearchManager,timetable:a,onDepartureChange:b=>{e.currentSearchManager.setReturnDate(void 0),e.currentSearchManager.setDepartureDate(b)},onReturnChange:b=>{e.currentSearchManager.setReturnDate(b),window.setTimeout(()=>{e.openPassengerSelector()},350)}}),x=_t({availableSchedules:a.outboundAvailableDates,culture:e.culture,disabledDates:a.disabledDepartureDates,dynamicSettings:e.dynamicSettings,inputTestId:"",isDisabled:!i,isLoading:a.isLoading,isReturnDate:!1,max:a.maxDepartureDate,min:a.minDepartureDate,placeHolder:g.A.t("Fecha Ida"),rangeStart:void 0,value:e.currentSearchManager.currentSearch.departureDate,isUsingAmericanMiles:e.currentSearchManager.currentSearch.useAmericanMiles,onChange:b=>{e.currentSearchManager.setReturnDate(void 0),e.currentSearchManager.setDepartureDate(b),!e.currentSearchManager.currentSearch.isOneWay&&window.setTimeout(()=>{y.open()},100)}}),y=_t({availableSchedules:a.inboundAvailableDates,culture:e.culture,disabledDates:a.disabledReturnDates,dynamicSettings:e.dynamicSettings,inputTestId:"",isDisabled:!i||!e.currentSearchManager.currentSearch.departureDate||e.currentSearchManager.currentSearch.isOneWay,isLoading:a.isLoading,isReturnDate:!0,max:a.maxReturnDate,min:a.minReturnDate,placeHolder:g.A.t("Fecha Vuelta"),rangeStart:e.currentSearchManager.currentSearch.departureDate,value:e.currentSearchManager.currentSearch.returnDate,isUsingAmericanMiles:e.currentSearchManager.currentSearch.useAmericanMiles,onChange:b=>{e.currentSearchManager.setReturnDate(b),window.setTimeout(()=>{e.openPassengerSelector()},100)}}),w=()=>{i&&(ue._.MobileSearchboxModalOpened.publish({}),v.openAsDeparture())},O=()=>{!e.currentSearchManager.currentSearch.departureDate||!i||(ue._.MobileSearchboxModalOpened.publish({}),v.openAsReturn())},S=()=>{!i||e.currentSearchManager.currentSearch.departureDate||d||(o(!0),(0,K.Y5)()?(ue._.MobileSearchboxModalOpened.publish({}),v.openAsDeparture()):x.open())};(0,T.xG)(()=>{o(!1)},[(t=e.currentSearchManager.currentSearch.originCity)==null?void 0:t.code,(n=e.currentSearchManager.currentSearch.destinationCity)==null?void 0:n.code]),(0,T.fO)(()=>{const b=window.setTimeout(()=>{S()},300);return()=>window.clearTimeout(b)},[a.isLoading,(s=e.currentSearchManager.currentSearch.departureDate)==null?void 0:s.format(I.or),(r=e.currentSearchManager.currentSearch.originCity)==null?void 0:r.code,(l=e.currentSearchManager.currentSearch.destinationCity)==null?void 0:l.code]);const p=()=>(0,c.qy)`
		<div @click=${w}>
			<div
				class=${P()("relative flex h-[34px] w-full cursor-pointer items-center rounded-lg border border-solid bg-white px-4",{"border-[#c1c1c1] text-[#c1c1c1]":!e.currentSearchManager.currentSearch.departureDate,"border-n-blue text-n-blue":e.currentSearchManager.currentSearch.departureDate,"pointer-events-none opacity-75":!i})}
			>
				<input
					readonly
					class="w-full cursor-pointer appearance-none border-none bg-transparent px-0 pb-0 pt-0.5 text-base outline-none placeholder:text-base placeholder:text-[#c1c1c1]"
					placeholder=${g.A.t("Fecha Ida")}
					value=${e.currentSearchManager.currentSearch.departureDate?(0,K.NN)(e.currentSearchManager.currentSearch.departureDate.format("ddd DD-MM")):""}
				/>
				<i class="jsh-calendar absolute right-4 top-1/2 -translate-y-1/2 transform"></i>
			</div>
		</div>
		${e.currentSearchManager.currentSearch.isOneWay?"":(0,c.qy)`
					<div @click=${O}>
						<div
							class=${P()("relative flex h-[34px] w-full cursor-pointer items-center rounded-lg border border-solid bg-white px-4",{"border-[#c1c1c1] text-[#c1c1c1]":!e.currentSearchManager.currentSearch.returnDate,"border-n-blue text-n-blue":e.currentSearchManager.currentSearch.returnDate,"pointer-events-none opacity-75":!i||!e.currentSearchManager.currentSearch.departureDate})}
						>
							<input
								readonly
								class="w-full cursor-pointer appearance-none border-none bg-transparent px-0 pb-0 pt-0.5 text-base outline-none placeholder:text-base placeholder:text-[#c1c1c1]"
								placeholder=${g.A.t("Fecha Vuelta")}
								value=${e.currentSearchManager.currentSearch.returnDate?(0,K.NN)(e.currentSearchManager.currentSearch.returnDate.format("ddd DD-MM")):""}
							/>
							<i class="jsh-calendar absolute right-4 top-1/2 -translate-y-1/2 transform"></i>
						</div>
					</div>
			  `}
		${v.htmlTemplate()}
	`,u=()=>(0,K.Y5)()?p():(0,c.qy)`
					<div>${x.htmlTemplate()}</div>
					<div>${y.htmlTemplate()}</div>
			  `;return{selectedPriceOutbound:a.selectedPriceOutbound,selectedPriceInbound:a.selectedPriceInbound,htmlTemplate:u,setMinReturnDate:a.setMinReturnDate,openModal:()=>(0,K.Y5)()?v.openAsDeparture():x.open()}};var et=E(1150),Po=Object.defineProperty,Ao=Object.defineProperties,_o=Object.getOwnPropertyDescriptors,na=Object.getOwnPropertySymbols,Io=Object.prototype.hasOwnProperty,ko=Object.prototype.propertyIsEnumerable,aa=(e,t,n)=>t in e?Po(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Eo=(e,t)=>{for(var n in t||(t={}))Io.call(t,n)&&aa(e,n,t[n]);if(na)for(var n of na(t))ko.call(t,n)&&aa(e,n,t[n]);return e},Lo=(e,t)=>Ao(e,_o(t)),Rt=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const ra="redemptionMiles",Ro=e=>{var t;const n=Ye(),{logEvent:s}=(0,et.U)(),[r]=Y("userInfo"),l=()=>{var k;return(k=r?.ChileCompra)==null?void 0:k.IsMember},d=()=>!!r?.OrganizationName,o=()=>{var k,W;return((k=r?.PeruCompra)==null?void 0:k.IsMember)||((W=r?.PeruCompra)==null?void 0:W.IsAdmin)},a=()=>{var k,W;return((W=(k=window.JetSmart)==null?void 0:k.DynamicSettings)==null?void 0:W.IsAmericanOn)&&!d()&&!l()&&!o()},i=hn(),[v]=Y("navitaireSettings"),x=po({currentSearchManager:e.currentSearchManager,culture:e.culture,dynamicSettings:e.dynamicSettings}),y=(0,T.Kr)(()=>{var k;return!!i.load()&&(!e.currentSearchManager.currentSearch.useAmericanMiles||!((k=r?.AmericanAirlines)!=null&&k.IsMember))},[e.currentSearchManager.currentSearch.useAmericanMiles,(t=r?.AmericanAirlines)==null?void 0:t.IsMember]),w=Mn({isOn:!e.currentSearchManager.currentSearch.isOneWay,firstOptionText:g.A.t("Solo ida"),secondOptionText:g.A.t("Ida y vuelta"),onChange:k=>{e.currentSearchManager.setIsOneWay(k),e.currentSearchManager.setReturnDate(e.currentSearchManager.currentSearch.isOneWay!==k?void 0:e.currentSearchManager.currentSearch.returnDate)}}),O=()=>{const k=window.newRtLoader(`#${e.loaderElemId}`);return k.startLoader(),k},S=k=>{k&&(k.stopLoader(),k.destroy())},p=so({currentSearchManager:e.currentSearchManager,culture:e.culture,dynamicSettings:e.dynamicSettings,startLoading:O,stopLoading:S}),u=ho({culture:e.culture,currentSearchManager:e.currentSearchManager}),b=Oo({currentSearchManager:e.currentSearchManager,culture:e.culture,dynamicSettings:e.dynamicSettings,openPassengerSelector:u.open,startLoading:O,stopLoading:S}),f=()=>{var k,W,Z;const D=e.culture.split("-",2),L=1,_=D.length===2?D[L]:"",q=a()&&e.currentSearchManager.currentSearch.useAmericanMiles&&((k=r?.AmericanAirlines)==null?void 0:k.IsMember);let B={o1:e.currentSearchManager.currentSearch.originCity.code,d1:e.currentSearchManager.currentSearch.destinationCity.code,dd1:e.currentSearchManager.currentSearch.departureDate.format(I.or),ADT:e.currentSearchManager.currentSearch.passengers.adults+e.currentSearchManager.currentSearch.passengers.teens,CHD:e.currentSearchManager.currentSearch.passengers.children,inl:e.currentSearchManager.currentSearch.passengers.infants,r:!1,s:!0,mon:!0,cur:q?I.zr:v.currency,culture:e.culture,pc:q?"":e.currentSearchManager.currentSearch.promoCode||"",rc:_,selectedPriceOutbound:((W=b.selectedPriceOutbound)==null?void 0:W.toString().trim())||"",selectedPriceInbound:"",isRedemptionFlow:q||!1};return e.currentSearchManager.currentSearch.isOneWay||(B=Lo(Eo({},B),{dd2:e.currentSearchManager.currentSearch.returnDate.format(I.or),selectedPriceInbound:((Z=b.selectedPriceInbound)==null?void 0:Z.toString().trim())||"",r:!0})),B},m=k=>{const W=encodeURIComponent(Nn.resolve(window.JetSmart.Settings.BookingUrl,`${I.U4}${k}`));window.location.href=e.dynamicSettings.QueueItPrefix+W},$=k=>{location.href=Nn.resolve(window.JetSmart.Settings.BookingUrl,`${I.U4}${k}`)},C=()=>Rt(void 0,null,function*(){r?.RoleCode!==I.ch.WEB_ANONYMOUS&&(yield(0,K.eB)()),window.location.href=(0,bt.Q)(e.culture)}),M=()=>{var k;i.save({departureDate:e.currentSearchManager.currentSearch.departureDate.format(I.or),destination:e.currentSearchManager.currentSearch.destinationCity.code,isOneWay:e.currentSearchManager.currentSearch.isOneWay,origin:e.currentSearchManager.currentSearch.originCity.code,passengers:{adults:e.currentSearchManager.currentSearch.passengers.adults,children:e.currentSearchManager.currentSearch.passengers.children,infants:e.currentSearchManager.currentSearch.passengers.infants,teens:e.currentSearchManager.currentSearch.passengers.teens},returnDate:((k=e.currentSearchManager.currentSearch.returnDate)==null?void 0:k.format(I.or))||""})},R=k=>Rt(void 0,null,function*(){k.preventDefault();const W=i.load();if(W)try{e.currentSearchManager.reloadSearch(W,e.currentSearchManager.currentSearch.promoCode||x.predefinedPromoCode||"")}catch{}}),z=()=>Rt(void 0,null,function*(){var k,W;if(!e.currentSearchManager.currentSearch.originCity||!e.currentSearchManager.currentSearch.destinationCity||!e.currentSearchManager.currentSearch.departureDate||!e.currentSearchManager.currentSearch.isOneWay&&!e.currentSearchManager.currentSearch.returnDate||e.currentSearchManager.currentSearch.passengers.adults+e.currentSearchManager.currentSearch.passengers.teens===0||e.currentSearchManager.currentSearch.promoCode&&!x.validate())return;if(s("search_clicked",{adults:e.currentSearchManager.currentSearch.passengers.adults,children:e.currentSearchManager.currentSearch.passengers.children,culture:e.culture,departureDate:e.currentSearchManager.currentSearch.departureDate,destinationCode:e.currentSearchManager.currentSearch.destinationCity.code,infants:e.currentSearchManager.currentSearch.passengers.infants,numberOfJourneys:e.currentSearchManager.currentSearch.isOneWay?1:2,market:e.currentSearchManager.currentSearch.destinationCity.code!==e.currentSearchManager.currentSearch.originCity.code?"INTER":`DOM-${e.currentSearchManager.currentSearch.originCity.code}`,originCode:e.currentSearchManager.currentSearch.originCity.code,preloadedPromoCode:x.predefinedPromoCode,promoCode:e.currentSearchManager.currentSearch.promoCode,returnDate:e.currentSearchManager.currentSearch.returnDate,teens:e.currentSearchManager.currentSearch.passengers.teens}),e.currentSearchManager.currentSearch.promoCode&&e.currentSearchManager.currentSearch.useAmericanMiles&&!((k=r?.AmericanAirlines)!=null&&k.IsMember)){ue._.RedemptionNoPromoCodeModalOpened.publish({});return}if(e.currentSearchManager.currentSearch.useAmericanMiles&&!((W=r?.AmericanAirlines)!=null&&W.IsMember)){yield C();return}O(),M();const Z=f(),D=(0,K.rh)(Z);e.dynamicSettings.IsQueueItOn?m(D):$(D)}),J=Te({dataTestId:he.m.SubmitSearchButton,isAction:!0,icon:(0,c.qy)`<i class="jsh-circle-chevron-right1 text-base"></i>`,isDisabled:!e.currentSearchManager.currentSearch.originCity||!e.currentSearchManager.currentSearch.destinationCity||!e.currentSearchManager.currentSearch.departureDate||!e.currentSearchManager.currentSearch.isOneWay&&!e.currentSearchManager.currentSearch.returnDate||e.currentSearchManager.currentSearch.passengers.adults+e.currentSearchManager.currentSearch.passengers.teens===0,label:g.A.t("search-box-submit"),onClick:z});(0,T.xG)(()=>{var k,W;r?.RoleCode&&!!e.currentSearchManager.currentSearch.useAmericanMiles!=!!((k=r.AmericanAirlines)!=null&&k.IsMember)&&e.currentSearchManager.setUseAmericanMiles((W=r?.AmericanAirlines)==null?void 0:W.IsMember)},[r?.RoleCode,e.currentSearchManager.currentSearch.promoCode]);const A=()=>y?(0,c.qy)`
					<div class="m-0 flex items-center justify-center px-0 pb-0 pt-2 text-center">
						<span
							class="cursor-pointer text-sm font-bold leading-none text-n-blue underline hover:text-brand-primary"
							@click=${R}
						>
							&#8635;&nbsp;${g.A.t("Rearmar mi \xFAltima b\xFAsqueda")}
						</span>
					</div>
			  `:(0,c.qy)``,j=()=>a()?(0,c.qy)`
					<div class="dg-redemption-checkbox">
						<input
							type="checkbox"
							id=${ra}
							autocomplete="off"
							?checked=${e.currentSearchManager.currentSearch.useAmericanMiles}
							@click=${()=>e.currentSearchManager.setUseAmericanMiles(!e.currentSearchManager.currentSearch.useAmericanMiles)}
						/>
						<label class="ml-2 text-n-blue" for=${ra}
							>${g.A.t("Use AAdvantage\xAE miles")}</label
						>
					</div>
			  `:(0,c.qy)``,U=()=>e.currentSearchManager.currentSearch.originCity&&e.currentSearchManager.currentSearch.destinationCity?(0,c.qy)` ${b.htmlTemplate()}${u.htmlTemplate()}${x.htmlTemplate()} `:"",te=()=>(0,c.qy)`
		<div class="flex flex-col gap-4">
			<div class="mt-6 grid grid-cols-2 gap-4">
				<div class="col-span-2">${w.htmlTemplate()}</div>
				<div class="col-span-2">${p.htmlTemplate()}</div>
				${U()}
			</div>
			${j()}
			<div class="flex flex-col gap-4">${A()}${J.htmlTemplate()}</div>
		</div>
	`,Q=()=>(0,c.qy)`
		<div class="mt-4 flex flex-col gap-4">
			<div class="mt-2">${w.htmlTemplate()}</div>
			<div class="grid w-full grid-cols-[2fr_1fr_1fr_1fr] gap-4">
				${p.htmlTemplate()} ${b.htmlTemplate()} ${u.htmlTemplate()}
			</div>
			${j()}
			<div
				class=${P()("flex items-center",{"justify-between":y,"justify-end":!y})}
			>
				${A()}
				<div class="flex items-center gap-4">${x.htmlTemplate()}${J.htmlTemplate()}</div>
			</div>
		</div>
	`;return{htmlTemplate:()=>n.size==="XS"||n.size==="SM"?(0,c.qy)`<div>${te()}</div>`:(0,c.qy)`<div>${Q()}</div> `}},lc=null,jo=e=>{const[t]=Y("userInfo"),[n]=Y("kontent"),[s]=(0,T.J0)(`flights-tab-${Date.now().toString()}`),[r,l]=(0,T.J0)("flights"),d=()=>{var u;return(u=e.dynamicSettings.DynamicInsuranceTabSettings.find(b=>b.Culture.toLocaleLowerCase()===e.culture.toLocaleLowerCase()))==null?void 0:u.IsActive},o=Ur({culture:e.culture}),a=Ro({currentSearchManager:e.currentSearchManager,culture:e.culture,dynamicSettings:e.dynamicSettings,loaderElemId:s}),i=Fr({culture:e.culture}),v=Br({culture:e.culture,dynamicSettings:e.dynamicSettings}),x=Jr({culture:e.culture}),y=u=>{window.eventBus.raiseEvent({name:qn.h.SearchBoxTabClick,params:{id:u,event:"click",data:{}}})},w=(u,b,f)=>(0,c.qy)`
		<div
			class=${P()("rounded-sm flex items-center text-sm px-1 py-2","md:text-base md:px-3 md:py-4 max-w-fit md:rounded-xl md:cursor-pointer",{"bg-[#f7f7f7] text-[#7D93B2] md:hover:bg-[#F0F3F7]":!u,"bg-n-cyan text-white":u})}
		>
			<span class="mr-2 tw-hidden sm:inline-block">${(0,N._)(f)}</span>
			<span> ${(0,N._)(b)} </span>
		</div>
	`,O=()=>{var u;let b=[{name:"flights",contentTemplate:a.htmlTemplate,tabHeaderTemplate:()=>w(r==="flights",n?.searchbox.searchboxFlightsSection.contents.searchboxSectionTitle.value,n?.searchbox.searchboxFlightsSection.contents.searchboxSectionIcon.value),onClick:()=>y("Searchbox.flightsTab")},{name:"hotels",contentTemplate:i.htmlTemplate,tabHeaderTemplate:()=>w(r==="hotels",n?.searchbox.searchboxHotelsSection.contents.searchboxSectionTitle.value,n?.searchbox.searchboxHotelsSection.contents.searchboxSectionIcon.value),onClick:()=>y("Searchbox.hotelsTab")},{name:"cars",contentTemplate:o.htmlTemplate,tabHeaderTemplate:()=>w(r==="cars",n?.searchbox.searchboxCarsSection.contents.searchboxSectionTitle.value,n?.searchbox.searchboxCarsSection.contents.searchboxSectionIcon.value),onClick:()=>y("Searchbox.rentalcarsTab")},{name:"transfers",contentTemplate:x.htmlTemplate,tabHeaderTemplate:()=>w(r==="transfers",n?.searchbox.searchboxTransferSection.contents.searchboxSectionTitle.value,n?.searchbox.searchboxTransferSection.contents.searchboxSectionIcon.value),onClick:()=>y("Searchbox.transfersTab")},{name:"insurance",contentTemplate:v.htmlTemplate,tabHeaderTemplate:()=>w(r==="insurance",n?.searchbox.searchboxInsuranceSection.contents.searchboxSectionTitle.value,n?.searchbox.searchboxInsuranceSection.contents.searchboxSectionIcon.value),onClick:()=>y("Searchbox.insuranceTab")}];return(u=t?.ChileCompra)!=null&&u.IsMember&&(b=b.filter(f=>f.name==="flights")),d()||(b=b.filter(f=>f.name!=="insurance")),e.dynamicSettings.isHotelsOn||(b=b.filter(f=>f.name!=="hotels")),e.dynamicSettings.IsCarRentalOn||(b=b.filter(f=>f.name!=="cars")),e.dynamicSettings.IsTransfersOn||(b=b.filter(f=>f.name!=="transfers")),b},S=()=>{const u={data:O(),selectedTab:r,onSelect:l};return(0,c.qy)` <dc-tabs class="m-4 w-full px-4" .dto=${u}> </dc-tabs> `};return{htmlTemplate:()=>(0,c.qy)`
			<div id=${s} class="w-full">
				<div class="flex w-full justify-center">${S()}</div>
			</div>
		`}};var qo=Object.defineProperty,No=Object.defineProperties,Fo=Object.getOwnPropertyDescriptors,oa=Object.getOwnPropertySymbols,Bo=Object.prototype.hasOwnProperty,Uo=Object.prototype.propertyIsEnumerable,sa=(e,t,n)=>t in e?qo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,we=(e,t)=>{for(var n in t||(t={}))Bo.call(t,n)&&sa(e,n,t[n]);if(oa)for(var n of oa(t))Uo.call(t,n)&&sa(e,n,t[n]);return e},Ce=(e,t)=>No(e,Fo(t));const Jo=()=>{const[e]=Y("countries"),[t,n]=(0,h.J0)(je),s=(0,h.hb)(S=>{n(p=>p.originCity===S?p:Ce(we({},p),{originCity:S,destinationCity:void 0,departureDate:void 0,returnDate:void 0,passengers:je.passengers}))},[]),r=(0,h.hb)(S=>{n(p=>p.destinationCity===S?p:Ce(we({},p),{destinationCity:S,departureDate:void 0,returnDate:void 0}))},[]),l=(0,h.hb)(S=>{n(p=>p.departureDate===S?p:Ce(we({},p),{departureDate:S,returnDate:p.isOneWay?void 0:p.returnDate}))},[]),d=(0,h.hb)(S=>{n(p=>p.returnDate===S?p:Ce(we({},p),{returnDate:S}))},[]),o=(0,h.hb)(S=>{n(p=>p.passengers===S?p:Ce(we({},p),{passengers:S}))},[]),a=(0,h.hb)(S=>{n(p=>p.isOneWay===S?p:Ce(we({},p),{isOneWay:S,returnDate:S?void 0:p.returnDate}))},[]),i=(0,h.hb)(S=>{n(p=>p.promoCode===S?p:Ce(we({},p),{promoCode:S}))},[]),v=(0,h.hb)(S=>{n(p=>p.useAmericanMiles===S?p:Ce(we({},p),{useAmericanMiles:S}))},[]),x=(0,h.hb)(S=>{n(p=>p.isReloading===S?p:Ce(we({},p),{isReloading:S}))},[]),y=(0,h.hb)(()=>{n(S=>!S.originCity||!S.destinationCity?S:Ce(we({},S),{originCity:S.destinationCity,destinationCity:S.originCity,departureDate:void 0,returnDate:void 0}))},[]),w=(0,h.hb)(()=>{n(je)},[]),O=(0,h.hb)((S,p)=>{n(u=>Ce(we({},u),{isReloading:!0,departureDate:se()(S.departureDate),destinationCity:e.flatMap(b=>b.cities).find(b=>b.code===S.destination),isOneWay:S.isOneWay,originCity:e.flatMap(b=>b.cities).find(b=>b.code===S.origin),passengers:{adults:S.passengers.adults,children:S.passengers.children,infants:S.passengers.infants,teens:S.passengers.teens},returnDate:S.returnDate?se()(S.returnDate):void 0,promoCode:p}))},[e]);return{currentSearch:t,setOriginCity:s,setDestinationCity:r,setDepartureDate:l,setReturnDate:d,setPassengers:o,setIsOneWay:a,setPromoCode:i,setUseAmericanMiles:v,setIsReloading:x,swapStations:y,resetSearch:w,reloadSearch:O}};var Vo=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const Wo=!1,Ho="new-bb-searchbox",Go=["culture-settings","culture","currency","dynamic-settings","station-settings","timetable-max-months-fallback"],zo=["smart-search","my-booking"],cc=null,ia=0,dc=zo.length-1,Yo=e=>{const t={culture:e.culture,cultureSettings:e.cultureSettings&&typeof e.cultureSettings=="string"?(0,K.ny)(e.cultureSettings):void 0,currency:e.currency,dynamicSettings:e.dynamicSettings&&typeof e.dynamicSettings=="string"?(0,K.ny)(e.dynamicSettings):void 0,stationSettings:e.stationSettings&&typeof e.stationSettings=="string"?(0,K.ny)(e.stationSettings):void 0},n=Ye(),s=(0,h.li)(void 0),[r]=Y("userInfo"),[l]=Y("kontent"),d=ar(),{logEvent:o}=(0,et.U)(),[a,i]=(0,T.J0)("smart-search"),[v,x]=(0,T.J0)("smart-search"),y=hn(),w=Jo(),O=()=>{o("homepage_dom_loaded",{userInfo:r})},S=()=>{if(!(0,K.Y5)()&&s.current){const J=s.current,A=J.getBoundingClientRect(),j=window.innerHeight,U=400;A.bottom+U>j&&J.scrollIntoView({behavior:"auto",block:"start",inline:"center"})}},p=()=>{const J=ue._.StationSelectorOpened.subscribe(S);return()=>J.unsubscribe()},u=()=>Vo(void 0,null,function*(){r?.RoleCode&&(O(),y.refresh(),yield d.init({culture:t.culture,loadedValues:{abTestSettings:window.JetSmart.AbTestSettings,cultureSettings:t.cultureSettings,currency:t.currency,stationSettings:t.stationSettings}}))});(0,T.fO)(p,[]),(0,T.xG)(u,[r?.RoleCode]);const b=(J,A,j,U=!1)=>(0,h.qy)`
		<div class="flex h-[56px] max-w-fit items-center justify-center text-base">
			<span
				class=${P()("common-transition bg-white px-4 flex items-center",{"py-3 text-[#636363] rounded-xl font-normal":!J,"py-5 text-n-blue rounded-t-lg rounded-b-none font-bold max-h-full":J,"border-b-0 sm:border-b-[3px] sm:border-b-n-cyan sm:border-x-0 sm:border-t-0 sm:border-solid":J&&!U})}
			>
				<span class="mr-2">${(0,N._)(j)}</span>
				<span> ${(0,N._)(A)} </span>
			</span>
		</div>
	`,f=jo({currentSearchManager:w,culture:t.culture,dynamicSettings:t.dynamicSettings}),m=Nr({culture:t.culture,dynamicSettings:t.dynamicSettings,isUsingAmericanMiles:w.currentSearch.useAmericanMiles}),$=mt({culture:t.culture,isActive:n.size==="XS"?!1:v==="manage-your-booking",type:"manage"}),C=mt({culture:t.culture,isActive:n.size==="XS"?!1:v==="check-in",type:"check-in"}),M=jn({culture:t.culture,dynamicSettings:t.dynamicSettings,isActive:n.size==="XS"?!1:v==="flight-status",isUsingAmericanMiles:w.currentSearch.useAmericanMiles}),R=()=>{const J={data:[{index:0,name:"smart-search",contentTemplate:f.htmlTemplate,tabHeaderTemplate:()=>b(v==="smart-search",l?.searchbox.searchboxFlightsSection.contents.searchboxSectionTitle.value,l?.searchbox.searchboxFlightsSection.contents.searchboxSectionIcon.value)},{index:1,name:"manage-your-booking",contentTemplate:$.htmlTemplate,tabHeaderTemplate:()=>b(v==="manage-your-booking",l?.manageYourFlight.manageYourFlightTest.contents.searchboxTitle.value,l?.manageYourFlight.manageYourFlightTest.contents.searchboxIcon.value)},{index:2,name:"check-in",contentTemplate:C.htmlTemplate,tabHeaderTemplate:()=>b(v==="check-in",l?.checkIn.checkInTest.contents.searchboxTitle.value,l?.checkIn.checkInTest.contents.searchboxIcon.value)},{index:3,name:"flight-status",contentTemplate:M.htmlTemplate,tabHeaderTemplate:()=>b(v==="flight-status",l?.flightStatus.flightStatusTest.contents.searchboxTitle.value,l?.flightStatus.flightStatusTest.contents.searchboxIcon.value)}],selectedTab:v,onSelect:x};return(0,h.qy)`
			<div ref=${de(s)} class="relative z-10 mt-[-72px] flex w-full justify-center">
				<dc-tabs class="container my-4" .dto=${J}> </dc-tabs>
			</div>
		`},z=()=>{const J={data:[{index:0,name:"smart-search",contentTemplate:f.htmlTemplate,onClick:m.close,tabHeaderTemplate:()=>b(a==="smart-search",l?.searchbox.searchboxFlightsSection.contents.searchboxSectionTitle.value,l?.searchbox.searchboxFlightsSection.contents.searchboxSectionIcon.value,!0)},{index:1,name:"my-booking",contentTemplate:m.htmlTemplate,tabHeaderTemplate:()=>b(a==="my-booking",g.A.t("Mi Reserva"),l?.checkIn.checkInTest.contents.searchboxIcon.value,!0)}],selectedTab:a,onSelect:i};return(0,h.qy)`
			<div class="absolute inset-x-4 top-4 z-10 justify-center">
				<dc-tabs class="my-4 w-full max-w-[95%]" .dto=${J}> </dc-tabs>
			</div>
		`};return n.size==="XS"?z():R()},Ko=!1,Xo="ac-smart-timer",Qo=["seconds","url"],Zo=e=>{const t={seconds:Number(e.seconds),url:e.url},n=()=>{window.setTimeout(()=>{window.location.href=t.url},Number(t.seconds)*1e3)};return(0,T.xG)(n,[]),(0,h.qy)``};var es=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const ts=!1,ns="ac-pcra-login-info-modal",as=()=>{const e=()=>t==="gestor"?"Gestor":"Delegado",[t,n]=(0,T.J0)("none");(0,T.fO)(()=>{const i=ue._.PcraLoginInfoModalOpened.subscribe(v=>n(v.modalType));return()=>i.unsubscribe()},[]);const s=()=>es(void 0,null,function*(){try{yield(0,K.FZ)()}catch(i){console.error("Could not delete login info",i)}n("none")}),r=Te({isAction:!0,icon:(0,h.qy)`<i class="jsh-circle-chevron-right1 text-base"></i>`,label:g.A.t("Aceptar"),onClick:s}),l=()=>{const i=e();return(0,h.qy)`
			<div class="dg-new-modal-info-bar pcra-login-modal-header">
				${(0,N._)(g.A.t("Sr. {{-userType}}",{userType:i}))}
			</div>
		`},d=()=>t==="gestor"?(0,h.qy)`
					<p>${g.A.t("Login-Info-Modal-Gestor-Paragraph-1")}</p>
					<p>${g.A.t("Login-Info-Modal-Gestor-Paragraph-2")}</p>
			  `:(0,h.qy)`
					<p>${g.A.t("Login-Info-Modal-Delegado-Paragraph-1")}</p>
					<p>${g.A.t("Login-Info-Modal-Delegado-Paragraph-2")}</p>
			  `,o=()=>(0,h.qy)` <div class="pcra-login-info-content">${d()}</div> `,a=()=>(0,h.qy)` <div class="pcra-modal-footer">${r.htmlTemplate()}</div> `;return t!=="none"?(0,h.qy)`
				<div class="fixed inset-0 z-[100001] bg-n-blue bg-opacity-75 backdrop-blur-sm">
					<div
						class="pcra-login-info-modal absolute w-[95%] max-w-[95%] overflow-hidden rounded-2xl bg-white all-center"
						data-test-id="modal-content"
					>
						${l()} ${o()} ${a()}
					</div>
				</div>
		  `:(0,h.qy)``};var rs=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const os="ac-chile-compra-login-info-modal",ss=!1,is=()=>{const[e,t]=(0,T.J0)(!1),n=()=>{const l=ue._.ChileCompraLoginInfoModalOpened.subscribe(()=>t(!0));return()=>l.unsubscribe()},s=()=>rs(void 0,null,function*(){try{yield(0,K.FZ)()}catch(l){console.error("Could not delete login info",l)}t(!1)}),r=Te({isAction:!0,icon:(0,h.qy)`<i class="jsh-circle-chevron-right1 text-base"></i>`,label:g.A.t("Aceptar"),onClick:s});return(0,T.xG)(n,[]),e?(0,h.qy)`
				<div class="fixed inset-0 z-[100001] bg-n-blue bg-opacity-75 backdrop-blur-sm">
					<div
						class="absolute !w-[550px] max-w-[95%] overflow-hidden rounded-2xl bg-white all-center"
						data-test-id="modal-content"
					>
						<div class="modal-body">
							<div class="flex w-full justify-center py-3">
								<i class="jsh-icon jsh-broken-circle-exclamation text-[100px] text-be-cyan-2"></i>
							</div>
							<div class="px-6 text-center font-body leading-snug text-be-blue-2">
								${g.A.t("ChileCompraModalText")}
							</div>
						</div>
						<div class="flex w-full justify-center p-6">${r.htmlTemplate()}</div>
					</div>
				</div>
		  `:(0,h.qy)``},ls=!1,cs="cug3-login-handler",la="dg-for-cug3-login-loader",ds=()=>{const[e,t]=(0,h.J0)(null);(0,h.vJ)(()=>{const s=window.newRtLoader(`.${la}`);s&&s.startLoader();const r=new URLSearchParams(window.location.search),l=r.get("session"),d=r.get("iv"),o=new FormData;o.append("session",l),d&&o.append("iv",d),fetch(`${window.JetSmart.Settings.BookingUrl}/${I.bw}`,{method:"POST",redirect:"follow",body:o,credentials:"include"}).then(a=>{if(!a.ok){t(`Error logging in: ${a.statusText}`);return}window.location.href="/changeLanguage?newCountryCode=cl&newLanguageCode=es"}).catch(a=>{t(`Error logging in: ${a?.message}`)}).finally(()=>{s&&(s.stopLoader(),s.destroy())})},[]);const n=e?(0,h.qy)`<div class="mt-4 text-red-500">${e}</div>`:"";return(0,h.qy)`<div class=${P()("min-h-svh",la)}>${n}</div>`},us=!1,ms="aa-login-handler",ca="dg-for-aa-login-loader",vs=()=>{const[e,t]=(0,h.J0)(null);(0,h.vJ)(()=>{const s=window.newRtLoader(`.${ca}`);s&&s.startLoader();const r=new URLSearchParams(window.location.search),l=r.get("token"),d=r.get("error_description");l||t("No token"),d&&t(d);const o=new FormData;o.append("token",l),fetch(`${window.JetSmart.Settings.BookingUrl}/${I.Nj}`,{method:"POST",redirect:"follow",body:o,credentials:"include"}).then(a=>{if(!a.ok){t(`Error logging in: ${a.statusText}`);return}window.location.href="/"}).catch(a=>{t(`Error logging in: ${a?.message}`)}).finally(()=>{s&&(s.stopLoader(),s.destroy())})},[]);const n=e?(0,h.qy)`<div class="mt-4 text-red-500">${e}</div>`:"";return(0,h.qy)`<div class=${P()("min-h-svh",ca)}>${n}</div>`},gs="ac-redemption-no-promo-code-modal",hs=!1,bs=["culture"],fs=e=>{const t={culture:e.culture},[n,s]=(0,T.J0)(!1),r=()=>{const a=ue._.RedemptionNoPromoCodeModalOpened.subscribe(({})=>{s(!0)});return()=>a.unsubscribe()};(0,T.xG)(r,[]);const l=()=>{s(!1),window.location.href=(0,bt.Q)(t.culture)},d=Te({isAction:!0,icon:(0,h.qy)`<i class="jsh-circle-chevron-right1 text-base"></i>`,label:g.A.t("Continuar"),onClick:l}),o=()=>(0,h.qy)`
		<div class="flex h-20 w-full items-center justify-start bg-brand-primary p-5 text-white">
			<i class="jsh-icon jsh-triangle-exclamation-thick mr-5 text-[36px]"></i>
			<span class="text-center text-[24px] font-bold">${g.A.t("Important")}!</span>
		</div>
	`;return n?(0,h.qy)`
				<div class="fixed inset-0 z-[100001] bg-n-blue bg-opacity-75 backdrop-blur-sm">
					<div
						class="absolute !w-[550px] max-w-[95%] overflow-hidden rounded-2xl bg-white all-center sm:w-auto"
						data-test-id="modal-content"
					>
						<div
							class="absolute right-3 top-3 z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-[rgba(51,84,109,0.7)] pb-0.5 pl-px text-[22px] font-semibold leading-none text-white sm:right-3 sm:top-3 sm:h-8 sm:w-8 sm:pl-px sm:text-[26px]"
							data-test-id="modal-close-button"
							@click=${()=>s(!n)}
						>
							&times;
						</div>
						${o()}
						<div class="modal-body">
							<div class="px-6 pt-5 text-center font-body leading-snug text-be-blue-2">
								${(0,N._)(g.A.t("RedemptionNoPromoModalText {{-reg}}",{reg:'<span class="relative font-body top-[-1px]">&reg;</span>'}))}
							</div>
						</div>
						<div class="flex w-full flex-col items-center p-6">
							${d.htmlTemplate()}
							<span
								class="text-medium md:text-medium mt-3 cursor-pointer select-none text-center text-n-blue underline hover:no-underline sm:text-base"
								@click=${()=>s(!n)}
							>
								${g.A.t("Choose another flight")}
							</span>
						</div>
					</div>
				</div>
		  `:(0,h.qy)``};function ps(){const e=(0,h.li)(Date.now()),t=(0,h.li)(0),[n,s]=(0,h.J0)(0),r=d=>{e.current=Date.now(),t.current=d,s(d)},l=()=>{const d=Math.floor(Date.now()-e.current),o=Math.max(t.current-d,0);s(o)};return(0,h.vJ)(()=>{const d=window.setInterval(l,1e3);return()=>window.clearInterval(d)},[]),(0,h.vJ)(()=>{const d=()=>{document.visibilityState==="visible"&&l()};return document.addEventListener("visibilitychange",d),()=>document.removeEventListener("visibilitychange",d)},[]),{isCountdownFinished:n===0,remainingSeconds:Math.floor(n/1e3%60),remainingMinutes:Math.floor(n/1e3/60),startCountdown:r}}var tt=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});se().extend(Re),se().extend(mn);const ys="ac-american-airlines-token-modal",xs=!1;let nt=null;const Ss=()=>{const[e]=Y("userInfo"),t=ps(),[n,s]=(0,T.J0)("default"),[r,l]=(0,T.J0)(!1),d=()=>tt(void 0,null,function*(){var M,R;if(!((M=e?.AmericanAirlines)!=null&&M.IsMember)||e?.RoleCode!==I.ch.AMERICAN_AIRLINES_USER)return;const z=(R=e?.AmericanAirlines)==null?void 0:R.TokenValidTo;if(!z){s("ended");return}v(z)}),o=M=>se().utc(M,"YYYY-MM-DD HH:mm:ss"),a=n!=="default"&&n!=="counting",i=n!=="ended"&&n!=="error",v=M=>{nt&&nt.terminate(),nt=new Worker("/web_workers/AmericanSessionCounterWorker.js"),nt.onmessage=z=>{z.data.type==="START_COUNTDOWN"&&(t.startCountdown(z.data.remainingTime),s("ending")),z.data.type==="SESSION_ENDED"&&(t.startCountdown(z.data.remainingTime),s("ended"))};const R=o(M).valueOf();nt.postMessage({targetTime:R}),s("counting")},x=()=>tt(void 0,null,function*(){const M=ut(),R=yield fetch(`${window.JetSmart.Settings.BookingUrl}${I.q4}`,{method:"GET",headers:M,mode:"cors",credentials:"include"});if(!R.ok){s("error");return}const z=yield R.json();l(!1),v(z.data)}),y=()=>tt(void 0,null,function*(){l(!0),yield x()}),w=()=>tt(void 0,null,function*(){try{yield(0,K.eB)(),window.location.href="/"}catch{window.location.replace("/")}}),O=Te({isAction:!0,icon:(0,h.qy)`<i class="jsh-circle-chevron-right1 text-base"></i>`,label:g.A.t("Session-RefreshButton"),isDisabled:r,onClick:y}),S=Te({isAction:!0,icon:(0,h.qy)`<i class="jsh-circle-chevron-right1 text-base"></i>`,label:g.A.t("Session-StartOverButton"),onClick:w});(0,h.vJ)(()=>tt(void 0,null,function*(){var M;t.isCountdownFinished&&a&&((M=e?.AmericanAirlines)!=null&&M.IsMember)&&(s("ended"),yield(0,K.eB)())}),[t.isCountdownFinished,a,e?.RoleCode]),(0,h.vJ)(d,[e?.RoleCode]);const p=()=>i?(0,h.qy)` <div>${g.A.t("Session-Warning2")}</div> `:"",u=()=>i?O.htmlTemplate():"",b=()=>n==="error"?(0,h.qy)` <div>${g.A.t("Ha ocurrido un error.")}</div> `:"",f=()=>n==="ended"?(0,h.qy)` <div>${g.A.t("Session-Expired")}</div> `:"",m=()=>i?"":S.htmlTemplate(),$=()=>{if(n==="error")return"";if(n==="ended")return(0,h.qy)` <span class="ml-2">(00:00)</span>`;const M=isNaN(t.remainingMinutes)?"00":t.remainingMinutes.toString().padStart(2,"0"),R=isNaN(t.remainingSeconds)?"00":t.remainingSeconds.toString().padStart(2,"0");return(0,h.qy)` <span class="ml-2">(${M}:${R})</span> `},C=()=>(0,h.qy)`
		<div
			class="flex items-center justify-start rounded-lg bg-[#def3f7] p-5 text-left text-[22px] font-black text-[#163a70]"
		>
			<i class="fas fa-exclamation-circle mr-5 text-[36px] text-[#59c3d9]"></i>
			${g.A.t("Session-Warning")} ${$()}
		</div>
	`;return a?(0,h.qy)`
				<div class="fixed inset-0 z-[100001] bg-n-blue bg-opacity-75 backdrop-blur-sm">
					<div class="absolute !w-[500px] max-w-[95%] overflow-hidden rounded-2xl bg-white p-3 all-center">
						${C()}
						<div class="p-5">
							${p()} ${f()}
							${b()}
							<div class="mt-[30px] flex w-full items-center justify-end">
								${u()} ${m()}
							</div>
						</div>
					</div>
				</div>
		  `:(0,h.qy)``},We=e=>({htmlTemplate:()=>(0,c.qy)`
		<div
			class=${P()("flex cursor-pointer flex-1 select-none flex-col items-center text-center justify-between rounded-lg border border-solid border-be-gray-9 p-3 text-sm/none text-n-blue","sm:text-base/none","md:hover:bg-gray-100",{"h-fit max-h-24":e.fitHeight,"min-h-[90px] sm:h-[106px]":!e.fitHeight})}
			@click=${e.onClick}
		>
			${e.content}
		</div>
	`}),ws=e=>{const[t,n]=(0,T.J0)(!1),[s]=e.culture.toLowerCase().split("-"),r=()=>{const M=`${e.bookingUrl}/V2/Login?culture=${e.culture}&url=${e.absoluteAction}`;window.location.href=M},l=()=>window.location.href=(0,bt.Q)(e.culture),d=()=>{const M=`${e.bookingUrl}/V2/Login?pcompra=1&culture=${e.culture}&url=${e.absoluteAction}`;window.location.href=M},o=()=>{const M=`${e.bookingUrl}/V2/Login?bancoe=1&culture=${e.culture}&url=${e.absoluteAction}`;window.location.href=M},a=()=>{const M=`${e.bookingUrl}/V2/Login?agency=1&culture=${e.culture}&url=${e.absoluteAction}`;window.location.href=M},i=()=>{const M=`${e.bookingUrl}/V2/Login?company=1&culture=${e.culture}&url=${e.absoluteAction}`;window.location.href=M},v=()=>{const M=`${e.bookingUrl}/Member/Register?culture=${e.culture}&url=${e.absoluteAction}`;window.location.href=M},x=We({content:(0,c.qy)` <i class="jsh-icon jsh-person mb-2 text-[40px]"></i> ${g.A.t("Personas")} `,onClick:r}),y=We({content:(0,c.qy)`
			<img class="mb-2 h-auto w-10 max-w-[25vw]" src="/images/banco-estado/be-only-logo.svg" />
			${g.A.t("Banco Estado")}
		`,onClick:o}),w=We({content:(0,c.qy)`
			<div class="flex h-10 items-center justify-center">
				<img class="mb-2 h-auto w-[100px] max-w-[25vw]" src="/images/american-airlines/aa-logo.png" />
			</div>
			${g.A.t("AAdvantage\xAE Program")}
		`,onClick:l}),O=We({content:(0,c.qy)`
			<img class="mb-2 h-10" src="/images/peru-compras/pcra-logo-black.svg" /> ${g.A.t("Peru Compras")}
		`,onClick:d}),S=We({content:(0,c.qy)`
			<img class="w-20 sm:w-24" src="/images/cug2/cug-logo-agency-${s.trim().toLowerCase()}.svg" />
		`,fitHeight:!0,onClick:a}),p=We({content:(0,c.qy)`
			<img class="w-20 sm:w-24" src="/images/cug2/cug-logo-company-${s.trim().toLowerCase()}.svg" />
		`,fitHeight:!0,onClick:i}),u=()=>(0,c.qy)`<div class="border-b border-solid border-be-gray-9"></div>`,b=()=>(0,c.qy)`
			<div
				class="absolute right-3 top-3 z-10 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-500 font-semibold leading-none text-white hover:bg-gray-600"
				@click=${()=>n(!1)}
			>
				&times;
			</div>
		`,f=()=>{var M;return(0,c.qy)`
		<div class=${P()("justify-center py-5 flex gap-4","sm:justify-between")}>
			${x.htmlTemplate()}
			${e.culture===I.qO&&e.dynamicSettings.IsBancoEstadoOn?y.htmlTemplate():""}
			${e.culture===I.eo&&e.dynamicSettings.IsPeruCompraOn?O.htmlTemplate():""}
			${(M=e.dynamicSettings)!=null&&M.IsAmericanOn?w.htmlTemplate():""}
		</div>
	`},m=()=>(0,c.qy)`
		<div class="flex items-center justify-between gap-4 pb-1 pt-5 sm:pb-3">
			${S.htmlTemplate()} ${p.htmlTemplate()}
		</div>
	`,$=()=>(0,c.qy)`
		<div class="mt-5 flex justify-center">
			<div
				class="w-[75%] cursor-pointer rounded-lg border border-solid border-be-gray-9 py-3 text-center text-n-blue hover:bg-gray-100"
				@click=${v}
			>
				${g.A.t("Inscr\xEDbete aqu\xED")}
			</div>
		</div>
	`;return{isOpen:t,close:()=>n(!1),htmlTemplate:()=>(0,c.qy)`
		<div
			class=${P()("fixed right-0 top-0 w-full h-full z-[111111] flex transform flex-col items-center gap-4 overflow-y-auto","bg-white text-n-blue text-left","transition-transform duration-300 ease-in-out","md:absolute md:top-[59px] lg:top-[90px] md:w-160 md:h-auto md:overflow-hidden md:border md:border-solid md:border-be-gray-9","md:common-transition",{"translate-x-0":t,"translate-x-full":!t,"md:my-0 md:left-auto md:right-0":t,"md:-right-160 md:m-0 md:translate-x-0":!t})}
		>
			<div class=${P()("relative p-4 w-full","sm:px-8 sm:py-4")}>
				${b()}
				<div class=${P()("text-lg mb-4 flex w-full font-extrabold text-n-blue","sm:text-xl")}>
					${g.A.t("Log in with your account as")}:
				</div>
				${u()} ${f()}
				<div class="text-l mb-4 flex w-full text-left font-extrabold text-n-blue sm:text-xl">
					${g.A.t("Or you can log in as a company or an agency")}:
				</div>
				${u()} ${m()}
				<div class=${P()("text-lg mb-4 font-extrabold text-n-blue","sm:text-xl")}>
					${g.A.t("\xBFNo tienes una cuenta?")}
				</div>
				${u()} ${$()}
			</div>
		</div>
	`,registerAccountClick:v,toggle:()=>n(!t)}},Cs=()=>{const[e]=Y("kontent.smartBenefits.smartBenefitsTest.contents"),t=i=>(0,c.qy)`
		<div class="grid grid-cols-1 grid-rows-3 rounded-xl border border-solid border-[#E0E0E0] bg-white shadow-md">
			<div
				class="h-full w-full bg-cover bg-center"
				style=${`background-image: url(${i.icon.urls[0]})`}
			></div>
			<div class="h-full w-full py-3">
				<div class="text-base font-bold text-n-blue">${(0,N._)(i.title.value)}</div>
				<div class="text-xs text-[#444444]">${(0,N._)(i.text.value)}</div>
			</div>
			<div class="flex h-full w-full items-center justify-center gap-x-2 border-t border-solid border-[#E0E0E0]">
				<span
					class="cursor-pointer text-lg/none font-medium text-n-cyan hover:text-n-blue"
					@click=${()=>window.location.href=i.url.value}
				>
					${i.linktext.value} <i class="jsh-chevron-right1 ml-2 text-base"></i>
				</span>
			</div>
		</div>
	`,n=i=>(0,c.qy)`
		<div class="h-full w-full rounded-xl border border-solid border-[#E0E0E0] bg-white p-2 shadow-sm">
			<div class="flex gap-2 pb-2">
				<div
					class="flex h-11 w-11 items-center justify-center rounded-full bg-[#F0F3F7] text-base/none text-n-blue"
				>
					${(0,N._)(i.icon.value)}
				</div>
				<div class="text-left">
					<div class="mb-1 font-bold text-n-blue">${(0,N._)(i.title.value)}</div>
					<div class="text-xs text-[#444444]">${(0,N._)(i.text.value)}</div>
				</div>
			</div>
			<div class="flex items-center justify-center gap-2 border-t border-solid border-[#E0E0E0] pt-2">
				<span
					class="cursor-pointer text-lg font-medium text-n-cyan hover:text-n-blue"
					@click=${()=>window.location.href=i.url.value}
				>
					${i.linktext.value} <i class="jsh-chevron-right1 ml-2 text-base"></i>
				</span>
			</div>
		</div>
	`,s=i=>(0,c.qy)`
		<div class="mb-4 w-full text-left text-lg font-medium text-n-blue">${(0,N._)(i)}</div>
	`,r=i=>(0,c.qy)`
		<div
			class="relative row-span-2 flex items-center justify-center overflow-hidden rounded-xl bg-n-blue text-white"
		>
			<div class="relative flex h-full w-full flex-col items-center justify-center text-white">
				<img class="h-auto w-[90%]" src=${i.icon.urls[0]} />
				<div class="mb-8 mt-3 font-body text-base/5">${(0,N._)(i.title.value)}</div>
				<div class="mb-4 font-body text-lg/5 font-black">${(0,N._)(i.text.value)}</div>
				<a
					class="flex items-center font-body text-lg/none text-white hover:text-n-cyan"
					href=${i.url.value}
				>
					${(0,N._)(i.linktext.value)} <i class="jsh-chevron-right1 ml-2 text-base"></i>
				</a>
			</div>
		</div>
	`,l=i=>{const v=[e.widget[0]],x=[e.widget[1],e.widget[2],e.widget[3],e.widget[4]];return(0,c.qy)`
			<div>
				${s(i.title.value)}
				<div
					class="grid h-[330px] grid-rows-2 gap-4"
					style=${`grid-template-columns: ${2*v.length}fr repeat(${x.length/2}, 1fr)`}
				>
					${v.map(r)} ${x.map(t)}
				</div>
			</div>
		`},d=i=>{const v=[e.widget[5],e.widget[6],e.widget[7]];return(0,c.qy)`
			<div>
				${s(i.title.value)}
				<div
					class="grid h-[330px] grid-rows-3 gap-4"
					style=${`grid-template-columns: repeat(${v.length/3}, minmax(0, 1fr))`}
				>
					${v.map(n)}
				</div>
			</div>
		`},o=(i,v)=>v===0?l(i):d(i);return{htmlTemplate:()=>e?(0,c.qy)`
					<div class="container">
						<div class="my-6 w-full text-left font-emphasis text-xl text-n-blue">
							${(0,N._)(e.sectionTitle.value)}
						</div>
						<div class="grid w-full grid-cols-[3fr_1fr] gap-6">
							${e.subsection.map(o)}
						</div>
					</div>
			  `:""}},$s=()=>{const[e]=Y("kontent.smartBenefits.smartBenefitsTest.contents"),[t,n]=(0,T.J0)(!1),s=a=>(0,c.qy)`
		<div class="h-full w-full overflow-hidden rounded-lg border border-solid border-white px-4 py-2 text-white">
			<div class="text-center text-base font-bold">${(0,N._)(a.text.value)}</div>
			<div class="flex items-center justify-center gap-2 pt-2 text-lg font-medium">
				<span class="text-base" @click=${()=>window.location.href=a.url.value}>
					${a.linktext.value}
				</span>
				<div
					class="h-[10px] w-[10px] rotate-45 transform border-r-2 border-t-2 border-solid border-white"
				></div>
			</div>
		</div>
	`,r=()=>{const a=[e.widget[0]];return(0,c.qy)` <div class="flex h-full gap-4 p-4">${a.map(s)}</div> `},l=a=>{var i,v,x;const y=((i=a.titlemobile)==null?void 0:i.value)||((v=a.title)==null?void 0:v.value)||"MISSING",w=((x=a.iconmobile)==null?void 0:x.value)||a.icon.value||"MISSING";return(0,c.qy)`
			<div class="flex items-center gap-x-2" @click=${()=>window.location.href=a.url.value}>
				<div
					class="flex h-7 w-7 items-center justify-center gap-2 rounded-full bg-[#F0F3F7] text-xs text-n-blue"
				>
					${(0,N._)(w)}
				</div>
				<div class="text-sm text-n-blue">${(0,N._)(y)}</div>
			</div>
		`},d=()=>(0,c.qy)`
		<div class="flex gap-2 text-white">
			<span class="text-lg/none">${(0,N._)(e.widget[0].iconmobile.value)}</span
			><span class="text-base/none font-bold">${(0,N._)(e.widget[0].titlemobile.value)}</span>
		</div>
	`;return{htmlTemplate:()=>e?(0,c.qy)`
					<div class="flex flex-col items-start gap-2 px-1">
						<dc-accordion
							class="w-full rounded-lg bg-n-blue p-2 text-white"
							.contentTemplate=${r}
							.headerIconClass=${"border-t-white"}
							.headerTitle=${d()}
							.hideBorder=${!0}
							.isOpen=${t}
							.onClick=${()=>n(!t)}
						></dc-accordion>
						${e.widget.slice(1).map(l)}
					</div>
			  `:""}},Ts=()=>{const[e]=Y("kontent.myBooking.myBookingTest.contents"),t=s=>(0,c.qy)`
		<div class="flex items-center gap-2">
			<div class="flex h-7 w-7 items-center justify-center rounded-full bg-[F0F3F7] text-xs/none text-n-blue">
				${(0,N._)(s.icon.value)}
			</div>
			<div class="text-sm text-n-blue" @click=${()=>window.location.href=s.url.value}>
				${(0,N._)(s.title.value)}
			</div>
		</div>
	`;return{htmlTemplate:()=>e?(0,c.qy)`
					<div class="flex w-full flex-col items-start gap-2 px-1">
						${e.widget.map(t)} ${e.subwidget.map(t)}
					</div>
			  `:""}},Ds=()=>{const[e]=Y("kontent.dealsAndDestinations.dealsAndDestinationTest.contents"),t=(r,l)=>(0,c.qy)`
		<a class="mb-2 flex h-[26px] items-center gap-2 last:mb-0" href=${l}>
			<div class="h-1.5 w-1.5 rounded-full bg-n-blue"></div>
			<span> ${(0,N._)(r)} </span>
		</a>
	`,n=()=>e.widget.filter(r=>r.mobiletitle.value).map(r=>t(r.mobiletitle.value,r.mobilelink.value));return{htmlTemplate:()=>e?(0,c.qy)`
					<div class="flex w-full flex-col items-center px-1">
						<div
							class="my-2 flex h-[37px] w-full items-center justify-center gap-x-1 rounded-lg bg-n-cyan text-center text-white shadow-md"
						>
							<span class="text-base/none"> ${(0,N._)(e.topbarIconFontawesome.value)} </span>
							<span class="text-[13px]/none"> ${(0,N._)(e.topbarTitle.value)} </span>
							<span class="text-xs/none font-black italic">
								${(0,N._)(e.topbarSubtitleMobile.value)}
							</span>
						</div>
						<div class="flex w-full items-center justify-between gap-4 px-1 text-sm text-n-blue">
							<div>
								${n()}
								${e.subwidget.map(r=>t(r.title.value,r.link.value))}
							</div>
							<img class="max-h-[177px] w-auto" src=${e.map[1].img.urls[0]} />
						</div>
					</div>
			  `:""}},Ms=()=>{const[e]=Y("kontent.travelInformation.travelInformationPersonas.contents"),[t]=Y("kontent.travelInformation.travelInformationCorp.contents"),[n,s]=(0,T.J0)(void 0),[r,l]=(0,T.J0)("people"),d=m=>{s(n===m?void 0:m)},o=(m,$)=>{m.preventDefault(),m.stopPropagation(),l($)},a=m=>(0,c.qy)`
		<li class="flex items-center gap-x-2">
			<div class="flex h-7 w-7 items-center justify-center rounded-full bg-[#F0F3F7] text-[13px] text-n-blue">
				${(0,N._)(m.itemIcon.value)}
			</div>
			<div class="text-sm text-n-blue">${(0,N._)(m.itemContent.value)}</div>
		</li>
	`,i=(m,$)=>(0,c.qy)`
		<span class="inline-flex items-center text-sm font-black">${m}.&nbsp;${(0,N._)($)}</span>
	`,v=(m,$,C)=>(0,c.qy)`
		<div
			class="flex h-[52px] items-center justify-between rounded-lg border border-solid border-[#E0E0E0] bg-[#F7F7F7] px-3"
			@click=${()=>window.location.href=C}
		>
			<div class="flex items-center gap-x-2">
				<div class="flex h-7 w-7 items-center justify-center rounded-full bg-n-blue text-[13px] text-white">
					${(0,N._)(m)}
				</div>
				<div class="text-sm text-n-blue">${(0,N._)($)}</div>
			</div>
			<div class="h-[10px] w-[10px] rotate-45 transform border-r-2 border-t-2 border-solid border-n-blue"></div>
		</div>
	`,x=m=>(0,c.qy)`
		<div class="grid w-full grid-cols-2 gap-2">
			${m.map($=>v($.icon.value,$.mobiletitle.value,$.mobileurl.value))}
		</div>
	`,y=m=>(0,c.qy)`
		<ul class="flex w-full flex-col gap-2">
			${m.modules.contents.map(a)}
		</ul>
	`,w=(m,$)=>(0,c.qy)`
		<dc-accordion
			class="w-full py-4"
			.contentTemplate=${()=>y(m)}
			.headerTitle=${i($+1,m.title.value)}
			.isOpen=${m.title.value===n}
			.onClick=${()=>d(m.title.value)}
		></dc-accordion>
	`,O=m=>(0,c.qy)`
		<div class="flex w-full flex-col">${m.map(w)}</div>
	`,S=()=>r==="people"?(0,c.qy)` ${x(e.widget)} ${O(e.subsection)} `:"",p=()=>r==="corporate-portal"?(0,c.qy)` ${x(t.widget)} ${O(t.subsection)} `:"",u=(m,$)=>(0,c.qy)`
		<div
			class=${P()("p-2 rounded-lg basis-1/2 cursor-pointer text-center",{"bg-n-blue text-white font-bold":r===m,"bg-gray-300 text-gray-500 font-normal":r!==m})}
			@click=${C=>o(C,m)}
		>
			${(0,N._)($)}
		</div>
	`,b=()=>(0,c.qy)`
		<div class=${P()("flex w-full gap-1 rounded-xl bg-gray-100 p-1")}>
			${u("people",e.sectionTitle.value)}
			${u("corporate-portal",t.sectionTitle.value)}
		</div>
	`;return{htmlTemplate:()=>e&&t?(0,c.qy)`
					<div class="flex w-full flex-col items-center gap-4 px-1">
						${b()} ${S()} ${p()}
					</div>
			  `:""}},Os=()=>{const[e]=Y("kontent.myBooking.myBookingTest.contents"),t=r=>(0,c.qy)`
		<div
			class="flex flex-col items-center justify-center gap-2 rounded-xl border border-solid border-[#E0E0E0] bg-white p-4 shadow-sm"
		>
			<div class="flex h-9 w-9 items-center justify-center rounded-md bg-n-cyan text-xl/none text-white">
				${(0,N._)(r.icon.value)}
			</div>
			<div class="flex flex-col justify-center gap-1">
				<div class="text-xl font-bold text-n-blue">${(0,N._)(r.title.value)}</div>
				<div class="text-sm">${(0,N._)(r.text.value)}</div>
			</div>
			<div
				class="flex w-full cursor-pointer items-center justify-center gap-2 border-t border-solid border-[#E0E0E0] pt-4 text-lg font-medium text-n-cyan hover:text-n-blue"
				@click=${()=>window.location.href=r.url.value}
			>
				<span>${(0,N._)(r.button.value)}</span>
				<div class="h-[10px] w-[10px] rotate-45 transform border-r-2 border-t-2 border-solid"></div>
			</div>
		</div>
	`,n=r=>(0,c.qy)`
		<div class="flex flex-col gap-4 p-4">
			<div class="flex items-center gap-2">
				<div
					class="flex h-11 w-11 items-center justify-center rounded-full bg-[#F0F3F7] text-base/none text-n-blue"
				>
					${(0,N._)(r.icon.value)}
				</div>
				<div class="text-n-blue">${(0,N._)(r.title.value)}</div>
			</div>
			<div class="text-left text-xs">${(0,N._)(r.text.value)}</div>
			<div
				class="cursor-pointer text-left text-n-cyan underline underline-offset-4 hover:text-n-blue"
				@click=${()=>window.location.href=r.url.value}
			>
				${(0,N._)(r.linktext.value)}
			</div>
		</div>
	`;return{htmlTemplate:()=>e?(0,c.qy)`
					<div class="container flex flex-col items-center gap-6 p-6">
						<div class="w-full text-left font-emphasis text-xl text-n-blue">
							${g.A.t("Administra tu reserva")}
						</div>
						<div
							class="inline-grid gap-8"
							style=${`grid-template-columns: repeat(${e.widget.length}, minmax(0, 1fr))`}
						>
							${e.widget.map(t)}
						</div>
						<div
							class="inline-grid gap-8"
							style=${`grid-template-columns: repeat(${e.subwidget.length}, minmax(0, 1fr))`}
						>
							${e.subwidget.map(n)}
						</div>
					</div>
			  `:""}},be=12,Ps=e=>{const[t]=Y("userInfo"),[n]=Y("kontent.dealsAndDestinations.dealsAndDestinationTest.contents"),[s]=Y("countries"),r=A=>A.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").toLowerCase(),l=A=>{const j=e.culture.split("-")[0],U=r(x(A.name,!1));return new Map([["es",`https://jetsmart.com/ofertas/${e.culture}/vuelos-a-${U}`],["pt",`https://jetsmart.com/ofertas/${e.culture}/voos-para-${U}`],["en",`https://jetsmart.com/ofertas/${e.culture}/flights-to-${U}`]]).get(j)},d=A=>{const j=e.culture.split("-")[0],U=r(A.name);return new Map([["es",`https://jetsmart.com/ofertas/${e.culture}/vuelos-a-${U}`],["pt",`https://jetsmart.com/ofertas/${e.culture}/voos-para-${U}`],["en",`https://jetsmart.com/ofertas/${e.culture}/flights-to-${U}`]]).get(j)},o=A=>{const j=e.culture.split("-")[0],U=r(A.name);return new Map([["es",`https://jetsmart.com/ofertas/${e.culture}/vuelos-nacionales-${U}`],["pt",`https://jetsmart.com/ofertas/${e.culture}/voos-nacionales-${U}`],["en",`https://jetsmart.com/ofertas/${e.culture}/domestic-flights-${U}`]]).get(j)},a=()=>e.culture.split("-")[1],i=(0,T.Kr)(()=>s?.find(A=>A.code.toLowerCase()===a().toLowerCase()),[s,e.culture]),v=(0,T.Kr)(()=>s?.filter(A=>A.code.toLowerCase()!==a().toLowerCase()&&A.cities.length).sort((A,j)=>j.cities.length-A.cities.length)||[],[s,e.culture]),x=(A,j)=>{const U=A.indexOf("de ");return U>-1&&j?A.substring(0,U).trim():A.trim()},y=A=>[...A].sort((j,U)=>j.name.localeCompare(U.name)),w=(A,j,U)=>(0,c.qy)`
		<a
			class=${P()("flex h-[16] items-center whitespace-nowrap text-n-blue","hover:text-n-cyan","lg:h-[18px]",{"md:cursor-pointer":j,"gap-x-2 text-sm/none font-bold":U,"lg:text-base/none":U,"pl-4 text-xs/none":!U,"lg:text-sm/none":!U})}
			href=${j}
		>
			${U?(0,c.qy)`<div class="h-2 w-2 rounded-full bg-n-blue"></div>`:""}
			<span>${A||(0,c.qy)`&nbsp;`}</span>
		</a>
	`,O=A=>{const j=d(A),U=[w(A.name,j,!0)],te=y(A.cities).map(Q=>w(x(Q.name,!0),l(Q),!1));return U.concat(te)},S=()=>w("","",!1),p=A=>Array.from({length:A},S),u=(A,j)=>A.find(U=>U.cities.length+1<=j),b=(A,j)=>{if(!A.length)return j;const U=A.shift();j.push(...O(U));let te=(be-j.length%be)%be-1,Q=u(A,te);for(;Q;)j.push(S()),A.splice(A.indexOf(Q),1),j.push(...O(Q)),te=(be-j.length%be)%be-1,Q=u(A,te);const G=(be-j.length%be)%be;return j.push(...p(G)),b(A,j)},f=(0,T.Kr)(()=>{const A=(0,K.o8)(v);return b(A,[])},[v,be]),m=A=>(0,c.qy)`
		<div class="max-w-[310px]">
			<div class="mb-2 flex items-center gap-2">
				<div class="flex h-11 w-11 items-center justify-center rounded-full bg-[#F0F3F7] text-base text-n-blue">
					${(0,N._)(A.iconfontawesome.value)}
				</div>
				<div
					class="cursor-pointer text-base/none text-n-blue hover:text-n-cyan"
					@click=${()=>window.location.href=A.link.value}
				>
					${(0,N._)(A.title.value)}
				</div>
			</div>
			<div class="text-xs text-[#444444]">${(0,N._)(A.text.value)}</div>
		</div>
	`,$=()=>{const A=(0,K.IQ)(n.topbarColor.value);return(0,c.qy)`
			<div
				style=${`background-color: ${A};`}
				class="my-2 flex h-[45px] w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg py-1 text-center text-white"
			>
				<span class="text-2xl/none lg:text-[32px]/none">
					${(0,N._)(n.topbarIconFontawesome.value)}
				</span>
				<span class="text-xl/none font-bold lg:text-[30px]/none">
					${(0,N._)(n.topbarTitle.value)}
				</span>
				<span class="text-base/none font-bold italic lg:text-xl/none">
					${(0,N._)(n.topbarSubtitle.value)}
				</span>
				<span class="text-base/none lg:text-[22px]/none"> ${(0,N._)(n.topbarText.value)} </span>
			</div>
		`},C=()=>i?(0,c.qy)`
					<div>
						<div class="mb-1 text-left font-bold text-n-blue">
							${(0,N._)(n.map[0].title.value)}
						</div>
						<div class="grid grid-cols-[120px_auto] gap-3 xl:grid-cols-[150px_auto] xl:gap-4">
							<img class="max-h-[200px] w-auto" src=${n.map[0].img.urls[0]} />
							<div class="flex flex-col gap-2">
								${w(i.name,o(i),!0)}
								<div
									class=${P()("grid text-left items-start",{"grid-cols-[auto_auto] gap-x-2":i.cities.length>10})}
								>
									${i.cities.sort((A,j)=>A.name.localeCompare(j.name)).map(A=>w(x(A.name,!0),l(A),!1))}
								</div>
							</div>
						</div>
					</div>
			  `:"",M=()=>{const A=Math.ceil(f.length/be);return Array.from({length:A},(j,U)=>{const te=U*be,Q=U===A-1?void 0:te+be;return(0,c.qy)`<div>${f.slice(te,Q)}</div>`})},R=()=>{var A,j,U;return!((A=t?.ChileCompra)!=null&&A.IsMember)&&!((j=t?.PeruCompra)!=null&&j.IsAdmin)&&!((U=t?.PeruCompra)!=null&&U.IsMember)?(0,c.qy)`
					<div>
						<div class="mb-1 text-left font-bold text-n-blue">
							${(0,N._)(n.map[1].title.value)}
						</div>
						<div class="grid grid-cols-[120px_auto] gap-3 xl:grid-cols-[150px_auto] xl:gap-4">
							<div>
								<img class="max-h-[200px] w-auto" src=${n.map[1].img.urls[0]} />
							</div>
							<div
								class="grid gap-x-2 text-left"
								style=${`grid-template-columns: repeat(${Math.ceil(f.length/be)}, auto)`}
							>
								${M()}
							</div>
						</div>
					</div>
			  `:""},z=()=>(0,c.qy)`
		<div
			class="my-4 flex flex-col justify-center text-wrap text-left font-emphasis text-3xl text-n-blue lg:text-4xl"
		>
			${(0,N._)(n.sectionTitle.value)}
		</div>
	`;return{htmlTemplate:()=>n&&s?.length?(0,c.qy)`
					<div class="container">
						${$()} ${z()}
						<div class="mb-6 grid grid-cols-[1fr_3fr] gap-4">
							${C()} ${R()}
						</div>
						<div
							class="inline-grid gap-8 text-left"
							style=${`grid-template-columns: repeat(${n.subwidget.length}, 1fr)`}
						>
							${n.subwidget.map(m)}
						</div>
					</div>
			  `:""}},As=()=>{const[e]=Y("kontent.travelInformation.travelInformationPersonas.contents"),[t]=Y("kontent.travelInformation.travelInformationCorp.contents"),[n,s]=(0,T.J0)("people"),r=(w,O)=>(0,c.qy)`
		<div
			class=${P()("text-xl rounded-lg px-4 py-3 basis-1/2 cursor-pointer text-center",{"bg-n-blue text-white font-bold":n===w,"bg-gray-300 text-gray-500 font-normal":n!==w})}
			@click=${()=>s(w)}
		>
			${(0,N._)(O)}
		</div>
	`,l=()=>(0,c.qy)`
		<div class=${P()("flex w-full rounded-xl bg-gray-100 gap-4 px-2 py-4")}>
			${r("people",e.sectionTitle.value)}
			${r("corporate-portal",t.sectionTitle.value)}
		</div>
	`,d=(w,O)=>(0,c.qy)`
			<li class="flex items-center gap-x-2">
				<div class="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0F3F7] text-[13px] text-n-blue">
					${(0,N._)(w)}
				</div>
				<div class="text-base text-n-blue">${(0,N._)(O)}</div>
			</li>
		`,o=w=>(0,c.qy)`
		<div>
			<div class="mb-2 text-xl/none font-bold text-n-blue">${(0,N._)(w.title.value)}</div>
			<ul class="flex flex-col gap-y-3">
				${w.modules.contents.map(O=>d(O.itemIcon.value,O.itemContent.value))}
			</ul>
		</div>
	`,a=w=>(0,c.qy)`
		<div
			class="h-full w-full rounded-xl bg-cover bg-center"
			style=${`background-image: url(${w.banner.urls[0]})`}
		>
			${(0,N._)(w.value)}
		</div>
	`,i=w=>(0,c.qy)`
		<div class="flex h-[330px] w-full gap-x-8">
			<div
				class="grid gap-y-2.5"
				style=${`grid-template-columns: repeat(${Math.ceil(w.widget.length/2)}, minmax(0, 1fr))`}
			>
				${w.widget.map(a)}
			</div>
			<div
				class="grid w-full gap-x-8"
				style=${`grid-template-columns: repeat(${w.subsection.length}, minmax(0, 1fr))`}
			>
				${w.subsection.map(o)}
			</div>
		</div>
	`,v=()=>n==="people"?i(e):"",x=()=>n==="corporate-portal"?i(t):"";return{htmlTemplate:()=>e&&t?(0,c.qy)`
					<div class="container flex h-full w-full flex-col items-center gap-6 py-8 text-left">
						${l()} ${v()} ${x()}
					</div>
			  `:""}},_s=e=>{const[t]=Y("kontent"),[n,s]=(0,T.J0)(void 0),r=Ps({culture:e.culture}),l=Ds(),d=Os(),o=Ts(),a=Cs(),i=$s(),v=As(),x=Ms(),y=[{id:"offers-and-destinations",title:t?.dealsAndDestinations.dealsAndDestinationTest.contents.headerTitle.value,content:r.htmlTemplate,mobileContent:l.htmlTemplate},{id:"my-booking",title:t?.myBooking.myBookingTest.contents.headerTitle.value,content:d.htmlTemplate,mobileContent:o.htmlTemplate},{id:"benefits",title:t?.smartBenefits.smartBenefitsTest.contents.headerTitle.value,content:a.htmlTemplate,mobileContent:i.htmlTemplate},{id:"travel-information",title:t?.travelInformation.travelInformationPersonas.contents.headerTitle.value,content:v.htmlTemplate,mobileContent:x.htmlTemplate}],w=()=>y.map(S=>(0,c.qy)`
				<div
					class=${P()("absolute inset-0 w-full h-full transition-all duration-250 ease-in-out flex origin-top-center justify-center",{"opacity-100 scale-100 z-10 pointer-events-auto":n===S.id,"opacity-0 scale-75 -z-10 pointer-events-none":n!==S.id})}
				>
					${S.content()}
				</div>
			`);return{activeId:n,dropdownMenus:y,closeMenu:()=>s(void 0),htmlTemplate:()=>(0,c.qy)`
		<div
			class=${P()("tw-hidden z-[99999] w-full h-[500px] justify-center bg-white shadow-xl transform duration-250 ease-in-out transition-[opacity,max-height] origin-top-center overflow-hidden","md:flex",{"opacity-0 pointer-events-none max-h-0":!n||e.isCollapsed,"opacity-100":n&&!e.isCollapsed})}
		>
			${w()}
		</div>
	`,openMenu:s,toggleMenuItem:S=>s(n===S?void 0:S)}};function qe(e){const t=document.createElement("textarea");t.innerHTML=e;const n=t.value.trim();return Is(n)}function da(e){const t=document.createElement("textarea");return t.innerHTML=e,t.value.trim()}function Is(e){return e.replace(/[^a-zA-Z0-9]+/g," ").replace(/\w+/g,(t,n)=>n>0?t.charAt(0).toUpperCase()+t.slice(1).toLowerCase():t.toLowerCase()).replace(/\s+/g,"")}function jt(e,t){var n,s,r,l,d;const o={};for(const a of e){const i=qe(a.name),v=i.match(/^([a-zA-Z_]+?)(\d+)(.*)$/);if(v&&t){const[,x,y,w]=v,O=qe(x),S=parseInt(y,10)-1;for((n=o[O])!=null||(o[O]=[]);o[O].length<=S;)o[O].push({});const p=o[O][S];if(w){const u=qe(w);p[u]={}}(s=a.contents)!=null&&s.length&&(p.contents=qt(a.contents))}else if(t){const x={};(r=a.contents)!=null&&r.length&&(x.contents=qt(a.contents)),o[i]=x}else if((l=a.contents)!=null&&l.length){const x=qt(a.contents);(d=o.contents)!=null||(o.contents=[]),o.contents.push(x)}}return o}function qt(e){var t,n,s;const r={};for(const l of e){const d=qe(l.name),o=d.match(/^([a-zA-Z_]+?)(\d+)(.*)$/);if(o){const[,a,i,v]=o,x=qe(a),y=parseInt(i,10)-1;for((t=r[x])!=null||(r[x]=[]);r[x].length<=y;)r[x].push({});const w=r[x][y];if(v){const O=qe(v);w[O]=Nt(l)}else Object.assign(w,Nt(l));(n=l.modules)!=null&&n.length&&(w.modules=jt(l.modules,!1))}else{const a=Nt(l);(s=l.modules)!=null&&s.length&&(a.modules=jt(l.modules,!1)),r[d]=a}}return r}function Nt(e){const t={};return e.value!==void 0&&(t.value=da(e.value)),e.urls!==void 0&&(t.urls=e.urls.map(n=>da(n))),t}function ks(e){const t={};for(const n of e){const s=qe(n.name);t[s]=jt(n.modules,!0)}return t}const ua=e=>ks(e),Es=e=>{var t;return{AmericanAirlines:e.type==="AmericanAirlinesInfo"?{AdvantageNumber:e.advantageNumber,EligibleForRedemption:!0,IsMember:!0,Miles:e.miles,Tier:e.tier,TokenValidTo:e.tokenValidTo}:void 0,BancoEstado:e.type==="BancoEstadoInfo"?{Category:e.category,FreeSeats:e.freeSeats}:void 0,Cug2:e.type==="Cug2Info"?{IsAgency:e.isAgency,IsCompany:e.isCompany}:void 0,ChileCompra:e.type==="ChileCompraInfo"?{IsMember:e.isMember}:void 0,Dc:e.type==="DiscountClubInfo"?{IsGroupMember:e.isGroupMember,IsStandardMember:e.isStandardMember}:void 0,PeruCompra:e.type==="PeruCompraInfo"?{Amount:e.formattedAmount,IsAdmin:e.isAdmin,IsMember:e.isMember}:void 0,Name:e.name?{FirstName:e.name.firstName,LastName:e.name.lastName}:void 0,OrganizationName:e.organizationName,ProgramCodesWithLevels:(t=e.programCodesWithLevels)==null?void 0:t.map(n=>({ProgramCode:n.programCode,ProgramLevel:n.programLevel})),RoleCode:e.roleCode||I.ch.WEB_ANONYMOUS}};var Ne=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const Ls=e=>{const{logEvent:t}=(0,et.U)(),[n,s]=Y("userInfo"),[r,l]=Y("kontent"),[d,o]=Y("captchaStatus"),a=f=>f==="PECG"?"gestor":f==="PECD"?"delegado":"none",i=()=>Ne(void 0,null,function*(){const $={options:{method:"GET",credentials:"include",mode:"cors"},url:"/api/UserData/UserInfo"};try{const C=yield fetch($.url,$.options);if(C.ok&&C.status===200){const M=yield C.json();return Es(M)}return{RoleCode:I.ch.WEB_ANONYMOUS}}catch(C){return ct.error(C),{RoleCode:I.ch.WEB_ANONYMOUS}}}),v=()=>Ne(void 0,null,function*(){const $={options:{method:"GET",credentials:"include",mode:"cors"},url:"/api/UserData/LoginInfo"};try{const C=yield fetch($.url,$.options);return C.ok?yield C.json():void 0}catch(C){ct.error(C);return}}),x=()=>Ne(void 0,null,function*(){const $={options:{method:"GET",credentials:"include",mode:"cors"},url:"/api/UserData/DeviceId"};try{const C=yield fetch($.url,$.options);return C.ok?(yield C.json()).Id:void 0}catch(C){ct.error(C);return}}),y=f=>Ne(void 0,null,function*(){var m;if(f?.tealium&&t(f.tealium.action.toLowerCase()==="login"?"user_login":"user_register",{loginInfo:f}),f?.chileCompra){e.closeMobileMenu(),ue._.ChileCompraLoginInfoModalOpened.publish({});return}if(f?.peruCompra){e.closeMobileMenu(),ue._.PcraLoginInfoModalOpened.publish({modalType:a((m=f?.tealium)==null?void 0:m.userRole)});return}try{yield(0,K.FZ)()}catch($){console.error("Could not delete login info",$)}}),w=f=>{var m;((m=f?.BancoEstado)==null?void 0:m.Category)>0&&S(),s(f),window.UserInfo=f},O=()=>Ne(void 0,null,function*(){try{const f=yield x();if(f)if(window.amplitude&&typeof window.amplitude.setDeviceId=="function")window.amplitude.setDeviceId(f);else{const m=window.setInterval(()=>{var C,M;(M=(C=window.amplitude)==null?void 0:C.getInstance())!=null&&M._isInitialized&&typeof window.amplitude.setDeviceId=="function"&&(window.clearInterval(m),window.clearTimeout($),window.amplitude.setDeviceId(f))},100),$=window.setTimeout(()=>{window.clearInterval(m),console.error("Could not access Amplitude.")},1e4)}}catch{console.error("Unknown Amplitude/Tealium cookie problem.")}}),S=()=>{const f=window.location.href.split("/");if(f.length<5){window.location.href="/cl/es";return}const m=3,$=4;if(f[m].toLowerCase()!=="cl"||f[$].toLowerCase()!=="es"){f[m]="cl",f[$]="es";const C=f.join("/");window.location.href=C}},p=()=>Ne(void 0,null,function*(){const $={options:{method:"GET",credentials:"include",mode:"cors"},url:"/GetKenticoNewHome"};try{const C=yield fetch($.url,$.options);if(C.ok){const M=yield C.json();l(ua(M)),console.log("KONTENT raw",M),console.log("KONTENT digested",ua(M))}}catch(C){ct.error(C)}}),u=()=>{const f=window.setTimeout(()=>{window.clearInterval(m),o("error")},3e3),m=window.setInterval(()=>{grecaptcha!=null&&grecaptcha.render&&(o("loaded"),window.clearInterval(m),window.clearTimeout(f))},100)};return{init:()=>Ne(void 0,null,function*(){u(),yield p();const f=yield i();w(f);const m=yield v();yield y(m),yield O()})}};let Ft=!1,St=0,at=0;const Rs=e=>{const[t,n]=(0,T.J0)(!1),s=()=>{const d=window.scrollY;Math.abs(at-d)<0||(d>at&&d>St*4?n(!0):(d<at&&d>=St*4||d<at&&d<St*4||d===0)&&n(!1),at=d)},r=()=>{var d;window.addEventListener("scroll",()=>{Ft=!0,e.onScroll()},!1),window.setInterval(()=>{Ft&&(s(),Ft=!1)},125),St=((d=e.navbarElement)==null?void 0:d.getBoundingClientRect().height)||0,document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(a){a.preventDefault(),window.setTimeout(()=>n(!0),1e3),document.querySelector(o.getAttribute("href")).scrollIntoView({behavior:"smooth"})})})};(0,h.vJ)(r,[]);const l=()=>{const d=ue._.MobileSearchboxModalOpened.subscribe(()=>n(!0)),o=ue._.MobileSearchboxModalClosed.subscribe(()=>s());return()=>{d.unsubscribe(),o.unsubscribe()}};return(0,T.fO)(l,[]),{isCollapsed:t}},wt=(e,t)=>e?.trim().toLowerCase()===t?.trim().toLowerCase(),ma=(e,t)=>{var n,s;return((s=(n=e?.Cultures)==null?void 0:n.find(r=>wt(r.Main,t)))==null?void 0:s.SubCultures)||[]},js=(e,t)=>{const n=ma(e,t);return e?.AllCultures.filter(s=>!n.some(r=>wt(r,s)))||[]},va=(e,t)=>t.map(n=>ga(e,n)).filter(n=>n),qs=(e,t,n)=>va(t,ma(e,n)),Ns=(e,t,n)=>va(t,js(e,n)).sort((s,r)=>s.name.toLowerCase()<r.name.toLowerCase()?-1:1),ga=(e,t)=>e.find(n=>wt(n.culture,t)),Fs=(e,t)=>!e?.Cultures.some(n=>n.IsDisabled&&wt(n.Main,t)),Bs=(e,t,n)=>{if(!e)return t;const s=qs(e,t,n),r=Ns(e,t,n);return[...s,...r]},ha=e=>{const[t]=Y("navitaireSettings"),[n]=Y("userInfo"),s=(0,h.li)(void 0),[r,l]=(0,T.J0)(!1),d=(0,T.Kr)(()=>{const u=e.dynamicSettings.DynamicCultureNameSettings||[],[b]=e.culture.toLowerCase().split("-");return u.map(m=>{const $=b==="es"?m?.Es:b==="en"?m?.En:m?.Pt;return{culture:m?.Culture,name:$||""}}).filter(m=>Fs(t?.cultureSettings,m.culture))},[t?.cultureSettings]),o=(0,T.Kr)(()=>Bs(t?.cultureSettings,d,e.culture),[d,e.culture,t?.cultureSettings]),a=(0,T.Kr)(()=>{var u,b,f,m,$,C;return((b=(u=t?.cultureSettings)==null?void 0:u.Cultures)==null?void 0:b.length)&&!((f=n?.BancoEstado)!=null&&f.Category)&&!((m=n?.ChileCompra)!=null&&m.IsMember)&&!(($=n?.PeruCompra)!=null&&$.IsAdmin)&&!((C=n?.PeruCompra)!=null&&C.IsMember)},[t,n]),i=()=>{a&&(r?l(!1):(l(!0),e.onOpen()))},v=u=>(0,c.qy)`
		<img class=${P()("flag",`flag-${u.culture.substring(3)}`)} />
		<span class="w-full text-left md:max-w-fit"> ${u.name}</span>
	`,x=()=>{const u=ga(d,e.culture);return v(u)},y=u=>{const[b,f]=u.culture.toLowerCase().split("-"),m=`/ChangeLanguage?newCountryCode=${f}&newLanguagecode=${b}`;return(0,c.qy)`<a href=${m}>${v(u)}</a>`},w=()=>a?(0,c.qy)`
					<div
						ref=${de(s)}
						style="max-height: ${r?`${s.current.scrollHeight}px`:"0"};"
						class=${P()("cultures top-[59px]",{"lg:top-[90px]":!e.isHeaderCollapsed})}
					>
						<ul>
							${o.map(y)}
						</ul>
					</div>
			  `:"",O=()=>a?(0,c.qy)`
					<span
						class=${P()("ml-1 border-x-[5px] border-b-0 border-t-[5px] border-solid border-x-transparent transform common-transition origin-[50%_30%] border-t-[#204071]",{"-rotate-180":r,"rotate-0":!r})}
					></span>
			  `:"",S=()=>(0,c.qy)`
		<a
			class=${P()("w-full py-4","md:max-w-[180px]",{opened:r,"cursor-pointer":a,"pointer-events-none opacity-50 cursor-default":!a})}
		>
			${x()} ${O()}
		</a>
		<!-- DEVNOTE: Invisible hover extension to keep dropdown open when cursor moves to the header border below -->
		<div class="absolute -bottom-1 left-0 right-0 hidden h-1 cursor-pointer bg-transparent md:block"></div>
	`;return{close:()=>l(!1),htmlTemplate:()=>o.length>0?(0,c.qy)`
					<div
						class="dg-culture-dropdown-opener h-full common-transition md:w-[167px]"
						@click=${(0,K.Y5)()?i:null}
						@mouseenter=${(0,K.Y5)()?null:i}
						@mouseleave=${(0,K.Y5)()?null:i}
					>
						${S()} ${w()}
					</div>
			  `:""}},Us=e=>{const[t]=Y("userInfo"),{formatNumber:n}=(0,Tn.JY)(),s=(0,h.li)(null),[r,l]=(0,h.J0)(!1),d=()=>{const p=u=>{(u.path||u.composedPath&&u.composedPath()).indexOf(s.current)>-1||l(!1)};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},o=()=>t?.AmericanAirlines?I.u2.AMERICAN_AIRLINES:t?.PeruCompra?I.u2.PERU_COMPRA:t?.ChileCompra?I.u2.CHILE_COMPRA:t?.BancoEstado?I.u2.BANCO_ESTADO:t?.Cug2?I.u2.CUG:I.u2.DEFAULT,a=()=>`${e.bookingUrl}/V2/Profile?culture=${e.culture}&url=${e.absoluteAction}`,i=()=>`${e.bookingUrl}/V2Agency/Reservations`;(0,T.fO)(d,[]);const v=()=>{var p,u,b;return(p=t?.AmericanAirlines)!=null&&p.IsMember?(0,c.qy)`
					<div class="flex w-full flex-row items-baseline justify-between text-n-blue">
						<span class="text-border-cug-gray-2 mr-1 whitespace-nowrap"
							>${g.A.t("Available-miles")}:</span
						><span class="text-[17px]/6 font-bold text-brand-tertiary"
							>${n({amount:(u=t?.AmericanAirlines)==null?void 0:u.Miles,isMiles:!0,culture:e.culture,leadingSign:!1})}</span
						>
					</div>
					<div class="border-cug-gray-2 mb-4 flex w-full flex-row items-baseline justify-between text-n-blue">
						<span class="flex"
							>${(0,N._)(g.A.t("AAdvantage {{-reg}}",{reg:'<span class="relative font-body top-[-1px]">&reg;</span>'}))}:</span
						><span class="ml-2 text-[17px]/6 font-bold"
							>${(b=t?.AmericanAirlines)==null?void 0:b.AdvantageNumber}</span
						>
					</div>
			  `:""},x=p=>{var u,b;if(p.preventDefault(),p.stopPropagation(),(u=t?.AmericanAirlines)!=null&&u.IsMember){window.open((0,bt.a)(e.culture),"_blank");return}if((b=t?.ChileCompra)!=null&&b.IsMember){window.location.href=i();return}window.location.href=a()},y=()=>(0,c.qy)`
		<div
			class=${P()("with-arrow longer relative flex min-w-[162px] cursor-pointer appearance-none justify-center whitespace-normal rounded-full border-2 border-solid border-n-blue bg-n-blue px-[15px] py-[10px] pl-[15px] pr-[35px] text-center font-body text-[15px]/none font-bold normal-case leading-none tracking-normal text-white","md:min-w-[180px] md:text-lg/none","hover:border-n-blue hover:bg-white hover:text-n-blue")}
			tabindex="-1"
			data-test-id=${he.m.Menu.OpenAccountButton}
			@click=${x}
		>
			<span>${g.A.t("My account")}</span>
			<i class="jsh-circle-chevron-right1 absolute right-[5px] text-[25px] font-normal vertical-center"></i>
		</div>
	`,w=()=>(0,c.qy)`
		<div
			class=${P()("relative inline-flex min-w-[162px] cursor-pointer appearance-none justify-center whitespace-normal rounded-full border-2 border-solid border-n-blue bg-white px-[15px] py-[10px] text-center font-body text-[15px]/none font-bold normal-case leading-none tracking-normal text-n-blue","md:min-w-[180px] md:text-lg/none","hover:border-n-blue hover:bg-n-blue hover:text-white")}
			tabindex="-1"
			data-test-id=${he.m.Menu.LogOutButton}
			@click=${e.handleLogout}
		>
			<span>${g.A.t("layout-logout")}</span>
		</div>
	`,O=()=>r?(0,c.qy)`
					<div
						class="absolute left-1/2 top-full z-50 mt-2 flex -translate-x-1/2 transform flex-col rounded-xl border border-solid border-be-gray-9 bg-white p-4"
					>
						<div class="flex flex-col items-center gap-2">
							${v()}${y()}${w()}
						</div>
					</div>
			  `:"";return{htmlTemplate:()=>{var p,u;if(!t?.Name)return"";const b=f=>{f.preventDefault(),f.stopPropagation(),l(!r)};return(0,c.qy)`
			<li class="flex h-full items-center justify-center" @mouseenter=${e.onMouseEnter}>
				<div
					ref=${de(s)}
					class=${P()("flex w-[150px] relative cursor-pointer items-center justify-between gap-2 rounded-full py-1 pl-1 pr-2 text-white",{"border-[3px] border-solid border-[#AF272F]":t?.RoleCode===I.ch.STAFF,"bg-[#FFA400]":t?.Dc,"bg-n-blue":!t?.Dc})}
					@click=${b}
				>
					<img class="h-[30px] w-[30px]" src=${o()} />
					<span class="w-[93px] truncate font-bold">
						${((p=t?.Name)==null?void 0:p.FirstName)||""} ${((u=t?.Name)==null?void 0:u.LastName)||""}
					</span>
					${O()}
				</div>
			</li>
		`}}},Js=e=>{const{logEvent:t}=(0,et.U)(),[n]=Y("userInfo"),[s,r]=(0,T.J0)(!1),l=ha({culture:e.culture,dynamicSettings:e.dynamicSettings,isHeaderCollapsed:e.isCollapsed,onOpen:e.closeLoginWidget}),d=()=>{t("user_logout",{});const w=`${e.bookingUrl}/Member/Logout?culture=${e.culture}&url=${e.absoluteAction}`;window.setTimeout(()=>window.location.href=w,500)},o=()=>{var w;return!((w=n?.AmericanAirlines)!=null&&w.IsMember)&&n?.Name?(0,c.qy)`
					<li>
						<a href="#" @click=${d} data-test-id=${he.m.Menu.LogoutOpener}>
							<span>${g.A.t("layout-logout")}</span>
						</a>
					</li>
			  `:""},a=()=>(0,c.qy)`
		<img class="max-h-[30px] common-transition" src="/images/header/jetsmart-logo-colored.svg" alt="JetSMART" />
	`,i=()=>(0,c.qy)`
		<div
			class="cursor-pointer select-none p-2 text-3xl font-thin"
			aria-label="Close menu"
			@click=${()=>r(!1)}
		>
			&times;
		</div>
	`,v=w=>(0,c.qy)`
			<dc-accordion
				class="w-full border-x-0 border-b border-t-0 border-solid border-b-[#E0E0E0] py-4"
				.contentTemplate=${w.mobileContent}
				.headerClass=${P()({"text-n-cyan font-bold":e.activeMenuItemId===w.id})}
				.headerIconClass=${P()({"border-t-n-cyan":e.activeMenuItemId===w.id,"border-t-[#204071]":e.activeMenuItemId!==w.id})}
				.headerTitle=${w.title}
				.hideBorder=${!0}
				.isOpen=${e.activeMenuItemId===w.id}
				.onClick=${()=>e.toggleMenuItem(w.id)}
			></dc-accordion>
		`,x=()=>n?.Name?o():(0,c.qy)`
					<div
						class="min-w-[345px] max-w-[500px] flex-grow rounded-full border border-solid border-n-blue px-2 py-2 text-center"
						@click=${e.onRegisterAccountClick}
					>
						${g.A.t("Inscr\xEDbete aqu\xED")}
					</div>
			  `;return{closeMobileMenu:()=>r(!1),htmlTemplate:()=>(0,c.qy)`
		<div
			class=${P()("fixed text-n-blue flex flex-col gap-4 top-0 right-0 h-full w-full bg-white z-[111111] transform transition-transform duration-300 ease-in-out overflow-y-auto items-center md:hidden",{"translate-x-0":s,"translate-x-full":!s})}
		>
			<div class="flex w-full items-center justify-between border-b px-4 pt-2">
				${a()} ${i()}
			</div>
			<ul class="flex w-full list-none flex-col p-4">
				${e.dropdownMenus.map(v)}
				<li class="flex w-full cursor-pointer justify-center border-b border-solid border-[#E0E0E0] py-4">
					${x()}
				</li>
				<li class="w-full border-b border-solid border-[#E0E0E0]">${l.htmlTemplate()}</li>
			</ul>
		</div>
	`,toggleMobileMenu:()=>r(!s)}},Vs=e=>{const{logEvent:t}=(0,et.U)(),[n]=Y("userInfo"),s=Us({absoluteAction:e.absoluteAction,bookingUrl:e.bookingUrl,culture:e.culture,onMouseEnter:()=>{e.closeDropdown(),v.closeMobileMenu()},handleLogout:()=>x()}),r=(C=e.culture)=>{if(!C)return{language:"es",country:"cl"};const[M,R]=C.split("-");return{language:M||"es",country:R||"cl"}},l=ha({culture:e.culture,dynamicSettings:e.dynamicSettings,isHeaderCollapsed:e.isCollapsed,onOpen:()=>{e.closeLoginWidget(),e.closeDropdown()}}),d=C=>{e.closeLoginWidget(),l.close(),e.openDropdown(C)},o=()=>{l.close(),e.closeLoginWidget(),v.toggleMobileMenu()},a=()=>{l.close(),e.closeDropdown(),v.closeMobileMenu(),e.toggleLoginWidget()},i=Te({dataTestId:he.m.Menu.LoginOpener,icon:(0,c.qy)`<i class="jsh-icon jsh-login ml-2 text-base"></i>`,isAction:!1,label:g.A.t("layout-login"),onClick:a}),v=Js({absoluteAction:e.absoluteAction,activeMenuItemId:e.activeMenuItemId,bookingUrl:e.bookingUrl,culture:e.culture,dropdownMenus:e.dropdownMenus,dynamicSettings:e.dynamicSettings,isCollapsed:e.isCollapsed,closeLoginWidget:e.closeLoginWidget,onRegisterAccountClick:e.onRegisterAccountClick,toggleMenuItem:e.toggleMenuItem}),x=()=>{t("user_logout",{});const C=`${e.bookingUrl}/Member/Logout?culture=${e.culture}&url=${e.absoluteAction}`;window.setTimeout(()=>window.location.href=C,500)},y=()=>(0,c.qy)`
		<img
			class="ml-6 max-h-9 common-transition md:ml-0 lg:max-h-[42px]"
			src="/images/header/jetsmart-logo-colored.svg"
			alt="JetSMART"
		/>
	`,w=()=>{const{language:C,country:M}=r(),R=`/${M}/${C}`;return(0,c.qy)`
			<a
				class="m-0 mr-[11px] flex w-[110px] cursor-pointer items-center common-transition lg:h-[86px] xl:w-[180px]"
				href=${R}
				@mouseenter=${e.closeDropdown}
			>
				${y()}
			</a>
		`},O=C=>{var M;return(0,c.qy)`
		<li
			class=${P()("h-full cursor-pointer",{hidden:((M=n?.AmericanAirlines)==null?void 0:M.IsMember)&&(0,K.V)()})}
			@mouseenter=${()=>d(C.id)}
		>
			<div
				class=${P()("max-w-fit flex gap-1 items-center h-full hover:underline hover:underline-offset-2",{"underline underline-offset-2":e.activeMenuItemId===C.id})}
			>
				<span class="mr-1 text-base md:text-sm lg:text-base">${(0,N._)(C.title)}</span>
				<span
					class="border-x-[5px] border-b-0 border-t-[5px] border-solid border-x-transparent border-t-[#204071]"
				></span>
			</div>
		</li>
	`},S=()=>n?.Name?"":(0,c.qy)`
					<div class="flex h-full items-center" @mouseenter=${e.closeDropdown}>
						${i.htmlTemplate()}
					</div>
			  `,p=()=>(0,c.qy)`
		<ul
			class=${P()("hidden list-none text-n-blue h-[55px] items-center gap-2","md:flex","lg:h-[86px] lg:gap-4","xl:gap-6")}
		>
			${e.dropdownMenus.map(O)}
			<li class=${P()({hidden:n?.Name,"block h-full":!n?.Name})}>
				${S()}
			</li>
			${s.htmlTemplate()}
		</ul>
	`,u=()=>(0,c.qy)`
		<div
			class="absolute right-0 flex h-[30px] w-5 cursor-pointer flex-col items-center justify-center gap-1 md:hidden"
			aria-label="Toggle menu"
			@click=${o}
		>
			<span class="h-0.5 w-5 bg-[#a62733]"></span>
			<span class="h-0.5 w-5 bg-[#a62733]"></span>
			<span class="h-0.5 w-5 bg-[#a62733]"></span>
		</div>
	`,b=()=>(0,c.qy)`<div class="mr-9 md:hidden">${S()}</div>`,f=()=>(0,c.qy)`
		<div
			class=${P()("ml-4 hidden md:block xl:ml-8 cursor-pointer",{"md:h-[55px] lg:h-[86px]":!e.isCollapsed})}
		>
			${l.htmlTemplate()}
		</div>
	`,m=()=>e.showMenu?(0,c.qy)`
					<div class="relative flex items-center" @mousemove=${C=>C.stopPropagation()}>
						<div class="md:hidden">${s.htmlTemplate()}</div>
						${u()} ${p()} ${f()}
						${b()}
					</div>
			  `:"";return{closeMobileMenu:()=>v.closeMobileMenu,htmlTemplate:()=>(0,c.qy)`
		<div class="flex w-full justify-center border-b-4 border-solid border-[#a62733] bg-white">
			<section
				class=${P()("flex select-none items-center justify-between common-transition container",{"h-[55px] lg:h-[86px]":!e.isCollapsed})}
				@mousemove=${e.closeDropdown}
			>
				${w()} ${m()}
			</section>
		</div>
		${v.htmlTemplate()}
	`}};var Ws=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const Hs=!1,Gs="ac-header",zs=["absolute-action","booking-url","culture","dynamic-settings","show-menu"],uc=null,Ys=e=>{const t={absoluteAction:e.absoluteAction,bookingUrl:e.bookingUrl,culture:e.culture,dynamicSettings:e.dynamicSettings&&typeof e.dynamicSettings=="string"?(0,K.ny)(e.dynamicSettings):void 0,showMenu:(0,K.G4)(e.showMenu)},n=(0,h.li)(void 0),s=(0,h.li)(void 0),r=ws({absoluteAction:t.absoluteAction,bookingUrl:t.bookingUrl,culture:t.culture,dynamicSettings:t.dynamicSettings}),l=Rs({navbarElement:s.current,onScroll:r.close}),d=_s({culture:t.culture,isCollapsed:l.isCollapsed}),o=Vs({absoluteAction:t.absoluteAction,activeMenuItemId:d.activeId,bookingUrl:t.bookingUrl,culture:t.culture,dropdownMenus:d.dropdownMenus,dynamicSettings:t.dynamicSettings,isCollapsed:l.isCollapsed,showMenu:t.showMenu,closeDropdown:d.closeMenu,closeLoginWidget:r.close,onRegisterAccountClick:r.registerAccountClick,openDropdown:d.openMenu,toggleLoginWidget:r.toggle,toggleMenuItem:d.toggleMenuItem}),a=Ls({closeMobileMenu:o.closeMobileMenu}),i=()=>Ws(void 0,null,function*(){document.body.style.opacity="0",yield a.init(),document.body.style.opacity="1",(0,K.dh)(n.current),console.table(window.JetSmart.Variants)});return(0,T.xG)(i,[]),(0,h.qy)`
		<header
			ref=${de(n)}
			class=${P()("w-full fixed text-center z-[99998] common-transition",{"top-[-86px] overflow-hidden":l.isCollapsed,"h-[55px] lg:h-[86px] top-0":!l.isCollapsed})}
			@mouseleave=${d.closeMenu}
		>
			<div ref=${de(s)}>${o.htmlTemplate()}</div>
			${d.htmlTemplate()} ${r.htmlTemplate()}
		</header>
	`},Ks=!1,Xs="dc-accordion",Qs=e=>{const t={headerClass:e.headerClass?e.headerClass:"",headerIconClass:e.headerIconClass?e.headerIconClass:"",headerTitle:e.headerTitle,isOpen:e.isOpen,contentTemplate:e.contentTemplate?e.contentTemplate:()=>(0,c.qy)``,onClick:e.onClick},n=()=>(0,c.qy)`
		<div
			class=${P()("border-x-[5px] border-b-0 border-t-[5px] border-solid border-x-transparent common-transition origin-[50%_50%]",{"-rotate-180":t.isOpen,"rotate-0":!t.isOpen,"border-t-[#204071]":!t.hideBorder,[t.headerIconClass]:t.headerIconClass})}
		></div>
	`,s=()=>(0,c.qy)`
		<div
			class=${P()("select-none flex justify-between text-left items-center cursor-pointer",{[t.headerClass]:t.headerClass})}
			@click=${t.onClick}
		>
			<div class="w-full common-transition">
				${typeof t.headerTitle=="string"?(0,N._)(t.headerTitle):t.headerTitle}
			</div>
			${n()}
		</div>
	`,r=()=>(0,c.qy)`
		<div
			class=${P()("grid transition-all duration-300 ease-in-out overflow-hidden",{"grid-rows-[1fr]":t.isOpen,"grid-rows-[0fr]":!t.isOpen})}
		>
			<div class=${P()("overflow-hidden transition-all duration-300",{"pt-4":t.isOpen})}>
				${t.contentTemplate()}
			</div>
		</div>
	`;return(0,c.qy)` <div>${s()} ${r()}</div> `},Zs="dc-tabs",ei=!1,ti=e=>{const t={data:e.dto.data!==void 0?e.dto.data:[],selectedTab:e.dto.selectedTab&&e.dto.data.some(s=>s.name===e.dto.selectedTab)?e.dto.selectedTab:void 0,onSelect:e.dto.onSelect||(()=>{})},n=s=>s.filter(r=>!r.isUnavailable);return(0,c.qy)`
		<ul class="flex select-none list-none gap-2 print:hidden">
			${n(t.data).map(s=>{const r=()=>{t.onSelect(s.name),typeof s.onClick=="function"&&s.onClick()};return(0,c.qy)`
					<li class="cursor-pointer" data-tab-name=${s.name} @click=${r}>
						${s.tabHeaderTemplate()||s.name}
					</li>
				`})}
		</ul>
		<div
			class=${P()("rounded-b-lg bg-white rounded-tr-lg",{"rounded-tl-none":n(t.data).find(s=>s.name===t.selectedTab).index===ia,"rounded-tl-lg":n(t.data).find(s=>s.name===t.selectedTab).index!==ia})}
		>
			${n(t.data).find(s=>s.name===t.selectedTab).contentTemplate()}
		</div>
	`},ni="ac-change-passenger-number-button",ai=!1,ri=e=>{const t={type:e.type,isDisabled:e.isDisabled,onClick:e.onClick},n=s=>{s.preventDefault(),s.stopPropagation(),t.onClick()};return(0,c.qy)`
		<div
			class=${P()("relative h-6 w-6 rounded-full border border-solid ","after:absolute after:left-1/2 after:top-1/2 after:h-0.5 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:transform after:content-['']",{"before:absolute before:left-1/2 before:top-1/2 before:h-2 before:w-0.5 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:content-['']":t.type==="plus","cursor-pointer border-n-cyan":!t.isDisabled,"after:bg-n-cyan":!t.isDisabled,"md:hover:border-n-blue md:hover:bg-n-blue":!t.isDisabled,"md:hover:before:bg-white md:hover:after:bg-white":!t.isDisabled,"before:bg-n-cyan":t.type==="plus"&&!t.isDisabled,"border-[#a1a1a1]":t.isDisabled,"after:bg-[#a1a1a1]":t.isDisabled,"before:bg-[#a1a1a1]":t.type==="plus"&&t.isDisabled})}
			@click=${n}
		></div>
	`},oi=e=>({htmlTemplate:()=>(0,c.qy)`
		<label
			class=${P()("pointer-events-none absolute bottom-0 left-0 right-0 block w-full overflow-hidden whitespace-nowrap pl-[15px] text-left leading-[43px] common-transition","peer-focus:font-black peer-focus:text-n-blue",{"pl-[14px]":!e.isSmaller,"pl-[9px] peer-focus:top-[-10px] peer-focus:text-xs/none":e.isSmaller,"top-[3px] text-base/none opacity-25 peer-focus:opacity-100 peer-focus:top-[-8px] peer-focus:text-sm":!e.isDirty&&!e.isSmaller,"top-[-8px] text-sm/none font-black text-n-blue":e.isDirty&&!e.isSmaller,"top-[0px] text-[13px] opacity-25 peer-focus:opacity-100":!e.isDirty&&e.isSmaller,disabled:e.isDisabled})}
		>
			${e.label}
		</label>
	`}),si="ac-input",ii=!1,li=e=>{const t={autoComplete:e.autoComplete||"off",customClasses:e.customClasses,disablePaste:e.disablePaste,errorMessage:e.errorMessage,errorMessageDataTestCode:e.errorMessageDataTestCode,getFocusOnRender:e.getFocusOnRender,isBancoEstado:e.isBancoEstado,isDisabled:e.isDisabled,isInvalid:e.isInvalid,isLabelSmaller:e.isLabelSmaller,isReadonly:e.isReadonly,isSmall:e.isSmall,label:e.label,maxLength:e.maxLength||"",name:e.name||"",placeholder:e.placeholder||"",tabIndexAttr:e.tabIndexAttr||"",testId:e.testId||"",type:e.type||"text",value:e.value||"",onBlur:e.onBlur,onInput:e.onInput,onKeyUp:e.onKeyUp,sanitizer:e.sanitizer},n=()=>{var x;if(!o.current)return!1;const y=getComputedStyle(o.current).backgroundColor;return!["rgb(255, 255, 255)","rgb(249, 212, 216)"].includes(y)&&((x=o.current)==null?void 0:x.value)!==t.value},s=()=>{t.getFocusOnRender&&window.setTimeout(()=>{var x;return(x=o.current)==null?void 0:x.focus()},100)},r=x=>{var y,w;o.current.value=typeof t.sanitizer=="function"?t.sanitizer(x):(y=o.current)==null?void 0:y.value,t.onInput((w=o.current)==null?void 0:w.value)},l=x=>{t.onKeyUp&&t.onKeyUp(x)},d=()=>{var x;a.current||n()&&(a.current=!0,t.onInput((x=o.current)==null?void 0:x.value))},o=(0,h.li)(void 0),a=(0,h.li)(!1),i=oi({isDirty:!!t.value||!!t.placeholder,isDisabled:t.isDisabled,isReadOnly:t.isReadonly,label:t.label,isSmaller:t.isLabelSmaller}),v=(0,bn.b)({errorMessage:t.errorMessage,errorMessageDataTestCode:t.errorMessageDataTestCode});return(0,h.Nf)(()=>{o.current.value=t.value},[t.value]),(0,h.Nf)(s,[]),(0,h.Nf)(d),(0,c.qy)`
		<div class="relative w-full leading-none">
			<input
				autocomplete=${t.autoComplete}
				class=${P()(t.customClasses,{"peer m-0 block w-full appearance-none rounded-lg border border-solid pb-[3px] pr-[4px] text-left text-n-blue common-transition":!t.customClasses,"placeholder:text-sm/none placeholder:text-[#818a91]":!t.customClasses,"focus:border-be-cyan focus:text-n-blue":!t.customClasses,disabled:t.isDisabled,"pt-[21px]":t.label&&!t.isSmall,"pt-[17px]":t.label&&t.isSmall,"h-[52px] pl-4 text-[20px] leading-[52px]":!t.isSmall,"h-[34px] pl-4 text-[13px] leading-[34px] md:leading-[42px] md:h-[42px]":t.isSmall,"pt-[5px]":!t.label,"border-n-blue bg-white":!t.isInvalid&&!t.isBancoEstado,"border-be-orange bg-white":!t.isInvalid&&t.isBancoEstado,"border-[#e299a1] bg-[#f9d4d8]":t.isInvalid})}
				data-test-id=${t.testId}
				name=${e.name}
				placeholder=${t.placeholder}
				?readonly=${t.isReadonly}
				ref=${de(o)}
				tabindex=${t.tabIndexAttr}
				type=${t.type}
				value=${t.value}
				maxlength=${t.maxLength}
				@blur=${t.onBlur}
				@input=${r}
				@keyup=${l}
				@paste=${t.disablePaste?x=>x.preventDefault():void 0}
			/>
			${i.htmlTemplate()} ${v.htmlTemplate()}
		</div>
	`},ci="ac-dropdown2",di=!1,ui=e=>{const t={anchorElement:e.anchorElement,content:e.content,fixedDown:e.fixedDown,isOpen:e.isOpen,isOutbound:e.isOutbound,modalOnMobile:e.modalOnMobile,useParentWidth:e.useParentWidth},n=(0,h.li)(null),s=(0,h.li)(null),r=Ye(),[l,d]=(0,T.J0)({x:0,y:0,width:0}),o=f=>!f.getBoundingClientRect().width||!f.getBoundingClientRect().height,a=f=>o(f)&&f.parentElement,i=f=>{let m=f?.parentElement;if(m){for(;a(m);)m=m.parentElement;return m||void 0}},v=f=>{if(!f.parentElement)return{x:0,y:0,width:0};let m=f.parentElement,$=0,C=0;for(;m;){if(getComputedStyle(m).transform!=="none"){const M=m.getBoundingClientRect();$+=M.left,C+=M.top}m=m.parentElement}return{x:$,y:C,width:null}},x=f=>{if(!f)return{x:0,y:0,width:0};const m=f.getBoundingClientRect(),$=v(f);return{x:m.left-$.x,y:m.top-$.y,width:m.width}},y=f=>{var m;const $=i(f||void 0);if(!$)return{x:0,y:0,width:0};const C=$.getBoundingClientRect(),M=x($),R=((m=s.current)==null?void 0:m.scrollWidth)||0,z=window.innerWidth;let J=M.x;return J+R>z&&(J=z-R-24),J<0&&(J=0),{x:J,y:M.y+C.height,width:M.width}},w=()=>{const f=()=>{window.setTimeout(()=>{var m;(t.anchorElement||(m=n.current)!=null&&m.parentElement)&&r.width&&d(y(t.anchorElement||n.current.parentElement))},0)};return f(),window.addEventListener("resize",f),window.addEventListener("scroll",f),()=>{window.removeEventListener("resize",f),window.removeEventListener("scroll",f)}};(0,T.xG)(w,[r.height,r.width,t.isOpen]),(0,h.Nf)(()=>{var f;(t.anchorElement||(f=n.current)!=null&&f.parentElement)&&window.setTimeout(()=>{const m=y(t.anchorElement||n.current.parentElement);d(m)},0)},[t.content]);const O=()=>{var f;return l.y+(((f=s.current)==null?void 0:f.scrollHeight)||0)-window.scrollY<=window.innerHeight},S=()=>{var f;return O()||t.fixedDown?l.y:l.y-(((f=s.current)==null?void 0:f.scrollHeight)||0)-58},p=()=>(0,c.qy)`
		<div
			style=${`top: ${S()+8}px; left: ${l.x}px;`+(t.useParentWidth?`width: ${l.width}px;`:"")}
			class=${P()("fixed min-w-52 select-none overflow-hidden rounded-lg shadow-select","[&_*]:select-none",{"-z-10 opacity-0 h-0":!t.isOpen,"z-[9999] opacity-100":t.isOpen})}
			@click=${f=>f.stopPropagation()}
		>
			<div ref=${de(s)}>${t.content}</div>
		</div>
	`,u=()=>(0,c.qy)`<div ref=${de(n)}>${p()}</div>`,b=()=>t.isOpen?(0,c.qy)` <div ref=${de(n)} class="fixed inset-0 z-[1000000] bg-black bg-opacity-50">
					<div
						ref=${de(s)}
						class="absolute left-1/2 top-1/2 max-h-[95vh] max-w-[95vw] -translate-x-1/2 -translate-y-1/2 transform"
					>
						${t.content}
					</div>
			  </div>`:(0,c.qy)``;return t.modalOnMobile&&r.size==="XS"?b():u()},rt={ActionType:void 0,PageAlias:"",Secret:"",TTFrom:"",TTTo:"",IsQueueItOn:!1,IsBancoEstadoOn:!1,IsPeruCompraOn:!1,IsAmericanOn:!1,IsCarRentalOn:!1,isHotelsOn:!1,IsTransfersOn:!1,QueueItPrefix:"",DefaultPromotionCodeCl:"",DefaultPromotionCodeAr:"",DefaultPromotionCodePe:"",DefaultPromotionCodeUs:"",DefaultPromotionCodeBr:"",DefaultPromotionCodeCo:"",DefaultPromotionCodePy:"",DefaultPromotionCodeUy:"",DefaultPromotionCodeEc:"",DefaultPromotionCodeDo:"",DefaultPromotionCodeGb:"",ShowFarePricesCultures:void 0,DynamicCultureNameSettings:[],DynamicPromoCodeSettings:[],DynamicInsuranceTabSettings:[],DefaultRouteCountrySettings:[],TimetableMaxMonthsFallback:0,RetargetingUrls:[]};var _e=E(4870),mi=Object.defineProperty,vi=Object.defineProperties,gi=Object.getOwnPropertyDescriptors,ba=Object.getOwnPropertySymbols,hi=Object.prototype.hasOwnProperty,bi=Object.prototype.propertyIsEnumerable,fa=(e,t,n)=>t in e?mi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fi=(e,t)=>{for(var n in t||(t={}))hi.call(t,n)&&fa(e,n,t[n]);if(ba)for(var n of ba(t))bi.call(t,n)&&fa(e,n,t[n]);return e},pi=(e,t)=>vi(e,gi(t)),yi=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const xi=["login-error-message"],Si="admin-login",wi=e=>{const t={loginErrorMessage:e.loginErrorMessage||""},{ajaxRequest:n}=(0,_e.k)(),[s,r]=(0,T.J0)(""),l=()=>yi(void 0,null,function*(){const d=pi(fi({},rt),{Secret:s,ActionType:"login"});yield n({url:"/samuraijack",body:d}),window.location.reload()});return(0,c.qy)`
		<div class="flex gap-4">
			<input
				class="flex h-10 appearance-none items-center rounded-lg border border-solid border-black px-4"
				type="password"
				placeholder="Password"
				@input=${d=>r(d.target.value)}
			/>
			<button class="bg-n-blue hover:bg-n-red hover:text-white" value="Login" @click=${l}>Login</button>
			<label class="text-[#db0000]">${t.loginErrorMessage}</label>
		</div>
	`};var Ci=Object.defineProperty,$i=Object.defineProperties,Ti=Object.getOwnPropertyDescriptors,pa=Object.getOwnPropertySymbols,Di=Object.prototype.hasOwnProperty,Mi=Object.prototype.propertyIsEnumerable,ya=(e,t,n)=>t in e?Ci(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bt=(e,t)=>{for(var n in t||(t={}))Di.call(t,n)&&ya(e,n,t[n]);if(pa)for(var n of pa(t))Mi.call(t,n)&&ya(e,n,t[n]);return e},Ut=(e,t)=>$i(e,Ti(t)),Jt=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const ot=(e,t)=>Jt(void 0,null,function*(){const n=Ut(Bt({},rt),{ActionType:e});yield t({url:"/samuraijack",body:n}),window.location.reload()}),Oi=(e,t,n)=>Jt(void 0,null,function*(){const s=Ut(Bt({},rt),{TTFrom:e,TTTo:t,ActionType:"invalidate_timetable"});yield n({url:"/samuraijack",body:s}),window.location.reload()}),Pi=(e,t)=>Jt(void 0,null,function*(){const n=Ut(Bt({},rt),{PageAlias:e,ActionType:"invalidate_page"});yield t({url:"/samuraijack",body:n}),window.location.reload()});var Ai=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const _i=e=>{const{ajaxRequest:t}=(0,_e.k)(),n=o=>Ai(void 0,null,function*(){o.preventDefault(),o.stopPropagation(),yield ot("invalidate_stations",t)}),s=()=>(0,c.qy)`
		<ul class="list-none text-xs leading-normal text-[#db0000]">
			<li><span class="font-bold uppercase">Message:</span> ${e.state.LastRefreshMessage}</li>
			<li><span class="font-bold uppercase">Refreshed On:</span> ${e.state.RefreshedOn}</li>
		</ul>
	`,r=()=>(0,c.qy)`
		<ul class="list-none text-xs leading-normal text-n-dark-gray">
			<li><span class="font-bold uppercase">Expires On:</span> ${e.state.ExpiresOn}</li>
			<li><span class="font-bold uppercase">Refreshed On:</span> ${e.state.RefreshedOn}</li>
			<li><span class="font-bold uppercase">Cache State:</span> ${e.state.CacheState}</li>
		</ul>
	`,l=()=>(0,c.qy)`
		<button type="submit" class="bg-n-blue hover:bg-n-red hover:text-white" value="Invalidate" @click=${n}>
			Invalidate
		</button>
	`;return{htmlTemplate:()=>(0,c.qy)`
		<section class="mt-6 flex justify-between gap-4">
			${e.isPreview?(0,c.qy)`<div class="w-full">
						<label class="preview-label">In Preview</label>
				  </div>`:(0,c.qy)` ${e.state.IsValid?r():s()} ${l()}`}
		</section>
	`}};var Ii=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const ki=e=>{const{ajaxRequest:t}=(0,_e.k)(),n=o=>Ii(void 0,null,function*(){o.preventDefault(),o.stopPropagation(),yield ot("invalidate_navitairesettings",t)}),s=()=>(0,c.qy)`
		<ul class="list-none text-xs leading-normal text-[#db0000]">
			<li><span class="font-bold uppercase">Message:</span> ${e.state.LastRefreshMessage}</li>
			<li><span class="font-bold uppercase">Refreshed On:</span> ${e.state.RefreshedOn}</li>
		</ul>
	`,r=()=>(0,c.qy)`
		<ul class="list-none text-xs leading-normal text-n-dark-gray">
			<li><span class="font-bold uppercase">Expires On:</span> ${e.state.ExpiresOn}</li>
			<li><span class="font-bold uppercase">Refreshed On:</span> ${e.state.RefreshedOn}</li>
			<li><span class="font-bold uppercase">Cache State:</span> ${e.state.CacheState}</li>
		</ul>
	`,l=()=>(0,c.qy)`
		<button type="submit" class="bg-n-blue hover:bg-n-red hover:text-white" value="Invalidate" @click=${n}>
			Invalidate
		</button>
	`;return{htmlTemplate:()=>(0,c.qy)`
		<section class="mt-6 flex justify-between gap-4">
			${e.isPreview?(0,c.qy)`<div class="w-full">
						<label class="preview-label">In Preview</label>
				  </div>`:(0,c.qy)` ${e.state.IsValid?r():s()} ${l()}`}
		</section>
	`}};var Ei=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const Li=()=>{const{ajaxRequest:e}=(0,_e.k)(),[t,n]=(0,T.J0)(""),[s,r]=(0,T.J0)(""),l=a=>Ei(void 0,null,function*(){a.preventDefault(),a.stopPropagation(),yield Oi(t,s,e)}),d=()=>(0,c.qy)`
		<button class="bg-n-blue hover:bg-n-red hover:text-white" @click=${l}>Invalidate</button>
	`;return{htmlTemplate:()=>(0,c.qy)`
		<section class="mt-6">
			<div class="flex items-center gap-4">
				<input
					class="flex h-10 appearance-none items-center rounded-lg border border-solid border-black px-4"
					placeholder="From"
					value=${t}
					@input=${a=>n(a.target.value)}
				/>
				<input
					class="flex h-10 appearance-none items-center rounded-lg border border-solid border-black px-4"
					placeholder="To"
					value=${s}
					@input=${a=>r(a.target.value)}
				/>
				${d()}
			</div>
		</section>
	`}};var Ri=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const ji=e=>{const{ajaxRequest:t}=(0,_e.k)(),n=o=>Ri(void 0,null,function*(){o.preventDefault(),o.stopPropagation(),yield ot("invalidate_sitemap",t)}),s=()=>(0,c.qy)`
		<ul class="list-none text-xs leading-normal text-[#db0000]">
			<li><span class="font-bold uppercase">Message:</span> ${e.state.LastRefreshMessage}</li>
			<li><span class="font-bold uppercase">Refreshed On:</span> ${e.state.RefreshedOn}</li>
		</ul>
	`,r=()=>(0,c.qy)`
		<ul class="list-none text-xs leading-normal text-n-dark-gray">
			<li><span class="font-bold uppercase">Expires On:</span> ${e.state.ExpiresOn}</li>
			<li><span class="font-bold uppercase">Refreshed On:</span> ${e.state.RefreshedOn}</li>
			<li><span class="font-bold uppercase">Cache State:</span> ${e.state.CacheState}</li>
		</ul>
	`,l=()=>(0,c.qy)`
		<button type="submit" class="bg-n-blue hover:bg-n-red hover:text-white" value="Invalidate" @click=${n}>
			Invalidate
		</button>
	`;return{htmlTemplate:()=>(0,c.qy)`
		<section class="mt-6 flex justify-between gap-4">
			${e.isPreview?(0,c.qy)`<div class="w-full">
						<label class="preview-label">In Preview</label>
				  </div>`:(0,c.qy)` ${e.state.IsValid?r():s()} ${l()}`}
		</section>
	`}};var qi=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const Ni=["variables","services"],Fi=e=>{const{ajaxRequest:t}=(0,_e.k)(),n=i=>qi(void 0,null,function*(){i.preventDefault(),i.stopPropagation(),yield ot("invalidate_homewidgets",t)}),s=()=>(0,c.qy)`
		<ul class="list-none text-xs text-n-dark-gray">
			<li><span class="font-bold uppercase">Cache State:</span> ${e.state}</li>
		</ul>
	`,r=()=>(0,c.qy)`
		<button type="submit" class="bg-n-blue hover:bg-n-red hover:text-white" value="Invalidate" @click=${n}>
			Invalidate
		</button>
	`,l=i=>(0,c.qy)`
		<li
			class=${P()("flex flex-col gap-2",{"text-[#db0000]":!i.IsValid,"text-[#83b245]":i.IsValid})}
		>
			<span class="text-xs">
				<span> ${i.Locale} </span>
				<span> ${i.IsValid?(0,c.qy)`✔`:(0,c.qy)`✘`} </span>
			</span>
			${i.IsValid?"":(0,c.qy)` <label class="text-xs text-[#db0000]">Message: ${i.LastRefreshMessage}</label> `}
		</li>
	`,d=i=>(0,c.qy)`
		<div class="relative">
			<label
				class="relative mb-1 inline-block border-b border-solid border-n-blue bg-n-gray py-1.5 pl-3 pr-8 text-base"
				>${i.Alias}
				<div class="absolute -right-1.5 -top-1.5 h-3 w-3 rotate-45 transform bg-white content-['']"></div
			></label>
			<ul class="list-none text-xs text-n-dark-gray">
				<li><span class="font-bold uppercase">Expires On:</span><br />${i.ExpiresOn}</li>
				<li><span class="font-bold uppercase">Refreshed On:</span><br />${i.RefreshedOn}</li>
			</ul>
			<div class="mx-0 mb-[25px] mt-[10px]">
				<ul>
					${i.LocalizedWidgets.map(l)}
				</ul>
			</div>
			${Ni.includes(i.Alias.toLowerCase())?(0,c.qy)`
						<div class="pointer-events-none absolute inset-0">
							<!-- Line from top-left to bottom-right -->
							<div class="absolute left-0 top-0 h-full w-full">
								<svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
									<line x1="0" y1="0" x2="100" y2="100" stroke="red" stroke-width="2" />
								</svg>
							</div>
							<!-- Line from top-right to bottom-left -->
							<div class="absolute left-0 top-0 h-full w-full">
								<svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
									<line x1="100" y1="0" x2="0" y2="100" stroke="red" stroke-width="2" />
								</svg>
							</div>
						</div>
						<div class="text-center text-xs text-n-red">
							Not rendered by DGital because injects bootstrap
						</div>
				  `:""}
		</div>
	`,o=()=>(0,c.qy)`
		<div class="mt-4 grid grid-cols-5 gap-4">${e.homeWidgetsValues.map(d)}</div>
	`;return{htmlTemplate:()=>(0,c.qy)`
		<section class="mt-6">
			${e.isPreview?(0,c.qy)`<div class="w-full">
						<label class="preview-label">In Preview</label>
				  </div>`:(0,c.qy)` <div class="flex w-full items-center justify-end gap-4">
							${s()} ${r()}
						</div>
						${o()}`}
		</section>
	`}};var Bi=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const Ui=e=>{const{ajaxRequest:t}=(0,_e.k)(),n=(o,a)=>Bi(void 0,null,function*(){o.preventDefault(),o.stopPropagation(),yield Pi(a,t)}),s=o=>(0,c.qy)`
		<button
			type="submit"
			class="mt-5 inline-flex h-[30px] items-center justify-center rounded-lg border-0 bg-n-blue px-[15px] tracking-normal text-white hover:bg-n-red hover:text-white disabled:hover:bg-n-blue"
			value="Invalidate"
			@click=${a=>n(a,o)}
		>
			Invalidate
		</button>
	`,r=o=>(0,c.qy)`
		<li
			class=${P()("flex flex-col gap-2",{"text-[#db0000]":!o.IsValid,"text-[#83b245]":o.IsValid})}
		>
			<span>
				<span> ${o.Locale} </span>
				<span> ${o.IsValid?(0,c.qy)`✔`:(0,c.qy)`✘`} </span>
			</span>
			${o.IsValid?"":(0,c.qy)` <label class="text-[#db0000]">Message: ${o.LastRefreshMessage}</label> `}
		</li>
	`,l=o=>(0,c.qy)`
		<div class="relative">
			<label
				class="relative mb-1 inline-block border-b border-solid border-n-blue bg-n-dark-gray py-1.5 pl-3 pr-8 text-base"
				>${o.Alias}</label
			>
			<ul class="list-none">
				<li><span>Expires On:</span><br />${o.ExpiresOn}</li>
				<li><span>Refreshed On:</span><br />${o.RefreshedOn}</li>
			</ul>
			${s(o.Alias)}
			<div class="mx-0 mb-[25px] mt-[10px]">
				<ul>
					${o.LocalizedPages.map(r)}
				</ul>
			</div>
		</div>
	`;return{htmlTemplate:()=>(0,c.qy)`
		<section>
			${e.isPreview?(0,c.qy)`<div class="w-full">
						<label class="preview-label">In Preview</label>
				  </div>`:(0,c.qy)`<div class="mt-4 grid grid-cols-3 gap-4">${e.pagesValues.map(l)}</div>`}
		</section>
	`}};var Ji=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const Vi=e=>{const{ajaxRequest:t}=(0,_e.k)(),n=(r,l)=>Ji(void 0,null,function*(){r.preventDefault(),r.stopPropagation(),yield ot(l,t)});return{htmlTemplate:()=>(0,c.qy)`
		<section
			class="fixed bottom-0 left-64 right-0 flex h-11 items-center justify-end gap-x-10 border-t border-solid border-n-dark-gray bg-n-blue bg-opacity-10 px-10"
		>
			<button
				class="small bg-n-blue hover:bg-n-red hover:text-white"
				@click=${r=>n(r,"take_home_snapshot")}
			>
				Take Home Snapshot
			</button>
			${e.isPreview?(0,c.qy)`
						<button
							class="small bg-[#59c3d9] hover:bg-n-blue hover:text-white"
							@click=${r=>n(r,"preview_off")}
						>
							Switch OFF Preview
						</button>
				  `:(0,c.qy)`<button
						type="submit"
						class="small bg-n-red hover:bg-n-blue hover:text-white"
						@click=${r=>n(r,"preview_on")}
				  >
						Switch ON Preview
				  </button>`}

			<button
				class="small bg-n-red hover:bg-n-blue hover:text-white"
				value="Logoff"
				@click=${r=>n(r,"logoff")}
			>
				Log out
			</button>
		</section>
	`}},Wi=e=>{const[t,n]=(0,T.J0)(void 0),s=Vi({isPreview:e.IsPreview});(0,T.xG)(()=>{t&&(window.location.hash=`#${t}`)},[t]),(0,T.xG)(()=>{var i,v;const x=(v=(i=window.location.hash)==null?void 0:i.substring(1))!=null?v:"";if(x&&en.has(x)||Zt.has(x)){n(x);return}n("feature-switches")},[]);const r=()=>(0,h.qy)`
		<img
			class="block max-h-9 common-transition lg:max-h-[42px]"
			src="/images/header/jetsmart-logo-colored.svg"
			alt="JetSMART"
		/>
	`,l=([i,v])=>(0,h.qy)`
		<li
			class=${P()("p-2",{"cursor-pointer text-n-blue":t!==i,"hover:bg-n-blue hover:bg-opacity-20":t!==i,"text-white bg-n-blue":t===i})}
			@click=${()=>n(i)}
		>
			${v}
		</li>
	`,d=()=>(0,h.qy)`
		<div class="mt-10 w-full">
			<h2 class="mb-2 text-left text-base font-bold uppercase text-n-blue">Dynamic Settings</h2>
			<ul class="mb-4 mt-2 list-none text-xs leading-normal text-n-dark-gray">
				<li class="flex flex-col">
					<span class="font-bold uppercase">Expires On:</span> <span> ${e.dynamicSettingsExpiresOn}</span>
				</li>
				<li class="flex flex-col">
					<span class="font-bold uppercase">Refreshed On:</span>
					<span>${e.dynamicSettingsRefreshedOn}</span>
				</li>
			</ul>
			<ul class="flex list-none flex-col text-base">
				${Array.from(en.entries()).map(l)}
			</ul>
		</div>
	`,o=()=>(0,h.qy)`
		<div class="mt-10 w-full">
			<h2 class="mb-2 text-left text-base font-bold uppercase text-n-blue">Cache States and Invalidation</h2>
			<ul class="flex list-none flex-col text-base">
				${Array.from(Zt.entries()).map(l)}
			</ul>
		</div>
	`;return{currentPage:t,htmlTemplate:()=>(0,h.qy)` <menu
			class="fixed inset-y-0 left-0 flex w-64 flex-col items-center overflow-y-auto border-r border-solid border-n-dark-gray bg-n-blue bg-opacity-10 p-10"
		>
			${r()} ${d()} ${o()}
			${s.htmlTemplate()}</menu
		>`}};var Hi=Object.defineProperty,Gi=Object.defineProperties,zi=Object.getOwnPropertyDescriptors,xa=Object.getOwnPropertySymbols,Yi=Object.prototype.hasOwnProperty,Ki=Object.prototype.propertyIsEnumerable,Sa=(e,t,n)=>t in e?Hi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,wa=(e,t)=>{for(var n in t||(t={}))Yi.call(t,n)&&Sa(e,n,t[n]);if(xa)for(var n of xa(t))Ki.call(t,n)&&Sa(e,n,t[n]);return e},Xi=(e,t)=>Gi(e,zi(t)),Qi=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});const Ie=e=>{const{ajaxRequest:t}=(0,_e.k)(),[n,s]=(0,T.J0)(!1),r=()=>{s(!0);const a=window.newRtLoader(".main-wrap");return a.startLoader(),a},l=a=>{s(!1),a&&(a.stopLoader(),a.destroy())},d=a=>Qi(void 0,null,function*(){if(a.preventDefault(),a.stopPropagation(),typeof e.validate=="function"&&!e.validate())return;const i=r();try{const v=Xi(wa(wa({},rt),e.newSettings),{ActionType:"save_dynamic_settings"});yield t({body:v,url:"/samuraijack"}),window.location.reload()}catch(v){l(i),alert("An error occurred while saving dynamic settings: "+v.message)}});return{htmlTemplate:()=>(0,c.qy)`
		<div class="mt-10 flex w-full items-center justify-end gap-8">
			<div class="text-sm text-n-red">
				* After saving, a page refresh (F5) may be necessary to properly reflect the saved state.
			</div>
			<button
				type="submit"
				class=${P()("bg-n-blue","hover:bg-n-red hover:text-white",{"pointer-events-none opacity-50":n})}
				value="Invalidate"
				@click=${d}
			>
				Save Dynamic Settings
			</button>
		</div>
	`}};var Zi=Object.defineProperty,el=Object.defineProperties,tl=Object.getOwnPropertyDescriptors,Ca=Object.getOwnPropertySymbols,nl=Object.prototype.hasOwnProperty,al=Object.prototype.propertyIsEnumerable,$a=(e,t,n)=>t in e?Zi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vt=(e,t)=>{for(var n in t||(t={}))nl.call(t,n)&&$a(e,n,t[n]);if(Ca)for(var n of Ca(t))al.call(t,n)&&$a(e,n,t[n]);return e},Wt=(e,t)=>el(e,tl(t));const rl=e=>{const t=Ie({newSettings:e.newSettings}),n=d=>{const[o,a]=d.split("-");return`${o.toLowerCase()}-${a.toUpperCase()}`},s=(d,o,a)=>{const i=d.target.value,x=e.newSettings.DynamicCultureNameSettings.find(y=>o.Culture.toLowerCase()===y.Culture.toLowerCase())?e.newSettings.DynamicCultureNameSettings.map(y=>o.Culture.toLowerCase()===y.Culture.toLowerCase()?Wt(Vt({},y),{[a]:i}):y):[...e.newSettings.DynamicCultureNameSettings,Wt(Vt({},o),{[a]:i})];e.setNewSettings(Wt(Vt({},e.newSettings),{DynamicCultureNameSettings:x}))},r=(d,o)=>{const a=e.newSettings.DynamicCultureNameSettings.find(i=>i.Culture.toLowerCase()===d.toLowerCase())||{Culture:d,Es:"",En:"",Pt:""};return(0,h.qy)`
			<tr class=${P()("pb-4 border-b border-solid border-n-blue",{"bg-gray-100":o%2===0})}>
				<td class="w-16 px-2 py-4 align-middle">
					<label class="mt-5 block text-right font-bold">${n(a.Culture)}</label>
				</td>
				<td class="px-1 py-4">
					<label class="mb-2 block text-sm font-bold">ES</label>
					<input
						class="flex h-10 w-full appearance-none items-center rounded-lg border border-solid border-black px-4"
						value=${a.Es}
						@input=${i=>s(i,a,"Es")}
					/>
				</td>
				<td class="px-1 py-4">
					<label class="mb-2 block text-sm font-bold">EN</label>
					<input
						class="flex h-10 w-full appearance-none items-center rounded-lg border border-solid border-black px-4"
						value=${a.En}
						@input=${i=>s(i,a,"En")}
					/>
				</td>
				<td class="px-1 py-4">
					<label class="mb-2 block text-sm font-bold">PT</label>
					<input
						class="flex h-10 w-full appearance-none items-center rounded-lg border border-solid border-black px-4"
						value=${a.Pt}
						@input=${i=>s(i,a,"Pt")}
					/>
				</td>
			</tr>
		`};return{htmlTemplate:()=>(0,h.qy)`
		<section class="mt-5 max-w-[640px]">
			<table class="mb-5 w-full">
				${Array.from(I.u0.keys()).map(r)}
			</table>
			${t.htmlTemplate()}
		</section>
	`}};var ol=Object.defineProperty,sl=Object.defineProperties,il=Object.getOwnPropertyDescriptors,Ta=Object.getOwnPropertySymbols,ll=Object.prototype.hasOwnProperty,cl=Object.prototype.propertyIsEnumerable,Da=(e,t,n)=>t in e?ol(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dl=(e,t)=>{for(var n in t||(t={}))ll.call(t,n)&&Da(e,n,t[n]);if(Ta)for(var n of Ta(t))cl.call(t,n)&&Da(e,n,t[n]);return e},ul=(e,t)=>sl(e,il(t));const ml=e=>{const t=Ie({newSettings:e.newSettings}),n=r=>(0,c.qy)`
		<ac-input
			.label=${r.label}
			.value=${e.newSettings[r.key]}
			.onInput=${l=>e.setNewSettings(ul(dl({},e.newSettings),{[r.key]:l}))}
		></ac-input>
	`;return{htmlTemplate:()=>(0,c.qy)`
		<section class="mt-5 max-w-[640px]">
			<div class="grid grid-cols-2 gap-4">
				${n({label:"Default Promo Code CL",key:"DefaultPromotionCodeCl"})}
				${n({label:"Default Promo Code AR",key:"DefaultPromotionCodeAr"})}
				${n({label:"Default Promo Code BR",key:"DefaultPromotionCodeBr"})}
				${n({label:"Default Promo Code CO",key:"DefaultPromotionCodeCo"})}
				${n({label:"Default Promo Code EC",key:"DefaultPromotionCodeEc"})}
				${n({label:"Default Promo Code PY",key:"DefaultPromotionCodePy"})}
				${n({label:"Default Promo Code PE",key:"DefaultPromotionCodePe"})}
				${n({label:"Default Promo Code UY",key:"DefaultPromotionCodeUy"})}
				${n({label:"Default Promo Code US",key:"DefaultPromotionCodeUs"})}
				${n({label:"Default Promo Code DO",key:"DefaultPromotionCodeDo"})}
				${n({label:"Default Promo Code GB",key:"DefaultPromotionCodeGb"})}
			</div>
			${t.htmlTemplate()}
		</section>
	`}};var vl=Object.defineProperty,gl=Object.defineProperties,hl=Object.getOwnPropertyDescriptors,Ma=Object.getOwnPropertySymbols,bl=Object.prototype.hasOwnProperty,fl=Object.prototype.propertyIsEnumerable,Oa=(e,t,n)=>t in e?vl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ht=(e,t)=>{for(var n in t||(t={}))bl.call(t,n)&&Oa(e,n,t[n]);if(Ma)for(var n of Ma(t))fl.call(t,n)&&Oa(e,n,t[n]);return e},Gt=(e,t)=>gl(e,hl(t));const pl=e=>{const t=Ie({newSettings:e.newSettings}),n=d=>{const o=Number(d.target.value);e.setNewSettings(Gt(Ht({},e.newSettings),{TimetableMaxMonthsFallback:isNaN(o)?0:o}))},s=d=>(0,c.qy)`
		<admin-checkbox
			.checked=${e.newSettings.ShowFarePricesCultures[d.key]}
			.label=${d.label}
			.justify=${"start"}
			.onClick=${()=>e.setNewSettings(Gt(Ht({},e.newSettings),{ShowFarePricesCultures:Gt(Ht({},e.newSettings.ShowFarePricesCultures),{[d.key]:!e.newSettings.ShowFarePricesCultures[d.key]})}))}
		></admin-checkbox>
	`,r=()=>(0,c.qy)`
		<div class="my-6">
			<div class="w-80">
				<label class="mb-1 block text-sm"
					>Number of months to show availability in if FareCache is not available:</label
				>
				<input
					class="flex h-10 w-full appearance-none items-center rounded-lg border border-solid border-black px-4"
					type="number"
					value=${e.newSettings.TimetableMaxMonthsFallback.toString()||""}
					@input=${n}
				/>
			</div>
		</div>
	`;return{htmlTemplate:()=>(0,c.qy)`
		<section class="mt-5 max-w-[640px]">
			<div class="flex flex-col gap-2">
				${s({label:"Show Fare Prices for Chile",key:"Cl"})}
				${s({label:"Show Fare Prices for Argentina",key:"Ar"})}
				${s({label:"Show Fare Prices for Brazil",key:"Br"})}
				${s({label:"Show Fare Prices for Colombia",key:"Co"})}
				${s({label:"Show Fare Prices for Ecuador",key:"Ec"})}
				${s({label:"Show Fare Prices for Paraguay",key:"Py"})}
				${s({label:"Show Fare Prices for Peru",key:"Pe"})}
				${s({label:"Show Fare Prices for Uruguay",key:"Uy"})}
				${s({label:"Show Fare Prices for the USA",key:"Us"})}
				${s({label:"Show Fare Prices for the Dominican R.",key:"Do"})}
				${s({label:"Show Fare Prices for Others (EN)",key:"Gb"})}
				${r()}
			</div>
			${t.htmlTemplate()}
		</section>
	`}};var yl=Object.defineProperty,xl=Object.defineProperties,Sl=Object.getOwnPropertyDescriptors,Pa=Object.getOwnPropertySymbols,wl=Object.prototype.hasOwnProperty,Cl=Object.prototype.propertyIsEnumerable,Aa=(e,t,n)=>t in e?yl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zt=(e,t)=>{for(var n in t||(t={}))wl.call(t,n)&&Aa(e,n,t[n]);if(Pa)for(var n of Pa(t))Cl.call(t,n)&&Aa(e,n,t[n]);return e},Yt=(e,t)=>xl(e,Sl(t));const $l=e=>{const t=Ie({newSettings:e.newSettings}),n=()=>e.setNewSettings(Yt(zt({},e.newSettings),{IsQueueItOn:!e.newSettings.IsQueueItOn})),s=()=>(0,c.qy)`
		<div class="pt-4">
			<admin-checkbox-input
				.checkboxChecked=${e.newSettings.IsQueueItOn}
				.checkboxLabel=${"QueueIt On"}
				.inputLabel=${"QueueIt Prefix"}
				.inputValue=${e.newSettings.QueueItPrefix}
				.onCheckboxClick=${n}
				.onInput=${o=>e.setNewSettings(Yt(zt({},e.newSettings),{QueueItPrefix:o}))}
			></admin-checkbox-input>
		</div>
	`,r=(o,a)=>(0,c.qy)`
		<admin-checkbox
			.checked=${e.newSettings[a]}
			.justify=${"start"}
			.label=${o}
			.onClick=${()=>e.setNewSettings(Yt(zt({},e.newSettings),{[a]:!e.newSettings[a]}))}
		></admin-checkbox>
	`,l=()=>(0,c.qy)`<div
		class="mt-4 grid grid-cols-3 gap-4 border-t border-solid border-[#ccc] pt-4"
	>
		${r("BancoEstado On","IsBancoEstadoOn")} ${r("Peru Compra On","IsPeruCompraOn")}
		${r("American Airlines On","IsAmericanOn")}
		${r("Car Rental Search On","IsCarRentalOn")}
		${r("Hotel Search On","isHotelsOn")} ${r("Transfer Search On","IsTransfersOn")}
	</div>`;return{htmlTemplate:()=>(0,c.qy)`
			<section class="mt-5 max-w-[640px]">
				<div>${s()} ${l()}</div>
				${t.htmlTemplate()}
			</section>
		`}};var Tl=Object.defineProperty,Dl=Object.defineProperties,Ml=Object.getOwnPropertyDescriptors,_a=Object.getOwnPropertySymbols,Ol=Object.prototype.hasOwnProperty,Pl=Object.prototype.propertyIsEnumerable,Ia=(e,t,n)=>t in e?Tl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,He=(e,t)=>{for(var n in t||(t={}))Ol.call(t,n)&&Ia(e,n,t[n]);if(_a)for(var n of _a(t))Pl.call(t,n)&&Ia(e,n,t[n]);return e},Ge=(e,t)=>Dl(e,Ml(t));const mc=!1,vc="ac-insurance-tab-settings",ka="dynamic-insurance-tab-checkbox-",Ea="dynamic-insurance-tab-input-",Al=e=>{const t=Ie({newSettings:e.newSettings}),n=(d,o)=>{d.preventDefault(),d.stopPropagation();const i=e.newSettings.DynamicInsuranceTabSettings.find(v=>o.Culture.toLowerCase()===v.Culture.toLowerCase())?e.newSettings.DynamicInsuranceTabSettings.map(v=>o.Culture.toLowerCase()===v.Culture.toLowerCase()?Ge(He({},v),{IsActive:!v.IsActive}):v):[...e.newSettings.DynamicInsuranceTabSettings,Ge(He({},o),{IsActive:!0})];e.setNewSettings(Ge(He({},e.newSettings),{DynamicInsuranceTabSettings:i}))},s=(d,o)=>{const a=d.target.value,v=e.newSettings.DynamicInsuranceTabSettings.find(x=>o.Culture.toLowerCase()===x.Culture.toLowerCase())?e.newSettings.DynamicInsuranceTabSettings.map(x=>o.Culture.toLowerCase()===x.Culture.toLowerCase()?Ge(He({},x),{Url:a}):x):[...e.newSettings.DynamicInsuranceTabSettings,Ge(He({},o),{Url:a})];e.setNewSettings(Ge(He({},e.newSettings),{DynamicInsuranceTabSettings:v}))},r=d=>{const o=e.newSettings.DynamicInsuranceTabSettings.find(a=>a.Culture.toLowerCase()===d.toLowerCase())||{Culture:d,IsActive:!1,Url:""};return(0,h.qy)`
			<tr class="border-b border-solid border-n-blue pb-4 odd:bg-gray-100">
				<td class="px-2 py-4 align-middle">
					<span class="inline-block">
						<input
							type="checkbox"
							id=${`${ka}${d.split("-")[1]}`}
							?checked=${o.IsActive||!1}
							@change=${a=>n(a,o)}
						/>
						<label for=${`${ka}${d.split("-")[1]}`}>
							Show Insurance Tab for ${I.u0.get(d)}
						</label>
					</span>
				</td>

				<td class="px-2 py-4 align-middle">
					<label class="mb-1 block text-sm" for=${`${Ea}${o.Culture.split("-")[1]}`}>
						Button Url
					</label>
					<input
						class="flex h-10 w-full appearance-none items-center rounded-lg border border-solid border-black px-4"
						type="text"
						id=${`${Ea}${o.Culture.split("-")[1]}`}
						value=${o.Url||""}
						@input=${a=>s(a,o)}
					/>
				</td>
			</tr>
		`};return{htmlTemplate:()=>(0,h.qy)`
		<section class="mt-6 max-w-[640px]">
			<table class="w-full">
				${Array.from(I.u0.keys()).map(r)}
			</table>
			${t.htmlTemplate()}
		</section>
	`}};var _l=Object.defineProperty,Il=Object.defineProperties,kl=Object.getOwnPropertyDescriptors,La=Object.getOwnPropertySymbols,El=Object.prototype.hasOwnProperty,Ll=Object.prototype.propertyIsEnumerable,Ra=(e,t,n)=>t in e?_l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,st=(e,t)=>{for(var n in t||(t={}))El.call(t,n)&&Ra(e,n,t[n]);if(La)for(var n of La(t))Ll.call(t,n)&&Ra(e,n,t[n]);return e},it=(e,t)=>Il(e,kl(t));const Rl=e=>{const[t,n]=(0,T.J0)(!1),s=()=>(n(!0),e.newSettings.DynamicPromoCodeSettings.filter(u=>u.Code||u.Culture||u.ProgramCodeAndLevel||u.RoleCode).every(u=>u.Code&&(u.Culture||u.RoleCode||u.ProgramCodeAndLevel))),r=Ie({newSettings:e.newSettings,validate:s}),l=()=>{e.setNewSettings(it(st({},e.newSettings),{DynamicPromoCodeSettings:[...e.newSettings.DynamicPromoCodeSettings,{Code:"",Culture:"",RoleCode:"",ProgramCodeAndLevel:""}]}))},d=u=>{e.setNewSettings(it(st({},e.newSettings),{DynamicPromoCodeSettings:e.newSettings.DynamicPromoCodeSettings.filter(b=>b.Code!==u.Code||b.Culture!==u.Culture||b.RoleCode!==u.RoleCode||b.ProgramCodeAndLevel!==u.ProgramCodeAndLevel)}))},o=(u,b,f,m)=>{const $=u.target.value,M=e.newSettings.DynamicPromoCodeSettings[m]?e.newSettings.DynamicPromoCodeSettings.map((R,z)=>z===m?it(st({},R),{[f]:$}):R):[...e.newSettings.DynamicPromoCodeSettings,it(st({},b),{[f]:$})];e.setNewSettings(it(st({},e.newSettings),{DynamicPromoCodeSettings:M}))};(0,T.xG)(l,[]);const a=(u,b)=>(0,h.qy)`
			<td class="px-2 py-4 align-bottom">
				<label class="mb-1 block text-sm">Culture</label>
				<input
					class=${P()("flex h-10 w-full appearance-none items-center rounded-lg border border-solid border-black px-4",{"bg-n-red bg-opacity-30":t&&!u.ProgramCodeAndLevel&&!u.Culture&&!u.RoleCode&&u.Code})}
					value=${u.Culture||""}
					@input=${f=>o(f,u,"Culture",b)}
				/>
			</td>
		`,i=(u,b)=>(0,h.qy)`
			<td class="px-2 py-4 align-bottom">
				<label class="mb-1 block text-sm">Role Code</label>
				<input
					class=${P()("flex h-10 w-full appearance-none items-center rounded-lg border border-solid border-black px-4",{"bg-n-red bg-opacity-30":t&&!u.ProgramCodeAndLevel&&!u.Culture&&!u.RoleCode&&u.Code})}
					value=${u.RoleCode||""}
					@input=${f=>o(f,u,"RoleCode",b)}
				/>
			</td>
		`,v=(u,b)=>(0,h.qy)`
			<td class="px-2 py-4 align-bottom">
				<label class="mb-1 block text-sm">Prg Code-Level (BEC-SMT)</label>
				<input
					class=${P()("flex h-10 w-full appearance-none items-center rounded-lg border border-solid border-black px-4",{"bg-n-red bg-opacity-30":t&&!u.ProgramCodeAndLevel&&!u.Culture&&!u.RoleCode&&u.Code})}
					value=${u.ProgramCodeAndLevel||""}
					@input=${f=>o(f,u,"ProgramCodeAndLevel",b)}
				/>
			</td>
		`,x=(u,b)=>(0,h.qy)`
			<td class="px-2 py-4 align-bottom">
				<label class="mb-1 block text-sm">Promo Code</label>
				<input
					class=${P()("flex h-10 w-full appearance-none items-center rounded-lg border border-solid border-black px-4",{"bg-n-red bg-opacity-30":t&&!u.Code&&(u.Culture||u.RoleCode||u.ProgramCodeAndLevel)})}
					value=${u.Code||""}
					@input=${f=>o(f,u,"Code",b)}
				/>
			</td>
		`,y=(u,b)=>(0,h.qy)`
		<tr class="border-b border-solid border-n-blue pb-4 odd:bg-gray-100">
			${a(u,b)} ${i(u,b)}
			${v(u,b)} ${x(u,b)}
			${w(u,b)}
		</tr>
	`,w=(u,b)=>(0,h.qy)`
		<div class="flex h-full w-full flex-col items-center justify-center px-2 pb-2 pt-[52px] text-center">
			<label class="mb-1 block text-sm"></label>
			${O(u,b)} ${S(b)}
		</div>
	`,O=(u,b)=>b<e.newSettings.DynamicPromoCodeSettings.length-1?(0,h.qy)`
					<div
						class="cursor-pointer rounded-lg bg-n-red px-2 py-1 text-xs font-bold text-white hover:bg-n-blue hover:text-white"
						@click=${()=>d(u)}
					>
						Delete
					</div>
			  `:"",S=u=>u===e.newSettings.DynamicPromoCodeSettings.length-1?(0,h.qy)`
					<div
						class="cursor-pointer rounded-lg bg-n-orange px-2 py-1 text-xs font-bold text-white hover:bg-n-blue hover:text-white"
						@click=${l}
					>
						Add
					</div>
			  `:"";return{htmlTemplate:()=>(0,h.qy)`
		<section class="mt-6 max-w-[640px]">
			<table>
				${e.newSettings.DynamicPromoCodeSettings.map(y)}
			</table>

			${r.htmlTemplate()}
		</section>
	`}};var jl=Object.defineProperty,ql=Object.defineProperties,Nl=Object.getOwnPropertyDescriptors,ja=Object.getOwnPropertySymbols,Fl=Object.prototype.hasOwnProperty,Bl=Object.prototype.propertyIsEnumerable,qa=(e,t,n)=>t in e?jl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Kt=(e,t)=>{for(var n in t||(t={}))Fl.call(t,n)&&qa(e,n,t[n]);if(ja)for(var n of ja(t))Bl.call(t,n)&&qa(e,n,t[n]);return e},Xt=(e,t)=>ql(e,Nl(t));const Ul=[I.TK,I.ny],Jl=e=>{const t=Ie({newSettings:e.newSettings}),n=(o,a,i)=>{const v=o.target.value,x=e.newSettings.DefaultRouteCountrySettings.find(w=>w.Culture.toLowerCase()===a.Culture.toLowerCase()),y=x?e.newSettings.DefaultRouteCountrySettings.map(w=>w.Culture.toLowerCase()===x.Culture.toLowerCase()?Xt(Kt({},x),{[i]:v}):w):[...e.newSettings.DefaultRouteCountrySettings,Xt(Kt({},a),{[i]:v})];e.setNewSettings(Xt(Kt({},e.newSettings),{DefaultRouteCountrySettings:y}))},s=(o,a,i)=>(0,h.qy)`<option
			value=${o.substring(3)}
			?selected=${i&&o.includes(i)}
		>
			${a}
		</option>`,r=o=>(0,h.qy)`<option value=""></option>
			${Array.from(I.u0.entries()).map(([a,i])=>Ul.includes(a.toLowerCase())?"":s(a,i,o))}`,l=([o,a])=>{const i=e.newSettings.DefaultRouteCountrySettings.find(v=>v.Culture.toLowerCase()===o.toLowerCase())||{Culture:o,DefaultOriginCountryCode:"",DefaultDestinationCountryCode:""};return(0,h.qy)`
			<tr class="border-b border-solid border-n-blue pb-4 odd:bg-gray-100">
				<td class="px-2 py-4">
					<div class="border-[#a6a6a6] p-[10px] text-right text-sm">${a}</div>
				</td>
				<td class="px-1 py-4">
					<select
						class="flex h-10 w-full appearance-none items-center rounded-lg border border-solid border-black px-4"
						@change=${v=>n(v,i,"DefaultOriginCountryCode")}
					>
						${r(i.DefaultOriginCountryCode)}
					</select>
				</td>
				<td class="px-1 py-4">
					<select
						class="flex h-10 w-full appearance-none items-center rounded-lg border border-solid border-black px-4"
						@change=${v=>n(v,i,"DefaultDestinationCountryCode")}
					>
						${r(i.DefaultDestinationCountryCode)}
					</select>
				</td>
			</tr>
		`};return{htmlTemplate:()=>(0,h.qy)`
		<section class="mt-5 max-w-[640px]">
			<table class="mb-4 w-full">
				<thead>
					<th class="px-2 py-4"></th>
					<th class="px-1 py-4">Default Origin Country</th>
					<th class="px-1 py-4">Default Destination Country</th>
				</thead>
				<tbody>
					${Array.from(I.u0.entries()).map(l)}
				</tbody>
			</table>
			${t.htmlTemplate()}
		</section>
	`}};var Vl=Object.defineProperty,Wl=Object.defineProperties,Hl=Object.getOwnPropertyDescriptors,Na=Object.getOwnPropertySymbols,Gl=Object.prototype.hasOwnProperty,zl=Object.prototype.propertyIsEnumerable,Fa=(e,t,n)=>t in e?Vl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lt=(e,t)=>{for(var n in t||(t={}))Gl.call(t,n)&&Fa(e,n,t[n]);if(Na)for(var n of Na(t))zl.call(t,n)&&Fa(e,n,t[n]);return e},Qt=(e,t)=>Wl(e,Hl(t));const Yl=e=>{const t=[...e.newSettings.RetargetingUrls||[]],[n,s]=(0,T.J0)(t),[r,l]=(0,T.J0)({}),d=S=>S===""?!0:I.el.test(S),o=S=>{const p=S.filter(b=>b.trim()!==""),u=new Set(p);return p.length!==u.size},a=(S,p)=>{const u=[...n];u[S]=p,s(u);const b=u.filter(f=>f.trim()!=="");if(e.setNewSettings(Qt(lt({},e.newSettings),{RetargetingUrls:b})),r[S]){const f=lt({},r);delete f[S],l(f)}},i=()=>{const S=[...n,""];s(S);const p=S.filter(u=>u.trim()!=="");e.setNewSettings(Qt(lt({},e.newSettings),{RetargetingUrls:p}))},v=S=>{if(n.length<=1||!window.confirm("Are you sure you want to delete this URL? (Note that you will also need to save the settings to apply the deletion.)"))return;const u=n.filter(($,C)=>C!==S);s(u);const b=lt({},r);delete b[S];const f={};Object.keys(b).forEach($=>{const C=parseInt($);C>S?f[C-1]=b[C]:f[C]=b[C]}),l(f);const m=u.filter($=>$.trim()!=="");e.setNewSettings(Qt(lt({},e.newSettings),{RetargetingUrls:m}))},x=()=>{const S={};if(n.forEach((p,u)=>{p.trim()===""&&(S[u]="This field is required")}),n.forEach((p,u)=>{p.trim()!==""&&!S[u]&&!d(p)&&(S[u]="URL can only contain URL-safe characters")}),o(n)){const p=new Map;n.forEach((u,b)=>{u.trim()!==""&&(p.has(u)||p.set(u,[]),p.get(u).push(b))}),p.forEach(u=>{u.length>1&&u.forEach(b=>{S[b]||(S[b]="Duplicate URL detected")})})}return l(S),!(Object.keys(S).length>0)},y=Ie({newSettings:e.newSettings,validate:x}),w=(S,p)=>{const u=r[p]!==void 0,b=n.length>1;return(0,c.qy)`
			<div class="mb-4">
				<div class="flex items-center gap-2">
					<ac-input
						.label=${`URL ${p+1}`}
						.value=${S}
						.onInput=${f=>a(p,f)}
						.error=${u}
					></ac-input>
					${b?(0,c.qy)`
								<button
									type="button"
									class="small rounded bg-n-red text-white hover:bg-n-blue"
									@click=${()=>v(p)}
									title="Delete this URL"
								>
									Delete
								</button>
						  `:""}
				</div>
				${u?(0,c.qy)`<div class="mt-1 text-sm text-n-red">${r[p]}</div>`:""}
			</div>
		`};return{htmlTemplate:()=>(0,c.qy)`
		<section class="mt-5">
			<div class="mb-4 text-sm text-n-dark-gray">
				Add retargeting URLs below. Each URL must be unique and contain only URL-safe characters.
			</div>
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
				${n.map((S,p)=>w(S,p))}
			</div>
			<button type="button" class="mb-4 bg-n-blue hover:bg-n-red hover:text-white" @click=${i}>
				Add URL
			</button>
			${y.htmlTemplate()}
		</section>
	`}},Zt=new Map([["navitaire-settings","Navitaire Settings"],["stations","Stations"],["timetable","Timetable"],["sitemap","Sitemap"],["widgets","Widgets"],["pages","Pages"]]),en=new Map([["feature-switches","Feature Switches"],["culture-names","Culture Names"],["default-countries","Default Countries"],["fare-cache","Fare Cache"],["default-promo-code","Default Promo Code"],["dynamic-promo-codes","Dynamic Promo Codes"],["insurance-tab","Insurance Tab"],["retargeting-urls","Retargeting URLs"]]),Kl=["admin-props"],Xl="admin-page",Ql=e=>{const t=e.adminProps&&typeof e.adminProps=="string"?(0,K.ny)(e.adminProps):void 0,[n,s]=(0,h.J0)(t.DynamicSettings),r=Wi({dynamicSettingsExpiresOn:t.DynamicSettingsExpiresOn,dynamicSettingsRefreshedOn:t.DynamicSettingsRefreshedOn,IsPreview:t.IsPreview}),l=_i({isPreview:t.IsPreview,state:t.Stations}),d=ki({isPreview:t.IsPreview,state:t.NavitaireSettings}),o=Li(),a=ji({isPreview:t.IsPreview,state:t.Sitemap}),i=Fi({homeWidgetsValues:t.HomeWidgetsValues,isPreview:t.IsPreview,state:t.HomeWidgetsCacheState}),v=Ui({isPreview:t.IsPreview,pagesValues:t.PagesValues}),x=$l({newSettings:n,setNewSettings:s}),y=Al({newSettings:n,setNewSettings:s}),w=rl({newSettings:n,setNewSettings:s}),O=Rl({newSettings:n,setNewSettings:s}),S=Jl({newSettings:n,setNewSettings:s}),p=pl({newSettings:n,setNewSettings:s}),u=ml({newSettings:n,setNewSettings:s}),b=Yl({newSettings:n,setNewSettings:s}),f=()=>{if(!r.currentPage)return"";const m=Zt.get(r.currentPage)||en.get(r.currentPage);return(0,c.qy)`
			<h1 class="mb-2 mt-8 border-b border-solid border-n-blue">
				<span class="inline-block bg-n-blue p-2 text-lg font-bold text-white"> ${m} </span>
			</h1>
		`};return(0,c.qy)`
		${r.htmlTemplate()}
		<div class="fixed bottom-[60px] left-64 right-0 top-4 overflow-y-auto bg-white px-8">
			${f()} ${r.currentPage==="stations"?l.htmlTemplate():""}
			${r.currentPage==="navitaire-settings"?d.htmlTemplate():""}
			${r.currentPage==="timetable"?o.htmlTemplate():""}
			${r.currentPage==="sitemap"?a.htmlTemplate():""}
			${r.currentPage==="widgets"?i.htmlTemplate():""}
			${r.currentPage==="pages"?v.htmlTemplate():""}
			${r.currentPage==="feature-switches"?x.htmlTemplate():""}
			${r.currentPage==="culture-names"?w.htmlTemplate():""}
			${r.currentPage==="fare-cache"?p.htmlTemplate():""}
			${r.currentPage==="default-promo-code"?u.htmlTemplate():""}
			${r.currentPage==="insurance-tab"?y.htmlTemplate():""}
			${r.currentPage==="dynamic-promo-codes"?O.htmlTemplate():""}
			${r.currentPage==="default-countries"?S.htmlTemplate():""}
			${r.currentPage==="retargeting-urls"?b.htmlTemplate():""}
		</div>
	`},Zl="admin-checkbox",ec=e=>{const t={checked:e.checked||!1,justify:e.justify,label:e.label||"",onClick:e.onClick||(()=>{})},n=s=>{s.preventDefault(),s.stopPropagation(),t.onClick()};return(0,h.qy)`
		<label
			class=${P()("flex select-none cursor-pointer items-center gap-2 whitespace-nowrap",{"justify-end":t.justify!=="start"})}
			@click=${n}
		>
			<input type="checkbox" class="pointer-events-none" ?checked=${t.checked} />
			<span>${t.label}</span>
		</label>
	`},tc="admin-checkbox-input",nc=e=>{const t={checkboxChecked:e.checkboxChecked||!1,checkboxLabel:e.checkboxLabel||"",inputLabel:e.inputLabel||"",inputValue:e.inputValue||"",justify:e.justify,onCheckboxClick:e.onCheckboxClick||(()=>{}),onInput:e.onInput||(()=>{})},n=r=>{const l=r.target.value;t.onInput(l)},s=()=>(0,c.qy)`
		<div class="pt-7">
			<admin-checkbox
				.checked=${t.checkboxChecked}
				.justify=${t.justify}
				.label=${t.checkboxLabel}
				.onClick=${t.onCheckboxClick}
			></admin-checkbox>
		</div>
	`;return(0,c.qy)`
		<div class="mt-4 grid select-none grid-cols-[2fr_3fr] gap-4">
			${s()}

			<div class="w-full">
				<label class="mb-1 block text-sm">${t.inputLabel}</label>
				<input
					class="flex h-10 w-full appearance-none items-center rounded-lg border border-solid border-black px-4"
					type="text"
					value=${t.inputValue||""}
					@input=${n}
				/>
			</div>
		</div>
	`};function ac(){customElements.define(tr,(0,h.s9)(nr,{useShadowDOM:er,observedAttributes:[]})),customElements.define(Zl,(0,h.s9)(ec,{useShadowDOM:!1,observedAttributes:[]})),customElements.define(tc,(0,h.s9)(nc,{useShadowDOM:!1,observedAttributes:[]})),customElements.define(Xl,(0,h.s9)(Ql,{useShadowDOM:!1,observedAttributes:Kl})),customElements.define(Si,(0,h.s9)(wi,{useShadowDOM:!1,observedAttributes:xi})),customElements.define(Ho,(0,h.s9)(Yo,{useShadowDOM:Wo,observedAttributes:Go})),customElements.define(Xo,(0,h.s9)(Zo,{useShadowDOM:Ko,observedAttributes:Qo})),customElements.define(ns,(0,h.s9)(as,{useShadowDOM:ts,observedAttributes:[]})),customElements.define(os,(0,h.s9)(is,{useShadowDOM:ss,observedAttributes:[]})),customElements.define(cs,(0,h.s9)(ds,{useShadowDOM:ls,observedAttributes:[]})),customElements.define(ms,(0,h.s9)(vs,{useShadowDOM:us,observedAttributes:[]})),customElements.define(gs,(0,h.s9)(fs,{useShadowDOM:hs,observedAttributes:bs})),customElements.define(ys,(0,h.s9)(Ss,{useShadowDOM:xs,observedAttributes:[]})),customElements.define(Gs,(0,h.s9)(Ys,{useShadowDOM:Hs,observedAttributes:zs})),customElements.define(Xs,(0,h.s9)(Qs,{useShadowDOM:Ks,observedAttributes:[]})),customElements.define(Zs,(0,h.s9)(ti,{useShadowDOM:ei,observedAttributes:[]})),customElements.define(ci,(0,h.s9)(ui,{useShadowDOM:di,observedAttributes:[]})),customElements.define(ni,(0,h.s9)(ri,{useShadowDOM:ai,observedAttributes:[]})),customElements.define(si,(0,h.s9)(li,{useShadowDOM:ii,observedAttributes:[]}))}var gc=E(1593),hc=E(8142),bc=E(9406),rc=(e,t,n)=>new Promise((s,r)=>{var l=a=>{try{o(n.next(a))}catch(i){r(i)}},d=a=>{try{o(n.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,d);o((n=n.apply(e,t)).next())});"serviceWorker"in navigator&&navigator.serviceWorker.register("../../../SalesManagoServiceWorker.js",{scope:"/"}).then(function(){console.log("Service Worker Registered")});const ct=new dt.y("js","common");window.eventBus||(window.eventBus=new pe.l),window.PubSubs||(window.PubSubs={VariantsReady:new ue.G}),document.addEventListener("click",e=>ue._.DocumentClicked.publish({mouseEvent:e})),document.addEventListener("DOMContentLoaded",()=>{window.JetSmart&&(window.exposeToAmplitude=Fn.z,window.PubSubs.VariantsReady.publish({variants:window.JetSmart.Variants}))}),window.__forceSmoothScrollPolyfill__=!0,re().polyfill(),se().locale(ge.Hg.indexOf("en")>-1?"en":ge.Hg.indexOf("pt")>-1?"pt-br":"es");function oc(){return rc(this,null,function*(){yield g.A.init({initImmediate:!0,nsSeparator:!1,keySeparator:!1,lng:ge.Hg.indexOf("en")>-1?"enus":ge.Hg.indexOf("pt")>-1?"ptbr":"escl",fallbackLng:["escl"],returnEmptyString:!1,resources:{escl:{translation:Ae},enus:{translation:Se},ptbr:{translation:ke}},interpolation:{format:(e,t)=>{if(t==="custom"&&e){const n=e;return`<a target="blank" href="${n.url}">${n.title}</a>`}return e}}},ac)})}oc()},9554:(V,ie,E)=>{"use strict";E.d(ie,{I:()=>ve,t:()=>me});function ve(re){return re==null||re.length===0}const me=(re,fe)=>re?.toLowerCase()===fe?.toLowerCase()}},rn={};function ae(V){var ie=rn[V];if(ie!==void 0)return ie.exports;var E=rn[V]={id:V,loaded:!1,exports:{}};return an[V].call(E.exports,E,E.exports,ae),E.loaded=!0,E.exports}ae.m=an,(()=>{var V=[];ae.O=(ie,E,ve,me)=>{if(E){me=me||0;for(var re=V.length;re>0&&V[re-1][2]>me;re--)V[re]=V[re-1];V[re]=[E,ve,me];return}for(var fe=1/0,re=0;re<V.length;re++){for(var[E,ve,me]=V[re],ge=!0,pe=0;pe<E.length;pe++)(me&!1||fe>=me)&&Object.keys(ae.O).every(h=>ae.O[h](E[pe]))?E.splice(pe--,1):(ge=!1,me<fe&&(fe=me));if(ge){V.splice(re--,1);var g=ve();g!==void 0&&(ie=g)}}return ie}})(),ae.n=V=>{var ie=V&&V.__esModule?()=>V.default:()=>V;return ae.d(ie,{a:ie}),ie},ae.d=(V,ie)=>{for(var E in ie)ae.o(ie,E)&&!ae.o(V,E)&&Object.defineProperty(V,E,{enumerable:!0,get:ie[E]})},ae.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),ae.hmd=V=>(V=Object.create(V),V.children||(V.children=[]),Object.defineProperty(V,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+V.id)}}),V),ae.o=(V,ie)=>Object.prototype.hasOwnProperty.call(V,ie),ae.r=V=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(V,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(V,"__esModule",{value:!0})},ae.nmd=V=>(V.paths=[],V.children||(V.children=[]),V),(()=>{var V={792:0};ae.O.j=ve=>V[ve]===0;var ie=(ve,me)=>{var[re,fe,ge]=me,pe,g,Ae=0;if(re.some(ke=>V[ke]!==0)){for(pe in fe)ae.o(fe,pe)&&(ae.m[pe]=fe[pe]);if(ge)var Se=ge(ae)}for(ve&&ve(me);Ae<re.length;Ae++)g=re[Ae],ae.o(V,g)&&V[g]&&V[g][0](),V[g]=0;return ae.O(Se)},E=self.webpackChunk=self.webpackChunk||[];E.forEach(ie.bind(null,0)),E.push=ie.bind(null,E.push.bind(E))})(),ae.O(void 0,[121,671,645],()=>ae(9541));var on=ae.O(void 0,[121,671,645],()=>ae(178));on=ae.O(on)})();

//# sourceMappingURL=main_622c1bee5abc2bb22af2.js.map