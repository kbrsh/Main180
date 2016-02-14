var canvas = document.querySelector('canvas'),
ctx = canvas.getContext('2d'),
w = window.innerWidth,
h = window.innerHeight, 
points = 1000,
colors = ['#024a59','#04a65b','#04bf56','#f2cc5d','#f3574a'],
canvasPoints = [];

canvas.width = w;
canvas.height = h;
    
function Point(){
    this.x = Math.round(Math.random()*w);
    this.y = 100;
    this.r = Math.round(Math.random()*20)+5;
    this.opacity = Math.random();
    this.velocity = this.opacity*10;
    this.c = colors[Math.floor(Math.random()*5)];
} 

(function init(){
  for(var i = 0; i<points;i++){
    canvasPoints.push(new Point());
  }
})();


function draw(){
   ctx.clearRect(0,0,w,h);
   for(var i = 0; i<points;i++){
      ctx.globalCompositeOperation = 'lighter';
      var temp = canvasPoints[i];
      ctx.fillStyle = temp.c;
      ctx.globalAlpha = temp.opacity;
      ctx.beginPath();
      ctx.arc(temp.x,temp.y,temp.r,0,Math.PI*2,true);
      
      temp.y -= temp.velocity; 
      ctx.fill();
      
      if(temp.y<0)temp.y = h;
    } 
    
    requestAnimFrame(draw);
  }

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

draw();
