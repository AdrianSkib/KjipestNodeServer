(this["webpackJsonpkjipest-app"]=this["webpackJsonpkjipest-app"]||[]).push([[0],{100:function(e,t,a){e.exports=a(193)},105:function(e,t,a){},107:function(e,t,a){},190:function(e,t,a){e.exports=a.p+"static/media/rain.701bc143.svg"},191:function(e,t,a){e.exports=a.p+"static/media/partlycloudy.aa3b800f.svg"},192:function(e,t,a){e.exports=a.p+"static/media/logo.617bcacd.svg"},193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),l=(a(105),a(32)),s=a.n(l),o=a(60),d=a(89),u=a(90),m=a(99),h=a(97),g=(a(107),a(61)),p=a.n(g),v=a(98),f=a(41),E=a(95),w=(a(186),a(96)),x=a.n(w),y=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).listRef=r.a.createRef(),e.Row=function(t){var n=t.index,i=t.style;return e.state.flipList&&(n=e.state.data.length-n-3>0?e.state.data.length-n-3:0),r.a.createElement("div",{id:"listelement",style:i},r.a.createElement("div",{className:"elementelement",id:"rank"},n+1),r.a.createElement("div",{className:"elementelement",id:"location"},e.state.data[n].location),r.a.createElement("div",{className:"elementelement",id:"score"},e.state.data[n].kjipestScore.toFixed(2)),r.a.createElement("div",{className:"elementelement",id:"icon"},r.a.createElement("img",{src:a(190),alt:""})))},e.onSelect=function(t,a){e.state.flipList?e.listRef.current.scrollToItem(e.state.data.length-a.index-3,"start"):e.listRef.current.scrollToItem(a.index,"start"),e.setState({searchingFor:t})},e.renderItem=function(e){return r.a.createElement("div",{className:"searchItem"},e.location)},e.renderMenu=function(t,a,n){e.cellHeightCache.clearAll();return r.a.createElement(f.c,{rowHeight:e.cellHeightCache.rowHeight,height:207,rowCount:t.length,rowRenderer:function(a){var n=a.key,i=a.index,c=a.parent,l=a.style,s=t[i];return r.a.createElement(f.a,{cache:e.cellHeightCache,key:n,parent:c,rowIndex:i},r.a.cloneElement(s,{style:l,key:n,onMouseEnter:null,onMouseDown:function(e){0===e.button&&s.props.onClick(e)}}))},width:n.minWidth||0,style:{height:"auto",maxHeight:"207px"}})},e.cellHeightCache=new f.b({defaultHeight:42,fixedWidth:!0}),e.state={data:[],searchingFor:"",gotData:!1,currentLoc:"Laster din posisjon",currentIndex:-1,currentScore:-1,flipList:!1,orderText:"Kjipest \u2013 Minst kjipt \u2193",locData:{},hasPos:!1,lat:"",lon:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://kjipestnodeserver.azurewebsites.net/sorted");case 2:return t=e.sent,e.next=5,t.data;case 5:if(a=e.sent,n=a.map((function(e,t){return e.index=t,e})),this.setState({data:n,gotData:!0}),document.getElementById("main").style.height=window.innerHeight-160+"px",document.getElementById("list").style.width=window.innerWidth-300+"px",document.getElementById("categories").style.width=window.innerWidth-300+"px",!navigator.geolocation){e.next=19;break}return r=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://kjipestnodeserver.azurewebsites.net/lonlat/"+t.coords.longitude+"&"+t.coords.latitude);case 2:return a=e.sent,e.next=5,a.data;case 5:r=e.sent,i=n.find((function(e){return e.location===r.location})),this.setState({locData:r,currentLoc:r.location,currentIndex:i.index,currentScore:r.kjipestScore}),this.setState({lat:t.coords.latitude,lon:t.coords.longitude,hasPos:!0});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),e.next=19,navigator.geolocation.getCurrentPosition(r.bind(this));case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"KjipestList",value:function(){var e=this;return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{flex:"1 1 auto",height:"100vh"}},r.a.createElement(E.a,null,(function(t){var a=t.height,n=t.width;return r.a.createElement(v.a,{className:"List",height:a,itemCount:e.state.data.length,itemSize:80,width:n,ref:e.listRef,itemData:e.state.flipList},e.Row)}))))}},{key:"getLocalScore",value:function(){return this.state.currentScore<0?"__":this.state.currentScore.toFixed(2)}},{key:"getLocalPercentage",value:function(){return this.state.currentScore<0?"__":(this.state.currentIndex/this.state.data.length*100).toFixed(1).toString()+" %"}},{key:"renderPage",value:function(){var e=this,t=this.state.searchingFor,n=t?this.state.data.filter((function(e){return e.location.toLowerCase().includes(t.toLowerCase())})):[];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav",id:"search"},r.a.createElement(x.a,{items:n,value:this.state.searchingFor,renderItem:this.renderItem,renderMenu:this.renderMenu,getItemValue:function(e){return e.location},onChange:function(t,a){return e.setState({searchingFor:a})},onSelect:this.onSelect,inputProps:{placeholder:"s\xf8k"}})),r.a.createElement("div",{className:"nav",id:"navlist"},r.a.createElement("h2",null,"Liste")),r.a.createElement("div",{className:"nav"},r.a.createElement("h2",null,"Kart")),r.a.createElement("div",{className:"nav"},r.a.createElement("h2",null,"Info")))),r.a.createElement("div",{className:"subheader"},r.a.createElement("div",{id:"categories"},r.a.createElement("div",{className:"head",id:"crank"},r.a.createElement("h3",null,"Rangering")),r.a.createElement("div",{className:"head",id:"cloc"},r.a.createElement("h3",null,"Sted")),r.a.createElement("div",{className:"head",id:"cscore"},r.a.createElement("h3",{onClick:function(){e.state.flipList?(e.setState({orderText:"Kjipest \u2013 Minst kjipt \u2193",flipList:!1}),e.listRef.current.scrollToItem(0,"start")):(e.setState({orderText:"Kjipest \u2013 Minst kjipt \u2191",flipList:!0}),e.listRef.current.scrollToItem(0,"start"))}},this.state.orderText)),r.a.createElement("div",{className:"head",id:"cicon"},r.a.createElement("h3",null,"V\xe6rtyper"))),r.a.createElement("div",{id:"locName"},r.a.createElement("p",null,this.state.currentLoc),r.a.createElement("h3",null,"(Din posisjon)"))),r.a.createElement("div",{id:"main"},r.a.createElement("div",{id:"list"},this.KjipestList()),r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"localinfo"},r.a.createElement("div",{id:"localscore"},r.a.createElement("h3",null,"Score:"),r.a.createElement("h1",null,this.getLocalScore())),r.a.createElement("img",{src:a(191),alt:""}),r.a.createElement("div",{className:"localrank"},r.a.createElement("h1",{className:"localpercentage"},this.getLocalPercentage()),r.a.createElement("h3",{className:"localpercentagebottom"},"av Norge har det kjipere enn deg"))),r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:a(192),alt:""})))),r.a.createElement("script",{type:"text/javascript",src:"./script.js"}))}},{key:"useEffect",value:function(){function e(){document.getElementById("main").style.height=window.innerHeight-160+"px",document.getElementById("list").style.width=window.innerWidth-300+"px",document.getElementById("categories").style.width=window.innerWidth-300+"px",window.addEventListener("resize",e)}return function(t){window.removeEventListener("resize",e)}}},{key:"render",value:function(){return this.state.gotData?r.a.createElement("div",null,this.renderPage()):r.a.createElement("div",null)}}]),n}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.e59853de.chunk.js.map