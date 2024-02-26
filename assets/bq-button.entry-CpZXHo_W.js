import{r as q,c as i,h as r,H as d,g as s}from"./index-DCyAShRY.js";import{i as l}from"./isNil-2290f64e-vAogyTQe.js";import{i as c}from"./isDefined-0cb07ee6-IpvOc8xG.js";import{v as n}from"./props-3bf7f546-C1KYYUf2.js";import{h as o}from"./slot-b9cf968d-BYwCK1CW.js";import"./isString-9820a2b7-sJdwEqDK.js";/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */const u=["small","medium","large"],v=["button","submit","reset"],g=["primary","secondary","link","text"],f=["standard","ghost","danger"],h='::backdrop,:root{--bq-blue-100:#e7f0fd;--bq-blue-200:#d0e2fb;--bq-blue-300:#a1c5f7;--bq-blue-400:#73a8f3;--bq-blue-500:#448bef;--bq-blue-600:#156eeb;--bq-blue-700:#1158bc;--bq-blue-800:#0d428d;--bq-blue-900:#082c5e;--bq-blue-1000:#04162f;--bq-corai-100:#fff2f2;--bq-corai-200:#ffe6e6;--bq-corai-300:#ffccce;--bq-corai-400:#ffb3b5;--bq-corai-500:#ff999d;--bq-corai-600:#ff8084;--bq-corai-700:#cc666a;--bq-corai-800:#994d4f;--bq-corai-900:#663335;--bq-corai-1000:#331a1a;--bq-cyan-100:#e8f7fb;--bq-cyan-200:#d2f0f8;--bq-cyan-300:#a5e1f1;--bq-cyan-400:#78d1e9;--bq-cyan-500:#4bc2e2;--bq-cyan-600:#1eb3db;--bq-cyan-700:#188faf;--bq-cyan-800:#126b83;--bq-cyan-900:#0c4858;--bq-cyan-1000:#06242c;--bq-gold-100:#fbf4ec;--bq-gold-200:#f7e9da;--bq-gold-300:#f0d3b6;--bq-gold-400:#e8bc91;--bq-gold-500:#e1a66d;--bq-gold-600:#d99048;--bq-gold-700:#ae733a;--bq-gold-800:#82562b;--bq-gold-900:#573a1d;--bq-gold-1000:#2b1d0e;--bq-green-100:#e8f8ef;--bq-green-200:#d2f1e0;--bq-green-300:#a5e3c1;--bq-green-400:#78d5a1;--bq-green-500:#4bc782;--bq-green-600:#1eb963;--bq-green-700:#18944f;--bq-green-800:#126f3b;--bq-green-900:#0c4a28;--bq-green-1000:#062514;--bq-grey-100:#f1f2f4;--bq-grey-200:#e7e8eb;--bq-grey-300:#caccd2;--bq-grey-400:#a6aab3;--bq-grey-50:#f6f6f8;--bq-grey-500:#898e99;--bq-grey-600:#646a77;--bq-grey-700:#3f4350;--bq-grey-800:#2a2c35;--bq-grey-900:#1c1d23;--bq-grey-950:#15161a;--bq-grey-1000:#0d0e11;--bq-indigo-100:#edecfc;--bq-indigo-200:#dcdafa;--bq-indigo-300:#b9b5f5;--bq-indigo-400:#9590ef;--bq-indigo-500:#726bea;--bq-indigo-600:#4f46e5;--bq-indigo-700:#3f38b7;--bq-indigo-800:#2f2a89;--bq-indigo-900:#201c5c;--bq-indigo-1000:#100e2e;--bq-iris-100:#e9f0ff;--bq-iris-200:#d6e0ff;--bq-iris-300:#b2c0fe;--bq-iris-400:#8691f8;--bq-iris-500:#6061ee;--bq-iris-600:#4f46e5;--bq-iris-700:#413abd;--bq-iris-800:#332e95;--bq-iris-900:#26216d;--bq-iris-1000:#181545;--bq-lime-100:#f5fae8;--bq-lime-200:#ecf6d2;--bq-lime-300:#d9eda5;--bq-lime-400:#c5e379;--bq-lime-500:#b2da4c;--bq-lime-600:#9fd11f;--bq-lime-700:#7fa719;--bq-lime-800:#5f7d13;--bq-lime-900:#40540c;--bq-lime-1000:#202a06;--bq-magenta-100:#fce7f4;--bq-magenta-200:#f9cfea;--bq-magenta-300:#f39fd6;--bq-magenta-400:#ee6fbf;--bq-magenta-500:#e83fab;--bq-magenta-600:#de1395;--bq-magenta-700:#b20f77;--bq-magenta-800:#850c59;--bq-magenta-900:#58083c;--bq-magenta-1000:#2c041e;--bq-neutral-white:#fbfbfc;--bq-neutral-black:#060708;--bq-orange-100:#fbf0e9;--bq-orange-200:#f8e1d4;--bq-orange-300:#f1c2a8;--bq-orange-400:#eaa47d;--bq-orange-500:#e38551;--bq-orange-600:#dc6726;--bq-orange-700:#b0521e;--bq-orange-800:#843e17;--bq-orange-900:#58290f;--bq-orange-1000:#2c1508;--bq-purple-100:#efebf8;--bq-purple-200:#e0d7f2;--bq-purple-300:#c1afe5;--bq-purple-400:#a388d8;--bq-purple-500:#8460cb;--bq-purple-600:#6538be;--bq-purple-700:#512d98;--bq-purple-800:#3d2272;--bq-purple-900:#28164c;--bq-purple-1000:#140b26;--bq-red-100:#fce7ea;--bq-red-200:#f9d1d5;--bq-red-300:#f3a2ac;--bq-red-400:#ed7482;--bq-red-500:#e74559;--bq-red-600:#e1172f;--bq-red-700:#b41226;--bq-red-800:#870e1c;--bq-red-900:#5a0913;--bq-red-1000:#2d0509;--bq-sky-100:#eff4fb;--bq-sky-200:#dfeaf8;--bq-sky-300:#bfd5f1;--bq-sky-400:#9ec1e9;--bq-sky-500:#7eace2;--bq-sky-600:#5e97db;--bq-sky-700:#4b79af;--bq-sky-800:#385b83;--bq-sky-900:#263c58;--bq-sky-1000:#131e2c;--bq-teal-100:#e5f7f5;--bq-teal-200:#ccf0eb;--bq-teal-300:#99e1d8;--bq-teal-400:#66d2c4;--bq-teal-500:#33c3b1;--bq-teal-600:#00b49d;--bq-teal-700:#00907e;--bq-teal-800:#006c5e;--bq-teal-900:#00483f;--bq-teal-1000:#00241f;--bq-volcano-100:#feede7;--bq-volcano-200:#fddbd1;--bq-volcano-300:#fbb8a3;--bq-volcano-400:#fa9474;--bq-volcano-500:#f87146;--bq-volcano-600:#f64d18;--bq-volcano-700:#c53e13;--bq-volcano-800:#942e0e;--bq-volcano-900:#621f0a;--bq-volcano-1000:#310f05;--bq-yellow-100:#fefbe7;--bq-yellow-200:#fcf6d0;--bq-yellow-300:#faeea0;--bq-yellow-400:#f7e571;--bq-yellow-500:#f5dd41;--bq-yellow-600:#f2d412;--bq-yellow-700:#c2aa0e;--bq-yellow-800:#917f0b;--bq-yellow-900:#615507;--bq-yellow-1000:#302a04;--bq-endava-grey-50:#f7f7f8;--bq-endava-grey-100:#e4e6e7;--bq-endava-grey-200:#b5babe;--bq-endava-grey-300:#949ca1;--bq-endava-grey-400:#737d84;--bq-endava-grey-500:#525f67;--bq-endava-grey-600:#30404b;--bq-endava-grey-700:#2b3942;--bq-endava-grey-800:#263139;--bq-endava-grey-900:#192b37;--bq-endava-grey-950:#151b1e;--bq-endava-grey-1000:#0f1316;--bq-endava-neutral-white:#fafbfb;--bq-endava-neutral-black:#060708;--bq-endava-orange-100:#fef3f1;--bq-endava-orange-200:#fbd6d1;--bq-endava-orange-300:#fab7af;--bq-endava-orange-400:#fa988b;--bq-endava-orange-500:#fc7866;--bq-endava-orange-600:#ff5640;--bq-endava-orange-700:#ce4a39;--bq-endava-orange-800:#a03d30;--bq-endava-orange-900:#722e25;--bq-endava-orange-1000:#471e19}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(147,197,253,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-sizing:border-box}*{font:inherit;margin:0}ol[role=list],ul[role=list]{list-style-type:none}html{font-size:var(--bq-font-size--m)}html:focus-within{scroll-behavior:smooth}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:var(--bq-background--primary);color:var(--bq-text--primary);font-family:var(--bq-font-family);line-height:var(--bq-font-line-height--regular);min-height:100vh;text-rendering:optimizeSpeed}a:not([class]){text-decoration-skip-ink:auto}canvas,img,picture,svg,video{display:block;max-width:100%}button,input,select,textarea{font:inherit}h1,h2,h3,h4,h5,h6,p{overflow-wrap:break-word}@media (prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto;transition-duration:.01ms!important}}:root{--bq-white:#fff;--bq-black:#060708;--bq-neutral-50:var(--bq-grey-50);--bq-neutral-100:var(--bq-grey-100);--bq-neutral-200:var(--bq-grey-200);--bq-neutral-300:var(--bq-grey-300);--bq-neutral-400:var(--bq-grey-400);--bq-neutral-500:var(--bq-grey-500);--bq-neutral-600:var(--bq-grey-600);--bq-neutral-700:var(--bq-grey-700);--bq-neutral-800:var(--bq-grey-800);--bq-neutral-900:var(--bq-grey-900);--bq-neutral-950:var(--bq-grey-950);--bq-neutral-1000:var(--bq-grey-1000);--bq-brand-light:var(--bq-iris-100);--bq-brand:var(--bq-iris-600);--bq-brand-dark:var(--bq-iris-1000);--bq-accent-light:var(--bq-purple-100);--bq-accent:var(--bq-purple-600);--bq-accent-dark:var(--bq-purple-1000);--bq-success-light:var(--bq-teal-100);--bq-success:var(--bq-teal-600);--bq-success-dark:var(--bq-teal-1000);--bq-danger-light:var(--bq-red-100);--bq-danger:var(--bq-red-600);--bq-danger-dark:var(--bq-red-1000);--bq-warning-light:var(--bq-gold-100);--bq-warning:var(--bq-gold-600);--bq-warning-dark:var(--bq-gold-1000);--bq-info-light:var(--bq-iris-100);--bq-info:var(--bq-iris-600);--bq-info-dark:var(--bq-iris-1000);--bq-focus:var(--bq-iris-600);--bq-data-01:var(--bq-brand);--bq-data-02:var(--bq-purple-600);--bq-data-03:var(--bq-magenta-600);--bq-data-04:var(--bq-cyan-600);--bq-data-05:var(--bq-teal-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-yellow-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-blue-600);--bq-data-10:var(--bq-grey-600);--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white);--bq-radius--none:0;--bq-radius--xs2:0.125rem;--bq-radius--xs:0.25rem;--bq-radius--s:0.5rem;--bq-radius--m:0.75rem;--bq-radius--l:1.5rem;--bq-radius--full:9999px;--bq-box-shadow--xs:0 2px 0 rgba(0,0,0,.016);--bq-box-shadow--s:0 8px 24px rgba(0,0,0,.04);--bq-box-shadow--m:0 10px 48px -16px rgba(0,0,0,.12);--bq-box-shadow--l:0 20px 58px -16px rgba(0,0,0,.16);--bq-font-family:"Outfit",sans-serif;--bq-font-size--xs:0.75rem;--bq-font-size--s:0.875rem;--bq-font-size--m:1rem;--bq-font-size--l:1.125rem;--bq-font-size--xl:1.5rem;--bq-font-size--xxl:2rem;--bq-font-size--xxl2:2.5rem;--bq-font-size--xxl3:3rem;--bq-font-size--xxl4:3.5rem;--bq-font-size--xxl5:4rem;--bq-font-weight--thin:100;--bq-font-weight--light:300;--bq-font-weight--regular:400;--bq-font-weight--medium:500;--bq-font-weight--semibold:600;--bq-font-weight--bold:700;--bq-font-line-height--small:1.2;--bq-font-line-height--regular:1.5;--bq-font-line-height--large:1.5;--bq-spacing-xs3:0.125rem;--bq-spacing-xs2:0.25rem;--bq-spacing-xs:0.5rem;--bq-spacing-s:0.75rem;--bq-spacing-m:1rem;--bq-spacing-l:1.5rem;--bq-spacing-xl:2rem;--bq-spacing-xxl:2.5rem;--bq-spacing-xxl2:3.5rem;--bq-spacing-xxl3:4rem;--bq-spacing-xxl4:4.5rem}.beeq.light,.light,:root,[bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--alt:var(--bq-white);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--info:var(--bq-brand);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-brand);--bq-text--primary:var(--bq-neutral-800);--bq-text--alt:var(--bq-white);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--info:var(--bq-brand);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-brand);--bq-ui--info-alt:var(--bq-brand-light);--bq-hover:#bcbfc5;--bq-active:#444546}.beeq.dark,.dark,[bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-950);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--alt:var(--bq-white);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--info:var(--bq-brand);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-brand);--bq-text--primary:var(--bq-neutral-100);--bq-text--alt:var(--bq-white);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--info:var(--bq-brand);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-brand);--bq-ui--info-alt:var(--bq-brand-dark);--bq-hover:#444546;--bq-active:#1f2026}.endava,[bq-theme=endava]{--bq-font-family:"Roboto",sans-serif;--bq-white:#fafbfb;--bq-black:#030406;--bq-neutral-50:var(--bq-endava-grey-50);--bq-neutral-100:var(--bq-endava-grey-100);--bq-neutral-200:var(--bq-endava-grey-200);--bq-neutral-300:var(--bq-endava-grey-300);--bq-neutral-400:var(--bq-endava-grey-400);--bq-neutral-500:var(--bq-endava-grey-500);--bq-neutral-600:var(--bq-endava-grey-600);--bq-neutral-700:var(--bq-endava-grey-700);--bq-neutral-800:var(--bq-endava-grey-800);--bq-neutral-900:var(--bq-endava-grey-900);--bq-neutral-950:var(--bq-endava-grey-950);--bq-neutral-1000:var(--bq-endava-grey-1000);--bq-brand-light:var(--bq-endava-orange-100);--bq-brand:var(--bq-endava-orange-600);--bq-brand-dark:var(--bq-endava-orange-1000);--bq-accent-light:var(--bq-endava-orange-100);--bq-accent:var(--bq-endava-orange-600);--bq-accent-dark:var(--bq-endava-orange-1000);--bq-success-light:var(--bq-green-100);--bq-success:var(--bq-green-600);--bq-success-dark:var(--bq-green-1000);--bq-danger-light:var(--bq-corai-100);--bq-danger:var(--bq-corai-600);--bq-danger-dark:var(--bq-corai-1000);--bq-warning-light:var(--bq-yellow-100);--bq-warning:var(--bq-yellow-600);--bq-warning-dark:var(--bq-yellow-1000);--bq-info-light:var(--bq-blue-100);--bq-info:var(--bq-blue-600);--bq-info-dark:var(--bq-blue-1000);--bq-focus:var(--bq-endava-orange-600);--bq-data-01:var(--bq-brand);--bq-data-02:#af0cd8;--bq-data-03:#0ca8d8;--bq-data-04:var(--bq-teal-600);--bq-data-05:var(--bq-yellow-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-blue-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-purple-600);--bq-data-10:#394b56;--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white)}.endava.light,[bq-theme=endava][bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--alt:var(--bq-white);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--brand-alt:var(--bq-brand-light);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-800);--bq-text--alt:var(--bq-white);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-light);--bq-hover:#444546;--bq-active:#1f2026}.endava.dark,[bq-theme=endava][bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-900);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--alt:var(--bq-white);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--brand-alt:var(--bq-brand-dark);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-100);--bq-text--alt:var(--bq-neutral-white);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-dark);--bq-hover:#444546;--bq-active:#1f2026}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(147,197,253,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.absolute{position:absolute}.relative{position:relative}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.h-\\[var\\(--bq-button--large-height\\)\\]{height:var(--bq-button--large-height)}.h-\\[var\\(--bq-button--medium-height\\)\\]{height:var(--bq-button--medium-height)}.h-\\[var\\(--bq-button--small-height\\)\\]{height:var(--bq-button--small-height)}.w-auto{width:auto}.w-full{width:100%}.shrink-0{flex-shrink:0}.grow-0{flex-grow:0}.basis-auto{flex-basis:auto}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-\\[inherit\\]{cursor:inherit}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.cursor-wait{cursor:wait}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.rounded-\\[--bq-button--border-radius\\]{border-radius:var(--bq-button--border-radius)}.border-2{border-width:2px}.border-\\[length\\:--bq-button--border-width\\]{border-width:var(--bq-button--border-width)}.border-solid{border-style:solid}.border-\\[color\\:--bq-button--border-color\\]{border-color:var(--bq-button--border-color)}.border-stroke-brand{border-color:var(--bq-stroke--brand)}.bg-transparent{background-color:transparent}.bg-ui-brand{background-color:var(--bq-ui--brand)}.bg-ui-danger{background-color:var(--bq-ui--danger)}.bg-ui-secondary{background-color:var(--bq-ui--secondary)}.px-\\[var\\(--bq-button--large-paddingX\\)\\]{padding-left:var(--bq-button--large-paddingX);padding-right:var(--bq-button--large-paddingX)}.px-\\[var\\(--bq-button--medium-paddingX\\)\\]{padding-left:var(--bq-button--medium-paddingX);padding-right:var(--bq-button--medium-paddingX)}.px-\\[var\\(--bq-button--small-paddingX\\)\\]{padding-left:var(--bq-button--small-paddingX);padding-right:var(--bq-button--small-paddingX)}.py-\\[var\\(--bq-button--large-paddingY\\)\\]{padding-bottom:var(--bq-button--large-paddingY);padding-top:var(--bq-button--large-paddingY)}.py-\\[var\\(--bq-button--medium-paddingY\\)\\]{padding-bottom:var(--bq-button--medium-paddingY);padding-top:var(--bq-button--medium-paddingY)}.py-\\[var\\(--bq-button--small-paddingY\\)\\]{padding-bottom:var(--bq-button--small-paddingY);padding-top:var(--bq-button--small-paddingY)}.pe-xs2{padding-inline-end:var(--bq-spacing-xs2)}.ps-xs2{padding-inline-start:var(--bq-spacing-xs2)}.text-\\[length\\:--bq-button--large-font-size\\]{font-size:var(--bq-button--large-font-size)}.text-\\[length\\:--bq-button--medium-font-size\\]{font-size:var(--bq-button--medium-font-size)}.text-\\[length\\:--bq-button--small-font-size\\]{font-size:var(--bq-button--small-font-size)}.font-medium{font-weight:var(--bq-font-weight--medium)}.text-text-brand{color:var(--bq-text--brand)}.opacity-60{opacity:.6}.transition-\\[background-color\\2c border-color\\2c color\\]{transition-duration:.15s;transition-property:background-color,border-color,color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.bq-button,.duration-300{transition-duration:.3s}.bq-button{align-items:center;border-color:var(--bq-button--border-color);border-radius:var(--bq-button--border-radius);border-width:var(--bq-button--border-width);box-sizing:border-box;cursor:inherit;display:flex;font-weight:var(--bq-font-weight--medium);justify-content:center;line-height:var(--bq-font-line-height--regular);transition-property:background-color,border-color,color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.bq-button:disabled{cursor:not-allowed;opacity:.6}.bq-button:focus-visible{outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}@-webkit-keyframes fade-in{0%{opacity:0}}@keyframes fade-in{0%{opacity:0}}@-webkit-keyframes slide-in{0%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slide-in{0%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}:host{--bq-button--border-color:transparent;--bq-button--border-radius:var(--bq-radius--m);--bq-button--border-style:solid;--bq-button--border-width:0px;--bq-button--small-height:32px;--bq-button--small-paddingX:var(--bq-spacing-xs);--bq-button--small-paddingY:var(--bq-spacing-xs2);--bq-button--small-font-size:var(--bq-font-size--m);--bq-button--medium-height:48px;--bq-button--medium-paddingX:var(--bq-spacing-m);--bq-button--medium-paddingY:var(--bq-spacing-s);--bq-button--medium-font-size:var(--bq-font-size--m);--bq-button--large-height:56px;--bq-button--large-paddingX:var(--bq-spacing-l);--bq-button--large-paddingY:var(--bq-spacing-m);--bq-button--large-font-size:var(--bq-font-size--m);cursor:pointer;display:inline-block;position:relative;width:auto}.block,:host([block]){width:100%}.bq-button--primary{background-color:var(--bq-ui--brand);color:var(--bq-text--alt)}.bq-button--primary:enabled:hover{background-color:color-mix(in srgb,var(--bq-ui--brand),var(--bq-hover) 20%)}.bq-button--primary:enabled:active,.bq-button--primary:hover:enabled:active{background-color:color-mix(in srgb,var(--bq-ui--brand),var(--bq-active) 20%)}.bq-button--primary.ghost{background-color:transparent;border-color:var(--bq-stroke--brand);border-style:solid;border-width:2px;color:var(--bq-text--brand)}.bq-button--primary.ghost:enabled:hover{background-color:color-mix(in srgb,var(--bq-ui--primary),var(--bq-hover) 20%)}.bq-button--primary.ghost:enabled:active,.bq-button--primary.ghost:hover:enabled:active{background-color:color-mix(in srgb,var(--bq-ui--primary),var(--bq-active) 20%)}.bq-button--primary.danger{background-color:var(--bq-ui--danger);color:var(--bq-text--alt)}.bq-button--primary.danger:enabled:hover{background-color:color-mix(in srgb,var(--bq-ui--danger),var(--bq-hover) 20%)}.bq-button--primary.danger:enabled:active,.bq-button--primary.danger:hover:enabled:active{background-color:color-mix(in srgb,var(--bq-ui--danger),var(--bq-active) 20%)}.bq-button--secondary{background-color:var(--bq-ui--secondary);color:var(--bq-text--primary)}.bq-button--secondary:enabled:hover{background-color:color-mix(in srgb,var(--bq-ui--secondary),var(--bq-hover) 20%)}.bq-button--secondary:enabled:active,.bq-button--secondary:hover:enabled:active{background-color:color-mix(in srgb,var(--bq-ui--secondary),var(--bq-active) 20%)}.bq-button--link{background-color:transparent;color:var(--bq-text--brand);text-decoration-line:none}.bq-button--link:hover:not(.disabled){background-color:color-mix(in srgb,var(--bq-ui--secondary),var(--bq-hover) 20%)}.bq-button--link:active:not(.disabled),.bq-button--link:hover:active:not(.disabled){background-color:color-mix(in srgb,var(--bq-ui--secondary),var(--bq-active) 20%)}.bq-button--link.disabled{cursor:not-allowed;opacity:.6}.bq-button--text{background-color:transparent;color:var(--bq-text--primary)}.bq-button--text:enabled:hover{background-color:color-mix(in srgb,var(--bq-ui--secondary),var(--bq-hover) 20%)}.bq-button--text:enabled:active,.bq-button--text:hover:enabled:active{background-color:color-mix(in srgb,var(--bq-ui--secondary),var(--bq-active) 20%)}.small{font-size:var(--bq-button--small-font-size);height:var(--bq-button--small-height);padding:var(--bq-button--small-paddingY) var(--bq-button--small-paddingX)}.medium{font-size:var(--bq-button--medium-font-size);height:var(--bq-button--medium-height);padding:var(--bq-button--medium-paddingY) var(--bq-button--medium-paddingX)}.large{font-size:var(--bq-button--large-font-size);height:var(--bq-button--large-height);padding:var(--bq-button--large-paddingY) var(--bq-button--large-paddingX)}.bq-button__label ::slotted(bq-icon){display:flex}.content-left{justify-content:flex-start}.content-right{justify-content:flex-end}.bq-button__prefix,.bq-button__suffix{align-items:center;display:flex;flex-basis:auto;flex-grow:0;flex-shrink:0;pointer-events:none}.bq-button.has-prefix .bq-button__label{padding-inline-start:var(--bq-spacing-xs2)}.bq-button.has-suffix .bq-button__label{padding-inline-end:var(--bq-spacing-xs2)}.bq-button.loading{cursor:wait;position:relative}.bq-button.loading .bq-button__label,.bq-button.loading .bq-button__prefix,.bq-button.loading .bq-button__suffix{visibility:hidden}.bq-button__loader{-webkit-animation:spin 1s linear 0s infinite;animation:spin 1s linear 0s infinite;position:absolute}.focus-visible\\:focus:focus-visible{outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}.active\\:enabled\\:bg-active-ui-brand:enabled:active{background-color:color-mix(in srgb,var(--bq-ui--brand),var(--bq-active) 20%)}.active\\:enabled\\:bg-active-ui-danger:enabled:active{background-color:color-mix(in srgb,var(--bq-ui--danger),var(--bq-active) 20%)}.active\\:enabled\\:bg-active-ui-primary:enabled:active{background-color:color-mix(in srgb,var(--bq-ui--primary),var(--bq-active) 20%)}.active\\:enabled\\:bg-active-ui-secondary:enabled:active{background-color:color-mix(in srgb,var(--bq-ui--secondary),var(--bq-active) 20%)}.active\\:enabled\\:hover\\:bg-active-ui-brand:hover:enabled:active{background-color:color-mix(in srgb,var(--bq-ui--brand),var(--bq-active) 20%)}.active\\:enabled\\:hover\\:bg-active-ui-danger:hover:enabled:active{background-color:color-mix(in srgb,var(--bq-ui--danger),var(--bq-active) 20%)}.active\\:enabled\\:hover\\:bg-active-ui-primary:hover:enabled:active{background-color:color-mix(in srgb,var(--bq-ui--primary),var(--bq-active) 20%)}.active\\:enabled\\:hover\\:bg-active-ui-secondary:hover:enabled:active{background-color:color-mix(in srgb,var(--bq-ui--secondary),var(--bq-active) 20%)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.\\[\\&\\:not\\(\\.disabled\\)\\]\\:active\\:bg-active-ui-secondary:active:not(.disabled){background-color:color-mix(in srgb,var(--bq-ui--secondary),var(--bq-active) 20%)}.static{position:static}.hidden{display:none}.border{border-width:1px}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.h-\\[var\\(--bq-icon--size\\)\\]{height:var(--bq-icon--size)}.w-\\[var\\(--bq-icon--size\\)\\]{width:var(--bq-icon--size)}.text-\\[color\\:var\\(--bq-icon--color\\)\\]{color:var(--bq-icon--color)}',p=h,m=class{constructor(e){q(this,e),this.bqBlur=i(this,"bqBlur",7),this.bqFocus=i(this,"bqFocus",7),this.bqClick=i(this,"bqClick",7),this.handleBlur=()=>{this.bqBlur.emit(this.el)},this.handleFocus=()=>{this.bqFocus.emit(this.el)},this.handleClick=b=>{if(this.disabled||this.loading){b.preventDefault(),b.stopPropagation();return}if(this.type==="submit"||this.type==="reset"){const t=this.el.closest("form");if(!l(t)){const a=document.createElement("button");a.type=this.type,a.hidden=!0,t.append(a),a.click(),a.remove()}}this.bqClick.emit(this.el)},this.handleSlotChange=()=>{this.hasPrefix=o(this.prefixElem,"prefix"),this.hasSuffix=o(this.suffixElem,"suffix")},this.hasPrefix=!1,this.hasSuffix=!1,this.appearance="primary",this.block=!1,this.border="m",this.disabled=!1,this.download=void 0,this.href=void 0,this.justifyContent="center",this.loading=!1,this.size="medium",this.target=void 0,this.type="button",this.variant="standard"}checkPropValues(){n(g,"primary",this.el,"appearance"),n(v,"button",this.el,"type"),n(u,"medium",this.el,"size"),n(f,"standard",this.el,"variant")}componentWillLoad(){this.checkPropValues()}render(){const e=c(this.href),b=e?"a":"button",t={...this.border&&{"--bq-button--border-radius":`var(--bq-radius--${this.border})`}};return r(d,{key:"2eb6d63efb932fd432ac28630f3e41e734b30c7d",style:t},r(b,{key:"6560889e0a0ef6df401477c5a1d86b03d8e1307f",class:{"bq-button":!0,[`bq-button--${this.appearance}`]:!0,[`content-${this.justifyContent}`]:!0,[`${this.variant}`]:!0,[`${this.size}`]:!0,block:this.block,disabled:this.disabled,"has-prefix":this.hasPrefix,"has-suffix":this.hasSuffix,loading:this.loading},"aria-disabled":this.disabled?"true":"false",disabled:this.disabled,download:e?this.download:void 0,href:e?this.href:void 0,part:"button",rel:e&&this.target?"noreferrer noopener":void 0,target:e?this.target:void 0,type:this.type,tabIndex:this.disabled?-1:0,onBlur:this.handleBlur,onFocus:this.handleFocus,onClick:this.handleClick},r("span",{key:"9a7e9a2221155124f89180ce8bb0e068201d76e1",class:"bq-button__prefix",ref:a=>this.prefixElem=a,part:"prefix"},r("slot",{key:"e27921eb0e8f8663d3c5b09fa0000e326f36c90b",name:"prefix",onSlotchange:this.handleSlotChange})),r("span",{key:"4c9c104988be512e74f702cfe22a2ba182829772",class:"bq-button__label",part:"label"},r("slot",{key:"8a38ba35175b9a3603356c53d5d7d43fe7069efa"})),r("span",{key:"20d276c0e8f16ea6890ebe34e818f6ce691c8c32",class:"bq-button__suffix",ref:a=>this.suffixElem=a,part:"suffix"},r("slot",{key:"52da176c2753ef88547b473803d77304f43d3121",name:"suffix",onSlotchange:this.handleSlotChange})),this.loading&&r("bq-icon",{class:"bq-button__loader",name:"spinner-gap",role:"img",title:`${this.appearance} button loader`})))}get el(){return s(this)}static get watchers(){return{appearance:["checkPropValues"],type:["checkPropValues"],size:["checkPropValues"],variant:["checkPropValues"]}}};m.style=p;export{m as bq_button};
