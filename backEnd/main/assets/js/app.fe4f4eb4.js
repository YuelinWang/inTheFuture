(function(e){function t(t){for(var o,c,i=t[0],u=t[1],a=t[2],s=0,f=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(f.length)f.shift()();return d.push.apply(d,a||[]),n()}function n(){for(var e,t=0;t<d.length;t++){for(var n=d[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(d.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},d=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var l=u;d.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0382":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=(n("4de4"),{class:"container"}),d=Object(o["f"])("h1",null,"未 来",-1);function c(e,t){var n=Object(o["l"])("todo-add"),c=Object(o["l"])("todo-filter"),i=Object(o["l"])("todo-list");return Object(o["h"])(),Object(o["d"])("main",null,[Object(o["f"])("div",r,[d,Object(o["f"])(n,{tid:e.todos.length,"onAdd-todo":e.addTodo},null,8,["tid","onAdd-todo"]),Object(o["f"])(c,{selected:e.filter,"onChange-filter":t[1]||(t[1]=function(t){return e.filter=t})},null,8,["selected"]),Object(o["f"])(i,{todos:e.filteredTodos,"onChange-states":e.statesChange,"onDel-todos":e.delTodo},null,8,["todos","onChange-states","onDel-todos"])])])}var i={class:"input-add"},u=Object(o["f"])("i",{class:"plus"},null,-1);function a(e,t){return Object(o["h"])(),Object(o["d"])("div",i,[Object(o["o"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.todoContent=t}),onKeyup:t[2]||(t[2]=Object(o["p"])((function(){return e.emitAddTodo.apply(e,arguments)}),["enter"]))},null,544),[[o["n"],e.todoContent]]),Object(o["f"])("button",{onClick:t[3]||(t[3]=function(){return e.emitAddTodo.apply(e,arguments)})},[u])])}n("a15b"),n("ac1f"),n("1276");var l={name:"TodoAdd",props:["tid"],setup:function(e,t){return s(e.tid,t.emit)}};function s(e,t){var n=Object(o["j"])(""),r=function(){var o={};o=""===n.value?{id:-1}:""===n.value.split(" ").join("")?{id:-2}:{id:e,content:n.value,completed:!1},n.value="",t("add-todo",o)};return{todoContent:n,emitAddTodo:r}}n("72eb");l.render=a;var f=l,p={class:"filters"};function b(e,t){return Object(o["h"])(),Object(o["d"])("div",p,[(Object(o["h"])(!0),Object(o["d"])(o["a"],null,Object(o["k"])(e.filters,(function(t){return Object(o["h"])(),Object(o["d"])("span",{key:t.value,onClick:function(n){return e.$emit("change-filter",t.value)},class:["filter",{active:e.selected==t.value}]},Object(o["m"])(t.label),11,["onClick"])})),128))])}var v={name:"TodoFilter",props:["selected"],setup:function(){var e=Object(o["i"])([{label:"全部",value:"all"},{label:"已完成",value:"done"},{label:"未完成",value:"todo"}]);return{filters:e}}};n("eabe");v.render=b;var j=v,O={class:"todo-list"};function h(e,t){var n=Object(o["l"])("todo-list-item");return Object(o["h"])(),Object(o["d"])("div",O,[(Object(o["h"])(!0),Object(o["d"])(o["a"],null,Object(o["k"])(e.todos,(function(t){return Object(o["h"])(),Object(o["d"])(n,{key:t.id,"onChange-state":function(n){return t.completed=n.target.checked,e.$emit("change-states",t)},"onDel-todo":function(n){return e.$emit("del-todos",t)},"todo-item":t},null,8,["onChange-state","onDel-todo","todo-item"])})),128))])}var m={class:"todo-item"},g=Object(o["f"])("span",{class:"check-button"},null,-1),w=Object(o["f"])("i",{class:"del"},null,-1);function y(e,t){return Object(o["h"])(),Object(o["d"])("div",m,[Object(o["f"])("div",{class:["todo-item-body",{done:e.todoItem.completed}]},[Object(o["f"])("label",null,[Object(o["f"])("input",{type:"checkbox",checked:e.todoItem.completed,onClick:t[1]||(t[1]=function(){return e.emitStatesChange.apply(e,arguments)})},null,8,["checked"]),Object(o["e"])(" "+Object(o["m"])(e.todoItem.content)+" ",1),g])],2),Object(o["f"])("button",{onClick:t[2]||(t[2]=function(){return e.delTodoNode.apply(e,arguments)})},[w])])}var T={name:"TodoListItem",props:["todoItem"],setup:function(e,t){return k(e.todoItem,t.emit)}};function k(e,t){var n=function(){t("change-state",event)},o=function(){t("del-todo",event)};return{emitStatesChange:n,delTodoNode:o}}n("af01");T.render=y;var C=T,x={name:"TodoList",components:{TodoListItem:C},props:["todos"]};n("b40c");x.render=h;var I=x,S=(n("d81d"),n("a434"),n("96cf"),n("1da1"));function A(){var e=Object(o["j"])([]),t=function(){var t=Object(S["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=window.android.nowID(),0===n){t.next=8;break}return t.next=4,window.android.getNotesJson();case 4:o=t.sent,r=JSON.parse(o),e.value=r.map((function(e){return{id:e.id,content:e.title,completed:e.completed}})),e.value.reverse();case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(t){if(-1===t.id)window.android.nullWarning();else if(-2===t.id)window.android.blankSpaceWarning();else{var n=window.android.nowID();t.id=n+1,window.android.pushNotestodo(t.content),e.value.unshift(t)}},r=function(t){var n=window.android.delNotetodo(t.id);e.value.splice(e.value.length-n-1,1)},d=function(e){window.android.updateNote(e.id,e.completed)};return Object(o["g"])((function(){t()})),{todos:e,addTodo:n,statesChange:d,delTodo:r}}function N(e){var t=Object(o["j"])("all"),n=Object(o["b"])((function(){switch(t.value){case"done":return e.value.filter((function(e){return e.completed}));case"todo":return e.value.filter((function(e){return!e.completed}));default:return e.value}}));return{filter:t,filteredTodos:n}}var P={name:"App",components:{TodoAdd:f,TodoFilter:j,TodoList:I},setup:function(){var e=A(),t=e.todos,n=e.addTodo,o=e.statesChange,r=e.delTodo,d=N(t),c=d.filter,i=d.filteredTodos;return{todos:t,filter:c,addTodo:n,filteredTodos:i,statesChange:o,delTodo:r}}};n("64be");P.render=c;var D=P;Object(o["c"])(D).mount("#app")},"572e":function(e,t,n){},"64be":function(e,t,n){"use strict";n("c894")},"6bf6":function(e,t,n){},"72eb":function(e,t,n){"use strict";n("572e")},af01:function(e,t,n){"use strict";n("f0c1")},b40c:function(e,t,n){"use strict";n("6bf6")},c894:function(e,t,n){},eabe:function(e,t,n){"use strict";n("0382")},f0c1:function(e,t,n){}});
//# sourceMappingURL=app.fe4f4eb4.js.map