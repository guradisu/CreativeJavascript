function SuperBall(x,y,gray){
	
	Ball.call(this, x, y, gray); // attach everything from ball constructor to this new SuperBall
	// x, y, gray
	this.xpos = x;
	this.ypos = y;
	this.gray = gray;
	this.xspeed = 1;
}

SuperBall.prototype = new Ball(); // the way to extend Ball to new superball class
SuperBall.prototype.constructor = SuperBall; // reset constructor to point to the correct function

SuperBall.prototype.change = function() {
	this.gray = sin(frameCount*0.1)*125+125;
}