import{i as m}from"./isNil-2290f64e-vAogyTQe.js";/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */const d=(i,t,...r)=>{const e=()=>i(...r);if(t===0){const n=setTimeout(e,t);return()=>clearTimeout(n)}else{let n;const c=performance.now(),o=()=>cancelAnimationFrame(n),a=s=>{const l=s-c;o(),l<t?n=requestAnimationFrame(a):e()};return n=requestAnimationFrame(a),o}},p=(i,t=0,r=!1)=>{let e;function n(...c){e==null||e();const o=this;function a(s,l,...u){s.apply(l,u)}r&&m(e)&&i.apply(o,c),e=d(a,t,i,o,...c)}return Object.assign(n,{cancel:()=>{e==null||e()}})};export{p as d};
