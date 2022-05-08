(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-pages-awaitingQueue-awaitingQueue"],{"0023":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("0323"),o=i("9fb5"),n=i("13f3"),r={data:function(){return{isGetData:!1,cardList:[],message:"候诊",isShowModal:!1,modalVisited:0,insureVisited:0,awaitQueueList:[]}},methods:{showModal:function(){this.isShowModal=!0},hideModal:function(){this.isShowModal=!1,this.modalVisited=this.insureVisited},changeCardId:function(t){this.insureVisited=this.modalVisited,this.isShowModal=!1,this.getAwaitQueue()},selectCardId:function(t){this.modalVisited=t},getUserCardInfo:function(){var t=this;uni.showLoading({title:"加载中"}),this.cardList=[],(0,o.getUserCardInfo)(uni.getStorageSync("accountID")).then(function(e){200===e.data.code&&(t.cardList=e.data.data,t.modalVisited=t.cardList[0].id,t.insureVisited=t.cardList[0].id,t.getAwaitQueue(),uni.hideLoading())}).catch(function(){uni.hideLoading(),error("获取就诊卡列表失败")})},getAwaitQueue:function(){var t=this;this.awaitQueueList=[],uni.showLoading({title:"加载中"}),(0,a.getAwaitQueue)(uni.getStorageSync("cardID"),uni.getStorageSync("accountID"),(0,n.formDate)(new Date,"YYYY-MM-DD")).then(function(e){200===e.data.code&&(e.data.data.list.length>0?(t.isGetData=!0,t.awaitQueueList=e.data.data.list):t.isGetData=!1),uni.hideLoading()}).catch(function(){uni.hideLoading(),error("获取排队列表失败")})}},onLoad:function(){this.getAwaitQueue()}};e.default=r},"0323":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.addAppoint=n,e.valifyBlacklist=r,e.getAppointRecord=s,e.getAllAppointRecord=u,e.getAwaitQueue=d,e.cancelAppoint=c;var o=a(i("2986"));function n(t){return(0,o.default)({url:"/visit/appointment",method:"post",data:t})}function r(t){return(0,o.default)({url:"/visit/black/verify?cardId="+t,method:"get"})}function s(t,e,i,a){return(0,o.default)({url:"/visit/appointment/search?pageNum="+t+"&pageSize="+e+"&cardId="+i+"&status="+a,method:"get"})}function u(t,e,i,a){return(0,o.default)({url:"/visit/appointment/all?cardId="+t+"&accountId="+e+"&pageNum="+i+"&pageSize="+a,method:"get"})}function d(t,e,i){return(0,o.default)({url:"/visit/appointment/today?cardId="+t+"&accountId="+e+"&date="+i,method:"get"})}function c(t){return(0,o.default)({url:"/visit/appointment/cancel/"+t,method:"put"})}},"0a6e":function(t,e,i){var a=i("17dc");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("73f7430e",a,!0,{sourceMap:!1,shadowMode:!1})},"13f3":function(t,e,i){"use strict";function a(t){switch(t){case 0:return"日";case 1:return"一";case 2:return"二";case 3:return"三";case 4:return"四";case 5:return"五";case 6:return"六"}}function o(t){return t>=10?t:"0"+t}function n(){var t=new Date,e=[];e.push({date:o(t.getDate()),day:a(t.getDay()),year:t.getFullYear(),month:o(t.getMonth()+1)});for(var i=0;i<6;i++)t.setDate(t.getDate()+1),e.push({date:o(t.getDate()),day:a(t.getDay()),year:t.getFullYear(),month:o(t.getMonth()+1)});return e}function r(t,e){var i=new Date(t),r=i.getFullYear();console.log(r);var s=i.getMonth()+1,u=i.getDate(),d=i.getDay(),c=i.getHours(),l=i.getMinutes(),f=i.getSeconds();switch(e){case"YYYY-MM-DD":return r+"-"+o(s)+"-"+o(u);case"YYYY-MM-DD hh:mm:ss":return r+"-"+o(s)+"-"+o(u)+" "+o(c)+":"+o(l)+":"+o(f);case"day":return a(d);case"date":return o(u);case"week-date":return n()}}Object.defineProperty(e,"__esModule",{value:!0}),e.formDate=r},"17dc":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\r\n * 根据一些普片的css样式\r\n **/.page-backgroud[data-v-58ef1d5e]{width:100%;height:100%;background:#f2f2f2}.visited-color[data-v-58ef1d5e]{color:#7ec0ee!important}.cut-long-text[data-v-58ef1d5e]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.tips-box[data-v-58ef1d5e]{width:100%;height:%?100?%;border:1px solid #f0f0f0;background:#fffef5}.tips-box .tips-inbox[data-v-58ef1d5e]{width:80%;height:100%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tips-box .tips-inbox .icon[data-v-58ef1d5e]{width:%?60?%;height:%?60?%;margin-right:%?30?%}.tips-box .tips-inbox .tips-text[data-v-58ef1d5e]{font-size:17px;font-weight:500;color:#a6a6a6}.gray-border-box[data-v-58ef1d5e]{width:90%;height:100%;margin:0 auto;border:1px solid #bbb;border-radius:8px;padding:%?10?%;background:#fff}.blue-column-border-box[data-v-58ef1d5e]{width:90%;height:%?90?%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%}.blue-column-border-box .blue-border[data-v-58ef1d5e]{width:5%;height:%?50?%;border-left:6px solid #7ec0ee}.blue-column-border-box .blue-text[data-v-58ef1d5e]{width:80%;font-size:18px;font-weight:700;color:#7ec0ee}.out-box[data-v-58ef1d5e]{width:90%;height:100%;margin:0 auto;margin-top:%?50?%;margin-bottom:%?40?%;background-color:#fff;border-radius:5px}.out-box .row-in-box[data-v-58ef1d5e]{width:95%;height:%?130?%;margin:0 auto;border-bottom:1px solid #f0f0f0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;line-height:%?130?%}.out-box .row-in-box .left[data-v-58ef1d5e]{width:70%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.out-box .row-in-box .right[data-v-58ef1d5e]{width:30%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.out-box .row-in-box .left-icon-text[data-v-58ef1d5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.out-box .row-in-box .left-icon-text .icon[data-v-58ef1d5e]{width:%?80?%;height:%?80?%;margin-right:%?30?%}.out-box .row-in-box .gray-text[data-v-58ef1d5e]{font-size:18px;font-weight:500;color:#a6a6a6}.out-box .row-in-box .orange-text[data-v-58ef1d5e]{font-size:18px;font-weight:500;color:#ffd39b;margin:0 %?10?%}.icon-up-position[data-v-58ef1d5e]{width:%?70?%;height:%?70?%;position:fixed;bottom:%?100?%;right:%?0?%}.bottom-hospital-box[data-v-58ef1d5e]{width:100%;height:100%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.bottom-hospital-box .hospital-box[data-v-58ef1d5e]{width:33%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?20?%}.bottom-hospital-box .hospital-box .hospital[data-v-58ef1d5e]{width:85%;height:85%;margin:0 auto;border-radius:10px;text-align:center;display:table}.bottom-hospital-box .hospital-box .hospital .text[data-v-58ef1d5e]{width:100%;height:100%;font-size:16px;font-weight:500;color:#fff;display:table-cell;vertical-align:middle}.bottom-hospital-box .hospital-box .visited-background[data-v-58ef1d5e]{background:#7ec0ee}.bottom-hospital-box .hospital-box .invisited-background[data-v-58ef1d5e]{background:#d1d1d1}',""])},2986:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;var o=a(i("795b")),n=i("4405"),r=i("ac96"),s=i("e66c");function u(t){return console.log((0,r.getToken)()),new o.default(function(e,i){0==uni.getStorageSync("isAlreadyLogin")||""==uni.getStorageSync("isAlreadyLogin")||null==uni.getStorageSync("isAlreadyLogin")?uni.showToast({title:"您暂未登录",icon:"none",mask:!0,duration:1e3}):uni.request({url:n.requestURL+t.url,method:t.method,data:t.data,header:{"content-type":"application/json",Authorization:(0,r.getToken)()||""},success:function(t){200===t.statusCode?(console.log("成功200"),e(t)):401===t.statusCode?(uni.showToast({title:"token凭证已过期，请重新登录",icon:"none",mask:!0,duration:1e3}),(0,s.tokenRefresh)().then(function(t){console.log(t),(0,r.setToken)(t.data)}),console.log((0,r.getToken)())):(console.log("失败1"),i(t))},fail:function(t){console.log(t),console.log("失败2"),i(t)}})})}function d(t,e,i){return u(t,e,i)}},"2aee":function(t,e,i){"use strict";i.r(e);var a=i("e2c0"),o=i("ea62");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("d836");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"58ef1d5e",null,!1,a["a"],r);e["default"]=u.exports},4405:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.requestURL=e.baseURL=e.appid=void 0;var a="xxx";e.appid=a;var o="xxxx";e.baseURL=o;var n="http://localhost:8080/hospital";e.requestURL=n},"9fb5":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.getUserBaseInfo=n,e.getUserCardInfo=r,e.addCard=s,e.getIsCardOverIimit=u,e.deleteCardInfo=d,e.updateCardInfo=c,e.updateBaseInfo=l;var o=a(i("2986"));function n(){return(0,o.default)({url:"/user/basic/info",method:"get"})}function r(t){return(0,o.default)({url:"/user/card/list/"+t,method:"get"})}function s(t,e){return(0,o.default)({url:"/user/card/"+t,method:"post",data:e})}function u(t){return(0,o.default)({url:"/user/card/number/"+t,method:"get"})}function d(t){return(0,o.default)({url:"/user/card/"+t,method:"delete"})}function c(t,e){return(0,o.default)({url:"/user/card/"+t,method:"put",data:e})}function l(t,e){return(0,o.default)({url:"/user/basic/"+t,method:"put",data:e})}},ac96:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setToken=o,e.getToken=n,e.removeToken=r;var a="jwt";function o(t){uni.setStorageSync(a,t)}function n(){return uni.getStorageSync(a)}function r(){uni.removeStorageSync(a)}},d187:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var o=a(i("795b")),n=i("4405"),r=i("ac96");function s(t){return new o.default(function(e,i){uni.request({url:n.requestURL+t.url,method:t.method,data:t.data,header:{Authorization:(0,r.getToken)()||""},success:function(t){console.log(t),200===t.statusCode?(console.log("成功200"),e(t)):(console.log("失败1"),i(t))},fail:function(t){console.log("失败2"),i(t)}})})}function u(t,e,i){return s(t,e,i)}},d836:function(t,e,i){"use strict";var a=i("0a6e"),o=i.n(a);o.a},e2c0:function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t._l(t.awaitQueueList,function(e){return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isGetData,expression:"isGetData"}],key:e.appointmentId,staticClass:"out-box"},[i("v-uni-view",{staticClass:"row-in-box"},[i("v-uni-view",{staticClass:"left-icon-text left"},[i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/center/paidui.png"}}),i("v-uni-text",{staticClass:"gray-text"},[t._v("前面还有")])],1),i("v-uni-text",{staticClass:"gray-text right"},[i("v-uni-text",{staticClass:"orange-text"},[t._v(t._s(e.waitPeopleNum))]),t._v("人候诊")],1)],1),i("v-uni-view",{staticClass:"row-in-box"},[i("v-uni-text",{staticClass:"left gray-text"},[t._v("您的就诊号为：")]),i("v-uni-text",{staticClass:"gray-text right"},[i("v-uni-text",{staticClass:"orange-text"},[t._v(t._s(e.queueNum))]),t._v("号")],1)],1),i("v-uni-view",{staticClass:"row-in-box"},[i("v-uni-text",{staticClass:"left gray-text"},[t._v("距离您就诊大约还有：")]),i("v-uni-text",{staticClass:"gray-text right"},[i("v-uni-text",{staticClass:"orange-text"},[t._v(t._s(e.waitTime))]),t._v("分钟")],1)],1),i("v-uni-view",{staticClass:"row-in-box"},[i("v-uni-text",{staticClass:"gray-text"},[t._v("医院："),i("v-uni-text",{staticClass:"orange-text"},[t._v(t._s(e.hospitalName))])],1)],1),i("v-uni-view",{staticClass:"row-in-box"},[i("v-uni-text",{staticClass:"gray-text"},[t._v("诊室："),i("v-uni-text",{staticClass:"orange-text"},[t._v(t._s(e.clinicName))])],1)],1)],1)}),t.isGetData?t._e():i("noDataPage",{attrs:{message:t.message}})],2)},n=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return n}),i.d(e,"a",function(){return a})},e66c:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.tokenRefresh=n,e.getPhoneCode=r,e.validataCode=s,e.userRegister=u,e.userLogin=d;var o=a(i("d187"));function n(t){return(0,o.default)({url:"/power/account/token?token="+t,method:"get"})}function r(t){return(0,o.default)({url:"/user/basic/message?phone="+t,method:"get"})}function s(t,e){return(0,o.default)({url:"/user/basic/code?phone="+t+"&code="+e,method:"post"})}function u(t){return(0,o.default)({url:"/user/basic/account/register",method:"post",data:t})}function d(t,e){return(0,o.default)({url:"/power/account/login?name="+t+"&password="+e,method:"get"})}},ea62:function(t,e,i){"use strict";i.r(e);var a=i("0023"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a}}]);