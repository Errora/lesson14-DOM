// 1) Нужно выбрать родителя и повесить обработчик событий на него

const allNavigationButtons = document.querySelectorAll('.main-navigation__button-item');
const mainNavigation = document.querySelector('.main-navigation');

mainNavigation.addEventListener('click', (event) => {
  const isNavButton = event.target.closest('.main-navigation__button-item');
  console.log('Клик на контейнер');
  if (isNavButton) {
    //do something
    allNavigationButtons.forEach((navButton) => {
      navButton.classList.remove('main-navigation__button-item_selected');
    });
    event.target.classList.add('main-navigation__button-item_selected');
  }
});

const firstNavButton = document.querySelector('.main-navigation__button-item');
firstNavButton.addEventListener('click', (event) => {
  console.log('Первая кнопка', )
})