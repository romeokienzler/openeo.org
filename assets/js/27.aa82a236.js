(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{225:function(s,e,r){},322:function(s,e,r){"use strict";r(225)},439:function(s,e,r){"use strict";r.r(e);var a={name:"InlineFrame",props:["url","version"],data:()=>({frameUrl:null}),beforeMount(){this.frameUrl=this.url.replace("{apiTag}",this.version.apiTag).replace("{processesTag}",this.version.processesTag),window.location.hash&&(this.frameUrl+=window.location.hash)}},t=(r(322),r(4)),n=Object(t.a)(a,(function(){return(0,this._self._c)("iframe",{staticClass:"stretch",attrs:{src:this.frameUrl}})}),[],!1,null,null,null);e.default=n.exports}}]);