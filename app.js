function component1() {
    return {
        todos:[],
        async init() {
            self=this;
            await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => self.todos=json)
            console.log(self.todos)
        },           
    }
}