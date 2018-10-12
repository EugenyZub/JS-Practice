'use strict';

//09:59:59 30.05.2018
//вводить месяц на единицу меньше, из-за особенностей объекта Date 
let myDate = new Date();
let data1 = document.querySelector('#data1'),
    data2 = document.getElementById('data2'),
    start = document.querySelector('#start'),
    end = document.querySelector('#result');

    console.log(end);
let fullDate = "'" + myDate.getHours() + ":" + myDate.getMinutes() + ":" +
               myDate.getSeconds() + " " + addZero(myDate.getDate(), myDate.getMonth()) + 
               ":" + myDate.getFullYear() + ", " + dayOfWeek(myDate.getDay()) + "'";

document.write(fullDate);

datadDifference(data1, data2);
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
//Напишите функцию, которая выводит на страницу 
//разницу между двумя датами в количестве дней
function datadDifference(data1, data2) {

    let firstDate,
        secondDate,
        arrData1, 
        arrData2,
        date1Year,
        date1Month,
        date1Day,
        date2Year,
        date2Month,
        date2Day,
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

            //Массивы для нарезанных строк с датами
            arrData1 = firstDate.split('-');
            arrData2 = secondDate.split('-');

            //Превращаем элементы массивов в отдельные числа
            // date1Year = parseInt(arrData1[0]);
            // date1Month = parseInt(arrData1[1]);
            // date1Day = parseInt(arrData1[2]);
            
            // date2Year = parseInt(arrData2[0]);
            // date2Month = parseInt(arrData2[1]);
            // date2Day = parseInt(arrData2[2]);

            //Массив из числе входящих в data1
            arrData1.forEach(function(element, i) {
                arrData1[i] = parseInt(arrData1[i]);
            });

            //Массив из числе входящих в data2
            arrData2.forEach(function(element, i) {
                arrData2[i] = parseInt(arrData2[i]);
            });            
               
            //получаем милисекунды до 1970 года
            let DATA1 = new Date(arrData1[0], arrData1[1]-1, arrData1[2]).getTime();
            let DATA2 = new Date(arrData2[0], arrData2[1]-1, arrData2[2]).getTime();

            //Количество дней
            if(DATA1 < DATA2) {
                result = (DATA2 - DATA1) / 1000 / 60 / 60 / 24;
                negativeDate++;
            } else if(DATA1 == DATA2) {
                result = 0;
            } else if(DATA1 > DATA2) {
                result = (DATA1 - DATA2) / 1000 / 60 / 60 / 24; 
                negativeDate--;              
            }
            
            //Если дата/даты до 1970 года
            if(DATA1 < 0) {
                DATA1 = DATA1*(-1);
            }
            if(DATA2 < 0){
                DATA2 -= DATA2*(-1);                
            }
            
            //Вывод прямо на экран
            // if(negativeDate > 0) {

            //     if (result == 1) {
            //         document.write('До этой даты вам осталось ждать ' + result + ' день!');                   
            //     } else if(result == 2 || result == 3 || result == 4) {
            //         document.write('До этой даты вам осталось ждать ' + result + ' дня!');   
            //     } else {
            //         document.write('До этой даты вам осталось ждать ' + result + ' дней!');    
            //     }

            // } else if(negativeDate < 0) {

            //     if (result == 1) {
            //         document.write('С этого момента прошёл ' + result + ' день!');
            //     } else if(result == 2 || result == 3 || result == 4) {
            //         document.write('С этого момента прошло ' + result + ' дня!');
            //     } else {
            //         document.write('С этого момента уже прошло ' + result + ' дней!');
            //     }
                
            // } else {
            //     document.write('Обе даты одинаковы');
            // }

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