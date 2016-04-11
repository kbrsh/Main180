var bg = document.getElementById("bg");
var out = document.getElementById("gradient");

document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    randomBackground();
  }
}

document.addEventListener("click", randomBackground)

function randomBackground() {
  var from = '#' + Math.random().toString(16).slice(2, 8)
  var to = '#' + Math.random().toString(16).slice(2, 8)
  var deg = Math.floor(Math.random() * 100).toString();
  var gradient = 'linear-gradient(' + deg + 'deg,' + from + ',' + to + ')';
  bg.style.background = gradient;
  out.innerHTML = "background:" + gradient + ";";
}

randomBackground();

// Clipboard Config
var clipboard = new Clipboard('.output');
