"use strict";(self["webpackChunkionic_app"]=self["webpackChunkionic_app"]||[]).push([[753],{753:function(n,e,i){i.r(e),i.d(e,{mdTransitionAnimation:function(){return a}});var t=i(980),o=i(26);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=(n,e)=>{const i="40px",a="0px",r="back"===e.direction,s=e.enteringEl,c=e.leavingEl,l=(0,o.g)(s),d=l.querySelector("ion-toolbar"),u=(0,t.c)();if(u.addElement(l).fill("both").beforeRemoveClass("ion-page-invisible"),r?u.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):u.duration(e.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${i})`,`translateY(${a})`).fromTo("opacity",.01,1),d){const n=(0,t.c)();n.addElement(d),u.addAnimation(n)}if(c&&r){u.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const n=(0,t.c)();n.addElement((0,o.g)(c)).onFinish((e=>{1===e&&n.elements.length>0&&n.elements[0].style.setProperty("display","none")})).fromTo("transform",`translateY(${a})`,`translateY(${i})`).fromTo("opacity",1,0),u.addAnimation(n)}return u}}}]);
//# sourceMappingURL=753.01abbd0c.js.map