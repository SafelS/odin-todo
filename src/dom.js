
import { getTodos, addTodo } from "./todoManager";
import { getProjects } from "./projectsManager";
import { da } from "date-fns/locale";

const DOMHandler = (() =>{

    const mainContainer = document.getElementById("main-container");
    

    function renderlayout(){

        /*Test
        const input = document.createElement("input");
        input.setAttribute("list", "test");

        const dataList = document.createElement("datalist");
        dataList.id = "test";

        const option1 = document.createElement("option");
        option1.value = "hahalol";
        dataList.append(option1);
        */   

        const dataList = document.createElement("datalist");
        dataList.id = "projectList";


        //header
        const header = document.createElement("header");
        header.classList.add("header");

        const headerTitle = document.createElement("h1");
        headerTitle.textContent = "TO-DO";

        const headerBtnDiv = document.createElement("div");
        headerBtnDiv.classList.add("headerBtnDiv");

        const addTodo = document.createElement("button");
        addTodo.classList.add("addTask");
        addTodo.textContent = "Add Todo";

        const addPorject = document.createElement("button");
        addPorject.classList.add("addProject");
        addPorject.textContent = "Add Project"

        headerBtnDiv.append(addTodo, addPorject);
        header.append(headerTitle, headerBtnDiv);


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

        





        mainContainer.append(header, sidebar, content, dataList/*input, dataList*/);



    }

    //Idee: renderPopUp() ein "mode" arg hinzufüge um zw. "add" & "edit" zu wechslen, statt für edit eine eigene function!

    function renderPopUp(mode = "add", index){

        //pop-up
        const popUp = document.createElement("div");
        let projectInput = document.createElement("input");
        let titleInput = document.createElement("textarea");
        let descInput = document.createElement("textarea");
        const btnDiv = document.createElement("div");
        const changeBtn = document.createElement("button");
        const cancelBtn = document.createElement("button");

        popUp.classList.add("popUp");

        projectInput.classList.add("projectInput");
        projectInput.setAttribute("list", "projectList");
        projectInput.placeholder = "Add to Project"



        
        
        titleInput.classList.add("titleInput");
        titleInput.rows = 1;

        descInput.classList.add("descInput");

            btnDiv.classList.add("btnDiv")

            changeBtn.classList.add("changeBtn");
    
            cancelBtn.classList.add("cancelBtn");
            cancelBtn.textContent = "CANCEL"


        if(mode === "edit"){
            changeBtn.textContent = "SAVE";
            changeBtn.classList.add("save");
            changeBtn.dataset.index = index;
            //console.log(getTodos()[index].title); 
            titleInput.value = getTodos()[index].title;
            descInput.value = getTodos()[index].description;
        }else if(mode === "add"){
            changeBtn.textContent = "ADD";
            changeBtn.classList.add("add");
        }else if(mode === "project"){
            changeBtn.textContent = "ADD"
            changeBtn.classList.add("projectAdd");
        }

        btnDiv.append(cancelBtn,changeBtn);
        popUp.append(titleInput);
        //popUp.append(titleInput, descInput, btnDiv);

        if(mode !== "project"){
            popUp.append(projectInput,descInput);
        }
        
        popUp.append(btnDiv);
        mainContainer.append(popUp);

    }

    function removeExistingPopUp(){
        const existingPopUp = document.querySelector(".popUp");
        if(existingPopUp)  existingPopUp.remove();
    }



    function renderTodos(){

        const todoDiv = document.querySelector(".todoDiv");


        todoDiv.innerHTML = "";
        getTodos().forEach((todo, index)=>{
            const todoItemDiv = document.createElement("div");
            todoItemDiv.classList.add("todoItemDiv");
            

            /*----Das gehört nicht hierhin-------
            todoItemDiv.addEventListener("click", () =>{
                alert("I was clicked");
            });
            //-----------------------------------*/

            const todoItemDivTitle = document.createElement("div");
            todoItemDivTitle.classList.add("todoItemDivTitle");
            todoItemDivTitle.textContent = todo.title;

            const todoItemDivDesc = document.createElement("div");
            todoItemDivDesc.classList.add("todoItemDivDesc");
            todoItemDivDesc.textContent = todo.description;

            const todoBtnDiv = document.createElement("div");
            todoBtnDiv.classList.add("todoBtnDiv");

                const deleteButton = document.createElement("button");
                deleteButton.classList.add("deleteBtn");
                deleteButton.textContent = "Delete";
                deleteButton.dataset.index = index;

                const editButton = document.createElement("button");
                editButton.classList.add("editBtn");
                editButton.textContent = "Edit";
                editButton.dataset.index = index;
            
            
            todoBtnDiv.append(deleteButton,editButton);
            todoItemDiv.append(todoItemDivTitle, todoItemDivDesc, todoBtnDiv);
            todoDiv.append(todoItemDiv);
        })
    }

    
    function renderProjects(){
        const dataList = document.getElementById("projectList");
        const projectsList = document.querySelector(".projectsList");
        projectsList.innerHTML = "";
        dataList.innerHTML = "";

        getProjects().forEach((project, index) =>{
            const projectItem = document.createElement("li");
            projectItem.classList.add("projectItem");
            projectItem.textContent = project.name;

            const option = document.createElement("option");
            option.value = project.name;
            dataList.append(option);
            

            projectsList.append(projectItem);

        })
    }

    function openProjectContent(){

    }

    return {renderlayout, renderTodos, renderPopUp,removeExistingPopUp, renderProjects};


})();


export default DOMHandler;