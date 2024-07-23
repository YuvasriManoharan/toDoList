document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('clearCompletedButton').addEventListener('click', clearCompletedTasks);
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const categorySelect = document.getElementById('categorySelect');
    const category = categorySelect.value;

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');
        listItem.classList.add(category);
        
        const checkmark = document.createElement('div');
        checkmark.classList.add('checkmark');
        checkmark.addEventListener('click', toggleTaskCompletion);
        listItem.appendChild(checkmark);

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);
        listItem.appendChild(deleteButton);
        
        taskList.appendChild(listItem);
        taskInput.value = '';
        categorySelect.value = 'normal';
    }
}

function toggleTaskCompletion(event) {
    const checkmark = event.target;
    const listItem = checkmark.parentNode;
    listItem.classList.toggle('completed');
    checkmark.classList.toggle('completed');
}

function deleteTask(event) {
    const deleteButton = event.target;
    const listItem = deleteButton.parentNode;
    listItem.remove();
}

function clearCompletedTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = taskList.querySelectorAll('li.completed');
    tasks.forEach(task => task.remove());
}
