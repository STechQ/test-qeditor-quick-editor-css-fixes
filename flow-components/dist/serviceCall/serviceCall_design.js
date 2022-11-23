/*! For license information please see serviceCall_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.flowcomponent=t(require("react")):e.flowcomponent=t(e.react)}(this,(e=>(()=>{"use strict";var t={1837:(e,t,s)=>{var o=s(8156),r=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,s){var o,a={},c=null,l=null;for(o in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)n.call(t,o)&&!i.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:c,ref:l,props:a,_owner:p.current}}t.jsx=a,t.jsxs=a},2094:(e,t,s)=>{e.exports=s(1837)},8156:t=>{t.exports=e}},s={};function o(e){var r=s[e];if(void 0!==r)return r.exports;var n=s[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{o.r(r),o.d(r,{default:()=>d});var e=o(2094);var t=o(8156);const s={width:"80px"},n=o=>{const{NameDiv:r,DescDiv:n}=o.react.prop,{ExpressionComp:p}=o.react,i=e=>e.reduce(((e,t)=>(t.key&&(e[t.key]=t.value),e)),{}),a=()=>x.map((e=>e)),c=e=>{e.push({key:"",value:{type:"msg",value:""}})},l=(d=o.propValues.headers||{},u=(e,t)=>({key:t,value:e}),function(e){return Object.keys(e)}(d).map(((e,t)=>u(d[e],e,t))));var d,u;0!=l.length&&""==l[l.length-1].key||c(l);const[x,h]=(0,t.useState)(l);return(0,e.jsxs)("div",{children:[(0,e.jsx)(r,{children:"Headers"}),(0,e.jsx)(n,{children:"Headers to send to the Service"}),x.map(((t,r)=>(0,e.jsxs)("div",{children:[(0,e.jsx)("input",{type:"text",style:s,value:t.key,placeholder:t.key?void 0:"key",onChange:e=>((e,t)=>{const s=a();s[t].key=e.toLowerCase(),""!=s[s.length-1].key&&c(s);const r=s.findIndex((e=>""==e.key));-1!=r&&r!=s.length-1&&s.splice(r,1),h(s),o.callbacks.setProp("headers",i(s))})(e.target.value,r)}),(0,e.jsx)(p,{inputOptions:{width:"65px"},types:["msg","string"],expression:t.value,onChange:e=>((e,t)=>{const s=a();s[t].value=e,h(s),o.callbacks.setProp("headers",i(s))})(e,r)})]},r)))]})},p=s=>{const{NameDiv:o,DescDiv:r}=s.react.prop,{ExpressionComp:n}=s.react,[p,i]=(0,t.useState)(s.propValues.body);return(0,e.jsxs)("div",{children:[(0,e.jsx)(o,{children:"Body"}),(0,e.jsx)(r,{children:"Body of the Service Request"}),(0,e.jsx)(n,{inputOptions:{width:"130px"},types:["msg","boolean","number","string"],expression:p,onChange:e=>{i(e),s.callbacks.setProp("body",e)}})]})},i=s=>{const{NameDiv:o,DescDiv:r}=s.options.react.prop,{ExpressionComp:n}=s.options.react,[p,i]=(0,t.useState)(s.options.propValues.url);return(0,e.jsxs)("div",{children:[(0,e.jsx)(o,{children:"URL"}),(0,e.jsx)(r,{children:"Service address to make the call"}),(0,e.jsx)(n,{inputOptions:{width:"130px"},types:["string","msg"],expression:p,onChange:e=>{s.options.callbacks.setProp("url",e),i(e)}})]})},a=[{text:"GET"},{text:"POST"},{text:"PUT"},{text:"DELETE"}],c=s=>{const{NameDiv:o,DescDiv:r}=s.options.react.prop,{ExpressionComp:n}=s.options.react,[p,i]=(0,t.useState)(s.options.propValues.method);return(0,e.jsxs)("div",{children:[(0,e.jsx)(o,{children:"Method"}),(0,e.jsx)(r,{children:"Http Method of Service. Ex: get or post"}),(0,e.jsx)(n,{inputOptions:{width:"130px"},types:["string","msg",{type:"enum",options:a}],expression:p,onChange:e=>{s.options.callbacks.setProp("method",e),i(e)}})]})},l=s=>{const{NameDiv:o,DescDiv:r}=s.options.react.prop,{ExpressionComp:n}=s.options.react,[p,i]=(0,t.useState)(s.options.propValues.responseField),[a,c]=(0,t.useState)(void 0!==s.options.propValues.responseField),[l,d]=(0,t.useState)(!0),u=e=>{s.options.callbacks.setProp("responseField",e),i(e)};return(0,e.jsxs)("div",{children:[(0,e.jsx)(o,{children:"Response"}),(0,e.jsx)(r,{children:"Do you need the response of the service ?"}),(0,e.jsx)("input",{type:"checkbox",checked:a,onChange:e=>(e=>{c(e),e?l&&void 0===p&&(d(!1),u({type:"msg",value:"response"})):u(void 0)})(e.target.checked)}),a&&(0,e.jsx)(n,{inputOptions:{width:"130px"},types:["msg"],expression:p,onChange:(e,t)=>{const o=e;s.options.callbacks.setProp("responseField",o),u(o)}})]})},d={name:"serviceCall",version:"0.8",style:{fill:"#728dff",stroke:"#999999"},inputs:[{name:"_"}],outputs:["_"],editSection:t=>()=>(0,e.jsxs)("div",{children:[(0,e.jsx)(i,{options:t}),(0,e.jsx)("hr",{}),(0,e.jsx)(c,{options:t}),(0,e.jsx)("hr",{}),n(t),(0,e.jsx)("hr",{}),p(t),(0,e.jsx)("hr",{}),(0,e.jsx)(l,{options:t})]})}})(),r})()));