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

// let posX = 0,
//     boxWidth = 50,
//     pixelPerFrame = 3,
//     start = document.querySelector('#startBtn'),
//     stop = document.querySelector('#stopBtn'),
//     reset = document.querySelector('#resetBtn'),
//     requestId,
//     canvas = document.getElementById('canvas'), 
//         ctx = canvas.getContext('2d'); 

// ctx.fillStyle = 'lightblue'; 
// ctx.fillRect(5, 5, 30, 50); //начальное положение

// function draw() {
//     requestId = window.requestAnimationFrame(draw);
//     if (posX <= (canvas.width - boxWidth + 15)) {
//         // clearRect() для отсутсвия растягивания элемента на всю ширину полотна
//         ctx.clearRect(0, 0, canvas.width, canvas.height); 
//         // fillRect(pos_X, pos_Y, width_element, height_element)
//         ctx.fillRect(posX, 5, 30, 50);
//         posX += pixelPerFrame;
//     } else {
//         cancelAnimationFrame(requestId);
//     }
// }
// //Запуск анимации по кнопке
// start.addEventListener('click', function() {
//     window.requestAnimationFrame(draw);
// });

// //остановка анимации
// stop.addEventListener('click', function() {
//     cancelAnimationFrame(requestId);
// });

// reset.addEventListener('click', function() {
//     posX = 0;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillRect(5, 5, 30, 50);
// });


let smile = document.querySelector('#smile'),
    ctx2 = smile.getContext('2d'),
    requestId2,
    smileBtn = document.querySelector('#smileBtn'),
    resetSmileBtn = document.querySelector('#resetSmileBtn');

// function drawSmile() {
//     requestId2 = window.requestAnimationFrame(drawSmile);
//     if (smile.getContext){   
//     }
// }

// smileBtn.addEventListener('click', function() {
//     window.requestAnimationFrame(drawSmile);
// });

// resetSmileBtn.addEventListener('click', function() {
//     ctx2.clearRect(0, 0, 0, 0);
// });
smile.animate(function drawSmile2() { 
    ctx2.beginPath();
    ctx2.arc(75,75,40,0,Math.PI*2,true); // Внешняя окружность
    ctx2.moveTo(110,75);
}, 1000);

smile.animate(function mouthe() {
    ctx2.arc(75,75,35,0,Math.PI,false);  // рот (по часовой стрелке)
    ctx2.moveTo(65,65);
}, 3000);

smile.animate(function left() {
        ctx2.arc(60,65,5,0,Math.PI*2,true);  // Левый глаз
        ctx2.moveTo(95,65);
}, 5000);

smile.animate(function right() {
        ctx2.arc(90,65,5,0,Math.PI*2,true);  // Правый глаз
        ctx2.stroke();
}, 5000);