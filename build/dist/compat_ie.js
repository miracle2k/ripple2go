!function(){var a="undefined"!=typeof window?window:exports,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c=function(){try{document.createElement("$")}catch(a){return a}}();a.btoa||(a.btoa=function(a){for(var d,e,f=0,g=b,h="";a.charAt(0|f)||(g="=",f%1);h+=g.charAt(63&d>>8-f%1*8)){if(e=a.charCodeAt(f+=.75),e>255)throw c;d=d<<8|e}return h}),a.atob||(a.atob=function(a){if(a=a.replace(/=+$/,""),a.length%4==1)throw c;for(var d,e,f=0,g=0,h="";e=a.charAt(g++);~e&&(d=f%4?64*d+e:e,f++%4)?h+=String.fromCharCode(255&d>>(-2*f&6)):0)e=b.indexOf(e);return h})}();
!function(){if(window.WEB_SOCKET_FORCE_FLASH);else{if(window.WebSocket)return;if(window.MozWebSocket)return window.WebSocket=MozWebSocket,void 0}var a;return a=window.WEB_SOCKET_LOGGER?WEB_SOCKET_LOGGER:window.console&&window.console.log&&window.console.error?window.console:{log:function(){},error:function(){}},swfobject.getFlashPlayerVersion().major<10?(a.error("Flash Player >= 10.0.0 is required."),void 0):("file:"==location.protocol&&a.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."),window.WebSocket=function(a,b,c,d,e){var f=this;f.__id=WebSocket.__nextId++,WebSocket.__instances[f.__id]=f,f.readyState=WebSocket.CONNECTING,f.bufferedAmount=0,f.__events={},b?"string"==typeof b&&(b=[b]):b=[],f.__createTask=setTimeout(function(){WebSocket.__addTask(function(){f.__createTask=null,WebSocket.__flash.create(f.__id,a,b,c||null,d||0,e||null)})},0)},WebSocket.prototype.send=function(a){if(this.readyState==WebSocket.CONNECTING)throw"INVALID_STATE_ERR: Web Socket connection has not been established";var b=WebSocket.__flash.send(this.__id,encodeURIComponent(a));return 0>b?!0:(this.bufferedAmount+=b,!1)},WebSocket.prototype.close=function(){return this.__createTask?(clearTimeout(this.__createTask),this.__createTask=null,this.readyState=WebSocket.CLOSED,void 0):(this.readyState!=WebSocket.CLOSED&&this.readyState!=WebSocket.CLOSING&&(this.readyState=WebSocket.CLOSING,WebSocket.__flash.close(this.__id)),void 0)},WebSocket.prototype.addEventListener=function(a,b){a in this.__events||(this.__events[a]=[]),this.__events[a].push(b)},WebSocket.prototype.removeEventListener=function(a,b){if(a in this.__events)for(var c=this.__events[a],d=c.length-1;d>=0;--d)if(c[d]===b){c.splice(d,1);break}},WebSocket.prototype.dispatchEvent=function(a){for(var b=this.__events[a.type]||[],c=0;c<b.length;++c)b[c](a);var d=this["on"+a.type];d&&d.apply(this,[a])},WebSocket.prototype.__handleEvent=function(a){"readyState"in a&&(this.readyState=a.readyState),"protocol"in a&&(this.protocol=a.protocol);var b;if("open"==a.type||"error"==a.type)b=this.__createSimpleEvent(a.type);else if("close"==a.type)b=this.__createSimpleEvent("close"),b.wasClean=a.wasClean?!0:!1,b.code=a.code,b.reason=a.reason;else{if("message"!=a.type)throw"unknown event type: "+a.type;var c=decodeURIComponent(a.message);b=this.__createMessageEvent("message",c)}this.dispatchEvent(b)},WebSocket.prototype.__createSimpleEvent=function(a){if(document.createEvent&&window.Event){var b=document.createEvent("Event");return b.initEvent(a,!1,!1),b}return{type:a,bubbles:!1,cancelable:!1}},WebSocket.prototype.__createMessageEvent=function(a,b){if(document.createEvent&&window.MessageEvent&&!window.opera){var c=document.createEvent("MessageEvent");return c.initMessageEvent("message",!1,!1,b,null,null,window,null),c}return{type:a,data:b,bubbles:!1,cancelable:!1}},WebSocket.CONNECTING=0,WebSocket.OPEN=1,WebSocket.CLOSING=2,WebSocket.CLOSED=3,WebSocket.__isFlashImplementation=!0,WebSocket.__initialized=!1,WebSocket.__flash=null,WebSocket.__instances={},WebSocket.__tasks=[],WebSocket.__nextId=0,WebSocket.loadFlashPolicyFile=function(a){WebSocket.__addTask(function(){WebSocket.__flash.loadManualPolicyFile(a)})},WebSocket.__initialize=function(){if(!WebSocket.__initialized){if(WebSocket.__initialized=!0,WebSocket.__swfLocation&&(window.WEB_SOCKET_SWF_LOCATION=WebSocket.__swfLocation),!window.WEB_SOCKET_SWF_LOCATION)return a.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf"),void 0;if(!window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR&&!WEB_SOCKET_SWF_LOCATION.match(/(^|\/)WebSocketMainInsecure\.swf(\?.*)?$/)&&WEB_SOCKET_SWF_LOCATION.match(/^\w+:\/\/([^\/]+)/)){var b=RegExp.$1;location.host!=b&&a.error("[WebSocket] You must host HTML and WebSocketMain.swf in the same host ('"+location.host+"' != '"+b+"'). See also 'How to host HTML file and SWF file in different domains' section in README.md. If you use WebSocketMainInsecure.swf, you can suppress this message by WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true;")}var c=document.createElement("div");c.id="webSocketContainer",c.style.position="absolute",WebSocket.__isFlashLite()?(c.style.left="0px",c.style.top="0px"):(c.style.left="-100px",c.style.top="-100px");var d=document.createElement("div");d.id="webSocketFlash",c.appendChild(d),document.body.appendChild(c),swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION,"webSocketFlash","1","1","10.0.0",null,null,{hasPriority:!0,swliveconnect:!0,allowScriptAccess:"always"},null,function(b){b.success||a.error("[WebSocket] swfobject.embedSWF failed")})}},WebSocket.__onFlashInitialized=function(){setTimeout(function(){WebSocket.__flash=document.getElementById("webSocketFlash"),WebSocket.__flash.setCallerUrl(location.href),WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);for(var a=0;a<WebSocket.__tasks.length;++a)WebSocket.__tasks[a]();WebSocket.__tasks=[]},0)},WebSocket.__onFlashEvent=function(){return setTimeout(function(){try{for(var b=WebSocket.__flash.receiveEvents(),c=0;c<b.length;++c)WebSocket.__instances[b[c].webSocketId].__handleEvent(b[c])}catch(d){a.error(d)}},0),!0},WebSocket.__log=function(b){a.log(decodeURIComponent(b))},WebSocket.__error=function(b){a.error(decodeURIComponent(b))},WebSocket.__addTask=function(a){WebSocket.__flash?a():WebSocket.__tasks.push(a)},WebSocket.__isFlashLite=function(){if(!window.navigator||!window.navigator.mimeTypes)return!1;var a=window.navigator.mimeTypes["application/x-shockwave-flash"];return a&&a.enabledPlugin&&a.enabledPlugin.filename?a.enabledPlugin.filename.match(/flashlite/i)?!0:!1:!1},window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION||swfobject.addDomLoadEvent(function(){WebSocket.__initialize()}),void 0)}();
!function(a){window.XDomainRequest&&a.ajaxTransport(function(b){if(b.crossDomain&&b.async){b.timeout&&(b.xdrTimeout=b.timeout,delete b.timeout);var c;return{send:function(d,e){function f(b,d,f,g){c.onload=c.onerror=c.ontimeout=c.onprogress=a.noop,c=void 0,e(b,d,f,g)}c=new XDomainRequest,c.open(b.type,b.url),c.onload=function(){f(200,"OK",{text:c.responseText},"Content-Type: "+c.contentType)},c.onerror=function(){f(404,"Not Found")},c.onprogress=function(){},b.xdrTimeout&&(c.ontimeout=function(){f(0,"timeout")},c.timeout=b.xdrTimeout),c.send(b.hasContent&&b.data||null)},abort:function(){c&&(c.onerror=a.noop(),c.abort())}}}})}(jQuery);