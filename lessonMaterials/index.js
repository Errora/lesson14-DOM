// ///////////////////////////////////////////// Селекторы
//
//OLD VARIANT
const tasksBlockOld = document.getElementById('tasks');
console.log(tasksBlockOld);

const allNavButtonsOld = document.getElementsByName('main-navigation__button-item');
console.log(allNavButtonsOld);

const allButtonsOld = document.getElementsByTagName('button');
console.log(allButtonsOld);

////////////////////////querySelector
const tasksBlock2 = document.querySelector('#tasks');
console.log(tasksBlock2);

const mainNavigation2 = document.querySelector('.main-navigation');
console.log(mainNavigation2);

const firstButton = document.querySelector('button');
console.log(firstButton);

const thirdNavButton = document.querySelector('[data-button-id="3"]');
console.log(thirdNavButton);

//querySelectorAll
const allNavButtons = document.querySelectorAll('.main-navigation__button-item');
console.log(allNavButtons);
allNavButtons.forEach((button, index) => {
  console.log(index, button);
})


const createTaskBlock = document.querySelector('.create-task-block');
const submitButton2 = createTaskBlock.querySelector('[type="submit"]');
console.log(submitButton2);

///////////////////////////////////////////// Свойства html элементов

const tasksWrapper = document.querySelector('.tasks__wrapper');
console.log(tasksWrapper.className);
// tasksWrapper.className = 'tasks__wrapper_1';

const tasksBlock = document.querySelector('#tasks');
console.log(tasksBlock.id);
// tasksBlock.id = 'new_tasks';
//
const submitButton = document.querySelector('.create-task-block');
console.log(submitButton.innerText);
console.log(submitButton.textContent);

submitButton.textContent = '<b>Создать новую задачу</b>>';

//inner HTML выводит всю верству элемента
console.log(tasksBlock.innerHTML);
tasksBlock.innerHTML = '<b>Теперь html выглядит так</b>';

//children
const createTaskForm = document.querySelector('.create-task-block');
console.log(createTaskForm.children);

//data-атрибуты
 const firstNavButton = document.querySelector('.main-navigation__button-item');
 console.log(firstNavButton.dataset.buttonId);
firstNavButton.dataset.buttonId = '10';

// style - получать и изменять стили

console.log(firstNavButton.style);
firstNavButton.style.fontWeight = 'bold';
firstNavButton.style.boxShadow = 'inset 0 0 0 3px white';


/////////////////////////////////////////// Методы html элемента

//////////////// createElement - создание элементов

const newNavButton = document.createElement('a');
newNavButton.className = 'main-navigation__button-item';
newNavButton.href = '#tasks_expired';
newNavButton.dataset.buttonId = '4';
newNavButton.textContent = 'Просроченные задачи';
console.log(newNavButton);

// append, prepend - добавление элементов в DOM
// append - в конец, prepend - в начало

const mainNavigation = document.querySelector('.main-navigation');
mainNavigation.append(newNavButton);

//insert

mainNavigation.insertAdjacentElement('afterbegin', newNavButton);

// closest ищет ближайщего родителя или то что перед точкой
const taskItemText = document.querySelector('.task-item__text');
console.log(taskItemText);

const taskItem = taskItemText.closest('.task-item__text');
console.log(taskItem);

// classList, add, remove, toggle

const firstNavigationButton = document.querySelector('.main-navigation__button-item');

//add - добавляет еще один класс
firstNavigationButton.classList.add('.main-navigation__button-item_selected');

// remove - удаление элементов
firstNavigationButton.remove('main-navigation__button-item_selected');

// toggle - если класс существует, то он его удали, а если не существует - добавит
firstNavigationButton.classList.toggle('main-navigation__button-item_selected');
firstNavigationButton.classList.toggle('main-navigation__button-item_selected');

const createTaskInput = document.querySelector('.create-task-block__input');
console.log(createTaskInput);

console.log(createTaskInput.hasAttribute('type_1'));
console.log(createTaskInput.getAttribute('value'));
createTaskInput.removeAttribute('placeholder');
createTaskInput.setAttribute('placeholder', 'Создать новую задачу');
