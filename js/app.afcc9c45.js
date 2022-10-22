(function(){var e={2086:function(e,t,n){"use strict";var a=n(9242),i=n(3396),s=n.p+"img/logo.5766d9f4.png";const o=(0,i._)("img",{alt:"Vue logo",src:s},null,-1);function r(e,t,n,a,s,r){const l=(0,i.up)("HelloWorld");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,(0,i.Wm)(l,{msg:"Welcome to Your Vue.js App"})],64)}var l=n(7139);const u=e=>((0,i.dD)("data-v-9631bb12"),e=e(),(0,i.Cn)(),e),p={key:0},d=u((()=>(0,i._)("div",{class:"fontColor fontLargeSize"}," ♥ 메타마스크 있으니까 예지와 행복한 눈싸움 ♥ ",-1))),c=u((()=>(0,i._)("div",null,[(0,i._)("div",{id:"tempImage"})],-1))),y={key:0},m={key:1},f={key:0},v={key:1},_={class:"root"},b={class:"functionCard"},w=u((()=>(0,i._)("div",{class:"functionName"}," ownerOf ",-1))),g={class:"functionInputRoot"},T={class:"flex"},k=u((()=>(0,i._)("div",{class:"paramName"}," tokenId : ",-1))),h={class:"functionSubmit flex"},O={class:"functionResult"},I={class:"functionCard"},M=u((()=>(0,i._)("div",{class:"functionName"}," balanceOf ",-1))),x={class:"functionInputRoot"},C={class:"flex"},A=u((()=>(0,i._)("div",{class:"paramName"}," address : ",-1))),q={class:"functionSubmit flex"},D={class:"functionResult"},N={class:"functionCard"},B=u((()=>(0,i._)("div",{class:"functionName"}," mint ",-1))),R={class:"functionInputRoot"},S={class:"flex"},j=u((()=>(0,i._)("div",{class:"paramName"}," to : ",-1))),F={class:"flex"},U=u((()=>(0,i._)("div",{class:"paramName"}," tokenId : ",-1))),V={class:"flex"},H=u((()=>(0,i._)("div",{class:"paramName"}," uri : ",-1))),W={class:"functionSubmit flex"},z={class:"functionResult"},E={key:1};function P(e,t,n,s,o,r){return(0,i.wg)(),(0,i.iD)("div",null,[o.isInstallMetaMask?((0,i.wg)(),(0,i.iD)("div",p,[d,c,null==o.myAddress?((0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>r.connectToMetaMask&&r.connectToMetaMask(...e))},"메타마스크 연결")])):((0,i.wg)(),(0,i.iD)("div",m,[null==o.myContract?((0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("button",{onClick:t[1]||(t[1]=(...e)=>r.connectToContract&&r.connectToContract(...e))},"컨트랙트 연결")])):((0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("div",_,[(0,i._)("div",b,[w,(0,i._)("div",g,[(0,i._)("div",T,[k,(0,i.wy)((0,i._)("input",{class:"paramInput",type:"text",placeholder:"tokenId","onUpdate:modelValue":t[2]||(t[2]=e=>o.ownerOf_tokenId=e)},null,512),[[a.nr,o.ownerOf_tokenId]])])]),(0,i._)("div",h,[(0,i._)("button",{class:"submitButton",onClick:t[3]||(t[3]=(...e)=>r.requestOwnerOf&&r.requestOwnerOf(...e))},"onwerof 요청")]),(0,i._)("div",O,(0,l.zw)(o.ownerOf_result),1)]),(0,i._)("div",I,[M,(0,i._)("div",x,[(0,i._)("div",C,[A,(0,i.wy)((0,i._)("input",{class:"paramInput",type:"text",placeholder:"address","onUpdate:modelValue":t[4]||(t[4]=e=>o.balanceOf_address=e)},null,512),[[a.nr,o.balanceOf_address]])])]),(0,i._)("div",q,[(0,i._)("button",{class:"submitButton",onClick:t[5]||(t[5]=(...e)=>r.requestBalanceOf&&r.requestBalanceOf(...e))},"balanceOf 요청")]),(0,i._)("div",D,(0,l.zw)(o.balanceOf_result),1)]),(0,i._)("div",N,[B,(0,i._)("div",R,[(0,i._)("div",S,[j,(0,i.wy)((0,i._)("input",{class:"paramInput",type:"text",placeholder:"to","onUpdate:modelValue":t[6]||(t[6]=e=>o.mint_to=e)},null,512),[[a.nr,o.mint_to]])]),(0,i._)("div",F,[U,(0,i.wy)((0,i._)("input",{class:"paramInput",type:"text",placeholder:"tokenId","onUpdate:modelValue":t[7]||(t[7]=e=>o.mint_tokenId=e)},null,512),[[a.nr,o.mint_tokenId]])]),(0,i._)("div",V,[H,(0,i.wy)((0,i._)("input",{class:"paramInput",type:"text",placeholder:"uri","onUpdate:modelValue":t[8]||(t[8]=e=>o.mint_uri=e)},null,512),[[a.nr,o.mint_uri]])])]),(0,i._)("div",W,[(0,i._)("button",{class:"submitButton",onClick:t[9]||(t[9]=(...e)=>r.requestMint&&r.requestMint(...e))},"mint 요청")]),(0,i._)("div",z,(0,l.zw)(o.mint_result),1)])])]))]))])):((0,i.wg)(),(0,i.iD)("div",E," 메타 마스크 설치안됨 "))])}var Y=n(6141),Z=n(6796),J=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"approved","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"uri","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"uri","type":"string"}],"name":"setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"_name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenSymbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'),L={name:"HelloWorld",props:{msg:String},data(){return{isInstallMetaMask:null!=window.ethereum&&1==window.ethereum.isMetaMask,myAddress:null,myContract:null,ownerOf_tokenId:null,ownerOf_result:null,balanceOf_address:null,balanceOf_result:null,mint_to:null,mint_tokenId:null,mint_uri:null,mint_result:null}},methods:{async connectToMetaMask(){console.log("click connectToMetaMask");var e=await window.ethereum.request({method:"eth_requestAccounts"});console.log(e),e.length>0&&(this.myAddress=e[0])},connectToContract(){console.log("click connectToContract");var e="0x97119eCbD6947E0d21D2865Ab90d5b603439Bb51",t=new Y.Q(window.ethereum),n=t.getSigner();this.myContract=new Z.CH(e,J,n),console.log(this.myContract)},async requestOwnerOf(){console.log("click requestOwnerof"),console.log(this.ownerOf_tokenId),this.ownerOf_result=await this.myContract.ownerOf(this.ownerOf_tokenId),console.log(this.ownerOf_result)},async requestBalanceOf(){console.log("click requestBalanceof"),console.log(this.balanceOf_address),this.balanceOf_result=await this.myContract.balanceOf(this.balanceOf_address),console.log(this.balanceOf_result)},async requestMint(){console.log("click requestMint"),console.log(this.mint_to),console.log(this.mint_tokenId),console.log(this.mint_uri),this.mint_result=await this.myContract.mint(this.mint_to,this.mint_tokenId,this.mint_uri),console.log(this.mint_result)}}},Q=n(89);const G=(0,Q.Z)(L,[["render",P],["__scopeId","data-v-9631bb12"]]);var K=G,X={name:"App",components:{HelloWorld:K}};const $=(0,Q.Z)(X,[["render",r]]);var ee=$;(0,a.ri)(ee).mount("#app")},6601:function(){}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var s=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,a,i,s){if(!a){var o=1/0;for(p=0;p<e.length;p++){a=e[p][0],i=e[p][1],s=e[p][2];for(var r=!0,l=0;l<a.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(r=!1,s<o&&(o=s));if(r){e.splice(p--,1);var u=i();void 0!==u&&(t=u)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[a,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,s,o=a[0],r=a[1],l=a[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var p=l(n)}for(t&&t(a);u<o.length;u++)s=o[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(p)},a=self["webpackChunkfront"]=self["webpackChunkfront"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2086)}));a=n.O(a)})();
//# sourceMappingURL=app.afcc9c45.js.map