function setup() {
  createCanvas(windowWidth, 100);
}

function draw() {
  var col =  map(mouseX, 0, 800, 0, 255);
  background(col);
  fill("lightpink");
  ellipse(mouseX, 50, 20, 20);
}