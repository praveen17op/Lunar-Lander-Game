function rocket(x, y, s, thrustOn) {
  push();
  fill(230, 230, 230);
  rect(0, (6.5 * height) / 8, width, (1.5 * height) / 8);
  pop();
  //background(255, 255, 255);
  translate(x, y);
  // rotate(rotation);
  noStroke();
  scale(s);
  if (thrustOn) {
    //fire
    beginShape();
    fill(247, 215, 75);
    vertex(-7, 53);
    bezierVertex(-11, 61, -5, 70, 0, 72);
    vertex(0, 72);
    bezierVertex(1, 68, 5, 68, 4, 68);
    vertex(6, 72);
    bezierVertex(10, 64, 14, 64, 7, 53);
    endShape();

    beginShape();
    fill(250, 240, 179);
    vertex(-3, 53);
    bezierVertex(-7, 61, -1, 70, 0, 68);
    vertex(0, 68);
    bezierVertex(-3, 64, 1, 64, 0, 64);
    vertex(2, 68);
    bezierVertex(6, 60, 10, 60, 3, 53);
    endShape();
  }

  beginShape(TESS);
  fill(160, 36, 34);
  vertex(-20, 15);
  vertex(-35, 25);
  vertex(-37, 47);
  vertex(-35, 49);
  vertex(-30, 40);
  vertex(-14, 31);
  endShape(CLOSE);

  beginShape(TESS);
  fill(160, 36, 34);
  vertex(20, 15);
  vertex(35, 25);
  vertex(37, 47);
  vertex(35, 49);
  vertex(30, 40);
  vertex(14, 31);
  endShape(CLOSE);

  push();
  fill(133, 133, 133);
  rect(-10, 30, 20, 25, 8);
  pop();

  fill(142, 175, 192);
  rect(-20, -40, 40, 90, 80);
  fill(222, 226, 228);
  ellipse(0, 0, 20);
  fill(64, 84, 95);
  ellipse(0, 0, 15);

  beginShape();
  fill(223, 58, 36);
  vertex(-20, -25);
  bezierVertex(-5, -75, 5, -75, 20, -25);
  endShape();

  beginShape();
  fill(223, 58, 36);
  vertex(-20, -25);
  bezierVertex(-7.5, -13, 7.5, -13, 20, -25);
  endShape();

  beginShape();
  fill(104, 150, 164);
  vertex(-20, 20);
  bezierVertex(-7.5, 35, 7.5, 35, 20, 20);
  endShape();

  beginShape();
  fill(142, 175, 192);
  vertex(-20, 15);
  bezierVertex(-7.5, 30, 7.5, 30, 20, 15);
  endShape();
}

function startScreen() {
  background(94, 92, 95);
  textSize(50);
  //textAlign(CENTER);
  strokeWeight(3);
  stroke(55, 255, 55);
  fill(0, 0, 0);
  text("Lunar Lander", width / 3, height / 3);
  textSize(25);
  noStroke();
  fill(250, 150, 150);
  text("Click to Start", width / 2.3, height / 2);
}

function gameScreen() {
  res = "resultlose";
  flag = 0;
  if (y < (6.5 * height) / 8 - 45) {
    y = y + 7;
    clear();
  }
  if (y > (5 * height) / 8 - 45 && keyIsDown(40)) {
    //console.log("win");
    res = "resultwin";
  } else {
    res = "resultlose";
  }

  if (flag === 1) {
    res = "resultwin";
  }
  if (y > (6.5 * height) / 8 - 45) {
    state = res;
  }
  /*
  x = x + Math.cos(rotation) * 5;
  y = y + Math.sin(rotation) * 5;
*/
  if (keyIsDown(40)) {
    thrustOn = true;
    y = y - 5;
    clear();
  }
  thrustOn = false;
  /*
  if (keyIsDown(37)) {
    rotation = rotation - 0.1;
  } else if (keyIsDown(39)) {
    rotation = rotation + 0.1;
  }
*/
  rocket(x, y, 0.8, keyIsDown(40));
}

function resultScreenWin() {
  background(44, 42, 45);
  textSize(50);
  //textAlign(CENTER);
  strokeWeight(3);
  stroke(55, 255, 55);
  fill(55, 255, 55);
  text("YOU WIN", width / 3, height / 3);
  textSize(25);
  noStroke();
  fill(250, 150, 150);
  text("Click to Restart", width / 2.3, height / 2);
}

function resultScreenLost() {
  background(44, 42, 45);
  textSize(50);
  //textAlign(CENTER);
  strokeWeight(3);
  stroke(255, 55, 55);
  fill(255, 55, 55);
  text("YOU CRASHED", width / 3, height / 3);
  textSize(25);
  noStroke();
  fill(250, 150, 150);
  text("Click to Restart", width / 2.3, height / 2);
}

let x = width / 2,
  y = height / 4;

let rotation = 0;

let state = "start";

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "resultwin") {
    resultScreenWin();
  } else if (state === "resultlose") {
    resultScreenLost();
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "game") {
    state = res;
  } else if (state === "resultwin" || state === "resultlose") {
    y = height / 4;
    state = "game";
  }
}
