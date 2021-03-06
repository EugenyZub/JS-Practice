'use strict';
//вводить месяц на единицу меньше, из-за особенностей объекта Date 
let myDate = new Date();
let data1 = document.querySelector('#data1'),
    data2 = document.getElementById('data2'),
    start = document.querySelector('#start'),
    end = document.querySelector('#result');

let fullDate =  "'" + myDate.getHours() + ":" + addZero(myDate.getMinutes()) + ":" + addZero(myDate.getSeconds()) + 
                " " + addZero(myDate.getDate()) + ":" + addZero(myDate.getMonth()) + ":" + 
                myDate.getFullYear() + ", " + dayOfWeek(myDate.getDay()) + "'";

document.write(fullDate);

datadDifference(data1, data2);
//Напишите функцию, которая будет добавлять 0 перед днями и месяцами, 
//которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
function addZero(dateNumber){
    if (dateNumber > 0 && dateNumber < 10) { 
        return '0' + dateNumber;
    } else {
        return dateNumber;
    }
}
//Напишите функцию, которая выводит на страницу текущий день 
//недели на русском языке (реализацию выбираете сами)
function dayOfWeek(day) {

    let newDay = ["Воскресенье", "Понедельник", "Вторник", 
                  "Среда", "Четверг", "Пятница", "Суббота" ];

    return (newDay[day]);    
}
//Напишите функцию, которая выводит на страницу 
//разницу между двумя датами в количестве дней
function datadDifference(data1, data2) {

    let firstDate,
        time1,
        time2,
        secondDate,
        result = 0,
        negativeDate = 0; 

    window.addEventListener('DOMContentLoaded', function() {

        //получение первой даты
        data1.addEventListener('change', () => {
            firstDate = data1.value;
        });

        //получение второй даты
        data2.addEventListener('change', () => {
            secondDate = data2.value;
        });

        //Рассчёт разницы дат. Результат в днях
        start.addEventListener('click', () => {
            //Сбрасываем input 
            data1.value = '';
            data2.value = '';

            //Преобразование даты в мс с 1970 года
            time1 = new Date(Date.parse(firstDate));
            time2 = new Date(Date.parse(secondDate));

            //Количество дней
            if(time1 < time2) {
                result = (time2 - time1) / 1000 / 60 / 60 / 24;
                negativeDate++;
            } else if(time1 == time2) {
                result = 0;
            } else if(time1 > time2) {
                result = (time1 - time2) / 1000 / 60 / 60 / 24; 
                negativeDate--;              
            }
            
            //Если дата/даты до 1970 года
            if(time1 < 0) {
                time1 = time1*(-1);
            }
            if(time2 < 0){
                time2 -= time2*(-1);                
            }
            
            //Вывод в инпут
            if(negativeDate > 0) {
                if (result == 1) {
                    end.value = (result + ' день');                   
                } else if(result == 2 || result == 3 || result == 4) {
                    end.value = (result + ' дня');   
                } else {
                    end.value = (result + ' дней');    
                }
            } else if(negativeDate < 0) {
                if (result == 1) {
                    end.value = (result + ' день');
                } else if(result == 2 || result == 3 || result == 4) {
                    end.value = (result + ' дня');
                } else {
                    end.value = (result + ' дней');
                }               
            } else {
                end.value = ('Обе даты одинаковы');
            }
            negativeDate = 0;
        });
    });    
}