//main .js file, connects every module
import DOMHandler from "./dom";
import Todo from "./todo";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./todoManager";
import "./style.css"



DOMHandler.renderlayout();
//DOMHandler.renderPopUp();

//const popUp = document.querySelector(".popUp");
//let inEditMode = false; 




document.querySelector(".todoDiv").addEventListener("click", (e) =>{
    if(e.target.classList.contains("deleteBtn")){
        const index = e.target.dataset.index;
        deleteTodo(index);
        DOMHandler.renderTodos();
    }
    if(e.target.classList.contains("editBtn")){
        DOMHandler.removeExistingPopUp();
        const index = e.target.dataset.index;
        DOMHandler.renderPopUp(index,"edit");
        document.querySelector(".popUp").classList.add("active");
         
    }
});


document.querySelector(".openPopUp").addEventListener("click", () =>{
    DOMHandler.removeExistingPopUp();
    DOMHandler.renderPopUp();
    document.querySelector(".popUp").classList.add("active");
});


document.addEventListener("click", (e) => {

    if(e.target.classList.contains("cancelBtn")){
        document.querySelector(".popUp").classList.remove("active");
    }

    if(e.target.classList.contains("add")){
        let titleValue = document.querySelector(".titleInput").value.trim();
        let descValue = document.querySelector(".descInput").value.trim();
        addTodo(titleValue, descValue);
        DOMHandler.renderTodos();
        document.querySelector(".popUp").classList.remove("active");
        document.querySelector(".titleInput").value = "";
        document.querySelector(".descInput").value = "";

    }

    if(e.target.classList.contains("save")){
        let newTitle = document.querySelector(".titleInput").value.trim();
        let newDescription = document.querySelector(".descInput").value.trim();
        let index = e.target.dataset.index;

        updateTodo(index, newTitle, newDescription);

        document.querySelector(".popUp").classList.remove("active");
        DOMHandler.renderTodos();

    }
})



