const padding = 50;
const maxHealth = 100;
let health = 100;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  drawHealthBar();
  drawLabel();
  drawHeartEmoji();
}

// MARK: Drawing Functions

function drawHealthBar() {
  // Fill
  noStroke();
  if (health > 70) {
    fill("green");
  } else if (health > 30) {
    fill("yellow");
  } else {
    fill("red");
  }

  const healthRatio = health / maxHealth;
  rect(
    padding,
    height / 4,
    (width - padding * 2) * healthRatio,
    height / 2,
    10
  );

  // Border/background
  stroke("black");
  strokeWeight(5);
  noFill();
  rect(padding, height / 4, width - padding * 2, height / 2, 10);
}

function drawLabel() {
  if ((health <= 70 && health > 30) || health == 0) {
    fill("black");
  } else {
    fill("white");
  }

  noStroke();
  textSize(20);
  textAlign(LEFT, TOP);
  text("HEALTH", padding + 8, height / 4 + 8);
}

function drawHeartEmoji() {
  textSize(100);
  textAlign(CENTER, CENTER);
  text("❤️", padding, height / 2);
}

// MARK: Event Functions

function mouseClicked() {
  // if (mouseButton == LEFT) {
    if (health > 0) {
      health -= 10;
    } else {
      health = 100;
    }
  // } else if (mouseButton == RIGHT && health < 100) {
  //   health += 10;
  // }
}

function keyPressed() {
  if (key == 'h' && health < 100) {
    health += 10;
  }
}

// function doubleClicked() {
//   if (health < 100) {
//     health += 10;
//   }
// }
