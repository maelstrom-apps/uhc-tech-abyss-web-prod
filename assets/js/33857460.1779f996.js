"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[6778],{61349:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var o=n(7896),r=n(31461),a=(n(2784),n(3905)),l=["components"],s={id:"styled-components",title:"Styled Components"},i=void 0,d={unversionedId:"developers/tutorials/styled-components",id:"developers/tutorials/styled-components",isDocsHomePage:!1,title:"Styled Components",description:"---",source:"@site/docs/developers/tutorials/6-styled-components.md",sourceDirName:"developers/tutorials",slug:"/developers/tutorials/styled-components",permalink:"/developers/tutorials/styled-components",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"styled-components",title:"Styled Components"},sidebar:"docs",previous:{title:"Custom Themes",permalink:"/developers/tutorials/custom-themes"},next:{title:"GraphQL Endpoints",permalink:"/developers/tutorials/graphql-endpoints"}},p=[{value:"Step 1: Create a Styled Page",id:"step-1-create-a-styled-page",children:[],level:3},{value:"Step 2: Creating Styled Components",id:"step-2-creating-styled-components",children:[],level:3},{value:"Step 3: Rendering Styled Components",id:"step-3-rendering-styled-components",children:[],level:3},{value:"Step 4: Viewing Styled Components",id:"step-4-viewing-styled-components",children:[],level:3}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," ",(0,a.kt)("br",null),"We would appreciate any feedback on our tutorial guide. If you are stuck at any time, make sure to contact the Abyss Admiral assigned to your team. If they cannot help, send a help request on our ",(0,a.kt)("a",{parentName:"p",href:"/contact-us/"},"Contact Page"),"."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Before starting, be sure to complete the ",(0,a.kt)("a",{parentName:"p",href:"/developers/tutorials/create-abyss-app/"},"Create Abyss App")," tutorial."),(0,a.kt)("h3",{id:"step-1-create-a-styled-page"},"Step 1: Create a Styled Page"),(0,a.kt)("p",null,"In Visual Studio Code, open ",(0,a.kt)("strong",{parentName:"p"},"my-new-app")," project. From here, navigate into ",(0,a.kt)("strong",{parentName:"p"},"products/web/src/routes"),", and create a new folder, name ",(0,a.kt)("strong",{parentName:"p"},'"StyledPage"'),". Within this new folder, we'll be creating two new files, named ",(0,a.kt)("strong",{parentName:"p"},'"index.js"')," and ",(0,a.kt)("strong",{parentName:"p"},'"StyledPage.jsx"'),"."),(0,a.kt)("p",null,"Remember to connect your page to the router in ",(0,a.kt)("strong",{parentName:"p"},"products/web/src/routes/Routes.jsx")," by including a new Route shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Router.Route path="/styled-page" element={<StyledPage />} />\n')),(0,a.kt)("p",null,"You may reference the ",(0,a.kt)("a",{parentName:"p",href:"/developers/tutorials/page-routing/"},"Page Routing")," tutorial for more information on creating pages."),(0,a.kt)("h3",{id:"step-2-creating-styled-components"},"Step 2: Creating Styled Components"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("strong",{parentName:"p"},"styled")," tool to style html elements. It uses JSS to create CSS classes within JavaScript. Styling can consist of changing a component's font, color, size, padding, and spacing, etc If you are curious to learn more about other options, check out ",(0,a.kt)("a",{parentName:"p",href:"/web/tools/styled/"},"styled"),"."),(0,a.kt)("p",null,"In your ",(0,a.kt)("strong",{parentName:"p"},"StyledPage.jsx")," file, add the following import statements:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { styled } from '@abyss/web/tools/styled';\nimport { Text } from '@abyss/web/ui/Text';\nimport { Layout } from '@abyss/web/ui/Layout';\nimport { IconBrand } from '@abyss/web/ui/IconBrand';\n")),(0,a.kt)("p",null,"We will create an information box to demonstrate how to use ",(0,a.kt)("strong",{parentName:"p"},"styled"),"."),(0,a.kt)("p",null,"After your import statements, insert the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const StyledContainer = styled('div', {\n  padding: '$lg',\n});\n\nconst StyledBox = styled('div', {\n  display: 'inline-block',\n  border: '1px solid $gray4',\n  borderRadius: 8,\n  padding: '0 $md',\n  backgroundColor: '$info2',\n});\n\nconst StyledIcon = styled(IconBrand, {\n  border: '1px solid $gray4',\n  borderRadius: '50%',\n});\n")),(0,a.kt)("h3",{id:"step-3-rendering-styled-components"},"Step 3: Rendering Styled Components"),(0,a.kt)("p",null,"In your ",(0,a.kt)("strong",{parentName:"p"},"StyledPage.jsx")," file, add following code below to your ",(0,a.kt)("strong",{parentName:"p"},"StyledPage")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'export const StyledPage = () => {\n  return (\n    <StyledContainer>\n      <StyledBox>\n        <Layout.Group>\n          <StyledIcon icon="cost" variant="twotonelightcircle" brand="uhc" />\n          Average cost in your area: <Text fontWeight="$bold">$980</Text>\n        </Layout.Group>\n      </StyledBox>\n    </StyledContainer>\n  );\n};\n')),(0,a.kt)("p",null,"This component uses the ",(0,a.kt)("strong",{parentName:"p"},"StyledBox")," and ",(0,a.kt)("strong",{parentName:"p"},"StyledContainer")," components we created previously. There are other features on the ",(0,a.kt)("a",{parentName:"p",href:"/web/tools/styled/"},"styled")," page to customize and edit your components to best fit your product's custom designs."),(0,a.kt)("h3",{id:"step-4-viewing-styled-components"},"Step 4: Viewing Styled Components"),(0,a.kt)("p",null,"At the end of this tutorial, your code in your ",(0,a.kt)("strong",{parentName:"p"},"StyledPage.jsx")," file should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { styled } from '@abyss/web/tools/styled';\nimport { Text } from '@abyss/web/ui/Text';\nimport { Layout } from '@abyss/web/ui/Layout';\n\nconst StyledContainer = styled('div', {\n  padding: '$lg',\n});\n\nconst StyledBox = styled('div', {\n  display: 'inline-block',\n  border: '1px solid $gray4',\n  borderRadius: 8,\n  padding: '$xs $md',\n  backgroundColor: '$info2',\n});\n\nconst StyledIcon = styled(IconBrand, {\n  border: '1px solid $gray4',\n  borderRadius: '50%',\n});\n\nexport const StyledPage = () => {\n  return (\n    <StyledContainer>\n      <StyledBox>\n        <Layout.Group>\n          <StyledIcon icon=\"cost\" variant=\"twotonelightcircle\" brand=\"uhc\" />\n          Average cost in your area: <Text fontWeight=\"$bold\">$980</Text>\n        </Layout.Group>\n      </StyledBox>\n    </StyledContainer>\n  );\n};\n")),(0,a.kt)("p",null,"In your browser, your StyledPage should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const StyledContainer = styled('div', {\n  padding: '$lg',\n});\n\nconst StyledBox = styled('div', {\n  display: 'inline-block',\n  border: '1px solid $gray4',\n  borderRadius: 8,\n  padding: '$xs $md',\n  backgroundColor: '$info2',\n});\n\nconst StyledIcon = styled(IconBrand, {\n  border: '1px solid $gray4',\n  borderRadius: '50%',\n});\n\nconst StyledPage = () => {\n  return (\n    <StyledContainer>\n      <StyledBox>\n        <Layout.Group>\n          <StyledIcon icon=\"cost\" variant=\"twotonelightcircle\" brand=\"uhc\" />\n          Average cost in your area: <Text fontWeight=\"$bold\">$980</Text>\n        </Layout.Group>\n      </StyledBox>\n    </StyledContainer>\n  );\n};\n\nrender(() => {\n  return <StyledPage />;\n});\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"Great job, you have successfully styled components!"))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),y=r,m=u["".concat(i,".").concat(y)]||u[y]||c[y]||a;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);