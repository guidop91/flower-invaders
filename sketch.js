let ship;
let drops = [];
let flowers = [];
let flowerCornered = false;

/**
 * First function called by p5js library
 * @returns undefined
 */
function setup() {
  createCanvas(800, 600);
  ship = new Ship();

  // Create flowers
  const n = 5;
  for (let i = 0; i < n; i++) {
    const xPos = (width * (2 * (i + 1) - 1)) / (2 * n);
    flowers[i] = new Flower(xPos, 40);
  }
}

/**
 * Continually called by p5js library
 * @returns undefined
 */
function draw() {
  background(51);
  ship.show();
  shipMovement();
  flowerExplosion();
  flowers.forEach(flower => flower.show());
  checkCornered();
  if (flowerCornered) {
    flowersAdvance();
  }
  dropDisappear();
  drops.forEach(drop => {
    drop.show();
    drop.move();
    flowers.forEach(flower => drop.collision(flower));
  });
}

/**
 * Controls for the movement of the ship
 * @returns undefined
 */
function shipMovement() {
  if (keyIsDown(RIGHT_ARROW) && ship.x < width - ship.size/2) {
    ship.move(5);
  } 
  if (keyIsDown(LEFT_ARROW) && ship.x > ship.size/2) {
    ship.move(-5);
  }
}

/**
 * Controls cannon if ship for firing water drops
 * @returns undefined
 */
function keyPressed() {
  if (keyCode === 32) {
    drops.push(new Drop(ship.x, height - 60))
  }
}

/**
 * Checks if any flower in array is at a corner
 * @returns undefined
 */
function checkCornered() {
  flowers.forEach(flower => {
    if (
      flower.x > width - flower.diameter
      || flower.x < flower.diameter
    ) {
      flowerCornered = true;
    }
  })
}

/**
 * Executes the movement of the flowers when they are cornered
 * @returns undefined
 */
function flowersAdvance() {
  flowers.forEach((flower) => {
    flower.speedX = -flower.speedX;
    flower.y += flower.diameter/2;
  });
  flowerCornered = false;
}

/**
 * Makes flower disappear when it reaches certain size
 * @returns undefined
 */
function flowerExplosion() {
  for (let i = flowers.length; i >= 0; i--) {
    if (flowers[i] && flowers[i].diameter > 30) {
      flowers.splice(i, 1);
      flowers.forEach(flower => flower.speedX *= 1.1);
    }
  }
}

/**
 * Makes drop disappear as it collides with flowers
 * @returns undefined
 */
function dropDisappear() {
  for (let i = drops.length; i > 0; i--) {
    if (drops[i] && drops[i].collided) {
      drops.splice(i, 1);
    }
  }
}