import{_ as p,r as l,f as m,u as v,g as h,o as w,c as f,a as s,w as g,v as b,n as y,h as x,p as S,i as P,j as I,d as k}from"./index-bfdd31c4.js";const e=t=>(P("data-v-3d176bec"),t=t(),I(),t),j={class:"card mx-auto",style:{"max-width":"400px"}},B={class:"row g-0"},D=e(()=>s("div",{class:"col-3 d-flex justify-content-center align-items-center ps-3"},[s("div",{class:"patreon-icon-container"},[s("a",{href:"https://www.patreon.com/tarolewd",target:"_blank"},[s("img",{src:k})])])],-1)),H={class:"col-9"},C={class:"card-body overflow-hidden"},E=e(()=>s("h5",{class:"card-title"},"Patreon Content",-1)),G=e(()=>s("input",{name:"username",type:"text",value:"Patreon",class:"d-none"},null,-1)),R=e(()=>s("label",{class:"form-label"},"Password",-1)),U=e(()=>s("input",{class:"btn btn-success mt-2 float-end",name:"login",type:"submit",value:"Enter"},null,-1)),V={__name:"Patreon",setup(t){const o=l(""),c=l(!1),d=m(),i=v(),_=h(),u=async r=>{if(r.preventDefault(),await x(o.value)===S){d.login(),localStorage.setItem("gKGyD5W5jGkd6",o.value);const n=_.query.to||"home";i.push({name:n})}else c.value=!0};return(r,a)=>(w(),f("div",j,[s("div",B,[D,s("div",H,[s("div",C,[E,s("form",{action:"",onSubmit:u},[G,R,g(s("input",{class:y(["form-control",{"is-invalid":c.value}]),name:"password",type:"password","onUpdate:modelValue":a[0]||(a[0]=n=>o.value=n)},null,2),[[b,o.value]]),U],32)])])])]))}},z=p(V,[["__scopeId","data-v-3d176bec"]]);export{z as default};
