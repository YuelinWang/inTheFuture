(function(e){function t(t){for(var o,d,i=t[0],u=t[1],a=t[2],s=0,f=[];s<i.length;s++)d=i[s],Object.prototype.hasOwnProperty.call(r,d)&&r[d]&&f.push(r[d][0]),r[d]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=d(d.s=n[0]))}return e}var o={},r={app:0},c=[];function d(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=e,d.c=o,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)d.d(n,o,function(t){return e[t]}.bind(null,o));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0382":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=(n("4de4"),{class:"container"}),c=Object(o["f"])("h1",null,"未 来",-1);function d(e,t){var n=Object(o["l"])("todo-add"),d=Object(o["l"])("todo-filter"),i=Object(o["l"])("todo-list");return Object(o["h"])(),Object(o["d"])("main",null,[Object(o["f"])("div",r,[c,Object(o["f"])(n,{tid:e.todos.length,"onAdd-todo":e.addTodo},null,8,["tid","onAdd-todo"]),Object(o["f"])(d,{selected:e.filter,"onChange-filter":t[1]||(t[1]=function(t){return e.filter=t})},null,8,["selected"]),Object(o["f"])(i,{todos:e.filteredTodos,"onChange-states":e.statesChange},null,8,["todos","onChange-states"])])])}var i={class:"input-add"},u=Object(o["f"])("i",{class:"plus"},null,-1);function a(e,t){return Object(o["h"])(),Object(o["d"])("div",i,[Object(o["o"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.todoContent=t}),onKeyup:t[2]||(t[2]=Object(o["p"])((function(){return e.emitAddTodo.apply(e,arguments)}),["enter"]))},null,544),[[o["n"],e.todoContent]]),Object(o["f"])("button",{onClick:t[3]||(t[3]=function(){return e.emitAddTodo.apply(e,arguments)})},[u])])}var l={name:"TodoAdd",props:["tid"],setup:function(e,t){return s(e.tid,t.emit)}};function s(e,t){var n=Object(o["j"])(""),r=function(){var o={};o=""===n.value?{id:-1}:{id:e,content:n.value,completed:!1},n.value="",t("add-todo",o)};return{todoContent:n,emitAddTodo:r}}n("72eb");l.render=a;var f=l,p={class:"filters"};function b(e,t){return Object(o["h"])(),Object(o["d"])("div",p,[(Object(o["h"])(!0),Object(o["d"])(o["a"],null,Object(o["k"])(e.filters,(function(t){return Object(o["h"])(),Object(o["d"])("span",{key:t.value,onClick:function(n){return e.$emit("change-filter",t.value)},class:["filter",{active:e.selected==t.value}]},Object(o["m"])(t.label),11,["onClick"])})),128))])}var v={name:"TodoFilter",props:["selected"],setup:function(){var e=Object(o["i"])([{label:"全部",value:"all"},{label:"已完成",value:"done"},{label:"未完成",value:"todo"}]);return{filters:e}}};n("eabe");v.render=b;var j=v,O={class:"todo-list"};function h(e,t){var n=Object(o["l"])("todo-list-item");return Object(o["h"])(),Object(o["d"])("div",O,[(Object(o["h"])(!0),Object(o["d"])(o["a"],null,Object(o["k"])(e.todos,(function(t){return Object(o["h"])(),Object(o["d"])(n,{key:t.id,"onChange-state":function(n){return t.completed=n.target.checked,e.$emit("change-states",t)},"todo-item":t},null,8,["onChange-state","todo-item"])})),128))])}var m=Object(o["f"])("span",{class:"check-button"},null,-1);function g(e,t){return Object(o["h"])(),Object(o["d"])("div",{class:["todo-item",{done:e.todoItem.completed}]},[Object(o["f"])("label",null,[Object(o["f"])("input",{type:"checkbox",checked:e.todoItem.completed,onClick:t[1]||(t[1]=function(){return e.emitStatesChange.apply(e,arguments)})},null,8,["checked"]),Object(o["e"])(" "+Object(o["m"])(e.todoItem.content)+" ",1),m])],2)}var w={name:"TodoListItem",props:["todoItem"],setup:function(e,t){return y(e.todoItem,t.emit)}};function y(e,t){var n=function(){t("change-state",event)};return{emitStatesChange:n}}n("af01");w.render=g;var T=w,k={name:"TodoList",components:{TodoListItem:T},props:["todos"]};n("b40c");k.render=h;var C=k,x=(n("d81d"),n("96cf"),n("1da1"));function I(){var e=Object(o["j"])([]),t=function(t){if(-1===t.id)window.android.nullWarning();else{var n=window.android.nowID();t.id=n,e.value.push(t),window.android.pushNotestodo(t.content)}},n=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=window.android.nowID(),1===n){t.next=7;break}return t.next=4,window.android.getNotesJson();case 4:o=t.sent,r=JSON.parse(o),e.value=r.map((function(e){return{id:e.id,content:e.title,completed:e.completed}}));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),r=function(e){window.android.updateNote(e.id,e.completed)};return Object(o["g"])((function(){n()})),{todos:e,addTodo:t,statesChange:r}}function A(e){var t=Object(o["j"])("all"),n=Object(o["b"])((function(){switch(t.value){case"done":return e.value.filter((function(e){return e.completed}));case"todo":return e.value.filter((function(e){return!e.completed}));default:return e.value}}));return{filter:t,filteredTodos:n}}var S={name:"App",components:{TodoAdd:f,TodoFilter:j,TodoList:C},setup:function(){var e=I(),t=e.todos,n=e.addTodo,o=e.statesChange,r=A(t),c=r.filter,d=r.filteredTodos;return{todos:t,filter:c,addTodo:n,filteredTodos:d,statesChange:o}}};n("64be");S.render=d;var P=S;Object(o["c"])(P).mount("#app")},"572e":function(e,t,n){},"64be":function(e,t,n){"use strict";n("c894")},"6bf6":function(e,t,n){},"72eb":function(e,t,n){"use strict";n("572e")},af01:function(e,t,n){"use strict";n("f0c1")},b40c:function(e,t,n){"use strict";n("6bf6")},c894:function(e,t,n){},eabe:function(e,t,n){"use strict";n("0382")},f0c1:function(e,t,n){}});
//# sourceMappingURL=app.0f0c9585.js.map