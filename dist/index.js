!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueDragResize=e():t.VueDragResize=e()}(window,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=25)}([function(t,e,i){var n=i(11);"string"==typeof n&&(n=[[t.i,n,""]]);var r={};r.transform=void 0;i(3)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,i){"use strict";function n(t,e,i,n,r,o,s,a){var d="function"==typeof t?t.options:t;e&&(d.render=e,d.staticRenderFns=i,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId="data-v-"+o);var h;if(s?(h=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=h):r&&(h=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),h)if(d.functional){d._injectStyles=h;var c=d.render;d.render=function(t,e){return h.call(e),c(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,h):[h]}return{exports:t,options:d}}i.d(e,"a",function(){return n})},function(t,e,i){"use strict";function n(t){"@babel/helpers - typeof";return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach(function(e){s(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function s(t,e,i){return e=a(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t){var e=d(t,"string");return"symbol"==n(e)?e:String(e)}function d(t,e){if("object"!=n(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!=n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function h(t){return p(t)||l(t)||u(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"==typeof t)return f(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?f(t,e):void 0}}function l(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function p(t){if(Array.isArray(t))return f(t)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function v(t){t.forEach(function(t,e){document.documentElement.addEventListener(e,t)})}function m(t){t.forEach(function(t,e){document.documentElement.removeEventListener(e,t)})}function b(t,e){return!(t===document.body||!t.parentElement)&&(t.parentElement===e||b(t.parentElement,e))}var g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",staticClass:"vdr",class:(t.active||t.isActive?"active":"inactive")+" "+(t.contentClass?t.contentClass:"")+" vdr-"+t.stickStyle+" vdr-hover-"+t.stickHoverStyle+" vdr-hover-"+t.currentHoverStick,style:t.style,on:{mousedown:function(e){t.bodyDown(e)},touchstart:function(e){t.bodyDown(e)},transitionend:function(e){t.transitionend(e)},touchend:function(e){t.up(e)}}},[i("div",{staticClass:"content-container"},[t._t("default")],2),t._v(" "),t._l(t.showSticks,function(e){return i("div",{staticClass:"vdr-stick",class:["vdr-stick-"+e,t.isResizable?"":"not-resizable","vdr-stick-"+t.stickStyle],style:t.vdrStick(e),on:{mousedown:function(i){i.stopPropagation(),i.preventDefault(),t.stickDown(e,i)},touchstart:function(i){i.stopPropagation(),i.preventDefault(),t.stickDown(e,i)},mouseenter:function(i){i.stopPropagation(),i.preventDefault(),t.stickEnter(e,i)},mouseout:function(i){i.stopPropagation(),i.preventDefault(),t.stickOut(e,i)}}})})],2)},x=[];g._withStripped=!0;var y={y:{t:"top",m:"marginTop",b:"bottom"},x:{l:"left",m:"marginLeft",r:"right"}},w={name:"vue-drag-resize",emits:["clicked","dragging","dragstop","resizing","resizestop","activated","deactivated"],props:{stickSize:{type:Number,default:8},stickStyle:{type:String,default:"border"},stickHoverStyle:{type:String,default:"border"},parentScaleX:{type:Number,default:1},parentScaleY:{type:Number,default:1},isActive:{type:Boolean,default:!1},preventActiveBehavior:{type:Boolean,default:!1},isDraggable:{type:Boolean,default:!0},isResizable:{type:Boolean,default:!0},aspectRatio:{type:Boolean,default:!1},parentLimitation:{type:Boolean,default:!1},snapToGrid:{type:Boolean,default:!1},gridX:{type:Number,default:50,validator:function(t){return t>=0}},gridY:{type:Number,default:50,validator:function(t){return t>=0}},parentW:{type:Number,default:0,validator:function(t){return t>=0}},parentH:{type:Number,default:0,validator:function(t){return t>=0}},w:{type:[String,Number],default:200,validator:function(t){return"string"==typeof t?"auto"===t:t>=0}},h:{type:[String,Number],default:200,validator:function(t){return"string"==typeof t?"auto"===t:t>=0}},minw:{type:Number,default:50,validator:function(t){return t>=0}},minh:{type:Number,default:50,validator:function(t){return t>=0}},x:{type:Number,default:0,validator:function(t){return"number"==typeof t}},y:{type:Number,default:0,validator:function(t){return"number"==typeof t}},z:{type:[String,Number],default:"auto",validator:function(t){return"string"==typeof t?"auto"===t:t>=0}},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},sticks:{type:Array,default:function(){return["tl","tm","tr","mr","br","bm","bl","ml"]}},axis:{type:String,default:"both",validator:function(t){return-1!==["x","y","both","none"].indexOf(t)}},contentClass:{type:String,required:!1,default:""},zoomTransition:{type:String,default:"none"}},data:function(){return{fixAspectRatio:null,active:null,zIndex:null,parentWidth:null,parentHeight:null,left:null,top:null,right:null,bottom:null,minHeight:null,currentHoverStick:null,lastTransition:"none"}},beforeCreate:function(){this.stickDrag=!1,this.bodyDrag=!1,this.dimensionsBeforeMove={pointerX:0,pointerY:0,x:0,y:0,w:0,h:0},this.limits={left:{min:null,max:null},right:{min:null,max:null},top:{min:null,max:null},bottom:{min:null,max:null}},this.currentStick=null},mounted:function(){var t=this;this.parentElement=this.$el.parentNode,this.parentWidth=this.parentW?this.parentW:this.parentElement.clientWidth,this.parentHeight=this.parentH?this.parentH:this.parentElement.clientHeight,this.left=this.x,this.top=this.y,this.right=this.parentWidth-("auto"===this.w?this.$refs.container.scrollWidth:this.w)-this.left,this.bottom=this.parentHeight-("auto"===this.h?this.$refs.container.scrollHeight:this.h)-this.top,this.domEvents=new Map([["mousemove",this.move],["mouseup",this.up],["mouseleave",this.up],["mousedown",this.deselect],["touchmove",this.move],["touchend",this.up],["touchcancel",this.up],["touchstart",this.up]]),v(this.domEvents),this.dragHandle&&h(this.$el.querySelectorAll(this.dragHandle)).forEach(function(e){e.setAttribute("data-drag-handle",t._uid)}),this.dragCancel&&h(this.$el.querySelectorAll(this.dragCancel)).forEach(function(e){e.setAttribute("data-drag-cancel",t._uid)})},beforeDestroy:function(){m(this.domEvents)},methods:{deselect:function(t){b(t.target,this.$refs.container)||this.preventActiveBehavior||(this.active=!1)},transitionend:function(t){["left","width"].includes(t.propertyName)&&(this.zoomDrag=!1)},move:function(t){if(this.stickDrag||this.bodyDrag){t.stopPropagation();var e=void 0!==t.pageX?t.pageX:t.touches[0].pageX,i=void 0!==t.pageY?t.pageY:t.touches[0].pageY,n=this.dimensionsBeforeMove,r={x:(n.pointerX-e)/this.parentScaleX,y:(n.pointerY-i)/this.parentScaleY};if(this.stickDrag&&this.stickMove(r),this.bodyDrag){if("x"===this.axis)r.y=0;else if("y"===this.axis)r.x=0;else if("none"===this.axis)return;this.bodyMove(r)}}},up:function(t){this.stickDrag?this.stickUp(t):this.bodyDrag&&this.bodyUp(t)},bodyDown:function(t){var e=t.target,i=t.button;if(this.preventActiveBehavior||(this.active=!0),(!i||0===i)&&(this.$emit("clicked",t),this.active&&!(this.dragHandle&&e.getAttribute("data-drag-handle")!==this._uid.toString()||this.dragCancel&&e.getAttribute("data-drag-cancel")===this._uid.toString()))){this.isDraggable&&(this.bodyDrag=!0),this.lastTransition=this.$refs.container.style.transition,this.$refs.container.style.transition="none";var n=void 0!==t.pageX?t.pageX:t.touches[0].pageX,r=void 0!==t.pageY?t.pageY:t.touches[0].pageY;this.saveDimensionsBeforeMove({pointerX:n,pointerY:r}),this.parentLimitation&&(this.limits=this.calcDragLimitation())}},bodyMove:function(t){var e=this.dimensionsBeforeMove,i=this.parentWidth,n=this.parentHeight,r=this.gridX,o=this.gridY,s=this.width,a=this.height,d=e.top-t.y,h=e.bottom+t.y,c=e.left-t.x,u=e.right+t.x;if(this.snapToGrid){var l=!0,p=!0,f=d-Math.floor(d/o)*o,v=n-h-Math.floor((n-h)/o)*o,m=c-Math.floor(c/r)*r,b=i-u-Math.floor((i-u)/r)*r;f>o/2&&(f-=o),v>o/2&&(v-=o),m>r/2&&(m-=r),b>r/2&&(b-=r),Math.abs(v)<Math.abs(f)&&(l=!1),Math.abs(b)<Math.abs(m)&&(p=!1),d-=l?f:v,h=n-a-d,c-=p?m:b,u=i-s-c}var g=this.rectCorrectionByLimit({newLeft:c,newRight:u,newTop:d,newBottom:h});this.left=g.newLeft,this.right=g.newRight,this.top=g.newTop,this.bottom=g.newBottom,this.$emit("dragging",this.rect)},bodyUp:function(){this.bodyDrag=!1,this.$emit("dragging",this.rect),this.$emit("dragstop",this.rect),this.$refs.container.style.transition=this.lastTransition,this.dimensionsBeforeMove={pointerX:0,pointerY:0,x:0,y:0,w:0,h:0},this.limits={left:{min:null,max:null},right:{min:null,max:null},top:{min:null,max:null},bottom:{min:null,max:null}}},stickDown:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.isResizable&&this.active||i){this.stickDrag=!0,this.lastTransition=this.$refs.container.style.transition,this.$refs.container.style.transition="none";var n=void 0!==e.pageX?e.pageX:e.touches[0].pageX,r=void 0!==e.pageY?e.pageY:e.touches[0].pageY;this.saveDimensionsBeforeMove({pointerX:n,pointerY:r}),this.currentStick=t,this.limits=this.calcResizeLimits()}},saveDimensionsBeforeMove:function(t){var e=t.pointerX,i=t.pointerY;this.dimensionsBeforeMove.pointerX=e,this.dimensionsBeforeMove.pointerY=i,this.dimensionsBeforeMove.left=this.left,this.dimensionsBeforeMove.right=this.right,this.dimensionsBeforeMove.top=this.top,this.dimensionsBeforeMove.bottom=this.bottom,this.dimensionsBeforeMove.width=this.width,this.dimensionsBeforeMove.height=this.height,this.aspectFactor=this.width/this.height},zoom:function(t,e){var i=this,n=t.width,r=t.height;this.zoomDrag=!0,this.currentStick=e,this.$refs.container.style.transition=this.zoomTransition,this.$nextTick(function(){i.saveDimensionsBeforeMove({pointerX:0,pointerY:0});var t={x:n-i.width,y:r-i.height};i.stickMove(t)})},stickMove:function(t){var e=this.currentStick,i=this.dimensionsBeforeMove,n=this.gridY,r=this.gridX,o=this.snapToGrid,s=this.parentHeight,a=this.parentWidth,d=i.top,h=i.bottom,c=i.left,u=i.right;switch(e[0]){case"b":h=i.bottom+t.y,o&&(h=s-Math.round((s-h)/n)*n);break;case"t":d=i.top-t.y,o&&(d=Math.round(d/n)*n)}switch(e[1]){case"r":u=i.right+t.x,o&&(u=a-Math.round((a-u)/r)*r);break;case"l":c=i.left-t.x,o&&(c=Math.round(c/r)*r)}var l=this.rectCorrectionByLimit({newLeft:c,newRight:u,newTop:d,newBottom:h});if(c=l.newLeft,u=l.newRight,d=l.newTop,h=l.newBottom,this.aspectRatio){var p=this.rectCorrectionByAspectRatio({newLeft:c,newRight:u,newTop:d,newBottom:h});c=p.newLeft,u=p.newRight,d=p.newTop,h=p.newBottom}this.left=c,this.right=u,this.top=d,this.bottom=h,this.$emit("resizing",this.rect)},stickUp:function(){this.stickDrag=!1,this.dimensionsBeforeMove={pointerX:0,pointerY:0,x:0,y:0,w:0,h:0},this.limits={left:{min:null,max:null},right:{min:null,max:null},top:{min:null,max:null},bottom:{min:null,max:null}},this.$refs.container.style.transition=this.lastTransition,this.$emit("resizing",this.rect),this.$emit("resizestop",this.rect)},stickEnter:function(t){this.stickDrag||(this.$refs.container.style.transition="0.3s"),this.currentHoverStick=t},stickOut:function(t){this.currentHoverStick=null},calcDragLimitation:function(){var t=this.parentWidth,e=this.parentHeight;return{left:{min:0,max:t-this.width},right:{min:0,max:t-this.width},top:{min:0,max:e-this.height},bottom:{min:0,max:e-this.height}}},calcResizeLimits:function(){var t=this.aspectFactor,e=this.width,i=this.height,n=this.bottom,r=this.top,o=this.left,s=this.right,a=this.minh,d=this.minw,h=this.parentLimitation?0:null;this.aspectRatio&&(d/a>t?a=d/t:d=t*a);var c={left:{min:h,max:o+(e-d)},right:{min:h,max:s+(e-d)},top:{min:h,max:r+(i-a)},bottom:{min:h,max:n+(i-a)}};if(this.aspectRatio){var u={left:{min:o-Math.min(r,n)*t*2,max:o+(i-a)/2*t*2},right:{min:s-Math.min(r,n)*t*2,max:s+(i-a)/2*t*2},top:{min:r-Math.min(o,s)/t*2,max:r+(e-d)/2/t*2},bottom:{min:n-Math.min(o,s)/t*2,max:n+(e-d)/2/t*2}};"m"===this.currentStick[0]?(c.left={min:Math.max(c.left.min,u.left.min),max:Math.min(c.left.max,u.left.max)},c.right={min:Math.max(c.right.min,u.right.min),max:Math.min(c.right.max,u.right.max)}):"m"===this.currentStick[1]&&(c.top={min:Math.max(c.top.min,u.top.min),max:Math.min(c.top.max,u.top.max)},c.bottom={min:Math.max(c.bottom.min,u.bottom.min),max:Math.min(c.bottom.max,u.bottom.max)})}return c},sideCorrectionByLimit:function(t,e){var i=e;return null!==t.min&&e<t.min?i=t.min:null!==t.max&&t.max<e&&(i=t.max),i},rectCorrectionByLimit:function(t){var e=this.limits,i=t.newRight,n=t.newLeft,r=t.newBottom,o=t.newTop;return n=this.sideCorrectionByLimit(e.left,n),i=this.sideCorrectionByLimit(e.right,i),o=this.sideCorrectionByLimit(e.top,o),r=this.sideCorrectionByLimit(e.bottom,r),{newLeft:n,newRight:i,newTop:o,newBottom:r}},rectCorrectionByAspectRatio:function(t){var e=t.newLeft,i=t.newRight,n=t.newTop,r=t.newBottom,o=this.parentWidth,s=this.parentHeight,a=this.currentStick,d=this.aspectFactor,h=this.dimensionsBeforeMove,c=o-e-i,u=s-n-r;if("m"===a[1]){var l=u-h.height;e-=l*d/2,i-=l*d/2}else if("m"===a[0]){var p=c-h.width;n-=p/d/2,r-=p/d/2}else c/u>d?(c=d*u,"l"===a[1]?e=o-i-c:i=o-e-c):(u=c/d,"t"===a[0]?n=s-r-u:r=s-n-u);return{newLeft:e,newRight:i,newTop:n,newBottom:r}}},computed:{showSticks:function(){return this.sticks.sort(function(t){return t.includes("m")?-1:1})},positionStyle:function(){return{top:this.top+"px",left:this.left+"px",zIndex:this.zIndex}},sizeStyle:function(){return{width:"auto"==this.w?"auto":this.width+"px",height:"auto"==this.h?"auto":this.height+"px"}},style:function(){return o(o({},this.positionStyle),this.sizeStyle)},vdrStick:function(){var t=this;return function(e){if("border"!==t.stickStyle){var i={width:["tm","bm"].includes(e)?"100%":"".concat(t.stickSize/t.parentScaleX,"px"),height:["ml","mr"].includes(e)?"100%":"".concat(t.stickSize/t.parentScaleY,"px")};return i[y.y[e[0]]]="".concat(t.stickSize/t.parentScaleX/-2,"px"),i[y.x[e[1]]]="".concat(t.stickSize/t.parentScaleX/-2,"px"),i}var n={width:"".concat(t.stickSize/t.parentScaleX,"px"),height:"".concat(t.stickSize/t.parentScaleY,"px")};return n[y.y[e[0]]]="".concat(t.stickSize/t.parentScaleX/-2,"px"),n[y.x[e[1]]]="".concat(t.stickSize/t.parentScaleX/-2,"px"),n}},width:function(){return this.parentWidth-this.left-this.right},height:function(){return this.parentHeight-this.top-this.bottom},rect:function(){return{left:Math.round(this.left),top:Math.round(this.top),width:Math.round(this.width),height:Math.round(this.height)}}},watch:{active:function(t){t?this.$emit("activated"):this.$emit("deactivated")},isActive:{immediate:!0,handler:function(t){this.active=t}},z:{immediate:!0,handler:function(t){(t>=0||"auto"===t)&&(this.zIndex=t)}},x:{handler:function(t,e){var i=this;if(!(this.stickDrag||this.zoomDrag||this.bodyDrag||t===this.left)){var n=e-t;this.bodyDown({pageX:this.left,pageY:this.top}),this.bodyMove({x:n,y:0}),this.$nextTick(function(){i.bodyUp()})}}},y:{handler:function(t,e){var i=this;if(!(this.stickDrag||this.zoomDrag||this.bodyDrag||t===this.top)){var n=e-t;this.bodyDown({pageX:this.left,pageY:this.top}),this.bodyMove({x:0,y:n}),this.$nextTick(function(){i.bodyUp()})}}},w:{handler:function(t,e){var i=this;if(!(this.stickDrag||this.zoomDrag||this.bodyDrag||t===this.width)){var n=e-t;this.stickDown("mr",{pageX:this.right,pageY:this.top+this.height/2},!0),this.stickMove({x:n,y:0}),this.$nextTick(function(){i.stickUp()})}}},h:{handler:function(t,e){var i=this;if(!(this.stickDrag||this.zoomDrag||this.bodyDrag||t===this.height)){var n=e-t;this.stickDown("bm",{pageX:this.left+this.width/2,pageY:this.bottom},!0),this.stickMove({x:0,y:n}),this.$nextTick(function(){i.stickUp()})}}},parentW:function(t){this.right=t-this.width-this.left,this.parentWidth=t},parentH:function(t){this.bottom=t-this.height-this.top,this.parentHeight=t}}},k=w,S=(i(12),i(1)),M=Object(S.a)(k,g,x,!1,null,"d43d4e74",null);M.options.__file="src/components/vue-drag-resize.vue";e.a=M.exports},function(t,e,i){function n(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(c(n.parts[o],e))}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(c(n.parts[o],e));f[n.id]={id:n.id,refs:1,parts:s}}}}function r(t,e){for(var i=[],n={},r=0;r<t.length;r++){var o=t[r],s=e.base?o[0]+e.base:o[0],a=o[1],d=o[2],h=o[3],c={css:a,media:d,sourceMap:h};n[s]?n[s].parts.push(c):i.push(n[s]={id:s,parts:[c]})}return i}function o(t,e){var i=m(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=x[x.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),x.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",h(e,t.attrs),o(t,e),e}function d(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",h(e,t.attrs),o(t,e),e}function h(t,e){Object.keys(e).forEach(function(i){t.setAttribute(i,e[i])})}function c(t,e){var i,n,r,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var h=g++;i=b||(b=a(e)),n=u.bind(null,i,h,!1),r=u.bind(null,i,h,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=d(e),n=p.bind(null,i,e),r=function(){s(i),i.href&&URL.revokeObjectURL(i.href)}):(i=a(e),n=l.bind(null,i),r=function(){s(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}function u(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function l(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function p(t,e,i){var n=i.css,r=i.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(n=y(n)),r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var f={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var e={};return function(i){return void 0===e[i]&&(e[i]=t.call(this,i)),e[i]}}(function(t){return document.querySelector(t)}),b=null,g=0,x=[],y=i(10);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=r(t,e);return n(i,e),function(t){for(var o=[],s=0;s<i.length;s++){var a=i[s],d=f[a.id];d.refs--,o.push(d)}if(t){n(r(t,e),e)}for(var s=0;s<o.length;s++){var d=o[s];if(0===d.refs){for(var h=0;h<d.parts.length;h++)d.parts[h]();delete f[d.id]}}}};var w=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){function i(t,e){var i=t[1]||"",r=t[3];if(!r)return i;if(e&&"function"==typeof btoa){var o=n(r);return[i].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([o]).join("\n")}return[i].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=i(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(n[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},,,,,function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var i=e.protocol+"//"+e.host,n=i+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var o;return o=0===r.indexOf("//")?r:0===r.indexOf("/")?i+r:n+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},function(t,e,i){e=t.exports=i(4)(!1),e.push([t.i,'\n.vdr[data-v-d43d4e74],.vdr.active[data-v-d43d4e74]:before{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.vdr.active[data-v-d43d4e74]:before{content:"";width:100%;height:100%;top:0;left:0;outline:1px dashed #d6d6d6\n}\n.vdr.active.vdr-none[data-v-d43d4e74]:before{display:none\n}\n.vdr-stick[data-v-d43d4e74]{width:8px;height:8px;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute\n}\n.inactive .vdr-stick[data-v-d43d4e74]{display:none\n}\n.vdr-stick.vdr-stick-border[data-v-d43d4e74]{font-size:1px;background:#fff;border:1px solid #6c6c6c;-webkit-box-shadow:0 0 2px #bbb;box-shadow:0 0 2px #bbb\n}\n.vdr-stick.vdr-stick-none[data-v-d43d4e74]{border:none;font-size:0\n}\n.vdr-stick-br[data-v-d43d4e74],.vdr-stick-tl[data-v-d43d4e74]{cursor:nwse-resize\n}\n.vdr-stick-bm[data-v-d43d4e74],.vdr-stick-tm[data-v-d43d4e74]{cursor:ns-resize\n}\n.vdr-stick-bl[data-v-d43d4e74],.vdr-stick-tr[data-v-d43d4e74]{cursor:nesw-resize\n}\n.vdr-stick-ml[data-v-d43d4e74],.vdr-stick-mr[data-v-d43d4e74]{cursor:ew-resize\n}\n.vdr-stick-bm.vdr-stick-border[data-v-d43d4e74],.vdr-stick-tm.vdr-stick-border[data-v-d43d4e74]{left:50%\n}\n.vdr-stick-ml.vdr-stick-border[data-v-d43d4e74],.vdr-stick-mr.vdr-stick-border[data-v-d43d4e74]{top:50%\n}\n.vdr-stick-ml.vdr-stick-none[data-v-d43d4e74],.vdr-stick-mr.vdr-stick-none[data-v-d43d4e74]{top:0\n}\n.vdr-none.vdr-hover-box-shadow.vdr-hover-tm[data-v-d43d4e74]{-webkit-box-shadow:0 -10px 20px -1px rgba(0,0,0,.2);box-shadow:0 -10px 20px -1px rgba(0,0,0,.2)\n}\n.vdr-none.vdr-hover-box-shadow.vdr-hover-mr[data-v-d43d4e74]{-webkit-box-shadow:10px 0 20px -1px rgba(0,0,0,.2);box-shadow:10px 0 20px -1px rgba(0,0,0,.2)\n}\n.vdr-none.vdr-hover-box-shadow.vdr-hover-bm[data-v-d43d4e74]{-webkit-box-shadow:0 10px 20px -1px rgba(0,0,0,.2);box-shadow:0 10px 20px -1px rgba(0,0,0,.2)\n}\n.vdr-none.vdr-hover-box-shadow.vdr-hover-ml[data-v-d43d4e74]{-webkit-box-shadow:-10px 0 20px -1px rgba(0,0,0,.2);box-shadow:-10px 0 20px -1px rgba(0,0,0,.2)\n}\n.vdr-none.vdr-hover-box-shadow.vdr-hover-tl[data-v-d43d4e74]{-webkit-box-shadow:-10px -10px 20px -1px rgba(0,0,0,.2);box-shadow:-10px -10px 20px -1px rgba(0,0,0,.2)\n}\n.vdr-none.vdr-hover-box-shadow.vdr-hover-tr[data-v-d43d4e74]{-webkit-box-shadow:10px -10px 20px -1px rgba(0,0,0,.2);box-shadow:10px -10px 20px -1px rgba(0,0,0,.2)\n}\n.vdr-none.vdr-hover-box-shadow.vdr-hover-br[data-v-d43d4e74]{-webkit-box-shadow:10px 10px 20px -1px rgba(0,0,0,.2);box-shadow:10px 10px 20px -1px rgba(0,0,0,.2)\n}\n.vdr-none.vdr-hover-box-shadow.vdr-hover-bl[data-v-d43d4e74]{-webkit-box-shadow:-10px 10px 20px -1px rgba(0,0,0,.2);box-shadow:-10px 10px 20px -1px rgba(0,0,0,.2)\n}\n.vdr-none.vdr-hover-border.vdr-hover-tm[data-v-d43d4e74]{border-top:3px solid #eee\n}\n.vdr-none.vdr-hover-border.vdr-hover-mr[data-v-d43d4e74]{border-right:3px solid #eee\n}\n.vdr-none.vdr-hover-border.vdr-hover-bm[data-v-d43d4e74]{border-bottom:3px solid #eee\n}\n.vdr-none.vdr-hover-border.vdr-hover-ml[data-v-d43d4e74]{border-left:3px solid #eee\n}\n.vdr-none.vdr-hover-border.vdr-hover-tl[data-v-d43d4e74]{border-top:3px solid #eee;border-left:3px solid #eee\n}\n.vdr-none.vdr-hover-border.vdr-hover-tr[data-v-d43d4e74]{border-right:3px solid #eee;border-top:3px solid #eee\n}\n.vdr-none.vdr-hover-border.vdr-hover-br[data-v-d43d4e74]{border-right:3px solid #eee;border-bottom:3px solid #eee\n}\n.vdr-none.vdr-hover-border.vdr-hover-bl[data-v-d43d4e74]{border-top:3px solid #eee;border-bottom:3px solid #eee\n}\n.vdr-stick.not-resizable[data-v-d43d4e74]{display:none\n}\n.content-container[data-v-d43d4e74]{display:block;position:relative;height:100%\n}',""])},function(t,e,i){"use strict";var n=i(0),r=i.n(n);r.a},,,,,,,,,,,,,function(t,e,i){"use strict";i.r(e),function(t){function n(t){n.installed||(n.installed=!0,t.component("vue-drag-resize",r.a))}i.d(e,"install",function(){return n});var r=i(2),o={install:n},s=null;"undefined"!=typeof window?s=window.Vue:void 0!==t&&(s=t.Vue),s&&s.use(o),e.default=r.a}.call(this,i(5))}])});