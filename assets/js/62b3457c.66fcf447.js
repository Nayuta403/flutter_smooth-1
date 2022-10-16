"use strict";(self.webpackChunksmooth=self.webpackChunksmooth||[]).push([[293],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),f=s(r),p=a,d=f["".concat(l,".").concat(p)]||f[p]||u[p]||c;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7922:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),a=r(6010),c=r(2802),o=r(9960),i=r(3919),l=r(5999);const s="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function f(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:c,description:o}=e;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:c},r," ",c),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",u),title:o},o))}function d(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,c.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:null==a?void 0:a.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const o=(0,c.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},7563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(7462),a=(r(7294),r(3905)),c=r(7922);const o={},i="Pitfalls",l={unversionedId:"benchmark/pitfall/index",id:"benchmark/pitfall/index",title:"Pitfalls",description:"",source:"@site/docs/benchmark/pitfall/index.md",sourceDirName:"benchmark/pitfall",slug:"/benchmark/pitfall/",permalink:"/flutter_smooth/benchmark/pitfall/",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_smooth/tree/master/docs/benchmark/pitfall/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Waste",permalink:"/flutter_smooth/benchmark/analyze/waste"},next:{title:"FPS is 30 (not 59) when 16.67+0.01ms",permalink:"/flutter_smooth/benchmark/pitfall/half-fps"}},s={},m=[],u={toc:m};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pitfalls"},"Pitfalls"),(0,a.kt)(c.Z,{mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);