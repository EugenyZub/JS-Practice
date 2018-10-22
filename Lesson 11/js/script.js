window.addEventListener('DOMContentLoaded', () => {

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
    info.addEventListener('click', (e) => {
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
    
    let deadline = '2018-10-19';
    //Получаем разницу во времени между конечной датой и настоящим временем
    function getTimeRemaining(endtime) {
        let x = new Date();
        let y = x.getTimezoneOffset() * 60 * 1000;
        console.log(y);
        let t = Date.parse(endtime) - Date.parse(new Date()) + y,
            seconds = addZero(Math.floor((t/1000) % 60)),
            minutes = addZero(Math.floor((t/1000/ 60) % 60)),
            hours = addZero(Math.floor((t/(1000*60*60))));
            //days = Math.floor(t/(1000*60*60*24));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }
    //Заполняем таймер на странице
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        //Условия останова таймера
        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if(t.total <= 0) {
                clearInterval(timeInterval); 
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

    //Modal

    let more = document.querySelectorAll('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.forEach(function(element) {
        element.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

    });  

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


    //Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),   
        contactForm = document.querySelector('#form'),
        contactInputs = contactForm.getElementsByTagName('input'),
        tel = document.getElementById('phone'),
        contactPhone = document.getElementById('contact-phone');

        statusMessage.classList.add('Status');
        numbers(contactPhone);
        numbers(tel);

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        //request.send(formData);
        request.send(json);
        

        request.addEventListener('readystatechange', function(){
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }

    });

    //Conact-Form
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        contactForm.appendChild(statusMessage);

        let contactRequest = new XMLHttpRequest();
        contactRequest.open('POST', 'server.php');

        contactRequest.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(contactForm);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let conactJson = JSON.stringify(obj);

        contactRequest.send(conactJson);
        

        contactRequest.addEventListener('readystatechange', function(){
            if (contactRequest.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (contactRequest.readyState === 4 && contactRequest.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        //Очищение инпутов после ввода отправки данных
        for (let i = 0; i < contactInputs.length; i++) {
            contactInputs[i].value = '';
        }

    });

    //Только цифры и знак +
    function numbers(value) {
        value.addEventListener('keypress', function() {
            let that = this;
                setTimeout(function() {
                    that.value = that.value.replace(/[^+/\d/]/g, ''); 
                }, 0);   
        });
    }

});
