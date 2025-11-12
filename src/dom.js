
import { getTodos, addTodo } from "./todoManager";

const DOMHandler = (() =>{

    const mainContainer = document.getElementById("main-container");
    

    function renderlayout(){


        //header
        const header = document.createElement("header");
        header.classList.add("header");

        const headerTitle = document.createElement("h1");
        headerTitle.textContent = "TO-DO";

        const openPopUp = document.createElement("button");
        openPopUp.classList.add("openPopUp");
        openPopUp.textContent = "+";

        header.append(headerTitle, openPopUp);


        //sidebar
        const sidebar = document.createElement("div");
        sidebar.classList.add("sidebar");

        const sidebarTitle = document.createElement("h2");
        sidebarTitle.textContent = "My Projects";

        const projectsList = document.createElement("ul");
        projectsList.classList.add("projectsList");

        sidebar.append(sidebarTitle, projectsList);
        


        




        //content
        const content = document.createElement("div");
        content.classList.add("content");

        const contentTitle = document.createElement("h2");
        contentTitle.textContent = "Current Project";

        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todoDiv");
        
        content.append(contentTitle,  todoDiv);

        





        mainContainer.append(header, sidebar, content);



    }

    //Idee: renderPopUp() ein "mode" arg hinzufüge um zw. "add" & "edit" zu wechslen, statt für edit eine eigene function!

    function renderPopUp(){

        //pop-up
        const popUp = document.createElement("div");

        const titleInput = document.createElement("textarea");
        const descInput = document.createElement("textarea");
        const btnDiv = document.createElement("div");
        const addBtn = document.createElement("button");
        const cancelBtn = document.createElement("button");

        popUp.classList.add("popUp");
        
        
        titleInput.classList.add("titleInput");
        titleInput.rows = 1;

        descInput.classList.add("descInput");

            btnDiv.classList.add("btnDiv")

            addBtn.classList.add("addBtn");
            addBtn.textContent = "ADD";

            cancelBtn.classList.add("cancelBtn");
            cancelBtn.textContent = "CANCEL"

            btnDiv.append(cancelBtn,addBtn);

        popUp.append(titleInput,descInput, btnDiv);

        mainContainer.append(popUp);

    }



    function renderTodos(){

        const todoDiv = document.querySelector(".todoDiv");


        todoDiv.innerHTML = "";
        getTodos().forEach((todo, index)=>{
            const todoItemDiv = document.createElement("div");
            todoItemDiv.classList.add("todoItemDiv");
            

            //----Das gehört nicht hierhin-------
            todoItemDiv.addEventListener("click", () =>{
                alert("I was clicked");
            });
            //-----------------------------------

            const todoItemDivTitle = document.createElement("div");
            todoItemDivTitle.classList.add("todoItemDivTitle");
            todoItemDivTitle.textContent = todo.title;

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("deleteBtn");
            deleteButton.textContent = "Delete";
            deleteButton.dataset.index = index;

            const editButton = document.createElement("button");
            editButton.classList.add("editBtn");
            editButton.textContent = "Edit";
            editButton.dataset.index = index;
            
            
        
            todoItemDiv.append(todoItemDivTitle, deleteButton, editButton);
            todoDiv.append(todoItemDiv);
        })
    }


    function openEditPopUp(){

        const popUp = document.querySelector(".popUp");
        const editBtn = document.querySelector(".editBtn");
        const editedTitle = document.querySelector(".titleInput");
        //const editedDesc = document.querySelector(".descInput");
        const currentTitle = getTodos()[editBtn.dataset.index].title;
        console.log(currentTitle);
        const saveBtn = document.querySelector(".addBtn");

        editedTitle.textContent = currentTitle;
        saveBtn.textContent = "SAVE";

    }

    return {renderlayout, renderTodos, renderPopUp, openEditPopUp};


})();


export default DOMHandler;