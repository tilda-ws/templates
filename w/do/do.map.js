__do__loader__([11],{105:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(n=window)}e.exports=n},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(134);let r=n(135);r.KEY="";t.default=function(e){let t={init:function(t){function n(e){return e.split(",")}if(t.center=n(t.center),e.each(t.data,function(e,t){t.coords=n(t.coords)}),"google"===t.type){if(window.hasOwnProperty("mapKeys")&&window.mapKeys.hasOwnProperty("google")){var a=window.mapKeys.google;a&&(r.KEY=a)}r.LANGUAGE=t.lang,r.load(function(n){var o=new n.maps.Map(document.getElementById(t.id),{zoom:parseInt(t.zoom),scrollwheel:!1,center:new n.maps.LatLng(t.center[0],t.center[1])}),r=t.data.map(function(e,t){var r=new n.maps.Marker({position:new n.maps.LatLng(e.coords[0],e.coords[1]),title:e.name}),a=new n.maps.InfoWindow({content:'<div class="baloon-content"><h3 style="margin: 0; padding-bottom: 3px;">'+e.name+"</h3>"+e.desc+"</div>"});return n.maps.event.addListener(r,"click",function(){a.open(o,r)}),r});e.getScript("https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js",function(){new MarkerClusterer(o,r,{imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"})})},!0)}else{var i="ru"==t.lang?"ru_RU":"en_US",s="";if(window.hasOwnProperty("mapKeys")&&window.mapKeys.hasOwnProperty("yandex")){var l=window.mapKeys.yandex;l&&(s="&apikey="+l)}o.load("https://api-maps.yandex.ru/2.1/?lang="+i+s,!0).then(e=>{for(var n=new e.Map(t.id,{center:t.center,zoom:t.zoom,behaviors:["drag","rightMouseButtonMagnifier"]}),o=new e.Clusterer({preset:"islands#invertedBlueClusterIcons"}),r=[],a=0,i=t.data.length;a<i;a++)r[a]=new e.Placemark(t.data[a].coords,(d=a,{balloonContentHeader:'<div style="margin: 0; padding: 0 10px">'+(c=t.data[a]).name+"</div>",balloonContentBody:'<div style="padding: 0 10px">'+c.desc+"</div>",clusterCaption:"\u043c\u0435\u0442\u043a\u0430 <strong>"+d+"</strong>"}),{preset:"islands#blueIcon"});o.add(r),n.geoObjects.add(o)})}var d,c}};e.fn.mosaicMap=function(n){return t[n]?t[n].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==typeof n&&n?void e.error("\u041c\u0435\u0442\u043e\u0434 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c "+n+" \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043b\u044f jQuery.mosaicMap"):t.init.apply(this,arguments)}}},134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){t.load=function(t,n=!1){return t=t||"https://api-maps.yandex.ru/2.1/?lang=ru_RU",this.promise=this.promise||new Promise(function(e,o){var r=document.createElement("script");r.type="text/javascript",r.src=t,r.onload=e,r.onerror=function(e){return o(e)},n&&r.setAttribute("defer","defer"),document.body.appendChild(r)}).then(function(){var n,o,r=(n=t,null===(o=RegExp("[\\?&]ns=([^&#]*)").exec(n))?"":decodeURIComponent(o[1].replace(/\+/g," ")));return r&&"ymaps"!==r&&(0,eval)("var ymaps = "+r+";"),new Promise(function(t){if(!e.ymaps)throw new Error("Failed to find ymaps in the global scope");if(!e.ymaps.ready)throw new Error("ymaps.ready is missing");return ymaps.ready(t)})}),this.promise}}.call(t,n(105))},135:function(e,t,n){var o,r;!function(a,i){if(null===a)throw new Error("Google-maps package can be used only in browser");void 0===(r="function"===typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=r)}("undefined"!==typeof window?window:null,function(){"use strict";var e=null,t=null,n=!1,o=[],r=[],a=null,i={URL:"https://maps.googleapis.com/maps/api/js",KEY:null,LIBRARIES:[],CLIENT:null,CHANNEL:null,LANGUAGE:null,REGION:null,VERSION:"3.31",WINDOW_CALLBACK_NAME:"__google_maps_api_provider_initializator__",_googleMockApiObject:{},load:function(e,r=!1){null===t?!0===n?e&&o.push(e):(n=!0,window[i.WINDOW_CALLBACK_NAME]=function(){s(e)},i.createLoader(r)):e&&e(t)},createLoader:function(t=!1){(e=document.createElement("script")).type="text/javascript",e.src=i.createUrl(),t&&e.setAttribute("defer","defer"),document.body.appendChild(e)},isLoaded:function(){return null!==t},createUrl:function(){var e=i.URL;return e+="?callback="+i.WINDOW_CALLBACK_NAME,i.KEY&&(e+="&key="+i.KEY),i.LIBRARIES.length>0&&(e+="&libraries="+i.LIBRARIES.join(",")),i.CLIENT&&(e+="&client="+i.CLIENT),i.CHANNEL&&(e+="&channel="+i.CHANNEL),i.LANGUAGE&&(e+="&language="+i.LANGUAGE),i.REGION&&(e+="&region="+i.REGION),i.VERSION&&(e+="&v="+i.VERSION),e},release:function(s){var l=function(){i.KEY=null,i.LIBRARIES=[],i.CLIENT=null,i.CHANNEL=null,i.LANGUAGE=null,i.REGION=null,i.VERSION="3.31",t=null,n=!1,o=[],r=[],"undefined"!==typeof window.google&&delete window.google,"undefined"!==typeof window[i.WINDOW_CALLBACK_NAME]&&delete window[i.WINDOW_CALLBACK_NAME],null!==a&&(i.createLoader=a,a=null),null!==e&&(e.parentElement.removeChild(e),e=null),s&&s()};n?i.load(function(){l()}):l()},onLoad:function(e){r.push(e)},makeMock:function(){a=i.createLoader,i.createLoader=function(){window.google=i._googleMockApiObject,window[i.WINDOW_CALLBACK_NAME]()}}},s=function(e){var a;for(n=!1,null===t&&(t=window.google),a=0;a<r.length;a++)r[a](t);for(e&&e(t),a=0;a<o.length;a++)o[a](t);o=[]};return i})},54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,s)}l((o=o.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};t.default=function(e){return o(this,void 0,void 0,function(){var t,o,a,i,s,l,d,c,u,p;return r(this,function(r){switch(r.label){case 0:return[4,n(88)()];case 1:return t=r.sent(),[4,n(133)];case 2:return o=r.sent(),[4,n(89)];case 3:return a=r.sent(),i=a.default("data-do-map",e),o.default(t),s=i(),Object.keys(s).length&&(s.center||(s.center="55.735956,37.400827"),l=[],s.bullets?l=s.bullets:l.push({name:s.bulletName,coords:s.bulletCords?s.bulletCords:s.center,desc:s.bulletDesc}),d={data:l,lang:s.lang||"ru",zoom:s.zoom,center:s.center,type:s.type,id:t(e).attr("id")},c=t(window),u=t(e),p=function(){var e=c.scrollTop(),t=c.height(),n=u.offset();e<=n.top+u.outerHeight()&&(e>n.top&&e||e+t>=n.top)&&(u.html(""),u.mosaicMap("init",d),c.off("scroll",p))},c.on("scroll",p),p()),[2]}})})}},86:function(e,t){e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(n){!t.hasOwnProperty(n)||null===t[n]||"object"!==typeof t[n]&&"function"!==typeof t[n]||Object.isFrozen(t[n])||e(t[n])}),t}},87:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return o});var o,r=n(86),a=(n.n(r),"screen"),i=r(["(min-width: 1920px)","(min-width: 1440px)","(min-width: 1280px)",a,"(max-width: 991px)","(max-width: 767px)","(max-width: 479px)"]),s=i.indexOf(a);!function(e){e.BIG_SCREEN3=0,e.BIG_SCREEN2=1,e.BIG_SCREEN1=2,e.SCREEN=3,e.TABLET_LANDSCAPE=4,e.TABLET_PORTRAIT=5,e.MOBILE=6}(o||(o={})),t.d=i},88:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(42).then(function(t){e(n(92))}.bind(null,n)).catch(n.oe)})}},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(87),r=n(90);t.default=function(e,t){const n=o.d.slice().reverse();let a={};try{a=JSON.parse(t.getAttribute(e)||"")}catch(n){return void console.warn(`Error media: ${e} - ${t}`)}return function(t){const i=o.d[t]||n.find(e=>window.matchMedia(e).matches);let s={};const l=o.d.indexOf(i)<o.c?n.slice():o.d.slice();let d=l.splice(o.c,l.length-o.c);for(let e=0;e<d.length;e++){const t=d[e];if(s=Object.assign(s,a[t]),t===i)break}return Object(r.a)(e,s),s}}},90:function(e,t,n){"use strict";var o=n(91);t.a=function(e,t){if(o.a.hasOwnProperty(e)){var n=o.a[e],r=function(e){for(var t in e)if(e.hasOwnProperty(t)){var o=e[t];n.includes(t)&&"boolean"!==typeof o?e[t]="0"!==o&&Boolean(o):"string"!==typeof o||isNaN(+o)||(e[t]=Number(o)),"object"===typeof o&&r(o)}};r(t)}}},91:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(86),r=(n.n(o),o({"data-do-accordion":["isOpened","closeOther","childrenAsync"],"data-do-auth_popup_btn":["showUserName","showSettings","showOrders","showLogout","popupAfterAuthorized"],"data-do-form_auth":["isNativeStyle","isDrop","otherHeaderAfterAuth","showUserName","isToggle","isHeader","isRemember","isRegistration","isForgot","showSocial"],"data-do-blocklist":["slider","loop","returnToFirst","swipe","lastSlideArrow","center","controlsGroup","autoplay","childrenAsync","isMarquee","hoverStop"],"data-do-checkbox":["required"],"data-do-checkbox_group":["required"],"data-do-content":["image","gallery","text","headers"],"data-do-countdown":["isEnabledDays","isEnabledHours","isEnabledMinutes","isEnabledSeconds"],"data-do-form":["nativeStyle","showTitleAfterSend","disabledNativeStyleSelect"],"data-do-image":["scrollZoom","zoomOnClick"],"data-do-input":["required"],"data-do-input_date":["required"],"data-do-input_date_interval":["required"],"data-do-input_email":["required"],"data-do-input_phone":["required"],"data-do-link_universal":["blank","sidepanel"],"data-do-link_universal_block":["blank","sidepanel"],"data-do-link_universal_button":["blank","sidepanel"],"data-do-popup":["wmshowpopup"],"data-do-radio_group":["required"],"data-do-marquee":["circular","hoverStop","invertHover"],"data-do-menu_column":["dropdown","more","cancelForward","firstClick"],"data-do-menu_horizontal":["cancelForward","more","firstClickOpen"],"data-do-menu_vertical":["cancelForward","firstClickOpen"],"data-do-s3_article":["isHeadBlock","isAllLink","isImage","isDate","isAnnounce","isLinkMore","isDay","isMonth","isYear"],"data-do-s3_article2":["isHeadBlock","isAllLink","isImage","isDate","isAnnounce","isLinkMore","isDay","isYear"],"data-do-s3_board":["isDate","isDay","isMonth","isYear"],"data-do-s3_news_constructor":["isHeadNews","isAllNews","isImage","isDate","isAnnounce","isLinkMore","isDay","isYear"],"data-do-s3_unified_news_constructor":["isHeadBlock","isAllLink","isImage","isDate","isAnnouncement","isLinkMore","isDay","isYear","isTime","isMonthFirst","isDelimiterDayMonth","isDelimiterMonthYear","isDelimiterYearTime","isCustomDateFormat","isTags","isDelimiterTag"],"data-do-s3_vote_constructor":["isResults","isResultsInfo","isNativeStyle","isHideTextResult","isOtherAnswer"],"data-do-section":["scroll","smooth"],"data-do-select":["required"],"data-do-select_multiple":["required"],"data-do-slider":["loop","returnToFirst","lastSlideArrow","controlsGroup","swipe","autoplay","childrenAsync","previews","thumbs","thumbsSlider","independentScrolling","thumbsCenterMode"],"data-do-spoiler":["isOpened"],"data-do-svg_image":["stretch"],"data-do-tabs":["childrenAsync"],"data-do-textarea":["required"],"data-do-upload_file":["required"],"data-do-video":["viewportAutoPlay"],"data-do-video2":["viewportAutoPlay"]}))}});