"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[7745],{7781:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r,i=n(7896),o=n(31461),a=(n(2784),n(3905)),u=["components"],l={id:"router",category:"Navigation",title:"Router",description:"Collection of navigational components that compose declaratively with your application.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1",pagination_prev:"web/ui/pagination",pagination_next:"web/ui/sub-navigation-menu"},s=void 0,p={unversionedId:"web/ui/router",id:"web/ui/router",isDocsHomePage:!1,title:"Router",description:"Collection of navigational components that compose declaratively with your application.",source:"@site/docs/web/ui/Router.md",sourceDirName:"web/ui",slug:"/web/ui/router",permalink:"/web/ui/router",tags:[],version:"current",frontMatter:{id:"router",category:"Navigation",title:"Router",description:"Collection of navigational components that compose declaratively with your application.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1",pagination_prev:"web/ui/pagination",pagination_next:"web/ui/sub-navigation-menu"},sidebar:"docs",previous:{title:"Pagination",permalink:"/web/ui/pagination"},next:{title:"SubNavigationMenu",permalink:"/web/ui/sub-navigation-menu"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Link Example",id:"link-example",children:[],level:2},{value:"Breadcrumbs Example",id:"breadcrumbs-example",children:[],level:2}],d=(r="Tab",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),m={toc:c};function g(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{label:"Overview",mdxType:"Tab"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Router } from '@abyss/web/ui/Router';\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Routes must be wrapped in an RouterProvider for navigation to work. Find additional resources on our RouterProvider component in ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/router-provider"},"RouterProvider"),". Routes are chosen based on the best match instead of being traversed in order."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const Page = ({ title }) => {\n    return (\n      <div>\n        <Router.MetaTags>\n          <title>{title}</title>\n          <meta name="description" content={title + \'Page\'} />\n        </Router.MetaTags>\n        <Heading css={{ \'abyss-heading-root\': { marginTop: \'15px\' } }}>\n          {title} Page\n        </Heading>\n      </div>\n    );\n  };\n\n  return (\n    <RouterProvider type="memory">\n      <ul>\n        <li>\n          <Link href="/">Home Page</Link>\n        </li>\n        <li>\n          <Link href="/getting-started/">Getting Started</Link>\n        </li>\n        <li>\n          <Link href="/web/ui/router">Router Routes</Link>\n        </li>\n      </ul>\n      <Router.Routes>\n        <Router.Route path="/" element={<Page title="Home" />} />\n        <Router.Route\n          path="/getting-started/"\n          element={<Page title="Getting Started" />}\n        />\n        <Router.Route\n          path="/web/ui/router/"\n          element={<Page title="Router" />}\n        />\n      </Router.Routes>\n    </RouterProvider>\n  );\n};\n')),(0,a.kt)("h2",{id:"link-example"},"Link Example"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Link")," is used to support components for Router. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," prop to set the link to a separate page. Find additional resources on our Link component in ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/link"},"Link"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const Page = ({ title }) => {\n    return (\n      <div>\n        <Router.MetaTags>\n          <title>{title}</title>\n          <meta name="description" />\n        </Router.MetaTags>\n      </div>\n    );\n  };\n\n  return (\n    <RouterProvider type="memory">\n      <ul>\n        <li>\n          <Link href="/web/ui/router">Router Routes</Link>\n        </li>\n      </ul>\n      <Router.Routes>\n        <Router.Route\n          path="/web/ui/router/"\n          element={<Page title="Router" />}\n        />\n      </Router.Routes>\n    </RouterProvider>\n  );\n};\n')),(0,a.kt)("h2",{id:"breadcrumbs-example"},"Breadcrumbs Example"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumbs")," is used to integrate components with Router. Find additional resources on our Breadcrumbs component in ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/breadcrumbs"},"Breadcrumbs"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const Page = ({ title }) => {\n    return (\n      <div>\n        <Router.MetaTags>\n          <title>{title}</title>\n          <meta name=\"description\" content={title + 'Page'} />\n        </Router.MetaTags>\n        <Heading css={{ 'abyss-heading-root': { margin: '16px 0px' } }}>\n          {title} Page\n        </Heading>\n      </div>\n    );\n  };\n\n  return (\n    <RouterProvider type=\"memory\">\n      <React.Fragment>\n        <Breadcrumbs\n          divider=\"/\"\n          items={[\n            { title: 'Home', href: '/' },\n            { title: 'Getting Started', href: '/getting-started/' },\n            { title: 'Breadcrumbs', href: '/web/ui/breadcrumbs/' },\n          ]}\n        />\n\n        <Router.Routes>\n          <Router.Route path=\"/\" element={<Page title=\"Home\" />} />\n          <Router.Route\n            path=\"/getting-started/\"\n            element={<Page title=\"Getting Started\" />}\n          />\n          <Router.Route\n            path=\"/web/ui/breadcrumbs/\"\n            element={<Page title=\"Breadcrumbs\" />}\n          />\n        </Router.Routes>\n        <Card>\n          <Card.Title>\n            Click on these links to mimic the use of breadcrumb navigation{' '}\n          </Card.Title>\n          <Card.Section>\n            <ul style={{ display: 'inline-flex' }}>\n              <li style={{ marginRight: '15px' }}>\n                <Link href=\"/\">Home Page</Link>\n              </li>\n              <li style={{ marginRight: '15px' }}>\n                <Link href=\"/getting-started/\">Getting Started</Link>\n              </li>\n              <li style={{ marginRight: '15px' }}>\n                <Link href=\"/web/ui/breadcrumbs/\">Breadcrumbs</Link>\n              </li>\n            </ul>\n          </Card.Section>\n        </Card>\n      </React.Fragment>\n    </RouterProvider>\n  );\n};\n"))),(0,a.kt)(d,{label:"Integration",mdxType:"Tab"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Router.Routes}\n  rows={[\n    {\n      name: 'title',\n      type: 'string',\n      description: 'The title of the router component',\n    },\n  ]}\n/>\n"))))}g.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);