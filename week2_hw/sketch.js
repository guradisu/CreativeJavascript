var ballPositions = [[610, 129], [610, 73], [486, 363],
	[117, 459], [484, 726], [843, 306], [789, 615], [1049, 82],
	[1292, 428], [1117, 733], [1352, 86], [92, 798]];
var largeBall = new Ball(676,433,130)

var handle_len_rate = 100;
var balls = [];
var radius = 50;
var maxDistance = 300;

var linkDist;

function setup() {  
	createCanvas(1000, 1000);
	background(255);

    for (var i=0;i<ballPositions.length;i++){ 
    	balls.push(new
Ball(ballPositions[i][0],ballPositions[i][1],radius)); 
    } 
}

function draw() { 
	background(255);

	for (var i=0; i<balls.length;i++){
		linkDist = dist(largeBall.xPos, largeBall.yPos,balls[i].xPos,balls[i].yPos);
		if (linkDist < maxDistance){
			stroke(255,0,0);
			strokeWeight(2);
			line(largeBall.xPos, largeBall.yPos, balls[i].xPos, balls[i].yPos);
		}
		balls[i].display(linkDist);
	}
	largeBall.display();	
}

// weirdness
function mouseMoved(){
	largeBall.xPos = mouseX;
	largeBall.yPos = mouseY;
}

function stickyBall(ball1, ball2){
	var center1x = ball1.xPos;
	var center1y = ball1.yPos;
	var center2x = ball2.xPos;
	var center2y = ball2.yPos;
	var radius1 = ball1.radius;
	var radius2 = ball2.radius;
	var pi2 = Math.PI / 2;
	var d = dist(center1x, center1y, center2x, center2y);
	var u1, u2;

	if (radius1 == 0 || radius2 == 0)
		return;

	if (d > maxDistance || d <= Math.abs(radius1 - radius2)) {
		return;
	} else if (d < radius1 + radius2) { // case circles are overlapping
		u1 = Math.acos((radius1 * radius1 + d * d - radius2 * radius2) /
				(2 * radius1 * d));
		u2 = Math.acos((radius2 * radius2 + d * d - radius1 * radius1) /
				(2 * radius2 * d));
	} else {
		u1 = 0;
		u2 = 0;
	}
	
	//PROBLEMATIC
	var angle1 = (center2 - center1).getAngleInRadians();
	var angle2 = Math.acos((radius1 - radius2) / d);
	var angle1a = angle1 + u1 + (angle2 - u1) * v;
	var angle1b = angle1 - u1 - (angle2 - u1) * v;
	var angle2a = angle1 + Math.PI - u2 - (Math.PI - u2 - angle2) * v;
	var angle2b = angle1 - Math.PI + u2 + (Math.PI - u2 - angle2) * v;

	var p1a = center1 + getVector(angle1a, radius1);
	var p1b = center1 + getVector(angle1b, radius1);
	var p2a = center2 + getVector(angle2a, radius2);
	var p2b = center2 + getVector(angle2b, radius2);

	// define handle length by the distance between
	// both ends of the curve to draw
	var totalRadius = (radius1 + radius2);
	var d2 = Math.min(v * handle_len_rate, (p1a - p2a).length / totalRadius);

	// case circles are overlapping:
	d2 *= Math.min(1, d * 2 / (radius1 + radius2));

	radius1 *= d2;
	radius2 *= d2;
}

// STICKY BALL
function Ball(xPos, yPos, radius){
	//constructor
	this.xPos = xPos;
	this.yPos = yPos;
	this.radius = radius;
}

Ball.prototype.sticky = function(){
	//make balls stick
}

Ball.prototype.display = function(distance){
	//display function
	var color = map(distance,50,300,0,255);
	fill(color,0,0);
	noStroke();
	ellipse(this.xPos,this.yPos,this.radius,this.radius);
}

