
import Todo from "./todo";


let todos = [];



function addTodo(title, description){
    const todoItem = new Todo(title, description);
    
    todos.push(todoItem);
}

function deleteTodo(index){
    if(index > -1){
        todos.splice(index,1);
    }
}

function getTodos(){
    return todos;
}

function updateTodo(index, newTitle, newDescription){

    const todo = todos[index];

    if(newTitle){
        todo.setTitle(newTitle);
    }
    if(newDescription){
        todo.setDescription(newDescription);
    }
    
}



export {addTodo, deleteTodo, getTodos, updateTodo};