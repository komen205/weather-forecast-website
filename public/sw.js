if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return r[e]||(n=new Promise((async n=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},n=(n,r)=>{Promise.all(n.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(n)};self.define=(n,i,c)=>{r[n]||(r[n]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+n.slice(1)};return Promise.all(i.map((n=>{switch(n){case"exports":return r;case"module":return s;default:return e(n)}}))).then((e=>{const n=c(...e);return r.default||(r.default=n),r}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WE3OUOjCn_pndExQrPt0Q/_buildManifest.js",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/WE3OUOjCn_pndExQrPt0Q/_ssgManifest.js",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/chunks/391-9ad07238bd9531907ab2.js",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/chunks/433-6a99ebc49641873412c5.js",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/chunks/4a3ea9cd-74c12d400c9c371396b5.js",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/chunks/75fc9c18-827e5b42f5519e83209b.js",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/chunks/commons-2685991d5f9d97cbdc2a.js",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/chunks/framework-25c25f8a2f6f714cbcf1.js",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/chunks/main-759745ae16a9f9f6b55a.js",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/chunks/pages/_app-516ba0ba21d8abf21bdc.js",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/chunks/pages/_error-200f98588e459ae758f1.js",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/chunks/pages/index-a565d1a4e82ae4f5dec0.js",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/chunks/polyfills-3d2c0f0875171918a758.js",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/chunks/webpack-0d3d3c676c668f931dfe.js",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/css/488ed8f02941ba49a494.css",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/_next/static/css/78172b04e865dc13b4db.css",revision:"WE3OUOjCn_pndExQrPt0Q"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/manifest.json",revision:"c174e1b32e968b27013ad1acdaa36787"},{url:"/profilepic.webp",revision:"db057fac955718a9f2a8a274efc68028"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"},{url:"/video.mp4",revision:"4e6ba3e6b422daab37b68848112f81af"},{url:"/weather_icon_set/chanceflurries.png",revision:"db7211c2589089d65ba2d778044dceeb"},{url:"/weather_icon_set/chancerain.png",revision:"66e9bd9110f42939da00d676a93370e9"},{url:"/weather_icon_set/chancesleet.png",revision:"fdae28480cf83200b6271e1a8b298fc9"},{url:"/weather_icon_set/chancesnow.png",revision:"eef6ec4f10ce263d1fddc60d501f4dc5"},{url:"/weather_icon_set/chancestorm.png",revision:"013cc3aef73b1a67a7c9984736089b5f"},{url:"/weather_icon_set/clear.png",revision:"d8356ac39feb7d603276090c61e65b2c"},{url:"/weather_icon_set/clearnight.png",revision:"352e2036ab6298c8fdf5d2d59c7b148a"},{url:"/weather_icon_set/cloudy.png",revision:"c819e95a6f14e0774dbac47907dc1f43"},{url:"/weather_icon_set/cloudynight.png",revision:"062070e75b9b690cdde7e83a51066a49"},{url:"/weather_icon_set/cloudywindy.png",revision:"e6b30f8c10af28618dd67bfe95575929"},{url:"/weather_icon_set/cloudywindy02.png",revision:"66c4b96ad74d47928e950766c87c2404"},{url:"/weather_icon_set/cloundysnow.png",revision:"9017956113ca8176819c8d03e6cdf9ca"},{url:"/weather_icon_set/flurries.png",revision:"0b840d78d2f30e0192b17301e5c00c52"},{url:"/weather_icon_set/fog.png",revision:"425085261cd2576e70f564809ae52662"},{url:"/weather_icon_set/freezing.png",revision:"1d673b2881030c3046137ba3d8afbeb9"},{url:"/weather_icon_set/freezingrain.png",revision:"e5d3df4775ab5e6bd239f74bf8c25068"},{url:"/weather_icon_set/freezingsnow.png",revision:"a1c8bcbbc9ae88fd850c7ff4568ecccc"},{url:"/weather_icon_set/frost.png",revision:"0585789d90f24333df65a32c5406d23d"},{url:"/weather_icon_set/hazy.png",revision:"2f34a77d41e52538bf57f58d455bf9bc"},{url:"/weather_icon_set/hazyfreezing.png",revision:"b330084672a00f5fac8cc3b25da439a2"},{url:"/weather_icon_set/hazysnow.png",revision:"a810c4288b93ea4d36c328c17e9dc4a2"},{url:"/weather_icon_set/hot01.png",revision:"fad0b37dc039824c5de6b96f9db4b76e"},{url:"/weather_icon_set/hot02.png",revision:"c9e2d6d646fd038118553ff394dbc504"},{url:"/weather_icon_set/mostlysunny.png",revision:"6aa64d436a84e09f9c7141f6b53a29f9"},{url:"/weather_icon_set/partlycloudy.png",revision:"fc7a2bf1fa0e8d58eb2b2536e55569fa"},{url:"/weather_icon_set/partlycloudynight.png",revision:"9ae9bbcc68f44ce083ac9b02e5f1db02"},{url:"/weather_icon_set/partlysunny.png",revision:"98024e160215f90dc8191b3a2b7616f2"},{url:"/weather_icon_set/partysunnyrain.png",revision:"e5e784541525ee486f7b0c6187392c11"},{url:"/weather_icon_set/rain01.png",revision:"a3f53cb78140bd1db6f4e3cec48723e6"},{url:"/weather_icon_set/rain02.png",revision:"b4a46651327e9772f8b4d94104da9d6f"},{url:"/weather_icon_set/rain03.png",revision:"1323e81155fcf195b09c0467ec98be3b"},{url:"/weather_icon_set/rainbow.png",revision:"2b6f48e95622d1f05fd125446d533f8c"},{url:"/weather_icon_set/rainnight.png",revision:"488025aa761e2dcfee3e1f0c35503de7"},{url:"/weather_icon_set/scatteredclouds.png",revision:"ebf405ed6d6345efbea3dbf042f61daa"},{url:"/weather_icon_set/sleet.png",revision:"0305a5c2cea5488dc0efaebde8105fc9"},{url:"/weather_icon_set/snow.png",revision:"7a79d4ce3786b06cd073def1bbd5d22b"},{url:"/weather_icon_set/snow01.png",revision:"74cf42f0de8195344a4bd1181483c2d8"},{url:"/weather_icon_set/snownight.png",revision:"24ffc4012742b17ebc595d2ac9e5c76e"},{url:"/weather_icon_set/storms.png",revision:"521968aa48854a39f5459a824993e63e"},{url:"/weather_icon_set/thunder.png",revision:"f564c538ebfffc9f68c4a34bfdc3be46"},{url:"/weather_icon_set/thunderstorms01.png",revision:"ee733ab58b64c6950d5083eeda9c3c71"},{url:"/weather_icon_set/thunderstorms02.png",revision:"dc0cad5e99f7467c0291b4cf5dd979f4"},{url:"/weather_icon_set/unknown.png",revision:"e0769259d1ae9466521cabdbc4a7add2"},{url:"/weather_icon_set/windy.png",revision:"ba74dd5579cfbfbfeae6ee9614916d59"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
