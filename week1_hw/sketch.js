function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

static final int gridSize = 20;
var num = 500/gridSize;
var pins = createArray(num,num);

function setup() {
  createCanvas(500,500);
  smooth();
  for (i=0; i < pins.length; i++)  {
    for (j=0; j < pins.length; j++) {
      pins[i][j] = new Pin(i*gridSize, j*gridSize);
    }
  }
}

function draw() {
  background(255);
  for (i=0; i < pins.length; i++) {
    for (j=0; j < pins.length; j++) {
      pins[i][j].update();
      pins[i][j].display();
    }
  }
}

function Pin (x,y) {
    this.pinX = x;
    this.pinY = y;
    this.dist = 99999.0;
}
  
Pin.prototype.update = function() {
    this.dist = sqrt(sq(this.pinX - mouseX) + sq(this.pinY - mouseY));
}

Pin.prototype.display = function()) {
    var theta = PI/2*exp(-0.08*dist);
    stroke(255);
    line(this.pinX+sin(theta)*pinSize/2, this.pinY+(1-cos(theta))*pinSize/2, 
        this.pinX-sin(theta)*pinSize/2, this.pinY+(1+cos(theta))*pinSize/2);    
  }
}
