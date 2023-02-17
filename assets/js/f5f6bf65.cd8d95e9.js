"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[1792],{28184:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var o,r=n(7896),i=n(31461),a=(n(2784),n(3905)),p=["components"],l={id:"popover",category:"Overlay",title:"Popover",description:"Allows users to click an element to display a pop-up box.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1571",pagination_prev:"web/ui/modal",pagination_next:"web/ui/skeleton"},s=void 0,u={unversionedId:"web/ui/popover",id:"web/ui/popover",isDocsHomePage:!1,title:"Popover",description:"Allows users to click an element to display a pop-up box.",source:"@site/docs/web/ui/Popover.md",sourceDirName:"web/ui",slug:"/web/ui/popover",permalink:"/web/ui/popover",tags:[],version:"current",frontMatter:{id:"popover",category:"Overlay",title:"Popover",description:"Allows users to click an element to display a pop-up box.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1571",pagination_prev:"web/ui/modal",pagination_next:"web/ui/skeleton"},sidebar:"docs",previous:{title:"Modal",permalink:"/web/ui/modal"},next:{title:"Skeleton",permalink:"/web/ui/skeleton"}},c=[{value:"Text Elements",id:"text-elements",children:[],level:2},{value:"Popover Wrapper",id:"popover-wrapper",children:[],level:2},{value:"Close Button",id:"close-button",children:[],level:2},{value:"Position",id:"position",children:[],level:2},{value:"Position Offset",id:"position-offset",children:[],level:2},{value:"Align",id:"align",children:[],level:2},{value:"Align Offset",id:"align-offset",children:[],level:2},{value:"When should I use a tooltip vs a popover?",id:"when-should-i-use-a-tooltip-vs-a-popover",children:[{value:"Purpose of Content",id:"purpose-of-content",children:[],level:3},{value:"Size of Content",id:"size-of-content",children:[],level:3},{value:"Interactions",id:"interactions",children:[],level:3},{value:"Conclusion",id:"conclusion",children:[],level:3}],level:2}],d=(o="Tab",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),m={toc:c};function v(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{label:"Overview",mdxType:"Tab"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Popover } from '@abyss/web/ui/Popover';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'Popover',\n  inputs: [\n    {\n      prop: 'content',\n      type: 'string',\n    },\n    {\n      prop: 'title',\n      type: 'string',\n    },\n    {\n      prop: 'width',\n      type: 'string',\n    },\n    {\n      prop: 'positionOffset',\n      type: 'number',\n    },\n    {\n      prop: 'position',\n      type: 'select',\n      options: [\n        { label: 'left', value: 'left' },\n        { label: 'top', value: 'top' },\n        { label: 'right', value: 'right' },\n        { label: 'bottom', value: 'bottom' },\n      ],\n    },\n    {\n      prop: 'showClose',\n      type: 'boolean',\n    },\n  ],\n}\n\n<Popover content=\"Insert content\" title=\"Insert title\">\n  This is popover text\n</Popover>\n")),(0,a.kt)("h2",{id:"text-elements"},"Text Elements"),(0,a.kt)("p",null,"Popover comes with two optional text element props, ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"content"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Popover\n  title="Popover Title Here"\n  content="Popover displays secondary information when hovering over an element."\n/>\n')),(0,a.kt)("h2",{id:"popover-wrapper"},"Popover Wrapper"),(0,a.kt)("p",null,"Wrap a custom element with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," component to replace the default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group>\n  <Popover title="New Icon">\n    <IconBrand icon="alert" size={40} />\n  </Popover>\n  <Popover title="Badge">\n    <Badge outline>Badge</Badge>\n  </Popover>\n</Layout.Group>\n')),(0,a.kt)("h2",{id:"close-button"},"Close Button"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"showClose")," prop to add a close button option to the popover."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group>\n  <Popover title="Popover Title" content="Insert Content Here" showClose={true}>\n    Show Close Button\n  </Popover>\n  <Popover\n    title="Popover Title"\n    content="Insert Content Here"\n    showClose={false}\n  >\n    Hide Close Button\n  </Popover>\n</Layout.Group>\n')),(0,a.kt)("h2",{id:"position"},"Position"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"position")," prop to change the position of the popover. Options include ",(0,a.kt)("inlineCode",{parentName:"p"},"'left'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'right'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'top'"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"'bottom'"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group>\n  <Popover title="Left" content="Position Left" position="left">\n    Left\n  </Popover>\n  <Popover title="Top" content="Position Top" position="top">\n    Top\n  </Popover>\n  <Popover title="Bottom" content="Position Bottom" position="bottom">\n    Bottom\n  </Popover>\n  <Popover title="Right" content="Position Right" position="right">\n    Right\n  </Popover>\n</Layout.Group>\n')),(0,a.kt)("h2",{id:"position-offset"},"Position Offset"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"positionOffset")," prop to change the horizontal offset position of the popover."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group grow>\n  <Popover title="Default Offset (8)">Default Position Offset</Popover>\n  <Popover title="Offset of 16" positionOffset={16}>\n    Offset of 16\n  </Popover>\n  <Popover title="Offset of 32" positionOffset={32}>\n    Offset of 32\n  </Popover>\n</Layout.Group>\n')),(0,a.kt)("h2",{id:"align"},"Align"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"align")," prop to set the side of the anchor to render against when open. Options include ",(0,a.kt)("inlineCode",{parentName:"p"},"'start'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'center'"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"'end'"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group>\n  <Popover title="Start" content="Position Start" align="start">\n    Start\n  </Popover>\n  <Popover title="Center" content="Position Center" align="center">\n    Center\n  </Popover>\n  <Popover title="End" content="Position End" align="end">\n    End\n  </Popover>\n</Layout.Group>\n')),(0,a.kt)("h2",{id:"align-offset"},"Align Offset"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"alignOffset")," prop to change the offset position of the popover."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group grow>\n  <Popover title="Default Offset (8)" align="start">\n    Default Align Offset\n  </Popover>\n  <Popover title="Offset of 32" align="start" alignOffset={32}>\n    Offset of 32\n  </Popover>\n</Layout.Group>\n')),(0,a.kt)("h2",{id:"when-should-i-use-a-tooltip-vs-a-popover"},"When should I use a tooltip vs a popover?"),(0,a.kt)("p",null,"Glad you asked! There are several considerations when deciding between a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltip")," or a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popover"),":"),(0,a.kt)("h3",{id:"purpose-of-content"},"Purpose of Content"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltip")," is a hint or a tip about what an interactive element does. ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltips")," are meant to help clarify or provide supplementary instruction for an element on hover or upon receiving focus. They should not be used to add additional content nor include interactive elements such as links. ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltips")," should not receive mouse or keyboard focus.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popover")," should be used to provide additional content to static text, such as definitions of words, informational blurbs, or additional product details. They can receive focus and can contain links and other interactive elements."))),(0,a.kt)("h3",{id:"size-of-content"},"Size of Content"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Since ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltips"),' are only meant to tell the purpose of an element they should be short and to the point, for example: "Click X to do X" or "User post count".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popovers"),", on the other hand, can be much more verbose, they can include a heading,\xa0lines of text in the body, links, etc."))),(0,a.kt)("h3",{id:"interactions"},"Interactions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltips")," should only be visible on mouse hover or upon receiving focus.\xa0For this\xa0reason, if you need to be able to read the content while interacting with other parts of the page then a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltip"),' will not work. They should be dismissible using the "escape" key. They should be used on interactive elements where a mouse click or keyboard activation would otherwise trigger the elements primary function.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popovers")," must be triggered to appear, whether via mouse click or via keyboard navigation. They must be dismissible, whether by clicking on other parts of the page, clicking the ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popover")," target, or a specific close button/icon (depending on implementation). For this reason,\xa0you can set up a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popover")," to allow you to interact with other elements on the page while still being able to read its\xa0content. On top of this, since ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popovers")," will remain open when mousing out of their target, you can add additional buttons or interactions within them."))),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"If you want to give a short hint\xa0or supplemental instructions for an interactive element (such as a submit button), use a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltip"),"."),(0,a.kt)("p",null,"If you want to add additional content to a static element that might include headings, body text, links, etc, and you need the content to remain open even after mousing away or the element losing focus, then use a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popover"),"."),(0,a.kt)("p",null,"It should be noted that any vital information users need to complete an action or make a decision should be displayed directly in the page text or button label, rather than a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltip")," or a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popover"),".\xa0Critical information hidden in a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltip")," or a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popover")," might not be discovered by all users and could create accessibility issues.")),(0,a.kt)(d,{label:"Integration",mdxType:"Tab"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Popover}\n  rows={[\n    {\n      name: 'content',\n      type: 'string',\n      description: 'Text displayed in popover',\n    },\n    {\n      name: 'title',\n      type: 'string',\n      description: 'Set the title of the popover',\n    },\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The element the popover wraps',\n    },\n    {\n      name: 'position',\n      type: \"'left' | 'right' | 'top' | 'bottom'\",\n      description: 'Set the direction where the popover displays',\n    },\n    {\n      name: 'align',\n      type: \"'start' | 'center' | 'end'\",\n      description: 'The side of the anchor to render against when open',\n    },\n    {\n      name: 'positionOffset',\n      type: 'number',\n      description: 'Set the position offset of where the popover displays',\n    },\n    {\n      name: 'alignOffset',\n      type: 'number',\n      description: 'Set the align offset of where the popover displays',\n    },\n    {\n      name: 'width',\n      type: 'string | number',\n      description: 'Width of the popover container',\n    },\n    {\n      name: 'showClose',\n      type: 'boolean',\n      description: 'Flag to show close button or not',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Popover}\n  rows={[\n    {\n      name: 'popover-root',\n      description: 'Root',\n    },\n    {\n      name: 'popover-trigger',\n      description: 'Trigger',\n    },\n    {\n      name: 'popover-trigger-button',\n      description: 'Trigger Button',\n    },\n    {\n      name: 'popover-trigger-icon',\n      description: 'Trigger Icon',\n    },\n    {\n      name: 'popover-content',\n      description: 'Content',\n    },\n    {\n      name: 'popover-header',\n      description: 'Header',\n    },\n    {\n      name: 'popover-title',\n      description: 'Header Title',\n    },\n    {\n      name: 'popover-close-button',\n      description: 'Close Button',\n    },\n    {\n      name: 'popover-close-icon',\n      description: 'Close Button Icon',\n    },\n    {\n      name: 'popover-content-container',\n      description: 'Content Container',\n    },\n    {\n      name: 'popover-arrow',\n      description: 'Arrow',\n    },\n  ]}\n/>\n"))))}v.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,v=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(v,a(a({ref:t},u),{},{components:n})):o.createElement(v,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);