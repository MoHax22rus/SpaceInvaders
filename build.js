!function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="/",e(0)}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}i(19);var s=i(7),r=n(s),a=i(3),o=n(a),c=i(9),l=n(c),u=i(6),h=n(u),d=i(4),f=n(d),p=i(8),v=n(p),b=i(5),m=n(b);window.onload=function(){var t=new l["default"],e=new r["default"],i=new o["default"],n=new v["default"];t.spriteImg.onload=function(){t.initSprite();var s=new h["default"](e,t,i,n),r=new f["default"](e,s),a=new m["default"](e,s,r);a.run()}}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(n[r]=!0)}for(s=0;s<e.length;s++){var a=e[s];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},function(t,e,i){function n(t,e){for(var i=0;i<t.length;i++){var n=t[i],s=f[n.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](n.parts[r]);for(;r<n.parts.length;r++)s.parts.push(l(n.parts[r],e))}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(l(n.parts[r],e));f[n.id]={id:n.id,refs:1,parts:a}}}}function s(t){for(var e=[],i={},n=0;n<t.length;n++){var s=t[n],r=s[0],a=s[1],o=s[2],c=s[3],l={css:a,media:o,sourceMap:c};i[r]?i[r].parts.push(l):e.push(i[r]={id:r,parts:[l]})}return e}function r(t,e){var i=b(),n=g[g.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function o(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function c(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function l(t,e){var i,n,s;if(e.singleton){var r=y++;i=m||(m=o(e)),n=u.bind(null,i,r,!1),s=u.bind(null,i,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=c(e),n=d.bind(null,i),s=function(){a(i),i.href&&URL.revokeObjectURL(i.href)}):(i=o(e),n=h.bind(null,i),s=function(){a(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}function u(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,s);else{var r=document.createTextNode(s),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function h(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function d(t,e){var i=e.css,n=e.sourceMap;n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var s=new Blob([i],{type:"text/css"}),r=t.href;t.href=URL.createObjectURL(s),r&&URL.revokeObjectURL(r)}var f={},p=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},v=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=p(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,y=0,g=[];t.exports=function(t,e){e=e||{},void 0===e.singleton&&(e.singleton=v()),void 0===e.insertAt&&(e.insertAt="bottom");var i=s(t);return n(i,e),function(t){for(var r=[],a=0;a<i.length;a++){var o=i[a],c=f[o.id];c.refs--,r.push(c)}if(t){var l=s(t);n(l,e)}for(var a=0;a<r.length;a++){var c=r[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete f[c.id]}}}};var w=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();i(20);var r=function(){function t(){var e=this;n(this,t),this.down={},this.pressed={},document.addEventListener("keydown",function(t){e.down[t.keyCode]=!0}),document.addEventListener("keyup",function(t){delete e.down[t.keyCode],delete e.pressed[t.keyCode]})}return s(t,[{key:"isDown",value:function(t){return this.down[t]}},{key:"isPressed",value:function(t){return!this.pressed[t]&&!!this.down[t]&&(this.pressed[t]=!0)}}]),t}();e["default"]=r},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();i(21);var r=function(){function t(e,i){n(this,t),this.gameObjects=i,this.screen=e,this.context=e.context}return s(t,[{key:"drawSprite",value:function(t,e,i){var n=this.scaleCoordinates(e,i,t.w,t.h);this.context.drawImage(this.gameObjects.sprite.spriteImg,t.x,t.y,t.w,t.h,n.x,n.y,n.w,n.h)}},{key:"drawBullet",value:function(t){this.context.fillStyle=t.c;var e=this.scaleCoordinates(t.x,t.y,t.w,t.h);this.context.fillRect(e.x,e.y,e.w,e.h)}},{key:"drawText",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.gameObjects.scaleW/2,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.gameObjects.scaleH/2,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"center";e=this.screen.height/(this.gameObjects.scaleH/e),i=this.screen.width/(this.gameObjects.scaleW/i),n=this.screen.height/(this.gameObjects.scaleH/n),this.context.save(),this.context.fillStyle="#fff",this.context.font=e+"px Helvetica",this.context.textAlign=s,this.context.textBaseline="middle",this.context.fillText(t,i,n),this.context.restore()}},{key:"drawLife",value:function(t){if(t)for(var e=this.gameObjects.tank.sprite,i=20+e.w,n=i,s=void 0;t--;)s=this.scaleCoordinates(this.gameObjects.scaleW-n,10,e.w,e.h),this.context.drawImage(this.gameObjects.sprite.spriteImg,e.x,e.y,e.w,e.h,s.x,s.y,s.w,s.h),n+=i}},{key:"drawCities",value:function(){var t=this.gameObjects.cities,e=this.scaleCoordinates(t.x,t.y,t.w,t.h);this.context.drawImage(t.canvas,0,0,t.w,t.h,e.x,e.y,e.w,e.h)}},{key:"scaleCoordinates",value:function(t,e,i,n){return{x:this.screen.width/(this.gameObjects.scaleW/t),y:this.screen.height/(this.gameObjects.scaleH/e),w:this.screen.width/(this.gameObjects.scaleW/i),h:this.screen.height/(this.gameObjects.scaleH/n)}}},{key:"render",value:function(t){var e=this;switch(this.screen.clear(),this.gameObjects.aliens.forEach(function(t){e.drawSprite(t.sprite[e.gameObjects.spFrame],t.x,t.y)}),this.context.save(),this.gameObjects.bulletsT.concat(this.gameObjects.bulletsA).forEach(function(t){e.drawBullet(t)}),this.context.restore(),this.drawCities(),"win"!=t&&"lose"!=t&&this.drawSprite(this.gameObjects.tank.sprite,this.gameObjects.tank.x,this.gameObjects.tank.y),this.drawText(this.gameObjects.score,20,20,20,"left"),this.drawLife(this.gameObjects.life),t){case"start":this.drawText("Начать игру");break;case"pause":this.drawText("Продолжить игру");break;case"lose":this.drawText("Попробовать ещё раз");break;case"win":this.drawText("Вы победили!")}}}]),t}();e["default"]=r},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();i(22);var r=function(){function t(e,i,s){var r=this;n(this,t),this.screen=e,this.gameObjects=i,this.draw=s,this.status="start",this.screen.screen.addEventListener("click",function(){"start"===r.status||"pause"===r.status?(r.status="run",r.gameObjects.lose=!1,r.run()):"win"===r.status||"lose"===r.status?(r.gameObjects.initGameObject(),r.status="run",r.gameObjects.lose=!1,r.run()):"run"===r.status&&(r.status="pause")}),window.addEventListener("resize",function(){"run"!==r.status&&r.run()})}return s(t,[{key:"run",value:function(){"run"===this.status&&this.gameObjects.update(),this.gameObjects.lose&&(this.status=this.gameObjects.lose),this.draw.render(this.status),"run"===this.status&&window.requestAnimationFrame(this.run.bind(this))}}]),t}();e["default"]=r},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();i(23);var a=700,o=function(){function t(e,i,s,r){n(this,t),this.sprite=i,this.controls=s,this.screen=e,this.scaleW=a,this.scaleH=a/this.screen.aspectRatio,this.sounds=r,this.life=0,this.score=0,this.initGameObject()}return r(t,[{key:"initGameObject",value:function(){var t=this;this.frames=0,this.spFrame=0,this.lvFrame=60,this.dir=1,this.tank={sprite:this.sprite.taSprite,x:(this.scaleW-this.sprite.taSprite.w)/2,y:this.scaleH-(20+this.sprite.taSprite.h)},this.bulletsT=[],this.bulletsA=[],this.aliens=[],[2,1,1,0,0].forEach(function(e,i){for(var n=0;n<10;n++)t.aliens.push({sprite:t.sprite.alSprite[e],x:20+30*n+[0,0,4][e],y:40+30*i,w:t.sprite.alSprite[e][0].w,h:t.sprite.alSprite[e][0].h,coast:10*(e+1)})}),this.cities=function(){var e={canvas:document.createElement("canvas"),x:t.scaleW/5-t.sprite.ciSprite.w/2,y:t.tank.y-(30+t.sprite.ciSprite.h),w:t.scaleW/5*3+t.sprite.ciSprite.w,h:t.sprite.ciSprite.h};e.canvas.width=e.w,e.canvas.height=e.h,e.context=e.canvas.getContext("2d");for(var i=0;i<4;i++)e.context.drawImage(t.sprite.spriteImg,t.sprite.ciSprite.x,t.sprite.ciSprite.y,t.sprite.ciSprite.w,t.sprite.ciSprite.h,t.scaleW/5*i,0,t.sprite.ciSprite.w,t.sprite.ciSprite.h);return e}()}},{key:"initBullet",value:function(t,e,i,n,s,r){return{x:t,y:e,v:i,w:n,h:s,c:r}}},{key:"updateBullet",value:function(t){t.y+=t.v}},{key:"AABBIntersect",value:function(t,e,i,n,s,r,a,o){return t<s+a&&s<t+i&&e<r+o&&r<e+n}},{key:"scoreUpdate",value:function(t){this.score+=t,this.score>=1e3&&this.lifeUpdate()}},{key:"lifeUpdate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.life<3&&(this.life+=t),this.score>=1e3&&this.life<3&&(this.life++,this.score-=1e3),~this.life||(this.lose="lose",this.life=0,this.score=0)}},{key:"generateDamage",value:function(t,e){var i=this.cities.context;i.clearRect(t-2,e-2,4,4),i.clearRect(t+2,e-4,2,4),i.clearRect(t+4,e,2,2),i.clearRect(t+2,e+2,2,2),i.clearRect(t-4,e+2,2,2),i.clearRect(t-6,e,2,2),i.clearRect(t-4,e-4,2,2),i.clearRect(t-2,e-6,2,2)}},{key:"hits",value:function(t,e){t-=this.cities.x,e-=this.cities.y;var i=this.cities.context.getImageData(t,e,1,1);return 0!==i.data[3]&&(this.generateDamage(t,e),!0)}},{key:"update",value:function(){var t=this;this.frames++,this.controls.isDown(37)&&(this.tank.x-=6),this.controls.isDown(39)&&(this.tank.x+=6),this.tank.x=Math.max(Math.min(this.tank.x,this.scaleW-(20+this.sprite.taSprite.w)),20),this.controls.isPressed(32)&&(this.bulletsT.push(this.initBullet(this.tank.x+10,this.tank.y-6,-3,2,6,"#fff")),this.sounds.playSound("shoot"));for(var e=0,i=this.bulletsA.length;e<i;e++){var n=this.bulletsA[e];this.updateBullet(n),n.y>this.scaleH?(this.bulletsA.splice(e,1),e--,i--):this.AABBIntersect(n.x,n.y,n.w,n.h,this.tank.x,this.tank.y,this.tank.sprite.w,this.tank.sprite.h)&&(this.lifeUpdate(-1),this.bulletsA.splice(e,1),e--,i--,this.sounds.playSound("explosion"))}for(var r=0,a=this.bulletsT.length;r<a;r++){var o=this.bulletsT[r];if(this.updateBullet(o),o.y+o.h<0)this.bulletsT.splice(r,1),r--,a--;else for(var c=0,l=this.aliens.length;c<l;c++){var u=this.aliens[c];if(this.AABBIntersect(o.x,o.y,o.w,o.h,u.x,u.y,u.w,u.h))switch(this.scoreUpdate(this.aliens[c].coast),this.aliens.splice(c,1),c--,l--,this.bulletsT.splice(r,1),r--,a--,this.sounds.playSound("invaderkilled"),l){case 40:this.lvFrame=40;break;case 30:this.lvFrame=28;break;case 20:this.lvFrame=20;break;case 10:this.lvFrame=12;break;case 5:this.lvFrame=6;break;case 1:this.lvFrame=4}}}for(var h=0,d=this.bulletsA.length,f=this.bulletsA.concat(this.bulletsT),p=f.length,v="";h<p;h++)v=f[h],this.cities.y<v.y&&v.y<this.cities.y+this.cities.h&&this.hits(v.x,v.y)&&(h<d?(this.bulletsA.splice(h,1),h--,p--):(this.bulletsT.splice(h-d,1),h--,p--));if(this.frames%this.lvFrame===0){var b=function(){if(!t.aliens.length)return t.lose="win",t.lifeUpdate(1),{v:void 0};t.spFrame=(t.spFrame+1)%2;var e=0,i=t.scaleW,n=20;t.aliens.forEach(function(s){s.x+=20*t.dir,e=Math.max(e,s.x+s.w),i=Math.min(i,s.x),n=Math.max(n,s.y+s.h)}),(e>t.scaleW-20||i<20)&&(t.dir*=-1,t.aliens.forEach(function(e){e.x+=20*t.dir,e.y+=20})),t.sounds.playSound("fastinvader"),n>t.tank.y&&(t.lose="lose",t.score=0)}();if("object"===(void 0===b?"undefined":s(b)))return b.v}Math.random()<.03&&this.aliens.length>0&&!function(){var e=t.aliens[Math.round(Math.random()*(t.aliens.length-1))];t.aliens.forEach(function(i){t.AABBIntersect(e.x,e.y,e.w,100,i.x,i.y,i.w,i.h)&&(e=i)}),t.bulletsA.push(t.initBullet(e.x+.5*e.w,e.y+e.h,3,2,4,"#fff")),t.sounds.playSound("shoot")}()}}]),t}();e["default"]=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();i(24);var r=16/9,a="wrapper",o="canvas",c=1e3,l=function(){function t(){var e=this;n(this,t),this.aspectRatio=r,this.screen=document.createElement("div"),this.canvas=document.createElement("canvas"),this.setScreenSize(),document.body.appendChild(this.screen),this.screen.appendChild(this.canvas),this.screen.className=a,this.canvas.className=o,this.context=this.canvas.getContext("2d"),window.addEventListener("resize",function(){e.setScreenSize()})}return s(t,[{key:"setScreenSize",value:function(){this.windowWidth=document.documentElement.clientWidth,this.windowHeight=document.documentElement.clientHeight,this.width=.98*this.windowWidth>c?c:.98*this.windowWidth,this.height=this.width/r,this.height>.98*this.windowHeight&&(this.height=.98*this.windowHeight,this.width=.98*this.windowHeight*r),this.canvas.width=this.width,this.canvas.height=this.height,this.screen.style.height=this.height+"px",this.screen.style.width=this.width+"px"}},{key:"clear",value:function(){this.context.clearRect(0,0,this.width,this.height)}}]),t}();e["default"]=l},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();i(25);var r="sound-wrapper",a=function(){function t(){n(this,t),this.soundWrapper=document.createElement("div"),this.soundWrapper.className=r,document.body.appendChild(this.soundWrapper),this.sounds={explosion:this.addAudio("explosion"),fastinvader1:this.addAudio("fastinvader1"),fastinvader2:this.addAudio("fastinvader2"),fastinvader3:this.addAudio("fastinvader3"),fastinvader4:this.addAudio("fastinvader4"),invaderkilled:this.addAudio("invaderkilled"),shoot:this.addAudio("shoot")},this.invidersSound=1}return s(t,[{key:"addAudio",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sounds",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"mp3",n=document.createElement("audio");return n.src=e+"/"+t+"."+i,this.soundWrapper.appendChild(n),n}},{key:"playSound",value:function(t){"fastinvader"===t&&(++this.invidersSound>4&&(this.invidersSound=1),t="fastinvader"+this.invidersSound),this.sounds[t]&&this.sounds[t].play()}},{key:"pauseSound",value:function(t){"fastinvader"===t&&(t="fastinvader"+this.invidersSound),this.sounds[t]&&this.sounds[t].pause()}}]),t}();e["default"]=a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();i(26);var r=function(){function t(){n(this,t),this.spriteImg=new Image,this.spriteImg.src="data:image/png;base64,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"}return s(t,[{key:"getSprite",value:function(t,e,i,n){return{x:t,y:e,w:i,h:n}}},{key:"initSprite",value:function(){this.alSprite=[[this.getSprite(38,0,24,16),this.getSprite(38,16,24,16)],[this.getSprite(0,0,22,16),this.getSprite(0,16,22,16)],[this.getSprite(22,0,16,16),this.getSprite(22,16,16,16)]],this.taSprite=this.getSprite(62,0,22,16),this.ciSprite=this.getSprite(84,8,36,24)}}]),t}();e["default"]=r},function(t,e,i){e=t.exports=i(1)(),e.i(i(18),""),e.push([t.id,"body{min-height:100vh;width:100%;overflow:hidden;background:#0e3e66}",""])},function(t,e,i){e=t.exports=i(1)(),e.push([t.id,"",""])},function(t,e,i){e=t.exports=i(1)(),e.push([t.id,"",""])},function(t,e,i){e=t.exports=i(1)(),e.push([t.id,"",""])},function(t,e,i){e=t.exports=i(1)(),e.push([t.id,"",""])},function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".wrapper{display:block;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto}.canvas{background:#000}",""])},function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".sound-wrapper{display:none}",""])},function(t,e,i){e=t.exports=i(1)(),e.push([t.id,"",""])},function(t,e,i){e=t.exports=i(1)(),e.push([t.id,"/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}",""])},function(t,e,i){var n=i(10);"string"==typeof n&&(n=[[t.id,n,""]]),i(2)(n,{}),n.locals&&(t.exports=n.locals)},function(t,e,i){var n=i(11);"string"==typeof n&&(n=[[t.id,n,""]]),i(2)(n,{}),n.locals&&(t.exports=n.locals)},function(t,e,i){var n=i(12);"string"==typeof n&&(n=[[t.id,n,""]]),i(2)(n,{}),n.locals&&(t.exports=n.locals)},function(t,e,i){var n=i(13);"string"==typeof n&&(n=[[t.id,n,""]]),i(2)(n,{}),n.locals&&(t.exports=n.locals)},function(t,e,i){var n=i(14);"string"==typeof n&&(n=[[t.id,n,""]]),i(2)(n,{}),n.locals&&(t.exports=n.locals)},function(t,e,i){var n=i(15);"string"==typeof n&&(n=[[t.id,n,""]]),i(2)(n,{}),n.locals&&(t.exports=n.locals)},function(t,e,i){var n=i(16);"string"==typeof n&&(n=[[t.id,n,""]]),i(2)(n,{}),n.locals&&(t.exports=n.locals)},function(t,e,i){var n=i(17);"string"==typeof n&&(n=[[t.id,n,""]]),i(2)(n,{}),n.locals&&(t.exports=n.locals)}]);