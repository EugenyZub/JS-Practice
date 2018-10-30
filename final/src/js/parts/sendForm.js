function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
    };

    let form = document.querySelector('.main-form'), //модальное окно
        inputModal = form.getElementsByTagName('input'),
        tel = document.getElementById('phone'),

        contactForm = document.querySelector('#form'), //большая форма внизу
        contactInputs = contactForm.getElementsByTagName('input'),
        contactPhone = document.getElementById('contact-phone'),

        statusMessage = document.createElement('div');

    statusMessage.classList.add('Status');
    numbers(contactPhone);
    numbers(tel);

    function sendContactForm(elem, input) {
        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            elem.appendChild(statusMessage);
            let contactFormData = new FormData(elem);

            //Очищение инпута формы после ввода отправки данных
            function clearInputs() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(contactFormData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInputs);

        });
    }

    sendContactForm(contactForm, contactInputs);
    sendContactForm(form, inputModal);

    //Только цифры и знак +
    function numbers(value) {
        value.addEventListener('keypress', function () {
            let that = this;
            setTimeout(function () {
                that.value = that.value.replace(/[a-zA-z]|[а-яА-Я]/g, '');
                that.value = that.value.replace(/[0-9][+]/g, that.value.substr(that.value.length), '');
                that.value = that.value.replace(/[+][+]/g, that.value.substr(that.value.length), '');
            }, 0);
        });
    }

    //Промис
    function postData(data) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();

            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            request.onreadystatechange = function () {
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
    }
}

export default form;