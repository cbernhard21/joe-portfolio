export async function generateProjects() {

    const projectsGrid = document.querySelector('.projects-grid');

    try {
        const response = await fetch('/db/db.json');
        const data = await response.json();
        const projects = data.projects;

        //create project card for the grid on the home page
        let projectsHtml = projects.map((project) => {
            return `
                <a href="routes/projects/project.html">
                    <div class="projects-card" data-id=${project.id}>
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

        //SELECT THE CLICKED LINK TO ADD THE ID TO LOCAL STORAGE TO PASS ALONG TO THE NEXT PAGE
        const projectLinks = document.querySelectorAll('.projects-card');
        projectLinks.forEach((link) => {
            link.addEventListener('click', () => {
                localStorage.setItem('id', link.dataset.id)
            });
        });


    } catch (error) {
        console.log(error)
    }

}


// routes/projects/project.html