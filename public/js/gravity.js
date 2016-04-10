window.onload = function() {
  var canvas = document.getElementById("canv");
  var ctx = canvas.getContext("2d");
  // Random Color Function
  function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //Make the canvas occupy the full page
  var W = window.innerWidth,
    H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  var particles = [];
  var bounce = randomInt(-2, -2.5),
      mouse = {};
  //create some circles
  var particle_count = 1;
  var click_count = 1;

 
  function spawn() {
    for (var i = 0; i < particle_count; i++) {
      particles.push(new particle());
    }
  }

  function click_gen() {
    for (var i = 0; i < click_count; i++) {
      particles.push(new particle());
    }
  }
  
  function track(e) {
    mouse.x = e.pageX
    mouse.y = e.pageY
    click_gen();
    bounce--
  }
  canvas.addEventListener('mousedown', track);
  canvas.addEventListener('touch', track);

  function particle() {
    // Making a random Width will add depth
    this.radius = randomInt(10, 30)
    this.speed = {
      y: randomInt(1, 2)
    };
    if (mouse.x && mouse.y) {
      this.location = {
        x: randomInt(0, W),
        y: mouse.y
      }
    } else {
    this.location = {
      x: randomInt(0, W),
      y: -100
    }
    }

    // Make gravity for the rain
    this.gravity = randomInt(.1, .2)
   this.color = randomColor()

  }

  function draw() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      if (p.location.y > H - p.radius) {
        p.speed.x *= .2
        p.speed.y *= .2

        p.location.y = H - p.radius;
        // Bounce Effect
        p.speed.y *= bounce;

      }
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
      // Apply gravity
      p.speed.y += p.gravity
        // move the circles
      p.location.y += p.speed.y;
    }
  }
  setInterval(spawn, 100)
  setInterval(draw, 10);
};
