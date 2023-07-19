export async function generateProjects() {

    const projectsGrid = document.querySelector('.projects-grid');

    try {
        const response = await fetch('/db/db.json');
        const data = await response.json();
        const projects = data.projects;

        console.log(projects);
        
    } catch (error) {
        console.log(error)
    }


    
}