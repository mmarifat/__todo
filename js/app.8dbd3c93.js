(function(e){function t(t){for(var n,r,a=t[0],u=t[1],d=t[2],l=0,f=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,r=1;r<o.length;r++){var a=o[r];0!==c[a]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=o[0]))}return e}var n={},r={app:0},c={app:0},i=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-9909dea2":"73c06405"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(e){var t=[],o={"chunk-9909dea2":1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=new Promise((function(t,o){for(var n="css/"+({}[e]||e)+"."+{"chunk-9909dea2":"2e86ece1"}[e]+".css",c=u.p+n,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var d=i[a],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===c))return t()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){d=f[a],l=d.getAttribute("data-href");if(l===n||l===c)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var n=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],s.parentNode.removeChild(s),o(i)},s.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){r[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=c[e]=[t,o]}));t.push(n[2]=i);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e);var f=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(s);var o=c[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,o[1](f)}c[e]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(o,n,function(t){return e[t]}.bind(null,n));return o},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/__todo/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var f=0;f<d.length;f++)t(d[f]);var s=l;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},"5c0b":function(e,t,o){"use strict";o("9c0c")},"9c0c":function(e,t,o){},cd49:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",{attrs:{id:"app"}},[o("v-main",[o("v-container",{attrs:{id:"container"}},[o("router-view")],1)],1)],1)},c=[],i=o("d4ec"),a=o("bee2"),u=o("262e"),d=o("2caf"),l=o("9ab4"),f=o("60a3"),s=function(e){Object(u["a"])(o,e);var t=Object(d["a"])(o);function o(){return Object(i["a"])(this,o),t.apply(this,arguments)}return Object(a["a"])(o,[{key:"changeDocTitle",value:function(){document.title=this.$route.meta.title+" :: MMARIFAT"}}]),o}(f["b"]);Object(l["a"])([Object(f["c"])("$route",{immediate:!0})],s.prototype,"changeDocTitle",null),s=Object(l["a"])([f["a"]],s);var p=s,m=p,h=(o("5c0b"),o("2877")),v=Object(h["a"])(m,r,c,!1,null,null,null),g=v.exports,b=o("9483");Object(b["a"])("".concat("/__todo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("d3b7"),o("3ca3"),o("ddb0");var y=o("8c4f");n["default"].use(y["a"]);var w=[{path:"/",name:"Home",component:function(){return o.e("chunk-9909dea2").then(o.bind(null,"bb51"))},meta:{title:"TODOS"}}],O=new y["a"]({mode:"history",base:"/__todo/",routes:w}),T=O,j=(o("fb6a"),o("25f0"),o("a434"),o("4de4"),o("d81d"),o("2f62")),A=o("cc98"),k=o.n(A);n["default"].use(j["a"]);var _=new j["a"].Store({state:{todo:[]},mutations:{addTodo:function(e,t){var o={_id:k()(),completed:!1,name:t,color:"#"+("BCDEF"+(Math.random()*(1<<24)|0).toString(16)).slice(-6)};e.todo.push(o)},editTodo:function(e,t){e.todo[e.todo.indexOf(t)]=t},deleteTodo:function(e,t){e.todo.splice(e.todo.indexOf(t),1)},completeTodo:function(e,t){e.todo[e.todo.indexOf(t)].completed=!0},activeTodo:function(e,t){e.todo[e.todo.indexOf(t)].completed=!1},clearCompleted:function(e){e.todo=e.todo.filter((function(e){return!0!==e.completed}))},completeAll:function(e){e.todo=e.todo.map((function(e){return e.completed=!0,e}))},activeAll:function(e){e.todo=e.todo.map((function(e){return e.completed=!1,e}))}},actions:{addTodo:function(e,t){e.commit("addTodo",t)},editTodo:function(e,t){e.commit("editTodo",t)},deleteTodo:function(e,t){e.commit("deleteTodo",t)},completeTodo:function(e,t){e.commit("completeTodo",t)},activeTodo:function(e,t){e.commit("activeTodo",t)},clearCompleted:function(e){e.commit("clearCompleted")},completeAll:function(e){e.commit("completeAll")},activeAll:function(e){e.commit("activeAll")}},getters:{ALL:function(e){return e.todo},Completed:function(e){return e.todo.filter((function(e){return!0===e.completed}))},Active:function(e){return e.todo.filter((function(e){return!1===e.completed}))}}}),C=o("ce5b"),F=o.n(C);o("bf40");n["default"].use(F.a);var S=new F.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"fa"}});o("15f5");n["default"].config.productionTip=!1,new n["default"]({router:T,store:_,vuetify:S,render:function(e){return e(g)}}).$mount("#app")}});
//# sourceMappingURL=app.8dbd3c93.js.map