//Восстановить порядок в меню, добавить пятый пункт
let menu = document.getElementsByClassName('menu-item'),
    allMenu = document.querySelector('ul'),
    newLi = document.createElement('li');

menu[1].textContent = 'Второй пункт';
menu[2].textContent = 'Третий пункт';
menu[3].textContent = 'Четвёртый пункт';

newLi.className = 'menu-item';
newLi.textContent = 'Пятый пункт';

allMenu.appendChild(newLi);

// Замена картинки на заднем фоне
// document.body.style.backgroundImage = "url('img/apple_true.jpg')";
// document.body.style.backgroundPosition = "center";
// document.body.style.backgroundRepeat = "no-repeat";
document.body.style.background = "url('img/apple_true.jpg') center no-repeat";

//Изменение заголовка
document.getElementById('title').textContent = 'Мы продаем только подлинную технику Apple';

//Удаление рекламы
let d = document.querySelector('.adv');
d.remove();

//запись ответ в блок
let attitude = prompt('Как вы относитесь к технике apple?', '');
let answer = document.getElementById('prompt');
answer.textContent = attitude;