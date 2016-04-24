var input = document.getElementById("input")
var body = document.getElementById('body')
var instr = document.getElementById('instr')

function update() {
  var moodColor = 0, chars=input.value.split("");
  
  
  chars.forEach(function(char) {
    moodColor += +char.charCodeAt(0) * 987654;
  });
  
  var color = '#' + moodColor.toString(16).substr(0, 6)
  
  body.style.background = color
}
input.addEventListener("keyup", update)
setInterval(function() {
  instr.style.display = 'none'
}, 1000)
