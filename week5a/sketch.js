

//declare pin
var gridSize = 20;
var happiness = 255;
var pinSize = 14;
var num = 500/gridSize;
var pins = createArray(num,num);

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function setup() {
  createCanvas(500,500);
  smooth();
  print(pins.length);
  for (var i=0; i < pins.length; i++)  {
    for (var j=0; j < pins.length; j++) {
      pins[i][j] = new Pin(i*gridSize, j*gridSize);
    }
  }
}

function draw() {
  background(happiness-10,happiness-10,happiness-10);
  for (var i=0; i < pins.length; i++) {
    for (var j=0; j < pins.length; j++) {
      pins[i][j].update();
      pins[i][j].display();
    }
  }
}

function Pin(x,y) {
    this.pinX = x;
    this.pinY = y;
    this.dist = 99999.0;
};

Pin.prototype.update = function() {
  dist = sqrt(sq(this.pinX - mouseX) + sq(this.pinY - mouseY));
};

Pin.prototype.display = function() {
    var theta = PI/2*exp(-0.08*dist);
    stroke(dist*7,dist*3,dist*4);
    line(this.pinX+sin(theta)*pinSize/2, this.pinY+(1-cos(theta))*pinSize/2, 
        this.pinX-sin(theta)*pinSize/2, this.pinY+(1+cos(theta))*pinSize/2);    
};
