//This file contains the logic for grouping tasks

class Project {
    constructor(name){
        this.name = name;
        this.todos = [];
    }

    addToProject(todo){
        this.todos.push(todo);
    }
}

export default Project;