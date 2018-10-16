//Для поддержки в разных браузерах
window.requestAnimFrame = (function(){ 
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function( callback ){ 
              window.setTimeout(callback, 1000 / 60); 
            }; 
})();

let posX = 0,
    boxWidth = 50,
    pixelPerFrame = 3,
    start = document.querySelector('#startBtn'),
    stop = document.querySelector('#stopBtn'),
    reset = document.querySelector('#resetBtn'),
    requestId,
    canvas = document.getElementById('canvas'), 
        ctx = canvas.getContext('2d'); 

ctx.fillStyle = 'lightblue'; 
ctx.fillRect(5, 5, 30, 50); //начальное положение

function draw() {
    requestId = window.requestAnimationFrame(draw);   
    if (posX <= (canvas.width - boxWidth + 15)) {
        // clearRect() для отсутсвия растягивания элемента на всю ширину полотна
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        // fillRect(pos_X, pos_Y, width_element, height_element)
        ctx.fillRect(posX, 5, 30, 50);
        posX += pixelPerFrame;
    } else {
        cancelAnimationFrame(requestId);
    }
}
//Запуск анимации по кнопке
start.addEventListener('click', function() {
    window.requestAnimationFrame(draw);
});

//остановка анимации
stop.addEventListener('click', function() {
    cancelAnimationFrame(requestId);
});

reset.addEventListener('click', function() {
    posX = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(5, 5, 30, 50);
});