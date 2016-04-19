var lastScrollPosition = document.body.scrollTop,
    vel = null,
    m = null,
    lastHook = null,
    maxDiff = 0;

function scrollListener() {
  function updateLastOne() {
    vel.textContent = 0;
  }
  var scrollPosition = (document.documentElement && document.documentElement.scrollTop) || 
              document.body.scrollTop,
      diff = Math.abs(scrollPosition - lastScrollPosition);
  vel.textContent = diff;
  maxDiff = Math.max(maxDiff, diff);
  m.textContent = maxDiff;
  console.log(diff);
  lastScrollPosition = scrollPosition;
  
  //All of this is to get a `0` after we're done scrolling (we're never)
  //going to get one through the listener, since it won't fire if the
  //the scroll hasn't moved, which means they will never be equal for
  //scrollPosition - lastScrollPosition to be 0. Hence we wait a 
  //"reasonable" ammount of time and reset it.
  if (lastHook !== null) {
    window.clearTimeout(lastHook);
    lastHook = null;
  }
  lastHook = window.setTimeout(updateLastOne, 130);
}

window.onload = function () {
  vel = document.getElementById("vel");
  m = document.getElementById("m");
  document.addEventListener("scroll", scrollListener);
}
