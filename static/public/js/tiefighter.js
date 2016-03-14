var numFighters = 30;

function randomFighter() {
  var tf = document.createElement('div'),
      cp = document.createElement('div'),
    size = Math.floor(Math.random() * 3) + 1,
    angle = (Math.floor(Math.random() * 90) - 45) + 'deg',
    winHeight = window.innerHeight - 48,
    winWidth = window.innerWidth - 48, isShooter = (Math.random() > 0.8);
  tf.className = 'tie-fighter';
  if (isShooter) tf.className += ' shooter';
  tf.style.transform = 'scale(' + size + ') rotate(' + angle + ')';
  tf.style.opacity = 0.33 * size;
  tf.style.left = Math.floor(Math.random() * (winWidth - 48)) + 'px';
  tf.style.top = Math.floor(Math.random() * (winHeight - 48)) + 'px';
  tf.appendChild(cp);
  document.body.appendChild(tf);
  // remove from  DOM once out of view
  setTimeout(function(){
    tf.parentNode.removeChild(tf);
  },3000);
}

randomFighter();
document.addEventListener("click", randomFighter)
document.addEventListener("touch", randomFighter)
setInterval(randomFighter, 300);
