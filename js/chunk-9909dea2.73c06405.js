(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9909dea2"],{"21bb":function(t,e,o){"use strict";o("2dad")},"2dad":function(t,e,o){},bb51:function(t,e,o){"use strict";o.r(e);var l,s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{staticClass:"pa-4",attrs:{"text-xs-center":""}},[o("h1",{staticClass:"font-weight-medium my-3 text-h3 blue--text"},[t._v("TODOS")]),o("v-text-field",{attrs:{autocomplete:"off",placeholder:"Add something","single-line":"",solo:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createNew(e)}},model:{value:t.todo,callback:function(e){t.todo=e},expression:"todo"}}),o("v-row",{staticClass:"pl-1"},[o("v-col",{staticClass:"col-12 col-md text-md-right"},[o("v-btn-toggle",{attrs:{color:"dark",group:"",dense:"",mandatory:"",tile:""},model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}},[o("v-btn",{attrs:{outlined:"",value:t.cStatus.ALL,text:"",small:""},domProps:{innerHTML:t._s("All")}}),o("v-btn",{attrs:{outlined:"",value:t.cStatus.ACTIVE,text:"",small:""},domProps:{innerHTML:t._s("Active")}}),o("v-btn",{attrs:{outlined:"",value:t.cStatus.COMPLETED,text:"",small:""},domProps:{innerHTML:t._s("Completed")}})],1),t.todos.some((function(t){return!0===t.completed}))?o("v-btn",{attrs:{outlined:"",text:"",small:""},domProps:{innerHTML:t._s("Clear Completed")},on:{click:t.clearCompleted}}):t._e()],1),o("v-col",{staticClass:"col-12 col-md-auto text-center order-md-first pt-0"},[o("v-checkbox",{attrs:{dense:"",label:t.todos.length+" item left"},on:{click:t.makeAllComplete},model:{value:t.completeAll,callback:function(e){t.completeAll=e},expression:"completeAll"}})],1)],1),o("v-list",t._l(t.todos,(function(e){return o("v-list-item",{key:e._id},[o("v-list-item-icon",{on:{click:function(o){return t.changeStatus(e)}}},[o("v-tooltip",{attrs:{top:"",color:"green darken-2"},scopedSlots:t._u([{key:"activator",fn:function(l){var s=l.on,n=l.attrs;return[o("v-icon",t._g(t._b({attrs:{color:e.completed?"grey":"indigo accent-4",small:""}},"v-icon",n,!1),s),[t._v(" "+t._s(e.completed?"fa fa-check-circle":"fa fa-circle")+" ")])]}}],null,!0)},[o("span",[t._v(t._s(e.completed?"Make Active":"Make Complete"))])])],1),o("v-list-item-content",[o("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(l){var s=l.on,n=l.attrs;return[o("span",t._g(t._b({class:e.completed?"text-decoration-line-through grey--text":""},"span",n,!1),s),[o("v-chip",{attrs:{label:"",small:"",color:e.completed?"grey lighten-2":e.color}},[t._v(t._s(e.name)+" ")])],1)]}}],null,!0),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("v-card",[o("v-card-text",[o("v-text-field",{attrs:{"single-line":""},nativeOn:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.editTodo(e)}},model:{value:e.name,callback:function(o){t.$set(e,"name",o)},expression:"item.name"}})],1)],1)],1)],1),o("v-list-item-icon",{on:{click:function(o){return t.deleteTodo(e)}}},[o("v-tooltip",{attrs:{top:"",color:"red darken-2"},scopedSlots:t._u([{key:"activator",fn:function(l){var s=l.on,n=l.attrs;return[o("v-icon",t._g(t._b({attrs:{color:e.completed?"grey":"red accent-4",small:""}},"v-icon",n,!1),s),[t._v("fa fa-times")])]}}],null,!0)},[o("span",[t._v("Remove")])])],1)],1)})),1)],1)],1)},n=[],a=o("d4ec"),c=o("bee2"),i=o("262e"),r=o("2caf"),d=o("9ab4"),u=o("60a3");(function(t){t["ALL"]="all",t["COMPLETED"]="completed",t["ACTIVE"]="active"})(l||(l={}));var p=function(t){Object(i["a"])(o,t);var e=Object(r["a"])(o);function o(){var t;return Object(a["a"])(this,o),t=e.apply(this,arguments),t.cStatus=l,t.toggle=l.ALL,t.todo=null,t.show=!1,t.completeAll=!1,t.todos=t.$store.getters.ALL,t}return Object(c["a"])(o,[{key:"remap",value:function(){this.toggle===l.ACTIVE?this.todos=this.$store.getters.Active:this.toggle===l.COMPLETED?this.todos=this.$store.getters.Completed:this.todos=this.$store.getters.ALL}},{key:"createNew",value:function(){this.todo&&(this.$store.dispatch("addTodo",this.todo),this.todo=null)}},{key:"deleteTodo",value:function(t){this.$store.dispatch("deleteTodo",t)}},{key:"editTodo",value:function(t){this.$store.dispatch("editTodo",t),this.show=!1}},{key:"changeStatus",value:function(t){t.completed?this.$store.dispatch("activeTodo",t):this.$store.dispatch("completeTodo",t)}},{key:"clearCompleted",value:function(){this.$store.dispatch("clearCompleted"),this.completeAll=!1}},{key:"makeAllComplete",value:function(){this.completeAll?this.$store.dispatch("completeAll"):this.$store.dispatch("activeAll")}}]),o}(u["b"]);Object(d["a"])([Object(u["c"])("toggle"),Object(u["c"])("$store.state",{deep:!0})],p.prototype,"remap",null),p=Object(d["a"])([u["a"]],p);var m=p,v=m,h=(o("21bb"),o("2877")),f=Object(h["a"])(v,s,n,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-9909dea2.73c06405.js.map