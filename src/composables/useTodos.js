import { onMounted, onBeforeUnmount, ref } from "vue";

export default function useTodos() {
    const todos = ref([]);
    // 添加 todo
    const addTodo = (todo) => {
        todos.value.push(todo);
        // window.android.pushNotestodo(todo.content);
    };

    // 获取远程 todos
    const fetchTodos = async() => {
        let alldata = await window.android.getNotesJson();
        let data = JSON.parse(alldata);
        // let alldata = '[{ "id": 18, "userId": 1, "title": "12", "completed": "true" }, { "id": 17, "userId": 1, "title": "11", "completed": "false" }, { "id": 16, "userId": 1, "title": "10 note", "completed": "false" }, { "id": 15, "userId": 1, "title": "12", "completed": "true" }, { "id": 14, "userId": 1, "title": "11", "completed": "false" }, { "id": 13, "userId": 1, "title": "10 note", "completed": "false" }, { "id": 12, "userId": 1, "title": "12", "completed": "true" }, { "id": 11, "userId": 1, "title": "11", "completed": "false" }, { "id": 10, "userId": 1, "title": "10 note", "completed": "false" }, { "id": 9, "userId": 1, "title": "9", "completed": "true" }, { "id": 8, "userId": 1, "title": "8note", "completed": "false" }, { "id": 7, "userId": 1, "title": "7 note", "completed": "false" }, { "id": 6, "userId": 1, "title": "3 note", "completed": "true" }, { "id": 5, "userId": 1, "title": "second note", "completed": "false" }, { "id": 4, "userId": 1, "title": "first note", "completed": "false" }, { "id": 3, "userId": 1, "title": "3 note", "completed": "true" }, { "id": 2, "userId": 1, "title": "second note", "completed": "false" }, { "id": 1, "userId": 1, "title": "first note", "completed": "false" }]';
        // let data = JSON.parse(alldata);
        todos.value = data.map((todo) => ({
            id: todo.id,
            content: todo.title,
            completed: todo.completed,
        }));
    };

    const finishTodos = () => {
        window.android.updateNote(todos);
        //alert(1);
    }

    onMounted(() => {
        fetchTodos();
        //console.log(todos);
    });

    onBeforeUnmount(() => {
        finishTodos();
    });


    return {
        todos,
        addTodo,
    };
}