(function(t){function e(e){for(var i,n,r=e[0],c=e[1],d=e[2],u=0,h=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&h.push(a[n][0]),a[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,d||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},a={app:0},o=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0411":function(t,e,s){t.exports=s.p+"img/sprite-2.630001b0.webp"},"0795":function(t,e,s){var i={"./sprite-0.webp":"8021","./sprite-1.webp":"3189","./sprite-2.webp":"4baa","./sprite-3.webp":"4759","./sprite-4.webp":"0c9d"};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="0795"},"0c9d":function(t,e,s){t.exports=s.p+"img/sprite-4.678c0ea0.webp"},3189:function(t,e,s){t.exports=s.p+"img/sprite-1.1bd3e3e0.webp"},3630:function(t,e,s){t.exports=s.p+"media/menu.fa2af664.mp4"},4759:function(t,e,s){t.exports=s.p+"img/sprite-3.1c6c0014.webp"},4935:function(t,e,s){t.exports=s.p+"img/rings-2.ed029058.gif"},"4baa":function(t,e,s){t.exports=s.p+"img/sprite-2.b1d7f136.webp"},5541:function(t,e,s){var i={"./rings-0.gif":"7287","./rings-1.gif":"5962","./rings-2.gif":"4935"};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="5541"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"app",attrs:{id:"app"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.loaded,expression:"!loaded"}],staticClass:"progress-container"},[i("img",{staticClass:"load-logo",attrs:{src:s("e347")}}),i("b-progress",{attrs:{value:100*t.assetsLoaded/23,size:"is-medium"}}),i("div",[t._v(t._s(this.assetsLoaded)+" / 23")])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"app-container"},[i("div",{staticClass:"menu-container"},[i("img",{staticClass:"left",attrs:{src:s("e347")}}),i("div",{staticClass:"mid"},[i("span",[t._v(t._s(t.timeMinSec[0]))]),t._v(":"),i("span",[t._v(t._s(t.timeMinSec[1]))])]),i("div",{staticClass:"right"},[i("div",{staticClass:"buttons"},[i("b-button",{attrs:{type:"is-primary",size:"is-small","icon-right":"undo-alt",title:"Reset"},on:{click:t.reset}}),i("b-button",{directives:[{name:"show",rawName:"v-show",value:!t.muted,expression:"!muted"}],attrs:{type:"is-info",size:"is-small","icon-right":"volume-up",title:"Mute",disabled:t.isios},on:{click:t.mute}}),i("b-button",{directives:[{name:"show",rawName:"v-show",value:t.muted,expression:"muted"}],attrs:{type:"is-info",size:"is-small","icon-right":"volume-mute",title:"Unmute"},on:{click:t.unmute}}),i("b-button",{attrs:{type:"is-warning",size:"is-small","icon-right":"info",title:"Info"},on:{click:function(e){t.showInfo=!0}}})],1)])]),i("div",{staticClass:"game-container"},[i("div",{ref:"stack",staticClass:"stack",style:t.computedStyle},[i("video",{directives:[{name:"show",rawName:"v-show",value:0===t.state,expression:"state === 0"}],ref:"menuVid",staticClass:"item",style:t.computedStyle,attrs:{autoplay:"",muted:"",playsinline:"",loop:"",preload:"auto",draggable:"false"},domProps:{muted:!0}},[i("source",{attrs:{src:s("3630"),type:"video/mp4"}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.state,expression:"state === 0"}],staticClass:"startmenu"},[i("div",{staticClass:"mb-2"},[t._v("Click on the hypnotic rings to keep your mind clear.")]),i("b-button",{staticClass:"startmenu-button",attrs:{type:"is-light",title:"Start"},on:{click:t.start}},[t._v("Start")])],1),i("canvas",{directives:[{name:"show",rawName:"v-show",value:1===t.state,expression:"state === 1"}],ref:"canvasProgress",staticClass:"item",style:t.computedStyle,attrs:{width:t.dimensions[0],height:t.dimensions[1],draggable:"false"}}),i("canvas",{directives:[{name:"show",rawName:"v-show",value:1===t.state,expression:"state === 1"}],ref:"canvasKaa",staticClass:"item",style:[t.computedStyle,t.kaaOpacity],attrs:{width:t.dimensions[0],height:t.dimensions[1],draggable:"false"}}),i("video",{directives:[{name:"show",rawName:"v-show",value:2===t.state,expression:"state === 2"}],ref:"gameoverVid",staticClass:"item",style:[t.computedStyle],attrs:{muted:"",playsinline:"",loop:"",preload:"auto",draggable:"false"},domProps:{muted:!0}},[i("source",{attrs:{src:s("a094"),type:"video/mp4"}})]),i("canvas",{directives:[{name:"show",rawName:"v-show",value:t.state>0,expression:"state > 0"}],ref:"canvasRings",staticClass:"item",style:[t.computedStyle,t.ringsOpacity],attrs:{width:t.dimensions[0],height:t.dimensions[1],draggable:"false"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.state,expression:"state === 1"}],ref:"rings",staticClass:"item",staticStyle:{"z-index":"10"},style:[t.computedStyle,t.ringsGifOpacity],attrs:{draggable:"false"}})])])]),i("b-modal",{attrs:{"has-modal-card":""},model:{value:t.showInfo,callback:function(e){t.showInfo=e},expression:"showInfo"}},[i("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[t._v("Cease to Resist v"+t._s(t.version))]),i("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){t.showInfo=!1}}})]),i("section",{staticClass:"modal-card-body"},[i("div",{staticClass:"is-size-5 has-text-weight-bold"},[t._v("Difficulty")]),i("div",[i("div",{staticClass:"container-slider"},[i("b-slider",{attrs:{min:.1,max:1.9,step:.1,tooltip:!1},model:{value:t.speed,callback:function(e){t.speed=e},expression:"speed"}},[i("b-slider-tick",{attrs:{value:.1}},[t._v("Easy")]),i("b-slider-tick",{attrs:{value:1}},[t._v("Medium")]),i("b-slider-tick",{attrs:{value:1.9}},[t._v("Hard")])],1)],1)]),i("div",{staticClass:"is-size-5 has-text-weight-bold mt-4"},[t._v("Made by Taro")]),i("div",{staticClass:"is-flex is-flex-direction-row is-align-items-center"},[i("b-icon",{attrs:{pack:"fab",icon:"twitter-square",size:"is-large"}}),i("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://twitter.com/Tarolewd",target:"_blank"}},[t._v("@Tarolewd")])],1),i("div",{staticClass:"is-flex is-flex-direction-row is-align-items-center"},[i("b-icon",{attrs:{pack:"fab",icon:"discord",size:"is-large"}}),i("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://discord.com/invite/V2EKfyDpV6",target:"_blank"}},[t._v("Kaa's Treetop")])],1),i("div",{staticClass:"is-size-5 has-text-weight-bold mt-4"},[t._v("Sources")]),i("div",{staticClass:"content"},[i("ul",{staticClass:"mt-0"},[i("li",[t._v("'The Jungle Book' belongs to Disney")]),i("li",[t._v("'Kaa ASMR' by "),i("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.youtube.com/channel/UCdFPB-7oRVyT74kBaDwid5Q",target:"_blank"}},[t._v("m5a5e5")])]),i("li",[t._v("'Hypnotic Rings' by "),i("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.youtube.com/channel/UC8xGQOErVZSlM3PRHjoMe0A",target:"_blank"}},[t._v("K VFX")])])])])]),i("footer",{staticClass:"modal-card-foot"})])])],1)},o=[],n={name:"App",data:function(){return{version:"1.0.0",speed:1,bodyWidth:0,bodyHeight:0,canvas:{},state:0,counter:0,time:0,treshholds:{progress:!1,rings:!1},sounds:{},videos:{},images:{},rings:new Set,assetsLoaded:0,loaded:!1,timeouts:{},muted:!1,showInfo:!1,isios:!1,intervall:1e3,computedStyle:{},dimensions:[0,0],ringsScale:1,lastCounter:-1,lastRingsFrame:0,lastKaaFrame:0,frameKaa:0,frameRings:0}},computed:{timeMinSec:function(){let t=Math.floor(this.time/60),e=this.time-60*t;return t<10&&(t="0"+t),e<10&&(e="0"+e),[t,e]},kaaOpacity:function(){return{opacity:.2+this.counter/150}},ringsOpacity:function(){return{opacity:this.counter<9&&!this.treshholds.rings?0:Math.max(.005,(this.counter-10)/200)}},ringsGifOpacity:function(){return{opacity:1-this.counter/77}}},watch:{assetsLoaded:async function(){this.assetsLoaded>21&&(await this.resizeImages(),this.loaded=!0)},speed:function(){window.localStorage&&(window.localStorage.speed=this.speed)}},methods:{wait:function(t){return new Promise(e=>setTimeout(e,t))},updateBodyDimensions:async function(){this.bodyWidth=document.body.offsetWidth,this.bodyHeight=document.body.offsetHeight;const t=1.7777777777777777;let e=Math.min(1280,Math.floor(this.bodyWidth-8)),s=Math.floor(e*(1/t));s>this.bodyHeight-54&&(s=Math.floor(this.bodyHeight-54),e=Math.floor(s*t)),this.dimensions=[e,s],this.computedStyle={width:e+"px",height:s+"px"},this.loaded&&await this.resizeImages();const i=e/900,a=s/450;this.ringsScale=Math.min(1,Math.min(i,a));const o=Math.floor(80*this.ringsScale);this.rings.forEach(t=>{t.style.left=Math.floor(Math.random()*(e-o))+"px",t.style.top=Math.floor(Math.random()*(s-o))+"px",t.style.width=o+"px",t.style.height=o+"px"})},resizeImages:async function(){const t=this.dimensions[0],e=this.dimensions[1],s=document.createElement("canvas");s.width=t,s.height=e;const i=s.getContext("2d",{alpha:!1});this.images.progressresized=[];for(let a=0;a<5;a++)for(let o=0;o<15;o++){i.drawImage(this.images.progress[a],0,720*o,1280,720,0,0,t,e);const n=await createImageBitmap(s);this.images.progressresized.push(n)}this.images.kaasized=[];for(let a=0;a<4;a++)for(let o=0;o<13;o++){i.drawImage(this.images.kaa[a],0,720*o,1280,720,0,0,t,e);const n=await createImageBitmap(s);this.images.kaasized.push(n)}this.images.ringsresized=[];for(let a=0;a<4;a++)for(let o=0;o<16;o++){i.drawImage(this.images.rings[a],0,720*o,1280,720,0,0,t,e);const n=await createImageBitmap(s);this.images.ringsresized.push(n)}},initImages:async function(){this.images.progress=[];for(let t=0;t<5;t++){const e=document.createElement("img");e.addEventListener("load",()=>this.assetsLoaded++,{once:!0}),e.src=s("0795")(`./sprite-${t}.webp`),this.images.progress.push(e)}this.images.kaa=[];for(let t=0;t<4;t++){const e=document.createElement("img");e.addEventListener("load",()=>this.assetsLoaded++,{once:!0}),e.src=s("afb1")(`./sprite-${t}.webp`),this.images.kaa.push(e)}this.images.rings=[];for(let t=0;t<4;t++){const e=document.createElement("img");e.addEventListener("load",()=>this.assetsLoaded++,{once:!0}),e.src=s("63fa")(`./sprite-${t}.webp`),this.images.rings.push(e)}this.images.ringsgif=[];for(let t=0;t<3;t++){const e=document.createElement("img");e.addEventListener("load",()=>this.assetsLoaded++,{once:!0}),e.style.position="absolute",e.style.borderRadius="50%",e.style.userSelect="none",e.setAttribute("draggable",!1),e.src=s("5541")(`./rings-${t}.gif`),this.images.ringsgif.push(e)}},initSounds:function(){["gulp","ping","asmr","doom"].forEach(t=>{const e=new Audio;e.preload="auto",e.addEventListener("canplaythrough",()=>this.assetsLoaded++,{once:!0}),e.volume=1,e.loop="asmr"===t,e.src=s("ba5b")(`./${t}.mp3`),e.load(),this.sounds[t]=e}),this.isios=1!==this.sounds.gulp.volume},initVideos:function(){["menu","gameover"].forEach(t=>{const e=this.$refs[t+"Vid"];e.addEventListener("canplaythrough",()=>this.assetsLoaded++,{once:!0}),"gameover"===t&&(e.addEventListener("play",async()=>{setTimeout(()=>{this.sounds.doom.play()},500);while(this.counter<210)this.counter=this.counter+3,await this.wait(100)}),e.addEventListener("ended",()=>{this.state=3})),e.load(),this.videos[t]=e})},addRings:async function(){if(this.state<1)return;const t=Math.floor(3*Math.random()),e=this.images.ringsgif[t].cloneNode(),s=Math.floor(80*this.ringsScale);if(e.style.left=Math.floor(Math.random()*(this.dimensions[0]-s))+"px",e.style.top=Math.floor(Math.random()*(this.dimensions[1]-s))+"px",e.style.width=s+"px",e.style.height=s+"px",e.addEventListener("mousedown",t=>{t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),this.rings.delete(e),e.remove(),this.counter=this.counter-1},{once:!0}),e.addEventListener("touchstart",t=>{t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),this.rings.delete(e),e.remove(),this.counter=this.counter-1},{once:!0}),this.$refs.rings.appendChild(e),this.rings.add(e),this.counter=this.counter+1,this.counter>74){try{await Promise.all([this.sounds.ping.play(),this.videos.gameover.play()]),this.rings.forEach(t=>t.remove()),this.rings.clear()}catch(a){console.error(a)}finally{this.state=2}return}this.counter>5&&!this.treshholds.rings&&(this.treshholds.rings=!0),65===this.counter&&this.sounds.gulp.play();const i=Math.ceil((1e3-Math.log(Math.floor(this.time/5)+1)/Math.log(3)*300)/this.speed);setTimeout(this.addRings,i)},startTimer:function(){this.timeouts.timer=setTimeout(()=>{1===this.state&&(this.time++,this.startTimer())},1e3)},initCanvas:function(){this.canvas.progressCtx=this.$refs.canvasProgress.getContext("2d",{alpha:!1}),this.canvas.kaaCtx=this.$refs.canvasKaa.getContext("2d",{alpha:!1}),this.canvas.ringsCtx=this.$refs.canvasRings.getContext("2d",{alpha:!1})},animationFrame:function(){if(0===this.state)return;this.lastCounter!==this.counter&&this.counter<75&&(this.canvas.progressCtx.drawImage(this.images.progressresized[this.counter],0,0),this.lastCounter=this.counter);const t=Date.now();1===this.state&&t-this.lastKaaFrame>70&&(this.canvas.kaaCtx.drawImage(this.images.kaasized[this.frameKaa],0,0),this.frameKaa=(this.frameKaa+1)%52,this.lastKaaFrame=t),t-this.lastRingsFrame>25&&(this.canvas.ringsCtx.drawImage(this.images.ringsresized[this.frameRings],0,0),this.frameRings=(this.frameRings+1)%64,this.lastRingsFrame=t),requestAnimationFrame(this.animationFrame)},start:async function(){Object.values(this.sounds).forEach(t=>{t.muted=!0}),await this.sounds.gulp.play(),await this.sounds.gulp.pause(),await this.sounds.ping.play(),await this.sounds.ping.pause(),await this.sounds.doom.play(),await this.sounds.doom.pause(),Object.values(this.sounds).forEach(t=>{t.muted=this.muted}),await Promise.all([this.videos.menu.pause(),this.sounds.asmr.play()]),this.state=1,this.animationFrame(),this.addRings(),this.startTimer()},reset:async function(){this.rings.forEach(t=>t.remove()),this.rings.clear(),this.counter=0,this.time=0,this.lastCounter=-1,this.lastRingsFrame=0,this.lastKaaFrame=0,this.frameKaa=0,this.frameRings=0,this.treshholds.rings=!1,await Promise.all([this.sounds.doom.pause(),this.sounds.asmr.pause(),this.videos.gameover.pause()]),this.sounds.asmr.currentTime=0,this.videos.gameover.currentTime=0,this.videos.menu.currentTime=0,await this.videos.menu.play(),this.state=0},mute:function(){Object.values(this.sounds).forEach(t=>{t.muted=!0}),this.muted=!0},unmute:function(){Object.values(this.sounds).forEach(t=>{t.muted=!1}),this.muted=!1}},mounted:async function(){this.updateBodyDimensions();let t=null;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(this.updateBodyDimensions,500)}),this.initImages(),this.initSounds(),this.initVideos(),this.initCanvas(),this.isios&&this.$buefy.dialog.alert({title:"Limited browser support",message:"Some features (e.g. audio, Game Over sequence) are not available.",type:"is-danger",ariaRole:"alertdialog",ariaModal:!0})},beforeDestroy(){window.removeEventListener("resize",this.updateBodyDimensions)}},r=n,c=(s("5c0b"),s("2877")),d=Object(c["a"])(r,a,o,!1,null,null,null),l=d.exports,u=s("289d"),h=s("ecee"),p=s("c074"),m=s("f2d1"),f=s("ad3d");s("944d");h["c"].add(p["e"],p["d"],p["c"],p["a"],m["a"],m["b"],p["b"]),i["a"].component("vue-fontawesome",f["a"]),i["a"].use(u["a"],{defaultIconComponent:"vue-fontawesome",defaultIconPack:"fas"}),i["a"].config.productionTip=!1,new i["a"]({render:t=>t(l)}).$mount("#app")},5962:function(t,e,s){t.exports=s.p+"img/rings-1.b52a3c34.gif"},"5c0b":function(t,e,s){"use strict";s("9c0c")},"63fa":function(t,e,s){var i={"./sprite-0.webp":"edd5","./sprite-1.webp":"7652","./sprite-2.webp":"0411","./sprite-3.webp":"6ee4"};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="63fa"},"6ee4":function(t,e,s){t.exports=s.p+"img/sprite-3.bccc896c.webp"},7287:function(t,e,s){t.exports=s.p+"img/rings-0.671de42c.gif"},7652:function(t,e,s){t.exports=s.p+"img/sprite-1.2c4f60f2.webp"},"7e6e":function(t,e,s){t.exports=s.p+"img/sprite-0.264891e3.webp"},8021:function(t,e,s){t.exports=s.p+"img/sprite-0.0cf70247.webp"},8074:function(t,e,s){t.exports=s.p+"media/gulp.5db53c45.mp3"},"944d":function(t,e,s){},"9c0c":function(t,e,s){},a094:function(t,e,s){t.exports=s.p+"media/gameover.ad511c5b.mp4"},afb1:function(t,e,s){var i={"./sprite-0.webp":"7e6e","./sprite-1.webp":"f9db","./sprite-2.webp":"bc0b","./sprite-3.webp":"f5a9"};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="afb1"},ba5b:function(t,e,s){var i={"./asmr.mp3":"bb5d","./doom.mp3":"c39d","./gulp.mp3":"8074","./ping.mp3":"c11c"};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="ba5b"},bb5d:function(t,e,s){t.exports=s.p+"media/asmr.1ba53345.mp3"},bc0b:function(t,e,s){t.exports=s.p+"img/sprite-2.964fc51c.webp"},c11c:function(t,e,s){t.exports=s.p+"media/ping.eabf6fcc.mp3"},c39d:function(t,e,s){t.exports=s.p+"media/doom.8d8d742a.mp3"},e347:function(t,e,s){t.exports=s.p+"img/logo.a6356f3a.svg"},edd5:function(t,e,s){t.exports=s.p+"img/sprite-0.7a0b2b73.webp"},f5a9:function(t,e,s){t.exports=s.p+"img/sprite-3.71b7ffeb.webp"},f9db:function(t,e,s){t.exports=s.p+"img/sprite-1.fb6ca883.webp"}});
//# sourceMappingURL=app-legacy.61721606.js.map