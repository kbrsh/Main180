function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};
// inspired by http://wonderfl.net/c/e27i
! function() {
	"use strict";
	function Circle (x, y) {
		this.px = x;
		this.py = y;
		this.vx = 0;
		this.vy = 0;
	}
	Circle.prototype.draw = function () {
		this.vx += (Math.random() - 0.5) / 2;
		this.vy += (Math.random() - 0.5) / 2;
		this.px += this.vx;
		this.py += this.vy;
		var dx = this.px - canvas.width  * 0.5;
		var dy = this.py - canvas.height * 0.5;
		var d  = Math.sqrt(dx * dx + dy * dy);
		var m = Math.min(canvas.width * 0.5, canvas.height * 0.5);
		var radius = (-d / m + 1) * m / 10;
		if (radius > 0) {
			requestAnimationFrame(this.draw.bind(this));
			ctx.beginPath();
			ctx.arc(this.px, this.py, radius, 0, 2 * Math.PI);
			ctx.fillStyle = randomColor();
			ctx.fill();
			ctx.strokeStyle = "#000";
			ctx.stroke();
		}
	}
	// set canvas
	var canvas  = document.getElementById("canvas");
	var ctx     = canvas.getContext("2d");
	function resize () {
		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
	}
	window.addEventListener('resize', resize, false);
	canvas.onselectstart = function() { return false; }
	canvas.ondragstart = function() { return false; }
	resize();
	// click event
	function click () {
		for (var i = 0; i < 10; i++) {
			var c = new Circle(canvas.width * 0.5, canvas.height * 0.5);
			c.draw();
		}
	}
	window.addEventListener("mousedown",  click, false );
	document.body.addEventListener("touchstart", click, false );
	// double-click
	click(); 
	click();
}();
