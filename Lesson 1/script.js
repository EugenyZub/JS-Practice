'use stric';

let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    finance: money,
    timeData: new Date(time),
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let answer1,
    answer2;

for(let i = 0; i < 3; i++) {
    answer1 = prompt('Введите обязательную статью расходов в этом месяце');
    answer2 = +prompt('Во сколько обойдется?');
    appData.expenses[i] = (answer1 + ' : ' + answer2);
}

alert('Бюджет на 1 день: ' + appData.finance/30);