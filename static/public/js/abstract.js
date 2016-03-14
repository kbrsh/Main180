(function () {
  var c, //canvas
      w, //width
      h, //height
      j = 0, //increment var
      $, //context
      k = 200,  //max random num lines
      l = 50, //random line width calcs
      n, //random position array var
      arr = [],  //array
      g, //random color array var
      o = 0, //color opacity
      d = document;

  c = d.getElementById("canv");
  w = c.width = innerWidth;
  h = c.height = innerHeight;
  $ = c.getContext("2d");
  var lines = function () {
    k = k * Math.random() + 10;
    l = l * (Math.random() - 0.5) + 1;
    n = w * (Math.random() - 0.5);
    for (var b = 0; b < 3; b++) arr[b] = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 3) - 1;},
inv = function () {
  $.restore();
  $.fillStyle = "#" + (o ? "FFFFCC" : "000000");
  $.fillRect(0, 0, w, h);
  $.fillStyle = "#" + (o ? "000000" : "FFFFCC");
  $.save()
};
window.onclick = function () {
  lines();
  inv()
  };
 
window.addEventListener("keydown", function (keydn) {
    if (keydn.keyCode == 32) {
      o = !o;
      inv()
    }
  }, false);
  $.save();
  setInterval(function () {
    $.translate(w + n, h + n);
    for (var b = 0; b < k; b++) {
      $.beginPath();
      $.moveTo(w / 2 + n, h / 2 + n);
      $.lineWidth = 0.1;
      $.lineTo(n, n);
      $.rotate(l);
      if (arr[g] <= 0) arr[g] = 255;
      arr[g]--;
      $.strokeStyle = "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
      $.stroke();
      ++j
    }   
  }, 1)
})();
