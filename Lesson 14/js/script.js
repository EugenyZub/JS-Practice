$(document).ready(function() {

    $('.main_btna, .main_btn, #sheldure').on('click', function() {
        $('.modal').effect('slide',
            {
                direction: 'up'
            }, 2000
        );   
        $('.overlay').animate(
            {
                opacity: 'show'
            }, 2000
        );             
    });

    $('.close').on('click', function() {
        $('.modal').effect('slide',
            {
                direction: 'up',
                mode: 'hide'
            }, 2000
        );   
        $('.overlay').animate(
            {
                opacity: 'hide'
            }, 2000
        );             
    });

});