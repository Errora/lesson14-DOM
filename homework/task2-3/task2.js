const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
  },
]
const taskList = document.querySelector('.tasks-list');

function createTaskItem(task) {
  const input = document.createElement('input');
  input.className = 'checkbox-form__checkbox';
  input.type = 'checkbox';
  input.id = `task-${task.id}`;

  const label = document.createElement('label');
  label.htmlFor = `task-${task.id}`;

  const span = document.createElement('span');
  span.className = 'task-item__text';
  span.textContent = task.text;

  const form = document.createElement('form');
  form.className = 'checkbox-form';

  const divContent = document.createElement('div');
  divContent.className = 'task-item__main-content';

  const divContainer = document.createElement('div');
  divContainer.className = 'task-item__main-container';

  const divTaskItem = document.createElement('div');
  divTaskItem.className = 'task-item';
  divTaskItem.dataset.dataTaskId = task.id;

  const button = document.createElement('button');
  button.className = 'task-item__delete-button';
  button.classList.add('.default-button');
  button.classList.add('.delete-button');
  button.dataset.dataDeleteTaskId = '5';
  button.textContent = 'Удалить';

  taskList.append(divTaskItem);
  divTaskItem.append(divContainer);
  divContainer.append(divContent);
  divContainer.append(button);
  divContent.append(form);
  divContent.append(span);
  form.append(input);
  form.append(label);
}

const formCreateTaskBlock = document.querySelector('.create-task-block');

formCreateTaskBlock.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;
  const taskNameInput = target.taskName;
  const text = taskNameInput.value;
  const errorBlock = document.createElement('span');
  errorBlock.className = 'create-task-block';
  errorBlock.textContent = 'Задача с таким названием уже существует.';
  errorBlock.remove();

  if (text == '') {
    alert('Название задачи не должно быть пустым');
  } else {
    let count = 0;
    for (const key in tasks) {
      if (tasks[key].text === text) {
        count ++;
      }
    }
    if (count == 0 ) {
      tasks.push({
        id: Date.now().toString(),
        completed: false,
        text,
      });
      createTaskItem(tasks[ tasks.length - 1 ]);
    } else {
      formCreateTaskBlock.insertAdjacentElement('beforeend', errorBlock);
    }
  }
})

for ( let i = 0; i < tasks.length; i++) {
  createTaskItem(tasks[i]);
}
