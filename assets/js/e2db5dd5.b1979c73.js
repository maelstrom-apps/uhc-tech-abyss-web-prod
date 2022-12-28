"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[1680],{30876:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,v=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return t?n.createElement(v,i(i({ref:r},p),{},{components:t})):n.createElement(v,i({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81704:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>s,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var n,a=t(7896),o=t(31461),i=(t(67294),t(30876)),l=["components"],c={id:"overview",title:"Overview"},s=void 0,p={unversionedId:"parcels/overview",id:"parcels/overview",isDocsHomePage:!1,title:"Overview",description:"What are Parcels?",source:"@site/docs/parcels/0-overview.md",sourceDirName:"parcels",slug:"/parcels/overview",permalink:"/parcels/overview",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"GraphQL Requests",permalink:"/developers/tutorials/graphql-requests"},next:{title:"Getting Started",permalink:"/parcels/getting-started"}},d=[{value:"What are Parcels?",id:"what-are-parcels",children:[],level:2},{value:"Live Parcel Example",id:"live-parcel-example",children:[],level:2}],m=(n="WebComponent",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),u={toc:d};function v(e){var r=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-are-parcels"},"What are Parcels?"),(0,i.kt)("p",null,"At it's core, a Parcel is a framework agnostic component that can be integrated to a website or application as a stand-alone feature. Parcels are built using the React framework and are compiled into ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components"},"web components"),". Web components are near universal and can be used in any web applications whether your app uses React, Angular, or vanilla JavaScript."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<div\n  style={{\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n  }}\n>\n  <div\n    style={{\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      marginRight: '20px',\n    }}\n  >\n    <img src=\"/img/graphics/reactjs.svg\" alt=\"react js logo\" width=\"92\" />\n    <Label>React</Label>\n  </div>\n  <IconMaterial icon=\"arrow_forward\" color=\"black\" size={65} />\n  <div\n    style={{\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      marginLeft: '20px',\n    }}\n  >\n    <img\n      src=\"/img/graphics/webcomponents.svg\"\n      alt=\"web components logo\"\n      width=\"100\"\n    />\n    <Label>Web Components</Label>\n  </div>\n</div>\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Since a Parcel is so universal you are able to create commonly used features and addons that can be distributed and shared amongst other teams and web applications."),(0,i.kt)("h2",{id:"live-parcel-example"},"Live Parcel Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<div>\n  <script src="https://maelstrom-dmz-nonprod.uhc.com/cdn/mfpoc/abyss-parcel.js" />\n  <abyss-parcel import="abyss-demo@1.0.0" />\n</div>\n')),(0,i.kt)(m,{mdxType:"WebComponent"}))}v.isMDXComponent=!0}}]);