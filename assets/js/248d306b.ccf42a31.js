"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[4133],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},51976:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var r,a=t(7896),i=t(31461),o=(t(67294),t(30876)),l=["components"],s={id:"media-query",category:"Layout",title:"MediaQuery",description:"Used to layout UI elements conditionally",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=3585%3A26376",pagination_prev:"web/ui/layout",pagination_next:"web/ui/floating-section"},p=void 0,d={unversionedId:"web/ui/media-query",id:"web/ui/media-query",isDocsHomePage:!1,title:"MediaQuery",description:"Used to layout UI elements conditionally",source:"@site/docs/web/ui/MediaQuery.md",sourceDirName:"web/ui",slug:"/web/ui/media-query",permalink:"/web/ui/media-query",tags:[],version:"current",frontMatter:{id:"media-query",category:"Layout",title:"MediaQuery",description:"Used to layout UI elements conditionally",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=3585%3A26376",pagination_prev:"web/ui/layout",pagination_next:"web/ui/floating-section"},sidebar:"docs",previous:{title:"Layout",permalink:"/web/ui/layout"},next:{title:"FloatingSection",permalink:"/web/ui/floating-section"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"Smaller Than",id:"smaller-than",children:[],level:2},{value:"Larger Than",id:"larger-than",children:[],level:2},{value:"Preset Breakpoints",id:"preset-breakpoints",children:[],level:2}],c=(r="Tab",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),m={toc:u};function h(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(c,{label:"Overview",mdxType:"Tab"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { MediaQuery } from '@abyss/web/ui/MediaQuery';\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Used to conditionally display elements based on the window size. The condition is based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"smallerThan")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"largerThan")," props (or both of them at the same time)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<React.Fragment>\n  <div>\n    An icon will appear to the right when the window size is at least extra\n    large:\n    <MediaQuery largerThan="$xl">\n      <IconMaterial icon="home" />\n    </MediaQuery>\n  </div>\n  <div>\n    An icon will appear to the right when the window size is less than extra\n    large:\n    <MediaQuery smallerThan="$xl">\n      <IconMaterial icon="home" />\n    </MediaQuery>\n  </div>\n  <div>\n    An icon will appear to the right when the window size is between large and\n    extra large:\n    <MediaQuery smallerThan="$xl" largerThan="$lg">\n      <IconMaterial icon="home" />\n    </MediaQuery>\n  </div>\n</React.Fragment>\n')),(0,o.kt)("h2",{id:"smaller-than"},"Smaller Than"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"smallerThan")," prop to specify a width that the window must be smaller than for the contents inside the MediaQuery to display."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div>\n  An icon will appear to the right when the window size is less than 1400\n  pixels:\n  <MediaQuery smallerThan={1400}>\n    <IconMaterial icon="home" />\n  </MediaQuery>\n</div>\n')),(0,o.kt)("h2",{id:"larger-than"},"Larger Than"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"largerThan")," prop to specify a width that the window must be greater than or equal to for the contents inside the MediaQuery to display."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div>\n  An icon will appear to the right when the window size is at least 700 pixels:\n  <MediaQuery largerThan={700}>\n    <IconMaterial icon="home" />\n  </MediaQuery>\n</div>\n')),(0,o.kt)("h2",{id:"preset-breakpoints"},"Preset Breakpoints"),(0,o.kt)("p",null,"As an alternative to using hardcoded number / pixel values for ",(0,o.kt)("inlineCode",{parentName:"p"},"smallerThan")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"largerThan"),", you can use preset breakpoints to ensure consistency across your app. (Breakpoint values are taken from the app's theme configuration.) Possible values are ",(0,o.kt)("inlineCode",{parentName:"p"},"$xs"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$sm"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$md"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$lg"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"$xl"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div>\n  An icon will appear to the right when the window size is at least the size of\n  the $md breakpoint:\n  <MediaQuery largerThan="$md">\n    <IconMaterial icon="home" />\n  </MediaQuery>\n</div>\n'))),(0,o.kt)(c,{label:"Integration",mdxType:"Tab"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={MediaQuery}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The element the group wraps',\n    },\n    {\n      name: 'smallerThan',\n      type: 'number | string',\n      description:\n        'Pixel amount the window width must be smaller than in order for the children to render',\n    },\n    {\n      name: 'largerThan',\n      type: 'number | string',\n      description:\n        'Pixel amount the window width must be greater than or equal to in order for the children to render',\n    },\n  ]}\n/>\n"))))}h.isMDXComponent=!0}}]);