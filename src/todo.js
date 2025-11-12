//The logic for todos


class Todo {
    constructor(title, description){
        this.title = title; 
        this.description = description;
        //this.dueDate = dueDate;
        this.isComplete = false;

    }

    getTitle(){
        return this.title;
    }

    setTitle(newTitle){

        this.title = newTitle;
        
    }

    getDescription(){
        return this.description;
    }

    setDescription(newDescription){

        this.description = newDescription;

    }

    toggleComplete(){
        this.isComplete = !this.isComplete;
    }
}

export default Todo;




