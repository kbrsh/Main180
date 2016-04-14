window.onload = function() {
  var canvas = document.getElementById("canv");
  var ctx = canvas.getContext("2d");
  // Random Color Function
  function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }
  function randomInt(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  //Make the canvas occupy the full page
  var W = window.innerWidth,
    H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  var particles = [];
  var mouse = {};
  var score = 0;
  var condition;
  //Lets create some particles now
  var incr = 30;
  var gen = function() {
  for (var i = 0; i < incr; i++) {
    particles.push(new particle());
  }
    incr+=7000
  };

  function track_mouse(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  }

  function particle() {
    this.speed = {
      x: -2.5 + Math.random() * 5,
      y: -2.5 + Math.random() * 5
    };

      this.location = {
        x: randomInt(0, W),
        y: randomInt(0, H)
      };
    //radius range = 10-30
    this.radius = 10 + Math.random() * 20;
    this.color = randomColor();
    this.life = true;
  }

  function draw() {
    ctx.globalCompositeOperation = "source-over";
    //Painting the canvas black
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      if(p.life) {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      p.location.x += p.speed.x;
      p.location.y += p.speed.y;
      }
        
        if(!p.life) {
          p.location.x = false
          p.location.y = false
        }
      if(mouse.x > p.location.x - p.radius && mouse.x < p.location.x + p.radius && mouse.y > p.location.y - p.radius && mouse.y < p.location.y + p.radius) {
        p.life = false;
        score++;
      } 
      
      document.getElementById("score").innerHTML = 'Score - ' + score;
    }
  }

  // Event Listeners
  canvas.addEventListener("mousemove", track_mouse);
  
  // Draw Every 33 Milliseconds
  setInterval(draw, 33);
  gen(incr)
  // Start!
  setInterval( function() { gen(incr); }, 10000 );
  
};
