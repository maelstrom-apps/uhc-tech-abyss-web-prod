"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[3954],{10138:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>x});var l,i=t(7896),a=t(31461),r=(t(2784),t(3905)),d=["components"],o={id:"flex",category:"Layout",title:"Flex",description:"Used to incorporate CSS Flexbox into UI layouts.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1",pagination_prev:"web/ui/divider",pagination_next:"web/ui/floating-section"},p=void 0,s={unversionedId:"web/ui/flex",id:"web/ui/flex",isDocsHomePage:!1,title:"Flex",description:"Used to incorporate CSS Flexbox into UI layouts.",source:"@site/docs/web/ui/Flex.md",sourceDirName:"web/ui",slug:"/web/ui/flex",permalink:"/web/ui/flex",tags:[],version:"current",frontMatter:{id:"flex",category:"Layout",title:"Flex",description:"Used to incorporate CSS Flexbox into UI layouts.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1",pagination_prev:"web/ui/divider",pagination_next:"web/ui/floating-section"},sidebar:"docs",previous:{title:"Divider",permalink:"/web/ui/divider"},next:{title:"FloatingSection",permalink:"/web/ui/floating-section"}},x=[{value:"Justify",id:"justify",children:[],level:2},{value:"alignItems",id:"alignitems",children:[],level:2},{value:"alignContent",id:"aligncontent",children:[],level:2},{value:"Direction",id:"direction",children:[],level:2},{value:"Gutter",id:"gutter",children:[],level:2}],c=(l="Tab",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),m={toc:x};function g(e){var n=e.components,t=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(c,{label:"Overview",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Flex } from '@abyss/web/ui/Flex';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'Flex',\n  inputs: [\n    {\n      prop: 'justify',\n      type: 'select',\n      options: [\n        { label: 'Default', value: '' },\n        { label: 'flex-start', value: 'flex-start' },\n        { label: 'flex-end', value: 'flex-end' },\n        { label: 'center', value: 'center' },\n        { label: 'space-between', value: 'space-between' },\n        { label: 'space-around', value: 'space-around' },\n        { label: 'space-evenly', value: 'space-evenly' },\n        { label: 'start', value: 'start' },\n        { label: 'end', value: 'end' },\n        { label: 'left', value: 'left' },\n        { label: 'right', value: 'right' },\n      ],\n    },\n    {\n      prop: 'alignItems',\n      type: 'select',\n      options: [\n        { label: 'Default', value: '' },\n        { label: 'stretch', value: 'stretch' },\n        { label: 'flex-start', value: 'flex-start' },\n        { label: 'flex-end', value: 'flex-end' },\n        { label: 'center', value: 'center' },\n        { label: 'baseline', value: 'baseline' },\n        { label: 'first baseline', value: 'first baseline' },\n        { label: 'last baseline', value: 'last baseline' },\n        { label: 'start', value: 'start' },\n        { label: 'end', value: 'end' },\n        { label: 'self-start', value: 'self-start' },\n        { label: 'self-end', value: 'self-end' },\n      ],\n    },\n    {\n      prop: 'alignContent',\n      type: 'select',\n      options: [\n        { label: 'Default', value: '' },\n        { label: 'flex-start', value: 'flex-start' },\n        { label: 'flex-end', value: 'flex-end' },\n        { label: 'center', value: 'center' },\n      ],\n    },\n    {\n      prop: 'direction',\n      type: 'select',\n      options: [\n        { label: 'Default', value: '' },\n        { label: 'row', value: 'row' },\n        { label: 'row-reverse', value: 'row-reverse' },\n        { label: 'column', value: 'column' },\n        { label: 'column-reverse', value: 'column-reverse' },\n      ]\n    },\n  ],\n}\n\n  <Flex>\n    <div style={{ border: '1px solid black', padding: '30px', margin: '4px' }}>\n      Flex Start\n    </div>\n    <div style={{ border: '1px solid black', padding: '20px', margin: '4px' }}>\n      Flex Start\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex Start\n    </div>\n  </Flex>\n")),(0,r.kt)("h2",{id:"justify"},"Justify"),(0,r.kt)("p",null,"Flexbox justify-content css property. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"justify")," prop to define the alignment along the main axis. Types include: ",(0,r.kt)("inlineCode",{parentName:"p"},"'flex-start'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'flex-end'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'center'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'space-between'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'space-around'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'space-evenly'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'start'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'end'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'left'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'right'"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<React.Fragment>\n  <Flex justify=\"start\">\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex Start\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex Start\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex Start\n    </div>\n  </Flex>\n  <Flex justify=\"center\">\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Center\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Center\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Center\n    </div>\n  </Flex>\n  <Flex justify=\"end\">\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex End{' '}\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex End{' '}\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex End{' '}\n    </div>\n  </Flex>\n  <Flex justify=\"space-between\">\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Space Between\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Space Between\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Space Between\n    </div>\n  </Flex>\n  <Flex justify=\"space-around\">\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Space Around\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Space Around\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Space Around\n    </div>\n  </Flex>\n  <Flex justify=\"space-evenly\">\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Space Evenly\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Space Evenly\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Space Evenly\n    </div>\n  </Flex>\n</React.Fragment>\n")),(0,r.kt)("h2",{id:"alignitems"},"alignItems"),(0,r.kt)("p",null,"Flexbox align-items css property. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"alignItems")," prop to define the default behavior for how flex items are laid out along the cross axis on the current line. Types include: ",(0,r.kt)("inlineCode",{parentName:"p"},"'stretch'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'flex-start'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'flex-end'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'center'"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"'baseline'"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<React.Fragment>\n  <Flex alignItems=\"flex-start\" style={{ marginBottom: '10px' }}>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex Start\n    </div>\n    <div style={{ border: '1px solid black', padding: '20px', margin: '4px' }}>\n      Flex Start\n    </div>\n    <div style={{ border: '1px solid black', padding: '30px', margin: '4px' }}>\n      Flex Start\n    </div>\n  </Flex>\n  <Flex alignItems=\"center\" style={{ marginBottom: '10px' }}>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Center\n    </div>\n    <div style={{ border: '1px solid black', padding: '20px', margin: '4px' }}>\n      Center\n    </div>\n    <div style={{ border: '1px solid black', padding: '30px', margin: '4px' }}>\n      Center\n    </div>\n  </Flex>\n  <Flex alignItems=\"flex-end\" style={{ marginBottom: '10px' }}>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex End\n    </div>\n    <div style={{ border: '1px solid black', padding: '20px', margin: '4px' }}>\n      Flex End\n    </div>\n    <div style={{ border: '1px solid black', padding: '30px', margin: '4px' }}>\n      Flex End\n    </div>\n  </Flex>\n  <Flex alignItems=\"stretch\" style={{ marginBottom: '10px' }}>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Stretch\n    </div>\n    <div style={{ border: '1px solid black', padding: '20px', margin: '4px' }}>\n      Stretch\n    </div>\n    <div style={{ border: '1px solid black', padding: '30px', margin: '4px' }}>\n      Stretch\n    </div>\n  </Flex>\n  <Flex alignItems=\"baseline\" style={{ marginBottom: '10px' }}>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Baseline\n    </div>\n    <div style={{ border: '1px solid black', padding: '20px', margin: '4px' }}>\n      Baseline\n    </div>\n    <div style={{ border: '1px solid black', padding: '30px', margin: '4px' }}>\n      Baseline\n    </div>\n  </Flex>\n</React.Fragment>\n")),(0,r.kt)("h2",{id:"aligncontent"},"alignContent"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"alignContent")," prop to orient horizontal location of columns. Types include: ",(0,r.kt)("inlineCode",{parentName:"p"},"'stretch'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'flex-start'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'flex-end'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'center'"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"'space-between'"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"'space-around'"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<React.Fragment>\n  <Flex alignContent=\"flex-start\" direction=\"column\">\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex Start\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex Start\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex Start\n    </div>\n  </Flex>\n  <Flex alignContent=\"flex-end\" direction=\"column\">\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex End\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex End\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex End\n    </div>\n  </Flex>\n  <Flex alignContent=\"center\" direction=\"column\">\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Center\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Center\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Center\n    </div>\n  </Flex>\n  <Flex alignContent=\"stretch\" direction=\"column\">\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Stretch\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Stretch\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Stretch\n    </div>\n  </Flex>\n</React.Fragment>\n")),(0,r.kt)("h2",{id:"direction"},"Direction"),(0,r.kt)("p",null,"Flexbox flex-direction css property. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"direction")," prop to establishe the main-axis, thus defining the direction flex items are placed in the flex container. Types include: ",(0,r.kt)("inlineCode",{parentName:"p"},"'row'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'row-reverse'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'column'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'column-reverse'"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<React.Fragment>\n  <Flex direction=\"row\" style={{ marginBottom: '10px' }}>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex Row 1\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex Row 2\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex Row 3\n    </div>\n  </Flex>\n\n  <Flex direction=\"column\">\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex Column 1\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex Column 2\n    </div>\n    <div style={{ border: '1px solid black', padding: '10px', margin: '4px' }}>\n      Flex Column 3\n    </div>\n  </Flex>\n</React.Fragment>\n")),(0,r.kt)("h2",{id:"gutter"},"Gutter"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"gutter")," prop to add padding for the flex content container. The first number in the array sets padding on the x-axis and the second number sets padding on the y-axis. If gutters is set to true, padding will be set as ","[8, 8]","."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<React.Fragment>\n  <Flex gutters={[0, 15]}>\n    <Flex.Content style={{ border: '1px solid black' }}>\n      Flex Content\n    </Flex.Content>\n    <Flex.Content style={{ border: '1px solid black' }}>\n      Flex Content\n    </Flex.Content>\n    <Flex.Content style={{ border: '1px solid black' }}>\n      Flex Content\n    </Flex.Content>\n  </Flex>\n</React.Fragment>\n"))),(0,r.kt)(c,{label:"Integration",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Flex}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the flex component',\n    },\n    {\n      name: 'className',\n      type: 'string',\n      description: 'Style class of the flex content',\n    },\n    {\n      name: 'gutters',\n      type: 'array[number]',\n      description: 'Set the gap between rows and columns',\n    },\n    {\n      name: 'justify',\n      type: 'string',\n      description: 'Set the alignment of items on the main axis',\n    },\n    {\n      name: 'alignItems',\n      type: 'string',\n      description: 'Set the default alignment of items on the cross axis',\n    },\n    {\n      name: 'alignContent',\n      type: 'string',\n      description:\n        'Set the distribution of space between and around content items',\n    },\n    {\n      name: 'direction',\n      type: 'string',\n      description: 'Establish the direction of the main axis',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Flex.Content}\n  rows={[\n    {\n      name: 'className',\n      type: 'string',\n      description: 'Style class of the flex content',\n    },\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the flex content component',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Flex}\n  rows={[\n    {\n      name: 'flex-root',\n      description: 'Flex root element',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Flex.Content}\n  rows={[\n    {\n      name: 'flex-content-root',\n      description: 'Flex Content root element',\n    },\n  ]}\n/>\n"))))}g.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var l=t(2784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=l.createContext({}),p=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return l.createElement(o.Provider,{value:n},e.children)},x={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,g=c["".concat(o,".").concat(m)]||c[m]||x[m]||a;return t?l.createElement(g,r(r({ref:n},s),{},{components:t})):l.createElement(g,r({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=c;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var p=2;p<a;p++)r[p]=t[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);