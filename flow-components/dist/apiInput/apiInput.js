!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.flowcomponent=t():e.flowcomponent=t()}(this,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(e,t){switch(e){case"'":case'"':return[e,t+1];default:return[void 0,t]}}function r(e,t,o){if("other"==o.type){if("object"!=typeof e)return;return e[t]=o.value}let r=e[t];return void 0!==r?r:e[t]="array"==o.type?[]:{}}function n(e,t){switch(e[t]){case'"':case"'":return"object";default:return"array"}}e.r(t),e.d(t,{default:()=>s});const a=function(e,t,a){switch(e.type){case"msg":!function(e,t,a){let s=a.msg;const c=e.length;let f,l="",i=!1;for(var u=0;u<c;u++){let a=e[u];if(i)if(f==a||"]"==a&&!f){let o;switch(f&&u++,e[u+1]){case"[":o={type:n(e,u+2)};break;case".":o={type:"object"};break;case void 0:o={type:"other",value:t};break;default:throw new Error("unexpected set msg")}s=r(s,l,o),l="",i=!1}else l+=a;else switch(a){case".":l&&(s=r(s,l,{type:"object"})),l="";break;case"[":l&&(s=r(s,l,{type:n(e,u+1)})),l="",[f,u]=o(e[u+1],u),i=!0;break;default:l+=a}}l&&(s=r(s,l,{type:"other",value:t}))}(e.value,t,a);break;case"wholeMsg":Object.keys(t).forEach((e=>a.msg[e]=t[e]))}},s=e=>{const t=e.flow.getServer();if(!t)throw new Error("apiInput can not execute on environments without server");const{urlParams:o,headers:r,body:n}=e.props;if(o){const r=t.getPath().split("/").filter((e=>""!=e));o.forEach(((t,o)=>{if("string"==typeof t){if(t!=r[o])return void e.flow.stop()}else e.flow.evalSet(t,r[o],a)}))}if(r){const o=t.getHeaders();Object.keys(r).forEach((t=>{const n=o[t];null!=n&&e.flow.evalSet({type:"msg",value:r[t]},"string"==typeof n?n:n[0],a)}))}if(n){const o=t.getBody();e.flow.evalSet({type:"msg",value:n},o,a)}e.flow.next()};return t})()));