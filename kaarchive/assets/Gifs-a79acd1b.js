import{r as m,o as f,c as y,a as i,s as E,_ as x,l as z,x as p,y as I,m as L,e as g,F as h,q as k,f as r}from"./index-d2152c14.js";import{_ as w}from"./dynamic-import-helper-be004503.js";import{z as v}from"./functions-3efd0912.js";import{_ as V}from"./SiteHeader-410bd1ac.js";import{T as j}from"./bootstrap.esm-1054115b.js";const b=(e,t,o)=>{e.has(t)&&clearTimeout(e.get(t)),e.set(t,o)},D=(e,t)=>{const o=setTimeout(()=>{const s=e.children[0];s.src=s.dataset.src,e.load(),e.classList.remove("lazy-video"),t.delete(e.id)},1e3);b(t,e.id,o)},O=(e,t)=>{const o=setTimeout(()=>{e.paused&&e.play(),t.delete(e.id)},1e3);b(t,e.id,o)},P=(e,t)=>{const o=setTimeout(()=>{e.paused||e.pause(),t.delete(e.id)},600);b(t,e.id,o)},R=()=>{const e=new Map,t=new IntersectionObserver(s=>{s.forEach(n=>{const a=n.target;n.isIntersecting&&(a.classList.contains("lazy-poster")&&(a.poster=a.dataset.poster,a.classList.remove("lazy-poster")),n.intersectionRatio>=.6?a.classList.contains("lazy-video")?D(a,e):O(a,e):P(a,e))})},{rootMargin:"-63px 0px 0px 0px",threshold:[0,.6]});return document.querySelectorAll("video.lazy").forEach(s=>t.observe(s)),t},A={class:"toast-container position-fixed bottom-0 end-0 p-3"},S=i("div",{class:"toast-body"},[E("Copied "),i("i",{class:"bi bi-check-lg float-end"})],-1),B=[S],G={__name:"CopyClipboard",setup(e,{expose:t}){const o=m(null);let s=null;return t({copyToClipboard:async a=>{s||(s=new j(o.value,{delay:3e3})),await navigator.clipboard.writeText(a),s.show()}}),(a,l)=>(f(),y("div",A,[i("div",{class:"toast text-bg-success border-0",ref_key:"toastElem",ref:o,style:{width:"6rem"}},B,512)]))}};const M={class:"row row-cols-1 row-cols-lg-2"},N={class:"video-container"},q=["id","data-poster"],F=["data-src"],H={class:"d-flex justify-content-center"},U=["onClick"],J=["onClick"],K={__name:"Gifs",props:{category:String,type:String,title:String},setup(e){const t=e,o=m(null),s=m([]),n=m([]);let a=null;const l=t.category.replaceAll(" ","").toLowerCase();let u=2;const $=c=>{const _=`https://cdn.discordapp.com/attachments/${s.value[c]}/${l}-gif-${t.type}-${v(c+1,u)}.gif`;o.value.copyToClipboard&&o.value.copyToClipboard(_)},T=c=>{const _=`https://imgur.com/${n.value[c]}`;o.value.copyToClipboard&&o.value.copyToClipboard(_)};return z(async()=>{const c=await w(Object.assign({"../../data/gifs/firstencounter-35mm.js":()=>p(()=>import("./firstencounter-35mm-7ec47b59.js"),[],import.meta.url),"../../data/gifs/firstencounter-ar16to9.js":()=>p(()=>import("./firstencounter-ar16to9-832f060b.js"),[],import.meta.url),"../../data/gifs/firstencounter-ar4to3.js":()=>p(()=>import("./firstencounter-ar4to3-181d362b.js"),[],import.meta.url),"../../data/gifs/secondencounter-35mm.js":()=>p(()=>import("./secondencounter-35mm-72852ba0.js"),[],import.meta.url),"../../data/gifs/secondencounter-ar16to9.js":()=>p(()=>import("./secondencounter-ar16to9-4ec28251.js"),[],import.meta.url),"../../data/gifs/secondencounter-ar4to3.js":()=>p(()=>import("./secondencounter-ar4to3-9c95b31c.js"),[],import.meta.url)}),`../../data/gifs/${l}-${t.type}.js`);s.value=c.discordIds,n.value=c.imgurIds,u=s.value.length.toString().length,I(()=>a=R())}),L(()=>{a.disconnect()}),(c,_)=>(f(),y(h,null,[g(V,{category:e.category,title:e.title},null,8,["category","title"]),i("div",M,[(f(!0),y(h,null,k(s.value.length,d=>(f(),y("div",{key:d,class:"col mb-4"},[i("div",N,[i("video",{id:d,class:"lazy lazy-poster lazy-video",autoplay:"",muted:"",loop:"",playsinline:"",disableRemotePlayback:"","data-poster":`./assets/${r(l)}/gifs-${e.type}/poster/${r(l)}-gif-${e.type}-poster-${r(v)(d,r(u))}.jpg`},[i("source",{"data-src":`./assets/${r(l)}/gifs-${e.type}/clips/${r(l)}-gif-${e.type}-clip-${r(v)(d,r(u))}.mp4`,type:"video/mp4"},null,8,F)],8,q)]),i("div",H,[i("a",{class:"btn btn-outline-secondary btn-sm me-2",onClick:C=>T(d-1)},"imgur",8,U),i("button",{class:"btn btn-outline-secondary btn-sm",onClick:C=>$(d-1)},"gif",8,J)])]))),128))]),g(G,{ref_key:"copyClipboardComp",ref:o},null,512)],64))}},ee=x(K,[["__scopeId","data-v-3f4ffbb2"]]);export{ee as default};
