'use strict';


window.addEventListener("DOMContentLoaded", () => {
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

    //Маска
    function mask(e) {
        let mask = this.defaultValue, //Внешний вид маски
            i = 0,
            def = mask.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");// \D - любой нецифровой символ

        if (def.length >= val.length) {
            val = def;
        }

        this.value = mask.replace(/./g, function(a) {
            //return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
            if (/[_\d]/.test(a) && i < val.length) {
                return val.charAt(i++) || "_";
            } 

            this.value = mask;
            i = mask.lastIndexOf(val.substr(-1));
            i < mask.length && mask != this.defaultValue ? i++ : i = mask.indexOf("_");
            if(i < mask.length && mask != this.defaultValue) {
                return i++;
            } else {
                i = mask.indexOf("_");
                return i;
            }
            // else if (i >= val.length) {
            //     return "";
            // } else {
            //     return a;
            // }
        });

        //место ввода сохранится, если будет введено 2 и более символа
        // if (e.type == "blur") {
        //     if (this.value.length == 2){
        //         this.value = "";
        //     } 
        // } else {
            cursorPosition(this.value.length, this);
        // }
    });
}

    let input = document.querySelector("#tel");
    input.addEventListener("input", mask);
    input.addEventListener("focus", mask);
    input.addEventListener("blur", mask);
        
});