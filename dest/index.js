"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,r,a){return r&&e(n.prototype,r),a&&e(n,a),n}}();exports.default=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"browserInfo",value:function(e){var n=navigator.userAgent.toLowerCase();switch(e){case"android":return-1!==n.indexOf("android");case"iphone":return-1!==n.indexOf("iphone");case"ipad":return-1!==n.indexOf("ipad");case"wexin":return-1!==n.indexOf("micromessenger");default:return n}}},{key:"deviceInfo",value:function(e){var n=navigator.userAgent;switch(e){case"android":return n.indexOf("Android")>-1||n.indexOf("Adr")>-1;case"ios":return!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}}},{key:"setPageTitle",value:function(e){var n=navigator.userAgent,r=n.indexOf("Android")>-1||n.indexOf("Linux")>-1,a=!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(r)document.title=e;else if(a){var t=$("body");document.title=e;var i=$('<iframe src="/favicon.ico"></iframe>');i.on("load",function(){window.setTimeout(function(){i.off("load").remove()},0)}).appendTo(t)}}}]),e}());