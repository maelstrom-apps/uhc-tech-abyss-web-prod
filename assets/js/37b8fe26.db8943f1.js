"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[6664],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(t),c=a,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return t?i.createElement(f,o(o({ref:n},d),{},{components:t})):i.createElement(f,o({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var p=2;p<l;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},76164:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var i,a=t(7896),l=t(31461),o=(t(67294),t(30876)),r=["components"],s={id:"file-upload",category:"Forms",title:"FileUpload",description:"An HTML5 file upload component with a drag-drop zone and file browser for selection.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=8207%3A26355",pagination_prev:"web/ui/date-input-range",pagination_next:"web/ui/radio-group"},p=void 0,d={unversionedId:"web/ui/file-upload",id:"web/ui/file-upload",isDocsHomePage:!1,title:"FileUpload",description:"An HTML5 file upload component with a drag-drop zone and file browser for selection.",source:"@site/docs/web/ui/FileUpload.md",sourceDirName:"web/ui",slug:"/web/ui/file-upload",permalink:"/web/ui/file-upload",tags:[],version:"current",frontMatter:{id:"file-upload",category:"Forms",title:"FileUpload",description:"An HTML5 file upload component with a drag-drop zone and file browser for selection.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=8207%3A26355",pagination_prev:"web/ui/date-input-range",pagination_next:"web/ui/radio-group"},sidebar:"docs",previous:{title:"DateInputRange",permalink:"/web/ui/date-input-range"},next:{title:"RadioGroup",permalink:"/web/ui/radio-group"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"useState",id:"usestate",children:[],level:2},{value:"useForm (Recommended)",id:"useform-recommended",children:[],level:2},{value:"Upload Message",id:"upload-message",children:[],level:2},{value:"Header",id:"header",children:[],level:2},{value:"Uploading Spinner",id:"uploading-spinner",children:[],level:2},{value:"Max Files",id:"max-files",children:[],level:2},{value:"Max File Size",id:"max-file-size",children:[],level:2},{value:"Disabled",id:"disabled",children:[],level:2},{value:"File History",id:"file-history",children:[],level:2}],u=(i="Tab",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),c={toc:m};function f(e){var n=e.components,t=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(u,{label:"Overview",mdxType:"Tab"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { FileUpload } from '@abyss/web/ui/FileUpload';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'FileUpload',\n  inputs: [\n    {\n      prop: 'maxFiles',\n      type: 'number',\n    },\n    {\n      prop: 'maxFileSize',\n      type: 'number',\n    },\n    {\n      prop: 'uploadMessage',\n      type: 'string',\n    },\n    {\n      prop: 'noIcon',\n      type: 'boolean',\n    },\n    {\n      prop: 'isUploading',\n      type: 'boolean',\n    },\n    {\n      prop: 'isDisabled',\n      type: 'boolean',\n    },\n        {\n      prop: 'label',\n      type: 'string',\n    },\n    {\n      prop: 'hideLabel',\n      type: 'boolean',\n    },\n  ],\n}\n\n() => {\n  return (\n    <FileUpload\n      maxFileSize={5}\n      onChange={(fileList) => console.log('onChange', fileList)}\n      label=\"FileUpload Sandbox\"\n      hideLabel\n    />\n  );\n};\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,'To add one or more files to the file tray upload-queue either click the "Open File Browser" button or drag and drop onto the drop zone. Each time a file or group of files is added to the queue the ',(0,o.kt)("inlineCode",{parentName:"p"},"onChange")," callback returns the current array of file objects that are ready to be uploaded."),(0,o.kt)("p",null,"Prior to submission any file that has been added to the file tray upload-queue can be removed by clicking the 'X' button located on the right side of each file item."),(0,o.kt)("p",null,"Each file is returned as a File type object that contains the following properties:\n",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lastModified"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lastModifiedDate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"size"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"webkitRelativePath"),". For more info on these properties please visit ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#getting_information_on_selected_files"},"here"),". To access the contents of the file and complete the upload process you must use the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FileReader"},"FileReader API"),"."),(0,o.kt)("p",null,"For accessibility compliance and benefit of the user experience, upon completion of file upload it is recommended that some form of feedback is utilized to inform the user of the upload status such as through the usage of the Abyss ",(0,o.kt)("a",{parentName:"p",href:"/web/ui/alert"},"Alert")," component."),(0,o.kt)("p",null,"Use the example below to add files and submit to see a complete usage cycle."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [fileList, setFileList] = useState([]);\n  const [fileHistoryList, setFileHistoryList] = useState([]);\n  const [isUploading, setIsUploading] = useState(false);\n  const [alertIsVisible, setAlertIsVisible] = useState(false);\n\n  const onSubmit = () => {\n    console.log(\'fileList\', fileList);\n    if (!fileList.length) return;\n    setAlertIsVisible(false);\n    setIsUploading(true);\n    const fileHistory = fileList.map((file) => {\n      return {\n        name: file.name,\n        complete: true,\n      };\n    });\n    setTimeout(() => {\n      setFileHistoryList((previous) => [...previous, ...fileHistory]);\n      setIsUploading(false);\n      setAlertIsVisible(true);\n    }, 2000);\n  };\n\n  return (\n    <React.Fragment>\n      <Alert\n        title="File upload was successful"\n        variant="success"\n        isVisible={alertIsVisible}\n        css={{ marginBottom: \'$sm\' }}\n      ></Alert>\n      <FileUpload\n        maxFileSize={5}\n        isUploading={isUploading}\n        onChange={setFileList}\n        fileHistory={fileHistoryList}\n        label="FileUpload Usage"\n        hideLabel\n      />\n      <Button onClick={onSubmit} style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </React.Fragment>\n  );\n};\n')),(0,o.kt)("h2",{id:"usestate"},"useState"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," hook gets values from the component state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const [fileList, setFileList] = useState([]);\n\n  const onSubmit = () => {\n    console.log('fileList', fileList);\n  };\n\n  return (\n    <React.Fragment>\n      <FileUpload\n        maxFileSize={5}\n        onChange={setFileList}\n        label=\"FileUpload useState\"\n        hideLabel\n      />\n      <Button onClick={onSubmit} style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </React.Fragment>\n  );\n};\n")),(0,o.kt)("h2",{id:"useform-recommended"},"useForm (Recommended)"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook lets the DOM handle form data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  const onSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={onSubmit}>\n      <FileUpload\n        model="fileUpload"\n        maxFileSize={5}\n        label="Form FileUpload"\n        validators={{ required: true }}\n      />\n      <Button type="submit" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n')),(0,o.kt)("h2",{id:"upload-message"},"Upload Message"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"uploadMessage")," prop to configure the messaging that displays beneath the file upload icon. The recommended usage of this is for displaying more detailed information on the file types allowed as seen in this example. Please note that this component currently does not support file type validation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  return (\n    <FileUpload\n      maxFileSize={5}\n      onChange={(fileList) => console.log(\'onChange\', fileList)}\n      label="FileUpload Upload Message"\n      hideLabel\n      uploadMessage="Drag your .jpg file here"\n    />\n  );\n};\n')),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("p",null,"Add an optional header to provide the user with more detailed information and guidance on the prescribed usage of the component.\nUsing the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerContent")," prop pass in the heading title text using ",(0,o.kt)("inlineCode",{parentName:"p"},"FileUpload.Heading")," and the description text using ",(0,o.kt)("inlineCode",{parentName:"p"},"FileUpload.Description"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const headerContent = (\n    <React.Fragment>\n      <FileUpload.Heading>Accepted Files</FileUpload.Heading>\n      <FileUpload.Description>\n        JPEG (Joint Photographic Experts Group), PNG (Portable Network\n        Graphics), GIF (Graphics Interchange Format), PDF (Portable Document\n        Format), SVG (Scalable Vector Graphics), MP4 (Moving Picture Experts\n        Group)\n      </FileUpload.Description>\n    </React.Fragment>\n  );\n\n  return (\n    <FileUpload\n      maxFileSize={5}\n      onChange={(fileList) => console.log('onChange', fileList)}\n      label=\"FileUpload Header\"\n      hideLabel\n      headerContent={headerContent}\n    />\n  );\n};\n")),(0,o.kt)("h2",{id:"uploading-spinner"},"Uploading Spinner"),(0,o.kt)("p",null,"To show an upload-in-progress state set the ",(0,o.kt)("inlineCode",{parentName:"p"},"isUploading")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),' and the "Open File Browser" button will be replaced with a loading spinner.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  return (\n    <FileUpload\n      maxFileSize={5}\n      onChange={(fileList) => console.log('onChange', fileList)}\n      label=\"FileUpload Uploading Spinner\"\n      hideLabel\n      isUploading\n    />\n  );\n};\n")),(0,o.kt)("h2",{id:"max-files"},"Max Files"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxFiles")," prop to set the maximum number of files that can added to the file tray upload-queue. When set to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," the component is operating in single file mode. The default setting is ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," which allows for the addition of unlimited files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  return (\n    <FileUpload\n      maxFileSize={5}\n      onChange={(fileList) => console.log('onChange', fileList)}\n      label=\"FileUpload Max Files\"\n      hideLabel\n      maxFiles={2}\n    />\n  );\n};\n")),(0,o.kt)("h2",{id:"max-file-size"},"Max File Size"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxFileSize")," prop to limit the maximum file size allowed in MB (megabytes). If a file is selected that exceeds the file size limit it will be not be added to the file tray upload-queue and an error message will be displayed. The default setting has no file size limitation."),(0,o.kt)("p",null,'File size details are displayed beneath the "Open File Browser" button.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  return (\n    <FileUpload\n      onChange={(fileList) => console.log('onChange', fileList)}\n      label=\"FileUpload Max File Size\"\n      hideLabel\n      maxFileSize={5}\n    />\n  );\n};\n")),(0,o.kt)("h2",{id:"disabled"},"Disabled"),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"isDisabled")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to disable the file upload field so no files can be dragged onto the drop zone or selected through the file browser."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  return (\n    <FileUpload\n      maxFileSize={5}\n      onChange={(fileList) => console.log('onChange', fileList)}\n      label=\"FileUpload Disabled\"\n      hideLabel\n      isDisabled\n    />\n  );\n};\n")),(0,o.kt)("h2",{id:"file-history"},"File History"),(0,o.kt)("p",null,"To include previously uploaded files within the file tray pass in an array of objects to the ",(0,o.kt)("inlineCode",{parentName:"p"},"fileHistory")," prop.\nEach file history object must include the following two properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"complete")," : boolean that determines the file's current status displayed as a badge"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," : file name that will be displayed for the item")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"fileHistorySort")," prop to determine the sort direction of file history items. If set to ",(0,o.kt)("inlineCode",{parentName:"p"},"desc")," file history items will remain below all newly added files. If set to ",(0,o.kt)("inlineCode",{parentName:"p"},"asc")," all file history items will remain on top. The default setting is ",(0,o.kt)("inlineCode",{parentName:"p"},"asc"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const fileHistoryList = [\n    {\n      complete: true,\n      name: 'file-status-is-complete.jpg',\n    },\n    {\n      complete: false,\n      name: 'file-status-is-incomplete.jpg',\n    },\n  ];\n\n  return (\n    <FileUpload\n      maxFileSize={5}\n      onChange={(fileList) => console.log('onChange', fileList)}\n      label=\"FileUpload File History\"\n      hideLabel\n      fileHistory={fileHistoryList}\n      fileHistorySort=\"desc\"\n    />\n  );\n};\n"))),(0,o.kt)(u,{label:"Integration",mdxType:"Tab"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={FileUpload}\n  rows={[\n    {\n      name: 'maxFileSize',\n      type: 'number',\n      description: 'Maximum file size allowed in MB(megabytes)',\n    },\n    {\n      name: 'maxFiles',\n      type: 'number',\n      description: 'Maximum number of files allowed to be added',\n    },\n    {\n      name: 'uploadMessage',\n      type: 'string',\n      description: 'Messaging text displayed below the file upload icon',\n    },\n    {\n      name: 'headerContent',\n      type: 'ReactNode',\n      description:\n        \"Header content that's comprised of the FileUpload.Heading and FileUpload.Description components\",\n    },\n    {\n      name: 'noIcon',\n      type: 'boolean',\n      description: 'Flag to hide the file upload icon',\n    },\n    {\n      name: 'isUploading',\n      type: 'boolean',\n      description:\n        'Flag to enable the upload-in-progress state and display a loading spinner',\n    },\n    {\n      name: 'isDisabled',\n      type: 'boolean',\n      description: 'Flag to disable the file upload field',\n    },\n    {\n      name: 'label',\n      type: 'string',\n      description: 'Label for file upload field',\n    },\n    {\n      name: 'hideLabel',\n      type: 'boolean',\n      description: 'Flag to hide label',\n    },\n    {\n      name: 'onChange',\n      type: 'function',\n      description:\n        'Callback fired when a new file is added; returns the current list of files to be uploaded',\n    },\n    {\n      name: 'fileHistory',\n      type: 'array[object]',\n      default: '[]',\n      description:\n        'File history data to be included within the file tray { complete: boolean, name: string }',\n    },\n    {\n      name: 'fileHistorySort',\n      type: '\"asc\" | \"desc\"',\n      description: 'Sort direction of file history items',\n    },\n  ]}\n/>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={FileUpload.Heading}\n  rows={[\n    {\n      name: 'children',\n      type: 'string',\n      description: 'The text content of the file upload heading component',\n    },\n    {\n      name: 'headingLevel',\n      type: \"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'\",\n      description: 'Set the heading level',\n    },\n    {\n      name: 'color',\n      type: 'string',\n      description: 'Set the color of the heading text',\n    },\n    {\n      name: 'size',\n      type: 'string',\n      description: 'Set the font size of the heading text',\n    },\n  ]}\n/>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={FileUpload.Description}\n  rows={[\n    {\n      name: 'children',\n      type: 'string',\n      description: 'The text content of the file upload description component',\n    },\n  ]}\n/>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={FileUpload}\n  rows={[\n    {\n      name: 'file-upload-root',\n      description: 'File upload root element',\n    },\n    {\n      name: 'file-upload-label',\n      description: 'File upload label element',\n    },\n    {\n      name: 'file-upload-header-container',\n      description: 'File upload header container element',\n    },\n    {\n      name: 'file-upload-body-container',\n      description: 'File upload body container element',\n    },\n    {\n      name: 'file-upload-icon',\n      description: 'File upload icon element',\n    },\n    {\n      name: 'file-upload-message-text',\n      description: 'File upload message text element',\n    },\n    {\n      name: 'file-upload-spinner',\n      description: 'File upload spinner element',\n    },\n    {\n      name: 'file-upload-browse-button',\n      description: 'File upload browse button element',\n    },\n    {\n      name: 'file-upload-max-size-text',\n      description: 'File upload max size text element',\n    },\n    {\n      name: 'file-upload-error-list-container',\n      description: 'File upload error list container element',\n    },\n    {\n      name: 'file-upload-error-list-item',\n      description: 'File upload error list item element',\n    },\n    {\n      name: 'file-upload-descriptors',\n      description: 'File upload descriptors element',\n    },\n    {\n      name: 'file-upload-tray-container',\n      description: 'File upload tray container element',\n    },\n    {\n      name: 'file-upload-tray-item',\n      description: 'File upload tray item element',\n    },\n    {\n      name: 'file-upload-tray-item-remove-button',\n      description: 'File upload tray item remove button element',\n    },\n    {\n      name: 'file-upload-tray-item-remove-icon',\n      description: 'File upload tray item remove icon element',\n    },\n    {\n      name: 'file-upload-tray-item-status-badge',\n      description: 'File upload tray item status badge element',\n    },\n  ]}\n/>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={FileUpload.Heading}\n  rows={[\n    {\n      name: 'file-upload-header-heading-text',\n      description: 'File upload header heading text element',\n    },\n  ]}\n/>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={FileUpload.Description}\n  rows={[\n    {\n      name: 'file-upload-header-description-text',\n      description: 'File upload header description text element',\n    },\n  ]}\n/>\n"))))}f.isMDXComponent=!0}}]);