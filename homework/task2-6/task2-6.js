// Task 2

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
  const checkboxFormCheckbox = document.createElement('input');
  checkboxFormCheckbox.className = 'checkbox-form__checkbox';
  checkboxFormCheckbox.type = 'checkbox';
  checkboxFormCheckbox.id = `task-${task.id}`;

  const taskLabel = document.createElement('label');
  taskLabel.htmlFor = `task-${task.id}`;

  const taskItemText = document.createElement('span');
  taskItemText.className = 'task-item__text';
  taskItemText.textContent = task.text;

  const checkboxForm = document.createElement('form');
  checkboxForm.className = 'checkbox-form';

  const taskItemMainContent = document.createElement('div');
  taskItemMainContent.className = 'task-item__main-content';

  const taskItemMainContainer = document.createElement('div');
  taskItemMainContainer.className = 'task-item__main-container';

  const taskItem = document.createElement('div');
  taskItem.className = 'task-item';
  taskItem.dataset.taskId = task.id;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'task-item__delete-button';
  deleteButton.classList.add('.default-button');
  deleteButton.classList.add('.delete-button');
  deleteButton.dataset.deleteTaskId = task.id;
  deleteButton.textContent = 'Удалить';

  taskList.append(taskItem);
  taskItem.append(taskItemMainContainer);
  taskItemMainContainer.append(taskItemMainContent);
  taskItemMainContainer.append(deleteButton);
  taskItemMainContent.append(checkboxForm);
  taskItemMainContent.append(taskItemText);
  checkboxForm.append(checkboxFormCheckbox);
  checkboxForm.append(taskLabel);
}

// Task 3-4

const formCreateTaskBlock = document.querySelector('.create-task-block');

formCreateTaskBlock.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;
  const taskNameInput = target.taskName;
  const text = taskNameInput.value;
  const errorBlock = document.createElement('span');
  errorBlock.className = 'error-message-block';
  errorBlock.classList.add('create-task-block');

  function removeErrorMessage(){
    let childElementCount = formCreateTaskBlock.childElementCount;
    while (childElementCount > 2) {
      formCreateTaskBlock.children[2].remove();
      childElementCount = formCreateTaskBlock.childElementCount;
    }
  }

  if (text == '') {
    removeErrorMessage();
    errorBlock.textContent = 'Название задачи не должно быть пустым.';
    formCreateTaskBlock.insertAdjacentElement('beforeend', errorBlock);
  } else {
    removeErrorMessage();
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
      errorBlock.textContent = 'Задача с таким названием уже существует.';
      formCreateTaskBlock.insertAdjacentElement('beforeend', errorBlock);
    }
  }
})

for ( let i = 0; i < tasks.length; i++) {
  createTaskItem(tasks[i]);
}

// Task 5

const deleteModalQuestion = document.createElement('h3');
deleteModalQuestion.className = 'delete-modal__question';
deleteModalQuestion.textContent = 'Вы действительно хотите удалить эту задачу?';

const deleteModalCancelButton = document.createElement('button');
deleteModalCancelButton.className = 'delete-modal__button';
deleteModalCancelButton.classList.add('delete-modal__cancel-button');
deleteModalCancelButton.textContent = 'Отмена';

const deleteModalConfirmButton = document.createElement('button');
deleteModalConfirmButton.className = 'delete-modal__button';
deleteModalConfirmButton.classList.add('delete-modal__confirm-button');
deleteModalConfirmButton.textContent = 'Удалить';

const deleteModalButtons = document.createElement('div');
deleteModalButtons.className = 'delete-modal__buttons';

const deleteModal = document.createElement('div');
deleteModal.className = 'delete-modal';

const modalOverlay = document.createElement('div');
modalOverlay.className = 'modal-overlay';
modalOverlay.classList.add('modal-overlay_hidden');

deleteModalButtons.append(deleteModalCancelButton);
deleteModalButtons.append(deleteModalConfirmButton);

deleteModal.append(deleteModalQuestion);
deleteModal.append(deleteModalButtons);

modalOverlay.append(deleteModal);

const body = document.querySelector('body');
body.append(modalOverlay);

const allDeleteButtons = document.querySelectorAll('.task-item__delete-button');
const questionModal = body.querySelector('.modal-overlay_hidden');
const confirmButton = questionModal.querySelector('.delete-modal__confirm-button');
const cancelButton = questionModal.querySelector('.delete-modal__cancel-button');


taskList.addEventListener('click', (event) => {
  const isDeleteButton = event.target.closest('.task-item__delete-button');

  if (isDeleteButton) {
    // console.log(tasks);

    allDeleteButtons.forEach(() => {
      modalOverlay.classList.remove('modal-overlay_hidden');

      const idTaskForRemoval = event.target.dataset.deleteTaskId;
      // console.log('task for delete', idTaskForRemoval);

      confirmButton.addEventListener('click', (event2) => {
        modalOverlay.classList.add('modal-overlay_hidden');
        for (const key in tasks) {
          if (tasks[key].id === idTaskForRemoval) {
            tasks.splice(Number(key), 1);
            // console.log(tasks);
            const taskForRemove = document.querySelector(`[data-task-id="${idTaskForRemoval}"]`);
            taskForRemove.remove();
          }
        }
      })
    });
  }

  cancelButton.addEventListener('click', (event2) => {
    modalOverlay.classList.add('modal-overlay_hidden');
  })
})

//Task 6

const bodyDark = '#24292E';
const bodyLight = 'initial';
const taskItemDark = '#ffffff';
const taskItemLight = 'initial';
const buttonDark = '1px solid #ffffff';
const buttonLight = 'none';

body.style.background = bodyLight;
const allTaskItems = document.querySelectorAll('.task-item');
allTaskItems.forEach((taskItem) => {
  taskItem.style.color = taskItemLight;
});
const allButtons = document.querySelectorAll('button');
allButtons.forEach((button) => {
  button.style.value = buttonLight;
});

function changeTheme(){
  body.style.background = body.style.background === bodyLight ? bodyDark : bodyLight;

  allTaskItems.forEach((taskItem) => {
    taskItem.style.color = taskItem.style.color === taskItemLight ? taskItemDark : taskItemLight;
  });

  allButtons.forEach((button) => {
    button.style.value = button.style.value === buttonLight ? buttonDark : buttonLight;
  });
  // console.log('theme changed');
}

document.addEventListener('keydown', (event) => {
  const {key} = event;
  if (key === 'Tab') {
    // console.log('Нажат Tab');
    changeTheme();
  }
})













