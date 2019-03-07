!function(I){var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!R[e]||!p[e])return;for(var r in p[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(U[r]=n[r]);0==--l&&0===u&&v()}(e,n),r&&r(e,n)};var c,t=!0,M="ef837b40c118dbb3a5e9",n=1e4,k={},A=[],o=[];function d(n){var r=L[n];if(!r)return N;var t=function(e){return r.hot.active?(L[e]?-1===L[e].parents.indexOf(n)&&L[e].parents.push(n):(A=[n],c=e),-1===r.children.indexOf(e)&&r.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+n),A=[]),N(e)},e=function(n){return{configurable:!0,enumerable:!0,get:function(){return N[n]},set:function(e){N[n]=e}}};for(var o in N)Object.prototype.hasOwnProperty.call(N,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(t,o,e(o));return t.e=function(e){return"ready"===S&&q("prepare"),u++,N.e(e).then(n,function(e){throw n(),e});function n(){u--,"prepare"===S&&(s[e]||h(e),0===u&&0===l&&v())}},t.t=function(e,n){return 1&n&&(e=t(e)),N.t(e,-2&n)},t}var i=[],S="idle";function q(e){S=e;for(var n=0;n<i.length;n++)i[n].call(null,e)}var a,U,C,l=0,u=0,s={},p={},R={};function T(e){return+e+""===e?+e:e}function f(e){if("idle"!==S)throw new Error("check() is only allowed in idle status");return t=e,q("check"),(c=n,c=c||1e4,new Promise(function(n,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=N.p+""+M+".hot-update.json";t.open("GET",o,!0),t.timeout=c,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)n();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(t.responseText)}catch(e){return void r(e)}n(e)}}})).then(function(e){if(!e)return q("idle"),null;p={},s={},R=e.c,C=e.h,q("prepare");var n=new Promise(function(e,n){a={resolve:e,reject:n}});U={};return h(0),"prepare"===S&&0===u&&0===l&&v(),n});var c}function h(e){var n,r;R[e]?(p[e]=!0,l++,n=e,(r=document.createElement("script")).charset="utf-8",r.src=N.p+""+n+"."+M+".hot-update.js",document.head.appendChild(r)):s[e]=!0}function v(){q("ready");var n=a;if(a=null,n)if(t)Promise.resolve().then(function(){return y(t)}).then(function(e){n.resolve(e)},function(e){n.reject(e)});else{var e=[];for(var r in U)Object.prototype.hasOwnProperty.call(U,r)&&e.push(T(r));n.resolve(e)}}function y(r){if("ready"!==S)throw new Error("apply() is only allowed in ready status");var e,n,t,u,o;function c(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});0<t.length;){var o=t.pop(),c=o.id,d=o.chain;if((u=L[c])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:c};if(u.hot._main)return{type:"unaccepted",chain:d,moduleId:c};for(var i=0;i<u.parents.length;i++){var a=u.parents[i],l=L[a];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:d.concat([a]),moduleId:c,parentId:a};-1===n.indexOf(a)&&(l.hot._acceptedDependencies[c]?(r[a]||(r[a]=[]),s(r[a],[c])):(delete r[a],n.push(a),t.push({chain:d.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function s(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}r=r||{};var d={},i=[],a={},l=function(){console.warn("[HMR] unexpected require("+f.moduleId+") to disposed module")};for(var p in U)if(Object.prototype.hasOwnProperty.call(U,p)){var f;o=T(p);var h=!1,v=!1,y=!1,b="";switch((f=U[p]?c(o):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":r.onDeclined&&r.onDeclined(f),r.ignoreDeclined||(h=new Error("Aborted because of self decline: "+f.moduleId+b));break;case"declined":r.onDeclined&&r.onDeclined(f),r.ignoreDeclined||(h=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+b));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(f),r.ignoreUnaccepted||(h=new Error("Aborted because "+o+" is not accepted"+b));break;case"accepted":r.onAccepted&&r.onAccepted(f),v=!0;break;case"disposed":r.onDisposed&&r.onDisposed(f),y=!0;break;default:throw new Error("Unexception type "+f.type)}if(h)return q("abort"),Promise.reject(h);if(v)for(o in a[o]=U[o],s(i,f.outdatedModules),f.outdatedDependencies)Object.prototype.hasOwnProperty.call(f.outdatedDependencies,o)&&(d[o]||(d[o]=[]),s(d[o],f.outdatedDependencies[o]));y&&(s(i,[f.moduleId]),a[o]=l)}var m,_=[];for(n=0;n<i.length;n++)o=i[n],L[o]&&L[o].hot._selfAccepted&&_.push({module:o,errorHandler:L[o].hot._selfAccepted});q("dispose"),Object.keys(R).forEach(function(e){!1===R[e]&&delete installedChunks[e]});for(var w,g,O=i.slice();0<O.length;)if(o=O.pop(),u=L[o]){var j={},D=u.hot._disposeHandlers;for(t=0;t<D.length;t++)(e=D[t])(j);for(k[o]=j,u.hot.active=!1,delete L[o],delete d[o],t=0;t<u.children.length;t++){var E=L[u.children[t]];E&&(0<=(m=E.parents.indexOf(o))&&E.parents.splice(m,1))}}for(o in d)if(Object.prototype.hasOwnProperty.call(d,o)&&(u=L[o]))for(g=d[o],t=0;t<g.length;t++)w=g[t],0<=(m=u.children.indexOf(w))&&u.children.splice(m,1);for(o in q("apply"),M=C,a)Object.prototype.hasOwnProperty.call(a,o)&&(I[o]=a[o]);var P=null;for(o in d)if(Object.prototype.hasOwnProperty.call(d,o)&&(u=L[o])){g=d[o];var x=[];for(n=0;n<g.length;n++)if(w=g[n],e=u.hot._acceptedDependencies[w]){if(-1!==x.indexOf(e))continue;x.push(e)}for(n=0;n<x.length;n++){e=x[n];try{e(g)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:o,dependencyId:g[n],error:e}),r.ignoreErrored||P||(P=e)}}}for(n=0;n<_.length;n++){var H=_[n];o=H.module,A=[o];try{N(o)}catch(n){if("function"==typeof H.errorHandler)try{H.errorHandler(n)}catch(e){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:o,error:e,originalError:n}),r.ignoreErrored||P||(P=e),P||(P=n)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:o,error:n}),r.ignoreErrored||P||(P=n)}}return P?(q("fail"),Promise.reject(P)):(q("idle"),new Promise(function(e){e(i)}))}var L={};function N(e){if(L[e])return L[e].exports;var n,t,r=L[e]={i:e,l:!1,exports:{},hot:(n=e,t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:c!==n,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);0<=n&&t._disposeHandlers.splice(n,1)},check:f,apply:y,status:function(e){if(!e)return S;i.push(e)},addStatusHandler:function(e){i.push(e)},removeStatusHandler:function(e){var n=i.indexOf(e);0<=n&&i.splice(n,1)},data:k[n]},c=void 0,t),parents:(o=A,A=[],o),children:[]};return I[e].call(r.exports,r,r.exports,d(e)),r.l=!0,r.exports}N.m=I,N.c=L,N.d=function(e,n,r){N.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},N.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},N.t=function(n,e){if(1&e&&(n=N(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(N.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)N.d(r,t,function(e){return n[e]}.bind(null,t));return r},N.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return N.d(n,"a",n),n},N.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},N.p="",N.h=function(){return M},d(0)(N.s=0)}([function(e,n,r){"use strict";var t,o=r(1),c=(t=o)&&t.__esModule?t:{default:t};r(3),document.querySelector("#root").appendChild((0,c.default)())},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=document.createElement("div");e.textContent="greetings!";var n=document.createElement("img");return n.src=c.default,e.appendChild(n),e};var t,o=r(2),c=(t=o)&&t.__esModule?t:{default:t}},function(e,n,r){e.exports=r.p+"src/eg_tulip.jpg?0f85c5!./dir/file.png"},function(e,n){}]);