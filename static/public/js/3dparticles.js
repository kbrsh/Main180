var $emitter = $('#emitter'),
    emitEvery = 50, //emit new particle every X ms
    removeAfter = 3000; //remove particles after X ms

function create() {
  
  //create particle and random values
  var $particle = $('<div class="particle" />'),
      x = Math.randMinMax(-200, 200),
      y = Math.randMinMax(-200, 50),
      z = Math.randMinMax(-200, 200),
      degree = Math.randMinMax(0, 360),
      color = 'hsla(' + Math.randMinMax(120, 240) + ', 80%, 60%, 1)';
  
  //append particle to dom
  $particle.css('background', color);            
  $emitter.append( $particle );
  
  //after a short timeout, set css to be transitioned to. Without the timeout, we would not see the transition
  window.setTimeout(function() {
    $particle.css({
      webkitTransform: 'translateX(' + x + 'px) translateY(' + y + 'px) translateZ(' + z + 'px) rotateX(' + degree + 'deg)',
      opacity: 0
    }); 
  }, 50);
  
  //remove current particle after time
  window.setTimeout(function() {
    $particle.remove();
  }, removeAfter);
  
  //create next particle
  window.setTimeout(create, emitEvery); 
  
}

//https://gist.github.com/timohausmann/4997906
Math.randMinMax=function(t,n,a){var r=t+Math.random()*(n-t)
return a&&(r=Math.round(r)),r}

//execute first particle creation
create();


