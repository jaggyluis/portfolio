(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(e,t,i){e.exports=i(44)},40:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),a=i(21),r=i.n(a),l=(i(40),i(2)),s=i(3),d=i(5),h=i(4),p=i(6),c=(i(41),i(8)),u=function(e,t,i){return c.c().tile((function(e,n,o,a,r){c.d(e,0,0,t,i);var l=!0,s=!1,d=void 0;try{for(var h,p=(e.children||[])[Symbol.iterator]();!(l=(h=p.next()).done);l=!0){var u=h.value;u.x0=n+u.x0/t*(a-n),u.x1=n+u.x1/t*(a-n),u.y0=o+u.y0/i*(r-o),u.y1=o+u.y1/i*(r-o)}}catch(y){s=!0,d=y}finally{try{l||null==p.return||p.return()}finally{if(s)throw d}}}))(c.a(e).sum((function(e){return function(e){return void 0!==e.weight?e.weight:e.content?3:1}(e)})).sort((function(e,t){return(t.value||0)-(e.value||0)})))},y=function(e){function t(){var e,i;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(i=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={src:null,placeholder:null,contain:!!i.props.contain},i}return Object(p.a)(t,e),Object(s.a)(t,[{key:"getPlaceholderPath",value:function(e){if(e){var t=e.split(".");return t[0]+"_s."+t[1]}return""}},{key:"getMobilePath",value:function(e){if(e){var t=e.split(".");return t[0]+"_m."+t[1]}return""}},{key:"componentDidMount",value:function(){var e=this,t=this.props.src;window.innerWidth<600&&(t=this.getMobilePath(t));var i=new Image;i.src=t,i.onload=function(){e.setState({src:t})}}},{key:"shouldComponentUpdate",value:function(e){return null===this.state.src||this.state.contain!==!!e.contain}},{key:"getStyle",value:function(){return{width:"100%",height:"100%",objectFit:this.props.contain?"contain":"cover",position:"absolute",filter:this.props.contain?"drop-shadow(0px 0px 1px rgba(0,0,0,.3))":""}}},{key:"render",value:function(){return this.state.contain=!!this.props.contain,n.createElement("img",{src:this.state.src||this.getPlaceholderPath(this.props.src),alt:"",style:this.getStyle()})}}]),t}(n.Component),g=(i(42),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"getSplashImagePath",value:function(){return this.props.node.data.src||""}},{key:"getLabelStyle",value:function(){var e=this.props.width<600?25:30,t=Math.ceil(e/5);return{fontSize:e-this.props.nodeDepth*t+"px"}}},{key:"render",value:function(){return n.createElement("div",{className:"layout-overlay"},n.createElement(y,{src:this.getSplashImagePath()}),n.createElement("div",{className:"layout-color"}),n.createElement("div",{className:"layout-lslider"},n.createElement("div",{className:"layout-slider-color"}),n.createElement("div",{className:"layout-tslider"},n.createElement("div",{className:"layout-slider-color"}),n.createElement("div",{className:"layout-label",style:this.getLabelStyle()},this.props.node.data.label))))}}]),t}(n.Component)),v=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"getImagePath",value:function(){return this.props.node.data.src||""}},{key:"getImage",value:function(){return n.createElement(y,{src:this.getImagePath(),contain:this.props.nodeState.selected})}},{key:"getContentStyle",value:function(){return{borderBottom:"1px solid rgba(100,100,100,0.1)",borderTop:"1px solid rgba(100,100,100,0.1)",color:"dimgrey",marginTop:"10px"}}},{key:"getContent",value:function(){var e=this;return this.props.node.data.content?this.props.node.data.content.map((function(t,i){return n.createElement("div",{className:"layout-text",style:e.getContentStyle(),key:i},t)})):[]}},{key:"getLabelStyle",value:function(){return{textTransform:"uppercase",fontWeight:"bold",fontSize:"40px",lineHeight:.8,position:"sticky",top:0,color:"#d3d3d366",mixBlendMode:"multiply"}}},{key:"getLabel",value:function(){return this.props.node.data.content?n.createElement("div",{className:"layout-label",style:this.getLabelStyle()},this.props.node.data.label):void 0}},{key:"getStyle",value:function(){return{width:this.props.node.data.content?"calc(100% - 10px)":"100%",height:"100%",position:"absolute",overflowY:"auto",overflowX:"hidden",zIndex:4,marginLeft:this.props.node.data.content?"10px":"",borderLeft:this.props.node.data.content?"1px solid rgba(100,100,100,0.1)":"",fontSize:window.innerWidth<600?"12px":"14px"}}},{key:"render",value:function(){return n.createElement("div",{className:"layout-content",style:this.getStyle()},this.getImage(),this.getLabel(),this.getContent())}}]),t}(n.Component),f=(i(43),function(e){function t(){var e,i;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(i=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).container=null,i.layout=u(i.props.node.data,i.props.width,i.props.height),i.state={width:i.props.width,height:i.props.height,selectedChildId:null,visibleChildId:null,transitionDuration:400},i}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.update()}},{key:"componentWillUpdate",value:function(){this.update()}},{key:"shouldComponentUpdate",value:function(){return null==this.props.parentState||this.props.parentState.selected}},{key:"update",value:function(){this.props.width===this.state.width&&this.props.height===this.state.height||(this.layout=u(this.props.node.data,this.props.width,this.props.height)),this.props.nodeState.selected||(this.state.selectedChildId=null,this.state.visibleChildId=null)}},{key:"getChildState",value:function(e){return{selected:this.isChildVisible(e),hidden:null!==this.props.parent&&!this.props.nodeState.selected}}},{key:"isChildVisible",value:function(e){return this.state.visibleChildId===e.data.id}},{key:"isChildSelected",value:function(e){return this.state.selectedChildId===e.data.id}},{key:"areNoChildrenSelected",value:function(){return null===this.state.selectedChildId}},{key:"setSelectedChild",value:function(e){var t=this;"dir"===e.data.type?(this.setState({selectedChildId:e.data.id}),setTimeout((function(){t.setState({visibleChildId:e.data.id})}),this.state.transitionDuration)):this.setState({selectedChildId:e.data.id,visibleChildId:e.data.id})}},{key:"clearSelectedChildren",value:function(){this.setState({selectedChildId:null,visibleChildId:null})}},{key:"onChildClick",value:function(e){e?e.data.content||this.setSelectedChild(e):this.clearSelectedChildren()}},{key:"getChildTop",value:function(e){return this.isChildSelected(e)?"0%":100*e.y0+"%"}},{key:"getChildLeft",value:function(e){return this.isChildSelected(e)?"0%":100*e.x0+"%"}},{key:"getChildWidth",value:function(e){return this.isChildSelected(e)?"100%":100*(e.x1-e.x0)+"%"}},{key:"getChildHeight",value:function(e){return this.isChildSelected(e)?"100%":100*(e.y1-e.y0)+"%"}},{key:"getChildOpacity",value:function(e){return this.isChildSelected(e)||this.areNoChildrenSelected()?1:0}},{key:"getChildDisplay",value:function(e){return this.isChildSelected(e)||this.areNoChildrenSelected()?"":"none"}},{key:"getChildZIndex",value:function(e){return this.isChildSelected(e)||this.areNoChildrenSelected()?2:0}},{key:"getChildStyle",value:function(e){return{position:"absolute",top:this.getChildTop(e),left:this.getChildLeft(e),height:this.getChildHeight(e),width:this.getChildWidth(e),zIndex:this.getChildZIndex(e),display:this.getChildDisplay(e),transition:this.state.transitionDuration+"ms",willChange:"top, left, height, width, opacity"}}},{key:"getChildrenStyle",value:function(){return{position:"relative",height:"100%",width:"100%"}}},{key:"getChildren",value:function(){var e=this;if(this.props.nodeState.selected)return n.createElement("div",{className:"layout-children",style:this.getChildrenStyle()},(this.layout.children||[]).map((function(i){return n.createElement("div",{key:i.data.id,className:"layout-child-position",style:e.getChildStyle(i)},n.createElement(t,{width:e.props.width,height:e.props.height,parent:e.props.node,parentState:e.props.nodeState,node:i,nodeState:e.getChildState(i),nodeDepth:e.props.nodeDepth+1,nodeSiblings:e.layout.children||[],onNodeClick:e.onChildClick.bind(e)}))})))}},{key:"getHeaderStyle",value:function(){return{display:this.props.nodeState.selected?"flex":"none",flexWrap:"wrap",marginBottom:"10px",borderBottom:"1px solid rgba(100,100,100,0.05)"}}},{key:"getHeaderNodeStyle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.props.width<600?25:30,i=Math.ceil(t/5),n=this.props.nodeDepth*i,o=t-n;return{position:"relative",fontWeight:e?"lighter":"bolder",paddingRight:"10px",fontSize:o+"px",lineHeight:.8,textTransform:"uppercase",mixBlendMode:"overlay",color:e?"lightgrey":"black",display:this.props.nodeState.selected?"":"none"}}},{key:"getHeader",value:function(){var e=this;if("dir"===this.props.node.data.type)return n.createElement("div",{className:"layout-header",style:this.getHeaderStyle()},n.createElement("div",{className:"layout-header-node",onClick:this.clearSelectedChildren.bind(this),style:this.getHeaderNodeStyle()},this.props.node.data.label),this.props.width<600?void 0:this.props.nodeSiblings.map((function(t){return t.data.id!==e.props.node.data.id?n.createElement("div",{className:"layout-header-node",onClick:function(i){e.props.onNodeClick&&(e.props.onNodeClick(t),i.stopPropagation())},key:t.data.id,style:e.getHeaderNodeStyle(!0)},"/ "+t.data.label):void 0})))}},{key:"getOverlayStyle",value:function(){return{position:"absolute",width:"100%",height:"100%",pointerEvents:this.props.nodeState.selected?"none":"all",display:this.props.nodeState.selected?"none":""}}},{key:"getOverlay",value:function(){if("dir"===this.props.node.data.type)return n.createElement("div",{className:"layout-overlay-position",style:this.getOverlayStyle()},n.createElement(g,{width:this.props.width,height:this.props.height,node:this.props.node,nodeState:this.props.nodeState,nodeDepth:this.props.nodeDepth,nodeSiblings:this.props.nodeSiblings,parent:this.props.parent,parentState:this.props.parentState}))}},{key:"getContent",value:function(){if("dir"!==this.props.node.data.type)return n.createElement(v,{width:this.props.width,height:this.props.height,node:this.props.node,nodeState:this.props.nodeState,nodeDepth:this.props.nodeDepth,nodeSiblings:this.props.nodeSiblings,parent:this.props.parent,parentState:this.props.parentState})}},{key:"getDrawLines",value:function(){if(!this.props.parentState||this.props.parentState.selected)return n.createElement("div",{className:"layout-draw-lines"},n.createElement("div",{key:"top",style:{position:"absolute",width:3*window.innerWidth+"px",height:"1px",marginTop:"-1px",top:0,left:0,marginLeft:-window.innerWidth,pointerEvents:"none",background:"rgba(100,100,100,0.05)"}}),n.createElement("div",{key:"bottom",style:{position:"absolute",width:3*window.innerWidth+"px",height:"1px",marginBottom:"-1px",left:0,bottom:0,marginLeft:-window.innerWidth,pointerEvents:"none",background:"rgba(100,100,100,0.05)"}}),n.createElement("div",{key:"left",style:{position:"absolute",width:"1px",marginLeft:"-1px",height:3*window.innerHeight,left:0,top:0,marginTop:-window.innerHeight,pointerEvents:"none",background:"rgba(100,100,100,0.05)"}}))}},{key:"getStyle",value:function(){return{position:"absolute",top:0,left:0,height:"100%",width:"100%",flexDirection:"column",zIndex:1,display:this.props.nodeState.hidden?"none":"flex",margin:"-1px",border:"1px solid rgba(100,100,100,0.05)"}}},{key:"getClassName",value:function(){var e=["layout"];return this.props.nodeState.hidden&&e.push("hidden"),this.props.nodeState.selected&&e.push("selected"),e.join(" ")}},{key:"render",value:function(){var e=this;return n.createElement("div",{className:this.getClassName(),ref:function(t){return e.container=t},style:this.getStyle(),onClick:function(){e.props.onNodeClick&&e.props.onNodeClick(e.props.node)}},this.getHeader(),this.getOverlay(),this.getChildren(),this.getContent(),this.getDrawLines())}}]),t}(n.Component));var m=function(e){function t(){var e,i;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(i=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={selected:!1,width:window.innerWidth,height:window.innerHeight},i}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onNodeClick",value:function(){this.setState({selected:!0})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(e){var t;return function(i){t&&clearTimeout(t),t=setTimeout(e,500,i)}}((function(){e.setState({width:window.innerWidth,height:window.innerHeight})})))}},{key:"render",value:function(){var e=u(this.props.data,this.state.width,this.state.height);return e.data.label="Luis Jaggy",o.a.createElement("div",{className:"App",onClick:this.onNodeClick.bind(this),style:{height:"95%",width:"95%",position:"absolute",marginTop:"1%",marginLeft:"2.5%"}},o.a.createElement(f,{width:this.state.width,height:this.state.height,node:e,nodeState:{selected:this.state.selected},nodeDepth:0,nodeSiblings:[],parent:null,parentState:null}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.b("data.json").then((function(e){e&&r.a.render(o.a.createElement("div",{className:"app-wrapper",style:{width:"100%",height:"100%",overflow:"hidden",position:"absolute"}},o.a.createElement(m,{data:e})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.3a7af0bd.chunk.js.map