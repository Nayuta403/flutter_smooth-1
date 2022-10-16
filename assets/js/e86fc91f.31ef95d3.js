"use strict";(self.webpackChunksmooth=self.webpackChunksmooth||[]).push([[330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Result from tracing",s={unversionedId:"benchmark/analyze/fps/tracing",id:"benchmark/analyze/fps/tracing",title:"Result from tracing",description:"Methods",source:"@site/docs/benchmark/analyze/fps/tracing.md",sourceDirName:"benchmark/analyze/fps",slug:"/benchmark/analyze/fps/tracing",permalink:"/flutter_smooth/benchmark/analyze/fps/tracing",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_smooth/tree/master/docs/benchmark/analyze/fps/tracing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Result from video",permalink:"/flutter_smooth/benchmark/analyze/fps/video"},next:{title:"Devtool",permalink:"/flutter_smooth/benchmark/analyze/fps/devtool"}},l={},c=[{value:"Methods",id:"methods",level:2},{value:"Results",id:"results",level:2},{value:"Example: How does a jank look like",id:"example-how-does-a-jank-look-like",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"result-from-tracing"},"Result from tracing"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("p",null,"Count the number of ",(0,a.kt)("inlineCode",{parentName:"p"},"Jank(ZeroRasterEndInVsyncInterval)")," synthesized events (generated by my  script)."),(0,a.kt)("p",null,"Alternatively, manually look at each and every vsync interval. If there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"GPURasterizer::Draw")," ending in that interval, we will observe one jank."),(0,a.kt)("h2",{id:"results"},"Results"),(0,a.kt)("p",null,'Well, for this tracing data, zero jank happens (no "Jank" in the following screenshot). So it is exactly ',(0,a.kt)("strong",{parentName:"p"},"60FPS"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1724).Z,width:"1837",height:"860"})),(0,a.kt)("p",null,"However, it is definitely not always the case. For example, we have seen in the ",(0,a.kt)("a",{parentName:"p",href:"/flutter_smooth/benchmark/analyze/fps/video"},"video")," section that it is only ~58FPS. As discussed there, this can be caused by bugs of this package, and/or other factors unrelated to build/layout slowness. Moreover, I suspect the good data here is because, in order to keep the tracing file small in git repo, I choose to record the first scroll; however, in that section, it is (for example) 10th scroll. Therefore, I guess GC pressure will be much larger there. Anyway, these two are only samples - if you see a problem in ",(0,a.kt)("em",{parentName:"p"},"real world"),", don't hesitate to submit an issue and discuss!"),(0,a.kt)("h3",{id:"example-how-does-a-jank-look-like"},"Example: How does a jank look like"),(0,a.kt)("p",null,"Luckily, there is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fzyzcjy/flutter_smooth/issues/109"},"a bug")," that I have not fixed, and it affects the time range 2800ms-3400ms, which is indeed the time before the main scrolling happens, causing a jank (and a lot of ",(0,a.kt)("inlineCode",{parentName:"p"},"LargeLatency_PreemptRender")," warning). So we can have a look how a jank looks like here."),(0,a.kt)("p",null,"Look at the figure below, we see a ",(0,a.kt)("inlineCode",{parentName:"p"},"Jank(ZeroRasterEndInVsyncInterval)")," in the 2938-2955ms frame. Clearly, during these 16.67ms, there is no ending of ",(0,a.kt)("inlineCode",{parentName:"p"},"GPURasterizer::Draw"),". In other words, no content is provided to the screen, so we will have a jank."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(80).Z,width:"1838",height:"1032"})),(0,a.kt)("p",null,"(May discuss ",(0,a.kt)("inlineCode",{parentName:"p"},"LargeLatency_PreemptRender")," which is a good hint of implementation and usage bugs later)"))}u.isMDXComponent=!0},1724:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/analyze_fps_tracing_interest_region-77ba20b764382692ab85f5fb393f2066.png"},80:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/analyze_fps_tracing_sample_jank-fa07036f289ca33140cc400e62260301.png"}}]);