(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{37:function(e,t,n){e.exports=n(52)},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(23),s=n.n(o),r=(n(42),n(2)),l=n(3),d=n(5),c=n(4),h=n(6),u=(n(43),n(9)),p=function(e,t,n){return u.c().tile((function(e,i,a,o,s){u.d(e,0,0,t,n);var r=!0,l=!1,d=void 0;try{for(var c,h=(e.children||[])[Symbol.iterator]();!(r=(c=h.next()).done);r=!0){var p=c.value;p.x0=i+p.x0/t*(o-i),p.x1=i+p.x1/t*(o-i),p.y0=a+p.y0/n*(s-a),p.y1=a+p.y1/n*(s-a)}}catch(y){l=!0,d=y}finally{try{r||null==h.return||h.return()}finally{if(l)throw d}}}))(u.a(e,(function(t){return e.id==t.id?t.children:[]})).sum((function(n){return n.content&&e.children&&e.children.length>6&&t<=600?3:1})).sort((function(e,t){return"computation"===t.data.label?-1:1})))},y=function(e){return void 0!==e.data.content},v=function(e){return void 0!==e.data.src},g=function(e){return e.data.src||""},f=function(e){return e.data.label||""},m=function(e){return"dir"===e.data.type},k=function(e){return"data"===e.data.type},C=(n(44),function(e){function t(){var e,n;Object(r.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).state={loaded:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=new Image;e.src=this.getPath(),e.srcset=this.getSrcSet(),e.onload=this.handleImageLoaded.bind(this)}},{key:"handleImageLoaded",value:function(){this.setState({loaded:!0})}},{key:"handleImageErrored",value:function(){}},{key:"getMobilePath",value:function(e){if(e){var t=e.split(".");return t[0]+"_m."+t[1]}return""}},{key:"getIconPath",value:function(e){if(e){var t=e.split(".");return t[0]+"_i."+t[1]}return""}},{key:"getPlaceholderPath",value:function(e){if(e){var t=e.split(".");return t[0]+"_s."+t[1]}return""}},{key:"getPath",value:function(){return g(this.props.node)}},{key:"getSizes",value:function(){return"30vw"}},{key:"getSrcSet",value:function(){if(!this.state.loaded)return"";var e=this.getPath();return[this.getIconPath(e)+" 300w",this.getMobilePath(e)+" 600w",e+" 1200w"].join(",")}},{key:"shouldComponentUpdate",value:function(e,t){return t.loaded!==this.state.loaded}},{key:"render",value:function(){return i.createElement(i.Fragment,null,i.createElement("img",{className:"layout-image",sizes:this.getSizes(),srcSet:this.getSrcSet(),alt:this.props.node.data.label}),i.createElement("img",{style:{display:this.state.loaded?"none":void 0},className:"layout-image",src:this.getPlaceholderPath(this.getPath()),alt:this.props.node.data.label}))}}]),t}(i.Component)),b=(n(45),function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"getImage",value:function(){if(v(this.props.node))return i.createElement(C,{node:this.props.node,width:this.props.width})}},{key:"getLabel",value:function(){if(y(this.props.node))return i.createElement("div",{className:"layout-label"},f(this.props.node))}},{key:"getText",value:function(){if(y(this.props.node))return(e=this.props.node,e.data.content||[""]).map((function(e,t){if(e.includes("::")){var n=e.split("::"),a=[];return n.length>1&&(a=n[1].split("|").filter((function(e){return e.length}))),i.createElement("div",{className:"layout-text bullet",key:t},i.createElement("div",{className:"layout-title"},n[0]),i.createElement("div",{className:"layout-items"},a.length>1?a.map((function(e,t){return i.createElement("li",{key:t},e)})):a.map((function(e,t){return i.createElement("div",{key:t},e)}))))}return i.createElement("div",{className:"layout-text",key:t},e)}));var e}},{key:"getClassName",value:function(){return["layout-content"].join(" ")}},{key:"render",value:function(){return i.createElement("div",{className:this.getClassName()},this.getImage(),this.getLabel(),this.getText())}}]),t}(i.Component)),S=(n(46),function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e){return!1}},{key:"render",value:function(){return i.createElement("div",{className:"layout-draw-lines"},i.createElement("div",{className:"line horizontal top",key:"top"}),i.createElement("div",{className:"line horizontal bottom",key:"bottom"}),i.createElement("div",{className:"line vertical top",key:"left"}),i.createElement("div",{className:"line vertical top right",key:"right"}))}}]),t}(i.Component)),N=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.selected!==e.selected||this.props.small!==e.small}},{key:"getLabel",value:function(){var e=f(this.props.node);return this.props.small||this.props.selected||(e="/ "+e),e.replace(/_/g," ")}},{key:"onNodeClick",value:function(e){this.props.onNodeClick&&this.props.onNodeClick(this.props.node),e.stopPropagation()}},{key:"getStyle",value:function(){var e=this.props.small?22:26,t=Math.ceil(e/7);return{fontSize:e-this.props.depth*t+"px"}}},{key:"getClassName",value:function(){var e=["layout-header-node"];return this.props.selected||e.push("sibling"),e.join(" ")}},{key:"render",value:function(){return i.createElement("div",{className:this.getClassName(),onClick:this.onNodeClick.bind(this),key:this.props.node.data.id+"-sibling",style:this.getStyle()},this.getLabel())}}]),t}(i.Component),w=function(e){return e.width<600},E=(n(47),function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.width!==e.width||this.props.nodeState.selected!==e.nodeState.selected}},{key:"getSiblingNodes",value:function(){var e=this;return this.props.nodeSiblings.map((function(t){return t.data.id!==e.props.node.data.id?i.createElement(N,{key:t.data.id+"-header-label",node:t,depth:e.props.nodeDepth,selected:!1,small:w(e.props),onNodeClick:e.props.onNodeClick}):void 0}))}},{key:"getPrimaryNode",value:function(){return i.createElement(N,{key:this.props.node.data.id+"-header-label",node:this.props.node,depth:this.props.nodeDepth,selected:!0,small:w(this.props),onNodeClick:this.props.onNodeClick})}},{key:"getClassName",value:function(){var e=["layout-header"];return this.props.nodeState.selected&&e.push("selected"),e.join(" ")}},{key:"render",value:function(){return i.createElement("div",{className:this.getClassName()},this.getPrimaryNode(),this.getSiblingNodes())}}]),t}(i.Component)),j=(n(48),function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.width!==e.width}},{key:"getImage",value:function(){if(v(this.props.node))return i.createElement(C,{key:this.props.node.data.id+"-overlay-image",node:this.props.node,width:this.props.width})}},{key:"getLabelStyle",value:function(){var e=y(this.props.node),t=""===g(this.props.node),n=w(this.props)?22:26,i=Math.ceil(n/7),a=this.props.nodeDepth*i,o=e?60:n-a;Math.random();return{fontSize:o+"px",fontWeight:e?"bold":void 0,paddingLeft:e?0:void 0,lineHeight:e?.7:void 0,background:e||t?"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAALElEQVQYV2NkwAIuX778nxFdHCSoq6vLiCIBEwQphksgC8Il0AXBEtgEQRIAvF8Xf8iAtVMAAAAASUVORK5CYII=) repeat":void 0,mixBlendMode:e||t?"normal":void 0,color:e?"white":void 0,borderBottom:e||t?"1px solid lightgrey":void 0,borderRight:e||t?"1px solid lightgrey":void 0}}},{key:"getColor",value:function(){return i.createElement("div",{className:"layout-color"})}},{key:"getLabel",value:function(){var e=f(this.props.node);return e=e.replace(/_/g," "),i.createElement("div",{className:"layout-label",style:this.getLabelStyle()},e)}},{key:"render",value:function(){return i.createElement("div",{className:"layout-overlay"},this.getImage(),this.getColor(),this.getLabel())}}]),t}(i.Component));n(49);var O=n(14);O.a.initialize("UA-158998728-1");var A=function(e){try{var t="/"+e;console.log(t),O.a.set({page:t}),O.a.pageview(t)}catch(n){console.warn(n)}},I=[],x=function(e){function t(){var e,n;Object(r.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).container=null,n.layout=p(n.props.node.data,n.props.width,n.props.height),n.state={selectedChildId:null,transitionDuration:500,transitioning:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.update(this.props)}},{key:"componentDidMount",value:function(){this.container&&function(e,t){var n,i,a,o,s,r,l,d=e,c=t||function(e,t,n,i,a){};d.addEventListener("touchstart",(function(e){var t=e.changedTouches[0];n="none",i="none",0,a=t.pageX,o=t.pageY,l=(new Date).getTime(),c(e,"none","start",i,0)}),!1),d.addEventListener("touchmove",(function(e){var t=e.changedTouches[0];s=t.pageX-a,r=t.pageY-o,Math.abs(s)>Math.abs(r)?c(e,n=s<0?"left":"right","move",i,s):c(e,n=r<0?"up":"down","move",i,r)}),!1),d.addEventListener("touchend",(function(e){e.changedTouches[0];(new Date).getTime()-l<=500&&(Math.abs(s)>=150&&Math.abs(r)<=100?i=n:Math.abs(r)>=150&&Math.abs(s)<=100&&(i=n)),c(e,n,"end",i,"left"==n||"right"==n?s:r)}),!1)}(this.container,this.onNodeTouch.bind(this))}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.width!==e.width||(this.props.nodeState.selected!==e.nodeState.selected||this.state.transitioning!==t.transitioning)}},{key:"componentWillUpdate",value:function(e){this.update(e)}},{key:"componentDidUpdate",value:function(){this.props.nodeState.selected&&this.areNoChildrenSelected()&&this.container&&this.container.focus()}},{key:"update",value:function(e){e.width===this.props.width&&e.height===this.props.height||(this.layout=p(e.node.data,e.width,e.height)),e.nodeState.selected||(this.state.selectedChildId=null)}},{key:"getChildState",value:function(e){return{selected:this.isChildSelected(e)}}},{key:"isChildSelected",value:function(e){return this.state.selectedChildId===e.data.id}},{key:"areNoChildrenSelected",value:function(){return null===this.state.selectedChildId}},{key:"nextSelectedChild",value:function(){var e=this;if(!this.areNoChildrenSelected()&&this.layout.children){var t=null,n=this.layout.children.find((function(n,i){return!!e.isChildSelected(n)&&(t=i,!0)}));null!==t&&(t=t===this.layout.children.length-1?0:++t,(n=this.layout.children[t])&&this.setSelectedChild(n))}}},{key:"getSelectedChild",value:function(){var e=this;return this.areNoChildrenSelected()||!this.layout.children?null:this.layout.children.find((function(t){return t.data.id===e.state.selectedChildId}))||null}},{key:"setSelectedChild",value:function(e){var t=this;this.isChildSelected(e)||(A(e.data.label),this.setState({selectedChildId:e.data.id,transitioning:!0}),setTimeout((function(){t.setState({transitioning:!1})}),this.state.transitionDuration))}},{key:"clearSelectedChildren",value:function(){var e=this;this.areNoChildrenSelected()||(A(this.props.node.data.label),this.setState({selectedChildId:null,transitioning:!0}),setTimeout((function(){e.setState({transitioning:!1})}),this.state.transitionDuration))}},{key:"onChildClick",value:function(e){!e||k(e)&&this.isChildSelected(e)?this.clearSelectedChildren():this.setSelectedChild(e)}},{key:"getChildTransform",value:function(e){var t=e.x0,n=e.y0,i=t*(100*(1/(e.x1-e.x0))),a=n*(100*(1/(e.y1-e.y0))),o=e.y1-e.y0;return"scale("+(e.x1-e.x0)+", "+o+")"+" "+("translate("+i+"%, "+a+"%)")}},{key:"getChildStyle",value:function(e){return{top:100*e.y0+"%",left:100*e.x0+"%",height:100*(e.y1-e.y0)+"%",width:100*(e.x1-e.x0)+"%",zIndex:"computation"===e.data.label?1:void 0}}},{key:"getChildClassName",value:function(e){var t=["layout-child-position"];return this.isChildSelected(e)?t.push("selected"):this.areNoChildrenSelected()||y(this.getSelectedChild())||t.push("hidden"),t.join(" ")}},{key:"getChildren",value:function(){var e=this;if(this.layout.children)return i.createElement("div",{key:this.props.node.data.id+"-children",className:"layout-children"},this.layout.children.map((function(n){return i.createElement("div",{key:n.data.id,className:e.getChildClassName(n),style:e.getChildStyle(n)},i.createElement(t,{width:e.props.width,height:e.props.height,parent:e.props.node,parentState:e.props.nodeState,node:n,nodeState:e.getChildState(n),nodeDepth:e.props.nodeDepth+1,nodeSiblings:e.layout.children||I,nodeSiblingSelectedId:e.state.selectedChildId,onNodeClick:e.onChildClick.bind(e)}))})))}},{key:"getOverlay",value:function(){if(m(this.props.node)||y(this.props.node))return i.createElement("div",{className:"layout-overlay-position"},i.createElement(j,Object.assign({key:this.props.node.data.id+"-overlay"},this.props)))}},{key:"getContent",value:function(){if(k(this.props.node))return i.createElement(b,Object.assign({key:this.props.node.data.id+"-content"},this.props))}},{key:"getDrawLines",value:function(){return i.createElement(S,{key:this.props.node.data.id+"-lines"})}},{key:"onHeaderNodeClick",value:function(e){e&&e.data.id!==this.props.node.data.id?this.props.onNodeClick&&this.props.onNodeClick(e):this.clearSelectedChildren()}},{key:"getHeader",value:function(){if(m(this.props.node))return i.createElement(E,Object.assign({key:this.props.node.data.id+"-header"},this.props,{onNodeClick:this.onHeaderNodeClick.bind(this)}))}},{key:"getButtonsStyle",value:function(){return{display:(e=this.props,e.width<1200&&this.props.nodeState.selected&&this.areNoChildrenSelected()?void 0:"none")};var e}},{key:"getLeftButtonStyle",value:function(){return{visibility:null!==this.props.parentState?void 0:"hidden"}}},{key:"getRightButtonStyle",value:function(){return{visibility:this.props.nodeSiblings.length>0?void 0:"hidden"}}},{key:"getButtons",value:function(){return i.createElement("div",{className:"layout-buttons",style:this.getButtonsStyle()},i.createElement("div",{className:"layout-btn",style:this.getLeftButtonStyle()},"<<"),i.createElement("div",{className:"layout-btn",style:this.getRightButtonStyle()},">"))}},{key:"onNodeClick",value:function(e){this.props.onNodeClick&&this.props.onNodeClick(this.props.node),e.stopPropagation()}},{key:"onNodeTouch",value:function(e,t,n,i,a){this.state.transitioning?e.stopPropagation():"end"===n&&"left"==t?this.props.nodeState.selected&&!this.areNoChildrenSelected()&&(this.nextSelectedChild(),e.stopPropagation()):"end"===n&&"right"==t&&this.props.nodeState.selected&&!this.areNoChildrenSelected()&&(this.clearSelectedChildren(),e.stopPropagation())}},{key:"onKeyUp",value:function(e){this.state.transitioning?e.stopPropagation():39===e.keyCode?this.props.nodeState.selected&&!this.areNoChildrenSelected()&&(this.nextSelectedChild(),e.stopPropagation()):37===e.keyCode&&this.props.nodeState.selected&&!this.areNoChildrenSelected()&&(this.clearSelectedChildren(),e.stopPropagation())}},{key:"getClassName",value:function(){var e=["layout"];return this.props.nodeState.selected&&e.push("selected"),this.state.transitioning&&e.push("transitioning"),y(this.props.node)&&e.push("content"),this.props.node.data.children||e.push("leaf"),function(e){if(!e.data.children)return!1;for(var t=0;t<e.data.children.length;t++)if("dir"===e.data.children[t].type)return!1;return!0}(this.props.node)&&e.push("branch"),0===this.props.nodeDepth&&e.push("root"),e.join(" ")}},{key:"render",value:function(){var e=this;return i.createElement("div",{className:this.getClassName(),ref:function(t){return e.container=t},onClick:this.onNodeClick.bind(this),onKeyUp:this.onKeyUp.bind(this),tabIndex:0},this.getHeader(),this.getChildren(),this.getContent(),this.getButtons(),this.getOverlay(),this.getDrawLines())}}]),t}(i.Component);var L=function(e){function t(){var e,n;Object(r.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).state={selected:!0,width:window.innerWidth,height:window.innerHeight},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onNodeClick",value:function(){}},{key:"onCVClick",value:function(){window.open("./assets/luis_jaggy_resume.pdf","mywindow")}},{key:"onLinkedInClick",value:function(){window.open("https://www.linkedin.com/in/jaggyluis/","mywindow")}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(e){var t;return function(n){t&&clearTimeout(t),t=setTimeout(e,500,n)}}((function(){e.setState({width:window.innerWidth,height:window.innerHeight})})))}},{key:"render",value:function(){var e=p(this.props.data,this.state.width,this.state.height);return e.data.label="Luis Jaggy",a.a.createElement("div",{className:"Wrapper"},a.a.createElement("div",{className:"App",onClick:this.onNodeClick.bind(this)},a.a.createElement(x,{width:this.state.width,height:this.state.height,node:e,nodeState:{selected:this.state.selected},nodeDepth:0,nodeSiblings:[],nodeSiblingSelectedId:this.state.selected?e.data.id:null,parent:null,parentState:null})),a.a.createElement("div",{className:"Menu"},a.a.createElement("div",{className:"menu-item",onClick:this.onCVClick.bind(this)},"resume"),a.a.createElement("div",{className:"menu-item linkedin",onClick:this.onLinkedInClick.bind(this)},"in")))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.b("data.json").then((function(e){e&&s.a.render(a.a.createElement(L,{data:e}),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);