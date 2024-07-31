document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.getElementById('task-list');

        const listItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        const taskButtons = document.createElement('span');
        taskButtons.className = 'task-buttons';

        const editButton = document.createElement('button');
        editButton.textContent = '✎';
        editButton.className = 'edit';
        editButton.addEventListener('click', (event) => {
            event.stopPropagation();
            editTask(taskSpan);
        });
        taskButtons.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '×';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation();
            taskList.removeChild(listItem);
        });
        taskButtons.appendChild(deleteButton);

        listItem.appendChild(taskButtons);

        listItem.addEventListener('click', () => toggleTaskCompleted(listItem));

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function toggleTaskCompleted(listItem) {
    listItem.classList.toggle('completed');
}

function editTask(taskSpan) {
    const oldTaskText = taskSpan.textContent;
    const newTaskText = prompt('Edit your task', oldTaskText);
    if (newTaskText !== null && newTaskText.trim()) {
        taskSpan.textContent = newTaskText.trim();
    }
}