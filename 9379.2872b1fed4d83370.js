"use strict";(self.webpackChunkintswap_frontend=self.webpackChunkintswap_frontend||[]).push([[9379,1621],{1621:(Z,b,s)=>{s.d(b,{D:()=>p});var c=s(2085),u=s(408),_=s(8499),d=s(5955);function p(v){return(0,c.e)((T,g)=>{let h=!1,l=null,t=null;const x=()=>{if(t?.unsubscribe(),t=null,h){h=!1;const f=l;l=null,g.next(f)}};T.subscribe((0,_.x)(g,f=>{t?.unsubscribe(),h=!0,l=f,t=(0,_.x)(g,x,u.Z),(0,d.Xf)(v(f)).subscribe(t)},()=>{x(),g.complete()},void 0,()=>{l=t=null}))})}},2544:(Z,b,s)=>{s.r(b),s.d(b,{AddModule:()=>W});var c=s(8692),u=s(7976),_=s(8239),d=s(2024),p=s(2673),v=s(4121),T=s(1528),g=s(2147),h=s(3151),l=s(3349),t=s(4537),x=s(8696),f=s(9376),P=s(3755),S=s(9869),U=s(4602),N=s(1730),k=s(3331),C=s(9638),y=s(7327),A=s(92),O=s(132),M=s(5372),w=s(9369);function q(i,a){1&i&&t.GkF(0)}function I(i,a){1&i&&t.GkF(0)}function z(i,a){1&i&&(t.TgZ(0,"div",26)(1,"mat-icon",27),t._uU(2,"autorenew"),t.qZA()())}function V(i,a){1&i&&(t.TgZ(0,"mat-icon",30),t._uU(1," autorenew "),t.qZA())}function F(i,a){1&i&&(t.TgZ(0,"mat-icon",30),t._uU(1," autorenew "),t.qZA())}function L(i,a){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",28),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.approveNft())}),t.YNc(2,V,2,0,"mat-icon",29),t._uU(3),t.qZA(),t.TgZ(4,"button",28),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.approveToken())}),t.YNc(5,F,2,0,"mat-icon",29),t._uU(6),t.qZA(),t.BQk()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("disabled",e.isNFTApproved),t.xp6(1),t.Q6J("ngIf",e.isApprovingNFT),t.xp6(1),t.hij("Approve ",e.collectionSymbol," "),t.xp6(1),t.Q6J("disabled",e.isTokenApproved),t.xp6(1),t.Q6J("ngIf",e.isApprovingToken),t.xp6(1),t.hij("Approve ",e.tokenSymbol," ")}}function B(i,a){1&i&&(t.TgZ(0,"mat-icon",30),t._uU(1,"autorenew "),t.qZA())}function J(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(),r=t.MAs(63);return t.KtG(o.openConfirmDialog(r))}),t.YNc(1,B,2,0,"mat-icon",29),t._uU(2),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("disabled",e.isQuerying||e.isAdding),t.xp6(1),t.Q6J("ngIf",e.isAdding||e.isQuerying),t.xp6(1),t.hij("",e.isQuerying?"Querying...":e.pair?"Add Liquidity":"Create and Add Liquidity"," ")}}function D(i,a){1&i&&(t.TgZ(0,"mat-icon",43),t._uU(1,"check_circle "),t.qZA())}const j=function(i){return{"selected-tokenId":i}};function Q(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",40),t.NdJ("click",function(){const r=t.CHM(e).$implicit,m=t.oxw(3);return t.KtG(m.addOrRemoveTokenId(r.id.tokenId))}),t.YNc(1,D,2,0,"mat-icon",41),t._UZ(2,"img",42),t.TgZ(3,"div"),t._uU(4),t.qZA()()}if(2&i){const e=a.$implicit,n=t.oxw(3);t.Q6J("ngClass",t.VKq(5,j,n.isSelectedTokenId(e.id.tokenId))),t.xp6(1),t.Q6J("ngIf",n.isSelectedTokenId(e.id.tokenId)),t.xp6(1),t.Q6J("src",null!=e&&null!=e.media&&null!=e.media[0]&&e.media[0].gateway?e.media[0].gateway:"/assets/imgs/mockNft.png",t.LSH)("alt",e.title),t.xp6(2),t.Oqu("#"+n.hexToString(e.id.tokenId))}}function E(i,a){if(1&i&&(t.TgZ(0,"div",38),t.YNc(1,Q,5,7,"div",39),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.userNftList)("ngForTrackBy",e.trackByNftItems)}}function $(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",31)(1,"span",13),t._uU(2,"Amount"),t.qZA(),t.TgZ(3,"nz-input-number",32),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.nftValue=o)})("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.updateTokenValue(o))}),t.qZA(),t.TgZ(4,"div",33),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.openSearchTokenOrCollectionDialog(1))}),t._UZ(5,"img",34)(6,"div",4),t.TgZ(7,"span"),t._uU(8),t.qZA(),t._UZ(9,"div",4),t.qZA(),t.TgZ(10,"nz-slider",35),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.nftValue=o)})("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.updateTokenValue(o))}),t.qZA(),t.TgZ(11,"div",36),t._uU(12),t.qZA()(),t.YNc(13,E,2,2,"ng-template",null,37,t.W1O)}if(2&i){const e=t.MAs(14),n=t.oxw();t.Q6J("nzPopoverContent",e)("nzPopoverVisible",n.userNftBalance>0&&n.showPopover)("nzPopoverTrigger",null),t.xp6(3),t.Q6J("nzSize","large")("nzMin",0)("ngModel",n.nftValue)("nzPrecision",0),t.xp6(5),t.Oqu(n.collectionSymbol),t.xp6(2),t.Q6J("ngModel",n.nftValue)("nzMax",n.userNftBalance),t.xp6(2),t.hij("Balance: ",n.userNftBalance," ")}}function Y(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",44)(1,"span",13),t._uU(2,"Price"),t.qZA(),t.TgZ(3,"nz-input-number",45),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.price=o)})("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.onPriceChange(o))}),t.qZA(),t.TgZ(4,"div",33),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.openSearchTokenOrCollectionDialog(1))}),t._UZ(5,"img",34)(6,"div",4),t.TgZ(7,"span"),t._uU(8),t.qZA(),t._UZ(9,"div",4),t.qZA(),t.TgZ(10,"div",46),t._uU(11," x "),t.TgZ(12,"span"),t._uU(13),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"div",47),t._uU(16),t.ALo(17,"number"),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(3),t.Q6J("nzSize","large")("nzMin",.01)("ngModel",e.price)("nzDisabled",null!=e.pair),t.xp6(5),t.Oqu(e.tokenSymbol),t.xp6(5),t.Oqu(e.nftValue),t.xp6(1),t.hij(" ",e.collectionSymbol,""),t.xp6(2),t.hij("Balance: ",t.xi3(17,8,e.userTokenBalance,"1.2-4")," ")}}function G(i,a){1&i&&(t.TgZ(0,"mat-icon",55),t._uU(1,"autorenew "),t.qZA())}function K(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",48)(1,"span",49),t._uU(2,"Add Liquidity"),t.qZA(),t._UZ(3,"div",50),t.TgZ(4,"span",51),t._uU(5),t.qZA(),t.TgZ(6,"span",52),t._uU(7),t.qZA(),t.TgZ(8,"span",51),t._uU(9),t.qZA(),t.TgZ(10,"span",52),t._uU(11),t.ALo(12,"number"),t.qZA(),t.TgZ(13,"span",51),t._uU(14,"Get Lp Token :"),t.qZA(),t.TgZ(15,"span",52),t._uU(16),t.ALo(17,"number"),t.qZA(),t.TgZ(18,"span",51),t._uU(19,"Share of Pool :"),t.qZA(),t.TgZ(20,"span",52),t._uU(21),t.ALo(22,"number"),t.qZA(),t.TgZ(23,"button",53),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.confirmAdd())}),t.YNc(24,G,2,0,"mat-icon",54),t._uU(25),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(5),t.hij("Add ",e.collectionSymbol," :"),t.xp6(2),t.Oqu(e.nftValue),t.xp6(2),t.hij("Add ",e.tokenSymbol," :"),t.xp6(2),t.Oqu(t.xi3(12,9,e.tokenValue,"1.2-2")),t.xp6(5),t.Oqu(t.xi3(17,12,e.lpTokenOutput,"1.2-4")),t.xp6(5),t.hij("",t.xi3(22,15,e.shareOutput,"1.2-4"),"%"),t.xp6(2),t.Q6J("disabled",e.parseInt(e.nftValue)<=0||e.isAdding),t.xp6(1),t.Q6J("ngIf",e.isAdding),t.xp6(1),t.hij("",e.pair?"Add Liquidity":"Create and Add Liquidity"," ")}}const R=[{path:"",component:(()=>{class i{constructor(e,n,o,r,m,X,tt,et,nt){this.location=e,this.route=n,this.router=o,this.matDialog=r,this.cacheService=m,this.httpService=X,this.graphqlService=tt,this.accountService=et,this.web3Service=nt,this.nftValue="0",this.tokenValue="0",this.price="0.1",this.userNftBalance=0,this.userTokenBalance="0",this.userNftList=[],this.lpTokenOutput="0",this.isLoadingAddLiquidityInfo=!0,this.isNFTApproved=!1,this.isTokenApproved=!1,this.isQuerying=!1,this.isApprovingToken=!1,this.isApprovingNFT=!1,this.isAdding=!1,this.selectedTokenIds=[],this.userLiquidity="0",this.shareOutput=0,this.showPopover=!0,this.queryNftValue$=new v.X("0")}ngOnInit(){var e=this;this.pair$=this.route.paramMap.pipe((0,T.w)(n=>(this.nftAddress=n.get("nftAddress")||void 0,this.baseTokenAddress=n.get("baseTokenAddress")||void 0,this.cacheService.getPairAddress(this.nftAddress,this.baseTokenAddress))),(0,g.x)((n,o)=>n?.address==o?.address&&n?.price==o?.price&&n?.nftAmount==o?.nftAmount)),this.subPair=this.pair$.subscribe(function(){var n=(0,_.Z)(function*(o){e.pair=o,o?(e.price=e.formatTokenValue(o.price,o.token.decimals),e.tokenSymbol=o.token.symbol,e.collectionSymbol=o.collection.symbol,e.baseTokenDecimals=o.token.decimals,e.fetchUserLiquidity()):(e.tokenSymbol=e.baseTokenAddress&&(yield e.web3Service.getTokenSymbol(e.baseTokenAddress))[0],e.collectionSymbol=e.nftAddress&&(yield e.web3Service.getTokenSymbol(e.nftAddress))[0],e.baseTokenDecimals=e.baseTokenAddress&&(yield e.web3Service.getTokenDecimals(e.baseTokenAddress))[0]),e.fetchUserNFTs(),e.fetchUserTokenBalance()});return function(o){return n.apply(this,arguments)}}()),this.queryNftValueSub=this.queryNftValue$.pipe((0,h.b)(500),(0,T.w)(n=>this.pair&&parseInt(this.nftValue)>0?(this.isLoadingAddLiquidityInfo=!0,this.web3Service.invokeContract("IntswapV1Pair","getAddLiquidityInfo",[n],this.pair.address).then(o=>({deltaLPTokenAmount:o[0],deltaBaseToken:o[1]}))):!this.pair&&parseInt(this.nftValue)>0&&this.price?(this.isLoadingAddLiquidityInfo=!0,this.web3Service.invokeContract("IntswapV1Factory","getDefaultInitLiquidityInfo",[n,(0,p.parseUnits)(Math.sqrt(parseFloat(this.price))+"","18").toString()]).then(o=>({deltaLPTokenAmount:o[1],deltaBaseToken:o[2]}))):Promise.resolve({deltaLPTokenAmount:"0",deltaBaseToken:"0"}))).subscribe(n=>{this.pair&&parseInt(this.nftValue)>0?(this.tokenValue=this.formatTokenValue(n.deltaBaseToken,this.pair.token.decimals),this.lpTokenOutput=this.formatTokenValue(n.deltaLPTokenAmount,"18"),this.shareOutput=d.O$.from(this.userLiquidity).add(d.O$.from(n.deltaLPTokenAmount)).mul(d.O$.from("10000")).div(d.O$.from(this.pair.liquidity)).toNumber()/100):this.baseTokenDecimals&&parseInt(this.nftValue)>0&&(this.tokenValue=this.formatTokenValue(n.deltaBaseToken,this.baseTokenDecimals),this.lpTokenOutput=this.formatTokenValue(n.deltaLPTokenAmount,"18"),this.shareOutput=100),this.isLoadingAddLiquidityInfo=!1})}fetchUserTokenBalance(){this.accountBalanceSub?.unsubscribe(),this.accountBalanceSub=this.accountService.account$.subscribe(e=>{e&&this.baseTokenAddress&&this.web3Service.invokeContract("ERC20","balanceOf",[e],this.baseTokenAddress).then(n=>{this.baseTokenDecimals&&(this.userTokenBalance=this.formatTokenValue(n[0],this.baseTokenDecimals),this.fetchAllowance())})})}onPriceChange(e){e>0&&this.queryNftValue$.next(this.nftValue)}updateTokenValue(e){e>=0&&(this.queryNftValue$.next(e),this.updateSelectedTokenIds(e)),0==e&&(this.nftValue="0",this.tokenValue="0",this.lpTokenOutput="0")}updateSelectedTokenIds(e){this.selectedTokenIds=this.userNftList.slice(0,e).map(n=>n.id.tokenId)}isSelectedTokenId(e){return this.selectedTokenIds.includes(e)}addOrRemoveTokenId(e){this.isSelectedTokenId(e)?this.selectedTokenIds.splice(this.selectedTokenIds.indexOf(e),1):this.selectedTokenIds.push(e),this.nftValue=this.selectedTokenIds.length+"",this.queryNftValue$.next(this.nftValue)}formatTokenValue(e,n){return(0,p.formatUnits)(e,n)}fetchUserLiquidity(){this.suerLiquiditySub?.unsubscribe(),this.suerLiquiditySub=this.accountService.account$.subscribe(e=>{e&&this.graphqlService.fetchUserLiquidity(e,this.pair.address).then(({data:n})=>{n.liquidityInPair&&(this.userLiquidity=n.liquidityInPair.liquidity,this.shareOutput=d.O$.from(this.userLiquidity).add(d.O$.from((0,p.parseUnits)(this.lpTokenOutput,"18"))).mul(d.O$.from("10000")).div(d.O$.from(this.pair.liquidity)).toNumber()/100)})})}fetchUserNFTs(){this.accountNFTsSub?.unsubscribe(),this.accountNFTsSub=this.accountService.account$.subscribe(e=>{e&&this.nftAddress&&this.httpService.fetchNFTsOfCollectionByOwnerAddress(e,this.nftAddress,!0).then(n=>{this.userNftList=n.ownedNfts,this.userNftBalance=n.totalCount})})}trackByNftItems(e,n){return n.contract.address+""+n.id.tokenId}parseInt(e){return parseInt(e)}parseFloat(e){return parseFloat(e)}goBack(){this.location.back()}fetchAllowance(){this.isQuerying=!0,this.isTokenApproved=!1,this.isNFTApproved=!1,this.accountAllowanceSub?.unsubscribe(),this.accountAllowanceSub=this.accountService.account$.subscribe(e=>{e&&this.pair?(this.web3Service.invokeContract("ERC20","allowance",[e,this.pair.address],this.pair.token.address).then(n=>this.isTokenApproved=d.O$.from(n[0]).gte(d.O$.from((0,p.parseUnits)(this.userTokenBalance,this.pair?.token.decimals)))).finally(()=>this.isQuerying=!1),this.web3Service.invokeContract("ERC721","isApprovedForAll",[e,this.pair.address],this.pair.collection.address).then(n=>this.isNFTApproved=n[0]).finally(()=>this.isQuerying=!1)):e&&!this.pair&&(this.web3Service.invokeContract("ERC20","allowance",[e,l.wE.IntswapV1Factory],this.baseTokenAddress).then(n=>this.isTokenApproved=d.O$.from(n[0]).gte(d.O$.from((0,p.parseUnits)(this.userTokenBalance,this.baseTokenDecimals)))).finally(()=>this.isQuerying=!1),this.web3Service.invokeContract("ERC721","isApprovedForAll",[e,l.wE.IntswapV1Factory],this.nftAddress).then(n=>this.isNFTApproved=n[0]).finally(()=>this.isQuerying=!1))})}hexToString(e){return d.O$.from(e).toString()}openConfirmDialog(e){this.confirmDialog=this.matDialog.open(e,{autoFocus:!1})}confirmAdd(){this.confirmDialog&&(this.confirmDialog.disableClose=!0),this.isAdding=!0,(this.pair?this.web3Service.invokeContract("IntswapV1Pair","addLiquidityWithSpecificNFT",[this.selectedTokenIds,(0,p.parseUnits)(this.tokenValue,this.pair.token.decimals).toString()],this.pair.address):this.web3Service.invokeContract("IntswapV1Factory","createPairAndInitialize",[this.nftAddress,this.selectedTokenIds,(0,p.parseUnits)(Math.sqrt(parseFloat(this.price))+"","18").toString()])).then(e=>{this.confirmDialog?.close(),this.nftValue="0",this.fetchUserNFTs(),this.fetchUserTokenBalance()}).finally(()=>{this.confirmDialog&&(this.confirmDialog.disableClose=!1),this.isAdding=!1,this.selectedTokenIds=[]})}approveToken(){this.isApprovingToken=!0,this.web3Service.invokeContract("ERC20","approve",[this.pair?this.pair.address:l.wE.IntswapV1Factory,l.fV],this.baseTokenAddress).then(()=>this.isTokenApproved=!0).finally(()=>this.isApprovingToken=!1)}approveNft(){this.isApprovingNFT=!0,this.web3Service.invokeContract("ERC721","setApprovalForAll",[this.pair?this.pair.address:l.wE.IntswapV1Factory,"true"],this.nftAddress).then(()=>this.isNFTApproved=!0).finally(()=>this.isApprovingNFT=!1)}openSearchTokenOrCollectionDialog(e){s.e(8592).then(s.bind(s,2928)).then(({SearchTokenDialogComponent:n})=>{this.showPopover=!1;const o=this.matDialog.open(n);o.componentInstance.tokenType=e,o.afterClosed().subscribe(r=>{if(this.showPopover=!0,r)switch(e){case 0:this.switchToken(r.address,r.symbol,r.decimals);break;case 1:this.switchNft(r.address,r.symbol)}})})}switchNft(e,n){e&&(this.router.navigate(this.baseTokenAddress?["app/add/",e,this.baseTokenAddress]:["app/add/",e]),this.collectionSymbol=n)}switchToken(e,n,o){e&&(this.baseTokenAddress=e,this.tokenSymbol=n,this.baseTokenDecimals=o,this.router.navigate(["app/add/",this.nftAddress,this.baseTokenAddress]))}ngOnDestroy(){this.subPair?.unsubscribe(),this.queryNftValueSub?.unsubscribe(),this.queryNftValueSub?.unsubscribe(),this.accountBalanceSub?.unsubscribe(),this.accountAllowanceSub?.unsubscribe(),this.accountNFTsSub?.unsubscribe(),this.suerLiquiditySub?.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c.Ye),t.Y36(u.gz),t.Y36(u.F0),t.Y36(x.uw),t.Y36(f.Q),t.Y36(P.O),t.Y36(S.J),t.Y36(U.B),t.Y36(N.U))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-add"]],decls:64,vars:26,consts:[[1,"card-wrapper"],[1,"card-header"],[1,"back-btn"],["mat-icon-button","",3,"click"],[1,"spacer"],[1,"card-title"],[1,"setting-btn"],[1,"divider"],[4,"ngTemplateOutlet"],[1,"switch-icon"],[3,"nzIndicator","nzDelay","nzSpinning"],["indicatorTemplate",""],[1,"result-wrapper"],[1,"input-label"],[1,"result-amount"],[1,"symbol"],[2,"color","rgb(255, 192, 222)"],[1,"result-divider"],[1,"result-info"],[1,"result-info-value"],[1,"result-info-label"],[4,"ngIf"],["mat-button","","class","swap-btn",3,"disabled","click",4,"ngIf"],["nftInputTemplate",""],["tokenInputTemplate",""],["confirm",""],[2,"display","flex","width","100%","height","100%","align-items","center","justify-content","center"],["color","primary",1,"spin-icon"],["mat-button","",1,"swap-btn",3,"disabled","click"],["color","warn","class","spin-icon querying-icon",4,"ngIf"],["color","warn",1,"spin-icon","querying-icon"],["nz-popover","","nzPopoverPlacement","rightTop",1,"input-wrapper",3,"nzPopoverContent","nzPopoverVisible","nzPopoverTrigger"],["nzBorderless","","nzPrecisionMode","cut",1,"nft-input",3,"nzSize","nzMin","ngModel","nzPrecision","ngModelChange"],[1,"nft-menu-btn",3,"click"],["src","assets/imgs/logo1.png","alt","icon"],[1,"nft-slider",3,"ngModel","nzMax","ngModelChange"],[1,"nft-balance"],["nftList",""],[1,"nft-list"],["class","nft-list-item",3,"ngClass","click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"nft-list-item",3,"ngClass","click"],["class","selected-tokenId-icon","color","warn",4,"ngIf"],[3,"src","alt"],["color","warn",1,"selected-tokenId-icon"],[1,"input-wrapper",2,"cursor","no-drop"],["nzBorderless","",1,"nft-input",3,"nzSize","nzMin","ngModel","nzDisabled","ngModelChange"],[1,"price-nft-amount"],[1,"token-balance"],[1,"confirm-info",2,"background","rgb(255, 255, 255)"],[2,"min-height","24px","font-size","24px","font-weight","bolder","color","rgb(87, 87, 87)","grid-column-start","span 2"],[1,"result-divider",2,"grid-column-start","span 2","margin-left","0","margin-right","0"],[1,"confirm-info-label"],[1,"confirm-info-value"],["mat-button","",1,"confirm-btn",2,"grid-column-start","span 2","width","80%","justify-self","center","align-self","center","min-height","36px","font-size","14px","margin-top","12px",3,"disabled","click"],["color","warn","class","spin-icon querying-icon","style","top: 6px; left:12px;",4,"ngIf"],["color","warn",1,"spin-icon","querying-icon",2,"top","6px","left","12px"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),t.NdJ("click",function(){return n.goBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"arrow_back"),t.qZA()()(),t._UZ(6,"div",4),t.TgZ(7,"div",5)(8,"span"),t._uU(9,"Add Liquidity"),t.qZA()(),t._UZ(10,"div",4)(11,"div",6),t.qZA(),t._UZ(12,"div",7),t.YNc(13,q,1,0,"ng-container",8),t.TgZ(14,"div",9)(15,"mat-icon"),t._uU(16,"add"),t.qZA()(),t.YNc(17,I,1,0,"ng-container",8),t.TgZ(18,"div",9)(19,"mat-icon"),t._uU(20,"south"),t.qZA()(),t.TgZ(21,"nz-spin",10),t.YNc(22,z,3,0,"ng-template",null,11,t.W1O),t.TgZ(24,"div",12)(25,"span",13),t._uU(26,"Total"),t.qZA(),t.TgZ(27,"div",14),t._uU(28),t.TgZ(29,"span",15),t._uU(30),t.qZA(),t.TgZ(31,"span",16),t._uU(32," + "),t.qZA(),t._uU(33),t.ALo(34,"number"),t.TgZ(35,"span",15),t._uU(36),t.qZA()(),t._UZ(37,"div",17),t.TgZ(38,"div",18)(39,"div",19),t._uU(40),t.ALo(41,"number"),t.qZA(),t.TgZ(42,"div",20),t._uU(43,"Price"),t.qZA()(),t.TgZ(44,"div",18)(45,"div",19),t._uU(46),t.ALo(47,"number"),t.qZA(),t.TgZ(48,"div",20),t._uU(49,"Get Lp Token"),t.qZA()(),t.TgZ(50,"div",18)(51,"div",19),t._uU(52),t.ALo(53,"number"),t.qZA(),t.TgZ(54,"div",20),t._uU(55,"Share of Pool"),t.qZA()()()(),t.YNc(56,L,7,6,"ng-container",21),t.YNc(57,J,3,3,"button",22),t.qZA(),t.YNc(58,$,15,11,"ng-template",null,23,t.W1O),t.YNc(60,Y,18,11,"ng-template",null,24,t.W1O),t.YNc(62,K,26,18,"ng-template",null,25,t.W1O)),2&e){const o=t.MAs(23),r=t.MAs(59),m=t.MAs(61);t.xp6(13),t.Q6J("ngTemplateOutlet",r),t.xp6(4),t.Q6J("ngTemplateOutlet",m),t.xp6(4),t.Q6J("nzIndicator",o)("nzDelay",200)("nzSpinning",n.isLoadingAddLiquidityInfo),t.xp6(7),t.hij("",n.nftValue," "),t.xp6(2),t.Oqu(n.collectionSymbol),t.xp6(3),t.hij(" ",t.xi3(34,14,n.tokenValue,"1.2-2")," "),t.xp6(3),t.Oqu(n.tokenSymbol),t.xp6(4),t.Oqu(t.xi3(41,17,n.price,"1.2-2")),t.xp6(6),t.Oqu(t.xi3(47,20,n.lpTokenOutput,"1.2-2")),t.xp6(6),t.hij("",t.xi3(53,23,n.shareOutput,"1.2-2"),"%"),t.xp6(4),t.Q6J("ngIf",!(n.isQuerying||n.isNFTApproved&&n.isTokenApproved)),t.xp6(1),t.Q6J("ngIf",n.isQuerying||n.isNFTApproved&&n.isTokenApproved)}},dependencies:[c.mk,c.sg,c.O5,c.tP,k.Hw,C.lW,y._V,A.JJ,A.On,O.lU,M.jS,w.W,c.JJ],styles:[".card-wrapper[_ngcontent-%COMP%]{position:relative;max-width:420px;width:100%;border-radius:16px;border:1px solid rgba(94,104,135,.24);margin-top:1rem;margin-left:auto;margin-right:auto;min-height:60vh;background:#fff;padding:12px}.card-header[_ngcontent-%COMP%]{width:100%;height:48px;display:flex;flex-direction:row;justify-content:center;align-items:center}.card-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;font-weight:700}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.setting-btn[_ngcontent-%COMP%]{min-width:40px}.divider[_ngcontent-%COMP%]{height:1px;width:100%;margin:8px 0 32px;background:linear-gradient(90deg,#ff00d0 0%,#ffa600 100%)}.input-wrapper[_ngcontent-%COMP%]{position:relative;min-height:96px;width:100%;border-radius:16px;background:rgba(243,243,243,.3);border:2px solid rgba(94,104,135,0);transition:all .2s;display:grid;grid-template-columns:2fr 3fr 2fr;column-gap:12px;justify-items:center;align-items:center;box-sizing:border-box;padding:12px 12px 0}.input-wrapper[_ngcontent-%COMP%]:hover{border:2px solid rgba(228,178,201,.24)}.input-wrapper[_ngcontent-%COMP%]:hover   .input-label[_ngcontent-%COMP%]{border:2px solid rgba(228,178,201,.4)}[_nghost-%COMP%]     .ant-input-number-handler{border:none!important}[_nghost-%COMP%]     .ant-input-number-disabled{background:transparent}.nft-list[_ngcontent-%COMP%]{width:25vw;height:40vh}.nft-input[_ngcontent-%COMP%]{width:100%;font-size:28px;color:#7f7f7f;grid-column-start:span 2}.nft-menu-btn[_ngcontent-%COMP%]{width:100%;border-radius:16px;background:linear-gradient(45deg,#febae6 0%,#f9e1b4 100%);display:flex;justify-content:center;align-items:center;flex-direction:row;min-height:36px;padding:12px;cursor:pointer}.nft-menu-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px}.nft-menu-btn[_ngcontent-%COMP%]:hover{background:linear-gradient(45deg,#f7d8fd 0%,#f9e6c2 100%)}.nft-slider[_ngcontent-%COMP%]{width:100%;margin:0 24px 0 36px;grid-column-start:span 2}[_nghost-%COMP%]     .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open){border-color:#ffe6b8}[_nghost-%COMP%]     .ant-slider-track{background:linear-gradient(45deg,#f7d8fd 0%,#f9e6c2 100%)}[_nghost-%COMP%]     .ant-slider-handle{border:2px solid #ffa3da}.nft-balance[_ngcontent-%COMP%]{justify-self:end}.price-nft-amount[_ngcontent-%COMP%]{justify-self:start;padding:0 12px}.price-nft-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff5fb7}.token-balance[_ngcontent-%COMP%]{grid-column-start:span 2;justify-self:end}.switch-icon[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;margin:12px 0}.switch-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:linear-gradient(45deg,#f3bffc 0%,#ffe6b9 100%)}.switch-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.swap-info[_ngcontent-%COMP%]{width:100%;padding:12px;box-sizing:border-box;display:grid;row-gap:12px;grid-template-columns:2fr 3fr;font-size:18px}.swap-info-label[_ngcontent-%COMP%]{width:100%;justify-self:start;align-self:center}.swap-info-value[_ngcontent-%COMP%]{justify-self:end;align-self:center}.swap-btn[_ngcontent-%COMP%]{width:100%;min-height:72px;border-radius:16px;background:linear-gradient(45deg,#ffb6db 0%,#f9d4af 100%);color:#fff;font-size:36px;font-weight:bolder;margin:12px 0}.result-wrapper[_ngcontent-%COMP%]{position:relative;min-height:48px;width:100%;border-radius:16px;background:rgba(243,243,243,.3);border:2px solid rgba(94,104,135,0);transition:all .2s;display:grid;grid-template-columns:1fr 1fr 1fr;column-gap:12px;row-gap:12px;justify-items:center;align-items:center;box-sizing:border-box;padding:12px}.result-wrapper[_ngcontent-%COMP%]:hover{border:2px solid rgba(228,178,201,.24)}.result-wrapper[_ngcontent-%COMP%]:hover   .input-label[_ngcontent-%COMP%]{border:2px solid rgba(228,178,201,.4)}.input-label[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;left:12px;top:-18px;color:#ff5fb7;font-weight:bolder;font-size:18px;background:rgb(251,251,251);border-radius:16px;padding:0 12px;border:2px solid rgba(228,178,201,.24);transition:all .2s}.result-amount[_ngcontent-%COMP%]{grid-column-start:span 3;justify-self:center;align-self:center;min-height:48px;font-size:28px;font-weight:bolder;color:#575757}.result-amount[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{font-size:18px;color:#7f7f7f}.result-info[_ngcontent-%COMP%]{color:#7f7f7f;display:flex;align-items:center;justify-content:center;flex-direction:column}.result-info[_ngcontent-%COMP%]   .result-info-value[_ngcontent-%COMP%]{color:#575757}.result-divider[_ngcontent-%COMP%]{grid-column-start:span 3;height:1px;width:100%;margin:0 24px;background:linear-gradient(90deg,#ffe9fb 0%,#fff3dc 100%)}.nft-list[_ngcontent-%COMP%]{width:25vw;max-height:50vh;overflow-x:hidden;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;row-gap:6px;column-gap:6px;padding:12px;margin:0 -12px}.nft-list-item[_ngcontent-%COMP%]{width:100%;height:15vh;display:flex;align-items:center;justify-content:center;flex-direction:column;border:2px solid;border-image:linear-gradient(135deg,#fce6be 0%,#f3c4ff 100%) 1;overflow:hidden;box-sizing:border-box;position:relative;cursor:pointer;transition:all .2s}.nft-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:12vh;margin-bottom:12px}.nft-list-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;height:32px;text-align:center;overflow:hidden;text-overflow:ellipsis}.nft-list-item[_ngcontent-%COMP%]:hover{transform:scale(1.1);border-image:linear-gradient(135deg,#ffcb82 0%,#fd87ff 100%) 1;background:#fff;z-index:5}.selected-tokenId[_ngcontent-%COMP%]{border-image:linear-gradient(135deg,#feb856 0%,#fc64ff 100%) 1}.selected-tokenId-icon[_ngcontent-%COMP%]{position:absolute;top:4px;right:4px;background:#fff;border-radius:50%}.spin-icon[_ngcontent-%COMP%]{transform:rotate(45deg);animation:rotate 1.2s infinite linear}.confirm-info[_ngcontent-%COMP%]{margin:24px 0;width:100%;padding:12px;box-sizing:border-box;display:grid;grid-template-columns:2fr 3fr;font-size:18px;border-radius:16px;background:rgba(243,243,243,.3);border:2px solid rgba(94,104,135,0);transition:all .2s}.confirm-info[_ngcontent-%COMP%]:hover{border:2px solid rgba(228,178,201,.24)}.confirm-info-label[_ngcontent-%COMP%]{width:100%;justify-self:start;align-self:center}.confirm-info-value[_ngcontent-%COMP%]{justify-self:end;align-self:center}.confirm-btn[_ngcontent-%COMP%]{position:relative;width:100%;min-height:72px;border-radius:16px;background:linear-gradient(45deg,#ffb6db 0%,#fadba2 100%);color:#fff;font-size:36px;font-weight:bolder;margin-bottom:12px}.querying-icon[_ngcontent-%COMP%]{position:absolute;left:24px;top:24px}@keyframes rotate{to{transform:rotate(405deg)}}"]}),i})()}];let H=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.Bz.forChild(R),u.Bz]}),i})(),W=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.ez,H,k.Ps,C.ot,y.Zf,A.u5,O.$6,M.N3,w.j]}),i})()}}]);