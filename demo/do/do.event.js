__do__loader__([37],{144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=(t,n)=>{const o=e(t).find("img"),c=o.attr("data-src-alt")||o.attr("src-alt")||o.attr("src-big");if(c){const t="mosaic-event-src-modified--"+n.event,o=e("#"+n.selectedTag).find("img"),i=o.attr("src");o.hasClass(t)||o.attr("src-old",i).attr("src",c).addClass(t)}};let n={self:{alert:function(e){console.log("alert")},setSrcAlt:function(e,n){t(e,n)}},select:{show:function(t,n){const o=e("#"+n.selectedTag),c="mosaic-event-showed--"+n.event,i="mosaic-event-hidden--"+n.event;o.show().removeClass(i).addClass(c)},hide:function(t,n){const o="mosaic-event-hidden--"+n.event,c=["mosaic-event-showed--"+n.event,"mosaic-event-toggled--"+n.event];e("#"+n.selectedTag).hide().removeClass(c.join(" ")).addClass(o)},toggle:function(t,n){const o=e("#"+n.selectedTag),c="mosaic-event-toggled--"+n.event,i="mosaic-event-hidden--"+n.event;o.toggle().removeClass(i).toggleClass(c)},setSrcAlt:function(e,n){t(e,n)},unsetSrcAlt:function(t){const n=e("#"+t.selectedTag).find("img"),o=n.attr("src-old"),c="mosaic-event-src-modified--"+t.event;n.attr("src",o).removeAttr("src-old").removeClass(c)}}},o={click:function(t){if(void 0!==t.element){let o=this;o.on("click",function(e){"select"!==t.element&&"self"!==t.element||void 0===t.selectedTag?n.self[t.action](o):n.select[t.action](o,t),e.stopPropagation()}),e("#"+t.selectedTag).on("click",function(e){e.stopPropagation()})}},hover:function(t){if(void 0!==t.element){let o=this;o.on("mouseenter",function(){"select"!==t.element&&"self"!==t.element||void 0===t.selectedTag?n.self[t.action](o):n.select[t.action](o,t)});let i=e("#"+t.selectedTag);o.on("mouseleave",function(e){i.length&&!i.get(0).contains(e.toElement)&&i.get(0)!==e.toElement&&(e.data={options:t},c(e))}),i.on("mouseleave",function(e){e.data={options:t},c(e)})}}},c=function(e){let t=e.data.options;"setSrcAlt"===t.action&&n.select.unsetSrcAlt(t)};e.fn.mosaicEvent=function(t){return o[t]?o[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==typeof t&&t?void e.error("\u041c\u0435\u0442\u043e\u0434 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c "+t+" \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043b\u044f jQuery.mosaicEvent"):o.init.apply(this,arguments)}}},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(c,i){function s(e){try{r(o.next(e))}catch(e){i(e)}}function a(e){try{r(o.throw(e))}catch(e){i(e)}}function r(e){e.done?c(e.value):new n(function(t){t(e.value)}).then(s,a)}r((o=o.apply(e,t||[])).next())})},c=this&&this.__generator||function(e,t){var n,o,c,i,s={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(c=2&i[0]?o.return:i[0]?o.throw||((c=o.return)&&c.call(o),0):o.next)&&!(c=c.call(o,i[1])).done)return c;switch(o=0,c&&(i=[2&i[0],c.value]),i[0]){case 0:case 1:c=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(c=(c=s.trys).length>0&&c[c.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!c||i[1]>c[0]&&i[1]<c[3])){s.label=i[1];break}if(6===i[0]&&s.label<c[1]){s.label=c[1],c=i;break}if(c&&s.label<c[2]){s.label=c[2],s.ops.push(i);break}c[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],o=0}finally{n=c=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};t.default=function(e){return o(this,void 0,void 0,function(){var t,o;return c(this,function(c){switch(c.label){case 0:return[4,n(92)()];case 1:return t=c.sent(),[4,n(144)];case 2:return c.sent().default(t),void 0!==(o=JSON.parse(t(e).attr("data-do-event")))&&void 0!==o.event&&"none"!==o.event&&t(e).mosaicEvent(o.event,o),[2]}})})}},92:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(46).then(function(t){e(n(96))}.bind(null,n)).catch(n.oe)})}}});