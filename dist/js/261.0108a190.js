"use strict";(self["webpackChunkionic_app"]=self["webpackChunkionic_app"]||[]).push([[261],{261:function(t,n,e){e.r(n),e.d(n,{MENU_BACK_BUTTON_PRIORITY:function(){return c},OVERLAY_BACK_BUTTON_PRIORITY:function(){return o},blockHardwareBackButton:function(){return r},startHardwareBackButton:function(){return i}});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const r=()=>{document.addEventListener("backbutton",(()=>{}))},i=()=>{const t=document;let n=!1;t.addEventListener("backbutton",(()=>{if(n)return;let e=0,r=[];const i=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,n){r.push({priority:t,handler:n,id:e++})}}});t.dispatchEvent(i);const o=async t=>{try{if(null===t||void 0===t?void 0:t.handler){const n=t.handler(c);null!=n&&await n}}catch(n){console.error(n)}},c=()=>{if(r.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};r.forEach((n=>{n.priority>=t.priority&&(t=n)})),n=!0,r=r.filter((n=>n.id!==t.id)),o(t).then((()=>n=!1))}};c()}))},o=100,c=99}}]);
//# sourceMappingURL=261.0108a190.js.map