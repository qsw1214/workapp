webpackJsonp([14],{FRpF:function(t,e){},P2ue:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("4YfN"),n=a.n(o),i=a("9rMa"),c=a("nxAZ"),r=(c.a,n()({},Object(i.c)({vm:function(t){return t.common.people.vm},chartData:function(t){return t.common.people.chartData},lineConfig:function(t){return t.common.lineConfig},histogramConfig:function(t){return t.common.histogramConfig}})),n()({},Object(i.b)({getPeopleItem:"common/people/getPeopleItem"})),{name:"",components:{XHeader:c.a},computed:n()({},Object(i.c)({vm:function(t){return t.common.people.vm},chartData:function(t){return t.common.people.chartData},lineConfig:function(t){return t.common.lineConfig},histogramConfig:function(t){return t.common.histogramConfig}})),created:function(){this.$route.query.itemId?this.getPeopleItem(this.$route.query.itemId):(this.$vux.toast.text("无法取到当前要展示的图表的id，3秒回返回！","top"),setTimeout(function(t){window.history.back()},3e3))},methods:n()({},Object(i.b)({getPeopleItem:"common/people/getPeopleItem"}))}),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inner stats"},[a("x-header",{attrs:{title:"人月统计-图表展示"}},[a("div",{staticClass:"stats-head-right",attrs:{slot:"right"},slot:"right"},[a("i",{staticClass:"icon-curve",on:{click:function(e){t.vm.charts=1}}}),t._v(" "),a("i",{staticClass:"icon-stats",on:{click:function(e){t.vm.charts=2}}})])]),t._v(" "),a("div",{staticClass:"stats-people"},[a("ve-line",{directives:[{name:"show",rawName:"v-show",value:1==t.vm.charts,expression:"vm.charts == 1"}],attrs:{width:"100%",height:"250px",data:t.chartData.peopleData,"legend-visible":!1,dataZoom:t.lineConfig.dataZoom,"after-config":t.lineConfig.callback,title:{text:t.chartData.name,left:10},"data-empty":t.vm.empty,loading:t.vm.loading,settings:t.lineConfig.chartSettings}}),t._v(" "),a("ve-histogram",{directives:[{name:"show",rawName:"v-show",value:2==t.vm.charts,expression:"vm.charts == 2"}],attrs:{width:"100%",height:"250px",data:t.chartData.peopleData,title:{text:t.chartData.name,left:10},"legend-visible":!1,"data-zoom":t.histogramConfig.dataZoom,"after-config":t.histogramConfig.callback,"data-empty":t.vm.empty,loading:t.vm.loading,settings:t.histogramConfig.chartSettings}})],1)],1)},staticRenderFns:[]};var m=a("Z0/y")(r,s,!1,function(t){a("FRpF")},"data-v-50c45a57",null);e.default=m.exports}});
//# sourceMappingURL=14.7a673d17cfacec0d2b2a.js.map