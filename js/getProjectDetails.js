export async function getProjectDetails() {
    //check local storage for ID
    checkStorage()
    
    //if there is an ID, match it with the ID in the db file
    try {
        const response = await fetch('/db/db.json');
        const data = await response.json();
        const allProjects = data.projects;
        const clickedProjectId = checkStorage();
        const projectInfoContainer = document.querySelector('.project-info');

        console.log(allProjects);
        console.log(clickedProjectId);

        allProjects.forEach(project => {
            if(project.id === clickedProjectId) {
                const title = project.title
                
                
                
                
                const projectHtml = `
                    <h1>${title}</h1>
                
                `;

                projectInfoContainer.innerHTML = projectHtml;
            }
        });

        
    } catch (error) {
        console.log(error)
    }



    //display html with the proper information



    

}


function checkStorage () {
    const projectId = localStorage.getItem('id')
    //check for ID, no id redirect to home page else return the ID
    if (!projectId) {
        location.href = '/index.html';
    } else {
        return projectId;
    }
    
}

