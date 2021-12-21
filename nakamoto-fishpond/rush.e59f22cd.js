var k=Object.defineProperty;var u=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var _=(i,e,a)=>e in i?k(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a,v=(i,e)=>{for(var a in e||(e={}))A.call(e,a)&&_(i,a,e[a]);if(u)for(var a of u(e))C.call(e,a)&&_(i,a,e[a]);return i};import{_ as L,a as F,b as N,C as S,c as j,d as B,e as I,f as D,g as O,h as U,i as P}from"./nft_medal.7ac6b3be.js";import{g as x}from"./ethers.f223a794.js";import{m as V,p as M,a as q,c as r,b as t,t as d,j as y,k as h,v as m,l as n,F as E,w as Y,r as f,o as l}from"./vendor.5c1b300f.js";const w="https://btcfish.io/rush",b={name:"rush",components:{Header:L,Footer:F,Loading:N},data(){return{start:!0,eth:null,clipboard:null,inviteLink:"",inviteType:0,invitor:"",isApproved:{buy:!1,transfer:{pond:!1,medal:!1}},remaining:0,price:"1000",count:1,balance:{pond:0,medal:0},toAddress:"",showTransfer:!1,transferType:"",transferCount:1,nftName:{pond:"Fishpond",medal:"Medal"},isLoading:!1}},computed:v({},V(["lastChange"])),watch:{async lastChange(){this.eth=await x(),this.eth&&await this.init()}},methods:{openConsole(){},transfer(i){this.showTransfer=!0,this.transferType=i},async doTransfer(){const i=+this.transferCount;if(this.balance[this.transferType]===0){alert("You don't have a token");return}else if(this.balance[this.transferType]<i){alert("Transfer amount exceed");return}if(!this.isApproved.transfer[this.transferType]){const e=await this.eth.c[this.transferType].setApprovalForAll(this.eth.c.multiTransfer.address,!0);this.isLoading=!0,await e.wait(),this.isLoading=!1}await this.eth.c.multiTransfer.multiTransfer(this.eth.c[this.transferType].address,this.toAddress,i),this.balance[this.transferType]-=i,this.showTransfer=!1,alert("Transaction send!")},copyLink(){this.clipboard=new S("#copy",{action:"copy",text:this.inviteLink}),this.clipboard.on("success",()=>alert("Copied"))},async init(){this.inviteType=+this.$route.query.type,this.invitor=this.$route.query.invitor,await this.getSales(),this.$nextTick(this.copyLink),await this.checkIsApproved()},async getSales(){this.balance.medal=(await this.eth.c.medal.balanceOf(this.eth.myAddr)).toNumber(),this.balance.pond=(await this.eth.c.pond.balanceOf(this.eth.myAddr)).toNumber(),this.isKnight=await this.eth.c.sale.knights(this.eth.myAddr),this.isPondOwner=this.balance.pond>0,this.isKnight?this.inviteLink=w+"?type=1&invitor="+this.eth.myAddr:this.isPondOwner&&(this.inviteLink=w+"?type=2&invitor="+this.eth.myAddr),this.remaining=(await this.eth.c.sale.pondInventory()).toNumber(),this.price=await this.eth.c.sale.pondPrice()},async checkIsApproved(){this.isApproved.buy=(await this.eth.c.busd.allowance(this.eth.myAddr,this.eth.c.sale.address)).gt(0),this.isApproved.transfer.medal=await this.eth.c.medal.isApprovedForAll(this.eth.myAddr,this.eth.c.multiTransfer.address),this.isApproved.transfer.pond=await this.eth.c.pond.isApprovedForAll(this.eth.myAddr,this.eth.c.multiTransfer.address)},async buy(){if(this.count=+this.count,this.count>10&&alert("Buy up to ten at a time"),!this.isApproved.buy){const e=await this.eth.c.busd.approve(this.eth.c.sale.address,this.eth.constants.MaxUint256);this.isLoading=!0,await e.wait(),this.isLoading=!1}let i;try{if(this.inviteType===1)i=await this.eth.c.sale.buyPondFromKnight(this.invitor,this.count);else{const e=await this.eth.c.pond.tokenOfOwnerByIndex(this.invitor,0);i=await this.eth.c.sale.buyPondFromNFT(e,this.count)}}catch(e){e.data&&e.data.message.indexOf("BEP20: transfer amount exceeds balance")!==-1?alert("Insufficient BUSD"):console.error(e);return}this.isLoading=!0,await i.wait(),this.isLoading=!1,alert("Success! "),this.getSales()}},async mounted(){this.eth=await x(),this.eth&&await this.init()}},H=Y("data-v-bbf3f734");M("data-v-bbf3f734");const K=t("div",{class:"w-9/10 mt-5 mx-auto my-0 2xl:w-3/5"},[t("img",{class:"w-full",src:j,alt:""})],-1),R=t("div",{class:"w-9/10 2xl:w-3/5 mt-20 mx-auto flex flex-col items-center justify-center"},[t("div",{class:"mtitle"},"Rule description"),t("div",{class:"sm:w-4/5 font-medium text-#78 mt-10"},[t("div",{class:""}," This is a blockchain game that uses NFT to realize the binding of in game items. Our team focus on the gamefi sector, through the construction of a large-scale fish-pond on the chain based on the concept of metaverse. Initially, there will be only 5,000 metaverse fish-ponds with each fish-pond individually contracted to players. After each game player purchases part of the fish-pond, he can obtain the NFT file representing the range and location of his fish-pond. By identifying this NFT file, the contractor of the fish-pond can regularly collect the income from the fish-pond operation, and of course, they can also resell and auctioctive contracts of the fish-ponds to obtain revenue. ")])],-1),z=t("div",{class:"w-9/10 2xl:w-3/5 mt-20 mx-auto flex flex-col items-center justify-center"},[t("div",{class:"mtitle"},"Operation tutorial"),t("div",{class:"font-medium text-#78 mt-10 flex flex-wrap md:flex-nowrap justify-between"},[t("div",{class:"bg-yellow step"},[t("div",{class:"index"},"1"),t("img",{src:B}),t("div",{class:"text"},"Confirm that there is BNB+BUSD")]),t("div",{class:"bg-teal step"},[t("div",{class:"index"},"2"),t("img",{src:I}),t("div",{class:"text"},[n("Rush to buy"),t("br"),n("quickly")])]),t("div",{class:"bg-blue step"},[t("div",{class:"index"},"3"),t("img",{src:D}),t("div",{class:"text"},[n("Payment"),t("br"),n("confirmation")])]),t("div",{class:"bg-green step"},[t("div",{class:"index"},"4"),t("img",{src:O}),t("div",{class:"text"},[n("Waiting for NFT"),t("br"),n("to arrive")])])])],-1),G={key:0,class:"text-center text-4xl mt-40"},W={key:1,class:"mt-40"},J=t("div",{class:"text-3xl text-center"},"Remaining quantity",-1),Q={class:"text-4xl text-center text-orange font-bold"},X={key:0,class:"mt-5 text-xl text-center flex flex-col items-center"},Z=n(" My Invitation "),$={class:"flex justify-center items-center"},tt={class:"text-sm break-all w-3/5 sm:w-auto"},et={key:1,class:"mt-10 flex flex-wrap justify-center"},st={class:"mx-2 w-56 sm:w-64 h-14 my-2 minput"},it={class:""},nt={key:2,class:"mt-10 text-xl text-center"},ot=t("div",{class:"mt-5 text-center"},[t("div",{class:"text-xl"},[n("BUSD Contract Address: "),t("span",{class:"text-sm"},"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56")])],-1),at={class:"flex flex-wrap justify-center my-28"},rt=t("img",{class:"w-32 sm:w-64 block",src:U},null,-1),lt={class:"ml-4 sm:text-2xl font-bold"},ct=n(" You hold:"),dt=t("br",null,null,-1),ht={class:"mt-5 text-orange text-4xl"},mt=n(" Fishpond"),ft=t("br",null,null,-1),pt=n(" NFTs "),ut=t("img",{class:"w-32 sm:w-64 block",src:P},null,-1),_t={class:"ml-4 sm:text-2xl font-bold"},vt=n(" You hold:"),xt=t("br",null,null,-1),yt={class:"mt-5 text-orange text-4xl"},wt=n(" Medal"),bt=t("br",null,null,-1),gt=n(" NFTs "),Tt={key:0,class:"fixed inset-0 flex items-center justify-center bg-shadow"},kt={class:"w-9/10 md:w-1/2 bg-white p-16 rounded-2xl "},At={class:"flex flex-wrap items-center justify-center"},Ct={class:"lg:ml-4 sm:text-2xl"},Lt={class:"font-bold text-center 3xl:text-left"},Ft=n(" You hold: "),Nt={class:"text-orange text-4xl"},St={class:"flex items-center flex-wrap mt-4 w-9/10 mx-auto"},jt=t("div",{class:"flex-shrink-0"},"Transfer to",-1),Bt={class:"w-full h-14 my-2 minput"},It={class:"flex-shrink-0 flex items-center"},Dt={class:"w-20 h-14 minput mr-2"},Ot=n(" \xD7 "),Ut={class:"flex justify-end mt-10 relative"};q();const Pt=H((i,e,a,Vt,s,c)=>{const g=f("Header"),p=f("Loading"),T=f("Footer");return l(),r(E,null,[t(g),t("div",null,[K,t("div",{class:"w-2 text-white",onClick:e[1]||(e[1]=(...o)=>c.openConsole&&c.openConsole(...o))},"."),t("div",{class:"w-2 text-white",onClick:e[2]||(e[2]=(...o)=>c.openConsole&&c.openConsole(...o))},"."),R,z,s.start?(l(),r("div",W,[J,t("div",Q,d(s.remaining)+" ponds",1),s.inviteLink?(l(),r("div",X,[Z,t("div",$,[t("div",tt,d(s.inviteLink),1),t("div",{id:"copy",class:"mbutton ml-2 w-20 h-10 text-sm","data-clipboard-action":"copy","data-clipboard-text":s.inviteLink},"Copy",8,["data-clipboard-text"])])])):y("",!0),s.inviteType?(l(),r("div",et,[t("div",st,[t("div",it,d(s.eth.utils.formatEther(s.price,0))+" BUSD \xD7",1),h(t("input",{type:"text",class:"ml-2 w-6 sm:w-16","onUpdate:modelValue":e[3]||(e[3]=o=>s.count=o)},null,512),[[m,s.count]])]),s.isLoading?(l(),r(p,{key:0,class:"w-56 h-14 my-2"})):(l(),r("div",{key:1,class:"w-56 sm:w-32 h-14 my-2 text-2xl mbutton",onClick:e[4]||(e[4]=(...o)=>c.buy&&c.buy(...o))},"GO!"))])):(l(),r("div",nt," Sorry, you are not invited. ")),ot,t("div",at,[t("div",{class:"flex items-center sm:mx-8 mb-8 p-8 hover:shadow-xl rounded-xl cursor-pointer",onClick:e[5]||(e[5]=o=>c.transfer("pond"))},[rt,t("div",lt,[ct,dt,t("div",ht,"\xD7 "+d(s.balance.pond),1),mt,ft,pt])]),t("div",{class:"flex items-center sm:mx-8 mb-8 p-8 hover:shadow-xl rounded-xl cursor-pointer",onClick:e[6]||(e[6]=o=>c.transfer("medal"))},[ut,t("div",_t,[vt,xt,t("div",yt,"\xD7 "+d(s.balance.medal),1),wt,bt,gt])])])])):(l(),r("div",G,"Coming Soon"))]),t(T),s.showTransfer?(l(),r("div",Tt,[t("div",kt,[t("div",At,[t("img",{class:"w-40 sm:w-64 mb-6 block",src:"/img/nft_"+s.transferType+".png"},null,8,["src"]),t("div",Ct,[t("div",Lt,[Ft,t("span",Nt,"\xA0\xA0\xD7 "+d(s.balance[s.transferType])+"\xA0\xA0",1),n(" "+d(s.nftName[s.transferType])+" NFTs ",1)]),t("div",St,[jt,t("div",Bt,[h(t("input",{type:"text",class:"w-full","onUpdate:modelValue":e[7]||(e[7]=o=>s.toAddress=o)},null,512),[[m,s.toAddress]])]),t("div",It,[t("div",Dt,[Ot,h(t("input",{type:"text",class:"w-full","onUpdate:modelValue":e[8]||(e[8]=o=>s.transferCount=o)},null,512),[[m,s.transferCount]])]),n(" "+d(s.nftName[s.transferType]),1)])]),t("div",Ut,[t("div",{class:"mbutton o w-36 h-14 mx-1",onClick:e[9]||(e[9]=o=>s.showTransfer=!1)},"Cancel"),s.isLoading?(l(),r(p,{key:0,class:"absolute inset-0"})):(l(),r("div",{key:1,class:"mbutton w-36 h-14 mx-1",onClick:e[10]||(e[10]=(...o)=>c.doTransfer&&c.doTransfer(...o))},"Transfer"))])])])])])):y("",!0)],64)});b.render=Pt;b.__scopeId="data-v-bbf3f734";export{b as default};
