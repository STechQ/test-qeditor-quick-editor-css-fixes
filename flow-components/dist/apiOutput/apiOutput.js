!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.flowcomponent=t():e.flowcomponent=t()}(this,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(e,t){switch(e){case"'":case'"':return[e,t+1];default:return[void 0,t]}}function r(e,t){if(null!=e)return e[t]}e.r(t),e.d(t,{default:()=>u});const n=function(e,t){switch(e.type){case"boolean":return"true"==e.value;case"msg":return function(e,t){let n=t;const u=e.length;let s,a="",c=!1;for(var l=0;l<u;l++){let t=e[l];if(c)s==t||"]"==t&&!s?(s&&l++,n=r(n,a),a="",c=!1):a+=t;else switch(t){case".":a&&(n=r(n,a)),a="";break;case"[":a&&(n=r(n,a)),a="",[s,l]=o(e[l+1],l),c=!0;break;default:a+=t}}return a&&(n=r(n,a)),n}(e.value,t.msg);case"number":return Number(e.value);case"string":case"enum":return e.value;case"wholeMsg":return t.msg;case"notSet":return}},u=e=>{const t=e.flow.getServer();if(!t)throw new Error("apiOutput can not execute on environments without server");const{statusCode:o,headers:r,body:u}=e.props,s=Number(e.flow.evalGet(o,n));if(!s)throw new Error("apiOutput status must be a positive number");let a,c;r&&(a=Object.keys(r).reduce(((t,o)=>{const u=e.flow.evalGet(r[o],n);return void 0===u||(t[o]=u.toString()),t}),{})),u&&(c=e.flow.evalGet(u,n)),t.writeResponse({statusCode:s,body:c,headers:a}),e.flow.next()};return t})()));