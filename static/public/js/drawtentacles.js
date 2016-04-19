window.onload = function() {
  var canvas = document.getElementById("canv");
  var ctx = canvas.getContext("2d");
  // Random Color Function
  function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }
  var moving;
  //Make the canvas occupy the full page
  var W = window.innerWidth,
    H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  var particles = [];
  var mouse = {};
    //Painting the canvas black
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, W, H);
  //Lets create some particles now
  var particle_count = 1;
  function gen() {
  for (var i = 0; i < particle_count; i++) {
    particles.push(new particle());
  }
  }
  canvas.addEventListener('mousemove', track_mouse, false);
  canvas.addEventListener('touch', track_mouse, false);

  function track_mouse(e) {
 
    mouse.x = e.pageX;
    mouse.y = e.pageY;
    gen();
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
this.color = randomColor();
  }

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, .01)";
    ctx.fillRect(0, 0, W, H);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
      ctx.fill();
      ctx.stroke();
      
      if(moving) {
        
        p.radius += 0.05 + Math.random() * 0.1
        p.location.x += p.speed.x
        p.location.y += p.speed.y
        
        p.speed.x += -0.5 + Math.random() * 1
      }
    }
  }
  setInterval(draw, 10);
  setTimeout(function() {
    moving = true;
  }, 5000)

};
