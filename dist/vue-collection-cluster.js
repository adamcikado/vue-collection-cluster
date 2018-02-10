!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueCollectionCluster=e():t.VueCollectionCluster=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={static:"static",dynamic:"dynamic",automatic:"automatic"};e.default={props:{items:{type:Array,required:!0},columns:{type:Number,default:1},itemWidth:{type:Number,default:null},itemHeight:{type:Number,default:100},typeField:{type:String,default:"type"},heightField:{type:String,default:"height"},heightType:{type:String,default:s.static},inset:{type:Object,default:function(){return{top:0,bottom:0}}},scrollPastEnd:{type:Number,default:0},buffer:{type:Number,default:200},threshold:{type:Number,default:50},autoResize:{type:Boolean,default:!0},prerender:{type:Number,default:0}},data:function(){return{visibleCells:[],totalHeight:0,startHeight:0,endHeight:0}},computed:{length:function(){return this.items.length},scrollPastEndSize:function(){var t=this.scrollPastEnd*this.height;return t-=this.inset.top+this.inset.bottom+this.itemHeight,t<0?0:t}},watch:{items:function(){this.verifyCells(),this.updateVisibleCells()},columns:function(){this.updateVisibleCells()},autoResize:function(){this.autoResize?window.addEventListener("resize",this.onResize):window.removeEventListener("resize",this.onResize)}},mounted:function(){this.scrollTop=0,this.currentStart=0,this.currentEnd=0,this.startHeight=0,this.endHeight=0,this.height=this.$el.clientHeight,this.scrollHeight=0,this.updateVisibleCells(),this.autoResize&&window.addEventListener("resize",this.onResize)},beforeDestroy:function(){this.autoResize&&window.removeEventListener("resize",this.onResize)},methods:{onScroll:function(t){this.scrollTop=this.$el.scrollTop,this.$emit("scroll",t),this.updateVisibleCells()},onResize:function(){this.height=this.$el.clientHeight,this.updateVisibleCells()},getStart:function(){if(this.heightType===s.static){var t=this.scrollTop-this.buffer;t=t<0?0:t;var e=Math.floor(t/this.itemHeight)*this.columns;return e>this.length&&(e=this.length),e}return 0},getEnd:function(){if(this.heightType===s.static){var t=Math.ceil((this.scrollTop+this.height+this.buffer)/this.itemHeight)*this.columns;return t>this.length&&(t=this.length),t}return 0},updateVisibleCells:function(){var t=this.getStart(),e=this.getEnd(),i=void 0,s=void 0,n=t<this.currentEnd?t:this.currentEnd;for(i=this.currentStart;i<n;i++)s=this.visibleCells.shift();var r=e>this.currentStart?e:this.currentStart;for(i=r;i<this.currentEnd;i++)s=this.visibleCells.pop();var l=e<this.currentStart?e:this.currentStart;if(l>t){var o=[];for(i=t;i<l;i++)s={index:i,item:this.items[i]},o.push(s);if(this.visibleCells.length){var h;(h=this.visibleCells).unshift.apply(h,o)}else this.visibleCells=o}var u=t>this.currentEnd?t:this.currentEnd;if(u<e)for(i=u;i<e;i++)s={index:i,item:this.items[i]},this.visibleCells.push(s);this.currentStart=t,this.currentEnd=e,this.startHeight=this.inset.top+this.currentStart/this.columns*this.itemHeight,this.endHeight=this.inset.bottom+this.scrollPastEndSize+Math.ceil((this.length-this.currentEnd)/this.columns)*this.itemHeight,this.scrollHeight=this.inset.top+this.inset.bottom+Math.ceil(this.length/this.columns)*this.itemHeight+this.scrollPastEndSize,this.verifyScrollPosition()},verifyCells:function(){for(var t=0,e=0;e<this.visibleCells.length;e++)t&&(this.visibleCells[e].index-=t),this.items.indexOf(this.visibleCells[e].item)!==this.visibleCells[e].index&&(this.visibleCells.splice(e,1),e--,t++);this.currentEnd-=t},verifyScrollPosition:function(){this.scrollTop<this.threshold&&this.$emit("scrollToTop"),this.scrollHeight-this.height-this.scrollTop<this.threshold&&this.$emit("scrollToBottom")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(2),n=i(0),r=i.n(n);for(var l in n)"default"!==l&&function(t){i.d(e,t,function(){return n[t]})}(l);var o=i(3),h=Object(s.a)(r.a,o.a,!1,null,null,null);e.default=h.exports},function(t,e,i){"use strict";function s(t,e,i,s,n,r){var l,o=t=t||{},h=typeof t.default;"object"!==h&&"function"!==h||(l=t,o=t.default);var u="function"==typeof o?o.options:o;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),n&&(u._scopeId=n);var c;if(r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):s&&(c=s),c){var a=u.functional,d=a?u.render:u.beforeCreate;a?(u._injectStyles=c,u.render=function(t,e){return c.call(e),d(t,e)}):u.beforeCreate=d?[].concat(d,c):[c]}return{esModule:l,exports:o,options:u}}e.a=s},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"collection-cluster",on:{"&scroll":function(e){t.onScroll(e)}}},[i("div",{ref:"start",staticClass:"collection-space",style:{height:t.startHeight+"px",width:"100%"}}),t._v(" "),t._l(t.visibleCells,function(e){return t._t(e.item[t.typeField],null,{cell:e,item:e.item})}),t._v(" "),i("div",{ref:"end",staticClass:"collection-space",style:{height:t.endHeight+"px",width:"100%"}})],2)},n=[],r={render:s,staticRenderFns:n};e.a=r}])});