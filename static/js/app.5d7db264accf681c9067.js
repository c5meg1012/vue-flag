webpackJsonp([0],[,function(t,e,s){var i=s(0)(s(4),s(24),null,null,null);t.exports=i.exports},,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(2),a=s(1),n=s.n(a);i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:n.a}})},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(9),a=s.n(i),n=s(22),r=s.n(n),o=s(20),c=s.n(o),l=s(21),u=s.n(l),f=s(23),h=s.n(f);e.default={name:"app",components:{Polidog:r.a,Buttons:c.a,Messages:u.a,StartButton:h.a},data:function(){return{isStarted:!1,time:{start:void 0,record:void 0,measuring:void 0},count:0,correctAnswerCount:0,flagState:{left:-1,right:-1},answer:{left:-1,right:-1},question:void 0,colorText:{red:"あか",white:"しろ"},movementText:{raise:["あげて！","さげないで！"],lower:["さげて！","あげないで！"]},message:{isCorrect:void 0,correctAnswerCount:void 0}}},methods:{initialize:function(){this.isStarted=!1,this.count=0,this.correctAnswerCount=0,this.flagState.right=-1,this.flagState.left=-1,this.answer.right=-1,this.answer.left=-1},random:function(t){return t[Math.floor(Math.random()*t.length)]},startGame:function(){this.isStarted=!0,this.updateQuestion()},endGame:function(){if(this.count>=10){var t=this.correctAnswerCount;this.message.correctAnswerCount="10問中"+t+"問正解でした！",this.initialize()}},updateData:function(t){this.incrementCount(),this.setFlagState(t),this.checkAnswer(),this.count<10&&this.updateQuestion()},incrementCount:function(){this.count+=1},setFlagState:function(t){switch(t){case"left":this.flagState.left*=-1;break;case"right":this.flagState.right*=-1}},checkAnswer:function(){a()(this.answer)===a()(this.flagState)?(this.message.isCorrect="正解！(｀・ω・´)",this.correctAnswerCount+=1):this.message.isCorrect="不正解...(´・ω・｀)"},updateQuestion:function(){var t=this.createAnswer();this.question=this.createQuestion(t)},createAnswer:function(){switch(this.random([0,1,2])){case 0:return this.answer.left=-1*this.flagState.left,this.answer.right=this.flagState.right,1;case 1:return this.answer.left=this.flagState.left,this.answer.right=-1*this.flagState.right,0;case 2:this.answer.left=this.flagState.left,this.answer.right=this.flagState.right;var t=[0,1];return t[Math.floor(Math.random()*t.length)]}},createQuestion:function(t){var e=this.classifyAnswer();return this.createQuestionText(e,t)},classifyAnswer:function(){return 1===this.answer.left?1===this.answer.right?0:1:1===this.answer.right?2:3},createQuestionText:function(t,e){var s=0===e?this.colorText.red:this.colorText.white,i=this.random([0,1]);switch(t){case 0:s+=this.movementText.raise[i];break;case 1:s+=0===e?this.movementText.lower[i]:this.movementText.raise[i];break;case 2:s+=0===e?this.movementText.raise[i]:this.movementText.lower[i];break;case 3:s+=this.movementText.lower[i]}return s},stopWatch:function(){this.isStarted&&(this.time.start=new Date,this.time.measuring=setInterval(this.displayTime,1)),this.isStarted||(this.displayTime(),clearInterval(this.time.measuring))},displayTime:function(){var t=new Date,e=t.getTime()-this.time.start.getTime(),s=Math.floor(e/36e5);e-=60*s*60*1e3;var i=Math.floor(e/6e4);e-=60*i*1e3;var a=Math.floor(e/1e3),n=e%1e3;this.time.record=s+"時間"+i+"分"+a+"秒"+n}},watch:{count:"endGame",isStarted:"stopWatch"}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"buttons",props:{flagState:Object,isStarted:Boolean,count:Number},methods:{moveFlag:function(t){this.$emit("updateData",t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"messages",props:{question:String,message:Object,time:Object}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"polidog",props:{flagState:Object}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"start-button",props:{isStarted:Boolean},methods:{startGame:function(){this.$emit("startGame")}}}},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){t.exports=s.p+"static/img/polidog_flag_left.f9011b2.png"},function(t,e,s){t.exports=s.p+"static/img/polidog_flag_raise_left.6c42c66.png"},function(t,e,s){t.exports=s.p+"static/img/polidog_flag_raise_right.3f092f6.png"},function(t,e,s){t.exports=s.p+"static/img/polidog_flag_right.aec1f5e.png"},function(t,e,s){function i(t){s(15)}var a=s(0)(s(5),s(28),i,null,null);t.exports=a.exports},function(t,e,s){function i(t){s(13)}var a=s(0)(s(6),s(26),i,null,null);t.exports=a.exports},function(t,e,s){function i(t){s(14)}var a=s(0)(s(7),s(27),i,null,null);t.exports=a.exports},function(t,e,s){function i(t){s(12)}var a=s(0)(s(8),s(25),i,null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("polidog",{attrs:{flagState:t.flagState}}),t._v(" "),s("buttons",{attrs:{flagState:t.flagState,isStarted:t.isStarted,count:t.count},on:{updateData:t.updateData}}),t._v(" "),s("messages",{attrs:{time:t.time,question:t.question,message:t.message}}),t._v(" "),s("start-button",{attrs:{isStarted:t.isStarted},on:{startGame:t.startGame}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"startbutton"},[s("button",{staticClass:"start",attrs:{disabled:t.isStarted},on:{click:function(e){e.stopPropagation(),t.startGame()}}},[t._v("\n    START！\n  ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"message"},[t._v(t._s(t.question))]),t._v(" "),s("div",{staticClass:"message"},[t._v(t._s(t.message.isCorrect))]),t._v(" "),s("div",{staticClass:"message"},[t._v(t._s(t.message.correctAnswerCount))]),t._v(" "),s("div",{staticClass:"message"},[t._v(t._s(t.time.record))])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"polidog"},[i("div",{staticClass:"right"},[1===t.flagState.right?i("img",{attrs:{src:s(18)}}):i("img",{attrs:{src:s(19)}})]),t._v(" "),i("div",{staticClass:"left"},[1===t.flagState.left?i("img",{attrs:{src:s(17)}}):i("img",{attrs:{src:s(16)}})])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"buttons"},[s("div",{staticClass:"item"},[s("button",{staticClass:"right",attrs:{disabled:!t.isStarted},on:{click:function(e){e.stopPropagation(),t.moveFlag("right")}}},[-1===t.flagState.right?s("span",[t._v("↑")]):s("span",[t._v("↓")])])]),t._v(" "),s("div",{staticClass:"item"},[s("button",{staticClass:"center",attrs:{disabled:!t.isStarted},on:{click:function(e){e.stopPropagation(),t.moveFlag("center")}}},[s("span",[t._v("Keep")])])]),t._v(" "),s("div",{staticClass:"item"},[s("button",{staticClass:"left",attrs:{disabled:!t.isStarted},on:{click:function(e){e.stopPropagation(),t.moveFlag("left")}}},[-1===t.flagState.left?s("span",[t._v("↑")]):s("span",[t._v("↓")])])])])])},staticRenderFns:[]}}],[3]);
//# sourceMappingURL=app.5d7db264accf681c9067.js.map