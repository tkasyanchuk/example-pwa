if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>n(e,r),f={module:{uri:r},exports:o,require:c};i[r]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(d(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"assets/index-AydG4Cmu.css",revision:null},{url:"assets/index-sgI03QXM.js",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"images/test.png",revision:"12e5cbbb63024460755560bb7e03f0a4"},{url:"index.html",revision:"07f151192bff064450582a460f05f1df"},{url:"masked-icon.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"pwa-192x192.png",revision:"0e7fe1475f42884cd7b437d16cfd9444"},{url:"pwa-512x512.png",revision:"39e05cebf03f2675d844837afb2df294"},{url:"registerSW.js",revision:"bd7509479091aab0cbbafb5686efc867"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"apple-touch-icon.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"masked-icon.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"pwa-192x192.png",revision:"0e7fe1475f42884cd7b437d16cfd9444"},{url:"pwa-512x512.png",revision:"39e05cebf03f2675d844837afb2df294"},{url:"manifest.webmanifest",revision:"2a6b8416dc3600656849146c9d9b7a3d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
