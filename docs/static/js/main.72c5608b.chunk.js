(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(t,e,n){t.exports=n(42)},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(21),r=n.n(o),l=(n(40),n(2)),s=n(3),h=n(5),d=n(4),u=n(6),c=(n(41),function(t){function e(){var t,n;Object(l.a)(this,e);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={hovered:!1,hidden:!1,selected:!1,transitionDuration:300},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"onMouseEnter",value:function(t){this.setState({hovered:!0}),t.stopPropagation()}},{key:"onMouseLeave",value:function(t){this.setState({hovered:!1}),t.stopPropagation()}},{key:"onClick",value:function(){this.setState({hidden:!0})}},{key:"getSplashImage",value:function(){if(this.props.node.data.src){var t=this.props.node.data.src.split(".");return t[0]+"_s."+t[1]}return""}},{key:"getSplashStyle",value:function(){Math.floor(30*Math.random());return{width:"100%",height:"100%",position:"absolute",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:'url("'+this.getSplashImage()+'")',backgroundRepeat:"no-repeat",transition:2*this.getTransitionDuration()+"ms",willChange:"opacity"}}},{key:"getColorStyle",value:function(){return{width:"100%",height:"100%",position:"absolute",background:"rgba(255,255,255,0.2)",opacity:this.state.hovered?0:1,transition:2*this.getTransitionDuration()+"ms",willChange:"opacity"}}},{key:"getLSliderStyle",value:function(){return{position:"absolute",bottom:0,right:0,height:"100%",width:this.state.hovered?"100%":"80%",transition:this.getTransitionDuration()+"ms",willChange:"width"}}},{key:"getTSliderStyle",value:function(){return{position:"absolute",bottom:0,left:0,height:this.state.hovered?"100%":"70%",width:"100%",transition:this.getTransitionDuration()+"ms",transitionDelay:this.getTransitionDuration()+"ms",willChange:"height"}}},{key:"getSliderColorStyle",value:function(){return{position:"absolute",width:"100%",height:"100%",background:"rgba(255,255,255,0.5)",opacity:this.state.hovered?0:1,transition:this.getTransitionDuration()+"ms",transitionDelay:this.getTransitionDuration()+"ms",willChange:"opacity"}}},{key:"getLabelStyle",value:function(){return{position:"relative",fontWeight:"bolder",fontSize:"40px",lineHeight:"32px",textTransform:"uppercase",marginLeft:"-2px",mixBlendMode:"overlay",left:0,top:0}}},{key:"getStyle",value:function(){Math.floor(30*Math.random());return{width:"calc(100% - 0px)",height:"calc(100% - 0px)",margin:"0px",overflow:"hidden",position:"absolute",display:this.state.hidden?"none":"",opacity:null==this.props.parentState||this.props.parentState.selected?1:0,transition:2*this.getTransitionDuration()+"ms"}}},{key:"getTransitionDuration",value:function(){return this.state.transitionDuration}},{key:"render",value:function(){return i.createElement("div",{className:"layout-overlay",onClick:this.onClick.bind(this),onMouseEnter:this.onMouseEnter.bind(this),onMouseLeave:this.onMouseLeave.bind(this),style:this.getStyle()},i.createElement("div",{className:"layout-splash",style:this.getSplashStyle()}),i.createElement("div",{className:"layout-color",style:this.getColorStyle()}),i.createElement("div",{className:"layout-lslider",style:this.getLSliderStyle()},i.createElement("div",{style:this.getSliderColorStyle()}),i.createElement("div",{className:"layout-tslider",style:this.getTSliderStyle()},i.createElement("div",{style:this.getSliderColorStyle()}),i.createElement("div",{className:"layout-label",style:this.getLabelStyle()},this.props.node.data.label))))}}]),e}(i.Component)),p=n(8),y=function(t,e,n){return p.c().tile((function(t,i,a,o,r){p.d(t,0,0,e,n);var l=!0,s=!1,h=void 0;try{for(var d,u=(t.children||[])[Symbol.iterator]();!(l=(d=u.next()).done);l=!0){var c=d.value;c.x0=i+c.x0/e*(o-i),c.x1=i+c.x1/e*(o-i),c.y0=a+c.y0/n*(r-a),c.y1=a+c.y1/n*(r-a)}}catch(y){s=!0,h=y}finally{try{l||null==u.return||u.return()}finally{if(s)throw h}}}))(p.a(t).sum((function(t){return function(t){return void 0!==t.weight?t.weight:t.content?2:1}(t)})).sort((function(t,e){return(t.value||0)-(e.value||0)})))},g=function(t){function e(){return Object(l.a)(this,e),Object(h.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"getImagePath",value:function(){if(this.props.node.data.src){var t=this.props.node.data.src.split(".");return t[0]+"_s."+t[1]}return""}},{key:"getImageStyle",value:function(){return{position:"absolute",width:"100%",height:"100%",backgroundSize:this.props.nodeState.selected?"contain":"cover",backgroundPosition:"center",backgroundImage:'url("'+this.getImagePath()+'")',backgroundRepeat:"no-repeat"}}},{key:"getImage",value:function(){return i.createElement("div",{className:"layout-content-image",style:this.getImageStyle()})}},{key:"getContentStyle",value:function(){return{margin:"32px 30% 0 0",borderBottom:"2px solid black",paddingBottom:"10px",textAlign:"right",paddingRight:"10px"}}},{key:"getContent",value:function(){var t=this;return this.props.node.data.content?this.props.node.data.content.map((function(e,n){return i.createElement("div",{className:"layout-text",style:t.getContentStyle(),key:n},e)})):[]}},{key:"getLabelStyle",value:function(){return{textTransform:"uppercase",fontWeight:"bold",fontSize:"40px",marginLeft:"-2px",lineHeight:"31px",position:"relative"}}},{key:"getLabel",value:function(){return this.props.node.data.content?i.createElement("div",{className:"layout-label",style:this.getLabelStyle()},this.props.node.data.label):void 0}},{key:"getStyle",value:function(){var t=Math.floor(50*Math.random())+200;return{width:"calc(100% - 0px)",height:"calc(100% - 0px)",background:"rgba("+t+","+t+","+t+",0.2)",margin:"0px",position:"absolute",overflowY:"auto",overflowX:"hidden"}}},{key:"render",value:function(){return i.createElement("div",{className:"layout-content",style:this.getStyle()},this.getImage(),this.getLabel(),this.getContent())}}]),e}(i.Component);var v=function(t){function e(){var t,n;Object(l.a)(this,e);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).container=null,n.layout=y({label:"_",type:"dir",id:"_"},100,100),n.state={width:window.innerWidth,height:window.innerHeight,selectedChildId:null,transitionDuration:600},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentWillMount",value:function(){this.update()}},{key:"componentWillUpdate",value:function(){this.update()}},{key:"componentDidMount",value:function(){var t=this;window.addEventListener("resize",function(t){var e;return function(n){e&&clearTimeout(e),e=setTimeout(t,500,n)}}((function(){t.props.nodeState.selected&&t.setState({width:window.innerWidth,height:window.innerHeight})})))}},{key:"update",value:function(){var t=this;if(this.props.nodeState.hidden)this.layout=y({label:"_",type:"dir",id:"_"},100,100),this.state.selectedChildId=null;else{var e,n=Object.assign({},this.props.node.data);if(n.children=n.children?n.children.filter((function(e){var n;return(null===(n=t.props.parentState)||void 0===n?void 0:n.selected)||!e.content})):void 0,this.props.parentState&&this.props.parentState.selected&&n.children)n.children.push({label:this.props.node.data.label,id:"__label__",type:"data",content:[],weight:.5}),null===(e=n.children)||void 0===e||e.push({label:"_",id:"__filler__",type:"data",weight:.5});this.layout=y(n,this.state.width,this.state.height),this.state.selectedChildId=null}}},{key:"getTransitionDuration",value:function(){return this.state.transitionDuration}},{key:"getStyle",value:function(){Math.floor(30*Math.random());return{position:"absolute",top:0,left:0,height:"100%",width:"100%",zIndex:1,display:this.props.nodeState.hidden?"none":""}}},{key:"getChildStyle",value:function(t){return{position:"absolute",top:this.getChildTop(t),left:this.getChildLeft(t),height:this.getChildHeight(t),width:this.getChildWidth(t),display:this.getChildDisplay(t),zIndex:-1,transition:this.getTransitionDuration()+"ms",willChange:"top, left, height, width, display, opacity"}}},{key:"getChildTop",value:function(t){return this.isChildSelected(t)?0:100*t.y0+"%"}},{key:"getChildLeft",value:function(t){return this.isChildSelected(t)?0:100*t.x0+"%"}},{key:"getChildWidth",value:function(t){return this.isChildSelected(t)?"100%":100*(t.x1-t.x0)+"%"}},{key:"getChildHeight",value:function(t){return this.isChildSelected(t)?"100%":100*(t.y1-t.y0)+"%"}},{key:"getChildOpacity",value:function(t){return this.isChildSelected(t)||this.areNoChildrenSelected()?1:0}},{key:"getChildDisplay",value:function(t){return this.isChildSelected(t)||this.areNoChildrenSelected()?"visible":"none"}},{key:"getChildState",value:function(t){return{selected:this.isChildSelected(t),hidden:null!==this.props.parent&&!this.props.nodeState.selected}}},{key:"isChildSelected",value:function(t){return this.state.selectedChildId===t.data.id}},{key:"setChildSelected",value:function(t){this.setState({selectedChildId:t.data.id})}},{key:"areNoChildrenSelected",value:function(){return null===this.state.selectedChildId}},{key:"onChildClick",value:function(t){t.data.content||this.setChildSelected(t)}},{key:"getChildren",value:function(){var t=this;return this.layout.children?this.layout.children.map((function(n){return i.createElement("div",{key:n.data.id,className:"layout-child",onClick:function(){t.onChildClick(n)},style:t.getChildStyle(n)},i.createElement(e,{parent:t.props.node,parentState:t.props.nodeState,node:n,nodeState:t.getChildState(n)}))})):[]}},{key:"render",value:function(){var t=this;return i.createElement("div",{className:"layout",ref:function(e){return t.container=e},style:this.getStyle()},"dir"===this.props.node.data.type?i.createElement(c,{node:this.props.node,nodeState:this.props.nodeState,parent:this.props.parent,parentState:this.props.parentState}):i.createElement(g,{node:this.props.node,nodeState:this.props.nodeState,parent:this.props.parent,parentState:this.props.parentState}),this.getChildren())}}]),e}(i.Component);var f=function(t){function e(){var t,n;Object(l.a)(this,e);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={selected:!1},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"onNodeClick",value:function(){this.setState({selected:!0})}},{key:"render",value:function(){var t=y(this.props.data,window.innerWidth,window.innerHeight);return t.data.label="Luis Jaggy",a.a.createElement("div",{className:"App",onClick:this.onNodeClick.bind(this),style:{height:"100%",width:"95%",position:"absolute",marginLeft:"2.5%",overflow:"hidden"}},a.a.createElement(v,{node:t,nodeState:{selected:this.state.selected},parent:null,parentState:null}))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.b("data.json").then((function(t){t&&r.a.render(a.a.createElement(f,{data:t}),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.72c5608b.chunk.js.map