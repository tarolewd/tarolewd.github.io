import{_ as p,r as d,q as _,s as u,o as i,c as h,b as g,p as m,h as b,a as v}from"./index-eeef7401.js";const f=e=>(m("data-v-ada2ae51"),e=e(),b(),e),B=f(()=>v("i",{class:"bi bi-chevron-up"},null,-1)),I=[B],w={__name:"ScrollUp",props:{watchId:String},setup(e){const l=e,s=d(!1);let n=null,a=null,t=!1;const r=()=>{window.scrollTo(0,0)};return _(()=>{n=document.getElementById(l.watchId),a=document.getElementById("navbar"),t=new IntersectionObserver(c=>{c.forEach(o=>{console.log(o.target.getBoundingClientRect().y),s.value=o.intersectionRatio===0&&o.target.getBoundingClientRect().y<100})},{rootMargin:`-${a.offsetHeight+20}px 0px 0px 0px`,threshold:1}),t.observe(n)}),u(()=>{t.disconnect(),t=null}),(c,o)=>s.value?(i(),h("button",{key:0,class:"btn btn-success scroll-up-btn",onClick:r},I)):g("",!0)}},S=p(w,[["__scopeId","data-v-ada2ae51"]]);export{S};
