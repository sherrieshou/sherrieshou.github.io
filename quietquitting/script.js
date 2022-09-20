

var x = [];
var y = [];
var w = 30;
var col = [];

function setup() {
    createCanvas(600, 858);
    for (var i = 0; i < 30; i++) {
        x[i] = w + i * w;
        y[i] = w + i * w;
    }

    ///////// assign a color for all 100 squares
    for (var i = 0; i < 300; i++) {
        col[i] = true;
    }
    
}

///////////// (j * 10 + i) = row number plus x position
function draw() {
  
   const columns = 7;
        const rows = 24;
        const cellWidth = width / columns;
        const cellHeight = height / rows;
   for (let c = 0; c < columns; c++) {
          for (let r = 0; r < rows; r++) {
            const x = c * cellWidth + cellWidth / 2;
            const y = r * cellHeight + cellHeight / 2;
          }}
  
    background(0);
    rectMode(CENTER);
    stroke(0);
    for (var j = 0; j < y.length; j++) {
        for (var i = 0; i < 10; i++) {
            if (col[j * 10 + i]) fill("white");
            else fill("pink");
            rect(x[i], y[j], w, w);
        }
    }
}

function mousePressed() {
    for (var j = 0; j < 100; j++) {
        for (var i = 0; i < 10; i++) {
            var dis = dist(mouseX, mouseY, x[i], y[j]);
            if(dis < w/2) col[j * 10 + i] =! col[j * 10 + i];
        }
    }
}