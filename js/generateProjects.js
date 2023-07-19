export async function generateProjects() {

    const projectsGrid = document.querySelector('.projects-grid');

    try {
        const response = await fetch('/db/db.json');
        const data = await response.json();
        const projects = data.projects;

        let projectsHtml = projects.map((project) => {
            return `
                <div class="project-card">
                    <img src="${project.thumbnail}" alt="${project.title}" />
                </div>
            `
        }).join('')

        projectsGrid.innerHTML = projectsHtml;
        
    } catch (error) {
        console.log(error)
    }


    
}