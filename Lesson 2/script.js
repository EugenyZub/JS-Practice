'use strict';

let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    finance: money,
    timeData: new Date(time),
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    moneyPerDay: 0
};

let answer1,
    answer2;

for(let i = 0; i < 2; i++) {
    answer1 = prompt('Введите обязательную статью расходов в этом месяце');
    answer2 = +prompt('Во сколько обойдется?');
    
    if ( (typeof(answer1)) === 'string' && (typeof(answer1))!= null && 
         (typeof(answer2))!= null && answer1 != '' && answer2 != '' && 
         answer1.length < 50 ) {
        console.log('done');
        appData.expenses[i] = (answer1 + ' : ' + answer2);
    } else {
        i--;
    }
}

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

appData.moneyPerDay = appData.finance/30;

alert('Бюджет на 1 день: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}