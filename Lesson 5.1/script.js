'use strict';

let months = ["01", "02", "03", "03", "05", "06", 
              "07", "08", "09", "10", "11", "12"],
    date = [],
    day = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

//09:59:59 30.05.2018
let myDate = new Date(2018, 5, 30, 9, 59, 59);

let fullDate = "'" + myDate.getHours() + ":" + myDate.getMinutes() + ":" +
               myDate.getSeconds() + " " + myDate.getDate() + ":" + 
               myDate.getMonth() + ":" + myDate.getFullYear() + ", " + day[myDate.getDay()] + "'";

document.write(fullDate); 
console.log(myDate.getDay());
//Напишите функцию, которая будет добавлять 0 перед днями и месяцами, 
//которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
function addZero() {
    
}

//Напишите функцию, которая выводит на страницу текущий день 
//недели на русском языке (реализацию выбираете сами)
function dayOfTheWeek(day) {
    
}
