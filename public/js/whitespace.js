// A quick hacky recreation of this gif - http://i.imgur.com/mJ7cXhA.gif

var canvas, context, plusWidth, totalWidth, totalHeight, totalX, totalY, frame, drawWhite, modifierX, modifierY, frameModifier, bgColor, plusColor;

function prepare() {
  canvas = document.getElementsByTagName( 'canvas' )[0];
  context = canvas.getContext( '2d' );
  totalWidth = window.innerWidth;
  totalHeight = window.innerHeight;
  canvas.width = totalWidth;
  canvas.height = totalHeight;
  plusWidth = 100;
  totalX = Math.ceil( totalWidth / plusWidth );
  totalY = Math.ceil( totalHeight / plusWidth );
  frame = 0;
  drawWhite = false;
  modifierX = 0;
  modifierY = 0;
  frameModifier = 1;
  plusColor = '#222';
  bgColor = '#f9f9f9';
}

function swapStyle() {
  
  drawWhite = !drawWhite
  
  // Rotate direction and color
  if ( drawWhite ) {
    bgColor = '#222';
    plusColor = '#f9f9f9';
    modifierX = -plusWidth * (2 / 3);
    modifierY = -plusWidth / 3;
    frameModifier = -1;
  } else {
    bgColor = '#f9f9f9';
    plusColor = '#222';
    modifierX = 0;
    modifierY = 0;
    frameModifier = 1;
  }
}

function render() {
  
  frame += frameModifier;
  
  if ( frame == 95 || frame == -5 ) {
    swapStyle();
  }
  
  // Fill background Style
  context.fillStyle= bgColor;
  context.fillRect( 0, 0, totalWidth, totalHeight );
  context.fillStyle = plusColor;
  
  var i, j;
  for( i = -totalY; i < totalX; i++ ) {
    var x = i * plusWidth;
    
    for( j = 0; j < (totalY + 11); j++ ) {
      
      x += ( plusWidth / 3 )
      var y = (j * plusWidth - ((i%10) * plusWidth/3)) ;
      
      // Don't draw excess plus's
      if ( y < -plusWidth || y > totalHeight + plusWidth || x < -plusWidth) {
        continue;
      }
      
      drawPlus( x + modifierX, y + modifierY, frame );
      
    }
  }
 
}

function drawPlus( centerX, centerY, rotate ) {
  
  // Rotate Boundaries
  if ( rotate > 90 || rotate < 0 ) {
   rotate = 90; 
  }
  
  var rotateAmount = rotate * Math.PI / 180;
  context.translate( centerX, centerY );
  context.rotate( rotateAmount );

  context.fillRect( -plusWidth / 2, -plusWidth / 6, plusWidth, plusWidth/3 );
  context.fillRect( -plusWidth / 6, -plusWidth / 2, plusWidth/3, plusWidth );
   
  context.rotate( -rotateAmount );
  context.translate( -centerX, -centerY );
}


window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
 
// Kick off late
setTimeout( function() {
  prepare();
  (function animloop(){
    requestAnimFrame(animloop);
    render();
  })();
}, 1 );

window.onresize = prepare;
