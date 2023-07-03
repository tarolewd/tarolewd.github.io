import{_ as w,u as E,D as V,r as y,H as I,L as i,o as t,c as s,e as g,a as e,G as m,J as b,t as d,K as f,b as l,p as $,h as D}from"./index-d0e0df58.js";import{_ as x}from"./dynamic-import-helper-be004503.js";import{S as R}from"./ScrollUp-6f29ad27.js";import{_ as j}from"./SiteHeader-5d01ac7c.js";const n=r=>($("data-v-35a15e0e"),r=r(),D(),r),L={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 mb-4"},A=["onClick"],O={class:"h-100 card p-1 video-preview-container bg-body-tertiary"},P={class:"d-flex flex-row align-items-start"},T=["src"],S=["src"],N={class:"title"},B=n(()=>e("span",{class:"me-2"},[e("i",{class:"bi bi-play-btn"})],-1)),z={key:2,class:"badge bg-success new-badge"},C=n(()=>e("div",{id:"scroll-up-mark"},null,-1)),F={id:"video-container",class:"pt-3"},H={key:0},U={class:"card p-1 d-flex flex-row align-items-start videoinfo-container mx-auto bg-body-tertiary"},G=["src"],J=["src"],K={class:"title"},M={key:0,class:"fs-3"},q=["href"],Q=n(()=>e("i",{class:"bi bi-twitter"},null,-1)),W=[Q],X=["href"],Y=n(()=>e("i",{class:"bi bi-youtube"},null,-1)),Z=[Y],ee={class:"icon mt-1"},te=n(()=>e("span",{class:"me-2"},[e("i",{class:"bi bi-play-btn"})],-1)),se={class:"video-container mt-2 mx-auto"},oe={key:0,class:"fs-4 mt-3 mb-1"},ae=["src"],re={__name:"Videos",props:{category:String,id:String},setup(r){const v=r,k=E(),p=V(),_=y([]),a=y(null),h=c=>{a.value=c,k.replace({path:`/videos/${v.category}/${c.id}`})};return I(async()=>{var u;if(_.value=(await x(Object.assign({"../../data/videos/edits.js":()=>i(()=>import("./edits-03051ed0.js"),["./edits-03051ed0.js","./creators-00639106.js"],import.meta.url),"../../data/videos/firstencounter-35mm.js":()=>i(()=>import("./firstencounter-35mm-24c35c55.js"),[],import.meta.url),"../../data/videos/firstencounter-ar16to9.js":()=>i(()=>import("./firstencounter-ar16to9-f4e7d49f.js"),[],import.meta.url),"../../data/videos/firstencounter-ar4to3.js":()=>i(()=>import("./firstencounter-ar4to3-a12a3536.js"),[],import.meta.url),"../../data/videos/other.js":()=>i(()=>import("./other-636cedb6.js"),[],import.meta.url),"../../data/videos/secondencounter-35mm.js":()=>i(()=>import("./secondencounter-35mm-8eb87921.js"),[],import.meta.url),"../../data/videos/secondencounter-ar16to9.js":()=>i(()=>import("./secondencounter-ar16to9-23e87749.js"),[],import.meta.url),"../../data/videos/secondencounter-ar4to3.js":()=>i(()=>import("./secondencounter-ar4to3-d55bf897.js"),[],import.meta.url)}),`../../data/videos/${v.category}.js`)).default,document.getElementById("video-container"),document.getElementById("navbar"),((u=p.params.id)==null?void 0:u.length)<1)return;const c=_.value.find(o=>o.id===p.params.id);c&&h(c)}),(c,u)=>(t(),s(m,null,[g(j,{category:"Videos",title:`${r.category[0].toUpperCase()}${r.category.slice(1)}`},null,8,["title"]),e("div",L,[(t(!0),s(m,null,b(_.value,o=>(t(),s("div",{class:"col",key:o.id,onClick:ie=>h(o)},[e("div",O,[e("div",P,[o.creator?(t(),s("img",{key:0,class:"cover me-2",src:`./assets/avatars/${o.creator.avatar}`,loading:"lazy"},null,8,T)):(t(),s("img",{key:1,class:"cover me-2",src:`./assets/other/videos/${r.category}/${o.id}.webp`,loading:"lazy"},null,8,S)),e("div",null,[e("div",N,d(o.title),1),e("div",null,[B,f(d(o.entries.length),1)])]),o.isNew?(t(),s("span",z,"New")):l("",!0)])])],8,A))),128))]),C,e("div",F,[a.value?(t(),s("div",H,[e("div",U,[a.value.creator?(t(),s("img",{key:0,class:"cover me-2",src:`./assets/avatars/${a.value.creator.avatar}`,loading:"lazy"},null,8,G)):(t(),s("img",{key:1,class:"cover me-2",src:`./assets/other/videos/${r.category}/${a.value.id}.webp`,loading:"lazy"},null,8,J)),e("div",null,[e("div",K,d(a.value.title),1),a.value.creator?(t(),s("div",M,[a.value.creator.twitter?(t(),s("a",{key:0,href:a.value.creator.twitter,target:"_blank",style:{color:"#1DA1F2"},class:"me-2"},W,8,q)):l("",!0),a.value.creator.youtube?(t(),s("a",{key:1,href:a.value.creator.youtube,target:"_blank",style:{color:"#FF0000"},class:"me-2"},Z,8,X)):l("",!0)])):l("",!0),e("div",ee,[te,f(d(a.value.entries.length),1)])])]),(t(!0),s(m,null,b(a.value.entries,o=>(t(),s("div",se,[o.title?(t(),s("div",oe,d(o.title),1)):l("",!0),e("iframe",{class:"video-iframe",frameborder:"0",src:o.url,allowfullscreen:""},null,8,ae)]))),256))])):l("",!0)]),g(R,{"watch-id":"scroll-up-mark"})],64))}},_e=w(re,[["__scopeId","data-v-35a15e0e"]]);export{_e as default};
