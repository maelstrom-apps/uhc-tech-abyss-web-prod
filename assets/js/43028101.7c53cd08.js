"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[5549],{73610:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var o,a=t(7896),i=t(31461),r=(t(2784),t(3905)),l=["components"],s={id:"indicator",category:"Data Display",title:"Indicator",description:"Adds an indicator to wrapped elements.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/branch/sabyctxmnS57eNFcPZQAbi/Abyss-Design-System",pagination_prev:"web/ui/data-table",pagination_next:"web/ui/search-results"},c=void 0,p={unversionedId:"web/ui/indicator",id:"web/ui/indicator",isDocsHomePage:!1,title:"Indicator",description:"Adds an indicator to wrapped elements.",source:"@site/docs/web/ui/Indicator.md",sourceDirName:"web/ui",slug:"/web/ui/indicator",permalink:"/web/ui/indicator",tags:[],version:"current",frontMatter:{id:"indicator",category:"Data Display",title:"Indicator",description:"Adds an indicator to wrapped elements.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/branch/sabyctxmnS57eNFcPZQAbi/Abyss-Design-System",pagination_prev:"web/ui/data-table",pagination_next:"web/ui/search-results"},sidebar:"docs",previous:{title:"DataTable",permalink:"/web/ui/data-table"},next:{title:"SearchResults",permalink:"/web/ui/search-results"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Size",id:"size",children:[],level:2},{value:"Offset",id:"offset",children:[],level:2},{value:"Label",id:"label",children:[],level:2},{value:"Overflow Count",id:"overflow-count",children:[],level:2},{value:"With Border",id:"with-border",children:[],level:2},{value:"Show Zero",id:"show-zero",children:[],level:2},{value:"Color",id:"color",children:[],level:2},{value:"Indicator Type",id:"indicator-type",children:[],level:2},{value:"Focusable Element",id:"focusable-element",children:[],level:2}],u=(o="Tab",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),m={toc:d};function h(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(u,{label:"Overview",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Indicator } from '@abyss/web/ui/Indicator';\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To apply, wrap the ",(0,r.kt)("inlineCode",{parentName:"p"},"Indicator")," component around an existing element. By default the Indicator will be positioned to the top-right corner of the child element. Please note that there are accessibility concerns when utilizing this component and further information can be found on the ",(0,r.kt)("strong",{parentName:"p"},"Accessibility")," tab of this page as well as below in the ",(0,r.kt)("a",{parentName:"p",href:"#indicator-type"},"Indicator Type")," / ",(0,r.kt)("a",{parentName:"p",href:"#focusable-element"},"Focusable Element")," sections. For further details on implementation please see the various sections below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'Indicator',\n  inputs: [\n    {\n      prop: 'label',\n      type: 'string',\n    },\n    {\n      prop: 'offset',\n      type: 'number',\n    },\n    {\n      prop: 'overflowCount',\n      type: 'number',\n    },\n    {\n      prop: 'position',\n      type: 'select',\n      options: [\n        { label: 'top-start', value: 'top-start' },\n        { label: 'top-end', value: 'top-end' },\n        { label: 'bottom-start', value: 'bottom-start' },\n        { label: 'bottom-end', value: 'bottom-end' },\n      ]\n    },\n     {\n      prop: 'size',\n      type: 'select',\n      options: [\n        { label: 'small', value: 'small' },\n        { label: 'large', value: 'large' },\n      ]\n    },\n    {\n      prop: 'color',\n      type: 'string',\n    },\n    {\n      prop: 'showZero',\n      type: 'boolean',\n    },\n    {\n      prop: 'withBorder',\n      type: 'boolean',\n    },\n  ]\n}\n\n() => {\nreturn (\n<Indicator label={5}>\n  <Badge>\n  Indicator Sandbox\n </Badge>\n</Indicator>\n  );\n};\n")),(0,r.kt)("h2",{id:"size"},"Size"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," prop to change the size of the Indicator to ",(0,r.kt)("inlineCode",{parentName:"p"},"small")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"large"),". The default is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"small"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group space={30}>\n  <Indicator size="small" label={5}>\n    <IconMaterial icon="mail" size={48} />\n  </Indicator>\n  <Indicator size="large" label={5}>\n    <IconMaterial icon="mail" size={48} />\n  </Indicator>\n</Layout.Group>\n')),(0,r.kt)("h2",{id:"offset"},"Offset"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"offset")," prop to change the position of the Indicator. It is useful when the Indicator component is used with children that have border radius."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group space={30}>\n  <Indicator size="small" label={10}>\n    <IconMaterial icon="face" size="xl" />\n  </Indicator>\n  <Indicator size="small" label={10} offset={10}>\n    <IconMaterial icon="face" size="xl" />\n  </Indicator>\n</Layout.Group>\n')),(0,r.kt)("h2",{id:"label"},"Label"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," prop to pass in the content that will be displayed within the Indicator. The value can be either a ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group space={30}>\n  <Indicator size="large" label={\'New\'} offset={10}>\n    <IconMaterial icon="face" size="xl" />\n  </Indicator>\n  <Indicator size="large" label={20} offset={10}>\n    <IconMaterial icon="face" size="xl" />\n  </Indicator>\n</Layout.Group>\n')),(0,r.kt)("h2",{id:"overflow-count"},"Overflow Count"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"overflowCount")," prop to show the Indicator label content with a ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," symbol when the Indicator label value has surpassed the overflowCount value. Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"99"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [count, setCount] = useState(100);\n\n  return (\n    <Layout.Stack>\n      <Layout.Group space={30}>\n        <Indicator size="small" label={count} overflowCount={10} offset={10}>\n          <IconMaterial icon="face" size="xl" />\n        </Indicator>\n        <Indicator size="small" label={count} offset={10}>\n          <IconMaterial icon="face" size="xl" />\n        </Indicator>\n        <Indicator size="small" label={count} overflowCount={100} offset={10}>\n          <IconMaterial icon="face" size="xl" />\n        </Indicator>\n      </Layout.Group>\n\n      <Layout.Group space={30}>\n        <Button onClick={() => setCount((old) => old + 1)}>Increment</Button>\n        <Button\n          variant="outline"\n          onClick={() => setCount((old) => (old > 0 ? old - 1 : old))}\n        >\n          Decrement\n        </Button>\n      </Layout.Group>\n    </Layout.Stack>\n  );\n};\n')),(0,r.kt)("h2",{id:"with-border"},"With Border"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"withBorder")," prop to apply border around Indicator. The default is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group space={30}>\n  <Indicator size="large" label={20} offset={10} withBorder>\n    <IconMaterial icon="face" size="xl" />\n  </Indicator>\n  <Indicator size="large" label={10} offset={10}>\n    <IconMaterial icon="face" size="xl" />\n  </Indicator>\n</Layout.Group>\n')),(0,r.kt)("h2",{id:"show-zero"},"Show Zero"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"showZero={false}")," prop to hide the Indicator when the label value is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". The default is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group space={30}>\n  <Indicator label={0}>\n    <IconMaterial icon="mail" size={48} />\n  </Indicator>\n  <Indicator label={0} showZero={false}>\n    <IconMaterial icon="mail" size={48} />\n  </Indicator>\n</Layout.Group>\n')),(0,r.kt)("h2",{id:"color"},"Color"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"color")," prop to change the color of the Indicator. Default value is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"'$error1'"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group space={30}>\n  <Indicator label={8} color="green">\n    <IconMaterial icon="mail" size={48} />\n  </Indicator>\n  <Indicator label={100} color="$gray9">\n    <IconMaterial icon="mail" size={48} />\n  </Indicator>\n</Layout.Group>\n')),(0,r.kt)("h2",{id:"indicator-type"},"Indicator Type"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"indicatorType")," prop to pass additional description text that will be appended to the label text and read by a screen reader to provide the user context of the indicators role. This text will always remain hidden from display and is exclusively used for accessibility purposes. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"Notifications"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group space={30}>\n  <Indicator offset={5} label={20} indicatorType="emails">\n    <IconMaterial icon="mail" size={48} />\n  </Indicator>\n</Layout.Group>\n')),(0,r.kt)("h2",{id:"focusable-element"},"Focusable Element"),(0,r.kt)("p",null,"Indicator is not focusable. If a focusable element is wrapped with the Indicator you will need to pass an ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-label")," to the focusable element. The aria-label text should include the Indicator label content and information about the Indicator's role. For example ",(0,r.kt)("inlineCode",{parentName:"p"},'aria-label="Indicator with [label] notifications"'),". Please see the example below for further details on implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const [count, setCount] = useState(7);\n  const overflowCount = 10;\n\n  const buttonCssProps = {\n    'abyss-button-root': {\n      fontSize: '$lg',\n      fontWeight: '$bold',\n    },\n  };\n\n  return (\n    <Layout.Stack space={10}>\n      <Indicator label={count} overflowCount={overflowCount} offset={2}>\n        <Button\n          aria-label={\n            count > overflowCount\n              ? `Indicator with ${overflowCount}+ notifications`\n              : `Indicator with ${count} notifications`\n          }\n        >\n          Indicator\n        </Button>\n      </Indicator>\n      <Layout.Group>\n        <Button\n          css={buttonCssProps}\n          size={25}\n          onClick={() => setCount((old) => old + 1)}\n        >\n          +\n        </Button>\n        <Button\n          css={buttonCssProps}\n          size={25}\n          variant=\"outline\"\n          onClick={() => setCount((old) => (old > 0 ? old - 1 : old))}\n        >\n          -\n        </Button>\n      </Layout.Group>\n    </Layout.Stack>\n  );\n};\n"))),(0,r.kt)(u,{label:"Integration",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Indicator}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the indicator component',\n    },\n    {\n      name: 'position',\n      type: \"'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' \",\n      description: 'Changes the indicator position',\n    },\n    {\n      name: 'size',\n      type: \" 'small' | 'large' \",\n      description: 'Size of Indicator',\n    },\n    {\n      name: 'label',\n      type: 'number | string',\n      description: 'Label of indicator component',\n    },\n    {\n      name: 'overflowCount',\n      type: 'number',\n      description: 'Over Flow count display for indicator',\n    },\n    {\n      name: 'showZero',\n      type: 'boolean',\n      description: 'Flag to hide label when value is 0',\n    },\n    {\n      name: 'offset',\n      type: 'number',\n      description:\n        'Change the indicator default position based on the position variant',\n    },\n    {\n      name: 'color',\n      type: 'string',\n      description: 'Color for indicator',\n    },\n    {\n      name: 'withBorder',\n      type: 'boolean',\n      description: 'Flag to show border around indicator',\n    },\n    {\n      name: 'indicatorType',\n      type: 'string',\n      description: 'Description of indicators role for accessibility purposes',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Indicator}\n  rows={[\n    {\n      name: 'indicator-root',\n      description: 'Indicator root element',\n    },\n    {\n      name: 'indicator-container',\n      description: 'Indicator container element',\n    },\n    {\n      name: 'indicator-label',\n      description: 'Indicator label element',\n    },\n  ]}\n/>\n"))),(0,r.kt)(u,{label:"Accessibility",mdxType:"Tab"},(0,r.kt)("h2",null,"Focusable Element"),(0,r.kt)("p",null,"Indicator is not focusable. If a focusable element is wrapped with the Indicator you will need to pass an ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-label")," to the focusable element. The aria-label text should include the Indicator label content and information about the Indicator's role. For example ",(0,r.kt)("inlineCode",{parentName:"p"},'aria-label="Indicator with [label] notifications"'),". Please see the example below for further details on implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const [count, setCount] = useState(7);\n  const overflowCount = 10;\n\n  const buttonCssProps = {\n    'abyss-button-root': {\n      fontSize: '$lg',\n      fontWeight: '$bold',\n    },\n  };\n\n  return (\n    <Layout.Stack space={10}>\n      <Indicator label={count} overflowCount={overflowCount} offset={2}>\n        <Button\n          aria-label={\n            count > overflowCount\n              ? `Indicator with ${overflowCount}+ notifications`\n              : `Indicator with ${count} notifications`\n          }\n        >\n          Indicator\n        </Button>\n      </Indicator>\n      <Layout.Group>\n        <Button\n          css={buttonCssProps}\n          size={25}\n          onClick={() => setCount((old) => old + 1)}\n        >\n          +\n        </Button>\n        <Button\n          css={buttonCssProps}\n          size={25}\n          variant=\"outline\"\n          onClick={() => setCount((old) => (old > 0 ? old - 1 : old))}\n        >\n          -\n        </Button>\n      </Layout.Group>\n    </Layout.Stack>\n  );\n};\n")),(0,r.kt)("h2",null,"Dynamic Label Content"),(0,r.kt)("p",null,"After initial load, anytime the Indicator label content is updated a ",(0,r.kt)("inlineCode",{parentName:"p"},'role="alert"')," attribute will be applied to ensure that screen readers will announce the updated content. Please see the example above for a demonstration of this in action."),(0,r.kt)("h2",null,"Character Limit"),(0,r.kt)("p",null,"While there is no explicit limit on the number of text characters that can be used in the indicator, be mindful that the wider the indicator, the greater the risk of blocking surrounding information from view."),(0,r.kt)("h2",null,"Offset"),(0,r.kt)("p",null,"Like the character limit, be cognizant of the indicator positioning in relation to the element it is paired with, particularly with icons that are sized dynamically. Avoid fixed values or large offsets that could potentially overlap or cover the paired icon or surrounding content."),(0,r.kt)("h2",null,"Color Contrast"),(0,r.kt)("p",null,"As with all components, the color contrast of the text within the indicator to the background color must be at least 4.5:1. Additionally, the background circle shape must have a minimum of 3:1 color contrast with the icon/element it's attached to as well as the surrounding background. Please find link for\ncolor contrast guide ",(0,r.kt)("a",{parentName:"p",href:"/accessibility/#color-contrast"},"Color Contrast"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Indicator label={100}>\n  <IconMaterial icon="mail" size={48} />\n</Indicator>\n'))))}h.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(h,r(r({ref:n},p),{},{components:t})):o.createElement(h,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);