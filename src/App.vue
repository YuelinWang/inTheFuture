<template>
  <main>
    <div class="container">
      <h1>欢迎使用 Feng 待办事项！</h1>
      <todo-add :tid="todos.length" @add-todo="addTodo" />
      <todo-filter :selected="filter" @change-filter="filter = $event" />
      <todo-list :todos="filteredTodos" />
    </div>
  </main>
</template>

<script>
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";
import useTodos from "@/composables/useTodos.js";
import useFilteredTodos from "@/composables/useFilteredTodos.js";

export default {
  name: "App",
  components: {
    TodoAdd,
    TodoFilter,
    TodoList,
  },
  setup() {
    const {todos, addTodo,fixed} = useTodos();
    const {filter, filteredTodos} = useFilteredTodos(todos);
    return {
      todos,
      filter,
      addTodo,
      fixed,
      filteredTodos,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

/* 整个页面 */
main {
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  /* padding: 10vh 0; */
  display: grid;
  align-items: start;
  justify-items: center;
}

.container {
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

.container::-webkit-scrollbar{
  display: none;
}

/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
