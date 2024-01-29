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
    },
}).mount('#app');