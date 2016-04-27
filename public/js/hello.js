/*==============================
        Canvas
==============================*/
// Fireworks Taken from a tutorial
// Then customized ;)

// Request all animations frames for supported browsers
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();


var canvas = document.getElementById('canv'),
  ctx = canvas.getContext('2d'),
  cw = window.innerWidth,
  ch = window.innerHeight,
  fireworks = [],
  particles = [],
  hue = 175,
  limiterTotal = 5,
  limiterTick = 0,
  timerTotal = 80,
  timerTick = 0,
  mousedown = false,
  mx,
  my;

canvas.width = cw;
canvas.height = ch;

// Simple function that returns a random number
// Will come in use a lot
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Calculate the distance to a X and Y coordinate
function calculateDistance(d1x, d1y, d2x, d2y) {
  var xDistance = d1x - d2x,
    yDistance = d1y - d2y;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// Defining a firework
function Firework(sx, sy, tx, ty) {

  this.x = sx;
  this.y = sy;

  this.sx = sx;
  this.sy = sy;

  this.tx = tx;
  this.ty = ty;
  this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
  this.distanceTraveled = 0;
  this.coordinates = [];
  this.coordinateCount = 3;
  while (this.coordinateCount--) {
    this.coordinates.push([this.x, this.y]);
  }
  // Set angle for rocket
  this.angle = Math.atan2(ty - sy, tx - sx);
  // Set the speed
  this.speed = 1;
  // Set the acceleration (if it is less than 1, the rockets will not accelerate)
  this.acceleration = 1.07;
  this.brightness = random(50, 99);
  this.targetRadius = 1;
}

// Update the fireworks
Firework.prototype.update = function(index) {
  this.coordinates.pop();
  this.coordinates.unshift([this.x, this.y]);

  if (this.targetRadius < 8) {
    this.targetRadius += 0.3;
  } else {
    this.targetRadius = 1;
  }

  this.speed *= this.acceleration;

  var vx = Math.cos(this.angle) * this.speed,
    vy = Math.sin(this.angle) * this.speed;
  this.distanceTraveled = calculateDistance(this.sx, this.sy, this.x + vx, this.y + vy);


  if (this.distanceTraveled >= this.distanceToTarget) {
    createParticles(this.tx, this.ty);
    fireworks.splice(index, 1);
  } else {
    this.x += vx;
    this.y += vy;
  }
}


Firework.prototype.draw = function() {
  ctx.beginPath();
  ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
  ctx.lineTo(this.x, this.y);
  ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
  ctx.stroke();
}

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.coordinates = [];
  this.coordinateCount = 5;
  while (this.coordinateCount--) {
    this.coordinates.push([this.x, this.y]);
  }
  // Setting fade value (WIP for Flickering)
  this.fade     = Math.random() * 0.1;
  // Angle to random
  this.angle = random(0, Math.PI * 2);
  // Random speed, 1 is to slow :P
  this.speed = random(1, 17);
  this.friction = 0.95;
  // Set the gravity to get the fireworks to fade out...downwards
  this.gravity = 1;
  // The hue of the fireworks, these ones are filled with color!
  this.hue = random(hue - 500, hue + 500);
  // Set the brightness, the more bright, the more its closer to the color white
  this.brightness = random(50, 100);
  // Set the opacity
  this.alpha = 1;
  // Set the decay, to use later...
  this.decay = random(0.015, 0.03);
}

Particle.prototype.update = function(index) {
  this.coordinates.pop();
  this.coordinates.unshift([this.x, this.y]);
  this.speed *= this.friction;
  this.x += Math.cos(this.angle) * this.speed;
  this.y += Math.sin(this.angle) * this.speed + this.gravity;
  // Here is where the decay somes in...some of the particles will be see-through
  this.alpha -= this.decay;
  // this.alpha -= this.fade; <= Working on flicker effect (like real fireworks!)
  if (this.alpha <= this.decay) {
    particles.splice(index, 1);
  }
}


Particle.prototype.draw = function() {
  ctx.beginPath();

  ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
  ctx.lineTo(this.x, this.y);
  ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
  ctx.stroke();
}

// Creating the particles
function createParticles(x, y) {
  var particleCount = 47;
  while (particleCount--) {
    particles.push(new Particle(x, y));
  }
}


