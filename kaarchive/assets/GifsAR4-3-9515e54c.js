import{f,o as l,c as d,a as s,F as _,r as u,p,g as h}from"./index-b1b468b1.js";const v=(o,i)=>{const n=o.__vccOpts||o;for(const[c,e]of i)n[c]=e;return n},a=o=>(p("data-v-233ce650"),o=o(),h(),o),b=a(()=>s("div",{class:"fs-3 text-light mt-3"},"First Encounter",-1)),g=a(()=>s("div",{class:"fs-4 mb-2"},"Gifs - Aspect Ratio 4:3",-1)),m={class:"row row-cols-1 row-cols-lg-2"},y={class:"video-container"},w={class:"lazy",autoplay:"",muted:"",loop:"",playsinline:""},x=["data-src"],I={class:"d-flex justify-content-center"},k=["href"],z=a(()=>s("i",{class:"bi bi-link-45deg"},null,-1)),A=[z],E=["href"],G=a(()=>s("i",{class:"bi bi-download"},null,-1)),R=[G],S={__name:"GifsAR4-3",setup(o){let i=null;return f(()=>{const n=[].slice.call(document.querySelectorAll("video.lazy"));i=new IntersectionObserver(c=>{c.forEach(e=>{const t=e.target;if(e.isIntersecting)if(t.classList.contains("lazy")){const r=t.children[0];r.src=r.dataset.src,t.load(),t.classList.remove("lazy")}else t.paused&&t.play();else t.paused||t.pause()})}),n.forEach(function(c){i.observe(c)})}),(n,c)=>(l(),d(_,null,[b,g,s("div",m,[(l(),d(_,null,u(51,e=>s("div",{key:e,class:"col mb-4"},[s("div",y,[s("video",w,[s("source",{"data-src":`/assets/firstencounter/gifs-4-3/firstencounter-clip-4-3-${e}.mp4`,type:"video/mp4"},null,8,x)]),s("div",I,[s("a",{class:"btn btn-outline-secondary btn-sm me-2",href:`/assets/firstencounter/gifs-4-3/firstencounter-gif-4-3-${e}.gif`,role:"button"},A,8,k),s("a",{class:"btn btn-outline-secondary btn-sm",href:`/assets/firstencounter/gifs-4-3/firstencounter-gif-4-3-${e}.gif`,role:"button",download:""},R,8,E)])])])),64))])],64))}},F=v(S,[["__scopeId","data-v-233ce650"]]);export{F as default};
