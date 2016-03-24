var myNote = document.getElementById("myNote")
var note = myNote.value

var save = function() {
localStorage.setItem('180takenotes2', JSON.stringify(note));
}
setInterval(save, 5000)

window.onLoad = function() {
  myNote.value = localStorage.getItem("180takenotes2");
}
