'use strict';

window.addEventListener("DOMContentLoaded", () => {
    let telMask = '+ _ (___) ___ __ __',
        input = document.querySelector('#tel');
        
    input.addEventListener('click', function() {
        input.value = telMask;
        cursorPosition(input, 1);
    });
   

    input.addEventListener('input', function() {

        let newTel = this.value.split(' ');
        let allNumber = '';
        let regexp = /\d/g;
        let a = this.value.search(regexp); //Первое вхождение цифры

        let newString = this.value[a];

        let countryCode = '',
            operatorСode = '',
            firstThreeDigits = '',
            twoDigits = '',
            lastTwoDigits = '';


        newTel.forEach( function(elem, index) {
            
            if (index == 1) {
                //if( elem == '_') {
                    elem = '' + newString;  //код страны
                    let c = input.value.search(/_/y);
                    //input.lastIndex = 0;
                    //console.log(input.value[c]);
                    //console.log(elem);
                    //input.value += c.replace("_", elem);
               // }                
                //countryCode += elem; 
                 
                console.log(input.value);
            }
            
            // if (index == 2) {
            //     let subStr = elem.substr(1,3);
            //     let newSubStr = '';          //новая строка с 3 введёнными цифрами ( код города)

            //     for(let i = a; i < a+3; i++) {                   
            //         subStr = input.value[i];
            //         newSubStr += subStr;
            //         if (subStr != undefined) {
            //             elem = elem.substr(0,1) + newSubStr + elem.substr(4,4);                 
            //             operatorСode += elem;
            //         }
            //     }  
                
            //     console.log(operatorСode);
            // } 
            
            // if (index == 3) {
            //     let subStr = elem.substr(0,2);
            //     let newSubStr = '';             //первые 3 цифрами номера

            //     for(let i = a + 4; i < a + 7; i++) {                   
            //         subStr = '' + input.value[i];
            //         newSubStr += subStr;  

            //         elem = newSubStr;                  
            //     }
            //     firstThreeDigits += elem;
            // }
            
            // if (index == 4) {
            //     let subStr = elem.substr(0,2);
            //     let newSubStr = '';             //4 и 5 цифры номера

            //     for(let i = a + 8; i < a + 10; i++) {                   
            //         subStr = '' + input.value[i];
            //         newSubStr += subStr;    

            //         elem = newSubStr;                
            //     }   
            //     twoDigits += elem;
            // }

            // if (index == 5) {
            //     let subStr = elem.substr(0,2);
            //     let newSubStr = '';             //6 и 7 цифры номера

            //     for(let i = a + 10; i < a + 12; i++) {                   
            //         subStr = '' + input.value[i];
            //         newSubStr += subStr;    
                    
            //         elem = newSubStr;
            //     }
            //     lastTwoDigits += elem;
            // }

        });
        input.value = countryCode + operatorСode + firstThreeDigits + twoDigits + lastTwoDigits;
   });


    function mask() {
        
        console.log(telMask);
    }
    
    function cursorPosition(position, element) {
        element.focus();
    
        if (element.setSelectionRange) {
            element.setSelectionRange(position, position); //начальное и конечное положение выделения текста в inpute
        } else if (element.createTextRange) {
            let range = element.createTextRange();// Создаём объект TextRange 
            range.collapse(true); //объединение конечных точек диапазона
            range.moveEnd("character", position); //сдвиг конечных точек диапазона на единицу текста
            range.moveStart("character", position);// в нашем случае это символ
            range.select(); //для формирования выделения на основе содержимого объекта TextRange
        }
    }
});