'use strict';

const num = 33721;

let result = num%10 * Math.round((num%100)/10) * Math.round((num%1000)/100) * Math.floor((num%10000)/1000) * Math.round(num/10000), 
    power = result ** 3;

console.log(result);

alert(Math.round(power/100000));
