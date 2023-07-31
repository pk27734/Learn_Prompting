"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[184],{3905:(a,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var t=n(7294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function u(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var p=t.createContext({}),l=function(a){var e=t.useContext(p),n=e;return a&&(n="function"==typeof a?a(e):u(u({},e),a)),n},m=function(a){var e=l(a.components);return t.createElement(p.Provider,{value:e},a.children)},k="mdxType",s={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,p=a.parentName,m=o(a,["components","mdxType","originalType","parentName"]),k=l(n),g=r,d=k["".concat(p,".").concat(g)]||k[g]||s[g]||i;return n?t.createElement(d,u(u({ref:e},m),{},{components:n})):t.createElement(d,u({ref:e},m))}));function d(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,u=new Array(i);u[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=a,o[k]="string"==typeof a?a:r,u[1]=o;for(var l=2;l<i;l++)u[l]=n[l];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4329:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_position:50},u="Tools untuk Prompt Engineering",o={unversionedId:"tooling/tools",id:"tooling/tools",title:"Tools untuk Prompt Engineering",description:"Bagian ini berisi daftar alat-alat non-IDE yang berguna untuk memicu.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/tooling/tools.md",sourceDirName:"tooling",slug:"/tooling/tools",permalink:"/id/docs/tooling/tools",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/tooling/tools.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd28 Tooling",permalink:"/id/docs/category/-tooling"},next:{title:"Prompt Engineering IDEs",permalink:"/id/docs/category/prompt-engineering-ides"}},p={},l=[{value:"Pengembangan, Pengujian, dan Chaining untuk Prompt",id:"pengembangan-pengujian-dan-chaining-untuk-prompt",level:2},{value:"LangChain",id:"langchain",level:3},{value:"PromptAppGPT",id:"promptappgpt",level:3},{value:"Dust.tt",id:"dusttt",level:3},{value:"OpenPrompt(@ding2021openprompt)",id:"openpromptding2021openprompt",level:3},{value:"BetterPrompt",id:"betterprompt",level:3},{value:"Prompt Engine",id:"prompt-engine",level:3},{value:"Promptify",id:"promptify",level:3},{value:"TextBox(@tang2022textbox)",id:"textboxtang2022textbox",level:3},{value:"ThoughtSource",id:"thoughtsource",level:3},{value:"Serba Aneka",id:"serba-aneka",level:2},{value:"GPT Index(@Liu_GPT_Index_2022)",id:"gpt-indexliu_gpt_index_2022",level:3},{value:"Deforum",id:"deforum",level:3},{value:"Visual Prompt Builder",id:"visual-prompt-builder",level:3},{value:"Interactive Composition Explorer",id:"interactive-composition-explorer",level:3},{value:"PTPT - Prompt To Plain Text",id:"ptpt---prompt-to-plain-text",level:3},{value:"Orquesta AI Prompts",id:"orquesta-ai-prompts",level:3},{value:"Lainnya",id:"lainnya",level:3}],m={toc:l},k="wrapper";function s(a){let{components:e,...n}=a;return(0,r.kt)(k,(0,t.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tools-untuk-prompt-engineering"},"Tools untuk Prompt Engineering"),(0,r.kt)("p",null,"Bagian ini berisi daftar alat-alat non-IDE yang berguna untuk memicu."),(0,r.kt)("h2",{id:"pengembangan-pengujian-dan-chaining-untuk-prompt"},"Pengembangan, Pengujian, dan Chaining untuk Prompt"),(0,r.kt)("h3",{id:"langchain"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/hwchase17/langchain/"},"LangChain")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Model bahasa besar (LLM) sedang muncul sebagai teknologi yang membawa perubahan, memungkinkan pengembang untuk membangun aplikasi yang sebelumnya tidak dapat mereka lakukan. Namun menggunakan LLM ini secara sendiri seringkali tidak cukup untuk menciptakan aplikasi yang benar-benar kuat - kekuatan sebenarnya terjadi ketika Anda dapat menggabungkannya dengan sumber-sumber komputasi atau pengetahuan lainnya.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Perpustakaan ini bertujuan untuk membantu dalam pengembangan jenis aplikasi tersebut.")),(0,r.kt)("h3",{id:"promptappgpt"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/mleoking/PromptAppGPT"},"PromptAppGPT")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PromptAppGPT adalah kerangka pengembangan aplikasi cepat berbasis kode rendah. PromptAppGPT memuat fitur seperti pengembangan berbasis prompt low-code, generasi teks GPT, generasi gambar DALLE, online prompt editor+compiler+runner, generasi antarmuka pengguna otomatis, dukungan untuk ekstensi plug-in, dll. PromptAppGPT bertujuan untuk memungkinkan pengembangan aplikasi bahasa alami berdasarkan GPT.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PromptAppGPT menyediakan pemicu kondisional multi-tugas, verifikasi hasil, dan kemampuan pengulangan kegagalan, memungkinkan tugas generasi manual yang sebaliknya membutuhkan beberapa langkah untuk diotomatisasi. Pada saat yang sama, pengguna tidak perlu lagi menghafal dan memasukkan mantera yang membosankan itu sendiri, dan dapat dengan mudah menyelesaikan tugas dengan memasukkan hanya informasi yang terpenting untuk tugas itu.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PromptAppGPT secara signifikan menurunkan hambatan untuk pengembangan aplikasi GPT, memungkinkan siapa pun mengembangkan aplikasi mirip AutoGPT dengan beberapa baris kode rendah.")),(0,r.kt)("h3",{id:"dusttt"},(0,r.kt)("a",{parentName:"h3",href:"https://dust.tt"},"Dust.tt")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Platform Dust membantu membangun aplikasi Llm sebagai serangkaian pemanggilan prompt ke model eksternal. Ini menyediakan antarmuka grafis yang mudah digunakan untuk membangun rangkaian perintah, serta sejumlah blok standar dan bahasa pemrograman kustom untuk menganalisis dan memproses output model bahasa.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ini menyediakan serangkaian fitur untuk membuat pengembangan aplikasi lebih cepat, lebih mudah, dan lebih handal:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"menjalankan beberapa penyelesaian secara paralel"),(0,r.kt)("li",{parentName:"ul"},"memeriksa hasil eksekusi"),(0,r.kt)("li",{parentName:"ul"},"versioning prompt chains"),(0,r.kt)("li",{parentName:"ul"},"bahasa pemrograman khusus untuk memproses data dan teks"),(0,r.kt)("li",{parentName:"ul"},"Integrasi API untuk berbagai model dan layanan eksternal"))),(0,r.kt)("h3",{id:"openpromptding2021openprompt"},(0,r.kt)("a",{parentName:"h3",href:"https://thunlp.github.io/OpenPrompt/"},"OpenPrompt"),(0,r.kt)("sup",{parentName:"h3",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Prompt-learning adalah paradigma terbaru untuk menyesuaikan model bahasa yang telah dilatih sebelumnya (PLMs) ke tugas NLP turunannya, yang mengubah teks input dengan template tekstual dan langsung menggunakan PLMs untuk melakukan tugas yang telah dilatih sebelumnya. OpenPrompt adalah perpustakaan yang dibangun di atas PyTorch dan menyediakan kerangka kerja standar, fleksibel, dan dapat dikembangkan untuk mengimplementasikan pipeline pembelajaran prompt. OpenPrompt mendukung memuat PLMs langsung dari pengubah huggingface. Di masa depan, kami juga akan mendukung PLM yang diimplementasikan oleh perpustakaan lain.")),(0,r.kt)("h3",{id:"betterprompt"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/stjordanis/betterprompt"},"BetterPrompt")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a1 Tes suite untuk LLM prompts sebelum mendorongnya ke PROD \u26a1")),(0,r.kt)("h3",{id:"prompt-engine"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/microsoft/prompt-engine"},"Prompt Engine")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pustaka utilitas NPM untuk membuat dan memelihara prompt untuk Model Bahasa Besar (LLM).")),(0,r.kt)("h3",{id:"promptify"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/promptslab/Promptify"},"Promptify")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Mengandalkan hanya pada LLM seringkali tidak cukup untuk membangun aplikasi dan alat-alat &. Untuk membuka potensi penuh mereka, penting untuk mengintegrasikan LLM dengan sumber komputasi atau pengetahuan lainnya dan menyiapkan saluran unggah untuk produksi.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pustaka ini ditujukan untuk membantu dalam mengembangkan pipa untuk menggunakan API LLMs secara produksi, memecahkan Tugas NLP seperti NER, Klasifikasi, Pertanyaan, Jawaban, Pemeringkatan, Teks ke Grafik, dll., serta menyediakan agen-agen kuat untuk membangun agen obrolan untuk tugas-tugas yang berbeda.")),(0,r.kt)("h3",{id:"textboxtang2022textbox"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/RUCAIBox/TextBox"},"TextBox"),(0,r.kt)("sup",{parentName:"h3",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TextBox 2.0 adalah perpustakaan generasi teks terkini yang berbasis Python dan PyTorch dengan fokus pada membangun alur kerja yang terpadu dan standar untuk menerapkan model bahasa yang telah dilatih sebelumnya untuk generasi teks:")),(0,r.kt)("h3",{id:"thoughtsource"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/OpenBioLink/ThoughtSource"},"ThoughtSource")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"ThoughtSource adalah sumber daya pusat yang terbuka dan komunitas yang berfokus pada data dan alat untuk pemikiran berantai dalam model bahasa besar (Wei 2022). Tujuan jangka panjang kami adalah memungkinkan penalaran yang dapat dipercaya dan kuat dalam sistem AI canggih untuk mengemudikan penelitian ilmiah dan praktik medis')),(0,r.kt)("h2",{id:"serba-aneka"},"Serba Aneka"),(0,r.kt)("h3",{id:"gpt-indexliu_gpt_index_2022"},(0,r.kt)("a",{parentName:"h3",href:"https://gpt-index.readthedocs.io/en/latest/"},"GPT Index"),(0,r.kt)("sup",{parentName:"h3",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"GPT Index adalah proyek yang terdiri dari kumpulan struktur data yang dirancang untuk memudahkan penggunaan basis pengetahuan eksternal yang besar dengan LLMs")),(0,r.kt)("h3",{id:"deforum"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/HelixNGC7293/DeforumStableDiffusionLocal"},"Deforum")),(0,r.kt)("p",null,"Video animasi AI"),(0,r.kt)("h3",{id:"visual-prompt-builder"},(0,r.kt)("a",{parentName:"h3",href:"https://tools.saxifrage.xyz/prompt"},"Visual Prompt Builder")),(0,r.kt)("p",null,"Bangun prompt, secara visual"),(0,r.kt)("h3",{id:"interactive-composition-explorer"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/oughtinc/ice"},"Interactive Composition Explorer")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ICE adalah pustaka Python dan visualisasi jejak untuk program model bahasa.")),(0,r.kt)("h3",{id:"ptpt---prompt-to-plain-text"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/LeslieLeung/PTPT"},"PTPT - Prompt To Plain Text")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PTPT adalah alat baris perintah yang memungkinkan Anda dengan mudah mengkonversi file teks biasa menggunakan prompt yang telah ditentukan sebelumnya dengan bantuan ChatGPT. Dengan PTPT, Anda dapat dengan mudah membuat dan membagikan format perintah, membuat kolaborasi dan penyesuaian menjadi sangat mudah. Selain itu, dengan berlangganan, Anda mendapatkan akses ke lebih banyak rangsangan untuk meningkatkan pengalaman Anda. Jika Anda tertarik pada rekayasa yang cepat, Anda dapat menggunakan PTPT untuk mengembangkan dan berbagi prompt Anda.")),(0,r.kt)("h3",{id:"orquesta-ai-prompts"},(0,r.kt)("a",{parentName:"h3",href:"https://orquesta.cloud/platform/ai-llm-prompts"},"Orquesta AI Prompts")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Platform kolaborasi low-code untuk Prompts AI")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manajemen siklus lengkap permintaan (dari ideasi hingga pengumpulan umpan balik)"),(0,r.kt)("li",{parentName:"ul"},"Fitur-fitur tingkat perusahaan dan keamanan"),(0,r.kt)("li",{parentName:"ul"},"Dukungan untuk LLM publik, pribadi, dan kustom"),(0,r.kt)("li",{parentName:"ul"},"Promp berdasarkan konteks kustom dan aturan bisnis. Evaluasi di Pinggiran"),(0,r.kt)("li",{parentName:"ul"},"Pencatatan dan pengumpulan data secara waktu nyata tentang performa dan ekonomi yang cepat")),(0,r.kt)("h3",{id:"lainnya"},"Lainnya"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gpttools.com"},"https://gpttools.com")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Ding, N., Hu, S., Zhao, W., Chen, Y., Liu, Z., Zheng, H.-T., & Sun, M. (2021). OpenPrompt: An Open-source Framework for Prompt-learning. arXiv Preprint arXiv:2111.01998.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Tang, T., Junyi, L., Chen, Z., Hu, Y., Yu, Z., Dai, W., Dong, Z., Cheng, X., Wang, Y., Zhao, W., Nie, J., & Wen, J.-R. (2022). TextBox 2.0: A Text Generation Library with Pre-trained Language Models.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Liu, J. (2022). GPT Index. https://doi.org/10.5281/zenodo.1234\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}s.isMDXComponent=!0}}]);