class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(taskText) {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    this.tasks.push(task);
    return task;
  }
  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
  toggleTaskCompletion(taskId) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }
}

const taskManager = new TaskManager();
const taskListElement = document.getElementById('taskList');
const taskInputElement = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');

function renderTasks() {
  taskListElement.innerHTML = '';
  taskManager.tasks.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.classList.toggle('completed', task.completed);

    const taskText = document.createElement('span');
    taskText.textContent = task.text;

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const completeButton = document.createElement('button');
    completeButton.textContent = task.completed ? 'Undo' : 'Complete';
    completeButton.addEventListener('click', () => {
      taskManager.toggleTaskCompletion(task.id);
      renderTasks();
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskManager.deleteTask(task.id);
      renderTasks();
    });

    actions.appendChild(completeButton);
    actions.appendChild(deleteButton);
    taskElement.appendChild(taskText);
    taskElement.appendChild(actions);

    taskListElement.appendChild(taskElement);
  });
}

addTaskButton.addEventListener('click', () => {
  const taskText = taskInputElement.value.trim();
  if (taskText) {
    taskManager.addTask(taskText);
    taskInputElement.value = '';
    renderTasks();
  }
});
