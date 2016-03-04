window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  //Make the canvas occupy the full page
  var W = window.innerWidth,
    H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  var particles = [];
  var mouse = {};

  // Create the particles now!
  var particle_count = 100;
  for (var i = 0; i < particle_count; i++) {
    particles.push(new particle());
  }

  // Add the mouse tracking feature
  canvas.addEventListener('mousemove', track_mouse, false);

  function track_mouse(e) {
    // Track the mouse, but
    // Since the canvas is taking
    // Up the FULL page, the mouse
    // coordinates relative to the document       // will suffice
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  }

  function particle() {
    this.speed = {
      x: -2.5 + Math.random() * 5,
      y: -15 + Math.random() * 10
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
    //radius range = 10-30
    this.radius = 10 + Math.random() * 20;
    //life range = 20-30
    this.life = 20 + Math.random() * 10;
    this.remaining_life = this.life;
    //colors
    this.r = Math.round(Math.random() * 255);
    this.g = Math.round(Math.random() * 255);
    this.b = Math.round(Math.random() * 255);
  }

  function draw() {
    // How does the lighting work?
    // The particles are painted with "lighter"
    // In the next frame the background is painted normally without blending to the 
    //previous frame
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      ctx.beginPath();
      // We will be changing
      // Opacity of a particle
      // According to its life
      // Opacity will be 0 at its death
      p.opacity = Math.round(p.remaining_life / p.life * 100) / 100
        // Make it a gradient instead 
        // of it being default
        // White
      var gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
      gradient.addColorStop(0, "rgba(" + p.r + ", " + p.g + ", " + p.b + ", " + p.opacity + ")");
      gradient.addColorStop(0.5, "rgba(" + p.r + ", " + p.g + ", " + p.b + ", " + p.opacity + ")");
      gradient.addColorStop(1, "rgba(" + p.r + ", " + p.g + ", " + p.b + ", 0)");
      ctx.fillStyle = gradient;
      ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
      ctx.fill();

      // Now to add the velocity
      // And speed
      p.remaining_life--;
      p.radius--;
      p.location.x += p.speed.x;
      p.location.y += p.speed.y;

      // The particles will die off 
      // Eventually, so they need
      // To regenerate according
      // To life
      if (p.remaining_life < 0 || p.radius < 0) {
        // This makes a shiny new particle
        // In place of the dead one
        particles[i] = new particle();
      }
    }
  }
  // Draw it!
  setInterval(draw, 33);
}
