<template>
  <div class="todo-list">
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      @change-state="todo.completed = $event.target.checked,$emit('change-states', todo)"
      @del-todo="$emit('del-todos', todo)"
      :todo-item="todo"
    ></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";

export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
  props: ["todos"],
};
</script>

<style>
.todo-list {
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  display: grid;
  row-gap: 14px;
}
</style>
