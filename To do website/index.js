function addTask(dayId) {
    const dayElement = document.getElementById(dayId);
    const input = dayElement.querySelector('input[type="text"]');
    const taskText = input.value;
    if (taskText.trim() === '') return;

    const priority = prompt("Enter priority: low, medium, or high");
    let priorityClass = '';
    switch (priority.toLowerCase()) {
        case 'low':
            priorityClass = 'low-priority';
            break;
        case 'medium':
            priorityClass = 'medium-priority';
            break;
        case 'high':
            priorityClass = 'high-priority';
            break;
        default:
            alert("Invalid priority. Task will not be added.");
            return;
    }

    const taskElement = document.createElement('li');
    taskElement.className = priorityClass;
    taskElement.innerHTML = `
        <span>${taskText}</span>
        <button onclick="markTaskAsDone(this)">Done</button>
    `;

    const taskList = dayElement.querySelector('.todo-list');
    taskList.appendChild(taskElement);

    input.value = '';
}

function markTaskAsDone(buttonElement) {
    const taskElement = buttonElement.parentElement;
    taskElement.classList.add('done');
}
