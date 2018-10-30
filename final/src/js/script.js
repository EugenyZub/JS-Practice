import calc from './parts/calc';
import form from './parts/sendForm';
import modal from './parts/modal';
import scroll from './parts/smothingScroll';
import slider from './parts/slider';
import tabs from './parts/tabs';
import timer from './parts/timer';

window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    calc();
    form();
    modal();
    scroll();
    slider();
    tabs();
    timer();   
       
});
