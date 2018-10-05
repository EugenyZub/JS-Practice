'use strict';

//Первая часть, выделение определённого дня недели
let week = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'   
];

let data = new Date().getDay();

for( let i = 0; i < week.length; i++) {
    if (data == i) {
        document.write('<i>' + week[i] + '</i><br>');
    } else if (i > 0 && i < 5) {
        document.write(week[i] + '<br>');   
    } else {
        document.write('<b>' + week[i] + '</b><br>');
    }   
}

//Вторая часть, поиск чисел начинающихся с 3 и/или 7
let arr = [
    8123764,
    39982,
    7345023,
    73440112,
    8324454,
    23434453,
    92394365438
];

for (let i = 0; i < arr.length; i++) {    
    if( (''+arr[i])[0] == 3 ) {
        console.log(arr[i]);
    } else if ( (''+arr[i])[0] == 7 ) {
        console.log(arr[i]);
    }
}