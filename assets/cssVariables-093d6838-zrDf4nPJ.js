/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */const r="--bq-";function o(t){const e=`${r}${t}`;if(getComputedStyle(document.documentElement).getPropertyValue(e))return`var(${e})`}function u(t,e){const n=getComputedStyle(e);return String(n.getPropertyValue(`--${t}`)).trim()}export{o as a,u as g};
