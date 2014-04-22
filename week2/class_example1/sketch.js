var c, c1;
var myBall;
var mySuperBall;
var balls = [];

function setup(){
	createCanvas(600,400);

	c = new Car("Jack", 300, 1, 30);
	c1 = new Car("Hannah", 100, 3, 100);

	c1.turnRed = function(){
		this.gray = (255,0,0);
	}

	myBall = new Ball(100,200,0);
	mySuperBall = new SuperBall(100, 400, 0);

	// print mySuperBall.constructor == myBall.constructor <== useful way to access how js working behind scene

	for (var i = 0; i<10; i++){
		balls.push(new Ball(100+random(300), i**20, random(255)));
	}
}

function draw(){
	background(221, 111, 111);
	c.display(50);
	c.move();
	c1.display();
	c1.move();
	myBall.display();
	myBall.move();

	mySuperBall.display();
	mySuperBall.move();
	mySuperBall.change();

	for (var i=0; i<balls.length; i++){
		balls[i].display();
		balls[i].move();
	}
}

// constructor
function Car(name, y, sp, g) {
	this.xPosition = width/2;
	this.yPosition = y;
	this.nameh = name;
	this.ySpeed = sp;
	this.gray = g;
}

Car.prototype.display = function(val) {
	stroke(0);
	if (typeof val != 'undefined'){
		fill(val);
	} else {
		fill(255);
	}
	rect(this.xPosition, this.yPosition, 100, 50);
}

Car.prototype.move = function(){
	if (this.yPosition < height){
		this.yPosition+=this.ySpeed;
	} else {
		this.yPosition = -50;
	}
}

function keyPressed(){
	c1.turnRed();
}
