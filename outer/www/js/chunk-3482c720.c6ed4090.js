(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3482c720"],{"45e9":function(t,s,e){"use strict";var a=e("90c8"),n=e.n(a);n.a},"7f7f":function(t,s,e){var a=e("86cc").f,n=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in n||e("9e1e")&&a(n,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"90c8":function(t,s,e){},a475:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.nodeInfoLoading,expression:"nodeInfoLoading"}],staticClass:"consensus-info bg-gray"},[e("div",{staticClass:"bg-white"},[e("h2",{staticClass:"title w1200 font16 fw uppercase"},[t._v(t._s(t.nodeInfo.agentId))]),e("div",{staticClass:"cards w1200"},[e("ul",{staticClass:"cards-ul"},[e("li",{staticClass:"cards-li fl"},[e("h6",{staticClass:"font14"},[t._v(t._s(t.$t("consensusInfo.consensusInfo0")))]),e("h5",{staticClass:"font18 fW600 tc"},[t._v(t._s(t.times.days)+t._s(t.$t("public.day"))+" "+t._s(t.times.hours)+t._s(t.$t("public.hour"))+"\n            "+t._s(t.times.minutes)+t._s(t.$t("public.minute")))])]),e("li",{staticClass:"cards-li fl"},[e("h6",{staticClass:"font14"},[t._v(t._s(t.$t("consensusInfo.consensusInfo1")))]),e("h5",{staticClass:"font18 fW600 tc"},[t._v(t._s(t.nodeInfo.totalPackingCount))])]),e("li",{staticClass:"cards-li fl"},[e("h6",{staticClass:"font14"},[t._v(t._s(t.$t("public.lostRate")))]),e("h5",{staticClass:"font18 fW600 tc"},[t._v(t._s(t.nodeInfo.lostRate))])]),e("li",{staticClass:"cards-li fl"},[e("h6",{staticClass:"font14"},[t._v(t._s(t.$t("consensusInfo.consensusInfo2")))]),e("h5",{staticClass:"font18 fW600 tc"},[t._v(t._s(t.nodeInfo.roundPackingTime))])])])])]),e("div",{staticClass:"info_tabs w1200"},[e("h3",{staticClass:"tabs_title tabs_header"},[t._v(t._s(t.$t("public.basicInfo")))]),e("ul",{staticClass:"ul"},[e("li",{staticClass:"tabs_infos fl"},[e("p",[t._v(t._s(t.$t("public.createAddress"))+"\n          "),e("span",[t._v(t._s(t.nodeInfo.agentAddress)+"\n            "),e("i",{staticClass:"iconfont icon-copy_icon click",attrs:{title:t.$t("public.copy")},on:{click:function(s){t.copy(t.nodeInfo.agentAddress)}}})])])]),e("li",{staticClass:"tabs_infos fl"},[e("p",[t._v("Hash"),e("span",{staticClass:"click",on:{click:function(s){t.toUrl("transactionInfo",t.nodeInfo.txHash)}}},[t._v(t._s(t.nodeInfo.txHashs)+" ")])])]),e("li",{staticClass:"tabs_infos fl"},[e("p",[t._v("\n        "+t._s(t.$t("public.alias"))),e("span",[t._v(t._s(t.nodeInfo.agentAlias?t.nodeInfo.agentAlias:"-"))])])]),e("li",{staticClass:"tabs_infos fl"},[e("p",[t._v(t._s(t.$t("public.packAddress"))+"\n          "),e("span",{staticClass:"click",on:{click:function(s){t.toUrl("addressInfo",t.nodeInfo.packingAddress)}}},[t._v(t._s(t.nodeInfo.packingAddress))])])]),e("li",{staticClass:"tabs_infos fl"},[e("p",[t._v(t._s(t.$t("public.creditValue"))),e("span",[t._v(t._s(t.nodeInfo.creditValue))])])]),e("li",{staticClass:"tabs_infos fl"},[e("p",[t._v(t._s(t.$t("public.outAddress"))+"\n          "),e("span",{staticClass:"click",on:{click:function(s){t.toUrl("addressInfo",t.nodeInfo.rewardAddress)}}},[t._v(t._s(t.nodeInfo.rewardAddress))])])]),e("li",{staticClass:"tabs_infos fl"},[e("p",[t._v(t._s(t.$t("public.bond"))),e("span",[t._v(t._s(t.nodeInfo.deposit)),e("span",{staticClass:"fCN"},[t._v(" "+t._s(t.symbol))])])])]),e("li",{staticClass:"tabs_infos fl"},[e("p",[t._v(t._s(t.$t("consensusInfo.consensusInfo3"))),e("span",[t._v(t._s(t.nodeInfo.version))])])]),e("li",{staticClass:"tabs_infos fl"},[e("p",[t._v(t._s(t.$t("public.proportion"))),e("span",[t._v(t._s(t.nodeInfo.commissionRate)+"%")])])]),e("li",{staticClass:"tabs_infos fl"},[e("p",[t._v("\n          "+t._s(t.$t("consensusInfo.consensusInfo14"))+"\n          "),e("el-tooltip",{attrs:{placement:"top"}},[e("div",{staticClass:"info",attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("consensusInfo.consensusInfo15")))]),e("i",{staticClass:"el-icon-warning"})]),e("span",[t._v("\n            "+t._s(t.nodeInfo.agentReward)+"\n            "),e("span",{staticClass:"fCN"},[t._v(" "+t._s(t.symbol))])])],1)]),e("li",{staticClass:"tabs_infos fl"},[e("p",[t._v(t._s(t.$t("public.participants"))),e("span",[t._v(t._s(t.nodeInfo.depositCount))])])]),e("li",{staticClass:"tabs_infos fl"},[e("p",[t._v("\n          "+t._s(t.$t("consensusInfo.consensusInfo16"))+"\n          "),e("span",[t._v(t._s(t.nodeInfo.commissionReward)),e("span",{staticClass:"fCN"},[t._v(" "+t._s(t.symbol))])])])]),e("li",{staticClass:"tabs_infos fl"},[e("p",[t._v(t._s(t.$t("public.createTime"))),e("span",[t._v(t._s(t.nodeInfo.time))])])]),e("li",{staticClass:"tabs_infos fl"},[e("p",[t._v("\n          "+t._s(t.$t("public.allEntrust"))+"\n          "),e("span",[t._v(t._s(t.nodeInfo.totalDeposit)),e("span",{staticClass:"fCN"},[t._v(" "+t._s(t.symbol))])])])])])]),e("div",{staticClass:"w1200 bg-gray"},[e("el-col",{attrs:{span:24}},[e("el-tabs",{on:{"tab-click":t.handleClicks},model:{value:t.activeNames,callback:function(s){t.activeNames=s},expression:"activeNames"}},[e("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:t.blockListLoading,expression:"blockListLoading"}],attrs:{label:t.$t("consensusInfo.consensusInfo7"),name:"first"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.blockList,stripe:"",border:""}},[e("el-table-column",{attrs:{label:"",width:"30"}}),e("el-table-column",{attrs:{label:t.$t("public.height"),width:"100",align:"left"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("span",{staticClass:"cursor-p click",on:{click:function(e){t.toUrl("blockInfo",s.row.height)}}},[t._v(t._s(s.row.height))])]}}])}),e("el-table-column",{attrs:{prop:"createTime",label:t.$t("public.time"),"min-width":"180",align:"left"}}),e("el-table-column",{attrs:{prop:"txCount",label:t.$t("public.transactionNo"),width:"220",align:"left"}}),e("el-table-column",{attrs:{prop:"size",label:t.$t("public.size"),width:"280",align:"left"}}),e("el-table-column",{attrs:{label:t.$t("consensusInfo.consensusInfo8")+"("+t.symbol+")",width:"280",align:"left"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(t._s(s.row.reward))]}}])})],1),e("div",{staticClass:"paging"},[e("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.pager.total>t.pager.rows,expression:"pager.total > pager.rows"}],staticClass:"pages",attrs:{background:"",layout:"total,prev, pager, next, jumper",total:t.pager.total,"current-page":t.pager.page,"page-size":t.pager.rows},on:{"update:currentPage":function(s){t.$set(t.pager,"page",s)},"current-change":t.pagesBlockList}})],1)],1),e("el-tab-pane",{attrs:{label:t.$t("consensusInfo.consensusInfo9"),name:"second"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.punishList,stripe:"",border:""}},[e("el-table-column",{attrs:{label:"",width:"30"}}),e("el-table-column",{attrs:{prop:"blockHeight",label:t.$t("public.height"),width:"180",align:"left"}}),e("el-table-column",{attrs:{prop:"txid",label:"TXID","min-width":"250",align:"left"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("span",{staticClass:"cursor-p click",on:{click:function(e){t.toUrl("transactionInfo",s.row.txHash)}}},[t._v(t._s(s.row.txHashs))])]}}])},[t._v("txHash\n              ")]),e("el-table-column",{attrs:{prop:"createTime",label:t.$t("public.time"),width:"180",align:"left"}}),e("el-table-column",{attrs:{label:t.$t("public.yellowCard")+"/"+t.$t("public.redCard"),width:"180",align:"left"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("i",{staticClass:"iconfont font20",class:1===t.row.type?"icon-huang yellow":"icon-hong fred"})]}}])}),e("el-table-column",{attrs:{prop:"reason",label:t.$t("public.reason"),width:"200",align:"left"}})],1),e("div",{staticClass:"paging"},[e("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.pager.total>t.pager.rows,expression:"pager.total > pager.rows"}],staticClass:"pages",attrs:{background:"",layout:"total,prev, pager, next, jumper",total:t.pager.total,"current-page":t.pager.page,"page-size":t.pager.rows},on:{"update:currentPage":function(s){t.$set(t.pager,"page",s)},"current-change":t.pagesPunishList}})],1)],1),e("el-tab-pane",{attrs:{label:t.$t("consensusInfo.consensusInfo10"),name:"three"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.consensusDeposit,stripe:"",border:""}},[e("el-table-column",{attrs:{label:"",width:"30"}}),e("el-table-column",{attrs:{label:t.$t("consensusInfo.consensusInfo11"),"min-width":"250",align:"left"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("span",{staticClass:"cursor-p click",on:{click:function(e){t.toUrl("addressInfo",s.row.address)}}},[t._v(t._s(s.row.address))])]}}])}),e("el-table-column",{attrs:{prop:"createTime",label:t.$t("consensusInfo.consensusInfo12"),width:"220",align:"left"}}),e("el-table-column",{attrs:{label:t.$t("public.amount")+"("+t.symbol+")",width:"220",align:"left"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(t._s(s.row.amount))]}}])})],1),e("div",{staticClass:"paging"},[e("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.pager.total>t.pager.rows,expression:"pager.total > pager.rows"}],staticClass:"pages",attrs:{background:"",layout:"total,prev, pager, next, jumper",total:t.pager.total,"current-page":t.pager.page,"page-size":t.pager.rows},on:{"update:currentPage":function(s){t.$set(t.pager,"page",s)},"current-change":t.pagesConsensusDepositList}})],1)],1),e("el-tab-pane",{attrs:{label:t.$t("consensusInfo.consensusInfo13"),name:"four"}},[e("el-select",{staticClass:"mb_20",on:{change:t.changeDepositTypeo},model:{value:t.depositValue,callback:function(s){t.depositValue=s},expression:"depositValue"}},t._l(t.depositTypeo,function(s){return e("el-option",{key:s.value,attrs:{label:t.$t("history."+s.label),value:s.value}})}),1),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.consensusCancelDeposit,stripe:"",border:""}},[e("el-table-column",{attrs:{label:"",width:"30"}}),e("el-table-column",{attrs:{label:"TXID",width:"200",align:"left"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("span",{staticClass:"cursor-p click",on:{click:function(e){t.toUrl("transactionInfo",s.row.txHash)}}},[t._v("\n                  "+t._s(s.row.agentHashs)+"\n                ")])]}}])}),e("el-table-column",{attrs:{label:t.$t("public.height"),width:"100",align:"left"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("span",{staticClass:"cursor-p click",on:{click:function(e){t.toUrl("blockInfo",s.row.blockHeight)}}},[t._v("\n                  "+t._s(s.row.blockHeight)+"\n                ")])]}}])}),e("el-table-column",{attrs:{label:t.$t("public.address"),"min-width":"300",align:"left"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("span",{staticClass:"cursor-p click",on:{click:function(e){t.toUrl("addressInfo",s.row.address)}}},[t._v("\n                  "+t._s(s.row.address)+"\n                ")])]}}])}),e("el-table-column",{attrs:{prop:"createTime",label:t.$t("public.time"),width:"160",align:"left"}}),e("el-table-column",{attrs:{label:t.$t("public.join")+"/"+t.$t("public.quit"),width:"100",align:"left"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(t._s(0===s.row.type?t.$t("public.join"):t.$t("public.quit")))]}}])}),e("el-table-column",{attrs:{label:t.$t("public.amount")+"("+t.symbol+")",width:"140",align:"left"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(t._s(s.row.amount))]}}])}),e("el-table-column",{attrs:{label:t.$t("public.fee")+"("+t.symbol+")",width:"110",align:"left"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(t._s(s.row.fee))]}}])})],1),e("div",{staticClass:"paging"},[e("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.pager.total>t.pager.rows,expression:"pager.total > pager.rows"}],staticClass:"pages",attrs:{background:"",layout:"total,prev, pager, next, jumper",total:t.pager.total,"current-page":t.pager.page,"page-size":t.pager.rows},on:{"update:currentPage":function(s){t.$set(t.pager,"page",s)},"current-change":t.pagesConsensusCancelDepositList}})],1)],1)],1)],1)],1)])},n=[],o=(e("7f7f"),e("ac4d"),e("8a81"),e("ac6a"),e("c5f6"),e("c32d")),i=e.n(o),l=e("6ace"),r={data:function(){return{symbol:sessionStorage.hasOwnProperty("symbol")?sessionStorage.getItem("symbol"):"DATT",decimals:sessionStorage.hasOwnProperty("decimals")?Number(sessionStorage.getItem("decimals")):8,activeNames:this.$route.query.tabName||"first",nodeInfo:[],nodeInfoLoading:!0,times:{days:0,hours:0,minutes:0},blockList:[],blockListLoading:!0,punishList:[],consensusDeposit:[],consensusCancelDeposit:[],depositTypeo:[{value:2,label:"0"},{value:0,label:"1"},{value:1,label:"2"}],depositValue:2,pager:{total:0,page:1,rows:5}}},components:{},created:function(){this.getNodeInfo(this.$route.query.hash)},mounted:function(){var t=this;setTimeout(function(){"first"===t.activeNames?t.getBlockList(t.pager.page,t.pager.rows,!1,t.nodeInfo.packingAddress):t.getConsensusDepositList(t.pager.page,t.pager.rows,t.nodeInfo.txHash)},800)},methods:{getNodeInfo:function(t){var s=this;this.$post("/","getConsensusNode",[t]).then(function(t){t.hasOwnProperty("result")&&(t.result.time=i()(Object(l["e"])(1e3*t.result.createTime)).format("YYYY-MM-DD HH:mm:ss"),t.result.roundPackingTime=i()(Object(l["e"])(1e3*t.result.roundPackingTime)).format("YYYY-MM-DD HH:mm:ss"),s.times=Object(l["g"])(1e3*t.result.createTime),t.result.txHashs=Object(l["f"])(t.result.txHash,20),t.result.deposit=Object(l["d"])(t.result.deposit,s.decimals),t.result.totalDeposit=Object(l["d"])(t.result.totalDeposit,s.decimals),t.result.totalReward=Object(l["d"])(t.result.totalReward,s.decimals),t.result.commissionReward=Object(l["d"])(t.result.commissionReward,s.decimals),t.result.agentReward=Object(l["d"])(t.result.agentReward,s.decimals),s.nodeInfo=t.result,s.nodeInfoLoading=!1)}).catch(function(t){console.log(t)})},copy:function(t){Object(l["c"])(t),this.$message({message:this.$t("public.copysuccess"),type:"success",duration:1e3})},getBlockList:function(t,s,e,a){var n=this;this.$post("/","getBlockHeaderList",[t,s,e,a]).then(function(t){if(t.hasOwnProperty("result")){var s=!0,e=!1,a=void 0;try{for(var o,r=t.result.list[Symbol.iterator]();!(s=(o=r.next()).done);s=!0){var c=o.value;c.createTime=i()(Object(l["e"])(1e3*c.createTime)).format("YYYY-MM-DD HH:mm:ss"),c.txhashs=Object(l["f"])(c.agentHash,20),c.reward=Object(l["d"])(c.reward,n.decimals)}}catch(u){e=!0,a=u}finally{try{s||null==r.return||r.return()}finally{if(e)throw a}}n.blockList=t.result.list,n.pager.total=t.result.totalCount,n.blockListLoading=!1}})},pagesBlockList:function(){this.blockListLoading=!0,this.getBlockList(this.pager.page,this.pager.rows,!1,this.nodeInfo.packingAddress)},getPunishList:function(t,s,e,a){var n=this;this.$post("/","getPunishList",[t,s,e,a]).then(function(t){if(t.hasOwnProperty("result")){var s=!0,e=!1,a=void 0;try{for(var o,r=t.result.list[Symbol.iterator]();!(s=(o=r.next()).done);s=!0){var c=o.value;c.createTime=i()(Object(l["e"])(1e3*c.time)).format("YYYY-MM-DD HH:mm:ss"),c.txHashs=Object(l["f"])(c.txHash,20)}}catch(u){e=!0,a=u}finally{try{s||null==r.return||r.return()}finally{if(e)throw a}}n.punishList=t.result.list,n.pager.total=t.result.totalCount}})},pagesPunishList:function(){this.getPunishList(this.pager.page,this.pager.rows,0,this.nodeInfo.agentAddress)},getConsensusDepositList:function(t,s,e){var a=this;this.$post("/","getConsensusDeposit",[t,s,e]).then(function(t){if(t.hasOwnProperty("result")){var s=!0,e=!1,n=void 0;try{for(var o,r=t.result.list[Symbol.iterator]();!(s=(o=r.next()).done);s=!0){var c=o.value;c.createTime=i()(Object(l["e"])(1e3*c.createTime)).format("YYYY-MM-DD HH:mm:ss"),c.amount=Object(l["d"])(c.amount,a.decimals)}}catch(u){e=!0,n=u}finally{try{s||null==r.return||r.return()}finally{if(e)throw n}}a.consensusDeposit=t.result.list,a.pager.total=t.result.totalCount}})},pagesConsensusDepositList:function(){this.getConsensusDepositList(this.pager.page,this.pager.rows,this.nodeInfo.txHash)},getConsensusCancelDepositList:function(t,s,e,a){var n=this;this.$post("/","getAllConsensusDeposit",[t,s,e,a]).then(function(t){if(t.hasOwnProperty("result")){var s=!0,e=!1,a=void 0;try{for(var o,r=t.result.list[Symbol.iterator]();!(s=(o=r.next()).done);s=!0){var c=o.value;c.createTime=i()(Object(l["e"])(1e3*c.createTime)).format("YYYY-MM-DD HH:mm:ss"),c.agentHashs=Object(l["f"])(c.txHash,10),c.amount=Object(l["d"])(c.amount,n.decimals),c.fee=Object(l["d"])(c.fee,n.decimals)}}catch(u){e=!0,a=u}finally{try{s||null==r.return||r.return()}finally{if(e)throw a}}n.consensusCancelDeposit=t.result.list,n.pager.total=t.result.totalCount}})},pagesConsensusCancelDepositList:function(){this.getConsensusCancelDepositList(this.pager.page,this.pager.rows,this.nodeInfo.txHash,this.depositValue)},changeDepositTypeo:function(t){this.depositValue=t,this.getConsensusCancelDepositList(this.pager.page,this.pager.rows,this.nodeInfo.txHash,this.depositValue)},pagesList:function(){"first"===this.activeNames?this.getBlockList(this.pager.page,this.pager.rows,this.nodeInfo.packingAddress,!1):"second"===this.activeNames?this.getPunishList(this.pager.page,this.pager.rows,0,this.nodeInfo.agentAddress):"three"===this.activeNames?this.getConsensusDeposit(this.pager.page,this.pager.rows,this.nodeInfo.txHash):this.getConsensusCancelDeposit(this.pager.page,this.pager.rows,this.nodeInfo.txHash,this.depositValue)},toUrl:function(t,s){var e={};e="addressInfo"===t?{address:s}:"transactionInfo"===t?{hash:s}:"tokenInfo"===t?{contractAddress:s}:{height:s},this.$router.push({name:t,query:e})},handleClicks:function(t){this.activeNames=t.name,"first"===t.name?(this.pager={total:0,page:1,rows:5},this.getBlockList(this.pager.page,this.pager.rows,!1,this.nodeInfo.packingAddress)):"second"===t.name?(this.pager={total:0,page:1,rows:5},this.getPunishList(this.pager.page,this.pager.rows,0,this.nodeInfo.agentAddress)):"three"===t.name?(this.pager={total:0,page:1,rows:5},this.getConsensusDepositList(this.pager.page,this.pager.rows,this.nodeInfo.txHash)):(this.pager={total:0,page:1,rows:4},this.getConsensusCancelDepositList(this.pager.page,this.pager.rows,this.nodeInfo.txHash,this.depositValue))}}},c=r,u=(e("45e9"),e("2877")),p=Object(u["a"])(c,a,n,!1,null,null,null);s["default"]=p.exports}}]);