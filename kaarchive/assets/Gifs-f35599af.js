import{r as m,o as f,c as y,a as i,K as C,_ as x,H as E,L as p,x as k,I as z,e as v,G as b,J as L,f as r,p as w,h as V}from"./index-79a13b82.js";import{_ as j}from"./dynamic-import-helper-be004503.js";import{z as g}from"./functions-3efd0912.js";import{_ as S}from"./SiteHeader-793b6003.js";import{T as D}from"./bootstrap.esm-1054115b.js";import{S as O}from"./ScrollUp-2223a2a7.js";const h=(e,t,o)=>{e.has(t)&&clearTimeout(e.get(t)),e.set(t,o)},P=(e,t)=>{const o=setTimeout(()=>{const s=e.children[0];s.src=s.dataset.src,e.load(),e.classList.remove("lazy-video"),t.delete(e.id)},1e3);h(t,e.id,o)},R=(e,t)=>{const o=setTimeout(()=>{e.paused&&e.play(),t.delete(e.id)},1e3);h(t,e.id,o)},A=(e,t)=>{const o=setTimeout(()=>{e.paused||e.pause(),t.delete(e.id)},600);h(t,e.id,o)},B=()=>{const e=new Map,t=new IntersectionObserver(s=>{s.forEach(n=>{const a=n.target;n.isIntersecting&&(a.classList.contains("lazy-poster")&&(a.poster=a.dataset.poster,a.classList.remove("lazy-poster")),n.intersectionRatio>=.6?a.classList.contains("lazy-video")?P(a,e):R(a,e):A(a,e))})},{rootMargin:"-63px 0px 0px 0px",threshold:[0,.6]});return document.querySelectorAll("video.lazy").forEach(s=>t.observe(s)),t},G={class:"toast-container position-fixed bottom-0 end-0 p-3"},M=i("div",{class:"toast-body"},[C("Copied "),i("i",{class:"bi bi-check-lg float-end"})],-1),N=[M],H={__name:"CopyClipboard",setup(e,{expose:t}){const o=m(null);let s=null;return t({copyToClipboard:async a=>{s||(s=new D(o.value,{delay:3e3})),await navigator.clipboard.writeText(a),s.show()}}),(a,l)=>(f(),y("div",G,[i("div",{class:"toast text-bg-success border-0",ref_key:"toastElem",ref:o,style:{width:"6rem"}},N,512)]))}};const U=e=>(w("data-v-d3479ef8"),e=e(),V(),e),q=U(()=>i("div",{id:"scroll-up-mark"},null,-1)),F={class:"row row-cols-1 row-cols-lg-2"},J={class:"video-container"},K=["id","data-poster"],Q=["data-src"],W={class:"d-flex justify-content-center"},X=["onClick"],Y=["onClick"],Z={__name:"Gifs",props:{category:String,type:String,title:String},setup(e){const t=e,o=m(null),s=m([]),n=m([]);let a=null;const l=t.category.replaceAll(" ","").toLowerCase();let u=2;const $=c=>{const _=`https://cdn.discordapp.com/attachments/${s.value[c]}/${l}-gif-${t.type}-${g(c+1,u)}.gif`;o.value.copyToClipboard&&o.value.copyToClipboard(_)},T=c=>{const _=`https://imgur.com/${n.value[c]}`;o.value.copyToClipboard&&o.value.copyToClipboard(_)};return E(async()=>{const c=await j(Object.assign({"../../data/gifs/firstencounter-35mm.js":()=>p(()=>import("./firstencounter-35mm-7ec47b59.js"),[],import.meta.url),"../../data/gifs/firstencounter-ar16to9.js":()=>p(()=>import("./firstencounter-ar16to9-832f060b.js"),[],import.meta.url),"../../data/gifs/firstencounter-ar4to3.js":()=>p(()=>import("./firstencounter-ar4to3-181d362b.js"),[],import.meta.url),"../../data/gifs/secondencounter-35mm.js":()=>p(()=>import("./secondencounter-35mm-72852ba0.js"),[],import.meta.url),"../../data/gifs/secondencounter-ar16to9.js":()=>p(()=>import("./secondencounter-ar16to9-4ec28251.js"),[],import.meta.url),"../../data/gifs/secondencounter-ar4to3.js":()=>p(()=>import("./secondencounter-ar4to3-9c95b31c.js"),[],import.meta.url)}),`../../data/gifs/${l}-${t.type}.js`);s.value=c.discordIds,n.value=c.imgurIds,u=s.value.length.toString().length,k(()=>a=B())}),z(()=>{a.disconnect()}),(c,_)=>(f(),y(b,null,[v(S,{category:e.category,title:e.title},null,8,["category","title"]),q,i("div",F,[(f(!0),y(b,null,L(s.value.length,d=>(f(),y("div",{key:d,class:"col mb-4"},[i("div",J,[i("video",{id:d,class:"lazy lazy-poster lazy-video",autoplay:"",muted:"",loop:"",playsinline:"",disableRemotePlayback:"","data-poster":`./assets/${r(l)}/gifs-${e.type}/poster/${r(l)}-gif-${e.type}-poster-${r(g)(d,r(u))}.jpg`},[i("source",{"data-src":`./assets/${r(l)}/gifs-${e.type}/clips/${r(l)}-gif-${e.type}-clip-${r(g)(d,r(u))}.mp4`,type:"video/mp4"},null,8,Q)],8,K)]),i("div",W,[i("a",{class:"btn btn-outline-secondary btn-sm me-2",onClick:I=>T(d-1)},"imgur",8,X),i("button",{class:"btn btn-outline-secondary btn-sm",onClick:I=>$(d-1)},"gif",8,Y)])]))),128))]),v(H,{ref_key:"copyClipboardComp",ref:o},null,512),v(O,{"watch-id":"scroll-up-mark"})],64))}},ce=x(Z,[["__scopeId","data-v-d3479ef8"]]);export{ce as default};
