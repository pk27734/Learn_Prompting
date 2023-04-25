"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8321],{8001:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i=a.p+"assets/images/math-eea855c0adcf7cfe3fb93202a2f67bb1.png";var r=a(39145);const s={sidebar_position:70},l="\ud83d\udfe1 Math",p={unversionedId:"reliability/math",id:"reliability/math",title:"\ud83d\udfe1 Math",description:"Throughout this course, we have seen many different prompting methods that can be used to improve %%LLM|LLM%% math ability. One recent approach, MathPrompter(@imani2023mathprompter), unifies some of these methods (%%CoT|CoT prompting%%, %%PAL|PAL%%, etc.) into a single technique. The overarching idea is to break down a math question into algebraic terms then use Python code to solve it in different ways.",source:"@site/docs/reliability/math.md",sourceDirName:"reliability",slug:"/reliability/math",permalink:"/si/docs/reliability/math",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/math.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd34 Calibrating LLMs",permalink:"/si/docs/reliability/calibration"},next:{title:"\ud83d\uddbc\ufe0f Image Prompting",permalink:"/si/docs/category/\ufe0f-image-prompting"}},h={},c=[{value:"Step 1: Generate Algebraic Template",id:"step-1-generate-algebraic-template",level:2},{value:"Step 2: Math Prompts",id:"step-2-math-prompts",level:2},{value:"2a: Algebraic Statement",id:"2a-algebraic-statement",level:3},{value:"2b: Python Code",id:"2b-python-code",level:3},{value:"Answer Generation",id:"answer-generation",level:3},{value:"Step 4: Self-Consistency",id:"step-4-self-consistency",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-math"},"\ud83d\udfe1 Math"),(0,o.kt)("p",null,"Throughout this course, we have seen many different prompting methods that can be used to improve ",(0,o.kt)("a",{parentName:"p",id:"LLM_0_98_1682462498090","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,o.kt)(r.u,{anchorId:"LLM_0_98_1682462498090",clickable:!0,mdxType:"Tooltip"})," math ability. One recent approach, MathPrompter",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", unifies some of these methods (",(0,o.kt)("a",{parentName:"p",id:"CoT prompting_5_33_1682462498090","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT"),(0,o.kt)(r.u,{anchorId:"CoT prompting_5_33_1682462498090",clickable:!0,mdxType:"Tooltip"}),", ",(0,o.kt)("a",{parentName:"p",id:"PAL_8_2_1682462498090","data-tooltip-html":"A method that uses code as intermediate reasoning<br>see <a href='https://learnprompting.org/docs/advanced_applications/pal'>PAL</a>","data-tooltip-place":"top"},"PAL"),(0,o.kt)(r.u,{anchorId:"PAL_8_2_1682462498090",clickable:!0,mdxType:"Tooltip"}),", etc.) into a single technique. The overarching idea is to break down a math question into algebraic terms then use Python code to solve it in different ways."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:i,style:{width:"500px"}})),(0,o.kt)("p",null,"MathPrompter has ",(0,o.kt)("strong",{parentName:"p"},"four")," steps. We will explain them using the following example problem. The example is taken directly from the paper."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Q: At a restaurant, each adult meal costs $5 and kids eat free. If a group of 15\npeople came in and 8 were kids, how much would it cost for the group to eat?\n")),(0,o.kt)("h2",{id:"step-1-generate-algebraic-template"},"Step 1: Generate Algebraic Template"),(0,o.kt)("p",null,"The first step is to assign a variable to each number in the question. This helps because it allows easier translation of the question into an abstract math question, as well as into programming code."),(0,o.kt)("p",null,"This can be done via few shot prompting:"),(0,o.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Q: A zoo charges $12 per adult ticket and allows children under 5 to enter for free. A family of 4 adults and 2 children under 5 visit the zoo. What is the total cost for the family to enter?\\nQt: At a zoo, each adult ticket costs $A and children under 5 can enter for free. If a family of B adults and C children under 5 visit the zoo, what is the total cost for the family to enter?\\nMapping: {A: 12, B: 4, C: 2}\\n\\nQ: A store sells shoes at $60 per pair and socks at $8 per pair. If a customer buys 2 pairs of shoes and 3 pairs of socks, what is the total cost of the purchase?\\nQt: At a store, shoes cost $A per pair and socks cost $B per pair. If a customer buys C pairs of shoes and D pairs of socks, what is the total cost of the purchase?\\nMapping: {A: 60, B: 8, C: 2, D: 3}\\n\\nQ: At a restaurant, each adult meal costs $5 and kids eat free. If a group of 15\\npeople came in and 8 were kids, how much would it cost for the group to eat?","initial-response":"Qt: At a restaurant, each adult meal costs $A and kids eat free. If a group of B people came in and C were kids, how much would it cost for the group to eat?\\nMapping: {A: 5, B: 15, C: 8}","max-tokens":"256","box-rows":"14","model-temp":"0","top-p":"0"},(0,o.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,o.kt)("h2",{id:"step-2-math-prompts"},"Step 2: Math Prompts"),(0,o.kt)("p",null,"The point of this step is to formulate the problem as both an algebraic statement and as Python code. This step has two simultaneous prompts, which help to give diverse representations of the problem."),(0,o.kt)("h3",{id:"2a-algebraic-statement"},"2a: Algebraic Statement"),(0,o.kt)("p",null,'We can few-shot prompt the LLM to represent the math problem as an algebraic statement. This is done by asking the LLM to generate the answer format, starting with "Answer =".'),(0,o.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Qt: At a zoo, each adult ticket costs $A and children under 5 can enter for free. If a family of B adults and C children under 5 visit the zoo, what is the total cost for the family to enter?\\nMapping: {A: 12, B: 4, C: 2}\\n\\nWrite a mathematical equation and generate the answer format\\nstarting with \u2018Answer =\u2019\\n\\nAnswer = A * B\\n\\nQt: At a store, shoes cost $A per pair and socks cost $B per pair. If a customer buys C pairs of shoes and D pairs of socks, what is the total cost of the purchase?\\nMapping: {A: 60, B: 8, C: 2, D: 3}\\n\\nWrite a mathematical equation and generate the answer format\\nstarting with \u2018Answer =\u2019\\n\\nAnswer = A * C + B * D\\n\\nQt: At a restaurant, each adult meal costs $A and kids eat free. If a group of B people came in and C were kids, how much would it cost for the group to eat?\\nMapping: {A: 5, B: 15, C: 8}\\n\\nWrite a mathematical equation and generate the answer format\\nstarting with \u2018Answer =\u2019","initial-response":"Answer = A * B - A * C","max-tokens":"256","box-rows":"14","model-temp":"0","top-p":"0"},(0,o.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,o.kt)("h3",{id:"2b-python-code"},"2b: Python Code"),(0,o.kt)("p",null,"We can also ask the ",(0,o.kt)("a",{parentName:"p",id:"LLM_0_20_1682462498090","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,o.kt)(r.u,{anchorId:"LLM_0_20_1682462498090",clickable:!0,mdxType:"Tooltip"})," to generate Python code that solves the problem. This is done by asking the LLM to generate a Python function."),(0,o.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Qt: At a zoo, each adult ticket costs $A and children under 5 can enter for free. If a family of B adults and C children under 5 visit the zoo, what is the total cost for the family to enter?\\nMapping: {A: 12, B: 4, C: 2}\\n\\nWrite a Python function that returns the answer.\\n\\ndef zoo_cost(A, B, C):\\n  return A * B\\n\\n\\nQt: At a store, shoes cost $A per pair and socks cost $B per pair. If a customer buys C pairs of shoes and D pairs of socks, what is the total cost of the purchase?\\n\\nWrite a Python function that returns the answer.\\n\\ndef store_cost(A, B, C, D):\\n  return (A * C) + (B * D)\\n\\nQt: At a restaurant, each adult meal costs $A and kids eat free. If a group of B people came in and C were kids, how much would it cost for the group to eat?\\n\\nWrite a Python function that returns the answer.","initial-response":"def restaurant_cost(A, B, C):\\n  return A * (B - C)","max-tokens":"256","box-rows":"14","model-temp":"0","top-p":"0"},(0,o.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,o.kt)("h3",{id:"answer-generation"},"Answer Generation"),(0,o.kt)("p",null,"Now, we can use the Mapping that we generated previously to automatically fill in the variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Mapping: {A: 5, B: 15, C: 8}\n")),(0,o.kt)("p",null,"Algebraic: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Answer = 5 * 15 - 5 * 8\n")),(0,o.kt)("p",null,"Python function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def restaurant_cost(A=5, B=15, C=8):\n  return A * (B - C)\n")),(0,o.kt)("p",null,"We can evaluate both using Python."),(0,o.kt)("p",null,"Algebraic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'>>> eval("5 * 15 - 5 * 8")\n35\n')),(0,o.kt)("p",null,"Python function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},">>> restaurant_cost()\n35\n")),(0,o.kt)("h2",{id:"step-4-self-consistency"},"Step 4: Self-Consistency"),(0,o.kt)("p",null,"Finally, we will leverage ",(0,o.kt)("a",{parentName:"p",id:"self_consistency_0_26_1682462498090","data-tooltip-html":"Generating multiple chains of thought and taking the majority answer.<br>See <a href='https://learnprompting.org/docs/intermediate/self_consistency'>Self Consistency</a>","data-tooltip-place":"top"},"Self-Consistency"),(0,o.kt)(r.u,{anchorId:"self_consistency_0_26_1682462498090",clickable:!0,mdxType:"Tooltip"})," to rerun the above process multiple times (~5), then take the majority answer."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"MathPrompter reports 92.5% accuracy on the MultiArith",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," dataset. The success of this technique is a great example of how ",(0,o.kt)("strong",{parentName:"p"},"you")," as a prompt engineer can take methods that you have learned throughout this course and combine them to deal with larger problems."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Imani, S., Du, L., & Shrivastava, H. (2023). MathPrompter: Mathematical Reasoning using Large Language Models.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"Roy, S., & Roth, D. (2015). Solving General Arithmetic Word Problems. Proceedings of the 2015 Conference on Empirical Methods in Natural Language Processing, 1743\u20131752. https://doi.org/10.18653/v1/D15-1202\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);