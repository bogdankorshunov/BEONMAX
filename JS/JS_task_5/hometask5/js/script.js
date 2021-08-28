let menu = document.getElementsByClassName('menu')[0];
let menuItem = document.getElementsByClassName('menu-item');
let title = document.getElementById('title');
let adv = document.getElementsByClassName('adv')[0];
let answer = document.querySelector('#prompt');
let newMenuItem = document.createElement('li');

menu.insertBefore(menuItem[2], menuItem[1]);

newMenuItem.classList.add('menu-item');
newMenuItem.textContent = 'Пятый элемент';
menu.appendChild(newMenuItem);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let question = prompt('Ваше отношение к технике Apple?');
answer.textContent = question;
