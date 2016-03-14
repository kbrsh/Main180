var headID = document.getElementsByTagName("head")[0];         
var cssNode = document.createElement('link');
var mousewidth = 15;
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'http://www.zhereicome.com/experiments/statics/mouser.css';
cssNode.media = 'screen';
headID.appendChild(cssNode);


var image = new Image();

image.onLoad = function() {


}

image.src="http://vignette4.wikia.nocookie.net/iwbtb/images/4/4c/Cursor.png/revision/latest?cb=20140813020030";

image.style.position = "absolute";
image.style.top = "0";
image.style.left = "0";
image.style.zIndex = "999999";


var body = document.getElementsByTagName("body")[0];

body.appendChild(image);

document.onmousemove = function(e) {
	image.style.top = e.clientY + (window.pageYOffset || document.documentElement.scrollTop) + "px";
	image.style.left = (e.clientX  + 2) + "px";
}

/*$(window).mousemove(function(e){
	px = e.clientX;
	py = e.clientY;
	
	$(image).css('top', py + $("body").scrollTop());
	$(image).css('left', px);
})*/

setInterval(function() {
  console.log(mousewidth);
  mousewidth += 1;
  image.style.width = Math.random() * 400 + "px"; 
}, 3000);
