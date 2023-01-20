"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[2890],{62838:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var i,o=n(7896),a=n(31461),r=(n(2784),n(3905)),s=["components"],l={id:"accessibility",slug:"/accessibility",title:"Accessibility",pagination_prev:"overview/releases",pagination_next:"overview/product-resources"},c=void 0,d={unversionedId:"overview/accessibility",id:"overview/accessibility",isDocsHomePage:!1,title:"Accessibility",description:"Overview",source:"@site/docs/overview/accessibility.md",sourceDirName:"overview",slug:"/accessibility",permalink:"/accessibility",tags:[],version:"current",frontMatter:{id:"accessibility",slug:"/accessibility",title:"Accessibility",pagination_prev:"overview/releases",pagination_next:"overview/product-resources"},sidebar:"docs",previous:{title:"Releases",permalink:"/releases"},next:{title:"Product Resources",permalink:"/product-resources"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Interactive components",id:"interactive-components",children:[],level:2},{value:"Color contrast",id:"color-contrast",children:[],level:2},{value:"Visually hidden content",id:"visually-hidden-content",children:[],level:2},{value:"Icons",id:"icons",children:[{value:"Meaningful or Control Icons",id:"meaningful-or-control-icons",children:[],level:3},{value:"Decorative Icons",id:"decorative-icons",children:[],level:3}],level:2},{value:"Additional resources",id:"additional-resources",children:[],level:2}],p=(i="ExitLink",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),h={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Products and web properties need to be accessible to everyone, including those with vision, hearing, cognitive, or motor impairments. Accessible design is everyone's responsibility, from information and user experience design, through to development, and on into help and support."),(0,r.kt)("p",null,"It is about understanding the users' journeys and proactively anticipating their needs. To make sure our assets are accessible to everyone, we follow the four principles of the WCAG Guidelines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Perceivable: It can be perceived by at least one of a person's senses."),(0,r.kt)("li",{parentName:"ul"},"Operable: All interactions are operable through a variation of input methods."),(0,r.kt)("li",{parentName:"ul"},"Understandable: Information and operation of the interface must be understandable."),(0,r.kt)("li",{parentName:"ul"},"Robust: Content can be interpreted by a variety of assistive technologies and withstand changes in these technologies.")),(0,r.kt)("h2",{id:"interactive-components"},"Interactive components"),(0,r.kt)("p",null,"Abyss contains interactive components such as button, data table, and modal, which are designed and developed using WAI-ARIA roles, properties and states, and should be operable using assistive technologies (such as screen readers and keyboards)."),(0,r.kt)("p",null,"Because Abyss components are purposefully created to be fairly generic, developers may need to include further ARIA roles, properties and states, as well as Javascript behaviors to more accurately convey the functionality of the component. This, along with a table of keyboard interactions, and a testing environment for screen readers can be found on the Accessibility tab of each component."),(0,r.kt)("p",null,"An important point about WAI-ARIA attributes is that they don't affect any aspect of the webpage besides the information exposed by the browser's accessibility API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'Button',\n  inputs: [\n    {\n      prop: 'variant',\n      type: 'select',\n      options: [\n        { label: 'solid', value: 'solid' },\n        { label: 'outline', value: 'outline' },\n        { label: 'ghost', value: 'ghost' },\n      ],\n    },\n    {\n      prop: 'size',\n      type: 'size',\n    },\n    {\n      prop: 'children',\n      type: 'string',\n    },\n    {\n      prop: 'isDisabled',\n      type: 'boolean'\n    },\n  ],\n}\n\n<Button>Click Here!</Button>\n")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  title=\"Button\"\n  rows={[\n    {\n      name: 'Space',\n      description: 'Activates the button',\n    },\n    {\n      name: 'Enter',\n      description: 'Activates the button',\n    },\n  ]}\n/>\n")),(0,r.kt)("h2",{id:"color-contrast"},"Color contrast"),(0,r.kt)("p",null,"The color palette used in the Abyss library are combined to adhere to the ",(0,r.kt)(p,{href:"https://www.w3.org/TR/WCAG21/#contrast-minimum",mdxType:"ExitLink"},"WCAG 2.1 text color contrast ratio of 4.5:1, and 3:1"),". In the Abyss Design Kit, we created a chart showing the color contrast ratio and the pass/fail rate. Developers are encouraged to test their specific uses of color, and when necessary, compare their use of colors to this chart to ensure adequate color contrast ratio."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<iframe\n  width="100%"\n  height="450"\n  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Ftk08Md4NBBVUPNHQYthmqp%2FAbyss-Design-System%3Fnode-id%3D1025%253A13039"\n  allow="fullscreen"\n></iframe>\n')),(0,r.kt)("h2",{id:"visually-hidden-content"},"Visually hidden content"),(0,r.kt)("p",null,"Visually hidden content refers to content that is visually hidden, but remains accessible to assistive technology. This content can be styled using the ",(0,r.kt)("a",{parentName:"p",href:"/web/hooks/use-visually-hidden/"},"useVisuallyHidden hook")," from the Abyss library.\nThis can be useful in situations where additional visual information or cues need to be conveyed to non-visual users, or in interactive control situations where the component is focusable."),(0,r.kt)("h2",{id:"icons"},"Icons"),(0,r.kt)("h3",{id:"meaningful-or-control-icons"},"Meaningful or Control Icons"),(0,r.kt)("p",null,"If the icon is being used in a setting where it is the only element providing meaning, then that same meaning should be conveyed to screen reader users. The below implementation provides examples of situations in which the property ",(0,r.kt)("inlineCode",{parentName:"p"},"isScreenReadable")," should be set to true and the ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," property is required and should describe the purpose of the image."),(0,r.kt)("p",null,"Example 1: An alert icon is used to convey a sense of urgency; there is adjacent text (\u201cThere is a data outage\u201d) but the text doesn't include any words that convey urgency. So, in this case, the icon should have a text alternative such as \u201cAlert\u201d or \u201cWarning\u201d."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group>\n  <IconBrand title="alert" icon="alert" isScreenReadable={true} size={24} />\n  <div>There is a data outage</div>\n</Layout.Group>\n')),(0,r.kt)("br",null),"Example 2: An \u201cX\u201d material icon is used as a close button on a modal dialog. There is no adjacent text, so the icon should have a text alternative of \u201cclose\u201d or \u201cclose window\u201d.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group>\n  <IconMaterial title="close" icon="close" isScreenReadable={true} size={24} />\n</Layout.Group>\n')),(0,r.kt)("h3",{id:"decorative-icons"},"Decorative Icons"),(0,r.kt)("p",null,"If the icon is being used in a setting in which it just a decorative element (which is the default case for icons), then the icon should be ignored by screen readers. The below implementation provides example of which situations would be classified as decorative. Since the default of ",(0,r.kt)("inlineCode",{parentName:"p"},"isScreenReadable")," is set to false no specific changes need to be made for decorative icons."),(0,r.kt)("p",null,"Example 1: An alert icon is used next to an urgent message and the word \u201cAlert\u201d is included in the adjacent text. In this case, the icon becomes decorative in nature and should be ignored by screen readers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group>\n  <IconBrand icon="alert" size={24} />\n  <div>Alert: There is a data outage</div>\n</Layout.Group>\n')),(0,r.kt)("br",null),"Example 2: An \u201cX\u201d material icon is used as a close button on a modal dialog; the word \u201cClose\u201d appears to the right of the button. In this case, the icon should be considered decorative and ignored by screen readers.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group>\n  <IconMaterial icon="close" size={24} />\n  <div>Close</div>\n</Layout.Group>\n')),(0,r.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(p,{href:"https://www.w3.org/WAI/WCAG21/Understanding/",mdxType:"ExitLink"},"Web Content Accessibility Guidelines (WCAG) 2.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(p,{href:"https://www.a11yproject.com/",mdxType:"ExitLink"},"The A11Y Project")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(p,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility",mdxType:"ExitLink"},"MDN accessibility documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(p,{href:"https://webaim.org/resources/contrastchecker/",mdxType:"ExitLink"},"Color Contrast Analyser (CCA)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(p,{href:"https://validator.w3.org/favelets.html",mdxType:"ExitLink"},"W3 validator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(p,{href:"https://labs.levelaccess.com/index.php/Category:Favlet",mdxType:"ExitLink"},"Level Access Favlet testing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(p,{href:"https://www.digitala11y.com/accessibility-bookmarklets-testing/",mdxType:"ExitLink"},"Digital A11y")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(p,{href:"https://adrianroselli.com/2012/06/accessibility-bookmarklets-and-tools.html",mdxType:"ExitLink"},"Accessibility Bookmarklets and Tools"))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);