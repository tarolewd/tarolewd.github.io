import{f as u,o as l,c as d,a as c,F as _,r as p,p as f,g as y}from"./index-fd817ff5.js";const r=(s,e,o)=>{s.has(e)&&clearTimeout(s.get(e)),s.set(e,o)},h=(s,e)=>{const o=setTimeout(()=>{const t=s.children[0];t.src=t.dataset.src,s.load(),s.classList.remove("lazy"),e.delete(s.id)},600);r(e,s.id,o)},m=(s,e)=>{const o=setTimeout(()=>{s.play(),e.delete(s.id)},600);r(e,s.id,o)},v=(s,e)=>{const o=setTimeout(()=>{s.pause(),e.delete(s.id)},300);r(e,s.id,o)},b=()=>{const s=new Map,e=new IntersectionObserver(t=>{t.forEach(n=>{const i=n.target;n.isIntersecting?i.classList.contains("lazy")?h(i,s):m(i,s):v(i,s)})});return document.querySelectorAll("video.lazy").forEach(t=>e.observe(t)),e};const g=(s,e)=>{const o=s.__vccOpts||s;for(const[t,n]of e)o[t]=n;return o},a=s=>(f("data-v-4e5ed367"),s=s(),y(),s),z=a(()=>c("div",{class:"fs-3 text-light mt-3"},"First Encounter",-1)),w=a(()=>c("div",{class:"fs-4 mb-2"},"Gifs - Aspect Ratio 4:3",-1)),x={class:"row row-cols-1 row-cols-lg-2"},I={class:"video-container"},k=["id","poster"],A=["data-src"],T={class:"d-flex justify-content-center"},E=["href"],G=a(()=>c("i",{class:"bi bi-link-45deg"},null,-1)),R=[G],S=a(()=>c("a",{class:"btn btn-outline-secondary btn-sm",role:"button",download:""},[c("i",{class:"bi bi-download"})],-1)),V={__name:"GifsAR4to3",setup(s){return u(()=>{b()}),(e,o)=>(l(),d(_,null,[z,w,c("div",x,[(l(),d(_,null,p(51,t=>c("div",{key:t,class:"col mb-4"},[c("div",I,[c("video",{id:t,class:"lazy",autoplay:"",muted:"",loop:"",playsinline:"",poster:`./assets/firstencounter/gifs-ar4to3/poster/firstencounter-gif-ar4to3-poster-${t}.jpg`},[c("source",{"data-src":`./assets/firstencounter/gifs-ar4to3/clips/firstencounter-gif-ar4to3-clip-${t}.mp4`,type:"video/mp4"},null,8,A)],8,k),c("div",T,[c("a",{class:"btn btn-outline-secondary btn-sm me-2",href:`./assets/firstencounter/gifs-ar4to3/firstencounter-gif-at4to3-${t}.gif`,role:"button"},R,8,E),S])])])),64))])],64))}},F=g(V,[["__scopeId","data-v-4e5ed367"]]);export{F as default};
