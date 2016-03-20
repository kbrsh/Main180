function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

Crafty.init(window.innerWidth,window.innerHeight, document.getElementById('game'));

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: 900, w: window.innerWidth, h: 10})
  .color('green');

Crafty.e('2D, Canvas, Color, Twoway, Gravity')
  .attr({x: 0, y: 0, w: 50, h: 50})
  .color('#F00')
  .twoway(200)
  .gravity('Floor');


/* Make a ton of floors */
Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: getRandom(50, 1000), y: getRandom(50, 1000), w: 300, h: 10})
  .color('green');

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: getRandom(50, 1000), y: getRandom(50, 1000), w: 300, h: 10})
  .color('green');

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: getRandom(50, 1000), y: getRandom(50, 1000), w: 300, h: 10})
  .color('green');

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: getRandom(50, 1000), y: getRandom(50, 1000), w: 300, h: 10})
  .color('green');

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: getRandom(50, 1000), y: getRandom(50, 1000), w: 300, h: 10})
  .color('green');

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: getRandom(50, 1000), y: getRandom(50, 250), w: 300, h: 10})
  .color('green');

