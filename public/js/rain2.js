window.onload = function() {
  var canvas = document.getElementById("canv");
  var ctx = canvas.getContext("2d");
  // Random Color Function
  function randomColor() {
    return Math.round(Math.random() * 255).toString();
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
  //create some rain
  var particle_count = 1;
  var click_count = 37;

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
  canvas.addEventListener('mousedown', click_gen);
  canvas.addEventListener('touch', click_gen);

  function particle() {
    // Making a random Width will add depth
    this.size = {
      w: randomInt(0.3, 0.5),
      h: randomInt(5, 15)
    }
    this.speed = {
      y: randomInt(1, 2)
    };
    this.location = {
      x: randomInt(0, W),
      y: -100
    }

    // Make gravity for the rain
    this.gravity = 0.01 + Math.random() * 0.1
      // Random RGBA
    this.r = randomColor();
    this.g = randomColor();
    this.b = randomColor();
    // Opacity values for curve
    this.o = 1;
    this.color = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.o + ')'

    // Curve Size
    this.drop = {
      w: 2,
      h: 1
    }

  }

  function draw() {
    ctx.globalCompositeOperation = "source-over";
    // Painting the canvas so that the rain
    // Leaves a trail
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      // Make it stay
      // When it hits bottom
      if (p.location.y > H - p.size.h) {
        p.speed.x *= .2
        p.speed.y *= .2

        p.location.y = H - p.size.h;
        // Comment out line below to add 
        // Bounce Effect
        //p.speed.y *= -1;

        ctx.beginPath();
        ctx.ellipse(p.location.x, p.location.y, p.drop.w, p.drop.h, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(' + p.r + ',' + p.g + ',' + p.b + ',' + p.o + ')';
        ctx.stroke();
        p.drop.w += .8
        p.drop.h += .2
        p.o -= 0.01

      } else {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.rect(p.location.x, p.location.y, p.size.w, p.size.h, false);
        ctx.fill();
        ctx.closePath();
      }
      // Apply gravity
      p.speed.y += p.gravity
        // move the rain
      p.location.y += p.speed.y;
    }
  }
  setInterval(spawn, 100)
  setInterval(draw, 10);
};
