'use strict';

window.addEventListener("DOMContentLoaded", function() {

    let matrix = "+_ (___) ___ ____",
    tel = document.querySelector('#tel');

    tel.addEventListener('click', () => {
        tel.value = matrix;
    });

    tel.onblur = function() {
        tel.value = '';
    };


});