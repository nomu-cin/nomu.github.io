(function(t){function e(e){for(var i,n,o=e[0],c=e[1],l=e[2],p=0,u=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},r=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"126b":function(t,e,a){"use strict";a("54a9")},"188b":function(t,e,a){},"19f4":function(t,e,a){"use strict";a("188b")},"38a0":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARxSURBVHgB3Vz/ddowED768n+zQb1B2ABvkGwAnSDpBCYTJJ0AOgHtBKYTkE6AOwHZ4KuE5CLLJ2MTSdj+3rsXxRyWdLof0kliQhEB4Fb8STTJ8heL5a+gd0GFpMlk8k6RMKGA0B1/EDQTlJISQBe8adoK+i0EU9BQIDsv6FFQDv/IBc0FJeQZ3jRCj/6ToEdSau9CQWqUSxMwkdDJbKYN75Df/SnouTdaojVgKejQMIpSQ2ZaWF3ePWuhXasQGtIJogFPDgHkugOdOn6mrkTQQtCeqU8+m1Ns6EblDgHMKDC0pnD1b6Jph6goZUZlH0MATFsWjrZMKSS0Kdh48WkCF7YrY9r1RCEA5RCvrgUuODR1ST7BCGGHa3tqBlC+K4wwGHPYXdsUmgAVzndezUS8YDokIZRwCCOlS8Co2X4IQijBCGN/kTlDxeSPveTKYAYz7/qChaVWvYkOXQEVTbr7C0aKGQ0cUHOdEodWJg61iPlvEjQCaH/RfnC1NpiIv5AJBMtEmrXC0oZujmUAQHWhlrmYElSX1IN1kC600gpUI8UofAMHSysezzGMxjfYgEoY8eaPupNMaKSAiiAmjubxSX+eGrzbEAlRqBXsSwf+NXwvowX0XsnWeHRvVrpqtJsPAtVl/KoF/9rgX5JnWOZxbE+pEWZq6438A0Z50SQMKQTxZ+74ri/8McppWXHFZigQUE+nrRietcUTZHrP+glUcw47CogmYcQSglHf3qhrKh88GA+CzyYZYWxQXfIHF4Juh1nn/Q1Vt+cKCgzhtZ+hLHCpHz1YLEvJQ+Fh7rTfSmdpbs0XFAG6o0vmo1hCkCiMcnJDkQAVBj+Ljn6T/2vNkOchyoGQ5yF+GPxr/WxJERBFEFoImS7fis59lWXxd+3gl8/nukwxhPGJ4qBv8wi24gUXzgLUk8EROg2eaCEU1dn03A6fGwoI9GsekZvh055QBc9DoD/zCHPPY+pclgZuRAY3omTN2T6jOt1MKQIcwoglhNSo87isKMPnVtBCl++oul4PgnPziMC4M8qn1TaqkWN02WsbcKUlr+EnrgU40pLHCRWTvhpt8pbOpSXRlN0dEazAMOcYpHkcYkePmEB9gydxMWZj1grLSa6aGEerFaif+UjOfSEzmPdjiSCo+obzi0tGK1pvyvQVqO6r7NF2Jw/1I4UpDRSoHx3qNjWwHEt7KfYIqB+D6p5mYF4yiDOWJVA/LnT5YDJqNeQDpx87sY9xHEH2s7GNeu5gj/4eSreF4DfH4RBGSj0B+GsKYRI94C+uLOmK0KbwyrTL+zkPu+Ip+OtD0ZfuuPa1Km2LG2YU8hjmogWQO+pPKDZw5vqhz0ah+YbxIbgptGig1I4V3Mh1B9KO773VI990AVYKIIOHcO7zSnRCaqNXnndoaph5HbqwPkvodB06aXiH/P6roO8xf1GgE3C6sZvDP3J4vmFcIvTPJiSkkqXSi0+p+eI7h4JUUlnSr5CjH1QQNnD6IQ25qVOWTRSk1F5u/ET9IY1/YkeKAQ9A9YEAAAAASUVORK5CYII="},5133:function(t,e,a){},"54a9":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{directives:[{name:"scroll",rawName:"v-scroll",value:t.isHomeInViewport,expression:"isHomeInViewport"}],attrs:{id:"mainEntry"}},[i("v-main",[i("v-col",{staticClass:"d-block pa-0",attrs:{align:"middle"}},[i("v-col",{staticClass:"screen",attrs:{align:"middle",id:"home"}},[i("div",{staticClass:"d-none d-xl-block"},[i("v-app-bar",{attrs:{color:t.backColor,dark:"",elevation:"0",height:t.appBarHeight,fixed:""}},[i("div",{staticClass:"d-flex align-center mx-auto"},[i("div",{attrs:{id:"nomuTitle"}},[t._v("NOMU")]),i("appBarBar")],1)]),i("v-img",{staticClass:"mb-14",class:{big_margin:t.isHomeInViewport()},attrs:{src:a("c570"),contain:"",height:"410"}}),i("p",{staticClass:"mb-3",attrs:{id:"nomuIntro"}},[t._v("WELCOME TO NOMU")]),i("v-btn",{attrs:{floating:"",icon:""},on:{click:t.clickButton}},[i("v-img",{attrs:{src:a("38a0"),height:"62",contain:""}})],1)],1),i("div",{staticClass:"d-block d-xl-none"},[i("v-app-bar",{attrs:{color:t.backColor,dark:"",elevation:"0",height:t.appBarHeight,fixed:""}},[i("div",{staticClass:"d-flex align-center mx-auto"},[i("div",{attrs:{id:"nomuTitle-md"}},[t._v("NOMU")]),i("appBarBar")],1)]),i("v-img",{staticClass:"mb-7",class:{big_margin:t.isHomeInViewport()},attrs:{src:a("c570"),contain:"",height:"240"}}),i("p",{staticClass:"mb-10",attrs:{id:"nomuIntro-md"}},[t._v("WELCOME TO NOMU")]),i("v-btn",{attrs:{floating:"",icon:""},on:{click:t.clickButton}},[i("v-img",{attrs:{src:a("38a0"),height:"41",contain:""}})],1)],1)]),i("about-us",{attrs:{"purple-bg":""}}),i("functionalities"),i("parameters",{attrs:{"purple-bg":""}}),i("portfolio"),i("contact")],1)],1)],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{align:"center"}},[t._l(t.buttons,(function(e,i){return a("div",{directives:[{name:"ripple",rawName:"v-ripple"}],key:i,staticClass:"py-5 px-4 d-none d-lg-block",class:{appBar2:!0},style:[t.hovered?{cursor:"pointer"}:{cursor:"auto"}],attrs:{tile:""},on:{mouseover:function(e){t.hovered=!0},mouseout:function(e){t.hovered=!1}}},[a("a",{staticClass:"appBarItem",on:{click:function(a){return t.$vuetify.goTo(e.a,{easing:"easeInOutQuad",duration:500,offset:"HOME"==e.title?0:40})}}},[t._v(t._s(e.title))])])})),t._l(t.buttons,(function(e,i){return a("div",{directives:[{name:"ripple",rawName:"v-ripple"}],key:i,staticClass:"py-3 px-2 d-block d-lg-none",class:{appBar2:!0},style:[t.hovered?{cursor:"pointer"}:{cursor:"auto"}],attrs:{tile:""},on:{mouseover:function(e){t.hovered=!0},mouseout:function(e){t.hovered=!1}}},[a("a",{staticClass:"appBarItem-md",on:{click:function(a){return t.$vuetify.goTo(e.a,{easing:"easeInOutQuad",duration:500,offset:"HOME"==e.title?0:40})}}},[t._v(t._s(e.title))])])}))],2)],1)},o=[],c={name:"AppBarBar",data:function(){return{buttons:[{a:"#home",title:"HOME"},{a:"#aboutus",title:"ABOUT US"},{a:"#functionalities",title:"FUNCTIONALITIES"},{a:"#parameters",title:"PARAMETERS"},{a:"#contact",title:"CONTACT US"}],hovered:!1}},methods:{respond:function(t){console.log(t)},isInViewport:function(t){var e=document.querySelector("#"+t);if(null!=e)return e.getBoundingClientRect(),console.log(e.bottom>0),e.bottom>0}}},l=c,d=(a("126b"),a("2877")),p=a("6544"),u=a.n(p),m=a("a523"),f=a("0fd9"),v=a("269a"),g=a.n(v),b=a("5607"),h=Object(d["a"])(l,n,o,!1,null,"2350fe70",null),C=h.exports;u()(h,{VContainer:m["a"],VRow:f["a"]}),g()(h,{Ripple:b["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"screen d-flex align-center justify-center flex-column",style:{background:t.purpleBg?t.background_purple:t.background_white},attrs:{fluid:"",id:"aboutus"}},[a("p",{staticClass:"mb-9",attrs:{id:"title_abus"}},[t._v("A project made by students")]),a("p",{staticClass:"intro"},[t._v("We are a team of Computer Engineering students at Federal University of Pernambuco.")]),a("p",{staticClass:"intro mb-9"},[t._v("Nomu is the project we developed for 2019 ISCAS Student Design Competition, in which we got nominated Latin America champions and one of the best five projects in the world.")]),a("v-btn",{attrs:{rounded:"",color:"rgb(57, 3, 96)",dark:""},on:{click:function(e){return t.$vuetify.goTo("#contact",{easing:"easeInOutQuad",duration:500})}}},[t._v(" Contact us ")])],1)},w=[],y={name:"AboutUs",data:function(){return{background_purple:"#ebe6ef",background_white:"white"}},props:{purpleBg:Boolean},methods:{respond:function(t){console.log(t)}}},x=y,_=(a("60a0"),a("8336")),k=Object(d["a"])(x,A,w,!1,null,"609ecdd0",null),I=k.exports;u()(k,{VBtn:_["a"],VContainer:m["a"]});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"screen d-flex align-center justify-center flex-column",attrs:{fluid:"",id:"functionalities"}},[a("div",{staticClass:"d-none d-lg-flex align-center justify-center flex-column"},[a("p",{staticClass:"mb-9 mt-5",attrs:{id:"title_abus"}},[t._v("Functionalities")]),a("p",{staticClass:"intro mb-9"},[t._v("An embedded system able to measure water quality on cisterns, and display them to user, third parties or government"),a("br"),t._v("using the concept of collaborative IoT ")]),a("v-row",{staticClass:"justify-center align-start mt-16"},[a("v-col",{staticClass:"mx-5"},[a("param-card",{attrs:{title:t.functionalities.systemFeatures.title,description:t.functionalities.systemFeatures.description}}),a("div",{staticClass:"mt-8"})],1),a("v-col",{staticClass:"mx-5"},[a("param-card",{attrs:{title:t.functionalities.mobileAppFeatures.title,description:t.functionalities.mobileAppFeatures.description}}),a("div",{staticClass:"mt-8"})],1),a("v-col",{staticClass:"mx-5"},[a("param-card",{attrs:{title:t.functionalities.webPageFeatures.title,description:t.functionalities.webPageFeatures.description}}),a("div",{staticClass:"mt-8"})],1),a("v-col",{staticClass:"mx-5"},[a("param-card",{attrs:{title:t.functionalities.waterQualityIndex.title,description:t.functionalities.waterQualityIndex.description}}),a("div",{staticClass:"mt-8"})],1)],1)],1),a("div",{staticClass:"d-flex d-lg-none align-center justify-center flex-column"},[a("p",{staticClass:"mb-5 mt-3",attrs:{id:"title_abus_md"}},[t._v("Functionalities")]),a("p",{staticClass:"intro mb-6"},[t._v("An embedded system able to measure water quality on cisterns, and display them to user, third parties or government"),a("br"),t._v("using the concept of collaborative IoT ")]),a("v-row",{staticClass:"justify-center align-start mt-8"},[a("v-col",{staticClass:"mx-3"},[a("param-card",{attrs:{title:t.functionalities.systemFeatures.title,description:t.functionalities.systemFeatures.description}}),a("div",{staticClass:"mt-8"})],1),a("v-col",{staticClass:"mx-3"},[a("param-card",{attrs:{title:t.functionalities.mobileAppFeatures.title,description:t.functionalities.mobileAppFeatures.description}}),a("div",{staticClass:"mt-8"})],1),a("v-col",{staticClass:"mx-3"},[a("param-card",{attrs:{title:t.functionalities.webPageFeatures.title,description:t.functionalities.webPageFeatures.description}}),a("div",{staticClass:"mt-8"})],1),a("v-col",{staticClass:"mx-3"},[a("param-card",{attrs:{title:t.functionalities.waterQualityIndex.title,description:t.functionalities.waterQualityIndex.description}}),a("div",{staticClass:"mt-8"})],1)],1)],1)])},S=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"d-flex align-start justify-start flex-column",class:{card_title:t.$vuetify.breakpoint.lgAndUp,card_title_md:t.$vuetify.breakpoint.mdAndDown},style:[t.hovered?{cursor:"pointer",color:"white",background:"#390360"}:{cursor:"auto"}],attrs:{fluid:""},on:{mouseover:function(e){t.hovered=!0},mouseout:function(e){t.hovered=!1}}},[a("div",{staticClass:"d-none d-xl-flex align-start justify-start flex-column"},[a("p",{staticClass:"mb-10 mt-2 ml-3 func_card_title",style:[t.hovered?{color:"#F3F3F3"}:{color:"#390360"}]},[t._v(t._s(t.title))]),a("p",{staticClass:"mb-3 ml-3 text-left intro",domProps:{innerHTML:t._s(t.description)}})]),a("div",{staticClass:"d-none d-lg-flex d-xl-none align-start justify-start flex-column"},[a("p",{staticClass:"mb-3 mt-2 ml-2 func_card_title_md",style:[t.hovered?{color:"#F3F3F3"}:{color:"#390360"}]},[t._v(t._s(t.title))]),a("p",{staticClass:"mb-0 ml-2 text-left intro-lg",domProps:{innerHTML:t._s(t.description)}})]),a("div",{staticClass:"d-flex d-lg-none align-start justify-start flex-column"},[a("p",{staticClass:"mb-2 mt-0 ml-2 func_card_title_md",style:[t.hovered?{color:"#F3F3F3"}:{color:"#390360"}]},[t._v(t._s(t.title))]),a("p",{staticClass:"mb-0 ml-2 text-left intro-md",domProps:{innerHTML:t._s(t.description)}})])])},B=[],E={name:"ParamCard",data:function(){return{hovered:!1}},props:{title:String,description:String},methods:{respond:function(t){console.log(t)}}},F=E,T=(a("b1cf"),Object(d["a"])(F,j,B,!1,null,"c94250d2",null)),U=T.exports;u()(T,{VContainer:m["a"]}),g()(T,{Ripple:b["a"]});var H={name:"Functionalities",components:{ParamCard:U},data:function(){return{functionalities:{systemFeatures:{title:"System Features",description:"Detection of parameter sudden variation.<br/><br/>Adjustable sensor reading rate.<br/><br/>Estimates daily consumption and predicts depletion.<br/><br/>Self-sustainable energy"},mobileAppFeatures:{title:"Mobile App Features",description:"Friendly, intuitive interface.<br/><br/>Parameter measurement in real time.<br/><br/>Automatic data storage.<br/><br/>Integrated Water Quality Index"},webPageFeatures:{title:"Web Page Features",description:"Map visualization of each cistern.<br/><br/>Detailed graphic exhibition of parametes variation through time.<br/><br/>Easy data export."},waterQualityIndex:{title:"Water Quality Index",description:"On a general approach, the WQI’s are based in 3 common factors:\n                      Parameter selection, realized by professional specialists and such.\n                      Determine a “quality function” for each parameter considered\n                      subindex.\n                      Aggregate the subindexes in a mathematical expression."}}}},methods:{respond:function(t){console.log(t)}}},P=H,Q=(a("ef3c"),a("62ad")),V=Object(d["a"])(P,O,S,!1,null,"3c1be909",null),M=V.exports;u()(V,{VCol:Q["a"],VContainer:m["a"],VRow:f["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"screen d-flex align-center justify-center flex-column",style:{background:t.purpleBg?t.background_purple:t.background_white},attrs:{fluid:"",id:"parameters"}},[a("div",{staticClass:"d-none d-lg-flex align-center justify-center flex-column"},[a("p",{staticClass:"mb-9 mt-5",attrs:{id:"title_abus"}},[t._v("Parameters")]),a("p",{staticClass:"intro mb-9"},[t._v("The parameters analyzed in the system were selected based on how important they are for determining water quality"),a("br"),t._v("and the availability of the sensors able to measure them. Between the chosen ones we have: ")]),a("v-row",{staticClass:"justify-center align-start"},[a("v-col",{staticClass:"mx-5"},[a("param-card",{attrs:{title:t.parameters.pH.title,description:t.parameters.pH.description}}),a("div",{staticClass:"mt-4"}),a("param-card",{attrs:{title:t.parameters.temperature.title,description:t.parameters.temperature.description}})],1),a("v-col",{staticClass:"mx-5"},[a("param-card",{attrs:{title:t.parameters.turbidity.title,description:t.parameters.turbidity.description}}),a("div",{staticClass:"mt-4"}),a("param-card",{attrs:{title:t.parameters.tds.title,description:t.parameters.tds.description}})],1),a("v-col",{staticClass:"mx-5"},[a("param-card",{attrs:{title:t.parameters.dissolvedOxygen.title,description:t.parameters.dissolvedOxygen.description}}),a("div",{staticClass:"mt-4"}),a("param-card",{attrs:{title:t.parameters.waterLevel.title,description:t.parameters.waterLevel.description}})],1),a("v-col",{staticClass:"mx-5"},[a("param-card",{attrs:{title:t.parameters.electricConductivity.title,description:t.parameters.electricConductivity.description}}),a("div",{staticClass:"mt-4"}),a("param-card",{attrs:{title:t.parameters.salinity.title,description:t.parameters.salinity.description}})],1)],1)],1),a("div",{staticClass:"d-flex d-lg-none align-center justify-center flex-column"},[a("p",{staticClass:"mb-3 mt-5",attrs:{id:"title_abus_md"}},[t._v("Parameters")]),a("p",{staticClass:"intro mb-9"},[t._v("The parameters analyzed in the system were selected based on how important they are for determining water quality"),a("br"),t._v("and the availability of the sensors able to measure them. Between the chosen ones we have: ")]),a("v-row",{staticClass:"justify-center align-start"},[a("v-col",{staticClass:"mx-3"},[a("param-card",{attrs:{title:t.parameters.pH.title,description:t.parameters.pH.description}}),a("div",{staticClass:"mt-4"}),a("param-card",{attrs:{title:t.parameters.temperature.title,description:t.parameters.temperature.description}})],1),a("v-col",{staticClass:"mx-3"},[a("param-card",{attrs:{title:t.parameters.turbidity.title,description:t.parameters.turbidity.description}}),a("div",{staticClass:"mt-4"}),a("param-card",{attrs:{title:t.parameters.tds.title,description:t.parameters.tds.description}})],1),a("v-col",{staticClass:"mx-3"},[a("param-card",{attrs:{title:t.parameters.dissolvedOxygen.title,description:t.parameters.dissolvedOxygen.description}}),a("div",{staticClass:"mt-4"}),a("param-card",{attrs:{title:t.parameters.waterLevel.title,description:t.parameters.waterLevel.description}})],1),a("v-col",{staticClass:"mx-3"},[a("param-card",{attrs:{title:t.parameters.electricConductivity.title,description:t.parameters.electricConductivity.description}}),a("div",{staticClass:"mt-4"}),a("param-card",{attrs:{title:t.parameters.salinity.title,description:t.parameters.salinity.description}})],1)],1)],1)])},Y=[],q={name:"Parameters",components:{ParamCard:U},props:{purpleBg:Boolean},data:function(){return{parameters:{pH:{title:"pH",description:"Affects the metabolism of several aquatic species.<br/><br/>The CONAMA Resolution 357 states that, for protection of aquatic lifeforms, pH must be between 6 and 9."},turbidity:{title:"Turbidity",description:"It is the degree of intensity attenuation that a beam of light suffers by crossing a sample of water, due to the presence of suspended solids, like inorganic particles\n                      and organic debris, like algae and bacteria."},dissolvedOxygen:{title:"Dissolved Oxygen",description:"Sewer polluted waters have low dissolved oxygen concentration, since it is consumed on the organic matter decomposition process.\n                      On the other hand, clean waters have higher dissolved oxygen concentrations, generally above 5mg/L."},electricConductivity:{title:"Electric Conductivity",description:"It is the numerical expression of the water's capability to conduct electrical current. Generally, levels above 100µS/cm indicates impacted environments, \n                      since it indicates the ammount of salts existent on the water and its ionic concentrations. It is an indirect measurement of polluents concentration."},temperature:{title:"Temperature",description:"As the temperature increases from 0 to 30°C, some factors decrease, such as viscosity, superficial tension, compressibility, specific heat, etc, while \n                      electrical and termical conductivity, vapor pressure and salts solubility increase with the temperature."},tds:{title:"Total Dissolved Solids",description:"It is the set of all the organic and inorganic substances contained in a liquid in molecular forms, ionized or microgranular.\n                      It determines water quality, because it evaluates the total weight of mineral constituents present in water, per volume unit."},waterLevel:{title:"Water Level",description:"Represents the current water level on the cistern. If it is low, it's best to refuel!"},salinity:{title:"Salinity",description:"It is a measurement of the ammount of salts existent on natural water masses, like an ocean, a lake, and estuary or an aquifer.\n                      The simplest form to describe salinity is as the relation between the content of dissolved salts in a certain quantity of water."}},background_purple:"#ebe6ef",background_white:"white"}},methods:{respond:function(t){console.log(t)}}},K=q,D=(a("890c"),Object(d["a"])(K,R,Y,!1,null,"5a84968a",null)),W=D.exports;u()(D,{VCol:Q["a"],VContainer:m["a"],VRow:f["a"]});var J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"screen d-flex align-center justify-center flex-column",style:{background:t.purpleBg?t.background_purple:t.background_white},attrs:{fluid:"",id:"contact"}},[i("div",{staticClass:"d-lg-flex d-none align-center justify-center flex-column"},[i("p",{staticClass:"mb-9 mt-14",attrs:{id:"title_abus"}},[t._v("Contact")]),i("p",{staticClass:"intro"},[t._v("If you would like to talk or hire our services, feel free to give us a call!")]),i("p",{staticClass:"intro mb-8"},[t._v("We have the following means of contact:")]),i("div",{staticClass:"contact-center"},[i("v-row",{staticClass:"first-row mb-16",attrs:{justify:"center"}},[i("div",{staticClass:"contact-address mr-8 pt-9 d-flex flex-column justify-center align-center"},[i("v-img",{staticClass:"mb-6",attrs:{src:a("6c8d"),contain:"",height:"35"}}),i("p",{staticClass:"contact-title"},[t._v("Our Address")]),i("p",{staticClass:"contact-description"},[t._v("Av. Jorn. Aníbal Fernandes, s/n - Cidade Universitária, Recife - PE, 50740-560")])],1),i("div",{staticClass:"mr-9 contact-email d-flex flex-column justify-center align-center"},[i("v-img",{staticClass:"mb-6",attrs:{src:a("6c8d"),contain:"",height:"35"}}),i("p",{staticClass:"contact-title"},[t._v("Email Us")]),i("p",{staticClass:"contact-description"},[t._v("ensb@cin.ufpe.br")])],1)]),i("v-row",{staticClass:"second-row d-flex justify-center align-center"},[i("iframe",{staticClass:"contact-map d-xl-flex hidden-lg-and-down",staticStyle:{border:"1px solid #000000"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15801.80142602653!2d-34.95133!3d-8.0554591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x20ceccca91a11dd3!2sCIn%20-%20UFPE!5e0!3m2!1sen!2sbr!4v1616103333523!5m2!1sen!2sbr",width:"1500",height:"425",allowfullscreen:"",loading:"lazy"}}),i("iframe",{staticClass:"contact-map d-lg-flex hidden-md-and-down d-xl-none",staticStyle:{border:"1px solid #000000"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15801.80142602653!2d-34.95133!3d-8.0554591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x20ceccca91a11dd3!2sCIn%20-%20UFPE!5e0!3m2!1sen!2sbr!4v1616528264590!5m2!1sen!2sbr",width:"900",height:"253",allowfullscreen:"",loading:"lazy"}}),i("iframe",{staticClass:"contact-map d-md-flex hidden-sm-and-down d-lg-none",staticStyle:{border:"1px solid #000000"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15801.80142602653!2d-34.95133!3d-8.0554591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x20ceccca91a11dd3!2sCIn%20-%20UFPE!5e0!3m2!1sen!2sbr!4v1616528264590!5m2!1sen!2sbr",width:"700",height:"213",allowfullscreen:"",loading:"lazy"}})])],1)]),i("div",{staticClass:"d-md-flex d-lg-none align-center justify-center flex-column"},[i("p",{staticClass:"mb-4",attrs:{id:"title_abus_md"}},[t._v("Contact")]),i("p",{staticClass:"intro"},[t._v("If you would like to talk or hire our services, feel free to give us a call!")]),i("p",{staticClass:"intro mb-6"},[t._v("We have the following means of contact:")]),i("div",{staticClass:"contact-center-md"},[i("v-row",{staticClass:"first-row-md mb-4"},[i("div",{staticClass:"contact-address-md mr-4 pt-3 d-flex flex-column justify-center align-center"},[i("v-img",{staticClass:"mb-2",attrs:{src:a("6c8d"),contain:"",height:"35"}}),i("p",{staticClass:"contact-title-md"},[t._v("Our Address")]),i("p",{staticClass:"contact-description-md"},[t._v("Av. Jorn. Aníbal Fernandes, s/n - Cidade Universitária, Recife - PE, 50740-560")])],1),i("div",{staticClass:"mr-9 contact-email d-flex flex-column justify-center align-center"},[i("v-img",{staticClass:"mb-2",attrs:{src:a("6c8d"),contain:"",height:"35"}}),i("p",{staticClass:"contact-title-md"},[t._v("Email Us")]),i("p",{staticClass:"contact-description-md"},[t._v("ljba@cin.ufpe.br")])],1),i("div",{staticClass:"contact-call-md d-flex flex-column justify-center align-center"},[i("v-img",{staticClass:"mb-2",attrs:{src:a("6c8d"),contain:"",height:"35"}}),i("p",{staticClass:"contact-title-md"},[t._v("Call Us")]),i("p",{staticClass:"contact-description-md"},[t._v("00 00 0000-0000")])],1)]),i("v-row",{staticClass:"second-row-md d-flex justify-center align-center"},[i("iframe",{staticClass:"contact-map d-md-flex d-lg-none",staticStyle:{border:"1px solid #000000"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15801.80142602653!2d-34.95133!3d-8.0554591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x20ceccca91a11dd3!2sCIn%20-%20UFPE!5e0!3m2!1sen!2sbr!4v1616103333523!5m2!1sen!2sbr",width:"768",height:"178",allowfullscreen:"",loading:"lazy"}})])],1)])])},N=[],L={name:"Contact",props:{purpleBg:Boolean},data:function(){return{background_purple:"#ebe6ef",background_white:"white"}},methods:{respond:function(t){console.log(t)}}},z=L,G=(a("e882"),a("adda")),X=Object(d["a"])(z,J,N,!1,null,"4e6c40c4",null),Z=X.exports;u()(X,{VContainer:m["a"],VImg:G["a"],VRow:f["a"]});var $={name:"App",components:{AppBarBar:C,AboutUs:I,Functionalities:M,Parameters:W,Contact:Z},data:function(){return{backColor:"transparent",appBarHeight:100}},methods:{clickButton:function(){this.$vuetify.goTo("#aboutus",{easing:"easeInOutQuad",duration:500})},isHomeInViewport:function(){if(!document.querySelector("#home"))return!0;var t=document.querySelector("#home").getBoundingClientRect();return console.log("in app:",t.bottom>60),t.bottom>50?(this.backColor="transparent",this.appBarHeight=100,!0):(this.backColor="#390360",this.appBarHeight=60,!1)}}},tt=$,et=(a("19f4"),a("7496")),at=a("40dc"),it=a("f6c4"),st=a("f977"),rt=Object(d["a"])(tt,s,r,!1,null,"5e437a04",null),nt=rt.exports;u()(rt,{VApp:et["a"],VAppBar:at["a"],VBtn:_["a"],VCol:Q["a"],VImg:G["a"],VMain:it["a"]}),g()(rt,{Scroll:st["b"]});var ot=a("f309");i["a"].use(ot["a"]);var ct=new ot["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:ct,render:function(t){return t(nt)}}).$mount("#app")},"60a0":function(t,e,a){"use strict";a("fa62")},"6c8d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAYAAAABtRhCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuSURBVHgBtZaxchMxEIZ/SWFwh+nJcG/A0Zk0OXd0xG9wGRpK8wZQUoWWgol4A1oqTJOYSYF5AmCGBzAd4EjLrkmcm8vdSadx/pnz6aRdfZb2dk9AgkaDMtvD0/tIkEaKViicdgdI0A4SpIAn/LNEgtJWCOQMTVphb+DerTLnW8bXMCWOvYHOYX/TTohjb6BWKDYP1fZNAVlFxblAT/UCjnbKgm/DStfwou9mgOTxIKZva0CO30FM39aAaI5ZXqAcIlJKjP8aWKKIrVHr/LsuwneEfRe3HQ6VtAX6x+AYidUjJAJmA4fJDHapqgOPdHnE/2SKLUoR7Im3h5fPpjr4kxYf7qkcKiGhm8RhenHq7fNqn6kbMfTTNqACm3v7st5vmowFuqvyX7y9j5EgT5h+9vZV05hpc2LofFfnX7kp0AFiRFiSUs8Y9qbNRIXmkNLFgf+ICJHDeA4767IJJj7DopOajLoTsgkD5TgRKU1UBG1CBhyXHPEKFo7OGMpxUK3wDT3E5euuVJS28e4VrppzUaoHr/x109hvozpDoAOD+/U+SWgpVVJBpH3dqzuOnUCqfY7q1UPadSivvuiaszWGchzkr/mXK7gq5+74XZMtF/0pz3S0mdSZ7ARvfzTZtq7Q+4u3k9Yn7EkbTMTbK/Gc8LV+WbqOj63Adf4x7NxjfOrsewQkNucaY/kYc+HP+wMJGW/pwzPYBSJ1trIL9hnrfrn7/wQwQpkhUeLb5v8PMZq/crs9kJsAAAAASUVORK5CYII="},"890c":function(t,e,a){"use strict";a("5133")},a409:function(t,e,a){},b1cf:function(t,e,a){"use strict";a("d9e7")},b725:function(t,e,a){},c570:function(t,e,a){t.exports=a.p+"img/nomu.fc37f0f2.png"},d9e7:function(t,e,a){},e882:function(t,e,a){"use strict";a("a409")},ef3c:function(t,e,a){"use strict";a("b725")},fa62:function(t,e,a){}});
//# sourceMappingURL=app.a08af7ba.js.map