window.onload = function() {
  var canvas = document.getElementById("canv");
  var ctx = canvas.getContext("2d");
  // Random Color Function
  function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }
  function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
  var color = randomColor();
  //Make the canvas occupy the full page
  var W = window.innerWidth,
    H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  var chance = Math.random();
  var particles = [];
  var mouse = {};

  //Lets create some particles now
  var particle_count = 100;
  for (var i = 0; i < particle_count; i++) {
    particles.push(new particle());
  }
  canvas.addEventListener('mousedown', track_mouse, false);
  canvas.addEventListener('touch', track_mouse, false);

  function track_mouse(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;

    for (var i = 0; i < particle_count; i++) {
      particles.push(new particle());
    }
  }

  function particle() {
    //speed, life, location, life, colors
    //speed range = -2.5 to 2.5
    this.speed = {
      x: -2.5 + Math.random() * 5,
      y: -2.5 + Math.random() * 5
    };
    //location = center of the screen
    if (mouse.x && mouse.y) {
      this.location = {
        x: mouse.x,
        y: mouse.y
      };
    } else {
      this.location = {
        x: getRandomInt(W, -50),
        y: getRandomInt(H, -50) 
      };
    }
    //radius range = 10-30
    this.radius = 20 + Math.random() * 40;
    this.color = {
      c1: randomColor(),
      c2: randomColor()
    }
  }

  function draw() {
    //Painting the canvas black
    ctx.globalCompositeOperation = "source-over"
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, W, H);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      
      p.speed.x += getRandomInt(-0.001, 0.001)
      p.speed.y += getRandomInt(-0.001, 0.001)
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.beginPath();
      var gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
      gradient.addColorStop(0, p.color.c1);
      gradient.addColorStop(0.5, p.color.c2)
      gradient.addColorStop(1, 'rgba(250,76,43,0)');
      ctx.fillStyle = gradient;
      ctx.strokeStyle = gradient;
      ctx.arc(p.location.x, p.location.y, p.radius, 0, Math.PI * 2, false);
      ctx.fill()
      ctx.stroke();
      ctx.closePath();
      ctx.restore();

      //lets move the particles
      p.location.x += p.speed.x;
      p.location.y += p.speed.y;
    }
  }
  
  function spawn() {
    particles.push(new particle())
  }
  setInterval(spawn, 5000)
  setInterval(draw, 10);

};
