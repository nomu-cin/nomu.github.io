(function(t){function e(e){for(var o,n,s=e[0],l=e[1],d=e[2],h=0,u=[];h<s.length;h++)n=s[h],i[n]&&u.push(i[n][0]),i[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(e);while(u.length)u.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(o=!1)}o&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},i={app:0},r=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("1356"),i=a.n(o);i.a},"0c58":function(t,e,a){t.exports=a.p+"img/logo.62172b89.png"},1356:function(t,e,a){},"228e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var o=a("2b0e"),i=a("bb71");a("da64");o["a"].use(i["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],s={name:"App"},l=s,d=(a("034f"),a("2877")),c=Object(d["a"])(l,r,n,!1,null,null,null);c.options.__file="App.vue";var h=c.exports,u=a("755e"),v=a("ebfd"),p=a.n(v),m=a("0ff2"),f=a("59ca"),k=a.n(f),_=(a("e71f"),a("951b")),g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("v-toolbar",{attrs:{color:"blue darken-3"}},[o("v-avatar",{attrs:{size:"50px",tile:""}},[o("img",{attrs:{src:a("0c58"),alt:"Nomu"}})]),o("v-text-field",{attrs:{"hide-details":"","single-line":"",label:"Pesquisar",clearable:"",solo:""}}),o("v-btn",{attrs:{icon:""}},[o("v-icon",{attrs:{color:"white"}},[t._v("search")])],1)],1),o("google-map"),o("v-footer",{attrs:{dark:"",height:"auto",app:""}},[o("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[o("v-card-actions",{staticClass:"grey darken-3 justify-center"},[t._v("\n          ©2019 — "),o("strong",[t._v("Nomu")])])],1)],1)],1)},b=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("gmap-map",{attrs:{center:t.center,zoom:3}},[t._l(t.markers,function(e,o){return a("GmapMarker",{key:o,attrs:{position:e,clickable:!0,draggable:!1},on:{click:function(a){t.onMarkerClick(e)}}})}),a("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoWindowPos,opened:t.infoWinOpen},on:{closeclick:function(e){t.infoWinOpen=!1}}},[t._v("\n            "+t._s(t.infoContent)+"\n        ")])],2)},w=[],x={data:function(){return{center:{lat:31.508,lng:-3.587},markers:[],infoContent:"",infoWindowPos:null,infoWinOpen:!1,currentMidx:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},firestore:function(){return{markers:nt.collection("markers")}},mounted:function(){this.geolocate()},methods:{onMarkerClick:function(t){this.infoWindowPos=t,this.infoContent="Cisterna "+t.id,this.currentMidx==t.id&&1==this.infoWinOpen?this.$router.push({name:"graficos",params:{Pid:t.id}}):(this.infoWinOpen=!0,this.currentMidx=t.id)},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}})}}},T=x,C=(a("7843"),Object(d["a"])(T,D,w,!1,null,null,null));C.options.__file="GoogleMap.vue";var O=C.exports,y={name:"home",data:function(){return{title:"Home",markers:[]}},firestore:function(){return{markers:nt.collection("markers")}},components:{GoogleMap:O}},E=y,F=a("6544"),P=a.n(F),j=a("8212"),V=a("8336"),N=a("b0af"),H=a("99d9"),M=a("553a"),z=a("132d"),I=a("2677"),A=a("71d9"),B=Object(d["a"])(E,g,b,!1,null,null,null);B.options.__file="home.vue";var $=B.exports;P()(B,{VAvatar:j["a"],VBtn:V["a"],VCard:N["a"],VCardActions:H["a"],VFooter:M["a"],VIcon:z["a"],VTextField:I["a"],VToolbar:A["a"]});var R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"graficos"},[o("v-toolbar",{attrs:{color:"blue darken-3",dark:""}},[o("v-btn",{attrs:{large:"",icon:""},on:{click:t.backHome}},[o("v-avatar",{attrs:{size:"45px",tile:""}},[o("img",{attrs:{src:a("0c58"),alt:"Nomu"}})])],1),o("v-toolbar-title",{staticClass:"white--text"},[t._v("Nomu Graphics")]),o("v-spacer"),o("v-icon",[t._v("timeline")])],1),o("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-card",{attrs:{tile:""}},[o("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[o("v-text-field",{attrs:{slot:"activator",label:"De","prepend-icon":"event"},slot:"activator",model:{value:t.dateFormatted1,callback:function(e){t.dateFormatted1=e},expression:"dateFormatted1"}}),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}})],1),o("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[o("v-text-field",{attrs:{slot:"activator",label:"Até","prepend-icon":"event"},slot:"activator",model:{value:t.dateFormatted2,callback:function(e){t.dateFormatted2=e},expression:"dateFormatted2"}}),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1),o("v-btn",{attrs:{fab:"",dark:"",small:"",color:"blue darken-3"},on:{click:t.changeData}},[o("v-icon",{attrs:{dark:""}},[t._v("done_outline")])],1)],1)],1),t.oktemp?t._e():o("v-alert",{attrs:{value:!0,type:"error",color:"red"}},[t._v("\n                Nenhuma medição para este intervalo!\n            ")]),t.hasData?o("v-flex",{attrs:{xs6:""}},[o("v-card",[o("v-toolbar",{attrs:{color:"blue darken-3",dark:""}},[o("v-toolbar-title",[t._v("pH")]),o("v-spacer"),o("v-icon",[t._v("timeline")])],1),t.okph?t._e():o("v-alert",{attrs:{value:!0,type:"error",color:"red"}},[t._v("\n                        Nenhuma medição para este intervalo!\n                    ")]),t.okph?o("ve-line",{attrs:{data:t.PH}}):t._e(),t.okph?o("download-excel",{attrs:{fields:t.json_fields_pH,name:"pH.xls",data:t.PH.rows}},[o("v-btn",{staticClass:"white--text",attrs:{loading:t.loading1,disabled:t.loading1,color:"blue darken-4"},on:{click:function(e){t.loader="loading1"}}},[t._v("   \n                            Exportar\n                            "),o("v-icon",{attrs:{right:"",dark:""}},[t._v("get_app")])],1)],1):t._e()],1)],1):t._e(),t.hasData?o("v-flex",{attrs:{xs6:""}},[o("v-card",[o("v-toolbar",{attrs:{color:"blue darken-3",dark:""}},[o("v-toolbar-title",[t._v("Condutividade")]),o("v-spacer"),o("v-icon",[t._v("timeline")])],1),t.okec?t._e():o("v-alert",{attrs:{value:!0,type:"error",color:"red"}},[t._v("\n                        Nenhuma medição para este intervalo!\n                    ")]),t.okec?o("ve-line",{attrs:{data:t.EC}}):t._e(),t.okec?o("download-excel",{attrs:{fields:t.json_fields_ec,name:"condutividade.xls",data:t.EC.rows}},[o("v-btn",{staticClass:"white--text",attrs:{loading:t.loading2,disabled:t.loading2,color:"blue darken-4"},on:{click:function(e){t.loader="loading2"}}},[t._v("   \n                                Exportar\n                                "),o("v-icon",{attrs:{right:"",dark:""}},[t._v("get_app")])],1)],1):t._e()],1)],1):t._e(),t.hasData?o("v-flex",{attrs:{xs6:""}},[o("v-card",[o("v-toolbar",{attrs:{color:"blue darken-3",dark:""}},[o("v-toolbar-title",[t._v("Oxigênio Dissolvido")]),o("v-spacer"),o("v-icon",[t._v("timeline")])],1),t.okod?t._e():o("v-alert",{attrs:{value:!0,type:"error",color:"red"}},[t._v("\n                        Nenhuma medição para este intervalo!\n                    ")]),t.okod?o("ve-line",{attrs:{data:t.OD}}):t._e(),t.okod?o("download-excel",{attrs:{fields:t.json_fields_od,name:"od.xls",data:t.OD.rows,width:"50px"}},[o("v-btn",{staticClass:"white--text",attrs:{loading:t.loading3,disabled:t.loading3,color:"blue darken-4"},on:{click:function(e){t.loader="loading3"}}},[t._v("\n                            Exportar\n                            "),o("v-icon",{attrs:{right:"",dark:""}},[t._v("get_app")])],1)],1):t._e()],1)],1):t._e(),t.hasData?o("v-flex",{attrs:{xs6:""}},[o("v-card",[o("v-toolbar",{attrs:{color:"blue darken-3",dark:""}},[o("v-toolbar-title",[t._v("Turbidez")]),o("v-spacer"),o("v-icon",[t._v("timeline")])],1),t.okturb?t._e():o("v-alert",{attrs:{value:!0,type:"error",color:"red"}},[t._v("\n                        Nenhuma medição para este intervalo!\n                    ")]),t.okturb?o("ve-line",{attrs:{data:t.TURB}}):t._e(),t.okturb?o("download-excel",{attrs:{fields:t.json_fields_turb,name:"turbidez.xls",data:t.TURB.rows}},[o("v-btn",{staticClass:"white--text",attrs:{loading:t.loading4,disabled:t.loading4,color:"blue darken-4"},on:{click:function(e){t.loader="loading4"}}},[t._v("\n                            Exportar\n                            "),o("v-icon",{attrs:{right:"",dark:""}},[t._v("get_app")])],1)],1):t._e()],1)],1):t._e(),t.hasData?o("v-flex",{attrs:{xs6:""}},[o("v-card",[o("v-toolbar",{attrs:{color:"blue darken-3",dark:""}},[o("v-toolbar-title",[t._v("Nivel")]),o("v-spacer"),o("v-icon",[t._v("timeline")])],1),t.oknivel?t._e():o("v-alert",{attrs:{value:!0,type:"error",color:"red"}},[t._v("\n                        Nenhuma medição para este intervalo!\n                    ")]),t.oknivel?o("ve-line",{attrs:{data:t.NIVEL}}):t._e(),t.oknivel?o("download-excel",{attrs:{fields:t.json_fields_nivel,name:"nivel.xls",data:t.NIVEL.rows}},[o("v-btn",{staticClass:"white--text",attrs:{loading:t.loading5,disabled:t.loading5,color:"blue darken-4"},on:{click:function(e){t.loader="loading5"}}},[t._v("\n                            Exportar\n                            "),o("v-icon",{attrs:{right:"",dark:""}},[t._v("get_app")])],1)],1):t._e()],1)],1):t._e(),t.hasData?o("v-flex",{attrs:{xs6:""}},[o("v-card",[o("v-toolbar",{attrs:{color:"blue darken-3",dark:""}},[o("v-toolbar-title",[t._v("Temperatura")]),o("v-spacer"),o("v-icon",[t._v("timeline")])],1),t.oktemp?t._e():o("v-alert",{attrs:{value:!0,type:"error",color:"red"}},[t._v("\n                        Nenhuma medição para este intervalo!\n                    ")]),t.oktemp?o("ve-line",{attrs:{data:t.TEMP}}):t._e(),t.oktemp?o("download-excel",{attrs:{fields:t.json_fields_temp,name:"temperatura.xls",data:t.TEMP.rows}},[o("v-btn",{staticClass:"white--text",attrs:{loading:t.loading6,disabled:t.loading6,color:"blue darken-4"},on:{click:function(e){t.loader="loading6"}}},[t._v("\n                            Exportar\n                            "),o("v-icon",{attrs:{right:"",dark:""}},[t._v("get_app")])],1)],1):t._e()],1)],1):t._e()],1)],1),o("v-footer",{attrs:{dark:"",height:"auto"}},[o("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[o("v-card-actions",{staticClass:"grey darken-3 justify-center"},[t._v("\n            ©2019 — "),o("strong",[t._v("Nomu")])])],1)],1)],1)},S=[],U=(a("f576"),a("3835")),L=(a("28a5"),a("c3da")),W=a.n(L),G={data:function(){return{title:"Graficos",PH:{columns:["Date","pH"],rows:[]},EC:{columns:["Date","Condutividade"],rows:[]},OD:{columns:["Date","Oxigenio"],rows:[]},TURB:{columns:["Date","Turbidez"],rows:[]},NIVEL:{columns:["Date","Nivel"],rows:[]},TEMP:{columns:["Date","Temperatura"],rows:[]},vals:[],loader:null,loading1:!1,loading2:!1,loading3:!1,loading4:!1,loading5:!1,loading6:!1,menu1:!1,menu2:!1,date1:"",date2:"",dateFormatted1:"",dateFormatted2:"",init1:!0,init2:!0,json_fields_pH:{Data:"Date",pH:"pH"},json_fields_ec:{Data:"Date",Condutividade:"Condutividade"},json_fields_od:{Data:"Date","Oxigênio Dissolvido":"Oxigenio"},json_fields_turb:{Data:"Date",Turbidez:"Turbidez"},json_fields_nivel:{Data:"Date",Nivel:"Nivel"},json_fields_temp:{Data:"Date",Temperatura:"Temperatura"},hasData:!1,okph:!1,okec:!1,okod:!1,okturb:!1,oknivel:!1,oktemp:!1,preDate1:"",preDate2:""}},firestore:function(){return{valspH:nt.collection(this.$route.params.Pid).doc("pH").collection("medições"),valsEc:nt.collection(this.$route.params.Pid).doc("Condutividade").collection("medições"),valsOd:nt.collection(this.$route.params.Pid).doc("Oxigenio").collection("medições"),valsTu:nt.collection(this.$route.params.Pid).doc("Turbidez").collection("medições"),valsNi:nt.collection(this.$route.params.Pid).doc("Nivel").collection("medições"),valsTe:nt.collection(this.$route.params.Pid).doc("Temperatura").collection("medições")}},mounted:function(){this.initData()},components:{VeLine:W.a},methods:{initData:function(){this.PH.rows=this.valspH,this.okph=!0,this.EC.rows=this.valsEc,this.okec=!0,this.OD.rows=this.valsOd,this.okod=!0,this.TURB.rows=this.valsTu,this.okturb=!0,this.NIVEL.rows=this.valsNi,this.oknivel=!0,this.TEMP.rows=this.valsTe,this.oktemp=!0,this.hasData=!0,this.date1=this.valspH,this.date2=this.valspH},changeData:function(){var t,e;for(this.PH.rows=[],e=0,t=0;t<this.valspH.length;t++){var a=new Date(this.valspH[t].Date.split(" ")[0]),o=new Date(this.parseDate(this.dateFormatted1)),i=new Date(this.parseDate(this.dateFormatted2));+a>=+o&&+a<=+i&&(this.PH.rows[e]=this.valspH[t],e++)}for(0==this.PH.rows.length?(this.okph=!1,this.hasData=!1):(this.okph=!0,this.hasData=!0),this.EC.rows=[],e=0,t=0;t<this.valsEc.length;t++){a=new Date(this.valsEc[t].Date.split(" ")[0]),o=new Date(this.parseDate(this.dateFormatted1)),i=new Date(this.parseDate(this.dateFormatted2));+a>=+o&&+a<=+i&&(this.EC.rows[e]=this.valsEc[t],e++)}for(0==this.EC.rows.length?this.okec=!1:this.okec=!0,this.OD.rows=[],e=0,t=0;t<this.valsOd.length;t++){a=new Date(this.valsOd[t].Date.split(" ")[0]),o=new Date(this.parseDate(this.dateFormatted1)),i=new Date(this.parseDate(this.dateFormatted2));+a>=+o&&+a<=+i&&(this.OD.rows[e]=this.valsOd[t],e++)}for(0==this.OD.rows.length?this.okod=!1:this.okod=!0,this.TURB.rows=[],e=0,t=0;t<this.valsTu.length;t++){a=new Date(this.valsTu[t].Date.split(" ")[0]),o=new Date(this.parseDate(this.dateFormatted1)),i=new Date(this.parseDate(this.dateFormatted2));+a>=+o&&+a<=+i&&(this.TURB.rows[e]=this.valsTu[t],e++)}for(0==this.TURB.rows.length?this.okturb=!1:this.okturb=!0,this.NIVEL.rows=[],e=0,t=0;t<this.valsNi.length;t++){a=new Date(this.valsNi[t].Date.split(" ")[0]),o=new Date(this.parseDate(this.dateFormatted1)),i=new Date(this.parseDate(this.dateFormatted2));+a>=+o&&+a<=+i&&(this.NIVEL.rows[e]=this.valsNi[t],e++)}for(0==this.NIVEL.rows.length?this.oknivel=!1:this.oknivel=!0,this.TEMP.rows=[],e=0,t=0;t<this.valsTe.length;t++){a=new Date(this.valsTe[t].Date.split(" ")[0]),o=new Date(this.parseDate(this.dateFormatted1)),i=new Date(this.parseDate(this.dateFormatted2));+a>=+o&&+a<=+i&&(this.TEMP.rows[e]=this.valsTe[t],e++)}0==this.TEMP.rows.length?this.oktemp=!1:this.oktemp=!0,this.hasData||(window.alert("Intervalo Inválido!"),this.date1=this.preDate1,this.dateFormatted1=this.formatDate(this.date1),this.date2=this.preDate2,this.dateFormatted2=this.formatDate(this.date2),this.hasData=!0,this.okph=!0,this.okec=!0,this.okod=!0,this.okturb=!0,this.oknivel=!0,this.oktemp=!0,this.changeData())},formatDate:function(t){if(!t)return null;var e=t.split("-"),a=Object(U["a"])(e,3),o=a[0],i=a[1],r=a[2];return"".concat(r,"/").concat(i,"/").concat(o)},parseDate:function(t){if(!t)return null;var e=t.split("/"),a=Object(U["a"])(e,3),o=a[0],i=a[1],r=a[2];return"".concat(r,"-").concat(i.padStart(2,"0"),"-").concat(o.padStart(2,"0"))},backHome:function(){this.$router.push({name:"home"})}},watch:{loader:function(){var t=this,e=this.loader;this[e]=!this[e],setTimeout(function(){return t[e]=!1},3e3),this.loader=null},date1:function(){1==this.init1?(this.dateFormatted1=this.formatDate(this.date1[0].Date.split(" ")[0]),this.date1=this.parseDate(this.dateFormatted1),this.init1=!1,this.preDate1=this.date1):(this.preDate2=this.parseDate(this.dateFormatted2),this.preDate1=this.parseDate(this.dateFormatted1),this.dateFormatted1=this.formatDate(this.date1))},date2:function(){1==this.init2?(this.dateFormatted2=this.formatDate(this.date2[this.date2.length-1].Date.split(" ")[0]),this.date2=this.parseDate(this.dateFormatted2),this.init2=!1,this.preDate2=this.date2):(this.preDate1=this.parseDate(this.dateFormatted1),this.preDate2=this.parseDate(this.dateFormatted2),this.dateFormatted2=this.formatDate(this.date2))}}},Y=G,J=(a("a1d2"),a("0798")),K=a("a523"),q=a("2e4b"),Q=a("0e8f"),X=a("a722"),Z=a("e449"),tt=a("9910"),et=a("2a7f"),at=Object(d["a"])(Y,R,S,!1,null,null,null);at.options.__file="graficos.vue";var ot=at.exports;P()(at,{VAlert:J["a"],VAvatar:j["a"],VBtn:V["a"],VCard:N["a"],VCardActions:H["a"],VContainer:K["a"],VDatePicker:q["a"],VFlex:Q["a"],VFooter:M["a"],VIcon:z["a"],VLayout:X["a"],VMenu:Z["a"],VSpacer:tt["a"],VTextField:I["a"],VToolbar:A["a"],VToolbarTitle:et["a"]}),o["a"].use(_["a"]);var it=new _["a"]({routes:[{path:"/",name:"home",component:$},{path:"/home",name:"home",component:$},{path:"/graficos/:Pid",name:"graficos",component:ot}]}),rt=a("1bdd");a.d(e,"db",function(){return nt}),o["a"].config.productionTip=!1,o["a"].use(u,{load:{key:"AIzaSyBKpXRY7VC7YdiRMzcHa9PAUWp1Td0YtCk"}}),o["a"].use(p.a),o["a"].use(m["a"]),k.a.initializeApp({apiKey:"AIzaSyBtJpj1Uqr460GR2uBH1KATpmDUDYwfCQM",authDomain:"nomujc.firebaseapp.com",databaseURL:"https://nomujc.firebaseio.com",projectId:"nomujc",storageBucket:"nomujc.appspot.com",messagingSenderId:"1020944061791"});var nt=k.a.firestore();o["a"].component("downloadExcel",rt["a"]),new o["a"]({render:function(t){return t(h)},router:it}).$mount("#app")},7843:function(t,e,a){"use strict";var o=a("fee6"),i=a.n(o);i.a},a1d2:function(t,e,a){"use strict";var o=a("228e"),i=a.n(o);i.a},fee6:function(t,e,a){}});
//# sourceMappingURL=app.3a014443.js.map