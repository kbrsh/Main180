window.onload = function() {
  var canvas = document.getElementById("canv");
  var ctx = canvas.getContext("2d");
  var mouseRadius = 10
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
  var mouseC = {};
  //Lets create some particles now
  var particle_count = 1;
  for (var i = 0; i < particle_count; i++) {
    particles.push(new particle());
  }
  canvas.addEventListener('mousedown', track_mouse, false);
  canvas.addEventListener('mousemove', mouset, false);
  canvas.addEventListener('touch', track_mouse, false);

  function track_mouse(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;

    for (var i = 0; i < particle_count; i++) {
      particles.push(new particle());
    }
  }

  function mouset(e) {
    mouseC.x = e.pageX;
    mouseC.y = e.pageY;

    mouseCircle();
  }

  function particle() {
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
        x: W / 2,
        y: H / 2
      };
    }
    //radius range = 10-30
    this.radius = 10 + Math.random() * 20;

    this.color = randomColor()

    this.gravity = 1

  }

  function draw() {
    ctx.globalCompositeOperation = "source-over";
    //Painting the canvas black
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";

    ctx.beginPath();
    ctx.arc(mouseC.x, mouseC.y, mouseRadius, 0, 2 * Math.PI, true);
    ctx.fillStyle = "#FF6A6A";
    ctx.fill();
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
      ctx.fill();
      ctx.stroke();

      //lets move the particles
      p.location.x += p.speed.x;
      p.location.y += p.speed.y;
      if (p.location.x <= p.radius / 2 || p.location.x >= W - p.radius / 2 || mouseC.x >= p.location.x) {
        p.speed.x *= -1;
      }

      if (p.location.y <= p.radius / 2 || p.location.y >= H - p.radius / 2 || mouseC.y >= p.location.y) {
        p.speed.y *= -1;
      }
    }
  }
  setInterval(draw, 10);
};
