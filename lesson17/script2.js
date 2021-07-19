const speed = 40;
class hero {
    constructor(img, top, left, size) {
        this.img = img;
        this.top = top;
        this.left = left;
        this.size = size;
    }
    getHeroElement() {
        return `<img  height="${this.size}" width ="${this.size}" style="position: absolute;top: ${this.top}px;left: ${this.left}px;" src ="${this.img}">`
    }
    moveRight() {
        this.left += speed;
    }
    moveLeft() {
        this.left -= speed;
    }
    moveUp() {
        this.top -= speed;
    }
    moveDown() {
        this.top += speed;
    }
}

var doremon = new hero(`Doraemon.jpeg`, 0, 0, 100);
function start() {
    if (doremon.left < window.innerWidth - doremon.size && doremon.top < doremon.size/3) {
        doremon.moveRight();
    } else if (doremon.top < window.innerHeight - doremon.size && doremon.left >= window.innerWidth - doremon.size) {
        doremon.moveDown();
    } else if (doremon.left > 0) {
        doremon.moveLeft();
    } else {
        doremon.moveUp();
    }
    document.getElementById('game').innerHTML = doremon.getHeroElement();
    setTimeout(start, 200)
}
start();
