import { onMounted, ref } from "vue";

export default function useTodos() {
    const todos = ref([]);
    // 获取远程 todos
    const fetchTodos = async() => {
        let id = window.android.nowID();
        if (id !== 1) {
            let alldata = await window.android.getNotesJson();
            let data = JSON.parse(alldata);
            todos.value = data.map((todo) => ({
                id: todo.id,
                content: todo.title,
                completed: todo.completed,
            }));
            todos.value.reverse();
        }

        // let alldata = '[{ "id": 1, "userId": 1, "title": "first note", "completed": false }, { "id": 2, "userId": 1, "title": "second note", "completed": false }, { "id": 3, "userId": 1, "title": "3 note", "completed": true }, { "id": 4, "userId": 1, "title": "first note", "completed": false }, { "id": 5, "userId": 1, "title": "second note", "completed": false }, { "id": 6, "userId": 1, "title": "3 note", "completed": true }, { "id": 7, "userId": 1, "title": "7 note", "completed": false }, { "id": 8, "userId": 1, "title": "8note", "completed": false }, { "id": 9, "userId": 1, "title": "9", "completed": true }, { "id": 10, "userId": 1, "title": "10 note", "completed": false }, { "id": 11, "userId": 1, "title": "11", "completed": false }, { "id": 12, "userId": 1, "title": "12", "completed": true }, { "id": 13, "userId": 1, "title": "10 note", "completed": false }, { "id": 14, "userId": 1, "title": "11", "completed": false }, { "id": 15, "userId": 1, "title": "12", "completed": true }, { "id": 16, "userId": 1, "title": "10 note", "completed": false }, { "id": 17, "userId": 1, "title": "11", "completed": false }, { "id": 18, "userId": 1, "title": "18", "completed": true }]';
        // let data = JSON.parse(alldata);
        // todos.value = data.map((todo) => ({
        //     id: todo.id,
        //     content: todo.title,
        //     completed: todo.completed,
        // }));
        // todos.value.reverse();
    };

    // 添加 todo
    const addTodo = (todo) => {
        if (todo.id === -1) {
            // console.log(todo.id);
            window.android.nullWarning();
        } else if (todo.id === -2) {
            // console.log(todo.id);
            window.android.blankSpaceWarning();
        } else {
            // console.log(todo);
            // console.log(todos.value[todos.value.length - 1].id);
            // if (todos.value.length === 0) todo.id = 1;
            // else todo.id = todos.value[todos.value.length - 1].id + 1;


            let id = window.android.nowID();
            todo.id = id + 1;
            // console.log(todos.value[todos.value.length - 1].id);
            window.android.pushNotestodo(todo.content);
            todos.value.unshift(todo);
        }
    };

    //删除
    const delTodo = (todo) => {
        let lc = window.android.delNotetodo(todo.id);
        // console.log(todo.id);
        todos.value.splice(todos.value.length - lc - 1, 1);

    }


    // 状态改变
    const statesChange = (todo) => {
        window.android.updateNote(todo.id, todo.completed);
        // console.log(1);
        // console.log(todo.id);
        // console.log(todo.completed);
    }

    onMounted(() => {

        fetchTodos();
        // console.log(todos.value.length);
        // console.log(todos.length);
        // console.log(todos);
    });




    return {
        todos,
        addTodo,
        statesChange,
        delTodo,
    };
}