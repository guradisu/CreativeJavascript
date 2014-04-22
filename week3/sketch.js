var cnv;
var elt;
function setup(){
	cnv = createCanvas(600,400);
	cnv.position(50,100);

	elt = createHTML('<p>This is the <span class="fluffy"> body.</p>');
	elt.position(25,25);
	elt.style 
	noStroke();

	htmlImg = createHTMLImage("http://www.digitaltrends.com/wp-compenent;")
	htmlImg.size(250,AUTO);
	htmlImg.position(500,300);
}

function draw(){
	background(255,0,0);
	ellipse(width/2, height/2, 100,100);
}