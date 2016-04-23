var input = document.getElementById("input")
var body = document.getElementById('body')

function update() {
  var moodColor = 0, chars=input.value.split("");
  
  
  chars.forEach(function(char) {
    moodColor += +char.charCodeAt(0) * 987654;
  });
  
  var color = '#' + moodColor.toString(16).substr(0, 6)
  
  body.style.background = color
}
input.addEventListener("keyup", update)
