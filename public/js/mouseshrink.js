// Declare some variables
var loopId, canvas, ctx, amountX, amountY, mousePos;

// Set the color to a random color
var color = randomColor()

// Make the circle size a random Integer
// From the getRandomInt() Function in the Utilities Below
var circleSize = getRandomInt(20, 50);

// Initialize on the ready
$(document).ready(function() {  
	init();
});

function init(){
    //Get canvas & context
	canvas = document.getElementById("myCanvas");
	canvas.width = $( window ).width();
    canvas.height = $( window ).height();
    ctx = canvas.getContext("2d");
    //initialise animation & variables
    amountX = Math.round(canvas.width / circleSize);
    amountY = Math.round(canvas.height / circleSize); 
    startAnimation();

    canvas.addEventListener('mousemove', function (evt) {
        mousePos = getMousePos(canvas, evt);
    }, false);

    canvas.addEventListener('mouseout', function (evt) {
        mousePos = undefined;
    }, false);

}

 function animationLoop(timeStamp) {
    // 1 - Clear & resize
	canvas.width = $( window ).width();
	canvas.height = $( window ).height();
    amountX = Math.round(canvas.width / circleSize);
    amountY = Math.round(canvas.height / circleSize);
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// 2 Draw
	drawScene();
	// 3 Move
	update();
	// call again mainloop after 16.6ms 
	//(corresponds to 60 frames/second)
	id = requestAnimationFrame(animationLoop);
 }
    
function startAnimation(){
	loopId = requestAnimationFrame(animationLoop);
}

 function stopAnimation() {
   if (loopId) {
      cancelAnimationFrame(loopId);
   }
 }
   
function drawScene(){
	drawBackground();
}

function update(){
	//Nothing to update at the moment
}


function drawBackground(){
	for(var i=0;i<=amountX;i++){
		for(var j=0;j<=amountY;j++){
			drawCircle(i * circleSize, j * circleSize);
		}
	}
}

function drawCircle(posX, posY){
 	var size = calculateSize(posX, posY);
	ctx.save();

	ctx.translate(posX, posY);
	ctx.beginPath();
	ctx.arc(0, 0, size / 2, 0, 2*Math.PI, false);
	ctx.closePath();
	ctx.lineWidth = size / 10;
	ctx.fillStyle = color;
	ctx.fill();

	ctx.restore();
}

function calculateSize(posX, posY){
	var size = circleSize;
	if(mousePos){
		var distance = Math.sqrt(Math.pow(((posX-mousePos.x)),2) + Math.pow(((posY-mousePos.y)),2));
		if( distance < circleSize * 4){
			size = circleSize * (distance / (circleSize * 4) );
		}
	}
	return size;
}

function getMousePos(canvas, evt) {
   // necessary to take into account CSS boudaries
   var rect = canvas.getBoundingClientRect();
   return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
  }
}
/* ===============
   Utilities
=============== */
// Just to make a random color
function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};
// Make a random Integer function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
