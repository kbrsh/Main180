var H = window.innerHeight
var W = window.innerWidth

var canvas = document.getElementById("canv")

canvas.width = W
canvas.height = H

// The starting position of the line
var position = new Point(100, 100);

// The amount we will move when one of the keys is pressed:
var step = 10;

var path = new Path();
path.strokeColor = 'black';
path.add(position);

function onKeyDown(event) {
	if(event.key == 'a') {
		position.x -= step;
	}

	if(event.key == 'd') {
		position.x += step;
	}

	if(event.key == 'w') {
		position.y -= step;
	}

	if(event.key == 's') {
		position.y += step;
	}
	path.add(position);
}
