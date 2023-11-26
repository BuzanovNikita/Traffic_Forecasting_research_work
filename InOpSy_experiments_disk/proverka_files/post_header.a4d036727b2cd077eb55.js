﻿(()=>{"use strict";var e,t,r,o,n,a,i={780402:(e,t,r)=>{var o,n,a,i=r(283452),l=r(282510),s=r(809053),c=r(470055),d=r(957973),f=r(839470);(null==(n=window.vk)||null==(o=n.pe)?void 0:o.static_manager_dynamic_imports)&&(null==(a=window.vk)?void 0:a.stDomain)&&(r.p=window.vk.stDomain+"/dist/"),(0,i.tq)().setInteractiveHandler("PostHeader/showTooltip",(e=>{let{iconName:t,imageSrc:r,imageAlt:o,avatarLink:n,buttonText:a,text:i,title:s,buttonAttrs:c}=e.payload.dataAttrs,d=e.payload.target;try{(0,l.injectPostHeaderAvatarSVGGraphic)((0,l.getPostHeaderAvatarSVGGraphic)());(0,l.renderPostHeaderAuthorTooltip)(d,{iconName:t,imageSrc:r,imageAlt:o,avatarLink:n,buttonText:a,text:i,title:s,buttonAttrs:c}).show()}catch(e){}})),(0,i.tq)().setInteractiveHandler("Post/ownerLinkClick",(e=>{let{event:t}=e.payload.dataAttrs,r=e.payload.target;if(!t||!r)return;const o=(0,s.getTrackCodeFromPost)(r);o&&c.feedInteractionItemStatCollector.logEvent({track_code:o,ref:(0,s.resolveRef)(window.cur.module,window.cur.section,window.cur.subsection),item:d.FeedInteractionItemType.WALL_ITEM},t)})),(0,i.tq)().setInteractiveHandler("PostHeader/openPost",(e=>{if(!(0,f.partConfigEnabled)("feed_content_events_open_post_event_web"))return;let{eventItem:t}=e.payload.dataAttrs,r=e.payload.target;if(!t||!r)return;const o=(0,s.getTrackCodeFromPost)(r);o&&c.feedInteractionItemStatCollector.logEvent({track_code:o,ref:(0,s.resolveRef)(window.cur.module,window.cur.section,window.cur.subsection),item:t},d.EventItemType.OPEN)}));try{window.stManager.done(window.jsc("web/post_header.js"))}catch(e){}},282510:(e,t,r)=>{r.d(t,{getPostHeaderAvatarSVGGraphic:()=>u,injectPostHeaderAvatarSVGGraphic:()=>p,renderPostHeaderAuthorTooltip:()=>_});var o=r(84543),n=r(820315),a=r(740595),i=r(823914),l=r(143096),s=r(659397);const c="post_header_avatar_rich_svg_graphics_wrapper",d="svg-resources";function f(e){return e.replace(/<defs>(.*?)<\/defs>/,"")}function u(){return'<svg xmlns="http://www.w3.org/2000/svg" style="position: absolute; width: 0; height: 0" id="post_header_avatar_rich_svg_graphics_wrapper">\n    <defs>\n      <linearGradient id="users_circle_fill_blue_32__a" x1="-16" x2="16" y1="16" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#70B2FF"/><stop offset="1" stop-color="#5C9CE6"/></linearGradient>\n      <linearGradient id="prometey_circle_fill_red_32__a" x1="-16" x2="16" y1="16" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#FF5263"/><stop offset="1" stop-color="#FF3347"/></linearGradient>\n      <linearGradient id="favorite_circle_fill_green_32__a" x1="-16" x2="16" y1="16" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#50C750"/><stop offset="1" stop-color="#32B332"/></linearGradient>\n      <linearGradient id="donut_circle_fill_yellow_32__a" x1="-16" x2="16" y1="16" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB73D"/><stop offset="1" stop-color="#FFA000"/></linearGradient>\n    </defs>\n</svg>\n'}function p(e){if(!document.querySelector(`#${c}`)){let t=document.querySelector(`#${d}`);t||(t=function(){const e=document.createElement("div");return e.id=d,e.style.height="0",e.style.width="0",e.style.overflow="hidden",e.style.position="absolute",document.body.append(e),e}()),t.innerHTML+=e}}function _(e,{iconName:t,imageSrc:r,imageAlt:c,avatarLink:d,title:u,text:p,buttonText:_,buttonAttrs:v}){let g="";"prometey_circle_fill_red"===t&&(g=f((0,n.getIcon32PrometeyCircleFillRed)().icon)),"favorite_circle_fill_green"===t&&(g=f((0,a.getIcon32FavoriteCircleFillGreen)().icon)),"donut_circle_fill_yellow"===t&&(g=f((0,i.getIcon32DonutCircleFillYellow)().icon)),"users_circle_fill_blue"===t&&(g=f((0,l.getIcon32UsersCircleFillBlue)().icon));const h=function({overlayIcon:e,imgWrap:t,imageSrc:r,imageAlt:o,href:n}){return r?`<div class="PostHeaderImgContainerWrapper PostHeaderImgContainerWrapper--inTooltip">\n    <${t} class="PostHeaderImgContainer PostHeaderImgContainer--inTooltip _post_image" href="${n}">\n      <div class="post_image_stories">\n        <img src="${r}" class="post_img" alt="${o}" />\n      </div>\n    </${t}>\n    <div class="AvatarRichBadge AvatarRichBadge--large">\n      <div class="AvatarRichBadge__icon">\n          ${e}\n      </div>\n    </div>\n  </div>`:""}({overlayIcon:g,imgWrap:d?"a":"div",imageSrc:r,imageAlt:c,href:d}),m=!h,y=function({avatar:e,title:t,text:r,buttonText:o,buttonAttrs:n}){const a=!e,i=a?"":`\n    <div class="PostHeaderAuthorTooltip__avatar">\n      ${e}\n    </div>`;return`\n    <div class="${(0,s.classNames)("PostHeaderAuthorTooltip",{"PostHeaderAuthorTooltip--avatarless":a})}">\n      ${i}\n      <div class="PostHeaderAuthorTooltip__content">\n        <h5 class="PostHeaderAuthorTooltip__title">${t}</h5>\n        <p class="PostHeaderAuthorTooltip__text">${r}</p>\n        ${o?`<a class="PostHeaderAuthorTooltip__link" ${n}>${o}</a>`:""}\n      </div>\n    </div>\n  `}({avatar:h,title:u,text:p,buttonText:_,buttonAttrs:v});return new o.default(e,{content:y,align:"left",width:m?350:null,cls:(0,s.classNames)("PostHeaderAuthorTooltipWrapper",{"PostHeaderAuthorTooltipWrapper--avatarless":m})})}},823914:(e,t,r)=>{function o(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="url(#donut_circle_fill_yellow_32__a)" d="M0 16a16 16 0 1 1 32 0 16 16 0 0 1-32 0Z"/><path fill="#fff" d="m19.34 12.48 4.43.43c1.54.15 2.02 1.65.83 2.64l-3.47 2.88 1.29 4.7c.42 1.54-.9 2.48-2.2 1.55L16 21.7l-4.21 2.98c-1.31.92-2.63 0-2.2-1.55l1.28-4.7-3.47-2.88c-1.2-1-.72-2.5.83-2.64l4.43-.42 1.95-4.5c.6-1.41 2.17-1.41 2.78 0l1.95 4.5Z"/><defs><linearGradient id="donut_circle_fill_yellow_32__a" x1="-16" x2="16" y1="16" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB73D"/><stop offset="1" stop-color="#FFA000"/></linearGradient></defs></svg>',name:"donut_circle_fill_yellow_32"}}r.d(t,{getIcon32DonutCircleFillYellow:()=>o})},740595:(e,t,r)=>{function o(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="url(#favorite_circle_fill_green_32__a)" d="M0 16a16 16 0 1 1 32 0 16 16 0 0 1-32 0Z"/><path fill="#fff" d="m19.34 12.48 4.43.43c1.54.15 2.02 1.65.83 2.64l-3.47 2.88 1.29 4.7c.42 1.54-.9 2.48-2.2 1.55L16 21.7l-4.21 2.98c-1.31.92-2.63 0-2.2-1.55l1.28-4.7-3.47-2.88c-1.2-1-.72-2.5.83-2.64l4.43-.42 1.95-4.5c.6-1.41 2.17-1.41 2.78 0l1.95 4.5Z"/><defs><linearGradient id="favorite_circle_fill_green_32__a" x1="-16" x2="16" y1="16" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#50C750"/><stop offset="1" stop-color="#32B332"/></linearGradient></defs></svg>',name:"favorite_circle_fill_green_32"}}r.d(t,{getIcon32FavoriteCircleFillGreen:()=>o})},820315:(e,t,r)=>{function o(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="url(#prometey_circle_fill_red_32__a)" d="M0 16a16 16 0 1 1 32 0 16 16 0 0 1-32 0Z"/><path fill="#fff" d="M15.28 6.07a.33.33 0 0 1 .52.34c-.05.2-.1.37-.18.48-2.52 3.88-1.41 6.22.29 6.47 1.75.26 3.04-.92 2.76-3.46a557.71 557.71 0 0 1-.12-1.1.3.3 0 0 1 .48-.29 9.96 9.96 0 0 1 2.05 2.05C23.9 14.1 24 17.04 24 18.31c-.06 4.56-3.43 7.69-8 7.69s-8-3.13-8-7.69c.02-3.44 1.76-8.3 6.57-11.73l.7-.51Z"/><defs><linearGradient id="prometey_circle_fill_red_32__a" x1="-16" x2="16" y1="16" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#FF5263"/><stop offset="1" stop-color="#FF3347"/></linearGradient></defs></svg>',name:"prometey_circle_fill_red_32"}}r.d(t,{getIcon32PrometeyCircleFillRed:()=>o})},143096:(e,t,r)=>{function o(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="url(#users_circle_fill_blue_32__a)" d="M0 16a16 16 0 1 1 32 0 16 16 0 0 1-32 0Z"/><path fill="#fff" d="M21 16.5c2.3 0 6.5.86 6.5 4.29 0 1.5-.38 1.71-1.15 1.71h-6.09a5.6 5.6 0 0 0 .24-1.71c0-1.73-.63-3.07-1.67-4.07.78-.16 1.55-.22 2.17-.22Zm-9 0c2.3 0 6.5.86 6.5 4.29 0 1.5-.38 1.71-1.15 1.71H6.65c-.77 0-1.15-.21-1.15-1.71 0-3.43 4.2-4.29 6.5-4.29ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/><defs><linearGradient id="users_circle_fill_blue_32__a" x1="-16" x2="16" y1="16" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#70B2FF"/><stop offset="1" stop-color="#5C9CE6"/></linearGradient></defs></svg>',name:"users_circle_fill_blue_32"}}r.d(t,{getIcon32UsersCircleFillBlue:()=>o})}},l={};function s(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return i[e].call(r.exports,r,r.exports,s),r.exports}s.m=i,s.amdO={},e=[],s.O=(t,r,o,n)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,o,n]=e[d],i=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(s.O).every((e=>s.O[e](r[l])))?r.splice(l--,1):(i=!1,n<a&&(a=n));if(i){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,o,n]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);s.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,s.d(n,a),n},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>25394===e?"AudioLongtapModal.98b6df61d646414354a3.js":24817===e?"hls.7bfefe299fa92971b99a.js":75980===e?"menu_settings.b73d1f0a03f70163e02d.js":96816===e?"web-audio-lyrics-modal.5b786d2492e85e4a335f.js":9375===e?"voice_message_player.f0c31b4a3dc08de145c9.js":28762===e?"speech.be0c329a1eff7c81577d.js":57468===e?"SilentModeForms.6cf18c53f58f775934b3.js":28872===e?"feed-client-nav-skeleton.a30e12215b3ca16e7fe2.js":35953===e?"feed-client-nav-async-right-block.d1fcdf48d7fa743442bf.js":59240===e?"performance-stats.59c5c96e7372abb54c8c.js":38288===e?"lottie.5e4758c39f106eab733a.js":void 0,s.miniCssF=e=>e+"."+{25394:"6af57e1b0cf5a74f9a87",57468:"35be3dfa1e90e3cdd0a1",75980:"5bbee2c9f3e189193a73"}[e]+".css",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},s.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var a,i;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")=="vk:"+r){a=d;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack","vk:"+r),a.src=e),o[e]=[t];var f=(t,r)=>{a.onerror=a.onload=null,clearTimeout(u);var n=o[e];if(delete o[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(r))),t)return t(r)},u=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),i&&document.head.appendChild(a)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="/dist/",n=e=>new Promise(((t,r)=>{var o=s.miniCssF(e),n=s.p+o;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=(i=r[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var i;if((n=(i=a[o]).getAttribute("data-href"))===e||n===t)return i}})(o,n))return t();((e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,n.parentNode.removeChild(n),o(s)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),a={88987:0},s.f.miniCss=(e,t)=>{a[e]?t.push(a[e]):0!==a[e]&&{25394:1,57468:1,75980:1}[e]&&t.push(a[e]=n(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))},(()=>{var e={88987:0};s.f.j=(t,r)=>{var o=s.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=s.p+s.u(t),i=new Error;s.l(a,(r=>{if(s.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[a,i,l]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var d=l(s)}for(t&&t(r);c<a.length;c++)n=a[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},r=self.webpackChunkvk=self.webpackChunkvk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=s.O(void 0,[75514,98066,56990,24509,76400,40885,68592],(()=>s(780402)));c=s.O(c)})();