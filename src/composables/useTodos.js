import { onMounted, ref } from "vue";
// import { data } from "../data/db.json";

export default function useTodos() {
    const todos = ref([]);
    // 添加 todo
    const addTodo = (todo) => {
        todos.value.push(todo);
        // window.android.pushNotestodo(todo.completed);
    }


    // 获取远程 todos
    const fetchTodos = async() => {
        // const response = await fetch(
        //     "https://jsonplaceholder.typicode.com/todos?_limit=5"
        // );
        // const rawTodos = await response.json();
        let data = await window.android.getNotesJson();
        // let alldata = '[{ "id": 18, "userId": 1, "title": "12", "completed": "true" }, { "id": 17, "userId": 1, "title": "11", "completed": "false" }, { "id": 16, "userId": 1, "title": "10 note", "completed": "false" }, { "id": 15, "userId": 1, "title": "12", "completed": "true" }, { "id": 14, "userId": 1, "title": "11", "completed": "false" }, { "id": 13, "userId": 1, "title": "10 note", "completed": "false" }, { "id": 12, "userId": 1, "title": "12", "completed": "true" }, { "id": 11, "userId": 1, "title": "11", "completed": "false" }, { "id": 10, "userId": 1, "title": "10 note", "completed": "false" }, { "id": 9, "userId": 1, "title": "9", "completed": "true" }, { "id": 8, "userId": 1, "title": "8note", "completed": "false" }, { "id": 7, "userId": 1, "title": "7 note", "completed": "false" }, { "id": 6, "userId": 1, "title": "3 note", "completed": "true" }, { "id": 5, "userId": 1, "title": "second note", "completed": "false" }, { "id": 4, "userId": 1, "title": "first note", "completed": "false" }, { "id": 3, "userId": 1, "title": "3 note", "completed": "true" }, { "id": 2, "userId": 1, "title": "second note", "completed": "false" }, { "id": 1, "userId": 1, "title": "first note", "completed": "false" }]';
        // let data = JSON.parse(alldata);
        // console.log(data);
        todos.value = data.map((todo) => ({
            id: todo.id,
            content: todo.title,
            completed: todo.completed,
        }));
    };

    const fixed = () => {
        console.log('1');
    }

    onMounted(() => {
        fetchTodos();
    });

    return {
        todos,
        addTodo,
        fixed,
    };
}