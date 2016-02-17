    function randomColor() {
      return '#' + Math.random().toString(16).slice(2, 8);
    };

    function init() {
      container = document.getElementById('container');

      WIDTH = window.innerWidth;
      HEIGHT = window.innerHeight;

      var canvas = document.createElement("canvas");
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      container.appendChild(canvas);

      ctx = canvas.getContext("2d");
      ctx.fillStyle = randomColor();
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      branches = new Array();

      window.addEventListener('mousedown', onWindowMouseDown, false);
    }

    function onWindowMouseDown(e) {
      if (!e)
        var e = window.event;

      mouseX = e.clientX;
      mouseY = e.clientY;

      branches.push(new Branch(mouseX, mouseY, 1000));
    }

    function loop() {
      ctx.beginPath();
      ctx.strokeStyle = randomColor();

      for (var i = 0; i < branches.length; i++) {
        var branch = branches[i];
        branch.life++;

        ctx.moveTo(branch.x, branch.y);

        branch.rw += Math.random() - .5;
        branch.x += Math.cos(branch.rw) * branch.speed;
        branch.y += Math.sin(branch.rw) * branch.speed;

        ctx.lineTo(branch.x, branch.y);

        if (
          branch.life > branch.max_life ||
          branch.x < 0 ||
          branch.y < 0 ||
          branch.x > WIDTH ||
          branch.y > HEIGHT
        )
          branches.splice(i, 1);

        if (Math.random() > 0.95 && branches.length < 1000) {
          branches.push(new Branch(branch.x, branch.y, branch.max_life / 10));
        }
      }

      ctx.stroke();
      ctx.closePath();

      ctx.fillStyle = "rgba(0, 25, 25, 0.05)";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }

    var Branch = function(x, y, max_life) {
      this.life = 0;
      this.max_life = max_life;
      this.speed = Math.random() + 1;
      this.x = x;
      this.y = y;
      this.rw = Math.random() * 360;
    }

    var container, canvas, ctx;
    var WIDTH, HEIGHT;

    var branches, mouseX, mouseY;

    init();
    setInterval(loop, 1000 / 60);
    // Lets go!
