var ripples = []

var clientX, clientY
var lastClientX, lastClientY

function randomColor() {
  return '#' + Math.random().toString(16).slice(2, 8);
};

function getRippleColor() {
  return randomColor()
}

function calcRipplePosition(r) {
  var rippleRadii = $(r.selector).width() / 2,
    top = clientY - rippleRadii,
    left = clientX - rippleRadii
  TweenMax.staggerTo(r.selector, r.speed, {
    'top': top,
    'left': left
  })
}

function updateRipples() {
  for (var i = 0; i < ripples.length; i++)
    calcRipplePosition(ripples[i])
}

var Ripple = function(index) {
  if (isNaN(index)) return null;

  this.selector = ".ripple-" + index

  this.speed = 5.7 * index / 10
  this.element = $(this.selector)

  this.create = function() {
    $('body')
      .prepend(
        '<div class="ripple-' + index + '" style="background:' + getRippleColor() + ';"></div>'
      )
    return this;
  }
}

function addRipple() {

  if (ripples.length > 100)
    return

  var r = new Ripple(ripples.length + 1)
    .create()

  ripples.push(r)
  calcRipplePosition(r)
}

$(document).on('click', function() {
  addRipple();
  $('h1').addClass('hidden');
})

$(document).on('mousemove', function(m) {
  lastClientX = clientX
  clientX = m.clientX

  lastClientY = clientY
  clientY = m.clientY

  updateRipples()
})
