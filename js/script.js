const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'server.php',
            nuovoElemento: '',
            todoList: []
        }
    },
    mounted() {
        this.getTodoList();
    },
    methods: {
        updateTodoList() {
            const data = {
                nuovoElemento: this.nuovoElemento
            }
            axios.post(this.apiUrl, data, {
                headers: { 'Content-type': 'multipart/form-data' }
            }).then((response) => {
                this.nuovoElemento = '';
                this.todoList = response.data
            })
        },

        getTodoList() {
            axios.get(this.apiUrl).then((response) => {
                console.log(response.data);
                this.todoList = response.data;
            });
        },
        check(i) {
            if (!this.todoList[i].done) {
                this.todoList[i].done = true;
            }
            else {
                this.todoList[i].done = false;
            }
        },
        removeItem(i) {
            const data = {
                todoList_index: i
            }
            axios.post(this.apiUrl, data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(response => {
                    this.todoList = response.data;
                })
        },
    },
}).mount('#app');