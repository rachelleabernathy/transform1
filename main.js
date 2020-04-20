var cwidth = 800
var cheight = 640
var row = 10

function setup() {
    createCanvas(cwidth, cheight);
    background('teal');
    for (x = 0; x <= width; x += row) {
      for (y = 0; y <= height; y += row) {
        stroke(x - 100);
        if ( y % 3 === 0) {
            fill('pink');
            triangle(150, 200, 400, 300, 400, 75);
        }
        else {
            fill('orange');
            triangle(75, 400, 300, 400, 200, 150);
            rotate(45);
        }
        if ( y % 5 === 0) {
            fill('magenta');
            rect(50, 50, 50, 50);
        }
        else {
            fill('green');
            rect(60, 60, 60, 60);
            rotate(45);
        }
        
      }
    }
  }