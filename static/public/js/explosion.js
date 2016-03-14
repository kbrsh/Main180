window.onload = function() {
  var canvas = document.getElementById("canv");
  var ctx = canvas.getContext("2d");
  // Random Color Function
  function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
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
  var particle_count = 300;
  for (var i = 0; i < particle_count; i++) {
    particles.push(new particle());
  }
  canvas.addEventListener('mousedown', track_mouse, false);
  canvas.addEventListener('touch', track_mouse, false);

  function track_mouse(e) {
    // Track the mouse, but
    // Since the canvas is taking
    // Up the FULL page, the mouse
    // coordinates relative to the document       // will suffice
    mouse.x = e.pageX;
    mouse.y = e.pageY;
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
        x: W / 2,
        y: H / 2
      };
    }
    //radius range = 10-30
    this.radius = 10 + Math.random() * 20;

  }

  function draw() {
    ctx.globalCompositeOperation = "source-over";
    //Painting the canvas black
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
      ctx.fill();
      ctx.stroke();

      //lets move the particles
      p.location.x += p.speed.x;
      p.location.y += p.speed.y;
      if (chance < 0.5) {
        if (p.location.x < -50) p.location.x = W + 50;
        if (p.location.y < -50) p.locationy = H + 50;
        if (p.location.x > W + 50) p.location.x = -50;
        if (p.location.y > H + 50) p.location.y = -50;
      }
    }
  }
  setInterval(draw, 10);
 
  $("body").on("click", function() {
    // color = randomColor();
    for (var i = 0; i < particle_count; i++) {
      particles.push(new particle());
    }
  });
};
