(function(t){function e(e){for(var i,n,r=e[0],c=e[1],d=e[2],u=0,p=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,d||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},a={app:0},o=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0795":function(t,e,s){var i={"./sprite-0.webp":"8021","./sprite-1.webp":"3189","./sprite-2.webp":"4baa","./sprite-3.webp":"4759","./sprite-4.webp":"0c9d","./sprite-5.webp":"caf3","./sprite-6.webp":"9678"};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="0795"},"0c9d":function(t,e,s){t.exports=s.p+"img/sprite-4.e607bae1.webp"},"10e4":function(t,e,s){t.exports=s.p+"img/rings-2.f9867a5b.jpg"},2674:function(t,e,s){t.exports=s.p+"img/rings-13.fb8034a5.jpg"},"27c7":function(t,e,s){t.exports=s.p+"img/rings-7.cfc56751.jpg"},"2afe":function(t,e,s){t.exports=s.p+"img/rings-6.bf27ec72.jpg"},3189:function(t,e,s){t.exports=s.p+"img/sprite-1.8f580900.webp"},3630:function(t,e,s){t.exports=s.p+"media/menu.fa2af664.mp4"},"36e2":function(t,e,s){t.exports=s.p+"img/rings-9.50125a23.jpg"},"41b9":function(t,e,s){t.exports=s.p+"img/rings-12.a84ee01f.jpg"},"430a":function(t,e,s){t.exports=s.p+"img/rings-0.9ffedfac.jpg"},4759:function(t,e,s){t.exports=s.p+"img/sprite-3.cb701ec4.webp"},4903:function(t,e,s){t.exports=s.p+"img/rings-8.9e283181.jpg"},"4afd":function(t,e,s){t.exports=s.p+"media/canvasbg.36e47773.mp4"},"4baa":function(t,e,s){t.exports=s.p+"img/sprite-2.33b0edc3.webp"},"4ec9":function(t,e,s){t.exports=s.p+"img/rings-11.797c30a4.jpg"},"511b":function(t,e,s){t.exports=s.p+"img/rings-1.e11255cf.jpg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"app",attrs:{id:"app"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.assetsReady,expression:"!assetsReady"}],staticClass:"progress-container"},[i("img",{staticClass:"load-logo",attrs:{src:s("e347")}}),i("b-progress",{attrs:{value:100*t.assetsLoaded/30,size:"is-medium"}}),i("div",[t._v(t._s(this.assetsLoaded)+" / 30")])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.assetsReady,expression:"assetsReady"}],staticClass:"app-container"},[i("div",{staticClass:"menu-container"},[i("img",{staticClass:"left",attrs:{src:s("e347")}}),i("div",{staticClass:"mid"},[i("span",[t._v(t._s(t.timeMinSec[0]))]),t._v(":"),i("span",[t._v(t._s(t.timeMinSec[1]))])]),i("div",{staticClass:"right"},[i("div",{staticClass:"buttons"},[i("b-button",{attrs:{type:"is-primary",size:"is-small","icon-right":"undo-alt",title:"Reset"},on:{click:t.reset}}),i("b-button",{directives:[{name:"show",rawName:"v-show",value:!t.muted,expression:"!muted"}],attrs:{type:"is-info",size:"is-small","icon-right":"volume-up",title:"Mute",disabled:t.isios},on:{click:t.mute}}),i("b-button",{directives:[{name:"show",rawName:"v-show",value:t.muted,expression:"muted"}],attrs:{type:"is-info",size:"is-small","icon-right":"volume-mute",title:"Unmute"},on:{click:t.unmute}}),i("b-button",{attrs:{type:"is-warning",size:"is-small","icon-right":"info",title:"Info"},on:{click:function(e){t.showInfo=!0}}})],1)])]),i("div",{staticClass:"game-container"},[i("div",{staticClass:"stack",style:t.computedStyle},[i("video",{directives:[{name:"show",rawName:"v-show",value:0===t.state,expression:"state === 0"}],ref:"menuVid",staticClass:"item",style:t.computedStyle,attrs:{autoplay:"",muted:"",playsinline:"",loop:"",preload:"auto",draggable:"false"},domProps:{muted:!0}},[i("source",{attrs:{src:s("3630"),type:"video/mp4"}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.state,expression:"state === 0"}],staticClass:"startmenu"},[i("div",{staticClass:"mb-2"},[t._v("Click on the hypnotic rings to keep your mind clear.")]),i("b-button",{staticClass:"startmenu-button",attrs:{type:"is-light",title:"Start"},on:{click:t.start}},[t._v("Start")])],1),i("canvas",{directives:[{name:"show",rawName:"v-show",value:t.state>0,expression:"state > 0"}],ref:"canvas",staticClass:"item",style:t.computedStyle,attrs:{width:t.dimensions[0],height:t.dimensions[1],draggable:"false"}}),i("video",{directives:[{name:"show",rawName:"v-show",value:1===t.state,expression:"state === 1"}],ref:"canvasbgVid",staticClass:"item",style:[t.computedStyle,t.canvasbgOpacity],attrs:{muted:"",playsinline:"",loop:"",preload:"auto",draggable:"false"},domProps:{muted:!0}},[i("source",{attrs:{src:s("4afd"),type:"video/mp4"}})]),i("video",{directives:[{name:"show",rawName:"v-show",value:2===t.state,expression:"state === 2"}],ref:"gameoverVid",staticClass:"item",style:[t.computedStyle],attrs:{muted:"",playsinline:"",loop:"",preload:"auto",draggable:"false"},domProps:{muted:!0}},[i("source",{attrs:{src:s("a094"),type:"video/mp4"}})]),i("video",{directives:[{name:"show",rawName:"v-show",value:t.state>0,expression:"state > 0"}],ref:"ringsVid",staticClass:"item",style:[t.computedStyle,t.ringsOpacity],attrs:{muted:"",playsinline:"",loop:"",preload:"auto",draggable:"false"},domProps:{muted:!0}},[i("source",{attrs:{src:s("85ce"),type:"video/mp4"}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.state,expression:"state === 1"}],ref:"rings",staticClass:"item",staticStyle:{"z-index":"10"},style:[t.computedStyle,{opacity:t.opacity}],attrs:{draggable:"false"}})])])]),i("b-modal",{attrs:{"has-modal-card":""},model:{value:t.showInfo,callback:function(e){t.showInfo=e},expression:"showInfo"}},[i("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[t._v("Cease to Resist v"+t._s(t.version))]),i("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){t.showInfo=!1}}})]),i("section",{staticClass:"modal-card-body"},[i("div",{staticClass:"is-size-5 has-text-weight-bold"},[t._v("Difficulty")]),i("div",[i("div",{staticClass:"container-slider"},[i("b-slider",{attrs:{min:.1,max:1.9,step:.1,tooltip:!1},model:{value:t.speed,callback:function(e){t.speed=e},expression:"speed"}},[i("b-slider-tick",{attrs:{value:.1}},[t._v("Easy")]),i("b-slider-tick",{attrs:{value:1}},[t._v("Medium")]),i("b-slider-tick",{attrs:{value:1.9}},[t._v("Hard")])],1)],1)]),i("div",{staticClass:"is-size-5 has-text-weight-bold mt-4"},[t._v("Made by Taro")]),i("div",{staticClass:"is-flex is-flex-direction-row is-align-items-center"},[i("b-icon",{attrs:{pack:"fab",icon:"twitter-square",size:"is-large"}}),i("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://twitter.com/Tarolewd",target:"_blank"}},[t._v("@Tarolewd")])],1),i("div",{staticClass:"is-flex is-flex-direction-row is-align-items-center"},[i("b-icon",{attrs:{pack:"fab",icon:"discord",size:"is-large"}}),i("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://discord.com/invite/V2EKfyDpV6",target:"_blank"}},[t._v("Kaa's Treetop")])],1),i("div",{staticClass:"is-size-5 has-text-weight-bold mt-4"},[t._v("Sources")]),i("div",{staticClass:"content"},[i("ul",{staticClass:"mt-0"},[i("li",[t._v("'The Jungle Book' belongs to Disney")]),i("li",[t._v("'Kaa ASMR' by "),i("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.youtube.com/channel/UCdFPB-7oRVyT74kBaDwid5Q",target:"_blank"}},[t._v("m5a5e5")])]),i("li",[t._v("'Hypnotic Rings' by "),i("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.youtube.com/channel/UC8xGQOErVZSlM3PRHjoMe0A",target:"_blank"}},[t._v("K VFX")])])])])]),i("footer",{staticClass:"modal-card-foot"})])])],1)},o=[],n={name:"App",data:function(){return{version:"1.0.0",speed:1,bodyWidth:0,bodyHeight:0,canvas:{},state:0,counter:0,time:0,treshholds:{progress:!1,rings:!1},sounds:{},videos:{},images:{},rings:new Set,assetsLoaded:0,timeouts:{},muted:!1,showInfo:!1,isios:!1,intervall:1e3,computedStyle:{},dimensions:[0,0],ringsScale:1,lastCounter:-1}},computed:{timeMinSec:function(){let t=Math.floor(this.time/60),e=this.time-60*t;return t<10&&(t="0"+t),e<10&&(e="0"+e),[t,e]},opacity:function(){let t=0;return t=this.state>1?0:1-this.counter/105,t},assetsReady:function(){return this.assetsLoaded>29},canvasbgOpacity:function(){return{opacity:.05+this.counter/300}},ringsOpacity:function(){return{opacity:this.counter<9&&!this.treshholds.rings?0:Math.max(.005,(this.counter-10)/200)}}},watch:{speed:function(){window.localStorage&&(window.localStorage.speed=this.speed)}},methods:{wait:function(t){return new Promise(e=>setTimeout(e,t))},updateBodyDimensions:function(){this.bodyWidth=document.body.offsetWidth,this.bodyHeight=document.body.offsetHeight;const t=1.7777777777777777;let e=Math.min(1280,Math.floor(this.bodyWidth-8)),s=Math.floor(e*(1/t));s>this.bodyHeight-54&&(s=Math.floor(this.bodyHeight-54),e=Math.floor(s*t)),this.dimensions=[e,s],this.computedStyle={width:e+"px",height:s+"px"};const i=e/1024,a=s/576;this.ringsScale=Math.min(1,Math.min(i,a));const o=Math.floor(80*this.ringsScale);this.rings.forEach(t=>{t.style.left=Math.floor(Math.random()*(e-o))+"px",t.style.top=Math.floor(Math.random()*(s-o))+"px",t.style.width=o+"px",t.style.height=o+"px"})},initImages:async function(){this.images.progress=[];for(let t=0;t<7;t++){const e=document.createElement("img");e.addEventListener("load",()=>this.assetsLoaded++,{once:!0}),e.src=s("0795")(`./sprite-${t}.webp`),this.images.progress.push(e)}this.images.rings=[];for(let t=0;t<15;t++){const e=document.createElement("img");e.addEventListener("load",()=>this.assetsLoaded++,{once:!0}),e.style.position="absolute",e.style.borderRadius="50%",e.style.userSelect="none",e.setAttribute("draggable",!1),e.src=s("e4d1")(`./rings-${t}.jpg`),this.images.rings.push(e)}},initSounds:function(){["gulp","ping","asmr","doom"].forEach(t=>{const e=new Audio;e.preload="auto",e.addEventListener("canplaythrough",()=>this.assetsLoaded++,{once:!0}),e.volume=1,e.loop="asmr"===t,e.src=s("ba5b")(`./${t}.mp3`),e.load(),this.sounds[t]=e}),this.isios=1!==this.sounds.gulp.volume},initVideos:function(){["menu","rings","gameover","canvasbg"].forEach(t=>{const e=this.$refs[t+"Vid"];e.addEventListener("canplaythrough",()=>this.assetsLoaded++,{once:!0}),"gameover"===t&&(e.addEventListener("play",async()=>{setTimeout(()=>{this.sounds.doom.play()},500);while(this.counter<210)this.counter=this.counter+3,await this.wait(100)}),e.addEventListener("ended",()=>{this.state=3})),e.load(),this.videos[t]=e})},addRings:async function(){if(this.state<1)return;const t=Math.floor(10*Math.random()),e=this.images.rings[t].cloneNode(),s=Math.floor(80*this.ringsScale);if(e.style.left=Math.floor(Math.random()*(this.dimensions[0]-s))+"px",e.style.top=Math.floor(Math.random()*(this.dimensions[1]-s))+"px",e.style.width=s+"px",e.style.height=s+"px",e.addEventListener("mousedown",t=>{t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),this.rings.delete(e),e.remove(),this.counter=this.counter-1},{once:!0}),e.addEventListener("touchstart",t=>{t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),this.rings.delete(e),e.remove(),this.counter=this.counter-1},{once:!0}),this.$refs.rings.appendChild(e),this.rings.add(e),this.counter=this.counter+1,this.counter>105){try{await Promise.all([this.sounds.ping.play(),this.videos.gameover.play(),this.videos.canvasbg.pause()])}catch(a){console.error(a)}finally{this.state=2}return}this.counter>9&&!this.treshholds.rings&&(this.treshholds.rings=!0),92===this.counter&&this.sounds.gulp.play(),this.counter>35&&!this.treshholds.progress&&(this.treshholds.progress=!0);const i=Math.ceil((1e3-Math.log(Math.floor(this.time/5)+1)/Math.log(3)*300)/this.speed);setTimeout(this.addRings,i)},startTimer:function(){this.timeouts.timer=setTimeout(()=>{1===this.state&&(this.time++,this.startTimer())},1e3)},initCanvas:function(){this.canvas.element=this.$refs.canvas,this.canvas.ctx=this.canvas.element.getContext("2d")},animationFrame:function(){if(!(1!==this.state||this.counter>105)){if(this.lastCounter!==this.counter){const t=this.canvas.element.width,e=this.canvas.element.height,s=this.canvas.ctx,i=Math.min(6,Math.floor(this.counter/15)),a=Math.min(14,this.counter%15);s.drawImage(this.images.progress[i],0,720*a,1280,720,0,0,t,e),this.lastCounter=this.counter}requestAnimationFrame(this.animationFrame)}},start:async function(){Object.values(this.sounds).forEach(t=>{t.muted=!0}),await this.sounds.gulp.play(),await this.sounds.gulp.pause(),await this.sounds.ping.play(),await this.sounds.ping.pause(),await this.sounds.doom.play(),await this.sounds.doom.pause(),Object.values(this.sounds).forEach(t=>{t.muted=this.muted}),await Promise.all([this.videos.menu.pause(),this.videos.canvasbg.play(),this.videos.rings.play(),this.sounds.asmr.play()]),this.state=1,this.animationFrame(),this.addRings(),this.startTimer()},reset:async function(){this.rings.forEach(t=>t.remove()),this.rings.clear(),this.counter=0,this.time=0,this.lastCounter=-1,this.treshholds.progress=!1,this.treshholds.rings=!1,await Promise.all([this.sounds.doom.pause(),this.sounds.asmr.pause(),this.videos.gameover.pause(),this.videos.canvasbg.pause(),this.videos.rings.pause()]),this.sounds.asmr.currentTime=0,this.videos.gameover.currentTime=0,this.videos.canvasbg.currentTime=0,this.videos.rings.currentTime=0,this.videos.menu.currentTime=0,await this.videos.menu.play(),this.state=0},mute:function(){Object.values(this.sounds).forEach(t=>{t.muted=!0}),this.muted=!0},unmute:function(){Object.values(this.sounds).forEach(t=>{t.muted=!1}),this.muted=!1}},mounted:async function(){this.updateBodyDimensions();let t=null;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(this.updateBodyDimensions,500)}),this.initImages(),this.initSounds(),this.initVideos(),this.initCanvas(),window.localStorage&&window.localStorage.speed&&(this.speed=Number(window.localStorage.speed)),this.isios&&this.$buefy.dialog.alert({title:"Limited browser support",message:"Some features (e.g. audio, Game Over sequence) are not available.",type:"is-danger",ariaRole:"alertdialog",ariaModal:!0})},beforeDestroy(){window.removeEventListener("resize",this.updateBodyDimensions)}},r=n,c=(s("5c0b"),s("2877")),d=Object(c["a"])(r,a,o,!1,null,null,null),l=d.exports,u=s("289d"),p=s("ecee"),h=s("c074"),m=s("f2d1"),g=s("ad3d");s("944d");p["c"].add(h["e"],h["d"],h["c"],h["a"],m["a"],m["b"],h["b"]),i["a"].component("vue-fontawesome",g["a"]),i["a"].use(u["a"],{defaultIconComponent:"vue-fontawesome",defaultIconPack:"fas"}),i["a"].config.productionTip=!1,new i["a"]({render:t=>t(l)}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"7b64":function(t,e,s){t.exports=s.p+"img/rings-10.24a48a0c.jpg"},8021:function(t,e,s){t.exports=s.p+"img/sprite-0.0004f5ff.webp"},8074:function(t,e,s){t.exports=s.p+"media/gulp.5db53c45.mp3"},"85ce":function(t,e,s){t.exports=s.p+"media/rings.fb4cb8bc.mp4"},"944d":function(t,e,s){},9678:function(t,e,s){t.exports=s.p+"img/sprite-6.3566b3ce.webp"},"9c0c":function(t,e,s){},a094:function(t,e,s){t.exports=s.p+"media/gameover.ad511c5b.mp4"},b03a:function(t,e,s){t.exports=s.p+"img/rings-5.e0b648df.jpg"},ba5b:function(t,e,s){var i={"./asmr.mp3":"bb5d","./doom.mp3":"c39d","./gulp.mp3":"8074","./ping.mp3":"c11c"};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="ba5b"},bb5d:function(t,e,s){t.exports=s.p+"media/asmr.1ba53345.mp3"},c11c:function(t,e,s){t.exports=s.p+"media/ping.eabf6fcc.mp3"},c39d:function(t,e,s){t.exports=s.p+"media/doom.8d8d742a.mp3"},caf3:function(t,e,s){t.exports=s.p+"img/sprite-5.9f055ed9.webp"},e2f2:function(t,e,s){t.exports=s.p+"img/rings-14.047585d2.jpg"},e347:function(t,e,s){t.exports=s.p+"img/logo.a6356f3a.svg"},e4d1:function(t,e,s){var i={"./rings-0.jpg":"430a","./rings-1.jpg":"511b","./rings-10.jpg":"7b64","./rings-11.jpg":"4ec9","./rings-12.jpg":"41b9","./rings-13.jpg":"2674","./rings-14.jpg":"e2f2","./rings-2.jpg":"10e4","./rings-3.jpg":"fd29","./rings-4.jpg":"f866","./rings-5.jpg":"b03a","./rings-6.jpg":"2afe","./rings-7.jpg":"27c7","./rings-8.jpg":"4903","./rings-9.jpg":"36e2"};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="e4d1"},f866:function(t,e,s){t.exports=s.p+"img/rings-4.e3072313.jpg"},fd29:function(t,e,s){t.exports=s.p+"img/rings-3.a891b9ad.jpg"}});
//# sourceMappingURL=app.3ff930a0.js.map