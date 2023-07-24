class Obstacle {
    constructor(gameScreen, left, top, width, height, imageUrl) {
        this.gameScreen = gameScreen
        this.left = Math.floor(Math.random() * (gameScreen.offsetWidth - 100))
        this.top = 600
        this.width = 100
        this.height = 150
        this.element = document.createElement('img')
        this.element.src = './images/red-car.png';
        this.element.style.position = 'absolute'
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.gameScreen.appendChild(this.element)
}
    move() {
        this.top += 3
        this.updatePosition()
    }
    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }
}   