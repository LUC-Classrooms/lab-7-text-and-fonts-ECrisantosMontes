/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Lucida Calligraphy");
}

function draw() {
  background(4);
  stroke(255, 100, 200);
  fill(255, 100, 200);
  textSize(16);
  text("Mew Meow...", 20, 60);
  textSize(32);
  text("Meow Mew <3", 20, 160);

  if(mouseIsPressed) {
  push()
  background(4)
  textSize(32);
  text("Meow Mew...", 20, 60); 
  textSize(16);
  text("Mew Meow<3", 20, 160)
  }
  pop()

}
