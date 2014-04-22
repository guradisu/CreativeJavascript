// first sketch
// creating template, using template to create running instance
var mySketch = function( sketch ) {
	// anything built into p5 and not defined by you 
	var diameter = 50;
	var gray = 5;

	sketch.setup = function(){
		var cnv = sketch.createCanvas(600,400);
		cnv.position(0,0);
	}

	sketch.draw = function(){
		sketch.fill(gray);
		sketch.strokeWeight(10);
		sketch.background(200,40,100);
		sketch.ellipse(width/2, height/2, diameter, diameter);
	}

	sketch.mousePressed = function(){
		gray += 10;
		incStroke();
	}
}

window.onLoad = function(){
	var myp5 = new p5( mySketch );
	var elt = document.findElementById("section0");
}
