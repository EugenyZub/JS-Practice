window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    let calc = require('./parts/calc.js'),
        form = require('./parts/sendForm.js'),
        modal = require('./parts/modal.js'),
        scroll = require('./parts/smothingScroll.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js');

    tabs();
    timer();
    modal();
    form();
    scroll();
    slider();
    calc();   
});
