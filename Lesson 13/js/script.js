window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    const anchors = document.querySelectorAll('a[href*="#"]');

    // Плавная прокрутка страницы
    for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
        
          const blockID = anchor.getAttribute('href');
          
          document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
      
        });
      }

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

    let form = document.querySelector('.main-form'),                        //модальное окно
        inputModal = form.getElementsByTagName('input'),                         
        tel = document.getElementById('phone'),

        contactForm = document.querySelector('#form'),                      //большая форма внизу
        contactInputs = contactForm.getElementsByTagName('input'),
        contactPhone = document.getElementById('contact-phone'), 

        statusMessage = document.createElement('div');  

    statusMessage.classList.add('Status');
    numbers(contactPhone);
    numbers(tel);

    //Conact-Form
    function sendContactForm(elem, input) {
        elem.addEventListener('submit', function(e) {
            e.preventDefault();
                elem.appendChild(statusMessage);
                let contactFormData = new FormData(elem);

                //Очищение инпута формы после ввода отправки данных
                function clearInputs() {
                    for(let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
                }

            postData(contactFormData)
                .then(()=> statusMessage.innerHTML = message.loading)
                .then(()=> {
                    statusMessage.innerHTML = message.success;
                })
                .catch(()=> statusMessage.innerHTML = message.failure)
                .then(clearInputs);
        
        });
    }
  
    sendContactForm(contactForm, contactInputs);
    sendContactForm(form, inputModal);


    //Только цифры и знак +
    function numbers(value) {
        value.addEventListener('keypress', function() {
            let that = this;
                setTimeout(function() {
                    that.value = that.value.replace(/[a-zA-z]|[а-яА-Я]/g, '');        
                    that.value = that.value.replace(/[0-9][+]/g, that.value.substr(that.value.length), '');
                    that.value = that.value.replace(/[+][+]/g, that.value.substr(that.value.length), '');
                }, 0);   
        });
    }


    //Промис
    function postData(data) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
        
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            request.onreadystatechange = function() {
                if (request.readyState < 4) {
                    resolve();
                } else if (request.readyState === 4) {
                    if (request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                }
            };
            request.send(data);
        });
    } //End Promise
    

    //Slider 

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length){
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item)=> item.style.display = 'none');
        // for(let i = 0; i < slides.length; i++) {
        //     slides[i].style.display ='none';
        // }
        dots.forEach((item)=> item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function curentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', ()=> {
        plusSlides(-1);
    });

    next.addEventListener('click', ()=> {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', (e)=> {
        for(let i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i-1]) {
                curentSlide(i);
            }
        }
    });

    //Calc
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        restPlace = place.options[place.selectedIndex].value;

    totalValue.innerHTML = 0;
    numbersWithoutPlusAndE(persons);
    numbersWithoutPlusAndE(restDays);

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        calc(persons, restDays);
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        calc(restDays, persons);
    });

    place.addEventListener('change', function() {
        restPlace = this.options[this.selectedIndex].value;

    });

    ///Подсчёт суммы
    function calc(input1, input2) {
        //Проверка, что число не удалено после рассчёта
        if (input1.value == '' || input1.value == 0) {
            total = 0;                   
        } else {
            total = (daysSum + personsSum)*4000;
            finalCount(input1,input2, restPlace);
        }

        if (input2.value == '' || input2.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
            finalCount(input1,input2, restPlace);
        }
    }

    function finalCount(input1,input2, place) {
        if(input1.value == '' || input2.value == '' || input1.value == 0 || input2.value == 0) {
            total.value.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * place;
        }
    }

    //Для ввода только чисел без "e" и "+"
    function numbersWithoutPlusAndE(value) {
        value.addEventListener('keypress', function() {
            let that = this;
                setTimeout(function() {
                    that.value = that.value.replace(/\D/g, ''); 
                }, 0);   
        });
    }
});
