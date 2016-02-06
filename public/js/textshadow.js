var mouse = {x: 0, y: 0};
var h1 = document.querySelector('h1');

document.addEventListener('mousemove', function(e){ 
  mouse.x = e.clientX || e.pageX; 
  mouse.y = e.clientY || e.pageY 
  var posX = parseInt((mouse.x) - (window.innerWidth / 2));
  var posY = parseInt((mouse.y) - (window.innerHeight / 2));

  TweenMax.to(h1,0,{textShadow: posX/-150+"px "+ posY/-100+"px 10px #444"});
}, false);
