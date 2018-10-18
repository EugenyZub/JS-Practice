'use strict';

if (screen.width > 425) {   
    let modal = document.querySelector('.modal-btn');

    modal.addEventListener('click', function() {
        quad();
    });   
}

function quad(progress) {
    return Math.pow(progress, 2);
}