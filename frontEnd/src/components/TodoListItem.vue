<template>
  <div class="todo-item" >
    <div class="todo-item-body" :class="{ done: todoItem.completed }">
      <label>
        <input type="checkbox"
          :checked="todoItem.completed"
          @click="emitStatesChange"
        />
        {{ todoItem.content }}
        <span class="check-button"></span>
      </label>
    </div>
    <button @click="delTodoNode"><i class="del"></i></button>
  </div>
</template>

<script>
// import { ref } from "vue";

export default { 
  name: "TodoListItem", 
  props: ["todoItem"],
  setup(props,context){
    return useStatesChange(props.todoItem,context.emit);
  }
};

function useStatesChange(todoItem,emit){
  // const statesChange=ref("");
//$emit('change-state', $event)
// type="checkbox"
// :checked="todoItem.completed"
// @click="$emit('change-state', $event)"
  const emitStatesChange=()=>{
    // console.log(todoItem);
    emit('change-state', event);
    // emit('change-states', event);
  }
  const delTodoNode=()=>{
    emit('del-todo', event);
  }
  return {
    emitStatesChange,
    delTodoNode,
  }
}
</script>

<style>
.todo-item {
  position: relative;
  background: white;
  padding: 16px;
  border-radius: 8px;
  color: #626262;
  word-break: break-all;
}
.todo-item .todo-item-body{
  width: 90%;
}
.todo-item label {
  display:inline-block;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.todo-item .done label {
  text-decoration: line-through;
  font-style: italic;
}

.todo-item label span.check-button {
  position: absolute;
  top: 0;
}

.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}

.todo-item label span.check-button::before {
  border: 1px solid #b382f9;
}

.todo-item label span.check-button::after {
  transition: 0.4s;
  background: #b382f9;
  transform: translate(1px, 1px) scale(0.8);
  opacity: 0;
}

.todo-item input {
  margin-right: 16px;
  opacity: 0;
}

.todo-item input:checked + span.check-button::after {
  opacity: 1;
}

.todo-item button {
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background:  #e9ebf8;
  border: none;
  color: white;
  position: absolute;
  top: 0;
  right: 0px;
  cursor: pointer;
  outline: none;
}

.todo-item button:active {
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: #e0e3f8;
  border: none;
  color: white;
  position: absolute;
  right: 0px;
  cursor: pointer;
  outline: none;
}

.todo-item .del {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotate(45deg);
}
</style>
