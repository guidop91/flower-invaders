class Drop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 10;
    this.collided = false;
  }

  show() {
    fill(25, 198, 230);
    noStroke();
    ellipse(this.x, this.y, this.diameter);
  }

  move() {
    this.y -= 3;
  }

  collision(flower) {
    const distance = dist(this.x, this.y, flower.x, flower.y);
    if (distance < this.diameter + flower.diameter - 5) {
      this.collided = true;
      flower.diameter += 1;
    }
  }
}
