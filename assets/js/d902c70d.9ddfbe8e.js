"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[7932],{6048:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=t(7896),o=t(31461),a=(t(2784),t(3905)),r=["components"],l={id:"carousel",category:"Content",title:"Carousel",description:"Displays information through a series of slides.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=3578%3A23477",pagination_prev:"web/ui/card",pagination_next:"web/ui/drag-and-drop"},s=void 0,d={unversionedId:"web/ui/carousel",id:"web/ui/carousel",isDocsHomePage:!1,title:"Carousel",description:"Displays information through a series of slides.",source:"@site/docs/web/ui/Carousel.md",sourceDirName:"web/ui",slug:"/web/ui/carousel",permalink:"/web/ui/carousel",tags:[],version:"current",frontMatter:{id:"carousel",category:"Content",title:"Carousel",description:"Displays information through a series of slides.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=3578%3A23477",pagination_prev:"web/ui/card",pagination_next:"web/ui/drag-and-drop"},sidebar:"docs",previous:{title:"Card",permalink:"/web/ui/card"},next:{title:"DragAndDrop",permalink:"/web/ui/drag-and-drop"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"No Loop",id:"no-loop",children:[],level:2},{value:"Autoplay",id:"autoplay",children:[{value:"Autoplay Delay",id:"autoplay-delay",children:[],level:3}],level:2},{value:"SlidesPerView",id:"slidesperview",children:[],level:2},{value:"Compact",id:"compact",children:[],level:2},{value:"Color Variants",id:"color-variants",children:[],level:2},{value:"Heading Level",id:"heading-level",children:[],level:2},{value:"Rounded",id:"rounded",children:[],level:2},{value:"Slides",id:"slides",children:[],level:2}],u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)}},p=u("Tab"),m=u("ExitLink"),g={toc:c};function h(e){var n=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(p,{label:"Overview",mdxType:"Tab"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Carousel } from '@abyss/web/ui/Carousel';\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"render(() => {\n  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;\n\n  const src = utils.useBaseUrl('img/graphics/carousel/pillsMd.png');\n\n  const slides = Array.from(Array(4).keys()).map((i) => {\n    return (\n      <Slide height=\"300px\">\n        <img src={src} style={{ height: '300px' }} alt=\"bottle of pills\" />\n        <Slide.Container>\n          <Slide.Title>Title {i + 1}</Slide.Title>\n          <Slide.Content>{content}</Slide.Content>\n          <Slide.Button href=\"https://www.google.com\">Primary</Slide.Button>\n        </Slide.Container>\n      </Slide>\n    );\n  });\n\n  return (\n    <Carousel\n      slides={slides}\n      autoplay\n      prevSlideOnClick={() => console.log('previous slide button clicked')}\n      nextSlideOnClick={() => console.log('next slide button clicked')}\n    />\n  );\n});\n")),(0,a.kt)("h2",{id:"no-loop"},"No Loop"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"noLoop")," property to set whether the slides should loop to the start. The default is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'render(() => {\n  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;\n\n  const src = utils.useBaseUrl(\'img/graphics/carousel/pillsMd.png\');\n\n  const slides = Array.from(Array(4).keys()).map((i) => {\n    return (\n      <Slide height="300px">\n        <img src={src} style={{ height: \'300px\' }} alt="bottle of pills" />\n        <Slide.Container>\n          <Slide.Title>Title {i + 1}</Slide.Title>\n          <Slide.Content>{content}</Slide.Content>\n          <Slide.Button href="https://www.google.com">Primary</Slide.Button>\n        </Slide.Container>\n      </Slide>\n    );\n  });\n\n  return <Carousel slides={slides} noLoop />;\n});\n')),(0,a.kt)("h2",{id:"autoplay"},"Autoplay"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"autoplay")," property to initialize the carousel's autoplay. The slides will cycle at a consistent pace until paused. The default is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'render(() => {\n  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;\n\n  const src = utils.useBaseUrl(\'img/graphics/carousel/pillsMd.png\');\n\n  const slides = Array.from(Array(4).keys()).map((i) => {\n    return (\n      <Slide height="300px">\n        <img src={src} style={{ height: \'300px\' }} alt="bottle of pills" />\n        <Slide.Container>\n          <Slide.Title>Title {i + 1}</Slide.Title>\n          <Slide.Content>{content}</Slide.Content>\n          <Slide.Button href="https://www.google.com">Primary</Slide.Button>\n        </Slide.Container>\n      </Slide>\n    );\n  });\n\n  return <Carousel slides={slides} autoplay />;\n});\n')),(0,a.kt)("h3",{id:"autoplay-delay"},"Autoplay Delay"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"autoplayDelay")," property to set the delay between slide transitions when ",(0,a.kt)("inlineCode",{parentName:"p"},"autoplay")," is on. The default is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"3000")," ms. For accessibility purposes the minimum value allowed is 3 seconds."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'render(() => {\n  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;\n\n  const src = utils.useBaseUrl(\'img/graphics/carousel/pillsMd.png\');\n\n  const slides = Array.from(Array(4).keys()).map((i) => {\n    return (\n      <Slide height="300px">\n        <img src={src} style={{ height: \'300px\' }} alt="bottle of pills" />\n        <Slide.Container>\n          <Slide.Title>Title {i + 1}</Slide.Title>\n          <Slide.Content>{content}</Slide.Content>\n          <Slide.Button href="https://www.google.com">Primary</Slide.Button>\n        </Slide.Container>\n      </Slide>\n    );\n  });\n\n  return <Carousel slides={slides} autoplay autoplayDelay={5000} />;\n});\n')),(0,a.kt)("h2",{id:"slidesperview"},"SlidesPerView"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"slidesPerView")," property to change how many slides are viewed at one time. The default is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'render(() => {\n  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`;\n\n  const src = utils.useBaseUrl(\'img/graphics/carousel/pillsMd.png\');\n\n  const slides = Array.from(Array(6).keys()).map((i) => {\n    return (\n      <Slide height="300px">\n        <Slide.Container>\n          <Slide.Title>Title {i + 1}</Slide.Title>\n          <Slide.Content>{content}</Slide.Content>\n          <Slide.Button href="https://www.google.com">Primary</Slide.Button>\n        </Slide.Container>\n      </Slide>\n    );\n  });\n  return <Carousel slidesPerView={3} slides={slides} />;\n});\n')),(0,a.kt)("h2",{id:"compact"},"Compact"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"compact")," property to make the carousel smaller. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'render(() => {\n  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`;\n\n  const src = utils.useBaseUrl(\'img/graphics/carousel/pillsMd.png\');\n\n  const slides = Array.from(Array(2).keys()).map((i) => {\n    return (\n      <Slide height="300px" compact>\n        <Slide.Container>\n          <Slide.Title>Title {i + 1}</Slide.Title>\n          <Slide.Content>{content}</Slide.Content>\n          <Slide.Button href="https://www.google.com">Primary</Slide.Button>\n        </Slide.Container>\n      </Slide>\n    );\n  });\n  return <Carousel compact slides={slides} />;\n});\n')),(0,a.kt)("h2",{id:"color-variants"},"Color Variants"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"variant")," property to set the color variant of the carousel. The options are ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"white"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"primary"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"secondary"),". The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"render(() => {\n  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.`;\n  const src = utils.useBaseUrl('img/graphics/carousel/pillsMd.png');\n  const variants = ['default', 'white', 'primary', 'secondary'];\n  const slides = variants.map((variant) => {\n    return Array.from(Array(2).keys()).map((i) => {\n      return (\n        <Slide height=\"300px\" variant={variant} compact>\n          <Slide.Container>\n            <Slide.Title>Title {i + 1}</Slide.Title>\n            <Slide.Content>{content}</Slide.Content>\n            <Slide.Button href=\"https://www.google.com\">Primary</Slide.Button>\n          </Slide.Container>\n        </Slide>\n      );\n    });\n  });\n  return (\n    <Grid columns={2}>\n      <Grid.Col>\n        <Layout.Stack space={20}>\n          <Carousel compact variant={'default'} slides={slides[0]} />\n          <Carousel compact variant={'white'} slides={slides[1]} />\n        </Layout.Stack>\n      </Grid.Col>\n      <Grid.Col>\n        <Layout.Stack space={20}>\n          <Carousel compact variant={'primary'} slides={slides[2]} />\n          <Carousel compact variant={'secondary'} slides={slides[3]} />\n        </Layout.Stack>\n      </Grid.Col>\n    </Grid>\n  );\n});\n")),(0,a.kt)("h2",{id:"heading-level"},"Heading Level"),(0,a.kt)("p",null,"You can set the heading level of the title by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"headingLevel")," prop. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"h3"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'render(() => {\n  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;\n\n  const src = utils.useBaseUrl(\'img/graphics/carousel/pillsMd.png\');\n\n  const slides = Array.from(Array(4).keys()).map((i) => {\n    return (\n      <Slide height="300px">\n        <img src={src} style={{ height: \'300px\' }} alt="bottle of pills" />\n        <Slide.Container>\n          <Slide.Title headingLevel="h4">Title {i + 1}</Slide.Title>\n          <Slide.Content>{content}</Slide.Content>\n          <Slide.Button href="https://www.google.com">Primary</Slide.Button>\n        </Slide.Container>\n      </Slide>\n    );\n  });\n\n  return <Carousel slides={slides} autoplay />;\n});\n')),(0,a.kt)("h2",{id:"rounded"},"Rounded"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rounded")," prop to change the style of navigation buttons."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'render(() => {\n  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;\n\n  const src = utils.useBaseUrl(\'img/graphics/carousel/pillsMd.png\');\n\n  const slides = Array.from(Array(4).keys()).map((i) => {\n    return (\n      <Slide height="300px">\n        <img src={src} style={{ height: \'300px\' }} alt="bottle of pills" />\n        <Slide.Container>\n          <Slide.Title>Title {i + 1}</Slide.Title>\n          <Slide.Content>{content}</Slide.Content>\n          <Slide.Button href="https://www.google.com">Primary</Slide.Button>\n        </Slide.Container>\n      </Slide>\n    );\n  });\n\n  return <Carousel slides={slides} rounded />;\n});\n')),(0,a.kt)("h2",{id:"slides"},"Slides"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"slides")," prop to set custom slides for the carousel."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const data = [\n  {\n    title: 'Go Paperless!',\n    content:\n      'Get most commercial claim letters online and stop receiving paper....',\n    link: 'Watch',\n    to: 'https://www.google.com',\n    icon: 'clipboard',\n  },\n  {\n    title: 'Provider Relief Funding',\n    content:\n      'As part of the CARES Act, UnitedHealth Group is helping HHS distribute $3 billion in immediate relief funding...',\n    link: 'Get More Information',\n    to: 'https://www.google.com',\n    icon: 'cost',\n  },\n];\n\nconst SlideWrapper = styled(Slide, {\n  display: 'flex',\n  flexDirection: 'row',\n  width: '100%',\n  height: 225,\n  overflow: 'hidden',\n  borderWidth: 1,\n  borderStyle: 'solid',\n  borderColor: '$gray4',\n});\n\nconst ImageContent = styled('div', {\n  flex: '0 0 35%',\n  maxWidth: '35%',\n  display: 'block',\n  boxSizing: 'border-box',\n  position: 'relative',\n  backgroundColor: 'white',\n});\n\nconst ImageWrapper = styled('div', {\n  position: 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n});\n\nconst ContentWrapper = styled('div', {\n  flex: '1 1 0%',\n  display: 'block',\n  boxSizing: 'border-box',\n  padding: 25,\n  borderLeftWidth: 1,\n  borderStyle: 'solid',\n  borderColor: '$gray4',\n  backgroundColor: '$tint2',\n  alignContent: 'flex-start',\n});\n\nconst Title = styled('h3', {\n  paddingBottom: 10,\n  fontSize: 26,\n  lineHeight: '26px',\n  color: '$primary1',\n  fontWeight: 'bold',\n});\n\nconst Content = styled('div', {\n  paddingBottom: 10,\n  paddingRight: 30,\n  fontSize: 15,\n  lineHeight: 1.5,\n  maxHeight: 100,\n  overflow: 'hidden',\n});\n\nconst slides = data.map((item, index) => (\n  <SlideWrapper key={index}>\n    <ImageContent>\n      <ImageWrapper>\n        <IconBrand size={150} icon={item.icon} />\n      </ImageWrapper>\n    </ImageContent>\n    <ContentWrapper>\n      <Title>{item.title}</Title>\n      <Content>{item.content}</Content>\n      <Link href={item.to}>{item.link}</Link>\n    </ContentWrapper>\n  </SlideWrapper>\n));\n\nrender(() => {\n  return <Carousel slides={slides} />;\n});\n"))),(0,a.kt)(p,{label:"Integration",mdxType:"Tab"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Carousel}\n  rows={[\n    {\n      name: 'slides',\n      type: 'array[node]',\n      description: 'Each individual slide node stored in an array',\n    },\n    {\n      name: 'slidesPerView',\n      type: 'number',\n      description: 'Number of slides',\n    },\n    {\n      name: 'autoplay',\n      type: 'boolean',\n      description: 'Indicate whether autoplay is active',\n    },\n    {\n      name: 'loop',\n      type: 'boolean',\n      description: 'Indicate whether the slides should be looped',\n    },\n    {\n      name: 'compact',\n      type: 'boolean',\n      description: 'Shrinks the Carousel to 400px width',\n    },\n    {\n      name: 'variant',\n      type: \"'default' | 'white' | 'primary' | 'secondary'\",\n      description: 'Applies a color theme to the carousel',\n    },\n    {\n      name: 'autoplayDelay',\n      type: 'number',\n      description: 'Delay between slide transitions when autoplay is active',\n    },\n    {\n      name: 'prevSlideOnClick',\n      type: 'function',\n      description: 'Callback fired when previous slide nav button is clicked',\n    },\n    {\n      name: 'nextSlideOnClick',\n      type: 'function',\n      description: 'Callback fired when next slide nav button is clicked',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Slide}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The children node of the SwiperSlide.container',\n    },\n    {\n      name: 'compact',\n      type: 'boolean',\n      description: 'Shrinks the container to 400px width',\n    },\n    {\n      name: 'height',\n      type: 'number | string',\n      description: 'Controls the height of the slide',\n    },\n    {\n      name: 'variant',\n      type: \"'default' | 'white' | 'primary' | 'secondary'\",\n      description: 'Applies a color theme to the carousel',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Slide.Title}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The children node of the SwiperSlide.Title',\n    },\n    {\n      name: 'headingLevel',\n      type: \"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'\",\n      description: 'Set the heading level of the title',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Slide.Content}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The children node of the SwiperSlide.Content',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Slide.Button}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The children node of the SwiperSlide.Button',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Slide.Container}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The children node of the SwiperSlide.ContentWrapper',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Carousel}\n  rows={[\n    {\n      name: 'carousel-root',\n      description: 'Carousel root element',\n    },\n    {\n      name: 'carousel-swiper-container',\n      description: 'Swiper container',\n    },\n    {\n      name: 'carousel-slide-container',\n      description: 'Carousel slide container',\n    },\n    {\n      name: 'carousel-nav-container-left',\n      description: 'Left nav container',\n    },\n    {\n      name: 'carousel-nav-icon-left',\n      description: 'Left nav icon',\n    },\n    {\n      name: 'carousel-nav-container-right',\n      description: 'Right nav container',\n    },\n    {\n      name: 'carousel-nav-icon-right',\n      description: 'Right nav icon',\n    },\n    {\n      name: 'carousel-controls',\n      description: 'Carousel controls',\n    },\n    {\n      name: 'carousel-pagination-wrapper',\n      description: 'Pagination buttons wrapper',\n    },\n    {\n      name: 'carousel-pagination-container',\n      description: 'Pagination button container',\n    },\n    {\n      name: 'carousel-pagination',\n      description: 'Pagination buttons',\n    },\n    {\n      name: 'carousel-play-pause-button',\n      description: 'Play and pause button',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Slide}\n  rows={[\n    {\n      name: 'slide-container',\n      description: 'Slide container element',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Slide.Title}\n  rows={[\n    {\n      name: 'slide-title',\n      description: 'Slide title element',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Slide.Content}\n  rows={[\n    {\n      name: 'slide-content',\n      description: 'Slide content element',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Slide.Button}\n  rows={[\n    {\n      name: 'slide-button',\n      description: 'Slide button element',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Slide.Container}\n  rows={[\n    {\n      name: 'slide-content-wrapper',\n      description: 'Wraps the title, content, and button elements',\n    },\n  ]}\n/>\n"))),(0,a.kt)(p,{label:"Accessibility",mdxType:"Tab"},(0,a.kt)("p",null,'A carousel presents a set of items, referred to as slides, by sequentially displaying a subset of one or more slides. Typically, one slide is displayed at a time, and users can activate a next or previous slide control that hides the current slide and "rotates" the next or previous slide into view. In some implementations, rotation automatically starts when the page loads, and it may also automatically stop once all the slides have been displayed. While a slide may contain any type of content, image carousels where each slide contains nothing more than a single image are common.'),(0,a.kt)("p",null,"Adheres to the ",(0,a.kt)(m,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#carousel",mdxType:"ExitLink"},"Carousel WAI-ARIA design pattern"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'render(() => {\n  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;\n\n  const src = utils.useBaseUrl(\'img/graphics/carousel/pillsMd.png\');\n\n  const slides = Array.from(Array(4).keys()).map((i) => {\n    return (\n      <Slide height="300px">\n        <img src={src} style={{ height: \'300px\' }} alt="bottle of pills" />\n        <Slide.Container>\n          <Slide.Title>Title {i + 1}</Slide.Title>\n          <Slide.Content>{content}</Slide.Content>\n          <Slide.Button href="https://www.google.com">Primary</Slide.Button>\n        </Slide.Container>\n      </Slide>\n    );\n  });\n\n  return <Carousel slides={slides} autoplay />;\n});\n')),(0,a.kt)("h1",{id:"autoplay-delay-1"},"Autoplay Delay"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"autoplayDelay")," property to set the delay between slide transitions when ",(0,a.kt)("inlineCode",{parentName:"p"},"autoplay")," is on. The default is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"3000")," ms. For accessibility purposes the minimum value allowed is 3 seconds."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'render(() => {\n  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;\n\n  const src = utils.useBaseUrl(\'img/graphics/carousel/pillsMd.png\');\n\n  const slides = Array.from(Array(4).keys()).map((i) => {\n    return (\n      <Slide height="300px">\n        <img src={src} style={{ height: \'300px\' }} alt="bottle of pills" />\n        <Slide.Container>\n          <Slide.Title>Title {i + 1}</Slide.Title>\n          <Slide.Content>{content}</Slide.Content>\n          <Slide.Button href="https://www.google.com">Primary</Slide.Button>\n        </Slide.Container>\n      </Slide>\n    );\n  });\n\n  return <Carousel slides={slides} autoplay autoplayDelay={5000} />;\n});\n')),(0,a.kt)("h1",{id:"autoplay-pausing"},"Autoplay Pausing"),(0,a.kt)("p",null,"All motion must pause as soon as a user hovers over the carousel with their pointer OR any part of the carousel receives focus via keyboard/tab or pointer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'render(() => {\n  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;\n\n  const src = utils.useBaseUrl(\'img/graphics/carousel/pillsMd.png\');\n\n  const slides = Array.from(Array(4).keys()).map((i) => {\n    return (\n      <Slide height="300px">\n        <img src={src} style={{ height: \'300px\' }} alt="bottle of pills" />\n        <Slide.Container>\n          <Slide.Title>Title {i + 1}</Slide.Title>\n          <Slide.Content>{content}</Slide.Content>\n          <Slide.Button href="https://www.google.com">Primary</Slide.Button>\n        </Slide.Container>\n      </Slide>\n    );\n  });\n\n  return <Carousel slides={slides} autoplay />;\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  rows={[\n    {\n      name: 'Tab and Shift + Tab',\n      description:\n        'Move focus through the interactive elements of the carousel as specified by the page tab sequence -- scripting for Tab is not necessary',\n    },\n    {\n      name: 'Button',\n      description:\n        'Button elements implement the keyboard interaction defined in the button pattern. Note: Activating the rotation control, next slide, and previous slide do not move focus, so users may easily repetitively activate them as many times as desired',\n    },\n    {\n      name: 'Rotation Control',\n      description:\n        'If present, the rotation control is the first element in the Tab sequence inside the carousel. It is essential that it precede the rotating content so it can be easily located',\n    },\n    {\n      name: 'Tab elements',\n      description:\n        'If tab elements are used for slide picker controls, they implement the keyboard interaction defined in the Tabs Pattern',\n    },\n  ]}\n/>\n"))))}h.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return t?i.createElement(g,r(r({ref:n},c),{},{components:t})):i.createElement(g,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);