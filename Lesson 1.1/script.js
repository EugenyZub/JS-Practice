'use strict';

const num = 33721;

let result = 1;

for(let i = 0; i < num.toString().length; i++) {
    result *= (''+num)[i];
}

let power = result ** 3;

console.log(result);

alert(Math.round(power/100000));
