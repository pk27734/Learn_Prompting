"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8726],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>y,frontMatter:()=>m,metadata:()=>h,toc:()=>g});var n=a(87462),r=(a(67294),a(3905));const o=a.p+"assets/images/mrkl_task-12b7d810cd15b51db59158e42fc156bf.png",l=a.p+"assets/images/dataset-795d02eccc193dc46031731fa8a0e5be.png",i=a.p+"assets/images/load_dataset-df696753aa1a25a052522f4db16fcaf6.png",s=a.p+"assets/images/model-d000ffaa21da2ad7da6811d42f7bba85.png",p=a.p+"assets/images/extract-dc8227e6121f666e40788126c3f24fb3.png",c=a.p+"assets/images/search-747fcaa244074c8743c305a58950233e.png",d=a.p+"assets/images/final-6ff03aff4efdfb2215cd1aad24f37ced.png",m={sidebar_position:2},u="\ud83d\udfe1 LLMs Using Tools",h={unversionedId:"advanced_applications/mrkl",id:"advanced_applications/mrkl",title:"\ud83d\udfe1 LLMs Using Tools",description:'MRKL Systems(@karpas2022mrkl) (Modular Reasoning, Knowledge and Language, pronounced "miracle")',source:"@site/docs/advanced_applications/mrkl.md",sourceDirName:"advanced_applications",slug:"/advanced_applications/mrkl",permalink:"/pt/docs/advanced_applications/mrkl",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/advanced_applications/mrkl.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Introduction",permalink:"/pt/docs/advanced_applications/overview"},next:{title:"\ud83d\udfe1 LLMs that Reason and Act",permalink:"/pt/docs/advanced_applications/react"}},f={},g=[{value:"An Example",id:"an-example",level:2},{value:"Notes",id:"notes",level:2},{value:"More",id:"more",level:2}],k={toc:g},b="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-llms-using-tools"},"\ud83d\udfe1 LLMs Using Tools"),(0,r.kt)("p",null,"MRKL Systems",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' (Modular Reasoning, Knowledge and Language, pronounced "miracle")\nare a ',(0,r.kt)("strong",{parentName:"p"},"neuro-symbolic architecture")," that combine LLMs (neural computation) and external\ntools like calculators (symbolic computation), to solve complex problems. "),(0,r.kt)("p",null,"A MRKL system is composed of a set of modules (e.g. a calculator, weather API, database, etc.) and a router that decides how to 'route' incoming natural language queries to the appropriate module."),(0,r.kt)("p",null,"A simple example of a MRKL system is a LLM that can\nuse a calculator app. This is a single module system, where the LLM is the router.\nWhen asked, ",(0,r.kt)("inlineCode",{parentName:"p"},"What is 100*100?"),", the LLM can choose to\nextract the numbers from the prompt, and then tell the MRKL System to use a calculator\napp to compute the result. This might look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("p",null,"What is 100*100?"),(0,r.kt)("span",{className:"bluegreen-highlight"},"CALCULATOR[100*100]")),(0,r.kt)("p",null,"The MRKL system would see the word ",(0,r.kt)("inlineCode",{parentName:"p"},"CALCULATOR")," and plug ",(0,r.kt)("inlineCode",{parentName:"p"},"100*100")," into the calculator app.\nThis simple idea can easily be expanded to various symbolic computing tools."),(0,r.kt)("p",null,"Consider the following additional examples of applications: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A chatbot that is able to respond to questions about a financial database by\nextracting information to form a SQL query from a users' text.")),(0,r.kt)("pre",null,(0,r.kt)("p",null,"What is the price of Apple stock right now?"),(0,r.kt)("span",{className:"bluegreen-highlight"},'The current price is DATABASE[SELECT price FROM stock WHERE company = "Apple" AND time = "now"].')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A chatbot that is able to respond to questions about the weather by extracting\ninformation from the prompt and using a weather API to retrieve the information.")),(0,r.kt)("pre",null,(0,r.kt)("p",null,"What is the weather like in New York?"),(0,r.kt)("span",{className:"bluegreen-highlight"},"The weather is WEATHER_API[New York].")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Or even much more complex tasks that depend on multiple datasources, such as the\nfollowing:")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:o,style:{width:"500px"}})),(0,r.kt)("div",{style:{textAlign:"center"}},"Example MRKL System (AI21)"),(0,r.kt)("h2",{id:"an-example"},"An Example"),(0,r.kt)("p",null,"I have reproduced an example MRKL System from the original paper, using Dust.tt,\nlinked ",(0,r.kt)("a",{parentName:"p",href:"https://dust.tt/w/ddebdfcdde/a/98bdd65cb7"},"here"),".\nThe system reads a math problem (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"What is 20 times 5^6?"),"), extracts the numbers and the operations,\nand reformats them for a calculator app (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"20*5^6"),"). It then sends the reformatted equation\nto Google's calculator app, and returns the result. Note that the original paper performs prompt tuning on the router (the LLM), but I do not in this example. Let's walk through how this works:"),(0,r.kt)("p",null,"First, I made a simple dataset in the Dust ",(0,r.kt)("inlineCode",{parentName:"p"},"Datasets")," tab."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:l,style:{width:"750px"}})),(0,r.kt)("p",null,"Then, I switched to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Specification")," tab and loaded the dataset using an ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," block."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:i,style:{width:"750px"}})),(0,r.kt)("p",null,"Next, I created a ",(0,r.kt)("inlineCode",{parentName:"p"},"llm")," block that extracts the numbers and operations. Notice how\nin the prompt I told it we would be using Google's calculator. The model I use (GPT-3)\nlikely has some knowledge of Google's calculator from pretraining."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:s,style:{width:"750px"}})),(0,r.kt)("p",null,"Then, I made a ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," block, which runs some simple javascript code to remove\nspaces from the completion."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:p,style:{width:"750px"}})),(0,r.kt)("p",null,"Finally, I made a ",(0,r.kt)("inlineCode",{parentName:"p"},"search")," block that sends the reformatted equation to Google's calculator."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:c,style:{width:"750px"}})),(0,r.kt)("p",null,"Below we can see the final results, which are all correct!"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:d,style:{width:"750px"}})),(0,r.kt)("p",null,"Feel free to clone and experiment with this playground ",(0,r.kt)("a",{parentName:"p",href:"https://dust.tt/w/ddebdfcdde/a/98bdd65cb7"},"here"),"."),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("p",null,"MRKL was developed by ",(0,r.kt)("a",{parentName:"p",href:"https://www.ai21.com/"},"AI21")," and originally used their\nJ-1 (Jurassic 1)",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," LLM."),(0,r.kt)("h2",{id:"more"},"More"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://python.langchain.com/en/latest/modules/agents/agents/examples/mrkl.html"},"this example")," of a MRKL System\nbuilt with LangChain."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Karpas, E., Abend, O., Belinkov, Y., Lenz, B., Lieber, O., Ratner, N., Shoham, Y., Bata, H., Levine, Y., Leyton-Brown, K., Muhlgay, D., Rozen, N., Schwartz, E., Shachaf, G., Shalev-Shwartz, S., Shashua, A., & Tenenholtz, M. (2022). MRKL Systems: A modular, neuro-symbolic architecture that combines large language models, external knowledge sources and discrete reasoning.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Lieber, O., Sharir, O., Lentz, B., & Shoham, Y. (2021). Jurassic-1: Technical Details and Evaluation, White paper, AI21 Labs, 2021. URL: Https://Uploads-Ssl. Webflow. Com/60fd4503684b466578c0d307/61138924626a6981ee09caf6_jurassic_ Tech_paper. Pdf.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}y.isMDXComponent=!0}}]);