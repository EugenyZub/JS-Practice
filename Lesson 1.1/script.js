'use strict';

const num = 33721;

let units = num%10, 
    tens = Math.round((num%100)/10),
    hundreds = Math.round((num%1000)/100),
    thousands = Math.floor((num%10000)/1000),
    tensOfThousands = Math.round(num/10000),
    result = units * tens * hundreds * thousands * tensOfThousands,
    power = result ** 3;

console.log(result);

alert(Math.round(power/100000));
