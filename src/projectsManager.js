import Project from "./projects";

let projects = [];

function addProject(name){
    const project = new Project(name);
    projects.push(project);
}

function getProjects(){
    return projects;
}

export{addProject, getProjects};