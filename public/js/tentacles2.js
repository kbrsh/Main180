window.onload = function() {
  var canvas = document.getElementById("canv");
  var ctx = canvas.getContext("2d");
    // Random Color Function
  function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }
  //Make the canvas occupy the full page
  var W = window.innerWidth,
    H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  var particles = [];
  var mouse = {};

  ctx.globalCompositeOperation = "source-over";
  //Painting the canvas black
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, W, H);
  ctx.globalCompositeOperation = "darker";

  //Lets create some particles now
  var particle_count = Math.floor(Math.random() * (50 - 25 + 1)) + 25;
var generate = function() {
  for (var i = 0; i < particle_count; i++) {
    particles.push(new particle());
  }
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
    this.velocity = {
      x: -2.5 + Math.random() * 5,
      y: -2.5 + Math.random() * 5
    };
    
    this.accel = {
      x: -3.5 + Math.random() * 7,
      y: -3.5 + Math.random() * 7
    };
    
    if (mouse.x && mouse.y) {
      this.location = {
        x: mouse.x,
        y: mouse.y
      };
    } else {
      this.location = {
        x: W / 2,
        y: H / 2
      };
    }
    this.radius = 2 + Math.random() * 5;

    this.color = randomColor()
  }

  function draw() {

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];

      p.velocity.x += (Math.random() - 0.5) / 2
      p.velocity.y += (Math.random() - 0.5) / 2
     
      
      p.radius += 0.01
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //lets move the particles
      p.location.x += p.velocity.x;
      p.location.y += p.velocity.y;
    }
  }
  generate();
  setInterval(draw, 33);
};
