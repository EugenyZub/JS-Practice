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


    $('.form-inline').on('submit', function() {
        call();
    });

 	function call() {
        let request = new XMLHttpRequest();
 	    let msg   = $('.form-inline').serialize();
        $.ajax({
          type: 'POST',
          url: 'server.php',
          data: msg,
          
          error:  function(xhr){
	        alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
    }

});