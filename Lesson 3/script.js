'use strict';
let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    finance: money,
    timeData: new Date(time),
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    moneyPerDay: 0
},  
    answer1,
    answer2,
    optionalExpenses = {};

function chooseExpenses() {    
    for(let i = 0; i < 2; i++) {
        answer1 = prompt('Введите обязательную статью расходов в этом месяце', '');
        answer2 = +prompt('Во сколько обойдется?', '');
        
        if ( (typeof(answer1)) === 'string' && (typeof(answer1))!= null && 
             (typeof(answer2)) != null && answer1 != '' && answer2 != '' && 
             answer1.length < 50 && isNaN(answer1) && !isNaN(answer2) ) {
            console.log('done');
            appData.expenses[answer1] = answer2;
        } else {
            i--;
        }
    }
}
chooseExpenses();

// let i = 0;
// while(i < 2) {
//     answer1 = prompt('Введите обязательную статью расходов в этом месяце');
//     answer2 = +prompt('Во сколько обойдется?');
    
//     if ( (typeof(answer1)) === 'string' && (typeof(answer1))!= null && 
//          (typeof(answer2))!= null && answer1 != '' && answer2 != '' && 
//          answer1.length < 50 ) {
//         console.log('done');
//         appData.expenses[i] = (answer1 + ' : ' + answer2);
//     } else {
//            i--;
//     }   
//     i++;
// }

// let i = 0;
// do {
//     answer1 = prompt('Введите обязательную статью расходов в этом месяце');
//     answer2 = +prompt('Во сколько обойдется?');

//     if ( (typeof(answer1)) === 'string' && (typeof(answer1))!= null && 
//          (typeof(answer2))!= null && answer1 != '' && answer2 != '' && 
//          answer1.length < 50 ) {
//         console.log('done');
//         appData.expenses[i] = (answer1 + ' : ' + answer2);
//     } else {
//           i--;
//     }   
//     i++;
// } while(i < 2);

function detectDayBudget(budget) {
    appData.moneyPerDay = (budget/30).toFixed();
    alert('Бюджет на 1 день: ' + appData.moneyPerDay);
}
detectDayBudget(appData.finance);

function detectLevel(moneyPerDay){
    if(moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (moneyPerDay > 100 && moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel(appData.moneyPerDay);


function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = prompt('Под какой процент?', '');
        
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for( let i = 0; i < 3; i++) {
        let answer3 = prompt('Статья необязательных расходов?', '');
        optionalExpenses[i] = answer3;
    }
    console.log(optionalExpenses);
}
chooseOptExpenses();