document.addEventListener('DOMContentLoaded', () => {
    const addProjectBtn = document.getElementById('addProjectBtn');
    const projectsList = document.getElementById('projects');
    const projectNameInput = document.getElementById('projectName');

    addProjectBtn.addEventListener('click', () => {
        const projectName = projectNameInput.value.trim();
        if (projectName === '') {
            alert('Please enter a project name');
            return;
        }

        
        const projectItem = document.createElement('li');
        projectItem.innerHTML = `
            ${projectName}
            <button class="task-btn" onclick="addTask(this)">Add Task</button>
        `;
        
        
        projectsList.appendChild(projectItem);
        
        
        projectNameInput.value = '';
    });
});

function addTask(button) {
    const taskName = prompt('Enter task name:');
    if (taskName === null || taskName.trim() === '') {
        alert('Task name cannot be empty');
        return;
    }

    
    const taskItem = document.createElement('li');
    taskItem.textContent = taskName;
    
    
    button.parentElement.appendChild(taskItem);
}
