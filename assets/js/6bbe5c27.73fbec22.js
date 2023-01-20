"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[6856],{67876:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var t,a=r(7896),o=r(31461),s=(r(2784),r(3905)),i=["components"],l={id:"progress-bar",category:"Feedback",title:"ProgressBar",description:"Used to show users the status of loading an app, ongoing processes, saving changes/updates, and more.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=3599%3A29233",pagination_prev:"web/ui/alert",pagination_next:"web/ui/checkbox"},p=void 0,d={unversionedId:"web/ui/progress-bar",id:"web/ui/progress-bar",isDocsHomePage:!1,title:"ProgressBar",description:"Used to show users the status of loading an app, ongoing processes, saving changes/updates, and more.",source:"@site/docs/web/ui/ProgressBar.md",sourceDirName:"web/ui",slug:"/web/ui/progress-bar",permalink:"/web/ui/progress-bar",tags:[],version:"current",frontMatter:{id:"progress-bar",category:"Feedback",title:"ProgressBar",description:"Used to show users the status of loading an app, ongoing processes, saving changes/updates, and more.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=3599%3A29233",pagination_prev:"web/ui/alert",pagination_next:"web/ui/checkbox"},sidebar:"docs",previous:{title:"Alert",permalink:"/web/ui/alert"},next:{title:"Checkbox",permalink:"/web/ui/checkbox"}},c=[{value:"Color",id:"color",children:[],level:2},{value:"Labels",id:"labels",children:[],level:2},{value:"Duration",id:"duration",children:[],level:2},{value:"Width",id:"width",children:[],level:2},{value:"Height",id:"height",children:[],level:2},{value:"Border Radius",id:"border-radius",children:[],level:2}],g=(t="Tab",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),b={toc:c};function u(e){var n=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},b,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(g,{label:"Overview",mdxType:"Tab"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { ProgressBar } from '@abyss/web/ui/ProgressBar';\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'ProgressBar',\n  inputs: [\n    {\n      prop: 'barColor',\n      type: 'string',\n    },\n    {\n      prop: 'fillColor',\n      type: 'string',\n    },\n    {\n      prop: 'height',\n      type: 'string',\n    },\n    {\n      prop: 'width',\n      type: 'string',\n    },\n    {\n      prop: 'duration',\n      type: 'number',\n    },\n    {\n      prop: 'percentage',\n      type: 'number',\n    },\n  ]\n}\n\n<ProgressBar percentage={25} />\n")),(0,s.kt)("h2",{id:"color"},"Color"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"fillColor")," prop to change the color of the progress bar fill bar. Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"barColor")," prop to change the background color of the progress bar."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProgressBar percentage={25} fillColor="$interactive1" barColor="$gray4" />\n')),(0,s.kt)("h2",{id:"labels"},"Labels"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"minLabel")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"maxLabel")," prop to set the beginning and ending labels for the progress bar. Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"balanceLabel")," to set the title of the progress bar. The ",(0,s.kt)("inlineCode",{parentName:"p"},"balanceLabel")," prop will default to a ",(0,s.kt)("strong",{parentName:"p"},"bold font"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProgressBar\n  percentage={75}\n  minLabel="$0.00"\n  maxLabel="$2000.00"\n  balanceLabel="Deductible"\n/>\n')),(0,s.kt)("h2",{id:"duration"},"Duration"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"duration")," prop to set the time it takes in milliseconds for the fill bar to reach the set percentage. The default is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"1200"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ProgressBar percentage={50} duration={5000} />\n")),(0,s.kt)("h2",{id:"width"},"Width"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"width")," property to set the width of the bar. The default width is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"100%"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<React.Fragment>\n  <ProgressBar percentage={25} />\n  <br />\n  <ProgressBar percentage={25} width="75%" />\n</React.Fragment>\n')),(0,s.kt)("h2",{id:"height"},"Height"),(0,s.kt)("p",null,"Use the",(0,s.kt)("inlineCode",{parentName:"p"},"height")," property to set the width and height of the bar. The default height is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"20"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<React.Fragment>\n  <ProgressBar percentage={25} />\n  <br />\n  <ProgressBar percentage={25} height={50} />\n</React.Fragment>\n")),(0,s.kt)("h2",{id:"border-radius"},"Border Radius"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"borderRadius")," prop to change the border radius of the bar. The default is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ProgressBar percentage={25} borderRadius={10} />\n"))),(0,s.kt)(g,{label:"Integration",mdxType:"Tab"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={ProgressBar}\n  rows={[\n    {\n      name: 'percentage',\n      type: 'number',\n      description: 'The percent of the bar to be filled',\n    },\n    {\n      name: 'styles',\n      type: 'object',\n      description: 'Added styles to the progress bar',\n    },\n    {\n      name: 'duration',\n      type: 'number',\n      description: 'Duration of the progress bar animation',\n    },\n    {\n      name: 'width',\n      type: 'number | string',\n      description: 'Width of the progress bar',\n    },\n    {\n      name: 'minLabel',\n      type: 'string',\n      description: 'Starting label on the progress bar',\n    },\n    {\n      name: 'maxLabel',\n      type: 'string',\n      description: 'Ending label on the progress bar',\n    },\n    {\n      name: 'balanceLabel',\n      type: 'string',\n      description: 'Middle label on the progress bar',\n    },\n    {\n      name: 'height',\n      type: 'number',\n      description: 'Height of the progress bar',\n    },\n    {\n      name: 'borderRadius',\n      type: 'number',\n      description: 'Border radius of the progress bar',\n    },\n    {\n      name: 'barColor',\n      type: 'string',\n      description: 'Color of the progress fill bar',\n    },\n    {\n      name: 'fillColor',\n      type: 'string',\n      description: 'Background color of the progress bar',\n    },\n    {\n      name: 'title',\n      type: 'string',\n      description: 'string used for the descriptive accessible name',\n    },\n  ]}\n/>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={ProgressBar}\n  rows={[\n    {\n      name: 'progress-bar-root',\n      description: 'Progress Bar root element',\n    },\n    {\n      name: 'progress-bar-filler',\n      description: 'Progress bar fill',\n    },\n    {\n      name: 'progress-bar-min-label',\n      description: 'Min label',\n    },\n    {\n      name: 'progress-bar-center-label',\n      description: 'Center label',\n    },\n    {\n      name: 'progress-bar-max-label',\n      description: 'Max label',\n    },\n  ]}\n/>\n"))))}u.isMDXComponent=!0},3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>b});var t=r(2784);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=p(r),b=a,u=g["".concat(l,".").concat(b)]||g[b]||c[b]||o;return r?t.createElement(u,s(s({ref:n},d),{},{components:r})):t.createElement(u,s({ref:n},d))}));function b(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);