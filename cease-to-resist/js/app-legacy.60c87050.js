(function(t){function e(e){for(var a,o,r=e[0],c=e[1],h=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,h||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function o(t){return r.p+"js/"+({}[t]||t)+"-legacy."+{"chunk-2d0e264a":"0a4d2675","chunk-2d0e6cd6":"9db64898","chunk-2d22a1b8":"c7487fbc"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=o(t);var h=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(d);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",h.name="ChunkLoadError",h.type=a,h.request=n,s[1](h)}i[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],h=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=h;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1189:function(t,e,s){var a={"./canvasbg1.mp4":"1f51","./canvasbg2.mp4":"6023","./gameover.mp4":"a094","./menu.mp4":"3630","./rings.mp4":"85ce"};function i(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="1189"},"1f51":function(t,e,s){t.exports=s.p+"media/canvasbg1.765e76dc.mp4"},3630:function(t,e,s){t.exports=s.p+"media/menu.e23b0846.mp4"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"app",attrs:{id:"app"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.assetsReady,expression:"!assetsReady"}],staticClass:"progress-container"},[a("b-progress",{attrs:{value:100*t.assetsLoaded/386,size:"is-medium"}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.assetsReady,expression:"assetsReady"}],staticClass:"app-container"},[a("div",{staticClass:"menu-container"},[a("img",{staticClass:"left",attrs:{src:s("e347")}}),a("div",{staticClass:"mid"},[a("span",[t._v(t._s(t.timeMinSec[0]))]),t._v(":"),a("span",[t._v(t._s(t.timeMinSec[1]))])]),a("div",{staticClass:"right"},[a("div",{staticClass:"buttons"},[a("b-button",{attrs:{type:"is-primary","icon-right":"undo-alt",title:"Reset"},on:{click:t.reset}}),a("b-button",{directives:[{name:"show",rawName:"v-show",value:!t.muted,expression:"!muted"}],attrs:{type:"is-info","icon-right":"volume-up",title:"Mute",disabled:t.isios},on:{click:t.mute}}),a("b-button",{directives:[{name:"show",rawName:"v-show",value:t.muted,expression:"muted"}],attrs:{type:"is-info","icon-right":"volume-mute",title:"Unmute"},on:{click:t.unmute}}),a("b-button",{attrs:{type:"is-warning","icon-right":"info",title:"Info"},on:{click:function(e){t.showIno=!0}}})],1)])]),a("div",{staticClass:"game-container"},[a("div",{style:t.computedStyle},[a("div",{staticClass:"stack",style:t.computedStyle},[a("video",{directives:[{name:"show",rawName:"v-show",value:1===t.state&&t.counter<40,expression:"state === 1 && counter < 40"}],ref:"canvasbg1",staticClass:"stack",attrs:{muted:"",loop:""},domProps:{muted:!0}}),a("video",{directives:[{name:"show",rawName:"v-show",value:1===t.state&&t.counter>39,expression:"state === 1 && counter > 39"}],ref:"canvasbg2",staticClass:"stack",attrs:{muted:"",loop:""},domProps:{muted:!0}})]),a("div",{staticClass:"stack",style:t.computedStyle,attrs:{id:"konvacanvas"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.state,expression:"state === 0"}],staticClass:"stack startmenu",style:t.computedStyle},[a("div",{staticClass:"center"},[a("div",{staticClass:"startmenu-text is-size-4-widescreen is-size-5-desktop is-size-6-touch"},[t._v(" Click on the hypnotic rings to keep your mind clear. ")]),a("div",{staticClass:"startmenu-button center"},[a("b-button",{attrs:{type:"is-primary"},on:{click:t.start}},[t._v("Start")])],1)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.state||2===t.state,expression:"state === 1 || state === 2"}],staticClass:"stack rings",style:t.opacity},[a("video",{ref:"rings",attrs:{muted:"",loop:""},domProps:{muted:!0}})])]),a("div",{staticClass:"mid"}),a("div",{style:t.computedStyle},[a("div",{staticClass:"stack",style:t.computedStyle},[a("video",{directives:[{name:"show",rawName:"v-show",value:0===t.state,expression:"state === 0"}],ref:"menu",attrs:{muted:"",loop:""},domProps:{muted:!0}}),a("img",{directives:[{name:"show",rawName:"v-show",value:1===t.state,expression:"state === 1"}],attrs:{src:t.imageSrcGulp}}),a("video",{directives:[{name:"show",rawName:"v-show",value:2===t.state,expression:"state === 2"}],ref:"gameover"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.state,expression:"state === 2"}],staticClass:"stack gameover",style:Object.assign({},t.computedStyle,{opacity:t.showGameOver?1:0})},[a("div",{staticClass:"startmenu-text is-size-2-widescreen is-size-3-desktop is-size-4-touch has-text-weight-bold"},[t._v(" GAME OVER ")]),a("div",{staticClass:"startmenu-text is-size-3-widescreen is-size-4-desktop is-size-5-touch"},[t._v(" You won't be here in the morning. ")])])])])]),a("b-modal",{model:{value:t.showIno,callback:function(e){t.showIno=e},expression:"showIno"}},[a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Cease to Resist v0.4.1 (beta)")]),a("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){t.showIno=!1}}})]),a("section",{staticClass:"modal-card-body"},[a("div",{staticClass:"is-size-5 has-text-weight-bold"},[t._v("Made by Taro")]),a("div",{staticClass:"is-flex is-flex-direction-row is-align-items-center"},[a("b-icon",{attrs:{pack:"fab",icon:"twitter-square",size:"is-large"}}),a("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://twitter.com/Tarolewd",target:"_blank"}},[t._v("@Tarolewd")])],1),a("div",{staticClass:"is-flex is-flex-direction-row is-align-items-center"},[a("b-icon",{attrs:{pack:"fab",icon:"discord",size:"is-large"}}),a("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://discord.com/invite/V2EKfyDpV6",target:"_blank"}},[t._v("Kaa's Treetop")])],1),a("div",{staticClass:"is-size-5 has-text-weight-bold mt-4"},[t._v("Sources")]),a("div",{staticClass:"content"},[a("ul",{staticClass:"mt-0"},[a("li",[t._v("'The Jungle Book' belongs to Disney")]),a("li",[t._v("'Kaa ASMR' by "),a("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.youtube.com/channel/UCdFPB-7oRVyT74kBaDwid5Q",target:"_blank"}},[t._v("m5a5e5")])]),a("li",[t._v("'Hypnotic Rings' by "),a("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.youtube.com/channel/UC8xGQOErVZSlM3PRHjoMe0A",target:"_blank"}},[t._v("K VFX")])])])])]),a("footer",{staticClass:"modal-card-foot"})])])],1)},n=[],o=s("362d"),r=s.n(o),c={name:"App",data:function(){return{bodyWidth:0,bodyHeight:0,konvaCache:{},state:0,counter:0,time:0,sounds:{},images:{},assetsLoaded:0,timeouts:{},muted:!1,showIno:!1,showGameOver:!1,isios:!1,intervall:1e3}},computed:{timeMinSec:function(){let t=Math.floor(this.time/60),e=this.time-60*t;return t<10&&(t="0"+t),e<10&&(e="0"+e),[t,e]},dimensions:function(){const t=Math.floor((this.bodyWidth-35)/2),e=Math.floor(t/1872*1072);return[t,e]},computedStyle:function(){return{width:this.dimensions[0]+"px",height:this.dimensions[1]+"px"}},opacity:function(){let t=0;return 2===this.state?t=1:this.counter>19&&(t=1*(this.counter-20)/90),{opacity:t,width:this.dimensions[0]+"px",height:this.dimensions[1]+"px"}},imageSrcGulp:function(){const t=this.counter>109?109:this.counter;return this.images.framesGulp&&this.images.framesGulp.length>0?this.images.framesGulp[t].src:""},assetsReady:function(){return 386===this.assetsLoaded}},watch:{dimensions:function(){this.konvaCache.stage&&(this.konvaCache.stage.size({width:this.dimensions[0],height:this.dimensions[1]}),this.redrawRings()),this.konvaCache.ringsAnimation&&(this.bodyWidth<1216?this.konvaCache.ringsAnimation.isRunning()&&this.konvaCache.ringsAnimation.stop():this.konvaCache.ringsAnimation.isRunning()||this.konvaCache.ringsAnimation.start())}},methods:{wait:function(t){return new Promise(e=>setTimeout(e,t))},stopMedia:function(t){t.pause(),t.currentTime=0},updateBodyDimensions:function(){this.bodyWidth=document.body.offsetWidth,this.bodyHeight=document.body.bodyHeight,this.konvaCache.scale=1,this.bodyWidth<1700&&(this.konvaCache.scale=Math.max(this.bodyWidth/1700,.5))},initKonva:async function(){const t=new r.a.Stage({container:"konvacanvas",width:this.dimensions[0],height:this.dimensions[1],name:"stage"});this.konvaCache.stage=t;const e=new r.a.Layer;t.on("mousedown touchstart",t=>{const s=t.target;if(s.name().startsWith("rings")){const s=t.target;this.konvaCache.ringsCollection.delete(s.id()),s.getParent().destroy(),e.batchDraw(),this.counter--}}),t.add(e),this.konvaCache.layer=e;const s=new r.a.Group({width:80,height:80,clipFunc:function(t){t.arc(40,40,39,0,2*Math.PI,!1)},name:"rings-group"});this.konvaCache.ringsGroup=s;const a=new r.a.Image({width:80,height:80,name:"rings"});this.konvaCache.ringsImage=a;const i=new r.a.Animation(()=>{const t=Date.now();if(!(t-this.konvaCache.lastFrameUpdate>=65))return!1;this.konvaCache.ringsCollection.forEach(t=>{t.currentFrame=(t.currentFrame+1)%266,t.ringsImage.image(this.images.framesRings[t.currentFrame])}),this.konvaCache.lastFrameUpdate=t},e);this.konvaCache.ringsAnimation=i,this.konvaCache.ringsIdCounter=0,this.konvaCache.ringsCollection=new Map},initImages:async function(){this.images.framesRings=[];const t=(await s.e("chunk-2d0e6cd6").then(s.t.bind(null,"99ff",3))).default;t.forEach(t=>{const e=new Image;e.addEventListener("load",()=>this.assetsLoaded++,{once:!0}),e.src=t,this.images.framesRings.push(e)}),this.images.framesGulp=[];const e=(await s.e("chunk-2d22a1b8").then(s.t.bind(null,"dfff",3))).default;e.forEach(t=>{const e=new Image;e.addEventListener("load",()=>this.assetsLoaded++,{once:!0}),e.src=t,this.images.framesGulp.push(e)});const a=(await s.e("chunk-2d0e264a").then(s.t.bind(null,"7f05",3))).default;a.forEach(t=>{const e=new Image;e.addEventListener("load",()=>this.assetsLoaded++,{once:!0}),e.src=t,this.images.framesGulp.push(e)})},initSounds:function(){["gulp","ping","asmr","doom","gameover"].forEach(t=>{const e=new Audio;e.preload="auto",e.addEventListener("canplaythrough",()=>this.assetsLoaded++,{once:!0}),e.volume=0,e.loop="asmr"===t,e.src=s("ba5b")(`./${t}.mp3`),e.load(),this.sounds[t]=e}),this.isios=0!==this.sounds.gulp.volume||!0},initVideos:function(){["menu","rings","gameover","canvasbg1","canvasbg2"].forEach(t=>{const e=this.$refs[t];e.preload="auto",e.addEventListener("canplaythrough",()=>this.assetsLoaded++,{once:!0}),"gameover"===t&&e.addEventListener("ended",()=>{this.sounds.gameover.play(),this.showGameOver=!0}),e.autoplay="menu"===t;const a=document.createElement("source");a.setAttribute("src",s("1189")(`./${t}.mp4`)),a.setAttribute("type","video/mp4"),e.appendChild(a),e.load()})},addRings:function(){const t=this.konvaCache.ringsGroup.clone({id:"group-"+this.konvaCache.ringsIdCounter,scaleX:this.konvaCache.scale,scaleY:this.konvaCache.scale,x:Math.random()*(this.konvaCache.stage.width()-80*this.konvaCache.scale),y:Math.random()*(this.konvaCache.stage.height()-80*this.konvaCache.scale)}),e=`group-${this.konvaCache.ringsIdCounter}-image`,s=Math.floor(266*Math.random()),a=this.konvaCache.ringsImage.clone({id:e,image:this.images.framesRings[s]});t.add(a),this.konvaCache.layer.add(t),this.konvaCache.layer.batchDraw(),this.konvaCache.ringsCollection.set(e,{currentFrame:s,ringsImage:a}),this.konvaCache.ringsIdCounter++,this.counter++},redrawRings:function(){const t=this.konvaCache.layer.getChildren();t.each(t=>{t.scaleX(this.konvaCache.scale),t.scaleY(this.konvaCache.scale),t.x(Math.random()*(this.konvaCache.stage.width()-80*this.konvaCache.scale)),t.y(Math.random()*(this.konvaCache.stage.height()-80*this.konvaCache.scale))}),this.konvaCache.layer.batchDraw()},running:function(){1===this.state&&(this.time>0&&this.time%5===0&&(this.intervall=1e3-Math.floor(Math.log(this.time/5+1)/Math.log(3)*300)),this.timeouts.running=setTimeout(()=>{1===this.state&&(this.addRings(),this.counter<110?(92===this.counter&&this.sounds.gulp.play(),this.counter>58&&(this.sounds.asmr.volume=.7-.013*(this.counter-59)),this.counter>39&&(this.$refs.canvasbg2.play(),this.stopMedia(this.$refs.canvasbg1)),this.running()):(this.konvaCache.ringsAnimation.stop(),this.stopMedia(this.$refs.canvasbg2),this.stopMedia(this.sounds.asmr),this.state=2,this.gameOverSequence()))},this.intervall))},gameOverSequence:async function(){this.sounds.ping.play(),await this.wait(2e3),this.$refs.gameover.play()},timer:function(){this.timeouts.timer=setTimeout(()=>{1===this.state&&this.counter<110&&(this.timer(),this.time++)},1e3)},start:function(){if(!this.isios){this.$refs.gameover.volume=0,this.$refs.gameover.play().then(()=>{this.stopMedia(this.$refs.gameover),this.$refs.gameover.volume=.9}).catch(()=>null);const t=Object.entries(this.sounds);for(let e=0;e<t.length;e++){const[s,a]=t[e];a.play().then(()=>{"asmr"!==s&&this.stopMedia(a),a.volume="asmr"===s?.7:1}).catch(()=>null)}}this.stopMedia(this.$refs.menu),this.$refs.rings.play(),this.$refs.canvasbg1.play(),this.state=1,this.addRings(),this.konvaCache.lastFrameUpdate=Date.now(),this.bodyWidth>1215&&this.konvaCache.ringsAnimation.start(),this.running(),this.timer()},reset:function(){this.timeouts.running&&(clearTimeout(this.timeouts.running),this.timeouts.running=null),this.timeouts.timer&&(clearTimeout(this.timeouts.timer),this.timeouts.timer=null),this.konvaCache.layer.destroyChildren(),this.konvaCache.layer.batchDraw(),this.stopMedia(this.$refs.canvasbg1),this.stopMedia(this.$refs.canvasbg2),this.stopMedia(this.$refs.rings),this.stopMedia(this.$refs.gameover),this.stopMedia(this.sounds.asmr),this.stopMedia(this.sounds.gameover),this.sounds.asmr.volume=.7,this.$refs.menu.play(),this.counter=0,this.time=0,this.intervall=1e3,this.konvaCache.ringsIdCounter=0,this.konvaCache.ringsCollection=new Map,this.showGameOver=!1,this.state=0},mute:function(){this.$refs.gameover.muted=!0,Object.values(this.sounds).forEach(t=>{t.muted=!0}),this.muted=!0},unmute:function(){this.$refs.gameover.muted=!1,Object.values(this.sounds).forEach(t=>{t.muted=!1}),this.muted=!1}},mounted:async function(){this.updateBodyDimensions(),window.addEventListener("resize",this.updateBodyDimensions),this.initImages(),this.initSounds(),this.initVideos(),this.initKonva(),this.isios&&this.$buefy.dialog.alert({title:"Limited browser support",message:"Some features (e.g. audio, Game Over sequence) are not available.",type:"is-danger",ariaRole:"alertdialog",ariaModal:!0})},beforeDestroy(){window.removeEventListener("resize",this.updateBodyDimensions)}},h=c,d=(s("5c0b"),s("2877")),u=Object(d["a"])(h,i,n,!1,null,null,null),m=u.exports,l=s("289d"),p=s("ecee"),v=s("c074"),g=s("f2d1"),f=s("ad3d");s("944d");p["c"].add(v["d"],v["c"],v["b"],v["a"],g["a"],g["b"]),a["a"].component("vue-fontawesome",f["a"]),a["a"].use(l["a"],{defaultIconComponent:"vue-fontawesome",defaultIconPack:"fas"}),a["a"].config.productionTip=!1,new a["a"]({render:t=>t(m)}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},6023:function(t,e,s){t.exports=s.p+"media/canvasbg2.dd630599.mp4"},8074:function(t,e,s){t.exports=s.p+"media/gulp.5db53c45.mp3"},"85ce":function(t,e,s){t.exports=s.p+"media/rings.168c5f0b.mp4"},9310:function(t,e,s){t.exports=s.p+"media/gameover.5ce14a65.mp3"},"944d":function(t,e,s){},"9c0c":function(t,e,s){},a094:function(t,e,s){t.exports=s.p+"media/gameover.64a74463.mp4"},ba5b:function(t,e,s){var a={"./asmr.mp3":"bb5d","./doom.mp3":"c39d","./gameover.mp3":"9310","./gulp.mp3":"8074","./ping.mp3":"c11c"};function i(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="ba5b"},bb5d:function(t,e,s){t.exports=s.p+"media/asmr.1ba53345.mp3"},c11c:function(t,e,s){t.exports=s.p+"media/ping.eabf6fcc.mp3"},c39d:function(t,e,s){t.exports=s.p+"media/doom.8d8d742a.mp3"},e347:function(t,e,s){t.exports=s.p+"img/logo.a6356f3a.svg"}});
//# sourceMappingURL=app-legacy.60c87050.js.map