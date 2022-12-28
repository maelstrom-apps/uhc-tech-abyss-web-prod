"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[166],{30876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(b,o(o({ref:n},p),{},{components:t})):r.createElement(b,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4216:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=t(7896),a=t(31461),i=(t(67294),t(30876)),o=["components"],l={id:"builds",title:"Builds"},s=void 0,c={unversionedId:"parcels/builds",id:"parcels/builds",isDocsHomePage:!1,title:"Builds",description:"Abyss Config",source:"@site/docs/parcels/3-builds.md",sourceDirName:"parcels",slug:"/parcels/builds",permalink:"/parcels/builds",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"builds",title:"Builds"},sidebar:"docs",previous:{title:"Creating Parcels",permalink:"/parcels/building"},next:{title:"App Integration",permalink:"/parcels/app-integration"}},p=[{value:"Abyss Config",id:"abyss-config",children:[],level:2},{value:"Scripts",id:"scripts",children:[],level:2},{value:"Build",id:"build",children:[],level:2},{value:"Versioning",id:"versioning",children:[],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"abyss-config"},"Abyss Config"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".abyss")," config is used to control the build, environments, environment variables, and other settings. The folder should contain two ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," files. One ",(0,i.kt)("inlineCode",{parentName:"p"},"environments.json")," file to control the various application environments and their associated variables. The second ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," to set the configuration of each product."),(0,i.kt)("p",null,"See the environment documentation ",(0,i.kt)("a",{parentName:"p",href:"/developers/environments"},"here"),"."),(0,i.kt)("h2",{id:"scripts"},"Scripts"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@abyss/core")," package includes important scripts to run Storybook and build the Parcels."),(0,i.kt)("p",null,"Include the following scripts in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file as well as ",(0,i.kt)("inlineCode",{parentName:"p"},"@abyss/core")," as a dependency."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'}\n  ...,\n  "dependencies": {\n    "@abyss/core": "1.16.1",\n  },\n  "scripts": {\n    "dev": "abyss dev",\n    "build": "abyss build",\n  },\n  ...\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"dev")," to compile Storybook to create and test your Parcels locally."),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"build")," to build and compile your Parcels for use in external apps.")),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"The standard Parcel file structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"\u2514\u2500\u2500 ext\n|   \u251c\u2500\u2500 .abyss\n\u2502   |   \u251c\u2500\u2500 environments.json\n\u2502   |   \u2514\u2500\u2500 settings.json\n\u2502   \u251c\u2500\u2500 src\n|   |   \u251c\u2500\u2500 ParcelOne\n|   |   |   \u251c\u2500\u2500 index.js\n|   |   |   \u251c\u2500\u2500 ParcelOne.jsx\n|   |   |   \u2514\u2500\u2500 ParcelOne.stories.jsx\n|   |   \u251c\u2500\u2500 ParcelTwo\n|   |   |   \u251c\u2500\u2500 index.js\n|   |   |   \u251c\u2500\u2500 ParcelTwo.jsx\n|   |   |   \u2514\u2500\u2500 ParcelTwo.stories.jsx\n|   \u2514\u2500\u2500 package.json\n")),(0,i.kt)("p",null,"Parcel build file structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"\u2514\u2500\u2500 build\n|   \u251c\u2500\u2500 my-parcel-one\n|   |   \u251c\u2500\u2500 2.0.0\n|   |   |   \u2514\u2500\u2500 my-parcel-one.js\n|   |   \u2514\u2500\u2500 env\n|   |       \u251c\u2500\u2500 dev\n|   |       |   \u2514\u2500\u2500 my-parcel-one.js\n|   |       \u2514\u2500\u2500 stage\n|   |           \u2514\u2500\u2500 my-parcel-one.js\n|   \u251c\u2500\u2500 my-parcel-two\n|   |   \u251c\u2500\u2500 2.0.0\n|   |   |   \u2514\u2500\u2500 my-parcel-two.js\n|   |   \u2514\u2500\u2500 env\n|   |       \u251c\u2500\u2500 dev\n|   |       |   \u2514\u2500\u2500 my-parcel-two.js\n|   |       \u2514\u2500\u2500 stage\n|   |           \u2514\u2500\u2500 my-parcel-two.js\n")),(0,i.kt)("h2",{id:"versioning"},"Versioning"),(0,i.kt)("p",null,"The version of the Parcel when running the build script is based of the version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ext")," directory. In the example above, the version in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"2.0.0"),". Versioning is global so all of your Parcels will bump versions in tandem."))}d.isMDXComponent=!0}}]);