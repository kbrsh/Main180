var elem = document.querySelector( 'div' ),
    mx = 0,
    my = 0,
    mxOffset = 0,
    myOffset = 0,
    ex = 0,
    ey = 0,
    ew = elem.offsetWidth,
    eh = elem.offsetHeight,
    vx = 0,
    vy = 0,
    ww = window.innerWidth,
    wh = window.innerHeight,
    tracking = false,
    raf = null,
    prefixes = [ '-o-', '-ms-', '-moz-', '-webkit-', '' ];

function prefixCss( elem, prop, val ) {
	  var length = prefixes.length,
		  i = 0;
	  for( ; i < length; i++ ) {
		    elem.style[ prefixes[ i ] + prop ] = val;
	  }
}


function setElemCoords( x, y ) {
  prefixCss( elem, 'transform', 'translate3d( ' + x + 'px, ' + y + 'px, 0)'  );
  elem.setAttribute( 'data-x', x );
  elem.setAttribute( 'data-y', y );
  ex = x;
  ey = y;
}

function checkBounds() {
  if( ex + ew > ww ) {
    if( tracking ) {
      vx = 0;
    } else {
      vx = -vx * 0.7;
      vy *= 0.99;
    }
    ex = ww - ew;    
  }
  
  if( ex < 0 ) {
    if( tracking ) {
      vx = 0;
    } else {
      vx = -vx * 0.7;
      vy *= 0.99;
    }
    ex = 0;    
  }
  
  if( ey + eh > wh ) {
    if( tracking ) {
      vy = 0;
    } else {
      vx *= 0.99;
      vy = -vy * 0.7;
    }
    ey = wh - eh;    
  }
  
  if( ey < 0 ) {
    if( tracking ) {
      vy = 0;
    } else {
      vx *= 0.99;
      vy = -vy * 0.7;
    }
    ey = 0;    
  }
}

function mousedowncb() {
  tracking = true;
  setElemCoords( ex, ey );
  mxOffset = mx - ex;
  myOffset = my - ey;
}

function mouseupcb() {
  tracking = false;
}

function mousemovecb( e ) {
  mx = e.clientX;
  my = e.clientY;
}

function resizecb() {
  ww = window.innerWidth;
  wh = window.innerHeight;
}

function loop() {
  raf = requestAnimationFrame( loop );
  if( tracking ) {
    vx = ( mx - mxOffset - ex ) / 2;
    vy = ( my - myOffset - ey ) / 2;
  }
  vy += 0.9;
  vx *= 0.99;
  vy *= 0.99;
  ex += vx;
  ey += vy;
  
  checkBounds();
  
  setElemCoords( ex, ey );
}

// bind events
elem.addEventListener( 'mousedown', mousedowncb, false );
window.addEventListener( 'mouseup', mouseupcb, false );
window.addEventListener( 'mousemove', mousemovecb, false );
window.addEventListener( 'resize', resizecb, false );

// set initial properties for element
setElemCoords( ex, ey );

loop();
