__do__loader__([32],{148:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){let n,e,o,i,s,a,c,r,u;function d(t){return(t<10?"0":"")+t}function _(t){this.find(".mosaic-countdown__item_"+t).next(".mosaic-countdown__separator").hide(),this.find(".mosaic-countdown__item_"+t).hide()}function l(t,s){let l=(t-((new Date).getTime()+s))/1e3;n=d(parseInt(String(l/86400))),l%=86400,e=d(parseInt(String(l/3600))),l%=3600,o=d(parseInt(String(l/60))),i=d(parseInt(String(l%60))),a.text(n),c.text(e),r.text(o),u.text(i),parseInt(n)<1&&(_.call(this,"days"),a.text("00")),parseInt(n)<1&&parseInt(e)<1&&(_.call(this,"hours"),c.text("00")),parseInt(n)<1&&parseInt(e)<1&&parseInt(o)<1&&(_.call(this,"minutes"),r.text("00")),0===parseInt(n)&&0===parseInt(e)&&0===parseInt(o)&&0===parseInt(i)&&(this.mosaicCountdown.call(this,"stop"),u.text("00"))}let f={init:function(t){let n=this,e=t.deltaOffset||0;const o=JSON.parse(n.attr("data-do-countdown"));a=n.find(".mosaic-countdown__item_days .mosaic-countdown__count_number"),c=n.find(".mosaic-countdown__item_hours .mosaic-countdown__count_number"),r=n.find(".mosaic-countdown__item_minutes .mosaic-countdown__count_number"),u=n.find(".mosaic-countdown__item_seconds .mosaic-countdown__count_number");const{isEnabledDays:i,isEnabledHours:d,isEnabledMinutes:_,isEnabledSeconds:f}=o.screen;i||(n.find(".mosaic-countdown__item_days").next(".mosaic-countdown__separator").hide(),n.find(".mosaic-countdown__item_days").hide()),d||(n.find(".mosaic-countdown__item_hours").prev(".mosaic-countdown__separator").hide(),n.find(".mosaic-countdown__item_hours").hide()),_||(n.find(".mosaic-countdown__item_minutes").prev(".mosaic-countdown__separator").hide(),n.find(".mosaic-countdown__item_minutes").hide()),f||(n.find(".mosaic-countdown__item_seconds").prev(".mosaic-countdown__separator").hide(),n.find(".mosaic-countdown__item_seconds").hide());const{expirationDate:m,expirationTime:p}=o.screen;if(m){const[t,n,o]=m.split("T")[0].split("-").map(Number),[i,a]=p?p.split(":").map(Number):[0,0],c=new Date(t,n-1,o,i,a);l.call(this,c,e),s=setInterval(()=>{l.call(this,c,e)},1e3)}},start:function(){s()},stop:function(){clearInterval(s),function(){this.find(".mosaic-countdown__separator").show(),this.find(".mosaic-countdown__item_days, .mosaic-countdown__item_hours, .mosaic-countdown__item_minutes, .mosaic-countdown__item_seconds").show()}.call(this)}};t.fn.mosaicCountdown=function(n){return f[n]?f[n].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==typeof n&&n?void t.error("\u041c\u0435\u0442\u043e\u0434 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c "+n+" \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043b\u044f jQuery.mosaicCountdown"):f.init.apply(this,arguments)}}},149:function(t,n,e){t.exports=function(){return new Promise(function(t){e.e(38).then(function(n){t(e(150))}.bind(null,e)).catch(e.oe)})}},67:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=this&&this.__awaiter||function(t,n,e,o){return new(e||(e=Promise))(function(i,s){function a(t){try{r(o.next(t))}catch(t){s(t)}}function c(t){try{r(o.throw(t))}catch(t){s(t)}}function r(t){t.done?i(t.value):new e(function(n){n(t.value)}).then(a,c)}r((o=o.apply(t,n||[])).next())})},i=this&&this.__generator||function(t,n){var e,o,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function c(s){return function(c){return function(s){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(i=2&s[0]?o.return:s[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;switch(o=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,o=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(t,a)}catch(t){s=[6,t],o=0}finally{e=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}};n.default=function(t){return o(this,void 0,void 0,function(){var n,o,s,a,c,r,u,d;return i(this,function(i){switch(i.label){case 0:return[4,e(88)()];case 1:return n=i.sent(),[4,e(148)];case 2:return o=i.sent(),s=window.mosaicTimeZone||window.top.mosaicTimeZone,a=0,s?(c=new Map([["Europe/Moscow",-180],["Europe/Kiev",-120],["Europe/Minsk",-180],["Asia/Almaty",-360],["Asia/Tashkent",-300]]),r=(new Date).getTimezoneOffset(),void 0!==(u=c.get(s))?[3,4]:[4,e(149)()]):[3,5];case 3:d=i.sent().default,u=d&&d.get&&d.get(s),i.label=4;case 4:void 0!==u&&(a=60*(r-u)*1e3),i.label=5;case 5:return o.default(n),void 0!==n(t).attr("data-do-countdown")&&n(t).mosaicCountdown({deltaOffset:a}),[2]}})})}},88:function(t,n,e){t.exports=function(){return new Promise(function(t){e.e(42).then(function(n){t(e(92))}.bind(null,e)).catch(e.oe)})}}});