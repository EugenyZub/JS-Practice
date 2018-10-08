'use strict';

//Строка с заглавной буквы + замена всех "-" на пробелы
let str = "урок-3-был слишком легким";

function stringWithFirstSymbolToUpperCase(str) {
    str = (str.charAt(0).toUpperCase() + str.slice(1)).replace(/-/g, ' ');
    return str;
}
let str2 = stringWithFirstSymbolToUpperCase(str);

console.log(str2);

//Из получившейся строки вырезать слово “легким”, в этом же слове заменить 
//2 последние буквы на букву “о”
function replacedWord(str) {
    let foundWord = str.match(/легким/ig).toString().slice(0,-3) + 'оо';
    alert(foundWord);
}
replacedWord(str2);

// Вывести в консоль квадратный корень из суммы кубов элементов массива arr 
let arr = [20, 33, 1, "Человек", 2, 3];

let numbers = arr.filter(arr => typeof(arr) !== 'string');

function Cubs() {
    let cubs = 0;
    for(let i = 0; i < numbers.length; i++) {       
        cubs += numbers[i] ** 3; 
    }   
    return Math.sqrt(cubs);
}
let cubs = Cubs();
console.log('Квадратный корень из суммы кубов элементов массива arr равен ' + cubs);

//Создайте функцию, которая принимает 1 аргумент (название произвольное)
    let testArg = 'sdfssd';

    function testFunc(arg) {
        console.log(typeof(arg) + " " + arg);

        if(typeof(arg) == 'number' || arg == 'underfind' || arg == '' || arg == null ) {
            alert('Вы ввели не строку!');
        } else {
            arg.trim();
            if (arg.length > 50) {
                arg = arg.substring(0, 50) + '...';
            }
            console.log(arg);
        }
    }
   
    testFunc(testArg);