class Player {
    constructor(gameScreen, left, top, width, height, imageUrl) {
      this.gameScreen = gameScreen;
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
      this.directionX = 0;
      this.directionY = 0;
      this.element = document.createElement('img');
      this.element.src = imageUrl;
      this.element.style.position = 'absolute';
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.gameScreen.appendChild(this.element);
  
      this.updatePosition();
    }
  
    move() {
      this.left += this.directionX;
      this.top += this.directionY;
  
      const maxLeft = this.gameScreen.offsetWidth - this.width;
      const maxTop = this.gameScreen.offsetHeight - this.height;
      this.left = Math.max(0, Math.min(this.left, maxLeft));
      this.top = Math.max(0, Math.min(this.top, maxTop));
  
      this.updatePosition();
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    didCollide(obstacle) {
      const playerRect = this.element.getBoundingClientRect();
      const obstacleRect = obstacle.element.getBoundingClientRect();
  
      return (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
      );
    }
    update() {
        this.player.move();
      }
  }
  
  // Example usage
  const gameScreen = document.getElementById('game-screen');
  const player = new Player(gameScreen, 200, 500, 100, 150, "./images/car.png");
  