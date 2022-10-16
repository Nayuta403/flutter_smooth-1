"use strict";(self.webpackChunksmooth=self.webpackChunksmooth||[]).push([[462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,f=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},s="Result from video",i={unversionedId:"benchmark/analyze/fps/video",id:"benchmark/analyze/fps/video",title:"Result from video",description:"Methods",source:"@site/docs/benchmark/analyze/fps/video.md",sourceDirName:"benchmark/analyze/fps",slug:"/benchmark/analyze/fps/video",permalink:"/flutter_smooth/benchmark/analyze/fps/video",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_smooth/tree/master/docs/benchmark/analyze/fps/video.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FPS",permalink:"/flutter_smooth/benchmark/analyze/fps/"},next:{title:"Result from tracing",permalink:"/flutter_smooth/benchmark/analyze/fps/tracing"}},l={},c=[{value:"Methods",id:"methods",level:2},{value:"Results",id:"results",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"result-from-video"},"Result from video"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("p",null,"Look at each frame of the video. If a frame has identical content as the previous frame, we consider it as a jank."),(0,a.kt)("p",null,'In addition, even though the content is unchanged, if it is because the user really have zero pointer speed (e.g. when the finger reaches the top/bottom of screen), this is not a jank. To identify such cases from the classical janks, either by common sense, or use the "debug header" trick discussed in "gather-data" section to confirm.'),(0,a.kt)("p",null,"There seems to be one jank that also happens in classical Flutter, even when content is super fast to compute, so we need to exclude (or at least consider) this effect from our computation. This is the jank that occurs when pointer up. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/issues/113494"},"https://github.com/flutter/flutter/issues/113494")," for details."),(0,a.kt)("h2",{id:"results"},"Results"),(0,a.kt)("p",null,"Looking at the sample captured video 0023.jpg - 0181.jpg, we see some frames having identical content as previous:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Some are false positives since user really has zero speed: 0041.jpeg, 0055.jpeg, 0056.jpeg, 0070.jpeg, 0071.jpeg, 0087.jpeg"),(0,a.kt)("li",{parentName:"ul"},"Some look like real jank, except one for the pointer-up-jank also happened in classical Flutter: 0091.jpeg, 0093.jpeg, 0097.jpeg, 0100.jpeg, 0102.jpeg.")),(0,a.kt)("p",null,"Therefore, the FPS is ",(0,a.kt)("strong",{parentName:"p"},"58.5")," (excluding the classical-Flutter problem) or ",(0,a.kt)("strong",{parentName:"p"},"58.1")," (including that problem)."),(0,a.kt)("p",null,"As can be seen in the raw video, it seems that human eyes almost do not percept these. On the other hand, this package is still quite buggy (though I have fixed a lot), and I have seen many bugs causing wrong timing and thus cause jank. So please come back later to see if the package is bug-fixed. Last but not least, some janks are not in the scope that this package aim to solve, for example, when (I suspect) the OS is busy with something else, or when a slow GC happens (I do see weird young-generation GC for 20ms sometimes but has not investigated it)."),(0,a.kt)("p",null,"Jank sample frame (the highlighted one):"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2874).Z,width:"1619",height:"284"})))}u.isMDXComponent=!0},2874:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/video_jank_sample-3271f8c7e72b4bc4cae8d4c1680b8343.png"}}]);