(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(t,e,i){t.exports=i(43)},40:function(t,e,i){},41:function(t,e,i){},42:function(t,e,i){},43:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i.n(n),o=i(21),r=i.n(o),l=(i(40),i(2)),s=i(3),h=i(5),d=i(4),c=i(6),u=(i(41),i(8)),p=function(t,e,i){return u.c().tile((function(t,n,a,o,r){u.d(t,0,0,e,i);var l=!0,s=!1,h=void 0;try{for(var d,c=(t.children||[])[Symbol.iterator]();!(l=(d=c.next()).done);l=!0){var p=d.value;p.x0=n+p.x0/e*(o-n),p.x1=n+p.x1/e*(o-n),p.y0=a+p.y0/i*(r-a),p.y1=a+p.y1/i*(r-a)}}catch(g){s=!0,h=g}finally{try{l||null==c.return||c.return()}finally{if(s)throw h}}}))(u.a(t).sum((function(t){return function(t){return void 0!==t.weight?t.weight:t.content?3:1}(t)})).sort((function(t,e){return(e.value||0)-(t.value||0)})))},g=function(t){function e(){var t,i;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(i=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={src:null,placeholder:null},i}return Object(c.a)(e,t),Object(s.a)(e,[{key:"getPlaceholderPath",value:function(t){if(t){var e=t.split(".");return e[0]+"_s."+e[1]}return""}},{key:"getMobilePath",value:function(t){if(t){var e=t.split(".");return e[0]+"_m."+e[1]}return""}},{key:"componentDidMount",value:function(){var t=this,e=this.props.src;window.innerWidth<1200&&(e=this.getMobilePath(e));var i=new Image;i.src=e,i.onload=function(){t.setState({src:e})}}},{key:"getStyle",value:function(){return{width:"100%",height:"100%",objectFit:this.props.contain?"contain":"cover",position:"absolute"}}},{key:"render",value:function(){return n.createElement("img",{src:this.state.src||this.getPlaceholderPath(this.props.src),alt:"",style:this.getStyle()})}}]),e}(n.Component),y=function(t){function e(){var t,i;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(i=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={hovered:!1,hidden:!1,selected:!1,transitionDuration:300},i}return Object(c.a)(e,t),Object(s.a)(e,[{key:"onMouseEnter",value:function(t){this.setState({hovered:!0}),t.stopPropagation()}},{key:"onMouseLeave",value:function(t){this.setState({hovered:!1}),t.stopPropagation()}},{key:"onClick",value:function(){this.setState({hidden:!0})}},{key:"getSplashImagePath",value:function(){return this.props.node.data.src||""}},{key:"getSplashStyle",value:function(){Math.floor(30*Math.random());return{width:"100%",height:"100%",position:"absolute",opacity:this.state.hovered?0:1,transition:2*this.getTransitionDuration()+"ms",willChange:"opacity"}}},{key:"getColorStyle",value:function(){return{width:"100%",height:"100%",position:"absolute",background:"rgba(255,255,255,0.2)",opacity:this.state.hovered?0:1,transition:2*this.getTransitionDuration()+"ms",willChange:"opacity"}}},{key:"getLSliderStyle",value:function(){return{position:"absolute",bottom:0,right:0,height:"100%",width:"100%",borderLeft:"1px solid rgba(100,100,100,0.1)",transform:this.state.hovered?"":"translate(20%, 0)",WebkitTransform:this.state.hovered?"":"translate(20%, 0)",transition:this.getTransitionDuration()+"ms",willChange:"transform"}}},{key:"getTSliderStyle",value:function(){return{position:"absolute",bottom:0,left:0,height:"100%",width:"100%",marginLeft:"-25%",paddingLeft:"25%",borderTop:"1px solid rgba(100,100,100,0.1)",transform:this.state.hovered?"":"translate(0, 30%)",WebkitTransform:this.state.hovered?"":"translate(0, 30%)",transition:this.getTransitionDuration()+"ms",transitionDelay:this.getTransitionDuration()+"ms",willChange:"transform"}}},{key:"getSliderColorStyle",value:function(){return{position:"absolute",width:"100%",height:"100%",background:"repeating-linear-gradient(-45deg,transparent,transparent 2px,rgba(100,100,100,0.1) 2px, rgba(100,100,100,0.1) 4px)",opacity:this.state.hovered?0:1,transition:this.getTransitionDuration()+"ms",transitionDelay:this.getTransitionDuration()+"ms",willChange:"opacity"}}},{key:"getLabelStyle",value:function(){var t=window.innerWidth<600?30:40,e=Math.ceil(t/5);return{position:"relative",fontWeight:"bolder",fontSize:t-this.props.nodeDepth*e+"px",lineHeight:.8,textTransform:"uppercase",mixBlendMode:"overlay",wordBreak:"break-all",background:"repeating-linear-gradient(45deg,transparent,transparent 2px,rgba(100,100,100,0.1) 2px, rgba(100,100,100,0.1) 4px)",color:"white",left:0,top:0}}},{key:"getStyle",value:function(){Math.floor(30*Math.random());return{width:"calc(100% - 0px)",height:"calc(100% - 0px)",margin:"0px",overflow:"hidden",position:"absolute",zIndex:2,display:this.state.hidden?"none":"",opacity:null==this.props.parentState||this.props.parentState.selected?1:0,transition:2*this.getTransitionDuration()+"ms"}}},{key:"getTransitionDuration",value:function(){return this.state.transitionDuration}},{key:"render",value:function(){return n.createElement("div",{className:"layout-overlay",onClick:this.onClick.bind(this),onMouseEnter:this.onMouseEnter.bind(this),onMouseLeave:this.onMouseLeave.bind(this),style:this.getStyle()},n.createElement(g,{src:this.getSplashImagePath()}),n.createElement("div",{className:"layout-color",style:this.getColorStyle()}),n.createElement("div",{className:"layout-lslider",style:this.getLSliderStyle()},n.createElement("div",{style:this.getSliderColorStyle()}),n.createElement("div",{className:"layout-tslider",style:this.getTSliderStyle()},n.createElement("div",{style:this.getSliderColorStyle()}),n.createElement("div",{className:"layout-label",style:this.getLabelStyle()},this.props.node.data.label))))}}]),e}(n.Component),v=function(t){function e(){return Object(l.a)(this,e),Object(h.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(s.a)(e,[{key:"getImagePath",value:function(){return this.props.node.data.src||""}},{key:"getImage",value:function(){return n.createElement(g,{src:this.getImagePath(),contain:this.props.nodeState.selected})}},{key:"getContentStyle",value:function(){return{borderBottom:"1px solid rgba(100,100,100,0.1)",color:"dimgrey",maxWidth:"500px"}}},{key:"getContent",value:function(){var t=this;return this.props.node.data.content?this.props.node.data.content.map((function(e,i){return n.createElement("div",{className:"layout-text",style:t.getContentStyle(),key:i},e)})):[]}},{key:"getLabelStyle",value:function(){return{textTransform:"uppercase",fontWeight:"bold",fontSize:"40px",lineHeight:.8,position:"sticky",top:0,color:"lightgrey",mixBlendMode:"multiply"}}},{key:"getLabel",value:function(){return this.props.node.data.content?n.createElement("div",{className:"layout-label",style:this.getLabelStyle()},this.props.node.data.label):void 0}},{key:"getStyle",value:function(){var t=Math.floor(50*Math.random())+200;return{width:"calc(100% - 0px)",height:"calc(100% - 0px)",background:this.props.node.data.content?"":"rgba("+t+","+t+","+t+",0.2)",margin:"0px",position:"absolute",overflowY:"auto",overflowX:"hidden",zIndex:1}}},{key:"render",value:function(){return n.createElement("div",{className:"layout-content",style:this.getStyle()},this.getImage(),this.getLabel(),this.getContent())}}]),e}(n.Component);i(42);var f=function(t){function e(){var t,i;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(i=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).container=null,i.layout=p({label:"_",type:"dir",id:"_"},100,100),i.state={selectedChildId:null,transitionDuration:0},i}return Object(c.a)(e,t),Object(s.a)(e,[{key:"componentWillMount",value:function(){this.update()}},{key:"componentWillUpdate",value:function(){this.update()}},{key:"update",value:function(){var t=this;if(this.areNoChildrenSelected())if(this.props.nodeState.hidden)this.layout=p({label:"_",type:"dir",id:"_"},100,100),this.state.selectedChildId=null;else{var e=Object.assign({},this.props.node.data);e.children=e.children?e.children.filter((function(e){var i;return(null===(i=t.props.parentState)||void 0===i?void 0:i.selected)||!e.content})):void 0,this.layout=p(e,this.props.width,this.props.height),this.state.selectedChildId=null}}},{key:"getTransitionDuration",value:function(){return this.state.transitionDuration}},{key:"getChildState",value:function(t){return{selected:this.isChildSelected(t),hidden:null!==this.props.parent&&!this.props.nodeState.selected}}},{key:"isChildSelected",value:function(t){return this.state.selectedChildId===t.data.id}},{key:"setSelectedChild",value:function(t){console.log(this.props.node.data.label,null===t||void 0===t?void 0:t.data.label),this.setState({selectedChildId:null===t?null:t.data.id})}},{key:"areNoChildrenSelected",value:function(){return null===this.state.selectedChildId}},{key:"onChildClick",value:function(t){t.data.content||this.setSelectedChild(t)}},{key:"getHeaderStyle",value:function(){return{display:this.props.nodeState.selected?"flex":"none",flexWrap:"wrap",marginBottom:"10px",borderBottom:"1px solid rgba(100,100,100,0.05)"}}},{key:"getHeaderNodeStyle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.props.width<600?30:40,i=Math.ceil(e/5),n=this.props.nodeDepth*i,a=e-n;return{position:"relative",fontWeight:t?"lighter":"bolder",paddingRight:"10px",fontSize:a+"px",lineHeight:.8,textTransform:"uppercase",mixBlendMode:"overlay",color:t?"lightgrey":"black",opacity:this.props.nodeState.selected?1:0}}},{key:"getHeader",value:function(){var t=this;return!this.props.parentState||this.props.parentState&&this.props.parentState.selected&&"dir"===this.props.node.data.type?n.createElement("div",{className:"layout-header",style:this.getHeaderStyle()},n.createElement("div",{className:"layout-header-node",style:this.getHeaderNodeStyle()},this.props.node.data.label),this.props.width<600?void 0:this.props.nodeSiblings.map((function(e){return e.data.id!==t.props.node.data.id?n.createElement("div",{className:"layout-header-node",onClick:function(){t.props.onSiblingClick&&t.props.onSiblingClick(e)},key:e.data.id,style:t.getHeaderNodeStyle(!0)},"/ "+e.data.label):void 0}))):void 0}},{key:"getOverlay",value:function(){return"dir"===this.props.node.data.type?n.createElement(y,{width:this.props.width,height:this.props.height,node:this.props.node,nodeState:this.props.nodeState,nodeDepth:this.props.nodeDepth,nodeSiblings:this.props.nodeSiblings,parent:this.props.parent,parentState:this.props.parentState}):n.createElement(v,{width:this.props.width,height:this.props.height,node:this.props.node,nodeState:this.props.nodeState,nodeDepth:this.props.nodeDepth,nodeSiblings:this.props.nodeSiblings,parent:this.props.parent,parentState:this.props.parentState})}},{key:"getChildTop",value:function(t){return this.isChildSelected(t)?0:100*t.y0+"%"}},{key:"getChildLeft",value:function(t){return this.isChildSelected(t)?0:100*t.x0+"%"}},{key:"getChildWidth",value:function(t){return this.isChildSelected(t)?"100%":100*(t.x1-t.x0)+"%"}},{key:"getChildHeight",value:function(t){return this.isChildSelected(t)?"100%":100*(t.y1-t.y0)+"%"}},{key:"getChildOpacity",value:function(t){return this.isChildSelected(t)||this.areNoChildrenSelected()?1:0}},{key:"getChildDisplay",value:function(t){return this.isChildSelected(t)||this.areNoChildrenSelected()?"visible":"none"}},{key:"getChildStyle",value:function(t){return{position:"absolute",top:this.getChildTop(t),left:this.getChildLeft(t),height:this.getChildHeight(t),width:this.getChildWidth(t),display:this.getChildDisplay(t),transition:this.getTransitionDuration()+"ms",opacity:this.getChildOpacity(t),willChange:"top, left, height, width, opacity"}}},{key:"getChildrenStyle",value:function(){return{position:"relative",height:"100%",width:"100%"}}},{key:"getChildren",value:function(){var t=this;return this.layout.children?this.layout.children.map((function(i){return n.createElement("div",{key:i.data.id,className:"layout-child",onClick:function(){t.onChildClick(i)},style:t.getChildStyle(i)},n.createElement(e,{width:t.props.width,height:t.props.height,parent:t.props.node,parentState:t.props.nodeState,node:i,nodeState:t.getChildState(i),nodeDepth:t.props.nodeDepth+1,nodeSiblings:t.layout.children||[],onSiblingClick:t.setSelectedChild.bind(t)}))})):[]}},{key:"getDrawLines",value:function(){return[n.createElement("div",{key:"top",style:{position:"absolute",width:3*window.innerWidth+"px",height:"1px",marginTop:"-1px",top:0,left:0,marginLeft:-window.innerWidth,pointerEvents:"none",background:"rgba(100,100,100,0.05)"}}),n.createElement("div",{key:"bottom",style:{position:"absolute",width:3*window.innerWidth+"px",height:"1px",marginBottom:"-1px",left:0,bottom:0,marginLeft:-window.innerWidth,pointerEvents:"none",background:"rgba(100,100,100,0.05)"}}),n.createElement("div",{key:"left",style:{position:"absolute",width:"1px",marginLeft:"-1px",height:3*window.innerHeight,left:0,top:0,marginTop:-window.innerHeight,pointerEvents:"none",background:"rgba(100,100,100,0.05)"}})]}},{key:"getStyle",value:function(){return{position:"absolute",top:0,left:0,height:"100%",width:"100%",flexDirection:"column",zIndex:1,display:this.props.nodeState.hidden?"none":"flex",margin:"-1px",border:"1px solid rgba(100,100,100,0.05)"}}},{key:"getClassName",value:function(){var t=["layout"];return this.props.nodeState.hidden&&t.push("hidden"),this.props.nodeState.selected&&t.push("selected"),t.join(" ")}},{key:"render",value:function(){var t=this;return n.createElement("div",{className:this.getClassName(),ref:function(e){return t.container=e},style:this.getStyle()},this.getHeader(),this.getOverlay(),n.createElement("div",{className:"layout-children",style:this.getChildrenStyle()},this.getChildren()),this.getDrawLines())}}]),e}(n.Component);var m=function(t){function e(){var t,i;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(i=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={selected:!1,width:window.innerWidth,height:window.innerHeight},i}return Object(c.a)(e,t),Object(s.a)(e,[{key:"onNodeClick",value:function(){this.setState({selected:!0})}},{key:"componentDidMount",value:function(){var t=this;window.addEventListener("resize",function(t){var e;return function(i){e&&clearTimeout(e),e=setTimeout(t,500,i)}}((function(){t.setState({width:window.innerWidth,height:window.innerHeight})})))}},{key:"render",value:function(){var t=p(this.props.data,this.state.width,this.state.height);return t.data.label="Luis Jaggy",a.a.createElement("div",{className:"App",onClick:this.onNodeClick.bind(this),style:{height:"95%",width:"95%",position:"absolute",marginLeft:"2.5%"}},a.a.createElement(f,{width:this.state.width,height:this.state.height,node:t,nodeState:{selected:this.state.selected},nodeDepth:0,nodeSiblings:[],parent:null,parentState:null}))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.b("data.json").then((function(t){t&&r.a.render(a.a.createElement(m,{data:t}),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.291c3b36.chunk.js.map