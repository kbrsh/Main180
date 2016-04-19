function randomColor(){
    var r = (Math.round(Math.random()* 127) + 127).toString(16);
    var g = (Math.round(Math.random()* 127) + 127).toString(16);
    var b = (Math.round(Math.random()* 127) + 127).toString(16);
    return '#' + r + g + b;
}
var output = document.querySelector('.color-output');
var all = document.querySelector('html');
var yarn = new Yarn();
yarn.tween({
  from: { color: randomColor() },
  to:   { color: randomColor() },
  duration: 10000,
  easing: 'easeOutQuart',
  step: function (state) {
    output.innerHTML = state.color;
    all.style.background = state.color;
  }
});