function loop() {
  requestAnimFrame(loop);

  hue += 0.5;

  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(0, 0, cw, ch);
  ctx.globalCompositeOperation = 'lighter';

  var i = fireworks.length;
  while (i--) {
    fireworks[i].draw();
    fireworks[i].update(i);
  }

  var i = particles.length;
  while (i--) {
    particles[i].draw();
    particles[i].update(i);
  }

  if (timerTick >= timerTotal) {
    if (!mousedown) {
      fireworks.push(new Firework(cw / 2, ch, random(0, cw), random(0, ch / 2)));
      timerTick = 0;
    }
  } else {
    timerTick++;
  }

  if (limiterTick >= limiterTotal) {
    if (mousedown) {
      fireworks.push(new Firework(cw / 2, ch, mx, my));
      limiterTick = 0;
    }
  } else {
    limiterTick++;
  }
}

document.addEventListener('mousemove', function(e) {
  mx = e.pageX - canvas.offsetLeft;
  my = e.pageY - canvas.offsetTop;
});

canvas.addEventListener('mousedown', function(e) {
  e.preventDefault();
  mousedown = true;
});

canvas.addEventListener('mouseup', function(e) {
  e.preventDefault();
  mousedown = false;
});

// Let's get started!
window.onload = loop;



  /*==============================
        Moon
==============================*/
var helloWorld = new Moon({
  el: "#helloWorld",
  type: "form",
  model: {
    name: "World"
  }
});




/*==============================
        Click Counter
==============================*/

var clicks = 0;
var click_count = $('#click_count')

$('#addClick').on("click", function() {
  clicks++
  if(clicks == 1) {
    click_count.html('You Clicked it ' + clicks + ' Time')
  } else {
    click_count.html('You Clicked it ' + clicks + ' Times')
  }
});


/*==============================
        Selection
==============================*/

var pick=~~(Math.random()*359),
    tag=document.createElement('style'),
    style='::-moz-selection {color:white;text-shadow:rgba(0,0,0,.1)1px 2px 2px;background-color:hsl($pick,75%,50%)!important}::-webkit-selection{color:white;text-shadow:rgba(0,0,0,.1)1px 2px 2px;background-color:hsl($pick,75%,50%)!important}::selection{color:white;text-shadow:rgba(0,0,0,.1)1px 2px 2px;background-color:hsl($pick,75%,50%)!important}';
  tag.innerHTML=style.replace(/\$pick/g,pick);
  document.body.appendChild(tag);


/*==============================
        Random Color
==============================*/


function randomColor() {
  return '#' + Math.random().toString(16).slice(2, 8)
}
var color = randomColor()

$('#newColor').on("click", function() {
  $('body').css('color', color)
  color = randomColor();
});



/*==============================
        Flying Letters
==============================*/
var grd,
    keys_down = [],
	  letters = [];

var symbols=[{k:81,s:"q",x:5},{k:87,s:"w",x:15},{k:69,s:"e",x:25},{k:82,s:"r",x:35},{k:84,s:"t",x:45},{k:89,s:"y",x:55},{k:85,s:"u",x:65},{k:73,s:"i",x:75},{k:79,s:"o",x:85},{k:80,s:"p",x:95},{k:65,s:"a",x:10},{k:83,s:"s",x:20},{k:68,s:"d",x:30},{k:70,s:"f",x:40},{k:71,s:"g",x:50},{k:72,s:"h",x:60},{k:74,s:"j",x:70},{k:75,s:"k",x:80},{k:76,s:"l",x:90},{k:90,s:"z",x:20},{k:88,s:"x",x:30},{k:67,s:"c",x:40},{k:86,s:"v",x:50},{k:66,s:"b",x:60},{k:78,s:"n",x:70},{k:77,s:"m",x:80},{k:48,s:"0",x:90},{k:49,s:"1",x:0},{k:50,s:"2",x:10},{k:51,s:"3",x:20},{k:52,s:"4",x:30},{k:53,s:"5",x:40},{k:54,s:"6",x:50},{k:55,s:"7",x:60},{k:56,s:"8",x:70},{k:57,s:"9",x:80}];

function Letter (key) {
	this.x = findX(key);
	this.symbol = findS(key);
	this.color = "rgba(255, 255, 255, "+Math.random()+")";
	this.size = Math.floor((Math.random() * 40) + 12);
	this.path = getRandomPath(this.x);
	this.rotate = Math.floor((Math.random() * Math.PI) + 1);
	this.percent = 0;
}

