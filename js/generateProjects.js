export async function generateProjects() {

    const projectsGrid = document.querySelector('.projects-grid');

    try {
        const response = await fetch('/db/db.json');
        const data = await response.json();
        const projects = data.projects;

        let projectsHtml = projects.map((project) => {
            return `
                <a href="#">
                    <div class="projects-card">
                        <div class="hover-animation">
                        
                        
                        <img class="projects-card-img" src="${project.thumbnail}" alt="${project.title}" />    
                        <div class="projects-card-overlay">
                            <h2 class="projects-card-title">${project.title}</h2>
                            <p class="projects-card-text">${project.description}</p>
                        </div>
                        
                        </div>

                    </div>                
                </a>
            `
        }).join('')

        projectsGrid.innerHTML = projectsHtml;

    } catch (error) {
        console.log(error)
    }

    
}