"use strict";(self.webpackChunkreact_simple_dashboard=self.webpackChunkreact_simple_dashboard||[]).push([[212],{7212:function(e,t,o){o.r(t),o.d(t,{default:function(){return M}});var n=o(5671),r=o(3144),s=o(136),l=o(7277),i=o(2791),a=o(184),c=function(){return(0,a.jsx)(a.Fragment,{children:[1,2,3,4,5].map((function(e){return(0,a.jsx)("div",{className:"border border-blue-300 shadow rounded-md p-4 m-10 bg-gray-400",children:(0,a.jsxs)("div",{className:"animate-pulse flex space-x-4",children:[(0,a.jsx)("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),(0,a.jsxs)("div",{className:"flex-1 space-y-6 py-1",children:[(0,a.jsx)("div",{className:"h-2 bg-slate-200 rounded"}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,a.jsx)("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),(0,a.jsx)("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),(0,a.jsx)("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})},e)}))})},h=o(9434),d=h.I0,p=h.v9,u=function(e,t){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},u(e,t)};var m=function(){return m=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},m.apply(this,arguments)};var f="Pixel",g="Percent",v={unit:g,value:.8};function x(e){return"number"===typeof e?{unit:g,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:f,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:g,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),v):(console.warn("scrollThreshold should be string or number"),v)}var b=function(e){function t(t){var o=e.call(this,t)||this;return o.lastScrollTop=0,o.actionTriggered=!1,o.startY=0,o.currentY=0,o.dragging=!1,o.maxPullDownDistance=0,o.getScrollableTarget=function(){return o.props.scrollableTarget instanceof HTMLElement?o.props.scrollableTarget:"string"===typeof o.props.scrollableTarget?document.getElementById(o.props.scrollableTarget):(null===o.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},o.onStart=function(e){o.lastScrollTop||(o.dragging=!0,e instanceof MouseEvent?o.startY=e.pageY:e instanceof TouchEvent&&(o.startY=e.touches[0].pageY),o.currentY=o.startY,o._infScroll&&(o._infScroll.style.willChange="transform",o._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},o.onMove=function(e){o.dragging&&(e instanceof MouseEvent?o.currentY=e.pageY:e instanceof TouchEvent&&(o.currentY=e.touches[0].pageY),o.currentY<o.startY||(o.currentY-o.startY>=Number(o.props.pullDownToRefreshThreshold)&&o.setState({pullToRefreshThresholdBreached:!0}),o.currentY-o.startY>1.5*o.maxPullDownDistance||o._infScroll&&(o._infScroll.style.overflow="visible",o._infScroll.style.transform="translate3d(0px, "+(o.currentY-o.startY)+"px, 0px)")))},o.onEnd=function(){o.startY=0,o.currentY=0,o.dragging=!1,o.state.pullToRefreshThresholdBreached&&(o.props.refreshFunction&&o.props.refreshFunction(),o.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){o._infScroll&&(o._infScroll.style.overflow="auto",o._infScroll.style.transform="none",o._infScroll.style.willChange="unset")}))},o.onScrollListener=function(e){"function"===typeof o.props.onScroll&&setTimeout((function(){return o.props.onScroll&&o.props.onScroll(e)}),0);var t=o.props.height||o._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;o.actionTriggered||((o.props.inverse?o.isElementAtTop(t,o.props.scrollThreshold):o.isElementAtBottom(t,o.props.scrollThreshold))&&o.props.hasMore&&(o.actionTriggered=!0,o.setState({showLoader:!0}),o.props.next&&o.props.next()),o.lastScrollTop=t.scrollTop)},o.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},o.throttledOnScrollListener=function(e,t,o,n){var r,s=!1,l=0;function i(){r&&clearTimeout(r)}function a(){var a=this,c=Date.now()-l,h=arguments;function d(){l=Date.now(),o.apply(a,h)}s||(n&&!r&&d(),i(),void 0===n&&c>e?d():!0!==t&&(r=setTimeout(n?function(){r=void 0}:d,void 0===n?e-c:e)))}return"boolean"!==typeof t&&(n=o,o=t,t=void 0),a.cancel=function(){i(),s=!0},a}(150,o.onScrollListener).bind(o),o.onStart=o.onStart.bind(o),o.onMove=o.onMove.bind(o),o.onEnd=o.onEnd.bind(o),o}return function(e,t){function o(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?m(m({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var o=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=x(t);return n.unit===f?e.scrollTop<=n.value+o-e.scrollHeight+1:e.scrollTop<=n.value/100+o-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var o=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=x(t);return n.unit===f?e.scrollTop+o>=e.scrollHeight-n.value:e.scrollTop+o>=n.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=m({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),n=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return i.createElement("div",{style:n,className:"infinite-scroll-component__outerdiv"},i.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&i.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},i.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(i.Component),w=b,y=o(5806),T=function(){var e=p((function(e){return e.user.userList})),t=d(),o=(0,i.useCallback)((function(){var o={page:e.page};t((0,y.B)(o))}),[t]);return(0,i.useEffect)((function(){o()}),[o]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(w,{dataLength:e.data.length,next:o,hasMore:!0,loader:(0,a.jsx)(c,{}),children:e.data.map((function(e,t){return(0,a.jsxs)("div",{className:"block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] m-10 ",children:[(0,a.jsxs)("h5",{className:"mb-4 text-xl font-medium leading-tight text-neutral-80",children:[e.first_name," ",e.last_name]}),(0,a.jsxs)("div",{className:"flex space-x-6",children:[(0,a.jsx)("img",{className:"h-20 w-20 rounded-full",src:e.avatar,alt:e.first_name}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("div",{children:e.email}),(0,a.jsxs)("div",{children:[e.first_name," ",e.last_name]})]})]})]},t)}))})})},j=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"m-10 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)",children:(0,a.jsx)("form",{children:(0,a.jsxs)("div",{className:"grid grid-cols-1 ",children:[(0,a.jsxs)("div",{className:"mt-4 mb-3",children:[(0,a.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Username"}),(0,a.jsx)("input",{className:"border-rose-600 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Enter your name"})]}),(0,a.jsxs)("div",{className:"mt-4 mb-3",children:[(0,a.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Job"}),(0,a.jsx)("input",{className:"border-rose-600 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Enter your job"})]}),(0,a.jsx)("div",{className:"mt-3 mb-3 text-end",children:(0,a.jsx)("button",{className:"bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-[12rem]",children:"Login"})})]})})})})},_=o(4165),E=o(5861),S=o(766),N=o(7689),L=o(1567),D=function(){var e=(0,N.s0)(),t=function(){var t=(0,E.Z)((0,_.Z)().mark((function t(){var o;return(0,_.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=new L.Z,t.next=3,o.removeItem("token");case 3:e("/react-simple-dashboard/login");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex flex-row-reverse",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("div",{className:"ml-4 font-bold text-xl mt-2",children:"Mohamed Siraj"}),(0,a.jsx)("div",{className:"ml-4 font-bold text-md text-yellow-800 cursor-pointer",onClick:t,children:"LogOut"})]}),(0,a.jsx)("img",{src:S.n,className:" rounded-full w-14",alt:"Mohamed Siraj"})]})})},Y=function(e){(0,s.Z)(o,e);var t=(0,l.Z)(o);function o(){return(0,n.Z)(this,o),t.apply(this,arguments)}return(0,r.Z)(o,[{key:"render",value:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"text-right  m-5",children:(0,a.jsx)(D,{})}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-2 sm:grid-cols-1",children:[(0,a.jsx)("div",{className:"bg-yellow-800 m-5 h-[50rem] rounded-2xl shadow-2x overflow-x-scroll no-scrollbar",children:(0,a.jsx)(T,{})}),(0,a.jsx)("div",{className:"bg-gray-800 m-5 h-[50rem] rounded-2xl shadow-2xl",children:(0,a.jsx)(j,{})})]})]})}}]),o}(i.Component),M=Y}}]);
//# sourceMappingURL=212.5bbbd805.chunk.js.map