Letter.prototype.draw = function() {
	var percent= this.percent/100;
	var xy = getQuadraticBezierXYatPercent(this.path[0],this.path[1],this.path[2],percent);
	ctx.save();
	ctx.translate(xy.x, xy.y);
	ctx.rotate(this.rotate);
	ctx.font = this.size+"px Arial";
	ctx.fillStyle = this.color;
	ctx.fillText(this.symbol, -15, -15);
	ctx.restore();
};

Letter.prototype.drawPath = function(){
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo(this.path[0].x, this.path[0].y);
	ctx.quadraticCurveTo(this.path[1].x, this.path[1].y, this.path[2].x, this.path[2].y);
	ctx.stroke();
}

function findX(key){
	for (var i = 0; i < symbols.length; i++) {
		if(symbols[i].k == key){
			return (symbols[i].x * canvas.width / 100);
		}
	};
	return false;
}

function findS(key){
	for (var i = 0; i < symbols.length; i++) {
		if(symbols[i].k == key){
			return symbols[i].s;
		}
	};
	return false;
}

function getRandomPath(x){
	var x_start = x;
	var x_end = x_start + Math.floor((Math.random() * 400) - 199);

	return [{
		x: x_start,
		y: canvas.height
	},{
		x: (x_start + x_end)/2,
		y: Math.floor((Math.random() * canvas.height) - canvas.height)
	},{
		x: x_end,
		y: canvas.height
	}];
}

function drawBackground(){

}

function getLineXYatPercent(startPt,endPt,percent) {
	var dx = endPt.x-startPt.x;
	var dy = endPt.y-startPt.y;
	var X = startPt.x + dx*percent;
	var Y = startPt.y + dy*percent;
	return( {x:X,y:Y} );
}

function getQuadraticBezierXYatPercent(startPt,controlPt,endPt,percent) {
	var x = Math.pow(1-percent,2) * startPt.x + 2 * (1-percent) * percent * controlPt.x + Math.pow(percent,2) * endPt.x;
	var y = Math.pow(1-percent,2) * startPt.y + 2 * (1-percent) * percent * controlPt.y + Math.pow(percent,2) * endPt.y;
	return( {x:x,y:y} );
}

function getCubicBezierXYatPercent(startPt,controlPt1,controlPt2,endPt,percent){
	var x=CubicN(percent,startPt.x,controlPt1.x,controlPt2.x,endPt.x);
	var y=CubicN(percent,startPt.y,controlPt1.y,controlPt2.y,endPt.y);
	return({x:x,y:y});
}

function CubicN(pct, a,b,c,d) {
	var t2 = pct * pct;
	var t3 = t2 * pct;
	return a + (-a * 3 + pct * (3 * a - a * pct)) * pct
	+ (3 * b + pct * (-6 * b + b * 3 * pct)) * pct
	+ (c * 3 - c * 3 * pct) * t2
	+ d * t3;
}



function draw() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawBackground();

	for (var i = 0; i < letters.length; i++) {
		letters[i].percent += 1;
		letters[i].draw();
		// letters[i].drawPath();
		if(letters[i].percent > 100){
			letters.splice(i, 1);
		}
	};

	for (var i = 0; i < keys_down.length; i++) {
		if(keys_down[i]){
			letters.push(new Letter(i));
		}
	};
	requestAnimationFrame(draw);
}
var start_keys = [81,87,69,82,84,89,85,73,79,80];

function startAnimation(){
	setTimeout(function(){
		var key = start_keys.pop();
		keys_down[key] = true;
		setTimeout(function(){
			keys_down[key] = false;
		},180);
		if(start_keys.length > 0){
			startAnimation();
		}
	}, 180);
}
draw();


$('input').on("keyup", function(event){
	keys_down[event.keyCode] = false;
})

$('input').on("keydown", function(event) {
  if(event.keyCode == 91 && event.keyCode == 224){
    keys_down = [];
  }
	else if(event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 48 && event.keyCode <= 57){
		keys_down[event.keyCode] = true;
	}
});


/*==============================
        Unclickable
==============================*/
function randPos(num) {
  return Math.floor(Math.random() * num) + '%'
}

$('button').on("mouseover", function() {
  $('button').style.top = randPos(90)
  $('button').style.left = randPos(90)
});
