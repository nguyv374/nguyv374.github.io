function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(200);
  g = random(200);
  b = random(200);
}

function draw() {
  ellipse(mouseX, mouseY, 50, 50);
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b,127);
  ellipse(windowWidth/2, windowHeight/2, 200, 200);
}

function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}


function mousePressed() {
  let d = dist(mouseX, mouseY, windowWidth/2, windowHeight/2);
  if (d < 100) {
    r = random(200);
    g = random(200);
    b = random(200);
  }
}