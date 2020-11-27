class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 20;
    this.speedX = 1;
  }

  update() {
    this.x += this.speedX;
  }

  show() {
    fill(255, 0, 255);
    stroke(0);
    ellipse(this.x, this.y + 10, this.diameter);
    ellipse(this.x, this.y - 10, this.diameter);
    ellipse(this.x + 10, this.y, this.diameter);
    ellipse(this.x - 10, this.y, this.diameter);
    fill(255, 255, 0);
    ellipse(this.x, this.y, this.diameter - 3);
    this.update();
  }
}