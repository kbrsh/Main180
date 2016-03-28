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
  var particle_count = 100;
  var move_particle_count = 5
  var click_particle_count = 300
  for (var i = 0; i < particle_count; i++) {
    particles.push(new particle());
  }
  canvas.addEventListener('mousedown', track_mouse, false);
  canvas.addEventListener('touch', track_mouse, false);

  function track_mouse(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  }

  function particle() {
    this.speed = {
      x: -2.5 + Math.random() * 5,
      y: -2.5 + Math.random() * 5
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
    this.size = {
      x: 10 + Math.random() * 30,
      y: 10 + Math.random() * 30
    }

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
      ctx.fillStyle = randomColor();
      ctx.rect(p.location.x, p.location.y, p.size.x, p.size.y, false);
      ctx.fill();
      ctx.stroke();

      //lets move the particles
      p.location.x += p.speed.x;
      p.location.y += p.speed.y;
    }
  }
  setInterval(draw, 10);

  canvas.addEventListener('mousemove', track_mouse, false);
  canvas.addEventListener('touchmove', track_mouse, false);
  canvas.addEventListener('mousemove', function() {
    for (var i = 0; i < move_particle_count; i++) {
      particles.push(new particle());
    }
  })
  canvas.addEventListener('touchmove', function() {
    for (var i = 0; i < move_particle_count; i++) {
      particles.push(new particle());
    }
  })
  
  canvas.addEventListener('mousedown', function() {
    for (var i = 0; i < click_particle_count; i++) {
      particles.push(new particle());
    }
  })
  canvas.addEventListener('touch', function() {
    for (var i = 0; i < click_particle_count; i++) {
      particles.push(new particle());
    }
  })
