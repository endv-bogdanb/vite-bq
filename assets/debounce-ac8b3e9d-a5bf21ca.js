import{i as d}from"./isNil-cfe928b1-367165d6.js";const p=(t,o=0,c=!1)=>{let e;function a(...i){clearTimeout(e);const n=this;function l(u,s,...r){e=void 0,u.apply(s,r)}c&&d(e)&&t.apply(n,i),e=setTimeout(l,o,t,n,...i)}return Object.assign(a,{cancel:()=>{clearTimeout(e)}})};export{p as d};