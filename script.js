const taskInput = document.getElementById('taskInput');
const dueDateInput = document.getElementById('dueDate');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    const dueDate = dueDateInput.value;

    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText} (Due: ${dueDate})</span>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;

        // Mark as completed
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Edit task
        li.querySelector('.editBtn').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the completion toggle
            const newTaskText = prompt('Edit Task:', taskText);
            if (newTaskText) {
                li.firstChild.textContent = `${newTaskText} (Due: ${dueDate})`;
            }
        });

        // Delete task
        li.querySelector('.deleteBtn').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the completion toggle
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = '';
        dueDateInput.value = '';
    }
});
