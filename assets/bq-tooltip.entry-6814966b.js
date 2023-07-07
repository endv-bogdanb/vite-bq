import{r as Rt,h as H,g as Lt}from"./index-b072913d.js";function _(t){return t.split("-")[1]}function rt(t){return t==="y"?"height":"width"}function D(t){return t.split("-")[0]}function $(t){return["top","bottom"].includes(D(t))?"x":"y"}function ct(t,e,i){let{reference:o,floating:n}=t;const a=o.x+o.width/2-n.width/2,r=o.y+o.height/2-n.height/2,s=$(e),l=rt(s),c=o[l]/2-n[l]/2,g=D(e),b=s==="x";let d;switch(g){case"top":d={x:a,y:o.y-n.height};break;case"bottom":d={x:a,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:r};break;case"left":d={x:o.x-n.width,y:r};break;default:d={x:o.x,y:o.y}}switch(_(e)){case"start":d[s]-=c*(i&&b?-1:1);break;case"end":d[s]+=c*(i&&b?-1:1);break}return d}const Tt=async(t,e,i)=>{const{placement:o="bottom",strategy:n="absolute",middleware:a=[],platform:r}=i,s=a.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:n}),{x:g,y:b}=ct(c,o,l),d=o,f={},u=0;for(let h=0;h<s.length;h++){const{name:p,fn:w}=s[h],{x:m,y:x,data:v,reset:q}=await w({x:g,y:b,initialPlacement:o,placement:d,strategy:n,middlewareData:f,rects:c,platform:r,elements:{reference:t,floating:e}});if(g=m??g,b=x??b,f={...f,[p]:{...f[p],...v}},q&&u<=50){u++,typeof q=="object"&&(q.placement&&(d=q.placement),q.rects&&(c=q.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:n}):q.rects),{x:g,y:b}=ct(c,d,l)),h=-1;continue}}return{x:g,y:b,placement:d,strategy:n,middlewareData:f}};function U(t,e){return typeof t=="function"?t(e):t}function St(t){return{top:0,right:0,bottom:0,left:0,...t}}function wt(t){return typeof t!="number"?St(t):{top:t,right:t,bottom:t,left:t}}function Z(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function J(t,e){var i;e===void 0&&(e={});const{x:o,y:n,platform:a,rects:r,elements:s,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:g="viewport",elementContext:b="floating",altBoundary:d=!1,padding:f=0}=U(e,t),u=wt(f),p=s[d?b==="floating"?"reference":"floating":b],w=Z(await a.getClippingRect({element:(i=await(a.isElement==null?void 0:a.isElement(p)))==null||i?p:p.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(s.floating)),boundary:c,rootBoundary:g,strategy:l})),m=b==="floating"?{...r.floating,x:o,y:n}:r.reference,x=await(a.getOffsetParent==null?void 0:a.getOffsetParent(s.floating)),v=await(a.isElement==null?void 0:a.isElement(x))?await(a.getScale==null?void 0:a.getScale(x))||{x:1,y:1}:{x:1,y:1},q=Z(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:m,offsetParent:x,strategy:l}):m);return{top:(w.top-q.top+u.top)/v.y,bottom:(q.bottom-w.bottom+u.bottom)/v.y,left:(w.left-q.left+u.left)/v.x,right:(q.right-w.right+u.right)/v.x}}const Q=Math.min,B=Math.max;function nt(t,e,i){return B(t,Q(e,i))}const Pt=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:n,rects:a,platform:r,elements:s}=e,{element:l,padding:c=0}=U(t,e)||{};if(l==null)return{};const g=wt(c),b={x:i,y:o},d=$(n),f=rt(d),u=await r.getDimensions(l),h=d==="y",p=h?"top":"left",w=h?"bottom":"right",m=h?"clientHeight":"clientWidth",x=a.reference[f]+a.reference[d]-b[d]-a.floating[f],v=b[d]-a.reference[d],q=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l));let k=q?q[m]:0;(!k||!await(r.isElement==null?void 0:r.isElement(q)))&&(k=s.floating[m]||a.floating[f]);const y=x/2-v/2,S=k/2-u[f]/2-1,P=Q(g[p],S),z=Q(g[w],S),E=P,V=k-u[f]-z,O=k/2-u[f]/2+y,T=nt(E,O,V),M=_(n)!=null&&O!=T&&a.reference[f]/2-(O<E?P:z)-u[f]/2<0?O<E?E-O:V-O:0;return{[d]:b[d]-M,data:{[d]:T,centerOffset:O-T+M}}}}),zt=["top","right","bottom","left"],Mt={left:"right",right:"left",bottom:"top",top:"bottom"};function tt(t){return t.replace(/left|right|bottom|top/g,e=>Mt[e])}function Dt(t,e,i){i===void 0&&(i=!1);const o=_(t),n=$(t),a=rt(n);let r=n==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(r=tt(r)),{main:r,cross:tt(r)}}const Ft={start:"end",end:"start"};function at(t){return t.replace(/start|end/g,e=>Ft[e])}function Nt(t){const e=tt(t);return[at(t),e,at(e)]}function Vt(t,e,i){const o=["left","right"],n=["right","left"],a=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return i?e?n:o:e?o:n;case"left":case"right":return e?a:r;default:return[]}}function Yt(t,e,i,o){const n=_(t);let a=Vt(D(t),i==="start",o);return n&&(a=a.map(r=>r+"-"+n),e&&(a=a.concat(a.map(at)))),a}const Bt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i;const{placement:o,middlewareData:n,rects:a,initialPlacement:r,platform:s,elements:l}=e,{mainAxis:c=!0,crossAxis:g=!0,fallbackPlacements:b,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:u=!0,...h}=U(t,e),p=D(o),w=D(r)===r,m=await(s.isRTL==null?void 0:s.isRTL(l.floating)),x=b||(w||!u?[tt(r)]:Nt(r));!b&&f!=="none"&&x.push(...Yt(r,u,f,m));const v=[r,...x],q=await J(e,h),k=[];let y=((i=n.flip)==null?void 0:i.overflows)||[];if(c&&k.push(q[p]),g){const{main:E,cross:V}=Dt(o,a,m);k.push(q[E],q[V])}if(y=[...y,{placement:o,overflows:k}],!k.every(E=>E<=0)){var S,P;const E=(((S=n.flip)==null?void 0:S.index)||0)+1,V=v[E];if(V)return{data:{index:E,overflows:y},reset:{placement:V}};let O=(P=y.filter(T=>T.overflows[0]<=0).sort((T,Y)=>T.overflows[1]-Y.overflows[1])[0])==null?void 0:P.placement;if(!O)switch(d){case"bestFit":{var z;const T=(z=y.map(Y=>[Y.placement,Y.overflows.filter(M=>M>0).reduce((M,Et)=>M+Et,0)]).sort((Y,M)=>Y[1]-M[1])[0])==null?void 0:z[0];T&&(O=T);break}case"initialPlacement":O=r;break}if(o!==O)return{reset:{placement:O}}}return{}}}};function ft(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function bt(t){return zt.some(e=>t[e]>=0)}const Wt=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:i}=e,{strategy:o="referenceHidden",...n}=U(t,e);switch(o){case"referenceHidden":{const a=await J(e,{...n,elementContext:"reference"}),r=ft(a,i.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:bt(r)}}}case"escaped":{const a=await J(e,{...n,altBoundary:!0}),r=ft(a,i.floating);return{data:{escapedOffsets:r,escaped:bt(r)}}}default:return{}}}}};async function Ut(t,e){const{placement:i,platform:o,elements:n}=t,a=await(o.isRTL==null?void 0:o.isRTL(n.floating)),r=D(i),s=_(i),l=$(i)==="x",c=["left","top"].includes(r)?-1:1,g=a&&l?-1:1,b=U(e,t);let{mainAxis:d,crossAxis:f,alignmentAxis:u}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...b};return s&&typeof u=="number"&&(f=s==="end"?u*-1:u),l?{x:f*g,y:d*c}:{x:d*c,y:f*g}}const Ht=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:i,y:o}=e,n=await Ut(e,t);return{x:i+n.x,y:o+n.y,data:n}}}};function It(t){return t==="x"?"y":"x"}const Xt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:n}=e,{mainAxis:a=!0,crossAxis:r=!1,limiter:s={fn:p=>{let{x:w,y:m}=p;return{x:w,y:m}}},...l}=U(t,e),c={x:i,y:o},g=await J(e,l),b=$(D(n)),d=It(b);let f=c[b],u=c[d];if(a){const p=b==="y"?"top":"left",w=b==="y"?"bottom":"right",m=f+g[p],x=f-g[w];f=nt(m,f,x)}if(r){const p=d==="y"?"top":"left",w=d==="y"?"bottom":"right",m=u+g[p],x=u-g[w];u=nt(m,u,x)}const h=s.fn({...e,[b]:f,[d]:u});return{...h,data:{x:h.x-i,y:h.y-o}}}}},_t=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:i,rects:o,platform:n,elements:a}=e,{apply:r=()=>{},...s}=U(t,e),l=await J(e,s),c=D(i),g=_(i),d=$(i)==="x",{width:f,height:u}=o.floating;let h,p;c==="top"||c==="bottom"?(h=c,p=g===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(p=c,h=g==="end"?"top":"bottom");const w=u-l[h],m=f-l[p],x=!e.middlewareData.shift;let v=w,q=m;if(d){const y=f-l.left-l.right;q=g||x?Q(m,y):y}else{const y=u-l.top-l.bottom;v=g||x?Q(w,y):y}if(x&&!g){const y=B(l.left,0),S=B(l.right,0),P=B(l.top,0),z=B(l.bottom,0);d?q=f-2*(y!==0||S!==0?y+S:B(l.left,l.right)):v=u-2*(P!==0||z!==0?P+z:B(l.top,l.bottom))}await r({...e,availableWidth:q,availableHeight:v});const k=await n.getDimensions(a.floating);return f!==k.width||u!==k.height?{reset:{rects:!0}}:{}}}};function A(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function R(t){return A(t).getComputedStyle(t)}function mt(t){return t instanceof A(t).Node}function F(t){return mt(t)?(t.nodeName||"").toLowerCase():""}function L(t){return t instanceof A(t).HTMLElement}function C(t){return t instanceof A(t).Element}function dt(t){if(typeof ShadowRoot>"u")return!1;const e=A(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function K(t){const{overflow:e,overflowX:i,overflowY:o,display:n}=R(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(n)}function $t(t){return["table","td","th"].includes(F(t))}function st(t){const e=lt(),i=R(t);return i.transform!=="none"||i.perspective!=="none"||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function lt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ot(t){return["html","body","#document"].includes(F(t))}const ut=Math.min,j=Math.max,et=Math.round;function xt(t){const e=R(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const n=L(t),a=n?t.offsetWidth:i,r=n?t.offsetHeight:o,s=et(i)!==a||et(o)!==r;return s&&(i=a,o=r),{width:i,height:o,fallback:s}}function yt(t){return C(t)?t:t.contextElement}const vt={x:1,y:1};function I(t){const e=yt(t);if(!L(e))return vt;const i=e.getBoundingClientRect(),{width:o,height:n,fallback:a}=xt(e);let r=(a?et(i.width):i.width)/o,s=(a?et(i.height):i.height)/n;return(!r||!Number.isFinite(r))&&(r=1),(!s||!Number.isFinite(s))&&(s=1),{x:r,y:s}}const gt={x:0,y:0};function kt(t,e,i){var o,n;if(e===void 0&&(e=!0),!lt())return gt;const a=t?A(t):window;return!i||e&&i!==a?gt:{x:((o=a.visualViewport)==null?void 0:o.offsetLeft)||0,y:((n=a.visualViewport)==null?void 0:n.offsetTop)||0}}function W(t,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const n=t.getBoundingClientRect(),a=yt(t);let r=vt;e&&(o?C(o)&&(r=I(o)):r=I(t));const s=kt(a,i,o);let l=(n.left+s.x)/r.x,c=(n.top+s.y)/r.y,g=n.width/r.x,b=n.height/r.y;if(a){const d=A(a),f=o&&C(o)?A(o):o;let u=d.frameElement;for(;u&&o&&f!==d;){const h=I(u),p=u.getBoundingClientRect(),w=getComputedStyle(u);p.x+=(u.clientLeft+parseFloat(w.paddingLeft))*h.x,p.y+=(u.clientTop+parseFloat(w.paddingTop))*h.y,l*=h.x,c*=h.y,g*=h.x,b*=h.y,l+=p.x,c+=p.y,u=A(u).frameElement}}return Z({width:g,height:b,x:l,y:c})}function N(t){return((mt(t)?t.ownerDocument:t.document)||window.document).documentElement}function it(t){return C(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function jt(t){let{rect:e,offsetParent:i,strategy:o}=t;const n=L(i),a=N(i);if(i===a)return e;let r={scrollLeft:0,scrollTop:0},s={x:1,y:1};const l={x:0,y:0};if((n||!n&&o!=="fixed")&&((F(i)!=="body"||K(a))&&(r=it(i)),L(i))){const c=W(i);s=I(i),l.x=c.x+i.clientLeft,l.y=c.y+i.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-r.scrollLeft*s.x+l.x,y:e.y*s.y-r.scrollTop*s.y+l.y}}function Ot(t){return W(N(t)).left+it(t).scrollLeft}function Gt(t){const e=N(t),i=it(t),o=t.ownerDocument.body,n=j(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),a=j(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-i.scrollLeft+Ot(t);const s=-i.scrollTop;return R(o).direction==="rtl"&&(r+=j(e.clientWidth,o.clientWidth)-n),{width:n,height:a,x:r,y:s}}function X(t){if(F(t)==="html")return t;const e=t.assignedSlot||t.parentNode||dt(t)&&t.host||N(t);return dt(e)?e.host:e}function Ct(t){const e=X(t);return ot(e)?e.ownerDocument.body:L(e)&&K(e)?e:Ct(e)}function G(t,e){var i;e===void 0&&(e=[]);const o=Ct(t),n=o===((i=t.ownerDocument)==null?void 0:i.body),a=A(o);return n?e.concat(a,a.visualViewport||[],K(o)?o:[]):e.concat(o,G(o))}function Jt(t,e){const i=A(t),o=N(t),n=i.visualViewport;let a=o.clientWidth,r=o.clientHeight,s=0,l=0;if(n){a=n.width,r=n.height;const c=lt();(!c||c&&e==="fixed")&&(s=n.offsetLeft,l=n.offsetTop)}return{width:a,height:r,x:s,y:l}}function Qt(t,e){const i=W(t,!0,e==="fixed"),o=i.top+t.clientTop,n=i.left+t.clientLeft,a=L(t)?I(t):{x:1,y:1},r=t.clientWidth*a.x,s=t.clientHeight*a.y,l=n*a.x,c=o*a.y;return{width:r,height:s,x:l,y:c}}function ht(t,e,i){let o;if(e==="viewport")o=Jt(t,i);else if(e==="document")o=Gt(N(t));else if(C(e))o=Qt(e,i);else{const n=kt(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return Z(o)}function At(t,e){const i=X(t);return i===e||!C(i)||ot(i)?!1:R(i).position==="fixed"||At(i,e)}function Kt(t,e){const i=e.get(t);if(i)return i;let o=G(t).filter(s=>C(s)&&F(s)!=="body"),n=null;const a=R(t).position==="fixed";let r=a?X(t):t;for(;C(r)&&!ot(r);){const s=R(r),l=st(r);!l&&s.position==="fixed"&&(n=null),(a?!l&&!n:!l&&s.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||K(r)&&!l&&At(t,r))?o=o.filter(g=>g!==r):n=s,r=X(r)}return e.set(t,o),o}function Zt(t){let{element:e,boundary:i,rootBoundary:o,strategy:n}=t;const r=[...i==="clippingAncestors"?Kt(e,this._c):[].concat(i),o],s=r[0],l=r.reduce((c,g)=>{const b=ht(e,g,n);return c.top=j(b.top,c.top),c.right=ut(b.right,c.right),c.bottom=ut(b.bottom,c.bottom),c.left=j(b.left,c.left),c},ht(e,s,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function te(t){return xt(t)}function pt(t,e){return!L(t)||R(t).position==="fixed"?null:e?e(t):t.offsetParent}function ee(t){let e=X(t);for(;L(e)&&!ot(e);){if(st(e))return e;e=X(e)}return null}function qt(t,e){const i=A(t);if(!L(t))return i;let o=pt(t,e);for(;o&&$t(o)&&R(o).position==="static";)o=pt(o,e);return o&&(F(o)==="html"||F(o)==="body"&&R(o).position==="static"&&!st(o))?i:o||ee(t)||i}function oe(t,e,i){const o=L(e),n=N(e),a=i==="fixed",r=W(t,!0,a,e);let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(o||!o&&!a)if((F(e)!=="body"||K(n))&&(s=it(e)),L(e)){const c=W(e,!0,a,e);l.x=c.x+e.clientLeft,l.y=c.y+e.clientTop}else n&&(l.x=Ot(n));return{x:r.left+s.scrollLeft-l.x,y:r.top+s.scrollTop-l.y,width:r.width,height:r.height}}const ie={getClippingRect:Zt,convertOffsetParentRelativeRectToViewportRelativeRect:jt,isElement:C,getDimensions:te,getOffsetParent:qt,getDocumentElement:N,getScale:I,async getElementRects(t){let{reference:e,floating:i,strategy:o}=t;const n=this.getOffsetParent||qt,a=this.getDimensions;return{reference:oe(e,await n(i),o),floating:{x:0,y:0,...await a(i)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>R(t).direction==="rtl"};function ne(t,e,i,o){o===void 0&&(o={});const{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:r=!0,animationFrame:s=!1}=o,l=n||a?[...C(t)?G(t):t.contextElement?G(t.contextElement):[],...G(e)]:[];l.forEach(f=>{const u=!C(f)&&f.toString().includes("V");n&&(!s||u)&&f.addEventListener("scroll",i,{passive:!0}),a&&f.addEventListener("resize",i)});let c=null;r&&(c=new ResizeObserver(()=>{i()}),C(t)&&!s&&c.observe(t),!C(t)&&t.contextElement&&!s&&c.observe(t.contextElement),c.observe(e));let g,b=s?W(t):null;s&&d();function d(){const f=W(t);b&&(f.x!==b.x||f.y!==b.y||f.width!==b.width||f.height!==b.height)&&i(),b=f,g=requestAnimationFrame(d)}return i(),()=>{var f;l.forEach(u=>{n&&u.removeEventListener("scroll",i),a&&u.removeEventListener("resize",i)}),(f=c)==null||f.disconnect(),c=null,s&&cancelAnimationFrame(g)}}const ae=(t,e,i)=>{const o=new Map,n={platform:ie,...i},a={...n.platform,_c:o};return Tt(t,e,{...n,platform:a})};class re{constructor(e,i,o){this.trigger=e,this.panel=i,this.options=Object.assign({distance:20,placement:"bottom",strategy:"fixed",sameWidth:!1},o),this.init(o)}init(e){this.options=Object.assign(this.options,e),this.update()}update(){this.cleanUp=ne(this.trigger,this.panel,async()=>{const{x:e,y:i,placement:o,middlewareData:n}=await ae(this.trigger,this.panel,{placement:this.options.placement,strategy:this.options.strategy,middleware:[Ht({mainAxis:this.options.distance,crossAxis:this.options.skidding}),Bt(),Xt(),_t(this.options.sameWidth&&{apply({rects:r,elements:s}){Object.assign(s.floating.style,{width:`${r.reference.width}px`})}}),Pt({element:this.options.arrow||null}),this.positionChange(),Wt()]});if(Object.assign(this.panel.style,{top:`${i}px`,left:`${e}px`}),this.options.arrow){const{x:r,y:s}=n.arrow,l={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.options.arrow.style,{left:r!=null?`${r}px`:"",top:s!=null?`${s}px`:"",right:"",bottom:"",[l]:"-4px"})}const{referenceHidden:a}=n.hide;Object.assign(this.panel.style,{visibility:a?"hidden":"visible"})})}destroy(){this.cleanUp&&this.cleanUp()}positionChange(){return{name:"positionChange",fn:({placement:e})=>typeof this.options.onPositionChange!="function"?{}:(this.options.onPositionChange(e),{})}}}const se='*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(147,197,253,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-sizing:border-box}::-webkit-backdrop{--bq-blue-100:#e8f0fd;--bq-blue-200:#d0e2fb;--bq-blue-300:#a2c5f7;--bq-blue-400:#73a8f3;--bq-blue-500:#458bef;--bq-blue-600:#166eeb;--bq-blue-700:#1258bc;--bq-blue-800:#0d428d;--bq-blue-900:#092c5e;--bq-blue-1000:#04162f;--bq-corai-100:#fff2f3;--bq-corai-200:#ffe6e6;--bq-corai-300:#ffccce;--bq-corai-400:#ffb3b5;--bq-corai-500:#ff999d;--bq-corai-600:#ff8084;--bq-corai-700:#cc666a;--bq-corai-800:#994d4f;--bq-corai-900:#663335;--bq-corai-1000:#331a1a;--bq-cyan-100:#e8f7fb;--bq-cyan-200:#d2f0f8;--bq-cyan-300:#a5e1f1;--bq-cyan-400:#78d1e9;--bq-cyan-500:#4bc2e2;--bq-cyan-600:#1eb3db;--bq-cyan-700:#188faf;--bq-cyan-800:#126b83;--bq-cyan-900:#0c4858;--bq-cyan-1000:#06242c;--bq-gold-100:#fbf4ed;--bq-gold-200:#f7e9da;--bq-gold-300:#f0d3b6;--bq-gold-400:#e8bc91;--bq-gold-500:#e1a66d;--bq-gold-600:#d99048;--bq-gold-700:#ae733b;--bq-gold-800:#82562b;--bq-gold-900:#573a1d;--bq-gold-1000:#2b1d0e;--bq-green-100:#e8f8ef;--bq-green-200:#d2f1e0;--bq-green-300:#a5e3c1;--bq-green-400:#78d5a1;--bq-green-500:#4bc782;--bq-green-600:#1eb963;--bq-green-700:#18944f;--bq-green-800:#126f3b;--bq-green-900:#0c4a28;--bq-green-1000:#062514;--bq-grey-50:#f8f8f9;--bq-grey-100:#f0f1f2;--bq-grey-200:#e1e3e6;--bq-grey-300:#c4c7cc;--bq-grey-400:#a6aab3;--bq-grey-500:#898e99;--bq-grey-600:#6b7280;--bq-grey-700:#565b66;--bq-grey-800:#40444d;--bq-grey-900:#2b2e33;--bq-indigo-100:#edecfc;--bq-indigo-200:#dcdafa;--bq-indigo-300:#b9b5f5;--bq-indigo-400:#9590ef;--bq-indigo-500:#726bea;--bq-indigo-600:#4f46e5;--bq-indigo-700:#3f38b7;--bq-indigo-800:#2f2a89;--bq-indigo-900:#201c5c;--bq-indigo-1000:#100e2e;--bq-lime-100:#f5fae9;--bq-lime-200:#ecf6d2;--bq-lime-300:#d9eda5;--bq-lime-400:#c5e379;--bq-lime-500:#b2da4c;--bq-lime-600:#9fd120;--bq-lime-700:#7fa719;--bq-lime-800:#5f7d13;--bq-lime-900:#40540c;--bq-lime-1000:#202a06;--bq-magenta-100:#f8ebf3;--bq-magenta-200:#f1d7e8;--bq-magenta-300:#e3afd1;--bq-magenta-400:#d687b9;--bq-magenta-500:#c85fa2;--bq-magenta-600:#ba378b;--bq-magenta-700:#952c6f;--bq-magenta-800:#702153;--bq-magenta-900:#4a1638;--bq-magenta-1000:#250b1c;--bq-neutral-white:#fff;--bq-neutral-black:#000;--bq-orange-100:#fcf0e9;--bq-orange-200:#f8e1d4;--bq-orange-300:#f1c2a8;--bq-orange-400:#eaa47d;--bq-orange-500:#e38551;--bq-orange-600:#dc6726;--bq-orange-700:#b0521e;--bq-orange-800:#843e17;--bq-orange-900:#58290f;--bq-orange-1000:#2c1508;--bq-purple-100:#f0ebf9;--bq-purple-200:#e0d7f2;--bq-purple-300:#c1afe5;--bq-purple-400:#a388d8;--bq-purple-500:#8460cb;--bq-purple-600:#8460cb;--bq-purple-700:#512d98;--bq-purple-800:#3d2272;--bq-purple-900:#28164c;--bq-purple-1000:#140b26;--bq-red-100:#fce8ea;--bq-red-200:#f9d1d5;--bq-red-300:#f3a2ac;--bq-red-400:#ed7482;--bq-red-500:#e74559;--bq-red-600:#e1172f;--bq-red-700:#b41226;--bq-red-800:#870e1c;--bq-red-900:#5a0913;--bq-red-1000:#2d0509;--bq-sky-100:#eff5fb;--bq-sky-200:#dfeaf8;--bq-sky-300:#bfd5f1;--bq-sky-400:#9ec1e9;--bq-sky-500:#7eace2;--bq-sky-600:#5e97db;--bq-sky-700:#4b79af;--bq-sky-800:#385b83;--bq-sky-900:#263c58;--bq-sky-1000:#131e2c;--bq-teal-100:#e5f8f5;--bq-teal-200:#e5f8f5;--bq-teal-300:#99e1d8;--bq-teal-400:#66d2c4;--bq-teal-500:#33c3b1;--bq-teal-600:#00b49d;--bq-teal-700:#00907e;--bq-teal-800:#006c5e;--bq-teal-900:#00483f;--bq-teal-1000:#00241f;--bq-volcano-100:#feede8;--bq-volcano-200:#fddbd1;--bq-volcano-300:#fcb8a3;--bq-volcano-400:#fa9474;--bq-volcano-500:#f97146;--bq-volcano-600:#f97146;--bq-volcano-700:#c63e13;--bq-volcano-800:#942e0e;--bq-volcano-900:#631f0a;--bq-volcano-1000:#310f05;--bq-yellow-100:#fefbe7;--bq-yellow-200:#fcf6d0;--bq-yellow-300:#faeea0;--bq-yellow-400:#f7e571;--bq-yellow-500:#f5dd41;--bq-yellow-600:#f2d412;--bq-yellow-700:#c2aa0e;--bq-yellow-800:#917f0b;--bq-yellow-900:#615507;--bq-yellow-1000:#302a04;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(147,197,253,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(147,197,253,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.pointer-events-none{pointer-events:none}.fixed{position:fixed}.absolute{position:absolute}.left-0{left:0}.top-0{top:0}.-z-\\[1\\]{z-index:-1}.box-border{box-sizing:border-box}.h-2{height:.5rem}.w-2{width:.5rem}.w-\\[var\\(--bq-tooltip--width\\)\\]{width:var(--bq-tooltip--width)}.max-w-\\[var\\(--bq-tooltip--max-width\\)\\]{max-width:var(--bq-tooltip--max-width)}.rotate-45{--tw-rotate:45deg}.rotate-45,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rounded-\\[var\\(--bq-tooltip--border-radius\\)\\]{border-radius:var(--bq-tooltip--border-radius)}.border-\\[length\\:var\\(--bq-tooltip--border-width\\)\\]{border-width:var(--bq-tooltip--border-width)}.border-\\[color\\:var\\(--bq-tooltip--border-color\\)\\]{border-color:var(--bq-tooltip--border-color)}.bg-\\[var\\(--bq-tooltip--background-color\\)\\]{background-color:var(--bq-tooltip--background-color)}.px-\\[var\\(--bq-tooltip--paddingX\\)\\]{padding-left:var(--bq-tooltip--paddingX);padding-right:var(--bq-tooltip--paddingX)}.py-\\[var\\(--bq-tooltip--paddingY\\)\\]{padding-bottom:var(--bq-tooltip--paddingY);padding-top:var(--bq-tooltip--paddingY)}.text-\\[length\\:var\\(--bq-tooltip--font-size\\)\\]{font-size:var(--bq-tooltip--font-size)}.leading-\\[var\\(--bq-tooltip--line-height\\)\\]{line-height:var(--bq-tooltip--line-height)}.text-\\[color\\:var\\(--bq-tooltip--text-color\\)\\]{color:var(--bq-tooltip--text-color)}.shadow-\\[shadow\\:var\\(--bq-tooltip--box-shadow\\)\\]{--tw-shadow:var(--bq-tooltip--box-shadow);--tw-shadow-colored:var(--bq-tooltip--box-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.content-empty{--tw-content:"";content:var(--tw-content)}@keyframes fade-in{0%{opacity:0}}@keyframes slide-in{0%{transform:translateY(10px)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:root{--bq-radius--none:0;--bq-radius--xs2:2px;--bq-radius--xs:4px;--bq-radius--s:8px;--bq-radius--m:12px;--bq-radius--l:24px;--bq-radius--xl:9999px;--bq-box-shadow--xs:0 2px 0 rgba(0,0,0,.016);--bq-box-shadow--s:0 8px 24px rgba(0,0,0,.04);--bq-box-shadow--m:0 10px 48px -16px rgba(0,0,0,.12);--bq-box-shadow--l:0 20px 58px -16px rgba(0,0,0,.16);--bq-font-family--outfit:"Outfit",sans-serif;--bq-font-size--xs:12px;--bq-font-size--s:14px;--bq-font-size--m:16px;--bq-font-size--l:20px;--bq-font-size--xl:24px;--bq-font-size--xxl:32px;--bq-font-size--xxl2:40px;--bq-font-size--xxl3:48px;--bq-font-size--xxl4:56px;--bq-font-size--xxl5:64px;--bq-font-weight--thin:100;--bq-font-weight--light:300;--bq-font-weight--regular:400;--bq-font-weight--medium:500;--bq-font-weight--semibold:600;--bq-font-weight--bold:700;--bq-font-line-height--regular:1.2;--bq-font-line-height--large:1.5}::backdrop,:root{--bq-blue-100:#e8f0fd;--bq-blue-200:#d0e2fb;--bq-blue-300:#a2c5f7;--bq-blue-400:#73a8f3;--bq-blue-500:#458bef;--bq-blue-600:#166eeb;--bq-blue-700:#1258bc;--bq-blue-800:#0d428d;--bq-blue-900:#092c5e;--bq-blue-1000:#04162f;--bq-corai-100:#fff2f3;--bq-corai-200:#ffe6e6;--bq-corai-300:#ffccce;--bq-corai-400:#ffb3b5;--bq-corai-500:#ff999d;--bq-corai-600:#ff8084;--bq-corai-700:#cc666a;--bq-corai-800:#994d4f;--bq-corai-900:#663335;--bq-corai-1000:#331a1a;--bq-cyan-100:#e8f7fb;--bq-cyan-200:#d2f0f8;--bq-cyan-300:#a5e1f1;--bq-cyan-400:#78d1e9;--bq-cyan-500:#4bc2e2;--bq-cyan-600:#1eb3db;--bq-cyan-700:#188faf;--bq-cyan-800:#126b83;--bq-cyan-900:#0c4858;--bq-cyan-1000:#06242c;--bq-gold-100:#fbf4ed;--bq-gold-200:#f7e9da;--bq-gold-300:#f0d3b6;--bq-gold-400:#e8bc91;--bq-gold-500:#e1a66d;--bq-gold-600:#d99048;--bq-gold-700:#ae733b;--bq-gold-800:#82562b;--bq-gold-900:#573a1d;--bq-gold-1000:#2b1d0e;--bq-green-100:#e8f8ef;--bq-green-200:#d2f1e0;--bq-green-300:#a5e3c1;--bq-green-400:#78d5a1;--bq-green-500:#4bc782;--bq-green-600:#1eb963;--bq-green-700:#18944f;--bq-green-800:#126f3b;--bq-green-900:#0c4a28;--bq-green-1000:#062514;--bq-grey-50:#f8f8f9;--bq-grey-100:#f0f1f2;--bq-grey-200:#e1e3e6;--bq-grey-300:#c4c7cc;--bq-grey-400:#a6aab3;--bq-grey-500:#898e99;--bq-grey-600:#6b7280;--bq-grey-700:#565b66;--bq-grey-800:#40444d;--bq-grey-900:#2b2e33;--bq-indigo-100:#edecfc;--bq-indigo-200:#dcdafa;--bq-indigo-300:#b9b5f5;--bq-indigo-400:#9590ef;--bq-indigo-500:#726bea;--bq-indigo-600:#4f46e5;--bq-indigo-700:#3f38b7;--bq-indigo-800:#2f2a89;--bq-indigo-900:#201c5c;--bq-indigo-1000:#100e2e;--bq-lime-100:#f5fae9;--bq-lime-200:#ecf6d2;--bq-lime-300:#d9eda5;--bq-lime-400:#c5e379;--bq-lime-500:#b2da4c;--bq-lime-600:#9fd120;--bq-lime-700:#7fa719;--bq-lime-800:#5f7d13;--bq-lime-900:#40540c;--bq-lime-1000:#202a06;--bq-magenta-100:#f8ebf3;--bq-magenta-200:#f1d7e8;--bq-magenta-300:#e3afd1;--bq-magenta-400:#d687b9;--bq-magenta-500:#c85fa2;--bq-magenta-600:#ba378b;--bq-magenta-700:#952c6f;--bq-magenta-800:#702153;--bq-magenta-900:#4a1638;--bq-magenta-1000:#250b1c;--bq-neutral-white:#fff;--bq-neutral-black:#000;--bq-orange-100:#fcf0e9;--bq-orange-200:#f8e1d4;--bq-orange-300:#f1c2a8;--bq-orange-400:#eaa47d;--bq-orange-500:#e38551;--bq-orange-600:#dc6726;--bq-orange-700:#b0521e;--bq-orange-800:#843e17;--bq-orange-900:#58290f;--bq-orange-1000:#2c1508;--bq-purple-100:#f0ebf9;--bq-purple-200:#e0d7f2;--bq-purple-300:#c1afe5;--bq-purple-400:#a388d8;--bq-purple-500:#8460cb;--bq-purple-600:#8460cb;--bq-purple-700:#512d98;--bq-purple-800:#3d2272;--bq-purple-900:#28164c;--bq-purple-1000:#140b26;--bq-red-100:#fce8ea;--bq-red-200:#f9d1d5;--bq-red-300:#f3a2ac;--bq-red-400:#ed7482;--bq-red-500:#e74559;--bq-red-600:#e1172f;--bq-red-700:#b41226;--bq-red-800:#870e1c;--bq-red-900:#5a0913;--bq-red-1000:#2d0509;--bq-sky-100:#eff5fb;--bq-sky-200:#dfeaf8;--bq-sky-300:#bfd5f1;--bq-sky-400:#9ec1e9;--bq-sky-500:#7eace2;--bq-sky-600:#5e97db;--bq-sky-700:#4b79af;--bq-sky-800:#385b83;--bq-sky-900:#263c58;--bq-sky-1000:#131e2c;--bq-teal-100:#e5f8f5;--bq-teal-200:#e5f8f5;--bq-teal-300:#99e1d8;--bq-teal-400:#66d2c4;--bq-teal-500:#33c3b1;--bq-teal-600:#00b49d;--bq-teal-700:#00907e;--bq-teal-800:#006c5e;--bq-teal-900:#00483f;--bq-teal-1000:#00241f;--bq-volcano-100:#feede8;--bq-volcano-200:#fddbd1;--bq-volcano-300:#fcb8a3;--bq-volcano-400:#fa9474;--bq-volcano-500:#f97146;--bq-volcano-600:#f97146;--bq-volcano-700:#c63e13;--bq-volcano-800:#942e0e;--bq-volcano-900:#631f0a;--bq-volcano-1000:#310f05;--bq-yellow-100:#fefbe7;--bq-yellow-200:#fcf6d0;--bq-yellow-300:#faeea0;--bq-yellow-400:#f7e571;--bq-yellow-500:#f5dd41;--bq-yellow-600:#f2d412;--bq-yellow-700:#c2aa0e;--bq-yellow-800:#917f0b;--bq-yellow-900:#615507;--bq-yellow-1000:#302a04}:host{--bq-tooltip--background-color:var(--bq-ui--inverse);--bq-tooltip--box-shadow:var(--bq-box-shadow--m);--bq-tooltip--font-size:var(--bq-font-size--m);--bq-tooltip--line-height:var(--bq-font-line-height--large);--bq-tooltip--text-color:var(--bq-text--inverse);--bq-tooltip--paddingX:var(--bq-spacing-xs);--bq-tooltip--paddingY:var(--bq-spacing-xs2);--bq-tooltip--border-color:transparent;--bq-tooltip--border-radius:var(--bq-radius--s);--bq-tooltip--border-style:none;--bq-tooltip--border-width:unset;--bq-tooltip--max-width:320px;--bq-tooltip--width:max-content}.bq-tooltip--panel{--tw-shadow:var(--bq-tooltip--box-shadow);--tw-shadow-colored:var(--bq-tooltip--box-shadow);animation:fade-in .3s ease 0s;background-color:var(--bq-tooltip--background-color);border-color:var(--bq-tooltip--border-color);border-radius:var(--bq-tooltip--border-radius);border-width:var(--bq-tooltip--border-width);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-sizing:border-box;color:var(--bq-tooltip--text-color);font-size:var(--bq-tooltip--font-size);line-height:var(--bq-tooltip--line-height);max-width:var(--bq-tooltip--max-width);padding:var(--bq-tooltip--paddingY) var(--bq-tooltip--paddingX);pointer-events:none;position:fixed;width:var(--bq-tooltip--width)}.bq-tooltip--arrow,.bq-tooltip--arrow:before{height:.5rem;position:absolute;width:.5rem;z-index:-1}.bq-tooltip--arrow:before{--tw-rotate:45deg;--tw-content:"";background-color:var(--bq-tooltip--background-color);content:var(--tw-content);left:0;top:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@font-face{font-display:swap;font-family:Outfit;font-style:normal;font-weight:100;src:url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Outfit;font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Outfit;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Outfit;font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Outfit;font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Outfit;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}*{margin:0}ol[role=list],ul[role=list]{list-style:none}html:focus-within{scroll-behavior:smooth}body{-webkit-font-smoothing:antialiased;line-height:var(--bq-font-line-height--large);min-height:100vh;text-rendering:optimizeSpeed}a:not([class]){-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}canvas,img,picture,svg,video{display:block;max-width:100%}button,input,select,textarea{font:inherit}h1,h2,h3,h4,h5,h6,p{overflow-wrap:break-word}@media (prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.visible{visibility:visible}.static{position:static}.relative{position:relative}.hidden{display:none}',le=class{constructor(t){Rt(this,t),this.handleTriggerMouseOver=()=>{(async()=>this.displayOn==="hover"&&await this.show())()},this.handleTriggerMouseLeave=()=>{(async()=>this.displayOn==="hover"&&await this.hide())()},this.handleTriggerOnClick=()=>{(async()=>this.displayOn==="click"&&await(this.visible?this.hide():this.show()))()},this.showTooltip=()=>{var e;this.panel&&((e=this.floatingUI)===null||e===void 0||e.update())},this.hideTooltip=()=>{this.panel&&(this.visible=!1)},this.distance=10,this.hideArrow=!1,this.placement="top",this.sameWidth=!1,this.displayOn="hover",this.visible=!1}async handleVisibleChange(){if(!this.visible)return await this.hide();await this.show()}handleFloatingUIOptionsChange(){this.floatingUI.init({placement:this.placement,strategy:"fixed"})}componentDidLoad(){this.floatingUI=new re(this.trigger,this.panel,Object.assign(Object.assign({},!this.hideArrow&&{arrow:this.arrow}),{placement:this.placement,distance:this.distance,sameWidth:this.sameWidth,strategy:"fixed",skidding:0}))}disconnectedCallback(){var t;(t=this.floatingUI)===null||t===void 0||t.destroy()}async handleDocumentMouseDown(t){t.composedPath().includes(this.el)||await this.hide()}async show(){this.visible=!0,this.showTooltip()}async hide(){this.visible=!1,this.hideTooltip()}render(){return H("div",{class:"bq-tooltip relative",part:"base"},H("div",{class:"bq-tooltip--trigger",onMouseOver:this.handleTriggerMouseOver,onMouseLeave:this.handleTriggerMouseLeave,onClick:this.handleTriggerOnClick,ref:t=>this.trigger=t,part:"trigger"},H("slot",{name:"trigger"})),H("div",{class:"bq-tooltip--panel","aria-hidden":!this.visible,hidden:!this.visible,role:"tooltip",ref:t=>this.panel=t,part:"panel"},!this.hideArrow&&H("div",{class:"bq-tooltip--arrow",ref:t=>this.arrow=t}),H("slot",null)))}get el(){return Lt(this)}static get watchers(){return{visible:["handleVisibleChange"],distance:["handleFloatingUIOptionsChange"],hideArrow:["handleFloatingUIOptionsChange"],placement:["handleFloatingUIOptionsChange"],sameWidth:["handleFloatingUIOptionsChange"]}}};le.style=se;export{le as bq_tooltip};
