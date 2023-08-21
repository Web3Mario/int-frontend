"use strict";(self.webpackChunkintswap_frontend=self.webpackChunkintswap_frontend||[]).push([[8718],{18718:(Ut,H,s)=>{s.r(H),s.d(H,{CollectionsModule:()=>It});var p=s(88692),y=s(7976),Z=s(8239),C=s(92673),t=s(64537),U=s(38954),B=s(74929),L=s(35436),v=s(1379),N=s(9779),F=s(21860),r=s(14091);const Y=["mat-sort-header",""];function V(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",3),t.NdJ("@arrowPosition.start",function(){t.CHM(e);const a=t.oxw();return t.KtG(a._disableViewStateAnimation=!0)})("@arrowPosition.done",function(){t.CHM(e);const a=t.oxw();return t.KtG(a._disableViewStateAnimation=!1)}),t._UZ(1,"div",4),t.TgZ(2,"div",5),t._UZ(3,"div",6)(4,"div",7)(5,"div",8),t.qZA()()}if(2&o){const e=t.oxw();t.Q6J("@arrowOpacity",e._getArrowViewState())("@arrowPosition",e._getArrowViewState())("@allowChildren",e._getArrowDirectionState()),t.xp6(2),t.Q6J("@indicator",e._getArrowDirectionState()),t.xp6(1),t.Q6J("@leftPointer",e._getArrowDirectionState()),t.xp6(1),t.Q6J("@rightPointer",e._getArrowDirectionState())}}const Q=["*"],J=new t.OlP("MAT_SORT_DEFAULT_OPTIONS"),j=(0,v.dB)((0,v.Id)(class{}));let D=(()=>{class o extends j{constructor(e){super(),this._defaultOptions=e,this.sortables=new Map,this._stateChanges=new N.x,this.start="asc",this._direction="",this.sortChange=new t.vpe}get direction(){return this._direction}set direction(e){this._direction=e}get disableClear(){return this._disableClear}set disableClear(e){this._disableClear=(0,B.Ig)(e)}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let a=function q(o,n){let e=["asc","desc"];return"desc"==o&&e.reverse(),n||e.push(""),e}(e.start||this.start,e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear),d=a.indexOf(this.direction)+1;return d>=a.length&&(d=0),a[d]}ngOnInit(){this._markInitialized()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(J,8))},o.\u0275dir=t.lG2({type:o,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],active:["matSortActive","active"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[t.qOj,t.TTD]}),o})();const u=v.mZ.ENTERING+" "+v.yN.STANDARD_CURVE,_={indicator:(0,r.X$)("indicator",[(0,r.SB)("active-asc, asc",(0,r.oB)({transform:"translateY(0px)"})),(0,r.SB)("active-desc, desc",(0,r.oB)({transform:"translateY(10px)"})),(0,r.eR)("active-asc <=> active-desc",(0,r.jt)(u))]),leftPointer:(0,r.X$)("leftPointer",[(0,r.SB)("active-asc, asc",(0,r.oB)({transform:"rotate(-45deg)"})),(0,r.SB)("active-desc, desc",(0,r.oB)({transform:"rotate(45deg)"})),(0,r.eR)("active-asc <=> active-desc",(0,r.jt)(u))]),rightPointer:(0,r.X$)("rightPointer",[(0,r.SB)("active-asc, asc",(0,r.oB)({transform:"rotate(45deg)"})),(0,r.SB)("active-desc, desc",(0,r.oB)({transform:"rotate(-45deg)"})),(0,r.eR)("active-asc <=> active-desc",(0,r.jt)(u))]),arrowOpacity:(0,r.X$)("arrowOpacity",[(0,r.SB)("desc-to-active, asc-to-active, active",(0,r.oB)({opacity:1})),(0,r.SB)("desc-to-hint, asc-to-hint, hint",(0,r.oB)({opacity:.54})),(0,r.SB)("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",(0,r.oB)({opacity:0})),(0,r.eR)("* => asc, * => desc, * => active, * => hint, * => void",(0,r.jt)("0ms")),(0,r.eR)("* <=> *",(0,r.jt)(u))]),arrowPosition:(0,r.X$)("arrowPosition",[(0,r.eR)("* => desc-to-hint, * => desc-to-active",(0,r.jt)(u,(0,r.F4)([(0,r.oB)({transform:"translateY(-25%)"}),(0,r.oB)({transform:"translateY(0)"})]))),(0,r.eR)("* => hint-to-desc, * => active-to-desc",(0,r.jt)(u,(0,r.F4)([(0,r.oB)({transform:"translateY(0)"}),(0,r.oB)({transform:"translateY(25%)"})]))),(0,r.eR)("* => asc-to-hint, * => asc-to-active",(0,r.jt)(u,(0,r.F4)([(0,r.oB)({transform:"translateY(25%)"}),(0,r.oB)({transform:"translateY(0)"})]))),(0,r.eR)("* => hint-to-asc, * => active-to-asc",(0,r.jt)(u,(0,r.F4)([(0,r.oB)({transform:"translateY(0)"}),(0,r.oB)({transform:"translateY(-25%)"})]))),(0,r.SB)("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",(0,r.oB)({transform:"translateY(0)"})),(0,r.SB)("hint-to-desc, active-to-desc, desc",(0,r.oB)({transform:"translateY(-25%)"})),(0,r.SB)("hint-to-asc, active-to-asc, asc",(0,r.oB)({transform:"translateY(25%)"}))]),allowChildren:(0,r.X$)("allowChildren",[(0,r.eR)("* <=> *",[(0,r.IO)("@*",(0,r.pV)(),{optional:!0})])])};let w=(()=>{class o{constructor(){this.changes=new N.x}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const z={provide:w,deps:[[new t.FiY,new t.tp0,w]],useFactory:function E(o){return o||new w}},K=(0,v.Id)(class{});let G=(()=>{class o extends K{constructor(e,i,a,d,c,l,g){super(),this._intl=e,this._changeDetectorRef=i,this._sort=a,this._columnDef=d,this._focusMonitor=c,this._elementRef=l,this._ariaDescriber=g,this._showIndicatorHint=!1,this._viewState={},this._arrowDirection="",this._disableViewStateAnimation=!1,this.arrowPosition="after",this._sortActionDescription="Sort",this._handleStateChanges()}get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}get disableClear(){return this._disableClear}set disableClear(e){this._disableClear=(0,B.Ig)(e)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{const i=!!e;i!==this._showIndicatorHint&&(this._setIndicatorHintVisible(i),this._changeDetectorRef.markForCheck())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._rerenderSubscription.unsubscribe()}_setIndicatorHintVisible(e){this._isDisabled()&&e||(this._showIndicatorHint=e,this._isSorted()||(this._updateArrowDirection(),this._setAnimationTransitionState(this._showIndicatorHint?{fromState:this._arrowDirection,toState:"hint"}:{fromState:"hint",toState:this._arrowDirection})))}_setAnimationTransitionState(e){this._viewState=e||{},this._disableViewStateAnimation&&(this._viewState={toState:e.toState})}_toggleOnInteraction(){this._sort.sort(this),("hint"===this._viewState.toState||"active"===this._viewState.toState)&&(this._disableViewStateAnimation=!0)}_handleClick(){this._isDisabled()||this._sort.sort(this)}_handleKeydown(e){!this._isDisabled()&&(e.keyCode===L.L_||e.keyCode===L.K5)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&("asc"===this._sort.direction||"desc"===this._sort.direction)}_getArrowDirectionState(){return`${this._isSorted()?"active-":""}${this._arrowDirection}`}_getArrowViewState(){const e=this._viewState.fromState;return(e?`${e}-to-`:"")+this._viewState.toState}_updateArrowDirection(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?"asc"==this._sort.direction?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}_handleStateChanges(){this._rerenderSubscription=(0,F.T)(this._sort.sortChange,this._sort._stateChanges,this._intl.changes).subscribe(()=>{this._isSorted()&&(this._updateArrowDirection(),("hint"===this._viewState.toState||"active"===this._viewState.toState)&&(this._disableViewStateAnimation=!0),this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"active"}),this._showIndicatorHint=!1),!this._isSorted()&&this._viewState&&"active"===this._viewState.toState&&(this._disableViewStateAnimation=!1,this._setAnimationTransitionState({fromState:"active",toState:this._arrowDirection})),this._changeDetectorRef.markForCheck()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(w),t.Y36(t.sBO),t.Y36(D,8),t.Y36("MAT_SORT_HEADER_COLUMN_DEF",8),t.Y36(U.tE),t.Y36(t.SBq),t.Y36(U.$s,8))},o.\u0275cmp=t.Xpm({type:o,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(e,i){1&e&&t.NdJ("click",function(){return i._handleClick()})("keydown",function(d){return i._handleKeydown(d)})("mouseenter",function(){return i._setIndicatorHintVisible(!0)})("mouseleave",function(){return i._setIndicatorHintVisible(!1)}),2&e&&(t.uIk("aria-sort",i._getAriaSortAttribute()),t.ekj("mat-sort-header-disabled",i._isDisabled()))},inputs:{disabled:"disabled",id:["mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",sortActionDescription:"sortActionDescription",disableClear:"disableClear"},exportAs:["matSortHeader"],features:[t.qOj],attrs:Y,ngContentSelectors:Q,decls:4,vars:7,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],["class","mat-sort-header-arrow",4,"ngIf"],[1,"mat-sort-header-arrow"],[1,"mat-sort-header-stem"],[1,"mat-sort-header-indicator"],[1,"mat-sort-header-pointer-left"],[1,"mat-sort-header-pointer-right"],[1,"mat-sort-header-pointer-middle"]],template:function(e,i){1&e&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1),t.Hsn(2),t.qZA(),t.YNc(3,V,6,6,"div",2),t.qZA()),2&e&&(t.ekj("mat-sort-header-sorted",i._isSorted())("mat-sort-header-position-before","before"==i.arrowPosition),t.uIk("tabindex",i._isDisabled()?null:0)("role",i._isDisabled()?null:"button"),t.xp6(3),t.Q6J("ngIf",i._renderArrow()))},dependencies:[p.O5],styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"],encapsulation:2,data:{animation:[_.indicator,_.leftPointer,_.rightPointer,_.arrowOpacity,_.arrowPosition,_.allowChildren]},changeDetection:0}),o})(),X=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[z],imports:[[p.ez,v.BQ]]}),o})();var m=s(23911),h=s(2024),b=s(27969),M=s(42147),O=s(61528),W=s(84967),tt=s(66393),k=s(84945),P=s(91095),et=s(62686),ot=s(19376),it=s(65707),rt=s(96195),R=s(83331),I=s(13288),$=s(9638);const nt=function(o,n){return["/","app","pool",o,n]},at=function(o){return["/","app","lp-staking-pool",o]};function st(o,n){if(1&o&&(t.TgZ(0,"div",30)(1,"div",31)(2,"h1",32),t._uU(3),t.qZA(),t.TgZ(4,"div",33),t._uU(5,"Current Price:"),t.qZA(),t.TgZ(6,"div",34),t._uU(7),t.ALo(8,"number"),t.TgZ(9,"div",35),t._UZ(10,"img",36),t.qZA()(),t.TgZ(11,"div",33),t._uU(12,"Yield APY:"),t.qZA(),t.TgZ(13,"div",34),t._uU(14),t.ALo(15,"number"),t.ALo(16,"async"),t.qZA(),t.TgZ(17,"div",33),t._uU(18,"Total Volume:"),t.qZA(),t.TgZ(19,"div",34),t._uU(20),t.ALo(21,"number"),t.TgZ(22,"div",35),t._UZ(23,"img",36),t.qZA()(),t.TgZ(24,"div",33),t._uU(25,"Total Value Locked:"),t.qZA(),t.TgZ(26,"div",34),t._uU(27),t.ALo(28,"number"),t.TgZ(29,"div",35),t._UZ(30,"img",36),t.qZA()(),t.TgZ(31,"button",37),t._uU(32,"Detail"),t.qZA(),t.TgZ(33,"button",38),t._uU(34,"Lp Mining"),t.qZA()(),t._UZ(35,"img",39),t.qZA()),2&o){const e=t.oxw().$implicit,i=t.oxw(2);t.xp6(3),t.hij(" ",e.pair.collection.name,""),t.xp6(4),t.hij("",t.xi3(8,15,i.formatTokenValue(e.pair.price,"18"),"1.2-8")," "),t.xp6(3),t.Q6J("src",i.getTokenIcon(e.pair.token.address),t.LSH)("alt",e.pair.token.symbol),t.xp6(4),t.hij("",t.xi3(15,18,t.lcZ(16,21,e.totalApy$)||0,"1.2-8")," %"),t.xp6(6),t.hij("",t.xi3(21,23,i.formatTokenValue(e.pair.volume,"18"),"1.2-8")," "),t.xp6(3),t.Q6J("src",i.getTokenIcon(e.pair.token.address),t.LSH)("alt",e.pair.token.symbol),t.xp6(4),t.hij("",t.xi3(28,26,i.formatTokenValue(e.pair.tvl,"18"),"1.2-8")," "),t.xp6(3),t.Q6J("src",i.getTokenIcon(e.pair.token.address),t.LSH)("alt",e.pair.token.symbol),t.xp6(1),t.Q6J("routerLink",t.WLB(29,nt,e.pair.collection.address,e.pair.token.address)),t.xp6(2),t.Q6J("routerLink",t.VKq(32,at,e.pair.address)),t.xp6(2),t.Q6J("src",i.getCollectionBanner(e.pair.collection.address),t.LSH)("alt",e.pair.collection.name)}}function ct(o,n){1&o&&t.YNc(0,st,36,34,"ng-template",29)}const dt=function(){return{delay:3e3,disableOnInteraction:!1}};function lt(o,n){if(1&o&&(t.TgZ(0,"div",20)(1,"div",21)(2,"h1",22),t._uU(3,"Trending"),t.qZA(),t.TgZ(4,"swiper",23),t.YNc(5,ct,1,0,null,24),t.ALo(6,"async"),t.qZA()(),t.TgZ(7,"div",25)(8,"h1"),t._uU(9,"Total NFT Pairs"),t.qZA(),t.TgZ(10,"div",26),t._uU(11),t.qZA()(),t.TgZ(12,"div",25)(13,"h1"),t._uU(14,"Total Value Locked"),t.qZA(),t.TgZ(15,"div",26),t._uU(16),t.ALo(17,"number"),t.TgZ(18,"div",27),t._UZ(19,"img",28),t.qZA()()(),t.TgZ(20,"div",25)(21,"h1"),t._uU(22,"Total Trade Volume"),t.qZA(),t.TgZ(23,"div",26),t._uU(24),t.ALo(25,"number"),t.TgZ(26,"div",27),t._UZ(27,"img",28),t.qZA()()(),t.TgZ(28,"div",25)(29,"h1"),t._uU(30,"Total Royalty Income"),t.qZA(),t.TgZ(31,"div",26),t._uU(32),t.ALo(33,"number"),t.TgZ(34,"div",27),t._UZ(35,"img",28),t.qZA()()()()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("loop",!1)("autoplay",t.DdM(24,dt))("navigation",!0)("slidesPerView",1)("spaceBetween",0),t.xp6(1),t.Q6J("ngForOf",t.lcZ(6,13,e.trendingPairs$)),t.xp6(6),t.Oqu(e.pairCount),t.xp6(5),t.Oqu(t.xi3(17,15,e.tvl,"1.2-4")),t.xp6(3),t.Q6J("src",e.getTokenIcon(e.NativeTokenAddress),t.LSH),t.xp6(5),t.Oqu(t.xi3(25,18,e.volume,"1.2-4")),t.xp6(3),t.Q6J("src",e.getTokenIcon(e.NativeTokenAddress),t.LSH),t.xp6(5),t.Oqu(t.xi3(33,21,e.royalty,"1.2-4")),t.xp6(3),t.Q6J("src",e.getTokenIcon(e.NativeTokenAddress),t.LSH)}}function ht(o,n){1&o&&(t.TgZ(0,"th",40),t._uU(1,"NFT"),t.qZA())}const mt=function(){return["/app/airdrop"]};function gt(o,n){1&o&&(t.ynx(0),t.TgZ(1,"mat-icon",48),t._uU(2," local_fire_department"),t.qZA(),t.TgZ(3,"mat-icon",49),t._uU(4," whatshot"),t.qZA(),t.TgZ(5,"button",50),t._uU(6,"Free Mint"),t.qZA(),t.BQk()),2&o&&(t.xp6(5),t.Q6J("routerLink",t.DdM(1,mt)))}function ft(o,n){if(1&o&&(t.ynx(0),t.TgZ(1,"mat-icon",47),t._uU(2," whatshot"),t.qZA(),t.YNc(3,gt,7,2,"ng-container",46),t.BQk()),2&o){const e=t.oxw().$implicit,i=t.oxw();t.xp6(3),t.Q6J("ngIf",i.isAirdropPair(e.address))}}const S=function(o){return{background:o}};function pt(o,n){if(1&o&&(t.TgZ(0,"td",41)(1,"div",42)(2,"div",43),t._UZ(3,"img",44)(4,"img",45),t.qZA(),t._uU(5),t.YNc(6,ft,4,1,"ng-container",46),t.qZA()()),2&o){const e=n.$implicit,i=t.oxw();t.Q6J("ngStyle",t.VKq(5,S,i.isFarmPair(e.address)?"rgba(255, 241, 169, 0.1)":"none")),t.xp6(3),t.Q6J("src",i.getTokenIcon(e.collection.address),t.LSH),t.xp6(1),t.Q6J("src",i.getTokenIcon(e.token.address),t.LSH),t.xp6(1),t.hij(" ",e.collection.name," "),t.xp6(1),t.Q6J("ngIf",i.isFarmPair(e.address))}}function ut(o,n){1&o&&(t.TgZ(0,"th",51),t._uU(1,"NFTs in Pool "),t.qZA())}function vt(o,n){if(1&o&&(t.TgZ(0,"td",41),t._uU(1),t.ALo(2,"number"),t.qZA()),2&o){const e=n.$implicit,i=t.oxw();t.Q6J("ngStyle",t.VKq(5,S,i.isFarmPair(e.address)?"rgba(255, 241, 169, 0.1)":"none")),t.xp6(1),t.hij(" ",t.xi3(2,2,e.nftAmount,"1.0-0"),"")}}function _t(o,n){1&o&&(t.TgZ(0,"th",52),t._uU(1,"Current Price"),t.qZA())}function St(o,n){if(1&o&&(t.TgZ(0,"td",41)(1,"div",42),t._uU(2),t.ALo(3,"number"),t.TgZ(4,"div",35),t._UZ(5,"img",36),t.qZA()()()),2&o){const e=n.$implicit,i=t.oxw();t.Q6J("ngStyle",t.VKq(7,S,i.isFarmPair(e.address)?"rgba(255, 241, 169, 0.1)":"none")),t.xp6(2),t.hij(" ",t.xi3(3,4,i.formatTokenValue(e.price,"18"),"1.2-8")," "),t.xp6(3),t.Q6J("src",i.getTokenIcon(e.token.address),t.LSH)("alt",e.token.symbol)}}function Ct(o,n){1&o&&(t.TgZ(0,"th",53),t._uU(1,"Total Value Locked "),t.qZA())}function bt(o,n){if(1&o&&(t.TgZ(0,"td",41)(1,"div",42),t._uU(2),t.ALo(3,"number"),t.TgZ(4,"div",35),t._UZ(5,"img",36),t.qZA()()()),2&o){const e=n.$implicit,i=t.oxw();t.Q6J("ngStyle",t.VKq(7,S,i.isFarmPair(e.address)?"rgba(255, 241, 169, 0.1)":"none")),t.xp6(2),t.hij(" ",t.xi3(3,4,i.formatTokenValue(e.tvl,"18"),"1.2-8")," "),t.xp6(3),t.Q6J("src",i.getTokenIcon(e.token.address),t.LSH)("alt",e.token.symbol)}}function wt(o,n){1&o&&(t.TgZ(0,"th",54),t._uU(1,"Volume"),t.qZA())}function xt(o,n){if(1&o&&(t.TgZ(0,"td",41)(1,"div",42),t._uU(2),t.ALo(3,"number"),t.TgZ(4,"div",35),t._UZ(5,"img",36),t.qZA()()()),2&o){const e=n.$implicit,i=t.oxw();t.Q6J("ngStyle",t.VKq(7,S,i.isFarmPair(e.address)?"rgba(255, 241, 169, 0.1)":"none")),t.xp6(2),t.hij(" ",t.xi3(3,4,i.formatTokenValue(e.volume,"18"),"1.2-8")," "),t.xp6(3),t.Q6J("src",i.getTokenIcon(e.token.address),t.LSH)("alt",e.token.symbol)}}function At(o,n){1&o&&(t.TgZ(0,"th",55),t._uU(1,"Royalty Income"),t.qZA())}function Tt(o,n){if(1&o&&(t.TgZ(0,"td",41)(1,"div",42),t._uU(2),t.ALo(3,"number"),t.TgZ(4,"div",35),t._UZ(5,"img",36),t.qZA()()()),2&o){const e=n.$implicit,i=t.oxw();t.Q6J("ngStyle",t.VKq(7,S,i.isFarmPair(e.address)?"rgba(255, 241, 169, 0.1)":"none")),t.xp6(2),t.hij(" ",t.xi3(3,4,i.formatTokenValue(e.royalty,"18"),"1.2-8")," "),t.xp6(3),t.Q6J("src",i.getTokenIcon(e.token.address),t.LSH)("alt",e.token.symbol)}}function yt(o,n){1&o&&(t.TgZ(0,"tr",56)(1,"td",57),t._uU(2,"No data."),t.qZA()())}function Zt(o,n){1&o&&t._UZ(0,"tr",58)}const Dt=function(o,n){return["/app/pool/",o,n]};function Mt(o,n){if(1&o&&t._UZ(0,"tr",59),2&o){const e=n.$implicit;t.Q6J("routerLink",t.WLB(1,Dt,e.collection.address,e.token.address))}}P.ZP.use([P.W_,P.pt]);const Ot=[{path:"",component:(()=>{class o{constructor(e,i,a){var d=this;this.cacheService=e,this.chainInfoService=i,this.web3Service=a,this.displayedColumns=["pool","nftAmount","priceForSort","tvlForSort","volumeForSort","feeForSort"],this.dataSource=new m.by,this.resultsLength=0,this.pairCount=0,this.tvl="0",this.volume="0",this.royalty="0",this.NativeTokenAddress=this.chainInfoService.getChainConfig().contractAddressMap.NativeToken,this.currentChainInfo$=this.chainInfoService.currentChainId$.pipe((0,b.U)(c=>this.chainInfoService.getChainConfig())),this.trendingPairs$=this.cacheService.pairList$.pipe((0,M.x)((c,l)=>JSON.stringify(c)===JSON.stringify(l)),(0,b.U)(c=>c.filter(l=>-1!=this.chainInfoService.getChainConfig().trendingPairs.findIndex(g=>l.address.toLowerCase()==g.toLowerCase())).map(l=>{const g=h.O$.from(l.lpStakingPool.totalStakingAmount).mul(h.O$.from("10000")).div(h.O$.from(l.liquidity)).toNumber()/100,x=this.cacheService.ethPrice$.pipe((0,b.U)(f=>h.O$.from(f).mul(h.O$.from(l.tvl)).mul(h.O$.from(parseInt(100*g+""))).div(h.O$.from("10").pow(30)).toString())),A=x.pipe((0,O.w)(function(){var f=(0,Z.Z)(function*(T){return yield d.getApy0fStrategies(l,T)});return function(T){return f.apply(this,arguments)}}())),Ht=A.pipe((0,O.w)(f=>(0,W.D)(f))).pipe((0,b.U)(f=>this.sumApy(f)),(0,M.x)((f,T)=>f==T));return{pairAddress:l.address,pairName:l.collection.symbol+" - "+l.token.symbol,pair:l,totalApy$:Ht,stakedRatio:g,tvl$:x,strategyApys$:A,banner:this.cacheService.getCollectionBanner(l.collection.address)}})))}sumApy(e){let i=0;for(let a=0;a<e.length;a++)i+=e[a].apy;return i}getGlobalStrategies(e){return this.cacheService.getGlobalStrategies(this.chainInfoService.getChainConfig().contractAddressMap[e.factory].IntswapV1StakingCenter)}getStrategyRewardRate(e,i){var a=this;return(0,tt.D)(this.web3Service.invokeContract("IIntswapV1IncentiveStrategy","estimatedOneYearRewards",[e],i)).pipe((0,O.w)(function(){var d=(0,Z.Z)(function*(c){const l=c[0];if(l==et.je)return{value:"0",decimals:18};const g=c[1],x=(0,C.parseUnits)(yield a.cacheService.fetchRewardTokenPrice(l),"4"),A=(yield a.web3Service.getTokenDecimals(l).catch(()=>({0:18})))[0];return{value:h.O$.from(g).mul(x).div(h.O$.from("10000")).toString(),decimals:A}});return function(c){return d.apply(this,arguments)}}()))}getApy0fStrategies(e,i){var a=this;return(0,Z.Z)(function*(){return[...yield a.getGlobalStrategies(e),...e.lpStakingPool.incentiveStrategyList].map(d=>{if(d.status){const c=a.getStrategyRewardRate(e.address,d.address);return c&&h.O$.from(i).gt(h.O$.from(0))?c.pipe((0,b.U)(l=>({name:d.name,apy:h.O$.from(l.value).mul(h.O$.from("10000")).div(h.O$.from(10).pow(l.decimals)).div(h.O$.from(i)).toNumber()/100})),(0,M.x)((l,g)=>l==g)):c&&h.O$.from(i).eq(h.O$.from(0))?(0,k.of)({name:d.name,apy:1/0}):(0,k.of)({name:d.name,apy:0})}return(0,k.of)({name:d.name,apy:0})})})()}ngOnInit(){this.fetchPairList()}ngAfterViewInit(){this.dataSource.sort=this.sort}fetchPairList(){this.cacheService.pairList$.subscribe(e=>{this.dataSource.data=e.map(c=>({...c,nftAmount:parseInt(this.formatTokenValue(c.nftAmount,"18")),tvlForSort:parseFloat(this.formatTokenValue(c.tvl,"18")),priceForSort:parseFloat(this.formatTokenValue(c.price,"18")),volumeForSort:parseFloat(this.formatTokenValue(c.volume,"18")),feeForSort:parseFloat(this.formatTokenValue(c.fee,"18"))})),this.pairCount=e.length;let i=h.O$.from("0"),a=h.O$.from("0"),d=h.O$.from("0");e.forEach(c=>{i=i.add(c.tvl),a=a.add(c.volume),d=d.add(c.royalty)}),this.tvl=(0,C.formatUnits)(i,"18").toString(),this.volume=(0,C.formatUnits)(a,"18").toString(),this.royalty=(0,C.formatUnits)(d,"18").toString()})}formatTokenValue(e,i){return(0,C.formatUnits)(e,i)}announceSortChange(e){}isFarmPair(e){return["0x1b1f2751a1f12b98b521ce8697179669e2bd94ad","0xd6c22cecb1384df830d32eec83042567ae396d05","0xa9b7094596d79281e615ec1da7fb1d0aa523b0ec","0xa204a32adb1e5692f6857b9898c3f8d6859ec471","0xc31a8f4fbf52234ae134f3e8af32503665a9e72a","0x72320f6af111efb0919888e9d098f91fb4f156c7","0xdfc2d2c3a56436594dd0f0eb1e7d1cf21b4214da","0xf5b68338cd01aa60aa93cbedaf7cf0266ca0aff2"].map(i=>i.toLowerCase()).includes(e.toLowerCase())}isAirdropPair(e){return["0x1b1f2751a1f12b98b521ce8697179669e2bd94ad","0xd6c22cecb1384df830d32eec83042567ae396d05","0xa9b7094596d79281e615ec1da7fb1d0aa523b0ec","0xa204a32adb1e5692f6857b9898c3f8d6859ec471"].map(i=>i.toLowerCase()).includes(e.toLowerCase())}getTokenIcon(e){return this.cacheService.getTokenIcon(e)}getCollectionBanner(e){return this.cacheService.getCollectionBanner(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(ot.Q),t.Y36(it.Z),t.Y36(rt.U))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-collections"]],viewQuery:function(e,i){if(1&e&&t.Gf(D,5),2&e){let a;t.iGM(a=t.CRH())&&(i.sort=a.first)}},decls:28,vars:6,consts:[[1,"collection-wrapper"],["class","overview",4,"ngIf"],[1,"collection-card"],["mat-table","","matSort","",1,"collection-table",3,"dataSource","matSortChange"],["matColumnDef","pool"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"ngStyle",4,"matCellDef"],["matColumnDef","nftAmount"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by nftAmount",4,"matHeaderCellDef"],["matColumnDef","priceForSort"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by price",4,"matHeaderCellDef"],["matColumnDef","tvlForSort"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by tvl",4,"matHeaderCellDef"],["matColumnDef","volumeForSort"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by volume",4,"matHeaderCellDef"],["matColumnDef","feeForSort"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by fee",4,"matHeaderCellDef"],["class","mat-row",4,"matNoDataRow"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"routerLink",4,"matRowDef","matRowDefColumns"],[1,"overview"],[1,"trending"],[2,"font-weight","bolder"],[3,"loop","autoplay","navigation","slidesPerView","spaceBetween"],[4,"ngFor","ngForOf"],[1,"overview-card"],[1,"overview-value"],[2,"height","24px","width","24px","margin-left","4px","border-radius","50%","overflow","hidden","display","inline-flex","align-items","center"],[2,"height","100%","width","100%",3,"src"],["swiperSlide","","data-swiper-autoplay","8000"],[1,"trending-item"],[1,"trending-info"],[2,"grid-column-start","span 4","align-self","center","justify-self","center"],[1,"trending-info-label"],[1,"trending-info-value"],[2,"height","16px","width","16px","margin-left","4px","border-radius","50%","overflow","hidden","display","inline-flex","align-items","center"],[2,"height","100%","width","100%",3,"src","alt"],["mat-flat-button","","color","accent",2,"grid-column-start","span 2","align-self","center","justify-self","center","min-width","8rem",3,"routerLink"],["mat-flat-button","","color","warn",2,"grid-column-start","span 2","align-self","center","justify-self","center","min-width","8rem",3,"routerLink"],[1,"trending-banner",3,"src","alt"],["mat-header-cell",""],["mat-cell","",3,"ngStyle"],[2,"display","flex","flex-direction","row","align-items","center"],[2,"margin-right","12px"],[2,"z-index","3","width","28px","height","28px","border-radius","50%","border","1px solid rgba(255, 169, 203, 0.6)","margin","0 -6px","position","relative",3,"src"],[2,"z-index","2","width","28px","height","28px","border-radius","50%","border","1px solid rgba(255, 169, 203, 0.6)","margin","0 -6px","position","relative",3,"src"],[4,"ngIf"],[2,"color","gold","line-height","1","animation","changeColor 0.8s infinite linear","margin-left","1rem"],[2,"color","gold","line-height","1","animation","changeColor 0.6s infinite linear"],[2,"color","gold","line-height","1","animation","changeColor 0.7s infinite linear"],["mat-stroked-button","","color","warn",1,"mint-btn",3,"routerLink"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by nftAmount"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by price"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by tvl"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by volume"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by fee"],[1,"mat-row"],["colspan","6",2,"text-align","center"],["mat-header-row",""],["mat-row","",3,"routerLink"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,lt,36,25,"div",1),t.ALo(2,"async"),t.TgZ(3,"div",2)(4,"h1"),t._uU(5,"NFTs Listings"),t.qZA(),t.TgZ(6,"table",3),t.NdJ("matSortChange",function(d){return i.announceSortChange(d)}),t.ynx(7,4),t.YNc(8,ht,2,0,"th",5),t.YNc(9,pt,7,7,"td",6),t.BQk(),t.ynx(10,7),t.YNc(11,ut,2,0,"th",8),t.YNc(12,vt,3,7,"td",6),t.BQk(),t.ynx(13,9),t.YNc(14,_t,2,0,"th",10),t.YNc(15,St,6,9,"td",6),t.BQk(),t.ynx(16,11),t.YNc(17,Ct,2,0,"th",12),t.YNc(18,bt,6,9,"td",6),t.BQk(),t.ynx(19,13),t.YNc(20,wt,2,0,"th",14),t.YNc(21,xt,6,9,"td",6),t.BQk(),t.ynx(22,15),t.YNc(23,At,2,0,"th",16),t.YNc(24,Tt,6,9,"td",6),t.BQk(),t.YNc(25,yt,3,0,"tr",17),t.YNc(26,Zt,1,0,"tr",18),t.YNc(27,Mt,1,4,"tr",19),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,4,i.currentChainInfo$)),t.xp6(5),t.Q6J("dataSource",i.dataSource),t.xp6(20),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns))},dependencies:[p.sg,p.O5,p.PC,y.rH,R.Hw,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,m.Ee,D,G,I.nF,I.YC,$.lW,p.Ov,p.JJ],styles:[".collection-wrapper[_ngcontent-%COMP%]{padding:12px 10%;width:100vw;box-sizing:border-box}.overview[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;column-gap:1rem;row-gap:1rem;margin-bottom:1rem}.overview[_ngcontent-%COMP%]   .trending[_ngcontent-%COMP%]{grid-column-start:span 4;height:35vh;background:rgba(35,1,33,.3);border:3px solid rgba(97,84,94,.3098039216);-webkit-backdrop-filter:blur(12px) brightness(1.5);backdrop-filter:blur(12px) brightness(1.5);padding:12px 24px;border-radius:8px;box-shadow:0 2px 4px -1px #0003}.overview[_ngcontent-%COMP%]   .trending[_ngcontent-%COMP%]   .trending-item[_ngcontent-%COMP%]{height:100%;display:grid;grid-template-columns:1fr 1fr;justify-items:center;align-items:center}.overview[_ngcontent-%COMP%]   .trending[_ngcontent-%COMP%]   .trending-item[_ngcontent-%COMP%]   .trending-info[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;column-gap:1rem;row-gap:1rem;align-items:center}.overview[_ngcontent-%COMP%]   .trending[_ngcontent-%COMP%]   .trending-item[_ngcontent-%COMP%]   .trending-info[_ngcontent-%COMP%]   .trending-info-label[_ngcontent-%COMP%]{justify-self:start}.overview[_ngcontent-%COMP%]   .trending[_ngcontent-%COMP%]   .trending-item[_ngcontent-%COMP%]   .trending-info[_ngcontent-%COMP%]   .trending-info-value[_ngcontent-%COMP%]{justify-self:end;display:flex;flex-direction:row;align-items:center}.overview[_ngcontent-%COMP%]   .trending[_ngcontent-%COMP%]   .trending-item[_ngcontent-%COMP%]   .trending-banner[_ngcontent-%COMP%]{justify-self:start;width:90%;height:100%}.overview[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]{width:100%;background:rgba(35,1,33,.3);border:3px solid rgba(97,84,94,.3098039216);-webkit-backdrop-filter:blur(12px) brightness(1.5);backdrop-filter:blur(12px) brightness(1.5);padding:12px 24px;border-radius:8px;box-shadow:0 2px 4px -1px #0003}.overview[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:600;font-size:1rem;color:#f2aec5}.overview[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .overview-value[_ngcontent-%COMP%]{font-weight:700;font-size:2rem;padding:2rem 1rem;color:#d4baff;display:grid;grid-template-columns:1fr 40px;align-items:center;justify-items:end}.collection-card[_ngcontent-%COMP%]{background:rgba(35,1,33,.3);border:3px solid rgba(97,84,94,.3098039216);-webkit-backdrop-filter:blur(12px) brightness(1.5);backdrop-filter:blur(12px) brightness(1.5);padding:12px 24px;min-height:60vh;border-radius:8px;box-shadow:0 2px 4px -1px #0003}.collection-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:700}.collection-table[_ngcontent-%COMP%]{width:100%}.mat-row[_ngcontent-%COMP%]{margin:8px;transition:all .2s;font-weight:700}.mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{border-bottom:1px solid transparent;border-top:1px solid transparent;cursor:pointer}.mat-row[_ngcontent-%COMP%]:hover{background:linear-gradient(45deg,rgba(234,255,253,.3) 0%,rgba(252,238,255,.3) 100%)}.mint-btn[_ngcontent-%COMP%]{border:1px solid #ff96f8;transition:all .2s;margin-left:2rem}.mint-btn[_ngcontent-%COMP%]:hover{color:#fff;background:#ff7ff6}@keyframes changeColor{0%{color:#ff7300}25%{color:#ff8400;transform:rotate(5deg)}50%{color:red}75%{color:#ff0095;transform:rotate(-5deg)}to{color:#ff7300}}"]}),o})()}];let kt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[y.Bz.forChild(Ot),y.Bz]}),o})();var Pt=s(65647);let It=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,kt,R.Ps,Pt.TU,m.p0,X,I.kz,$.ot]}),o})()}}]);