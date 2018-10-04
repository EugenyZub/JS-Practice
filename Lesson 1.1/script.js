'use strict';

const num = 33721;

let one = (''+num)[0],
    two = (''+num)[1], 
    units = (''+num)[4], 
    tens = (''+num)[3],
    hundreds = (''+num)[2],
    thousands = (''+num)[1],
    tensOfThousands = (''+num)[0],

    result = tensOfThousands * thousands * hundreds * tens * units,
    power = result ** 3;

console.log(result);

alert(Math.round(power/100000));
