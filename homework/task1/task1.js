// 1. Через innerHTML
// const tasksBlock = document.querySelector('body');
// console.log(tasksBlock.innerHTML);
// tasksBlock.innerHTML = '<form class="create-user-form">\n' +
//   '    <label>\n' +
//   '        Имя\n' +
//   '        <input type="text" name="userName" placeholder="Введите ваше имя">\n' +
//   '    </label>\n' +
//   '    <label>\n' +
//   '        Пароль\n' +
//   '        <input type="password" name="password" placeholder="Придумайте Пароль">\n' +
//   '    </label>\n' +
//   '    <button type="submit">\n' +
//   '        Подтвердить\n' +
//   '    </button>\n' +
//   '</form>';

// 2. Через document.createElement
const inputUserName = document.createElement('input');
inputUserName.type = 'text';
inputUserName.name = 'userName';
inputUserName.placeholder = 'Введите ваше имя';

const inputPassword = document.createElement('input');
inputPassword.type = 'text';
inputPassword.name = 'password';
inputPassword.placeholder = 'Придумайте Пароль';

const buttonSubmit = document.createElement('button');
buttonSubmit.type = 'submit';
buttonSubmit.textContent = 'Подтвердить';

const body = document.querySelector('body');
body.append(inputUserName);
body.append(inputPassword);
body.append(buttonSubmit);
