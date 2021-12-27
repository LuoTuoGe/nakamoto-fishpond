import{o as p,c as w,r as A,a as y,b as v,d as _,e as k,f as b,g as K}from"./vendor.1aa4e7fa.js";const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}};I();const g={setup(){},async created(){this.$store.dispatch("initEther")}};function P(e,t,i,a,n,r){const o=A("router-view");return p(),w(o)}g.render=P;let T={};const c=y.create(T);c.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)});c.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)});const u={};u.install=function(e,t){e.config.globalProperties.$axios=c};const C="https://image.kakanft.com/web/cards-mini/",E="https://image.kakanft.com/web/cards/",L={getIdList(){const e=[];for(let t=10001;t<=10110;t++)e.push(t);for(let t=20001;t<=20026;t++)e.push(t);for(let t=30001;t<=30010;t++)e.push(t);return e},getAlbum(e){return E+e+"A.png"},getAlbumMini(e){return C+e+"A.png"},getWalletType(){return window.ethereum?window.ethereum.isImToken?"imtoken":window.ethereum.isTokenPocket?"tokenpocket":window.ethereum.rpcUrl&&window.ethereum.rpcUrl.indexOf("bitkeep")!==-1?"bitkeep":window.ethereum.isMetaMask&&window.ethereum._metamask?"metamask":"unknown":"no"}},d={};d.install=function(e,t){e.config.globalProperties.$utils=L};const R="modulepreload",m={},$="/",l=function(t,i){return!i||i.length===0?t():Promise.all(i.map(a=>{if(a=`${$}${a}`,a in m)return;m[a]=!0;const n=a.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const o=document.createElement("link");if(o.rel=n?"stylesheet":R,n||(o.as="script",o.crossOrigin=""),o.href=a,document.head.appendChild(o),n)return new Promise((h,f)=>{o.addEventListener("load",h),o.addEventListener("error",f)})})).then(()=>t())},O=v({history:_(),routes:[{path:"/v1",name:"home",component:()=>l(()=>import("./home.d98340f1.js"),["assets/home.d98340f1.js","assets/home.6a3296db.css","assets/header.c62a89d0.js","assets/header.5c6d482e.css","assets/vendor.1aa4e7fa.js"])},{path:"/rush",name:"rush",component:()=>l(()=>import("./rush.c48f9c06.js"),["assets/rush.c48f9c06.js","assets/rush.0fa7ffd9.css","assets/header.c62a89d0.js","assets/header.5c6d482e.css","assets/vendor.1aa4e7fa.js","assets/nft_medal.ac3e8de6.js","assets/nft_medal.4e987fed.css","assets/ethers.7abb8062.js"])},{path:"/test",name:"test",component:()=>l(()=>import("./test.6a2b5a5d.js"),["assets/test.6a2b5a5d.js","assets/test.62e72165.css","assets/header.c62a89d0.js","assets/header.5c6d482e.css","assets/vendor.1aa4e7fa.js","assets/nft_medal.ac3e8de6.js","assets/nft_medal.4e987fed.css","assets/ethers.7abb8062.js"])},{path:"/",name:"v2",component:()=>l(()=>import("./home-v2.4cee2299.js"),["assets/home-v2.4cee2299.js","assets/home-v2.5d0e1d59.css","assets/ethers.7abb8062.js","assets/vendor.1aa4e7fa.js"])}]});var S=k({state(){return{myAddr:"",chainId:"",walletType:"eth",lastChange:0}},mutations:{setWallet(e,{myAddr:t,chainId:i,lastChange:a}){e.myAddr=t,e.chainId=i,e.lastChange=a},setWalletType(e,t){e.walletType=t}},actions:{async initEther({dispatch:e,commit:t,state:i}){!window.ethereum&&window.BinanceChain&&(window.ethereum=window.BinanceChain);let a=window.ethereum.selectedAddress||window.ethereum.address||"";try{if(window.ethereum&&(a.toLowerCase()!==i.myAddr.toLowerCase()||window.ethereum.chainId!==i.chainId)){const r=new Date().getTime();t("setWallet",{myAddr:a,chainId:window.ethereum.chainId,lastChange:r})}}catch(n){console.log(n)}setTimeout(()=>{e("initEther")},2e3)}}}),W={lang:{lang1:"Receive",lang2:"Mining income",lang3:"Note: the chart is updated every 24 hrs Here only show the top 10",lang4:"Remaining",lang5:"rankings",lang6:"address",lang7:"Reward currency",lang8:"Number of rewards",lang9:"State",lang10:"success",lang11:"pending",lang12:"Retry",lang13:"Please confirm the internal beta agreement",lang14:"I know and agree",lang15:"KAKA game internal testing confidentiality agreement",lang16:"Received successfully",lang17:"KAKA Game Intellectual Property Rights Protection Agreement",lang18:"Dear users, Thanks for participating in KAKA card game open test. With KAKA team hardworking day after night, we formally invite users to enter the open test stage. The content of the test server is not the ultimate version. To protect the labor results of KAKA team and to avoid any further misunderstandings, please be notified that users must abide by the intellectual property protection agreement, and may not use the relevant images or text-related information in the game without official permission. If any violation of this agreement is found, our company will take relevant actions to restrict violators and protect legal equity, and we reserve the right to pursue legal actions.",lang19:"KAKA platform",lang20:"Total values",lang21:"Active",lang22:"Reserves",lang23:"Transfer",lang24:"state",lang25:"Withdraw card",lang26:"receive",lang27:"My Cards",lang28:"The deposit has been submitted,please waite for block confirmation",lang29:"Success",lang30:"Approve",lang31:"Approving",lang32:"It is detected that you have not authorized, please authorize first",lang33:"Back",lang34:"Date",lang35:"Failed",lang36:"Submitted",lang37:"Success",lang38:"Done",lang39:"Withdrawal failed,Possible Causes:more than five types of cards",lang40:"Confirm",lang41:"Confirm withdrawal card",lang42:"Confirm recharge card",lang43:"Withdrawal application done",lang44:"Card",lang45:"Received successfully"}},j={lang:{lang1:"\u9886\u53D6",lang2:"\u6316\u77FF\u6240\u5F97",lang3:"\u6CE8\uFF1A\u6BCF24\u5C0F\u65F6\u5237\u65B0\u4E00\u6B21 \u540D\u6B21\u4EC5\u663E\u793A\u524D10\u540D",lang4:"\u5269\u4F59\u5361\u724C",lang5:"\u6392\u540D",lang6:"\u5730\u5740",lang7:"\u5956\u52B1\u5E01\u79CD",lang8:"\u5956\u52B1\u6570\u91CF",lang9:"\u9886\u53D6\u72B6\u6001",lang10:"\u6210\u529F",lang11:"\u9886\u53D6\u4E2D",lang12:"\u91CD\u8BD5",lang13:"\u8BF7\u786E\u8BA4\u516C\u6D4B\u534F\u8BAE",lang14:"\u6211\u5DF2\u77E5\u6653\u5E76\u4E14\u540C\u610F",lang15:"KAKA\u6E38\u620F\u516C\u6D4B\u4FDD\u5BC6\u534F\u8BAE",lang16:"\u9886\u53D6\u6210\u529F",lang17:"KAKA\u6E38\u620F\u516C\u6D4B\u4FDD\u5BC6\u534F\u8BAE",lang18:"\u4EB2\u7231\u7684\u7528\u6237\u60A8\u597D\uFF0C\u611F\u8C22\u60A8\u53C2\u4E0EKAKA\u300A\u5854\u5170\u5927\u9646\u300BNFT\u5361\u724C\u6E38\u620F\u516C\u6D4B\u6D3B\u52A8\u3002\u7ECF\u8FC7KAKA\u56E2\u961F\u5C0F\u4F19\u4F34\u4EEC\u7684\u65E5\u591C\u52AA\u529B\uFF0C\u6211\u4EEC\u7EC8\u4E8E\u8FCE\u6765\u4E86\u7528\u6237\u53C2\u4E0E\u7684\u6B63\u5F0F\u516C\u6D4B\u9636\u6BB5\u3002\u672C\u6D4B\u8BD5\u670D\u7684\u5185\u5BB9\u5E76\u975E\u6700\u540E\u7684\u6B63\u5F0F\u7248\uFF0C\u4E3A\u4E86\u4FDD\u62A4KAKA\u56E2\u961F\u5C0F\u4F19\u4F34\u4EEC\u7684\u52B3\u4F5C\u7ED3\u6676\uFF0C\u540C\u65F6\u907F\u514D\u7ED9\u540E\u7EED\u73A9\u5BB6\u9020\u6210\u4E0D\u5FC5\u8981\u7684\u8BEF\u4F1A\uFF0C\u8BF7\u5404\u4F4D\u7528\u6237\u52A1\u5FC5\u9075\u5B88\u77E5\u8BC6\u4EA7\u6743\u4FDD\u62A4\u534F\u8BAE\uFF0C\u4E0D\u53EF\u5728\u672A\u7ECF\u5B98\u65B9\u8BB8\u53EF\u60C5\u51B5\u4E0B\u4F7F\u7528\u6E38\u620F\u4E2D\u7684\u76F8\u5173\u753B\u9762\u6216\u6587\u5B57\u76F8\u5173\u4FE1\u606F\u3002\u5982\u6709\u53D1\u73B0\u8FDD\u53CD\u672C\u534F\u8BAE\u7684\u76F8\u5173\u884C\u4E3A\uFF0C\u6211\u53F8\u5C06\u91C7\u53D6\u76F8\u5173\u884C\u52A8\u8FDB\u884C\u7528\u6237\u9650\u5236\u548C\u81EA\u6211\u4FDD\u62A4\uFF0C\u540C\u65F6\u4FDD\u7559\u8FFD\u7A76\u76F8\u5173\u8FDD\u6CD5\u884C\u4E3A\u7684\u6743\u5229\u3002",lang19:"KAKA\u5E73\u53F0",lang20:"\u603B\u4EF7\u503C",lang21:"\u5DF2\u6301\u6709",lang22:"\u5DF2\u5B58\u5165",lang23:"\u63D0\u73B0\u8BB0\u5F55",lang24:"\u72B6\u6001",lang25:"\u63D0\u73B0\u5361\u724C",lang26:"\u9886\u53D6",lang27:"\u6211\u7684\u5361\u724C",lang28:"\u5145\u503C\u5DF2\u63D0\u4EA4\uFF0C\u7B49\u5F85\u533A\u5757\u786E\u8BA4",lang29:"\u6388\u6743\u6210\u529F",lang30:"\u6388\u6743",lang31:"\u6388\u6743\u4E2D",lang32:"\u68C0\u6D4B\u5230\u60A8\u8FD8\u672A\u6388\u6743\uFF0C\u8BF7\u5148\u6388\u6743",lang33:"\u8FD4\u56DE\u4E0A\u7EA7\u9875\u9762",lang34:"\u65F6\u95F4",lang35:"\u63D0\u73B0\u5931\u8D25",lang36:"\u5DF2\u63D0\u4EA4",lang37:"\u63D0\u73B0\u6210\u529F",lang38:"\u63D0\u73B0\u5B8C\u6210",lang39:"\u63D0\u73B0\u5931\u8D25\uFF0C\u53EF\u80FD\u539F\u56E0\uFF1A\u5361\u724C\u8D85\u8FC7\u4E94\u7C7B",lang40:"\u786E\u8BA4",lang41:"\u786E\u8BA4\u63D0\u73B0\u5361\u724C",lang42:"\u786E\u8BA4\u5145\u503C\u5361\u724C",lang43:"\u63D0\u6B3E\u7533\u8BF7\u5B8C\u6210",lang44:"\u5F20",lang45:"\u9886\u53D6\u6210\u529F"}},x={en:W,zh:j};const D=b({fallbackLocale:"en",globalInjection:!0,legacy:!1,locale:localStorage.getItem("lang")||"en",messages:x}),s=K(g);s.use(u);s.use(d);s.use(O);s.use(S);s.use(D);s.mount("#app");
