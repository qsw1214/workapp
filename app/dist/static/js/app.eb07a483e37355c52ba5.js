webpackJsonp([26],{"15Hy":function(t,e,o){"use strict";Boolean,String,String,String;var n={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},a={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:t.transition}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[o("div",{staticClass:"weui-mask_transparent"}),t._v(" "),o("div",{staticClass:"weui-toast",style:{position:t.position}},[o("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?o("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]};var s=o("Z0/y")(n,a,!1,function(t){o("Qouw")},null,null);e.a=s.exports},"1kf9":function(t,e){},"2y58":function(t,e,o){"use strict";var n=o("DGcX"),a=(n.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[n.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[o("transition",{attrs:{name:t.maskTransition}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),o("transition",{attrs:{name:t.dialogTransition}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var r=o("Z0/y")(a,s,!1,function(t){o("7XQZ")},null,null).exports,i=(Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,{name:"confirm",components:{XDialog:r},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"vux-confirm"},[o("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?o("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[o("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?o("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?o("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var o=t.msg,n=e.target,a=!!n.checked;if(Array.isArray(o)){var s=t._i(o,null);n.checked?s<0&&(t.msg=o.concat([null])):s>-1&&(t.msg=o.slice(0,s).concat(o.slice(s+1)))}else t.msg=a}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?o("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):o("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):o("div",{staticClass:"weui-dialog__bd"},[t._t("default",[o("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),o("div",{staticClass:"weui-dialog__ft"},[o("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]),t._v(" "),o("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))])])],2)],1)},staticRenderFns:[]};var c=o("Z0/y")(i,u,!1,function(t){o("1kf9")},null,null);e.a=c.exports},"7XQZ":function(t,e){},DVMf:function(t,e){},GJTy:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("MVMM"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"inner",attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=o("Z0/y")({name:"app"},a,!1,function(t){o("GJTy")},null,null).exports,r=o("zO6J");n.a.use(r.a);var i=new r.a({routes:[{path:"/",name:"login",component:function(t){return Promise.all([o.e(0),o.e(11)]).then(function(){var e=[o("0HId")];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/main",name:"main",component:function(t){return Promise.all([o.e(0),o.e(8)]).then(function(){var e=[o("sJm1")];t.apply(null,e)}.bind(this)).catch(o.oe)},redirect:"/main/day",meta:{requireAuth:!0},children:[{path:"day",name:"day",component:function(t){return Promise.all([o.e(0),o.e(6)]).then(function(){var e=[o("BEAA")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"stats",name:"stats",component:function(t){return Promise.all([o.e(0),o.e(4)]).then(function(){var e=[o("U7/T")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"stats/colleague",name:"stats-colleague",component:function(t){return Promise.all([o.e(0),o.e(2)]).then(function(){var e=[o("pzp2")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"stats/dept",name:"stats-dept",component:function(t){return Promise.all([o.e(0),o.e(1)]).then(function(){var e=[o("0yQS")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"stats/item",name:"stats-item",component:function(t){return Promise.all([o.e(0),o.e(19)]).then(function(){var e=[o("LAlh")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"stats/people",name:"stats-people",component:function(t){return Promise.all([o.e(0),o.e(12)]).then(function(){var e=[o("tXc3")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"stats/people-charts",name:"stats-people-charts",component:function(t){return Promise.all([o.e(0),o.e(14)]).then(function(){var e=[o("P2ue")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"system",name:"system",component:function(t){return Promise.all([o.e(0),o.e(3)]).then(function(){var e=[o("xSa4")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"my",name:"my",component:function(t){return Promise.all([o.e(0),o.e(15)]).then(function(){var e=[o("8JU9")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}}]},{path:"/day/form",name:"day-form",component:function(t){return Promise.all([o.e(0),o.e(5)]).then(function(){var e=[o("x3EF")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"/system/user",name:"system-user",component:function(t){return Promise.all([o.e(0),o.e(7)]).then(function(){var e=[o("TCV4")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"/system/user/form",name:"system-user-form",component:function(t){return Promise.all([o.e(0),o.e(24)]).then(function(){var e=[o("otdJ")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"/system/role",name:"system-role",component:function(t){return Promise.all([o.e(0),o.e(18)]).then(function(){var e=[o("s0Ct")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"/system/role/form",name:"system-role-form",component:function(t){return Promise.all([o.e(0),o.e(20)]).then(function(){var e=[o("cZQZ")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"/system/dept",name:"system-dept",component:function(t){return Promise.all([o.e(0),o.e(17)]).then(function(){var e=[o("VOvp")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"/system/dept/form",name:"system-dept-form",component:function(t){return Promise.all([o.e(0),o.e(23)]).then(function(){var e=[o("sgAM")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"/system/proitem",name:"system-proitem",component:function(t){return Promise.all([o.e(0),o.e(9)]).then(function(){var e=[o("II31")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"/system/proitem/form",name:"system-proitem-form",component:function(t){return Promise.all([o.e(0),o.e(10)]).then(function(){var e=[o("Damw")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"/my/partner",name:"system-partner",component:function(t){return Promise.all([o.e(0),o.e(16)]).then(function(){var e=[o("28e6")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"/my/product",name:"my-product",component:function(t){return Promise.all([o.e(0),o.e(13)]).then(function(){var e=[o("ACS/")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"/my/project",name:"my-project",component:function(t){return Promise.all([o.e(0),o.e(22)]).then(function(){var e=[o("pOh6")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}},{path:"/my/other",name:"my-other",component:function(t){return Promise.all([o.e(0),o.e(21)]).then(function(){var e=[o("p/+S")];t.apply(null,e)}.bind(this)).catch(o.oe)},meta:{requireAuth:!0}}]}),u=o("9rMa"),c=function(t){function e(t){return t<10?"0"+t:t}var o="",n=(o=t.date?new Date(t.date):new Date).getFullYear(),a=o.getMonth()+1,s=o.getDate(),r=o.getHours(),i=o.getMinutes(),u=o.getSeconds();return"yyyy-mm-dd"==t.type?n+"-"+e(a)+"-"+e(s):"yyyy-mm"==t.type?n+"-"+e(a):"mm-dd"==t.type?e(a)+"-"+e(s):"hh:mm:ss"==t.type?e(r)+":"+e(i)+":"+e(u):"time"==t.type?o.getTime():n+"-"+e(a)+"-"+e(s)+" "+e(r)+":"+e(i)+":"+e(u)},m={namespaced:!0,state:{vm:{currentDate:c({type:"yyyy-mm-dd"}),formPicker:""},list:[],formModel:{createDate:"",taskName:"",usedTime:"",type:"",itemId:""},types:[{id:1,name:"产品"},{id:2,name:"项目"},{id:3,name:"其他"}],prList:[]},mutations:{getList:function(t,e){n.a.$http.get({url:"/dailys",data:{userId:sessionStorage.userId,createDate:t.vm.currentDate},success:function(e){t.list=e},error:function(t){n.a.$vux.toast.text(t,"top")}})},getItem:function(t,e){var o=this;n.a.$http.get({url:"/dailys/"+e,success:function(e){t.formModel=e,o.commit({type:"common/day/getPrItem"})},error:function(t){n.a.$vux.toast.text(t,"top")}})},getPrItem:function(t,e){n.a.$http.get({url:"/proitems/type/"+t.formModel.type,success:function(e){t.prList=e},error:function(t){n.a.$vux.toast.text(t,"top")}})},changeType:function(t,e){this.commit("common/day/getPrItem"),t.formModel.itemId=""},clear:function(t,e){for(var o in t.formModel)t.formModel[o]=""},add:function(t,e){var o=this;t.formModel.userId=sessionStorage.userId,n.a.$http.post({url:"/dailys",type:"json",data:t.formModel,success:function(t){n.a.$vux.toast.text("添加成功","top"),o.commit("common/day/clear"),o.commit({type:"common/day/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}})},edit:function(t,e){var o=this;n.a.$http.put({url:"/dailys/"+t.formModel.id,type:"json",data:t.formModel,success:function(t){n.a.$vux.toast.text("修改成功","top"),o.commit({type:"common/day/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}})},delete:function(t,e){var o=this;n.a.$http.delete({url:"/dailys/"+e.id,success:function(t){n.a.$vux.toast.text("删除成功","top"),o.commit({type:"common/day/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}})}}},l=o("HzJ8"),p=o.n(l),d={namespaced:!0,state:{vm:{visible:!1,dateVisible:!1,username:"",nameModel:[""],userList:[],dateKey:"",date:c({type:"yyyy-mm-dd",date:new Date("2016-08-01")}),loading:!0,empty:!1},formModel:{username:"",startDate:c({type:"yyyy-mm-dd",date:new Date("2016-08-01")}),endDate:c({type:"yyyy-mm-dd",date:new Date("2016-08-31")}),userId:""},chartsData:{dayData:{columns:["createDate","usedTime"],rows:[]},productData:{columns:["prName","usedTime"],rows:[]},projectData:{columns:["prName","usedTime"],rows:[]},otherData:{columns:["name","usedTime"],rows:[]}}},mutations:{getList:function(t,e){if(t.formModel.startDate&&t.formModel.endDate){if(c({type:"time",date:t.formModel.startDate})>c({type:"time",date:t.formModel.endDate}))return n.a.$vux.toast.text("开始时间不能大于结束时间","top"),!1}else if(!t.formModel.startDate&&!t.formModel.endDate)return n.a.$vux.toast.text("时间不能为空","top"),!1;t.formModel.userId||(t.formModel.userId=sessionStorage.userId),t.vm.nameModel[0]||(t.vm.nameModel=[sessionStorage.userId]),t.formModel.username||(t.formModel.username=sessionStorage.username),t.vm.loading=!0,n.a.$http.post({url:"/stats/colleague",data:t.formModel,type:"json",success:function(e){setTimeout(function(o){t.vm.loading=!1,t.vm.empty=!1;var n=[];e.product.forEach(function(t,e){n.push({prName:t.work_product_project.prName,usedTime:t.usedTime})});var a=[];e.project.forEach(function(t,e){a.push({prName:t.work_product_project.prName,usedTime:t.usedTime})}),t.chartsData.dayData.rows=e.colleague,t.chartsData.productData.rows=n,t.chartsData.projectData.rows=a,t.chartsData.otherData.rows=e.other},300)},error:function(e){t.vm.empty=!0,n.a.$vux.toast.text(e,"top")}})},getUserList:function(t,e){n.a.$http.get({url:"/users",success:function(e){var o=[];e.forEach(function(t,e){o.push({name:t.realname,value:t.id})}),t.vm.userList=[o],t.vm.visible=!0},error:function(t){n.a.$vux.toast.text(t,"top")}})},getUserName:function(t,e){t.formModel.userId=t.vm.nameModel[0];var o=!0,n=!1,a=void 0;try{for(var s,r=p()(t.vm.userList[0]);!(o=(s=r.next()).done);o=!0){var i=s.value;if(i.value==t.formModel.userId){t.formModel.username=i.name;break}}}catch(t){n=!0,a=t}finally{try{!o&&r.return&&r.return()}finally{if(n)throw a}}this.commit("common/colleague/getList"),t.vm.visible=!1},getDate:function(t,e){t.formModel[t.vm.dateKey]=t.vm.date,t.vm.dateVisible=!1,this.commit("common/colleague/getList")},clear:function(t,e){e.forEach(function(e){t.formModel[e]=""}),this.commit("common/colleague/getList")},showDate:function(t,e){t.vm.dateKey=e,t.vm.dateVisible=!0},export:function(t,e){var o=this;n.a.$http.post({url:"/export/colleague",data:t.formModel,type:"json",success:function(t){window.location.href=o.state.common.exportIP+t},error:function(t){n.a.$vux.toast.text(t,"top")}})}}},f={namespaced:!0,state:{vm:{visible:!1,dateVisible:!1,itemList:[],dateKey:"",date:c({type:"yyyy-mm-dd",date:new Date("2016-08-01")}),loading:!0,empty:!1},formModel:{departmentId:"",startDate:c({type:"yyyy-mm-dd",date:new Date("2016-08-01")}),endDate:c({type:"yyyy-mm-dd",date:new Date("2016-08-31")})},chartsData:{personData:{columns:["createDate","usedTime"],rows:[]},personItemData:{columns:["realname","usedTime"],rows:[]},productData:{columns:["prName","usedTime"],rows:[]},projectData:{columns:["prName","usedTime"],rows:[]},otherData:{columns:["name","usedTime"],rows:[]}}},mutations:{getList:function(t,e){if(t.formModel.startDate&&t.formModel.endDate){if(c({type:"time",date:t.formModel.startDate})>=c({type:"time",date:t.formModel.endDate}))return n.a.$vux.toast.text("开始时间不能大于结束时间","top"),!1}else if(!t.formModel.startDate&&!t.formModel.endDate)return n.a.$vux.toast.text("时间不能为空","top"),!1;t.formModel.departmentId=t.formModel.departmentId?t.formModel.departmentId:sessionStorage.departmentId,t.vm.loading=!0,n.a.$http.post({url:"/stats/dept",data:{startDate:t.formModel.startDate,endDate:t.formModel.endDate,departmentId:t.formModel.departmentId},type:"json",success:function(e){setTimeout(function(o){t.vm.loading=!1,t.vm.empty=!1,t.chartsData.personData.rows=e.personTotal;var n=[];e.personItem.forEach(function(t,e){n.push({realname:t.work_admin.realname,usedTime:t.usedTime})}),t.chartsData.personItemData.rows=n;var a=[];e.product.forEach(function(t,e){a.push({prName:t.work_product_project.prName,usedTime:t.usedTime})});var s=[];e.project.forEach(function(t,e){s.push({prName:t.work_product_project.prName,usedTime:t.usedTime})}),t.chartsData.productData.rows=a,t.chartsData.projectData.rows=s,t.chartsData.otherData.rows=e.other},300)},error:function(e){t.vm.empty=!0,n.a.$vux.toast.text(e,"top")}})},getDepartmentList:function(t,e){n.a.$http.get({url:"/depts",success:function(e){t.vm.itemList=e},error:function(t){n.a.$vux.toast.text(t,"top")}})},getDate:function(t,e){t.formModel[t.vm.dateKey]=t.vm.date,t.vm.dateVisible=!1,this.commit("common/department/getList")},clear:function(t,e){e.forEach(function(e){t.formModel[e]=""}),this.commit("common/department/getList")},showDate:function(t,e){t.vm.dateKey=e,t.vm.dateVisible=!0},export:function(t,e){var o=this;n.a.$http.post({url:"/export/getDept",data:t.formModel,type:"json",success:function(t){window.location.href=o.state.common.exportIP+t},error:function(t){n.a.$vux.toast.text(t,"top")}})}}},h={namespaced:!0,state:{vm:{itemList:"",loading:!0,empty:!1},formModel:{type:"",itemId:""},chartsData:{product:{columns:["prName","usedTime"],rows:[]},project:{columns:["prName","usedTime"],rows:[]}}},mutations:{getList:function(t,e){t.vm.loading=!0,n.a.$http.post({url:"/stats/product-item",data:t.formModel,type:"json",success:function(e){setTimeout(function(o){t.vm.loading=!1,t.vm.empty=!1,t.chartsData.product.rows=e.product,t.chartsData.project.rows=e.project},300)},error:function(e){n.a.$vux.toast.text(e,"top"),t.vm.empty=!0}})},getItemList:function(t,e){var o=this;t.formModel.type?n.a.$http.get({url:"/proitems/type/"+t.formModel.type,success:function(e){t.formModel.itemId="",t.vm.itemList=e,o.commit("common/item/getList")},error:function(t){n.a.$vux.toast.text(t,"top")}}):(t.formModel.itemId="",t.vm.itemList=[],this.commit("common/item/getList"))},export:function(t,e){var o=this;n.a.$http.post({url:"/export/product-item",data:t.formModel,type:"json",success:function(t){window.location.href=o.state.common.exportIP+t},error:function(t){n.a.$vux.toast.text(t,"top")}})}}},v={namespaced:!0,state:{vm:{itemList:"",charts:1,empty:!1},formModel:{type:"",itemId:""},peopleList:[],chartData:{name:"",peopleData:{columns:["realname","用时"],rows:[]}}},mutations:{getList:function(t,e){t.vm.loading=!0,n.a.$http.post({url:"/stats/people",data:t.formModel,type:"json",success:function(e){e.forEach(function(t,e){t.count=0,t.second.forEach(function(e,o){t.count=t.count+e.usedTime})}),setTimeout(function(o){t.peopleList=e,n.a.$vux.loading.hide()},1e3)},error:function(t){n.a.$vux.toast.text(t,"top")}})},getItemList:function(t,e){var o=this;t.formModel.type?n.a.$http.get({url:"/proitems/type/"+t.formModel.type,success:function(e){t.formModel.itemId="",t.vm.itemList=e,o.commit("common/people/getList")},error:function(t){n.a.$vux.toast.text(t,"top")}}):(t.formModel.itemId="",t.vm.itemList=[],this.commit("common/people/getList"))},getPeopleItem:function(t,e){t.vm.loading=!0,n.a.$http.post({url:"/stats/people",data:{itemId:e},type:"json",success:function(e){setTimeout(function(o){t.vm.loading=!1,t.vm.empty=!1;var n=[];e[0].second.forEach(function(t,e){n.push({realname:t.work_admin.realname,"用时":t.usedTime.toFixed(2)})}),t.chartData.peopleData.rows=n,t.chartData.name=e[0].prName},300)},error:function(e){t.vm.empty=!0,n.a.$vux.toast.text(e,"top")}})},export:function(t,e){var o=this;n.a.$http.post({url:"/export/people",data:t.formModel,type:"json",success:function(t){window.location.href=o.state.common.exportIP+t},error:function(t){n.a.$vux.toast.text(t,"top")}})}}},y=o("3cXf"),g=o.n(y),x={namespaced:!0,state:{userList:[],roleList:[],vm:{visible:!1,searchVisible:!1,checkRole:[],currentUserInfo:"",departmentList:[],departmentList1:[]},formModel:{username:"",realname:"",departmentId:"",post:"",email:"",phone:"",qq:""},queryModel:{realname:"",departmentId:0,post:""}},mutations:{getList:function(t){n.a.$http.get({url:"/users",success:function(e){t.userList=e},error:function(t){n.a.$vux.toast.text(t,"top")}})},getRoles:function(t,e){t.vm.currentUserInfo=e,n.a.$http.get({url:"/roles",success:function(o){t.vm.checkRole=[];var n=[];o.forEach(function(t,e){n.push({key:t.id,value:t.roleName,inlineDesc:t.inlineDesc})}),t.roleList=n;var a=!0,s=!1,r=void 0;try{for(var i,u=p()(e.work_roles);!(a=(i=u.next()).done);a=!0){var c=i.value;t.vm.checkRole.push(c.id)}}catch(t){s=!0,r=t}finally{try{!a&&u.return&&u.return()}finally{if(s)throw r}}t.vm.visible=!0},error:function(t){n.a.$vux.toast.text(t,"top")}})},assignRole:function(t,e){var o=this;n.a.$http.post({url:"/users/role",data:{userId:t.vm.currentUserInfo.id,roles:t.vm.checkRole},type:"json",success:function(e){o.commit("common/user/getList"),t.vm.visible=!1},error:function(t){n.a.$vux.toast.text(t,"top")}})},getUserItem:function(t,e){n.a.$http.get({url:"/users/"+e,success:function(e){t.formModel=e},error:function(t){n.a.$vux.toast.text(t,"top")}})},getUserSearch:function(t){n.a.$http.post({url:"/users/search",data:t.queryModel,type:"json",success:function(e){t.userList=e,t.vm.searchVisible=!1},error:function(t){n.a.$vux.toast.text(t,"top")}})},getDepartmentList:function(t,e){n.a.$http.get({url:"/depts",success:function(e){t.vm.departmentList=e,t.vm.departmentList1=JSON.parse(g()(e)),t.vm.departmentList1.unshift({id:0,depName:"全部"})},error:function(t){n.a.$vux.toast.text(t,"top")}})},clear:function(t,e){for(var o in t.formModel)t.formModel[o]=""},add:function(t,e){var o=this;return t.formModel.username?t.formModel.realname?t.formModel.departmentId?t.formModel.post?t.formModel.email?void n.a.$http.post({url:"/users",type:"json",data:t.formModel,success:function(t){n.a.$vux.toast.text("添加成功","top"),o.commit("common/user/clear"),o.commit({type:"common/user/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}}):(n.a.$vux.toast.text("邮箱不能为空！","top"),!1):(n.a.$vux.toast.text("职位名称不能为空！","top"),!1):(n.a.$vux.toast.text("部门不能为空！","top"),!1):(n.a.$vux.toast.text("真实姓名不能为空！","top"),!1):(n.a.$vux.toast.text("用户名不能为空！","top"),!1)},edit:function(t,e){var o=this;n.a.$http.put({url:"/users/"+t.formModel.id,type:"json",data:t.formModel,success:function(t){n.a.$vux.toast.text("修改成功","top"),o.commit({type:"common/user/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}})},delete:function(t,e){var o=this;n.a.$http.delete({url:"/users/"+e.id,success:function(t){n.a.$vux.toast.text("删除成功","top"),o.commit({type:"common/user/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}})}}},w={namespaced:!0,state:{vm:{visible:!1},roleList:[],menuList:[],roleInfo:"",formModel:{roleName:"",roleDescription:""}},mutations:{getList:function(t,e){n.a.$http.get({url:"/roles",success:function(e){t.roleList=e},error:function(t){n.a.$vux.toast.text(t,"top")}})},getRoleItem:function(t,e){n.a.$http.get({url:"/roles/"+e,success:function(e){t.formModel=e},error:function(t){n.a.$vux.toast.text(t,"top")}})},getAuthority:function(t,e){t.roleInfo=e.roleInfo,n.a.$http.get({url:"/menus",success:function(e){e.forEach(function(e,o){e.checked=!1,e.visible=!1,e.second.forEach(function(o,n){o.checked=!1,t.roleInfo.work_menus.forEach(function(t,n){e.id==t.id&&(e.checked=!0),o.id==t.id&&(o.checked=!0)})})}),t.menuList=e,t.vm.visible=!0},error:function(t){n.a.$vux.toast.text(t,"top")}})},saveAuthority:function(t,e){var o=this,a=[];t.menuList.forEach(function(t,e){t.checked&&a.push(t.id),t.second.forEach(function(t,e){t.checked&&a.push(t.id)})}),n.a.$http.post({url:"/roles/authority",data:{roleId:t.roleInfo.id,menus:a},type:"json",success:function(e){t.vm.visible=!1,o.commit({type:"common/role/getList"}),n.a.$vux.toast.text("权限分配成功！","top")},error:function(t){n.a.$vux.toast.text(t,"top")}})},setCheck:function(t,e){if(1==e.type)e.item.checked=!e.item.checked,e.item.second.forEach(function(t,o){t.checked=e.item.checked});else if(2==e.type){e.obj.checked=!e.obj.checked;var o=!1;e.item.second.forEach(function(t,e){t.checked&&(o=!0)}),e.item.checked=o}},clear:function(t,e){for(var o in t.formModel)t.formModel[o]=""},add:function(t,e){var o=this;return t.formModel.roleName?t.formModel.roleDescription?void n.a.$http.post({url:"/roles",type:"json",data:t.formModel,success:function(t){n.a.$vux.toast.text("添加成功","top"),o.commit("common/role/clear"),o.commit({type:"common/role/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}}):(n.a.$vux.toast.text("角色描述不能为空！","top"),!1):(n.a.$vux.toast.text("角色名称不能为空！","top"),!1)},edit:function(t,e){var o=this;return t.formModel.roleName?t.formModel.roleDescription?void n.a.$http.put({url:"/roles/"+t.formModel.id,type:"json",data:t.formModel,success:function(t){n.a.$vux.toast.text("修改成功","top"),o.commit({type:"common/role/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}}):(n.a.$vux.toast.text("角色描述不能为空！","top"),!1):(n.a.$vux.toast.text("角色名称不能为空！","top"),!1)},delete:function(t,e){var o=this;n.a.$http.delete({url:"/roles/"+e.id,success:function(t){n.a.$vux.toast.text("删除成功","top"),o.commit({type:"common/role/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}})}}},$={namespaced:!0,state:{vm:{visible:!1},deptList:[],formModel:{depName:"",depDescribe:""}},mutations:{getList:function(t,e){n.a.$http.get({url:"/depts",success:function(e){t.deptList=e},error:function(t){n.a.$vux.toast.text(t,"top")}})},getDeptItem:function(t,e){n.a.$http.get({url:"/depts/"+e,success:function(e){t.formModel=e},error:function(t){n.a.$vux.toast.text(t,"top")}})},clear:function(t,e){for(var o in t.formModel)t.formModel[o]=""},add:function(t,e){var o=this;return t.formModel.depName?t.formModel.depDescribe?void n.a.$http.post({url:"/depts",type:"json",data:t.formModel,success:function(t){n.a.$vux.toast.text("添加成功","top"),o.commit("common/dept/clear"),o.commit({type:"common/dept/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}}):(n.a.$vux.toast.text("部门描述不能为空！","top"),!1):(n.a.$vux.toast.text("部门名称不能为空！","top"),!1)},edit:function(t,e){var o=this;return t.formModel.depName?t.formModel.depDescribe?void n.a.$http.put({url:"/depts/"+t.formModel.id,type:"json",data:t.formModel,success:function(t){n.a.$vux.toast.text("修改成功","top"),o.commit({type:"common/dept/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}}):(n.a.$vux.toast.text("部门描述不能为空！","top"),!1):(n.a.$vux.toast.text("部门名称不能为空！","top"),!1)},delete:function(t,e){var o=this;n.a.$http.delete({url:"/depts/"+e.id,success:function(t){n.a.$vux.toast.text("删除成功","top"),o.commit({type:"common/dept/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}})}}},M={namespaced:!0,state:{vm:{visible:!1,searchVisible:!1,original:[]},proitemList:[],queryModel:{type:1,prName:""},formModel:{type:"",prName:"",prDescribe:""},filterPoritem:[]},mutations:{getList:function(t,e){n.a.$http.get({url:"/proitems",success:function(e){t.proitemList=e,t.vm.original=e},error:function(t){n.a.$vux.toast.text(t,"top")}})},getProitem:function(t,e){n.a.$http.get({url:"/proitems/"+e,success:function(e){t.formModel=e},error:function(t){n.a.$vux.toast.text(t,"top")}})},getProitemSearch:function(t,e){n.a.$http.post({url:"/proitems/search",data:t.queryModel,type:"json",success:function(e){t.proitemList=e,t.vm.searchVisible=!1},error:function(t){n.a.$vux.toast.text(t,"top")}})},clear:function(t,e){for(var o in t.formModel)t.formModel[o]=""},add:function(t,e){var o=this;return t.formModel.prName?t.formModel.prDescribe?void n.a.$http.post({url:"/proitems",type:"json",data:t.formModel,success:function(t){n.a.$vux.toast.text("添加成功","top"),o.commit("common/proitem/clear"),o.commit({type:"common/proitem/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}}):(n.a.$vux.toast.text("描述不能为空！","top"),!1):(n.a.$vux.toast.text("名称不能为空！","top"),!1)},edit:function(t,e){var o=this;return t.formModel.prName?t.formModel.prDescribe?void n.a.$http.put({url:"/proitems/"+t.formModel.id,type:"json",data:t.formModel,success:function(t){n.a.$vux.toast.text("修改成功","top"),o.commit({type:"common/proitem/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}}):(n.a.$vux.toast.text("描述不能为空！","top"),!1):(n.a.$vux.toast.text("名称不能为空！","top"),!1)},delete:function(t,e){var o=this;n.a.$http.delete({url:"/remove/"+e.id,success:function(t){n.a.$vux.toast.text("删除成功","top"),o.commit({type:"common/proitem/getList"})},error:function(t){n.a.$vux.toast.text(t,"top")}})}}},b={namespaced:!0,state:{},mutations:{getList:function(t,e){n.a.$http.post({url:"/my-list",data:{userId:sessionStorage.userId,currentPage:t.vm.currentPage,pageSize:t.vm.pageSize},type:"json",success:function(o){e&&e.done?setTimeout(function(n){1==e.type?t.workList=t.workList.concat(o):2==e.type&&(t.workList=o),e.done()},1500):t.workList=o},error:function(t){n.a.$vux.toast.text(t,"top")}})},loadMore:function(t,e){t.vm.currentPage=t.vm.currentPage+1,this.commit("common/my/getList",{type:1,done:e})},refresh:function(t,e){t.vm.currentPage=0,this.commit("common/my/getList",{type:2,done:e})}}};n.a.use(u.a);var D=new u.a.Store({modules:{common:{namespaced:!0,state:{userInfo:localStorage.userInfo?JSON.parse(localStorage.userInfo):{},exportIP:window.location.protocol+"//"+window.location.hostname,histogramConfig:{callback:function(t){return t.title.textStyle={color:"#666",fontWeight:"normal"},t},dataZoom:[{show:!0,start:0,end:50,handleIcon:"M512 512m-494.933333 0a494.933333 494.933333 0 1 0 989.866666 0 494.933333 494.933333 0 1 0-989.866666 0Z",handleSize:"200%",backgroundColor:"#e4e7ed",borderColor:"#e4e7ed",fillerColor:"#409eff",height:6,dataBackground:{lineStyle:{opacity:0},areaStyle:{opacity:0}},handleStyle:{color:"#fff",borderWidth:2,borderColor:"#409eff"}},{type:"inside",start:94,end:100}],chartSettings:{labelMap:{usedTime:"用时"}}},pieConfig:{callback:function(t){return t.legend&&(t.legend.top="20%"),t.title.textStyle={color:"#666",fontWeight:"normal"},t},chartSettings:{dimension:"name",metrics:"usedTime",dataType:"KMB",selectedMode:"single",hoverAnimation:!1,radius:50,offsetY:170}},lineConfig:{callback:function(t){return t.legend&&(t.legend.top="10%"),t.title.textStyle={color:"#666",fontWeight:"normal",fontSize:16},t},dataZoom:[{show:!0,start:0,end:60,handleIcon:"M512 512m-494.933333 0a494.933333 494.933333 0 1 0 989.866666 0 494.933333 494.933333 0 1 0-989.866666 0Z",handleSize:"200%",backgroundColor:"#e4e7ed",borderColor:"#e4e7ed",fillerColor:"#409eff",height:6,dataBackground:{lineStyle:{opacity:0},areaStyle:{opacity:0}},handleStyle:{color:"#fff",borderWidth:2,borderColor:"#409eff"}},{type:"inside",start:60,end:100}],chartSettings:{}}},modules:{day:m,colleague:d,department:f,item:h,people:v,user:x,role:w,dept:$,proitem:M,my:b}}}}),S=o("6s2J"),_=o.n(S),I=o("2J3d"),L=o("azgU"),k=o("dKv8"),T=(o("P/Us"),o("6Fhb")),C=o.n(T),P=o("dgr4"),N=o.n(P),j=o("U5q1"),A=o.n(j),E=(o("UNOL"),o("+WjJ"),function(t){return JSON.parse(g()(t))}),q=o("2sCs"),B=o.n(q),V=function(t,e,o,n,a,s){var r="";r="json"==o?{"Content-type":"application/json"}:"formdata"==o?{"Content-type":"multipart/form-data"}:{"Content-type":"application/x-www-form-urlencoded"},B()({method:t,url:e,data:"POST"===t||"PUT"===t?n:null,params:"GET"===t||"DELETE"===t?n:null,baseURL:"/api",headers:r,withCredentials:!1}).then(function(t){t.data?0===parseInt(t.data.status)&&a?a(t.data.result):s(t.data.message,null):s?s("失败！",null):window.alert("error: "+g()(t.data))}).catch(function(t){if(t)return console.log(t),void s("失败！",t)})},O={get:function(t){return V("GET",t.url,t.type,t.data,t.success,t.error)},post:function(t){return V("POST",t.url,t.type,t.data,t.success,t.error)},put:function(t){return V("PUT",t.url,t.type,t.data,t.success,t.error)},delete:function(t){return V("DELETE",t.url,t.type,t.data,t.success,t.error)}},U={install:function(t,e){t.$formatDate=c,t.prototype.$formatDate=c,t.$copyObj=E,t.prototype.$copyObj=E,t.$http=O,t.prototype.$http=O}},Z=U;n.a.config.productionTip=!1,n.a.use(_.a),n.a.use(I.a),n.a.use(L.a),n.a.use(k.a),n.a.component(C.a.name,C.a),n.a.component(A.a.name,A.a),n.a.component(N.a.name,N.a),n.a.use(Z),i.beforeEach(function(t,e,o){t.meta.requireAuth?sessionStorage.userId?o():o({path:"/",query:{redirect:t.fullPath}}):o()}),new n.a({el:"#app",store:D,router:i,template:"<App/>",components:{App:s}})},"P/Us":function(t,e){},Qouw:function(t,e){},UwQd:function(t,e,o){"use strict";var n=o("DYun"),a=(n.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[n.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"vux-toast"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),o("transition",{attrs:{name:t.currentTransition}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[o("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?o("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):o("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var r=o("Z0/y")(a,s,!1,function(t){o("DVMf")},null,null);e.a=r.exports}},["NHnr"]);
//# sourceMappingURL=app.eb07a483e37355c52ba5.js.map