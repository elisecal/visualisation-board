(function(e){function t(t){for(var r,c,i=t[0],o=t[1],l=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},s=[];function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/visualisation-board/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"44ca":function(e,t,a){"use strict";a("6799")},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="4678"},"54c9":function(e,t,a){"use strict";a("617a")},"56a4":function(e,t,a){"use strict";a("876a")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"#354551",dark:""}},[a("v-spacer"),a("v-toolbar-title",{attrs:{default:""}},[e._v("Bitcoin Price Index Dashboard")]),a("v-spacer")],1),a("v-main",[a("Dashboard")],1),a("v-footer",{attrs:{app:"",dark:"",absolute:""}},[a("v-spacer"),a("div",{staticClass:"d-flex align centre"},[a("v-btn",{attrs:{href:"https://www.coindesk.com/price/bitcoin",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v("Powered by Coindesk")]),a("v-icon",[e._v("mdi-open-in-new")])],1)],1),a("v-spacer"),a("v-btn",{attrs:{dark:"",icon:"",href:"https://github.com/elisecal/visualisation-board",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","github-square"],size:"2x"}})],1)],1)],1)},s=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[e.loaded?a("grid-layout",{attrs:{layout:e.chartItems,"col-num":e.gridColumnNumer,"row-height":e.gridRowHeight,"is-draggable":e.isDraggable,"is-resizable":e.isResizable,"vertical-compact":!0,"use-css-transforms":!0},on:{"update:layout":function(t){e.chartItems=t}}},e._l(e.chartItems,(function(t){return a("grid-item",{key:t.i,style:e.getGridItemBackground(t.type),attrs:{x:t.x,y:t.y,w:t.w,h:t.h,i:t.i,minH:t.minH,minW:t.minW}},[a("div",{staticClass:"pa-3"},[a(t.type,{tag:"component",staticClass:"chart-item",attrs:{chartData:t.chartData,options:t.options}})],1)])})),1):e._e()],1)},i=[],o=a("3835"),l=a("1da1"),u=(a("96cf"),a("820e"),a("d3b7"),a("3ca3"),a("ddb0"),a("7be8")),d=a("bc3a"),f=a.n(d),b=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f()("/historical/close.json",{params:{start:"2019-01-01",end:"2019-12-31"}});case 3:return t=e.sent,a=t.data,e.abrupt("return",a.bpi);case 8:throw e.prev=8,e.t0=e["catch"](0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=b,j=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f()("/currentprice.json");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.bpi);case 8:throw e.prev=8,e.t0=e["catch"](0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),h=j,m=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f()("/historical/close.json",{params:{for:"yesterday"}});case 3:return t=e.sent,a=t.data,e.abrupt("return",a.bpi);case 8:throw e.prev=8,e.t0=e["catch"](0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),v=m,y=a("30ef"),g=a.n(y),k=a("1fca");g.a.defaults.LineWithLine=g.a.defaults.line,g.a.controllers.LineWithLine=g.a.controllers.line.extend({draw:function(e){if(g.a.controllers.line.prototype.draw.call(this,e),this.chart.tooltip._active&&this.chart.tooltip._active.length){var t=this.chart.tooltip._active[0],a=this.chart.ctx,r=t.tooltipPosition().x,n=this.chart.legend.bottom,s=this.chart.chartArea.bottom;a.save(),a.beginPath(),a.moveTo(r,n),a.lineTo(r,s),a.lineWidth=2,a.strokeStyle="#648cac",a.stroke(),a.restore()}}});var x,w,C=Object(k["a"])("line-chart","LineWithLine"),_={extends:C,props:{chartData:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartData,this.options)}},O=_,D=a("2877"),z=Object(D["a"])(O,x,w,!1,null,null,null),P=z.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center info-box"},[a("h2",[e._v(e._s(e.chartData.title))]),e._l(e.chartData.data,(function(t){return a("div",{key:t.code,staticClass:"currency"},[a("strong",{staticClass:"d-none d-sm-inline-flex mr-1"},[e._v(e._s(t.description)+": ")]),a("span",{staticClass:"lighten"},[a("span",{domProps:{innerHTML:e._s(t.symbol)}}),e._v(e._s(e._f("currencydecimal")(t.rate_float))+" ")])])}))],2)},L=[],F=(a("b680"),{name:"CurrentPriceChart",props:{chartData:{type:Object,default:null},options:{type:Object,default:null}},filters:{currencydecimal:function(e){return e.toFixed(2)}}}),I=F,R=(a("44ca"),Object(D["a"])(I,S,L,!1,null,"997a43b4",null)),T=R.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center info-box"},[a("h2",[e._v(e._s(e.chartData.title))]),a("span",[e._v(" $ "+e._s(e._f("currencydecimal")(e.chartData.data))+" ")])])},W=[],E={name:"PreviousPriceChart",props:{chartData:{type:Object,default:null},options:{type:Object,default:null}},filters:{currencydecimal:function(e){return e.toFixed(2)}}},H=E,V=(a("54c9"),Object(D["a"])(H,M,W,!1,null,"104ba58a",null)),A=V.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"error-box"},[e._v(" There has been an error while loading this chart. Please try again later.. ")])},U=[],$={name:"ErrorChart"},G=$,q=(a("56a4"),Object(D["a"])(G,B,U,!1,null,"32e213db",null)),N=q.exports,J=(a("b64b"),a("07ac"),function(e,t){return{chartData:{labels:Object.keys(e),datasets:[{label:"",data:Object.values(e),backgroundColor:"rgba(100, 140, 172, 0.4)",borderColor:"#1C4C64",lineTension:0,pointBackgroundColor:"#1C4C64"}]},options:{title:{display:!0,text:"Bitcoin Price Index for the Year 2019"},elements:{point:{radius:1}},scales:{xAxes:[{type:"time",time:{unit:"month",displayFormats:{month:"MMM"}},ticks:{source:"auto"},gridLines:{display:!0},scaleLabel:{display:!0,labelString:"2019"}}],yAxes:[{ticks:{callback:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0})}},scaleLabel:{display:!0,labelString:"Bitcoin Price Index as USD ($)"}}]},maintainAspectRatio:!1,legend:{display:!1},tooltips:{intersect:!1,mode:"nearest",displayColors:!1,titleFontSize:13,bodyFontSize:13,callbacks:{label:function(e){return e.yLabel.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:2})}}}},type:"line-chart",x:0,y:0,w:18,h:11,minW:5,minH:11,i:t}}),Y=function(e){return{type:"error-chart",x:0,y:0,w:5,h:3,minW:4,minH:2,i:e}},K=function(e,t,a){return{x:0,y:0,w:5,h:4,minW:3,minH:4,i:t,chartData:{data:e,title:a},type:"current-price-chart"}},Q=function(e,t,a){return{x:7,y:12,w:5,h:4,minW:3,minH:4,i:t,chartData:{data:Object.values(e)[0],title:a},type:"previous-price-chart"}},X={name:"Dashboard",components:{GridLayout:u["GridLayout"],GridItem:u["GridItem"],LineChart:P,CurrentPriceChart:T,PreviousPriceChart:A,ErrorChart:N},data:function(){return{gridColumnNumer:12,gridRowHeight:30,isDraggable:!0,isResizable:!0,chartItems:[],loaded:!1}},mounted:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.allSettled([p(),h(),v()]);case 2:a=t.sent,r=Object(o["a"])(a,3),n=r[0],s=r[1],c=r[2],e.chartItems=[e.generateChartComponentData(n,"0"),e.generateCurrentChartComponentData(s,"1","Current Price"),e.generatePrevioustChartComponentData(c,"2","Yesterday's Price")],e.loaded=!0;case 9:case"end":return t.stop()}}),t)})))()},methods:{generateChartComponentData:function(e,t){return"fulfilled"===e.status?J(e.value,t):Y(t)},generateCurrentChartComponentData:function(e,t,a){return"fulfilled"===e.status?K(e.value,t,a):Y(t)},generatePrevioustChartComponentData:function(e,t,a){return"fulfilled"===e.status?Q(e.value,t,a):Y(t)},getGridItemBackground:function(e){return{background:"line-chart"===e?"#FFF":"#1C4C74"}}}},Z=X,ee=(a("6809"),a("6544")),te=a.n(ee),ae=a("a523"),re=Object(D["a"])(Z,c,i,!1,null,"e5cb4690",null),ne=re.exports;te()(re,{VContainer:ae["a"]});a("f824");var se=a("ad3d"),ce={name:"App",components:{Dashboard:ne,FontAwesomeIcon:se["a"]},data:function(){return{icon:"fa github-square"}}},ie=ce,oe=a("7496"),le=a("40dc"),ue=a("8336"),de=a("553a"),fe=a("132d"),be=a("f6c4"),pe=a("2fa4"),je=a("2a7f"),he=Object(D["a"])(ie,n,s,!1,null,null,null),me=he.exports;te()(he,{VApp:oe["a"],VAppBar:le["a"],VBtn:ue["a"],VFooter:de["a"],VIcon:fe["a"],VMain:be["a"],VSpacer:pe["a"],VToolbarTitle:je["a"]});var ve=a("f309"),ye=a("ecee"),ge=a("f2d1");ye["c"].add(ge["a"]),r["default"].use(ve["a"]);var ke=new ve["a"]({});r["default"].config.productionTip=!1,f.a.defaults.baseURL="https://api.coindesk.com/v1/bpi",new r["default"]({vuetify:ke,render:function(e){return e(me)}}).$mount("#app")},"617a":function(e,t,a){},6246:function(e,t,a){},6799:function(e,t,a){},6809:function(e,t,a){"use strict";a("6246")},"876a":function(e,t,a){},f824:function(e,t,a){}});
//# sourceMappingURL=app.0a0bff08.js.map