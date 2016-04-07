window.onload = function() {
  var canvas = document.getElementById("canv");
  var ctx = canvas.getContext("2d");
  var mouse = {}
    //Lets make the canvas occupy the full page
  var W = window.innerWidth,
    H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  function track_mouse(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;

    for (var i = 0; i < 1; i++) {
      particles.push(new particle());
    }
  }

  //Lets make some particles
  var particles = [];

  function particle() {
    //location on the canvas
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
    this.radius = 0;
    //speed
    this.speed = Math.random() * 2;
    //steering angle in degrees range = 0 to 360
    this.angle = Math.random() * 360;
    //colors
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    var a = Math.random();
    this.rgba = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  }

  //Lets draw the particles
  function draw() {

    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      ctx.fillStyle = "white";
      ctx.fillRect(p.location.x, p.location.y, p.radius, p.radius);

      for (var n = 0; n < particles.length; n++) {
        var p2 = particles[n];
        //calculating distance of particle with all other particles
        var yd = p2.location.y - p.location.y;
        var xd = p2.location.x - p.location.x;
        var distance = Math.sqrt(xd * xd + yd * yd);
        //draw a line between both particles if they are in 200px range
        if (distance < 200) {
          ctx.beginPath();
          ctx.lineWidth = 1;
          ctx.moveTo(p.location.x, p.location.y);
          ctx.lineTo(p2.location.x, p2.location.y);
          ctx.strokeStyle = p.rgba;
          ctx.stroke();
          //The ribbons appear now.
        }
      }

      p.location.x = p.location.x + p.speed * Math.cos(p.angle * Math.PI / 180);
      p.location.y = p.location.y + p.speed * Math.sin(p.angle * Math.PI / 180);

      if (p.location.x < 0) p.location.x = W;
      if (p.location.x > W) p.location.x = 0;
      if (p.location.y < 0) p.location.y = H;
      if (p.location.y > H) p.location.y = 0;
    }
  }
  canvas.addEventListener("mousedown", track_mouse)
  setInterval(draw, 30);
}
