﻿(()=>{"use strict";var t,e,i,s={664333:(t,e,i)=>{var s,o,n,l=i(785429);(null==(o=window.vk)||null==(s=o.pe)?void 0:s.static_manager_dynamic_imports)&&(null==(n=window.vk)?void 0:n.stDomain)&&(i.p=window.vk.stDomain+"/dist/"),window.WideDropdown=l.WideDropdown;try{window.stManager.done(window.jsc("web/wide_dd.js"))}catch(t){}},258810:(t,e,i)=>{i.r(e),i.d(e,{UiScroll:()=>h,default:()=>c});var s=i(301230),o=i(664988),n=i(82161),l=i(795558),r=i(953908),a=i(893106),d=i(332066);class h{init(){if(this.options.stopScrollPropagation&&this.fixBlocker(),!this.inited){if(!this.el.container.scrollWidth||this.disabled)return;this.fixSize(!0),this.options.autoresize&&this.startResizeListening(),this.options.global||cur.destroy.push(this.destroy.bind(this)),this.inited=!0}return this.update(!0),this.api}addEvent(t,e,i,s){return this.removeEvents.push([t,e,i]),(0,r.addEvent)(t,e,i,void 0,void 0,s?{passive:!0}:void 0),i}destroy(){if(this.disabled=!0,this.fixSize(),this.animation&&this.animation.stop(),this.moreTimeout&&clearTimeout(this.moreTimeout),this.dragstopHandler&&(0,r.removeEvent)(document,"mouseup contextmenu",this.dragstopHandler),this.dragHandler&&(0,r.removeEvent)(document,"mousemove",this.dragHandler),(0,n.each)(this.removeEvents,(function(t,e){r.removeEvent.apply(null,e)})),this.el.overflow.parentNode==this.el.container){const t=(0,l.cf)();for(;this.el.content.firstChild;)t.appendChild(this.el.content.firstChild);this.el.container.appendChild(t)}return(0,l.removeData)(this.el.container,"ui-scroll"),this.el.container.className=this.el.container.className.replace(/\bui_scroll_.+?\b/g," "),(0,n.each)(this.removeElements,(function(t,e){(0,l.re)(e)})),this.el.container.scrollTop=this.api.data.scrollTop,delete this.el.container.__uiScroll__,this.api}updateAbove(t){if((0,n.isFunction)(t)){this.animation&&this.animation.stop();const e=this.el.outer.scrollHeight-this.el.outer.scrollTop-this.el.overflow.offsetHeight;t(),this.el.outer.scrollTop=this.el.outer.scrollHeight-this.el.overflow.offsetHeight-e}return this.api}updateBelow(t){if((0,n.isFunction)(t)){this.animation&&this.animation.stop();const e=this.options.preserveEdgeBelow&&this.api.data.scrollBottom<=this.options.preserveEdgeBelowThreshold;t(),e&&this.scrollBottom(!1)}return this.api}fixBlocker(){s.browser.chrome&&!this.options.noForceReFlow&&this.forceReFlow(),this.el.blocker.scrollTop=this.blockerScrollTop}forceReFlow(){this.el.blocker.style.display="inline-block",this.el.blocker.offsetHeight,this.el.blocker.style.display=""}fixSize(t){this.options.native||(t&&null==this.fixSizeDefault&&(this.fixSizeDefault=this.el.container.style.width),(0,l.setStyle)(this.el.container,"width",t?(0,l.getSize)(this.el.container,!0)[0]||this.fixSizeDefault||"":this.fixSizeDefault||""))}emitEvent(t){this.disabled||this.inited&&this.emitter.emitEvent(t,[this.api])}static scrollEventDelta(t){let e=0;const i=void 0!==t.deltaMode?t.deltaMode:"MozMousePixelScroll"==t.type?0:1;return"wheel"==t.type?e=t.deltaY:void 0!==t.wheelDeltaX&&void 0!==t.wheelDeltaY?(e=1/40*-t.wheelDeltaY,s.browser.mac&&s.browser.opera&&(e*=.1)):void 0!==t.wheelDelta?e=1/40*-t.wheelDelta:t.detail&&2===t.axis&&(e=t.detail),e*(1==i?15:2==i?450:1)}isScrollEventUnused(t){return h.scrollEventDelta(t)>0?!this.api.data.scrollBottom:!this.api.data.scrollTop}resize(t){if(!t&&this.options.preserveEdgeBelow){const e=this.options.preserveEdgeBelow&&this.api.data.scrollBottom<=this.options.preserveEdgeBelowThreshold;this.update(!0)&&(this.emitEvent("resize"),e&&this.scrollBottom(),this.options.stopScrollPropagation&&!t&&this.fixBlocker())}else this.update(!0)&&(this.options.stopScrollPropagation&&!t&&this.fixBlocker(),this.emitEvent("resize"))}disable(t){return this.disabled=!!t,t?(this.animation&&this.animation.stop(),this.fixSize()):(this.fixSize(!0),this.options.stopScrollPropagation&&this.fixBlocker(),this.update(!0)),(0,l.toggleClass)(this.el.container,"ui_scroll_disabled",this.disabled),this.api}dragstart(t){if(!(this.disabled||this.dragging||this.options.native))return t||(t=window.event),this.dragging=!0,this.animation&&this.animation.stop(),this.options.reversed&&(this.noMore=!0),(0,r.addEvent)(document,"mouseup contextmenu",this.dragstartHandler=this.dragstop.bind(this)),(0,r.addEvent)(document,"mousemove",this.dragHandler=this.drag.bind(this)),this.dragScroll=this.options.reversed?this.api.data.scrollBottom:this.api.data.scrollTop,this.dragY=t.screenY,(0,r.cancelEvent)(t),this.emitEvent("dragstart"),this.api}dragstop(t){if(!this.disabled&&this.dragging&&!this.options.native){if(t||(t=window.event),this.dragging=!1,this.dragstopHandler&&(0,r.removeEvent)(document,"mouseup contextmenu",this.dragstopHandler),this.dragHandler&&(0,r.removeEvent)(document,"mousemove",this.dragHandler),(0,l.setStyle)(document.body,"cursor",""),(0,l.removeClass)(this.el.container,"ui_scroll_dragging"),this.dragged)this.noMore&&(this.noMore=!1,this.more());else{this.options.reversed&&(this.noMore=!0);const e=(t.pageY-(0,l.getXY)(this.el.barOuter)[1]-this.barInnerHeight/2)*(Math.max(this.options.minContentHeight,this.api.data.scrollHeight)-this.api.data.viewportHeight)/(this.barOuterHeight-this.barInnerHeight);this.scrollTop(!1,e,0,function(){this.noMore&&(this.noMore=!1,this.more())}.bind(this))}return this.dragged=!1,t&&"contextmenu"!==t.type&&(0,r.cancelEvent)(t),this.emitEvent("dragstop"),this.api}}drag(t){if(this.disabled||!this.dragging||this.options.native)return;t||(t=window.event);const e=(t.screenY-this.dragY)*(this.api.data.scrollHeight/this.el.barOuter.scrollHeight);return this.el.outer.scrollTop=this.options.reversed?this.el.outer.scrollHeight-this.el.overflow.offsetHeight-this.dragScroll+e:this.dragScroll+e,this.dragged||(this.dragged=!0,(0,l.setStyle)(document.body,"cursor","pointer"),(0,l.addClass)(this.el.container,"ui_scroll_dragging")),(0,r.cancelEvent)(t),this.emitEvent("drag"),this.api}scroll(t,e,i){return this.animation&&this.animation.stop(),this.el.outer.scrollTop==t&&this.update(!0),e?(e="number"!=typeof e||!isFinite(e)||e%1?300:Math.abs(e),this.animation=new a.Fx.Base({scrollTop:this.el.outer.scrollTop},{transition:a.Fx.Transitions.easeOutCubic,onStep:function(t){this.el.outer.scrollTop=t.scrollTop}.bind(this),duration:e,onComplete:(0,n.isFunction)(i)?i.pbind(this.api):void 0}).start({scrollTop:this.el.outer.scrollTop},{scrollTop:t})):(this.el.outer.scrollTop=t,(0,n.isFunction)(i)&&i(this.api)),this.api}scrollTop(t,e,i,s){if(t&&this.options.stopScrollPropagation&&this.fixBlocker(),!this.disabled&&!this.dragging)return this.scroll((0,n.intval)(e),i,s)}scrollBottom(t,e,i,s){if(t&&this.options.stopScrollPropagation&&this.fixBlocker(),!this.disabled&&!this.dragging)return this.scroll(this.el.outer.scrollHeight-this.el.overflow.offsetHeight-(0,n.intval)(e),i,s)}scrollBy(t,e,i){if(!this.disabled&&!this.dragging)return this.scroll(this.el.outer.scrollTop+(0,n.intval)(t),e,i)}scrollIntoView(t,e,i,s){if(t&&this.options.stopScrollPropagation&&this.fixBlocker(),(e=(0,d.getScrollElement)(e))&&e.compareDocumentPosition&&e.compareDocumentPosition(this.el.content)&Node.DOCUMENT_POSITION_CONTAINS){const t=(0,l.getXY)(e)[1],o=(0,l.getXY)(this.el.overflow)[1],r=(0,l.getSize)(e)[1];if(t<=o&&t+r>=o+this.api.data.viewportHeight||t>=o&&t+r<=o+this.api.data.viewportHeight)(0,n.isFunction)(s)&&(i?setTimeout(s.bind(this.api),0):s(this.api));else if(r>this.api.data.viewportHeight||t<o)this.scrollTop(!1,t-o+this.api.data.scrollTop-(this.options.shadows?(0,l.getSize)(this.el.shadowTop)[1]:0),i,s);else{const e=this.options.shadows?(0,l.getSize)(this.el.shadowBottom)[1]:0;this.scrollTop(!1,t-o+this.api.data.scrollTop+r-this.api.data.viewportHeight+e,i,s)}}return this.api}update(t){let e,i;this.el.container&&!this.el.container.updateScroll&&(this.el.container.updateScroll=this.update.bind(this,!1));const s=this.el.outer.scrollTop;if(this.inited&&!this.disabled&&(t&&(e=this.el.inner.offsetHeight,this.api.data.viewportHeight!==(this.api.data.viewportHeight=this.el.overflow.offsetHeight)||this.api.data.scrollHeight!==e)||this.api.data.scrollTop!==s)){if(t&&(this.api.data.scrollHeight=e),this.api.data.scrollTop=Math.max(0,Math.min(this.api.data.scrollHeight-this.api.data.viewportHeight,Math.max(0,s))),this.api.data.scrollBottom=Math.max(0,this.api.data.scrollHeight-this.api.data.scrollTop-this.api.data.viewportHeight),!this.options.native){if(e=Math.max(this.options.minContentHeight,this.api.data.scrollHeight),i=e<=this.api.data.viewportHeight,!i){const i=this.el.barOuter.offsetHeight;(t||this.barOuterHeight!==i)&&(this.barOuterHeight=i,this.barInnerHeight=Math.max(this.options.barMinHeight,this.barOuterHeight*this.api.data.viewportHeight/e),this.el.barInner.style.height=this.barInnerHeight+"px"),(0,d.nextFrame)((()=>{const t=(this.barOuterHeight-this.barInnerHeight)*this.api.data.scrollTop/(e-this.api.data.viewportHeight);this.el.barInner.style.transform=`translateY(${t}px)`}))}this.options.shadows&&(this.shadowTop!=(this.api.data.scrollTop&&!i)&&(0,l.toggleClass)(this.el.container,"ui_scroll_shadow_top_visible",this.shadowTop=this.api.data.scrollTop&&!i),this.shadowBottom!=(this.api.data.scrollBottom&&!i)&&(0,l.toggleClass)(this.el.container,"ui_scroll_shadow_bottom_visible",this.shadowBottom=this.api.data.scrollBottom&&!i)),this.unnecessary!==i&&((0,l.toggleClass)(this.el.container,"ui_scroll_unnecessary",i),this.unnecessary=i,this.options.stopScrollPropagation&&this.fixBlocker(),i&&this.barInnerHeight&&this.barOuterHeight&&(0,d.nextFrame)(function(t){this.el.barInner.style.height=100*this.barInnerHeight/this.barOuterHeight+"%";const i=(this.barOuterHeight-this.barInnerHeight)*this.api.data.scrollTop/(e-this.api.data.viewportHeight)*100/this.barInnerHeight;this.el.barInner.style.transform=`translateY(${i}%)`}.bind(this)))}return this.emitEvent("update"),(!this.options.reversed||s>=0)&&this.more(),!0}return!1}more(){const t=this.options.reversed?this.api.data.scrollTop:this.api.data.scrollBottom,e=null!==this.options.onmoreThreshold?this.options.onmoreThreshold:2*this.api.data.viewportHeight;!this.noMore&&t<=e&&this.emitEvent("more")}constructor(t,e){if(!(t=(0,d.getScrollElement)(t)))throw new Error("uiScroll container is undefined");t.__uiScroll__&&t.__uiScroll__.destroy(),this.options=(0,n.extend)({global:!1,native:!1,theme:"default",reversed:!1,autoresize:!0,preserveEdgeBelow:!1,barMinHeight:30,preserveEdgeBelowThreshold:20,stopScrollPropagation:!0,stopScrollPropagationAlways:!1,minContentHeight:0,onmoreThreshold:null,hidden:!1,shadows:!1,scrollElements:[],onresize:null,onscroll:null,onscrollstart:null,onscrollstop:null,ondrag:null,ondragstart:null,ondragstop:null,onupdate:null,onmore:null,noForceReFlow:!1},e),this.options.native&&(this.options.shadows=!1),s.browser.mobile&&(this.options.stopScrollPropagation=!1),(0,o.isArray)(this.options.scrollElements)||(this.options.scrollElements=[]),this.removeEvents=[],this.removeElements=[],this.dragging=!1,this.dragged=!1,this.released=!0,this.noMore=!1,this.dragY=null,this.dragScroll=null,this.shadowTop=!1,this.shadowBottom=!1,this.unnecessary=!1,this.disabled=!1,this.stopped=!0,this.stoppedTimeout=null,this.fixSizeDefault=null,this.animation=null,this.barOuterHeight=null,this.barInnerHeight=null,this.currentFrame=null,this.blockerScrollTop=500,this.emitter=new EventEmitter,(0,n.isFunction)(this.options.onresize)&&this.emitter.addListener("resize",this.options.onresize),(0,n.isFunction)(this.options.onscroll)&&this.emitter.addListener("scroll",this.options.onscroll),(0,n.isFunction)(this.options.onscrollstart)&&this.emitter.addListener("scrollstart",this.options.onscrollstart),(0,n.isFunction)(this.options.onscrollstop)&&this.emitter.addListener("scrollstop",this.options.onscrollstop),(0,n.isFunction)(this.options.ondrag)&&this.emitter.addListener("drag",this.options.ondrag),(0,n.isFunction)(this.options.ondragstart)&&this.emitter.addListener("dragstart",this.options.ondragstart),(0,n.isFunction)(this.options.ondragstop)&&this.emitter.addListener("dragstop",this.options.ondragstop),(0,n.isFunction)(this.options.onupdate)&&this.emitter.addListener("update",this.options.onupdate),(0,n.isFunction)(this.options.onmore)&&this.emitter.addListener("more",this.options.onmore),this.el={container:t,overflow:(0,l.ce)("div",{className:"ui_scroll_overflow"}),outer:(0,l.ce)("div",{className:"ui_scroll_outer"},{margin:this.options.stopScrollPropagation?this.blockerScrollTop+"px 0":void 0}),inner:(0,l.ce)("div",{className:"ui_scroll_inner tt_noappend"}),shadowTop:(0,l.ce)("div",{className:"ui_scroll_shadow_top"}),shadowBottom:(0,l.ce)("div",{className:"ui_scroll_shadow_bottom"}),content:(0,l.ce)("div",{className:"ui_scroll_content clear_fix"}),barContainer:(0,l.ce)("div",{className:"ui_scroll_bar_container"}),barOuter:(0,l.ce)("div",{className:"ui_scroll_bar_outer"}),barInner:(0,l.ce)("div",{className:"ui_scroll_bar_inner"})},(0,l.data)(this.el.container,"ui-scroll",this);const i=(0,l.cf)(),a=["ui_scroll_container"];for((0,n.each)((0,o.isArray)(this.options.theme)?this.options.theme:(0,n.trim)(this.options.theme+"").split(/\s+/),(function(t,e){e&&a.push("ui_scroll_"+e+"_theme")})),(0,l.addClass)(this.el.container,a.join(" ")),this.options.hidden&&(0,l.addClass)(this.el.container,"ui_scroll_hidden");this.el.container.firstChild;)this.el.content.appendChild(this.el.container.firstChild);if(this.el.outer.appendChild(this.el.inner),this.el.inner.appendChild(this.el.content),this.options.stopScrollPropagation?(this.el.blocker=(0,l.ce)("div",{className:"ui_scroll_blocker"}),this.addEvent(this.el.blocker,"scroll",this.fixBlocker.bind(this),!0),this.el.blocker.appendChild(this.el.outer),this.el.overflow.appendChild(this.el.blocker)):this.el.overflow.appendChild(this.el.outer),i.appendChild(this.el.overflow),this.options.native?(0,l.addClass)(this.el.container,"ui_scroll_native"):(this.el.barOuter.appendChild(this.el.barInner),this.el.barContainer.appendChild(this.el.barOuter),i.appendChild(this.el.barContainer),this.options.shadows&&(this.el.overflow.appendChild(this.el.shadowTop),this.el.overflow.appendChild(this.el.shadowBottom)),s.browser.mobile||this.options.scrollElements.push(this.el.barContainer)),this.options.autoresize){const t=(0,d.addResizeSensor)(this.el.inner,this.resize.bind(this,!0)),e=(0,d.addResizeSensor)(this.el.overflow,this.resize.bind(this,!1));this.removeElements.push(t[0]),this.removeElements.push(e[0]),this.startResizeListening=function(){t[1](),e[1]()}}this.removeElements.push(this.el.overflow,this.el.barContainer),this.el.container.appendChild(i),this.options.reversed&&(this.el.outer.scrollTop=this.el.outer.scrollHeight),this.el.container.__uiScroll__=this.api={container:this.el.container,scroller:this.el.outer,content:this.el.content,emitter:this.emitter,ondragstart:this.dragstart.bind(this),ondragstop:this.dragstop.bind(this),ondrag:this.drag.bind(this),destroy:this.destroy.bind(this),disable:this.disable.bind(this,!0),enable:this.disable.bind(this,!1),scrollTop:this.scrollTop.bind(this,!0),scrollBottom:this.scrollBottom.bind(this,!0),scrollBy:this.scrollBy.bind(this),scrollIntoView:this.scrollIntoView.bind(this,!0),update:this.init.bind(this),updateAbove:this.updateAbove.bind(this),updateBelow:this.updateBelow.bind(this),data:{scrollTop:null,scrollBottom:null,scrollHeight:null,viewportHeight:null}},this.init();const c="onwheel"in this.el.outer?"wheel":void 0!==document.onmousewheel?"mousewheel":s.browser.mozilla?"MozMousePixelScroll":"DOMMouseScroll";return this.addEvent(this.el.container,c,function(t){this.animation&&this.animation.stop(),!this.disabled&&this.options.stopScrollPropagation&&(this.unnecessary?this.options.stopScrollPropagationAlways&&(0,r.cancelEvent)(t):this.isScrollEventUnused(t)?(0,r.cancelEvent)(t):(0,r.stopEvent)(t))}.bind(this),!this.options.stopScrollPropagation),this.options.native||this.addEvent(this.el.barContainer,"mousedown",this.dragstart.bind(this)),(0,n.each)(this.options.scrollElements,function(t,e){this.addEvent(e,c,function(t){this.disabled||this.unnecessary||(this.scrollBy(h.scrollEventDelta(t)),!this.options.stopScrollPropagation&&this.isScrollEventUnused(t)||(0,r.cancelEvent)(t))}.bind(this))}.bind(this)),this.options.reversed&&this.addEvent(this.el.container,"mousedown touchstart pointerdown",function(t){this.released=!1,this.noMore=!0;const e=this.addEvent(document,"mouseup contextmenu touchend pointerup",function(t){(0,r.removeEvent)(document,"mouseup contextmenu touchend pointerup",e),this.released=!0,this.noMore&&this.stopped&&!this.dragging&&(this.noMore=!1,this.more())}.bind(this))}.bind(this)),this.addEvent(this.el.outer,"scroll",function(){this.update()&&(this.stopped?(this.stopped=!1,this.emitEvent("scrollstart")):this.options.native||!1!==this.stopped||(this.stopped=0,(0,l.addClass)(this.el.container,"ui_scroll_scrolled")),this.emitEvent("scroll"),this.stoppedTimeout&&clearTimeout(this.stoppedTimeout),this.stoppedTimeout=setTimeout(function(){this.stopped||(this.stopped=!0,this.options.native||(0,l.removeClass)(this.el.container,"ui_scroll_scrolled"),this.emitEvent("scrollstop"),this.noMore&&this.released&&!this.dragging&&(this.noMore=!1,this.more()))}.bind(this),200))}.bind(this)),this.api}}h.addResizeSensor=d.addResizeSensor;const c=h},332066:(t,e,i)=>{i.d(e,{addResizeSensor:()=>c,getScrollElement:()=>h,nextFrame:()=>d});var s=i(82161),o=i(795558),n=i(301230);let l;const r=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||(t=>setTimeout(t,1)),a=window.cancelAnimationFrame||window.cancelRequestAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;function d(t){l&&a(l),l=r(t)}function h(t){return(0,s.isString)(t)&&"_"===t[0]?(0,o.geByClass1)(t):(0,o.ge)(t)}function c(t,e){if((t=h(t))&&(0,s.isFunction)(e)){if(n.browser.msie9||n.browser.opera&&n.browser.version<13){let i=!1,l=!1;const r=(0,o.ce)("object",{type:"text/html",className:"ui_scroll_resize_object",data:"about:blank",onload:function(){l=!0,i&&a()}});function a(){if(!r.contentDocument)return setTimeout(a,100);r.contentDocument.defaultView.removeEventListener("resize",e),r.contentDocument.defaultView.addEventListener("resize",e),e()}return t.appendChild(r),t.__resizeSensor__=[r,function(){i=!0,l&&a()}]}{const d=(0,o.ce)("div",{className:"ui_scroll_resize_sensor"}),c=(0,o.ce)("div",{className:"ui_scroll_resize_sensor ui_scroll_resize_expand"}),p=(0,o.ce)("div",{className:"ui_scroll_resize_sensor ui_scroll_resize_shrink"}),u=(0,o.ce)("div"),m=(0,o.ce)("div");let w=null;return c.appendChild(u),p.appendChild(m),d.appendChild(c),d.appendChild(p),t.appendChild(d),t.__resizeSensor__=[d,c.onscroll=p.onscroll=function(){const i=(t.offsetWidth||1e4)+10,s=(t.offsetHeight||1e4)+10;u.style.width=i+"px",u.style.height=s+"px",c.scrollLeft=i,c.scrollTop=s,p.scrollLeft=i,p.scrollTop=s,w!==(w=i+" "+s)&&e()}]}}}},785429:(t,e,i)=>{i.d(e,{WideDropdown:()=>c});var s=i(795558),o=i(893106),n=i(221780),l=i(705758),r=i(82161),a=i(953908),d=i(301230),h=i(258810);let c={_textEvent:function(t){let e=t.target,i=e.dd,o=window.cur.wdd[i];switch(t.type){case"focus":e.focused=!0,(!e.active||o.opts.noMultiSelect&&o.chosen&&o.chosen[1]==(0,s.val)(e))&&((0,s.val)(e,""),e.style.color="",e.active=1,e.phd=!1),c._updateTextInput(o),c._updateList(o),o.opts.onTextFocus&&o.opts.onTextFocus();break;case"blur":e.focused=!1,(e.active=!e.phd&&e.value?1:"")?o.over&&o.opts.chooseOnBlur&&o.opts.chooseOnBlur(o.over)&&(c.select(i),(0,s.hide)(e),o.full||(0,s.show)(o.add)):(0,r.isEmpty)(o.selected)&&!o.chosen?((0,s.val)(e,e.ph),e.style.color="var(--text_secondary)",e.phd=!0):o.chosen&&!(0,s.val)(e)?(0,s.val)(e,"INPUT"==e.tagName?(0,r.unclean)(o.chosen[1]):o.chosen[1]):((0,s.hide)(e),o.full||(0,s.show)(o.add)),c._hideList(o),o.opts.onTextBlur&&o.opts.onTextBlur();break;case"keydown":case"keypress":case"paste":if(clearTimeout(o.updateTimer),o.updateTimer=setTimeout(c._updateList.pbind(o,!1),0),e=(0,s.ge)("wddi"+o.over+"_"+i),t.keyCode==a.KEY.UP)return e&&(0,s.domPS)(e)&&c.over(i,(0,s.domPS)(e).id.replace(/^wddi/,"").replace(new RegExp("_"+i+"$",""),""),!0),t.canceled=!0,(0,a.cancelEvent)(t);if(t.keyCode==a.KEY.DOWN)return e&&(0,s.domNS)(e)&&c.over(i,(0,s.domNS)(e).id.replace(/^wddi/,"").replace(new RegExp("_"+i+"$",""),""),!0),t.canceled=!0,(0,a.cancelEvent)(t);if(t.keyCode==a.KEY.RETURN)return c.select(i),t.canceled=!0,(0,a.cancelEvent)(t);if(t.keyCode==a.KEY.ESC)return o.text.blur(),t.canceled=!0,(0,a.cancelEvent)(t);o.opts.onSearch&&(clearTimeout(o.searchTimer),o.searchTimer=setTimeout((function(){o.opts.onSearch((0,r.trim)((0,s.val)(o.text)),o)}),0))}},_getTextValue:function(){return this.active?this.value:""},_widenTextInput:function(t){window.vk.rtl?t.text.style.width=Math.max((t.text.offsetTop>20?t.fullWidth:t.partWidth)-t.fullWidth+(t.text.offsetLeft+t.text.offsetWidth)-2,t.addWidth)-t.textDelta+"px":t.text.style.width=Math.max((t.text.offsetTop>20?t.fullWidth:t.partWidth)-(t.text.offsetLeft-t.textOffset)-2,t.addWidth)-t.textDelta+"px",c._showList(t)},_updateTextInput:function(t){t.addWidth&&(t.text.style.width=t.addWidth-t.textDelta+"px",setTimeout(c._widenTextInput.pbind(t),0))},_focusText:function(t){t.full||t.disabled||((0,s.hide)(t.add),(0,s.show)(t.text),c._updateTextInput(t),setTimeout(window.elfocus.pbind(t.text),0))},_clickEvent:function(t,e){if(e.target!=t.arrow){if(e.target==t.text.parentNode)return c._focusText(t);for(let i=e.target;i&&i!=t.text.parentNode;i=i.parentNode)if(i==t.add)return c._focusText(t)}},_arrDownEvent:function(t){(0,s.isVisible)(t.listWrap)?c._hideList(t):c._focusText(t)},_afterInit:function(t){c._index(t),d.browser.opera_mobile||c._textEvent({target:t.text,type:t.text.focused?"focus":"blur"}),(0,r.extend)(t,{addWidth:(0,s.getSize)(t.add)[0],textDelta:(0,s.getSize)(t.text)[0]-(0,r.intval)((0,s.getStyle)(t.text,"width")),fullWidth:(0,s.getSize)((0,s.domPN)(t.text))[0]-5,textOffset:t.text.offsetLeft}),t.partWidth=t.fullWidth-(0,s.getSize)(t.arrow)[0],t.text.focused?c._updateList(t):c._updateTextInput(t),(0,a.addEvent)(t.text.parentNode,"click",c._clickEvent.pbind(t)),(0,a.addEvent)(t.arrow,"mousedown",c._arrDownEvent.pbind(t)),t.opts.noMultiSelect&&t.opts.chosen&&c.choose(t.id,!1,t.opts.chosen,!0)},_updateList:function(t,e,i){if(!t.cache[""])return;if(i=void 0!==i?i:(0,r.trim)((0,s.val)(t.text)),t.lastQ===i&&!e)return void c._showList(t);t.lastQ=i,clearTimeout(t.requestTimer);let o=t.opts.custom,n=o&&o(i,(e=>{c._renderList(t,e,t.opts.customNeedEmpty)}));n?c._renderList(t,n,t.opts.customNeedEmpty):(n=t.cache[i],n?c._renderList(t,n,!0):(n=c._search(t,i),c._renderList(t,n,!t.opts.url),t.opts.url&&(t.requestTimer=setTimeout(c._requestList.pbind(t),t.opts.requestWait))))},_index:function(t){let e,i,s=t.opts.defaultItems,o=t.opts.items,n=[];for(e=0,i=s.length;e<i;++e)n.push(e);for(t.cache[""]=n,e=0,i=o.length;e<i;++e)c._indexItem(t,e,o[e])},_indexItem:function(t,e,i){let s,o,l,a="",d=t.opts.searchKeys,h={};for(s=0,l=d.length;s<l;++s)a+=" "+(i[d[s]]||"").replace(t.opts.delimeter," ").replace(/<[^>]*>/g,"");for(a+=((0,n.parseLatin)(a)||"")+((0,n.parseCyr)(a)||""),a=(0,r.trim)(a.toLowerCase()).split(/\s+/),s=0;s<a.length;s++)for(o=1;o<=t.opts.wholeIndex;o++){let i=a[s].substr(0,o);h[i]||(t.index[i]||(t.index[i]=[]),t.index[i].push(e),h[i]=1)}},_search:function(t,e){if(!(e=(0,r.trim)(e.toLowerCase().replace(t.opts.delimeter," "))))return t.cache[""];let i=t.opts.wholeIndex;if(e.length<=i&&-1==e.indexOf(" "))return t.index[e]||[];let s,o,l=0,a="";for(s=0,o=(e=e.split(" ")).length;s<o;++s){let o=e[s].substr(0,i),n=t.index[o];if((!a||!n||n.length<l)&&(l=n?n.length:0,a=o),!l)return[]}let d=[],h=t.opts.searchKeys,c=h.length,p=e.length;for(s=0,o=t.index[a].length;s<o;++s){let i=t.index[a][s],o=t.opts.items[i],l=!1,r="";for(let e=0;e<c;++e)r+=" "+(o[h[e]]||"").replace(t.opts.delimeter," ").replace(/<[^>]*>/g,"");r+=((0,n.parseLatin)(r)||"")+((0,n.parseCyr)(r)||""),r=r.toLowerCase();for(let t=0;t<p;++t)if(!r.includes(" "+e[t])){l=!0;break}l||d.push(i)}return d},_requestList:function(t){let e=(0,r.trim)((0,s.val)(t.text));e&&window.ajax.post(t.opts.url,(0,r.extend)({str:e},t.opts.params||{}),{onDone:function(i){t.opts.onDataLoaded&&(i=t.opts.onDataLoaded(i)),t.cache[e]=c._search(t,e).concat(i),c._renderList(t,i,!0,!0)}})},_renderList:function(t,e,i,s){let o=[],n=0,a=t.lastQ,d=c._highlight,h=t.opts.itemMark;t.outdated&&(s=!1),s?n=(t.list.__uiScroll__?t.list.__uiScroll__.content:t.list).childNodes.length:(t.shown={},n=0);for(let i=0,s=void 0!==t.opts.renderLimit?Math.min(t.opts.renderLimit,e.length):e.length;i<s;++i){let s=e[i];(0,r.isArray)(s)||t.opts.hashtagEnable||(s=t.opts.items[s]);let c=t.opts.hashtagEnable?s:s[0]+"",p=c+"_",u="";if(window.cur.shNewUi){if(t.selected[p]||t.shown[p]||t.selCount&&s[8]>0&&!t.opts.allowMultiselectAll)continue}else if(t.selected[p]||t.shown[p]||t.selCount&&s[8]>0)continue;if(t.shown[p]=s,n?u="wddi":(u="wddi_over",t.over=c),t.opts.hashtagEnable){let e=a&&d(s||"",a)||s||"";o.push(`\n  <div class="${u}" onmousedown="WideDropdown.over('${t.id}', '${(0,r.clean)(c)}'); WideDropdown.select('${t.id}', event)" onmousemove="WideDropdown.over('${t.id}', '${(0,r.clean)(c)}')" id="wddi${c}_${t.id}" onclick="">\n    <div class="wddi_data wddi_data_hashtag">\n      <div class="wddi_text_hashtag">${e}</div>\n    </div>\n  </div>`)}else{let e=(0,r.isArray)(s[3])?"":" "+(0,l.onlinePlatformClass)(h(s)),i=s[3]?'<b class="fl_l wddi_thumb'+e+'"><img class="wddi_img" src="'+((0,r.isArray)(s[3])?"/images/community_"+(window.devicePixelRatio>=2?100:50)+".png":s[3])+'" /></b>':"",n=a&&d(s[1]||"",a)||s[1]||"",p=a&&d(s[2]||"",a)||s[2]||"",m=a&&d(s[10]||"",a)||s[10]||"";o.push(`\n  <div class="${u}" onmousedown="WideDropdown.over('${t.id}', '${(0,r.clean)(c)}'); WideDropdown.select('${t.id}', event)" onmousemove="WideDropdown.over('${t.id}', '${(0,r.clean)(c)}')" id="wddi${c}_${t.id}" onclick="">\n    <div class="wddi_data">\n      ${i}\n      <div class="wddi_text">${n}</div>\n      <div class="wddi_sub">${p+m}</div>\n    </div>\n  </div>`)}++n}o=o.join(""),!n&&i&&(o='<div class="wddi_no">'+(a?t.opts.noResult:t.opts.introText)+"</div>"),s?(t.list.__uiScroll__?t.list.__uiScroll__.content:t.list).innerHTML+=o:o?(t.outdated=!1,(t.list.__uiScroll__?t.list.__uiScroll__.content:t.list).innerHTML=o):t.outdated=!0,t.outdated||(t.list.style.height=n>5?t.opts.maxListHeight||"242px":"",c._showList(t),t.scroll&&t.scroll.scrollTop(),setTimeout(c._checkScroll.pbind(t),0)),c._updatePos(t)},_highlight:function(t,e){let i=[(0,r.escapeRE)(e)],s=(0,n.parseLatin)(e),o=(0,n.parseCyr)(e);null!==s&&i.push((0,r.escapeRE)(s)),null!==o&&i.push((0,r.escapeRE)(o));let l=new RegExp("(?![^&;]+;)(?!<[^<>]*)((\\(*)("+i.join("|")+"))(?![^<>]*>)(?![^&;]+;)","gi");return t.replace(l,'$2<span class="wdd_hl">$3</span>')},_checkScroll:function(t){void 0===t.scroll&&(t.scroll=!1,window.stManager.add(["ui_common.css",window.jsc("web/ui_common.js")],(function(){t.scroll=new h.default(t.list,{global:!0})})))},_updatePos:function(t){let e=t.opts.toup?-(0,s.getSize)(t.listWrap)[1]-(t.opts.input&&(0,s.getSize)(t.opts.input)[1]||0):(0,s.getSize)(t.listWrap.parentNode)[1];t.listWrap.style.marginTop=e+"px"},_showList:function(t){t.text.focused&&!t.disabled&&((0,s.isVisible)(t.listWrap)||((0,s.ge)(t.listWrap).style.display="block",t.scroll&&t.scroll.update(),c._updateList(t,!0)),c._updatePos(t),(0,s.addClass)(t.container,"wdd_focused"))},_hideList:function(t){(0,s.hide)(t.listWrap),(0,s.removeClass)(t.container,"wdd_focused")},_updateImgs:function(t,e){if(!t.img)return;e=t.opts.noAnim?t.opts.noAnim:e;let i=0,n=[],l=[],a=0;for(let e in t.selected){if(t.selected.hasOwnProperty(e))continue;let i=t.selected[e],s=i[3],o=i[4],n=i[5],a=i[6];if((0,r.isArray)(s))for(let t,e=0,d=s.length;e<d;++e)t=(0,r.clone)(i),t[0]=a[e],t[3]=s[e],t[4]=o[e],t[5]=n[e],l.push(t);else l.push(i)}a=l.length;for(let t of l){if(l.hasOwnProperty(t))continue;let e,s=l[t],o=s[3],r=s[4];if(a>3?(++i,e="wdd_img_tiny "+(1==i||4==i?"fl_l":"fl_r")):e=3==a?i++?"wdd_img_tiny fl_r":"wdd_img_half fl_l":2==a?"wdd_img_half "+(i++?"fl_r":"fl_l"):"wdd_img_full",n.push(r?'<a href="'+r+'" class="'+e+'">':'<div class="'+e+'">'),n.push('<img class="wdd_img" src="'+o+'" />'),n.push(r?"</a>":"</div>"),i>=4)break}let d=n.join("")||t.opts.defImgText||"";if(t.imgRand=!1,!0===e)(0,s.val)(t.img,d);else{let e,i,n=t.imgRand;for(n||(n=Math.random()),i=(0,s.ce)("div",{className:"wdd_img_layer",innerHTML:d}),e=(0,s.domFC)(t.img);e&&"wdd_img_layer"==e.className;)e=(0,s.domNS)(e);(0,o.animate)(e?t.img.insertBefore(i,e):t.img.appendChild(i),{opacity:1},150,(function(){t.imgRand===n&&(0,s.val)(t.img,d)}))}},init:function(t,e){if(!(t=(0,s.ge)(t)))return!1;window.stManager.add(["notifier.css",window.jsc("web/notifier.js")]);let i=t.id;if(!t.id)return!1;if(window.cur.wdd){if(window.cur.wdd[i])return!1}else window.cur.wdd={};e=(0,r.extend)({cacheLength:1e4,requestWait:300,wholeIndex:2,maxItems:29,noAnim:!1,searchKeys:[1],defaultItems:e.items||[],items:e.defaultItems||[],itemMark:function(t){return(0,r.intval)(t[5])}},e||{});let o={id:i,container:t,text:(0,s.geByClass1)("wdd_text",t),arrow:(0,s.geByClass1)("wdd_arr",t),img:e.img&&(0,s.ge)(e.img),opts:e,selected:{},selCount:0,index:{},delimeter:/[\s\(\)\.,\-]+/g,cache:{}};return(o.text.ph=o.text.getAttribute("placeholder")||"")&&t.setAttribute("placeholder",""),o.text.dd=i,e.toup&&(0,s.addClass)(t,"wdd_toup"),o.add=t.insertBefore((0,s.ce)("div",{className:"wdd_add fl_l",innerHTML:`\n  <div class="wdd_add2">\n    <table cellspacing="0" cellpadding="0"><tr>\n      <td><div class="wdd_add3">        <nobr>${n.getLang("global_add")}</nobr>\n      </div></td>\n      <td><div class="wdd_add_plus" onmousedown="WideDropdown.focus('${i}')"></div></td>\n    </table>\n  </div>`}),o.text),o.bubbles=t.insertBefore((0,s.ce)("div",{className:"wdd_bubbles"}),o.add),o.listWrap=t.insertBefore((0,s.ce)("div",{className:"wdd_lwrap",innerHTML:'<div class="wdd_list"></div>'},{display:"none",width:e.width||(0,s.getSize)(t)[0]||"auto"}),t.firstChild),o.list=(0,s.geByClass1)("wdd_list",o.listWrap),d.browser.opera_mobile||(o.text.active=(0,s.val)(o.text)?1:"",o.text.getValue=c._getTextValue.bind(o.text),(0,a.addEvent)(o.text,"focus blur paste "+(d.browser.opera?"keypress":"keydown"),c._textEvent)),setTimeout(c._afterInit.pbind(o),0),window.cur.wdd[i]=o},initSelect:function(t,e){if(!(t=(0,s.ge)(t)))return!1;window.stManager.add(["notifier.css",window.jsc("web/notifier.js")]);let i=t.id;if(!t.id)return!1;window.cur.wdd||(window.cur.wdd={});let o={id:i,container:t,text:(e=(0,r.extend)({cacheLength:1e4,requestWait:300,wholeIndex:2,maxItems:29,searchKeys:[1],defaultItems:e.items||[],items:e.defaultItems||[],itemMark:function(t){return(0,r.intval)(t[5])}},e||{})).text||(0,s.geByClass1)("wdd_text",t),opts:e,selected:{},selCount:0,index:{},delimeter:/[\s\(\)\.,\-]+/g,cache:{}};return o.text.dd=i,e.toup&&(0,s.addClass)(t,"wdd_toup"),o.listWrap=t.insertBefore((0,s.ce)("div",{className:"wdd_lwrap",innerHTML:'<div class="wdd_list"></div>'},{display:"none",width:e.width||(0,s.getSize)(t)[0]}),t.firstChild),o.list=(0,s.geByClass1)("wdd_list",o.listWrap),setTimeout(c._index.pbind(o),0),window.cur.wdd[i]=o},deinit:function(t,e){if(e||(e=window.cur),!e.wdd||!(t=(0,s.ge)(t)))return!1;let i=t.id;if(!t.id)return!1;let o=e.wdd[i];return!!o&&((0,s.cleanElems)(o.text,(0,s.domPN)(o.text)),delete e.wdd[i],!0)},items:function(t,e,i){let s=window.cur.wdd[t];i||(i=e),(0,r.extend)(s,{index:{},cache:{}}),(0,r.extend)(s.opts,{defaultItems:e||[],items:i||[]}),c._index(s),c._updateList(s,!0)},over:function(t,e,i){let o=window.cur.wdd[t];if(o.over==e)return;o.over&&(0,s.replaceClass)("wddi"+o.over+"_"+t,"wddi_over","wddi"),o.over=e;let n=(0,s.ge)("wddi"+o.over+"_"+t);(0,s.replaceClass)(n,"wddi","wddi_over"),i&&o.scroll&&o.scroll.scrollIntoView(n.firstElementChild||n)},choose:function(t,e,i,o){let n=window.cur.wdd[t],l=i?i[0]:n.over,d=l+"_";if(i||(i=n.shown[d]),void 0===l||!i)return;if(n.over=!1,n.opts.onItemSelect&&!1===n.opts.onItemSelect(i))return e&&(0,a.cancelEvent)(e);n.chosen=i,(0,s.val)(n.text,"INPUT"==n.text.tagName?(0,r.unclean)(i[1]):i[1]),n.text.style.color="",n.text.blur(),c._textEvent({target:n.text,type:n.text.focused?"focus":"blur"});let h=!(n.opts.onChange&&!o)||n.opts.onChange(1,l),p=1===h;return 0!==h&&setTimeout(c._updateImgs.pbind(n,p),0),e&&(0,a.cancelEvent)(e)},select:function(t,e,i){let o=window.cur.wdd[t],n=i?i[0]:o.over,l=n+"_";if(o.opts.noMultiSelect)return this.choose(t,e,i);if(i||(i=o.shown[l]),void 0===n||o.selected[l]||!i)return;if(o.over=!1,o.opts.onItemSelect&&!1===o.opts.onItemSelect(i))return e&&(0,a.cancelEvent)(e);o.selected[l]=i,++o.selCount,window.cur.shNewUi?o.full=o.opts.maxItems&&o.selCount>=o.opts.maxItems||i[8]>0&&!o.opts.allowMultiselectAll:o.full=o.opts.maxItems&&o.selCount>=o.opts.maxItems||i[8]>0,o.bubbles.appendChild((0,s.ce)("div",{id:"wddb"+l+t,className:"summary_tab_sel fl_l",innerHTML:`\n  <div class="summary_tab2">\n    <table cellspacing="0" cellpadding="0"><tr>\n      <td><div class="summary_tab3">\n        <nobr>${i[1]}</nobr>\n      </div></td>\n      <td><div class="summary_tab_x" onmousedown="WideDropdown.deselect('${t}', '${(0,r.clean)(n+"")}', event)"></div></td>\n    </table>\n  </div>`})),(0,s.val)(o.text,""),o.text.blur(),c._textEvent({target:o.text,type:o.text.focused?"focus":"blur"}),o.full?((0,s.hide)(o.add),o.arrow.style.visibility="hidden"):c._updateList(o,!0);let d=!o.opts.onChange||o.opts.onChange(1,n),h=1===d;return 0!==d&&setTimeout(c._updateImgs.pbind(o,h),0),e&&(0,a.cancelEvent)(e)},updimgs:function(t){let e=window.cur.wdd[t],i=!e.opts.onChange||e.opts.onChange(0),s=1===i;0!==i&&setTimeout(c._updateImgs.pbind(e,s),0)},deselect:function(t,e,i){let o=window.cur.wdd[t];if(o.disabled)return i?(0,a.cancelEvent)(i):void 0;if(void 0===e){o.selCount=o.full=0,o.arrow.style.visibility="hidden";for(let t in o.selected)o.selected.hasOwnProperty(t)||delete o.selected[t];(0,s.val)(o.bubbles,""),o.text.blur(),(0,s.hide)(o.add),(0,s.show)(o.text),o.text.style.width=o.partWidth-o.textDelta-2+"px",c._updateList(o,!0),c._updateImgs(o)}else{let i=e+"_";if(!o.selected[i])return;delete o.selected[i],(0,s.re)("wddb"+i+t),o.selCount&&--o.selCount,o.full=0,o.arrow.style.visibility="",o.text.blur(),o.selCount?((0,s.show)(o.add),(0,s.hide)(o.text)):((0,s.hide)(o.add),(0,s.show)(o.text),c._updateTextInput(o)),c._updateList(o,!0)}let n=!o.opts.onChange||o.opts.onChange(-1,e),l=1===n;return 0!==n&&setTimeout(c._updateImgs.pbind(o,l),0),i?(0,a.cancelEvent)(i):void 0},focus:function(t){c._focusText(window.cur.wdd[t])},clear:function(t){let e=window.cur.wdd[t];(0,s.val)(e.text,""),e.text.blur(),c._textEvent({target:e.text,type:e.text.focused?"focus":"blur"}),c._updateList(e,!0)},disable:function(t,e){let i=window.cur.wdd[t];e&&!i.disabled?(i.disabled=!0,(0,s.addClass)(t,"wdd_disabled")):!e&&i.disabled&&(i.disabled=!1,(0,s.removeClass)(t,"wdd_disabled"),c._updateList(i,!0))}}}},o={};function n(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={exports:{}};return s[t].call(i.exports,i,i.exports,n),i.exports}n.m=s,t=[],n.O=(e,i,s,o)=>{if(!i){var l=1/0;for(h=0;h<t.length;h++){for(var[i,s,o]=t[h],r=!0,a=0;a<i.length;a++)(!1&o||l>=o)&&Object.keys(n.O).every((t=>n.O[t](i[a])))?i.splice(a--,1):(r=!1,o<l&&(l=o));if(r){t.splice(h--,1);var d=s();void 0!==d&&(e=d)}}return e}o=o||0;for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1];t[h]=[i,s,o]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},i=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,n.t=function(t,s){if(1&s&&(t=this(t)),8&s)return t;if("object"==typeof t&&t){if(4&s&&t.__esModule)return t;if(16&s&&"function"==typeof t.then)return t}var o=Object.create(null);n.r(o);var l={};e=e||[null,i({}),i([]),i(i)];for(var r=2&s&&t;"object"==typeof r&&!~e.indexOf(r);r=i(r))Object.getOwnPropertyNames(r).forEach((e=>l[e]=()=>t[e]));return l.default=()=>t,n.d(o,l),o},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.e=()=>Promise.resolve(),n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.p="/dist/",(()=>{var t={48806:0};n.O.j=e=>0===t[e];var e=(e,i)=>{var s,o,[l,r,a]=i,d=0;if(l.some((e=>0!==t[e]))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(a)var h=a(n)}for(e&&e(i);d<l.length;d++)o=l[d],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(h)},i=self.webpackChunkvk=self.webpackChunkvk||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var l=n.O(void 0,[75514,68592],(()=>n(664333)));l=n.O(l)})();