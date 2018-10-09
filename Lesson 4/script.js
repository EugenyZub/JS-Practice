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
    moneyPerDay: 0,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function(budget) {
        appData.moneyPerDay = (budget/30).toFixed();
    alert('Бюджет на 1 день: ' + appData.moneyPerDay);
    },
    detectLevel: function(moneyPerDay) {
        if(moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (moneyPerDay > 100 && moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = prompt('Под какой процент?', '');
            
                appData.monthIncome = save/100/12*percent;
                alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(optionalExpenses) {
        for( let i = 0; i < 3; i++) {
            let answer3 = prompt('Статья необязательных расходов?', '');
            optionalExpenses[i] = answer3;
        }
        console.log(optionalExpenses);
    },
    chooseIncome: function() {            
        let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');            

        while(typeof(items) != 'string' || items == null || items == '' | items == 'underfind') {
            alert('Введите строку');
            items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');            
        }
        
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещё?'));
        appData.income.sort();
        
        document.write("Способы доп. заработка: <br>");
        appData.income.forEach(function(item, i) {
            document.write( (i+1) + '. ' + item.charAt(0).toUpperCase() + 
                            item.slice(1) + '<br>');
        });        
    }
},  
    answer1,
    answer2;

console.log('Наша программа включает в себя данные: ');
for( let key in appData) {
    if (typeof(appData[key]) != 'function') {
        console.log( key + ':' + appData[key]);
    }
}
