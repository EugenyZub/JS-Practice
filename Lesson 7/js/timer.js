setInterval(function() {
    'use strict';

    let curentDate = new Date(),
        timerNumbers = document.querySelector('.timer-numbers'),

        //записываем текущие значения времени
        hours = addZero(curentDate.getHours()),
        minutes = addZero(curentDate.getMinutes()),
        seconds = addZero(curentDate.getSeconds());

    //Добавляем 0 перед значениями секунд, минут или часов, которые меньше 10
    function addZero(dateNumber){
        if (dateNumber > 0 && dateNumber < 10) { 
            return '0' + dateNumber;
        } else {
            return dateNumber;
        }
    }

    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;

}, 1000);