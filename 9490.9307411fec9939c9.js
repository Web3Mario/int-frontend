"use strict";(self.webpackChunkintswap_frontend=self.webpackChunkintswap_frontend||[]).push([[9490],{9490:(f,o,i)=>{i.r(o),i.d(o,{PriceRangeModule:()=>g});var a=i(8692),c=i(7976),u=i(1528),t=i(4537),d=i(9376);const p=[{path:"",component:(()=>{class e{constructor(n,s){this.route=n,this.cacheService=s,this.newLiquidity=0,this.newMinPrice=0,this.newMaxPrice=0}ngOnInit(){this.pair$=this.route.paramMap.pipe((0,u.w)(n=>{const s=n.get("nftAddress")||void 0,l=n.get("baseTokenAddress")||void 0;return this.cacheService.getPairAddress(s,l)})),this.sub=this.pair$.subscribe(n=>{this.pair=n})}calcPriceByNftAmount(n){return this.newLiquidity**2/(n+this.newLiquidity/Math.sqrt(this.newMaxPrice))**2}ngOnDestroy(){this.sub?.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.gz),t.Y36(d.Q))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-price-range"]],decls:2,vars:0,template:function(n,s){1&n&&(t.TgZ(0,"p"),t._uU(1,"price-range works!"),t.qZA())}}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(p),c.Bz]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez,h]}),e})()}}]);