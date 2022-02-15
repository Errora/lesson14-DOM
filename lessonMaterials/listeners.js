// const firstNavButton = document.querySelector('.main-navigation__button-item');
// firstNavButton.addEventListener('click', (event) => {
//   console.log('Click!');
//   const {target} = event;
//   target.classList.add('main-navigation__button-item_selected');
// })

/////////////////////////////////////// click

const allNavButtons = document.querySelectorAll('.main-navigation__button-item');
allNavButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    allNavButtons.forEach((button) => {
      button.classList.remove('main-navigation__button-item_selected');
    })
    const {target} = event;
    target.classList.add('main-navigation__button-item_selected');
  })
})

/////////////////////////////////////// submit

const createTaskForm = document.querySelector('.create-task-block');
createTaskForm.addEventListener('submit', (event) => {
  console.log(event);
  event.preventDefault();
  const { target } = event;
  const taskNameInput = target.taskName;
  const inputValue = taskNameInput.value;
  if (inputValue) {
    alert(`Вы создали задачу ${inputValue}`);
  } else {
    alert('Введите название');
  }
})


/////////////////////////////////////// keydown, keyup

document.addEventListener('keydown', (event) => {
  console.log(event);
  const {key} = event;
  console.log('keydown', key);
  // const taskItemToDelete = document.querySelector(`[data-task-id="{$key}"]`);
  // if (taskItemToDelete) {
  //   const deleteConfirmed = confirm('В действительно хотите удалить данную задачу?');
  //   if (deleteConfirmed) {
  //     taskItemToDelete.remove();
  //   }
  // }
})

// document.addEventListener('keyup', (event) => {
//   const {key} = event;
//   console.log('keyup', key);
//   const taskItemToDelete = document.querySelector(`[data-task-id="{$key}"]`);
//   if (taskItemToDelete) {
//       const deleteConfirmed = confirm('В действительно хотите удалить данную задачу?');
//       if (deleteConfirmed) {
//         taskItemToDelete.remove();
//       }
//     }
// })

/////////////////////////////////////// mouseover

// const createTooltip = (text) => {
//   const tooltip = document.createElement('span');
//   tooltip.textContent = text;
//   tooltip.className = 'tooltip';
//   return tooltip;
// }

// document.addEventListener('mouseover', (event) => {
//   // console.log(event);
//   const {target} = event;
//   console.log(target);
//   const ifOverDeleteButton = target.className.includes('task-item__delete-button');
//   if ( ifOverDeleteButton ) {
//     console.log('success');
//     const taskItemHTML = target.closest('.task-item');
//     const taskId = taskItemHTML?.dataset.taskId;
//     if (taskId) {
//       const tooltipHtml = createTooltip(`Удалить задачу под номером ${taskId}?`);
//       target.append(tooltipHtml);
//     }
//   }
// })

/////////////////////////////////////// mouseout

// document.addEventListener('mouseout', (event) => {
//   const {target} = event;
//   const ifOutFromDeleteButton = target.className.includes('task-item__delete-button');
//   if (ifOutFromDeleteButton) {
//     const tooltip = document.querySelector('.tooltip');
//     if (tooltip) {
//       tooltip.remove();
//     }
//   }
// })

/////////////////////////////////////// mousemove
// document.addEventListener('mousemove', () => {
//   console.log(event);
// })

/////////////////////////////////////// contextmenu

document.addEventListener('contextmenu', (event) => {
  console.log(event);
  event.preventDefault();
})

/////////////////////////////////////// change срабатывает когда мы убираем фокус с инпута
/////////////////////////////////////// input срабатывает тогда, когда мы вводим значение в инпут

const checkTaskNameInputOnValidation = (value) => {
  if (!value || value.includes('@')) {
    return false;
  }
  return true;
};

const createTaskBlock = document.querySelector('.create-task-block');
const taskNameInput = createTaskBlock.querySelector('.create-task-block__input');

taskNameInput.addEventListener('change', (event) => {
  const { target } = event;
  const { value } = target;
  const isValid = checkTaskNameInputOnValidation(value);
  const messageBlockFromDom = document.querySelector('.error-message-block');

  if (!isValid) {
    const newMessageBlock = document.createElement('span');
    newMessageBlock.className = 'error-message-block';
    newMessageBlock.textContent = 'Ошибка. Текст для задачи не должен быть пустым и не должен содержать @';
    createTaskBlock.append(newMessageBlock);
  } else if (isValid && messageBlockFromDom) {
    messageBlockFromDom.remove();
  }
})




















