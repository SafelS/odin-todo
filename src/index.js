//main .js file, connects every module
import DOMHandler from "./dom";
import Todo from "./todo";
import { addTodo, deleteTodo, getTodos } from "./todoManager";
import "./style.css"



DOMHandler.renderlayout();
DOMHandler.renderPopUp();

const popUp = document.querySelector(".popUp");
let inEditMode = false; 




document.querySelector(".todoDiv").addEventListener("click", (e) =>{
    if(e.target.classList.contains("deleteBtn")){
        const index = e.target.dataset.index;
        deleteTodo(index);
        DOMHandler.renderTodos();
    }
    if(e.target.classList.contains("editBtn")){
        DOMHandler.openEditPopUp(); 
    }
});


document.querySelector(".openPopUp").addEventListener("click", () =>{
    popUp.classList.add("active");
});


document.querySelector(".cancelBtn").addEventListener("click", () =>{
    popUp.classList.remove("active");
});

document.querySelector(".addBtn").addEventListener("click", () =>{
    let inputValue = document.querySelector(".titleInput").value.trim();
    addTodo(inputValue);
    DOMHandler.renderTodos();
    DOMHandler.openEditPopUp();
    popUp.classList.remove("active");
    document.querySelector(".titleInput").value = "";
    document.querySelector(".descInput").value = "";
});

document.querySelector(".todoDiv").addEventListener("click", (e)=>{
    if(e.target.classList.contains("editBtn")){

        DOMHandler.openEditPopUp();
        popUp.classList.add("active");
        
    }
    
})

