import{_ as U,r as f,m as j,q,o as l,c as r,a as s,b as w,F as x,s as S,t as E,w as I,j as B,f as P,x as z,n as D,p as F,g as N}from"./index-12dd8226.js";import{M as O}from"./bootstrap.esm-1054115b.js";const G=""+new URL("firstencounter/languagetracks/firstencounter-noaudio-poster.webp",import.meta.url).href,H=""+new URL("firstencounter/languagetracks/firstencounter-noaudio.mp4",import.meta.url).href;const c=y=>(F("data-v-f5e0c84a"),y=y(),N(),y),Q=c(()=>s("div",{class:"fs-3 text-light"},"First Encounter",-1)),X=c(()=>s("div",{class:"fs-4"},"Language Tracks",-1)),J={class:"d-flex flex-row justify-content-center align-items-center flex-wrap my-1",style:{"margin-right":"-0.25rem !important","margin-left":"-0.25rem !important"}},K=["onClick"],W=["src"],Y={class:"video-container"},Z={class:"language-name-container"},ee={key:0,class:"video-container-overlay"},se=c(()=>s("div",{class:"fs-4 mt-5"},"Select a language.",-1)),te=[se],ae={key:1,class:"video-container-overlay"},ne={class:"fs-4 my-5"},oe=c(()=>s("div",{class:"spinner-border"},null,-1)),ie={class:"mt-2 d-flex flex-row justify-content-center"},le=["href","download"],re=c(()=>s("i",{class:"bi bi-download"},null,-1)),ce=[re],de={class:"card p-2 mb-2 d-flex flex-row"},ue=c(()=>s("span",{class:"me-1 icon-vol"},[s("i",{class:"bi bi-volume-off-fill"})],-1)),ve=c(()=>s("span",{class:"ms-1 icon-vol"},[s("i",{class:"bi bi-volume-up-fill"})],-1)),fe=z('<div class="text-center" style="font-size:0.8rem;" data-v-f5e0c84a><div class="alert alert-success d-inline-flex mt-2 p-2" data-v-f5e0c84a><div class="me-2" data-v-f5e0c84a><i class="bi bi-exclamation-circle-fill" data-v-f5e0c84a></i></div><div class="flex-grow-1 text-start" data-v-f5e0c84a>The audio can be slightly offset depending on the device you are using. May not work properly on iOS. </div></div></div>',1),pe={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable",style:{}},me={class:"modal-content"},_e=c(()=>s("div",{class:"modal-header"},[s("h1",{class:"modal-title fs-5"},"Select Languages"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),he={class:"modal-body p-0"},ye=["onClick"],be={class:"flag-container me-2"},ge=["src"],Le={class:"modal-footer"},ke={__name:"LanguageTracks",setup(y){const L=f(null),T=f(null);let b=null;const n=f(null),g=f(50),d=f(-1);let m=!1,i=null;const u=new Map,_=new Map,v=f(["english","german","japanese","swedish","french","portuguese","spanish","dutch","arabic_egyptian","bulgarian","croatian","danish","korean","finnish","norwegian","hungarian","icelandic","italian","chinese","russian","slovak","chinese_taiwan","tamil","telugu","ukrainian","arabic_qatar"].sort()),h=f([]),k=e=>e?e==="arabic_egyptian"?"Arabic (Egypt)":e==="arabic_qatar"?"Arabic (Qatar)":e==="chinese"?"Chinese (Standard Mandarin)":e==="chinese_taiwan"?"Chinese (Taiwanese Mandarin)":`${e[0].toUpperCase()}${e.slice(1)}`:"",R=()=>{v.value.length<=0||b.show()},$=e=>{h.value.push(e),h.value.sort(),v.value=v.value.filter(a=>a!==e),n.value||C(e)},V=()=>{h.value.push(...v.value),h.value.sort(),v.value=[],b.hide()},C=e=>{if(n.value===e)return;const a=m,t=L.value;if(t.pause(),i&&i.pause(),u.has(e)){const o=u.get(e);o.addEventListener("canplay",()=>{o.addEventListener("canplaythrough",()=>{n.value===e&&(a&&(t.play(),o.play()),d.value=1)},{once:!0}),u.set(e,o),n.value===e&&(d.value=1),o.currentTime=t.currentTime},{once:!0}),o.load()}else if(!_.has(e)){d.value=0;const o=new XMLHttpRequest;o.open("GET",`./assets/firstencounter/languagetracks/languages/${e}.m4a`,!0),o.responseType="blob",o.onload=({target:M})=>{if(M.status==200){const p=new Audio(URL.createObjectURL(M.response));p.addEventListener("canplay",()=>{p.addEventListener("canplaythrough",()=>{n.value===e&&(a&&(t.play(),p.play()),d.value=1)},{once:!0}),u.set(e,p),_.delete(e),n.value===e&&(d.value=1),p.currentTime=t.currentTime},{once:!0}),p.load()}},o.send(),_.set(e,o)}n.value=e},A=()=>{i&&(i.volume=g.value/100)};return j(()=>{const e=L.value;e.addEventListener("canplaythrough",()=>{e.controls=!0}),e.addEventListener("play",()=>{const a=u.get(n.value);a.volume=g.value/100,a.paused&&a.play(),i=a,m=!0}),e.addEventListener("pause",()=>{i&&i.pause(),m=!1}),e.addEventListener("ended",()=>{m=!1}),e.addEventListener("timeupdate",()=>{if(!i||Math.abs(e.currentTime-i.currentTime)<=.5)return;const a=m,t=n.value;e.pause(),i.pause(),i.addEventListener("canplaythrough",()=>{n.value===t&&a&&(e.play(),i.play())},{once:!0}),i.currentTime=e.currentTime}),e.load(),b=new O(T.value)}),q(()=>{_.forEach(e=>{e.abort()}),_.clear(),u.forEach(e=>{e.src=null}),u.clear()}),(e,a)=>(l(),r(x,null,[Q,X,s("div",J,[v.value.length>0?(l(),r("button",{key:0,type:"button",class:"btn btn-success ms-1 me-2 my-2",onClick:R},"Select Languages")):w("",!0),(l(!0),r(x,null,S(h.value,t=>(l(),r("div",{class:D(["flag-container flag-container-page mx-1 my-1",{"flag-container-page-active":n.value===t}]),key:t,onClick:o=>C(t)},[s("img",{class:"flag",src:`./assets/flags/${t}.svg`},null,8,W)],10,K))),128))]),s("div",Y,[s("video",{ref_key:"videoRef",ref:L,class:"d-block z-0",muted:"",disableRemotePlayback:"",poster:G,preload:"auto",src:H},null,512),s("div",Z,E(k(n.value)),1),d.value===-1?(l(),r("div",ee,te)):w("",!0),d.value===0?(l(),r("div",ae,[s("div",ne,"Loading "+E(k(n.value))+"...",1),oe])):w("",!0)]),s("div",ie,[s("a",{class:"card p-2 me-2 mb-2 dl-btn",href:`./assets/firstencounter/languagetracks/languages/${n.value}.m4a`,role:"button",download:`firstencounter-${n.value}`},ce,8,le),s("div",de,[ue,I(s("input",{type:"range",class:"form-range",min:"0",max:"100",step:"1","onUpdate:modelValue":a[0]||(a[0]=t=>g.value=t),onInput:A,style:{width:"200px"}},null,544),[[B,g.value]]),ve])]),fe,s("div",{ref_key:"modalRef",ref:T,class:"modal fade"},[s("div",pe,[s("div",me,[_e,s("div",he,[(l(!0),r(x,null,S(v.value,t=>(l(),r("div",{key:t,class:"d-flex align-items-center border-bottom px-2 py-1 modal-language-container",onClick:o=>$(t)},[s("div",be,[s("img",{class:"flag",src:`./assets/flags/${t}.svg`,style:{"border-radius":"3px"}},null,8,ge)]),s("div",null,E(k(t)),1)],8,ye))),128))]),s("div",Le,[s("button",{type:"button",class:"btn btn-secondary",onClick:a[1]||(a[1]=t=>P(b).hide())},"Close"),s("button",{type:"button",class:"btn btn-success",onClick:V},"Select All")])])])],512)],64))}},Ee=U(ke,[["__scopeId","data-v-f5e0c84a"]]);export{Ee as default};
