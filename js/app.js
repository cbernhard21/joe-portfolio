import { createHeader } from "../components/header.js";
import { generateProjects } from "/js/generateProjects.js";
import { getProjectDetails } from "/js/getProjectDetails.js";


const pathname = window.location.pathname;
// console.log(pathname);

createHeader();

if (pathname === '/' || pathname === '/index.html'){
    generateProjects();
}

if (pathname === '/routes/projects/project.html'){
    getProjectDetails();
}



