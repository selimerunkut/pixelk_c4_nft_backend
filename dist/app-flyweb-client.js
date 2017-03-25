!function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return o(n?n:e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./game");document.addEventListener("DOMContentLoaded",function(){document.querySelector("mode").classList.add("hidden"),r.initGameFlyweb({clientMode:!0})})},{"./game":7}],2:[function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,i=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return{next:n(0),throw:n(1),return:n(2)}};Object.defineProperty(n,"__esModule",{value:!0});var i,a=e("./utils");!function(e){e[e.EMPTY=0]="EMPTY",e[e.PLAYER_1=1]="PLAYER_1",e[e.PLAYER_2=2]="PLAYER_2",e[e.DRAW=3]="DRAW"}(i=n.BoardPiece||(n.BoardPiece={}));var s=function(){function e(e){this.canvas=e,this.context=e.getContext("2d"),this.getBoardScale(),this.initConstants(),this.reset(),this.onresize()}return e.prototype.reset=function(){this.map=[];for(var t=0;t<e.ROWS;t++){this.map.push([]);for(var n=0;n<e.COLUMNS;n++)this.map[t].push(i.EMPTY)}this.winnerBoardPiece=i.EMPTY,a.Utils.clearCanvas(this)},e.prototype.getBoardScale=function(){return window.innerWidth<640?e.SCALE=.5:e.SCALE=1},e.prototype.initConstants=function(){e.CANVAS_HEIGHT=480*e.SCALE,e.CANVAS_WIDTH=640*e.SCALE,e.PIECE_RADIUS=25*e.SCALE,e.MASK_X_BEGIN=Math.max(0,e.CANVAS_WIDTH-(3*e.COLUMNS+1)*e.PIECE_RADIUS)/2,e.MASK_Y_BEGIN=Math.max(0,e.CANVAS_HEIGHT-(3*e.ROWS+1)*e.PIECE_RADIUS)/2,e.MESSAGE_WIDTH=400*e.SCALE,e.MESSAGE_X_BEGIN=(e.CANVAS_WIDTH-e.MESSAGE_WIDTH)/2,e.MESSAGE_Y_BEGIN=20*e.SCALE,this.canvas.width=e.CANVAS_WIDTH,this.canvas.height=e.CANVAS_HEIGHT},e.prototype.onresize=function(){var t=this,n=e.SCALE;a.Utils.onresize().add(function(){t.getBoardScale(),n!==e.SCALE&&(n=e.SCALE,t.initConstants(),a.Utils.clearCanvas(t),t.render())})},e.prototype.applyPlayerAction=function(t,n){return r(this,void 0,void 0,function(){var r,s,c;return o(this,function(o){switch(o.label){case 0:if(this.map[0][n]!==i.EMPTY||n<0||n>=e.COLUMNS)return[2,!1];for(r=!1,s=0,c=0;c<e.ROWS-1;c++)if(this.map[c+1][n]!==i.EMPTY){r=!0,s=c;break}return r||(s=e.ROWS-1),[4,this.animateAction(s,n,t.boardPiece)];case 1:return o.sent(),this.map[s][n]=t.boardPiece,this.debug(),[4,a.Utils.animationFrame()];case 2:return o.sent(),this.render(),[2,!0]}})})},e.prototype.debug=function(){console.log(this.map.map(function(e){return e.join(" ")}).join("\n"))},e.prototype.getWinner=function(){var t=this;if(this.winnerBoardPiece!==i.EMPTY)return this.winnerBoardPiece;for(var n=[[0,-1],[0,1],[-1,-1],[-1,0],[-1,1],[1,-1],[1,0],[1,1]],r=function(n,o,i,a,s){return s>=4||!(n<0||o<0||n>=e.ROWS||o>=e.COLUMNS||t.map[n][o]!==i)&&r(n+a[0],o+a[1],i,a,s+1)},o=0,a=0;a<e.ROWS;a++)for(var s=0;s<e.COLUMNS;s++){var c=this.map[a][s];if(c!==i.EMPTY)for(var u=0;u<n.length;u++){var l=r(a+n[u][0],s+n[u][1],c,n[u],1);if(l)return this.winnerBoardPiece=c}else o++}return 0===o?this.winnerBoardPiece=i.DRAW:i.EMPTY},e.prototype.announceWinner=function(){if(this.winnerBoardPiece!==i.EMPTY){var t="Thank you for playing - ";t+=this.winnerBoardPiece===i.DRAW?"It's a draw":"Player "+this.winnerBoardPiece+" wins",t+=" - Click to reset",a.Utils.drawText(this.context,{message:t,x:e.MESSAGE_X_BEGIN,y:e.MESSAGE_Y_BEGIN,maxWidth:e.MESSAGE_WIDTH})}},e.prototype.getPlayerColor=function(t){switch(t){case i.PLAYER_1:return e.PLAYER_1_COLOR;case i.PLAYER_2:return e.PLAYER_2_COLOR;default:return"transparent"}},e.prototype.animateAction=function(t,n,i){return r(this,void 0,void 0,function(){var s,c,u,l=this;return o(this,function(f){switch(f.label){case 0:s=this.getPlayerColor(i),c=0,u=function(){return r(l,void 0,void 0,function(){return o(this,function(t){return a.Utils.clearCanvas(this),a.Utils.drawCircle(this.context,{x:3*e.PIECE_RADIUS*n+e.MASK_X_BEGIN+2*e.PIECE_RADIUS,y:c+e.MASK_Y_BEGIN+2*e.PIECE_RADIUS,r:e.PIECE_RADIUS,fillStyle:s,strokeStyle:e.PIECE_STROKE_STYLE}),this.render(),c+=e.PIECE_RADIUS,[2]})})},f.label=1;case 1:return 3*t*e.PIECE_RADIUS>=c?[4,a.Utils.animationFrame()]:[3,3];case 2:return f.sent(),u(),[3,1];case 3:return[2]}})})},e.prototype.render=function(){a.Utils.drawMask(this);for(var t=0;t<e.ROWS;t++)for(var n=0;n<e.COLUMNS;n++)a.Utils.drawCircle(this.context,{x:3*e.PIECE_RADIUS*n+e.MASK_X_BEGIN+2*e.PIECE_RADIUS,y:3*e.PIECE_RADIUS*t+e.MASK_Y_BEGIN+2*e.PIECE_RADIUS,r:e.PIECE_RADIUS,fillStyle:this.getPlayerColor(this.map[t][n]),strokeStyle:e.PIECE_STROKE_STYLE})},e}();s.ROWS=6,s.COLUMNS=7,s.PLAYER_1_COLOR="#ff4136",s.PLAYER_2_COLOR="#0074d9",s.PIECE_STROKE_STYLE="black",s.MASK_COLOR="#dddddd",n.Board=s},{"./utils":14}],3:[function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,i=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return{next:n(0),throw:n(1),return:n(2)}};Object.defineProperty(n,"__esModule",{value:!0});var i=e("../board"),a=function(){function e(e,t){this.board=new i.Board(t),this.players=e,this.currentPlayerId=0,this.reset()}return e.prototype.reset=function(){this.isMoveAllowed=!1,this.isGameWon=!1,this.board.reset(),this.board.render(),this.board.debug()},e.prototype.start=function(){return r(this,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:this.isMoveAllowed=!0,t.label=1;case 1:return this.isGameWon?[3,3]:[4,this.move()];case 2:return t.sent(),e=this.board.getWinner(),e!==i.BoardPiece.EMPTY?(console.log("Game over: winner is player ",e),this.isGameWon=!0,this.isMoveAllowed=!1,this.board.announceWinner(),[3,3]):[3,1];case 3:return[2]}})})},e.prototype.move=function(){return r(this,void 0,void 0,function(){var e,t,n;return o(this,function(r){switch(r.label){case 0:if(!this.isMoveAllowed)return[2];e=this.players[this.currentPlayerId],t=!1,r.label=1;case 1:return t?[3,4]:[4,e.getAction(this.board)];case 2:return n=r.sent(),this.isMoveAllowed=!1,[4,this.board.applyPlayerAction(e,n)];case 3:return t=r.sent(),this.isMoveAllowed=!0,t||console.log("Move not allowed! Try again."),[3,1];case 4:return this.currentPlayerId=this.getNextPlayer(),[2]}})})},e.prototype.getNextPlayer=function(){return 0===this.currentPlayerId?1:0},e}();n.GameBase=a},{"../board":2}],4:[function(e,t,n){"use strict";function r(e){var t=this,n=e.clientMode,r=void 0!==n&&n,o=document.querySelector("canvas"),s=null;s=r?[new c.PlayerFlywebSlave(u.BoardPiece.PLAYER_1,o),new c.PlayerFlywebMaster(u.BoardPiece.PLAYER_2,o)]:[new c.PlayerFlywebMaster(u.BoardPiece.PLAYER_1,o),new c.PlayerFlywebSlave(u.BoardPiece.PLAYER_2,o)];var h=new f(s,o,r);h.start(),o.addEventListener("click",function(){return i(t,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return h.isGameWon?(h.reset(),h.playerMaster&&h.playerMaster.socket&&h.playerMaster.socket.send(JSON.stringify({type:"reset",data:{reset:!0}})),[4,l.Utils.animationFrame()]):[3,2];case 1:e.sent(),h.start(),e.label=2;case 2:return[2]}})})})}var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,i=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return{next:n(0),throw:n(1),return:n(2)}};Object.defineProperty(n,"__esModule",{value:!0});var s=e("./game-base"),c=e("../player"),u=e("../board"),l=e("../utils"),f=function(e){function t(t,n,r){void 0===r&&(r=!1);var o=e.call(this,t,n)||this;return o.BASE_URL=window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/")),o.browser=navigator,o.isAcceptingPlayer=!0,r?(o.playerSlave=t[0],o.playerMaster=t[1],o.initClient()):(o.playerMaster=t[0],o.playerSlave=t[1],o.initServer()),o}return o(t,e),t.prototype.initClient=function(){this.handleClientWs()},t.prototype.handleClientWs=function(){var e=this,t=new WebSocket("ws://"+window.location.host+"/api/ws");this.playerMaster.socket=t,t.onopen=function(e){console.log("socket.onopen()",e)},t.onclose=function(e){console.log("socket.onclose()",e)},t.onerror=function(e){console.log("socket.onerror()",e),t.close()},t.onmessage=function(t){return i(e,void 0,void 0,function(){var e;return a(this,function(n){switch(n.label){case 0:return console.log("socket.onmessage()",t),(e=JSON.parse(t.data))?"start"!==e.type?[3,1]:(alert("Welcome! Connection to Player 1 has been established."),[3,4]):[2];case 1:return"move"!==e.type?[3,2]:(this.playerSlave.doAction(e.data.column),[3,4]);case 2:return"reset"!==e.type?[3,4]:(this.reset(),[4,l.Utils.animationFrame()]);case 3:n.sent(),this.start(),n.label=4;case 4:return[2]}})})}},t.prototype.fetch=function(e,t){return i(this,void 0,void 0,function(){var n,r,o,i;return a(this,function(a){switch(a.label){case 0:return[4,fetch(this.BASE_URL+t)];case 1:return n=a.sent(),r=n.headers.get("Content-Type"),[4,n.blob()];case 2:return o=a.sent(),i={"Content-Type":r,"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0},console.log("Response is: ",t),e.respondWith(new Promise(function(e){return e(new Response(o,{headers:i}))})),[2]}})})},t.prototype.handleWsServer=function(e){var t=this,n=e.accept();this.playerMaster.socket=n,n.onopen=function(e){console.log("socket.onopen()",e,n),t.isAcceptingPlayer?(t.isAcceptingPlayer=!1,n.send(JSON.stringify({type:"start",data:{accepted:t.isAcceptingPlayer}})),alert("Connection to Player 2 has been established.")):n.close()},n.onclose=function(e){console.log("socket.onclose()",e),t.isAcceptingPlayer=!0,t.reset()},n.onerror=function(e){console.log("socket.onerror()",e),t.isAcceptingPlayer=!0,n.close()},n.onmessage=function(e){return i(t,void 0,void 0,function(){var t;return a(this,function(n){switch(n.label){case 0:return console.log("socket.onmessage()",e),(t=JSON.parse(e.data))?"move"!==t.type?[3,1]:(this.playerSlave.doAction(t.data.column),[3,3]):[2];case 1:return"reset"!==t.type?[3,3]:(this.reset(),[4,l.Utils.animationFrame()]);case 2:n.sent(),this.start(),n.label=3;case 3:return[2]}})})}},t.prototype.initServer=function(){return i(this,void 0,void 0,function(){var e,t=this;return a(this,function(n){switch(n.label){case 0:return"publishServer"in this.browser?[4,this.browser.publishServer("c4 - Connect Four")]:(window.alert("FlyWeb requires Firefox Developer Edition and enabling a flag at about:config"),[2,!1]);case 1:return e=n.sent(),e.onfetch=function(e){return i(t,void 0,void 0,function(){var t,n,r,o;return a(this,function(i){switch(i.label){case 0:switch(t=e.request.url.split("?"),n=t[0],r=new URLSearchParams(t[1]),console.log("Requested for url: ",n,r),o=n){case"/dist/app.js":return[3,1]}return[3,3];case 1:return[4,this.fetch(e,"/dist/app-flyweb-client.js")];case 2:return i.sent(),[3,5];case 3:return[4,this.fetch(e,n)];case 4:i.sent(),i.label=5;case 5:return[2]}})})},e.onwebsocket=function(e){var n=e.request.url;"/api/ws"===n&&t.handleWsServer(e)},[2]}})})},t}(s.GameBase);n.initGameFlyweb=r},{"../board":2,"../player":8,"../utils":14,"./game-base":3}],5:[function(e,t,n){"use strict";function r(){var e=this,t=document.querySelector("canvas"),n=new f([new u.PlayerHuman(s.BoardPiece.PLAYER_1,t),new u.PlayerHuman(s.BoardPiece.PLAYER_2,t)],t);n.start(),t.addEventListener("click",function(){return i(e,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return n.isGameWon?(n.reset(),[4,l.Utils.animationFrame()]):[3,2];case 1:e.sent(),n.start(),e.label=2;case 2:return[2]}})})})}var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,i=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return{next:n(0),throw:n(1),return:n(2)}};Object.defineProperty(n,"__esModule",{value:!0});var s=e("../board"),c=e("./game-base"),u=e("../player"),l=e("../utils"),f=function(e){function t(t,n){return e.call(this,t,n)||this}return o(t,e),t}(c.GameBase);n.initGameLocal2p=r},{"../board":2,"../player":8,"../utils":14,"./game-base":3}],6:[function(e,t,n){"use strict";function r(){var e=this,t=document.querySelector("canvas"),n=new f([new u.PlayerHuman(s.BoardPiece.PLAYER_1,t),new u.PlayerAi(s.BoardPiece.PLAYER_2,t)],t);n.start(),t.addEventListener("click",function(){return i(e,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return n.isGameWon?(n.reset(),[4,l.Utils.animationFrame()]):[3,2];case 1:e.sent(),n.start(),e.label=2;case 2:return[2]}})})})}var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,i=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return{next:n(0),throw:n(1),return:n(2)}};Object.defineProperty(n,"__esModule",{value:!0});var s=e("../board"),c=e("./game-base"),u=e("../player"),l=e("../utils"),f=function(e){function t(t,n){return e.call(this,t,n)||this}return o(t,e),t}(c.GameBase);n.initGameLocalAi=r},{"../board":2,"../player":8,"../utils":14,"./game-base":3}],7:[function(e,t,n){"use strict";function r(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),r(e("./game-flyweb")),r(e("./game-local-2p")),r(e("./game-local-ai"))},{"./game-flyweb":4,"./game-local-2p":5,"./game-local-ai":6}],8:[function(e,t,n){"use strict";function r(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),r(e("./player")),r(e("./player-ai")),r(e("./player-human")),r(e("./player-flyweb-master")),r(e("./player-flyweb-slave"))},{"./player":13,"./player-ai":9,"./player-flyweb-master":10,"./player-flyweb-slave":11,"./player-human":12}],9:[function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,i=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return{next:n(0),throw:n(1),return:n(2)}};Object.defineProperty(n,"__esModule",{value:!0});var a=e("./player"),s=e("../board"),c=e("../utils"),u=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.ownBoardPieceValue=r.getBoardPieceValue(t),r.enemyBoardPiece=t===s.BoardPiece.PLAYER_1?s.BoardPiece.PLAYER_2:s.BoardPiece.PLAYER_1,r}return r(t,e),t.prototype.getBoardPieceValue=function(e){return e===s.BoardPiece.EMPTY?0:e===this.boardPiece?1:-1},t.prototype.getStateValue=function(e){for(var t=s.BoardPiece.EMPTY,n=0,r=0;r<s.Board.ROWS;r++)for(var o=0;o<s.Board.COLUMNS;o++){for(var i=0,a=0,c=0,u=0,l=0;l<=3;l++)o+l<s.Board.COLUMNS&&(i+=this.getBoardPieceValue(e[r][o+l])),r+l<s.Board.ROWS&&(a+=this.getBoardPieceValue(e[r+l][o])),r+l<s.Board.ROWS&&o+l<s.Board.COLUMNS&&(c+=this.getBoardPieceValue(e[r+l][o+l])),r-l>=0&&o+l<7&&(u+=this.getBoardPieceValue(e[r-l][o+l]));n+=i*i*i,n+=a*a*a,n+=c*c*c,n+=u*u*u,4===Math.abs(i)?t=i>0?this.boardPiece:this.enemyBoardPiece:4===Math.abs(a)?t=a>0?this.boardPiece:this.enemyBoardPiece:4===Math.abs(c)?t=c>0?this.boardPiece:this.enemyBoardPiece:4===Math.abs(u)&&(t=u>0?this.boardPiece:this.enemyBoardPiece)}return{winnerBoardPiece:t,chain:n}},t.prototype.transformValues=function(e,t,n){var r=t===this.boardPiece,o=t===this.enemyBoardPiece;return r?e=c.Utils.BIG_POSITIVE_NUMBER-100:o&&(e=c.Utils.BIG_NEGATIVE_NUMBER+100),e-=n*n},t.prototype.getMove=function(e,n,r,o){var i=this.getStateValue(e),a=i.winnerBoardPiece===this.boardPiece,s=i.winnerBoardPiece===this.enemyBoardPiece;return n>=t.MAX_DEPTH||a||s?{value:this.transformValues(i.chain*this.ownBoardPieceValue,i.winnerBoardPiece,n),move:-1}:n%2===0?this.minState(e,n+1,r,o):this.maxState(e,n+1,r,o)},t.prototype.maxState=function(e,t,n,r){for(var o=c.Utils.BIG_NEGATIVE_NUMBER,i=[],a=0;a<s.Board.COLUMNS;a++){var u=c.Utils.getMockPlayerAction(e,this.boardPiece,a),l=u.success,f=u.map;if(l){var h=this.getMove(f,t,n,r),p=h.value;h.move;if(p>o?(o=p,i=[a]):p===o&&i.push(a),o>r)return{value:o,move:c.Utils.choose(i)};n=Math.max(n,o)}}return{value:o,move:c.Utils.choose(i)}},t.prototype.minState=function(e,t,n,r){for(var o=c.Utils.BIG_POSITIVE_NUMBER,i=[],a=0;a<s.Board.COLUMNS;a++){var u=c.Utils.getMockPlayerAction(e,this.enemyBoardPiece,a),l=u.success,f=u.map;if(l){var h=this.getMove(f,t,n,r),p=h.value;h.move;if(p<o?(o=p,i=[a]):p===o&&i.push(a),o<n)return{value:o,move:c.Utils.choose(i)};r=Math.min(r,o)}}return{value:o,move:c.Utils.choose(i)}},t.prototype.getAction=function(e){return o(this,void 0,void 0,function(){var t,n;return i(this,function(r){return t=c.Utils.clone(e.map),n=this.maxState(t,0,c.Utils.BIG_NEGATIVE_NUMBER,c.Utils.BIG_POSITIVE_NUMBER),console.log("AI "+this.boardPiece+" choose column "+n.move+" with value of "+n.value),[2,n.move]})})},t}(a.Player);u.MAX_DEPTH=4,n.PlayerAi=u},{"../board":2,"../utils":14,"./player":13}],10:[function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,i=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return{next:n(0),throw:n(1),return:n(2)}};Object.defineProperty(n,"__esModule",{value:!0});var a=e("."),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.clickPromiseResolver=null,r}return r(t,e),t.prototype.doAction=function(e){if(this.clickPromiseResolver&&this.clickPromiseResolver(e),!this.socket)throw Error("PlayerFlywebMaster need WebSocket object");this.socket.send(JSON.stringify({type:"move",data:{column:e}}))},t.prototype.getAction=function(e){return o(this,void 0,void 0,function(){var e=this;return i(this,function(t){return[2,new Promise(function(t){return e.clickPromiseResolver=t})]})})},t}(a.PlayerHuman);n.PlayerFlywebMaster=s},{".":8}],11:[function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,i=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return{next:n(0),throw:n(1),return:n(2)}};Object.defineProperty(n,"__esModule",{value:!0});var a=e("./player"),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.actionPromiseResolver=null,r}return r(t,e),t.prototype.doAction=function(e){this.actionPromiseResolver&&this.actionPromiseResolver(e)},t.prototype.getAction=function(e){return o(this,void 0,void 0,function(){var e=this;return i(this,function(t){return[2,new Promise(function(t){return e.actionPromiseResolver=t})]})})},t}(a.Player);n.PlayerFlywebSlave=s},{"./player":13}],12:[function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,i=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return{next:n(0),throw:n(1),return:n(2)}};Object.defineProperty(n,"__esModule",{value:!0});var a=e("./player"),s=e("../utils"),c=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.clickPromiseResolver=null,n.addEventListener("click",function(e){try{r.handleClick(e)}catch(e){console.error(e)}}),r}return r(t,e),t.prototype.doAction=function(e){this.clickPromiseResolver&&this.clickPromiseResolver(e)},t.prototype.handleClick=function(e){var t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,o=s.Utils.getColumnFromCoord({x:n,y:r});this.doAction(o)},t.prototype.getAction=function(e){return o(this,void 0,void 0,function(){var e=this;return i(this,function(t){return[2,new Promise(function(t){return e.clickPromiseResolver=t})]})})},t}(a.Player);n.PlayerHuman=c},{"../utils":14,"./player":13}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){this.boardPiece=e,this.canvas=t}return e}();n.Player=r},{}],14:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./board"),o=function(){function e(){}return e.drawText=function(t,n){var r=n.message,o=void 0===r?"":r,i=n.x,a=void 0===i?0:i,s=n.y,c=void 0===s?0:s,u=n.fillStyle,l=void 0===u?"#111":u,f=n.font,h=void 0===f?"12pt sans-serif":f,p=n.maxWidth,d=void 0===p?e.BIG_POSITIVE_NUMBER:p;t.save(),t.font=h,t.fillStyle=l,t.fillText(o,a,c,d),t.restore()},e.drawCircle=function(e,t){var n=t.x,r=void 0===n?0:n,o=t.y,i=void 0===o?0:o,a=t.r,s=void 0===a?0:a,c=t.fillStyle,u=void 0===c?"":c,l=t.strokeStyle,f=void 0===l?"":l;
e.save(),e.fillStyle=u,e.strokeStyle=f,e.beginPath(),e.arc(r,i,s,0,2*Math.PI,!1),e.fill(),e.restore()},e.drawMask=function(e){var t=e.context;t.save(),t.fillStyle=r.Board.MASK_COLOR,t.beginPath();for(var n=2*r.Board.PIECE_RADIUS,o=3*r.Board.PIECE_RADIUS,i=0;i<r.Board.ROWS;i++)for(var a=0;a<r.Board.COLUMNS;a++)t.arc(o*a+r.Board.MASK_X_BEGIN+n,o*i+r.Board.MASK_Y_BEGIN+n,r.Board.PIECE_RADIUS,0,2*Math.PI),t.rect(o*a+r.Board.MASK_X_BEGIN+2*n,o*i+r.Board.MASK_Y_BEGIN,-2*n,2*n);t.fill(),t.restore()},e.clearCanvas=function(e){e.context.clearRect(0,0,e.canvas.width,e.canvas.height)},e.isCoordOnColumn=function(e,t,n){return(e.x-t)*(e.x-t)<=n*n},e.getColumnFromCoord=function(t){for(var n=0;n<r.Board.COLUMNS;n++)if(e.isCoordOnColumn(t,3*r.Board.PIECE_RADIUS*n+r.Board.MASK_X_BEGIN+2*r.Board.PIECE_RADIUS,r.Board.PIECE_RADIUS))return n;return-1},e.getRandomColumnNumber=function(){return Math.floor(Math.random()*r.Board.COLUMNS)},e.choose=function(e){return e[Math.floor(Math.random()*e.length)]},e.animationFrame=function(){var e=null,t=new Promise(function(t){return e=t});return window.requestAnimationFrame(e),t},e.clone=function(e){for(var t=[],n=0;n<e.length;n++)t[n]=e[n].slice();return t},e.getMockPlayerAction=function(t,n,o){var i=e.clone(t);if(i[0][o]!==r.BoardPiece.EMPTY||o<0||o>=r.Board.COLUMNS)return{success:!1,map:i};for(var a=!1,s=0,c=0;c<r.Board.ROWS-1;c++)if(i[c+1][o]!==r.BoardPiece.EMPTY){a=!0,s=c;break}return a||(s=r.Board.ROWS-1),i[s][o]=n,{success:!0,map:i}},e.onresize=function(){function e(){o||(o=!0,window.requestAnimationFrame?window.requestAnimationFrame(t):setTimeout(t,66))}function t(){r.forEach(function(e){e()}),o=!1}function n(e){e&&r.push(e)}var r=[],o=!1;return{add:function(t){r.length||window.addEventListener("resize",e),n(t)}}},e}();o.BIG_POSITIVE_NUMBER=Math.pow(10,9)+7,o.BIG_NEGATIVE_NUMBER=-o.BIG_POSITIVE_NUMBER,n.Utils=o},{"./board":2}]},{},[1]);
//# sourceMappingURL=app-flyweb-client.js.map
