﻿(()=>{"use strict";var e,t,s,a,n,r,o={544176:(e,t,s)=>{var a,n,r,o=s(11010),i=s(434788),l=s(22412),d=s(970978),c=s(514986),u=s(29271),p=s(849222),g=s(766698),h=s(162532),_=s(701822),f=s(599809),m=s(888385),y=s(839470),v=s(723062),b=s(184016),C=s(442426),w=s(640467);(null==(n=window.vk)||null==(a=n.pe)?void 0:a.static_manager_dynamic_imports)&&(null==(r=window.vk)?void 0:r.stDomain)&&(s.p=window.vk.stDomain+"/dist/");const k="SharedWorker"in window&&void 0!==window.SharedWorker,A=(0,y.partConfigEnabled)("calls_forbid_web_calls_for_ads_account"),S=k&&(0,y.partConfigEnabled)("web_calls_queue_subscribe"),M=(0,y.partConfigEnabled)("web_calls_queue_subscribe_logger"),T=(0,y.partConfigEnabled)("web_calls_check_incoming_call_on_start");function P(){return(P=(0,o._)((function*(){var e;if(null==(e=window.Calls)?void 0:e.initialized)return;if(A||!v.Ranges.isUserId(window.vk.id))return;(0,m.setApiWrappers)((()=>f.api),(()=>f.api));const t=(0,_.fetchCallToken)(window.vk.id,window.vk.isCallsDevEnv),{callsCredentials:s,toggles:a,settings:n}=yield(0,h.executeGetCallsSettings)(window.vk.id),r={callsCredentials:s,sdkToken:yield t,toggles:(0,i._)({},a,{videoSlotsCount:n.video_slots_count,browserWarnings:n.browser_warnings,customScreenSharePacketSize:n.custom_screen_share_packet_size,customScreenShareCongestionControlThreshold:n.custom_screen_share_congestion_control_threshold,enableQueueManager:S,noiseReductionMode:n.noise_reduction_mode,showFeedbackScreen:!0,enableVideoSlots:!0,enableScreenTrack:!0,enableProducerScreenTrack:!0,desktopAppNotification:!0,enableCustomScreenSharePacketSize:!0,enableSpsPpsIdrInKeyframe:!0,screenShareCongestionControl:!0,enableVmoji:!0}),onError:({msg:e})=>(e&&(0,d.logError)(e),e&&(0,c.showFastBox)(u.getLang("global_error"),e)),onBeforeCallStart:()=>{window.Notifier.pauseGlobalMedia()},onAfterCallFinish:()=>{window.Notifier.resumeGlobalMedia()},tabIsMaster:()=>window.Notifier.tabIsMaster(),isFriend:e=>{var t,s;return!!(null==(s=window.curFastChat)||null==(t=s.friends)?void 0:t[e+"_"])},removeLeftMenuItemBadge:()=>{g.leftMenu.removeBadge(p.PAGE_ID_CALLS)}};var y;window.browser.mozilla?(window.Calls=null!=(y=window.Calls)?y:{},window.Calls.initArgs=r,window.requestIdleCallback((()=>{I().then((()=>{var e,t;null==(t=window.Calls)||null==(e=t.init)||e.call(t,r)}))}))):function(e){var t;if(!1===(null==(t=window.Calls)?void 0:t.initialized))return void window.Calls.init(e);const s={},a=t=>(...s)=>I().then((()=>{var t,s;return null==(s=window.Calls)||null==(t=s.init)?void 0:t.call(s,e)})).then((()=>{var e,a;return null==(a=window.Calls)||null==(e=a[t])?void 0:e.call(a,...s)}));if(s.call=a("call"),s.startGroupCall=a("startGroupCall"),s.startCall=a("startCall"),s.acceptCall=a("acceptCall"),s.joinCallByLink=a("joinCallByLink"),s.showJoinPopup=a("showJoinPopup"),s.showCallByNamePopup=a("showCallByNamePopup"),s.showCreateCallByLinkPopup=a("showCreateCallByLinkPopup"),s.showPlanCalendarEventPopup=a("showPlanCalendarEventPopup"),s.showStartCallModal=a("showStartCallModal"),s.showHistoryScreen=a("showHistoryScreen"),s.joinOrStartCallModal=a("joinOrStartCallModal"),s.initArgs=e,window.Calls=s,S)return;const n=window.Notifier.getLpInstance(),r=(...t)=>{var s;(null==(s=window.Calls)?void 0:s.initialized)?n.offData(r):t.forEach((t=>{if(t.type===l.INCOMING_CALL)return n.offData(r),I().then((()=>{var t;return null==(t=window.Calls)?void 0:t.init(e)})).then((()=>{var e;return null==(e=window.Calls)?void 0:e.handleEvent(t)}))}))};if(!n)return;n.onData(r)}(r);if(!S)return;const k=(0,o._)((function*(){var e,t;void 0===(null==(e=window.Calls)?void 0:e.initialized)&&(yield I()),yield null==(t=window.Calls)?void 0:t.init(r)}));if(S){const e=new w.CredentialCache(window.vk.id);if(T&&null===e.get()){const e=yield(0,h.getInboundCall)();var P;if(e)yield k(),null==(P=window.Calls)||P.handleQueueEvent({entity_type:C.ECallLongpollEntityType.Calls,entity_id:1,data:{type:C.ECallLongpollType.IncomingCall,value:e}})}(0,b.startQueueManager)({id:window.vk.id,loadModule:k,credentialCache:e,debug:M})}}))).apply(this,arguments)}function I(){return new Promise((e=>{window.stManager.add([window.jsc("web/calls.js"),"calls.css"],e)}))}(function(){return P.apply(this,arguments)})().catch(console.error);try{window.stManager.done(window.jsc("web/calls_lazy_module.js"))}catch(e){}},888385:(e,t,s)=>{s.d(t,{createApi:()=>l,getApiWrapper:()=>i,setApiWrappers:()=>o});var a=s(464380);let n=null,r=null;const o=(e,t)=>{n=e,r=t},i=(e=!0)=>e?n:r;function l(e,t=!0){return(s,n,r)=>((0,a.debugMessage)(a.DebugMessageType.DEBUG,{type:"request",method:e}),i(t)()(e,s,r,n).then((t=>((0,a.debugMessage)(a.DebugMessageType.DEBUG,{type:"response",method:e,data:t}),t))))}},455118:(e,t,s)=>{s.d(t,{get:()=>n});var a=s(659397);const n=(e,t)=>{if(!(0,a.isString)(e)&&!(0,a.isArray)(e))return;const s=(0,a.isArray)(e)?e:e.split(".").filter(Boolean),n=s.length-1;let r=t;for(let e=0;e<s.length;e+=1){if(!(0,a.isObjectLike)(r))return;const t=r[s[e]];if(!t)return;if(e===n)return t;r=t}}},465768:(e,t,s)=>{s.d(t,{handlePromiseError:()=>n});var a=s(464380);const n=(...e)=>{(0,a.debugMessage)(a.DebugMessageType.ERROR,...e)}},162532:(e,t,s)=>{s.d(t,{baseUserFields:()=>_,callsCheckParticipantName:()=>Ie,callsDeleteParticipantName:()=>Pe,callsEditParticipantName:()=>Te,callsGetJoinHistory:()=>Ce,callsGetParticipants:()=>we,callsGetReactions:()=>be,callsGetUserSettings:()=>ke,callsSetUserSettings:()=>Ae,callsStart:()=>oe,deleteAsrTranscriptions:()=>Be,executeGetCallsSettings:()=>Le,fetchCallsAnonymQueue:()=>Ee,fetchCallsQueue:()=>z,fetchUrl:()=>K,forceCallFinish:()=>P,friendsSearch:()=>ae,getAnonymCallToken:()=>E,getAppLaunchParams:()=>We,getAsrTranscriptions:()=>Ue,getCallAuthToken:()=>A,getCallParticipants:()=>D,getCallParticipantsApiCall:()=>Q,getCallUrlLink:()=>S,getCallsConversationsByCall:()=>Re,getCallsHistory:()=>Y,getConversationsByCall:()=>I,getCurrentCalls:()=>V,getFriends:()=>se,getGroupById:()=>B,getGroupMembers:()=>F,getGroupsForCall:()=>x,getGroupsForStreaming:()=>$,getInboundCall:()=>xe,getSearchVideo:()=>ge,getSettings:()=>Ge,getUpcomingLives:()=>G,getVideos:()=>j,getWatchTogetherOwnerVideos:()=>pe,getWatchTogetherRecommended:()=>ue,loadCallPeers:()=>y,loadCallPeersByPeerIds:()=>m,loadChatMembers:()=>k,loadFriends:()=>T,loadPrivacySettings:()=>R,loadUsers:()=>N,logCallReceived:()=>L,makeCallsAnonymQueueUrl:()=>De,makeCallsQueueUrl:()=>J,messagesDeleteScheduledCall:()=>de,messagesEditCall:()=>ce,messagesGetCallPreview:()=>M,messagesGetConversations:()=>ne,messagesGetScheduledCalls:()=>le,messagesSearch:()=>ie,messagesSend:()=>re,photosDelete:()=>te,photosGetAllImages:()=>X,photosSaveBackgroundPhoto:()=>ee,queueSubscribe:()=>H,retryLoadCallPeers:()=>w,searchCallParticipants:()=>ve,searchGroupMembers:()=>W,sendVideoEdit:()=>O,videoDelete:()=>ye,videoEditStreaming:()=>me,videoGet:()=>he,videoGetThumbsUploadServer:()=>_e,videoLiveHeartbeat:()=>q,videoStartStreaming:()=>fe,voiceRoomsGetParticipants:()=>U});var a=s(11010),n=s(434788),r=s(393356),o=s(878198),i=s(888385),l=s(464380),d=s(455118),c=s(465768),u=(s(599809),s(654198)),p=s(723062),g=s(455319);const h=["photo_200","sex","screen_name","first_name_gen","is_nft","animated_avatar","custom_names_for_calls"].join(","),_=["photo_200","sex","screen_name","first_name_gen","is_nft","animated_avatar","custom_names_for_calls"].join(","),f=["name","photo_100","photo_200","can_upload_video","custom_names_for_calls"].join(","),m=e=>(0,i.createApi)("messages.getConversationsById")({peer_ids:e.join(","),extended:1,fields:_}),y=e=>(0,i.createApi)("messages.getConversationsById")({peer_ids:e,extended:1,fields:_});let v=0,b=[],C=[];const w=(0,o.exponentialRetry)(((e,t=50)=>(b.push(e),new Promise((e=>{C.push(e),v||(v=window.setTimeout((()=>{m(b).then((e=>{C.forEach((t=>{t(e)})),C=[]})).catch(c.handlePromiseError),b=[],v=0}),t))}))))),k=e=>(0,i.createApi)("messages.getConversationMembers")({peer_id:e,fields:h.concat(",can_call"),extended:1}),A=(e,t=0)=>{(0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"request",method:"messages.getCallToken",data:{isDev:e,groupId:t}});const s={env:e?"development":"production"};return 0!==t&&(s.group_id=t),(0,i.createApi)("messages.getCallToken")(s,{},{version:r.API_VERSION}).then((e=>((0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"response",method:"messages.getCallToken",data:e}),e)))},S=(e,t,s=0)=>{const a={call_id:e,invalidate:t?1:0};return 0!==s&&(a.group_id=s),(0,i.createApi)("messages.getJoinLink")(a)},M=(e,t=!1,s={})=>((0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"request",method:"messages.getCallPreview",data:{link:e,fields:_,device_id:"anyId"}}),(0,i.getApiWrapper)(!t)()("messages.getCallPreview",{link:e,fields:_,device_id:"anyId",extended:1},s).then((e=>((0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"response",method:"messages.getCallPreview",data:e}),e)))),T=()=>(0,i.createApi)("friends.get")({fields:h.concat(",can_call"),filters:"without_dead",order:"hints"}),P=e=>(0,i.createApi)("messages.forceCallFinish")({call_id:e}),I=(e,t={})=>(0,i.createApi)("messages.getConversationsByCall")((0,n._)({call_ids:e,fields:_},t)),E=(e,t,s,a,n)=>{const r={link:e,user_id:t,name:s,secret:a,device_id:"anyId"};return(0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"request",method:"messages.getAnonymCallToken",data:r}),(0,i.getApiWrapper)(!1)()("messages.getAnonymCallToken",r,n).then((e=>((0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"response",method:"messages.getAnonymCallToken",data:e}),e)))},D=(e,t,s,a=!1,n)=>{const d=[];let c=Array.from(new Set(t));for(;c.length;)c.length>1e3?(d.push(c.slice(0,1e3)),c=c.slice(1e3)):(d.push(c),c=[]);const u=(0,o.exponentialRetry)((function(t,n){const o=a?{call_id:e,peer_ids:n.join(","),fields:_,device_id:"anyId",secret:t.secret,user_id:s}:{call_id:e,peer_ids:n.join(","),fields:_};return(0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"request",method:"messages.getCallParticipants",data:o}),(0,i.getApiWrapper)(!a)()("messages.getCallParticipants",o,{version:r.API_VERSION}).then((e=>{const s={count:e.count+t.count,secret:e.secret,profiles:(t.profiles||[]).concat(e.profiles||[]),anonyms:(t.anonyms||[]).concat(e.anonyms||[]),groups:(t.groups||[]).concat(e.groups||[])};return(0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"response",method:"messages.getCallParticipants",data:s}),s}))})),p=Promise.resolve({secret:n,count:0});return d.reduce(((e,t)=>e.then((e=>u(e,t)))),p)},U=(e,t=!1,s,a)=>{const r=t?{device_id:"anyId",secret:a,user_id:s}:{};return(0,i.createApi)("voicerooms.getParticipants")((0,n._)({},r,e,{count:50}))},B=e=>(0,i.createApi)("groups.getById")({group_ids:String(e),fields:f},{},{version:r.API_VERSION}),G=e=>(0,i.createApi)("video.getUpcomingLives")({owner_ids:e}),j=(e,t,s)=>(0,i.createApi)("video.get")({owner_id:e,videos:t,need_privacy:s}),O=(e,t,s,a,n)=>(0,i.createApi)("video.edit")({owner_id:e,video_id:t,name:s,desc:a,privacy_view:n}),N=e=>(0,i.createApi)("users.get")(e),L=e=>(0,i.createApi)("messages.callReceived")({call_id:e}),q=e=>(0,i.createApi)("video.liveHeartbeat")(e),R=e=>(0,i.createApi)("account.getPrivacySettings")(e),x=()=>(0,i.createApi)("messages.getGroupsForCall")({count:200}),F=(e,t=0,s=10)=>{let a={fields:h.concat(",can_call_from_group"),group_id:String(e),offset:t,count:s,sort:"time_asc"};return(0,i.createApi)("groups.getMembers")(a)},W=(e,t="")=>(0,i.createApi)("users.search")({fields:h.concat(",can_call_from_group"),group_id:e,q:t});function Q(e,t,s=!1,a="",o=0){let d={call_id:e,peer_ids:t.join(","),fields:_};return s&&(d=(0,n._)({},d,{device_id:"anyId",secret:a,user_id:o})),(0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"request",method:"messages.getCallParticipants",data:d}),(0,i.getApiWrapper)(!s)()("messages.getCallParticipants",d,{version:r.API_VERSION}).then((e=>((0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"response",method:"messages.getCallParticipant",response:e}),e)))}function $(){return(0,i.createApi)("video.getGroupsForStreaming")({})}function V(e=h){return(0,i.createApi)("messages.getCurrentCalls")({fields:e})}function H(e){return(0,i.createApi)("queue.subscribe")(e,{},{grouping:!1})}function z(e){return H({queue_ids:`calls_${e}`}).then((t=>{const{base_url:s,queues:a}=t,{key:n,timestamp:r}=a[0];return{baseUrl:s,key:n,timestamp:r,userId:e}}))}function J(e){const{baseUrl:t,key:s,userId:a,timestamp:n}=e;return`${t}?act=a_check&key=${s}&id=${a}&ts=${n}&wait=20`}function K(e){return fetch(e).then((e=>e.json()))}function Y(e=5,t=0,s=0,a="all"){const n={count:e,start_from:t,fields:h+",last_name_gen",filter:a};return 0!==s&&(n.group_id=s),(0,i.createApi)("messages.getCallHistory")(n)}const X=(e={})=>{const t=(0,i.getApiWrapper)(!0)();return(0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"request",method:"photos.get",params:e}),t("photos.get",(0,n._)({album_id:"-166"},e)).then((e=>((0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"response",method:"photos.get",response:e}),e)))},Z=e=>["error_msg","error_code"].some((t=>(0,d.get)(t,e)))?Promise.reject(e):Promise.resolve(e),ee=e=>{const t=(0,i.getApiWrapper)(!0)(),s=(0,i.getApiWrapper)(!0)();return(0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"request",method:"photos.getCallBackgroundsPhotoUploadServer"}),t("photos.getCallBackgroundsPhotoUploadServer",{}).then(Z).then((t=>{(0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"response",method:"photos.getCallBackgroundsPhotoUploadServer",response:t});const s=new FormData;return s.append("file1",e,e.name),(0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"request",method:`[photoUploadUrl] ${t.upload_url}`,formData:s}),fetch(t.upload_url,{method:"POST",body:s}).then((e=>e.json())).then(Z)})).then((e=>((0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"response",method:"[photoUploadUrl]",json:e}),(0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"request",method:"photos.saveBackgroundPhoto",json:e}),s("photos.saveBackgroundPhoto",{response_json:JSON.stringify(e)})))).then(Z)},te=e=>{const t=(0,i.getApiWrapper)(!0)();return(0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"request",method:"photos.delete",params:e}),t("photos.delete",e).then(Z)},se=(e=10,t=0,s="hints")=>{const a={fields:h.concat(",can_call,online_info"),count:e,offset:t,order:s,filters:"without_dead"};return(0,i.createApi)("friends.get")(a)},ae=(e,t="",s=10,a=0)=>(0,i.createApi)("friends.search")({user_id:e,q:t,fields:h.concat(",can_call,online_info,photo_50"),count:s,offset:a}),ne=(e={extended:1,count:30})=>(0,i.createApi)("messages.getConversations")(e),re=(e={})=>(0,i.createApi)("messages.send")(e),oe=(0,i.createApi)("calls.start"),ie=(e={})=>{const t=(0,n._)({count:20,extended:1},e);return(0,i.createApi)("messages.search")(t)},le=(e={})=>(0,i.createApi)("messages.getScheduledCalls")(e),de=e=>(0,i.createApi)("messages.deleteScheduledCall")(e),ce=e=>(0,i.createApi)("messages.editCall")(e),ue=(e={},t={})=>(0,i.createApi)("video.getWatchTogetherRecommendedVideos")(e,t).then(Z),pe=(e={},t={})=>(0,i.createApi)("video.getWatchTogetherOwnerVideos")(e,t).then(Z),ge=(e={},t)=>(e.united_video_only=1,e.extended=1,(0,i.createApi)("video.search")(e,t,{version:"5.167"}).then(Z)),he=(e,t)=>{const s=(0,n._)({extended:1},e);return(0,i.createApi)("video.get")(s,t)},_e=(0,i.createApi)("video.getThumbsUploadServer"),fe=(0,i.createApi)("video.startStreaming"),me=(0,i.createApi)("video.editStreaming"),ye=(0,i.createApi)("video.delete"),ve=(e,{userId:t,isAnon:s=!1,secret:a,search:o},d)=>{const c="messages.getCallParticipants",u={call_id:e,fields:_,search:o},p=s?(0,n._)({},u,{device_id:"anyId",secret:a,user_id:t}):u;return(0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"request",method:c,params:p}),(0,i.getApiWrapper)(!s)()(c,p,{version:r.API_VERSION},d).then((e=>((0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"response",method:c,data:e}),{count:e.count,secret:e.secret,profiles:e.profiles||[],anonyms:e.anonyms||[],groups:e.groups||[]})))},be=(e={},t)=>(0,i.createApi)("calls.getReactions")(e,t),Ce=(e,t)=>(0,i.createApi)("calls.getCallJoinHistory")(e,t).then((e=>e.csv)),we=(e,t)=>(e.fields=_,(0,i.createApi)("calls.getParticipants")(e,t)),ke=()=>Se("calls.getUserSettings",{},{maxRetries:0}),Ae=e=>Se("calls.setUserSettings",e);function Se(e,t,s,a){return Me.apply(this,arguments)}function Me(){return(Me=(0,a._)((function*(e,t,s,a){(0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"request",method:e,params:t});const n=(0,i.getApiWrapper)(),r=yield n()(e,t,s,a);return(0,l.debugMessage)(l.DebugMessageType.DEBUG,{type:"response",method:e,data:r}),r}))).apply(this,arguments)}const Te=e=>(0,i.createApi)("calls.editParticipantName")(e),Pe=e=>(0,i.createApi)("calls.deleteParticipantName")(e),Ie=e=>(0,i.createApi)("calls.checkParticipantName")(e);function Ee(e,t,s){const a={anonym_auth_user_id:e,secret:t,device_id:s};return(0,i.createApi)("calls.subscribeToQueue")(a)}function De(e,t){const{base_url:s,queues:a}=e.queue_subscription_info,{key:n,timestamp:r}=a[0];return`${s}?act=a_check&key=${n}&id=${t}&ts=${r}&wait=20`}const Ue=(0,i.createApi)("calls.getAsrTranscriptions"),Be=((0,i.createApi)("calls.editAsrTranscription"),(0,i.createApi)("calls.deleteAsrTranscriptions"));function Ge(){return je.apply(this,arguments)}function je(){return(je=(0,a._)((function*(){const e=yield Se("calls.getSettings",{}),t=Object.fromEntries(e.toggles.map((e=>[e.name,e.enabled])));return(0,n._)({},e,{toggles:t})}))).apply(this,arguments)}function Oe(){return(Oe=(0,a._)((function*(e){return{user:{firstName:"",lastName:"",sex:0,link:"",id:e,peerId:(0,g.vkIdToPeerId)(e),photo:"",photo_100:"",isClosed:!1,name:"",shortName:""},privacySettings:{callsIp:"friends"},params:yield Ge()}}))).apply(this,arguments)}function Ne(){return(Ne=(0,a._)((function*(e){const t="calls_ip",s=`\n  var settings = fork(API.calls.getSettings());\n  var privacy = fork(\n    API.account.getPrivacySettings({\n      privacy_keys: '${t}',\n      need_default: 0,\n    })\n  );\nreturn [\n  wait(settings),\n  wait(privacy),\n  API.users.get({\n    user_ids: ${String(e)},\n    fields: '${["animated_avatar","is_nft","photo_100","photo_200","maiden_name","sex","screen_name","domain"].join(",")}',\n  }),\n];\n  `,[a,r,o]=yield Se("execute",{code:s}),[i]=o;var l,d,c,p;const h={firstName:null!=(l=i.first_name)?l:"",lastName:null!=(d=i.last_name)?d:"",sex:null!=(c=i.sex)?c:0,link:(0,u.getOwnerHref)(i),id:i.id,peerId:(0,g.vkIdToPeerId)(i.id),photo:i.photo_200,photo_100:i.photo_100,isClosed:null!=(p=i.is_closed)&&p,name:(0,u.getOwnerFullName)(i),shortName:(0,u.getOwnerShortName)(i),animated_avatar:i.animated_avatar},_=r.settings.find((e=>e.key===t)),f={callsIp:"friends"};_&&"category"in _.value&&(f.callsIp=_.value.category);const m=Object.fromEntries(a.toggles.map((e=>[e.name,e.enabled])));return{user:h,privacySettings:f,params:(0,n._)({},a,{toggles:m})}}))).apply(this,arguments)}function Le(e){return qe.apply(this,arguments)}function qe(){return qe=(0,a._)((function*(e){const t=!p.Ranges.isUserId(e),{user:s,privacySettings:a,params:n}=t?yield function(e){return Oe.apply(this,arguments)}(e):yield function(e){return Ne.apply(this,arguments)}(e),{toggles:r,settings:o}=n;return{settings:o,toggles:r,callsCredentials:{key:o.public_key,is_dev:o.is_dev,privacySettings:a,ip_setting_enabled:o.ip_setting_enabled,me:s}}})),qe.apply(this,arguments)}function Re(e,t){const s={call_id:e};return t&&(s.hall_id=t),Se("calls.getConversationByCall",s)}function xe(){return Fe.apply(this,arguments)}function Fe(){return(Fe=(0,a._)((function*(){const e=yield Se("messages.getInboundCalls",{});var t;const[s]=null!=(t=e.items)?t:[];return null!=s?s:null}))).apply(this,arguments)}function We(e){return Qe.apply(this,arguments)}function Qe(){return(Qe=(0,a._)((function*(e){return Se("apps.getAppLaunchParams",{mini_app_id:e,referer:"other"})}))).apply(this,arguments)}},701822:(e,t,s)=>{s.d(t,{fetchCallToken:()=>o});var a=s(11010),n=s(204651);let r;function o(e){return i.apply(this,arguments)}function i(){return(i=(0,a._)((function*(e,t=!1){if(r)return r;const s=(0,n.getLocalToken)(e);return s?(r=Promise.resolve(s),r):(r=(0,n.fetchToken)(t),r.then((t=>(0,n.saveLocalToken)(t,e))),r)}))).apply(this,arguments)}},442426:(e,t,s)=>{var a,n;s.d(t,{ECallLongpollEntityType:()=>a,ECallLongpollType:()=>n}),function(e){e.Calls="calls"}(a||(a={})),function(e){e.ScheduledCallsUpdate="scheduled_calls_update",e.CurrentCallsUpdate="current_calls_update",e.ChatInfoUpdated="chat_info_updated",e.CallAccepted="call_accepted",e.IncomingCall="incoming_call",e.CallFinished="call_finished",e.ParticipantNameChanged="participant_name_changed"}(n||(n={}))},640467:(e,t,s)=>{s.d(t,{CredentialCache:()=>r});var a=s(434788),n=s(659397);class r{get cacheInMs(){return 60*this.CACHE_LIFE_IN_MINUTES*1e3}isActualTs(e){return null!==e&&e+this.cacheInMs>Date.now()}getActualCredentialsFromLS(){try{const e=n.localStorage.getItem(this.key);if(!e)return[];const t=JSON.parse(e);if("data"in t&&"lastUpdate"in t&&this.isActualTs(t.lastUpdate))return[t.data,t.lastUpdate]}catch(e){}return[]}put(e){this.data=e,this.lastUpdate=Date.now(),n.localStorage.setItem(this.key,JSON.stringify({data:e,lastUpdate:this.lastUpdate}))}update(e){this.data&&(this.data=(0,a._)({},this.data,{ts:e}),this.lastUpdate=Date.now(),n.localStorage.setItem(this.key,JSON.stringify({data:this.data,lastUpdate:this.lastUpdate})))}get(){if(null===this.data){const[e,t]=this.getActualCredentialsFromLS();if(e&&t)return this.data=e,this.lastUpdate=t,this.data}return this.data&&!this.isActualTs(this.lastUpdate)&&this.drop(),this.data}drop(){this.data=null,this.lastUpdate=null,n.localStorage.removeItem(this.key)}constructor(e){this.data=null,this.lastUpdate=null,this.CACHE_LIFE_IN_MINUTES=5,this.id=e,this.key=`queue_credential_calls_cache_${e}`;const[t,s]=this.getActualCredentialsFromLS();t&&s&&(this.data=t,this.lastUpdate=s)}}},184016:(e,t,s)=>{s.d(t,{startQueueManager:()=>d});var a=s(11010),n=s(162532),r=s(167096),o=s(442426);const i=6287487,l=1;function d(e){return c.apply(this,arguments)}function c(){return(c=(0,a._)((function*({id:e,loadModule:t,credentialCache:s,debug:d}){const c=()=>{const u=new r.QueueManager;u.toggleDebug(d);const p=`calls_${e}_${i}_1`,g=(0,a._)((function*(){const t=s.get();if(t)return t;const a=yield(0,n.queueSubscribe)({queue_ids:p}),{base_url:r,queues:o}=a,{key:i,timestamp:l}=o[0],d={id:e,key:i,ts:l,url:r};return s.put(d),d}));u.addQueue(p,g),u.subscribe((0,a._)((function*(e,a){var n,r;a.failed&&a.failed!==l?s.drop():(s.update(Number(a.ts)),a.failed!==l&&(!(null==(n=window.Calls)?void 0:n.handleQueueEvent)&&a.events.some((e=>e.data.type===o.ECallLongpollType.IncomingCall))&&(yield t()),(null==(r=window.Calls)?void 0:r.handleQueueEvent)&&a.events.forEach((e=>{var t;null==(t=window.Calls)||t.handleQueueEvent(e)}))))})),(()=>{d&&console.log("reset"),u.destroy(),c()}))};c()}))).apply(this,arguments)}},204651:(e,t,s)=>{s.d(t,{fetchToken:()=>d,getLocalToken:()=>l,saveLocalToken:()=>i});var a=s(11010),n=s(659397),r=s(162532);const o=e=>"calls_token"+(e?`_${e}`:"");function i(e,t){n.localStorage.setItem(o(t),e)}function l(e){return n.localStorage.getItem(o(e))}function d(e){return c.apply(this,arguments)}function c(){return(c=(0,a._)((function*(e){const{token:t}=yield(0,r.getCallAuthToken)(e);return t}))).apply(this,arguments)}},167096:(e,t,s)=>{s.d(t,{QueueManager:()=>n});var a=s(373472);class n{addQueue(e,t){var s;return null==(s=this._transport)||s.addQueue(e,t),this}removeQueue(e){var t;return null==(t=this._transport)||t.removeQueue(e),this}subscribe(e,t){var s;return null==(s=this._transport)||s.subscribe(e,t),this}destroy(){var e;null==(e=this._transport)||e.destroy()}toggleDebug(e){var t;null==(t=this._transport)||t.toggleDebug(e)}constructor({debug:e}={}){this._transport=null,"undefined"!=typeof SharedWorker?(this._transport=new a.SharedWorkerTransport,this.toggleDebug(e)):console.warn("Shared Worker not supported")}}},373472:(e,t,s)=>{s.d(t,{SharedWorkerTransport:()=>o});var a=s(11010),n=s(172045),r=s(321609);class o{_postMessage(e){this._worker.port.postMessage(e)}_handleMessage(e){switch(this._isDebug&&"ping"!==e.data.type&&console.debug("Message received from worker\n",e.data),e.data.type){case"ping":e.data.payload===this._clientId&&(this._postMessage({type:"pong"}),this._checkKeepAlivePortInterval());break;case"longpoll-event":var t;if(e.data.payload.clientId===this._clientId)null==(t=this._onMessage)||t.call(this,e.data.payload.queueId,e.data.payload.data);break;case"request-credentials":e.data.payload.clientId===this._clientId&&this._requestCredentials(e.data.payload.queueId)}}_checkKeepAlivePortInterval(){this._keepAliveTimeout&&clearTimeout(this._keepAliveTimeout),this._keepAliveTimeout=setTimeout((()=>{var e;return null==(e=this._onReset)?void 0:e.call(this)}),r.TO_PORT_PING_INTERVAL+r.TO_PORT_PING_INTERVAL/2)}_setBeforeUnloadListener(){const e=()=>this.destroy();return window.addEventListener("beforeunload",e),e}_requestCredentials(e){var t=this;return(0,a._)((function*(){const s=t._credentialsGetters.get(e);if(s&&!t._credentialsProcessing.has(e)){t._credentialsProcessing.add(e);try{const a=yield s();t._postMessage({type:"set-credentials",payload:{queueId:e,params:a}})}catch(e){console.error("[SharedWorkerTransport][_requestCredentials]",e)}finally{t._credentialsProcessing.delete(e)}}}))()}destroy(){this._postMessage({type:"disconnect",payload:this._clientId}),this._worker.port.close(),window.removeEventListener("beforeunload",this._onBeforeUnloadLink),this._onMessage=null,this._onReset=null}addQueue(e,t){this._credentialsGetters.set(e,t),this._postMessage({type:"add-queue",payload:{queueId:e}})}subscribe(e,t){this._onMessage=e,this._onReset=t}removeQueue(e){this._credentialsGetters.delete(e),this._postMessage({type:"remove-queue",payload:{queueId:e}})}toggleDebug(e){const t=Boolean(e);this._isDebug=t,this._postMessage({type:"debug",payload:t})}constructor(){this._onReset=null,this._onMessage=null,this._keepAliveTimeout=null,this._isDebug=!1,this._clientId=(0,n.default)(),this._worker=new SharedWorker(new URL(self.location.origin+"/dist/"+s.u(71237),s.b)),this._onBeforeUnloadLink=this._setBeforeUnloadListener(),this._credentialsGetters=new Map,this._credentialsProcessing=new Set,this._worker.onerror=e=>console.error(e),this._worker.port.onmessage=e=>this._handleMessage(e),this._postMessage({type:"connect",payload:this._clientId}),this._worker.port.start(),this._checkKeepAlivePortInterval()}}},321609:(e,t,s)=>{s.d(t,{TO_PORT_PING_INTERVAL:()=>a,TO_PORT_PING_REPLY_WAIT:()=>n});const a=1e4,n=1e3}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var s=i[e]={id:e,loaded:!1,exports:{}};return o[e].call(s.exports,s,s.exports,l),s.loaded=!0,s.exports}l.m=o,l.amdO={},e=[],l.O=(t,s,a,n)=>{if(!s){var r=1/0;for(c=0;c<e.length;c++){for(var[s,a,n]=e[c],o=!0,i=0;i<s.length;i++)(!1&n||r>=n)&&Object.keys(l.O).every((e=>l.O[e](s[i])))?s.splice(i--,1):(o=!1,n<r&&(r=n));if(o){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,a,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},s=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var n=Object.create(null);l.r(n);var r={};t=t||[null,s({}),s([]),s(s)];for(var o=2&a&&e;"object"==typeof o&&!~t.indexOf(o);o=s(o))Object.getOwnPropertyNames(o).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,l.d(n,r),n},l.d=(e,t)=>{for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,s)=>(l.f[s](e,t),t)),[])),l.u=e=>25394===e?"AudioLongtapModal.98b6df61d646414354a3.js":24817===e?"hls.7bfefe299fa92971b99a.js":75980===e?"menu_settings.b73d1f0a03f70163e02d.js":96816===e?"web-audio-lyrics-modal.5b786d2492e85e4a335f.js":9375===e?"voice_message_player.f0c31b4a3dc08de145c9.js":28762===e?"speech.be0c329a1eff7c81577d.js":57468===e?"SilentModeForms.6cf18c53f58f775934b3.js":28872===e?"feed-client-nav-skeleton.a30e12215b3ca16e7fe2.js":35953===e?"feed-client-nav-async-right-block.d1fcdf48d7fa743442bf.js":59240===e?"performance-stats.59c5c96e7372abb54c8c.js":71237===e?e+".f2db15a0e91e2638b0a9.js":38288===e?"lottie.5e4758c39f106eab733a.js":void 0,l.miniCssF=e=>e+"."+{25394:"6af57e1b0cf5a74f9a87",57468:"35be3dfa1e90e3cdd0a1",75980:"5bbee2c9f3e189193a73"}[e]+".css",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},l.l=(e,t,s,n)=>{if(a[e])a[e].push(t);else{var r,o;if(void 0!==s)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var c=i[d];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")=="vk:"+s){r=c;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,l.nc&&r.setAttribute("nonce",l.nc),r.setAttribute("data-webpack","vk:"+s),r.src=e),a[e]=[t];var u=(t,s)=>{r.onerror=r.onload=null,clearTimeout(p);var n=a[e];if(delete a[e],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((e=>e(s))),t)return t(s)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="/dist/",n=e=>new Promise(((t,s)=>{var a=l.miniCssF(e),n=l.p+a;if(((e,t)=>{for(var s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var n=(o=s[a]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){var o;if((n=(o=r[a]).getAttribute("data-href"))===e||n===t)return o}})(a,n))return t();((e,t,s,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=r=>{if(n.onerror=n.onload=null,"load"===r.type)s();else{var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=i,n.parentNode.removeChild(n),a(l)}},n.href=t,document.head.appendChild(n)})(e,n,t,s)})),r={21436:0},l.f.miniCss=(e,t)=>{r[e]?t.push(r[e]):0!==r[e]&&{25394:1,57468:1,75980:1}[e]&&t.push(r[e]=n(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))},(()=>{l.b=document.baseURI||self.location.href;var e={21436:0};l.f.j=(t,s)=>{var a=l.o(e,t)?e[t]:void 0;if(0!==a)if(a)s.push(a[2]);else{var n=new Promise(((s,n)=>a=e[t]=[s,n]));s.push(a[2]=n);var r=l.p+l.u(t),o=new Error;l.l(r,(s=>{if(l.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,a[1](o)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,s)=>{var a,n,[r,o,i]=s,d=0;if(r.some((t=>0!==e[t]))){for(a in o)l.o(o,a)&&(l.m[a]=o[a]);if(i)var c=i(l)}for(t&&t(s);d<r.length;d++)n=r[d],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(c)},s=self.webpackChunkvk=self.webpackChunkvk||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var d=l.O(void 0,[75514,98066,56990,24509,76400,40885,76429,68592,56448,40144],(()=>l(544176)));d=l.O(d)})();