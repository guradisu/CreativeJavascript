function Ball(x,y,gray) {
	this.xpos = x;
	this.ypos = y;
	this.gray = gray;
	this.xspeed = 1;
}

Ball.prototype.display = function() {
	ellipseMode(CENTER);
	noStroke();
	fill(this.gray);
	ellipse(this.xpos, this.ypos, 100, 100);
}

Ball.prototype.move = function() {
	this.xpos += this.xspeed;
}

