function calc() {
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
        calcWithPlace(persons, restDays);
    });

    //Для ввода только чисел без "e" и "+"
    function numbersWithoutPlusAndE(value) {
        value.addEventListener('keypress', function() {
            let that = this;
                setTimeout(function() {
                    that.value = that.value.replace(/\D/g, ''); 
                }, 0);   
        });
    }

    //Проверка инпутов в калькуляторе и рассчёт стоимости( без учёта места отдыха)
    function calc(input1, input2) {
        if (input1.value == '' || input1.value == 0) {
            total = 0;
        } else {
            total = (daysSum + personsSum)*4000 * restPlace;
        }

        if (input2.value == '' || input2.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    }

    //Проверка инпутов в калькуляторе и рассчёт стоимости( с учётом места отдыха)
    function calcWithPlace(personsInput, restInput) {
        if(restInput.value == '' || personsInput.value == '' || restInput.value == 0 || personsInput.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            let a;
            if (personsInput.value != '' || personsInput.value != 0 || restInput.value != '' || restInput.value != 0) {
                a = (daysSum + personsSum)*4000;
            }

            totalValue.innerHTML = a * place.options[place.selectedIndex].value;
        }
    }
}

module.exports = calc;