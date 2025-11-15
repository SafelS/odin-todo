//This file contains the logic for grouping tasks
import Todo from "./todo";


class Project {
    constructor(name){
        this.name = name;
        this.todos = [];
    }

    addToProject(title, desc){
        const newTodo = new Todo(title,desc);
        this.todos.push(newTodo);
    }

    getProjectName(){
        return this.name;
    }

    getProjectTodos(){
        return this.todos;
    }
}

export default Project;