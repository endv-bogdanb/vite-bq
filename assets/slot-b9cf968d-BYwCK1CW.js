/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */function a(t){return t.nodeType===Node.ELEMENT_NODE}function f(t){return t.nodeType===Node.TEXT_NODE}function l(t,e=1,n=1/0){let o="";if(e<=n){if(f(t))o+=t.textContent;else if(a(t)&&t.hasChildNodes()){const r=e+1;t.childNodes.forEach(s=>{o+=l(s,r,n)})}}return o}function u(t,e){const n=t.assignedNodes({flatten:!0}),{recurse:o=!1,maxLevel:r}=e??{};let s="";return[...n].forEach(i=>{s+=l(i,1,o?r:1)}),s.trim()}function c(t,e){var n;const o=e?`[name='${e}']`:"",r=(n=t.querySelector(`slot${o}`))===null||n===void 0?void 0:n.assignedElements({flatten:!0});return!r||!Array.isArray(r)?!1:!!r.length}export{u as g,c as h};
