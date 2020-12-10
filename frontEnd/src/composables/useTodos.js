import { onMounted, ref } from "vue";

export default function useTodos() {
    const todos = ref([]);
    // 获取远程 todos
    const fetchTodos = async() => {
        //向数据库询问
        let id = window.android.nowID();
        if (id !== 0) {
            let alldata = await window.android.getNotesJson();
            let data = JSON.parse(alldata);
            todos.value = data.map((todo) => ({
                id: todo.id,
                content: todo.title,
                completed: todo.completed,
            }));
            todos.value.reverse();
        }

        //仅前端测试
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
    // 从组件拿到id，如果为-1代表为空，如果为-2代表全是空格
    const addTodo = (todo) => {
        if (todo.id === -1) {
            window.android.nullWarning();
        } else if (todo.id === -2) {
            window.android.blankSpaceWarning();
        } else {
            let id = window.android.nowID();
            todo.id = id + 1;
            window.android.pushNotestodo(todo.content);
            todos.value.unshift(todo);
        }
    };

    //删除
    const delTodo = (todo) => {
        let lc = window.android.delNotetodo(todo.id);
        todos.value.splice(todos.value.length - lc - 1, 1);

    }

    // 状态改变
    const statesChange = (todo) => {
        window.android.updateNote(todo.id, todo.completed);
    }

    onMounted(() => {
        fetchTodos();
    });

    return {
        todos,
        addTodo,
        statesChange,
        delTodo,
    };
}