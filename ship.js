class Ship {
  constructor() {
    this.x = width / 2;
    this.size = 30
  }

  show() {
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, height - this.size, this.size, 2 * this.size);
  }

  move(amount) {
    this.x += amount;
  }
}
