window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    //Скрытие всех пунктов кроме текущего
    function hideTabContent(a) {
        for( let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);
    //Отображение конкретного таба с информацией
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    //Изменения табов с информацией
    info.addEventListener('click', function(e) {
        let target = e.target;
        if (target && target.matches('div.info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer
    
    let deadline = '2018-10-20';
    //Получаем разницу во времени между конечной датой и настоящим временем
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = addZero(Math.floor((t/1000) % 60)),
            minutes = addZero(Math.floor((t/1000/ 60) % 60)),
            hours = addZero(Math.floor((t/(1000*60*60))));
            //days = addZero(Math.floor(t/(1000*60*60*24)));

        return {
            'total' : t,
            //'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }
    //Заполняем таймер на странице
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            //days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        //Условия останова таймера
        function updateClock() {
            let t = getTimeRemaining(endtime);
            //days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if(t.total <= 0) {
                clearInterval(timeInterval); 
                //days.textContent = addZero(0);
                hours.textContent = addZero(0);
                minutes.textContent = addZero(0);
                seconds.textContent = addZero(0);  
            }
        }
    }

    //Добавляем 0 перед значениями секунд, минут или часов, которые меньше 10
    function addZero(dateNumber){
        if (dateNumber > -1 && dateNumber < 10) { 
            return '0' + dateNumber;
        } else {
            return dateNumber;
        }
    }

    setClock('timer', deadline);
});
