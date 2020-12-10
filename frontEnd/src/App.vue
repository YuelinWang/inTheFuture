<template>
  <main>
    <div class="container">
      <h1>未 来</h1>
      <todo-add :tid="todos.length" @add-todo="addTodo" />
      <todo-filter :selected="filter" @change-filter="filter = $event" />
      <todo-list :todos="filteredTodos" @change-states="statesChange" @del-todos="delTodo"/>
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
    const {todos, addTodo, statesChange, delTodo} = useTodos();
    const {filter, filteredTodos} = useFilteredTodos(todos);
    return {
      todos,
      filter,
      addTodo,
      filteredTodos,
      statesChange,
      delTodo,
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
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

.container::-webkit-scrollbar{
  display: none;
}

/* 标题 */
h1 {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  margin: 24px auto;
  color: #414873;
  font-size: 32px;
  font-size: 500;
  text-align: center;
}
</style>
