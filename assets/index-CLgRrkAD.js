(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function nS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var fd={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function iS(){if(Dv)return Po;Dv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Po.Fragment=e,Po.jsx=i,Po.jsxs=i,Po}var Uv;function aS(){return Uv||(Uv=1,fd.exports=iS()),fd.exports}var R=aS(),dd={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function rS(){if(Nv)return at;Nv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,A={};function y(P,ee,ye){this.props=P,this.context=ee,this.refs=A,this.updater=ye||S}y.prototype.isReactComponent={},y.prototype.setState=function(P,ee){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ee,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function v(){}v.prototype=y.prototype;function L(P,ee,ye){this.props=P,this.context=ee,this.refs=A,this.updater=ye||S}var U=L.prototype=new v;U.constructor=L,b(U,y.prototype),U.isPureReactComponent=!0;var D=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function F(P,ee,ye,be,J,me){return ye=me.ref,{$$typeof:r,type:P,key:ee,ref:ye!==void 0?ye:null,props:me}}function X(P,ee){return F(P.type,ee,void 0,void 0,void 0,P.props)}function N(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function C(P){var ee={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ye){return ee[ye]})}var V=/\/+/g;function ce(P,ee){return typeof P=="object"&&P!==null&&P.key!=null?C(""+P.key):ee.toString(36)}function le(){}function _e(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(le,le):(P.status="pending",P.then(function(ee){P.status==="pending"&&(P.status="fulfilled",P.value=ee)},function(ee){P.status==="pending"&&(P.status="rejected",P.reason=ee)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function de(P,ee,ye,be,J){var me=typeof P;(me==="undefined"||me==="boolean")&&(P=null);var Se=!1;if(P===null)Se=!0;else switch(me){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(P.$$typeof){case r:case e:Se=!0;break;case g:return Se=P._init,de(Se(P._payload),ee,ye,be,J)}}if(Se)return J=J(P),Se=be===""?"."+ce(P,0):be,D(J)?(ye="",Se!=null&&(ye=Se.replace(V,"$&/")+"/"),de(J,ee,ye,"",function(st){return st})):J!=null&&(N(J)&&(J=X(J,ye+(J.key==null||P&&P.key===J.key?"":(""+J.key).replace(V,"$&/")+"/")+Se)),ee.push(J)),1;Se=0;var Re=be===""?".":be+":";if(D(P))for(var Oe=0;Oe<P.length;Oe++)be=P[Oe],me=Re+ce(be,Oe),Se+=de(be,ee,ye,me,J);else if(Oe=x(P),typeof Oe=="function")for(P=Oe.call(P),Oe=0;!(be=P.next()).done;)be=be.value,me=Re+ce(be,Oe++),Se+=de(be,ee,ye,me,J);else if(me==="object"){if(typeof P.then=="function")return de(_e(P),ee,ye,be,J);throw ee=String(P),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Se}function I(P,ee,ye){if(P==null)return P;var be=[],J=0;return de(P,be,"","",function(me){return ee.call(ye,me,J++)}),be}function K(P){if(P._status===-1){var ee=P._result;ee=ee(),ee.then(function(ye){(P._status===0||P._status===-1)&&(P._status=1,P._result=ye)},function(ye){(P._status===0||P._status===-1)&&(P._status=2,P._result=ye)}),P._status===-1&&(P._status=0,P._result=ee)}if(P._status===1)return P._result.default;throw P._result}var q=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Me(){}return at.Children={map:I,forEach:function(P,ee,ye){I(P,function(){ee.apply(this,arguments)},ye)},count:function(P){var ee=0;return I(P,function(){ee++}),ee},toArray:function(P){return I(P,function(ee){return ee})||[]},only:function(P){if(!N(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},at.Component=y,at.Fragment=i,at.Profiler=l,at.PureComponent=L,at.StrictMode=s,at.Suspense=p,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,at.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},at.cache=function(P){return function(){return P.apply(null,arguments)}},at.cloneElement=function(P,ee,ye){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var be=b({},P.props),J=P.key,me=void 0;if(ee!=null)for(Se in ee.ref!==void 0&&(me=void 0),ee.key!==void 0&&(J=""+ee.key),ee)!G.call(ee,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ee.ref===void 0||(be[Se]=ee[Se]);var Se=arguments.length-2;if(Se===1)be.children=ye;else if(1<Se){for(var Re=Array(Se),Oe=0;Oe<Se;Oe++)Re[Oe]=arguments[Oe+2];be.children=Re}return F(P.type,J,void 0,void 0,me,be)},at.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},at.createElement=function(P,ee,ye){var be,J={},me=null;if(ee!=null)for(be in ee.key!==void 0&&(me=""+ee.key),ee)G.call(ee,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(J[be]=ee[be]);var Se=arguments.length-2;if(Se===1)J.children=ye;else if(1<Se){for(var Re=Array(Se),Oe=0;Oe<Se;Oe++)Re[Oe]=arguments[Oe+2];J.children=Re}if(P&&P.defaultProps)for(be in Se=P.defaultProps,Se)J[be]===void 0&&(J[be]=Se[be]);return F(P,me,void 0,void 0,null,J)},at.createRef=function(){return{current:null}},at.forwardRef=function(P){return{$$typeof:d,render:P}},at.isValidElement=N,at.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:K}},at.memo=function(P,ee){return{$$typeof:m,type:P,compare:ee===void 0?null:ee}},at.startTransition=function(P){var ee=B.T,ye={};B.T=ye;try{var be=P(),J=B.S;J!==null&&J(ye,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(Me,q)}catch(me){q(me)}finally{B.T=ee}},at.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},at.use=function(P){return B.H.use(P)},at.useActionState=function(P,ee,ye){return B.H.useActionState(P,ee,ye)},at.useCallback=function(P,ee){return B.H.useCallback(P,ee)},at.useContext=function(P){return B.H.useContext(P)},at.useDebugValue=function(){},at.useDeferredValue=function(P,ee){return B.H.useDeferredValue(P,ee)},at.useEffect=function(P,ee,ye){var be=B.H;if(typeof ye=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return be.useEffect(P,ee)},at.useId=function(){return B.H.useId()},at.useImperativeHandle=function(P,ee,ye){return B.H.useImperativeHandle(P,ee,ye)},at.useInsertionEffect=function(P,ee){return B.H.useInsertionEffect(P,ee)},at.useLayoutEffect=function(P,ee){return B.H.useLayoutEffect(P,ee)},at.useMemo=function(P,ee){return B.H.useMemo(P,ee)},at.useOptimistic=function(P,ee){return B.H.useOptimistic(P,ee)},at.useReducer=function(P,ee,ye){return B.H.useReducer(P,ee,ye)},at.useRef=function(P){return B.H.useRef(P)},at.useState=function(P){return B.H.useState(P)},at.useSyncExternalStore=function(P,ee,ye){return B.H.useSyncExternalStore(P,ee,ye)},at.useTransition=function(){return B.H.useTransition()},at.version="19.1.0",at}var Lv;function zh(){return Lv||(Lv=1,dd.exports=rS()),dd.exports}var re=zh();const Tr=nS(re);var hd={exports:{}},Oo={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function sS(){return Pv||(Pv=1,function(r){function e(I,K){var q=I.length;I.push(K);e:for(;0<q;){var Me=q-1>>>1,P=I[Me];if(0<l(P,K))I[Me]=K,I[q]=P,q=Me;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var K=I[0],q=I.pop();if(q!==K){I[0]=q;e:for(var Me=0,P=I.length,ee=P>>>1;Me<ee;){var ye=2*(Me+1)-1,be=I[ye],J=ye+1,me=I[J];if(0>l(be,q))J<P&&0>l(me,be)?(I[Me]=me,I[J]=q,Me=J):(I[Me]=be,I[ye]=q,Me=ye);else if(J<P&&0>l(me,q))I[Me]=me,I[J]=q,Me=J;else break e}}return K}function l(I,K){var q=I.sortIndex-K.sortIndex;return q!==0?q:I.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,_=null,x=3,S=!1,b=!1,A=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var K=i(m);K!==null;){if(K.callback===null)s(m);else if(K.startTime<=I)s(m),K.sortIndex=K.expirationTime,e(p,K);else break;K=i(m)}}function B(I){if(A=!1,D(I),!b)if(i(p)!==null)b=!0,G||(G=!0,ce());else{var K=i(m);K!==null&&de(B,K.startTime-I)}}var G=!1,F=-1,X=5,N=-1;function C(){return y?!0:!(r.unstable_now()-N<X)}function V(){if(y=!1,G){var I=r.unstable_now();N=I;var K=!0;try{e:{b=!1,A&&(A=!1,L(F),F=-1),S=!0;var q=x;try{t:{for(D(I),_=i(p);_!==null&&!(_.expirationTime>I&&C());){var Me=_.callback;if(typeof Me=="function"){_.callback=null,x=_.priorityLevel;var P=Me(_.expirationTime<=I);if(I=r.unstable_now(),typeof P=="function"){_.callback=P,D(I),K=!0;break t}_===i(p)&&s(p),D(I)}else s(p);_=i(p)}if(_!==null)K=!0;else{var ee=i(m);ee!==null&&de(B,ee.startTime-I),K=!1}}break e}finally{_=null,x=q,S=!1}K=void 0}}finally{K?ce():G=!1}}}var ce;if(typeof U=="function")ce=function(){U(V)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,_e=le.port2;le.port1.onmessage=V,ce=function(){_e.postMessage(null)}}else ce=function(){v(V,0)};function de(I,K){F=v(function(){I(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(I){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var q=x;x=K;try{return I()}finally{x=q}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=x;x=I;try{return K()}finally{x=q}},r.unstable_scheduleCallback=function(I,K,q){var Me=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Me+q:Me):q=Me,I){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=q+P,I={id:g++,callback:K,priorityLevel:I,startTime:q,expirationTime:P,sortIndex:-1},q>Me?(I.sortIndex=q,e(m,I),i(p)===null&&I===i(m)&&(A?(L(F),F=-1):A=!0,de(B,q-Me))):(I.sortIndex=P,e(p,I),b||S||(b=!0,G||(G=!0,ce()))),I},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(I){var K=x;return function(){var q=x;x=K;try{return I.apply(this,arguments)}finally{x=q}}}}(md)),md}var Ov;function oS(){return Ov||(Ov=1,pd.exports=sS()),pd.exports}var gd={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function lS(){if(zv)return Rn;zv=1;var r=zh();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},Rn.flushSync=function(p){var m=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=g,s.d.f()}},Rn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Rn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Rn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:S}):g==="script"&&s.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Rn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Rn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Rn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Rn.requestFormReset=function(p){s.d.r(p)},Rn.unstable_batchedUpdates=function(p,m){return p(m)},Rn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var Iv;function cS(){if(Iv)return gd.exports;Iv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gd.exports=lS(),gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function uS(){if(Bv)return Oo;Bv=1;var r=oS(),e=zh(),i=cS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return d(u),t;if(h===o)return d(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,E=u.child;E;){if(E===a){M=!0,a=u,o=h;break}if(E===o){M=!0,o=u,a=h;break}E=E.sibling}if(!M){for(E=h.child;E;){if(E===a){M=!0,a=h,o=u;break}if(E===o){M=!0,o=h,a=u;break}E=E.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case y:return"Profiler";case A:return"StrictMode";case B:return"Suspense";case G:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case U:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:_e(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return _e(t(n))}catch{}}return null}var de=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Me=[],P=-1;function ee(t){return{current:t}}function ye(t){0>P||(t.current=Me[P],Me[P]=null,P--)}function be(t,n){P++,Me[P]=t.current,t.current=n}var J=ee(null),me=ee(null),Se=ee(null),Re=ee(null);function Oe(t,n){switch(be(Se,n),be(me,t),be(J,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?av(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=av(n),t=rv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(J),be(J,t)}function st(){ye(J),ye(me),ye(Se)}function Ke(t){t.memoizedState!==null&&be(Re,t);var n=J.current,a=rv(n,t.type);n!==a&&(be(me,t),be(J,a))}function Ht(t){me.current===t&&(ye(J),ye(me)),Re.current===t&&(ye(Re),Co._currentValue=q)}var It=Object.prototype.hasOwnProperty,ut=r.unstable_scheduleCallback,H=r.unstable_cancelCallback,On=r.unstable_shouldYield,gt=r.unstable_requestPaint,nt=r.unstable_now,Xe=r.unstable_getCurrentPriorityLevel,Ut=r.unstable_ImmediatePriority,Ve=r.unstable_UserBlockingPriority,O=r.unstable_NormalPriority,T=r.unstable_LowPriority,te=r.unstable_IdlePriority,xe=r.log,Ee=r.unstable_setDisableYieldValue,he=null,Be=null;function we(t){if(typeof xe=="function"&&Ee(t),Be&&typeof Be.setStrictMode=="function")try{Be.setStrictMode(he,t)}catch{}}var Ce=Math.clz32?Math.clz32:He,vt=Math.log,Ae=Math.LN2;function He(t){return t>>>=0,t===0?32:31-(vt(t)/Ae|0)|0}var Ye=256,Qe=4194304;function ze(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function lt(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var E=o&134217727;return E!==0?(o=E&~h,o!==0?u=ze(o):(M&=E,M!==0?u=ze(M):a||(a=E&~t,a!==0&&(u=ze(a))))):(E=o&~h,E!==0?u=ze(E):M!==0?u=ze(M):a||(a=o&~t,a!==0&&(u=ze(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function tt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Nt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j(){var t=Ye;return Ye<<=1,(Ye&4194048)===0&&(Ye=256),t}function Le(){var t=Qe;return Qe<<=1,(Qe&62914560)===0&&(Qe=4194304),t}function ue(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ge(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ie(t,n,a,o,u,h){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,$=t.hiddenUpdates;for(a=M&~a;0<a;){var fe=31-Ce(a),ve=1<<fe;E[fe]=0,z[fe]=-1;var ne=$[fe];if(ne!==null)for($[fe]=null,fe=0;fe<ne.length;fe++){var ie=ne[fe];ie!==null&&(ie.lane&=-536870913)}a&=~ve}o!==0&&Pe(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(M&~n))}function Pe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ce(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function it(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ce(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Gt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Ev(t.type))}function Vn(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var hn=Math.random().toString(36).slice(2),on="__reactFiber$"+hn,xn="__reactProps$"+hn,zn="__reactContainer$"+hn,Ya="__reactEvents$"+hn,ol="__reactListeners$"+hn,ll="__reactHandles$"+hn,Za="__reactResources$"+hn,ua="__reactMarker$"+hn;function fa(t){delete t[on],delete t[xn],delete t[Ya],delete t[ol],delete t[ll]}function Li(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[zn]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=cv(t);t!==null;){if(a=t[on])return a;t=cv(t)}return n}t=a,a=t.parentNode}return null}function Pi(t){if(t=t[on]||t[zn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ka(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function da(t){var n=t[Za];return n||(n=t[Za]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(t){t[ua]=!0}var cl=new Set,ul={};function Oi(t,n){w(t,n),w(t+"Capture",n)}function w(t,n){for(ul[t]=n,t=0;t<n.length;t++)cl.add(n[t])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},se={};function Z(t){return It.call(se,t)?!0:It.call(ae,t)?!1:Y.test(t)?se[t]=!0:(ae[t]=!0,!1)}function Te(t,n,a){if(Z(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function De(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ue(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Fe,$e;function qe(t){if(Fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Fe=n&&n[1]||"",$e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+t+$e}var je=!1;function dt(t,n){if(!t||je)return"";je=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ie){var ne=ie}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(ie){ne=ie}t.call(ve.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],E=h[1];if(M&&E){var z=M.split(`
`),$=E.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===$.length)for(o=z.length-1,u=$.length-1;1<=o&&0<=u&&z[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==$[u]){var fe=`
`+z[o].replace(" at new "," at ");return t.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",t.displayName)),fe}while(1<=o&&0<=u);break}}}finally{je=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qe(a):""}function Et(t){switch(t.tag){case 26:case 27:case 5:return qe(t.type);case 16:return qe("Lazy");case 13:return qe("Suspense");case 19:return qe("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return qe("Activity");default:return""}}function qt(t){try{var n="";do n+=Et(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function We(t){var n=xt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,h.call(this,M)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Zt(t){t._valueTracker||(t._valueTracker=We(t))}function Mt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=xt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function En(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ha=/[\n"\\]/g;function Vt(t){return t.replace(ha,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zi(t,n,a,o,u,h,M,E){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+_t(n)):t.value!==""+_t(n)&&(t.value=""+_t(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,M,_t(n)):a!=null?Tn(t,M,_t(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+_t(E):t.removeAttribute("name")}function Bt(t,n,a,o,u,h,M,E){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+_t(a):"",n=n!=null?""+_t(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=E?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Tn(t,n,a){n==="number"&&En(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ln(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+_t(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function pn(t,n,a){if(n!=null&&(n=""+_t(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+_t(a):""}function yn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(de(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_t(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function yi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ii=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ap(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ii.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function rp(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&ap(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&ap(t,h,n[h])}function cu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ex=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(t){return tx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var uu=null;function fu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ur=null,Nr=null;function sp(t){var n=Pi(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(zi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(s(90));zi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Mt(o)}break e;case"textarea":pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ln(t,!!a.multiple,n,!1)}}}var du=!1;function op(t,n,a){if(du)return t(n,a);du=!0;try{var o=t(n);return o}finally{if(du=!1,(Ur!==null||Nr!==null)&&(Kl(),Ur&&(n=Ur,t=Nr,Nr=Ur=null,sp(n),t)))for(n=0;n<t.length;n++)sp(t[n])}}function Gs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(Bi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){hu=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{hu=!1}var pa=null,pu=null,dl=null;function lp(){if(dl)return dl;var t,n=pu,a=n.length,o,u="value"in pa?pa.value:pa.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var M=a-t;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return dl=u.slice(t,1<o?1-o:void 0)}function hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function cp(){return!1}function In(t){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(h):h[E]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?pl:cp,this.isPropagationStopped=cp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=In(Qa),ks=g({},Qa,{view:0,detail:0}),nx=In(ks),mu,gu,js,gl=g({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(mu=t.screenX-js.screenX,gu=t.screenY-js.screenY):gu=mu=0,js=t),mu)},movementY:function(t){return"movementY"in t?t.movementY:gu}}),up=In(gl),ix=g({},gl,{dataTransfer:0}),ax=In(ix),rx=g({},ks,{relatedTarget:0}),vu=In(rx),sx=g({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),ox=In(sx),lx=g({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cx=In(lx),ux=g({},Qa,{data:0}),fp=In(ux),fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function px(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=hx[t])?!!n[t]:!1}function _u(){return px}var mx=g({},ks,{key:function(t){if(t.key){var n=fx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gx=In(mx),vx=g({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dp=In(vx),_x=g({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),xx=In(_x),yx=g({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sx=In(yx),Mx=g({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bx=In(Mx),Ex=g({},Qa,{newState:0,oldState:0}),Tx=In(Ex),Ax=[9,13,27,32],xu=Bi&&"CompositionEvent"in window,Xs=null;Bi&&"documentMode"in document&&(Xs=document.documentMode);var Rx=Bi&&"TextEvent"in window&&!Xs,hp=Bi&&(!xu||Xs&&8<Xs&&11>=Xs),pp=" ",mp=!1;function gp(t,n){switch(t){case"keyup":return Ax.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lr=!1;function wx(t,n){switch(t){case"compositionend":return vp(n);case"keypress":return n.which!==32?null:(mp=!0,pp);case"textInput":return t=n.data,t===pp&&mp?null:t;default:return null}}function Cx(t,n){if(Lr)return t==="compositionend"||!xu&&gp(t,n)?(t=lp(),dl=pu=pa=null,Lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hp&&n.locale!=="ko"?null:n.data;default:return null}}var Dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Dx[t.type]:n==="textarea"}function xp(t,n,a,o){Ur?Nr?Nr.push(o):Nr=[o]:Ur=o,n=nc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var qs=null,Ws=null;function Ux(t){$g(t,0)}function vl(t){var n=Ka(t);if(Mt(n))return t}function yp(t,n){if(t==="change")return n}var Sp=!1;if(Bi){var yu;if(Bi){var Su="oninput"in document;if(!Su){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),Su=typeof Mp.oninput=="function"}yu=Su}else yu=!1;Sp=yu&&(!document.documentMode||9<document.documentMode)}function bp(){qs&&(qs.detachEvent("onpropertychange",Ep),Ws=qs=null)}function Ep(t){if(t.propertyName==="value"&&vl(Ws)){var n=[];xp(n,Ws,t,fu(t)),op(Ux,n)}}function Nx(t,n,a){t==="focusin"?(bp(),qs=n,Ws=a,qs.attachEvent("onpropertychange",Ep)):t==="focusout"&&bp()}function Lx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(Ws)}function Px(t,n){if(t==="click")return vl(n)}function Ox(t,n){if(t==="input"||t==="change")return vl(n)}function zx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var kn=typeof Object.is=="function"?Object.is:zx;function Ys(t,n){if(kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!It.call(n,u)||!kn(t[u],n[u]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,n){var a=Tp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tp(a)}}function Rp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Rp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function wp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=En(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=En(t.document)}return n}function Mu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ix=Bi&&"documentMode"in document&&11>=document.documentMode,Pr=null,bu=null,Zs=null,Eu=!1;function Cp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eu||Pr==null||Pr!==En(o)||(o=Pr,"selectionStart"in o&&Mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zs&&Ys(Zs,o)||(Zs=o,o=nc(bu,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Pr)))}function Ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Or={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Tu={},Dp={};Bi&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function $a(t){if(Tu[t])return Tu[t];if(!Or[t])return t;var n=Or[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dp)return Tu[t]=n[a];return t}var Up=$a("animationend"),Np=$a("animationiteration"),Lp=$a("animationstart"),Bx=$a("transitionrun"),Fx=$a("transitionstart"),Hx=$a("transitioncancel"),Pp=$a("transitionend"),Op=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function ui(t,n){Op.set(t,n),Oi(n,[t])}var zp=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=zp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:qt(n)},zp.set(t,n),n)}return{value:t,source:n,stack:qt(n)}}var ti=[],zr=0,Ru=0;function _l(){for(var t=zr,n=Ru=zr=0;n<t;){var a=ti[n];ti[n++]=null;var o=ti[n];ti[n++]=null;var u=ti[n];ti[n++]=null;var h=ti[n];if(ti[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&Ip(a,u,h)}}function xl(t,n,a,o){ti[zr++]=t,ti[zr++]=n,ti[zr++]=a,ti[zr++]=o,Ru|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function wu(t,n,a,o){return xl(t,n,a,o),yl(t)}function Ir(t,n){return xl(t,null,null,n),yl(t)}function Ip(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Ce(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function yl(t){if(50<So)throw So=0,Of=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Br={};function Gx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,o){return new Gx(t,n,a,o)}function Cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Bp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Sl(t,n,a,o,u,h){var M=0;if(o=t,typeof t=="function")Cu(t)&&(M=1);else if(typeof t=="string")M=ky(t,a,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=jn(31,a,n,u),t.elementType=N,t.lanes=h,t;case b:return er(a.children,u,h,n);case A:M=8,u|=24;break;case y:return t=jn(12,a,n,u|2),t.elementType=y,t.lanes=h,t;case B:return t=jn(13,a,n,u),t.elementType=B,t.lanes=h,t;case G:return t=jn(19,a,n,u),t.elementType=G,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case U:M=10;break e;case L:M=9;break e;case D:M=11;break e;case F:M=14;break e;case X:M=16,o=null;break e}M=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=jn(M,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function er(t,n,a,o){return t=jn(7,t,o,n),t.lanes=a,t}function Du(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function Uu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Fr=[],Hr=0,Ml=null,bl=0,ni=[],ii=0,tr=null,Hi=1,Gi="";function nr(t,n){Fr[Hr++]=bl,Fr[Hr++]=Ml,Ml=t,bl=n}function Fp(t,n,a){ni[ii++]=Hi,ni[ii++]=Gi,ni[ii++]=tr,tr=t;var o=Hi;t=Gi;var u=32-Ce(o)-1;o&=~(1<<u),a+=1;var h=32-Ce(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Hi=1<<32-Ce(n)+u|a<<u|o,Gi=h+t}else Hi=1<<h|a<<u|o,Gi=t}function Nu(t){t.return!==null&&(nr(t,1),Fp(t,1,0))}function Lu(t){for(;t===Ml;)Ml=Fr[--Hr],Fr[Hr]=null,bl=Fr[--Hr],Fr[Hr]=null;for(;t===tr;)tr=ni[--ii],ni[ii]=null,Gi=ni[--ii],ni[ii]=null,Hi=ni[--ii],ni[ii]=null}var Un=null,Kt=null,Rt=!1,ir=null,Si=!1,Pu=Error(s(519));function ar(t){var n=Error(s(418,""));throw Js(ei(n,t)),Pu}function Hp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[xn]=o,a){case"dialog":pt("cancel",n),pt("close",n);break;case"iframe":case"object":case"embed":pt("load",n);break;case"video":case"audio":for(a=0;a<bo.length;a++)pt(bo[a],n);break;case"source":pt("error",n);break;case"img":case"image":case"link":pt("error",n),pt("load",n);break;case"details":pt("toggle",n);break;case"input":pt("invalid",n),Bt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Zt(n);break;case"select":pt("invalid",n);break;case"textarea":pt("invalid",n),yn(n,o.value,o.defaultValue,o.children),Zt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||iv(n.textContent,a)?(o.popover!=null&&(pt("beforetoggle",n),pt("toggle",n)),o.onScroll!=null&&pt("scroll",n),o.onScrollEnd!=null&&pt("scrollend",n),o.onClick!=null&&(n.onclick=ic),n=!0):n=!1,n||ar(t)}function Gp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Un=Un.return}}function Ks(t){if(t!==Un)return!1;if(!Rt)return Gp(t),Rt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Qf(t.type,t.memoizedProps)),a=!a),a&&Kt&&ar(t),Gp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Kt=di(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Kt=null}}else n===27?(n=Kt,Da(t.type)?(t=td,td=null,Kt=t):Kt=n):Kt=Un?di(t.stateNode.nextSibling):null;return!0}function Qs(){Kt=Un=null,Rt=!1}function Vp(){var t=ir;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),ir=null),t}function Js(t){ir===null?ir=[t]:ir.push(t)}var Ou=ee(null),rr=null,Vi=null;function ma(t,n,a){be(Ou,n._currentValue),n._currentValue=a}function ki(t){t._currentValue=Ou.current,ye(Ou)}function zu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Iu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;e:for(;h!==null;){var E=h;h=u;for(var z=0;z<n.length;z++)if(E.context===n[z]){h.lanes|=a,E=h.alternate,E!==null&&(E.lanes|=a),zu(h.return,a,t),o||(M=null);break e}h=E.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),zu(M,a,t),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===t){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function $s(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var E=u.type;kn(u.pendingProps.value,M.value)||(t!==null?t.push(E):t=[E])}}else if(u===Re.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}u=u.return}t!==null&&Iu(n,t,a,o),n.flags|=262144}function El(t){for(t=t.firstContext;t!==null;){if(!kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sr(t){rr=t,Vi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return kp(rr,t)}function Tl(t,n){return rr===null&&sr(t),kp(t,n)}function kp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(t===null)throw Error(s(308));Vi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Vi=Vi.next=n;return a}var Vx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},kx=r.unstable_scheduleCallback,jx=r.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new Vx,data:new Map,refCount:0}}function eo(t){t.refCount--,t.refCount===0&&kx(jx,function(){t.controller.abort()})}var to=null,Fu=0,Gr=0,Vr=null;function Xx(t,n){if(to===null){var a=to=[];Fu=0,Gr=Vf(),Vr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Fu++,n.then(jp,jp),n}function jp(){if(--Fu===0&&to!==null){Vr!==null&&(Vr.status="fulfilled");var t=to;to=null,Gr=0,Vr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function qx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Xp=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xx(t,n),Xp!==null&&Xp(t,n)};var or=ee(null);function Hu(){var t=or.current;return t!==null?t:kt.pooledCache}function Al(t,n){n===null?be(or,or.current):be(or,n.pool)}function qp(){var t=Hu();return t===null?null:{parent:cn._currentValue,pool:t}}var no=Error(s(460)),Wp=Error(s(474)),Rl=Error(s(542)),Gu={then:function(){}};function Yp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wl(){}function Zp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(wl,wl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t;default:if(typeof n.status=="string")n.then(wl,wl);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t}throw io=n,no}}var io=null;function Kp(){if(io===null)throw Error(s(459));var t=io;return io=null,t}function Qp(t){if(t===no||t===Rl)throw Error(s(483))}var ga=!1;function Vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _a(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ct&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(t),Ip(t,null,a),n}return xl(t,o,n,a),yl(t)}function ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,it(t,a)}}function ju(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Xu=!1;function ro(){if(Xu){var t=Vr;if(t!==null)throw t}}function so(t,n,a,o){Xu=!1;var u=t.updateQueue;ga=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var z=E,$=z.next;z.next=null,M===null?h=$:M.next=$,M=z;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,E=fe.lastBaseUpdate,E!==M&&(E===null?fe.firstBaseUpdate=$:E.next=$,fe.lastBaseUpdate=z))}if(h!==null){var ve=u.baseState;M=0,fe=$=z=null,E=h;do{var ne=E.lane&-536870913,ie=ne!==E.lane;if(ie?(St&ne)===ne:(o&ne)===ne){ne!==0&&ne===Gr&&(Xu=!0),fe!==null&&(fe=fe.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var et=t,Ze=E;ne=n;var Ot=a;switch(Ze.tag){case 1:if(et=Ze.payload,typeof et=="function"){ve=et.call(Ot,ve,ne);break e}ve=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=Ze.payload,ne=typeof et=="function"?et.call(Ot,ve,ne):et,ne==null)break e;ve=g({},ve,ne);break e;case 2:ga=!0}}ne=E.callback,ne!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=u.callbacks,ie===null?u.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:E.tag,payload:E.payload,callback:E.callback,next:null},fe===null?($=fe=ie,z=ve):fe=fe.next=ie,M|=ne;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;ie=E,E=ie.next,ie.next=null,u.lastBaseUpdate=ie,u.shared.pending=null}}while(!0);fe===null&&(z=ve),u.baseState=z,u.firstBaseUpdate=$,u.lastBaseUpdate=fe,h===null&&(u.shared.lanes=0),Aa|=M,t.lanes=M,t.memoizedState=ve}}function Jp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function $p(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Jp(a[t],n)}var kr=ee(null),Cl=ee(0);function em(t,n){t=Ki,be(Cl,t),be(kr,n),Ki=t|n.baseLanes}function qu(){be(Cl,Ki),be(kr,kr.current)}function Wu(){Ki=Cl.current,ye(kr),ye(Cl)}var xa=0,ct=null,Lt=null,an=null,Dl=!1,jr=!1,lr=!1,Ul=0,oo=0,Xr=null,Wx=0;function Jt(){throw Error(s(321))}function Yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!kn(t[a],n[a]))return!1;return!0}function Zu(t,n,a,o,u,h){return xa=h,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Im:Bm,lr=!1,h=a(o,u),lr=!1,jr&&(h=nm(n,a,o,u)),tm(t),h}function tm(t){I.H=Il;var n=Lt!==null&&Lt.next!==null;if(xa=0,an=Lt=ct=null,Dl=!1,oo=0,Xr=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&El(t)&&(mn=!0))}function nm(t,n,a,o){ct=t;var u=0;do{if(jr&&(Xr=null),oo=0,jr=!1,25<=u)throw Error(s(301));if(u+=1,an=Lt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=ey,h=n(a,o)}while(jr);return h}function Yx(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?lo(n):n,t=t.useState()[0],(Lt!==null?Lt.memoizedState:null)!==t&&(ct.flags|=1024),n}function Ku(){var t=Ul!==0;return Ul=0,t}function Qu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ju(t){if(Dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Dl=!1}xa=0,an=Lt=ct=null,jr=!1,oo=Ul=0,Xr=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ct.memoizedState=an=t:an=an.next=t,an}function rn(){if(Lt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var n=an===null?ct.memoizedState:an.next;if(n!==null)an=n,Lt=t;else{if(t===null)throw ct.alternate===null?Error(s(467)):Error(s(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},an===null?ct.memoizedState=an=t:an=an.next=t}return an}function $u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(t){var n=oo;return oo+=1,Xr===null&&(Xr=[]),t=Zp(Xr,t,n),n=ct,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Im:Bm),t}function Nl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return lo(t);if(t.$$typeof===U)return An(t)}throw Error(s(438,String(t)))}function ef(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=$u(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function ji(t,n){return typeof n=="function"?n(t):n}function Ll(t){var n=rn();return tf(n,Lt,t)}function tf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var E=M=null,z=null,$=n,fe=!1;do{var ve=$.lane&-536870913;if(ve!==$.lane?(St&ve)===ve:(xa&ve)===ve){var ne=$.revertLane;if(ne===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ve===Gr&&(fe=!0);else if((xa&ne)===ne){$=$.next,ne===Gr&&(fe=!0);continue}else ve={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(E=z=ve,M=h):z=z.next=ve,ct.lanes|=ne,Aa|=ne;ve=$.action,lr&&a(h,ve),h=$.hasEagerState?$.eagerState:a(h,ve)}else ne={lane:ve,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(E=z=ne,M=h):z=z.next=ne,ct.lanes|=ve,Aa|=ve;$=$.next}while($!==null&&$!==n);if(z===null?M=h:z.next=E,!kn(h,t.memoizedState)&&(mn=!0,fe&&(a=Vr,a!==null)))throw a;t.memoizedState=h,t.baseState=M,t.baseQueue=z,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function nf(t){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=t(h,M.action),M=M.next;while(M!==u);kn(h,n.memoizedState)||(mn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function im(t,n,a){var o=ct,u=rn(),h=Rt;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!kn((Lt||u).memoizedState,a);M&&(u.memoizedState=a,mn=!0),u=u.queue;var E=sm.bind(null,o,u,t);if(co(2048,8,E,[t]),u.getSnapshot!==n||M||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,qr(9,Pl(),rm.bind(null,o,u,a,n),null),kt===null)throw Error(s(349));h||(xa&124)!==0||am(o,n,a)}return a}function am(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=$u(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function rm(t,n,a,o){n.value=a,n.getSnapshot=o,om(n)&&lm(t)}function sm(t,n,a){return a(function(){om(n)&&lm(t)})}function om(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!kn(t,a)}catch{return!0}}function lm(t){var n=Ir(t,2);n!==null&&Zn(n,t,2)}function af(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),lr){we(!0);try{a()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:t},n}function cm(t,n,a,o){return t.baseState=a,tf(t,Lt,typeof o=="function"?o:ji)}function Zx(t,n,a,o,u){if(zl(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};I.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,um(n,h)):(h.next=a.next,n.pending=a.next=h)}}function um(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=I.T,M={};I.T=M;try{var E=a(u,o),z=I.S;z!==null&&z(M,E),fm(t,n,E)}catch($){rf(t,n,$)}finally{I.T=h}}else try{h=a(u,o),fm(t,n,h)}catch($){rf(t,n,$)}}function fm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){dm(t,n,o)},function(o){return rf(t,n,o)}):dm(t,n,a)}function dm(t,n,a){n.status="fulfilled",n.value=a,hm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,um(t,a)))}function rf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,hm(n),n=n.next;while(n!==o)}t.action=null}function hm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function pm(t,n){return n}function mm(t,n){if(Rt){var a=kt.formState;if(a!==null){e:{var o=ct;if(Rt){if(Kt){t:{for(var u=Kt,h=Si;u.nodeType!==8;){if(!h){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Kt=di(u.nextSibling),o=u.data==="F!";break e}}ar(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pm,lastRenderedState:n},a.queue=o,a=Pm.bind(null,ct,o),o.dispatch=a,o=af(!1),h=uf.bind(null,ct,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Zx.bind(null,ct,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function gm(t){var n=rn();return vm(n,Lt,t)}function vm(t,n,a){if(n=tf(t,n,pm)[0],t=Ll(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=lo(n)}catch(M){throw M===no?Rl:M}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,qr(9,Pl(),Kx.bind(null,u,a),null)),[o,h,t]}function Kx(t,n){t.action=n}function _m(t){var n=rn(),a=Lt;if(a!==null)return vm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function qr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=$u(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Pl(){return{destroy:void 0,resource:void 0}}function xm(){return rn().memoizedState}function Ol(t,n,a,o){var u=Bn();o=o===void 0?null:o,ct.flags|=t,u.memoizedState=qr(1|n,Pl(),a,o)}function co(t,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;Lt!==null&&o!==null&&Yu(o,Lt.memoizedState.deps)?u.memoizedState=qr(n,h,a,o):(ct.flags|=t,u.memoizedState=qr(1|n,h,a,o))}function ym(t,n){Ol(8390656,8,t,n)}function Sm(t,n){co(2048,8,t,n)}function Mm(t,n){return co(4,2,t,n)}function bm(t,n){return co(4,4,t,n)}function Em(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Tm(t,n,a){a=a!=null?a.concat([t]):null,co(4,4,Em.bind(null,n,t),a)}function sf(){}function Am(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Yu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Rm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Yu(n,o[1]))return o[0];if(o=t(),lr){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[o,n],o}function of(t,n,a){return a===void 0||(xa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Dg(),ct.lanes|=t,Aa|=t,a)}function wm(t,n,a,o){return kn(a,n)?a:kr.current!==null?(t=of(t,a,o),kn(t,n)||(mn=!0),t):(xa&42)===0?(mn=!0,t.memoizedState=a):(t=Dg(),ct.lanes|=t,Aa|=t,n)}function Cm(t,n,a,o,u){var h=K.p;K.p=h!==0&&8>h?h:8;var M=I.T,E={};I.T=E,uf(t,!1,n,a);try{var z=u(),$=I.S;if($!==null&&$(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var fe=qx(z,o);uo(t,n,fe,Yn(t))}else uo(t,n,o,Yn(t))}catch(ve){uo(t,n,{then:function(){},status:"rejected",reason:ve},Yn())}finally{K.p=h,I.T=M}}function Qx(){}function lf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Dm(t).queue;Cm(t,u,n,q,a===null?Qx:function(){return Um(t),a(o)})}function Dm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Um(t){var n=Dm(t).next.queue;uo(t,n,{},Yn())}function cf(){return An(Co)}function Nm(){return rn().memoizedState}function Lm(){return rn().memoizedState}function Jx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=va(a);var o=_a(n,t,a);o!==null&&(Zn(o,n,a),ao(o,n,a)),n={cache:Bu()},t.payload=n;return}n=n.return}}function $x(t,n,a){var o=Yn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},zl(t)?Om(n,a):(a=wu(t,n,a,o),a!==null&&(Zn(a,t,o),zm(a,n,o)))}function Pm(t,n,a){var o=Yn();uo(t,n,a,o)}function uo(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(t))Om(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,E=h(M,a);if(u.hasEagerState=!0,u.eagerState=E,kn(E,M))return xl(t,n,u,0),kt===null&&_l(),!1}catch{}finally{}if(a=wu(t,n,u,o),a!==null)return Zn(a,t,o),zm(a,n,o),!0}return!1}function uf(t,n,a,o){if(o={lane:2,revertLane:Vf(),action:o,hasEagerState:!1,eagerState:null,next:null},zl(t)){if(n)throw Error(s(479))}else n=wu(t,a,o,2),n!==null&&Zn(n,t,2)}function zl(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function Om(t,n){jr=Dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function zm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,it(t,a)}}var Il={readContext:An,use:Nl,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt},Im={readContext:An,use:Nl,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:ym,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ol(4194308,4,Em.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ol(4194308,4,t,n)},useInsertionEffect:function(t,n){Ol(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var o=t();if(lr){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(lr){we(!0);try{a(n)}finally{we(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=$x.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=af(t);var n=t.queue,a=Pm.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:sf,useDeferredValue:function(t,n){var a=Bn();return of(a,t,n)},useTransition:function(){var t=af(!1);return t=Cm.bind(null,ct,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,u=Bn();if(Rt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),kt===null)throw Error(s(349));(St&124)!==0||am(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,ym(sm.bind(null,o,h,t),[t]),o.flags|=2048,qr(9,Pl(),rm.bind(null,o,h,a,n),null),a},useId:function(){var t=Bn(),n=kt.identifierPrefix;if(Rt){var a=Gi,o=Hi;a=(o&~(1<<32-Ce(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Wx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:cf,useFormState:mm,useActionState:mm,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uf.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:ef,useCacheRefresh:function(){return Bn().memoizedState=Jx.bind(null,ct)}},Bm={readContext:An,use:Nl,useCallback:Am,useContext:An,useEffect:Sm,useImperativeHandle:Tm,useInsertionEffect:Mm,useLayoutEffect:bm,useMemo:Rm,useReducer:Ll,useRef:xm,useState:function(){return Ll(ji)},useDebugValue:sf,useDeferredValue:function(t,n){var a=rn();return wm(a,Lt.memoizedState,t,n)},useTransition:function(){var t=Ll(ji)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:im,useId:Nm,useHostTransitionStatus:cf,useFormState:gm,useActionState:gm,useOptimistic:function(t,n){var a=rn();return cm(a,Lt,t,n)},useMemoCache:ef,useCacheRefresh:Lm},ey={readContext:An,use:Nl,useCallback:Am,useContext:An,useEffect:Sm,useImperativeHandle:Tm,useInsertionEffect:Mm,useLayoutEffect:bm,useMemo:Rm,useReducer:nf,useRef:xm,useState:function(){return nf(ji)},useDebugValue:sf,useDeferredValue:function(t,n){var a=rn();return Lt===null?of(a,t,n):wm(a,Lt.memoizedState,t,n)},useTransition:function(){var t=nf(ji)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:im,useId:Nm,useHostTransitionStatus:cf,useFormState:_m,useActionState:_m,useOptimistic:function(t,n){var a=rn();return Lt!==null?cm(a,Lt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ef,useCacheRefresh:Lm},Wr=null,fo=0;function Bl(t){var n=fo;return fo+=1,Wr===null&&(Wr=[]),Zp(Wr,t,n)}function ho(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Fl(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Fm(t){var n=t._init;return n(t._payload)}function Hm(t){function n(W,k){if(t){var Q=W.deletions;Q===null?(W.deletions=[k],W.flags|=16):Q.push(k)}}function a(W,k){if(!t)return null;for(;k!==null;)n(W,k),k=k.sibling;return null}function o(W){for(var k=new Map;W!==null;)W.key!==null?k.set(W.key,W):k.set(W.index,W),W=W.sibling;return k}function u(W,k){return W=Fi(W,k),W.index=0,W.sibling=null,W}function h(W,k,Q){return W.index=Q,t?(Q=W.alternate,Q!==null?(Q=Q.index,Q<k?(W.flags|=67108866,k):Q):(W.flags|=67108866,k)):(W.flags|=1048576,k)}function M(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function E(W,k,Q,pe){return k===null||k.tag!==6?(k=Du(Q,W.mode,pe),k.return=W,k):(k=u(k,Q),k.return=W,k)}function z(W,k,Q,pe){var Ge=Q.type;return Ge===b?fe(W,k,Q.props.children,pe,Q.key):k!==null&&(k.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===X&&Fm(Ge)===k.type)?(k=u(k,Q.props),ho(k,Q),k.return=W,k):(k=Sl(Q.type,Q.key,Q.props,null,W.mode,pe),ho(k,Q),k.return=W,k)}function $(W,k,Q,pe){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=Uu(Q,W.mode,pe),k.return=W,k):(k=u(k,Q.children||[]),k.return=W,k)}function fe(W,k,Q,pe,Ge){return k===null||k.tag!==7?(k=er(Q,W.mode,pe,Ge),k.return=W,k):(k=u(k,Q),k.return=W,k)}function ve(W,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Du(""+k,W.mode,Q),k.return=W,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return Q=Sl(k.type,k.key,k.props,null,W.mode,Q),ho(Q,k),Q.return=W,Q;case S:return k=Uu(k,W.mode,Q),k.return=W,k;case X:var pe=k._init;return k=pe(k._payload),ve(W,k,Q)}if(de(k)||ce(k))return k=er(k,W.mode,Q,null),k.return=W,k;if(typeof k.then=="function")return ve(W,Bl(k),Q);if(k.$$typeof===U)return ve(W,Tl(W,k),Q);Fl(W,k)}return null}function ne(W,k,Q,pe){var Ge=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ge!==null?null:E(W,k,""+Q,pe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Ge?z(W,k,Q,pe):null;case S:return Q.key===Ge?$(W,k,Q,pe):null;case X:return Ge=Q._init,Q=Ge(Q._payload),ne(W,k,Q,pe)}if(de(Q)||ce(Q))return Ge!==null?null:fe(W,k,Q,pe,null);if(typeof Q.then=="function")return ne(W,k,Bl(Q),pe);if(Q.$$typeof===U)return ne(W,k,Tl(W,Q),pe);Fl(W,Q)}return null}function ie(W,k,Q,pe,Ge){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return W=W.get(Q)||null,E(k,W,""+pe,Ge);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case x:return W=W.get(pe.key===null?Q:pe.key)||null,z(k,W,pe,Ge);case S:return W=W.get(pe.key===null?Q:pe.key)||null,$(k,W,pe,Ge);case X:var ft=pe._init;return pe=ft(pe._payload),ie(W,k,Q,pe,Ge)}if(de(pe)||ce(pe))return W=W.get(Q)||null,fe(k,W,pe,Ge,null);if(typeof pe.then=="function")return ie(W,k,Q,Bl(pe),Ge);if(pe.$$typeof===U)return ie(W,k,Q,Tl(k,pe),Ge);Fl(k,pe)}return null}function et(W,k,Q,pe){for(var Ge=null,ft=null,ke=k,Je=k=0,vn=null;ke!==null&&Je<Q.length;Je++){ke.index>Je?(vn=ke,ke=null):vn=ke.sibling;var Tt=ne(W,ke,Q[Je],pe);if(Tt===null){ke===null&&(ke=vn);break}t&&ke&&Tt.alternate===null&&n(W,ke),k=h(Tt,k,Je),ft===null?Ge=Tt:ft.sibling=Tt,ft=Tt,ke=vn}if(Je===Q.length)return a(W,ke),Rt&&nr(W,Je),Ge;if(ke===null){for(;Je<Q.length;Je++)ke=ve(W,Q[Je],pe),ke!==null&&(k=h(ke,k,Je),ft===null?Ge=ke:ft.sibling=ke,ft=ke);return Rt&&nr(W,Je),Ge}for(ke=o(ke);Je<Q.length;Je++)vn=ie(ke,W,Je,Q[Je],pe),vn!==null&&(t&&vn.alternate!==null&&ke.delete(vn.key===null?Je:vn.key),k=h(vn,k,Je),ft===null?Ge=vn:ft.sibling=vn,ft=vn);return t&&ke.forEach(function(Oa){return n(W,Oa)}),Rt&&nr(W,Je),Ge}function Ze(W,k,Q,pe){if(Q==null)throw Error(s(151));for(var Ge=null,ft=null,ke=k,Je=k=0,vn=null,Tt=Q.next();ke!==null&&!Tt.done;Je++,Tt=Q.next()){ke.index>Je?(vn=ke,ke=null):vn=ke.sibling;var Oa=ne(W,ke,Tt.value,pe);if(Oa===null){ke===null&&(ke=vn);break}t&&ke&&Oa.alternate===null&&n(W,ke),k=h(Oa,k,Je),ft===null?Ge=Oa:ft.sibling=Oa,ft=Oa,ke=vn}if(Tt.done)return a(W,ke),Rt&&nr(W,Je),Ge;if(ke===null){for(;!Tt.done;Je++,Tt=Q.next())Tt=ve(W,Tt.value,pe),Tt!==null&&(k=h(Tt,k,Je),ft===null?Ge=Tt:ft.sibling=Tt,ft=Tt);return Rt&&nr(W,Je),Ge}for(ke=o(ke);!Tt.done;Je++,Tt=Q.next())Tt=ie(ke,W,Je,Tt.value,pe),Tt!==null&&(t&&Tt.alternate!==null&&ke.delete(Tt.key===null?Je:Tt.key),k=h(Tt,k,Je),ft===null?Ge=Tt:ft.sibling=Tt,ft=Tt);return t&&ke.forEach(function(tS){return n(W,tS)}),Rt&&nr(W,Je),Ge}function Ot(W,k,Q,pe){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:e:{for(var Ge=Q.key;k!==null;){if(k.key===Ge){if(Ge=Q.type,Ge===b){if(k.tag===7){a(W,k.sibling),pe=u(k,Q.props.children),pe.return=W,W=pe;break e}}else if(k.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===X&&Fm(Ge)===k.type){a(W,k.sibling),pe=u(k,Q.props),ho(pe,Q),pe.return=W,W=pe;break e}a(W,k);break}else n(W,k);k=k.sibling}Q.type===b?(pe=er(Q.props.children,W.mode,pe,Q.key),pe.return=W,W=pe):(pe=Sl(Q.type,Q.key,Q.props,null,W.mode,pe),ho(pe,Q),pe.return=W,W=pe)}return M(W);case S:e:{for(Ge=Q.key;k!==null;){if(k.key===Ge)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(W,k.sibling),pe=u(k,Q.children||[]),pe.return=W,W=pe;break e}else{a(W,k);break}else n(W,k);k=k.sibling}pe=Uu(Q,W.mode,pe),pe.return=W,W=pe}return M(W);case X:return Ge=Q._init,Q=Ge(Q._payload),Ot(W,k,Q,pe)}if(de(Q))return et(W,k,Q,pe);if(ce(Q)){if(Ge=ce(Q),typeof Ge!="function")throw Error(s(150));return Q=Ge.call(Q),Ze(W,k,Q,pe)}if(typeof Q.then=="function")return Ot(W,k,Bl(Q),pe);if(Q.$$typeof===U)return Ot(W,k,Tl(W,Q),pe);Fl(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(W,k.sibling),pe=u(k,Q),pe.return=W,W=pe):(a(W,k),pe=Du(Q,W.mode,pe),pe.return=W,W=pe),M(W)):a(W,k)}return function(W,k,Q,pe){try{fo=0;var Ge=Ot(W,k,Q,pe);return Wr=null,Ge}catch(ke){if(ke===no||ke===Rl)throw ke;var ft=jn(29,ke,null,W.mode);return ft.lanes=pe,ft.return=W,ft}finally{}}}var Yr=Hm(!0),Gm=Hm(!1),ai=ee(null),Mi=null;function ya(t){var n=t.alternate;be(un,un.current&1),be(ai,t),Mi===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(Mi=t)}function Vm(t){if(t.tag===22){if(be(un,un.current),be(ai,t),Mi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Mi=t)}}else Sa()}function Sa(){be(un,un.current),be(ai,ai.current)}function Xi(t){ye(ai),Mi===t&&(Mi=null),ye(un)}var un=ee(0);function Hl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ed(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ff(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var df={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Yn(),u=va(o);u.payload=n,a!=null&&(u.callback=a),n=_a(t,u,o),n!==null&&(Zn(n,t,o),ao(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Yn(),u=va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=_a(t,u,o),n!==null&&(Zn(n,t,o),ao(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=_a(t,o,a),n!==null&&(Zn(n,t,a),ao(n,t,a))}};function km(t,n,a,o,u,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,o)||!Ys(u,h):!0}function jm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&df.enqueueReplaceState(n,n.state,null)}function cr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Xm(t){Gl(t)}function qm(t){console.error(t)}function Wm(t){Gl(t)}function Vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ym(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hf(t,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(t,n)},a}function Zm(t){return t=va(t),t.tag=3,t}function Km(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){Ym(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){Ym(n,a,o),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function ty(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$s(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 13:return Mi===null?If():a.alternate===null&&Qt===0&&(Qt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Gu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ff(t,o,u)),!1;case 22:return a.flags|=65536,o===Gu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ff(t,o,u)),!1}throw Error(s(435,a.tag))}return Ff(t,o,u),If(),!1}if(Rt)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Pu&&(t=Error(s(422),{cause:o}),Js(ei(t,a)))):(o!==Pu&&(n=Error(s(423),{cause:o}),Js(ei(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ei(o,a),u=hf(t.stateNode,o,u),ju(t,u),Qt!==4&&(Qt=2)),!1;var h=Error(s(520),{cause:o});if(h=ei(h,a),yo===null?yo=[h]:yo.push(h),Qt!==4&&(Qt=2),n===null)return!0;o=ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=hf(a.stateNode,o,t),ju(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ra===null||!Ra.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Zm(u),Km(u,t,a,o),ju(a,u),!1}a=a.return}while(a!==null);return!1}var Qm=Error(s(461)),mn=!1;function Sn(t,n,a,o){n.child=t===null?Gm(n,null,a,o):Yr(n,t.child,a,o)}function Jm(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var E in o)E!=="ref"&&(M[E]=o[E])}else M=o;return sr(n),o=Zu(t,n,a,M,h,u),E=Ku(),t!==null&&!mn?(Qu(t,n,u),qi(t,n,u)):(Rt&&E&&Nu(n),n.flags|=1,Sn(t,n,o,u),n.child)}function $m(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!Cu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,eg(t,n,h,o,u)):(t=Sl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Sf(t,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(M,o)&&t.ref===n.ref)return qi(t,n,u)}return n.flags|=1,t=Fi(h,o),t.ref=n.ref,t.return=n,n.child=t}function eg(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(Ys(h,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=h,Sf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,qi(t,n,u)}return pf(t,n,a,o,u)}function tg(t,n,a){var o=n.pendingProps,u=o.children,h=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,t!==null){for(u=n.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return ng(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Al(n,h!==null?h.cachePool:null),h!==null?em(n,h):qu(),Vm(n);else return n.lanes=n.childLanes=536870912,ng(t,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(Al(n,h.cachePool),em(n,h),Sa(),n.memoizedState=null):(t!==null&&Al(n,null),qu(),Sa());return Sn(t,n,u,a),n.child}function ng(t,n,a,o){var u=Hu();return u=u===null?null:{parent:cn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Al(n,null),qu(),Vm(n),t!==null&&$s(t,n,o,!0),null}function kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function pf(t,n,a,o,u){return sr(n),a=Zu(t,n,a,o,void 0,u),o=Ku(),t!==null&&!mn?(Qu(t,n,u),qi(t,n,u)):(Rt&&o&&Nu(n),n.flags|=1,Sn(t,n,a,u),n.child)}function ig(t,n,a,o,u,h){return sr(n),n.updateQueue=null,a=nm(n,o,a,u),tm(t),o=Ku(),t!==null&&!mn?(Qu(t,n,h),qi(t,n,h)):(Rt&&o&&Nu(n),n.flags|=1,Sn(t,n,a,h),n.child)}function ag(t,n,a,o,u){if(sr(n),n.stateNode===null){var h=Br,M=a.contextType;typeof M=="object"&&M!==null&&(h=An(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=df,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Vu(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?An(M):Br,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(ff(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&df.enqueueReplaceState(h,h.state,null),so(n,o,h,u),ro(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var E=n.memoizedProps,z=cr(a,E);h.props=z;var $=h.context,fe=a.contextType;M=Br,typeof fe=="object"&&fe!==null&&(M=An(fe));var ve=a.getDerivedStateFromProps;fe=typeof ve=="function"||typeof h.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,fe||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E||$!==M)&&jm(n,h,o,M),ga=!1;var ne=n.memoizedState;h.state=ne,so(n,o,h,u),ro(),$=n.memoizedState,E||ne!==$||ga?(typeof ve=="function"&&(ff(n,a,ve,o),$=n.memoizedState),(z=ga||km(n,a,z,o,ne,$,M))?(fe||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),h.props=o,h.state=$,h.context=M,o=z):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,ku(t,n),M=n.memoizedProps,fe=cr(a,M),h.props=fe,ve=n.pendingProps,ne=h.context,$=a.contextType,z=Br,typeof $=="object"&&$!==null&&(z=An($)),E=a.getDerivedStateFromProps,($=typeof E=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==ve||ne!==z)&&jm(n,h,o,z),ga=!1,ne=n.memoizedState,h.state=ne,so(n,o,h,u),ro();var ie=n.memoizedState;M!==ve||ne!==ie||ga||t!==null&&t.dependencies!==null&&El(t.dependencies)?(typeof E=="function"&&(ff(n,a,E,o),ie=n.memoizedState),(fe=ga||km(n,a,fe,o,ne,ie,z)||t!==null&&t.dependencies!==null&&El(t.dependencies))?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ie,z),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ie,z)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ie),h.props=o,h.state=ie,h.context=z,o=fe):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,kl(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Yr(n,t.child,null,u),n.child=Yr(n,null,a,u)):Sn(t,n,a,u),n.memoizedState=h.state,t=n.child):t=qi(t,n,u),t}function rg(t,n,a,o){return Qs(),n.flags|=256,Sn(t,n,a,o),n.child}var mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(t){return{baseLanes:t,cachePool:qp()}}function vf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function sg(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(u?ya(n):Sa(),Rt){var E=Kt,z;if(z=E){e:{for(z=E,E=Si;z.nodeType!==8;){if(!E){E=null;break e}if(z=di(z.nextSibling),z===null){E=null;break e}}E=z}E!==null?(n.memoizedState={dehydrated:E,treeContext:tr!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},z=jn(18,null,null,0),z.stateNode=E,z.return=n,n.child=z,Un=n,Kt=null,z=!0):z=!1}z||ar(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return ed(E)?n.lanes=32:n.lanes=536870912,null;Xi(n)}return E=o.children,o=o.fallback,u?(Sa(),u=n.mode,E=jl({mode:"hidden",children:E},u),o=er(o,u,a,null),E.return=n,o.return=n,E.sibling=o,n.child=E,u=n.child,u.memoizedState=gf(a),u.childLanes=vf(t,M,a),n.memoizedState=mf,o):(ya(n),_f(n,E))}if(z=t.memoizedState,z!==null&&(E=z.dehydrated,E!==null)){if(h)n.flags&256?(ya(n),n.flags&=-257,n=xf(t,n,a)):n.memoizedState!==null?(Sa(),n.child=t.child,n.flags|=128,n=null):(Sa(),u=o.fallback,E=n.mode,o=jl({mode:"visible",children:o.children},E),u=er(u,E,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Yr(n,t.child,null,a),o=n.child,o.memoizedState=gf(a),o.childLanes=vf(t,M,a),n.memoizedState=mf,n=u);else if(ya(n),ed(E)){if(M=E.nextSibling&&E.nextSibling.dataset,M)var $=M.dgst;M=$,o=Error(s(419)),o.stack="",o.digest=M,Js({value:o,source:null,stack:null}),n=xf(t,n,a)}else if(mn||$s(t,n,a,!1),M=(a&t.childLanes)!==0,mn||M){if(M=kt,M!==null&&(o=a&-a,o=(o&42)!==0?1:Gt(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,Ir(t,o),Zn(M,t,o),Qm;E.data==="$?"||If(),n=xf(t,n,a)}else E.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Kt=di(E.nextSibling),Un=n,Rt=!0,ir=null,Si=!1,t!==null&&(ni[ii++]=Hi,ni[ii++]=Gi,ni[ii++]=tr,Hi=t.id,Gi=t.overflow,tr=n),n=_f(n,o.children),n.flags|=4096);return n}return u?(Sa(),u=o.fallback,E=n.mode,z=t.child,$=z.sibling,o=Fi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,$!==null?u=Fi($,u):(u=er(u,E,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,E=t.child.memoizedState,E===null?E=gf(a):(z=E.cachePool,z!==null?($=cn._currentValue,z=z.parent!==$?{parent:$,pool:$}:z):z=qp(),E={baseLanes:E.baseLanes|a,cachePool:z}),u.memoizedState=E,u.childLanes=vf(t,M,a),n.memoizedState=mf,o):(ya(n),a=t.child,t=a.sibling,a=Fi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=a,n.memoizedState=null,a)}function _f(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=jn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function xf(t,n,a){return Yr(n,t.child,null,a),t=_f(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function og(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),zu(t.return,n,a)}function yf(t,n,a,o,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function lg(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(Sn(t,n,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&og(t,a,n);else if(t.tag===19)og(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(be(un,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Hl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),yf(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Hl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}yf(n,!0,a,null,h);break;case"together":yf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($s(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Fi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Fi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Sf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&El(t)))}function ny(t,n,a){switch(n.tag){case 3:Oe(n,n.stateNode.containerInfo),ma(n,cn,t.memoizedState.cache),Qs();break;case 27:case 5:Ke(n);break;case 4:Oe(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?sg(t,n,a):(ya(n),t=qi(t,n,a),t!==null?t.sibling:null);ya(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($s(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return lg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,tg(t,n,a);case 24:ma(n,cn,t.memoizedState.cache)}return qi(t,n,a)}function cg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Sf(t,a)&&(n.flags&128)===0)return mn=!1,ny(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Rt&&(n.flags&1048576)!==0&&Fp(n,bl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Cu(o)?(t=cr(o,t),n.tag=1,n=ag(null,n,o,t,a)):(n.tag=0,n=pf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===D){n.tag=11,n=Jm(null,n,o,t,a);break e}else if(u===F){n.tag=14,n=$m(null,n,o,t,a);break e}}throw n=_e(o)||o,Error(s(306,n,""))}}return n;case 0:return pf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=cr(o,n.pendingProps),ag(t,n,o,u,a);case 3:e:{if(Oe(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,ku(t,n),so(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ma(n,cn,o),o!==h.cache&&Iu(n,[cn],a,!0),ro(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=rg(t,n,o,a);break e}else if(o!==u){u=ei(Error(s(424)),n),Js(u),n=rg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=di(t.firstChild),Un=n,Rt=!0,ir=null,Si=!0,a=Gm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qs(),o===u){n=qi(t,n,a);break e}Sn(t,n,o,a)}n=n.child}return n;case 26:return kl(t,n),t===null?(a=hv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Rt||(a=n.type,t=n.pendingProps,o=ac(Se.current).createElement(a),o[on]=n,o[xn]=t,bn(o,a,t),nn(o),n.stateNode=o):n.memoizedState=hv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&Rt&&(o=n.stateNode=uv(n.type,n.pendingProps,Se.current),Un=n,Si=!0,u=Kt,Da(n.type)?(td=u,Kt=di(o.firstChild)):Kt=u),Sn(t,n,n.pendingProps.children,a),kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((u=o=Kt)&&(o=Dy(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Un=n,Kt=di(o.firstChild),Si=!1,u=!0):u=!1),u||ar(n)),Ke(n),u=n.type,h=n.pendingProps,M=t!==null?t.memoizedProps:null,o=h.children,Qf(u,h)?o=null:M!==null&&Qf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(t,n,Yx,null,null,a),Co._currentValue=u),kl(t,n),Sn(t,n,o,a),n.child;case 6:return t===null&&Rt&&((t=a=Kt)&&(a=Uy(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Un=n,Kt=null,t=!0):t=!1),t||ar(n)),null;case 13:return sg(t,n,a);case 4:return Oe(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Yr(n,null,o,a):Sn(t,n,o,a),n.child;case 11:return Jm(t,n,n.type,n.pendingProps,a);case 7:return Sn(t,n,n.pendingProps,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ma(n,n.type,o.value),Sn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,sr(n),u=An(u),o=o(u),n.flags|=1,Sn(t,n,o,a),n.child;case 14:return $m(t,n,n.type,n.pendingProps,a);case 15:return eg(t,n,n.type,n.pendingProps,a);case 19:return lg(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=jl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Fi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return tg(t,n,a);case 24:return sr(n),o=An(cn),t===null?(u=Hu(),u===null&&(u=kt,h=Bu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Vu(n),ma(n,cn,u)):((t.lanes&a)!==0&&(ku(t,n),so(n,null,null,a),ro()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ma(n,cn,o)):(o=h.cache,ma(n,cn,o),o!==u.cache&&Iu(n,[cn],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Wi(t){t.flags|=4}function ug(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!_v(n)){if(n=ai.current,n!==null&&((St&4194048)===St?Mi!==null:(St&62914560)!==St&&(St&536870912)===0||n!==Mi))throw io=Gu,Wp;t.flags|=8192}}function Xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Le():536870912,t.lanes|=n,Jr|=n)}function po(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Wt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function iy(t,n,a){var o=n.pendingProps;switch(Lu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ki(cn),st(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ks(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vp())),Wt(n),null;case 26:return a=n.memoizedState,t===null?(Wi(n),a!==null?(Wt(n),ug(n,a)):(Wt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Wi(n),Wt(n),ug(n,a)):(Wt(n),n.flags&=-16777217):(t.memoizedProps!==o&&Wi(n),Wt(n),n.flags&=-16777217),null;case 27:Ht(n),a=Se.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Wt(n),null}t=J.current,Ks(n)?Hp(n):(t=uv(u,o,a),n.stateNode=t,Wi(n))}return Wt(n),null;case 5:if(Ht(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Wt(n),null}if(t=J.current,Ks(n))Hp(n);else{switch(u=ac(Se.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[on]=n,t[xn]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(bn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Wi(n)}}return Wt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Se.current,Ks(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||iv(t.nodeValue,a)),t||ar(n)}else t=ac(t).createTextNode(o),t[on]=n,n.stateNode=t}return Wt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ks(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else Qs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),u=!1}else u=Vp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Xi(n),n):(Xi(n),null)}if(Xi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Xl(n,n.updateQueue),Wt(n),null;case 4:return st(),t===null&&qf(n.stateNode.containerInfo),Wt(n),null;case 10:return ki(n.type),Wt(n),null;case 19:if(ye(un),u=n.memoizedState,u===null)return Wt(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)po(u,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Hl(t),h!==null){for(n.flags|=128,po(u,!1),t=h.updateQueue,n.updateQueue=t,Xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Bp(a,t),a=a.sibling;return be(un,un.current&1|2),n.child}t=t.sibling}u.tail!==null&&nt()>Yl&&(n.flags|=128,o=!0,po(u,!1),n.lanes=4194304)}else{if(!o)if(t=Hl(h),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Xl(n,t),po(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Rt)return Wt(n),null}else 2*nt()-u.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,o=!0,po(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(t=u.last,t!==null?t.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=nt(),n.sibling=null,t=un.current,be(un,o?t&1|2:t&1),n):(Wt(n),null);case 22:case 23:return Xi(n),Wu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),a=n.updateQueue,a!==null&&Xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ye(or),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(cn),Wt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ay(t,n){switch(Lu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ki(cn),st(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ht(n),null;case 13:if(Xi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Qs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ye(un),null;case 4:return st(),null;case 10:return ki(n.type),null;case 22:case 23:return Xi(n),Wu(),t!==null&&ye(or),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ki(cn),null;case 25:return null;default:return null}}function fg(t,n){switch(Lu(n),n.tag){case 3:ki(cn),st();break;case 26:case 27:case 5:Ht(n);break;case 4:st();break;case 13:Xi(n);break;case 19:ye(un);break;case 10:ki(n.type);break;case 22:case 23:Xi(n),Wu(),t!==null&&ye(or);break;case 24:ki(cn)}}function mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(E){Ft(n,n.return,E)}}function Ma(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var M=o.inst,E=M.destroy;if(E!==void 0){M.destroy=void 0,u=n;var z=a,$=E;try{$()}catch(fe){Ft(u,z,fe)}}}o=o.next}while(o!==h)}}catch(fe){Ft(n,n.return,fe)}}function dg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{$p(n,a)}catch(o){Ft(t,t.return,o)}}}function hg(t,n,a){a.props=cr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ft(t,n,o)}}function go(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ft(t,n,u)}}function bi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ft(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ft(t,n,u)}else a.current=null}function pg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ft(t,t.return,u)}}function Mf(t,n,a){try{var o=t.stateNode;Ty(o,t.type,a,n),o[xn]=n}catch(u){Ft(t,t.return,u)}}function mg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Da(t.type)||t.tag===4}function bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Da(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ic));else if(o!==4&&(o===27&&Da(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ef(t,n,a),t=t.sibling;t!==null;)Ef(t,n,a),t=t.sibling}function ql(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Da(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ql(t,n,a),t=t.sibling;t!==null;)ql(t,n,a),t=t.sibling}function gg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,o,a),n[on]=t,n[xn]=a}catch(h){Ft(t,t.return,h)}}var Yi=!1,$t=!1,Tf=!1,vg=typeof WeakSet=="function"?WeakSet:Set,gn=null;function ry(t,n){if(t=t.containerInfo,Zf=uc,t=wp(t),Mu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var M=0,E=-1,z=-1,$=0,fe=0,ve=t,ne=null;t:for(;;){for(var ie;ve!==a||u!==0&&ve.nodeType!==3||(E=M+u),ve!==h||o!==0&&ve.nodeType!==3||(z=M+o),ve.nodeType===3&&(M+=ve.nodeValue.length),(ie=ve.firstChild)!==null;)ne=ve,ve=ie;for(;;){if(ve===t)break t;if(ne===a&&++$===u&&(E=M),ne===h&&++fe===o&&(z=M),(ie=ve.nextSibling)!==null)break;ve=ne,ne=ve.parentNode}ve=ie}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kf={focusedElem:t,selectionRange:a},uc=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,h=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var et=cr(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(et,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(Ze){Ft(a,a.return,Ze)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)$f(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$f(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function _g(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ba(t,a),o&4&&mo(5,a);break;case 1:if(ba(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(M){Ft(a,a.return,M)}else{var u=cr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Ft(a,a.return,M)}}o&64&&dg(a),o&512&&go(a,a.return);break;case 3:if(ba(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$p(t,n)}catch(M){Ft(a,a.return,M)}}break;case 27:n===null&&o&4&&gg(a);case 26:case 5:ba(t,a),n===null&&o&4&&pg(a),o&512&&go(a,a.return);break;case 12:ba(t,a);break;case 13:ba(t,a),o&4&&Sg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=py.bind(null,a),Ny(t,a))));break;case 22:if(o=a.memoizedState!==null||Yi,!o){n=n!==null&&n.memoizedState!==null||$t,u=Yi;var h=$t;Yi=o,($t=n)&&!h?Ea(t,a,(a.subtreeFlags&8772)!==0):ba(t,a),Yi=u,$t=h}break;case 30:break;default:ba(t,a)}}function xg(t){var n=t.alternate;n!==null&&(t.alternate=null,xg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&fa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Fn=!1;function Zi(t,n,a){for(a=a.child;a!==null;)yg(t,n,a),a=a.sibling}function yg(t,n,a){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(he,a)}catch{}switch(a.tag){case 26:$t||bi(a,n),Zi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$t||bi(a,n);var o=jt,u=Fn;Da(a.type)&&(jt=a.stateNode,Fn=!1),Zi(t,n,a),To(a.stateNode),jt=o,Fn=u;break;case 5:$t||bi(a,n);case 6:if(o=jt,u=Fn,jt=null,Zi(t,n,a),jt=o,Fn=u,jt!==null)if(Fn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(a.stateNode)}catch(h){Ft(a,n,h)}else try{jt.removeChild(a.stateNode)}catch(h){Ft(a,n,h)}break;case 18:jt!==null&&(Fn?(t=jt,lv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Lo(t)):lv(jt,a.stateNode));break;case 4:o=jt,u=Fn,jt=a.stateNode.containerInfo,Fn=!0,Zi(t,n,a),jt=o,Fn=u;break;case 0:case 11:case 14:case 15:$t||Ma(2,a,n),$t||Ma(4,a,n),Zi(t,n,a);break;case 1:$t||(bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&hg(a,n,o)),Zi(t,n,a);break;case 21:Zi(t,n,a);break;case 22:$t=(o=$t)||a.memoizedState!==null,Zi(t,n,a),$t=o;break;default:Zi(t,n,a)}}function Sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Lo(t)}catch(a){Ft(n,n.return,a)}}function sy(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new vg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new vg),n;default:throw Error(s(435,t.tag))}}function Af(t,n){var a=sy(t);n.forEach(function(o){var u=my.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,M=n,E=M;e:for(;E!==null;){switch(E.tag){case 27:if(Da(E.type)){jt=E.stateNode,Fn=!1;break e}break;case 5:jt=E.stateNode,Fn=!1;break e;case 3:case 4:jt=E.stateNode.containerInfo,Fn=!0;break e}E=E.return}if(jt===null)throw Error(s(160));yg(h,M,u),jt=null,Fn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Mg(n,t),n=n.sibling}var fi=null;function Mg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),qn(t),o&4&&(Ma(3,t,t.return),mo(3,t),Ma(5,t,t.return));break;case 1:Xn(n,t),qn(t),o&512&&($t||a===null||bi(a,a.return)),o&64&&Yi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=fi;if(Xn(n,t),qn(t),o&512&&($t||a===null||bi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ua]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),bn(h,o,a),h[on]=t,nn(h),o=h;break e;case"link":var M=gv("link","href",u).get(o+(a.href||""));if(M){for(var E=0;E<M.length;E++)if(h=M[E],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(E,1);break t}}h=u.createElement(o),bn(h,o,a),u.head.appendChild(h);break;case"meta":if(M=gv("meta","content",u).get(o+(a.content||""))){for(E=0;E<M.length;E++)if(h=M[E],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(E,1);break t}}h=u.createElement(o),bn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[on]=t,nn(h),o=h}t.stateNode=o}else vv(u,t.type,t.stateNode);else t.stateNode=mv(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?vv(u,t.type,t.stateNode):mv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Mf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),qn(t),o&512&&($t||a===null||bi(a,a.return)),a!==null&&o&4&&Mf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),qn(t),o&512&&($t||a===null||bi(a,a.return)),t.flags&32){u=t.stateNode;try{yi(u,"")}catch(ie){Ft(t,t.return,ie)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Mf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Tf=!0);break;case 6:if(Xn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ie){Ft(t,t.return,ie)}}break;case 3:if(oc=null,u=fi,fi=rc(n.containerInfo),Xn(n,t),fi=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Lo(n.containerInfo)}catch(ie){Ft(t,t.return,ie)}Tf&&(Tf=!1,bg(t));break;case 4:o=fi,fi=rc(t.stateNode.containerInfo),Xn(n,t),qn(t),fi=o;break;case 12:Xn(n,t),qn(t);break;case 13:Xn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nf=nt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Af(t,o)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,$=Yi,fe=$t;if(Yi=$||u,$t=fe||z,Xn(n,t),$t=fe,Yi=$,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||Yi||$t||ur(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(h=z.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{E=z.stateNode;var ve=z.memoizedProps.style,ne=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;E.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){Ft(z,z.return,ie)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(ie){Ft(z,z.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Af(t,a))));break;case 19:Xn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Af(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(mg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=bf(t);ql(t,h,u);break;case 5:var M=a.stateNode;a.flags&32&&(yi(M,""),a.flags&=-33);var E=bf(t);ql(t,E,M);break;case 3:case 4:var z=a.stateNode.containerInfo,$=bf(t);Ef(t,$,z);break;default:throw Error(s(161))}}catch(fe){Ft(t,t.return,fe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function bg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;bg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_g(t,n.alternate,n),n=n.sibling}function ur(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),ur(n);break;case 1:bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&hg(n,n.return,a),ur(n);break;case 27:To(n.stateNode);case 26:case 5:bi(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}t=t.sibling}}function Ea(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:Ea(u,h,a),mo(4,h);break;case 1:if(Ea(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Ft(o,o.return,$)}if(o=h,u=o.updateQueue,u!==null){var E=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Jp(z[u],E)}catch($){Ft(o,o.return,$)}}a&&M&64&&dg(h),go(h,h.return);break;case 27:gg(h);case 26:case 5:Ea(u,h,a),a&&o===null&&M&4&&pg(h),go(h,h.return);break;case 12:Ea(u,h,a);break;case 13:Ea(u,h,a),a&&M&4&&Sg(u,h);break;case 22:h.memoizedState===null&&Ea(u,h,a),go(h,h.return);break;case 30:break;default:Ea(u,h,a)}n=n.sibling}}function Rf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&eo(a))}function wf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t))}function Ei(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Eg(t,n,a,o),n=n.sibling}function Eg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,o),u&2048&&mo(9,n);break;case 1:Ei(t,n,a,o);break;case 3:Ei(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t)));break;case 12:if(u&2048){Ei(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,M=h.id,E=h.onPostCommit;typeof E=="function"&&E(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Ft(n,n.return,z)}}else Ei(t,n,a,o);break;case 13:Ei(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Ei(t,n,a,o):vo(t,n):h._visibility&2?Ei(t,n,a,o):(h._visibility|=2,Zr(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Rf(M,n);break;case 24:Ei(t,n,a,o),u&2048&&wf(n.alternate,n);break;default:Ei(t,n,a,o)}}function Zr(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=t,M=n,E=a,z=o,$=M.flags;switch(M.tag){case 0:case 11:case 15:Zr(h,M,E,z,u),mo(8,M);break;case 23:break;case 22:var fe=M.stateNode;M.memoizedState!==null?fe._visibility&2?Zr(h,M,E,z,u):vo(h,M):(fe._visibility|=2,Zr(h,M,E,z,u)),u&&$&2048&&Rf(M.alternate,M);break;case 24:Zr(h,M,E,z,u),u&&$&2048&&wf(M.alternate,M);break;default:Zr(h,M,E,z,u)}n=n.sibling}}function vo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:vo(a,o),u&2048&&Rf(o.alternate,o);break;case 24:vo(a,o),u&2048&&wf(o.alternate,o);break;default:vo(a,o)}n=n.sibling}}var _o=8192;function Kr(t){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)Tg(t),t=t.sibling}function Tg(t){switch(t.tag){case 26:Kr(t),t.flags&_o&&t.memoizedState!==null&&Xy(fi,t.memoizedState,t.memoizedProps);break;case 5:Kr(t);break;case 3:case 4:var n=fi;fi=rc(t.stateNode.containerInfo),Kr(t),fi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=_o,_o=16777216,Kr(t),_o=n):Kr(t));break;default:Kr(t)}}function Ag(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function xo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,wg(o,t)}Ag(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rg(t),t=t.sibling}function Rg(t){switch(t.tag){case 0:case 11:case 15:xo(t),t.flags&2048&&Ma(9,t,t.return);break;case 3:xo(t);break;case 12:xo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Wl(t)):xo(t);break;default:xo(t)}}function Wl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,wg(o,t)}Ag(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}t=t.sibling}}function wg(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:eo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else e:for(a=t;gn!==null;){o=gn;var u=o.sibling,h=o.return;if(xg(o),o===a){gn=null;break e}if(u!==null){u.return=h,gn=u;break e}gn=h}}}var oy={getCacheForType:function(t){var n=An(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},ly=typeof WeakMap=="function"?WeakMap:Map,Ct=0,kt=null,ht=null,St=0,Dt=0,Wn=null,Ta=!1,Qr=!1,Cf=!1,Ki=0,Qt=0,Aa=0,fr=0,Df=0,ri=0,Jr=0,yo=null,Hn=null,Uf=!1,Nf=0,Yl=1/0,Zl=null,Ra=null,Mn=0,wa=null,$r=null,es=0,Lf=0,Pf=null,Cg=null,So=0,Of=null;function Yn(){if((Ct&2)!==0&&St!==0)return St&-St;if(I.T!==null){var t=Gr;return t!==0?t:Vf()}return bt()}function Dg(){ri===0&&(ri=(St&536870912)===0||Rt?j():536870912);var t=ai.current;return t!==null&&(t.flags|=32),ri}function Zn(t,n,a){(t===kt&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)&&(ts(t,0),Ca(t,St,ri,!1)),ge(t,a),((Ct&2)===0||t!==kt)&&(t===kt&&((Ct&2)===0&&(fr|=a),Qt===4&&Ca(t,St,ri,!1)),Ti(t))}function Ug(t,n,a){if((Ct&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||tt(t,n),u=o?fy(t,n):Bf(t,n,!0),h=o;do{if(u===0){Qr&&!o&&Ca(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!cy(a)){u=Bf(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var E=t;u=yo;var z=E.current.memoizedState.isDehydrated;if(z&&(ts(E,M).flags|=256),M=Bf(E,M,!1),M!==2){if(Cf&&!z){E.errorRecoveryDisabledLanes|=h,fr|=h,u=4;break e}h=Hn,Hn=u,h!==null&&(Hn===null?Hn=h:Hn.push.apply(Hn,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){ts(t,0),Ca(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,ri,!Ta);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Nf+300-nt(),10<u)){if(Ca(o,n,ri,!Ta),lt(o,0,!0)!==0)break e;o.timeoutHandle=sv(Ng.bind(null,o,a,Hn,Zl,Uf,n,ri,fr,Jr,Ta,h,2,-0,0),u);break e}Ng(o,a,Hn,Zl,Uf,n,ri,fr,Jr,Ta,h,0,-0,0)}}break}while(!0);Ti(t)}function Ng(t,n,a,o,u,h,M,E,z,$,fe,ve,ne,ie){if(t.timeoutHandle=-1,ve=n.subtreeFlags,(ve&8192||(ve&16785408)===16785408)&&(wo={stylesheets:null,count:0,unsuspend:jy},Tg(n),ve=qy(),ve!==null)){t.cancelPendingCommit=ve(Fg.bind(null,t,n,h,a,o,u,M,E,z,fe,1,ne,ie)),Ca(t,h,M,!$);return}Fg(t,n,h,a,o,u,M,E,z)}function cy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!kn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(t,n,a,o){n&=~Df,n&=~fr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Ce(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&Pe(t,a,n)}function Kl(){return(Ct&6)===0?(Mo(0),!1):!0}function zf(){if(ht!==null){if(Dt===0)var t=ht.return;else t=ht,Vi=rr=null,Ju(t),Wr=null,fo=0,t=ht;for(;t!==null;)fg(t.alternate,t),t=t.return;ht=null}}function ts(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ry(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),zf(),kt=t,ht=a=Fi(t.current,null),St=n,Dt=0,Wn=null,Ta=!1,Qr=tt(t,n),Cf=!1,Jr=ri=Df=fr=Aa=Qt=0,Hn=yo=null,Uf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ce(o),h=1<<u;n|=t[u],o&=~h}return Ki=n,_l(),a}function Lg(t,n){ct=null,I.H=Il,n===no||n===Rl?(n=Kp(),Dt=3):n===Wp?(n=Kp(),Dt=4):Dt=n===Qm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,ht===null&&(Qt=1,Vl(t,ei(n,t.current)))}function Pg(){var t=I.H;return I.H=Il,t===null?Il:t}function Og(){var t=I.A;return I.A=oy,t}function If(){Qt=4,Ta||(St&4194048)!==St&&ai.current!==null||(Qr=!0),(Aa&134217727)===0&&(fr&134217727)===0||kt===null||Ca(kt,St,ri,!1)}function Bf(t,n,a){var o=Ct;Ct|=2;var u=Pg(),h=Og();(kt!==t||St!==n)&&(Zl=null,ts(t,n)),n=!1;var M=Qt;e:do try{if(Dt!==0&&ht!==null){var E=ht,z=Wn;switch(Dt){case 8:zf(),M=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var $=Dt;if(Dt=0,Wn=null,ns(t,E,z,$),a&&Qr){M=0;break e}break;default:$=Dt,Dt=0,Wn=null,ns(t,E,z,$)}}uy(),M=Qt;break}catch(fe){Lg(t,fe)}while(!0);return n&&t.shellSuspendCounter++,Vi=rr=null,Ct=o,I.H=u,I.A=h,ht===null&&(kt=null,St=0,_l()),M}function uy(){for(;ht!==null;)zg(ht)}function fy(t,n){var a=Ct;Ct|=2;var o=Pg(),u=Og();kt!==t||St!==n?(Zl=null,Yl=nt()+500,ts(t,n)):Qr=tt(t,n);e:do try{if(Dt!==0&&ht!==null){n=ht;var h=Wn;t:switch(Dt){case 1:Dt=0,Wn=null,ns(t,n,h,1);break;case 2:case 9:if(Yp(h)){Dt=0,Wn=null,Ig(n);break}n=function(){Dt!==2&&Dt!==9||kt!==t||(Dt=7),Ti(t)},h.then(n,n);break e;case 3:Dt=7;break e;case 4:Dt=5;break e;case 7:Yp(h)?(Dt=0,Wn=null,Ig(n)):(Dt=0,Wn=null,ns(t,n,h,7));break;case 5:var M=null;switch(ht.tag){case 26:M=ht.memoizedState;case 5:case 27:var E=ht;if(!M||_v(M)){Dt=0,Wn=null;var z=E.sibling;if(z!==null)ht=z;else{var $=E.return;$!==null?(ht=$,Ql($)):ht=null}break t}}Dt=0,Wn=null,ns(t,n,h,5);break;case 6:Dt=0,Wn=null,ns(t,n,h,6);break;case 8:zf(),Qt=6;break e;default:throw Error(s(462))}}dy();break}catch(fe){Lg(t,fe)}while(!0);return Vi=rr=null,I.H=o,I.A=u,Ct=a,ht!==null?0:(kt=null,St=0,_l(),Qt)}function dy(){for(;ht!==null&&!On();)zg(ht)}function zg(t){var n=cg(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,n===null?Ql(t):ht=n}function Ig(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ig(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=ig(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Ju(n);default:fg(a,n),n=ht=Bp(n,Ki),n=cg(a,n,Ki)}t.memoizedProps=t.pendingProps,n===null?Ql(t):ht=n}function ns(t,n,a,o){Vi=rr=null,Ju(n),Wr=null,fo=0;var u=n.return;try{if(ty(t,u,n,a,St)){Qt=1,Vl(t,ei(a,t.current)),ht=null;return}}catch(h){if(u!==null)throw ht=u,h;Qt=1,Vl(t,ei(a,t.current)),ht=null;return}n.flags&32768?(Rt||o===1?t=!0:Qr||(St&536870912)!==0?t=!1:(Ta=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),Bg(n,t)):Ql(n)}function Ql(t){var n=t;do{if((n.flags&32768)!==0){Bg(n,Ta);return}t=n.return;var a=iy(n.alternate,n,Ki);if(a!==null){ht=a;return}if(n=n.sibling,n!==null){ht=n;return}ht=n=t}while(n!==null);Qt===0&&(Qt=5)}function Bg(t,n){do{var a=ay(t.alternate,t);if(a!==null){a.flags&=32767,ht=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ht=t;return}ht=t=a}while(t!==null);Qt=6,ht=null}function Fg(t,n,a,o,u,h,M,E,z){t.cancelPendingCommit=null;do Jl();while(Mn!==0);if((Ct&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Ru,Ie(t,a,h,M,E,z),t===kt&&(ht=kt=null,St=0),$r=n,wa=t,es=a,Lf=h,Pf=u,Cg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,gy(O,function(){return jg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=K.p,K.p=2,M=Ct,Ct|=4;try{ry(t,n,a)}finally{Ct=M,K.p=u,I.T=o}}Mn=1,Hg(),Gg(),Vg()}}function Hg(){if(Mn===1){Mn=0;var t=wa,n=$r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=K.p;K.p=2;var u=Ct;Ct|=4;try{Mg(n,t);var h=Kf,M=wp(t.containerInfo),E=h.focusedElem,z=h.selectionRange;if(M!==E&&E&&E.ownerDocument&&Rp(E.ownerDocument.documentElement,E)){if(z!==null&&Mu(E)){var $=z.start,fe=z.end;if(fe===void 0&&(fe=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(fe,E.value.length);else{var ve=E.ownerDocument||document,ne=ve&&ve.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),et=E.textContent.length,Ze=Math.min(z.start,et),Ot=z.end===void 0?Ze:Math.min(z.end,et);!ie.extend&&Ze>Ot&&(M=Ot,Ot=Ze,Ze=M);var W=Ap(E,Ze),k=Ap(E,Ot);if(W&&k&&(ie.rangeCount!==1||ie.anchorNode!==W.node||ie.anchorOffset!==W.offset||ie.focusNode!==k.node||ie.focusOffset!==k.offset)){var Q=ve.createRange();Q.setStart(W.node,W.offset),ie.removeAllRanges(),Ze>Ot?(ie.addRange(Q),ie.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),ie.addRange(Q))}}}}for(ve=[],ie=E;ie=ie.parentNode;)ie.nodeType===1&&ve.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ve.length;E++){var pe=ve[E];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}uc=!!Zf,Kf=Zf=null}finally{Ct=u,K.p=o,I.T=a}}t.current=n,Mn=2}}function Gg(){if(Mn===2){Mn=0;var t=wa,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=K.p;K.p=2;var u=Ct;Ct|=4;try{_g(t,n.alternate,n)}finally{Ct=u,K.p=o,I.T=a}}Mn=3}}function Vg(){if(Mn===4||Mn===3){Mn=0,gt();var t=wa,n=$r,a=es,o=Cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,$r=wa=null,kg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ra=null),tn(a),n=n.stateNode,Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(he,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=K.p,K.p=2,I.T=null;try{for(var h=t.onRecoverableError,M=0;M<o.length;M++){var E=o[M];h(E.value,{componentStack:E.stack})}}finally{I.T=n,K.p=u}}(es&3)!==0&&Jl(),Ti(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Of?So++:(So=0,Of=t):So=0,Mo(0)}}function kg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,eo(n)))}function Jl(t){return Hg(),Gg(),Vg(),jg()}function jg(){if(Mn!==5)return!1;var t=wa,n=Lf;Lf=0;var a=tn(es),o=I.T,u=K.p;try{K.p=32>a?32:a,I.T=null,a=Pf,Pf=null;var h=wa,M=es;if(Mn=0,$r=wa=null,es=0,(Ct&6)!==0)throw Error(s(331));var E=Ct;if(Ct|=4,Rg(h.current),Eg(h,h.current,M,a),Ct=E,Mo(0,!1),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(he,h)}catch{}return!0}finally{K.p=u,I.T=o,kg(t,n)}}function Xg(t,n,a){n=ei(a,n),n=hf(t.stateNode,n,2),t=_a(t,n,2),t!==null&&(ge(t,2),Ti(t))}function Ft(t,n,a){if(t.tag===3)Xg(t,t,a);else for(;n!==null;){if(n.tag===3){Xg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){t=ei(a,t),a=Zm(2),o=_a(n,a,2),o!==null&&(Km(a,o,n,t),ge(o,2),Ti(o));break}}n=n.return}}function Ff(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new ly;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Cf=!0,u.add(a),t=hy.bind(null,t,n,a),n.then(t,t))}function hy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(St&a)===a&&(Qt===4||Qt===3&&(St&62914560)===St&&300>nt()-Nf?(Ct&2)===0&&ts(t,0):Df|=a,Jr===St&&(Jr=0)),Ti(t)}function qg(t,n){n===0&&(n=Le()),t=Ir(t,n),t!==null&&(ge(t,n),Ti(t))}function py(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),qg(t,a)}function my(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),qg(t,a)}function gy(t,n){return ut(t,n)}var $l=null,is=null,Hf=!1,ec=!1,Gf=!1,dr=0;function Ti(t){t!==is&&t.next===null&&(is===null?$l=is=t:is=is.next=t),ec=!0,Hf||(Hf=!0,_y())}function Mo(t,n){if(!Gf&&ec){Gf=!0;do for(var a=!1,o=$l;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,E=o.pingedLanes;h=(1<<31-Ce(42|t)+1)-1,h&=u&~(M&~E),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Kg(o,h))}else h=St,h=lt(o,o===kt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||tt(o,h)||(a=!0,Kg(o,h));o=o.next}while(a);Gf=!1}}function vy(){Wg()}function Wg(){ec=Hf=!1;var t=0;dr!==0&&(Ay()&&(t=dr),dr=0);for(var n=nt(),a=null,o=$l;o!==null;){var u=o.next,h=Yg(o,n);h===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(is=a)):(a=o,(t!==0||(h&3)!==0)&&(ec=!0)),o=u}Mo(t)}function Yg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var M=31-Ce(h),E=1<<M,z=u[M];z===-1?((E&a)===0||(E&o)!==0)&&(u[M]=Nt(E,n)):z<=n&&(t.expiredLanes|=E),h&=~E}if(n=kt,a=St,a=lt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&H(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||tt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&H(o),tn(a)){case 2:case 8:a=Ve;break;case 32:a=O;break;case 268435456:a=te;break;default:a=O}return o=Zg.bind(null,t),a=ut(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&H(o),t.callbackPriority=2,t.callbackNode=null,2}function Zg(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Jl()&&t.callbackNode!==a)return null;var o=St;return o=lt(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Ug(t,o,n),Yg(t,nt()),t.callbackNode!=null&&t.callbackNode===a?Zg.bind(null,t):null)}function Kg(t,n){if(Jl())return null;Ug(t,n,!0)}function _y(){wy(function(){(Ct&6)!==0?ut(Ut,vy):Wg()})}function Vf(){return dr===0&&(dr=j()),dr}function Qg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fl(""+t)}function Jg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function xy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Qg((u[xn]||null).action),M=o.submitter;M&&(n=(n=M[xn]||null)?Qg(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var E=new ml("action","action",null,o,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(dr!==0){var z=M?Jg(u,M):new FormData(u);lf(a,{pending:!0,data:z,method:u.method,action:h},null,z)}}else typeof h=="function"&&(E.preventDefault(),z=M?Jg(u,M):new FormData(u),lf(a,{pending:!0,data:z,method:u.method,action:h},h,z))},currentTarget:u}]})}}for(var kf=0;kf<Au.length;kf++){var jf=Au[kf],yy=jf.toLowerCase(),Sy=jf[0].toUpperCase()+jf.slice(1);ui(yy,"on"+Sy)}ui(Up,"onAnimationEnd"),ui(Np,"onAnimationIteration"),ui(Lp,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(Bx,"onTransitionRun"),ui(Fx,"onTransitionStart"),ui(Hx,"onTransitionCancel"),ui(Pp,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),My=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function $g(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var E=o[M],z=E.instance,$=E.currentTarget;if(E=E.listener,z!==h&&u.isPropagationStopped())break e;h=E,u.currentTarget=$;try{h(u)}catch(fe){Gl(fe)}u.currentTarget=null,h=z}else for(M=0;M<o.length;M++){if(E=o[M],z=E.instance,$=E.currentTarget,E=E.listener,z!==h&&u.isPropagationStopped())break e;h=E,u.currentTarget=$;try{h(u)}catch(fe){Gl(fe)}u.currentTarget=null,h=z}}}}function pt(t,n){var a=n[Ya];a===void 0&&(a=n[Ya]=new Set);var o=t+"__bubble";a.has(o)||(ev(n,t,2,!1),a.add(o))}function Xf(t,n,a){var o=0;n&&(o|=4),ev(a,t,o,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function qf(t){if(!t[tc]){t[tc]=!0,cl.forEach(function(a){a!=="selectionchange"&&(My.has(a)||Xf(a,!1,t),Xf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[tc]||(n[tc]=!0,Xf("selectionchange",!1,n))}}function ev(t,n,a,o){switch(Ev(n)){case 2:var u=Zy;break;case 8:u=Ky;break;default:u=sd}a=u.bind(null,n,a,t),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Wf(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var E=o.stateNode.containerInfo;if(E===u)break;if(M===4)for(M=o.return;M!==null;){var z=M.tag;if((z===3||z===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;E!==null;){if(M=Li(E),M===null)return;if(z=M.tag,z===5||z===6||z===26||z===27){o=h=M;continue e}E=E.parentNode}}o=o.return}op(function(){var $=h,fe=fu(a),ve=[];e:{var ne=Op.get(t);if(ne!==void 0){var ie=ml,et=t;switch(t){case"keypress":if(hl(a)===0)break e;case"keydown":case"keyup":ie=gx;break;case"focusin":et="focus",ie=vu;break;case"focusout":et="blur",ie=vu;break;case"beforeblur":case"afterblur":ie=vu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=xx;break;case Up:case Np:case Lp:ie=ox;break;case Pp:ie=Sx;break;case"scroll":case"scrollend":ie=nx;break;case"wheel":ie=bx;break;case"copy":case"cut":case"paste":ie=cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=dp;break;case"toggle":case"beforetoggle":ie=Tx}var Ze=(n&4)!==0,Ot=!Ze&&(t==="scroll"||t==="scrollend"),W=Ze?ne!==null?ne+"Capture":null:ne;Ze=[];for(var k=$,Q;k!==null;){var pe=k;if(Q=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||Q===null||W===null||(pe=Gs(k,W),pe!=null&&Ze.push(Eo(k,pe,Q))),Ot)break;k=k.return}0<Ze.length&&(ne=new ie(ne,et,null,a,fe),ve.push({event:ne,listeners:Ze}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ne&&a!==uu&&(et=a.relatedTarget||a.fromElement)&&(Li(et)||et[zn]))break e;if((ie||ne)&&(ne=fe.window===fe?fe:(ne=fe.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?(et=a.relatedTarget||a.toElement,ie=$,et=et?Li(et):null,et!==null&&(Ot=c(et),Ze=et.tag,et!==Ot||Ze!==5&&Ze!==27&&Ze!==6)&&(et=null)):(ie=null,et=$),ie!==et)){if(Ze=up,pe="onMouseLeave",W="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Ze=dp,pe="onPointerLeave",W="onPointerEnter",k="pointer"),Ot=ie==null?ne:Ka(ie),Q=et==null?ne:Ka(et),ne=new Ze(pe,k+"leave",ie,a,fe),ne.target=Ot,ne.relatedTarget=Q,pe=null,Li(fe)===$&&(Ze=new Ze(W,k+"enter",et,a,fe),Ze.target=Q,Ze.relatedTarget=Ot,pe=Ze),Ot=pe,ie&&et)t:{for(Ze=ie,W=et,k=0,Q=Ze;Q;Q=as(Q))k++;for(Q=0,pe=W;pe;pe=as(pe))Q++;for(;0<k-Q;)Ze=as(Ze),k--;for(;0<Q-k;)W=as(W),Q--;for(;k--;){if(Ze===W||W!==null&&Ze===W.alternate)break t;Ze=as(Ze),W=as(W)}Ze=null}else Ze=null;ie!==null&&tv(ve,ne,ie,Ze,!1),et!==null&&Ot!==null&&tv(ve,Ot,et,Ze,!0)}}e:{if(ne=$?Ka($):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var Ge=yp;else if(_p(ne))if(Sp)Ge=Ox;else{Ge=Lx;var ft=Nx}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?$&&cu($.elementType)&&(Ge=yp):Ge=Px;if(Ge&&(Ge=Ge(t,$))){xp(ve,Ge,a,fe);break e}ft&&ft(t,ne,$),t==="focusout"&&$&&ne.type==="number"&&$.memoizedProps.value!=null&&Tn(ne,"number",ne.value)}switch(ft=$?Ka($):window,t){case"focusin":(_p(ft)||ft.contentEditable==="true")&&(Pr=ft,bu=$,Zs=null);break;case"focusout":Zs=bu=Pr=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,Cp(ve,a,fe);break;case"selectionchange":if(Ix)break;case"keydown":case"keyup":Cp(ve,a,fe)}var ke;if(xu)e:{switch(t){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else Lr?gp(t,a)&&(Je="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Je="onCompositionStart");Je&&(hp&&a.locale!=="ko"&&(Lr||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&Lr&&(ke=lp()):(pa=fe,pu="value"in pa?pa.value:pa.textContent,Lr=!0)),ft=nc($,Je),0<ft.length&&(Je=new fp(Je,t,null,a,fe),ve.push({event:Je,listeners:ft}),ke?Je.data=ke:(ke=vp(a),ke!==null&&(Je.data=ke)))),(ke=Rx?wx(t,a):Cx(t,a))&&(Je=nc($,"onBeforeInput"),0<Je.length&&(ft=new fp("onBeforeInput","beforeinput",null,a,fe),ve.push({event:ft,listeners:Je}),ft.data=ke)),xy(ve,t,$,a,fe)}$g(ve,n)})}function Eo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function nc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Gs(t,a),u!=null&&o.unshift(Eo(t,u,h)),u=Gs(t,n),u!=null&&o.push(Eo(t,u,h))),t.tag===3)return o;t=t.return}return[]}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function tv(t,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var E=a,z=E.alternate,$=E.stateNode;if(E=E.tag,z!==null&&z===o)break;E!==5&&E!==26&&E!==27||$===null||(z=$,u?($=Gs(a,h),$!=null&&M.unshift(Eo(a,$,z))):u||($=Gs(a,h),$!=null&&M.push(Eo(a,$,z)))),a=a.return}M.length!==0&&t.push({event:n,listeners:M})}var by=/\r\n?/g,Ey=/\u0000|\uFFFD/g;function nv(t){return(typeof t=="string"?t:""+t).replace(by,`
`).replace(Ey,"")}function iv(t,n){return n=nv(n),nv(t)===n}function ic(){}function Pt(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||yi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&yi(t,""+o);break;case"className":De(t,"class",o);break;case"tabIndex":De(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":De(t,a,o);break;case"style":rp(t,o,h);break;case"data":if(n!=="object"){De(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Pt(t,n,"name",u.name,u,null),Pt(t,n,"formEncType",u.formEncType,u,null),Pt(t,n,"formMethod",u.formMethod,u,null),Pt(t,n,"formTarget",u.formTarget,u,null)):(Pt(t,n,"encType",u.encType,u,null),Pt(t,n,"method",u.method,u,null),Pt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ic);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=fl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":pt("beforetoggle",t),pt("toggle",t),Te(t,"popover",o);break;case"xlinkActuate":Ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ue(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ue(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ue(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ue(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Te(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ex.get(a)||a,Te(t,a,o))}}function Yf(t,n,a,o,u,h){switch(a){case"style":rp(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?yi(t,o):(typeof o=="number"||typeof o=="bigint")&&yi(t,""+o);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ic);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ul.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[xn]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Te(t,a,o)}}}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pt("error",t),pt("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pt(t,n,h,M,a,null)}}u&&Pt(t,n,"srcSet",a.srcSet,a,null),o&&Pt(t,n,"src",a.src,a,null);return;case"input":pt("invalid",t);var E=h=M=u=null,z=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var fe=a[o];if(fe!=null)switch(o){case"name":u=fe;break;case"type":M=fe;break;case"checked":z=fe;break;case"defaultChecked":$=fe;break;case"value":h=fe;break;case"defaultValue":E=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:Pt(t,n,o,fe,a,null)}}Bt(t,h,E,z,$,M,u,!1),Zt(t);return;case"select":pt("invalid",t),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":h=E;break;case"defaultValue":M=E;break;case"multiple":o=E;default:Pt(t,n,u,E,a,null)}n=h,a=M,t.multiple=!!o,n!=null?ln(t,!!o,n,!1):a!=null&&ln(t,!!o,a,!0);return;case"textarea":pt("invalid",t),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(E=a[M],E!=null))switch(M){case"value":o=E;break;case"defaultValue":u=E;break;case"children":h=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Pt(t,n,M,E,a,null)}yn(t,o,u,h),Zt(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pt(t,n,z,o,a,null)}return;case"dialog":pt("beforetoggle",t),pt("toggle",t),pt("cancel",t),pt("close",t);break;case"iframe":case"object":pt("load",t);break;case"video":case"audio":for(o=0;o<bo.length;o++)pt(bo[o],t);break;case"image":pt("error",t),pt("load",t);break;case"details":pt("toggle",t);break;case"embed":case"source":case"link":pt("error",t),pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pt(t,n,$,o,a,null)}return;default:if(cu(n)){for(fe in a)a.hasOwnProperty(fe)&&(o=a[fe],o!==void 0&&Yf(t,n,fe,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&Pt(t,n,E,o,a,null))}function Ty(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,E=null,z=null,$=null,fe=null;for(ie in a){var ve=a[ie];if(a.hasOwnProperty(ie)&&ve!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":z=ve;default:o.hasOwnProperty(ie)||Pt(t,n,ie,null,o,ve)}}for(var ne in o){var ie=o[ne];if(ve=a[ne],o.hasOwnProperty(ne)&&(ie!=null||ve!=null))switch(ne){case"type":h=ie;break;case"name":u=ie;break;case"checked":$=ie;break;case"defaultChecked":fe=ie;break;case"value":M=ie;break;case"defaultValue":E=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,n));break;default:ie!==ve&&Pt(t,n,ne,ie,o,ve)}}zi(t,M,E,z,$,fe,h,u);return;case"select":ie=M=E=ne=null;for(h in a)if(z=a[h],a.hasOwnProperty(h)&&z!=null)switch(h){case"value":break;case"multiple":ie=z;default:o.hasOwnProperty(h)||Pt(t,n,h,null,o,z)}for(u in o)if(h=o[u],z=a[u],o.hasOwnProperty(u)&&(h!=null||z!=null))switch(u){case"value":ne=h;break;case"defaultValue":E=h;break;case"multiple":M=h;default:h!==z&&Pt(t,n,u,h,o,z)}n=E,a=M,o=ie,ne!=null?ln(t,!!a,ne,!1):!!o!=!!a&&(n!=null?ln(t,!!a,n,!0):ln(t,!!a,a?[]:"",!1));return;case"textarea":ie=ne=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Pt(t,n,E,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":ne=u;break;case"defaultValue":ie=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Pt(t,n,M,u,o,h)}pn(t,ne,ie);return;case"option":for(var et in a)if(ne=a[et],a.hasOwnProperty(et)&&ne!=null&&!o.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:Pt(t,n,et,null,o,ne)}for(z in o)if(ne=o[z],ie=a[z],o.hasOwnProperty(z)&&ne!==ie&&(ne!=null||ie!=null))switch(z){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Pt(t,n,z,ne,o,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ze in a)ne=a[Ze],a.hasOwnProperty(Ze)&&ne!=null&&!o.hasOwnProperty(Ze)&&Pt(t,n,Ze,null,o,ne);for($ in o)if(ne=o[$],ie=a[$],o.hasOwnProperty($)&&ne!==ie&&(ne!=null||ie!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,n));break;default:Pt(t,n,$,ne,o,ie)}return;default:if(cu(n)){for(var Ot in a)ne=a[Ot],a.hasOwnProperty(Ot)&&ne!==void 0&&!o.hasOwnProperty(Ot)&&Yf(t,n,Ot,void 0,o,ne);for(fe in o)ne=o[fe],ie=a[fe],!o.hasOwnProperty(fe)||ne===ie||ne===void 0&&ie===void 0||Yf(t,n,fe,ne,o,ie);return}}for(var W in a)ne=a[W],a.hasOwnProperty(W)&&ne!=null&&!o.hasOwnProperty(W)&&Pt(t,n,W,null,o,ne);for(ve in o)ne=o[ve],ie=a[ve],!o.hasOwnProperty(ve)||ne===ie||ne==null&&ie==null||Pt(t,n,ve,ne,o,ie)}var Zf=null,Kf=null;function ac(t){return t.nodeType===9?t:t.ownerDocument}function av(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Qf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jf=null;function Ay(){var t=window.event;return t&&t.type==="popstate"?t===Jf?!1:(Jf=t,!0):(Jf=null,!1)}var sv=typeof setTimeout=="function"?setTimeout:void 0,Ry=typeof clearTimeout=="function"?clearTimeout:void 0,ov=typeof Promise=="function"?Promise:void 0,wy=typeof queueMicrotask=="function"?queueMicrotask:typeof ov<"u"?function(t){return ov.resolve(null).then(t).catch(Cy)}:sv;function Cy(t){setTimeout(function(){throw t})}function Da(t){return t==="head"}function lv(t,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var M=t.ownerDocument;if(a&1&&To(M.documentElement),a&2&&To(M.body),a&4)for(a=M.head,To(a),M=a.firstChild;M;){var E=M.nextSibling,z=M.nodeName;M[ua]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=E}}if(u===0){t.removeChild(h),Lo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Lo(n)}function $f(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$f(a),fa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Dy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ua])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function Uy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function ed(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Ny(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var td=null;function cv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function uv(t,n,a){switch(n=ac(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function To(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);fa(t)}var si=new Map,fv=new Set;function rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=K.d;K.d={f:Ly,r:Py,D:Oy,C:zy,L:Iy,m:By,X:Hy,S:Fy,M:Gy};function Ly(){var t=Qi.f(),n=Kl();return t||n}function Py(t){var n=Pi(t);n!==null&&n.tag===5&&n.type==="form"?Um(n):Qi.r(t)}var rs=typeof document>"u"?null:document;function dv(t,n,a){var o=rs;if(o&&typeof n=="string"&&n){var u=Vt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),fv.has(u)||(fv.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),bn(n,"link",t),nn(n),o.head.appendChild(n)))}}function Oy(t){Qi.D(t),dv("dns-prefetch",t,null)}function zy(t,n){Qi.C(t,n),dv("preconnect",t,n)}function Iy(t,n,a){Qi.L(t,n,a);var o=rs;if(o&&t&&n){var u='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Vt(a.imageSizes)+'"]')):u+='[href="'+Vt(t)+'"]';var h=u;switch(n){case"style":h=ss(t);break;case"script":h=os(t)}si.has(h)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),si.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ao(h))||n==="script"&&o.querySelector(Ro(h))||(n=o.createElement("link"),bn(n,"link",t),nn(n),o.head.appendChild(n)))}}function By(t,n){Qi.m(t,n);var a=rs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=os(t)}if(!si.has(h)&&(t=g({rel:"modulepreload",href:t},n),si.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(h)))return}o=a.createElement("link"),bn(o,"link",t),nn(o),a.head.appendChild(o)}}}function Fy(t,n,a){Qi.S(t,n,a);var o=rs;if(o&&t){var u=da(o).hoistableStyles,h=ss(t);n=n||"default";var M=u.get(h);if(!M){var E={loading:0,preload:null};if(M=o.querySelector(Ao(h)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=si.get(h))&&nd(t,a);var z=M=o.createElement("link");nn(z),bn(z,"link",t),z._p=new Promise(function($,fe){z.onload=$,z.onerror=fe}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,sc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:E},u.set(h,M)}}}function Hy(t,n){Qi.X(t,n);var a=rs;if(a&&t){var o=da(a).hoistableScripts,u=os(t),h=o.get(u);h||(h=a.querySelector(Ro(u)),h||(t=g({src:t,async:!0},n),(n=si.get(u))&&id(t,n),h=a.createElement("script"),nn(h),bn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Gy(t,n){Qi.M(t,n);var a=rs;if(a&&t){var o=da(a).hoistableScripts,u=os(t),h=o.get(u);h||(h=a.querySelector(Ro(u)),h||(t=g({src:t,async:!0,type:"module"},n),(n=si.get(u))&&id(t,n),h=a.createElement("script"),nn(h),bn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function hv(t,n,a,o){var u=(u=Se.current)?rc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ss(a.href),a=da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ss(a.href);var h=da(u).hoistableStyles,M=h.get(t);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,M),(h=u.querySelector(Ao(t)))&&!h._p&&(M.instance=h,M.state.loading=5),si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(t,a),h||Vy(u,t,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=os(a),a=da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ss(t){return'href="'+Vt(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function pv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Vy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),nn(n),t.head.appendChild(n))}function os(t){return'[src="'+Vt(t)+'"]'}function Ro(t){return"script[async]"+t}function mv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),nn(o),bn(o,"style",u),sc(o,a.precedence,t),n.instance=o;case"stylesheet":u=ss(a.href);var h=t.querySelector(Ao(u));if(h)return n.state.loading|=4,n.instance=h,nn(h),h;o=pv(a),(u=si.get(u))&&nd(o,u),h=(t.ownerDocument||t).createElement("link"),nn(h);var M=h;return M._p=new Promise(function(E,z){M.onload=E,M.onerror=z}),bn(h,"link",o),n.state.loading|=4,sc(h,a.precedence,t),n.instance=h;case"script":return h=os(a.src),(u=t.querySelector(Ro(h)))?(n.instance=u,nn(u),u):(o=a,(u=si.get(h))&&(o=g({},a),id(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),nn(u),bn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,t));return n.instance}function sc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var E=o[M];if(E.dataset.precedence===n)h=E;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var oc=null;function gv(t,n,a){if(oc===null){var o=new Map,u=oc=new Map;u.set(a,o)}else u=oc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[ua]||h[on]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=t+M;var E=o.get(M);E?E.push(h):o.set(M,[h])}}return o}function vv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ky(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _v(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var wo=null;function jy(){}function Xy(t,n,a){if(wo===null)throw Error(s(475));var o=wo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ss(a.href),h=t.querySelector(Ao(u));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=lc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=h,nn(h);return}h=t.ownerDocument||t,a=pv(a),(u=si.get(u))&&nd(a,u),h=h.createElement("link"),nn(h);var M=h;M._p=new Promise(function(E,z){M.onload=E,M.onerror=z}),bn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=lc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function qy(){if(wo===null)throw Error(s(475));var t=wo;return t.stylesheets&&t.count===0&&ad(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&ad(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function lc(){if(this.count--,this.count===0){if(this.stylesheets)ad(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cc=null;function ad(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cc=new Map,n.forEach(Wy,t),cc=null,lc.call(t))}function Wy(t,n){if(!(n.state.loading&4)){var a=cc.get(t);if(a)var o=a.get(null);else{a=new Map,cc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=lc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:U,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Yy(t,n,a,o,u,h,M,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ue(0),this.hiddenUpdates=ue(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function xv(t,n,a,o,u,h,M,E,z,$,fe,ve){return t=new Yy(t,n,a,M,E,z,$,ve),n=1,h===!0&&(n|=24),h=jn(3,null,null,n),t.current=h,h.stateNode=t,n=Bu(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Vu(h),t}function yv(t){return t?(t=Br,t):Br}function Sv(t,n,a,o,u,h){u=yv(u),o.context===null?o.context=u:o.pendingContext=u,o=va(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=_a(t,o,n),a!==null&&(Zn(a,t,n),ao(a,t,n))}function Mv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function rd(t,n){Mv(t,n),(t=t.alternate)&&Mv(t,n)}function bv(t){if(t.tag===13){var n=Ir(t,67108864);n!==null&&Zn(n,t,67108864),rd(t,67108864)}}var uc=!0;function Zy(t,n,a,o){var u=I.T;I.T=null;var h=K.p;try{K.p=2,sd(t,n,a,o)}finally{K.p=h,I.T=u}}function Ky(t,n,a,o){var u=I.T;I.T=null;var h=K.p;try{K.p=8,sd(t,n,a,o)}finally{K.p=h,I.T=u}}function sd(t,n,a,o){if(uc){var u=od(o);if(u===null)Wf(t,n,o,fc,a),Tv(t,o);else if(Jy(u,t,n,a,o))o.stopPropagation();else if(Tv(t,o),n&4&&-1<Qy.indexOf(t)){for(;u!==null;){var h=Pi(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=ze(h.pendingLanes);if(M!==0){var E=h;for(E.pendingLanes|=2,E.entangledLanes|=2;M;){var z=1<<31-Ce(M);E.entanglements[1]|=z,M&=~z}Ti(h),(Ct&6)===0&&(Yl=nt()+500,Mo(0))}}break;case 13:E=Ir(h,2),E!==null&&Zn(E,h,2),Kl(),rd(h,2)}if(h=od(o),h===null&&Wf(t,n,o,fc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Wf(t,n,o,null,a)}}function od(t){return t=fu(t),ld(t)}var fc=null;function ld(t){if(fc=null,t=Li(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return fc=t,null}function Ev(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xe()){case Ut:return 2;case Ve:return 8;case O:case T:return 32;case te:return 268435456;default:return 32}default:return 32}}var cd=!1,Ua=null,Na=null,La=null,Do=new Map,Uo=new Map,Pa=[],Qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tv(t,n){switch(t){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function No(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Pi(n),n!==null&&bv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Jy(t,n,a,o,u){switch(n){case"focusin":return Ua=No(Ua,t,n,a,o,u),!0;case"dragenter":return Na=No(Na,t,n,a,o,u),!0;case"mouseover":return La=No(La,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Do.set(h,No(Do.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Uo.set(h,No(Uo.get(h)||null,t,n,a,o,u)),!0}return!1}function Av(t){var n=Li(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Vn(t.priority,function(){if(a.tag===13){var o=Yn();o=Gt(o);var u=Ir(a,o);u!==null&&Zn(u,a,o),rd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=od(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);uu=o,a.target.dispatchEvent(o),uu=null}else return n=Pi(a),n!==null&&bv(n),t.blockedOn=a,!1;n.shift()}return!0}function Rv(t,n,a){dc(t)&&a.delete(n)}function $y(){cd=!1,Ua!==null&&dc(Ua)&&(Ua=null),Na!==null&&dc(Na)&&(Na=null),La!==null&&dc(La)&&(La=null),Do.forEach(Rv),Uo.forEach(Rv)}function hc(t,n){t.blockedOn===n&&(t.blockedOn=null,cd||(cd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,$y)))}var pc=null;function wv(t){pc!==t&&(pc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pc===t&&(pc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(ld(o||a)===null)continue;break}var h=Pi(a);h!==null&&(t.splice(n,3),n-=3,lf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Lo(t){function n(z){return hc(z,t)}Ua!==null&&hc(Ua,t),Na!==null&&hc(Na,t),La!==null&&hc(La,t),Do.forEach(n),Uo.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)Av(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[xn]||null;if(typeof h=="function")M||wv(a);else if(M){var E=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[xn]||null)E=M.formAction;else if(ld(u)!==null)continue}else E=M.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),wv(a)}}}function ud(t){this._internalRoot=t}mc.prototype.render=ud.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Yn();Sv(a,o,t,n,null,null)},mc.prototype.unmount=ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Sv(t.current,2,null,t,null,null),Kl(),n[zn]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=bt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&Av(t)}};var Cv=e.version;if(Cv!=="19.1.0")throw Error(s(527,Cv,"19.1.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var eS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{he=gc.inject(eS),Be=gc}catch{}}return Oo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Xm,h=qm,M=Wm,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=xv(t,1,!1,null,null,a,o,u,h,M,E,null),t[zn]=n.current,qf(t),new ud(n)},Oo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",h=Xm,M=qm,E=Wm,z=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=xv(t,1,!0,n,a??null,o,u,h,M,E,z,$),n.context=yv(null),a=n.current,o=Yn(),o=Gt(o),u=va(o),u.callback=null,_a(a,u,o),a=o,n.current.lanes=a,ge(n,a),Ti(n),t[zn]=n.current,qf(t),new mc(n)},Oo.version="19.1.0",Oo}var Fv;function fS(){if(Fv)return hd.exports;Fv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hd.exports=uS(),hd.exports}var dS=fS(),zo={},Hv;function hS(){if(Hv)return zo;Hv=1,Object.defineProperty(zo,"__esModule",{value:!0}),zo.parse=f,zo.serialize=m;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function f(x,S){const b=new c,A=x.length;if(A<2)return b;const y=(S==null?void 0:S.decode)||g;let v=0;do{const L=x.indexOf("=",v);if(L===-1)break;const U=x.indexOf(";",v),D=U===-1?A:U;if(L>D){v=x.lastIndexOf(";",L-1)+1;continue}const B=d(x,v,L),G=p(x,L,B),F=x.slice(B,G);if(b[F]===void 0){let X=d(x,L+1,D),N=p(x,D,X);const C=y(x.slice(X,N));b[F]=C}v=D+1}while(v<A);return b}function d(x,S,b){do{const A=x.charCodeAt(S);if(A!==32&&A!==9)return S}while(++S<b);return b}function p(x,S,b){for(;S>b;){const A=x.charCodeAt(--S);if(A!==32&&A!==9)return S+1}return b}function m(x,S,b){const A=(b==null?void 0:b.encode)||encodeURIComponent;if(!r.test(x))throw new TypeError(`argument name is invalid: ${x}`);const y=A(S);if(!e.test(y))throw new TypeError(`argument val is invalid: ${S}`);let v=x+"="+y;if(!b)return v;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);v+="; Max-Age="+b.maxAge}if(b.domain){if(!i.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);v+="; Domain="+b.domain}if(b.path){if(!s.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);v+="; Path="+b.path}if(b.expires){if(!_(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);v+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(v+="; HttpOnly"),b.secure&&(v+="; Secure"),b.partitioned&&(v+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":v+="; Priority=Low";break;case"medium":v+="; Priority=Medium";break;case"high":v+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"none":v+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return v}function g(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function _(x){return l.call(x)==="[object Date]"}return zo}hS();/**
 * react-router v7.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Gv="popstate";function pS(r={}){function e(s,l){let{pathname:c,search:f,hash:d}=s.location;return Wd("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:Yo(l)}return gS(e,i,null,r)}function Yt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Di(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mS(){return Math.random().toString(36).substring(2,10)}function Vv(r,e){return{usr:r.state,key:r.key,idx:e}}function Wd(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ps(e):e,state:i,key:e&&e.key||s||mS()}}function Yo({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Ps(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function gS(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,d="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function _(){d="POP";let y=g(),v=y==null?null:y-m;m=y,p&&p({action:d,location:A.location,delta:v})}function x(y,v){d="PUSH";let L=Wd(A.location,y,v);m=g()+1;let U=Vv(L,m),D=A.createHref(L);try{f.pushState(U,"",D)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(D)}c&&p&&p({action:d,location:A.location,delta:1})}function S(y,v){d="REPLACE";let L=Wd(A.location,y,v);m=g();let U=Vv(L,m),D=A.createHref(L);f.replaceState(U,"",D),c&&p&&p({action:d,location:A.location,delta:0})}function b(y){let v=l.location.origin!=="null"?l.location.origin:l.location.href,L=typeof y=="string"?y:Yo(y);return L=L.replace(/ $/,"%20"),Yt(v,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,v)}let A={get action(){return d},get location(){return r(l,f)},listen(y){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(Gv,_),p=y,()=>{l.removeEventListener(Gv,_),p=null}},createHref(y){return e(l,y)},createURL:b,encodeLocation(y){let v=b(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:S,go(y){return f.go(y)}};return A}function t0(r,e,i="/"){return vS(r,e,i,!1)}function vS(r,e,i,s){let l=typeof e=="string"?Ps(e):e,c=la(l.pathname||"/",i);if(c==null)return null;let f=n0(r);_S(f);let d=null;for(let p=0;d==null&&p<f.length;++p){let m=CS(c);d=RS(f[p],m,s)}return d}function n0(r,e=[],i=[],s=""){let l=(c,f,d)=>{let p={relativePath:d===void 0?c.path||"":d,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(Yt(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=sa([s,p.relativePath]),g=i.concat(p);c.children&&c.children.length>0&&(Yt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),n0(c.children,e,g,m)),!(c.path==null&&!c.index)&&e.push({path:m,score:TS(m,c.index),routesMeta:g})};return r.forEach((c,f)=>{var d;if(c.path===""||!((d=c.path)!=null&&d.includes("?")))l(c,f);else for(let p of i0(c.path))l(c,f,p)}),e}function i0(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=i0(s.join("/")),d=[];return d.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&d.push(...f),d.map(p=>r.startsWith("/")&&p===""?"/":p)}function _S(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:AS(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var xS=/^:[\w-]+$/,yS=3,SS=2,MS=1,bS=10,ES=-2,kv=r=>r==="*";function TS(r,e){let i=r.split("/"),s=i.length;return i.some(kv)&&(s+=ES),e&&(s+=SS),i.filter(l=>!kv(l)).reduce((l,c)=>l+(xS.test(c)?yS:c===""?MS:bS),s)}function AS(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function RS(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let d=0;d<s.length;++d){let p=s[d],m=d===s.length-1,g=c==="/"?e:e.slice(c.length)||"/",_=Kc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),x=p.route;if(!_&&m&&i&&!s[s.length-1].route.index&&(_=Kc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:sa([c,_.pathname]),pathnameBase:LS(sa([c,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(c=sa([c,_.pathnameBase]))}return f}function Kc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=wS(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((m,{paramName:g,isOptional:_},x)=>{if(g==="*"){let b=d[x]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const S=d[x];return _&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:r}}function wS(r,e=!1,i=!0){Di(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,p)=>(s.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function CS(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Di(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function la(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function DS(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Ps(r):r;return{pathname:i?i.startsWith("/")?i:US(i,e):e,search:PS(s),hash:OS(l)}}function US(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function vd(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function NS(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function a0(r){let e=NS(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function r0(r,e,i,s=!1){let l;typeof r=="string"?l=Ps(r):(l={...r},Yt(!l.pathname||!l.pathname.includes("?"),vd("?","pathname","search",l)),Yt(!l.pathname||!l.pathname.includes("#"),vd("#","pathname","hash",l)),Yt(!l.search||!l.search.includes("#"),vd("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let _=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;l.pathname=x.join("/")}d=_>=0?e[_]:"/"}let p=DS(l,d),m=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var sa=r=>r.join("/").replace(/\/\/+/g,"/"),LS=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),PS=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,OS=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function zS(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var s0=["POST","PUT","PATCH","DELETE"];new Set(s0);var IS=["GET",...s0];new Set(IS);var Os=re.createContext(null);Os.displayName="DataRouter";var nu=re.createContext(null);nu.displayName="DataRouterState";var o0=re.createContext({isTransitioning:!1});o0.displayName="ViewTransition";var BS=re.createContext(new Map);BS.displayName="Fetchers";var FS=re.createContext(null);FS.displayName="Await";var Ui=re.createContext(null);Ui.displayName="Navigation";var el=re.createContext(null);el.displayName="Location";var Ni=re.createContext({outlet:null,matches:[],isDataRoute:!1});Ni.displayName="Route";var Ih=re.createContext(null);Ih.displayName="RouteError";function HS(r,{relative:e}={}){Yt(tl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=re.useContext(Ui),{hash:l,pathname:c,search:f}=nl(r,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:sa([i,c])),s.createHref({pathname:d,search:f,hash:l})}function tl(){return re.useContext(el)!=null}function wr(){return Yt(tl(),"useLocation() may be used only in the context of a <Router> component."),re.useContext(el).location}var l0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function c0(r){re.useContext(Ui).static||re.useLayoutEffect(r)}function GS(){let{isDataRoute:r}=re.useContext(Ni);return r?tM():VS()}function VS(){Yt(tl(),"useNavigate() may be used only in the context of a <Router> component.");let r=re.useContext(Os),{basename:e,navigator:i}=re.useContext(Ui),{matches:s}=re.useContext(Ni),{pathname:l}=wr(),c=JSON.stringify(a0(s)),f=re.useRef(!1);return c0(()=>{f.current=!0}),re.useCallback((p,m={})=>{if(Di(f.current,l0),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=r0(p,JSON.parse(c),l,m.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:sa([e,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[e,i,c,l,r])}re.createContext(null);function kS(){let{matches:r}=re.useContext(Ni),e=r[r.length-1];return e?e.params:{}}function nl(r,{relative:e}={}){let{matches:i}=re.useContext(Ni),{pathname:s}=wr(),l=JSON.stringify(a0(i));return re.useMemo(()=>r0(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function jS(r,e){return u0(r,e)}function u0(r,e,i,s){var L;Yt(tl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=re.useContext(Ui),{matches:f}=re.useContext(Ni),d=f[f.length-1],p=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",_=d&&d.route;{let U=_&&_.path||"";f0(m,!_||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let x=wr(),S;if(e){let U=typeof e=="string"?Ps(e):e;Yt(g==="/"||((L=U.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),S=U}else S=x;let b=S.pathname||"/",A=b;if(g!=="/"){let U=g.replace(/^\//,"").split("/");A="/"+b.replace(/^\//,"").split("/").slice(U.length).join("/")}let y=!c&&i&&i.matches&&i.matches.length>0?i.matches:t0(r,{pathname:A});Di(_||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Di(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=ZS(y&&y.map(U=>Object.assign({},U,{params:Object.assign({},p,U.params),pathname:sa([g,l.encodeLocation?l.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:sa([g,l.encodeLocation?l.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),f,i,s);return e&&v?re.createElement(el.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},v):v}function XS(){let r=eM(),e=zS(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=re.createElement(re.Fragment,null,re.createElement("p",null,"💿 Hey developer 👋"),re.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",re.createElement("code",{style:c},"ErrorBoundary")," or"," ",re.createElement("code",{style:c},"errorElement")," prop on your route.")),re.createElement(re.Fragment,null,re.createElement("h2",null,"Unexpected Application Error!"),re.createElement("h3",{style:{fontStyle:"italic"}},e),i?re.createElement("pre",{style:l},i):null,f)}var qS=re.createElement(XS,null),WS=class extends re.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?re.createElement(Ni.Provider,{value:this.props.routeContext},re.createElement(Ih.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function YS({routeContext:r,match:e,children:i}){let s=re.useContext(Os);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),re.createElement(Ni.Provider,{value:r},i)}function ZS(r,e=[],i=null,s=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let l=r,c=i==null?void 0:i.errors;if(c!=null){let p=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);Yt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,d=-1;if(i)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:g,errors:_}=i,x=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!_||_[m.route.id]===void 0);if(m.route.lazy||x){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((p,m,g)=>{let _,x=!1,S=null,b=null;i&&(_=c&&m.route.id?c[m.route.id]:void 0,S=m.route.errorElement||qS,f&&(d<0&&g===0?(f0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,b=null):d===g&&(x=!0,b=m.route.hydrateFallbackElement||null)));let A=e.concat(l.slice(0,g+1)),y=()=>{let v;return _?v=S:x?v=b:m.route.Component?v=re.createElement(m.route.Component,null):m.route.element?v=m.route.element:v=p,re.createElement(YS,{match:m,routeContext:{outlet:p,matches:A,isDataRoute:i!=null},children:v})};return i&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?re.createElement(WS,{location:i.location,revalidation:i.revalidation,component:S,error:_,children:y(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):y()},null)}function Bh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function KS(r){let e=re.useContext(Os);return Yt(e,Bh(r)),e}function QS(r){let e=re.useContext(nu);return Yt(e,Bh(r)),e}function JS(r){let e=re.useContext(Ni);return Yt(e,Bh(r)),e}function Fh(r){let e=JS(r),i=e.matches[e.matches.length-1];return Yt(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function $S(){return Fh("useRouteId")}function eM(){var s;let r=re.useContext(Ih),e=QS("useRouteError"),i=Fh("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[i]}function tM(){let{router:r}=KS("useNavigate"),e=Fh("useNavigate"),i=re.useRef(!1);return c0(()=>{i.current=!0}),re.useCallback(async(l,c={})=>{Di(i.current,l0),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var jv={};function f0(r,e,i){!e&&!jv[r]&&(jv[r]=!0,Di(!1,i))}re.memo(nM);function nM({routes:r,future:e,state:i}){return u0(r,void 0,i,e)}function bs(r){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function iM({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){Yt(!tl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),d=re.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Ps(i));let{pathname:p="/",search:m="",hash:g="",state:_=null,key:x="default"}=i,S=re.useMemo(()=>{let b=la(p,f);return b==null?null:{location:{pathname:b,search:m,hash:g,state:_,key:x},navigationType:s}},[f,p,m,g,_,x,s]);return Di(S!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:re.createElement(Ui.Provider,{value:d},re.createElement(el.Provider,{children:e,value:S}))}function aM({children:r,location:e}){return jS(Yd(r),e)}function Yd(r,e=[]){let i=[];return re.Children.forEach(r,(s,l)=>{if(!re.isValidElement(s))return;let c=[...e,l];if(s.type===re.Fragment){i.push.apply(i,Yd(s.props.children,c));return}Yt(s.type===bs,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Yd(s.props.children,c)),i.push(f)}),i}var Gc="get",Vc="application/x-www-form-urlencoded";function iu(r){return r!=null&&typeof r.tagName=="string"}function rM(r){return iu(r)&&r.tagName.toLowerCase()==="button"}function sM(r){return iu(r)&&r.tagName.toLowerCase()==="form"}function oM(r){return iu(r)&&r.tagName.toLowerCase()==="input"}function lM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function cM(r,e){return r.button===0&&(!e||e==="_self")&&!lM(r)}var vc=null;function uM(){if(vc===null)try{new FormData(document.createElement("form"),0),vc=!1}catch{vc=!0}return vc}var fM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _d(r){return r!=null&&!fM.has(r)?(Di(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vc}"`),null):r}function dM(r,e){let i,s,l,c,f;if(sM(r)){let d=r.getAttribute("action");s=d?la(d,e):null,i=r.getAttribute("method")||Gc,l=_d(r.getAttribute("enctype"))||Vc,c=new FormData(r)}else if(rM(r)||oM(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||d.getAttribute("action");if(s=p?la(p,e):null,i=r.getAttribute("formmethod")||d.getAttribute("method")||Gc,l=_d(r.getAttribute("formenctype"))||_d(d.getAttribute("enctype"))||Vc,c=new FormData(d,r),!uM()){let{name:m,type:g,value:_}=r;if(g==="image"){let x=m?`${m}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else m&&c.append(m,_)}}else{if(iu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Gc,s=null,l=Vc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}function Hh(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function hM(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function mM(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await hM(c,i);return f.links?f.links():[]}return[]}));return xM(s.flat(1).filter(pM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Xv(r,e,i,s,l,c){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,d=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return c==="assets"?e.filter((p,m)=>f(p,m)||d(p,m)):c==="data"?e.filter((p,m)=>{var _;let g=s.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((_=i[0])==null?void 0:_.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function gM(r,e,{includeHydrateFallback:i}={}){return vM(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function vM(r){return[...new Set(r)]}function _M(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function xM(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(_M(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}var yM=new Set([100,101,204,205]);function SM(r,e){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":e&&la(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function d0(){let r=re.useContext(Os);return Hh(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function MM(){let r=re.useContext(nu);return Hh(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Gh=re.createContext(void 0);Gh.displayName="FrameworkContext";function h0(){let r=re.useContext(Gh);return Hh(r,"You must render this element inside a <HydratedRouter> element"),r}function bM(r,e){let i=re.useContext(Gh),[s,l]=re.useState(!1),[c,f]=re.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:_}=e,x=re.useRef(null);re.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let A=v=>{v.forEach(L=>{f(L.isIntersecting)})},y=new IntersectionObserver(A,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[r]),re.useEffect(()=>{if(s){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[s]);let S=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,x,{}]:[c,x,{onFocus:Io(d,S),onBlur:Io(p,b),onMouseEnter:Io(m,S),onMouseLeave:Io(g,b),onTouchStart:Io(_,S)}]:[!1,x,{}]}function Io(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function EM({page:r,...e}){let{router:i}=d0(),s=re.useMemo(()=>t0(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?re.createElement(AM,{page:r,matches:s,...e}):null}function TM(r){let{manifest:e,routeModules:i}=h0(),[s,l]=re.useState([]);return re.useEffect(()=>{let c=!1;return mM(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function AM({page:r,matches:e,...i}){let s=wr(),{manifest:l,routeModules:c}=h0(),{basename:f}=d0(),{loaderData:d,matches:p}=MM(),m=re.useMemo(()=>Xv(r,e,p,l,s,"data"),[r,e,p,l,s]),g=re.useMemo(()=>Xv(r,e,p,l,s,"assets"),[r,e,p,l,s]),_=re.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let b=new Set,A=!1;if(e.forEach(v=>{var U;let L=l.routes[v.route.id];!L||!L.hasLoader||(!m.some(D=>D.route.id===v.route.id)&&v.route.id in d&&((U=c[v.route.id])!=null&&U.shouldRevalidate)||L.hasClientLoader?A=!0:b.add(v.route.id))}),b.size===0)return[];let y=SM(r,f);return A&&b.size>0&&y.searchParams.set("_routes",e.filter(v=>b.has(v.route.id)).map(v=>v.route.id).join(",")),[y.pathname+y.search]},[f,d,s,l,m,e,r,c]),x=re.useMemo(()=>gM(g,l),[g,l]),S=TM(g);return re.createElement(re.Fragment,null,_.map(b=>re.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),x.map(b=>re.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),S.map(({key:b,link:A})=>re.createElement("link",{key:b,...A})))}function RM(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var p0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{p0&&(window.__reactRouterVersion="7.5.1")}catch{}function wM({basename:r,children:e,window:i}){let s=re.useRef();s.current==null&&(s.current=pS({window:i,v5Compat:!0}));let l=s.current,[c,f]=re.useState({action:l.action,location:l.location}),d=re.useCallback(p=>{re.startTransition(()=>f(p))},[f]);return re.useLayoutEffect(()=>l.listen(d),[l,d]),re.createElement(iM,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l})}var m0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zs=re.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:d,target:p,to:m,preventScrollReset:g,viewTransition:_,...x},S){let{basename:b}=re.useContext(Ui),A=typeof m=="string"&&m0.test(m),y,v=!1;if(typeof m=="string"&&A&&(y=m,p0))try{let N=new URL(window.location.href),C=m.startsWith("//")?new URL(N.protocol+m):new URL(m),V=la(C.pathname,b);C.origin===N.origin&&V!=null?m=V+C.search+C.hash:v=!0}catch{Di(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=HS(m,{relative:l}),[U,D,B]=bM(s,x),G=NM(m,{replace:f,state:d,target:p,preventScrollReset:g,relative:l,viewTransition:_});function F(N){e&&e(N),N.defaultPrevented||G(N)}let X=re.createElement("a",{...x,...B,href:y||L,onClick:v||c?e:F,ref:RM(S,D),target:p,"data-discover":!A&&i==="render"?"true":void 0});return U&&!A?re.createElement(re.Fragment,null,X,re.createElement(EM,{page:L})):X});zs.displayName="Link";var CM=re.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:d,children:p,...m},g){let _=nl(f,{relative:m.relative}),x=wr(),S=re.useContext(nu),{navigator:b,basename:A}=re.useContext(Ui),y=S!=null&&IM(_)&&d===!0,v=b.encodeLocation?b.encodeLocation(_).pathname:_.pathname,L=x.pathname,U=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(L=L.toLowerCase(),U=U?U.toLowerCase():null,v=v.toLowerCase()),U&&A&&(U=la(U,A)||U);const D=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let B=L===v||!l&&L.startsWith(v)&&L.charAt(D)==="/",G=U!=null&&(U===v||!l&&U.startsWith(v)&&U.charAt(v.length)==="/"),F={isActive:B,isPending:G,isTransitioning:y},X=B?e:void 0,N;typeof s=="function"?N=s(F):N=[s,B?"active":null,G?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(F):c;return re.createElement(zs,{...m,"aria-current":X,className:N,ref:g,style:C,to:f,viewTransition:d},typeof p=="function"?p(F):p)});CM.displayName="NavLink";var DM=re.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=Gc,action:d,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:_,...x},S)=>{let b=OM(),A=zM(d,{relative:m}),y=f.toLowerCase()==="get"?"get":"post",v=typeof d=="string"&&m0.test(d),L=U=>{if(p&&p(U),U.defaultPrevented)return;U.preventDefault();let D=U.nativeEvent.submitter,B=(D==null?void 0:D.getAttribute("formmethod"))||f;b(D||U.currentTarget,{fetcherKey:e,method:B,navigate:i,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:_})};return re.createElement("form",{ref:S,method:y,action:A,onSubmit:s?p:L,...x,"data-discover":!v&&r==="render"?"true":void 0})});DM.displayName="Form";function UM(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function g0(r){let e=re.useContext(Os);return Yt(e,UM(r)),e}function NM(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let d=GS(),p=wr(),m=nl(r,{relative:c});return re.useCallback(g=>{if(cM(g,e)){g.preventDefault();let _=i!==void 0?i:Yo(p)===Yo(m);d(r,{replace:_,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[p,d,m,i,s,e,r,l,c,f])}var LM=0,PM=()=>`__${String(++LM)}__`;function OM(){let{router:r}=g0("useSubmit"),{basename:e}=re.useContext(Ui),i=$S();return re.useCallback(async(s,l={})=>{let{action:c,method:f,encType:d,formData:p,body:m}=dM(s,e);if(l.navigate===!1){let g=l.fetcherKey||PM();await r.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await r.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,e,i])}function zM(r,{relative:e}={}){let{basename:i}=re.useContext(Ui),s=re.useContext(Ni);Yt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...nl(r||".",{relative:e})},f=wr();if(r==null){c.search=f.search;let d=new URLSearchParams(c.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(_=>_).forEach(_=>d.append("index",_));let g=d.toString();c.search=g?`?${g}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:sa([i,c.pathname])),Yo(c)}function IM(r,e={}){let i=re.useContext(o0);Yt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=g0("useViewTransitionState"),l=nl(r,{relative:e.relative});if(!i.isTransitioning)return!1;let c=la(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=la(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Kc(l.pathname,f)!=null||Kc(l.pathname,c)!=null}new TextEncoder;[...yM];var v0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qv=Tr.createContext&&Tr.createContext(v0),BM=["attr","size","title"];function FM(r,e){if(r==null)return{};var i=HM(r,e),s,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(l=0;l<c.length;l++)s=c[l],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(i[s]=r[s])}return i}function HM(r,e){if(r==null)return{};var i={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;i[s]=r[s]}return i}function Qc(){return Qc=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Qc.apply(this,arguments)}function Wv(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,s)}return i}function Jc(r){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Wv(Object(i),!0).forEach(function(s){GM(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Wv(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}function GM(r,e,i){return e=VM(e),e in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function VM(r){var e=kM(r,"string");return typeof e=="symbol"?e:e+""}function kM(r,e){if(typeof r!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function _0(r){return r&&r.map((e,i)=>Tr.createElement(e.tag,Jc({key:i},e.attr),_0(e.child)))}function au(r){return e=>Tr.createElement(jM,Qc({attr:Jc({},r.attr)},e),_0(r.child))}function jM(r){var e=i=>{var{attr:s,size:l,title:c}=r,f=FM(r,BM),d=l||i.size||"1em",p;return i.className&&(p=i.className),r.className&&(p=(p?p+" ":"")+r.className),Tr.createElement("svg",Qc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,s,f,{className:p,style:Jc(Jc({color:r.color||i.color},i.style),r.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&Tr.createElement("title",null,c),r.children)};return qv!==void 0?Tr.createElement(qv.Consumer,null,i=>e(i)):e(v0)}function XM(r){return au({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M508.6 148.8c0-45-33.1-81.2-74-81.2C379.2 65 322.7 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.6-.1 220.2 0 255.8c-.1 35.6 1 71.2 3.4 106.9 0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8 60.8.2 120.3-1 178.6-3.8 40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107 .2-35.6-.9-71.2-3.3-106.9zM207 353.9V157.4l145 98.2-145 98.3z"},child:[]}]})(r)}function qM(r){return au({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(r)}const il=({onOpen:r})=>R.jsx(R.Fragment,{children:R.jsx("button",{className:`btn btn-dash text-white sm:btn-lg md:btn-xl\r
        hover:btn-accent hover:scale-95 max-w-md self-center transition-all duration-300`,onClick:r,children:"Contactame"})});function WM({post:r}){return R.jsx(R.Fragment,{children:R.jsxs("div",{className:"flex flex-col gap-4 justify-center items-center",children:[R.jsx("h1",{className:"text-3xl font-bold mb-4 text-center",children:r.title}),R.jsx("p",{className:"mb-4 text-center",children:"Esa es una práctica peligrosa. Si un sitio en el que estás registrado sufre una filtración, no solo comprometes esa cuenta, sino también cualquier otra donde hayas usado la misma combinación de correo y contraseña. El verdadero riesgo no es que vulneren ese sitio, sino que tú estés facilitando el trabajo reutilizando credenciales. En este post te muestro cómo usar KeePassXC, una herramienta gratuita y segura para gestionar todas tus contraseñas sin tener que recordarlas ni repetirlas. Aprende a proteger tu información personal y evita ser una víctima más de ataques por reutilización de contraseñas."}),R.jsxs("article",{className:"flex flex-col",children:[R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 1: Descarga KeePassXC"}),R.jsxs("p",{className:"mb-4 text-start",children:["Descarga KeePassXC desde su página oficial: ",R.jsx("a",{href:"https://keepassxc.org/download/",target:"_blank",rel:"noopener noreferrer",className:"text-green-300",children:"https://keepassxc.org/download/"})]}),R.jsx("img",{src:"\\src\\Pages\\CyberVlog\\Posts\\Postkeepass\\src\\step_1.png",alt:"Descarga KeePassXC",className:"my-4 rounded-lg"})]}),R.jsxs("article",{className:"flex flex-col",children:[R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 2: Instalar KeePassXC"}),R.jsxs("p",{className:"mb-4 text-start",children:["Instala KeePassXC siguiendo las instrucciones de la instalación. Asegúrate de elegir una contraseña maestra segura y única, ya que será la clave para acceder a todas tus contraseñas guardadas. En mi caso utilizo un script de Python para guardar la master password en un archivo de texto cifrado, pero eso es un tema para otro post(acá te dejo el link del ",R.jsx("a",{href:"https://github.com/Rigbykai1/CryptWord",target:"_blank",rel:"noopener noreferrer",className:"text-green-300",children:"repositorio"}),"). Si no sabes cómo crear una contraseña segura, puedes usar un generador de contraseñas como el de KeePassXC o buscar en línea."]}),R.jsx("img",{src:"\\src\\Pages\\CyberVlog\\Posts\\Postkeepass\\src\\step_2.png",alt:"Instala KeePassXC",className:"my-4 rounded-lg self-center"})]}),R.jsxs("article",{className:"flex flex-col",children:[R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 3: Crear una base de datos"}),R.jsx("p",{className:"mb-4 text-start",children:"Una vez instalado, abre KeePassXC y crea una nueva base de datos. Puedes elegir entre diferentes opciones de cifrado, pero la configuración predeterminada es segura y adecuada para la mayoría de los usuarios. Guarda la base de datos en un lugar seguro y asegúrate de hacer copias de seguridad periódicas."}),R.jsx("img",{src:"\\src\\Pages\\CyberVlog\\Posts\\Postkeepass\\src\\step_3.png",alt:"Crea una DB",className:"my-4 rounded-lg"})]}),R.jsxs("article",{className:"flex flex-col",children:[R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 4: Agregar contraseñas"}),R.jsx("p",{className:"mb-4 text-start",children:"Para agregar contraseñas, haz clic en el icono y completa los campos requeridos. Puedes agregar el nombre del sitio web, tu nombre de usuario, la contraseña y cualquier otra información relevante. KeePassXC también ofrece la opción de generar contraseñas seguras automáticamente, lo que es muy útil para evitar reutilizar contraseñas."}),R.jsx("img",{src:"\\src\\Pages\\CyberVlog\\Posts\\Postkeepass\\src\\step_4.png",alt:"Crea una DB",className:"my-4 rounded-lg"})]}),R.jsxs("article",{className:"flex flex-col",children:[R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 5: Usar KeePassXC"}),R.jsx("p",{className:"mb-4 text-start",children:"Una vez que hayas agregado tus contraseñas, puedes usar KeePassXC para acceder a ellas fácilmente. Simplemente abre la aplicación, ingresa tu contraseña maestra y verás una lista de todas tus contraseñas guardadas. Puedes copiar y pegar las contraseñas directamente desde KeePassXC al sitio web correspondiente."}),R.jsx("img",{src:"\\src\\Pages\\CyberVlog\\Posts\\Postkeepass\\src\\step_5.png",alt:"Crea una DB",className:"my-4 rounded-lg"})]}),R.jsxs("article",{className:"flex flex-col",children:[R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 6: Sincronización y copias de seguridad"}),R.jsxs("p",{className:"mb-4 text-start",children:["KeePassXC no almacena tus contraseñas en la nube, lo cual aumenta la seguridad, pero también implica que tú eres responsable de mantener copias de tu base de datos. Si usas múltiples dispositivos, es recomendable sincronizar la base de datos manualmente. En mi caso, utilizo ",R.jsx("a",{href:"https://github.com/Bill-Stewart/SyncthingWindowsSetup/releases/tag/v1.29.0",target:"_blank",rel:"noopener noreferrer",className:"text-green-300",children:"Syncthing"})," para sincronizar mis contraseñas de forma segura entre todos mis dispositivos y reducir el riesgo de perder acceso a ellas."]}),R.jsx("img",{src:"\\src\\Pages\\CyberVlog\\Posts\\Postkeepass\\src\\step_6.jpg",alt:"Descarga KeePassXC",className:"my-4 rounded-lg"})]}),R.jsxs("article",{className:"flex flex-col max-w-lg",children:[R.jsx("h2",{className:"text-3xl font-bold mb-4 text-center",children:"Gracias!"}),R.jsx("p",{className:"mb-4 text-start",children:"Espero que este post te haya sido útil y que ahora tengas una mejor comprensión de cómo usar KeePassXC para gestionar tus contraseñas de manera segura. Si tienes alguna pregunta o comentario, no dudes en contactarme en mis redes sociales. ¡Gracias por leer!"})]})]})})}function YM({post:r}){return R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"flex flex-col gap-4 justify-center items-center",children:[R.jsx("h1",{className:"text-3xl font-bold mb-4 text-center",children:r.title}),R.jsxs("p",{className:"mb-4 text-center",children:["Muchas personas dependen de servicios en la nube como Google Drive o Dropbox para sincronizar sus archivos entre dispositivos. Pero ",R.jsx("span",{className:"font-bold",children:"¿qué pasa si buscas una alternativa  privada, sin depender de servidores de terceros? "}),"En este post te presento ",R.jsx("span",{className:"font-bold",children:"Syncthing"}),", una herramienta gratuita y de código abierto que te permite sincronizar archivos de forma directa entre tus dispositivos, de manera segura y cifrada."]})]}),R.jsxs("div",{children:[R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 1: Descarga Syncthing"}),R.jsxs("p",{className:"mb-4 text-start",children:["Puedes descargar Syncthing desde su página oficial:"," ",R.jsx("a",{href:"https://syncthing.net/downloads/",target:"_blank",rel:"noopener noreferrer",className:"text-green-300",children:"https://syncthing.net/downloads/"}),". Está disponible para Windows, Linux, macOS, Android y otros sistemas."]}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 2: Instalación"}),R.jsxs("p",{className:"mb-4 text-start",children:["Instala Syncthing en todos los dispositivos entre los cuales quieres compartir archivos. En Windows, puedes usar el instalador del siguiente repositorio mantenido por la comunidad:"," ",R.jsx("a",{href:"https://github.com/Bill-Stewart/SyncthingWindowsSetup/releases",target:"_blank",rel:"noopener noreferrer",className:"text-green-300",children:"SyncthingWindowsSetup"}),"."]}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 3: Primer arranque y configuración"}),R.jsxs("p",{className:"mb-4 text-start",children:["Al ejecutar Syncthing por primera vez, se abrirá una interfaz web en tu navegador. Desde ahí puedes:",R.jsxs("ul",{className:"list-disc list-inside",children:[R.jsx("li",{children:"Configurar carpetas para sincronizar"}),R.jsx("li",{children:"Ver el ID del dispositivo (clave única que necesitarás para enlazar otros dispositivos)"}),R.jsx("li",{children:"Ajustar opciones como el nombre del dispositivo y puertos"})]})]}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 4: Conectar dispositivos"}),R.jsx("p",{className:"mb-4 text-start",children:"Para sincronizar entre dos dispositivos, necesitas agregar el ID del otro dispositivo en la interfaz de Syncthing. Ambos dispositivos deben aceptar el enlace para que se establezca la conexión segura. Una vez conectados, puedes elegir qué carpetas sincronizar con qué dispositivo."}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 5: Sincronización automática y cifrada"}),R.jsx("p",{className:"mb-4 text-start",children:"Syncthing sincroniza los archivos en tiempo real y de manera cifrada (TLS). No se usan servidores externos: **la transferencia es directa entre tus dispositivos**. Además, puedes definir reglas como “solo enviar” o “solo recibir” para controlar cómo se sincronizan los datos."}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Uso personal: sincronización de contraseñas"}),R.jsxs("p",{className:"mb-4 text-start",children:["En mi caso, uso Syncthing para sincronizar archivos críticos como mi base de datos de contraseñas de"," ",R.jsx(zs,{to:"/cybervlog/1",className:"text-green-300",children:"KeePassXC"})," entre varios dispositivos. Así, mantengo mi información segura y siempre actualizada sin depender de la nube."]}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Gracias!"}),R.jsx("p",{className:"mb-4 text-start",children:"Espero que esta guía te haya servido para entender qué es Syncthing y cómo puede ayudarte a tener más control sobre tus datos. Si tenés dudas, comentarios o sugerencias, escribime a través de mis redes. ¡Gracias por leer!"})]}),R.jsx(il,{})]})}function ZM({post:r}){return R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"flex flex-col gap-4 justify-center items-center",children:[R.jsx("h1",{className:"text-3xl font-bold mb-4 text-center",children:r.title}),R.jsx("p",{className:"mb-4 text-center",children:"MSI Afterburner es una herramienta gratuita que te permite monitorizar en tiempo real el uso de GPU, CPU, RAM y otros recursos en Windows. Con ella puedes configurar ventanas de información en pantalla (OSD), registrar estadísticas de rendimiento y ajustar parámetros de tu tarjeta gráfica. En este post te muestro paso a paso cómo descargar, instalar y configurar MSI Afterburner para que observes al instante el estado de tu sistema."})]}),R.jsxs("div",{children:[R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 1: Descargar MSI Afterburner"}),R.jsxs("p",{className:"mb-4 text-start",children:["Descarga MSI Afterburner desde la página oficial de MSI:"," ",R.jsx("a",{href:"https://www.msi.com/Landing/afterburner/graphics-cards",target:"_blank",rel:"noopener noreferrer",className:"text-green-300",children:"https://www.msi.com/Landing/afterburner"}),". Asegúrate de elegir la versión más reciente compatible con tu sistema operativo Windows. El instalador incluye también RivaTuner Statistics Server (RTSS), necesario para el OSD."]}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 2: Instalar MSI Afterburner"}),R.jsxs("p",{className:"mb-4 text-start",children:["Ejecuta el instalador que descargaste y sigue las instrucciones en pantalla. El proceso es directo: acepta los términos de uso, selecciona la carpeta de destino y permite la instalación de",R.jsxs("a",{className:"text-green-300",href:"https://rivatuner.net/",target:"_blank",children:[" "," RTSS "]}),"cuando se te solicite. Una vez termine, abre MSI Afterburner; verás una interfaz con gráficos en tiempo real y opciones de overclock. No te preocupes por las funciones de overclock si solo quieres monitorizar recursos."]}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 3: Configurar la monitorización básica"}),R.jsx("p",{className:"mb-4 text-start",children:"En la interfaz principal de MSI Afterburner, haz clic en el ícono de engranaje para abrir “Settings”. Ve a la pestaña “Monitoring” y allí aparecerá una lista de métricas disponibles (GPU usage, GPU temperature, CPU usage, RAM usage, FPS, etc.). Marca las casillas de las métricas que deseas monitorear. Por ejemplo: “GPU usage (%)”, “GPU temperature”, “CPU usage (%)” y “Memory usage (%)”. Con eso activado, estas métricas se mostrarán en la ventana principal. Si quieres un registro más detallado, puedes habilitar “Log history to file” y elegir la ubicación del archivo de registro."}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 4: Habilitar el OSD (On-Screen Display)"}),R.jsx("p",{className:"mb-4 text-start",children:"Para ver los valores en pantalla mientras juegas o usas otras aplicaciones, debes configurar el OSD. En la misma pestaña “Monitoring”, selecciona cada métrica que marcaste y activa la opción “Show in On-Screen Display”. Luego ve a la pestaña “On-Screen Display” y verifica que RTSS esté corriendo correctamente. Puedes personalizar la posición, tamaño y color del texto dentro de RTSS; abre RTSS desde la bandeja del sistema y ajusta “Position” y “Size” a tu gusto."}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 5: Monitorear GPU y CPU en tiempo real"}),R.jsx("p",{className:"mb-4 text-start",children:"Cierra la ventana de configuración y observa cómo MSI Afterburner muestra las gráficas en tiempo real. Si ya habilitaste el OSD, inicia un juego o una aplicación de prueba para ver el uso de GPU, temperatura y FPS directamente en la pantalla. De forma predeterminada, Afterburner actualiza los valores cada segundo. Si necesitas una frecuencia distinta, vuelve a “Settings” → “Monitoring” y ajusta el “Polling time” (tiempo de sondeo)."}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Paso 6: Registrar estadísticas y analizar registros"}),R.jsx("p",{className:"mb-4 text-start",children:"Si quieres guardar un historial de uso, en “Settings” → “Monitoring” marca “Log history to file”. Elige una ruta y un nombre para el archivo .csv donde se almacenarán las estadísticas. Ejecuta tu aplicación o juego normalmente. Cuando termines, abre el archivo .csv con Excel, LibreOffice Calc o cualquier editor de texto para analizar picos de uso, temperaturas y comportamiento de tu hardware."}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Gracias!"}),R.jsx("p",{className:"mb-4 text-start",children:"Esto es todo: así de sencillo es usar MSI Afterburner para monitorear recursos en Windows. Con estos pasos puedes saber en todo momento cómo se comportan tu GPU, CPU y memoria. Si tienes dudas o comentarios, contáctame en redes sociales. ¡Gracias por leer!"})]}),R.jsx(il,{})]})}function KM({post:r}){return R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"flex flex-col gap-4 justify-center items-center",children:[R.jsx("h1",{className:"text-3xl font-bold mb-4 text-center",children:r.title}),R.jsx("p",{className:"mb-4 text-center",children:"Obsidian es una aplicación de toma de notas basada en Markdown que funciona localmente en tu equipo. Está diseñada para usuarios que quieren crear y relacionar información de forma libre, aprovechando un sistema de “vínculos bidireccionales” y un grafo de conocimiento. Con Obsidian puedes construir tu propio “segundo cerebro” digital, organizando ideas, proyectos, referencias y todo tipo de contenido de manera conectada y visual. En este post te muestro qué es Obsidian, sus principales características y cómo puede transformar tu flujo de trabajo."})]}),R.jsxs("div",{children:[R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"¿Qué es Obsidian?"}),R.jsxs("p",{className:"mb-4 text-start",children:["Obsidian es un editor de texto enriquecido con enfoque en",R.jsxs("a",{className:"text-green-300",href:"https://www.markdownguide.org/basic-syntax/",children:[" ","Markdown"]})," y en la creación de vínculos entre notas. Cada nota se guarda como un archivo .md en tu disco local, lo que te da control absoluto sobre tus datos. Su punto fuerte es el grafo de conocimiento: una representación visual de tus notas y cómo se conectan entre sí. Esto fomenta el pensamiento en red, permitiéndote ver relaciones entre temas y descubrir conexiones que de otro modo pasarían desapercibidas."]}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Características principales"}),R.jsxs("p",{className:"mb-4 text-start",children:[R.jsx("span",{className:"font-bold",children:"• Markdown nativo:"})," Todas las notas se crean en formato Markdown, lo que garantiza compatibilidad con otros editores de texto y plataformas.",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Vínculos bidireccionales:"})," Al escribir [[Nombre de nota]], creas automáticamente un enlace a otra nota, y Obsidian muestra las notas relacionadas en “Backlinks”.",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Grafo de conocimiento:"})," Visualiza un mapa interactivo con todos tus archivos y sus conexiones. Puedes agrupar nodos por carpeta, tag o metadatos.",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Plugins y comunidad:"})," Existe una gran biblioteca de plugins que amplían las funciones (calendario, tablas kanban, diario, gestor de tareas, etc.). Además, la comunidad comparte “snippets” y plantillas de CSS para personalizar la apariencia.",R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Modo oscuro/claro:"})," Cambia entre temas integrados o instala temas comunitarios para ajustar el look & feel.",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Notas en la nube (opcional):"})," Obsidian ofrece sincronización nativa con encriptación de extremo a extremo (servicio de pago), aunque también puedes usar servicios de terceros como Git o Dropbox."]}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Cómo funciona el sistema de notas"}),R.jsx("p",{className:"mb-4 text-start",children:"Obsidian organiza tus archivos dentro de un “vault” (bóveda), que no es más que una carpeta en tu disco donde guardas todas las notas Markdown. Cada archivo representa una nota individual, y puedes crear subcarpetas para agrupar temas o proyectos. Al abrir un vault, Obsidian rastrea todos los archivos .md y construye la base de datos interna que alimenta al grafo de conocimiento y al sistema de búsqueda rápida."}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Interfaz y flujo de trabajo"}),R.jsxs("p",{className:"mb-4 text-start",children:["A primera vista, Obsidian muestra tres paneles principales:",R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"1. Panel de archivos:"})," Lista de carpetas y notas dentro del vault.",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"2. Editor de notas:"})," Área central donde editas en Markdown; cuenta con vista dividida (Editor/Previsualización).",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"3. Panel de grafo:"})," Mapa interactivo de todas tus notas y sus conexiones.",R.jsx("br",{}),R.jsx("br",{}),"Puedes abrir múltiples paneles o “tabs” para comparar notas, arrastrar enlaces entre ventanas y navegar sin perder el contexto. El sistema de búsqueda rápida (Ctrl/Cmd+O) te permite ir a cualquier nota en segundos."]}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Plugins destacados"}),R.jsxs("p",{className:"mb-4 text-start",children:["Obsidian cuenta con un repositorio oficial de plugins, además de una comunidad muy activa que desarrolla extensiones. Algunos plugins recomendados:",R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Calendar:"})," Agrega un calendario al panel lateral para gestionar notas diarias o registros.",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Dataview:"})," Crea vistas personalizadas (tablas, listas) basadas en metadatos o tags de tus notas.",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Kanban:"})," Permite organizar tareas o proyectos dentro de una estructura Kanban dentro de una nota.",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Templater:"})," Genera plantillas automatizadas. Muy útil para diarios, informes o notas recurrentes.",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Quick Switcher++:"})," Mejora la búsqueda rápida con filtros adicionales.",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Obsidian Git:"})," Sincroniza tu vault con un repositorio Git para historial de versiones."]}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Casos de uso y beneficios"}),R.jsxs("p",{className:"mb-4 text-start",children:["Obsidian se adapta a diversos escenarios:",R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Investigación académica:"})," Guarda citas, enlaza autores, crea mapas conceptuales.",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Gestión de proyectos:"})," Relaciona tareas con documentación, controla avances con Kanban.",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Diario personal/profesional:"})," Lleva un registro de actividades diarias, ideas y reflexiones.",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• Aprendizaje continuo:"})," Crea notas de libros, cursos y conecta conceptos para potenciar la retención.",R.jsx("br",{}),R.jsx("br",{}),R.jsx("span",{className:"font-bold",children:"• El principal beneficio es que tus notas no están aisladas:"})," el grafo te ayuda a descubrir relaciones, generando un conocimiento orgánico que crece con cada conexión que añades."]}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Dónde descargar y cómo empezar"}),R.jsxs("p",{className:"mb-4 text-start",children:["Aunque este post no se centra en el proceso de instalación, es importante reconocer que Obsidian está disponible para Windows, macOS y Linux. Puedes visitar su sitio oficial para más información y recursos:"," ",R.jsx("a",{href:"https://obsidian.md",target:"_blank",rel:"noopener noreferrer",className:"text-green-300",children:"https://obsidian.md"}),". Ahí encontrarás guías básicas, ejemplos de vaults y la sección de plugins para personalizar tu experiencia."]}),R.jsx("h2",{className:"text-3xl font-bold mb-4 text-start",children:"Conclusión"}),R.jsx("p",{className:"mb-4 text-start",children:"Obsidian es mucho más que un editor Markdown: es una plataforma para construir un sistema de conocimiento personal. Con su grafo interactivo, enlaces bidireccionales y amplia variedad de plugins, te permite organizar información de forma intuitiva y potente. Si buscas centralizar ideas, proyectos y referencias en un solo lugar, Obsidian puede ser la herramienta definitiva para tu flujo de trabajo."})]}),R.jsx(il,{})]})}const Es=[{id:1,slug:"keepass",title:"¿Usas la misma contraseña para todo?",videoUrl:"https://youtu.be/EMA50SOCwe8",component:"PostKeepass"},{id:2,slug:"Syncthing",title:"Sincroniza tus archivos sin la nube",videoUrl:"https://www.youtube.com/@Rigbykai1",component:"PostSyncthing"},{id:3,slug:"msi-afterburner",title:"Monitorea los recursos de tu PC",videoUrl:"https://www.youtube.com/@Rigbykai1",component:"PostAfterburner"},{id:4,slug:"obsidian",title:"Organiza tu conocimiento",videoUrl:"https://www.youtube.com/@Rigbykai1",component:"PostObsidian"}],QM=()=>R.jsxs("div",{className:"flex flex-col p-8 gap-4 justify-center items-center bg-stone-800 w-fit self-center rounded-lg mx-4",children:[R.jsx("h1",{className:"text-3xl font-bold mb-4 text-center",children:"Post no encontrado"}),R.jsxs("p",{className:"mb-4 text-center",children:["Parece que hubo un ",R.jsx("span",{className:"text-error font-bold",children:"error"}),", intenta las siguientes soluciones:"]}),R.jsxs("ul",{className:"list",children:[R.jsxs("li",{className:"list-row",children:[R.jsx("div",{className:"text-4xl font-thin opacity-30 tabular-nums",children:"01"}),R.jsxs("div",{className:"text-center max-w-60",children:[R.jsx("div",{children:"Espera unos minutos"}),R.jsx("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Error de carga"})]})]}),R.jsxs("li",{className:"list-row",children:[R.jsx("div",{className:"text-4xl font-thin opacity-30 tabular-nums",children:"02"}),R.jsxs("div",{className:"text-center max-w-60",children:[R.jsx("div",{children:"No modifiques el link o verifica si ha sido alterado"}),R.jsx("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Problema de servidor"})]})]}),R.jsxs("li",{className:"list-row",children:[R.jsx("div",{className:"text-4xl font-thin opacity-30 tabular-nums",children:"03"}),R.jsxs("div",{className:"text-center max-w-60",children:[R.jsx("div",{children:"Recarga la página"}),R.jsx("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Problema de red"})]})]}),R.jsxs("li",{className:"list-row",children:[R.jsx("div",{className:"text-4xl font-thin opacity-30 tabular-nums",children:"04"}),R.jsxs("div",{className:"text-center max-w-60",children:[R.jsx("div",{children:"Reporta el error"}),R.jsx("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Problema por examinar"})]})]})]})]}),JM={PostKeepass:WM,PostSyncthing:YM,PostAfterburner:ZM,PostObsidian:KM};function $M(){const{id:r}=kS(),e=Es.find(s=>s.id===Number(r));if(!e)return R.jsx(QM,{});const i=e.component?JM[e.component]:null;return R.jsxs("div",{className:"flex flex-col self-center sm:w-xl md:w-2xl lg:w-4xl p-8 mx-4 mb-4 gap-4 bg-stone-800 rounded-lg shadow-md animate-fade animate-duration-500 animate-ease-linear transition-all",children:[R.jsxs("div",{className:"flex flex-row gap-4 items-center justify-end",children:[R.jsxs("a",{href:e.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-ghost  hover:btn-error rounded-xl",children:[R.jsx("div",{className:"mr-2",children:"Video tutorial"}),R.jsx(XM,{className:"size-8"})]}),R.jsx(zs,{to:"/CyberVlog",className:"btn btn-outline hover:bg-white/20 btn-square self-end rounded-xl btn-md",children:R.jsx(qM,{className:"size-8"})})]}),i?R.jsx(R.Fragment,{children:R.jsx(i,{post:e})}):null]})}const eb=({project:r,isActive:e,setActiveIndex:i,setIsAnyHovered:s})=>{const[l,c]=re.useState(!1),f=l||e?{backgroundImage:`url(${r.Image1})`,backgroundSize:"cover",backgroundPosition:"center"}:{},d=()=>{c(!0),i(r.index),s(!0)},p=()=>{c(!1),s(!1)};return R.jsxs("div",{className:`card bg-white/5 w-md mx-6 shadow-sm h-44 rounded-xl transition-all duration-300 ${l||e?"scale-105":""} relative`,onMouseEnter:d,onMouseLeave:p,style:f,children:[l&&R.jsx("div",{className:"absolute inset-0 bg-black/60 rounded-xl transition-all duration-300 z-10 pointer-events-none"}),R.jsxs("div",{className:"card-body relative z-20 justify-center",children:[R.jsx("h2",{className:`card-title self-center ${l?"":"text-3xl font-extrabold text-white/50 bg-white/25 rounded-lg px-2 py-1"}`,children:r.title}),l?R.jsxs(R.Fragment,{children:[R.jsx("p",{className:"text-center",children:r.description}),R.jsx("div",{className:"card-actions justify-center",children:R.jsx("a",{href:r.link,className:"btn btn-outline hover:bg-white/20",target:"_blank",rel:"noopener noreferrer",children:r.action})})]}):null]})]})},tb=[{Image1:"https://raw.githubusercontent.com/Rigbykai1/Portfolio/master/src/Sources/LogMaster/shot2.jpg",title:"Recon Map",description:"App para mapear redes y listar dispositivos realizado en python.",link:"https://github.com/Rigbykai1/ReconMap",action:"Ver proyecto"},{Image1:"https://raw.githubusercontent.com/Rigbykai1/Portfolio/master/src/Sources/CryptWord/VisualShot.jpg",title:"CryptWord",description:"Script para encriptar contraseñas realizado con Python.",link:"https://github.com/Rigbykai1/CryptWord",action:"Ver proyecto"},{Image1:"https://raw.githubusercontent.com/Rigbykai1/Portfolio/master/src/Sources/ImageCompresor/CLIShot.jpg",title:"Image Compresor",description:"Script para comprimir imágenes en formato PNG y JPEG.",link:"https://github.com/Rigbykai1/ImageCompresor",action:"Ver proyecto"},{Image1:"https://raw.githubusercontent.com/Rigbykai1/Portfolio/master/src/Sources/LogMaster/shot1.jpg",title:"Log Master",description:"Script spyware para probar vulnerabilidad de Windows.",link:"https://github.com/Rigbykai1/Log_master",action:"Ver proyecto"},{Image1:"https://raw.githubusercontent.com/Rigbykai1/Old_Portfolio/refs/heads/master/src/Sources/old_Portfolio.png",title:"Old Portfolio",description:"Portafolio antiguo realizado con React, Tailwind y DaisyUi.",link:"https://github.com/Rigbykai1/Old_Portfolio",action:"Ver proyecto"}],_c=Object.values(tb),nb=()=>{const[r,e]=re.useState(!1),[i,s]=re.useState(Math.floor(Math.random()*_c.length));return re.useEffect(()=>{if(r)return;const l=setInterval(()=>{let c;do c=Math.floor(Math.random()*_c.length);while(c===i&&_c.length>1);s(c)},3e3);return()=>clearInterval(l)},[i,r]),R.jsx("div",{className:"flex flex-row items-center justify-center gap-4 flex-wrap pb-8",children:_c.map((l,c)=>R.jsx(eb,{project:l,isActive:c===i,setActiveIndex:s,setIsAnyHovered:e},c))})};function ib(){const[r,e]=re.useState(0),[i,s]=re.useState(null),l=re.useRef(null);re.useEffect(()=>{if(i!==null)return;const d=setInterval(()=>{let p;do p=Math.floor(Math.random()*Es.length);while(p===r&&Es.length>1);e(p)},3e3);return()=>clearInterval(d)},[r,i]);const c=d=>{l.current&&clearTimeout(l.current),s(d)},f=()=>{l.current=setTimeout(()=>{s(null),e(d=>{let p;do p=Math.floor(Math.random()*Es.length);while(p===d&&Es.length>1);return p})},1e3)};return R.jsxs("div",{className:"flex flex-col max-w-4xl self-center mx-4 mb-4",children:[R.jsxs("div",{className:"max-w-lg self-center",children:[R.jsx("h1",{className:"text-4xl font-bold mb-4 text-center",children:"CyberVlog"}),R.jsx("h1",{className:"text-xl font-bold mb-4 text-center",children:"Análisis & explicaciones"}),R.jsxs("p",{className:"m-6 text-center",children:[R.jsx("span",{className:"font-bold text-green-300",children:"¡Bienvenido a mi vlog!"})," Acá comparto lo que voy aprendiendo sobre tecnología: apps útiles, tutoriales, ciberseguridad, redes y más. Me gusta explicar todo claro y sin vueltas, con contenido que sea útil, directo y fácil de entender. Si te interesa el mundo tech, seguro encontrás algo que te sirva. ",R.jsx("span",{className:"animate-bounce",children:"🚀"})," "]})]}),R.jsx("div",{className:"flex flex-row flex-wrap gap-4 items-center justify-center",children:Es.map((d,p)=>R.jsx(zs,{to:`/CyberVlog/${d.id}`,className:"no-underline",children:R.jsx("div",{className:`
        flex flex-col rounded-2xl overflow-hidden 
        ${p===(i!==null?i:r)?"bg-green-300/20 scale-105 animate-pulse":"bg-stone-800"}
        w-80 sm:w-sm h-48 items-center justify-center
        transition-all duration-300 cursor-pointer p-4
      `,onMouseEnter:()=>c(p),onMouseLeave:f,children:R.jsx("div",{className:"p-4 text-center",children:R.jsx("h2",{className:"text-xl font-semibold mb-2",children:d.title})})})},d.id))})]})}const ab=[{title:"La Alianza",title1:"Ayudante de construcción",description:`En la Alianza realicé labores como hacer y batir mezcla, trabajos de pintura,
            descarga de materiales, etc. Aprendí a utilizar distintas herramientas
            necesarias para desempeñar las labores que se me asignaban.`,year:"2012 - 2019"},{title:"Parque Diversiones",title1:"Operador mecánico",description:`Mi deber como operador mecánico era velar por la seguridad
            de los huéspedes en cada atracción, haciendo de su estadía un
            momento agradable y sobre todo seguro.
            Aprendí mucho sobre al atención al cliente y sobre el
            funcionamiento de distintas atracciones.`,year:"2019 - 2020"},{title:"Super La Esquina",title1:"Dependiente",description:`Debía atender clientes y facturar sus compras, también debía ingresar
            facturas al sistema del local y gestionar pedidos a proveedores.`,year:"2024 - 2024"},{title:"CER Evaluación de Riesgos",title1:"Operario",description:`Realizo mantenimiento y recarga a extintores, debo manipular distintas
            máquinas y herramientas para la realización de estas labores.`,year:"2024 - actualidad"}],rb=[{title:"Universidad Nacional",title1:"Ingeniería en Sistemas",description:"Formación en lógica de programación, C++, tecnologías a bajo nivel y fundamentos de soporte técnico. También fortalecí mis habilidades en inglés técnico hasta un nivel intermedio.",year:2022},{title:"Instituto Nacional de Aprendizaje",title1:"Bases de Datos Access",description:"Diseño y manejo de bases de datos relacionales utilizando Microsoft Access. Introducción al uso de Visual Basic (VB) para automatización y consultas avanzadas.",year:2021},{title:"Ministerio de Educación Pública",title1:"Aplicaciones Informáticas Básicas",description:"Uso intermedio del paquete Office (Word, Excel, PowerPoint). Automatización de tareas, diseño de presentaciones y manipulación de datos en hojas de cálculo.",year:2019},{title:"Instituto Nacional de Aprendizaje",title1:"Empleo de Tecnologías de Información y Comunicación",description:"Uso estratégico de software y herramientas digitales para brindar soluciones en entornos organizacionales. Aplicación de tecnologías en la gestión eficiente de recursos.",year:2021},{title:"Instituto Nacional de Aprendizaje",title1:"Manipulación de Alimentos",description:"Normativas de higiene y seguridad alimentaria. Prácticas de manipulación responsable para la prevención de enfermedades transmitidas por alimentos.",year:2020},{title:"Instituto Nacional de Aprendizaje",title1:"Procesamiento de Textos",description:"Dominio de procesadores de texto para la creación de documentos profesionales. Uso de estilos, tablas, automatización y diseño estructurado de contenido.",year:2021},{title:"Instituto Nacional de Aprendizaje",title1:"Endpoint Security",description:"Protección de dispositivos finales contra amenazas. Prácticas de seguridad como antivirus, firewalls personales, políticas de uso seguro y control de acceso.",year:2024},{title:"Cisco Networking Academy",title1:"Introducción a la Ciberseguridad",description:"Fundamentos de ciberseguridad, tipos de amenazas y ataques, buenas prácticas, ética y legislación en el entorno digital. Ideal para quienes se inician en el área.",year:2024},{title:"Cisco Networking Academy",title1:"Conceptos Básicos de Redes",description:"Principios esenciales sobre redes de computadoras, modelos OSI y TCP/IP, tipos de cables y dispositivos, direccionamiento IP y funcionamiento básico de Internet.",year:2023},{title:"Udemy",title1:"Ciberseguridad defensiva: Hacking Ético",description:"Curso práctico sobre hacking ético, técnicas de penetración y defensa en sistemas informáticos. Aprendizaje de herramientas y metodologías utilizadas por un profesional como lo es Santiago Hernández.",year:2025}];function x0(r){return au({attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"},child:[]}]})(r)}function y0(r){return au({attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"},child:[]}]})(r)}const sb=({paginated:r,page:e,totalPages:i,handlePrev:s,handleNext:l,activeTab:c})=>R.jsx(R.Fragment,{children:R.jsxs("article",{className:`flex flex-row bg-stone-800 rounded-box shadow-md justify-center items-center w-80 h-80 gap-3 \r
            sm:justify-between sm:max-w-min sm:min-w-xl transition-all duration-300`,children:[R.jsx("button",{className:`hidden h-full items-center rounded-lg px-4 border border-green-300 bg-green-300/20 opacity-70 text-green-300\r
                    sm:flex  \r
                    hover:cursor-pointer hover:opacity-100  \r
                    disabled:border-transparent disabled:bg-stone-700 disabled:opacity-50 disabled:cursor-default `,onClick:s,disabled:e===0,children:R.jsx(x0,{})}),R.jsx("div",{className:"flex flex-col h-full overflow-y-auto p-4",children:r.map((f,d)=>R.jsxs("div",{className:"space-y-2 animate-fade animate-duration-500",children:[R.jsx("h3",{className:"text-lg",children:f.title}),R.jsx("p",{children:f.year}),R.jsx("h4",{className:"text-md uppercase font-semibold text-amber-300",children:f.title1}),R.jsx("p",{className:"text-md max-w-sm",children:f.description})]},d))},e||c),R.jsx("button",{className:`hidden h-full items-center rounded-lg text-green-300 px-4 border border-green-300 bg-green-300/20 opacity-70 \r
                    sm:flex\r
                    hover:cursor-pointer hover:opacity-100 \r
                    disabled:border-transparent disabled:bg-stone-700 disabled:opacity-50 disabled:cursor-default `,onClick:l,disabled:e===i-1,children:R.jsx(y0,{})})]})}),Yv=({onClick:r,disabled:e,children:i})=>R.jsx("button",{className:`flex items-center px-4 border border-green-300 bg-green-300/20 opacity-70 text-green-300 rounded-lg\r
                hover:cursor-pointer hover:opacity-100\r
                disabled:opacity-50 disabled:bg-stone-700 disabled:border-transparent disabled:cursor-default sm:hidden`,onClick:r,disabled:e,children:i}),Zv=({tab:r,children:e,handleTab:i,activeTab:s})=>R.jsx("button",{className:`p-4 border text-blue-50 sm:w-44 rounded-lg opacity-70 ${s===r?"bg-green-300/20 cursor-default border-green-300":"bg-stone-700 opacity-50 border-transparent cursor-pointer hover:scale-95 hover:opacity-100 hover:border-green-300"}`,onClick:()=>i(r),disabled:s===r,children:e}),ob=()=>{const[r,e]=re.useState("laboral"),[i,s]=re.useState(0),l=r==="laboral"?ab:rb,c=1,f=Math.ceil(l.length/c),d=S=>{if(typeof S.year=="string"){const b=S.year.match(/\d{4}/);return b?parseInt(b[0],10):0}return typeof S.year=="number"?S.year:0},m=[...l].sort((S,b)=>d(S)-d(b)).slice(i*c,(i+1)*c),g=()=>s(S=>Math.max(S-1,0)),_=()=>s(S=>Math.min(S+1,f-1)),x=S=>{e(S),s(0)};return R.jsxs("div",{className:"flex flex-col items-center",children:[R.jsxs("div",{className:"flex flex-row gap-2",children:[R.jsx(Yv,{onClick:g,disabled:i===0,children:R.jsx(x0,{})}),R.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[R.jsx(Zv,{tab:"laboral",handleTab:x,activeTab:r,children:"Historial laboral"}),R.jsx(Zv,{tab:"academico",handleTab:x,activeTab:r,children:"Historial académico"})]}),R.jsx(Yv,{onClick:_,disabled:i===f-1,children:R.jsx(y0,{})})]}),R.jsxs("div",{className:"flex flex-col items-center justify-center text-center my-4 space-y-2",children:[R.jsxs("span",{className:"py-2 text-amber-300",children:[i+1," / ",f]}),R.jsx(sb,{paginated:m,page:i,totalPages:f,handlePrev:g,handleNext:_,activeTab:r})]}),R.jsxs("div",{className:"flex flex-col gap-4 pb-4",children:[R.jsx("p",{className:"font-extralight text-lg text-emerald-300/80 max-w-md",children:"¿Interesado en trabajar conmigo?"}),R.jsx(il,{})]})]})},lb=[{label:"Home",href:"/"},{label:"Sobre mí",href:"/SobreMi"},{label:"Proyectos",href:"/proyectos"},{label:"CyberVlog",href:"/CyberVlog"}],cb=()=>R.jsx("nav",{className:"self-center py-4 animate-fade animate-duration-200 animate-ease-linear","aria-label":"Main navigation",children:R.jsx("ul",{className:"menu menu-horizontal rounded-box bg-stone-800 gap-1 outline rounded-full",children:lb.map(r=>R.jsx("li",{children:R.jsx(zs,{className:"rounded-full font-light text-sm sm:text-xl md:text-2xl hover:scale-95 transition-all duration-300",to:r.href,children:r.label})},r.label))})}),ub=2e-4,Kv=.003,Qv=Math.PI/6,Jv=Math.PI/180;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vh="175",fb=0,$v=1,db=2,S0=1,hb=2,ia=3,Xa=0,Gn=1,aa=2,ka=0,Rs=1,e_=2,t_=3,n_=4,pb=5,Sr=100,mb=101,gb=102,vb=103,_b=104,xb=200,yb=201,Sb=202,Mb=203,Zd=204,Kd=205,bb=206,Eb=207,Tb=208,Ab=209,Rb=210,wb=211,Cb=212,Db=213,Ub=214,Qd=0,Jd=1,$d=2,Cs=3,eh=4,th=5,nh=6,ih=7,kh=0,Nb=1,Lb=2,ja=0,Pb=1,Ob=2,zb=3,Ib=4,Bb=5,Fb=6,Hb=7,M0=300,Ds=301,Us=302,ah=303,rh=304,ru=306,sh=1e3,br=1001,oh=1002,$n=1003,Gb=1004,xc=1005,Ri=1006,xd=1007,Er=1008,ca=1009,b0=1010,E0=1011,Zo=1012,jh=1013,Ar=1014,wi=1015,al=1016,Xh=1017,qh=1018,Ko=1020,T0=35902,A0=1021,R0=1022,vi=1023,w0=1024,C0=1025,Qo=1026,Jo=1027,Wh=1028,Yh=1029,D0=1030,Zh=1031,Kh=1033,kc=33776,jc=33777,Xc=33778,qc=33779,lh=35840,ch=35841,uh=35842,fh=35843,dh=36196,hh=37492,ph=37496,mh=37808,gh=37809,vh=37810,_h=37811,xh=37812,yh=37813,Sh=37814,Mh=37815,bh=37816,Eh=37817,Th=37818,Ah=37819,Rh=37820,wh=37821,Wc=36492,Ch=36494,Dh=36495,U0=36283,Uh=36284,Nh=36285,Lh=36286,Vb=3200,kb=3201,Qh=0,jb=1,Va="",li="srgb",Ns="srgb-linear",$c="linear",zt="srgb",ls=7680,i_=519,Xb=512,qb=513,Wb=514,N0=515,Yb=516,Zb=517,Kb=518,Qb=519,a_=35044,r_="300 es",ra=2e3,eu=2001;class Is{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let s_=1234567;const qo=Math.PI/180,$o=180/Math.PI;function Bs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function mt(r,e,i){return Math.max(e,Math.min(i,r))}function Jh(r,e){return(r%e+e)%e}function Jb(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function $b(r,e,i){return r!==e?(i-r)/(e-r):0}function Wo(r,e,i){return(1-i)*r+i*e}function eE(r,e,i,s){return Wo(r,e,1-Math.exp(-i*s))}function tE(r,e=1){return e-Math.abs(Jh(r,e*2)-e)}function nE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function iE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function aE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function rE(r,e){return r+Math.random()*(e-r)}function sE(r){return r*(.5-Math.random())}function oE(r){r!==void 0&&(s_=r);let e=s_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lE(r){return r*qo}function cE(r){return r*$o}function uE(r){return(r&r-1)===0&&r!==0}function fE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function dE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hE(r,e,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),p=f(i/2),m=c((e+s)/2),g=f((e+s)/2),_=c((e-s)/2),x=f((e-s)/2),S=c((s-e)/2),b=f((s-e)/2);switch(l){case"XYX":r.set(d*g,p*_,p*x,d*m);break;case"YZY":r.set(p*x,d*g,p*_,d*m);break;case"ZXZ":r.set(p*_,p*x,d*g,d*m);break;case"XZX":r.set(d*g,p*b,p*S,d*m);break;case"YXY":r.set(p*S,d*g,p*b,d*m);break;case"ZYZ":r.set(p*b,p*S,d*g,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ts(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const L0={DEG2RAD:qo,RAD2DEG:$o,generateUUID:Bs,clamp:mt,euclideanModulo:Jh,mapLinear:Jb,inverseLerp:$b,lerp:Wo,damp:eE,pingpong:tE,smoothstep:nE,smootherstep:iE,randInt:aE,randFloat:rE,randFloatSpread:sE,seededRandom:oE,degToRad:lE,radToDeg:cE,isPowerOfTwo:uE,ceilPowerOfTwo:fE,floorPowerOfTwo:dE,setQuaternionFromProperEuler:hE,normalize:Nn,denormalize:Ts};class wt{constructor(e=0,i=0){wt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=mt(this.x,e.x,i.x),this.y=mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=mt(this.x,e,i),this.y=mt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,i,s,l,c,f,d,p,m){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,d,p,m)}set(e,i,s,l,c,f,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=s,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],g=s[4],_=s[7],x=s[2],S=s[5],b=s[8],A=l[0],y=l[3],v=l[6],L=l[1],U=l[4],D=l[7],B=l[2],G=l[5],F=l[8];return c[0]=f*A+d*L+p*B,c[3]=f*y+d*U+p*G,c[6]=f*v+d*D+p*F,c[1]=m*A+g*L+_*B,c[4]=m*y+g*U+_*G,c[7]=m*v+g*D+_*F,c[2]=x*A+S*L+b*B,c[5]=x*y+S*U+b*G,c[8]=x*v+S*D+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*f*g-i*d*m-s*c*g+s*d*p+l*c*m-l*f*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],_=g*f-d*m,x=d*p-g*c,S=m*c-f*p,b=i*_+s*x+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=_*A,e[1]=(l*m-g*s)*A,e[2]=(d*s-l*f)*A,e[3]=x*A,e[4]=(g*i-l*p)*A,e[5]=(l*c-d*i)*A,e[6]=S*A,e[7]=(s*p-m*i)*A,e[8]=(f*i-s*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*d)+f+e,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(yd.makeScale(e,i)),this}rotate(e){return this.premultiply(yd.makeRotation(-e)),this}translate(e,i){return this.premultiply(yd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yd=new rt;function P0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function tu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pE(){const r=tu("canvas");return r.style.display="block",r}const o_={};function Yc(r){r in o_||(o_[r]=!0,console.warn(r))}function mE(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function gE(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vE(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const l_=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c_=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _E(){const r={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===zt&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===zt&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?$c:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ns]:{primaries:e,whitePoint:s,transfer:$c,toXYZ:l_,fromXYZ:c_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:s,transfer:zt,toXYZ:l_,fromXYZ:c_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),r}const At=_E();function oa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let cs;class xE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{cs===void 0&&(cs=tu("canvas")),cs.width=e.width,cs.height=e.height;const l=cs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=cs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=tu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=oa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(oa(i[s]/255)*255):i[s]=oa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yE=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Sd(l[f].image)):c.push(Sd(l[f]))}else c=Sd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Sd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SE=0;class Pn extends Is{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=br,l=br,c=Ri,f=Er,d=vi,p=ca,m=Pn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Bs(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==M0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sh:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case oh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sh:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case oh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=M0;Pn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,m=p[0],g=p[4],_=p[8],x=p[1],S=p[5],b=p[9],A=p[2],y=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-A)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+A)<.1&&Math.abs(b+y)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,D=(S+1)/2,B=(v+1)/2,G=(g+x)/4,F=(_+A)/4,X=(b+y)/4;return U>D&&U>B?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=G/s,c=F/s):D>B?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=G/l,c=X/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=F/c,l=X/c),this.set(s,l,c,i),this}let L=Math.sqrt((y-b)*(y-b)+(_-A)*(_-A)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(_-A)/L,this.z=(x-g)/L,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=mt(this.x,e.x,i.x),this.y=mt(this.y,e.y,i.y),this.z=mt(this.z,e.z,i.z),this.w=mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=mt(this.x,e,i),this.y=mt(this.y,e,i),this.z=mt(this.z,e,i),this.w=mt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ME extends Is{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Pn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new $h(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends ME{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class O0 extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=$n,this.minFilter=$n,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bE extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=$n,this.minFilter=$n,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,d){let p=s[l+0],m=s[l+1],g=s[l+2],_=s[l+3];const x=c[f+0],S=c[f+1],b=c[f+2],A=c[f+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=_;return}if(d===1){e[i+0]=x,e[i+1]=S,e[i+2]=b,e[i+3]=A;return}if(_!==A||p!==x||m!==S||g!==b){let y=1-d;const v=p*x+m*S+g*b+_*A,L=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const B=Math.sqrt(U),G=Math.atan2(B,v*L);y=Math.sin(y*G)/B,d=Math.sin(d*G)/B}const D=d*L;if(p=p*y+x*D,m=m*y+S*D,g=g*y+b*D,_=_*y+A*D,y===1-d){const B=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=B,m*=B,g*=B,_*=B}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,f){const d=s[l],p=s[l+1],m=s[l+2],g=s[l+3],_=c[f],x=c[f+1],S=c[f+2],b=c[f+3];return e[i]=d*b+g*_+p*S-m*x,e[i+1]=p*b+g*x+m*_-d*S,e[i+2]=m*b+g*S+d*x-p*_,e[i+3]=g*b-d*_-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(s/2),g=d(l/2),_=d(c/2),x=p(s/2),S=p(l/2),b=p(c/2);switch(f){case"XYZ":this._x=x*g*_+m*S*b,this._y=m*S*_-x*g*b,this._z=m*g*b+x*S*_,this._w=m*g*_-x*S*b;break;case"YXZ":this._x=x*g*_+m*S*b,this._y=m*S*_-x*g*b,this._z=m*g*b-x*S*_,this._w=m*g*_+x*S*b;break;case"ZXY":this._x=x*g*_-m*S*b,this._y=m*S*_+x*g*b,this._z=m*g*b+x*S*_,this._w=m*g*_-x*S*b;break;case"ZYX":this._x=x*g*_-m*S*b,this._y=m*S*_+x*g*b,this._z=m*g*b-x*S*_,this._w=m*g*_+x*S*b;break;case"YZX":this._x=x*g*_+m*S*b,this._y=m*S*_+x*g*b,this._z=m*g*b-x*S*_,this._w=m*g*_-x*S*b;break;case"XZY":this._x=x*g*_-m*S*b,this._y=m*S*_-x*g*b,this._z=m*g*b+x*S*_,this._w=m*g*_+x*S*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],g=i[6],_=i[10],x=s+d+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(f-l)*S}else if(s>d&&s>_){const S=2*Math.sqrt(1+s-d-_);this._w=(g-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+m)/S}else if(d>_){const S=2*Math.sqrt(1+d-s-_);this._w=(c-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+_-s-d);this._w=(f-l)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+f*d+l*m-c*p,this._y=l*g+f*p+c*d-s*m,this._z=c*g+f*m+s*p-l*d,this._w=f*g-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),_=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=f*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,i=0,s=0){oe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(u_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(u_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*l-d*s),g=2*(d*i-c*l),_=2*(c*s-f*i);return this.x=i+p*m+f*_-d*g,this.y=s+p*g+d*m-c*_,this.z=l+p*_+c*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=mt(this.x,e.x,i.x),this.y=mt(this.y,e.y,i.y),this.z=mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=mt(this.x,e,i),this.y=mt(this.y,e,i),this.z=mt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-s*p,this.z=s*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Md.copy(this).projectOnVector(e),this.sub(Md)}reflect(e){return this.sub(Md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Md=new oe,u_=new rl;class Cr{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,hi):hi.fromBufferAttribute(c,f),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yc.copy(s.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),Sc.subVectors(this.max,Bo),us.subVectors(e.a,Bo),fs.subVectors(e.b,Bo),ds.subVectors(e.c,Bo),za.subVectors(fs,us),Ia.subVectors(ds,fs),hr.subVectors(us,ds);let i=[0,-za.z,za.y,0,-Ia.z,Ia.y,0,-hr.z,hr.y,za.z,0,-za.x,Ia.z,0,-Ia.x,hr.z,0,-hr.x,-za.y,za.x,0,-Ia.y,Ia.x,0,-hr.y,hr.x,0];return!bd(i,us,fs,ds,Sc)||(i=[1,0,0,0,1,0,0,0,1],!bd(i,us,fs,ds,Sc))?!1:(Mc.crossVectors(za,Ia),i=[Mc.x,Mc.y,Mc.z],bd(i,us,fs,ds,Sc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ji=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],hi=new oe,yc=new Cr,us=new oe,fs=new oe,ds=new oe,za=new oe,Ia=new oe,hr=new oe,Bo=new oe,Sc=new oe,Mc=new oe,pr=new oe;function bd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){pr.fromArray(r,c);const d=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),p=e.dot(pr),m=i.dot(pr),g=s.dot(pr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const EE=new Cr,Fo=new oe,Ed=new oe;class sl{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):EE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Fo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Ed)),this.expandByPoint(Fo.copy(e.center).sub(Ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new oe,Td=new oe,bc=new oe,Ba=new oe,Ad=new oe,Ec=new oe,Rd=new oe;class z0{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Td.copy(e).add(i).multiplyScalar(.5),bc.copy(i).sub(e).normalize(),Ba.copy(this.origin).sub(Td);const c=e.distanceTo(i)*.5,f=-this.direction.dot(bc),d=Ba.dot(this.direction),p=-Ba.dot(bc),m=Ba.lengthSq(),g=Math.abs(1-f*f);let _,x,S,b;if(g>0)if(_=f*p-d,x=f*d-p,b=c*g,_>=0)if(x>=-b)if(x<=b){const A=1/g;_*=A,x*=A,S=_*(_+f*x+2*d)+x*(f*_+x+2*p)+m}else x=c,_=Math.max(0,-(f*x+d)),S=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(f*x+d)),S=-_*_+x*(x+2*p)+m;else x<=-b?(_=Math.max(0,-(-f*c+d)),x=_>0?-c:Math.min(Math.max(-c,-p),c),S=-_*_+x*(x+2*p)+m):x<=b?(_=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(_=Math.max(0,-(f*c+d)),x=_>0?c:Math.min(Math.max(-c,-p),c),S=-_*_+x*(x+2*p)+m);else x=f>0?-c:c,_=Math.max(0,-(f*x+d)),S=-_*_+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Td).addScaledVector(bc,x),S}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const s=$i.dot(this.direction),l=$i.dot($i)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,s,l,c){Ad.subVectors(i,e),Ec.subVectors(s,e),Rd.crossVectors(Ad,Ec);let f=this.direction.dot(Rd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Ba.subVectors(this.origin,e);const p=d*this.direction.dot(Ec.crossVectors(Ba,Ec));if(p<0)return null;const m=d*this.direction.dot(Ad.cross(Ba));if(m<0||p+m>f)return null;const g=-d*Ba.dot(Rd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,i,s,l,c,f,d,p,m,g,_,x,S,b,A,y){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,d,p,m,g,_,x,S,b,A,y)}set(e,i,s,l,c,f,d,p,m,g,_,x,S,b,A,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=b,v[11]=A,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/hs.setFromMatrixColumn(e,0).length(),c=1/hs.setFromMatrixColumn(e,1).length(),f=1/hs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=f*g,S=f*_,b=d*g,A=d*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=S+b*m,i[5]=x-A*m,i[9]=-d*p,i[2]=A-x*m,i[6]=b+S*m,i[10]=f*p}else if(e.order==="YXZ"){const x=p*g,S=p*_,b=m*g,A=m*_;i[0]=x+A*d,i[4]=b*d-S,i[8]=f*m,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=S*d-b,i[6]=A+x*d,i[10]=f*p}else if(e.order==="ZXY"){const x=p*g,S=p*_,b=m*g,A=m*_;i[0]=x-A*d,i[4]=-f*_,i[8]=b+S*d,i[1]=S+b*d,i[5]=f*g,i[9]=A-x*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(e.order==="ZYX"){const x=f*g,S=f*_,b=d*g,A=d*_;i[0]=p*g,i[4]=b*m-S,i[8]=x*m+A,i[1]=p*_,i[5]=A*m+x,i[9]=S*m-b,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,b=d*p,A=d*m;i[0]=p*g,i[4]=A-x*_,i[8]=b*_+S,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-m*g,i[6]=S*_+b,i[10]=x-A*_}else if(e.order==="XZY"){const x=f*p,S=f*m,b=d*p,A=d*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=x*_+A,i[5]=f*g,i[9]=S*_-b,i[2]=b*_-S,i[6]=d*g,i[10]=A*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TE,e,AE)}lookAt(e,i,s){const l=this.elements;return Kn.subVectors(e,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Fa.crossVectors(s,Kn),Fa.lengthSq()===0&&(Math.abs(s.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Fa.crossVectors(s,Kn)),Fa.normalize(),Tc.crossVectors(Kn,Fa),l[0]=Fa.x,l[4]=Tc.x,l[8]=Kn.x,l[1]=Fa.y,l[5]=Tc.y,l[9]=Kn.y,l[2]=Fa.z,l[6]=Tc.z,l[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],g=s[1],_=s[5],x=s[9],S=s[13],b=s[2],A=s[6],y=s[10],v=s[14],L=s[3],U=s[7],D=s[11],B=s[15],G=l[0],F=l[4],X=l[8],N=l[12],C=l[1],V=l[5],ce=l[9],le=l[13],_e=l[2],de=l[6],I=l[10],K=l[14],q=l[3],Me=l[7],P=l[11],ee=l[15];return c[0]=f*G+d*C+p*_e+m*q,c[4]=f*F+d*V+p*de+m*Me,c[8]=f*X+d*ce+p*I+m*P,c[12]=f*N+d*le+p*K+m*ee,c[1]=g*G+_*C+x*_e+S*q,c[5]=g*F+_*V+x*de+S*Me,c[9]=g*X+_*ce+x*I+S*P,c[13]=g*N+_*le+x*K+S*ee,c[2]=b*G+A*C+y*_e+v*q,c[6]=b*F+A*V+y*de+v*Me,c[10]=b*X+A*ce+y*I+v*P,c[14]=b*N+A*le+y*K+v*ee,c[3]=L*G+U*C+D*_e+B*q,c[7]=L*F+U*V+D*de+B*Me,c[11]=L*X+U*ce+D*I+B*P,c[15]=L*N+U*le+D*K+B*ee,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],d=e[5],p=e[9],m=e[13],g=e[2],_=e[6],x=e[10],S=e[14],b=e[3],A=e[7],y=e[11],v=e[15];return b*(+c*p*_-l*m*_-c*d*x+s*m*x+l*d*S-s*p*S)+A*(+i*p*S-i*m*x+c*f*x-l*f*S+l*m*g-c*p*g)+y*(+i*m*_-i*d*S-c*f*_+s*f*S+c*d*g-s*m*g)+v*(-l*d*g-i*p*_+i*d*x+l*f*_-s*f*x+s*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],_=e[9],x=e[10],S=e[11],b=e[12],A=e[13],y=e[14],v=e[15],L=_*y*m-A*x*m+A*p*S-d*y*S-_*p*v+d*x*v,U=b*x*m-g*y*m-b*p*S+f*y*S+g*p*v-f*x*v,D=g*A*m-b*_*m+b*d*S-f*A*S-g*d*v+f*_*v,B=b*_*p-g*A*p-b*d*x+f*A*x+g*d*y-f*_*y,G=i*L+s*U+l*D+c*B;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/G;return e[0]=L*F,e[1]=(A*x*c-_*y*c-A*l*S+s*y*S+_*l*v-s*x*v)*F,e[2]=(d*y*c-A*p*c+A*l*m-s*y*m-d*l*v+s*p*v)*F,e[3]=(_*p*c-d*x*c-_*l*m+s*x*m+d*l*S-s*p*S)*F,e[4]=U*F,e[5]=(g*y*c-b*x*c+b*l*S-i*y*S-g*l*v+i*x*v)*F,e[6]=(b*p*c-f*y*c-b*l*m+i*y*m+f*l*v-i*p*v)*F,e[7]=(f*x*c-g*p*c+g*l*m-i*x*m-f*l*S+i*p*S)*F,e[8]=D*F,e[9]=(b*_*c-g*A*c-b*s*S+i*A*S+g*s*v-i*_*v)*F,e[10]=(f*A*c-b*d*c+b*s*m-i*A*m-f*s*v+i*d*v)*F,e[11]=(g*d*c-f*_*c-g*s*m+i*_*m+f*s*S-i*d*S)*F,e[12]=B*F,e[13]=(g*A*l-b*_*l+b*s*x-i*A*x-g*s*y+i*_*y)*F,e[14]=(b*d*l-f*A*l-b*s*p+i*A*p+f*s*y-i*d*y)*F,e[15]=(f*_*l-g*d*l+g*s*p-i*_*p-f*s*x+i*d*x)*F,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,d=e.y,p=e.z,m=c*f,g=c*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+s,g*p-l*f,0,m*p-l*d,g*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,g=f+f,_=d+d,x=c*m,S=c*g,b=c*_,A=f*g,y=f*_,v=d*_,L=p*m,U=p*g,D=p*_,B=s.x,G=s.y,F=s.z;return l[0]=(1-(A+v))*B,l[1]=(S+D)*B,l[2]=(b-U)*B,l[3]=0,l[4]=(S-D)*G,l[5]=(1-(x+v))*G,l[6]=(y+L)*G,l[7]=0,l[8]=(b+U)*F,l[9]=(y-L)*F,l[10]=(1-(x+A))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=hs.set(l[0],l[1],l[2]).length();const f=hs.set(l[4],l[5],l[6]).length(),d=hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],pi.copy(this);const m=1/c,g=1/f,_=1/d;return pi.elements[0]*=m,pi.elements[1]*=m,pi.elements[2]*=m,pi.elements[4]*=g,pi.elements[5]*=g,pi.elements[6]*=g,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,i.setFromRotationMatrix(pi),s.x=c,s.y=f,s.z=d,this}makePerspective(e,i,s,l,c,f,d=ra){const p=this.elements,m=2*c/(i-e),g=2*c/(s-l),_=(i+e)/(i-e),x=(s+l)/(s-l);let S,b;if(d===ra)S=-(f+c)/(f-c),b=-2*f*c/(f-c);else if(d===eu)S=-f/(f-c),b=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,d=ra){const p=this.elements,m=1/(i-e),g=1/(s-l),_=1/(f-c),x=(i+e)*m,S=(s+l)*g;let b,A;if(d===ra)b=(f+c)*_,A=-2*_;else if(d===eu)b=c*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=A,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const hs=new oe,pi=new Xt,TE=new oe(0,0,0),AE=new oe(1,1,1),Fa=new oe,Tc=new oe,Kn=new oe,f_=new Xt,d_=new rl;class xi{constructor(e=0,i=0,s=0,l=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return f_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return d_.setFromEuler(this),this.setFromQuaternion(d_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class ep{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RE=0;const h_=new oe,ps=new rl,ea=new Xt,Ac=new oe,Ho=new oe,wE=new oe,CE=new rl,p_=new oe(1,0,0),m_=new oe(0,1,0),g_=new oe(0,0,1),v_={type:"added"},DE={type:"removed"},ms={type:"childadded",child:null},wd={type:"childremoved",child:null};class Dn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new oe,i=new xi,s=new rl,l=new oe(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Xt},normalMatrix:{value:new rt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ps.setFromAxisAngle(e,i),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,i){return ps.setFromAxisAngle(e,i),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(p_,e)}rotateY(e){return this.rotateOnAxis(m_,e)}rotateZ(e){return this.rotateOnAxis(g_,e)}translateOnAxis(e,i){return h_.copy(e).applyQuaternion(this.quaternion),this.position.add(h_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(p_,e)}translateY(e){return this.translateOnAxis(m_,e)}translateZ(e){return this.translateOnAxis(g_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ac.copy(e):Ac.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Ho,Ac,this.up):ea.lookAt(Ac,Ho,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),ps.setFromRotationMatrix(ea),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(v_),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(DE),wd.child=e,this.dispatchEvent(wd),wd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(v_),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,wE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,CE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),_=f(e.shapes),x=f(e.skeletons),S=f(e.animations),b=f(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new oe(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new oe,ta=new oe,Cd=new oe,na=new oe,gs=new oe,vs=new oe,__=new oe,Dd=new oe,Ud=new oe,Nd=new oe,Ld=new en,Pd=new en,Od=new en;class gi{constructor(e=new oe,i=new oe,s=new oe){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),mi.subVectors(e,i),l.cross(mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){mi.subVectors(l,i),ta.subVectors(s,i),Cd.subVectors(e,i);const f=mi.dot(mi),d=mi.dot(ta),p=mi.dot(Cd),m=ta.dot(ta),g=ta.dot(Cd),_=f*m-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(m*p-d*g)*x,b=(f*g-d*p)*x;return c.set(1-S-b,b,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(e,i,s,l,c,f,d,p){return this.getBarycoord(e,i,s,l,na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,na.x),p.addScaledVector(f,na.y),p.addScaledVector(d,na.z),p)}static getInterpolatedAttribute(e,i,s,l,c,f){return Ld.setScalar(0),Pd.setScalar(0),Od.setScalar(0),Ld.fromBufferAttribute(e,i),Pd.fromBufferAttribute(e,s),Od.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Ld,c.x),f.addScaledVector(Pd,c.y),f.addScaledVector(Od,c.z),f}static isFrontFacing(e,i,s,l){return mi.subVectors(s,i),ta.subVectors(e,i),mi.cross(ta).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),mi.cross(ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return gi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,d;gs.subVectors(l,s),vs.subVectors(c,s),Dd.subVectors(e,s);const p=gs.dot(Dd),m=vs.dot(Dd);if(p<=0&&m<=0)return i.copy(s);Ud.subVectors(e,l);const g=gs.dot(Ud),_=vs.dot(Ud);if(g>=0&&_<=g)return i.copy(l);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(s).addScaledVector(gs,f);Nd.subVectors(e,c);const S=gs.dot(Nd),b=vs.dot(Nd);if(b>=0&&S<=b)return i.copy(c);const A=S*m-p*b;if(A<=0&&m>=0&&b<=0)return d=m/(m-b),i.copy(s).addScaledVector(vs,d);const y=g*b-S*_;if(y<=0&&_-g>=0&&S-b>=0)return __.subVectors(c,l),d=(_-g)/(_-g+(S-b)),i.copy(l).addScaledVector(__,d);const v=1/(y+A+x);return f=A*v,d=x*v,i.copy(s).addScaledVector(gs,f).addScaledVector(vs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function zd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class yt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=s,At.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=At.workingColorSpace){if(e=Jh(e,1),i=mt(i,0,1),s=mt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=zd(f,c,e+1/3),this.g=zd(f,c,e),this.b=zd(f,c,e-1/3)}return At.toWorkingColorSpace(this,l),this}setStyle(e,i=li){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=li){const s=I0[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return At.fromWorkingColorSpace(Cn.copy(this),e),Math.round(mt(Cn.r*255,0,255))*65536+Math.round(mt(Cn.g*255,0,255))*256+Math.round(mt(Cn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.fromWorkingColorSpace(Cn.copy(this),i);const s=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=g<=.5?_/(f+d):_/(2-f-d),f){case s:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-s)/_+2;break;case c:p=(s-l)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=At.workingColorSpace){return At.fromWorkingColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=li){At.fromWorkingColorSpace(Cn.copy(this),e);const i=Cn.r,s=Cn.g,l=Cn.b;return e!==li?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ha),this.setHSL(Ha.h+e,Ha.s+i,Ha.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ha),e.getHSL(Rc);const s=Wo(Ha.h,Rc.h,i),l=Wo(Ha.s,Rc.s,i),c=Wo(Ha.l,Rc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new yt;yt.NAMES=I0;let UE=0;class Fs extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=Rs,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Kd,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(s.blending=this.blending),this.side!==Xa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zd&&(s.blendSrc=this.blendSrc),this.blendDst!==Kd&&(s.blendDst=this.blendDst),this.blendEquation!==Sr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tp extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new oe,wc=new wt;let NE=0;class _i{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=a_,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(e),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ts(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Nn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ts(i,this.array)),i}setX(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ts(i,this.array)),i}setY(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ts(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ts(i,this.array)),i}setW(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array),l=Nn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array),l=Nn(l,this.array),c=Nn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==a_&&(e.usage=this.usage),e}}class B0 extends _i{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class F0 extends _i{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ci extends _i{constructor(e,i,s){super(new Float32Array(e),i,s)}}let LE=0;const oi=new Xt,Id=new Dn,_s=new oe,Qn=new Cr,Go=new Cr,_n=new oe;class Wa extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P0(e)?F0:B0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new rt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,s){return oi.makeTranslation(e,i,s),this.applyMatrix4(oi),this}scale(e,i,s){return oi.makeScale(e,i,s),this.applyMatrix4(oi),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ci(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Qn.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const s=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Go.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Qn.min,Go.min),Qn.expandByPoint(_n),_n.addVectors(Qn.max,Go.max),Qn.expandByPoint(_n)):(Qn.expandByPoint(Go.min),Qn.expandByPoint(Go.max))}Qn.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)_n.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)_n.fromBufferAttribute(d,m),p&&(_s.fromBufferAttribute(e,m),_n.add(_s)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let X=0;X<s.count;X++)d[X]=new oe,p[X]=new oe;const m=new oe,g=new oe,_=new oe,x=new wt,S=new wt,b=new wt,A=new oe,y=new oe;function v(X,N,C){m.fromBufferAttribute(s,X),g.fromBufferAttribute(s,N),_.fromBufferAttribute(s,C),x.fromBufferAttribute(c,X),S.fromBufferAttribute(c,N),b.fromBufferAttribute(c,C),g.sub(m),_.sub(m),S.sub(x),b.sub(x);const V=1/(S.x*b.y-b.x*S.y);isFinite(V)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(_,-S.y).multiplyScalar(V),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-b.x).multiplyScalar(V),d[X].add(A),d[N].add(A),d[C].add(A),p[X].add(y),p[N].add(y),p[C].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let X=0,N=L.length;X<N;++X){const C=L[X],V=C.start,ce=C.count;for(let le=V,_e=V+ce;le<_e;le+=3)v(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const U=new oe,D=new oe,B=new oe,G=new oe;function F(X){B.fromBufferAttribute(l,X),G.copy(B);const N=d[X];U.copy(N),U.sub(B.multiplyScalar(B.dot(N))).normalize(),D.crossVectors(G,N);const V=D.dot(p[X])<0?-1:1;f.setXYZW(X,U.x,U.y,U.z,V)}for(let X=0,N=L.length;X<N;++X){const C=L[X],V=C.start,ce=C.count;for(let le=V,_e=V+ce;le<_e;le+=3)F(e.getX(le+0)),F(e.getX(le+1)),F(e.getX(le+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new _i(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new oe,c=new oe,f=new oe,d=new oe,p=new oe,m=new oe,g=new oe,_=new oe;if(e)for(let x=0,S=e.count;x<S;x+=3){const b=e.getX(x+0),A=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,y),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,y),d.add(g),p.add(g),m.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,_=d.normalized,x=new m.constructor(p.length*g);let S=0,b=0;for(let A=0,y=p.length;A<y;A++){d.isInterleavedBufferAttribute?S=p[A]*d.data.stride+d.offset:S=p[A]*g;for(let v=0;v<g;v++)x[b++]=m[S++]}return new _i(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Wa,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,_=m.length;g<_;g++){const x=m[g],S=e(x,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const S=m[_];g.push(S.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=e.morphAttributes;for(const m in c){const g=[],_=c[m];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const x_=new Xt,mr=new z0,Cc=new sl,y_=new oe,Dc=new oe,Uc=new oe,Nc=new oe,Bd=new oe,Lc=new oe,S_=new oe,Pc=new oe;class Jn extends Dn{constructor(e=new Wa,i=new tp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Lc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],_=c[p];g!==0&&(Bd.fromBufferAttribute(_,e),f?Lc.addScaledVector(Bd,g):Lc.addScaledVector(Bd.sub(i),g))}i.add(Lc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(c),mr.copy(e.ray).recast(e.near),!(Cc.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Cc,y_)===null||mr.origin.distanceToSquared(y_)>(e.far-e.near)**2))&&(x_.copy(c).invert(),mr.copy(e.ray).applyMatrix4(x_),!(s.boundingBox!==null&&mr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,mr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,A=x.length;b<A;b++){const y=x[b],v=f[y.materialIndex],L=Math.max(y.start,S.start),U=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let D=L,B=U;D<B;D+=3){const G=d.getX(D),F=d.getX(D+1),X=d.getX(D+2);l=Oc(this,v,e,s,m,g,_,G,F,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let y=b,v=A;y<v;y+=3){const L=d.getX(y),U=d.getX(y+1),D=d.getX(y+2);l=Oc(this,f,e,s,m,g,_,L,U,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let b=0,A=x.length;b<A;b++){const y=x[b],v=f[y.materialIndex],L=Math.max(y.start,S.start),U=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let D=L,B=U;D<B;D+=3){const G=D,F=D+1,X=D+2;l=Oc(this,v,e,s,m,g,_,G,F,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let y=b,v=A;y<v;y+=3){const L=y,U=y+1,D=y+2;l=Oc(this,f,e,s,m,g,_,L,U,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function PE(r,e,i,s,l,c,f,d){let p;if(e.side===Gn?p=s.intersectTriangle(f,c,l,!0,d):p=s.intersectTriangle(l,c,f,e.side===Xa,d),p===null)return null;Pc.copy(d),Pc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Pc);return m<i.near||m>i.far?null:{distance:m,point:Pc.clone(),object:r}}function Oc(r,e,i,s,l,c,f,d,p,m){r.getVertexPosition(d,Dc),r.getVertexPosition(p,Uc),r.getVertexPosition(m,Nc);const g=PE(r,e,i,s,Dc,Uc,Nc,S_);if(g){const _=new oe;gi.getBarycoord(S_,Dc,Uc,Nc,_),l&&(g.uv=gi.getInterpolatedAttribute(l,d,p,m,_,new wt)),c&&(g.uv1=gi.getInterpolatedAttribute(c,d,p,m,_,new wt)),f&&(g.normal=gi.getInterpolatedAttribute(f,d,p,m,_,new oe),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new oe,materialIndex:0};gi.getNormal(Dc,Uc,Nc,x.normal),g.face=x,g.barycoord=_}return g}class Dr extends Wa{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let x=0,S=0;b("z","y","x",-1,-1,s,i,e,f,c,0),b("z","y","x",1,-1,s,i,-e,f,c,1),b("x","z","y",1,1,e,s,i,l,f,2),b("x","z","y",1,-1,e,s,-i,l,f,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Ci(m,3)),this.setAttribute("normal",new Ci(g,3)),this.setAttribute("uv",new Ci(_,2));function b(A,y,v,L,U,D,B,G,F,X,N){const C=D/F,V=B/X,ce=D/2,le=B/2,_e=G/2,de=F+1,I=X+1;let K=0,q=0;const Me=new oe;for(let P=0;P<I;P++){const ee=P*V-le;for(let ye=0;ye<de;ye++){const be=ye*C-ce;Me[A]=be*L,Me[y]=ee*U,Me[v]=_e,m.push(Me.x,Me.y,Me.z),Me[A]=0,Me[y]=0,Me[v]=G>0?1:-1,g.push(Me.x,Me.y,Me.z),_.push(ye/F),_.push(1-P/X),K+=1}}for(let P=0;P<X;P++)for(let ee=0;ee<F;ee++){const ye=x+ee+de*P,be=x+ee+de*(P+1),J=x+(ee+1)+de*(P+1),me=x+(ee+1)+de*P;p.push(ye,be,me),p.push(be,J,me),q+=6}d.addGroup(S,q,N),S+=q,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(r){const e={};for(let i=0;i<r.length;i++){const s=Ls(r[i]);for(const l in s)e[l]=s[l]}return e}function OE(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function H0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const zE={clone:Ls,merge:Ln};var IE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IE,this.fragmentShader=BE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=OE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class G0 extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=ra}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new oe,M_=new wt,b_=new wt;class ci extends G0{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z)}getViewSize(e,i){return this.getViewBounds(e,M_,b_),i.subVectors(b_,M_)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(qo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,ys=1;class FE extends Dn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(xs,ys,e,i);l.layers=this.layers,this.add(l);const c=new ci(xs,ys,e,i);c.layers=this.layers,this.add(c);const f=new ci(xs,ys,e,i);f.layers=this.layers,this.add(f);const d=new ci(xs,ys,e,i);d.layers=this.layers,this.add(d);const p=new ci(xs,ys,e,i);p.layers=this.layers,this.add(p);const m=new ci(xs,ys,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(e===ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===eu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(_,x,S),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class V0 extends Pn{constructor(e=[],i=Ds,s,l,c,f,d,p,m,g){super(e,i,s,l,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HE extends Rr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new V0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ri}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Dr(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:Ls(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Gn,blending:ka});c.uniforms.tEquirect.value=i;const f=new Jn(l,c),d=i.minFilter;return i.minFilter===Er&&(i.minFilter=Ri),new FE(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class jo extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GE={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,s),v=this._getHandJoint(m,A);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,b=.005;m.inputState.pinching&&x>S+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(GE)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new jo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class VE extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class kE extends Pn{constructor(e=null,i=1,s=1,l,c,f,d,p,m=$n,g=$n,_,x){super(null,f,d,p,m,g,l,c,_,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class E_ extends _i{constructor(e,i,s,l=1){super(e,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ss=new Xt,T_=new Xt,zc=[],A_=new Cr,jE=new Xt,Vo=new Jn,ko=new sl;class k0 extends Jn{constructor(e,i,s){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new E_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,jE)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Cr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Ss),A_.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(A_)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new sl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Ss),ko.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(ko)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=e*c+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(e,i){const s=this.matrixWorld,l=this.count;if(Vo.geometry=this.geometry,Vo.material=this.material,Vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(s),e.ray.intersectsSphere(ko)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Ss),T_.multiplyMatrices(s,Ss),Vo.matrixWorld=T_,Vo.raycast(e,zc);for(let f=0,d=zc.length;f<d;f++){const p=zc[f];p.instanceId=c,p.object=this,i.push(p)}zc.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new E_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new kE(new Float32Array(l*this.count),l,this.count,Wh,wi));const c=this.morphTexture.source.data.data;let f=0;for(let m=0;m<s.length;m++)f+=s[m];const d=this.geometry.morphTargetsRelative?1:1-f,p=l*e;c[p]=d,c.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Hd=new oe,XE=new oe,qE=new rt;class xr{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Hd.subVectors(s,i).cross(XE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Hd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||qE.getNormalMatrix(e),l=this.coplanarPoint(Hd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new sl,Ic=new oe;class j0{constructor(e=new xr,i=new xr,s=new xr,l=new xr,c=new xr,f=new xr){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ra){const s=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],p=l[3],m=l[4],g=l[5],_=l[6],x=l[7],S=l[8],b=l[9],A=l[10],y=l[11],v=l[12],L=l[13],U=l[14],D=l[15];if(s[0].setComponents(p-c,x-m,y-S,D-v).normalize(),s[1].setComponents(p+c,x+m,y+S,D+v).normalize(),s[2].setComponents(p+f,x+g,y+b,D+L).normalize(),s[3].setComponents(p-f,x-g,y-b,D-L).normalize(),s[4].setComponents(p-d,x-_,y-A,D-U).normalize(),i===ra)s[5].setComponents(p+d,x+_,y+A,D+U).normalize();else if(i===eu)s[5].setComponents(d,_,A,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ic.x=l.normal.x>0?e.max.x:e.min.x,Ic.y=l.normal.y>0?e.max.y:e.min.y,Ic.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class X0 extends Pn{constructor(e,i,s=Ar,l,c,f,d=$n,p=$n,m,g=Qo){if(g!==Qo&&g!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,d,p,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class su extends Wa{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,g=p+1,_=e/d,x=i/p,S=[],b=[],A=[],y=[];for(let v=0;v<g;v++){const L=v*x-f;for(let U=0;U<m;U++){const D=U*_-c;b.push(D,-L,0),A.push(0,0,1),y.push(U/d),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let L=0;L<d;L++){const U=L+m*v,D=L+m*(v+1),B=L+1+m*(v+1),G=L+1+m*v;S.push(U,D,G),S.push(D,B,G)}this.setIndex(S),this.setAttribute("position",new Ci(b,3)),this.setAttribute("normal",new Ci(A,3)),this.setAttribute("uv",new Ci(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.width,e.height,e.widthSegments,e.heightSegments)}}class ou extends Wa{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+d,Math.PI);let m=0;const g=[],_=new oe,x=new oe,S=[],b=[],A=[],y=[];for(let v=0;v<=s;v++){const L=[],U=v/s;let D=0;v===0&&f===0?D=.5/i:v===s&&p===Math.PI&&(D=-.5/i);for(let B=0;B<=i;B++){const G=B/i;_.x=-e*Math.cos(l+G*c)*Math.sin(f+U*d),_.y=e*Math.cos(f+U*d),_.z=e*Math.sin(l+G*c)*Math.sin(f+U*d),b.push(_.x,_.y,_.z),x.copy(_).normalize(),A.push(x.x,x.y,x.z),y.push(G+D,1-U),L.push(m++)}g.push(L)}for(let v=0;v<s;v++)for(let L=0;L<i;L++){const U=g[v][L+1],D=g[v][L],B=g[v+1][L],G=g[v+1][L+1];(v!==0||f>0)&&S.push(U,D,G),(v!==s-1||p<Math.PI)&&S.push(D,B,G)}this.setIndex(S),this.setAttribute("position",new Ci(b,3)),this.setAttribute("normal",new Ci(A,3)),this.setAttribute("uv",new Ci(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class WE extends Fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class q0 extends Fs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class YE extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZE extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class KE extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class QE extends G0{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class JE extends KE{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class $E extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const R_=new Xt;class eT{constructor(e,i,s=0,l=1/0){this.ray=new z0(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new ep,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return R_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(R_),this}intersectObject(e,i=!0,s=[]){return Ph(e,this,s,i),s.sort(w_),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)Ph(e[l],this,s,i);return s.sort(w_),s}}function w_(r,e){return r.distance-e.distance}function Ph(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)Ph(c[f],e,i,!0)}}function C_(r,e,i,s){const l=tT(s);switch(i){case A0:return r*e;case w0:return r*e;case C0:return r*e*2;case Wh:return r*e/l.components*l.byteLength;case Yh:return r*e/l.components*l.byteLength;case D0:return r*e*2/l.components*l.byteLength;case Zh:return r*e*2/l.components*l.byteLength;case R0:return r*e*3/l.components*l.byteLength;case vi:return r*e*4/l.components*l.byteLength;case Kh:return r*e*4/l.components*l.byteLength;case kc:case jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xc:case qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ch:case fh:return Math.max(r,16)*Math.max(e,8)/4;case lh:case uh:return Math.max(r,8)*Math.max(e,8)/2;case dh:case hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case vh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _h:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case bh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Th:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case wh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Wc:case Ch:case Dh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case U0:case Uh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Nh:case Lh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function tT(r){switch(r){case ca:case b0:return{byteLength:1,components:1};case Zo:case E0:case al:return{byteLength:2,components:1};case Xh:case qh:return{byteLength:2,components:4};case Ar:case jh:case wi:return{byteLength:4,components:1};case T0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function W0(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function nT(r){const e=new WeakMap;function i(d,p){const m=d.array,g=d.usage,_=m.byteLength,x=r.createBuffer();r.bindBuffer(p,x),r.bufferData(p,m,g),d.onUploadCallback();let S;if(m instanceof Float32Array)S=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=r.SHORT;else if(m instanceof Uint32Array)S=r.UNSIGNED_INT;else if(m instanceof Int32Array)S=r.INT;else if(m instanceof Int8Array)S=r.BYTE;else if(m instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,p,m){const g=p.array,_=p.updateRanges;if(r.bindBuffer(m,d),_.length===0)r.bufferSubData(m,0,g);else{_.sort((S,b)=>S.start-b.start);let x=0;for(let S=1;S<_.length;S++){const b=_[x],A=_[S];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++x,_[x]=A)}_.length=x+1;for(let S=0,b=_.length;S<b;S++){const A=_[S];r.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var iT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ET=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,AT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,CT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LT="gl_FragColor = linearToOutputTexel( gl_FragColor );",PT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ZT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$T=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_A=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,MA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,NA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,FA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,GA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,t1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,P1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:iT,alphahash_pars_fragment:aT,alphamap_fragment:rT,alphamap_pars_fragment:sT,alphatest_fragment:oT,alphatest_pars_fragment:lT,aomap_fragment:cT,aomap_pars_fragment:uT,batching_pars_vertex:fT,batching_vertex:dT,begin_vertex:hT,beginnormal_vertex:pT,bsdfs:mT,iridescence_fragment:gT,bumpmap_pars_fragment:vT,clipping_planes_fragment:_T,clipping_planes_pars_fragment:xT,clipping_planes_pars_vertex:yT,clipping_planes_vertex:ST,color_fragment:MT,color_pars_fragment:bT,color_pars_vertex:ET,color_vertex:TT,common:AT,cube_uv_reflection_fragment:RT,defaultnormal_vertex:wT,displacementmap_pars_vertex:CT,displacementmap_vertex:DT,emissivemap_fragment:UT,emissivemap_pars_fragment:NT,colorspace_fragment:LT,colorspace_pars_fragment:PT,envmap_fragment:OT,envmap_common_pars_fragment:zT,envmap_pars_fragment:IT,envmap_pars_vertex:BT,envmap_physical_pars_fragment:ZT,envmap_vertex:FT,fog_vertex:HT,fog_pars_vertex:GT,fog_fragment:VT,fog_pars_fragment:kT,gradientmap_pars_fragment:jT,lightmap_pars_fragment:XT,lights_lambert_fragment:qT,lights_lambert_pars_fragment:WT,lights_pars_begin:YT,lights_toon_fragment:KT,lights_toon_pars_fragment:QT,lights_phong_fragment:JT,lights_phong_pars_fragment:$T,lights_physical_fragment:eA,lights_physical_pars_fragment:tA,lights_fragment_begin:nA,lights_fragment_maps:iA,lights_fragment_end:aA,logdepthbuf_fragment:rA,logdepthbuf_pars_fragment:sA,logdepthbuf_pars_vertex:oA,logdepthbuf_vertex:lA,map_fragment:cA,map_pars_fragment:uA,map_particle_fragment:fA,map_particle_pars_fragment:dA,metalnessmap_fragment:hA,metalnessmap_pars_fragment:pA,morphinstance_vertex:mA,morphcolor_vertex:gA,morphnormal_vertex:vA,morphtarget_pars_vertex:_A,morphtarget_vertex:xA,normal_fragment_begin:yA,normal_fragment_maps:SA,normal_pars_fragment:MA,normal_pars_vertex:bA,normal_vertex:EA,normalmap_pars_fragment:TA,clearcoat_normal_fragment_begin:AA,clearcoat_normal_fragment_maps:RA,clearcoat_pars_fragment:wA,iridescence_pars_fragment:CA,opaque_fragment:DA,packing:UA,premultiplied_alpha_fragment:NA,project_vertex:LA,dithering_fragment:PA,dithering_pars_fragment:OA,roughnessmap_fragment:zA,roughnessmap_pars_fragment:IA,shadowmap_pars_fragment:BA,shadowmap_pars_vertex:FA,shadowmap_vertex:HA,shadowmask_pars_fragment:GA,skinbase_vertex:VA,skinning_pars_vertex:kA,skinning_vertex:jA,skinnormal_vertex:XA,specularmap_fragment:qA,specularmap_pars_fragment:WA,tonemapping_fragment:YA,tonemapping_pars_fragment:ZA,transmission_fragment:KA,transmission_pars_fragment:QA,uv_pars_fragment:JA,uv_pars_vertex:$A,uv_vertex:e1,worldpos_vertex:t1,background_vert:n1,background_frag:i1,backgroundCube_vert:a1,backgroundCube_frag:r1,cube_vert:s1,cube_frag:o1,depth_vert:l1,depth_frag:c1,distanceRGBA_vert:u1,distanceRGBA_frag:f1,equirect_vert:d1,equirect_frag:h1,linedashed_vert:p1,linedashed_frag:m1,meshbasic_vert:g1,meshbasic_frag:v1,meshlambert_vert:_1,meshlambert_frag:x1,meshmatcap_vert:y1,meshmatcap_frag:S1,meshnormal_vert:M1,meshnormal_frag:b1,meshphong_vert:E1,meshphong_frag:T1,meshphysical_vert:A1,meshphysical_frag:R1,meshtoon_vert:w1,meshtoon_frag:C1,points_vert:D1,points_frag:U1,shadow_vert:N1,shadow_frag:L1,sprite_vert:P1,sprite_frag:O1},Ne={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Ai={basic:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new yt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Ln([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Ln([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new yt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Ln([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Ln([Ne.points,Ne.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Ln([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Ln([Ne.common,Ne.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Ln([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Ln([Ne.sprite,Ne.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Ln([Ne.common,Ne.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Ln([Ne.lights,Ne.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Ai.physical={uniforms:Ln([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Bc={r:0,b:0,g:0},vr=new xi,z1=new Xt;function I1(r,e,i,s,l,c,f){const d=new yt(0);let p=c===!0?0:1,m,g,_=null,x=0,S=null;function b(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:e).get(D)),D}function A(U){let D=!1;const B=b(U);B===null?v(d,p):B&&B.isColor&&(v(B,1),D=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(U,D){const B=b(D);B&&(B.isCubeTexture||B.mapping===ru)?(g===void 0&&(g=new Jn(new Dr(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Ls(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),vr.copy(D.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(z1.makeRotationFromEuler(vr)),g.material.toneMapped=At.getTransfer(B.colorSpace)!==zt,(_!==B||x!==B.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,_=B,x=B.version,S=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(m===void 0&&(m=new Jn(new su(2,2),new qa({name:"BackgroundMaterial",uniforms:Ls(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=B,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=At.getTransfer(B.colorSpace)!==zt,B.matrixAutoUpdate===!0&&B.updateMatrix(),m.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||x!==B.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,_=B,x=B.version,S=r.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function v(U,D){U.getRGB(Bc,H0(r)),s.buffers.color.setClear(Bc.r,Bc.g,Bc.b,D,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),p=D,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,v(d,p)},render:A,addToRenderList:y,dispose:L}}function B1(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function d(C,V,ce,le,_e){let de=!1;const I=_(le,ce,V);c!==I&&(c=I,m(c.object)),de=S(C,le,ce,_e),de&&b(C,le,ce,_e),_e!==null&&e.update(_e,r.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,D(C,V,ce,le),_e!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function p(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function _(C,V,ce){const le=ce.wireframe===!0;let _e=s[C.id];_e===void 0&&(_e={},s[C.id]=_e);let de=_e[V.id];de===void 0&&(de={},_e[V.id]=de);let I=de[le];return I===void 0&&(I=x(p()),de[le]=I),I}function x(C){const V=[],ce=[],le=[];for(let _e=0;_e<i;_e++)V[_e]=0,ce[_e]=0,le[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ce,attributeDivisors:le,object:C,attributes:{},index:null}}function S(C,V,ce,le){const _e=c.attributes,de=V.attributes;let I=0;const K=ce.getAttributes();for(const q in K)if(K[q].location>=0){const P=_e[q];let ee=de[q];if(ee===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),P===void 0||P.attribute!==ee||ee&&P.data!==ee.data)return!0;I++}return c.attributesNum!==I||c.index!==le}function b(C,V,ce,le){const _e={},de=V.attributes;let I=0;const K=ce.getAttributes();for(const q in K)if(K[q].location>=0){let P=de[q];P===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(P=C.instanceColor));const ee={};ee.attribute=P,P&&P.data&&(ee.data=P.data),_e[q]=ee,I++}c.attributes=_e,c.attributesNum=I,c.index=le}function A(){const C=c.newAttributes;for(let V=0,ce=C.length;V<ce;V++)C[V]=0}function y(C){v(C,0)}function v(C,V){const ce=c.newAttributes,le=c.enabledAttributes,_e=c.attributeDivisors;ce[C]=1,le[C]===0&&(r.enableVertexAttribArray(C),le[C]=1),_e[C]!==V&&(r.vertexAttribDivisor(C,V),_e[C]=V)}function L(){const C=c.newAttributes,V=c.enabledAttributes;for(let ce=0,le=V.length;ce<le;ce++)V[ce]!==C[ce]&&(r.disableVertexAttribArray(ce),V[ce]=0)}function U(C,V,ce,le,_e,de,I){I===!0?r.vertexAttribIPointer(C,V,ce,_e,de):r.vertexAttribPointer(C,V,ce,le,_e,de)}function D(C,V,ce,le){A();const _e=le.attributes,de=ce.getAttributes(),I=V.defaultAttributeValues;for(const K in de){const q=de[K];if(q.location>=0){let Me=_e[K];if(Me===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor)),Me!==void 0){const P=Me.normalized,ee=Me.itemSize,ye=e.get(Me);if(ye===void 0)continue;const be=ye.buffer,J=ye.type,me=ye.bytesPerElement,Se=J===r.INT||J===r.UNSIGNED_INT||Me.gpuType===jh;if(Me.isInterleavedBufferAttribute){const Re=Me.data,Oe=Re.stride,st=Me.offset;if(Re.isInstancedInterleavedBuffer){for(let Ke=0;Ke<q.locationSize;Ke++)v(q.location+Ke,Re.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ke=0;Ke<q.locationSize;Ke++)y(q.location+Ke);r.bindBuffer(r.ARRAY_BUFFER,be);for(let Ke=0;Ke<q.locationSize;Ke++)U(q.location+Ke,ee/q.locationSize,J,P,Oe*me,(st+ee/q.locationSize*Ke)*me,Se)}else{if(Me.isInstancedBufferAttribute){for(let Re=0;Re<q.locationSize;Re++)v(q.location+Re,Me.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Re=0;Re<q.locationSize;Re++)y(q.location+Re);r.bindBuffer(r.ARRAY_BUFFER,be);for(let Re=0;Re<q.locationSize;Re++)U(q.location+Re,ee/q.locationSize,J,P,ee*me,ee/q.locationSize*Re*me,Se)}}else if(I!==void 0){const P=I[K];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(q.location,P);break;case 3:r.vertexAttrib3fv(q.location,P);break;case 4:r.vertexAttrib4fv(q.location,P);break;default:r.vertexAttrib1fv(q.location,P)}}}}L()}function B(){X();for(const C in s){const V=s[C];for(const ce in V){const le=V[ce];for(const _e in le)g(le[_e].object),delete le[_e];delete V[ce]}delete s[C]}}function G(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const ce in V){const le=V[ce];for(const _e in le)g(le[_e].object),delete le[_e];delete V[ce]}delete s[C.id]}function F(C){for(const V in s){const ce=s[V];if(ce[C.id]===void 0)continue;const le=ce[C.id];for(const _e in le)g(le[_e].object),delete le[_e];delete ce[C.id]}}function X(){N(),f=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:N,dispose:B,releaseStatesOfGeometry:G,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:y,disableUnusedAttributes:L}}function F1(r,e,i){let s;function l(m){s=m}function c(m,g){r.drawArrays(s,m,g),i.update(g,s,1)}function f(m,g,_){_!==0&&(r.drawArraysInstanced(s,m,g,_),i.update(g,s,_))}function d(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,_);let S=0;for(let b=0;b<_;b++)S+=g[b];i.update(S,s,1)}function p(m,g,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<m.length;b++)f(m[b],g[b],x[b]);else{S.multiDrawArraysInstancedWEBGL(s,m,0,g,0,x,0,_);let b=0;for(let A=0;A<_;A++)b+=g[A]*x[A];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function H1(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==vi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const X=F===al&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ca&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==wi&&!X)}function p(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=b>0,G=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:B,maxSamples:G}}function G1(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new xr,d=new rt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||s!==0||l;return l=x,s=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,S){const b=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,v=r.get(_);if(!l||b===null||b.length===0||c&&!y)c?g(null):m();else{const L=c?0:s,U=L*4;let D=v.clippingState||null;p.value=D,D=g(b,x,U,S);for(let B=0;B!==U;++B)D[B]=i[B];v.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,x,S,b){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=p.value,b!==!0||y===null){const v=S+A*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,D=S;U!==A;++U,D+=4)f.copy(_[U]).applyMatrix4(L,d),f.normal.toArray(y,D),y[D+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function V1(r){let e=new WeakMap;function i(f,d){return d===ah?f.mapping=Ds:d===rh&&(f.mapping=Us),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===ah||d===rh)if(e.has(f)){const p=e.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new HE(p.height);return m.fromEquirectangularTexture(r,f),e.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const As=4,D_=[.125,.215,.35,.446,.526,.582],Mr=20,Gd=new QE,U_=new yt;let Vd=null,kd=0,jd=0,Xd=!1;const yr=(1+Math.sqrt(5))/2,Ms=1/yr,N_=[new oe(-yr,Ms,0),new oe(yr,Ms,0),new oe(-Ms,0,yr),new oe(Ms,0,yr),new oe(0,yr,-Ms),new oe(0,yr,Ms),new oe(-1,1,-1),new oe(1,1,-1),new oe(-1,1,1),new oe(1,1,1)],k1=new oe;class L_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=k1}=c;Vd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,kd,jd),this._renderer.xr.enabled=Xd,e.scissorTest=!1,Fc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:al,format:vi,colorSpace:Ns,depthBuffer:!1},l=P_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P_(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j1(c)),this._blurMaterial=X1(c,e,i)}return l}_compileMaterial(e){const i=new Jn(this._lodPlanes[0],e);this._renderer.compile(i,Gd)}_sceneToCubeUV(e,i,s,l,c){const p=new ci(90,1,i,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(U_),_.toneMapping=ja,_.autoClear=!1;const b=new tp({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),A=new Jn(new Dr,b);let y=!1;const v=e.background;v?v.isColor&&(b.color.copy(v),e.background=null,y=!0):(b.color.copy(U_),y=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[L],c.y,c.z)):U===1?(p.up.set(0,0,m[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[L],c.z)):(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[L]));const D=this._cubeSize;Fc(l,U*D,L>2?D:0,D,D),_.setRenderTarget(l),y&&_.render(A,p),_.render(e,p)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=S,_.autoClear=x,e.background=v}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ds||e.mapping===Us;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Jn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Fc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,Gd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=N_[(l-c-1)%N_.length];this._blur(e,c-1,c,f,d)}i.autoClear=s}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Jn(this._lodPlanes[l],m),x=m.uniforms,S=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Mr-1),A=c/b,y=isFinite(c)?1+Math.floor(g*A):Mr;y>Mr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Mr}`);const v=[];let L=0;for(let F=0;F<Mr;++F){const X=F/A,N=Math.exp(-X*X/2);v.push(N),F===0?L+=N:F<y&&(L+=2*N)}for(let F=0;F<v.length;F++)v[F]=v[F]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-s;const D=this._sizeLods[l],B=3*D*(l>U-As?l-U+As:0),G=4*(this._cubeSize-D);Fc(i,B,G,3*D,2*D),p.setRenderTarget(i),p.render(_,Gd)}}function j1(r){const e=[],i=[],s=[];let l=r;const c=r-As+1+D_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>r-As?p=D_[f-r+As-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,b=6,A=3,y=2,v=1,L=new Float32Array(A*b*S),U=new Float32Array(y*b*S),D=new Float32Array(v*b*S);for(let G=0;G<S;G++){const F=G%3*2/3-1,X=G>2?0:-1,N=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];L.set(N,A*b*G),U.set(x,y*b*G);const C=[G,G,G,G,G,G];D.set(C,v*b*G)}const B=new Wa;B.setAttribute("position",new _i(L,A)),B.setAttribute("uv",new _i(U,y)),B.setAttribute("faceIndex",new _i(D,v)),e.push(B),l>As&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function P_(r,e,i){const s=new Rr(r,e,i);return s.texture.mapping=ru,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function X1(r,e,i){const s=new Float32Array(Mr),l=new oe(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function O_(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function z_(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function np(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function q1(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===ah||p===rh,g=p===Ds||p===Us;if(m||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new L_(r)),_=m?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return m&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new L_(r)),_=m?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function W1(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Yc("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Y1(r,e,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function p(_){const x=_.attributes;for(const S in x)e.update(x[S],r.ARRAY_BUFFER)}function m(_){const x=[],S=_.index,b=_.attributes.position;let A=0;if(S!==null){const L=S.array;A=S.version;for(let U=0,D=L.length;U<D;U+=3){const B=L[U+0],G=L[U+1],F=L[U+2];x.push(B,G,G,F,F,B)}}else if(b!==void 0){const L=b.array;A=b.version;for(let U=0,D=L.length/3-1;U<D;U+=3){const B=U+0,G=U+1,F=U+2;x.push(B,G,G,F,F,B)}}else return;const y=new(P0(x)?F0:B0)(x,1);y.version=A;const v=c.get(_);v&&e.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function Z1(r,e,i){let s;function l(x){s=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,S){r.drawElements(s,S,c,x*f),i.update(S,s,1)}function m(x,S,b){b!==0&&(r.drawElementsInstanced(s,S,c,x*f,b),i.update(S,s,b))}function g(x,S,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,b);let y=0;for(let v=0;v<b;v++)y+=S[v];i.update(y,s,1)}function _(x,S,b,A){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)m(x[v]/f,S[v],A[v]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,A,0,b);let v=0;for(let L=0;L<b;L++)v+=S[L]*A[L];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function K1(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Q1(r,e,i){const s=new WeakMap,l=new en;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let C=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),A===!0&&(D=2),y===!0&&(D=3);let B=d.attributes.position.count*D,G=1;B>e.maxTextureSize&&(G=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const F=new Float32Array(B*G*4*_),X=new O0(F,B,G,_);X.type=wi,X.needsUpdate=!0;const N=D*4;for(let V=0;V<_;V++){const ce=v[V],le=L[V],_e=U[V],de=B*G*4*V;for(let I=0;I<ce.count;I++){const K=I*N;b===!0&&(l.fromBufferAttribute(ce,I),F[de+K+0]=l.x,F[de+K+1]=l.y,F[de+K+2]=l.z,F[de+K+3]=0),A===!0&&(l.fromBufferAttribute(le,I),F[de+K+4]=l.x,F[de+K+5]=l.y,F[de+K+6]=l.z,F[de+K+7]=0),y===!0&&(l.fromBufferAttribute(_e,I),F[de+K+8]=l.x,F[de+K+9]=l.y,F[de+K+10]=l.z,F[de+K+11]=_e.itemSize===4?l.w:1)}}x={count:_,texture:X,size:new wt(B,G)},s.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<m.length;y++)b+=m[y];const A=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(r,"morphTargetBaseInfluence",A),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function J1(r,e,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,_=e.get(p,g);if(l.get(_)!==m&&(e.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const Y0=new Pn,I_=new X0(1,1),Z0=new O0,K0=new bE,Q0=new V0,B_=[],F_=[],H_=new Float32Array(16),G_=new Float32Array(9),V_=new Float32Array(4);function Hs(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=B_[l];if(c===void 0&&(c=new Float32Array(l),B_[l]=c),e!==0){s.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,r[f].toArray(c,d)}return c}function fn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function dn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function lu(r,e){let i=F_[e];i===void 0&&(i=new Int32Array(e),F_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function $1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function eR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;r.uniform2fv(this.addr,e),dn(i,e)}}function tR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;r.uniform3fv(this.addr,e),dn(i,e)}}function nR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;r.uniform4fv(this.addr,e),dn(i,e)}}function iR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,s))return;V_.set(s),r.uniformMatrix2fv(this.addr,!1,V_),dn(i,s)}}function aR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,s))return;G_.set(s),r.uniformMatrix3fv(this.addr,!1,G_),dn(i,s)}}function rR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,s))return;H_.set(s),r.uniformMatrix4fv(this.addr,!1,H_),dn(i,s)}}function sR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function oR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;r.uniform2iv(this.addr,e),dn(i,e)}}function lR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;r.uniform3iv(this.addr,e),dn(i,e)}}function cR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;r.uniform4iv(this.addr,e),dn(i,e)}}function uR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function fR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;r.uniform2uiv(this.addr,e),dn(i,e)}}function dR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;r.uniform3uiv(this.addr,e),dn(i,e)}}function hR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;r.uniform4uiv(this.addr,e),dn(i,e)}}function pR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(I_.compareFunction=N0,c=I_):c=Y0,i.setTexture2D(e||c,l)}function mR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||K0,l)}function gR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Q0,l)}function vR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Z0,l)}function _R(r){switch(r){case 5126:return $1;case 35664:return eR;case 35665:return tR;case 35666:return nR;case 35674:return iR;case 35675:return aR;case 35676:return rR;case 5124:case 35670:return sR;case 35667:case 35671:return oR;case 35668:case 35672:return lR;case 35669:case 35673:return cR;case 5125:return uR;case 36294:return fR;case 36295:return dR;case 36296:return hR;case 35678:case 36198:case 36298:case 36306:case 35682:return pR;case 35679:case 36299:case 36307:return mR;case 35680:case 36300:case 36308:case 36293:return gR;case 36289:case 36303:case 36311:case 36292:return vR}}function xR(r,e){r.uniform1fv(this.addr,e)}function yR(r,e){const i=Hs(e,this.size,2);r.uniform2fv(this.addr,i)}function SR(r,e){const i=Hs(e,this.size,3);r.uniform3fv(this.addr,i)}function MR(r,e){const i=Hs(e,this.size,4);r.uniform4fv(this.addr,i)}function bR(r,e){const i=Hs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function ER(r,e){const i=Hs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function TR(r,e){const i=Hs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function AR(r,e){r.uniform1iv(this.addr,e)}function RR(r,e){r.uniform2iv(this.addr,e)}function wR(r,e){r.uniform3iv(this.addr,e)}function CR(r,e){r.uniform4iv(this.addr,e)}function DR(r,e){r.uniform1uiv(this.addr,e)}function UR(r,e){r.uniform2uiv(this.addr,e)}function NR(r,e){r.uniform3uiv(this.addr,e)}function LR(r,e){r.uniform4uiv(this.addr,e)}function PR(r,e,i){const s=this.cache,l=e.length,c=lu(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||Y0,c[f])}function OR(r,e,i){const s=this.cache,l=e.length,c=lu(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||K0,c[f])}function zR(r,e,i){const s=this.cache,l=e.length,c=lu(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Q0,c[f])}function IR(r,e,i){const s=this.cache,l=e.length,c=lu(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Z0,c[f])}function BR(r){switch(r){case 5126:return xR;case 35664:return yR;case 35665:return SR;case 35666:return MR;case 35674:return bR;case 35675:return ER;case 35676:return TR;case 5124:case 35670:return AR;case 35667:case 35671:return RR;case 35668:case 35672:return wR;case 35669:case 35673:return CR;case 5125:return DR;case 36294:return UR;case 36295:return NR;case 36296:return LR;case 35678:case 36198:case 36298:case 36306:case 35682:return PR;case 35679:case 36299:case 36307:return OR;case 35680:case 36300:case 36308:case 36293:return zR;case 36289:case 36303:case 36311:case 36292:return IR}}class FR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=_R(i.type)}}class HR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=BR(i.type)}}class GR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const qd=/(\w+)(\])?(\[|\.)?/g;function k_(r,e){r.seq.push(e),r.map[e.id]=e}function VR(r,e,i){const s=r.name,l=s.length;for(qd.lastIndex=0;;){const c=qd.exec(s),f=qd.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){k_(i,m===void 0?new FR(d,r,e):new HR(d,r,e));break}else{let _=i.map[d];_===void 0&&(_=new GR(d),k_(i,_)),i=_}}}class Zc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);VR(c,f,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function j_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const kR=37297;let jR=0;function XR(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const X_=new rt;function qR(r){At._getMatrix(X_,At.workingColorSpace,r);const e=`mat3( ${X_.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(r)){case $c:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function q_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=r.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+XR(r.getShaderSource(e),f)}else return l}function WR(r,e){const i=qR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function YR(r,e){let i;switch(e){case Pb:i="Linear";break;case Ob:i="Reinhard";break;case zb:i="Cineon";break;case Ib:i="ACESFilmic";break;case Fb:i="AgX";break;case Hb:i="Neutral";break;case Bb:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new oe;function ZR(){At.getLuminanceCoefficients(Hc);const r=Hc.x.toFixed(4),e=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function QR(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function JR(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:d}}return i}function Xo(r){return r!==""}function W_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $R=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(r){return r.replace($R,tw)}const ew=new Map;function tw(r,e){let i=ot[e];if(i===void 0){const s=ew.get(e);if(s!==void 0)i=ot[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Oh(i)}const nw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(r){return r.replace(nw,iw)}function iw(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function K_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===S0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===hb?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ia&&(e="SHADOWMAP_TYPE_VSM"),e}function rw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ds:case Us:e="ENVMAP_TYPE_CUBE";break;case ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function ow(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case kh:e="ENVMAP_BLENDING_MULTIPLY";break;case Nb:e="ENVMAP_BLENDING_MIX";break;case Lb:e="ENVMAP_BLENDING_ADD";break}return e}function lw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function cw(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=aw(i),m=rw(i),g=sw(i),_=ow(i),x=lw(i),S=KR(i),b=QR(c),A=l.createProgram();let y,v,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Xo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Xo).join(`
`),v.length>0&&(v+=`
`)):(y=[K_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),v=[K_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?ot.tonemapping_pars_fragment:"",i.toneMapping!==ja?YR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,WR("linearToOutputTexel",i.outputColorSpace),ZR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),f=Oh(f),f=W_(f,i),f=Y_(f,i),d=Oh(d),d=W_(d,i),d=Y_(d,i),f=Z_(f),d=Z_(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===r_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===r_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=L+y+f,D=L+v+d,B=j_(l,l.VERTEX_SHADER,U),G=j_(l,l.FRAGMENT_SHADER,D);l.attachShader(A,B),l.attachShader(A,G),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function F(V){if(r.debug.checkShaderErrors){const ce=l.getProgramInfoLog(A).trim(),le=l.getShaderInfoLog(B).trim(),_e=l.getShaderInfoLog(G).trim();let de=!0,I=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,B,G);else{const K=q_(l,B,"vertex"),q=q_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+K+`
`+q)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(le===""||_e==="")&&(I=!1);I&&(V.diagnostics={runnable:de,programLog:ce,vertexShader:{log:le,prefix:y},fragmentShader:{log:_e,prefix:v}})}l.deleteShader(B),l.deleteShader(G),X=new Zc(l,A),N=JR(l,A)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,kR)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jR++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=B,this.fragmentShader=G,this}let uw=0;class fw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new dw(e),i.set(e,s)),s}}class dw{constructor(e){this.id=uw++,this.code=e,this.usedTimes=0}}function hw(r,e,i,s,l,c,f){const d=new ep,p=new fw,m=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(N){return m.add(N),N===0?"uv":`uv${N}`}function y(N,C,V,ce,le){const _e=ce.fog,de=le.geometry,I=N.isMeshStandardMaterial?ce.environment:null,K=(N.isMeshStandardMaterial?i:e).get(N.envMap||I),q=K&&K.mapping===ru?K.image.height:null,Me=b[N.type];N.precision!==null&&(S=l.getMaxPrecision(N.precision),S!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",S,"instead."));const P=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,ee=P!==void 0?P.length:0;let ye=0;de.morphAttributes.position!==void 0&&(ye=1),de.morphAttributes.normal!==void 0&&(ye=2),de.morphAttributes.color!==void 0&&(ye=3);let be,J,me,Se;if(Me){const bt=Ai[Me];be=bt.vertexShader,J=bt.fragmentShader}else be=N.vertexShader,J=N.fragmentShader,p.update(N),me=p.getVertexShaderID(N),Se=p.getFragmentShaderID(N);const Re=r.getRenderTarget(),Oe=r.state.buffers.depth.getReversed(),st=le.isInstancedMesh===!0,Ke=le.isBatchedMesh===!0,Ht=!!N.map,It=!!N.matcap,ut=!!K,H=!!N.aoMap,On=!!N.lightMap,gt=!!N.bumpMap,nt=!!N.normalMap,Xe=!!N.displacementMap,Ut=!!N.emissiveMap,Ve=!!N.metalnessMap,O=!!N.roughnessMap,T=N.anisotropy>0,te=N.clearcoat>0,xe=N.dispersion>0,Ee=N.iridescence>0,he=N.sheen>0,Be=N.transmission>0,we=T&&!!N.anisotropyMap,Ce=te&&!!N.clearcoatMap,vt=te&&!!N.clearcoatNormalMap,Ae=te&&!!N.clearcoatRoughnessMap,He=Ee&&!!N.iridescenceMap,Ye=Ee&&!!N.iridescenceThicknessMap,Qe=he&&!!N.sheenColorMap,ze=he&&!!N.sheenRoughnessMap,lt=!!N.specularMap,tt=!!N.specularColorMap,Nt=!!N.specularIntensityMap,j=Be&&!!N.transmissionMap,Le=Be&&!!N.thicknessMap,ue=!!N.gradientMap,ge=!!N.alphaMap,Ie=N.alphaTest>0,Pe=!!N.alphaHash,it=!!N.extensions;let Gt=ja;N.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Gt=r.toneMapping);const tn={shaderID:Me,shaderType:N.type,shaderName:N.name,vertexShader:be,fragmentShader:J,defines:N.defines,customVertexShaderID:me,customFragmentShaderID:Se,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:S,batching:Ke,batchingColor:Ke&&le._colorsTexture!==null,instancing:st,instancingColor:st&&le.instanceColor!==null,instancingMorph:st&&le.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Re===null?r.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ns,alphaToCoverage:!!N.alphaToCoverage,map:Ht,matcap:It,envMap:ut,envMapMode:ut&&K.mapping,envMapCubeUVHeight:q,aoMap:H,lightMap:On,bumpMap:gt,normalMap:nt,displacementMap:x&&Xe,emissiveMap:Ut,normalMapObjectSpace:nt&&N.normalMapType===jb,normalMapTangentSpace:nt&&N.normalMapType===Qh,metalnessMap:Ve,roughnessMap:O,anisotropy:T,anisotropyMap:we,clearcoat:te,clearcoatMap:Ce,clearcoatNormalMap:vt,clearcoatRoughnessMap:Ae,dispersion:xe,iridescence:Ee,iridescenceMap:He,iridescenceThicknessMap:Ye,sheen:he,sheenColorMap:Qe,sheenRoughnessMap:ze,specularMap:lt,specularColorMap:tt,specularIntensityMap:Nt,transmission:Be,transmissionMap:j,thicknessMap:Le,gradientMap:ue,opaque:N.transparent===!1&&N.blending===Rs&&N.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ie,alphaHash:Pe,combine:N.combine,mapUv:Ht&&A(N.map.channel),aoMapUv:H&&A(N.aoMap.channel),lightMapUv:On&&A(N.lightMap.channel),bumpMapUv:gt&&A(N.bumpMap.channel),normalMapUv:nt&&A(N.normalMap.channel),displacementMapUv:Xe&&A(N.displacementMap.channel),emissiveMapUv:Ut&&A(N.emissiveMap.channel),metalnessMapUv:Ve&&A(N.metalnessMap.channel),roughnessMapUv:O&&A(N.roughnessMap.channel),anisotropyMapUv:we&&A(N.anisotropyMap.channel),clearcoatMapUv:Ce&&A(N.clearcoatMap.channel),clearcoatNormalMapUv:vt&&A(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&A(N.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&A(N.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&A(N.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&A(N.sheenColorMap.channel),sheenRoughnessMapUv:ze&&A(N.sheenRoughnessMap.channel),specularMapUv:lt&&A(N.specularMap.channel),specularColorMapUv:tt&&A(N.specularColorMap.channel),specularIntensityMapUv:Nt&&A(N.specularIntensityMap.channel),transmissionMapUv:j&&A(N.transmissionMap.channel),thicknessMapUv:Le&&A(N.thicknessMap.channel),alphaMapUv:ge&&A(N.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(nt||T),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!de.attributes.uv&&(Ht||ge),fog:!!_e,useFog:N.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Oe,skinning:le.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Ht&&N.map.isVideoTexture===!0&&At.getTransfer(N.map.colorSpace)===zt,decodeVideoTextureEmissive:Ut&&N.emissiveMap.isVideoTexture===!0&&At.getTransfer(N.emissiveMap.colorSpace)===zt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===aa,flipSided:N.side===Gn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:it&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&N.extensions.multiDraw===!0||Ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return tn.vertexUv1s=m.has(1),tn.vertexUv2s=m.has(2),tn.vertexUv3s=m.has(3),m.clear(),tn}function v(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const V in N.defines)C.push(V),C.push(N.defines[V]);return N.isRawShaderMaterial===!1&&(L(C,N),U(C,N),C.push(r.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function L(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function U(N,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),N.push(d.mask)}function D(N){const C=b[N.type];let V;if(C){const ce=Ai[C];V=zE.clone(ce.uniforms)}else V=N.uniforms;return V}function B(N,C){let V;for(let ce=0,le=g.length;ce<le;ce++){const _e=g[ce];if(_e.cacheKey===C){V=_e,++V.usedTimes;break}}return V===void 0&&(V=new cw(r,C,N,c),g.push(V)),V}function G(N){if(--N.usedTimes===0){const C=g.indexOf(N);g[C]=g[g.length-1],g.pop(),N.destroy()}}function F(N){p.remove(N)}function X(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:D,acquireProgram:B,releaseProgram:G,releaseShaderCache:F,programs:g,dispose:X}}function pw(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,p){r.get(f)[d]=p}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function mw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Q_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function J_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(_,x,S,b,A,y){let v=r[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:b,renderOrder:_.renderOrder,z:A,group:y},r[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=A,v.group=y),e++,v}function d(_,x,S,b,A,y){const v=f(_,x,S,b,A,y);S.transmission>0?s.push(v):S.transparent===!0?l.push(v):i.push(v)}function p(_,x,S,b,A,y){const v=f(_,x,S,b,A,y);S.transmission>0?s.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function m(_,x){i.length>1&&i.sort(_||mw),s.length>1&&s.sort(x||Q_),l.length>1&&l.sort(x||Q_)}function g(){for(let _=e,x=r.length;_<x;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function gw(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new J_,r.set(s,[f])):l>=c.length?(f=new J_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function vw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new yt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new yt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":i={color:new yt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return r[e.id]=i,i}}}function _w(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let xw=0;function yw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Sw(r){const e=new vw,i=_w(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new oe);const l=new oe,c=new Xt,f=new Xt;function d(m){let g=0,_=0,x=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let S=0,b=0,A=0,y=0,v=0,L=0,U=0,D=0,B=0,G=0,F=0;m.sort(yw);for(let N=0,C=m.length;N<C;N++){const V=m[N],ce=V.color,le=V.intensity,_e=V.distance,de=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=ce.r*le,_+=ce.g*le,x+=ce.b*le;else if(V.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(V.sh.coefficients[I],le);F++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,q=i.get(V);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,s.directionalShadow[S]=q,s.directionalShadowMap[S]=de,s.directionalShadowMatrix[S]=V.shadow.matrix,L++}s.directional[S]=I,S++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(ce).multiplyScalar(le),I.distance=_e,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,s.spot[A]=I;const K=V.shadow;if(V.map&&(s.spotLightMap[B]=V.map,B++,K.updateMatrices(V),V.castShadow&&G++),s.spotLightMatrix[A]=K.matrix,V.castShadow){const q=i.get(V);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,s.spotShadow[A]=q,s.spotShadowMap[A]=de,D++}A++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(ce).multiplyScalar(le),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=I,y++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const K=V.shadow,q=i.get(V);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,s.pointShadow[b]=q,s.pointShadowMap[b]=de,s.pointShadowMatrix[b]=V.shadow.matrix,U++}s.point[b]=I,b++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(le),I.groundColor.copy(V.groundColor).multiplyScalar(le),s.hemi[v]=I,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_FLOAT_1,s.rectAreaLTC2=Ne.LTC_FLOAT_2):(s.rectAreaLTC1=Ne.LTC_HALF_1,s.rectAreaLTC2=Ne.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==S||X.pointLength!==b||X.spotLength!==A||X.rectAreaLength!==y||X.hemiLength!==v||X.numDirectionalShadows!==L||X.numPointShadows!==U||X.numSpotShadows!==D||X.numSpotMaps!==B||X.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=y,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+B-G,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=F,X.directionalLength=S,X.pointLength=b,X.spotLength=A,X.rectAreaLength=y,X.hemiLength=v,X.numDirectionalShadows=L,X.numPointShadows=U,X.numSpotShadows=D,X.numSpotMaps=B,X.numLightProbes=F,s.version=xw++)}function p(m,g){let _=0,x=0,S=0,b=0,A=0;const y=g.matrixWorldInverse;for(let v=0,L=m.length;v<L;v++){const U=m[v];if(U.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),_++}else if(U.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),S++}else if(U.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),f.identity(),c.copy(U.matrixWorld),c.premultiply(y),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),b++}else if(U.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(y),A++}}}return{setup:d,setupView:p,state:s}}function $_(r){const e=new Sw(r),i=[],s=[];function l(g){m.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function Mw(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new $_(r),e.set(l,[d])):c>=f.length?(d=new $_(r),f.push(d)):d=f[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const bw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ew=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tw(r,e,i){let s=new j0;const l=new wt,c=new wt,f=new en,d=new YE({depthPacking:kb}),p=new ZE,m={},g=i.maxTextureSize,_={[Xa]:Gn,[Gn]:Xa,[aa]:aa},x=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:bw,fragmentShader:Ew}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const b=new Wa;b.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Jn(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=S0;let v=this.type;this.render=function(G,F,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const N=r.getRenderTarget(),C=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),ce=r.state;ce.setBlending(ka),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const le=v!==ia&&this.type===ia,_e=v===ia&&this.type!==ia;for(let de=0,I=G.length;de<I;de++){const K=G[de],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const Me=q.getFrameExtents();if(l.multiply(Me),c.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Me.x),l.x=c.x*Me.x,q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Me.y),l.y=c.y*Me.y,q.mapSize.y=c.y)),q.map===null||le===!0||_e===!0){const ee=this.type!==ia?{minFilter:$n,magFilter:$n}:{};q.map!==null&&q.map.dispose(),q.map=new Rr(l.x,l.y,ee),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const P=q.getViewportCount();for(let ee=0;ee<P;ee++){const ye=q.getViewport(ee);f.set(c.x*ye.x,c.y*ye.y,c.x*ye.z,c.y*ye.w),ce.viewport(f),q.updateMatrices(K,ee),s=q.getFrustum(),D(F,X,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===ia&&L(q,X),q.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(N,C,V)};function L(G,F){const X=e.update(A);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,S.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Rr(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,r.setRenderTarget(G.mapPass),r.clear(),r.renderBufferDirect(F,null,X,x,A,null),S.uniforms.shadow_pass.value=G.mapPass.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,r.setRenderTarget(G.map),r.clear(),r.renderBufferDirect(F,null,X,S,A,null)}function U(G,F,X,N){let C=null;const V=X.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)C=V;else if(C=X.isPointLight===!0?p:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ce=C.uuid,le=F.uuid;let _e=m[ce];_e===void 0&&(_e={},m[ce]=_e);let de=_e[le];de===void 0&&(de=C.clone(),_e[le]=de,F.addEventListener("dispose",B)),C=de}if(C.visible=F.visible,C.wireframe=F.wireframe,N===ia?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:_[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ce=r.properties.get(C);ce.light=X}return C}function D(G,F,X,N,C){if(G.visible===!1)return;if(G.layers.test(F.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===ia)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,G.matrixWorld);const le=e.update(G),_e=G.material;if(Array.isArray(_e)){const de=le.groups;for(let I=0,K=de.length;I<K;I++){const q=de[I],Me=_e[q.materialIndex];if(Me&&Me.visible){const P=U(G,Me,N,C);G.onBeforeShadow(r,G,F,X,le,P,q),r.renderBufferDirect(X,null,le,P,G,q),G.onAfterShadow(r,G,F,X,le,P,q)}}}else if(_e.visible){const de=U(G,_e,N,C);G.onBeforeShadow(r,G,F,X,le,de,null),r.renderBufferDirect(X,null,le,de,G,null),G.onAfterShadow(r,G,F,X,le,de,null)}}const ce=G.children;for(let le=0,_e=ce.length;le<_e;le++)D(ce[le],F,X,N,C)}function B(G){G.target.removeEventListener("dispose",B);for(const X in m){const N=m[X],C=G.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const Aw={[Qd]:Jd,[$d]:nh,[eh]:ih,[Cs]:th,[Jd]:Qd,[nh]:$d,[ih]:eh,[th]:Cs};function Rw(r,e){function i(){let j=!1;const Le=new en;let ue=null;const ge=new en(0,0,0,0);return{setMask:function(Ie){ue!==Ie&&!j&&(r.colorMask(Ie,Ie,Ie,Ie),ue=Ie)},setLocked:function(Ie){j=Ie},setClear:function(Ie,Pe,it,Gt,tn){tn===!0&&(Ie*=Gt,Pe*=Gt,it*=Gt),Le.set(Ie,Pe,it,Gt),ge.equals(Le)===!1&&(r.clearColor(Ie,Pe,it,Gt),ge.copy(Le))},reset:function(){j=!1,ue=null,ge.set(-1,0,0,0)}}}function s(){let j=!1,Le=!1,ue=null,ge=null,Ie=null;return{setReversed:function(Pe){if(Le!==Pe){const it=e.get("EXT_clip_control");Pe?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),Le=Pe;const Gt=Ie;Ie=null,this.setClear(Gt)}},getReversed:function(){return Le},setTest:function(Pe){Pe?Re(r.DEPTH_TEST):Oe(r.DEPTH_TEST)},setMask:function(Pe){ue!==Pe&&!j&&(r.depthMask(Pe),ue=Pe)},setFunc:function(Pe){if(Le&&(Pe=Aw[Pe]),ge!==Pe){switch(Pe){case Qd:r.depthFunc(r.NEVER);break;case Jd:r.depthFunc(r.ALWAYS);break;case $d:r.depthFunc(r.LESS);break;case Cs:r.depthFunc(r.LEQUAL);break;case eh:r.depthFunc(r.EQUAL);break;case th:r.depthFunc(r.GEQUAL);break;case nh:r.depthFunc(r.GREATER);break;case ih:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=Pe}},setLocked:function(Pe){j=Pe},setClear:function(Pe){Ie!==Pe&&(Le&&(Pe=1-Pe),r.clearDepth(Pe),Ie=Pe)},reset:function(){j=!1,ue=null,ge=null,Ie=null,Le=!1}}}function l(){let j=!1,Le=null,ue=null,ge=null,Ie=null,Pe=null,it=null,Gt=null,tn=null;return{setTest:function(bt){j||(bt?Re(r.STENCIL_TEST):Oe(r.STENCIL_TEST))},setMask:function(bt){Le!==bt&&!j&&(r.stencilMask(bt),Le=bt)},setFunc:function(bt,Vn,hn){(ue!==bt||ge!==Vn||Ie!==hn)&&(r.stencilFunc(bt,Vn,hn),ue=bt,ge=Vn,Ie=hn)},setOp:function(bt,Vn,hn){(Pe!==bt||it!==Vn||Gt!==hn)&&(r.stencilOp(bt,Vn,hn),Pe=bt,it=Vn,Gt=hn)},setLocked:function(bt){j=bt},setClear:function(bt){tn!==bt&&(r.clearStencil(bt),tn=bt)},reset:function(){j=!1,Le=null,ue=null,ge=null,Ie=null,Pe=null,it=null,Gt=null,tn=null}}}const c=new i,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,S=[],b=null,A=!1,y=null,v=null,L=null,U=null,D=null,B=null,G=null,F=new yt(0,0,0),X=0,N=!1,C=null,V=null,ce=null,le=null,_e=null;const de=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,K=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),I=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),I=K>=2);let Me=null,P={};const ee=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),be=new en().fromArray(ee),J=new en().fromArray(ye);function me(j,Le,ue,ge){const Ie=new Uint8Array(4),Pe=r.createTexture();r.bindTexture(j,Pe),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let it=0;it<ue;it++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Le+it,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Pe}const Se={};Se[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Re(r.DEPTH_TEST),f.setFunc(Cs),gt(!1),nt($v),Re(r.CULL_FACE),H(ka);function Re(j){g[j]!==!0&&(r.enable(j),g[j]=!0)}function Oe(j){g[j]!==!1&&(r.disable(j),g[j]=!1)}function st(j,Le){return _[j]!==Le?(r.bindFramebuffer(j,Le),_[j]=Le,j===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Le),j===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ke(j,Le){let ue=S,ge=!1;if(j){ue=x.get(Le),ue===void 0&&(ue=[],x.set(Le,ue));const Ie=j.textures;if(ue.length!==Ie.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let Pe=0,it=Ie.length;Pe<it;Pe++)ue[Pe]=r.COLOR_ATTACHMENT0+Pe;ue.length=Ie.length,ge=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,ge=!0);ge&&r.drawBuffers(ue)}function Ht(j){return b!==j?(r.useProgram(j),b=j,!0):!1}const It={[Sr]:r.FUNC_ADD,[mb]:r.FUNC_SUBTRACT,[gb]:r.FUNC_REVERSE_SUBTRACT};It[vb]=r.MIN,It[_b]=r.MAX;const ut={[xb]:r.ZERO,[yb]:r.ONE,[Sb]:r.SRC_COLOR,[Zd]:r.SRC_ALPHA,[Rb]:r.SRC_ALPHA_SATURATE,[Tb]:r.DST_COLOR,[bb]:r.DST_ALPHA,[Mb]:r.ONE_MINUS_SRC_COLOR,[Kd]:r.ONE_MINUS_SRC_ALPHA,[Ab]:r.ONE_MINUS_DST_COLOR,[Eb]:r.ONE_MINUS_DST_ALPHA,[wb]:r.CONSTANT_COLOR,[Cb]:r.ONE_MINUS_CONSTANT_COLOR,[Db]:r.CONSTANT_ALPHA,[Ub]:r.ONE_MINUS_CONSTANT_ALPHA};function H(j,Le,ue,ge,Ie,Pe,it,Gt,tn,bt){if(j===ka){A===!0&&(Oe(r.BLEND),A=!1);return}if(A===!1&&(Re(r.BLEND),A=!0),j!==pb){if(j!==y||bt!==N){if((v!==Sr||D!==Sr)&&(r.blendEquation(r.FUNC_ADD),v=Sr,D=Sr),bt)switch(j){case Rs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case e_:r.blendFunc(r.ONE,r.ONE);break;case t_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case n_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Rs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case e_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case t_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case n_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}L=null,U=null,B=null,G=null,F.set(0,0,0),X=0,y=j,N=bt}return}Ie=Ie||Le,Pe=Pe||ue,it=it||ge,(Le!==v||Ie!==D)&&(r.blendEquationSeparate(It[Le],It[Ie]),v=Le,D=Ie),(ue!==L||ge!==U||Pe!==B||it!==G)&&(r.blendFuncSeparate(ut[ue],ut[ge],ut[Pe],ut[it]),L=ue,U=ge,B=Pe,G=it),(Gt.equals(F)===!1||tn!==X)&&(r.blendColor(Gt.r,Gt.g,Gt.b,tn),F.copy(Gt),X=tn),y=j,N=!1}function On(j,Le){j.side===aa?Oe(r.CULL_FACE):Re(r.CULL_FACE);let ue=j.side===Gn;Le&&(ue=!ue),gt(ue),j.blending===Rs&&j.transparent===!1?H(ka):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const ge=j.stencilWrite;d.setTest(ge),ge&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ut(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Re(r.SAMPLE_ALPHA_TO_COVERAGE):Oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(j){C!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),C=j)}function nt(j){j!==fb?(Re(r.CULL_FACE),j!==V&&(j===$v?r.cullFace(r.BACK):j===db?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Oe(r.CULL_FACE),V=j}function Xe(j){j!==ce&&(I&&r.lineWidth(j),ce=j)}function Ut(j,Le,ue){j?(Re(r.POLYGON_OFFSET_FILL),(le!==Le||_e!==ue)&&(r.polygonOffset(Le,ue),le=Le,_e=ue)):Oe(r.POLYGON_OFFSET_FILL)}function Ve(j){j?Re(r.SCISSOR_TEST):Oe(r.SCISSOR_TEST)}function O(j){j===void 0&&(j=r.TEXTURE0+de-1),Me!==j&&(r.activeTexture(j),Me=j)}function T(j,Le,ue){ue===void 0&&(Me===null?ue=r.TEXTURE0+de-1:ue=Me);let ge=P[ue];ge===void 0&&(ge={type:void 0,texture:void 0},P[ue]=ge),(ge.type!==j||ge.texture!==Le)&&(Me!==ue&&(r.activeTexture(ue),Me=ue),r.bindTexture(j,Le||Se[j]),ge.type=j,ge.texture=Le)}function te(){const j=P[Me];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function xe(){try{r.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{r.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function he(){try{r.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Be(){try{r.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{r.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(){try{r.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function vt(){try{r.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{r.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function He(){try{r.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{r.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qe(j){be.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),be.copy(j))}function ze(j){J.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),J.copy(j))}function lt(j,Le){let ue=m.get(Le);ue===void 0&&(ue=new WeakMap,m.set(Le,ue));let ge=ue.get(j);ge===void 0&&(ge=r.getUniformBlockIndex(Le,j.name),ue.set(j,ge))}function tt(j,Le){const ge=m.get(Le).get(j);p.get(Le)!==ge&&(r.uniformBlockBinding(Le,ge,j.__bindingPointIndex),p.set(Le,ge))}function Nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Me=null,P={},_={},x=new WeakMap,S=[],b=null,A=!1,y=null,v=null,L=null,U=null,D=null,B=null,G=null,F=new yt(0,0,0),X=0,N=!1,C=null,V=null,ce=null,le=null,_e=null,be.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Re,disable:Oe,bindFramebuffer:st,drawBuffers:Ke,useProgram:Ht,setBlending:H,setMaterial:On,setFlipSided:gt,setCullFace:nt,setLineWidth:Xe,setPolygonOffset:Ut,setScissorTest:Ve,activeTexture:O,bindTexture:T,unbindTexture:te,compressedTexImage2D:xe,compressedTexImage3D:Ee,texImage2D:He,texImage3D:Ye,updateUBOMapping:lt,uniformBlockBinding:tt,texStorage2D:vt,texStorage3D:Ae,texSubImage2D:he,texSubImage3D:Be,compressedTexSubImage2D:we,compressedTexSubImage3D:Ce,scissor:Qe,viewport:ze,reset:Nt}}function ww(r,e,i,s,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,T){return S?new OffscreenCanvas(O,T):tu("canvas")}function A(O,T,te){let xe=1;const Ee=Ve(O);if((Ee.width>te||Ee.height>te)&&(xe=te/Math.max(Ee.width,Ee.height)),xe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(xe*Ee.width),Be=Math.floor(xe*Ee.height);_===void 0&&(_=b(he,Be));const we=T?b(he,Be):_;return we.width=he,we.height=Be,we.getContext("2d").drawImage(O,0,0,he,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+he+"x"+Be+")."),we}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),O;return O}function y(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(O,T,te,xe,Ee=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=T;if(T===r.RED&&(te===r.FLOAT&&(he=r.R32F),te===r.HALF_FLOAT&&(he=r.R16F),te===r.UNSIGNED_BYTE&&(he=r.R8)),T===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(he=r.R8UI),te===r.UNSIGNED_SHORT&&(he=r.R16UI),te===r.UNSIGNED_INT&&(he=r.R32UI),te===r.BYTE&&(he=r.R8I),te===r.SHORT&&(he=r.R16I),te===r.INT&&(he=r.R32I)),T===r.RG&&(te===r.FLOAT&&(he=r.RG32F),te===r.HALF_FLOAT&&(he=r.RG16F),te===r.UNSIGNED_BYTE&&(he=r.RG8)),T===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(he=r.RG8UI),te===r.UNSIGNED_SHORT&&(he=r.RG16UI),te===r.UNSIGNED_INT&&(he=r.RG32UI),te===r.BYTE&&(he=r.RG8I),te===r.SHORT&&(he=r.RG16I),te===r.INT&&(he=r.RG32I)),T===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(he=r.RGB8UI),te===r.UNSIGNED_SHORT&&(he=r.RGB16UI),te===r.UNSIGNED_INT&&(he=r.RGB32UI),te===r.BYTE&&(he=r.RGB8I),te===r.SHORT&&(he=r.RGB16I),te===r.INT&&(he=r.RGB32I)),T===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),te===r.UNSIGNED_INT&&(he=r.RGBA32UI),te===r.BYTE&&(he=r.RGBA8I),te===r.SHORT&&(he=r.RGBA16I),te===r.INT&&(he=r.RGBA32I)),T===r.RGB&&te===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),T===r.RGBA){const Be=Ee?$c:At.getTransfer(xe);te===r.FLOAT&&(he=r.RGBA32F),te===r.HALF_FLOAT&&(he=r.RGBA16F),te===r.UNSIGNED_BYTE&&(he=Be===zt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function D(O,T){let te;return O?T===null||T===Ar||T===Ko?te=r.DEPTH24_STENCIL8:T===wi?te=r.DEPTH32F_STENCIL8:T===Zo&&(te=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ar||T===Ko?te=r.DEPTH_COMPONENT24:T===wi?te=r.DEPTH_COMPONENT32F:T===Zo&&(te=r.DEPTH_COMPONENT16),te}function B(O,T){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==$n&&O.minFilter!==Ri?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function G(O){const T=O.target;T.removeEventListener("dispose",G),X(T),T.isVideoTexture&&g.delete(T)}function F(O){const T=O.target;T.removeEventListener("dispose",F),C(T)}function X(O){const T=s.get(O);if(T.__webglInit===void 0)return;const te=O.source,xe=x.get(te);if(xe){const Ee=xe[T.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&N(O),Object.keys(xe).length===0&&x.delete(te)}s.remove(O)}function N(O){const T=s.get(O);r.deleteTexture(T.__webglTexture);const te=O.source,xe=x.get(te);delete xe[T.__cacheKey],f.memory.textures--}function C(O){const T=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(T.__webglFramebuffer[xe]))for(let Ee=0;Ee<T.__webglFramebuffer[xe].length;Ee++)r.deleteFramebuffer(T.__webglFramebuffer[xe][Ee]);else r.deleteFramebuffer(T.__webglFramebuffer[xe]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[xe])}else{if(Array.isArray(T.__webglFramebuffer))for(let xe=0;xe<T.__webglFramebuffer.length;xe++)r.deleteFramebuffer(T.__webglFramebuffer[xe]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let xe=0;xe<T.__webglColorRenderbuffer.length;xe++)T.__webglColorRenderbuffer[xe]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[xe]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=O.textures;for(let xe=0,Ee=te.length;xe<Ee;xe++){const he=s.get(te[xe]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),f.memory.textures--),s.remove(te[xe])}s.remove(O)}let V=0;function ce(){V=0}function le(){const O=V;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function _e(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function de(O,T){const te=s.get(O);if(O.isVideoTexture&&Xe(O),O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){const xe=O.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(te,O,T);return}}i.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+T)}function I(O,T){const te=s.get(O);if(O.version>0&&te.__version!==O.version){J(te,O,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+T)}function K(O,T){const te=s.get(O);if(O.version>0&&te.__version!==O.version){J(te,O,T);return}i.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+T)}function q(O,T){const te=s.get(O);if(O.version>0&&te.__version!==O.version){me(te,O,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+T)}const Me={[sh]:r.REPEAT,[br]:r.CLAMP_TO_EDGE,[oh]:r.MIRRORED_REPEAT},P={[$n]:r.NEAREST,[Gb]:r.NEAREST_MIPMAP_NEAREST,[xc]:r.NEAREST_MIPMAP_LINEAR,[Ri]:r.LINEAR,[xd]:r.LINEAR_MIPMAP_NEAREST,[Er]:r.LINEAR_MIPMAP_LINEAR},ee={[Xb]:r.NEVER,[Qb]:r.ALWAYS,[qb]:r.LESS,[N0]:r.LEQUAL,[Wb]:r.EQUAL,[Kb]:r.GEQUAL,[Yb]:r.GREATER,[Zb]:r.NOTEQUAL};function ye(O,T){if(T.type===wi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ri||T.magFilter===xd||T.magFilter===xc||T.magFilter===Er||T.minFilter===Ri||T.minFilter===xd||T.minFilter===xc||T.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,Me[T.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,Me[T.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,Me[T.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,P[T.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,P[T.minFilter]),T.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===$n||T.minFilter!==xc&&T.minFilter!==Er||T.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function be(O,T){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",G));const xe=T.source;let Ee=x.get(xe);Ee===void 0&&(Ee={},x.set(xe,Ee));const he=_e(T);if(he!==O.__cacheKey){Ee[he]===void 0&&(Ee[he]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,te=!0),Ee[he].usedTimes++;const Be=Ee[O.__cacheKey];Be!==void 0&&(Ee[O.__cacheKey].usedTimes--,Be.usedTimes===0&&N(T)),O.__cacheKey=he,O.__webglTexture=Ee[he].texture}return te}function J(O,T,te){let xe=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xe=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xe=r.TEXTURE_3D);const Ee=be(O,T),he=T.source;i.bindTexture(xe,O.__webglTexture,r.TEXTURE0+te);const Be=s.get(he);if(he.version!==Be.__version||Ee===!0){i.activeTexture(r.TEXTURE0+te);const we=At.getPrimaries(At.workingColorSpace),Ce=T.colorSpace===Va?null:At.getPrimaries(T.colorSpace),vt=T.colorSpace===Va||we===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Ae=A(T.image,!1,l.maxTextureSize);Ae=Ut(T,Ae);const He=c.convert(T.format,T.colorSpace),Ye=c.convert(T.type);let Qe=U(T.internalFormat,He,Ye,T.colorSpace,T.isVideoTexture);ye(xe,T);let ze;const lt=T.mipmaps,tt=T.isVideoTexture!==!0,Nt=Be.__version===void 0||Ee===!0,j=he.dataReady,Le=B(T,Ae);if(T.isDepthTexture)Qe=D(T.format===Jo,T.type),Nt&&(tt?i.texStorage2D(r.TEXTURE_2D,1,Qe,Ae.width,Ae.height):i.texImage2D(r.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,He,Ye,null));else if(T.isDataTexture)if(lt.length>0){tt&&Nt&&i.texStorage2D(r.TEXTURE_2D,Le,Qe,lt[0].width,lt[0].height);for(let ue=0,ge=lt.length;ue<ge;ue++)ze=lt[ue],tt?j&&i.texSubImage2D(r.TEXTURE_2D,ue,0,0,ze.width,ze.height,He,Ye,ze.data):i.texImage2D(r.TEXTURE_2D,ue,Qe,ze.width,ze.height,0,He,Ye,ze.data);T.generateMipmaps=!1}else tt?(Nt&&i.texStorage2D(r.TEXTURE_2D,Le,Qe,Ae.width,Ae.height),j&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae.width,Ae.height,He,Ye,Ae.data)):i.texImage2D(r.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,He,Ye,Ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){tt&&Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Qe,lt[0].width,lt[0].height,Ae.depth);for(let ue=0,ge=lt.length;ue<ge;ue++)if(ze=lt[ue],T.format!==vi)if(He!==null)if(tt){if(j)if(T.layerUpdates.size>0){const Ie=C_(ze.width,ze.height,T.format,T.type);for(const Pe of T.layerUpdates){const it=ze.data.subarray(Pe*Ie/ze.data.BYTES_PER_ELEMENT,(Pe+1)*Ie/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,Pe,ze.width,ze.height,1,He,it)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,ze.width,ze.height,Ae.depth,He,ze.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,Qe,ze.width,ze.height,Ae.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?j&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,ze.width,ze.height,Ae.depth,He,Ye,ze.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ue,Qe,ze.width,ze.height,Ae.depth,0,He,Ye,ze.data)}else{tt&&Nt&&i.texStorage2D(r.TEXTURE_2D,Le,Qe,lt[0].width,lt[0].height);for(let ue=0,ge=lt.length;ue<ge;ue++)ze=lt[ue],T.format!==vi?He!==null?tt?j&&i.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,ze.width,ze.height,He,ze.data):i.compressedTexImage2D(r.TEXTURE_2D,ue,Qe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?j&&i.texSubImage2D(r.TEXTURE_2D,ue,0,0,ze.width,ze.height,He,Ye,ze.data):i.texImage2D(r.TEXTURE_2D,ue,Qe,ze.width,ze.height,0,He,Ye,ze.data)}else if(T.isDataArrayTexture)if(tt){if(Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Qe,Ae.width,Ae.height,Ae.depth),j)if(T.layerUpdates.size>0){const ue=C_(Ae.width,Ae.height,T.format,T.type);for(const ge of T.layerUpdates){const Ie=Ae.data.subarray(ge*ue/Ae.data.BYTES_PER_ELEMENT,(ge+1)*ue/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,Ae.width,Ae.height,1,He,Ye,Ie)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,Ye,Ae.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Qe,Ae.width,Ae.height,Ae.depth,0,He,Ye,Ae.data);else if(T.isData3DTexture)tt?(Nt&&i.texStorage3D(r.TEXTURE_3D,Le,Qe,Ae.width,Ae.height,Ae.depth),j&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,Ye,Ae.data)):i.texImage3D(r.TEXTURE_3D,0,Qe,Ae.width,Ae.height,Ae.depth,0,He,Ye,Ae.data);else if(T.isFramebufferTexture){if(Nt)if(tt)i.texStorage2D(r.TEXTURE_2D,Le,Qe,Ae.width,Ae.height);else{let ue=Ae.width,ge=Ae.height;for(let Ie=0;Ie<Le;Ie++)i.texImage2D(r.TEXTURE_2D,Ie,Qe,ue,ge,0,He,Ye,null),ue>>=1,ge>>=1}}else if(lt.length>0){if(tt&&Nt){const ue=Ve(lt[0]);i.texStorage2D(r.TEXTURE_2D,Le,Qe,ue.width,ue.height)}for(let ue=0,ge=lt.length;ue<ge;ue++)ze=lt[ue],tt?j&&i.texSubImage2D(r.TEXTURE_2D,ue,0,0,He,Ye,ze):i.texImage2D(r.TEXTURE_2D,ue,Qe,He,Ye,ze);T.generateMipmaps=!1}else if(tt){if(Nt){const ue=Ve(Ae);i.texStorage2D(r.TEXTURE_2D,Le,Qe,ue.width,ue.height)}j&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,He,Ye,Ae)}else i.texImage2D(r.TEXTURE_2D,0,Qe,He,Ye,Ae);y(T)&&v(xe),Be.__version=he.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function me(O,T,te){if(T.image.length!==6)return;const xe=be(O,T),Ee=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+te);const he=s.get(Ee);if(Ee.version!==he.__version||xe===!0){i.activeTexture(r.TEXTURE0+te);const Be=At.getPrimaries(At.workingColorSpace),we=T.colorSpace===Va?null:At.getPrimaries(T.colorSpace),Ce=T.colorSpace===Va||Be===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const vt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ae=T.image[0]&&T.image[0].isDataTexture,He=[];for(let ge=0;ge<6;ge++)!vt&&!Ae?He[ge]=A(T.image[ge],!0,l.maxCubemapSize):He[ge]=Ae?T.image[ge].image:T.image[ge],He[ge]=Ut(T,He[ge]);const Ye=He[0],Qe=c.convert(T.format,T.colorSpace),ze=c.convert(T.type),lt=U(T.internalFormat,Qe,ze,T.colorSpace),tt=T.isVideoTexture!==!0,Nt=he.__version===void 0||xe===!0,j=Ee.dataReady;let Le=B(T,Ye);ye(r.TEXTURE_CUBE_MAP,T);let ue;if(vt){tt&&Nt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Le,lt,Ye.width,Ye.height);for(let ge=0;ge<6;ge++){ue=He[ge].mipmaps;for(let Ie=0;Ie<ue.length;Ie++){const Pe=ue[Ie];T.format!==vi?Qe!==null?tt?j&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,Pe.width,Pe.height,Qe,Pe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,lt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?j&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,Pe.width,Pe.height,Qe,ze,Pe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,lt,Pe.width,Pe.height,0,Qe,ze,Pe.data)}}}else{if(ue=T.mipmaps,tt&&Nt){ue.length>0&&Le++;const ge=Ve(He[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Le,lt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ae){tt?j&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,He[ge].width,He[ge].height,Qe,ze,He[ge].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,lt,He[ge].width,He[ge].height,0,Qe,ze,He[ge].data);for(let Ie=0;Ie<ue.length;Ie++){const it=ue[Ie].image[ge].image;tt?j&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,it.width,it.height,Qe,ze,it.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,lt,it.width,it.height,0,Qe,ze,it.data)}}else{tt?j&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Qe,ze,He[ge]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,lt,Qe,ze,He[ge]);for(let Ie=0;Ie<ue.length;Ie++){const Pe=ue[Ie];tt?j&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,Qe,ze,Pe.image[ge]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,lt,Qe,ze,Pe.image[ge])}}}y(T)&&v(r.TEXTURE_CUBE_MAP),he.__version=Ee.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Se(O,T,te,xe,Ee,he){const Be=c.convert(te.format,te.colorSpace),we=c.convert(te.type),Ce=U(te.internalFormat,Be,we,te.colorSpace),vt=s.get(T),Ae=s.get(te);if(Ae.__renderTarget=T,!vt.__hasExternalTextures){const He=Math.max(1,T.width>>he),Ye=Math.max(1,T.height>>he);Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?i.texImage3D(Ee,he,Ce,He,Ye,T.depth,0,Be,we,null):i.texImage2D(Ee,he,Ce,He,Ye,0,Be,we,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),nt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,Ee,Ae.__webglTexture,0,gt(T)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,xe,Ee,Ae.__webglTexture,he),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(O,T,te){if(r.bindRenderbuffer(r.RENDERBUFFER,O),T.depthBuffer){const xe=T.depthTexture,Ee=xe&&xe.isDepthTexture?xe.type:null,he=D(T.stencilBuffer,Ee),Be=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=gt(T);nt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,he,T.width,T.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,he,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,he,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Be,r.RENDERBUFFER,O)}else{const xe=T.textures;for(let Ee=0;Ee<xe.length;Ee++){const he=xe[Ee],Be=c.convert(he.format,he.colorSpace),we=c.convert(he.type),Ce=U(he.internalFormat,Be,we,he.colorSpace),vt=gt(T);te&&nt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,Ce,T.width,T.height):nt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt,Ce,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Oe(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(T.depthTexture);xe.__renderTarget=T,(!xe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),de(T.depthTexture,0);const Ee=xe.__webglTexture,he=gt(T);if(T.depthTexture.format===Qo)nt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0);else if(T.depthTexture.format===Jo)nt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function st(O){const T=s.get(O),te=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const xe=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),xe){const Ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,xe.removeEventListener("dispose",Ee)};xe.addEventListener("dispose",Ee),T.__depthDisposeCallback=Ee}T.__boundDepthTexture=xe}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Oe(T.__webglFramebuffer,O)}else if(te){T.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[xe]),T.__webglDepthbuffer[xe]===void 0)T.__webglDepthbuffer[xe]=r.createRenderbuffer(),Re(T.__webglDepthbuffer[xe],O,!1);else{const Ee=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[xe];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,he)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Re(T.__webglDepthbuffer,O,!1);else{const xe=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,Ee)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(O,T,te){const xe=s.get(O);T!==void 0&&Se(xe.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&st(O)}function Ht(O){const T=O.texture,te=s.get(O),xe=s.get(T);O.addEventListener("dispose",F);const Ee=O.textures,he=O.isWebGLCubeRenderTarget===!0,Be=Ee.length>1;if(Be||(xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture()),xe.__version=T.version,f.memory.textures++),he){te.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[we]=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)te.__webglFramebuffer[we][Ce]=r.createFramebuffer()}else te.__webglFramebuffer[we]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)te.__webglFramebuffer[we]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Be)for(let we=0,Ce=Ee.length;we<Ce;we++){const vt=s.get(Ee[we]);vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&nt(O)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let we=0;we<Ee.length;we++){const Ce=Ee[we];te.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[we]);const vt=c.convert(Ce.format,Ce.colorSpace),Ae=c.convert(Ce.type),He=U(Ce.internalFormat,vt,Ae,Ce.colorSpace,O.isXRRenderTarget===!0),Ye=gt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,He,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,te.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(te.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){i.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),ye(r.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ce=0;Ce<T.mipmaps.length;Ce++)Se(te.__webglFramebuffer[we][Ce],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ce);else Se(te.__webglFramebuffer[we],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(T)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Be){for(let we=0,Ce=Ee.length;we<Ce;we++){const vt=Ee[we],Ae=s.get(vt);i.bindTexture(r.TEXTURE_2D,Ae.__webglTexture),ye(r.TEXTURE_2D,vt),Se(te.__webglFramebuffer,O,vt,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,0),y(vt)&&v(r.TEXTURE_2D)}i.unbindTexture()}else{let we=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(we=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(we,xe.__webglTexture),ye(we,T),T.mipmaps&&T.mipmaps.length>0)for(let Ce=0;Ce<T.mipmaps.length;Ce++)Se(te.__webglFramebuffer[Ce],O,T,r.COLOR_ATTACHMENT0,we,Ce);else Se(te.__webglFramebuffer,O,T,r.COLOR_ATTACHMENT0,we,0);y(T)&&v(we),i.unbindTexture()}O.depthBuffer&&st(O)}function It(O){const T=O.textures;for(let te=0,xe=T.length;te<xe;te++){const Ee=T[te];if(y(Ee)){const he=L(O),Be=s.get(Ee).__webglTexture;i.bindTexture(he,Be),v(he),i.unbindTexture()}}}const ut=[],H=[];function On(O){if(O.samples>0){if(nt(O)===!1){const T=O.textures,te=O.width,xe=O.height;let Ee=r.COLOR_BUFFER_BIT;const he=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Be=s.get(O),we=T.length>1;if(we)for(let Ce=0;Ce<T.length;Ce++)i.bindFramebuffer(r.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ce=0;Ce<T.length;Ce++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Be.__webglColorRenderbuffer[Ce]);const vt=s.get(T[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,vt,0)}r.blitFramebuffer(0,0,te,xe,0,0,te,xe,Ee,r.NEAREST),p===!0&&(ut.length=0,H.length=0,ut.push(r.COLOR_ATTACHMENT0+Ce),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ut.push(he),H.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let Ce=0;Ce<T.length;Ce++){i.bindFramebuffer(r.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Be.__webglColorRenderbuffer[Ce]);const vt=s.get(T[Ce]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,vt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const T=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function gt(O){return Math.min(l.maxSamples,O.samples)}function nt(O){const T=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xe(O){const T=f.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function Ut(O,T){const te=O.colorSpace,xe=O.format,Ee=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==Ns&&te!==Va&&(At.getTransfer(te)===zt?(xe!==vi||Ee!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Ve(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=le,this.resetTextureUnits=ce,this.setTexture2D=de,this.setTexture2DArray=I,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=Ke,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=On,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=nt}function Cw(r,e){function i(s,l=Va){let c;const f=At.getTransfer(l);if(s===ca)return r.UNSIGNED_BYTE;if(s===Xh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===qh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===T0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===b0)return r.BYTE;if(s===E0)return r.SHORT;if(s===Zo)return r.UNSIGNED_SHORT;if(s===jh)return r.INT;if(s===Ar)return r.UNSIGNED_INT;if(s===wi)return r.FLOAT;if(s===al)return r.HALF_FLOAT;if(s===A0)return r.ALPHA;if(s===R0)return r.RGB;if(s===vi)return r.RGBA;if(s===w0)return r.LUMINANCE;if(s===C0)return r.LUMINANCE_ALPHA;if(s===Qo)return r.DEPTH_COMPONENT;if(s===Jo)return r.DEPTH_STENCIL;if(s===Wh)return r.RED;if(s===Yh)return r.RED_INTEGER;if(s===D0)return r.RG;if(s===Zh)return r.RG_INTEGER;if(s===Kh)return r.RGBA_INTEGER;if(s===kc||s===jc||s===Xc||s===qc)if(f===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lh||s===ch||s===uh||s===fh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===lh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ch)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===uh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dh||s===hh||s===ph)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===dh||s===hh)return f===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ph)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===mh||s===gh||s===vh||s===_h||s===xh||s===yh||s===Sh||s===Mh||s===bh||s===Eh||s===Th||s===Ah||s===Rh||s===wh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===mh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_h)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Eh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Th)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ah)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wc||s===Ch||s===Dh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Wc)return f===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ch)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===U0||s===Uh||s===Nh||s===Lh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Wc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Uh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Nh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ko?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const Dw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Pn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new qa({vertexShader:Dw,fragmentShader:Uw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Jn(new su(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lw extends Is{constructor(e,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,_=null,x=null,S=null,b=null;const A=new Nw,y=i.getContextAttributes();let v=null,L=null;const U=[],D=[],B=new wt;let G=null;const F=new ci;F.viewport=new en;const X=new ci;X.viewport=new en;const N=[F,X],C=new $E;let V=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=U[J];return me===void 0&&(me=new Fd,U[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=U[J];return me===void 0&&(me=new Fd,U[J]=me),me.getGripSpace()},this.getHand=function(J){let me=U[J];return me===void 0&&(me=new Fd,U[J]=me),me.getHandSpace()};function le(J){const me=D.indexOf(J.inputSource);if(me===-1)return;const Se=U[me];Se!==void 0&&(Se.update(J.inputSource,J.frame,m||f),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function _e(){l.removeEventListener("select",le),l.removeEventListener("selectstart",le),l.removeEventListener("selectend",le),l.removeEventListener("squeeze",le),l.removeEventListener("squeezestart",le),l.removeEventListener("squeezeend",le),l.removeEventListener("end",_e),l.removeEventListener("inputsourceschange",de);for(let J=0;J<U.length;J++){const me=D[J];me!==null&&(D[J]=null,U[J].disconnect(me))}V=null,ce=null,A.reset(),e.setRenderTarget(v),S=null,x=null,_=null,l=null,L=null,be.stop(),s.isPresenting=!1,e.setPixelRatio(G),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",le),l.addEventListener("selectstart",le),l.addEventListener("selectend",le),l.addEventListener("squeeze",le),l.addEventListener("squeezestart",le),l.addEventListener("squeezeend",le),l.addEventListener("end",_e),l.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Re=null,Oe=null;y.depth&&(Oe=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=y.stencil?Jo:Qo,Re=y.stencil?Ko:Ar);const st={colorFormat:i.RGBA8,depthFormat:Oe,scaleFactor:c};_=new XRWebGLBinding(l,i),x=_.createProjectionLayer(st),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Rr(x.textureWidth,x.textureHeight,{format:vi,type:ca,depthTexture:new X0(x.textureWidth,x.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Rr(S.framebufferWidth,S.framebufferHeight,{format:vi,type:ca,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),be.setContext(l),be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function de(J){for(let me=0;me<J.removed.length;me++){const Se=J.removed[me],Re=D.indexOf(Se);Re>=0&&(D[Re]=null,U[Re].disconnect(Se))}for(let me=0;me<J.added.length;me++){const Se=J.added[me];let Re=D.indexOf(Se);if(Re===-1){for(let st=0;st<U.length;st++)if(st>=D.length){D.push(Se),Re=st;break}else if(D[st]===null){D[st]=Se,Re=st;break}if(Re===-1)break}const Oe=U[Re];Oe&&Oe.connect(Se)}}const I=new oe,K=new oe;function q(J,me,Se){I.setFromMatrixPosition(me.matrixWorld),K.setFromMatrixPosition(Se.matrixWorld);const Re=I.distanceTo(K),Oe=me.projectionMatrix.elements,st=Se.projectionMatrix.elements,Ke=Oe[14]/(Oe[10]-1),Ht=Oe[14]/(Oe[10]+1),It=(Oe[9]+1)/Oe[5],ut=(Oe[9]-1)/Oe[5],H=(Oe[8]-1)/Oe[0],On=(st[8]+1)/st[0],gt=Ke*H,nt=Ke*On,Xe=Re/(-H+On),Ut=Xe*-H;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ut),J.translateZ(Xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Oe[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ve=Ke+Xe,O=Ht+Xe,T=gt-Ut,te=nt+(Re-Ut),xe=It*Ht/O*Ve,Ee=ut*Ht/O*Ve;J.projectionMatrix.makePerspective(T,te,xe,Ee,Ve,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Me(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let me=J.near,Se=J.far;A.texture!==null&&(A.depthNear>0&&(me=A.depthNear),A.depthFar>0&&(Se=A.depthFar)),C.near=X.near=F.near=me,C.far=X.far=F.far=Se,(V!==C.near||ce!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,ce=C.far),F.layers.mask=J.layers.mask|2,X.layers.mask=J.layers.mask|4,C.layers.mask=F.layers.mask|X.layers.mask;const Re=J.parent,Oe=C.cameras;Me(C,Re);for(let st=0;st<Oe.length;st++)Me(Oe[st],Re);Oe.length===2?q(C,F,X):C.projectionMatrix.copy(F.projectionMatrix),P(J,C,Re)};function P(J,me,Se){Se===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=$o*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(J){p=J,x!==null&&(x.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let ee=null;function ye(J,me){if(g=me.getViewerPose(m||f),b=me,g!==null){const Se=g.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Re=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,Re=!0);for(let Ke=0;Ke<Se.length;Ke++){const Ht=Se[Ke];let It=null;if(S!==null)It=S.getViewport(Ht);else{const H=_.getViewSubImage(x,Ht);It=H.viewport,Ke===0&&(e.setRenderTargetTextures(L,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(L))}let ut=N[Ke];ut===void 0&&(ut=new ci,ut.layers.enable(Ke),ut.viewport=new en,N[Ke]=ut),ut.matrix.fromArray(Ht.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Ht.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(It.x,It.y,It.width,It.height),Ke===0&&(C.matrix.copy(ut.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Re===!0&&C.cameras.push(ut)}const Oe=l.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Ke=_.getDepthInformation(Se[0]);Ke&&Ke.isValid&&Ke.texture&&A.init(e,Ke,l.renderState)}}for(let Se=0;Se<U.length;Se++){const Re=D[Se],Oe=U[Se];Re!==null&&Oe!==void 0&&Oe.update(Re,me,m||f)}ee&&ee(J,me),me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:me}),b=null}const be=new W0;be.setAnimationLoop(ye),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const _r=new xi,Pw=new Xt;function Ow(r,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,H0(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,L,U,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,D)):v.isMeshMatcapMaterial?(c(y,v),b(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),A(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?p(y,v,L,U):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Gn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Gn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=e.get(v),U=L.envMap,D=L.envMapRotation;U&&(y.envMap.value=U,_r.copy(D),_r.x*=-1,_r.y*=-1,_r.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),y.envMapRotation.value.setFromMatrix4(Pw.makeRotationFromEuler(_r)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,L,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=U*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function A(y,v){const L=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function zw(r,e,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,U){const D=U.program;s.uniformBlockBinding(L,D)}function m(L,U){let D=l[L.id];D===void 0&&(b(L),D=g(L),l[L.id]=D,L.addEventListener("dispose",y));const B=U.program;s.updateUBOMapping(L,B);const G=e.render.frame;c[L.id]!==G&&(x(L),c[L.id]=G)}function g(L){const U=_();L.__bindingPointIndex=U;const D=r.createBuffer(),B=L.__size,G=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,B,G),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function _(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const U=l[L.id],D=L.uniforms,B=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let G=0,F=D.length;G<F;G++){const X=Array.isArray(D[G])?D[G]:[D[G]];for(let N=0,C=X.length;N<C;N++){const V=X[N];if(S(V,G,N,B)===!0){const ce=V.__offset,le=Array.isArray(V.value)?V.value:[V.value];let _e=0;for(let de=0;de<le.length;de++){const I=le[de],K=A(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,ce+_e,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,_e),_e+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ce,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,U,D,B){const G=L.value,F=U+"_"+D;if(B[F]===void 0)return typeof G=="number"||typeof G=="boolean"?B[F]=G:B[F]=G.clone(),!0;{const X=B[F];if(typeof G=="number"||typeof G=="boolean"){if(X!==G)return B[F]=G,!0}else if(X.equals(G)===!1)return X.copy(G),!0}return!1}function b(L){const U=L.uniforms;let D=0;const B=16;for(let F=0,X=U.length;F<X;F++){const N=Array.isArray(U[F])?U[F]:[U[F]];for(let C=0,V=N.length;C<V;C++){const ce=N[C],le=Array.isArray(ce.value)?ce.value:[ce.value];for(let _e=0,de=le.length;_e<de;_e++){const I=le[_e],K=A(I),q=D%B,Me=q%K.boundary,P=q+Me;D+=Me,P!==0&&B-P<K.storage&&(D+=B-P),ce.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=D,D+=K.storage}}}const G=D%B;return G>0&&(D+=B-G),L.__size=D,L.__cache={},this}function A(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function y(L){const U=L.target;U.removeEventListener("dispose",y);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const L in l)r.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:p,update:m,dispose:v}}class Iw{constructor(e={}){const{canvas:i=pE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=f;const b=new Uint32Array(4),A=new Int32Array(4);let y=null,v=null;const L=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let B=!1;this._outputColorSpace=li;let G=0,F=0,X=null,N=-1,C=null;const V=new en,ce=new en;let le=null;const _e=new yt(0);let de=0,I=i.width,K=i.height,q=1,Me=null,P=null;const ee=new en(0,0,I,K),ye=new en(0,0,I,K);let be=!1;const J=new j0;let me=!1,Se=!1;const Re=new Xt,Oe=new Xt,st=new oe,Ke=new en,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function ut(){return X===null?q:1}let H=s;function On(w,Y){return i.getContext(w,Y)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Vh}`),i.addEventListener("webglcontextlost",ge,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",Pe,!1),H===null){const Y="webgl2";if(H=On(Y,w),H===null)throw On(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let gt,nt,Xe,Ut,Ve,O,T,te,xe,Ee,he,Be,we,Ce,vt,Ae,He,Ye,Qe,ze,lt,tt,Nt,j;function Le(){gt=new W1(H),gt.init(),tt=new Cw(H,gt),nt=new H1(H,gt,e,tt),Xe=new Rw(H,gt),nt.reverseDepthBuffer&&x&&Xe.buffers.depth.setReversed(!0),Ut=new K1(H),Ve=new pw,O=new ww(H,gt,Xe,Ve,nt,tt,Ut),T=new V1(D),te=new q1(D),xe=new nT(H),Nt=new B1(H,xe),Ee=new Y1(H,xe,Ut,Nt),he=new J1(H,Ee,xe,Ut),Qe=new Q1(H,nt,O),Ae=new G1(Ve),Be=new hw(D,T,te,gt,nt,Nt,Ae),we=new Ow(D,Ve),Ce=new gw,vt=new Mw(gt),Ye=new I1(D,T,te,Xe,he,S,p),He=new Tw(D,he,nt),j=new zw(H,Ut,nt,Xe),ze=new F1(H,gt,Ut),lt=new Z1(H,gt,Ut),Ut.programs=Be.programs,D.capabilities=nt,D.extensions=gt,D.properties=Ve,D.renderLists=Ce,D.shadowMap=He,D.state=Xe,D.info=Ut}Le();const ue=new Lw(D,H);this.xr=ue,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(I,K,!1))},this.getSize=function(w){return w.set(I,K)},this.setSize=function(w,Y,ae=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,K=Y,i.width=Math.floor(w*q),i.height=Math.floor(Y*q),ae===!0&&(i.style.width=w+"px",i.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(I*q,K*q).floor()},this.setDrawingBufferSize=function(w,Y,ae){I=w,K=Y,q=ae,i.width=Math.floor(w*ae),i.height=Math.floor(Y*ae),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(ee)},this.setViewport=function(w,Y,ae,se){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,Y,ae,se),Xe.viewport(V.copy(ee).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(ye)},this.setScissor=function(w,Y,ae,se){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,Y,ae,se),Xe.scissor(ce.copy(ye).multiplyScalar(q).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(w){Xe.setScissorTest(be=w)},this.setOpaqueSort=function(w){Me=w},this.setTransparentSort=function(w){P=w},this.getClearColor=function(w){return w.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,ae=!0){let se=0;if(w){let Z=!1;if(X!==null){const Te=X.texture.format;Z=Te===Kh||Te===Zh||Te===Yh}if(Z){const Te=X.texture.type,De=Te===ca||Te===Ar||Te===Zo||Te===Ko||Te===Xh||Te===qh,Ue=Ye.getClearColor(),Fe=Ye.getClearAlpha(),$e=Ue.r,qe=Ue.g,je=Ue.b;De?(b[0]=$e,b[1]=qe,b[2]=je,b[3]=Fe,H.clearBufferuiv(H.COLOR,0,b)):(A[0]=$e,A[1]=qe,A[2]=je,A[3]=Fe,H.clearBufferiv(H.COLOR,0,A))}else se|=H.COLOR_BUFFER_BIT}Y&&(se|=H.DEPTH_BUFFER_BIT),ae&&(se|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ge,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",Pe,!1),Ye.dispose(),Ce.dispose(),vt.dispose(),Ve.dispose(),T.dispose(),te.dispose(),he.dispose(),Nt.dispose(),j.dispose(),Be.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",on),ue.removeEventListener("sessionend",xn),zn.stop()};function ge(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const w=Ut.autoReset,Y=He.enabled,ae=He.autoUpdate,se=He.needsUpdate,Z=He.type;Le(),Ut.autoReset=w,He.enabled=Y,He.autoUpdate=ae,He.needsUpdate=se,He.type=Z}function Pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function it(w){const Y=w.target;Y.removeEventListener("dispose",it),Gt(Y)}function Gt(w){tn(w),Ve.remove(w)}function tn(w){const Y=Ve.get(w).programs;Y!==void 0&&(Y.forEach(function(ae){Be.releaseProgram(ae)}),w.isShaderMaterial&&Be.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,ae,se,Z,Te){Y===null&&(Y=Ht);const De=Z.isMesh&&Z.matrixWorld.determinant()<0,Ue=Ka(w,Y,ae,se,Z);Xe.setMaterial(se,De);let Fe=ae.index,$e=1;if(se.wireframe===!0){if(Fe=Ee.getWireframeAttribute(ae),Fe===void 0)return;$e=2}const qe=ae.drawRange,je=ae.attributes.position;let dt=qe.start*$e,Et=(qe.start+qe.count)*$e;Te!==null&&(dt=Math.max(dt,Te.start*$e),Et=Math.min(Et,(Te.start+Te.count)*$e)),Fe!==null?(dt=Math.max(dt,0),Et=Math.min(Et,Fe.count)):je!=null&&(dt=Math.max(dt,0),Et=Math.min(Et,je.count));const qt=Et-dt;if(qt<0||qt===1/0)return;Nt.setup(Z,se,Ue,ae,Fe);let _t,xt=ze;if(Fe!==null&&(_t=xe.get(Fe),xt=lt,xt.setIndex(_t)),Z.isMesh)se.wireframe===!0?(Xe.setLineWidth(se.wireframeLinewidth*ut()),xt.setMode(H.LINES)):xt.setMode(H.TRIANGLES);else if(Z.isLine){let We=se.linewidth;We===void 0&&(We=1),Xe.setLineWidth(We*ut()),Z.isLineSegments?xt.setMode(H.LINES):Z.isLineLoop?xt.setMode(H.LINE_LOOP):xt.setMode(H.LINE_STRIP)}else Z.isPoints?xt.setMode(H.POINTS):Z.isSprite&&xt.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Yc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))xt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const We=Z._multiDrawStarts,Zt=Z._multiDrawCounts,Mt=Z._multiDrawCount,En=Fe?xe.get(Fe).bytesPerElement:1,ha=Ve.get(se).currentProgram.getUniforms();for(let Vt=0;Vt<Mt;Vt++)ha.setValue(H,"_gl_DrawID",Vt),xt.render(We[Vt]/En,Zt[Vt])}else if(Z.isInstancedMesh)xt.renderInstances(dt,qt,Z.count);else if(ae.isInstancedBufferGeometry){const We=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Zt=Math.min(ae.instanceCount,We);xt.renderInstances(dt,qt,Zt)}else xt.render(dt,qt)};function bt(w,Y,ae){w.transparent===!0&&w.side===aa&&w.forceSinglePass===!1?(w.side=Gn,w.needsUpdate=!0,fa(w,Y,ae),w.side=Xa,w.needsUpdate=!0,fa(w,Y,ae),w.side=aa):fa(w,Y,ae)}this.compile=function(w,Y,ae=null){ae===null&&(ae=w),v=vt.get(ae),v.init(Y),U.push(v),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),w!==ae&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const se=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const Ue=Te[De];bt(Ue,ae,Z),se.add(Ue)}else bt(Te,ae,Z),se.add(Te)}),v=U.pop(),se},this.compileAsync=function(w,Y,ae=null){const se=this.compile(w,Y,ae);return new Promise(Z=>{function Te(){if(se.forEach(function(De){Ve.get(De).currentProgram.isReady()&&se.delete(De)}),se.size===0){Z(w);return}setTimeout(Te,10)}gt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Vn=null;function hn(w){Vn&&Vn(w)}function on(){zn.stop()}function xn(){zn.start()}const zn=new W0;zn.setAnimationLoop(hn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(w){Vn=w,ue.setAnimationLoop(w),w===null?zn.stop():zn.start()},ue.addEventListener("sessionstart",on),ue.addEventListener("sessionend",xn),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(Y),Y=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,Y,X),v=vt.get(w,U.length),v.init(Y),U.push(v),Oe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),J.setFromProjectionMatrix(Oe),Se=this.localClippingEnabled,me=Ae.init(this.clippingPlanes,Se),y=Ce.get(w,L.length),y.init(),L.push(y),ue.enabled===!0&&ue.isPresenting===!0){const Te=D.xr.getDepthSensingMesh();Te!==null&&Ya(Te,Y,-1/0,D.sortObjects)}Ya(w,Y,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(Me,P),It=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,It&&Ye.addToRenderList(y,w),this.info.render.frame++,me===!0&&Ae.beginShadows();const ae=v.state.shadowsArray;He.render(ae,w,Y),me===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=y.opaque,Z=y.transmissive;if(v.setupLights(),Y.isArrayCamera){const Te=Y.cameras;if(Z.length>0)for(let De=0,Ue=Te.length;De<Ue;De++){const Fe=Te[De];ll(se,Z,w,Fe)}It&&Ye.render(w);for(let De=0,Ue=Te.length;De<Ue;De++){const Fe=Te[De];ol(y,w,Fe,Fe.viewport)}}else Z.length>0&&ll(se,Z,w,Y),It&&Ye.render(w),ol(y,w,Y);X!==null&&F===0&&(O.updateMultisampleRenderTarget(X),O.updateRenderTargetMipmap(X)),w.isScene===!0&&w.onAfterRender(D,w,Y),Nt.resetDefaultState(),N=-1,C=null,U.pop(),U.length>0?(v=U[U.length-1],me===!0&&Ae.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Ya(w,Y,ae,se){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)ae=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){se&&Ke.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Oe);const De=he.update(w),Ue=w.material;Ue.visible&&y.push(w,De,Ue,ae,Ke.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){const De=he.update(w),Ue=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ke.copy(w.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ke.copy(De.boundingSphere.center)),Ke.applyMatrix4(w.matrixWorld).applyMatrix4(Oe)),Array.isArray(Ue)){const Fe=De.groups;for(let $e=0,qe=Fe.length;$e<qe;$e++){const je=Fe[$e],dt=Ue[je.materialIndex];dt&&dt.visible&&y.push(w,De,dt,ae,Ke.z,je)}}else Ue.visible&&y.push(w,De,Ue,ae,Ke.z,null)}}const Te=w.children;for(let De=0,Ue=Te.length;De<Ue;De++)Ya(Te[De],Y,ae,se)}function ol(w,Y,ae,se){const Z=w.opaque,Te=w.transmissive,De=w.transparent;v.setupLightsView(ae),me===!0&&Ae.setGlobalState(D.clippingPlanes,ae),se&&Xe.viewport(V.copy(se)),Z.length>0&&Za(Z,Y,ae),Te.length>0&&Za(Te,Y,ae),De.length>0&&Za(De,Y,ae),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function ll(w,Y,ae,se){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[se.id]===void 0&&(v.state.transmissionRenderTarget[se.id]=new Rr(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?al:ca,minFilter:Er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Te=v.state.transmissionRenderTarget[se.id],De=se.viewport||V;Te.setSize(De.z*D.transmissionResolutionScale,De.w*D.transmissionResolutionScale);const Ue=D.getRenderTarget();D.setRenderTarget(Te),D.getClearColor(_e),de=D.getClearAlpha(),de<1&&D.setClearColor(16777215,.5),D.clear(),It&&Ye.render(ae);const Fe=D.toneMapping;D.toneMapping=ja;const $e=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),v.setupLightsView(se),me===!0&&Ae.setGlobalState(D.clippingPlanes,se),Za(w,ae,se),O.updateMultisampleRenderTarget(Te),O.updateRenderTargetMipmap(Te),gt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let je=0,dt=Y.length;je<dt;je++){const Et=Y[je],qt=Et.object,_t=Et.geometry,xt=Et.material,We=Et.group;if(xt.side===aa&&qt.layers.test(se.layers)){const Zt=xt.side;xt.side=Gn,xt.needsUpdate=!0,ua(qt,ae,se,_t,xt,We),xt.side=Zt,xt.needsUpdate=!0,qe=!0}}qe===!0&&(O.updateMultisampleRenderTarget(Te),O.updateRenderTargetMipmap(Te))}D.setRenderTarget(Ue),D.setClearColor(_e,de),$e!==void 0&&(se.viewport=$e),D.toneMapping=Fe}function Za(w,Y,ae){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Te=w.length;Z<Te;Z++){const De=w[Z],Ue=De.object,Fe=De.geometry,$e=De.group;let qe=De.material;qe.allowOverride===!0&&se!==null&&(qe=se),Ue.layers.test(ae.layers)&&ua(Ue,Y,ae,Fe,qe,$e)}}function ua(w,Y,ae,se,Z,Te){w.onBeforeRender(D,Y,ae,se,Z,Te),w.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(D,Y,ae,se,w,Te),Z.transparent===!0&&Z.side===aa&&Z.forceSinglePass===!1?(Z.side=Gn,Z.needsUpdate=!0,D.renderBufferDirect(ae,Y,se,Z,w,Te),Z.side=Xa,Z.needsUpdate=!0,D.renderBufferDirect(ae,Y,se,Z,w,Te),Z.side=aa):D.renderBufferDirect(ae,Y,se,Z,w,Te),w.onAfterRender(D,Y,ae,se,Z,Te)}function fa(w,Y,ae){Y.isScene!==!0&&(Y=Ht);const se=Ve.get(w),Z=v.state.lights,Te=v.state.shadowsArray,De=Z.state.version,Ue=Be.getParameters(w,Z.state,Te,Y,ae),Fe=Be.getProgramCacheKey(Ue);let $e=se.programs;se.environment=w.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(w.isMeshStandardMaterial?te:T).get(w.envMap||se.environment),se.envMapRotation=se.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,$e===void 0&&(w.addEventListener("dispose",it),$e=new Map,se.programs=$e);let qe=$e.get(Fe);if(qe!==void 0){if(se.currentProgram===qe&&se.lightsStateVersion===De)return Pi(w,Ue),qe}else Ue.uniforms=Be.getUniforms(w),w.onBeforeCompile(Ue,D),qe=Be.acquireProgram(Ue,Fe),$e.set(Fe,qe),se.uniforms=Ue.uniforms;const je=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=Ae.uniform),Pi(w,Ue),se.needsLights=nn(w),se.lightsStateVersion=De,se.needsLights&&(je.ambientLightColor.value=Z.state.ambient,je.lightProbe.value=Z.state.probe,je.directionalLights.value=Z.state.directional,je.directionalLightShadows.value=Z.state.directionalShadow,je.spotLights.value=Z.state.spot,je.spotLightShadows.value=Z.state.spotShadow,je.rectAreaLights.value=Z.state.rectArea,je.ltc_1.value=Z.state.rectAreaLTC1,je.ltc_2.value=Z.state.rectAreaLTC2,je.pointLights.value=Z.state.point,je.pointLightShadows.value=Z.state.pointShadow,je.hemisphereLights.value=Z.state.hemi,je.directionalShadowMap.value=Z.state.directionalShadowMap,je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,je.spotShadowMap.value=Z.state.spotShadowMap,je.spotLightMatrix.value=Z.state.spotLightMatrix,je.spotLightMap.value=Z.state.spotLightMap,je.pointShadowMap.value=Z.state.pointShadowMap,je.pointShadowMatrix.value=Z.state.pointShadowMatrix),se.currentProgram=qe,se.uniformsList=null,qe}function Li(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Zc.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Pi(w,Y){const ae=Ve.get(w);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function Ka(w,Y,ae,se,Z){Y.isScene!==!0&&(Y=Ht),O.resetTextureUnits();const Te=Y.fog,De=se.isMeshStandardMaterial?Y.environment:null,Ue=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ns,Fe=(se.isMeshStandardMaterial?te:T).get(se.envMap||De),$e=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,qe=!!ae.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),je=!!ae.morphAttributes.position,dt=!!ae.morphAttributes.normal,Et=!!ae.morphAttributes.color;let qt=ja;se.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(qt=D.toneMapping);const _t=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,xt=_t!==void 0?_t.length:0,We=Ve.get(se),Zt=v.state.lights;if(me===!0&&(Se===!0||w!==C)){const pn=w===C&&se.id===N;Ae.setState(se,w,pn)}let Mt=!1;se.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Zt.state.version||We.outputColorSpace!==Ue||Z.isBatchedMesh&&We.batching===!1||!Z.isBatchedMesh&&We.batching===!0||Z.isBatchedMesh&&We.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&We.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&We.instancing===!1||!Z.isInstancedMesh&&We.instancing===!0||Z.isSkinnedMesh&&We.skinning===!1||!Z.isSkinnedMesh&&We.skinning===!0||Z.isInstancedMesh&&We.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&We.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&We.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&We.instancingMorph===!1&&Z.morphTexture!==null||We.envMap!==Fe||se.fog===!0&&We.fog!==Te||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ae.numPlanes||We.numIntersection!==Ae.numIntersection)||We.vertexAlphas!==$e||We.vertexTangents!==qe||We.morphTargets!==je||We.morphNormals!==dt||We.morphColors!==Et||We.toneMapping!==qt||We.morphTargetsCount!==xt)&&(Mt=!0):(Mt=!0,We.__version=se.version);let En=We.currentProgram;Mt===!0&&(En=fa(se,Y,Z));let ha=!1,Vt=!1,zi=!1;const Bt=En.getUniforms(),Tn=We.uniforms;if(Xe.useProgram(En.program)&&(ha=!0,Vt=!0,zi=!0),se.id!==N&&(N=se.id,Vt=!0),ha||C!==w){Xe.buffers.depth.getReversed()?(Re.copy(w.projectionMatrix),gE(Re),vE(Re),Bt.setValue(H,"projectionMatrix",Re)):Bt.setValue(H,"projectionMatrix",w.projectionMatrix),Bt.setValue(H,"viewMatrix",w.matrixWorldInverse);const yn=Bt.map.cameraPosition;yn!==void 0&&yn.setValue(H,st.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&Bt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Bt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,Vt=!0,zi=!0)}if(Z.isSkinnedMesh){Bt.setOptional(H,Z,"bindMatrix"),Bt.setOptional(H,Z,"bindMatrixInverse");const pn=Z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Bt.setValue(H,"boneTexture",pn.boneTexture,O))}Z.isBatchedMesh&&(Bt.setOptional(H,Z,"batchingTexture"),Bt.setValue(H,"batchingTexture",Z._matricesTexture,O),Bt.setOptional(H,Z,"batchingIdTexture"),Bt.setValue(H,"batchingIdTexture",Z._indirectTexture,O),Bt.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Bt.setValue(H,"batchingColorTexture",Z._colorsTexture,O));const ln=ae.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Qe.update(Z,ae,En),(Vt||We.receiveShadow!==Z.receiveShadow)&&(We.receiveShadow=Z.receiveShadow,Bt.setValue(H,"receiveShadow",Z.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Tn.envMap.value=Fe,Tn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(Tn.envMapIntensity.value=Y.environmentIntensity),Vt&&(Bt.setValue(H,"toneMappingExposure",D.toneMappingExposure),We.needsLights&&da(Tn,zi),Te&&se.fog===!0&&we.refreshFogUniforms(Tn,Te),we.refreshMaterialUniforms(Tn,se,q,K,v.state.transmissionRenderTarget[w.id]),Zc.upload(H,Li(We),Tn,O)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Zc.upload(H,Li(We),Tn,O),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Bt.setValue(H,"center",Z.center),Bt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Bt.setValue(H,"normalMatrix",Z.normalMatrix),Bt.setValue(H,"modelMatrix",Z.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const pn=se.uniformsGroups;for(let yn=0,yi=pn.length;yn<yi;yn++){const Ii=pn[yn];j.update(Ii,En),j.bind(Ii,En)}}return En}function da(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function nn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,Y,ae){const se=Ve.get(w);se.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ve.get(w.texture).__webglTexture=Y,Ve.get(w.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ae,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const ae=Ve.get(w);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0};const cl=H.createFramebuffer();this.setRenderTarget=function(w,Y=0,ae=0){X=w,G=Y,F=ae;let se=!0,Z=null,Te=!1,De=!1;if(w){const Fe=Ve.get(w);if(Fe.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(H.FRAMEBUFFER,null),se=!1;else if(Fe.__webglFramebuffer===void 0)O.setupRenderTarget(w);else if(Fe.__hasExternalTextures)O.rebindTextures(w,Ve.get(w.texture).__webglTexture,Ve.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const je=w.depthTexture;if(Fe.__boundDepthTexture!==je){if(je!==null&&Ve.has(je)&&(w.width!==je.image.width||w.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(w)}}const $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);const qe=Ve.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[Y])?Z=qe[Y][ae]:Z=qe[Y],Te=!0):w.samples>0&&O.useMultisampledRTT(w)===!1?Z=Ve.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?Z=qe[ae]:Z=qe,V.copy(w.viewport),ce.copy(w.scissor),le=w.scissorTest}else V.copy(ee).multiplyScalar(q).floor(),ce.copy(ye).multiplyScalar(q).floor(),le=be;if(ae!==0&&(Z=cl),Xe.bindFramebuffer(H.FRAMEBUFFER,Z)&&se&&Xe.drawBuffers(w,Z),Xe.viewport(V),Xe.scissor(ce),Xe.setScissorTest(le),Te){const Fe=Ve.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,ae)}else if(De){const Fe=Ve.get(w.texture),$e=Y;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.__webglTexture,ae,$e)}else if(w!==null&&ae!==0){const Fe=Ve.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Fe.__webglTexture,ae)}N=-1},this.readRenderTargetPixels=function(w,Y,ae,se,Z,Te,De){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){Xe.bindFramebuffer(H.FRAMEBUFFER,Ue);try{const Fe=w.texture,$e=Fe.format,qe=Fe.type;if(!nt.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-se&&ae>=0&&ae<=w.height-Z&&H.readPixels(Y,ae,se,Z,tt.convert($e),tt.convert(qe),Te)}finally{const Fe=X!==null?Ve.get(X).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,Y,ae,se,Z,Te,De){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue)if(Y>=0&&Y<=w.width-se&&ae>=0&&ae<=w.height-Z){Xe.bindFramebuffer(H.FRAMEBUFFER,Ue);const Fe=w.texture,$e=Fe.format,qe=Fe.type;if(!nt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.bufferData(H.PIXEL_PACK_BUFFER,Te.byteLength,H.STREAM_READ),H.readPixels(Y,ae,se,Z,tt.convert($e),tt.convert(qe),0);const dt=X!==null?Ve.get(X).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,dt);const Et=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await mE(H,Et,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Te),H.deleteBuffer(je),H.deleteSync(Et),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,ae=0){const se=Math.pow(2,-ae),Z=Math.floor(w.image.width*se),Te=Math.floor(w.image.height*se),De=Y!==null?Y.x:0,Ue=Y!==null?Y.y:0;O.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,De,Ue,Z,Te),Xe.unbindTexture()};const ul=H.createFramebuffer(),Oi=H.createFramebuffer();this.copyTextureToTexture=function(w,Y,ae=null,se=null,Z=0,Te=null){Te===null&&(Z!==0?(Yc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Z,Z=0):Te=0);let De,Ue,Fe,$e,qe,je,dt,Et,qt;const _t=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(ae!==null)De=ae.max.x-ae.min.x,Ue=ae.max.y-ae.min.y,Fe=ae.isBox3?ae.max.z-ae.min.z:1,$e=ae.min.x,qe=ae.min.y,je=ae.isBox3?ae.min.z:0;else{const ln=Math.pow(2,-Z);De=Math.floor(_t.width*ln),Ue=Math.floor(_t.height*ln),w.isDataArrayTexture?Fe=_t.depth:w.isData3DTexture?Fe=Math.floor(_t.depth*ln):Fe=1,$e=0,qe=0,je=0}se!==null?(dt=se.x,Et=se.y,qt=se.z):(dt=0,Et=0,qt=0);const xt=tt.convert(Y.format),We=tt.convert(Y.type);let Zt;Y.isData3DTexture?(O.setTexture3D(Y,0),Zt=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(O.setTexture2DArray(Y,0),Zt=H.TEXTURE_2D_ARRAY):(O.setTexture2D(Y,0),Zt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Mt=H.getParameter(H.UNPACK_ROW_LENGTH),En=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ha=H.getParameter(H.UNPACK_SKIP_PIXELS),Vt=H.getParameter(H.UNPACK_SKIP_ROWS),zi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,_t.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_t.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$e),H.pixelStorei(H.UNPACK_SKIP_ROWS,qe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,je);const Bt=w.isDataArrayTexture||w.isData3DTexture,Tn=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const ln=Ve.get(w),pn=Ve.get(Y),yn=Ve.get(ln.__renderTarget),yi=Ve.get(pn.__renderTarget);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,yn.__webglFramebuffer),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Ii=0;Ii<Fe;Ii++)Bt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(w).__webglTexture,Z,je+Ii),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(Y).__webglTexture,Te,qt+Ii)),H.blitFramebuffer($e,qe,De,Ue,dt,Et,De,Ue,H.DEPTH_BUFFER_BIT,H.NEAREST);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||Ve.has(w)){const ln=Ve.get(w),pn=Ve.get(Y);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,ul),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Oi);for(let yn=0;yn<Fe;yn++)Bt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ln.__webglTexture,Z,je+yn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ln.__webglTexture,Z),Tn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,Te,qt+yn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,Te),Z!==0?H.blitFramebuffer($e,qe,De,Ue,dt,Et,De,Ue,H.COLOR_BUFFER_BIT,H.NEAREST):Tn?H.copyTexSubImage3D(Zt,Te,dt,Et,qt+yn,$e,qe,De,Ue):H.copyTexSubImage2D(Zt,Te,dt,Et,$e,qe,De,Ue);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Tn?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Zt,Te,dt,Et,qt,De,Ue,Fe,xt,We,_t.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Zt,Te,dt,Et,qt,De,Ue,Fe,xt,_t.data):H.texSubImage3D(Zt,Te,dt,Et,qt,De,Ue,Fe,xt,We,_t):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Te,dt,Et,De,Ue,xt,We,_t.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Te,dt,Et,_t.width,_t.height,xt,_t.data):H.texSubImage2D(H.TEXTURE_2D,Te,dt,Et,De,Ue,xt,We,_t);H.pixelStorei(H.UNPACK_ROW_LENGTH,Mt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,En),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ha),H.pixelStorei(H.UNPACK_SKIP_ROWS,Vt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,zi),Te===0&&Y.generateMipmaps&&H.generateMipmap(Zt),Xe.unbindTexture()},this.copyTextureToTexture3D=function(w,Y,ae=null,se=null,Z=0){return Yc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,Y,ae,se,Z)},this.initRenderTarget=function(w){Ve.get(w).__webglFramebuffer===void 0&&O.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?O.setTextureCube(w,0):w.isData3DTexture?O.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?O.setTexture2DArray(w,0):O.setTexture2D(w,0),Xe.unbindTexture()},this.resetState=function(){G=0,F=0,X=null,Xe.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}const e0=(r,e)=>{const i=e.getBoundingClientRect();return{x:(r.clientX-i.left)/i.width*2-1,y:-((r.clientY-i.top)/i.height)*2+1}};function Bw({canvas:r,mouse:e,raycaster:i,isDragging:s,isHovering:l,lastMouse:c,baseRotation:f,cameraRef:d,sceneRef:p,interactionSphereRef:m,specialDotsRef:g,normalMeshRef:_,onDotClick:x}){return{onMouseMove:L=>{const{x:U,y:D}=e0(L,r);if(e.current.x=U,e.current.y=D,!s.current){i.current.setFromCamera(e.current,d.current);const B=i.current.intersectObjects([m.current,g.current].filter(Boolean));r.style.cursor=B.length>0?"pointer":"default",l.current=B.length>0}},onMouseDown:L=>{const{x:U,y:D}=e0(L,r);i.current.setFromCamera(new wt(U,D),d.current),i.current.intersectObject(m.current).length>0&&(s.current=!0,c.current={x:L.clientX,y:L.clientY},f.current={x:p.current.rotation.x,y:p.current.rotation.y})},onMouseUp:()=>{s.current=!1},onMouseDrag:L=>{if(s.current){const U=L.clientX-c.current.x,D=L.clientY-c.current.y,B=f.current.x+D*Kv;p.current.rotation.x=L0.clamp(B,f.current.x-Qv,f.current.x+Qv),p.current.rotation.y=f.current.y+U*Kv}},handleDotClick:()=>{if(i.current.setFromCamera(e.current,d.current),g.current){const L=i.current.intersectObject(g.current,!0);if(L.length>0){const U=L[0].instanceId,D=g.current.userData.specialPoints[U];x&&x(D)}}}}}const Fw=(r,e)=>{const{onMouseMove:i,onMouseDown:s,onMouseUp:l,onMouseDrag:c,handleDotClick:f}=e;return{addListeners:()=>{r.addEventListener("mousemove",i),r.addEventListener("mousedown",s),r.addEventListener("mouseup",l),r.addEventListener("mousemove",c),r.addEventListener("click",f)},removeListeners:()=>{r.removeEventListener("mousemove",i),r.removeEventListener("mousedown",s),r.removeEventListener("mouseup",l),r.removeEventListener("mousemove",c),r.removeEventListener("click",f)}}};function ip(){const r=window.innerWidth,e=window.innerHeight;return Math.min(r,e)*(r<678?.25:.4)}function J0(r,e,i){const s=(90-r)*Jv,l=e*Jv;return new oe(i*Math.sin(s)*Math.cos(l),i*Math.cos(s),i*Math.sin(s)*Math.sin(l))}function Hw(r,e){const i=new Dr(4,4,4),s=new q0({transparent:!0,opacity:.5,emissive:4210752,emissiveIntensity:.4}),l=new k0(i,s,e.length);return e.forEach((c,f)=>{const d=J0(c.lat,c.lon,r),p=new Dn;p.position.copy(d),p.lookAt(0,0,0),p.scale.set(c.size,c.size,c.size),p.updateMatrix(),l.setMatrixAt(f,p.matrix),l.setColorAt(f,new yt(c.color))}),l.userData.specialPoints=e,l}function Gw(r,e,i,s,l,c){const f=[];for(let _=-90;_<=90;_+=180/64){const x=Math.cos(_*Math.PI/180)*s,S=Math.floor(x*Math.PI*.2);for(let b=0;b<S;b++){const A=-180+b*360/S,y=Math.floor((A+180)/360*e),v=Math.floor((_+90)/180*i);r[(v*e+y)*4+3]<128||f.push(J0(_,A,s))}}const p=new Dr(5*l,5*l,5*l),m=new q0({color:16766720,emissive:4210752,emissiveIntensity:c}),g=new k0(p,m,f.length);return f.forEach((_,x)=>{const S=new Dn;S.position.copy(_),S.lookAt(0,0,0),S.scale.set(l*3,l*3,l*3),S.updateMatrix(),g.setMatrixAt(x,S.matrix)}),g}const Vw=(r,e)=>new Jn(new ou(r*.8,64,64),new WE({color:e,roughness:1,metalness:.5,opacity:.5,transparent:!0})),kw=(r,e)=>new Jn(new ou(r,64,64),new tp({color:e,opacity:.1,transparent:!0}));function jw(r,e){return new Promise(i=>{const s=ip(),l=new Image;l.src="/src/Images/wmap.png",l.onload=()=>{const{data:c,width:f,height:d}=Xw(l),p=Gw(c,f,d,s,.3,.2),m=Hw(s,e);r.current.add(p,m),i({normalMesh:p,specialMesh:m})}})}function Xw(r){const e=document.createElement("canvas");e.width=r.width,e.height=r.height;const i=e.getContext("2d");return i.translate(0,r.height),i.scale(1,-1),i.drawImage(r,0,0),{data:i.getImageData(0,0,r.width,r.height).data,width:r.width,height:r.height}}function qw(r,e,i,s){const l=r.current,c=new Iw({canvas:l,antialias:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),c.setSize(window.innerWidth-50,window.innerHeight-50),e.current=c;const f=new VE;f.background=new yt(1841431),f.add(new JE(16777215,1)),i.current=f;const d=new ci(45,window.innerWidth/window.innerHeight,.1,1e3);d.position.set(0,0,ip()*(window.innerWidth<678?5:3.5)),s.current=d}function $0(r,e,i,s,l,c,f,d,p){if(requestAnimationFrame(()=>$0(r,e,i,s,l,c,f,d,p)),f.current){const g=i.current.position.length()/p.current.length(),_=L0.lerp(g,d.current,.03);i.current.position.copy(p.current.clone().normalize().multiplyScalar(p.current.length()*_)),Math.abs(_-d.current)<.001&&(f.current=!1)}else l.current||(e.current.rotation.y+=c);r.current.render(e.current,i.current)}function Ww({mainSphereColor:r,interactionSphereColor:e,dotsData:i,onDotClick:s,zoomOutTrigger:l,setZoomOutTrigger:c}){const f=re.useRef(),d=re.useRef(),p=re.useRef(),m=re.useRef(),g=re.useRef(),_=re.useRef(),x=re.useRef(),S=re.useRef(),b=re.useRef({x:0,y:0}),A=re.useRef(new eT),y=re.useRef(new wt),v=re.useRef(!1),L=re.useRef(!1),U=re.useRef({x:0,y:0}),D=re.useRef(new oe),B=re.useRef(!1),G=re.useRef(1);return re.useEffect(()=>{l&&(G.current=1,B.current=!0,c(!l))},[l]),re.useEffect(()=>{qw(f,d,p,m);const F=ip(),X=f.current,N=new jo;_.current=N;const C=Vw(F,r);N.add(C),g.current=kw(F,e),N.add(g.current),jw(p,i).then(({normalMesh:q,specialMesh:Me})=>{S.current=q,x.current=Me,N.add(q,Me)}),p.current.add(N);const{onMouseMove:V,onMouseDown:ce,onMouseUp:le,onMouseDrag:_e,handleDotClick:de}=Bw({canvas:X,mouse:y,raycaster:A,isDragging:v,isHovering:L,lastMouse:U,baseRotation:b,cameraRef:m,sceneRef:p,interactionSphereRef:g,specialDotsRef:x,normalMeshRef:S,onDotClick:q=>{D.current.copy(m.current.position),G.current=.5,B.current=!0,s&&s(q)}}),{addListeners:I,removeListeners:K}=Fw(X,{onMouseMove:V,onMouseDown:ce,onMouseUp:le,onMouseDrag:_e,handleDotClick:de});return I(),$0(d,p,m,v,L,ub,B,G,D),()=>{p.current.remove(N),K()}},[]),R.jsx("canvas",{ref:f,className:"self-center w-full animate-fade-up animate-duration-1000 animate-ease-linear"})}const Yw=[{lat:31.84712,lon:-51.6486,color:16757690,size:4,label:"Conceptos básicos de redes (Cisco)",link:"https://www.netacad.com/es/courses/networking-basics?courseLang=es-XL",content:`
            Comience a aprender los conceptos básicos de redes de computadoras 
            y descubra cómo funcionan las redes.
    `},{lat:69.88938,lon:-79.28792,color:11789820,size:4,label:"Introducción a Cisco Packet Tracer (Cisco)",link:"https://www.netacad.com/es/courses/getting-started-cisco-packet-tracer?courseLang=es-XL",content:`
      Su camino hacia Cisco Packet Tracer. 
      Familiarícese con el entorno de simulación y descargue la última versión.
    `},{lat:55.35853,lon:-104.00928,color:12188608,size:4,label:"Introducción a la Programación con Python (Udemy)",link:"https://www.udemy.com/course/introduccion-a-la-programacion-con-python-juan-de-la-torre/",content:`
      ¿Deseas aprender Programación para obtener un mejor trabajo o crear una idea? 
      ¡Este curso es para ti!
    `},{lat:8.33571,lon:-124.00928,color:13350896,size:4,label:"React JS: La biblioteca de JS creada por Facebook (Udemy)",link:"https://www.udemy.com/course/react-js-inicia-en-el-mundo-de-los-frameworks-de-javascript/",content:`
      Aprende paso a paso que es React Js, los Hooks, 
      Componentes, Props, Navegación con React Router Dom, y mucho mas...
    `},{lat:-6.19514,lon:49.28792,color:16766629,size:4,label:"Crud MERN Stack (Udemy)",link:"https://www.udemy.com/course/crud-mern-stack/",content:`
      Aprende a crear tu primera aplicación con el MERN Stack - 
      MongoDB, Express.js, React, js y Node.js
    `},{lat:-22.25271,lon:-51.6486,color:16775885,size:4,label:"Introducción a la Ciberseguridad (Cisco)",link:"https://www.netacad.com/es/courses/introduction-to-cybersecurity?courseLang=en-US",content:`
      Explora el fascinante mundo de la ciberseguridad e 
      inicia tu viaje hacia una carrera en este campo.
    `},{lat:-31.84712,lon:31.6486,color:10545125,size:4,label:"Aspectos básicos de Microsoft Azure (Microsoft)",link:"https://learn.microsoft.com/es-es/training/courses/az-900t00",content:`
      Aspectos básicos de Microsoft Azure" es una serie de tres partes en la que se explican conceptos básicos sobre la nube, 
      se proporciona una introducción simplificada a muchos servicios de Azure y se incluyen ejercicios prácticos 
      para implementar un servicio por primera vez de forma gratuita.
    `},{lat:-55.35853,lon:-124.00928,color:16763851,size:4,label:"Seguridad de Terminales (Cisco)",link:"https://www.netacad.com/es/courses/endpoint-security?courseLang=es-XL",content:`
      Aprenda a proteger su red hasta el borde.
    `},{lat:-8.33571,lon:124.00928,color:13689599,size:4,label:"Curso Completo de Ciberseguridad Defensiva (Udemy)",link:"https://www.udemy.com/course/curso-completo-de-ciberseguridad-defensiva/",content:`
      Conviértete en profesional de la Ciberseguridad 
      y aprende a proteger infraestructuras reales contra Hacking y mucho más!
    `},,{lat:10.33571,lon:104.00928,color:10543871,size:4,label:"Curso completo de Hacking Ético y Ciberseguridad (Udemy)",link:"https://www.udemy.com/course/curso-completo-de-hacking-etico-y-ciberseguridad/",content:`
     Aprende Hacking Ético y Ciberseguridad de manera práctica, 
     ¡conviértete en un experto en Hacking Ético y Ciberseguridad!
    `},{lat:-1.33571,lon:-77.33928,color:1935,size:4,label:"Desarrollo de soluciones para Microsoft Azure (Microsoft)",link:"https://learn.microsoft.com/es-es/training/courses/az-204t00",content:`
      Este curso enseña a los desarrolladores cómo crear soluciones de extremo a extremo en Microsoft Azure. 
      Los estudiantes aprenderán cómo implementar soluciones informáticas de Azure, crear funciones de Azure, 
      implementar y administrar aplicaciones web, desarrollar soluciones que utilicen el almacenamiento de Azure, 
      implementar autenticación y autorización, y asegurar sus soluciones mediante KeyVault e Identidades administradas.
    `}],Zw=({open:r,onClose:e,modalContent:i})=>r?R.jsx("dialog",{open:!0,className:"modal modal-bottom sm:modal-middle backdrop-blur-sm z-50",children:R.jsxs("div",{className:"modal-box bg-stone-900/80 text-center",children:[i,R.jsx("div",{className:"modal-action",children:R.jsx("button",{className:"btn btn-dash hover:btn-warning text-white",onClick:e,children:"Cerrar"})})]})}):null,Kw=()=>R.jsxs("div",{className:"flex flex-col items-center gap-4",children:[R.jsx("h2",{className:"text-2xl font-bold text-emerald-300",children:"¡Contáctame!"}),R.jsx("p",{className:"text-white/80",children:"Puedes escribirme a cualquiera de mis redes sociales:"}),R.jsxs("div",{className:"flex flex-row gap-4 justify-center",children:[R.jsx("a",{href:"",target:"_blank",rel:"noopener noreferrer",className:"btn btn-dash btn-info hover:bg-[#1A77F2] hover:text-white hover:border-[#005fd8]",children:"Facebook"}),R.jsx("a",{href:"",target:"_blank",rel:"noopener noreferrer",className:"btn btn-dash btn-primary hover:bg-[#622069] hover:text-white hover:border-[#591660]",children:"Instagram"}),R.jsx("a",{href:"",target:"_blank",rel:"noopener noreferrer",className:"btn btn-dash hover:bg-black hover:text-white hover:border-black",children:"TikTok"}),R.jsx("a",{href:"mailto:",className:"btn btn-dash hover:bg-white hover:text-black hover:border-[#e5e5e5]",children:"Email"})]})]}),Qw=({open:r,onClose:e,modalContent:i})=>r?R.jsx("dialog",{open:!0,className:"modal modal-bottom sm:modal-middle backdrop-blur-sm z-50",children:R.jsxs("div",{className:"modal-box bg-stone-900/80 text-center",children:[i,R.jsx("div",{className:"modal-action",children:R.jsx("button",{className:"btn btn-dash hover:btn-warning text-white",onClick:e,children:"Cerrar"})})]})}):null,Jw=({dotData:r})=>{const[e,i]=re.useState(!1),s=`https://api.microlink.io/?url=${encodeURIComponent(r.link)}&screenshot=true&meta=false&embed=screenshot.url`;return R.jsxs(R.Fragment,{children:[R.jsx("h3",{className:"font-bold text-lg",children:r.label}),R.jsx("p",{className:"py-4",children:r.content}),R.jsx("a",{className:"btn btn-outline btn-dash btn-warning mt-4",href:r.link,target:"_blank",rel:"noopener noreferrer",children:"Link del curso"}),R.jsxs("div",{className:"flex justify-center min-h-40 mt-4",children:[!e&&R.jsx("div",{className:"animate-pulse bg-stone-700 rounded-lg shadow-md max-w-xs w-full"}),R.jsx("img",{src:s,alt:`Vista previa de ${r.label}`,className:`rounded-lg shadow-md max-w-xs w-full transition-opacity duration-300 ${e?"opacity-100":"opacity-0"}`,onLoad:()=>i(!0),style:{position:e?"static":"absolute"}})]})]})},$w=()=>{const[r,e]=re.useState(null),[i,s]=re.useState(!1),[l,c]=re.useState(!1),f=()=>{e(null),s(!i)};return R.jsxs(R.Fragment,{children:[R.jsx("div",{className:"flex flex-col items-center justify-center text-center animate-fade animate-duration-500 animate-ease-linear ",children:R.jsxs("div",{className:"flex flex-col mx-4",children:[R.jsx("h1",{className:"font-extrabold text-5xl sm:text-7xl md:text-8xl transition-all duration-300",children:"Jonathan"}),R.jsx("h2",{className:"font-bold text-4xl text-center sm:text-6xl md:text-7xl pb-8 transition-all duration-300",children:"Aragón"}),R.jsx(il,{onOpen:()=>c(!0)}),R.jsxs("div",{className:"flex flex-col md:flex-row gap-4 py-4",children:[R.jsxs("article",{className:"flex flex-col p-8  min-h-56 max-h-80 justify-center max-w-md min-w-80 bg-amber-300/10 hover:bg-amber-300/15 rounded-lg",children:[R.jsxs("h1",{className:"font-light text-3xl text-amber-300",children:[" ",R.jsx("span",{className:"animate-pulse text-amber-300",children:">"})," Programador jr"]}),R.jsx("p",{className:"font-extralight text-lg text-zinc-300",children:"Tengo experiencia en programación y ciberseguridad, con habilidades en resolución de problemas y aprendizaje rápido. Mi enfoque es ofrecer soluciones eficientes y adaptadas a los desafíos tecnológicos."})]}),R.jsxs("article",{className:"flex flex-col items-center p-8 min-h-56 max-h-80 justify-center max-w-md min-w-80 bg-emerald-900/15 hover:bg-emerald-900/20 rounded-xl ",children:[R.jsx("h1",{className:"font-light text-2xl text-green-300",children:"Recursos que recomiendo"}),R.jsxs("p",{className:"font-extralight text-sm text-zinc-300",children:["Explora los cursos y recursos que he encontrado útiles en mi camino de aprendizaje.",R.jsx("span",{className:"text-emerald-200",children:" Haz clic en los puntos del mapa para obtener más información sobre cada uno de ellos."})]})]})]})]})}),R.jsx(Ww,{mainSphereColor:10811243,interactionSphereColor:7337801,dotsData:Yw,onDotClick:e,zoomOutTrigger:i,setZoomOutTrigger:s}),R.jsx(Qw,{open:l,onClose:()=>c(!1),modalContent:R.jsx(Kw,{})}),R.jsx(Zw,{open:!!r,onClose:f,modalContent:R.jsx(Jw,{dotData:r})})]})};function eC(){return R.jsx(wM,{children:R.jsxs("div",{className:"flex flex-col",children:[R.jsx(cb,{}),R.jsxs(aM,{children:[R.jsx(bs,{path:"/",element:R.jsx($w,{})}),R.jsx(bs,{path:"/SobreMi",element:R.jsx(ob,{})}),R.jsx(bs,{path:"/proyectos",element:R.jsx(nb,{})}),R.jsx(bs,{path:"/CyberVlog",element:R.jsx(ib,{})}),R.jsx(bs,{path:"/CyberVlog/:id",element:R.jsx($M,{})})]}),R.jsx("footer",{className:"footer footer-horizontal footer-center bg-stone-800 text-primary-content pb-4",children:R.jsxs("aside",{children:[R.jsx("img",{src:"/src/Images/Logo.png",alt:"Logo de Alliances tech",className:"size-24 grayscale"}),R.jsxs("p",{className:"font-bold",children:["Alliances tech",R.jsx("br",{}),"Mejorando un 1% cada día"]}),R.jsxs("p",{children:["Copyright © ",new Date().getFullYear()," - All right reserved"]})]})})]})})}dS.createRoot(document.getElementById("root")).render(R.jsx(re.StrictMode,{children:R.jsx(eC,{})}));
