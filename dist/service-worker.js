if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const c=s=>i(s,r),u={module:{uri:r},exports:o,require:c};e[r]=Promise.all(n.map((s=>u[s]||c(s)))).then((s=>(l(...s),o)))}}define(["./workbox-79ffe3e0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"ionic-app"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/assets/icon/favicon.png",revision:"988be98f12b400c41a22b59b82cfeab6"},{url:"/assets/icon/icon.png",revision:"69e6f162abf8c9f65d6d8c73d7813f3e"},{url:"/assets/shapes.svg",revision:"e535ce83da20a4b7719ca3d45195ebd5"},{url:"/css/app.ca1dfa60.css",revision:null},{url:"/index.html",revision:"7b779595ba2b8b659adc7f2a34c14e24"},{url:"/js/261.0108a190.js",revision:null},{url:"/js/338.26d2e313.js",revision:null},{url:"/js/456.691c94ea.js",revision:null},{url:"/js/541.7c47c2ad.js",revision:null},{url:"/js/544.31479d14.js",revision:null},{url:"/js/576.9a5e2d0d.js",revision:null},{url:"/js/753.01abbd0c.js",revision:null},{url:"/js/775.c75ebc61.js",revision:null},{url:"/js/78.ecb83586.js",revision:null},{url:"/js/823.425a6d6c.js",revision:null},{url:"/js/880.f3dfecb1.js",revision:null},{url:"/js/980.eada2443.js",revision:null},{url:"/js/app.67617f74.js",revision:null},{url:"/manifest.json",revision:"7b930639cccfc38b4cb67e5a5e674438"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
