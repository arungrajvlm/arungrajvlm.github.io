(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],d=0,v=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&v.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},i=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c60a7919"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,a[1](c)}o[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},i=[],r=a("2877"),s={},l=Object(r["a"])(s,o,i,!1,null,null,null),c=l.exports,d=a("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var u=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e){return[e.heading?a("v-row",{key:e.heading,attrs:{align:"center"}},[a("v-col",{attrs:{cols:"6"}},[e.heading?a("v-subheader",[t._v(t._s(e.heading))]):t._e()],1),a("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[a("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?a("v-list-group",{key:e.text,attrs:{"prepend-icon":e.model?e.icon:e["icon-alt"],"append-icon":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.text))])],1)]},proxy:!0}],null,!0),model:{value:e.model,callback:function(a){t.$set(e,"model",a)},expression:"item.model"}},t._l(e.children,(function(e,n){return a("v-list-item",{key:n,attrs:{link:""}},[e.icon?a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1):t._e(),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})),1):a("v-list-item",{key:e.text,attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.text))])],1)],1)]}))],2)],1),a("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-3",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v("G-Track")])]),a("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"}}),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-apps")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-bell")])],1),a("v-btn",{attrs:{icon:"",large:""}},[a("v-avatar",{attrs:{size:"32px",item:""}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/logos/logo.svg",alt:"Vuetify"}})],1)],1)],1),a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("AcBook")],1)],1),a("v-btn",{attrs:{bottom:"",color:"pink",dark:"",fab:"",fixed:"",right:""},on:{click:function(e){t.dialog=!t.dialog}}},[a("v-icon",[t._v("mdi-plus")])],1),a("v-dialog",{attrs:{width:"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"grey darken-2"},[t._v("Create contact")]),a("v-container",[a("v-row",{staticClass:"mx-2"},[a("v-col",{staticClass:"align-center justify-space-between",attrs:{cols:"12"}},[a("v-row",{staticClass:"mr-0",attrs:{align:"center"}},[a("v-avatar",{staticClass:"mx-3",attrs:{size:"40px"}},[a("img",{attrs:{src:"//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png",alt:""}})]),a("v-text-field",{attrs:{placeholder:"Name"}})],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-account-card-details-outline",placeholder:"Company"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{placeholder:"Job title"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-mail",placeholder:"Email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{type:"tel","prepend-icon":"mdi-phone",placeholder:"(000) 000 - 0000"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-text",placeholder:"Notes"}})],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"primary"}},[t._v("More")]),a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1)],1)},p=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"vcard-container"},[a("v-list",{attrs:{subheader:""}},[a("v-subheader",[t._v("Recent Search")]),t._l(t.items,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-avatar",[a("v-img",{attrs:{src:e.avatar}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1),a("v-list-item-icon",[a("v-icon",{attrs:{color:e.active?"deep-purple accent-4":"grey"}},[t._v("chat_bubble")])],1)],1)}))],2),a("v-divider"),a("v-list",{attrs:{subheader:""}},[a("v-subheader",[t._v("-- All --")]),t._l(t.items2,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-avatar",[a("v-img",{attrs:{src:e.avatar}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],2)],1)},f=[],g={data:function(){return{items:[{active:!0,title:"Jason Oner",avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},{active:!0,title:"Ranee Carlson",avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg"},{title:"Cindy Baker",avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg"},{title:"Ali Connors",avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg"}],items2:[{title:"Travis Howard",avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg"},{active:!0,title:"Jason Oner",avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},{active:!0,title:"Ranee Carlson",avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg"},{title:"Cindy Baker",avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg"},{title:"Ali Connors",avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg"},{active:!0,title:"Jason Oner",avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},{active:!0,title:"Ranee Carlson",avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg"},{title:"Cindy Baker",avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg"},{title:"Ali Connors",avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg"},{active:!0,title:"Jason Oner",avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},{active:!0,title:"Ranee Carlson",avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg"},{title:"Cindy Baker",avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg"},{title:"Ali Connors",avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg"}]}}},h=g,b=(a("af6d"),a("6544")),y=a.n(b),k=a("b0af"),x=a("ce7e"),w=a("132d"),_=a("adda"),j=a("8860"),V=a("da13"),C=a("8270"),I=a("5d23"),T=a("34c3"),S=a("e0c7"),A=Object(r["a"])(h,m,f,!1,null,"229d7c99",null),L=A.exports;y()(A,{VCard:k["a"],VDivider:x["a"],VIcon:w["a"],VImg:_["a"],VList:j["a"],VListItem:V["a"],VListItemAvatar:C["a"],VListItemContent:I["a"],VListItemIcon:T["a"],VListItemTitle:I["b"],VSubheader:S["a"]});var O={props:{source:String},components:{AcBook:L},data:function(){return{dialog:!1,drawer:null,items:[{icon:"mdi-contacts",text:"Contacts"},{icon:"mdi-history",text:"Frequently contacted"},{icon:"mdi-content-copy",text:"Duplicates"},{icon:"mdi-settings",text:"Settings"},{icon:"mdi-message",text:"Send feedback"},{icon:"mdi-help-circle",text:"Help"},{icon:"mdi-cellphone-link",text:"App downloads"},{icon:"mdi-keyboard",text:"Report Buf"}]}}},P=O,D=a("7496"),B=a("40dc"),E=a("5bc1"),R=a("8212"),U=a("8336"),$=a("99d9"),J=a("62ad"),N=a("a523"),F=a("a75b"),z=a("169a"),M=a("56b0"),H=a("1800"),q=a("f774"),G=a("0fd9"),W=a("2fa4"),K=a("8654"),Q=a("2a7f"),X=Object(r["a"])(P,v,p,!1,null,null,null),Y=X.exports;y()(X,{VApp:D["a"],VAppBar:B["a"],VAppBarNavIcon:E["a"],VAvatar:R["a"],VBtn:U["a"],VCard:k["a"],VCardActions:$["a"],VCardTitle:$["c"],VCol:J["a"],VContainer:N["a"],VContent:F["a"],VDialog:z["a"],VIcon:w["a"],VImg:_["a"],VList:j["a"],VListGroup:M["a"],VListItem:V["a"],VListItemAction:H["a"],VListItemContent:I["a"],VListItemTitle:I["b"],VNavigationDrawer:q["a"],VRow:G["a"],VSpacer:W["a"],VSubheader:S["a"],VTextField:K["a"],VToolbarTitle:Q["a"]});var Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home welContainer"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("h1",[t._v(" Welcome To G-Track ")]),n("h6",[t._v(" THis page is uder Development ")]),n("h1"),n("h1",[n("router-link",{attrs:{to:"/signin"}},[t._v("LogIn ")])],1)])},tt=[],et={name:"WelecomScreen"},at=et,nt=(a("c7e3"),Object(r["a"])(at,Z,tt,!1,null,null,null)),ot=nt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Login")]),a("v-spacer"),a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{icon:"",large:"",href:"#",target:""}},n),[a("v-icon",[t._v("mdi-codepen")])],1)]}}])},[a("span",[t._v("Codepen")])])],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Login",name:"login","prepend-icon":"person",type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"lock",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.doLogin()}}},[t._v("Login")])],1)],1)],1)],1)],1)],1),a("v-overlay",{attrs:{value:t.overlay}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)},rt=[],st={name:"LoginScreen",data:function(){return{email:"",password:"",overlay:!1}},methods:{doLogin:function(t){this.overlay=!0;var e={email:this.email,password:this.password};console.log(e),this.$store.dispatch("login",{email:e.email,password:e.password})}}},lt=st,ct=a("4bd4"),dt=a("a797"),ut=a("490a"),vt=a("71d9"),pt=a("3a2f"),mt=Object(r["a"])(lt,it,rt,!1,null,null,null),ft=mt.exports;y()(mt,{VApp:D["a"],VBtn:U["a"],VCard:k["a"],VCardActions:$["a"],VCardText:$["b"],VCol:J["a"],VContainer:N["a"],VContent:F["a"],VForm:ct["a"],VIcon:w["a"],VOverlay:dt["a"],VProgressCircular:ut["a"],VRow:G["a"],VSpacer:W["a"],VTextField:K["a"],VToolbar:vt["a"],VToolbarTitle:Q["a"],VTooltip:pt["a"]}),n["a"].use(u["a"]);var gt=[{path:"/",name:"WelecomScreen",component:ot},{path:"/signin",name:"LoginScreen",component:ft},{path:"/home",name:"Home",component:Y},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ht=new u["a"]({mode:"history",base:"/",routes:gt}),bt=ht,yt=(a("ac1f"),a("5319"),a("2f62")),kt=a("bc3a"),xt=a.n(kt);n["a"].use(yt["a"]);var wt=new yt["a"].Store({state:{idToken:null,userId:null,user:null},mutations:{authUser:function(t,e){t.idToken=e.token,t.userId=e.userId},storeUser:function(t,e){t.user=e},clearAuthData:function(t){t.idToken=null,t.userId=null}},actions:{setLogoutTimer:function(t,e){var a=t.commit;setTimeout((function(){a("clearAuthData")}),1e3*e)},login:function(t,e){var a=t.commit,n=t.dispatch;fetch("http://aathreyaa.in/tools/api/testcros.php",{email_id:e.email,password:e.password,apikey:"api@2150",mode:"no-cors"}).then((function(t){console.log("RESp :"+JSON.stringify(t)),bt.replace("/home");var e=new Date,o=new Date(e.getTime()+1e3*t.data.expiresIn);localStorage.setItem("token",t.data.idToken),localStorage.setItem("userId",t.data.localId),localStorage.setItem("expirationDate",o),a("authUser",{token:t.data.idToken,userId:t.data.localId}),n("setLogoutTimer",t.data.expiresIn),bt.replace("/home")})).catch((function(t){return console.log(t)}))},tryAutoLogin:function(t){var e=t.commit,a=localStorage.getItem("token");if(a){var n=localStorage.getItem("userId");e("authUser",{token:a,userId:n})}},logout:function(t){var e=t.commit;e("clearAuthData"),localStorage.removeItem("expirationDate"),localStorage.removeItem("token"),localStorage.removeItem("userId"),bt.replace("/signin")},storeUser:function(t,e){t.commit;var a=t.state;a.idToken&&xt.a.post("/users.json?auth="+a.idToken,e).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}))},fetchUser:function(t){var e=t.commit,a=t.state;a.idToken&&xt.a.get("/users.json?auth="+a.idToken).then((function(t){console.log(t);var a=t.data,n=[];for(var o in a){var i=a[o];i.id=o,n.push(i)}console.log(n),e("storeUser",n[0])})).catch((function(t){return console.log(t)}))}},getters:{user:function(t){return t.user},isAuthenticated:function(t){return null!==t.idToken}}}),_t=a("f309");n["a"].use(_t["a"]);var jt=new _t["a"]({});xt.a.defaults.baseURL="http://aathreyaa.in/tools/api/testcros.php",xt.a.defaults.headers.common.Authorization="fasfdsa",n["a"].config.productionTip=!1,new n["a"]({router:bt,store:wt,vuetify:jt,render:function(t){return t(c)}}).$mount("#app")},a055:function(t,e,a){},a4d1:function(t,e,a){},af6d:function(t,e,a){"use strict";var n=a("a055"),o=a.n(n);o.a},c7e3:function(t,e,a){"use strict";var n=a("a4d1"),o=a.n(n);o.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.e41719bb.js.map