import{r as o,c as n,h as r,g as s}from"./index-DCyAShRY.js";import{i as l}from"./isDefined-0cb07ee6-IpvOc8xG.js";import{i as q}from"./isHTMLElement-0271eefe-CyE4DoDn.js";import{h as i,g as c}from"./slot-b9cf968d-BYwCK1CW.js";import"./isString-9820a2b7-sJdwEqDK.js";/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */const d='::backdrop,:root{--bq-blue-100:#e7f0fd;--bq-blue-200:#d0e2fb;--bq-blue-300:#a1c5f7;--bq-blue-400:#73a8f3;--bq-blue-500:#448bef;--bq-blue-600:#156eeb;--bq-blue-700:#1158bc;--bq-blue-800:#0d428d;--bq-blue-900:#082c5e;--bq-blue-1000:#04162f;--bq-corai-100:#fff2f2;--bq-corai-200:#ffe6e6;--bq-corai-300:#ffccce;--bq-corai-400:#ffb3b5;--bq-corai-500:#ff999d;--bq-corai-600:#ff8084;--bq-corai-700:#cc666a;--bq-corai-800:#994d4f;--bq-corai-900:#663335;--bq-corai-1000:#331a1a;--bq-cyan-100:#e8f7fb;--bq-cyan-200:#d2f0f8;--bq-cyan-300:#a5e1f1;--bq-cyan-400:#78d1e9;--bq-cyan-500:#4bc2e2;--bq-cyan-600:#1eb3db;--bq-cyan-700:#188faf;--bq-cyan-800:#126b83;--bq-cyan-900:#0c4858;--bq-cyan-1000:#06242c;--bq-gold-100:#fbf4ec;--bq-gold-200:#f7e9da;--bq-gold-300:#f0d3b6;--bq-gold-400:#e8bc91;--bq-gold-500:#e1a66d;--bq-gold-600:#d99048;--bq-gold-700:#ae733a;--bq-gold-800:#82562b;--bq-gold-900:#573a1d;--bq-gold-1000:#2b1d0e;--bq-green-100:#e8f8ef;--bq-green-200:#d2f1e0;--bq-green-300:#a5e3c1;--bq-green-400:#78d5a1;--bq-green-500:#4bc782;--bq-green-600:#1eb963;--bq-green-700:#18944f;--bq-green-800:#126f3b;--bq-green-900:#0c4a28;--bq-green-1000:#062514;--bq-grey-100:#f1f2f4;--bq-grey-200:#e7e8eb;--bq-grey-300:#caccd2;--bq-grey-400:#a6aab3;--bq-grey-50:#f6f6f8;--bq-grey-500:#898e99;--bq-grey-600:#646a77;--bq-grey-700:#3f4350;--bq-grey-800:#2a2c35;--bq-grey-900:#1c1d23;--bq-grey-950:#15161a;--bq-grey-1000:#0d0e11;--bq-indigo-100:#edecfc;--bq-indigo-200:#dcdafa;--bq-indigo-300:#b9b5f5;--bq-indigo-400:#9590ef;--bq-indigo-500:#726bea;--bq-indigo-600:#4f46e5;--bq-indigo-700:#3f38b7;--bq-indigo-800:#2f2a89;--bq-indigo-900:#201c5c;--bq-indigo-1000:#100e2e;--bq-iris-100:#e9f0ff;--bq-iris-200:#d6e0ff;--bq-iris-300:#b2c0fe;--bq-iris-400:#8691f8;--bq-iris-500:#6061ee;--bq-iris-600:#4f46e5;--bq-iris-700:#413abd;--bq-iris-800:#332e95;--bq-iris-900:#26216d;--bq-iris-1000:#181545;--bq-lime-100:#f5fae8;--bq-lime-200:#ecf6d2;--bq-lime-300:#d9eda5;--bq-lime-400:#c5e379;--bq-lime-500:#b2da4c;--bq-lime-600:#9fd11f;--bq-lime-700:#7fa719;--bq-lime-800:#5f7d13;--bq-lime-900:#40540c;--bq-lime-1000:#202a06;--bq-magenta-100:#fce7f4;--bq-magenta-200:#f9cfea;--bq-magenta-300:#f39fd6;--bq-magenta-400:#ee6fbf;--bq-magenta-500:#e83fab;--bq-magenta-600:#de1395;--bq-magenta-700:#b20f77;--bq-magenta-800:#850c59;--bq-magenta-900:#58083c;--bq-magenta-1000:#2c041e;--bq-neutral-white:#fbfbfc;--bq-neutral-black:#060708;--bq-orange-100:#fbf0e9;--bq-orange-200:#f8e1d4;--bq-orange-300:#f1c2a8;--bq-orange-400:#eaa47d;--bq-orange-500:#e38551;--bq-orange-600:#dc6726;--bq-orange-700:#b0521e;--bq-orange-800:#843e17;--bq-orange-900:#58290f;--bq-orange-1000:#2c1508;--bq-purple-100:#efebf8;--bq-purple-200:#e0d7f2;--bq-purple-300:#c1afe5;--bq-purple-400:#a388d8;--bq-purple-500:#8460cb;--bq-purple-600:#6538be;--bq-purple-700:#512d98;--bq-purple-800:#3d2272;--bq-purple-900:#28164c;--bq-purple-1000:#140b26;--bq-red-100:#fce7ea;--bq-red-200:#f9d1d5;--bq-red-300:#f3a2ac;--bq-red-400:#ed7482;--bq-red-500:#e74559;--bq-red-600:#e1172f;--bq-red-700:#b41226;--bq-red-800:#870e1c;--bq-red-900:#5a0913;--bq-red-1000:#2d0509;--bq-sky-100:#eff4fb;--bq-sky-200:#dfeaf8;--bq-sky-300:#bfd5f1;--bq-sky-400:#9ec1e9;--bq-sky-500:#7eace2;--bq-sky-600:#5e97db;--bq-sky-700:#4b79af;--bq-sky-800:#385b83;--bq-sky-900:#263c58;--bq-sky-1000:#131e2c;--bq-teal-100:#e5f7f5;--bq-teal-200:#ccf0eb;--bq-teal-300:#99e1d8;--bq-teal-400:#66d2c4;--bq-teal-500:#33c3b1;--bq-teal-600:#00b49d;--bq-teal-700:#00907e;--bq-teal-800:#006c5e;--bq-teal-900:#00483f;--bq-teal-1000:#00241f;--bq-volcano-100:#feede7;--bq-volcano-200:#fddbd1;--bq-volcano-300:#fbb8a3;--bq-volcano-400:#fa9474;--bq-volcano-500:#f87146;--bq-volcano-600:#f64d18;--bq-volcano-700:#c53e13;--bq-volcano-800:#942e0e;--bq-volcano-900:#621f0a;--bq-volcano-1000:#310f05;--bq-yellow-100:#fefbe7;--bq-yellow-200:#fcf6d0;--bq-yellow-300:#faeea0;--bq-yellow-400:#f7e571;--bq-yellow-500:#f5dd41;--bq-yellow-600:#f2d412;--bq-yellow-700:#c2aa0e;--bq-yellow-800:#917f0b;--bq-yellow-900:#615507;--bq-yellow-1000:#302a04;--bq-endava-grey-50:#f7f7f8;--bq-endava-grey-100:#e4e6e7;--bq-endava-grey-200:#b5babe;--bq-endava-grey-300:#949ca1;--bq-endava-grey-400:#737d84;--bq-endava-grey-500:#525f67;--bq-endava-grey-600:#30404b;--bq-endava-grey-700:#2b3942;--bq-endava-grey-800:#263139;--bq-endava-grey-900:#192b37;--bq-endava-grey-950:#151b1e;--bq-endava-grey-1000:#0f1316;--bq-endava-neutral-white:#fafbfb;--bq-endava-neutral-black:#060708;--bq-endava-orange-100:#fef3f1;--bq-endava-orange-200:#fbd6d1;--bq-endava-orange-300:#fab7af;--bq-endava-orange-400:#fa988b;--bq-endava-orange-500:#fc7866;--bq-endava-orange-600:#ff5640;--bq-endava-orange-700:#ce4a39;--bq-endava-orange-800:#a03d30;--bq-endava-orange-900:#722e25;--bq-endava-orange-1000:#471e19}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(147,197,253,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-sizing:border-box}*{font:inherit;margin:0}ol[role=list],ul[role=list]{list-style-type:none}html{font-size:var(--bq-font-size--m)}html:focus-within{scroll-behavior:smooth}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:var(--bq-background--primary);color:var(--bq-text--primary);font-family:var(--bq-font-family);line-height:var(--bq-font-line-height--regular);min-height:100vh;text-rendering:optimizeSpeed}a:not([class]){text-decoration-skip-ink:auto}canvas,img,picture,svg,video{display:block;max-width:100%}button,input,select,textarea{font:inherit}h1,h2,h3,h4,h5,h6,p{overflow-wrap:break-word}@media (prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto;transition-duration:.01ms!important}}:root{--bq-white:#fff;--bq-black:#060708;--bq-neutral-50:var(--bq-grey-50);--bq-neutral-100:var(--bq-grey-100);--bq-neutral-200:var(--bq-grey-200);--bq-neutral-300:var(--bq-grey-300);--bq-neutral-400:var(--bq-grey-400);--bq-neutral-500:var(--bq-grey-500);--bq-neutral-600:var(--bq-grey-600);--bq-neutral-700:var(--bq-grey-700);--bq-neutral-800:var(--bq-grey-800);--bq-neutral-900:var(--bq-grey-900);--bq-neutral-950:var(--bq-grey-950);--bq-neutral-1000:var(--bq-grey-1000);--bq-brand-light:var(--bq-iris-100);--bq-brand:var(--bq-iris-600);--bq-brand-dark:var(--bq-iris-1000);--bq-accent-light:var(--bq-purple-100);--bq-accent:var(--bq-purple-600);--bq-accent-dark:var(--bq-purple-1000);--bq-success-light:var(--bq-teal-100);--bq-success:var(--bq-teal-600);--bq-success-dark:var(--bq-teal-1000);--bq-danger-light:var(--bq-red-100);--bq-danger:var(--bq-red-600);--bq-danger-dark:var(--bq-red-1000);--bq-warning-light:var(--bq-gold-100);--bq-warning:var(--bq-gold-600);--bq-warning-dark:var(--bq-gold-1000);--bq-info-light:var(--bq-iris-100);--bq-info:var(--bq-iris-600);--bq-info-dark:var(--bq-iris-1000);--bq-focus:var(--bq-iris-600);--bq-data-01:var(--bq-brand);--bq-data-02:var(--bq-purple-600);--bq-data-03:var(--bq-magenta-600);--bq-data-04:var(--bq-cyan-600);--bq-data-05:var(--bq-teal-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-yellow-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-blue-600);--bq-data-10:var(--bq-grey-600);--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white);--bq-radius--none:0;--bq-radius--xs2:0.125rem;--bq-radius--xs:0.25rem;--bq-radius--s:0.5rem;--bq-radius--m:0.75rem;--bq-radius--l:1.5rem;--bq-radius--full:9999px;--bq-box-shadow--xs:0 2px 0 rgba(0,0,0,.016);--bq-box-shadow--s:0 8px 24px rgba(0,0,0,.04);--bq-box-shadow--m:0 10px 48px -16px rgba(0,0,0,.12);--bq-box-shadow--l:0 20px 58px -16px rgba(0,0,0,.16);--bq-font-family:"Outfit",sans-serif;--bq-font-size--xs:0.75rem;--bq-font-size--s:0.875rem;--bq-font-size--m:1rem;--bq-font-size--l:1.125rem;--bq-font-size--xl:1.5rem;--bq-font-size--xxl:2rem;--bq-font-size--xxl2:2.5rem;--bq-font-size--xxl3:3rem;--bq-font-size--xxl4:3.5rem;--bq-font-size--xxl5:4rem;--bq-font-weight--thin:100;--bq-font-weight--light:300;--bq-font-weight--regular:400;--bq-font-weight--medium:500;--bq-font-weight--semibold:600;--bq-font-weight--bold:700;--bq-font-line-height--small:1.2;--bq-font-line-height--regular:1.5;--bq-font-line-height--large:1.5;--bq-spacing-xs3:0.125rem;--bq-spacing-xs2:0.25rem;--bq-spacing-xs:0.5rem;--bq-spacing-s:0.75rem;--bq-spacing-m:1rem;--bq-spacing-l:1.5rem;--bq-spacing-xl:2rem;--bq-spacing-xxl:2.5rem;--bq-spacing-xxl2:3.5rem;--bq-spacing-xxl3:4rem;--bq-spacing-xxl4:4.5rem}.beeq.light,.light,:root,[bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--alt:var(--bq-white);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--info:var(--bq-brand);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-brand);--bq-text--primary:var(--bq-neutral-800);--bq-text--alt:var(--bq-white);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--info:var(--bq-brand);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-brand);--bq-ui--info-alt:var(--bq-brand-light);--bq-hover:#bcbfc5;--bq-active:#444546}.beeq.dark,.dark,[bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-950);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--alt:var(--bq-white);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--info:var(--bq-brand);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-brand);--bq-text--primary:var(--bq-neutral-100);--bq-text--alt:var(--bq-white);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--info:var(--bq-brand);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-brand);--bq-ui--info-alt:var(--bq-brand-dark);--bq-hover:#444546;--bq-active:#1f2026}.endava,[bq-theme=endava]{--bq-font-family:"Roboto",sans-serif;--bq-white:#fafbfb;--bq-black:#030406;--bq-neutral-50:var(--bq-endava-grey-50);--bq-neutral-100:var(--bq-endava-grey-100);--bq-neutral-200:var(--bq-endava-grey-200);--bq-neutral-300:var(--bq-endava-grey-300);--bq-neutral-400:var(--bq-endava-grey-400);--bq-neutral-500:var(--bq-endava-grey-500);--bq-neutral-600:var(--bq-endava-grey-600);--bq-neutral-700:var(--bq-endava-grey-700);--bq-neutral-800:var(--bq-endava-grey-800);--bq-neutral-900:var(--bq-endava-grey-900);--bq-neutral-950:var(--bq-endava-grey-950);--bq-neutral-1000:var(--bq-endava-grey-1000);--bq-brand-light:var(--bq-endava-orange-100);--bq-brand:var(--bq-endava-orange-600);--bq-brand-dark:var(--bq-endava-orange-1000);--bq-accent-light:var(--bq-endava-orange-100);--bq-accent:var(--bq-endava-orange-600);--bq-accent-dark:var(--bq-endava-orange-1000);--bq-success-light:var(--bq-green-100);--bq-success:var(--bq-green-600);--bq-success-dark:var(--bq-green-1000);--bq-danger-light:var(--bq-corai-100);--bq-danger:var(--bq-corai-600);--bq-danger-dark:var(--bq-corai-1000);--bq-warning-light:var(--bq-yellow-100);--bq-warning:var(--bq-yellow-600);--bq-warning-dark:var(--bq-yellow-1000);--bq-info-light:var(--bq-blue-100);--bq-info:var(--bq-blue-600);--bq-info-dark:var(--bq-blue-1000);--bq-focus:var(--bq-endava-orange-600);--bq-data-01:var(--bq-brand);--bq-data-02:#af0cd8;--bq-data-03:#0ca8d8;--bq-data-04:var(--bq-teal-600);--bq-data-05:var(--bq-yellow-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-blue-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-purple-600);--bq-data-10:#394b56;--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white)}.endava.light,[bq-theme=endava][bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--alt:var(--bq-white);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--brand-alt:var(--bq-brand-light);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-800);--bq-text--alt:var(--bq-white);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-light);--bq-hover:#444546;--bq-active:#1f2026}.endava.dark,[bq-theme=endava][bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-900);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--alt:var(--bq-white);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--brand-alt:var(--bq-brand-dark);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-100);--bq-text--alt:var(--bq-neutral-white);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-dark);--bq-hover:#444546;--bq-active:#1f2026}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(147,197,253,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.pointer-events-none{pointer-events:none}.m-0{margin:0}.mb-\\[--bq-select--label-margin-bottom\\]{margin-bottom:var(--bq-select--label-margin-bottom)}.me-\\[--bq-select--gap\\]{margin-inline-end:var(--bq-select--gap)}.ms-\\[--bq-select--gap\\]{margin-inline-start:var(--bq-select--gap)}.mt-\\[--bq-select--helper-margin-top\\]{margin-top:var(--bq-select--helper-margin-top)}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.h-auto{height:auto}.min-h-\\[--bq-select--icon-size\\]{min-height:var(--bq-select--icon-size)}.w-full{width:100%}.min-w-\\[0\\]{min-width:0}.flex-auto{flex:1 1 auto}.flex-grow{flex-grow:1}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-\\[inherit\\]{cursor:inherit}.cursor-not-allowed{cursor:not-allowed}.select-none{user-select:none}.appearance-none{appearance:none}.items-center{align-items:center}.gap-\\[--var\\(--bq-select--gap-label\\)\\]{gap:var(--var(--bq-select--gap-label))}.rounded-\\[--bq-select--border-radius\\]{border-radius:var(--bq-select--border-radius)}.rounded-xs{border-radius:var(--bq-radius--xs)}.border-\\[length\\:--bq-select--border-width\\]{border-width:var(--bq-select--border-width)}.border-none{border-style:none}.border-\\[color\\:--bq-select--border-color-focus\\]{border-color:var(--bq-select--border-color-focus)}.border-\\[color\\:--bq-select--border-color\\]{border-color:var(--bq-select--border-color)}.border-stroke-danger{border-color:var(--bq-stroke--danger)}.border-stroke-success{border-color:var(--bq-stroke--success)}.border-stroke-warning{border-color:var(--bq-stroke--warning)}.bg-\\[inherit\\]{background-color:inherit}.p-0{padding:0}.py-\\[--bq-select--paddingY\\]{padding-bottom:var(--bq-select--paddingY);padding-top:var(--bq-select--paddingY)}.pe-\\[--bq-select--pading-end\\]{padding-inline-end:var(--bq-select--pading-end)}.ps-\\[--bq-select--pading-start\\]{padding-inline-start:var(--bq-select--pading-start)}.font-\\[inherit\\]{font-family:inherit}.text-\\[length\\:--bq-select--helper-text-size\\]{font-size:var(--bq-select--helper-text-size)}.text-\\[length\\:--bq-select--label-text-size\\]{font-size:var(--bq-select--label-text-size)}.text-\\[length\\:--bq-select--text-size\\]{font-size:var(--bq-select--text-size)}.text-\\[length\\:inherit\\]{font-size:inherit}.text-\\[color\\:--bq-select--helper-text-color\\]{color:var(--bq-select--helper-text-color)}.text-\\[color\\:--bq-select--label-text-color\\]{color:var(--bq-select--label-text-color)}.text-\\[color\\:--bq-select--text-color\\]{color:var(--bq-select--text-color)}.text-\\[color\\:inherit\\]{color:inherit}.text-\\[color\\:var\\(--bq-select--text-color\\)\\]{color:var(--bq-select--text-color)}.text-text-danger{color:var(--bq-text--danger)}.text-text-success{color:var(--bq-text--success)}.text-text-warning{color:var(--bq-text--warning)}.opacity-60{opacity:.6}.transition-\\[border-color\\2c box-shadow\\]{transition-duration:.15s;transition-property:border-color,box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.border-active-stroke-danger{border-color:color-mix(in srgb,var(--bq-stroke--danger),var(--bq-active) 20%)}.border-active-stroke-success{border-color:color-mix(in srgb,var(--bq-stroke--success),var(--bq-active) 20%)}.border-active-stroke-warning{border-color:color-mix(in srgb,var(--bq-stroke--warning),var(--bq-active) 20%)}.focus{outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}@-webkit-keyframes fade-in{0%{opacity:0}}@keyframes fade-in{0%{opacity:0}}@-webkit-keyframes slide-in{0%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slide-in{0%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}:host{--bq-select--background-color:var(--bq-ui--primary);--bq-select--border-color:var(--bq-stroke--tertiary);--bq-select--border-color-focus:var(--bq-stroke--brand);--bq-select--border-radius:var(--bq-radius--s);--bq-select--border-width:1px;--bq-select--border-style:solid;--bq-select--gap:var(--bq-spacing-xs);--bq-select--helper-margin-top:var(--bq-spacing-xs);--bq-select--helper-text-size:var(--bq-font-size--s);--bq-select--helper-text-color:var(--bq-text--primary);--bq-select--icon-size:24px;--bq-select--label-margin-bottom:var(--bq-spacing-xs);--bq-select--label-text-size:var(--bq-font-size--s);--bq-select--label-text-color:var(--bq-text--primary);--bq-select--pading-start:var(--bq-spacing-m);--bq-select--pading-end:var(--bq-spacing-m);--bq-select--paddingY:var(--bq-spacing-s);--bq-select--text-color:var(--bq-text--primary);--bq-select--text-size:var(--bq-font-size--m);--bq-select--text-placeholder-color:var(--bq-text--secondary);display:block;width:100%}.bq-select__label{align-items:center;color:var(--bq-select--label-text-color);display:flex;flex-grow:1;font-size:var(--bq-select--label-text-size);gap:var(--var(--bq-select--gap-label));margin-bottom:var(--bq-select--label-margin-bottom)}.bq-select__helper-text{color:var(--bq-select--helper-text-color);font-size:var(--bq-select--helper-text-size);margin-top:var(--bq-select--helper-margin-top)}.bq-select__helper-text.validation-error{color:var(--bq-text--danger)}.bq-select__helper-text.validation-success{color:var(--bq-text--success)}.bq-select__helper-text.validation-warning{color:var(--bq-text--warning)}.bq-select__control{align-items:center;border-color:var(--bq-select--border-color);border-radius:var(--bq-select--border-radius);border-style:var(--bq-select--border-style);border-width:var(--bq-select--border-width);color:var(--bq-select--text-color);display:flex;font-size:var(--bq-select--text-size);padding-bottom:var(--bq-select--paddingY);padding-inline-end:var(--bq-select--pading-end);padding-top:var(--bq-select--paddingY);padding-inline-start:var(--bq-select--pading-start);transition-duration:.15s;transition-property:border-color,box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;width:100%}.bq-select__control::placeholder{color:var(--bq-select--text-placeholder-color)}.bq-select__control:hover:not(.disabled):not(:focus-within){border-color:color-mix(in srgb,var(--bq-stroke--brand),var(--bq-hover) 20%)}.bq-select__control:not(.disabled):focus-within{--bq-ring-width:1px;--bq-ring-offset-width:0;--bq-ring-color-focus:var(--bq-select--border-color-focus);border-color:var(--bq-select--border-color-focus);outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}.bq-select__control:not(.disabled):focus-within .bq-select__control--clear,.bq-select__control:not(.disabled):hover .bq-select__control--clear{display:inline-block}.bq-select__control.disabled{cursor:not-allowed;opacity:.6}.bq-select__control.validation-error{border-color:var(--bq-stroke--danger)}.bq-select__control.validation-error:hover:not(.disabled):not(:focus-within){border-color:color-mix(in srgb,var(--bq-stroke--danger),var(--bq-hover) 20%)}.bq-select__control.validation-error:not(.disabled):focus-within{--bq-ring-color-focus:var(--bq-stroke--danger);border-color:color-mix(in srgb,var(--bq-stroke--danger),var(--bq-active) 20%)}.bq-select__control.validation-success{border-color:var(--bq-stroke--success)}.bq-select__control.validation-success:hover:not(.disabled):not(:focus-within){border-color:color-mix(in srgb,var(--bq-stroke--success),var(--bq-hover) 20%)}.bq-select__control.validation-success:not(.disabled):focus-within{--bq-ring-color-focus:var(--bq-stroke--success);border-color:color-mix(in srgb,var(--bq-stroke--success),var(--bq-active) 20%)}.bq-select__control.validation-warning{border-color:var(--bq-stroke--warning)}.bq-select__control.validation-warning:hover:not(.disabled):not(:focus-within){border-color:color-mix(in srgb,var(--bq-stroke--warning),var(--bq-hover) 20%)}.bq-select__control.validation-warning:not(.disabled):focus-within{--bq-ring-color-focus:var(--bq-stroke--warning);border-color:color-mix(in srgb,var(--bq-stroke--warning),var(--bq-active) 20%)}.bq-select__control--input{appearance:none;background-color:inherit;border-style:none;-webkit-box-shadow:none;box-shadow:none;color:inherit;cursor:inherit;flex:1 1 auto;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;min-height:var(--bq-select--icon-size);min-width:0;padding:0;user-select:none}.bq-select__control--input:focus{outline:2px solid transparent;outline-offset:2px}.bq-select__control--input:focus-visible{outline:2px solid transparent;outline-offset:2px}.bq-select__control--clear::part(button){--bq-ring-width:initial;--bq-ring-offset-width:initial;--bq-ring-color-focus:initial;border-radius:var(--bq-radius--xs);border-style:none;height:auto;padding:0}.bq-select__control--prefix,.bq-select__control--suffix{align-items:center;color:var(--bq-select--text-color);display:flex;pointer-events:none}.bq-select__control--prefix{margin-inline-end:var(--bq-select--gap)}.bq-select__control--suffix{margin-inline-start:var(--bq-select--gap);transition-duration:.3s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}::slotted(bq-icon),bq-icon{--bq-icon--size:var(--bq-select--icon-size)!important}.placeholder\\:text-\\[color\\:--bq-select--text-placeholder-color\\]::placeholder{color:var(--bq-select--text-placeholder-color)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.\\!hidden{display:none!important}.hidden{display:none}.rotate-0{--tw-rotate:0deg}.rotate-0,.rotate-180{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.border{border-width:1px}.h-\\[var\\(--bq-icon--size\\)\\]{height:var(--bq-icon--size)}.w-\\[var\\(--bq-icon--size\\)\\]{width:var(--bq-icon--size)}.text-\\[color\\:var\\(--bq-icon--color\\)\\]{color:var(--bq-icon--color)}.relative{position:relative}.flex-col{flex-direction:column}.gap-y-\\[--bq-option-group--gapY-list\\]{row-gap:var(--bq-option-group--gapY-list)}',v=d,u=class{constructor(a){o(this,a),this.bqBlur=n(this,"bqBlur",7),this.bqClear=n(this,"bqClear",7),this.bqFocus=n(this,"bqFocus",7),this.bqSelect=n(this,"bqSelect",7),this.fallbackInputId="select",this.handleBlur=()=>{this.disabled||this.bqBlur.emit(this.el)},this.handleFocus=()=>{this.disabled||this.bqFocus.emit(this.el)},this.handleSelect=e=>{this.disabled||(this.value=e.detail.value,this.inputElem.focus())},this.handleClearClick=e=>{(async()=>await this.clear())(),this.inputElem.focus(),e.stopPropagation()},this.handleLabelSlotChange=()=>{this.hasLabel=i(this.labelElem)},this.handlePrefixSlotChange=()=>{this.hasPrefix=i(this.prefixElem)},this.handleSuffixSlotChange=()=>{this.hasSuffix=i(this.suffixElem)},this.handleHelperTextSlotChange=()=>{this.hasHelperText=i(this.helperTextElem)},this.syncItemsFromValue=()=>{const e=this.options;if(!e.length)return;this.options.forEach(b=>b.selected=b.value===this.value);const t=e.filter(b=>b.value===this.value)[0];this.displayValue=t?this.getOptionLabel(t):""},this.getOptionLabel=e=>{const t=e.shadowRoot.querySelector("slot:not([name])");if(t)return c(t)},this.displayValue=void 0,this.hasHelperText=!1,this.hasLabel=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.hasValue=!1,this.autofocus=void 0,this.clearButtonLabel="Clear value",this.disabled=!1,this.disableClear=!1,this.distance=8,this.form=void 0,this.keepOpenOnSelect=!1,this.name=void 0,this.open=!1,this.panelHeight=void 0,this.placeholder=void 0,this.placement="bottom",this.readonly=void 0,this.required=void 0,this.sameWidth=!0,this.skidding=0,this.strategy="fixed",this.validationStatus="none",this.value=void 0}handleValueChange(){if(this.syncItemsFromValue(),Array.isArray(this.value)){this.hasValue=this.value.some(a=>a.length>0);return}this.hasValue=l(this.value)}componentDidLoad(){this.handleValueChange()}handleOpenChange(a){a.composedPath().includes(this.el)&&(this.open=a.detail.open)}stopOptionFocusBlurPropagation(a){q(a.target,"bq-select")||a.stopPropagation()}async clear(){this.disabled||(this.value=void 0,this.displayValue=void 0,this.bqClear.emit(this.el))}get options(){return Array.from(this.el.querySelectorAll("bq-option"))}render(){const a=`bq-select__label-${this.name||this.fallbackInputId}`;return r("div",{key:"08dabbb72a3505e1814a6574976fe7f85661f7c1",class:"bq-select",part:"base"},r("label",{key:"a5b8a6dfdad832c1299d56494effea4495d7282f",id:a,class:{"bq-select__label":!0,"!hidden":!this.hasLabel},htmlFor:this.name||this.fallbackInputId,ref:e=>this.labelElem=e,part:"label"},r("slot",{key:"46af5a353e207fb2000cc0a261bb26ed5d9a8504",name:"label",onSlotchange:this.handleLabelSlotChange})),r("bq-dropdown",{key:"a2bd815b8ff8648d1f382b06b83f16a8d202320a",class:"bq-select__dropdown w-full",disabled:this.disabled,distance:this.distance,keepOpenOnSelect:this.keepOpenOnSelect,open:this.open,panelHeight:this.panelHeight,placement:this.placement,sameWidth:this.sameWidth,skidding:this.skidding,strategy:this.strategy,exportparts:"panel"},r("div",{key:"e72bed66c3ae8b024c28f596cf7c13d99ef40ee1",class:{"bq-select__control":!0,[`validation-${this.validationStatus}`]:!0,disabled:this.disabled},part:"control",slot:"trigger"},r("span",{key:"6a80acc5400e269c7c077e50ccc911cec9d2805b",class:{"bq-select__control--prefix":!0,"!hidden":!this.hasPrefix},ref:e=>this.prefixElem=e,part:"prefix"},r("slot",{key:"3492b66add0047a8f6b7d82121505c7fab1345bf",name:"prefix",onSlotchange:this.handlePrefixSlotChange})),r("input",{key:"31898044a9043698080c08d9342f2ce566003735",id:this.name||this.fallbackInputId,class:"bq-select__control--input",autoComplete:"off",autoCapitalize:"off",autoFocus:this.autofocus,"aria-disabled":this.disabled?"true":"false","aria-controls":`bq-options-${this.name}`,"aria-expanded":this.open,"aria-haspopup":"listbox",disabled:this.disabled,form:this.form,name:this.name,placeholder:this.placeholder,ref:e=>this.inputElem=e,readOnly:!0,required:this.required,spellcheck:!1,type:"text",value:this.displayValue,part:"input",onBlur:this.handleBlur,onFocus:this.handleFocus}),this.hasValue&&!this.disabled&&!this.disableClear&&r("bq-button",{class:"bq-select__control--clear ms-[--bq-select--gap] hidden",appearance:"text","aria-label":this.clearButtonLabel,size:"small",onBqClick:this.handleClearClick,part:"clear-btn",exportparts:"button"},r("slot",{name:"clear-icon"},r("bq-icon",{name:"x-circle",class:"flex"}))),r("span",{key:"904c22767285fb97b8037661223e9e5ccd85c461",class:{"bq-select__control--suffix":!0,"rotate-180":this.open,"rotate-0":!this.open},ref:e=>this.suffixElem=e,part:"suffix"},r("slot",{key:"a29611274f196b522455978b5c5ee46c41d85b5e",name:"suffix",onSlotchange:this.handleSuffixSlotChange},r("bq-icon",{key:"0702c6c4e5698f4e9570c23b2ba40341d82c3fce",name:"caret-down",class:"flex"})))),r("bq-option-list",{key:"87276f579d2ddf87a75c44232ed633aef630e55b",id:`bq-options-${this.name}`,onBqSelect:this.handleSelect},r("slot",{key:"410526e354b1895a14d916f19ecae215c668e70a"}))),r("div",{key:"c34d8280128c16641bbe355025e549ff3ae12ef7",class:{[`bq-select__helper-text validation-${this.validationStatus}`]:!0,"!hidden":!this.hasHelperText},ref:e=>this.helperTextElem=e,part:"helper-text"},r("slot",{key:"475e35dcea683f1cf6bec02ba95f4ccb69b1e5ea",name:"helper-text",onSlotchange:this.handleHelperTextSlotChange})))}static get delegatesFocus(){return!0}get el(){return s(this)}static get watchers(){return{value:["handleValueChange"]}}};u.style=v;export{u as bq_select};