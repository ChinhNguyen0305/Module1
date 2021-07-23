document.getElementsByTagName('button')[0].addEventListener('click', playgame)
window.addEventListener('keydown', controllBar);

var step = 35;
var canvas = document.getElementById("collision");
var ball = canvas.getContext("2d");
var x_ball = 500;
var y_ball = 250;
var radius = 20;
var speedX = 5;
var speedY = 10;
var ballStyle = `rgb(236, 239, 164)`
function drawBall() {
    ball.beginPath();
    ball.fillStyle = ballStyle;
    ball.arc(x_ball, y_ball, radius, 0, 2 * Math.PI);
    ball.fill();
}
function alertLose() {
    var text = canvas.getContext('2d');
    text.font = ' bolder 30px Courier new';
    text.fillText('At least you tried !', 300, 250)
}
function changeBallColor() {
    let generateNumber = Math.floor(Math.random() * 5);
    switch (generateNumber) {
        case 0:
            ballStyle = `rgb(142, 38, 87)`;
            break;
        case 1:
            ballStyle = `rgb(252, 186, 211)`;
            break;
        case 2:
            ballStyle = `rgb(168, 216, 234)`;
            break;
        case 3:
            ballStyle = `rgb(0, 173, 181)`;
            break;
        case 4:
            ballStyle = `rgb(238, 238, 238)`;
            break;
    }
}

var rect = canvas.getContext('2d');
var x_rect = 450;
var y_rect = 490;
var width_rect = 100;
var height_rect = 10;
var styleRect = 'rgb(213, 76, 76)'
function drawRect() {
    rect.beginPath();
    rect.fillStyle = styleRect
    rect.fillRect(x_rect, y_rect, width_rect, height_rect);
}

function changeBarColor() {
    let generateNumber = Math.floor(Math.random() * 5);
    switch (generateNumber) {
        case 0:
            styleRect = `rgb(160, 60, 120)`;
            break;
        case 1:
            styleRect = `rgb(147, 217, 163)`;
            break;
        case 2:
            styleRect = `rgb(255, 201, 71)`;

            break;
        case 3:
            styleRect = `rgb(24, 90, 219)`;

            break;
        case 4:
            styleRect = `rgb(136, 255, 247)`;
            break;


    }
}
function moveLeft() {
    if (x_rect > 0)
        x_rect -= step;
}
function moveRight() {
    if (x_rect < canvas.width - width_rect) {
        x_rect += step;
    }
}
function controllBar(evt) {
    switch (evt.keyCode) {
        case 37:
            moveLeft();
            break;
        case 39:
            moveRight();
            break;
    }
}
function changebg() {
    let generateNumber = Math.floor(Math.random() * 5);
    var bg = document.getElementsByTagName('canvas')[0];
    switch (generateNumber) {
        case 0:
            bg.style.backgroundImage = `url(https://ak.picdn.net/shutterstock/videos/1022575267/thumb/1.jpg)`
            break;
        case 1:
            bg.style.backgroundImage = `url(https://img.freepik.com/free-vector/morning-time-countryside-with-meadow-mountain_116220-257.jpg?size=626&ext=jpg)`
            break;
        case 2:
            bg.style.backgroundImage = `url(https://ms.yugipedia.com//thumb/a/af/DesertField-JP-Anime-ZX-NC.png/1200px-DesertField-JP-Anime-ZX-NC.png)`
            break;
        case 3:
            bg.style.backgroundImage = `url(https://img.freepik.com/free-vector/cartoon-galaxy-background_23-2148973052.jpg?size=626&ext=jpg)`
            break;
        case 4:
            bg.style.backgroundImage = `url(https://i.pinimg.com/originals/0d/c2/2d/0dc22d0e11b515d71ef3aaba41f7c157.jpg)`

    }
}
function ballSizeUp() {
    if (radius < 30) {
        radius += 5;
    }
}
function ballSizeDown() {
    if (radius > 5) {
        radius -= 5;
    }
}
function playSound() {
    let sound = document.getElementById('loadSoud');
    sound.innerHTML = `<audio autoplay src="beep.wav"></audio>`;
}
function sizeSound() {
    let adjustSize = document.getElementById('pumbSound');
    adjustSize.innerHTML = ` <audio autoplay src="pumb .wav"></audio> `
}
var accelerate = setInterval(function () {
    speedX += 2;
    speedY += 1;
}, 3000);
function playgame() {
    let myGame = setInterval(function () {
        ball.clearRect(0, 0, collision.width, collision.height);
        if (y_ball > canvas.height - radius && x_ball > (x_rect + width_rect)) {
            alertLose();
            clearInterval(myGame);
        } else if (y_ball > canvas.height - radius && x_ball < x_rect) {
            alertLose();
            clearInterval(myGame);
        } else if (x_ball < radius || x_ball > canvas.width - radius) {
            playSound();
            speedX = -speedX;
        } else if (y_ball < radius || y_ball > canvas.height - radius) {
            playSound();
            speedY = -speedY;
        }
        x_ball += speedX;
        y_ball += speedY;
        drawBall();
        drawRect();
    }, 24)
}
