'use strict';

//09:59:59 30.05.2018
//вводить месяц на единицу меньше, из-за особенностей объекта Date 
let myDate = new Date(2018, 4, 30, 9, 59, 59);
let myDate2 = new Date(2018, 4, 30);

let fullDate = "'" + myDate.getHours() + ":" + myDate.getMinutes() + ":" +
               myDate.getSeconds() + " " + addZero(myDate.getDate(), myDate.getMonth()) + 
               ":" + myDate.getFullYear() + ", " + dayOfWeek(myDate2.getDay()) + "'";

document.write(fullDate);
//Напишите функцию, которая будет добавлять 0 перед днями и месяцами, 
//которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
function addZero(day, month) {

    let newMonth = [],
        newDay = [];

    for(let i = 1; i < 13; i++) {
        if( i < 10){
            newMonth.push('0' + i);
        } else {
            newMonth.push(i);
        }
    }

    for(let i = 0; i < 32; i++) {
        if( i < 10){
            newDay.push('0' + i);
        } else {
            newDay.push(i);
        }
}
    return (newDay[day] + ":" + newMonth[month]);

}

//Напишите функцию, которая выводит на страницу текущий день 
//недели на русском языке (реализацию выбираете сами)
function dayOfWeek(day) {

    let newDay = ["Воскресенье", "Понедельник", "Вторник", 
                  "Среда", "Четверг", "Пятница", "Суббота" ];

    return (newDay[day]);    
}
