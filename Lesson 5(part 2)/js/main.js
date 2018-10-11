let start = document.getElementById('start'),

    //Блоки правой части программы
    budeget = document.getElementsByClassName('budget-value'),
    daybudget = document.getElementsByClassName('daybudget-value'),
    level = document.getElementsByClassName('level-value'),
    expenses = document.getElementsByClassName('expenses-value'),
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value'),
    income = document.getElementsByClassName('income-value'),
    monthsavings = document.getElementsByClassName('monthsavings-value'),
    yearsavings = document.getElementsByClassName('yearsavings-value'),

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
    checksavings = document.querySelector('#savings'),

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

//console.log(day);