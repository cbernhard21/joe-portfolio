export async function generateProjects() {

    const projectsGrid = document.querySelector('.projects-grid');

    try {
        const response = await fetch('/db/db.json');
        const data = await response.json();
        const projects = data.projects;

        let projectsHtml = projects.map((project) => {
            return `
                <div class="projects-card">
                    <h2 class="projects-card-title">${project.title}</h2>
                    <img src="${project.thumbnail}" alt="${project.title}" class="projects-card-img" />
                </div>
            `
        }).join('')

        projectsGrid.innerHTML = projectsHtml;

        let projectsCardImgs = document.querySelectorAll('.projects-card-img');
        let projectsCardTitle = document.querySelectorAll('.projects.card-title');
        let projectsCard = document.querySelectorAll('.projects-card');

        
    } catch (error) {
        console.log(error)
    }

    
}