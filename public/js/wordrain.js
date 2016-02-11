var clickChar = "l";

$(document).keyup(function(e) {
if (e.keyCode == 65) { clickChar += "a"; countclickChar(); }
if (e.keyCode == 66) { clickChar += "b"; countclickChar(); }
if (e.keyCode == 67) { clickChar += "c"; countclickChar(); }
if (e.keyCode == 68) { clickChar += "d"; countclickChar(); }
if (e.keyCode == 69) { clickChar += "e"; countclickChar(); }
if (e.keyCode == 70) { clickChar += "f"; countclickChar(); }
if (e.keyCode == 71) { clickChar += "g"; countclickChar(); }
if (e.keyCode == 72) { clickChar += "h"; countclickChar(); }
if (e.keyCode == 73) { clickChar += "i"; countclickChar(); }
if (e.keyCode == 74) { clickChar += "j"; countclickChar(); }
if (e.keyCode == 75) { clickChar += "k"; countclickChar(); }
if (e.keyCode == 76) { clickChar += "l"; countclickChar(); }
if (e.keyCode == 77) { clickChar += "m"; countclickChar(); }
if (e.keyCode == 78) { clickChar += "n"; countclickChar(); }
if (e.keyCode == 79) { clickChar += "o"; countclickChar(); }
if (e.keyCode == 80) { clickChar += "p"; countclickChar(); }
if (e.keyCode == 81) { clickChar += "q"; countclickChar(); }
if (e.keyCode == 82) { clickChar += "r"; countclickChar(); }
if (e.keyCode == 83) { clickChar += "s"; countclickChar(); }
if (e.keyCode == 84) { clickChar += "t"; countclickChar(); }
if (e.keyCode == 85) { clickChar += "u"; countclickChar(); }
if (e.keyCode == 86) { clickChar += "v"; countclickChar(); }
if (e.keyCode == 87) { clickChar += "w"; countclickChar(); }
if (e.keyCode == 88) { clickChar += "x"; countclickChar(); }
if (e.keyCode == 89) { clickChar += "y"; countclickChar(); }
if (e.keyCode == 90) { clickChar += "z"; countclickChar(); }
if (e.keyCode == 27) { clickChar = "";}
});

function countclickChar() {
  
  var div = document.createElement("div");
  var str = document.createTextNode(clickChar);  
  div.appendChild(str);
  
  
  div.style.position = 'absolute';
  div.style.top = Math.floor(Math.random() * (0))+ "px";
  div.style.left = Math.floor(Math.random() * (500)) + "px";
  div.className = 'rain';
  div.style.opacity = '0';

  
  $("#letters").append(div);
}

window.setInterval(function(){
  countclickChar();
}, 100);
