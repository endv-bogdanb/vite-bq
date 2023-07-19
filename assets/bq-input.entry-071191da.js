import{r as b,c as o,h as e,g as l}from"./index-ba53cd14.js";import{d as s}from"./debounce-ac8b3e9d-a5bf21ca.js";import{i as d}from"./isDefined-903e6d0d-b4ac10a2.js";import{i as n}from"./isHTMLElement-d2d24654-c51f4d20.js";import{h as r}from"./slot-31438d82-015c68c1.js";import"./isNil-cfe928b1-367165d6.js";import"./isString-6e83053a-a1b9004a.js";const c='*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(147,197,253,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-sizing:border-box}::-webkit-backdrop{--bq-blue-100:#e8f0fd;--bq-blue-200:#d0e2fb;--bq-blue-300:#a2c5f7;--bq-blue-400:#73a8f3;--bq-blue-500:#458bef;--bq-blue-600:#166eeb;--bq-blue-700:#1258bc;--bq-blue-800:#0d428d;--bq-blue-900:#092c5e;--bq-blue-1000:#04162f;--bq-corai-100:#fff2f3;--bq-corai-200:#ffe6e6;--bq-corai-300:#ffccce;--bq-corai-400:#ffb3b5;--bq-corai-500:#ff999d;--bq-corai-600:#ff8084;--bq-corai-700:#cc666a;--bq-corai-800:#994d4f;--bq-corai-900:#663335;--bq-corai-1000:#331a1a;--bq-cyan-100:#e8f7fb;--bq-cyan-200:#d2f0f8;--bq-cyan-300:#a5e1f1;--bq-cyan-400:#78d1e9;--bq-cyan-500:#4bc2e2;--bq-cyan-600:#1eb3db;--bq-cyan-700:#188faf;--bq-cyan-800:#126b83;--bq-cyan-900:#0c4858;--bq-cyan-1000:#06242c;--bq-gold-100:#fbf4ed;--bq-gold-200:#f7e9da;--bq-gold-300:#f0d3b6;--bq-gold-400:#e8bc91;--bq-gold-500:#e1a66d;--bq-gold-600:#d99048;--bq-gold-700:#ae733b;--bq-gold-800:#82562b;--bq-gold-900:#573a1d;--bq-gold-1000:#2b1d0e;--bq-green-100:#e8f8ef;--bq-green-200:#d2f1e0;--bq-green-300:#a5e3c1;--bq-green-400:#78d5a1;--bq-green-500:#4bc782;--bq-green-600:#1eb963;--bq-green-700:#18944f;--bq-green-800:#126f3b;--bq-green-900:#0c4a28;--bq-green-1000:#062514;--bq-grey-50:#f8f8f9;--bq-grey-100:#f0f1f2;--bq-grey-200:#e1e3e6;--bq-grey-300:#c4c7cc;--bq-grey-400:#a6aab3;--bq-grey-500:#898e99;--bq-grey-600:#6b7280;--bq-grey-700:#565b66;--bq-grey-800:#40444d;--bq-grey-900:#2b2e33;--bq-indigo-100:#edecfc;--bq-indigo-200:#dcdafa;--bq-indigo-300:#b9b5f5;--bq-indigo-400:#9590ef;--bq-indigo-500:#726bea;--bq-indigo-600:#4f46e5;--bq-indigo-700:#3f38b7;--bq-indigo-800:#2f2a89;--bq-indigo-900:#201c5c;--bq-indigo-1000:#100e2e;--bq-lime-100:#f5fae9;--bq-lime-200:#ecf6d2;--bq-lime-300:#d9eda5;--bq-lime-400:#c5e379;--bq-lime-500:#b2da4c;--bq-lime-600:#9fd120;--bq-lime-700:#7fa719;--bq-lime-800:#5f7d13;--bq-lime-900:#40540c;--bq-lime-1000:#202a06;--bq-magenta-100:#f8ebf3;--bq-magenta-200:#f1d7e8;--bq-magenta-300:#e3afd1;--bq-magenta-400:#d687b9;--bq-magenta-500:#c85fa2;--bq-magenta-600:#ba378b;--bq-magenta-700:#952c6f;--bq-magenta-800:#702153;--bq-magenta-900:#4a1638;--bq-magenta-1000:#250b1c;--bq-neutral-white:#fff;--bq-neutral-black:#000;--bq-orange-100:#fcf0e9;--bq-orange-200:#f8e1d4;--bq-orange-300:#f1c2a8;--bq-orange-400:#eaa47d;--bq-orange-500:#e38551;--bq-orange-600:#dc6726;--bq-orange-700:#b0521e;--bq-orange-800:#843e17;--bq-orange-900:#58290f;--bq-orange-1000:#2c1508;--bq-purple-100:#f0ebf9;--bq-purple-200:#e0d7f2;--bq-purple-300:#c1afe5;--bq-purple-400:#a388d8;--bq-purple-500:#8460cb;--bq-purple-600:#8460cb;--bq-purple-700:#512d98;--bq-purple-800:#3d2272;--bq-purple-900:#28164c;--bq-purple-1000:#140b26;--bq-red-100:#fce8ea;--bq-red-200:#f9d1d5;--bq-red-300:#f3a2ac;--bq-red-400:#ed7482;--bq-red-500:#e74559;--bq-red-600:#e1172f;--bq-red-700:#b41226;--bq-red-800:#870e1c;--bq-red-900:#5a0913;--bq-red-1000:#2d0509;--bq-sky-100:#eff5fb;--bq-sky-200:#dfeaf8;--bq-sky-300:#bfd5f1;--bq-sky-400:#9ec1e9;--bq-sky-500:#7eace2;--bq-sky-600:#5e97db;--bq-sky-700:#4b79af;--bq-sky-800:#385b83;--bq-sky-900:#263c58;--bq-sky-1000:#131e2c;--bq-teal-100:#e5f8f5;--bq-teal-200:#e5f8f5;--bq-teal-300:#99e1d8;--bq-teal-400:#66d2c4;--bq-teal-500:#33c3b1;--bq-teal-600:#00b49d;--bq-teal-700:#00907e;--bq-teal-800:#006c5e;--bq-teal-900:#00483f;--bq-teal-1000:#00241f;--bq-volcano-100:#feede8;--bq-volcano-200:#fddbd1;--bq-volcano-300:#fcb8a3;--bq-volcano-400:#fa9474;--bq-volcano-500:#f97146;--bq-volcano-600:#f97146;--bq-volcano-700:#c63e13;--bq-volcano-800:#942e0e;--bq-volcano-900:#631f0a;--bq-volcano-1000:#310f05;--bq-yellow-100:#fefbe7;--bq-yellow-200:#fcf6d0;--bq-yellow-300:#faeea0;--bq-yellow-400:#f7e571;--bq-yellow-500:#f5dd41;--bq-yellow-600:#f2d412;--bq-yellow-700:#c2aa0e;--bq-yellow-800:#917f0b;--bq-yellow-900:#615507;--bq-yellow-1000:#302a04;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(147,197,253,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(147,197,253,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.pointer-events-none{pointer-events:none}.m-0{margin:0}.mb-\\[--bq-input--label-margin-bottom\\]{margin-bottom:var(--bq-input--label-margin-bottom)}.me-\\[--bq-input--gap\\]{-webkit-margin-end:var(--bq-input--gap);margin-inline-end:var(--bq-input--gap)}.ms-\\[--bq-input--gap\\]{-webkit-margin-start:var(--bq-input--gap);margin-inline-start:var(--bq-input--gap)}.mt-\\[--bq-input--helper-margin-top\\]{margin-top:var(--bq-input--helper-margin-top)}.block{display:block}.flex{display:flex}.hidden{display:none}.h-auto{height:auto}.min-h-\\[--bq-input--icon-size\\]{min-height:var(--bq-input--icon-size)}.w-full{width:100%}.min-w-\\[0\\]{min-width:0}.flex-auto{flex:1 1 auto}.flex-grow{flex-grow:1}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-\\[inherit\\]{cursor:inherit}.cursor-not-allowed{cursor:not-allowed}.appearance-none{-webkit-appearance:none;appearance:none}.items-center{align-items:center}.gap-\\[--var\\(--bq-input--gap-label\\)\\]{gap:var(--var(--bq-input--gap-label))}.rounded-\\[--bq-input--border-radius\\]{border-radius:var(--bq-input--border-radius)}.rounded-xs{border-radius:var(--bq-radius--xs)}.border-\\[length\\:--bq-input--border-width\\]{border-width:var(--bq-input--border-width)}.border-none{border-style:none}.border-\\[color\\:--bq-input--border-color\\]{border-color:var(--bq-input--border-color)}.border-\\[color\\:--bq-stroke--tiertary-disabled\\]{border-color:var(--bq-stroke--tiertary-disabled)}.border-stroke-danger{border-color:var(--bq-stroke--danger)}.border-stroke-success{border-color:var(--bq-stroke--success)}.border-stroke-warning{border-color:var(--bq-stroke--warning)}.bg-\\[inherit\\]{background-color:inherit}.bg-ui-secondary-disabled{background-color:var(--bq-ui--secondary-disabled)}.p-0{padding:0}.py-\\[--bq-input--paddingY\\]{padding-bottom:var(--bq-input--paddingY);padding-top:var(--bq-input--paddingY)}.pe-\\[--bq-input--pading-end\\]{-webkit-padding-end:var(--bq-input--pading-end);padding-inline-end:var(--bq-input--pading-end)}.ps-\\[--bq-input--pading-start\\]{-webkit-padding-start:var(--bq-input--pading-start);padding-inline-start:var(--bq-input--pading-start)}.font-\\[inherit\\]{font-family:inherit}.text-\\[length\\:--bq-input--helper-text-size\\]{font-size:var(--bq-input--helper-text-size)}.text-\\[length\\:--bq-input--label-text-size\\]{font-size:var(--bq-input--label-text-size)}.text-\\[length\\:--bq-input--text-size\\]{font-size:var(--bq-input--text-size)}.text-\\[length\\:inherit\\]{font-size:inherit}.text-\\[color\\:--bq-input--helper-text-color\\]{color:var(--bq-input--helper-text-color)}.text-\\[color\\:--bq-input--label-text-color\\]{color:var(--bq-input--label-text-color)}.text-\\[color\\:--bq-input--text-color\\],.text-\\[color\\:var\\(--bq-input--text-color\\)\\]{color:var(--bq-input--text-color)}.text-text-danger{color:var(--bq-text--danger)}.text-text-success{color:var(--bq-text--success)}.text-text-warning{color:var(--bq-text--warning)}.transition-\\[border-color\\2c box-shadow\\]{transition-duration:.15s;transition-property:border-color,box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1)}@keyframes fade-in{0%{opacity:0}}@keyframes slide-in{0%{transform:translateY(10px)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:root{--bq-radius--none:0;--bq-radius--xs2:2px;--bq-radius--xs:4px;--bq-radius--s:8px;--bq-radius--m:12px;--bq-radius--l:24px;--bq-radius--xl:9999px;--bq-box-shadow--xs:0 2px 0 rgba(0,0,0,.016);--bq-box-shadow--s:0 8px 24px rgba(0,0,0,.04);--bq-box-shadow--m:0 10px 48px -16px rgba(0,0,0,.12);--bq-box-shadow--l:0 20px 58px -16px rgba(0,0,0,.16);--bq-font-family--outfit:"Outfit",sans-serif;--bq-font-size--xs:12px;--bq-font-size--s:14px;--bq-font-size--m:16px;--bq-font-size--l:20px;--bq-font-size--xl:24px;--bq-font-size--xxl:32px;--bq-font-size--xxl2:40px;--bq-font-size--xxl3:48px;--bq-font-size--xxl4:56px;--bq-font-size--xxl5:64px;--bq-font-weight--thin:100;--bq-font-weight--light:300;--bq-font-weight--regular:400;--bq-font-weight--medium:500;--bq-font-weight--semibold:600;--bq-font-weight--bold:700;--bq-font-line-height--regular:1.2;--bq-font-line-height--large:1.5}::backdrop,:root{--bq-blue-100:#e8f0fd;--bq-blue-200:#d0e2fb;--bq-blue-300:#a2c5f7;--bq-blue-400:#73a8f3;--bq-blue-500:#458bef;--bq-blue-600:#166eeb;--bq-blue-700:#1258bc;--bq-blue-800:#0d428d;--bq-blue-900:#092c5e;--bq-blue-1000:#04162f;--bq-corai-100:#fff2f3;--bq-corai-200:#ffe6e6;--bq-corai-300:#ffccce;--bq-corai-400:#ffb3b5;--bq-corai-500:#ff999d;--bq-corai-600:#ff8084;--bq-corai-700:#cc666a;--bq-corai-800:#994d4f;--bq-corai-900:#663335;--bq-corai-1000:#331a1a;--bq-cyan-100:#e8f7fb;--bq-cyan-200:#d2f0f8;--bq-cyan-300:#a5e1f1;--bq-cyan-400:#78d1e9;--bq-cyan-500:#4bc2e2;--bq-cyan-600:#1eb3db;--bq-cyan-700:#188faf;--bq-cyan-800:#126b83;--bq-cyan-900:#0c4858;--bq-cyan-1000:#06242c;--bq-gold-100:#fbf4ed;--bq-gold-200:#f7e9da;--bq-gold-300:#f0d3b6;--bq-gold-400:#e8bc91;--bq-gold-500:#e1a66d;--bq-gold-600:#d99048;--bq-gold-700:#ae733b;--bq-gold-800:#82562b;--bq-gold-900:#573a1d;--bq-gold-1000:#2b1d0e;--bq-green-100:#e8f8ef;--bq-green-200:#d2f1e0;--bq-green-300:#a5e3c1;--bq-green-400:#78d5a1;--bq-green-500:#4bc782;--bq-green-600:#1eb963;--bq-green-700:#18944f;--bq-green-800:#126f3b;--bq-green-900:#0c4a28;--bq-green-1000:#062514;--bq-grey-50:#f8f8f9;--bq-grey-100:#f0f1f2;--bq-grey-200:#e1e3e6;--bq-grey-300:#c4c7cc;--bq-grey-400:#a6aab3;--bq-grey-500:#898e99;--bq-grey-600:#6b7280;--bq-grey-700:#565b66;--bq-grey-800:#40444d;--bq-grey-900:#2b2e33;--bq-indigo-100:#edecfc;--bq-indigo-200:#dcdafa;--bq-indigo-300:#b9b5f5;--bq-indigo-400:#9590ef;--bq-indigo-500:#726bea;--bq-indigo-600:#4f46e5;--bq-indigo-700:#3f38b7;--bq-indigo-800:#2f2a89;--bq-indigo-900:#201c5c;--bq-indigo-1000:#100e2e;--bq-lime-100:#f5fae9;--bq-lime-200:#ecf6d2;--bq-lime-300:#d9eda5;--bq-lime-400:#c5e379;--bq-lime-500:#b2da4c;--bq-lime-600:#9fd120;--bq-lime-700:#7fa719;--bq-lime-800:#5f7d13;--bq-lime-900:#40540c;--bq-lime-1000:#202a06;--bq-magenta-100:#f8ebf3;--bq-magenta-200:#f1d7e8;--bq-magenta-300:#e3afd1;--bq-magenta-400:#d687b9;--bq-magenta-500:#c85fa2;--bq-magenta-600:#ba378b;--bq-magenta-700:#952c6f;--bq-magenta-800:#702153;--bq-magenta-900:#4a1638;--bq-magenta-1000:#250b1c;--bq-neutral-white:#fff;--bq-neutral-black:#000;--bq-orange-100:#fcf0e9;--bq-orange-200:#f8e1d4;--bq-orange-300:#f1c2a8;--bq-orange-400:#eaa47d;--bq-orange-500:#e38551;--bq-orange-600:#dc6726;--bq-orange-700:#b0521e;--bq-orange-800:#843e17;--bq-orange-900:#58290f;--bq-orange-1000:#2c1508;--bq-purple-100:#f0ebf9;--bq-purple-200:#e0d7f2;--bq-purple-300:#c1afe5;--bq-purple-400:#a388d8;--bq-purple-500:#8460cb;--bq-purple-600:#8460cb;--bq-purple-700:#512d98;--bq-purple-800:#3d2272;--bq-purple-900:#28164c;--bq-purple-1000:#140b26;--bq-red-100:#fce8ea;--bq-red-200:#f9d1d5;--bq-red-300:#f3a2ac;--bq-red-400:#ed7482;--bq-red-500:#e74559;--bq-red-600:#e1172f;--bq-red-700:#b41226;--bq-red-800:#870e1c;--bq-red-900:#5a0913;--bq-red-1000:#2d0509;--bq-sky-100:#eff5fb;--bq-sky-200:#dfeaf8;--bq-sky-300:#bfd5f1;--bq-sky-400:#9ec1e9;--bq-sky-500:#7eace2;--bq-sky-600:#5e97db;--bq-sky-700:#4b79af;--bq-sky-800:#385b83;--bq-sky-900:#263c58;--bq-sky-1000:#131e2c;--bq-teal-100:#e5f8f5;--bq-teal-200:#e5f8f5;--bq-teal-300:#99e1d8;--bq-teal-400:#66d2c4;--bq-teal-500:#33c3b1;--bq-teal-600:#00b49d;--bq-teal-700:#00907e;--bq-teal-800:#006c5e;--bq-teal-900:#00483f;--bq-teal-1000:#00241f;--bq-volcano-100:#feede8;--bq-volcano-200:#fddbd1;--bq-volcano-300:#fcb8a3;--bq-volcano-400:#fa9474;--bq-volcano-500:#f97146;--bq-volcano-600:#f97146;--bq-volcano-700:#c63e13;--bq-volcano-800:#942e0e;--bq-volcano-900:#631f0a;--bq-volcano-1000:#310f05;--bq-yellow-100:#fefbe7;--bq-yellow-200:#fcf6d0;--bq-yellow-300:#faeea0;--bq-yellow-400:#f7e571;--bq-yellow-500:#f5dd41;--bq-yellow-600:#f2d412;--bq-yellow-700:#c2aa0e;--bq-yellow-800:#917f0b;--bq-yellow-900:#615507;--bq-yellow-1000:#302a04}:host{--bq-input--background-color:var(--bq-neutral-white);--bq-input--border-color:var(--bq-stroke--tiertary);--bq-input--border-color-hover:var(--bq-stroke--brand-hover);--bq-input--border-color-focus:var(--bq-stroke--brand);--bq-input--border-color-disabled:var(--bq-stroke--tiertary-disabled);--bq-input--border-radius:var(--bq-radius--s);--bq-input--border-width:1px;--bq-input--border-style:solid;--bq-input--gap:var(--bq-spacing-xs);--bq-input--helper-margin-top:var(--bq-spacing-xs);--bq-input--helper-text-size:var(--bq-font-size--s);--bq-input--helper-text-color:var(--bq-text--primary);--bq-input--icon-size:24px;--bq-input--label-margin-bottom:var(--bq-spacing-xs);--bq-input--label-text-size:var(--bq-font-size--s);--bq-input--label-text-color:var(--bq-text--primary);--bq-input--pading-start:var(--bq-spacing-m);--bq-input--pading-end:var(--bq-spacing-m);--bq-input--paddingY:var(--bq-spacing-s);--bq-input--text-color:var(--bq-text--primary);--bq-input--text-size:var(--bq-font-size--m);--bq-input--text-placeholder-color:var(--bq-text--secondary-disabled);display:block}.bq-input--label{align-items:center;color:var(--bq-input--label-text-color);display:flex;flex-grow:1;font-size:var(--bq-input--label-text-size);gap:var(--var(--bq-input--gap-label));margin-bottom:var(--bq-input--label-margin-bottom)}.bq-input--helper-text{color:var(--bq-input--helper-text-color);font-size:var(--bq-input--helper-text-size);margin-top:var(--bq-input--helper-margin-top)}.bq-input--helper-text.validation-error{color:var(--bq-text--danger)}.bq-input--helper-text.validation-success{color:var(--bq-text--success)}.bq-input--helper-text.validation-warning{color:var(--bq-text--warning)}.bq-input--control{-webkit-padding-end:var(--bq-input--pading-end);-webkit-padding-start:var(--bq-input--pading-start);align-items:center;border-color:var(--bq-input--border-color);border-radius:var(--bq-input--border-radius);border-style:var(--bq-input--border-style);border-width:var(--bq-input--border-width);color:var(--bq-input--text-color);display:flex;font-size:var(--bq-input--text-size);padding-bottom:var(--bq-input--paddingY);padding-inline-end:var(--bq-input--pading-end);padding-top:var(--bq-input--paddingY);padding-inline-start:var(--bq-input--pading-start);transition-duration:.15s;transition-property:border-color,box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.bq-input--control::placeholder{color:var(--bq-input--text-placeholder-color)}.bq-input--control:hover:not(:focus-within):not(.disabled){border-color:var(--bq-input--border-color-hover)}.bq-input--control:not(.disabled):focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-color:var(--bq-input--border-color-focus);border-color:var(--bq-input--border-color-focus);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);outline:2px solid transparent;outline-offset:2px}.bq-input--control.disabled{background-color:var(--bq-ui--secondary-disabled);border-color:var(--bq-stroke--tiertary-disabled);cursor:not-allowed}.bq-input--control.validation-error{border-color:var(--bq-stroke--danger)}.bq-input--control.validation-error:focus-within{--tw-ring-color:var(--bq-stroke--danger-active);border-color:var(--bq-stroke--danger-active)}.bq-input--control.validation-error:hover:not(:focus-within){border-color:var(--bq-stroke--danger-hover)}.bq-input--control.validation-success{border-color:var(--bq-stroke--success)}.bq-input--control.validation-success:focus-within{--tw-ring-color:var(--bq-stroke--success-active);border-color:var(--bq-stroke--success-active)}.bq-input--control.validation-success:hover:not(:focus-within){border-color:var(--bq-stroke--success-hover)}.bq-input--control.validation-warning{border-color:var(--bq-stroke--warning)}.bq-input--control.validation-warning:focus-within{--tw-ring-color:var(--bq-stroke--warning-active);border-color:var(--bq-stroke--warning-active)}.bq-input--control.validation-warning:hover:not(:focus-within){border-color:var(--bq-stroke--warning-hover)}.bq-input--control__input{-webkit-appearance:none;appearance:none;background-color:inherit;border-style:none;box-shadow:none;cursor:inherit;flex:1 1 auto;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;min-height:var(--bq-input--icon-size);min-width:0;padding:0}.bq-input--control__input:focus{outline:2px solid transparent;outline-offset:2px}.bq-input--control__input:focus-visible{outline:2px solid transparent;outline-offset:2px}.bq-input--control__clear::part(button){border-radius:var(--bq-radius--xs);border-style:none;height:auto;padding:0}.bq-input--control__prefix,.bq-input--control__suffix{align-items:center;color:var(--bq-input--text-color);display:flex;pointer-events:none}.bq-input--control__prefix{-webkit-margin-end:var(--bq-input--gap);margin-inline-end:var(--bq-input--gap)}.bq-input--control__suffix{-webkit-margin-start:var(--bq-input--gap);margin-inline-start:var(--bq-input--gap)}::slotted(bq-icon),bq-icon{--bq-icon--size:var(--bq-input--icon-size)!important}.bq-input--control__input::-moz-search-cancel{appearance:none;display:none}.bq-input--control__input::-webkit-search-cancel-button,.bq-input--control__input::-webkit-search-decoration,.bq-input--control__input::-webkit-search-results-button,.bq-input--control__input::-webkit-search-results-decoration{-webkit-appearance:none;appearance:none;display:none}.bq-input--control__input::-webkit-datetime-edit,.bq-input--control__input::-webkit-datetime-edit-day-field,.bq-input--control__input::-webkit-datetime-edit-fields-wrapper,.bq-input--control__input::-webkit-datetime-edit-hour-field,.bq-input--control__input::-webkit-datetime-edit-meridiem-field,.bq-input--control__input::-webkit-datetime-edit-millisecond-field,.bq-input--control__input::-webkit-datetime-edit-minute-field,.bq-input--control__input::-webkit-datetime-edit-month-field,.bq-input--control__input::-webkit-datetime-edit-second-field,.bq-input--control__input::-webkit-datetime-edit-year-field{padding:0}.placeholder\\:text-\\[color\\:--bq-input--text-placeholder-color\\]::placeholder{color:var(--bq-input--text-placeholder-color)}.focus-within\\:border-\\[color\\:--bq-input--border-color-focus\\]:focus-within{border-color:var(--bq-input--border-color-focus)}.focus-within\\:border-stroke-danger-active:focus-within{border-color:var(--bq-stroke--danger-active)}.focus-within\\:border-stroke-success-active:focus-within{border-color:var(--bq-stroke--success-active)}.focus-within\\:border-stroke-warning-active:focus-within{border-color:var(--bq-stroke--warning-active)}.focus-within\\:outline-none:focus-within{outline:2px solid transparent;outline-offset:2px}.focus-within\\:ring-1:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus-within\\:ring-\\[color\\:--bq-input--border-color-focus\\]:focus-within{--tw-ring-color:var(--bq-input--border-color-focus)}.focus-within\\:ring-stroke-danger-active:focus-within{--tw-ring-color:var(--bq-stroke--danger-active)}.focus-within\\:ring-stroke-success-active:focus-within{--tw-ring-color:var(--bq-stroke--success-active)}.focus-within\\:ring-stroke-warning-active:focus-within{--tw-ring-color:var(--bq-stroke--warning-active)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.\\[\\&\\:not\\(\\:focus-within\\)\\:not\\(\\.disabled\\)\\]\\:hover\\:border-\\[color\\:--bq-input--border-color-hover\\]:hover:not(:focus-within):not(.disabled){border-color:var(--bq-input--border-color-hover)}*{margin:0}ol[role=list],ul[role=list]{list-style:none}html:focus-within{scroll-behavior:smooth}body{-webkit-font-smoothing:antialiased;line-height:var(--bq-font-line-height--large);min-height:100vh;text-rendering:optimizeSpeed}a:not([class]){-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}canvas,img,picture,svg,video{display:block;max-width:100%}button,input,select,textarea{font:inherit}h1,h2,h3,h4,h5,h6,p{overflow-wrap:break-word}@media (prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.focus{--tw-ring-width:2px;--tw-ring-offset-width:1px;--tw-ring-color:var(--bq-stroke--brand-focus);outline:var(--tw-ring-width) solid var(--bq-stroke--brand-focus);outline-offset:var(--tw-ring-offset-width)}.visible{visibility:visible}.static{position:static}.group:hover .group-hover\\:inline-block{display:inline-block}.group:has(:focus-within) .group-\\[\\&\\:has\\(\\:focus-within\\)\\]\\:inline-block{display:inline-block}@font-face{font-display:swap;font-family:Outfit;font-style:normal;font-weight:100;src:url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Outfit;font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Outfit;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Outfit;font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Outfit;font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Outfit;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}.h-\\[var\\(--bq-icon--size\\)\\]{height:var(--bq-icon--size)}.w-\\[var\\(--bq-icon--size\\)\\]{width:var(--bq-icon--size)}.text-\\[color\\:var\\(--bq-icon--color\\)\\]{color:var(--bq-icon--color)}',u=class{constructor(t){b(this,t),this.bqBlur=o(this,"bqBlur",7),this.bqChange=o(this,"bqChange",7),this.bqClear=o(this,"bqClear",7),this.bqFocus=o(this,"bqFocus",7),this.bqInput=o(this,"bqInput",7),this.handleBlur=()=>{this.bqBlur.emit(this.el)},this.handleFocus=()=>{this.bqFocus.emit(this.el)},this.handleInput=i=>{var a;(a=this.debounceBqInput)===null||a===void 0||a.cancel(),n(i.target,"input")&&(this.value=i.target.value,this.debounceBqInput=s(()=>{this.bqInput.emit({value:this.value,el:this.el})},this.debounceTime),this.debounceBqInput())},this.handleChange=i=>{n(i.target,"input")&&(this.value=i.target.value,this.bqChange.emit({value:this.value,el:this.el}))},this.handleClearClick=i=>{this.inputElem.value="",this.value=this.inputElem.value,this.bqClear.emit(this.el),this.bqChange.emit({value:this.value,el:this.el}),this.inputElem.focus(),i.stopPropagation()},this.handleLabelSlotChange=()=>{this.hasLabel=r(this.labelElem)},this.handlePrefixSlotChange=()=>{this.hasPrefix=r(this.prefixElem)},this.handleSuffixSlotChange=()=>{this.hasSuffix=r(this.suffixElem)},this.handleHelperTextSlotChange=()=>{this.hasHelperText=r(this.helperTextElem)},this.hasHelperText=!1,this.hasLabel=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.hasValue=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=void 0,this.clearButtonLabel="Clear value",this.debounceTime=0,this.disabled=!1,this.disableClear=!1,this.form=void 0,this.inputmode=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.name=void 0,this.pattern=void 0,this.placeholder=void 0,this.readonly=void 0,this.required=void 0,this.step=void 0,this.type="text",this.validationStatus="none",this.value=void 0}handleValueChange(){if(Array.isArray(this.value)){this.hasValue=this.value.some(t=>t.length>0);return}this.hasValue=d(this.value)}componentDidLoad(){this.handleValueChange()}render(){return e("div",{class:"bq-input",part:"base"},e("label",{class:{"bq-input--label":!0,hidden:!this.hasLabel},htmlFor:"input",ref:t=>this.labelElem=t,part:"label"},e("slot",{name:"label",onSlotchange:this.handleLabelSlotChange})),e("div",{class:{"bq-input--control group":!0,[`validation-${this.validationStatus}`]:!0,disabled:this.disabled},part:"control"},e("span",{class:{"bq-input--control__prefix":!0,hidden:!this.hasPrefix},ref:t=>this.prefixElem=t,part:"prefix"},e("slot",{name:"prefix",onSlotchange:this.handlePrefixSlotChange})),e("input",{id:"input",class:"bq-input--control__input","aria-disabled":this.disabled?"true":"false",autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,disabled:this.disabled,form:this.form,inputMode:this.inputmode,max:this.max,maxLength:this.maxlength,min:this.min,minLength:this.minlength,name:this.name,pattern:this.pattern,placeholder:this.placeholder,ref:t=>this.inputElem=t,readOnly:this.readonly,required:this.required,step:this.step,type:this.type,value:this.value,part:"input",onBlur:this.handleBlur,onChange:this.handleChange,onFocus:this.handleFocus,onInput:this.handleInput}),!this.disableClear&&this.hasValue&&e("bq-button",{class:"bq-input--control__clear ms-[--bq-input--gap] hidden group-hover:inline-block group-[&:has(:focus-within)]:inline-block",appearance:"text","aria-label":this.clearButtonLabel,size:"small",onBqClick:this.handleClearClick,part:"clear-btn",exportparts:"button"},e("slot",{name:"clear-icon"},e("bq-icon",{name:"x-circle",class:"flex"}))),e("span",{class:{"bq-input--control__suffix":!0,hidden:!this.hasSuffix},ref:t=>this.suffixElem=t,part:"suffix"},e("slot",{name:"suffix",onSlotchange:this.handleSuffixSlotChange}))),e("div",{class:{[`bq-input--helper-text validation-${this.validationStatus}`]:!0,hidden:!this.hasHelperText},ref:t=>this.helperTextElem=t,part:"helper-text"},e("slot",{name:"helper-text",onSlotchange:this.handleHelperTextSlotChange})))}static get delegatesFocus(){return!0}get el(){return l(this)}static get watchers(){return{value:["handleValueChange"]}}};u.style=c;export{u as bq_input};
