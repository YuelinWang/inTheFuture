import { onMounted, ref } from "vue";

export default function useTodos() {
    const todos = ref([]);
    // 添加 todo
    const addTodo = (todo) => {
        todos.value.push(todo);
        window.android.pushNotestodo(todo.content);
    };

    // 获取远程 todos
    const fetchTodos = async() => {
        let alldata = await window.android.getNotesJson();
        let data = JSON.parse(alldata);
        todos.value = data.map((todo) => ({
            id: todo.id,
            content: todo.title,
            completed: todo.completed,
        }));
    };

    onMounted(() => {
        fetchTodos();
    });

    return {
        todos,
        addTodo,
    };
}