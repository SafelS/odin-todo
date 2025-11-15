//main .js file, connects every module
import DOMHandler from "./dom";
import Todo from "./todo";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./todoManager";
import { addProject } from "./projectsManager";
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
        DOMHandler.renderPopUp("edit", index);
        document.querySelector(".popUp").classList.add("active");
         
    }
});


document.querySelector(".addTask").addEventListener("click", () =>{
    DOMHandler.removeExistingPopUp();
    DOMHandler.renderPopUp();
    document.querySelector(".popUp").classList.add("active");
});


document.addEventListener("click", (e) => {

    if(e.target.classList.contains("cancelBtn")){
        document.querySelector(".popUp").classList.remove("active");
    }

    //Todo in Add Mode, Button logic
    if(e.target.classList.contains("add")){
        let titleValue = document.querySelector(".titleInput").value.trim();
        let descValue = document.querySelector(".descInput").value.trim();
        let projectValue = document.querySelector(".projectInput").value.trim();
        addTodo(titleValue, descValue);
        addProject(projectValue);
        DOMHandler.renderTodos();
        DOMHandler.renderProjects();
        document.querySelector(".popUp").classList.remove("active");
        document.querySelector(".titleInput").value = "";
        document.querySelector(".descInput").value = "";

    }

    //Todo in Edit Mode
    if(e.target.classList.contains("save")){
        let newTitle = document.querySelector(".titleInput").value.trim();
        let newDescription = document.querySelector(".descInput").value.trim();
        let index = e.target.dataset.index;

        updateTodo(index, newTitle, newDescription);

        document.querySelector(".popUp").classList.remove("active");
        DOMHandler.renderTodos();

    }

    //Todo in Project Mode
    if(e.target.classList.contains("addProject")){
        
        DOMHandler.removeExistingPopUp();
        DOMHandler.renderPopUp("project");
        document.querySelector(".popUp").classList.add("active");

    }

    if(e.target.classList.contains("projectAdd")){
        let projectName = document.querySelector(".titleInput").value.trim();
        addProject(projectName);
        DOMHandler.renderProjects();
        document.querySelector(".popUp").classList.remove("active");
    }

    if(e.target.classList.contains("projectItem")){
        alert("It works!!");
    }
})



