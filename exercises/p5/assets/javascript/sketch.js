function setup() {
  createCanvas(windowWidth, windowHeight);
  c1 = color(255, 204, 0);
  c2 = color(255);
  setGradient(c1, c2);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  ellipse(mouseX, mouseY, 50, 50);
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
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


// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}