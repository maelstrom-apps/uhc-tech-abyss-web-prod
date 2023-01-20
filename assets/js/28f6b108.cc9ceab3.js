"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[714],{83169:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r,o=n(7896),a=n(31461),s=(n(2784),n(3905)),i=["components"],l={id:"abyss-contributors",title:"Abyss Contributors"},c=void 0,p={unversionedId:"developers/abyss-contributors",id:"developers/abyss-contributors",isDocsHomePage:!1,title:"Abyss Contributors",description:"Overview",source:"@site/docs/developers/abyss-contributors.md",sourceDirName:"developers",slug:"/developers/abyss-contributors",permalink:"/developers/abyss-contributors",tags:[],version:"current",frontMatter:{id:"abyss-contributors",title:"Abyss Contributors"},sidebar:"docs",previous:{title:"Abyss Admirals",permalink:"/developers/abyss-admirals"},next:{title:"Documentation Guide",permalink:"/developers/documentation-guide"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Abyss Code Repo",id:"abyss-code-repo",children:[{value:"Setting Up Project Locally",id:"setting-up-project-locally",children:[],level:3},{value:"Commit Conventions",id:"commit-conventions",children:[],level:3},{value:"Git Branch Names",id:"git-branch-names",children:[],level:3}],level:2},{value:"Secure Groups",id:"secure-groups",children:[],level:2},{value:"Developer Tools",id:"developer-tools",children:[],level:2},{value:"Design Tools",id:"design-tools",children:[],level:2}],d=(r="ExitLink",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),m={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"First of all, thank you for your interest in contributing to Abyss. All of your contributions are valuable to the project! There are several ways you can get involved in the Abyss community and become a contributor:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Share Abyss:")," Share the link to ",(0,s.kt)("a",{parentName:"li",href:"https://abyss.uhc.com"},"Abyss")," with members of your product team, and we'd be happy to discuss how we can help support your application."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Improve documentation:")," Help us improve the ",(0,s.kt)(d,{href:"https://github.com/uhc-tech/abyss/tree/main/products/abyss-docs",mdxType:"ExitLink"},"Abyss Docs")," by fixing incomplete or missing sections, examples, and explanations."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Provide feedback:")," The team at Abyss are constantly working to make the project better, please let us know what features you would like to see with the ",(0,s.kt)("a",{parentName:"li",href:"/contact-us/"},"Contact Us")," form."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Join Abyss Admirals:")," Become an ",(0,s.kt)("a",{parentName:"li",href:"/developers/abyss-admirals/"},"Abyss Admiral")," and champion for Abyss as a designated point of contact for your product.")),(0,s.kt)("h2",{id:"abyss-code-repo"},"Abyss Code Repo"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'() => {\n  const customIcon = (\n    <svg height="24" width="24" viewBox="0 0 16 16">\n      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />\n    </svg>\n  );\n\n  return (\n    <Card>\n      <Box\n        padding="$md"\n        align="start"\n        color="none"\n        style={{ justifyContent: \'center\' }}\n      >\n        <p>\n          The Abyss source code monorepo contains both core packages and\n          products:\n        </p>\n        <Grid css={{ marginBottom: \'$xs\' }}>\n          <Grid.Col span={6}>\n            <b>Packages:</b>\n            <ul\n              style={{\n                listStyleType: \'circle\',\n                marginLeft: 25,\n                columnCount: 3,\n              }}\n            >\n              <li>api</li>\n              <li>core</li>\n              <li>desktop</li>\n              <li>ext</li>\n              <li>infra</li>\n              <li>mobile</li>\n              <li>parcels</li>\n              <li>utility</li>\n              <li>web</li>\n            </ul>\n          </Grid.Col>\n          <Grid.Col span={6}>\n            <b>Products:</b>\n            <ul\n              style={{\n                listStyleType: \'circle\',\n                marginLeft: 25,\n                columnCount: 2,\n              }}\n            >\n              <li>assets</li>\n              <li>docs</li>\n              <li>ext</li>\n              <li>scaffold</li>\n              <li>storybook</li>\n            </ul>\n          </Grid.Col>\n        </Grid>\n        <Docs.Button\n          variant="outline"\n          size="$sm"\n          href="https://github.com/uhc-tech/abyss"\n          after={\n            <Icon size="24px" title="github" color="$primary1">\n              {customIcon}\n            </Icon>\n          }\n        >\n          Visit\n        </Docs.Button>\n      </Box>\n    </Card>\n  );\n};\n')),(0,s.kt)("h3",{id:"setting-up-project-locally"},"Setting Up Project Locally"),(0,s.kt)("p",null,"For the essential system tools to get Abyss running on your local development environment, visit our ",(0,s.kt)("a",{parentName:"p",href:"/developers/workspace-setup"},"workspace setup")," guide."),(0,s.kt)("p",null,"To set up, clone the ",(0,s.kt)(d,{href:"https://github.com/uhc-tech/abyss",mdxType:"ExitLink"},"abyss")," repository:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Make the abyss-projects directory\n$ mkdir abyss-projects && cd abyss-projects\n\n# Clone the abyss repository\n$ git clone https://github.com/uhc-tech/abyss.git\n")),(0,s.kt)("br",null),(0,s.kt)("p",null,"Afterwards, install the dependencies for ",(0,s.kt)("inlineCode",{parentName:"p"},"abyss")," on your machine:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Go into the abyss directory\n$ cd abyss\n\n# Install abyss dependencies\n$ npm i\n")),(0,s.kt)("br",null),(0,s.kt)("p",null,"Then you are ready to start ",(0,s.kt)("inlineCode",{parentName:"p"},"abyss-docs")," on your machine:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run docs\n")),(0,s.kt)("h3",{id:"commit-conventions"},"Commit Conventions"),(0,s.kt)("p",null,"Head to the ",(0,s.kt)(d,{href:"https://github.com/uhc-tech/abyss",mdxType:"ExitLink"},"Abyss")," source code for updates and additions to our Abyss NPM packages and documentation. With several contributors working in these repos daily, it's important write your commit messages to be as descriptive as possible."),(0,s.kt)("p",null,"Commit Convention:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[area] Optional title: Message\n")),(0,s.kt)("br",null),(0,s.kt)("p",null,"Examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[docs] Button: Edit accessibility section\n\n[@abyss/ui] useLoadingOverlay: Add remove handler\n\n[@abyss/core] Fix non-prod deployment scripts\n\n[@abyss/ui] Carousel: New feature added\n\n[docs] Doc scripts: Fix docs deployment script\n")),(0,s.kt)("h3",{id:"git-branch-names"},"Git Branch Names"),(0,s.kt)("p",null,"Naming the branch you're working on helps repository maintainers understand the changes being made when the PR is opened. Using consistent branch name prefixes also allows build tools to automatically categorize the branches using labels. Branch names should be all lowercase (with the exception of US and DE) and include hyphens between words. All branches are divided into four groups:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"story/#######")," - Changes associated with a User Story, use the unique 7-digit number from Rally followed by a task description.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"defect/#######")," - Changes associated with a Defect, use the unique 7-digit number from Rally followed by a task description.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"refactor/")," - Changes to the repo that aren't documented in Rally are considered refactors, so use the task portion to add detail to your branch name.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"release/")," - Used specifically by build tools, this branch name is exclusive to release notes and documentation leading up to a new release."))),(0,s.kt)("p",null,"Examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"git checkout -b story/US2434515-developer-toolkit\n\ngit checkout -b defect/DE308703-button-accessibility\n\ngit checkout -b refactor/select-list-multi-docs\n\ngit checkout -b story/US1533842-use-loading-overlay\n")),(0,s.kt)("br",null),(0,s.kt)("p",null,"Branch Name Rules:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Branch prefix must start with ",(0,s.kt)("strong",{parentName:"li"},"story"),", ",(0,s.kt)("strong",{parentName:"li"},"defect"),", ",(0,s.kt)("strong",{parentName:"li"},"refactor"),", or ",(0,s.kt)("strong",{parentName:"li"},"release")),(0,s.kt)("li",{parentName:"ul"},"Branch name must be only ",(0,s.kt)("strong",{parentName:"li"},"lowercase letters, numbers, and hypens")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"US###")," and ",(0,s.kt)("strong",{parentName:"li"},"DE###")," are valid character exceptions")),(0,s.kt)("h2",{id:"secure-groups"},"Secure Groups"),(0,s.kt)("p",null,"Visit ",(0,s.kt)(d,{href:"https://secure.uhc.com",mdxType:"ExitLink"},"secure.uhc.com")," to request permissions groups:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"abyss_contributors"),": For write access to ",(0,s.kt)(d,{href:"https://github.com/uhc-tech/abyss",mdxType:"ExitLink"},"abyss")," code repositories")),(0,s.kt)("h2",{id:"developer-tools"},"Developer Tools"),(0,s.kt)("p",null,"Abyss is built using a list of trusted resources. Below are links to what makes up the framework of Abyss."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"() => {\n  const devLinks = [\n    {\n      id: 1,\n      name: 'ReactJS',\n      href: 'https://reactjs.org/',\n    },\n    {\n      id: 2,\n      name: 'Docusaurus',\n      href: 'https://docusaurus.io/',\n    },\n    {\n      id: 3,\n      name: 'Stitches',\n      href: 'https://stitches.dev/',\n    },\n    {\n      id: 4,\n      name: 'React Hook Form',\n      href: 'https://react-hook-form.com/',\n    },\n    {\n      id: 5,\n      name: 'React Router',\n      href: 'https://reactrouter.com/',\n    },\n    {\n      id: 6,\n      name: 'npm',\n      href: 'https://docs.npmjs.com/about-npm',\n    },\n  ];\n  return (\n    <Layout.Stack>\n      <Layout.Group style={{ flexFlow: 'row wrap' }}>\n        {devLinks.map((link) => {\n          return (\n            <Docs.Button\n              variant=\"outline\"\n              style={{\n                borderRadius: '5px',\n                marginRight: '8px',\n                marginBottom: '8px',\n              }}\n              href={link.href}\n              after={<IconMaterial icon=\"arrow_forward\" color=\"$primary1\" />}\n              linkText={link.name}\n            >\n              {link.name}\n            </Docs.Button>\n          );\n        })}\n      </Layout.Group>\n    </Layout.Stack>\n  );\n};\n")),(0,s.kt)("p",null,"If you're ready to get started with Abyss on your own, checkout the Abyss StarterKit (coming soon) to get started."),(0,s.kt)("h2",{id:"design-tools"},"Design Tools"),(0,s.kt)("p",null,"Abyss has a dedicated team of designers creating a Design Kit on Figma. Below are some resources to help developers navigate these tools:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"() => {\n  const designLinks = [\n    {\n      id: 1,\n      name: 'Abyss Design Kit',\n      href: 'https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1',\n    },\n    {\n      id: 2,\n      name: 'Figma for developers',\n      href: 'https://www.figma.com/best-practices/tips-on-developer-handoff/an-overview-of-figma-for-developers/',\n    },\n    {\n      id: 3,\n      name: 'UHC branding',\n      href: 'https://brand.uhc.com/design-with-care',\n    },\n    {\n      id: 4,\n      name: 'Optum branding',\n      href: 'https://brand.optum.com/',\n    },\n  ];\n  return (\n    <Layout.Stack>\n      <Layout.Group style={{ flexFlow: 'row wrap' }}>\n        {designLinks.map((link) => {\n          return (\n            <Docs.Button\n              variant=\"outline\"\n              style={{\n                borderRadius: '5px',\n                marginRight: '8px',\n                marginBottom: '8px',\n              }}\n              href={link.href}\n              after={<IconMaterial icon=\"arrow_forward\" color=\"$primary1\" />}\n            >\n              {link.name}\n            </Docs.Button>\n          );\n        })}\n      </Layout.Group>\n    </Layout.Stack>\n  );\n};\n")),(0,s.kt)("p",null,"If you're a designer and want to dive deeper into the Abyss Design Kit, visit our Designer Getting Started (coming soon) page to learn more."),(0,s.kt)("br",null))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);