'use strict';

//Строка с заглавной буквы
let str = "урок-3-был слишком легким";

function stringWithFirstSymbolToUpperCase(str) {
    str = (str.charAt(0).toUpperCase() + str.slice(1)).replace(/-/g, ' ');
    //console.log(str);
    return str;
}
let str2 = stringWithFirstSymbolToUpperCase(str);
//замените все "-" на пробелы
//let str2 = str.replace(/-/g, ' ');
console.log(str2);

//Из получившейся строки вырезать слово “легким”, в этом же слове заменить 2 последние буквы на букву “о”
function replacedWord(str) {
    let foundWord = str.match(/легким/ig);
    let word = foundWord.toString();
    let cutingPartOfWord = word.slice(0,word.length-2);
    let resultingWord = cutingPartOfWord + 'оо';
    alert(resultingWord);
}
replacedWord(str2);