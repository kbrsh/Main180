var canvas = document.getElementById("canv"),
    ctx = canvas.getContext("2d"),
    W = canvas.width = window.innerWidth,
    H = canvas.height = window.innerHeight,
    mouse = {},
    field = [],
    count = 30

function randomColor() {
  return (Math.floor(Math.random() * 256))
}

function randomInt(min, max) {
  return Math.random() * (max - min) + min;
}

function gen() {
  for(var i = 0; i < count; i++) {
    field.push(new grass());
  }
}

function track(e) {
  mouse.x = e.pageX
  mouse.y = e.pageY
  gen();
}

function grass() {
  this.location = {
    x: randomInt(0, W),
    y: randomInt(0, H)
  }
  
  this.size = {
    h: randomInt(5, 10),
    w: randomInt(0.5, 0.75)
  }
  
  this.speed = {
    x: randomInt(-2.5, 2.5),
    y: randomInt(-2.5, 2.5)
  }
  
  this.r = randomColor()
  this.g = randomColor()
  this.b = randomColor()
  this.a = 1
}

function draw() {
  ctx.globalCompositeOperation = "source-over"
  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, W, H)
  ctx.globalCompositeOperation = "lighter"
  
  for(var i=0; i < field.length; i++) {
    var p = field[i]
    
    ctx.beginPath();
    ctx.fillStyle = 'rgba(' + p.r + ',' + p.g + ',' + p.b + ',' + p.a + ')'
    ctx.fillRect(p.location.x, p.location.y, p.size.w, p.size.h)
    
    //p.location.y += p.speed.y
    if(p.size.h < 7) {
      p.size.h -= 0.7
      p.location.x += p.speed.x
    } else {
      p.location.x += p.speed.x
      p.location.y += p.speed.y
      p.a -= 0.01
    }
    
  }
}

canvas.addEventListener("mousemove", track)

setInterval(draw, 33)
