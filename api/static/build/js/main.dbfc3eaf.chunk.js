(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(22),a=n.n(o),u=(n(33),n(7)),s=n.n(u),i=n(23),p=n(9),l=(n(35),n(24)),f=n.n(l),m=n(25),d=n.n(m),j=n(1);var g=function(e){return Object(j.jsxs)("td",{children:[Object(j.jsx)("img",{className:"img-cryto",src:"https://s2.coinmarketcap.com/static/img/coins/16x16/"+e.crypto.id+".png",alt:""})," ",e.crypto.name]})};var b=function(e){var t={green:{color:"#00ff00"},red:{color:"#ff0000"}};return Object(j.jsxs)("td",{style:e.crypto.quote.USD.percent_change_24h<0?t.red:t.green,children:[e.crypto.quote.USD.percent_change_24h.toFixed(2),"%"]})};var h=function(e){var t=[{name:"Rank",selector:function(e){return e.cmc_rank},sortable:!0},{name:"Name",selector:function(e){return e.name},cell:function(e){return Object(j.jsx)(g,{crypto:e})}},{name:"Price",selector:function(e){return e.quote.USD.price},format:function(e){return"$"+e.quote.USD.price.toLocaleString()},sortable:!0},{name:"Market Cap",selector:function(e){return e.quote.USD.market_cap},format:function(e){return"$"+e.quote.USD.market_cap.toLocaleString()}},{name:"Volume (24h)",selector:function(e){return e.quote.USD.volume_24h},format:function(e){return"$"+e.quote.USD.volume_24h.toLocaleString()},sortable:!0},{name:"Change (24h)",selector:function(e){return e.quote.USD.percent_change_24h},cell:function(e){return Object(j.jsx)(b,{crypto:e})},sortable:!0}];return Object(j.jsx)("div",{className:"App "+e.progressPending,children:Object(j.jsx)(d.a,{title:"Today's Cryptocurrency Prices by Market Cap",columns:t,data:e.cryptos,progressPending:e.progressPending,defaultSortFieldId:1})})},S={API_BASE_URL:"http://127.0.0.1:8000/api/"};var y=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!0),a=Object(p.a)(o,2),u=a[0],l=a[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(S.API_BASE_URL);case 2:t=e.sent,c(t.data),l(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(h,{cryptos:n,progressPending:u})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),v()}},[[66,1,2]]]);
//# sourceMappingURL=main.dbfc3eaf.chunk.js.map