var canvas = document.getElementById("canv")
var ctx = canvas.getContext("2d")
var H = window.innerHeight
var W = window.innerWidth
canvas.height = H
canvas.width = W
var alive = false
var mouse = {}

var randomColor = function() {
  return '#' + Math.random().toString(16).slice(2, 8)
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function track_mouse(e) {
  mouse.x = e.pageX;
  mouse.y = e.pageY;

  gen();
}
var count = 1
var shapes = []
var gen = function() {
  for (var i = 0; i < count; i++) {
    shapes.push(new Shape());
  }
}

function Shape() {
  this.color = randomColor();
  this.size = {
    w: getRandomInt(2, 4),
    h: getRandomInt(2, 4)
  }

  this.location = {
    x: mouse.x,
    y: mouse.y
  };

  this.speed = {
    x: -2.5 + Math.random() * 5,
    y: -2.5 + Math.random() * 5
  };
}

var draw = function() {
  ctx.globalCompositeOperation = "source-over";
  //Painting the canvas black
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, W, H);
  ctx.globalCompositeOperation = "lighter";
  for (var i = 0; i < shapes.length; i++) {
    var p = shapes[i];
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.rect(p.location.x, p.location.y, p.size.h, p.size.w, false);
    ctx.fill();
    ctx.stroke();

    if (alive) {
      //console.log("It's Alive!")

      p.location.x += p.speed.x
      p.location.y += p.speed.y

      p.speed.x += (Math.random() - 0.5) / 2
      p.speed.y += (Math.random() - 0.5) / 2
    }
  }
}

canvas.addEventListener("mousemove", track_mouse, false);
btn.addEventListener("mousedown", function() {
  alive = true;
}, false);
setInterval(draw, 33);
