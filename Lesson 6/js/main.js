let start = document.getElementById('start'),

    //Блоки правой части программы
    budeget = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],

    //Обязательные расходы
    expensesItem = document.querySelectorAll('.expenses-item'),

    //Кнопки утвердить, рассчитать
    approveExpenses = document.getElementsByTagName('button')[0],
    approveOptionalExpenses = document.getElementsByTagName('button')[1],
    calculate = document.getElementsByTagName('button')[2],
    
    //Необязательные расходы
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    //Статьи возможного дохода
    chooseIncome = document.querySelector('#income'), 

    //Чекбокс
    checkSavings = document.querySelector('#savings'),

    //Сумма
    sum = document.querySelector('#sum'),

    //Процент
    percent = document.querySelector('#percent'), 

    //Год
    year = document.querySelector('.year-value'), 

    //Месяц
    month = document.querySelector('.month-value'),

    //День
    day = document.querySelector('.day-value'); 

    let money, time;
    console.log(expensesItem.textContent);

    //Старт
    start.addEventListener('click', function() {
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
        money = +prompt('Ваш бюджет на месяц?', '');

        while(isNaN(money) || money == '' || money == null) {
            money = +prompt('Ваш бюджет на месяц?', '');
        }

        appData.finance = money;
        appData.timeData = time;
        budeget.textContent = money.toFixed();
        year.value = new Date(Date.parse(time)).getFullYear();
        month.value = new Date(Date.parse(time)).getMonth() + 1;
        day.value = new Date(Date.parse(time)).getDate();

        //Включение кнопки "рассчитать бюджет"
        calculate.removeAttribute('disabled');
        approveExpenses.removeAttribute('disabled');
        approveOptionalExpenses.removeAttribute('disabled');
    });

    //Обязательные расходы
    approveExpenses.addEventListener('click', function() {
        let sum = 0;
        for(let i = 0; i < expensesItem.length; i++) {
           let  answer1 = expensesItem[i].value,
                answer2 = expensesItem[++i].value;
            
            if ( (typeof(answer1)) === 'string' && (typeof(answer1))!= null && 
                 (typeof(answer2)) != null && answer1 != '' && answer2 != '' && 
                 answer1.length < 50 && isNaN(answer1) && !isNaN(answer2) ) {
                console.log('done');
                appData.expenses[answer1] = answer2;
                sum += +answer2;
            } else {
                i--;
            }
        }

        expenses.textContent = sum;   
    });
    //Необязательные расходы
    approveOptionalExpenses.addEventListener('click', function() {
        for( let i = 0; i < optionalExpensesItem.length; i++) {
            let answer3 = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = answer3;
            optionalExpenses.textContent += appData.optionalExpenses[i] + ' ';
        }
    });  

    //Кнопка "рассчитать", уровень достатка и бюджет на день. Учтены траты на месяц
    calculate.addEventListener('click', function() {

        if (appData.finance != undefined) {
            appData.moneyPerDay = ((appData.finance - expenses.textContent)/30).toFixed();
            dayBudget.textContent = appData.moneyPerDay;

            if(appData.moneyPerDay < 100) {
                level.textContent = 'Минимальный уровень достатка';
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                level.textContent = 'Средний уровень достатка';            
            } else if (appData.moneyPerDay > 2000) {
                level.textContent = 'Высокий уровень достатка';            
            } else {
                level.textContent = 'Произошла ошибка';            
            }
        } else {
            dayBudget.textContent = 'Произошла ошибка';
        }
    });
    //Воможный доход
    chooseIncome.addEventListener('input', function() {
        let items = chooseIncome.value; 
        appData.income = items.split(', ');
        income.textContent = appData.income;         
    });
    //Чекбокс
    checkSavings.addEventListener('click', function() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });
    //Сумма
    sum.addEventListener('input', function() {
        if(appData.savings == true) {
            incomeSavingth();
        }
    });
    //Проценты
    percent.addEventListener('input', function() {
        if(appData.savings == true) {
            incomeSavingth();
        }
    });

    function incomeSavingth() {  
        let sumValue = +sum.value,
            percentValue = +percent.value;

        appData.monthIncome = sumValue/100/12*percentValue;
        appData.yearIncome = sumValue/100*percentValue;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }

    let appData = {
        finance: money,
        timeData: new Date(time),
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
        moneyPerDay: 0
    };