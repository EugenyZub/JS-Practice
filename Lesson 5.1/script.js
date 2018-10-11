'use strict';

let months = ["01", "02", "03", "03", "05", "06", 
              "07", "08", "09", "10", "11", "12"],
    date = [];


//09:59:59 30.05.2018
let myDate = new Date(2018, 5, 30, 9, 59, 59);
//  var fullDate = "'" + myDate.getDate() + " " + months[myDate.getMonth()] + 
//                  " " + myDate.getFullYear() + "'";

let fullDate = "'" + myDate.getHours() + ":" + myDate.getMinutes() + ":" +
               myDate.getSeconds() + " " + myDate.getDate() + ":" + 
               myDate.getMonth() + ":" + myDate.getFullYear() + "'";

document.write(fullDate); // Сегодня: 18 Август 2015, Вторник