// const firstNavButton = document.querySelector('.main-navigation__button-item');
// firstNavButton.addEventListener('click', (event) => {
//   console.log('Click!');
//   const {target} = event;
//   target.classList.add('main-navigation__button-item_selected');
// })

//click
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

//submit
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
