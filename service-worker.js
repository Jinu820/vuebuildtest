if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const t=e=>n(e,r),l={module:{uri:r},exports:o,require:t};s[r]=Promise.all(c.map((e=>l[e]||t(e)))).then((e=>(i(...e),o)))}}define(["./workbox-8cfb37e8"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ex10"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/chunk-vendors.8d67ba8d.css",revision:null},{url:"/index.html",revision:"03c1580f8bfcc7fe0ac1358b88490d02"},{url:"/js/app.86f0b41b.js",revision:null},{url:"/js/chunk-vendors.6ee62cb2.js",revision:null},{url:"/manifest.json",revision:"49c2d119a875ca5aa35d6da9bd097270"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{}),e.registerRoute(/\.png$/,new e.CacheFirst({cacheName:"png-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.json$/,new e.StaleWhileRevalidate({cacheName:"json-cache",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
