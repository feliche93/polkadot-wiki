"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1957],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=c(a),d=s,u=m["".concat(l,".").concat(d)]||m[d]||h[d]||o;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5474:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=a(7462),s=a(3366),o=(a(7294),a(3905)),i=["components"],r={id:"learn-xcm",title:"Cross-Consensus Message Format (XCM)",sidebar_label:"Cross-Consensus Message Format (XCM)",description:"Learn about the messaging format at the forefront of interoperability.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm"},l=void 0,c={unversionedId:"learn/learn-xcm",id:"learn/learn-xcm",title:"Cross-Consensus Message Format (XCM)",description:"Learn about the messaging format at the forefront of interoperability.",source:"@site/../docs/learn/learn-xcm.md",sourceDirName:"learn",slug:"/learn-xcm",permalink:"/docs/learn-xcm",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-xcm.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1663541349,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{id:"learn-xcm",title:"Cross-Consensus Message Format (XCM)",sidebar_label:"Cross-Consensus Message Format (XCM)",description:"Learn about the messaging format at the forefront of interoperability.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm"},sidebar:"docs",previous:{title:"Availability and Validity",permalink:"/docs/learn-availability"},next:{title:"NPoS Election Algorithms",permalink:"/docs/learn-phragmen"}},p={},h=[{value:"A Format, Not a Protocol",id:"a-format-not-a-protocol",level:2},{value:"Example Use-Cases",id:"example-use-cases",level:3},{value:"Asset Teleportation",id:"asset-teleportation",level:3},{value:"Reserve Asset Transfer",id:"reserve-asset-transfer",level:3},{value:"XCM Tech Stack",id:"xcm-tech-stack",level:3},{value:"XCVM (Cross-Consensus Virtual Machine)",id:"xcvm-cross-consensus-virtual-machine",level:2},{value:"Cross-Consensus Protocols (XCMP, VMP, HRMP)",id:"cross-consensus-protocols-xcmp-vmp-hrmp",level:2},{value:"XCMP (Cross-Chain Message Passing)",id:"xcmp-cross-chain-message-passing",level:3},{value:"VMP (Vertical Message Passing)",id:"vmp-vertical-message-passing",level:3},{value:"HRMP (XCMP-Lite)",id:"hrmp-xcmp-lite",level:3},{value:"XCMP Design",id:"xcmp-design",level:4},{value:"Cross-Consensus Message Format (XCM)",id:"cross-consensus-message-format-xcm",level:4},{value:"The Anatomy of an XCMP Interaction",id:"the-anatomy-of-an-xcmp-interaction",level:4},{value:"Resources",id:"resources",level:2}],m={toc:h};function d(e){var t=e.components,r=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cross-Consensus Message Format(XCM) aims to be a language to communicate ideas between consensus\nsystems. One of Polkadot's promises is that of interoperability, and XCM is the vehicle through\nwhich it will deliver this promise. Simply, it is a standard that allows protocol developers to\ndefine the data and origins which their chains can send and recieve from. Out of the box, it comes\nwith a VM that allows for customization of execution as well as the following properties:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Asynchronous"),": XCM messages in no way assume that the sender will be blocking on its\ncompletion."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Absolute"),": XCM messages are guaranteed to be delivered and interpreted accurately, in order\nand in a timely fashion."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Asymmetric"),": XCM messages out of the box do not have results that let the sender know that the\nmessage was received. Any results must be separately communicated to the sender with an\nadditional message."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Agnostic"),": XCM makes no assumptions about the nature of the Consensus Systems between which\nthe messages are being passed.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"XCM is a work-in-progress. XCM v2 is deployed on Polkadot and v3 is currently in development. Learn\nmore about XCM v3 and its new features in the ",(0,o.kt)("a",{parentName:"p",href:"#resources"},"resources")," section.")),(0,o.kt)("h2",{id:"a-format-not-a-protocol"},"A Format, Not a Protocol"),(0,o.kt)("p",null,"What started as an approach to ",(0,o.kt)("em",{parentName:"p"},"cross-chain communication"),", has evolved into a format for\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/cross-chain-communication"},(0,o.kt)("strong",{parentName:"a"},"Cross-Consensus Communication"))," that is not\nonly conducted between chains, but also between smart contracts, pallets, bridges, and even sharded\nenclaves like ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-spree"},"SPREE"),"."),(0,o.kt)("p",null,"XCM cannot actually send messages between systems. It is a format for how message transfer should be\nperformed, similar to how RESTful services use REST as an architectural style of development."),(0,o.kt)("p",null,'Similar to UDP, out of the box XCM is a "fire and forget" model, unless there is a seperate XCM\nmessage designed to be a response message which can be sent from the recipient to the sender. Any\nkind of error handling should also be done on the recipient side.'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"XCM is not designed in a way where every system supporting the format is expected to be able to\ninterpret any possible XCM message. Practically speaking, one can imagine that some messages will\nnot have reasonable interpretations under some systems or will be intentionally unsupported.")),(0,o.kt)("h3",{id:"example-use-cases"},"Example Use-Cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request for specific operations to occur on the recipient system such as governance voting."),(0,o.kt)("li",{parentName:"ul"},"Enables single use-case chains e.g. ",(0,o.kt)("a",{parentName:"li",href:"/docs/learn-statemint"},"Statemint/e")," as asset parachains"),(0,o.kt)("li",{parentName:"ul"},"Optionally include payment of fees on a target network for requested operation."),(0,o.kt)("li",{parentName:"ul"},"Provide methods for various asset transfer models:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Remote Transfers"),": control an account on a remote chain, allowing the local chain to have an\naddress on the remote chain for receiving funds and to eventually transfer those funds it\ncontrols into other accounts on that remote chain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Asset Teleportation"),": movement of an asset happens by destroying it on one side and creating\na clone on the other side."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reserve Asset Transfer"),": there may be two chains that want to nominate a third chain, where\none includes a native asset that can be used as a reserve for that asset. Then, the derivative\nform of the asset on each of those chains would be fully backed, allowing the derivative asset\nto be exchanged for the underlying asset on the reserve chain backing it.")))),(0,o.kt)("p",null,"Let's review two of these example asset transfer use cases: ",(0,o.kt)("strong",{parentName:"p"},"Asset Teleportation")," and ",(0,o.kt)("strong",{parentName:"p"},"Reserve\nAsset Transfer"),"."),(0,o.kt)("h3",{id:"asset-teleportation"},"Asset Teleportation"),(0,o.kt)("p",null,"An asset teleport operation from a single source to a single destination."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Diagram of the usage flow while teleporting assets",src:a(871).Z,width:"659",height:"304"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#initiateteleport"},"InitiateTeleport"))),(0,o.kt)("p",null,"The source gathers the assets to be teleported from the sending account and takes them out of the\ncirculating supply, taking note of the total amount of assets that was taken out."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#receiveteleportedasset"},"ReceiveTeleportedAsset"))),(0,o.kt)("p",null,"The source then creates an XCM instruction called ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiveTeleportedAssets")," and puts the amount of\nassets taken out of circulation and the receiving account as parameters to this instruction. It then\nsends this instruction over to the destination, where it gets processed and new assets gets put back\ninto circulating supply accordingly."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#depositasset"},"DepositAsset"))),(0,o.kt)("p",null,"The destination then deposits the assets to the receiving account of the asset."),(0,o.kt)("h3",{id:"reserve-asset-transfer"},"Reserve Asset Transfer"),(0,o.kt)("p",null,"When consensus systems do not have a established layer of trust over which they can transfer assets,\nthey can opt for a trusted 3rd entity to store the assets."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(826).Z,width:"656",height:"482"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#initiatereservewithdraw"},"InitiateReserveWithdraw"))),(0,o.kt)("p",null,"The source gathers the derivative assets to be transferred from the sending account and burns them,\ntaking note of the amount of derivatives that were burned."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#withdrawasset"},"WithdrawAsset"))),(0,o.kt)("p",null,"The source sends a WithdrawAsset instruction to the reserve, instructing the reserve to withdraw\nassets equivalent to the amount of derivatives burned from the source's sovereign account."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#depositreserveasset"},"DepositReserveAsset"))),(0,o.kt)("p",null,"The reserve deposits the assets withdrawn from the previous step to the destination's sovereign\naccount, taking note of the amount of assets deposited."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#reserveassetdeposited"},"ReserveAssetDeposited"))),(0,o.kt)("p",null,"The reserve creates a ReserveAssetDeposited instruction with the amount of assets deposited to the\ndestination's sovereign account, and sends this instruction onwards to the destination. The\ndestination receives the instruction and processes it, minting the derivative assets as a result of\nthe process."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#depositasset"},"DepositAsset"))),(0,o.kt)("p",null,"The destination deposits the derivative assets minted to the receiving account."),(0,o.kt)("h3",{id:"xcm-tech-stack"},"XCM Tech Stack"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"xcm tech stack",src:a(7887).Z,width:"1204",height:"1316"})),(0,o.kt)("p",null,"XCM can be used to express the meaning of the messages over each of these three communication\nchannels."),(0,o.kt)("h2",{id:"xcvm-cross-consensus-virtual-machine"},"XCVM (Cross-Consensus Virtual Machine)"),(0,o.kt)("p",null,"At the core of XCM lies the Cross-Consensus Virtual Machine (XCVM). A \u201cmessage\u201d in XCM is an XCVM\nprogram. The XCVM is a state machine, state is kept track in Registers."),(0,o.kt)("p",null,"It\u2019s an ultra-high level non-Turing-complete computer whose instructions are designed to be roughly\nat the same level as transactions. Messages are one or more XCM instructions. The program executes\nuntil it either runs to the end or hits an error, at which point it finishes up and halts. An XCM\nexecutor following the XCVM specification is provided by Parity, and it can be extended or\ncustomized, or even ignored altogether and users can create their own construct that follows the\nXCVM spec."),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"message")," in XCM is simply just a programme that runs on the ",(0,o.kt)("inlineCode",{parentName:"p"},"XCVM"),": in other words, one or more\nXCM instructions. To learn more about the XCVM and the XCM Format, see the latest\n",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392"},"blog post"),"\nby Dr. Gavin Wood."),(0,o.kt)("p",null,"XCM instructions might change a register, they might change the state of the consensus system or\nboth."),(0,o.kt)("p",null,"One example of such an instruction would be ",(0,o.kt)("inlineCode",{parentName:"p"},"TransferAsset")," which is used to transfer an asset to\nsome other address on the remote system. It needs to be told which asset(s) to transfer and to\nwhom/where the asset is to be transferred."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"enum Instruction {\n    TransferAsset {\n        assets: MultiAssets,\n        beneficiary: MultiLocation,\n    }\n    /* snip */\n}\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"MultiAsset")," is a general identifier for an asset. It may represent both fungible and non-fungible\nassets, and in the case of a fungible asset, it represents some defined amount of the asset."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"MultiLocation"),' is a relative identifier, meaning that it can only be used to define the relative\npath between two locations, and cannot generally be used to refer to a location universally. Much\nlike a relative file-system path will first begin with any "../" components used to ascend into to\nthe containing directory, followed by the directory names into which to descend, a ',(0,o.kt)("inlineCode",{parentName:"p"},"MultiLocation"),"\nhas two main parts to it: the number of times to ascend into the outer consensus from the local and\nthen an interior location within that outer consensus."),(0,o.kt)("h2",{id:"cross-consensus-protocols-xcmp-vmp-hrmp"},"Cross-Consensus Protocols (XCMP, VMP, HRMP)"),(0,o.kt)("p",null,"With the XCM format established, common patterns for protocols of these messages are needed.\nPolkadot implements two message passing protocols for acting on XCM messages between its constituent\nparachains."),(0,o.kt)("h3",{id:"xcmp-cross-chain-message-passing"},"XCMP (Cross-Chain Message Passing)"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"XCMP is currently under development and most cross-chain message passing uses HRMP channels for the\ntime being.")),(0,o.kt)("p",null,"XCM is related to XCMP in the same way that REST is related to RESTful."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Cross-Chain Message Passing")," secure message passing between parachains. There are two variants:\n",(0,o.kt)("em",{parentName:"p"},"Direct")," and ",(0,o.kt)("em",{parentName:"p"},"Relayed"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With ",(0,o.kt)("em",{parentName:"li"},"Direct"),", message data goes direct between parachains and is O(1) on the side of the\nRelay-chain and is very scalable."),(0,o.kt)("li",{parentName:"ul"},"With ",(0,o.kt)("em",{parentName:"li"},"Relayed"),", message data is passed via the Relay-chain, and piggy-backs over VMP. It is much\nless scalable, and parathreads in particular may not receive messages due to excessive queue\ngrowth.")),(0,o.kt)("p",null,"Cross-chain transactions are resolved using a simple queuing mechanism based around a Merkle tree to\nensure fidelity. It is the task of the Relay Chain validators to move transactions on the output\nqueue of one parachain into the input queue of the destination parachain. However, only the\nassociated metadata is stored as a hash in the Relay Chain storage."),(0,o.kt)("p",null,"The input and output queue are sometimes referred to in the Polkadot codebase and associated\ndocumentation as ",(0,o.kt)("inlineCode",{parentName:"p"},"ingress")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"egress")," messages, respectively."),(0,o.kt)("h3",{id:"vmp-vertical-message-passing"},"VMP (Vertical Message Passing)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Vertical Message Passing")," message passing between the Relay-chain itself and a parachain. Message\ndata in both cases exists on the Relay-chain. This includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"ump-upward-message-passing"},"UMP (Upward Message Passing)"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Upward Message Passing")," message passing from a parachain to the Relay-chain.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"dmp-downward-message-passing"},"DMP (Downward Message Passing)"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Downward Message Passing")," message passing from the Relay-chain to a parachain."))),(0,o.kt)("h3",{id:"hrmp-xcmp-lite"},"HRMP (XCMP-Lite)"),(0,o.kt)("p",null,"While XCMP is still being implemented, a stop-gap protocol (see definition below) known as\n",(0,o.kt)("strong",{parentName:"p"},"Horizontal Relay-routed Message Passing (HRMP)")," exists in its place. HRMP has the same interface\nand functionality as XCMP but is much more demanding on resources since it stores all messages in\nthe Relay Chain storage. When XCMP has been implemented, HRMP is planned to be deprecated and phased\nout in favor of it."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"A stop-gap protocol is a temporary substitute for the functionality that is not fully complete.\nWhile XCMP proper is still in development, HRMP is a working replacement.")),(0,o.kt)("p",null,"A tutorial on how to open an HRMP channel on a parachain can be found\n",(0,o.kt)("a",{parentName:"p",href:"/docs/build-hrmp-channels"},"here"),"."),(0,o.kt)("h4",{id:"xcmp-design"},"XCMP Design"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cross-chain messages will ",(0,o.kt)("em",{parentName:"li"},"not")," be delivered to the Relay Chain."),(0,o.kt)("li",{parentName:"ul"},"Cross-chain messages will be constrained to a maximum size specified in bytes."),(0,o.kt)("li",{parentName:"ul"},"Parachains are allowed to block messages from other parachains, in which case the dispatching\nparachain would be aware of this block."),(0,o.kt)("li",{parentName:"ul"},"Collator nodes are responsible for routing messages between chains."),(0,o.kt)("li",{parentName:"ul"},"Collators produce a list of ",(0,o.kt)("inlineCode",{parentName:"li"},"egress")," messages and will receive the ",(0,o.kt)("inlineCode",{parentName:"li"},"ingress")," messages from other\nparachains."),(0,o.kt)("li",{parentName:"ul"},"On each block, parachains are expected to route messages from some subset of all other parachains."),(0,o.kt)("li",{parentName:"ul"},"When a collator produces a new block to hand off to a validator, it will collect the latest\ningress queue information and process it."),(0,o.kt)("li",{parentName:"ul"},"Validators will check the proof that the new candidate for the next parachain block includes the\nprocessing of the expected ingress messages to that parachain.")),(0,o.kt)("p",null,"XCMP queues must be initiated by first opening a channel between two parachains. The channel is\nidentified by both the sender and recipient parachains, meaning that it's a one-way channel. A pair\nof parachains can have at most establish two channels between them, one for sending messages to the\nother chain and another for receiving messages. The channel will require a deposit in DOT to be\nopened, which will get returned when the channel is closed."),(0,o.kt)("h4",{id:"cross-consensus-message-format-xcm"},"Cross-Consensus Message Format (XCM)"),(0,o.kt)("p",null,"For an updated and complete description of the cross-consensus message format please see the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},"xcm-format repository on GitHub"),"."),(0,o.kt)("h4",{id:"the-anatomy-of-an-xcmp-interaction"},"The Anatomy of an XCMP Interaction"),(0,o.kt)("p",null,"A smart contract that exists on parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," will route a message to parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," in which another\nsmart contract is called that makes a transfer of some assets within that chain."),(0,o.kt)("p",null,"Charlie executes the smart contract on parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),", which initiates a new cross-chain message for\nthe destination of a smart contract on parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),"."),(0,o.kt)("p",null,"The collator node of parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," will place this new cross-chain message into its outbound\nmessages queue, along with a ",(0,o.kt)("inlineCode",{parentName:"p"},"destination")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp"),"."),(0,o.kt)("p",null,"The collator node of parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," routinely pings all other collator nodes asking for new messages\n(filtering by the ",(0,o.kt)("inlineCode",{parentName:"p"},"destination")," field). When the collator of parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," makes its next ping, it\nwill see this new message on parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and add it into its own inbound queue for processing into\nthe next block."),(0,o.kt)("p",null,"Validators for parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," will also read the outbound queue and know the message. Validators for\nparachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," will do the same. This is so that they will be able to verify the message transmission\nhappened."),(0,o.kt)("p",null,"When the collator of parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," is building the next block in its chain, it will process the new\nmessage in its inbound queue as well as any other messages it may have found/received."),(0,o.kt)("p",null,"During processing, the message will execute the smart contract on parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," and complete the\nasset transfer as intended."),(0,o.kt)("p",null,"The collator now hands this block to the validator, which itself will verify that this message was\nprocessed. If the message was processed and all other aspects of the block are valid, the validator\nwill include this block for parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," into the Relay Chain."),(0,o.kt)("p",null,"Check out our animated video below that explores how XCMP works."),(0,o.kt)("video",{controls:"controls",name:"XCMP Animated Video",width:"560",height:"315",src:"https://storage.googleapis.com/w3f-tech-ed-contents/XCMP.mp4"}," Sorry, your browser doesn't support embedded videos. "),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=cS8GvPGMLS0"},"Shawn Tabrizi: XCM - The Backbone Of A Multichain Future | Polkadot Decoded 2022")," -\nHigh level overview which should answer \u201cWhat is XCM?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392"},"XCM: The Cross-Consensus Message Format")," -\nDetailed blog post by Dr. Gavin Wood about the XCM Format.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},"XCM Format specification")," - The best starting point for\nunderstanding the XCM API at a technical level.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=K2c6xrCoQOU&t=1196s"},"Gavin Wood, Polkadot founder: XCM v3 | Polkadot Decoded 2022")," -\nHigh level overview of XCM and specifically the new features available in XCM v3.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/XCMP.html"},"XCMP Scheme")," - Full technical\ndescription of cross-chain communication on the Web3 Foundation research wiki.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/types/messages.html"},"Messaging Overview")," - An overview\nof the messaging schemes from the Polkadot Parachain Host Implementor's guide.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=5cgq5jOZx9g"},"Sub0 Online: Getting Started with XCM - Your First Cross Chain Messages")," -\nCode focused workshop on how XCM v1 works, and the core concepts of XCM.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://blog.quarkslab.com/resources/2022-02-27-xcmv2-audit/21-12-908-REP.pdf"},"XCM: Cross-Consensus Messaging Audit")," -\nTechnical audit report by Quarkslab prepared for Parity.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/xcm/pallet-xcm/src/lib.rs"},"XCM pallet code")," -\nThe pallet that contains XCM logic from the Polkadot code repository"))))}d.isMDXComponent=!0},7887:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cross-consensus-tech-stack-e9c1b2ab8b6f6f3f9a78b3a412af0698.png"},871:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xcm-asset-teleportation-fa5ec3787ee0c9bed184c11b95444385.png"},826:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xcm-reserve-asset-transfer-daa1c383e969a1b782c40109f70dcfde.png"}}]);