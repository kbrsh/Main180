window.onload = function() {
	/* make w and h be the global variable */
	w = window.innerWidth,
		h = window.innerHeight;

	var canvas = document.getElementById('canvas');
	canvas.width = w,
		canvas.height = h;

	var c = canvas.getContext("2d");
	canvas.width = w,
		canvas.height = h;

	/* shows go on */
	var init = [];
	var lineNumber = 1000,
		rainSpeed = 30,
		checkMouse = false,
		mouseCoordinate = [w / 2, h / 2],
		mouseMoveLineWidth = 5,
		mouseMoveColor = null,
		range = 30;

	/* the lineCap won't change, so we put it here. */
	c.lineCap = 'round';

	var LineObject = function() {
		/* coordinate */
		this.x = random(w);
		this.y = random(h);
		this.ox = null;
		this.oy = null;

		/* length */
		this.l = random(1);
		this.ol = null;

		/* color */
		this.color = "#BDBADD";
		this.oc = null;

		/* width */
		this.lineWidth = random(2);
		this.olw = null;

		/* vector */
		this.vectorX = -4 + random(4) + 2;
		this.vectorY = random(10) + 10;
		this.ovx = null;
		this.ovy = null;

		this.saveOriginCoordinate();
	}

	LineObject.prototype.saveOriginCoordinate = function() {
		/* let each Line know where it comes from */
		this.ox = this.x;
		this.oy = this.y;
		this.ovx = this.vectorX;
		this.ovy = this.vectorY;
		this.olw = this.lineWidth;
		this.oc = this.color;
		this.ol = this.l;
	};

	/* start create each object */
	for (var i = 0; i < lineNumber; i++) {
		init.push(new LineObject());
	};

	/* actually I don't know why original creator 
		write this for-loop to create another array which is totally the same. */
	var particles = [];
	for (var i = 0; i < lineNumber; i++) {
		particles[i] = init[i];
	};


	function move() {
		for (var i = 0; i < lineNumber; i++) {
			var p = particles[i];

			/* check if the mouse hover or not */
			if (!checkMouse) {
				if (p.x > w || p.y > h) {
					p.x = random(w);
					p.y = -20;
				} else {
					p.vectorX = p.ovx;
					p.vectorY = p.ovy;
					p.lineWidth = p.olw;
					p.color = p.oc;
					p.l = p.ol;
					p.x += p.vectorX;
					p.y += p.vectorY;
				}
			} else {
				/* if mouse hover, make line fly to mouse */

				/* set new lineWidth */
				p.lineWidth = random(mouseMoveLineWidth);

				/* check if user define color, if not, make it colorful! */
				if (!mouseMoveColor) {
					p.color = "rgb(" + Math.ceil(random(255)) + "," + Math.ceil(random(255)) + "," + Math.ceil(random(255)) + ")";
				}else{
					p.color = mouseMoveColor;
				}

				/* check distance between mouse and line, if less than range, give it a random coordinate. */
				if (Math.pow(Math.abs(mouseCoordinate[0] - p.x), 2) + Math.pow(Math.abs(mouseCoordinate[1] - p.y), 2) < Math.pow(range, 2)) {
					p.x = random(w);
					p.y = random(h);
				} else {

					/* define new vector to each line, and to avoid the crazy moving style, make it lesser */
					p.vectorX = 0.05 * (mouseCoordinate[0] - p.x);
					p.vectorY = 0.05 * (mouseCoordinate[1] - p.y);
					p.x += p.vectorX;
					p.y += p.vectorY;
				}
			}
		};
	}

	setInterval(function() {
		c.clearRect(0, 0, w, h);

		for (var i = 0; i < particles.length; i++) {
			var p = particles[i];
			c.beginPath();
			c.moveTo(p.x, p.y);
			c.lineTo(p.x + p.l * p.vectorX, p.y + p.l * p.vectorY);
			c.strokeStyle = p.color;
			c.lineWidth = p.lineWidth;
			c.stroke();

		};

		move();

	}, rainSpeed);

	document.getElementsByClassName("note")[0].onmousemove = function(e) {
		checkMouse = true;
		mouseCoordinate = [e.clientX, e.clientY];
	}
	document.getElementsByClassName("note")[0].onmouseout = function() {
		checkMouse = false;
	}

}

/* simple random function */
var random = function() {
	tempI = arguments[0];
	return Math.random() * tempI;
}
