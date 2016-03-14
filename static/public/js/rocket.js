var point;

var width = window.innerWidth;
var height = window.innerHeight;

var canvas = document.getElementById('canv');
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext('2d');

var mouse = {};

mouse.x = width / 2;
mouse.y = height / 2;

function pointInCircle(x, y, cx, cy, radius) {
  var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
  return distancesquared <= radius * radius;
}

function Point(x, y, width, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.color = color;
  this.speedY = 0; 
  this.speedX = 0;
  this.friction = 0.95;

  this.physx = function () {
    this.speedX *= this.friction;
    this.speedY *= this.friction;
    
    this.y += this.speedY;
    this.x += this.speedX;

    this.bounceX();
    this.bounceY();
  };
  
  this.bounceX = function() { 
    if (this.x + this.width / 2 > canvas.width) this.x = canvas.width - this.width / 2;
    else if (this.x - this.width / 2 < 0) this.x = 0 + this.width / 2;
    else return;
    
    this.speedX = - this.speedX;
  };
  
  this.bounceY = function() {
    if (this.y + this.width / 2 > canvas.height) this.y = canvas.height - this.width / 2;
    else if (this.y - this.width / 2 < 0) this.y = 0 + this.width / 2;
    else return;
    
    this.speedY = - this.speedY;
  };

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2, true);
    ctx.fillStyle = this.color;
    ctx.lineWidth = this.width;

    ctx.fill();
  };
  
  this.pull = function(mouse) {
    if (!pointInCircle(this.x, this.y, mouse.originalEvent.x, mouse.originalEvent.y, this.width)) {
      return;
    }
    
    this.pulling = true;
    this.pullStart = mouse.originalEvent;
  };
  
  this.mouseMove = function(mouse) {
    if (!this.pulling) {
      return;
    }
    
    this.x = mouse.originalEvent.x + (this.pullStart.x - mouse.originalEvent.x) * 0.8;
    this.y = mouse.originalEvent.y + (this.pullStart.y - mouse.originalEvent.y) * 0.8;
  };
    
  this.release = function(mouse) {
    if (!this.pulling) {
      return;
    }
    
    this.pulling = false;
    this.pullEnd = mouse.originalEvent;
    
    this.throw();
  }
  
  this.throw = function() {
    this.speedX = (this.pullStart.x - this.pullEnd.x) * 0.2;
    this.speedY = (this.pullStart.y - this.pullEnd.y) * 0.2;
  }
};

function draw() {
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "lighter";

  point.draw();
  point.physx();
 
  // Start again
  requestAnimationFrame(draw);
}

point = new Point(width / 2, height / 2, 20, 'yellow');

draw();

$(document).mousemove(function (e) {
  mouse.x = e.pageX;
  mouse.y = e.pageY;
  
  point.mouseMove(e);
});

$(document).mousedown(point.pull.bind(point));
$(document).mouseup(point.release.bind(point));