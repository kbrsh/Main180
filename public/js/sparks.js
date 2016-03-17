window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();
//vars
var c; //canvas
var ctx; //context
var col = 0; //color update
var msX = 0; //mouse x
var msY = 0; //mouse y
var prevX = 0; //previous x
var prevY = 0; //previous y
//points array
var pts = new Array();
//sparks array
var sparks = new Array();

go();

function go() {
  c = document.getElementById("canv");
  ctx = c.getContext("2d");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  c.onmousemove = function(e) {
    prevX = msX;
    prevY = msY;
    msX = e.clientX;
    msY = e.clientY;

    if (pts.length > 3) {

      var vel = (Math.abs(prevX - msX) + Math.abs(prevY - msY)) * 0.8;

      var numsparks = Math.ceil(vel);
      if (numsparks < 5) {
        numsparks = 1;
      }

      for (var i = 0; i < numsparks; i++) {
        col -= .5;
        if (Math.random() > 0.9) {
          sparks[sparks.length] = new Spark(msX, msY, (prevX - msX) * 0.2, (prevY - msY) * 0.2, vel);
        }
      }
    }
  };
  anim();
}

function anim() {
  render();
  window.requestAnimFrame(anim);
}

function render() {
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "hsla(0,0%,0%,.2)";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.globalCompositeOperation = "lighter";
  ptSet(msX, msY);
  sprkSet();
}

function ptSet(x, y) {
  if (pts.length > 30) {
    pts.shift();
  }
  if (x != 0 && y != 0) {
    pts[pts.length] = new Pt(x, y);
  }

  if (pts.length > 10) {
    for (var i = 2; i < pts.length; i++) {
      curve(pts[i - 2], pts[i - 1], pts[i]);
    }
  }
}

function curve(prevPt, midPt, currPt) {
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = currPt.color;
  ctx.shadowColor = "hsla(" + (col % 360) + "100%,50%,1)";
  ctx.shadowBlur = 15;
  ctx.lineWidth = 10;
  ctx.moveTo((prevPt.x + midPt.x) * 0.5, (prevPt.y + midPt.y) * 0.5);
  ctx.quadraticCurveTo(midPt.x, midPt.y, (midPt.x + currPt.x) * 0.5, (midPt.y + currPt.y) * 0.5);
  ctx.stroke();
  ctx.restore();

}

function Pt(x, y) {
  this.x = x;
  this.y = y;
  this.color = "hsla(206, 95%, 95%, 1)";
}

function sprkSet() {
  for (var i = 0; i < sparks.length; i++) {
    sparks[i].move();
  }
  for (i = sparks.length - 1; i >= 0; i--) {
    if (sparks[i].y > c.height + 20) {
      sparks.splice(i, 1);
    }
  }
}

function Spark(x, y, velX, velY, vel) {
  this.x = x + (vel - Math.random() * vel * 2) * 0.5;
  this.y = y + (vel - Math.random() * vel * 2) * 0.5;
  this.vecX = (1 - Math.random() * 2 - Math.random() * velX);
  this.vecY = (1 - Math.random() * 3 - Math.random() * velY);
}
Spark.prototype.move = function() {
  this.vecY += 0.15;
  this.x += this.vecX;
  this.y += this.vecY;
  ctx.save();
  ctx.fillStyle = "hsla(" + (col % 360) + ",100%,50%,1)";
  ctx.shadowColor = "hsla(" + (col % 360) + ",100%,50%,.3)";
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.arc(this.x, this.y, 2.6, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();
}
