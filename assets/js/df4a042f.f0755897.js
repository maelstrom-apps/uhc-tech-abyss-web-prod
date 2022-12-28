"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[1677],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2080:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(7896),i=n(31461),a=(n(67294),n(30876)),o=["components"],s={id:"versioning-guide",title:"Versioning Guide",pagination_next:null},l=void 0,c={unversionedId:"developers/versioning-guide",id:"developers/versioning-guide",isDocsHomePage:!1,title:"Versioning Guide",description:"Overview",source:"@site/docs/developers/versioning-guide.md",sourceDirName:"developers",slug:"/developers/versioning-guide",permalink:"/developers/versioning-guide",tags:[],version:"current",frontMatter:{id:"versioning-guide",title:"Versioning Guide",pagination_next:null},sidebar:"docs",previous:{title:"Accessibility Testing",permalink:"/developers/accessibility-testing"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Semantic Versioning",id:"semantic-versioning",children:[],level:2},{value:"Release Frequency",id:"release-frequency",children:[],level:2},{value:"Deprecation Practices",id:"deprecation-practices",children:[],level:2},{value:"Deprecation Policy",id:"deprecation-policy",children:[],level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},d=u("ExitLink"),m=u("SemanticVersion"),g={toc:p};function y(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Stability ensures that reusable components and libraries, tutorials, tools, and learned practices don't become obsolete unexpectedly. Stability is essential for the ecosystem around Abyss to thrive."),(0,a.kt)("p",null,"This document contains the practices that are followed to provide you with a leading-edge UI library, balanced with stability, ensuring that future changes are always introduced in a predictable way."),(0,a.kt)("h2",{id:"semantic-versioning"},"Semantic Versioning"),(0,a.kt)("p",null,"Abyss follows ",(0,a.kt)(d,{href:"https://semver.org",mdxType:"ExitLink"},"Semantic Versioning 2.0.0"),". Abyss version numbers have three parts: major.minor.patch. The version number is incremented based on the level of change included in the release."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Major releases")," contain significant new features, some but minimal developer assistance is expected during the update. When updating to a new major release, you may need to run update scripts, refactor code, run additional tests, and learn new APIs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Minor releases")," contain important new features. Minor releases should be fully backward-compatible; no developer assistance is expected during update, but you can optionally modify your apps and libraries to begin using new APIs, features, and capabilities that were added in the release."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Patch releases")," are low risk, contain bug fixes and small new features. No developer assistance is expected during update.")),(0,a.kt)(m,{mdxType:"SemanticVersion"}),(0,a.kt)("h2",{id:"release-frequency"},"Release Frequency"),(0,a.kt)("p",null,"A regular schedule of releases helps you plan and coordinate your updates with the continuing evolution of Abyss. In general, you can expect the following release cycle:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"major")," release typically every year for major changes."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"minor")," releases every two weeks after each sprint."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"patch")," release at any time for urgent bugfixes.")),(0,a.kt)("h2",{id:"deprecation-practices"},"Deprecation Practices"),(0,a.kt)("p",null,"Sometimes ",(0,a.kt)("strong",{parentName:"p"},'"breaking changes"'),", such as the removal of support for select APIs and features, are necessary."),(0,a.kt)("p",null,"To make these transitions as easy as possible:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of breaking changes is minimized, and migration tools provided when possible."),(0,a.kt)("li",{parentName:"ul"},"The deprecation policy described below is followed, so that you have time to update your apps to the latest APIs and best practices.")),(0,a.kt)("h2",{id:"deprecation-policy"},"Deprecation Policy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deprecated features are announced in the changelog, and when possible, with warnings at runtime."),(0,a.kt)("li",{parentName:"ul"},"When a deprecation is announced, recommended update path is provided."),(0,a.kt)("li",{parentName:"ul"},"Existing use of a stable API during the deprecation period is supported, so your code will keep working during that period."),(0,a.kt)("li",{parentName:"ul"},"Peer dependency updates (React) that require changes to your apps are only made in a major release.")))}y.isMDXComponent=!0}}]);