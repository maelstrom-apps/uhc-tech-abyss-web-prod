"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[2671],{26987:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var o,a=t(7896),i=t(31461),l=(t(2784),t(3905)),r=["components"],u={id:"floating-section",category:"Layout",title:"FloatingSection",description:"Used to create a floating sticky container.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=20298%3A77414",pagination_prev:"web/ui/grid",pagination_next:"web/ui/flex"},p=void 0,s={unversionedId:"web/ui/floating-section",id:"web/ui/floating-section",isDocsHomePage:!1,title:"FloatingSection",description:"Used to create a floating sticky container.",source:"@site/docs/web/ui/FloatingSection.md",sourceDirName:"web/ui",slug:"/web/ui/floating-section",permalink:"/web/ui/floating-section",tags:[],version:"current",frontMatter:{id:"floating-section",category:"Layout",title:"FloatingSection",description:"Used to create a floating sticky container.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=20298%3A77414",pagination_prev:"web/ui/grid",pagination_next:"web/ui/flex"},sidebar:"docs",previous:{title:"Grid",permalink:"/web/ui/grid"},next:{title:"Flex",permalink:"/web/ui/flex"}},c=[{value:"Overview",id:"overview",children:[{value:"Accessibility",id:"accessibility",children:[],level:3}],level:2},{value:"Position",id:"position",children:[{value:"Bottom",id:"bottom",children:[],level:3},{value:"Top",id:"top",children:[],level:3}],level:2},{value:"Always Float",id:"always-float",children:[],level:2},{value:"Space",id:"space",children:[],level:2}],d=(o="Tab",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),m={toc:c};function b(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(d,{label:"Overview",mdxType:"Tab"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { FloatingSection } from '@abyss/web/ui/FloatingSection';\n")),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"FloatingSection")," component creates a floating sticky container on the screen that maintains continuous visible access to its content while navigating through its parent container.\xa0 The primary usage is for housing form controls to maintain visible access to these operations while navigating through long forms. Please see the examples below for usage demos and for details on how to implement as either a sticky ",(0,l.kt)("a",{parentName:"p",href:"#bottom"},"footer")," or ",(0,l.kt)("a",{parentName:"p",href:"#top"},"header"),"."),(0,l.kt)("h3",{id:"accessibility"},"Accessibility"),(0,l.kt)("p",null,"For accessibility compliance a ref to the parent container is required to be passed in to the ",(0,l.kt)("inlineCode",{parentName:"p"},"containerRef")," prop. This allows for focus to be observed within the parent container so if an element is focused and obscured by the ",(0,l.kt)("inlineCode",{parentName:"p"},"FloatingSection")," component it can be shifted into view."),(0,l.kt)("h2",{id:"position"},"Position"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"position")," prop to set the sticky position. By default the position is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"bottom"),"."),(0,l.kt)("h3",{id:"bottom"},"Bottom"),(0,l.kt)("p",null,"To use ",(0,l.kt)("inlineCode",{parentName:"p"},"FloatingSection"),' as a sticky footer wrap the elements to be included within the component and place it at the bottom of the parent container that holds the desired associated content. While vertically scrolling the component will be visible while the parent container is in view. Once the component has reached the bottom of the screen it will no longer float and with subtle animation will "drop" into its parent container. To maintain a floating state at all times use the ',(0,l.kt)("a",{parentName:"p",href:"#always-float"},"alwaysFloat")," prop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      selectList: \'\',\n      dateInput: \'\',\n      dateInputRange: { from: \'\', to: \'\' },\n      radioGroup: null,\n      checkboxGroup: [],\n      textInput1: \'\',\n      textInput2: \'\',\n      textInput3: \'\',\n      textInputArea: \'\',\n    },\n  });\n\n  const options = [\n    { value: \'react\', label: \'React\' },\n    { value: \'ng\', label: \'Angular\' },\n    { value: \'svelte\', label: \'Svelte\' },\n    { value: \'vue\', label: \'Vue\' },\n    { value: \'alpine\', label: \'Alpine\' },\n    { value: \'ember\', label: \'Ember\' },\n    { value: \'stimulus\', label: \'Stimulus\' },\n    { value: \'preact\', label: \'Preact\' },\n  ];\n\n  const [isChecked, setChecked] = useState(false);\n\n  const onSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  const reset = () => {\n    form.reset();\n    setChecked(false);\n  };\n\n  const containerRef = useRef();\n\n  return (\n    <div ref={containerRef}>\n      <PageBody>\n        <FormProvider\n          state={form}\n          onSubmit={onSubmit}\n          style={{ backgroundColor: \'white\' }}\n        >\n          <Layout.Stack grow space={30} style={{ padding: \'40px 20px\' }}>\n            <SelectInput\n              label="Select List Option"\n              model="selectList"\n              placeholder="Select from list"\n              options={options}\n              validators={{ required: true }}\n            />\n            <DateInput model="dateInput" validators={{ required: true }} />\n            <DateInputRange\n              model="dateInputRange"\n              validators={{ required: true }}\n            />\n            <RadioGroup\n              label="Select Radio Button Option"\n              model="radioGroup"\n              validators={{ required: true }}\n              display="row"\n            >\n              <RadioGroup.Radio label="One" value="one" />\n              <RadioGroup.Radio label="Two" value="two" />\n              <RadioGroup.Radio label="Three" value="three" />\n              <RadioGroup.Radio label="Four" value="four" />\n            </RadioGroup>\n            <CheckboxGroup\n              label="Select Checkbox Option(s)"\n              model="checkboxGroup"\n              validators={{ required: true }}\n            >\n              <Checkbox label="Option 1" value="one" />\n              <Checkbox label="Option 2" value="two" />\n              <Checkbox label="Option 3" value="three" />\n            </CheckboxGroup>\n            <TextInput\n              label="Text Input 1"\n              model="textInput1"\n              validators={{ required: true }}\n            />\n            <TextInput\n              label="Text Input 2"\n              model="textInput2"\n              validators={{ required: true }}\n            />\n            <TextInput\n              label="Text Input 3"\n              model="textInput3"\n              validators={{ required: true }}\n            />\n            <TextInputArea\n              label="Text Input Area"\n              model="textInputArea"\n              rows={8}\n              validators={{ required: true }}\n            />\n          </Layout.Stack>\n          <FloatingSection\n            containerRef={containerRef}\n            css={{\n              \'abyss-floating-section-root\': {\n                minHeight: \'72px\',\n                display: \'flex\',\n                alignItems: \'center\',\n                padding: \'$md\',\n              },\n            }}\n          >\n            <Layout.Stack\n              alignItems="left"\n              space={30}\n              style={{ paddingTop: \'16px\' }}\n            >\n              <Checkbox\n                label="By clicking here, I state that I have read and understood the terms and conditions."\n                isChecked={isChecked}\n                onChange={(e) => setChecked(e.target.checked)}\n              />\n              <Layout.Group space={20}>\n                <Button variant="outline" type="button" onClick={reset}>\n                  Cancel\n                </Button>\n                <Button type="submit" isDisabled={!isChecked}>\n                  Save\n                </Button>\n              </Layout.Group>\n            </Layout.Stack>\n          </FloatingSection>\n        </FormProvider>\n      </PageBody>\n    </div>\n  );\n};\n')),(0,l.kt)("h3",{id:"top"},"Top"),(0,l.kt)("p",null,"To use ",(0,l.kt)("inlineCode",{parentName:"p"},"FloatingSection")," as a sticky header set the ",(0,l.kt)("inlineCode",{parentName:"p"},"position")," prop to ",(0,l.kt)("inlineCode",{parentName:"p"},"top"),", wrap the elements to be included within the component and place it at the top of the parent container that holds the desired associated content. While vertically scrolling the component will float once it reaches the top of the screen and remain visible until the parent container is out of view. To maintain a floating state at all times use the ",(0,l.kt)("a",{parentName:"p",href:"#always-float"},"alwaysFloat")," prop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      selectList: \'\',\n      dateInput: \'\',\n      dateInputRange: { from: \'\', to: \'\' },\n      radioGroup: null,\n      checkboxGroup: [],\n      textInput1: \'\',\n      textInput2: \'\',\n      textInput3: \'\',\n      textInputArea: \'\',\n    },\n  });\n\n  const options = [\n    { value: \'react\', label: \'React\' },\n    { value: \'ng\', label: \'Angular\' },\n    { value: \'svelte\', label: \'Svelte\' },\n    { value: \'vue\', label: \'Vue\' },\n    { value: \'alpine\', label: \'Alpine\' },\n    { value: \'ember\', label: \'Ember\' },\n    { value: \'stimulus\', label: \'Stimulus\' },\n    { value: \'preact\', label: \'Preact\' },\n  ];\n\n  const onSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  const paginationProps = usePagination({ pages: 6 });\n\n  const containerRef = useRef();\n\n  return (\n    <div ref={containerRef}>\n      <PageBody>\n        <FormProvider\n          state={form}\n          onSubmit={onSubmit}\n          style={{ backgroundColor: \'white\' }}\n        >\n          <FloatingSection\n            containerRef={containerRef}\n            position="top"\n            space={64}\n            css={{\n              \'abyss-floating-section-root\': {\n                minHeight: \'72px\',\n                padding: \'$md\',\n              },\n            }}\n          >\n            <StepIndicator currentStep={paginationProps.state.currentPage}>\n              <StepIndicator.Step label="Step 1" />\n              <StepIndicator.Step label="Step 2" />\n              <StepIndicator.Step label="Step 3" />\n              <StepIndicator.Step label="Step 4" />\n              <StepIndicator.Step label="Step 5" />\n            </StepIndicator>\n          </FloatingSection>\n          <Layout.Stack grow space={30} style={{ padding: \'40px 20px\' }}>\n            <SelectInput\n              label="Select List Option"\n              model="selectList"\n              placeholder="Select from list"\n              options={options}\n              validators={{ required: true }}\n            />\n            <DateInput model="dateInput" validators={{ required: true }} />\n            <DateInputRange\n              model="dateInputRange"\n              validators={{ required: true }}\n            />\n            <RadioGroup\n              label="Select Radio Button Option"\n              model="radioGroup"\n              validators={{ required: true }}\n              display="row"\n            >\n              <RadioGroup.Radio label="One" value="one" />\n              <RadioGroup.Radio label="Two" value="two" />\n              <RadioGroup.Radio label="Three" value="three" />\n              <RadioGroup.Radio label="Four" value="four" />\n            </RadioGroup>\n            <CheckboxGroup\n              label="Select Checkbox Option(s)"\n              model="checkboxGroup"\n              validators={{ required: true }}\n            >\n              <Checkbox label="Option 1" value="one" />\n              <Checkbox label="Option 2" value="two" />\n              <Checkbox label="Option 3" value="three" />\n            </CheckboxGroup>\n            <TextInput\n              label="Text Input 1"\n              model="textInput1"\n              validators={{ required: true }}\n            />\n            <TextInput\n              label="Text Input 2"\n              model="textInput2"\n              validators={{ required: true }}\n            />\n            <TextInput\n              label="Text Input 3"\n              model="textInput3"\n              validators={{ required: true }}\n            />\n            <TextInputArea\n              label="Text Input Area"\n              model="textInputArea"\n              rows={8}\n              validators={{ required: true }}\n            />\n          </Layout.Stack>\n          <Layout.Group grow style={{ padding: \'40px 20px\' }}>\n            <Layout.Group space={20}>\n              <Link onClick={paginationProps.previousPage}>\n                <IconMaterial icon="chevron_left" />\n                Previous\n              </Link>\n              <Button\n                variant="outline"\n                type="button"\n                onClick={() => form.reset()}\n              >\n                Cancel\n              </Button>\n              <Button type="submit">Save</Button>\n            </Layout.Group>\n            <Link\n              onClick={paginationProps.nextPage}\n              css={{ marginLeft: \'auto\' }}\n            >\n              Next\n              <IconMaterial icon="chevron_right" />\n            </Link>\n          </Layout.Group>\n        </FormProvider>\n      </PageBody>\n    </div>\n  );\n};\n')),(0,l.kt)("h2",{id:"always-float"},"Always Float"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"alwaysFloat")," prop to disable the animation and retain a floating state at all times."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      selectList: \'\',\n      dateInput: \'\',\n      dateInputRange: { from: \'\', to: \'\' },\n      radioGroup: null,\n      checkboxGroup: [],\n      textInput1: \'\',\n      textInput2: \'\',\n      textInput3: \'\',\n      textInputArea: \'\',\n    },\n  });\n  const options = [\n    { value: \'react\', label: \'React\' },\n    { value: \'ng\', label: \'Angular\' },\n    { value: \'svelte\', label: \'Svelte\' },\n    { value: \'vue\', label: \'Vue\' },\n    { value: \'alpine\', label: \'Alpine\' },\n    { value: \'ember\', label: \'Ember\' },\n    { value: \'stimulus\', label: \'Stimulus\' },\n    { value: \'preact\', label: \'Preact\' },\n  ];\n\n  const onSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  const containerRef = useRef();\n\n  return (\n    <div ref={containerRef}>\n      <PageBody>\n        <FormProvider\n          state={form}\n          onSubmit={onSubmit}\n          style={{ backgroundColor: \'white\' }}\n        >\n          <Layout.Stack grow space={30} style={{ padding: \'40px 20px\' }}>\n            <SelectInput\n              label="Select List Option"\n              model="selectList"\n              placeholder="Select from list"\n              options={options}\n              validators={{ required: true }}\n            />\n            <DateInput model="dateInput" validators={{ required: true }} />\n            <DateInputRange\n              model="dateInputRange"\n              validators={{ required: true }}\n            />\n            <RadioGroup\n              label="Select Radio Button Option"\n              model="radioGroup"\n              validators={{ required: true }}\n              display="row"\n            >\n              <RadioGroup.Radio label="One" value="one" />\n              <RadioGroup.Radio label="Two" value="two" />\n              <RadioGroup.Radio label="Three" value="three" />\n              <RadioGroup.Radio label="Four" value="four" />\n            </RadioGroup>\n            <CheckboxGroup\n              label="Select Checkbox Option(s)"\n              model="checkboxGroup"\n              validators={{ required: true }}\n            >\n              <Checkbox label="Option 1" value="one" />\n              <Checkbox label="Option 2" value="two" />\n              <Checkbox label="Option 3" value="three" />\n            </CheckboxGroup>\n            <TextInput\n              label="Text Input 1"\n              model="textInput1"\n              validators={{ required: true }}\n            />\n            <TextInput\n              label="Text Input 2"\n              model="textInput2"\n              validators={{ required: true }}\n            />\n            <TextInput\n              label="Text Input 3"\n              model="textInput3"\n              validators={{ required: true }}\n            />\n            <TextInputArea\n              label="Text Input Area"\n              model="textInputArea"\n              rows={8}\n              validators={{ required: true }}\n            />\n          </Layout.Stack>\n          <FloatingSection\n            containerRef={containerRef}\n            alwaysFloat\n            css={{\n              \'abyss-floating-section-root\': {\n                minHeight: \'72px\',\n                display: \'flex\',\n                alignItems: \'center\',\n                padding: \'$md\',\n              },\n            }}\n          >\n            <Layout.Group space={20}>\n              <Link onClick={() => console.log(\'clicked previous\')}>\n                <IconMaterial icon="chevron_left" />\n                Previous\n              </Link>\n              <Button\n                variant="outline"\n                type="button"\n                onClick={() => form.reset()}\n              >\n                Cancel\n              </Button>\n              <Button type="submit">Save</Button>\n            </Layout.Group>\n            <Link\n              onClick={() => console.log(\'clicked next\')}\n              css={{ marginLeft: \'auto\' }}\n            >\n              Next\n              <IconMaterial icon="chevron_right" />\n            </Link>\n          </FloatingSection>\n        </FormProvider>\n      </PageBody>\n    </div>\n  );\n};\n')),(0,l.kt)("h2",{id:"space"},"Space"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"space")," prop to adjust the spacing between the ",(0,l.kt)("inlineCode",{parentName:"p"},"FloatingSection")," component and either the top or the bottom of the screen depending on the position setting. The default is ",(0,l.kt)("inlineCode",{parentName:"p"},"24"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      selectList: \'\',\n      dateInput: \'\',\n      dateInputRange: { from: \'\', to: \'\' },\n      radioGroup: null,\n      checkboxGroup: [],\n      textInput1: \'\',\n      textInput2: \'\',\n      textInput3: \'\',\n      textInputArea: \'\',\n    },\n  });\n\n  const options = [\n    { value: \'react\', label: \'React\' },\n    { value: \'ng\', label: \'Angular\' },\n    { value: \'svelte\', label: \'Svelte\' },\n    { value: \'vue\', label: \'Vue\' },\n    { value: \'alpine\', label: \'Alpine\' },\n    { value: \'ember\', label: \'Ember\' },\n    { value: \'stimulus\', label: \'Stimulus\' },\n    { value: \'preact\', label: \'Preact\' },\n  ];\n\n  const onSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  const containerRef = useRef();\n\n  return (\n    <div ref={containerRef}>\n      <PageBody>\n        <FormProvider\n          state={form}\n          onSubmit={onSubmit}\n          style={{ backgroundColor: \'white\' }}\n        >\n          <Layout.Stack grow space={30} style={{ padding: \'40px 20px\' }}>\n            <SelectInput\n              label="Select List Option"\n              model="selectList"\n              placeholder="Select from list"\n              options={options}\n              validators={{ required: true }}\n            />\n            <DateInput model="dateInput" validators={{ required: true }} />\n            <DateInputRange\n              model="dateInputRange"\n              validators={{ required: true }}\n            />\n            <RadioGroup\n              label="Select Radio Button Option"\n              model="radioGroup"\n              validators={{ required: true }}\n              display="row"\n            >\n              <RadioGroup.Radio label="One" value="one" />\n              <RadioGroup.Radio label="Two" value="two" />\n              <RadioGroup.Radio label="Three" value="three" />\n              <RadioGroup.Radio label="Four" value="four" />\n            </RadioGroup>\n            <CheckboxGroup\n              label="Select Checkbox Option(s)"\n              model="checkboxGroup"\n              validators={{ required: true }}\n            >\n              <Checkbox label="Option 1" value="one" />\n              <Checkbox label="Option 2" value="two" />\n              <Checkbox label="Option 3" value="three" />\n            </CheckboxGroup>\n            <TextInput\n              label="Text Input 1"\n              model="textInput1"\n              validators={{ required: true }}\n            />\n            <TextInput\n              label="Text Input 2"\n              model="textInput2"\n              validators={{ required: true }}\n            />\n            <TextInput\n              label="Text Input 3"\n              model="textInput3"\n              validators={{ required: true }}\n            />\n            <TextInputArea\n              label="Text Input Area"\n              model="textInputArea"\n              rows={8}\n              validators={{ required: true }}\n            />\n          </Layout.Stack>\n          <FloatingSection\n            containerRef={containerRef}\n            space={50}\n            css={{\n              \'abyss-floating-section-root\': {\n                minHeight: \'72px\',\n                display: \'flex\',\n                alignItems: \'center\',\n                padding: \'$md\',\n              },\n            }}\n          >\n            <Layout.Stack alignItems="left" space={30} grow>\n              <Text>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n                rhoncus id orci sit amet pulvinar. Vivamus at urna pellentesque,\n                commodo enim nec, dictum lorem. Phasellus at facilisis ligula.\n                Pellentesque pharetra ipsum in faucibus convallis. Proin sit\n                amet erat ut libero tempus tristique. Nulla non bibendum orci,\n                et imperdiet elit.\n              </Text>\n              <Layout.Group space={20} alignLayout="center">\n                <Button\n                  variant="outline"\n                  type="button"\n                  onClick={() => form.reset()}\n                >\n                  Clear\n                </Button>\n                <Button type="submit">Save</Button>\n              </Layout.Group>\n            </Layout.Stack>\n          </FloatingSection>\n        </FormProvider>\n      </PageBody>\n    </div>\n  );\n};\n'))),(0,l.kt)(d,{label:"Integration",mdxType:"Tab"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={FloatingSection}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The elements that will be rendered within the component',\n    },\n\n    {\n      name: 'alwaysFloat',\n      type: 'boolean',\n      description:\n        'Disables animation and retains a floating state at all times',\n    },\n    {\n      name: 'space',\n      type: 'number',\n      description:\n        'The space between the component and either the bottom or top of the screen depending on the position setting',\n    },\n    {\n      name: 'containerRef',\n      type: 'ReactNode',\n      description:\n        'Ref of the parent container; required for accessibility compliance',\n    },\n    {\n      name: 'position',\n      type: '\"bottom\" | \"top\"',\n      description:\n        'Sets the position of the component to either the top or bottom of the screen',\n    },\n  ]}\n/>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={FloatingSection}\n  rows={[\n    {\n      name: 'floating-section-root',\n      description: 'Floating section root element',\n    },\n  ]}\n/>\n"))))}b.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=o.createContext({}),p=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return t?o.createElement(b,l(l({ref:n},s),{},{components:t})):o.createElement(b,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var r={};for(var u in n)hasOwnProperty.call(n,u)&&(r[u]=n[u]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<i;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);