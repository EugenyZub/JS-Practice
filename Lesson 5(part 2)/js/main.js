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

    //Вывод получившихся значений
console.log(start);

console.log('Блоки правой части программы');
console.log(budeget);
console.log(daybudget);
console.log(level);
console.log(expenses);
console.log(optionalexpenses);
console.log(income);
console.log(monthsavings);
console.log(yearsavings);

console.log('Обязательными расходами');
console.log(expensesItem);

console.log('Кнопки');
console.log(approveExpenses);
console.log(approveOptionalExpenses);
console.log(calculate);

console.log('Необязательные расходы, Возможный доход');
console.log(optionalExpensesItem);
console.log(chooseIncome);

console.log('Чекбокс, Сумма, Процент, Год, Месяц, День');
console.log(checksavings);
console.log(sum);
console.log(percent);
console.log(year);
console.log(month);
console.log(day);
