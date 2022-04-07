"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4916],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>u});var a=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var s=a.createContext({}),d=function(t){var e=a.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),h=d(o),u=n,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||r;return o?a.createElement(m,i(i({ref:e},p),{},{components:o})):a.createElement(m,i({ref:e},p))}));function u(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,i=new Array(r);i[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},27122:(t,e,o)=>{o.r(e),o.d(e,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>p,default:()=>h});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=["components"],l={id:"learn-polkadot-host",title:"Polkadot Host (PH)",sidebar_label:"Polkadot Host",description:"Learn about the components of the Polkadot host.",slug:"../learn-polkadot-host"},s=void 0,d={unversionedId:"learn/learn-polkadot-host",id:"learn/learn-polkadot-host",title:"Polkadot Host (PH)",description:"Learn about the components of the Polkadot host.",source:"@site/../docs/learn/learn-polkadot-host.md",sourceDirName:"learn",slug:"/learn-polkadot-host",permalink:"/docs/learn-polkadot-host",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-polkadot-host.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649360742,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"learn-polkadot-host",title:"Polkadot Host (PH)",sidebar_label:"Polkadot Host",description:"Learn about the components of the Polkadot host.",slug:"../learn-polkadot-host"},sidebar:"docs",previous:{title:"Nominator",permalink:"/docs/learn-nominator"},next:{title:"PolkadotJS",permalink:"/docs/learn-polkadotjs"}},p=[{value:"Components of the Polkadot host",id:"components-of-the-polkadot-host",children:[],level:2},{value:"Diagram",id:"diagram",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],c={toc:p};function h(t){var e=t.components,l=(0,n.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The architecture of Polkadot can be divided into two different parts, the Polkadot ",(0,r.kt)("em",{parentName:"p"},"runtime")," and the\nPolkadot ",(0,r.kt)("em",{parentName:"p"},"host"),". The Polkadot runtime is the core state transition logic of the chain and can be\nupgraded over the course of time and without the need for a hard fork. In comparison, the Polkadot\nhost is the environment in which the runtime executes and is expected to remain stable and mostly\nstatic over the lifetime of Polkadot."),(0,r.kt)("p",null,"The Polkadot host interacts with the Polkadot runtime in limited, and well-specified ways. For this\nreason, implementation teams can build an alternative implementation of the Polkadot host while\ntreating the Polkadot runtime as a black box. For more details of the interactions between the host\nand the runtime, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-spec/"},"specification"),"."),(0,r.kt)("h2",{id:"components-of-the-polkadot-host"},"Components of the Polkadot host"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Networking components such as Libp2p that facilitates network interactions."),(0,r.kt)("li",{parentName:"ul"},"State storage and the storage trie along with the database layer."),(0,r.kt)("li",{parentName:"ul"},"Consensus engine for GRANDPA and BABE."),(0,r.kt)("li",{parentName:"ul"},"Wasm interpreter and virtual machine."),(0,r.kt)("li",{parentName:"ul"},"Low level primitives for a blockchain, such as cryptographic primitives like hash functions.")),(0,r.kt)("p",null,"A compiled Polkadot runtime, a blob of Wasm code, can be uploaded into the Polkadot host and used as\nthe logic for the execution of state transitions. Without a runtime, the Polkadot host is unable to\nmake state transitions or produce any blocks."),(0,r.kt)("h2",{id:"diagram"},"Diagram"),(0,r.kt)("p",null,"Below is a diagram that displays the Polkadot host surrounding the Polkadot runtime. Think of the\nruntime (in white) as a component that can be inserted, swapped out, or removed entirely. While the\nparts in grey are stable and can not change without an explicit hard fork."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"polkadot host",src:o(73997).Z,width:"923",height:"1018"})),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/polkadot-spec"},"Polkadot Host Protocol Specification")," - Incubator for the\nPolkadot Host spec, including tests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/gossamer"},"Gossamer: A Go implementation of the Polkadot Host")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/soramitsu/kagome"},"Kagome - C++ implementation of Polkadot Host"))))}h.isMDXComponent=!0},73997:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/updated_pre-d5849e650527f0dc796f8cad044d1f35.png"}}]);