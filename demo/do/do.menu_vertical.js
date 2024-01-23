__do__loader__([10],{100:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e;e=function(){function e(e,t){this.a=e,this.b=t}function t(e,t,i){this.a=e,this.b=t,this.c=i}return e.prototype.len=function(){var e=this.a.x-this.b.x,t=this.a.y-this.b.y;return Math.sqrt(e*e+t*t)},t.prototype.square=function(){var t=new e(this.a,this.b).len(),i=new e(this.b,this.c).len(),n=new e(this.a,this.c).len(),o=(t+i+n)/2;return Math.sqrt(o*(o-t)*(o-i)*(o-n))},t.prototype.hasPoint=function(e,i){var n=new t(this.a,this.b,e).square()+new t(this.a,this.c,e).square()+new t(this.b,this.c,e).square();return Math.abs(n-this.square())<(i="undefined"===typeof i?0:i)},window.s3Math={Line:e,Triangle:t},window.s3Math},"function"===typeof define&&i(95)?define([],e):e()}},115:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t;t=function(e,t){var i;function n(){var t=this;if(!t.settings.debug&&-1===document.location.search.indexOf("test"))return!1;i||(i={},e.each(["a","b","c"],function(t,n){var o={id:"s3-menu-allin-point-"+n,class:"s3-menu-allin-point",html:n};i[n]=e("<div></div>",o),e(document.body).append(i[n])})),e.each(i,function(e,i){i.css({left:t.triangle[e].x,top:t.triangle[e].y})})}e.s3MenuAllInTypes={_popup:{activate:function(e){var t=e.$item.siblings();e.$item.find("> ul").parent().addClass(this.settings.activeClass),t.removeClass(this.settings.activeClass),this.hide(t.children("ul")),this.show(e.$sub),this.hide(e.$sub.find("ul"))},deactivate:function(e){e.$item.removeClass(this.settings.activeClass),this.hide(e.$sub)},exit:function(){var e=this;setTimeout(function(){e.$el.find("li").removeClass(e.settings.activeClass),e.hide(e.$el.find("ul"))},50)}},auto:function(t){t.on("activate",function(t){var i=t.$sub;if(i.length){var n=e(window).width(),o=t.$item,s=i.is(":hidden");i.show();var a,l=o.position(),r=o.offset(),u=o.width(),c=i.outerWidth(),d=o.height(),f=parseInt(i.css("height"),10),h={},p=this.triangle.b,v=this.triangle.c,m=!1,g=!1,w=document.documentElement.scrollHeight<=r.top+f+d;f<r.top&&w&&(g=!0),1===t.level?(a=r.left+c,h.left=a>n?l.left+u-c:l.left,h.top=l.top+o.height(),g&&(h.top=l.top-f)):((a=r.left+u+c)>n?(h.left=l.left-c,m=!0):h.left=l.left+u,h.top=l.top-parseInt(o.closest("ul").css("paddingTop")),g&&(h.top=l.top+d)),i.css(h);var _=i.offset();1===t.level?(p.y=v.y=_.top,g&&(p.y=v.y=_.top+f),p.x=_.left,v.x=_.left+c):(p.y=_.top,v.y=_.top+i.height(),p.x=v.x=m?_.left+c:_.left),s&&i.hide()}}),t.on(this._popup)},bottom:function(t){t.on("activate",function(t){var i=t.$sub;if(i.length){var n=e(window).width(),o=t.$item,s=i.is(":hidden");i.show();var a,l=o.position(),r=o.offset(),u=o.width(),c=i.outerWidth(),d={},f=this.triangle.b,h=this.triangle.c,p=!1;1===t.level?(a=r.left+c,d.left=a>n?l.left+u-c:l.left,d.top=l.top+o.height()):((a=r.left+u+c)>n?(d.left=l.left-c,p=!0):d.left=l.left+u,d.top=l.top-parseInt(o.closest("ul").css("paddingTop"))),i.css(d);var v=i.offset();1===t.level?(f.y=h.y=v.top,f.x=v.left,h.x=v.left+c):(f.y=v.top,h.y=v.top+i.height(),f.x=h.x=p?v.left+c:v.left),s&&i.hide()}}),t.on(this._popup)},top:function(t){t.on("activate",function(t){var i=t.$sub;if(i.length){var n=e(window).width(),o=t.$item,s=i.is(":hidden");i.show();var a,l=o.position(),r=o.offset(),u=o.width(),c=o.height(),d=i.width(),f=parseInt(i.css("height"),10),h={},p=this.triangle.b,v=this.triangle.c,m=!1;1===t.level?(a=r.left+d,h.left=a>n?l.left+u-d:l.left,h.top=l.top-f):((a=r.left+u+d)>n?(h.left=l.left-d,m=!0):h.left=l.left+u,h.top=l.top+c),i.css(h);var g=i.offset();1===t.level?(p.y=v.y=g.top+f,p.x=g.left,v.x=g.left+d):(p.y=g.top,v.y=g.top+i.height(),p.x=v.x=m?g.left+d:g.left),s&&i.hide()}}),t.on(this._popup)},right:function(t){t.on("activate",function(t){var i=t.$sub;if(i.length){var n=e(window).width(),o=t.$item,s=i.is(":hidden");i.show();var a,l=o.position(),r=o.offset(),u=o.width(),c=i.width(),d={},f=this.triangle.b,h=this.triangle.c,p=!1;a=r.left+u+c,d.top=l.top-parseInt(o.closest("ul").css("paddingTop")),a>n?(d.left=l.left-c,p=!0):d.left=l.left+u,i.css(d);var v=i.offset();f.y=v.top,h.y=v.top+i.height(),f.x=h.x=p?v.left+c:v.left,s&&i.hide()}}),t.on(this._popup)},left:function(e){e.on("activate",function(e){var t=e.$sub;if(t.length){var i=e.$item,n=t.is(":hidden");t.show();var o,s=i.position(),a=i.offset(),l=i.width(),r=t.width(),u={},c=this.triangle.b,d=this.triangle.c,f=!1;o=a.left-r,u.top=s.top-parseInt(i.closest("ul").css("paddingTop")),o<0?(u.left=s.left+r,f=!0):u.left=s.left-l,t.css(u);var h=t.offset();c.y=h.top,d.y=h.top+t.height(),c.x=d.x=f?h.left:h.left+r,n&&t.hide()}}),e.on(this._popup)},dropdown:function(t,i){i=i||"a",t.$el.on({click:function(){var i=e(this),n=i.closest("li").children("ul");return!n.length||!n.is(":animated")&&(n.is(":hidden")?t.show(n,function(){i.addClass(t.settings.openClass)}):t.hide(n,function(){i.removeClass(t.settings.openClass)}),!1)}},i)},_dropdownPlus:function(t,i){var n=t.$el.children("li"),o=e.extend({},t,{$el:n});e.s3MenuAllInTypes.dropdown(o,"> a"),n.children("ul").s3MenuAllIn(e.extend({},t.settings,{type:i}))},"dropdown+left":function(e){this._dropdownPlus(e,"left")},"dropdown+right":function(e){this._dropdownPlus(e,"right")}},e.fn.s3MenuAllIn=function(i){var o="ontouchstart"in document.documentElement||navigator.maxTouchPoints;return i=e.extend({deviation:10,type:"right",exitTimeout:500,activateTimeout:0,deactivateTimeout:200,exclude:"ul",debug:!1,showFn:e.fn.show,showTime:0,hideFn:e.fn.hide,hideTime:0,activeClass:"is-opened",hasClass:"has-child",openClass:"is-opened"},i),this.each(function(){var s=e(this),a=e.s3Eventable({settings:i,triangle:new t.Triangle({},{},{}),$el:s,$li:s.find("li"),$ul:s.find("ul"),isBlocked:!1,isExit:!0,active:{}});e.each(["show","hide"],function(t,i){a[i]=function(t,n){t.length&&(t.stop(!0,!0),this.settings[i+"Fn"].call(t,this.settings[i+"Time"],n||e.noop))}}),i.hasClass&&a.$ul.parent("li").addClass(i.hasClass),o||i.firstClickOpen||(e(document).on("mousemove",function(t){if(a.isBlocked){var n=e(t.target),o=n.not(i.exclude).closest("li"),s=a.triangle.hasPoint({x:t.pageX,y:t.pageY},i.deviation),l=!!a.$el.has(n).length,r=!1;if(o.length&&a.active.$sub&&(r=o.closest("ul").get(0)===a.active.$sub.get(0)),l&&(a.isExit=!1,clearTimeout(a.exitTimeoutId),clearTimeout(a.deactivateTimeoutId)),r)a.isBlocked=!1,o.trigger("mouseenter");else if(l){var u=e.extend({},a.active);s?function(e){a.deactivateTimeoutId=setTimeout(function(){a.isBlocked=!1,a.trigger("deactivate",e),o.trigger("mouseenter")},i.deactivateTimeout)}(u):(a.isBlocked=!1,o.trigger("mouseenter"))}else s?(clearTimeout(a.exitTimeoutId),a.exitTimeoutId=setTimeout(function(){a.isBlocked=!1,a.trigger("exit")},i.deactivateTimeout)):(a.isExit=!0,a.isBlocked=!1,clearTimeout(a.deactivateTimeoutId),clearTimeout(a.exitTimeoutId),a.exitTimeoutId=setTimeout(function(){a.trigger("exit")},i.exitTimeout))}}),a.$el.on({mouseenter:function(t){if(t.stopPropagation(),a.isExit=!1,!a.isBlocked){var i,n=e(this),o=n.children("ul"),s=o.parentsUntil(a.$el,"li");i={$item:n,$sub:o,$parents:s,$ul:n.parent(),level:s.length},clearTimeout(a.exitTimeoutId),clearTimeout(a.activateTimeoutId),a.activateTimeoutId=setTimeout(function(){a.isExit||(a.isBlocked=!1,a.trigger("activate",i),a.active=i)},a.settings.activateTimeout)}},mouseleave:function(t){if(!a.isBlocked&&(o||!a.settings.firstClickOpen)){a.triangle.a.x=t.pageX,a.triangle.a.y=t.pageY,a.isBlocked=!0;var i=e(this),n=i.children("ul"),s=n.parentsUntil(a.$el,"li");a.active={$item:i,$sub:n,$parents:s,$ul:i.parent(),level:s.length},clearTimeout(a.activateTimeoutId)}}},"li")),(o||i.firstClickOpen)&&(e(document).on("click",function(t){e(t.target).closest(a.$el).length||(clearTimeout(a.exitTimeoutId),a.exitTimeoutId=setTimeout(function(){a.isBlocked=!1,a.trigger("exit")},i.deactivateTimeout))}),a.$el.on({click:function(t){const n=e(this),o=n.children("ul"),s=o.parentsUntil(a.$el,"li");if(t.stopPropagation(),o.length)if(o.is(":hidden"))t.preventDefault(),l={$item:n,$sub:o,$parents:s,$ul:n.parent(),level:s.length},clearTimeout(a.exitTimeoutId),clearTimeout(a.activateTimeoutId),a.activateTimeoutId=setTimeout(function(){a.isBlocked=!1,a.trigger("activate",l),a.active=l},a.settings.activateTimeout);else if(e(t.target).closest(".hor-menu__sub_icon, .ver-menu__sub_icon").length||1===s.length){const e={$item:n,$sub:o,$parents:s,$ul:n.parent(),level:s.length};clearTimeout(a.exitTimeoutId),a.exitTimeoutId=setTimeout(function(){a.isBlocked=!1,a.trigger("deactivate",e)},i.deactivateTimeout)}var l}},"li")),(o||i.firstClickOpen||i.cancelForward)&&a.$el.on({click:function(t){const n=e(this),s=n.siblings("ul"),l=a.$ul.has(n).length,r=s.length,u=n.parents("."+a.settings.subListClassName).length;i.cancelForward&&(!l||a.settings.isMore&&1===u)&&r&&t.preventDefault(),(o||i.firstClickOpen)&&(s.is(":hidden")?t.preventDefault():e(t.target).closest(".hor-menu__sub_icon, .ver-menu__sub_icon").length&&t.preventDefault())}},"a"),e.s3MenuAllInTypes[i.type](a),a.on("activate",n)})}},"function"===typeof define&&i(95)?define(["jquery","s3/misc/math/0.0.1/s3.math","s3/misc/eventable/0.0.1/s3.eventable"],t):t(e,s3Math)}},58:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))(function(o,s){function a(e){try{r(n.next(e))}catch(e){s(e)}}function l(e){try{r(n.throw(e))}catch(e){s(e)}}function r(e){e.done?o(e.value):new i(function(t){t(e.value)}).then(a,l)}r((n=n.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var i,n,o,s,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(s){return function(l){return function(s){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{i=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}};t.default=function(e){return n(this,void 0,void 0,function(){function t(){f.find(".has-child, .is-opened").removeClass("has-child is-opened"),f.find("ul").attr("style","")}function n(e,i){if(void 0!==e)switch(e.toLowerCase()){case"dropdown":f.data("type-menu",i).off("click.verMenu").find("li."+v).removeClass(v),f.find("ul").attr("style","");break;case"popup_right":f.data("type-menu",i).off("mouseenter").off("mouseleave"),t();break;case"dropdown_popup":f.data("type-menu",i).off("click.verMenu").find("li."+v).removeClass(v),f.find("> li > ul").off("mouseenter").off("mouseleave"),t()}else f.data("type-menu",i)}function s(e,t){f.find("ul:visible").each(function(e,t){t.closest("li").classList.add(v)}),f.data("type-menu",e).on("click.verMenu",t,function(e){var t=l(e.target),i=t.closest("a"),n=i.parents("li").length;if(t.closest("li").find("> ul").length){var o=m();(t.closest(p).length||o.cancelForward&&1===n||o.firstClickOpen&&!t.closest("li").hasClass("is-opened"))&&(e.preventDefault(),i.parent("li").toggleClass(v).find("> "+h).slideToggle(250))}})}function a(){var e=m(),t=f.data("type-menu")||void 0,i=e.mode;t!==i&&(w.cancelForward&&f.find("> li.has-child > a").attr("href","javascript:void(0)"),"dropdown"===i?(n(t,i),s("dropdown","li > a")):"popup_right"===i?(n(t,i),f.s3MenuAllIn(w)):"dropdown_popup"===i&&(n(t,i),s("dropdown_popup","> li > a"),f.find("> li > ul").s3MenuAllIn(Object.assign(w,{cancelForward:!1}))))}var l,r,u,c,d,f,h,p,v,m,g,w;return o(this,function(t){switch(t.label){case 0:return[4,i(88)()];case 1:return l=t.sent(),[4,i(89)];case 2:return r=t.sent(),[4,i(99)];case 3:return u=t.sent(),[4,i(100)];case 4:return c=t.sent(),[4,i(115)];case 5:return d=t.sent(),u.default(l),c.default(),d.default(l),f=l(e).find(".ver-menu__list"),h=".ver-menu__sub_list",p=".ver-menu__icon, .ver-menu__sub_icon",v="is-opened",m=r.default("data-do-menu_vertical",e),g=m(),w={type:"right",activateTimeout:g.delayIn,exitTimeout:g.delayOut,showTime:g.delayIn,hideTime:g.delayOut,showFn:l.fn.fadeIn,hideFn:l.fn.fadeOut,cancelForward:Boolean(g.cancelForward)},a(),l(window).on("resize",function(){requestAnimationFrame(a)}),[2]}})})}},86:function(e,t){e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(i){!t.hasOwnProperty(i)||null===t[i]||"object"!==typeof t[i]&&"function"!==typeof t[i]||Object.isFrozen(t[i])||e(t[i])}),t}},87:function(e,t,i){"use strict";i.d(t,"b",function(){return s}),i.d(t,"c",function(){return l}),i.d(t,"a",function(){return n});var n,o=i(86),s=(i.n(o),"screen"),a=o(["(min-width: 1920px)","(min-width: 1440px)","(min-width: 1280px)",s,"(max-width: 991px)","(max-width: 767px)","(max-width: 479px)"]),l=a.indexOf(s);!function(e){e.BIG_SCREEN3=0,e.BIG_SCREEN2=1,e.BIG_SCREEN1=2,e.SCREEN=3,e.TABLET_LANDSCAPE=4,e.TABLET_PORTRAIT=5,e.MOBILE=6}(n||(n={})),t.d=a},88:function(e,t,i){e.exports=function(){return new Promise(function(e){i.e(42).then(function(t){e(i(92))}.bind(null,i)).catch(i.oe)})}},89:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(87),o=i(90);t.default=function(e,t){const i=n.d.slice().reverse();let s={};try{s=JSON.parse(t.getAttribute(e)||"")}catch(i){return void console.warn(`Error media: ${e} - ${t}`)}return function(t){const a=n.d[t]||i.find(e=>window.matchMedia(e).matches);let l={};const r=n.d.indexOf(a)<n.c?i.slice():n.d.slice();let u=r.splice(n.c,r.length-n.c);for(let e=0;e<u.length;e++){const t=u[e];if(l=Object.assign(l,s[t]),t===a)break}return Object(o.a)(e,l),l}}},90:function(e,t,i){"use strict";var n=i(91);t.a=function(e,t){if(n.a.hasOwnProperty(e)){var i=n.a[e],o=function(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];i.includes(t)&&"boolean"!==typeof n?e[t]="0"!==n&&Boolean(n):"string"!==typeof n||isNaN(+n)||(e[t]=Number(n)),"object"===typeof n&&o(n)}};o(t)}}},91:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var n=i(86),o=(i.n(n),n({"data-do-accordion":["isOpened","closeOther","childrenAsync"],"data-do-auth_popup_btn":["showUserName","showSettings","showOrders","showLogout","popupAfterAuthorized"],"data-do-form_auth":["isNativeStyle","isDrop","otherHeaderAfterAuth","showUserName","isToggle","isHeader","isRemember","isRegistration","isForgot","showSocial"],"data-do-blocklist":["slider","loop","returnToFirst","swipe","lastSlideArrow","center","controlsGroup","autoplay","childrenAsync","isMarquee","hoverStop"],"data-do-checkbox":["required"],"data-do-checkbox_group":["required"],"data-do-content":["image","gallery","text","headers"],"data-do-countdown":["isEnabledDays","isEnabledHours","isEnabledMinutes","isEnabledSeconds"],"data-do-form":["nativeStyle","showTitleAfterSend","disabledNativeStyleSelect"],"data-do-image":["scrollZoom","zoomOnClick"],"data-do-input":["required"],"data-do-input_date":["required"],"data-do-input_date_interval":["required"],"data-do-input_email":["required"],"data-do-input_phone":["required"],"data-do-link_universal":["blank","sidepanel"],"data-do-link_universal_block":["blank","sidepanel"],"data-do-link_universal_button":["blank","sidepanel"],"data-do-popup":["wmshowpopup"],"data-do-radio_group":["required"],"data-do-marquee":["circular","hoverStop","invertHover"],"data-do-menu_column":["dropdown","more","cancelForward","firstClick"],"data-do-menu_horizontal":["cancelForward","more","firstClickOpen"],"data-do-menu_vertical":["cancelForward","firstClickOpen"],"data-do-s3_article":["isHeadBlock","isAllLink","isImage","isDate","isAnnounce","isLinkMore","isDay","isMonth","isYear"],"data-do-s3_article2":["isHeadBlock","isAllLink","isImage","isDate","isAnnounce","isLinkMore","isDay","isYear"],"data-do-s3_board":["isDate","isDay","isMonth","isYear"],"data-do-s3_news_constructor":["isHeadNews","isAllNews","isImage","isDate","isAnnounce","isLinkMore","isDay","isYear"],"data-do-s3_unified_news_constructor":["isHeadBlock","isAllLink","isImage","isDate","isAnnouncement","isLinkMore","isDay","isYear","isTime","isMonthFirst","isDelimiterDayMonth","isDelimiterMonthYear","isDelimiterYearTime","isCustomDateFormat","isTags","isDelimiterTag"],"data-do-s3_vote_constructor":["isResults","isResultsInfo","isNativeStyle","isHideTextResult","isOtherAnswer"],"data-do-section":["scroll","smooth"],"data-do-select":["required"],"data-do-select_multiple":["required"],"data-do-slider":["loop","returnToFirst","lastSlideArrow","controlsGroup","swipe","autoplay","childrenAsync","previews","thumbs","thumbsSlider","independentScrolling","thumbsCenterMode"],"data-do-spoiler":["isOpened"],"data-do-svg_image":["stretch"],"data-do-tabs":["childrenAsync"],"data-do-textarea":["required"],"data-do-upload_file":["required"],"data-do-video":["viewportAutoPlay"],"data-do-video2":["viewportAutoPlay"]}))},95:function(e,t){(function(t){e.exports=t}).call(t,{})},99:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t;t=function(e){e.s3Eventable=function(t){return(t=t||{})._events={},t._lock=!1,t.on=function(i,n){if(!t._lock){if("object"===e.type(i))return e.each(i,function(e,i){t.on(e,i)}),this;this._events[i]||(this._events[i]=e.Callbacks()),this._events[i].add(n)}return this},t.off=function(e,i){return this._events[e]&&!t._lock&&(i?this._events[e].remove(i):this._events[e].empty()),this},t.trigger=function(e){return this._events[e]&&this._events[e].fireWith(t,[].slice.call(arguments,1)),this},t.lock=function(){t._lock=!0},t.unlock=function(){t._lock=!1},t}},"function"===typeof define&&i(95)?define(["jquery"],t):t(e)}}});