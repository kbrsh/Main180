<<<<<<< HEAD
// Taken from a cool game tutorial

=======
>>>>>>> 530ef836aa5849ab92ba2964f928490877b743f8
// Initialize rotationDegrees()
(function($) {
  $.fn.rotationDegrees = function() {
    var matrix = this.css("-webkit-transform") ||
      this.css("-moz-transform") ||
      this.css("-ms-transform") ||
      this.css("-o-transform") ||
      this.css("transform");
    if (typeof matrix === 'string' && matrix !== 'none') {
      var values = matrix.split('(')[1].split(')')[0].split(',');
      var a = values[0];
      var b = values[1];
      var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    } else {
      var angle = 0;
    }
    return angle;
  };
}(jQuery));
jQuery.fn.rotate = function(degrees) {
  $(this).css({
    '-webkit-transform': 'rotate(' + degrees + 'deg)',
    '-moz-transform': 'rotate(' + degrees + 'deg)',
    '-ms-transform': 'rotate(' + degrees + 'deg)',
    'transform': 'rotate(' + degrees + 'deg)'
  });
  return $(this);
};
// End of rotationDegrees()
// <---------------------->
// Initialize random points on the circle, change # of digits left
function initializare($param) {
    var angle = Math.floor((Math.random() * 720) - 360);
    $("#circle2").rotate(angle);
    $("#container > p").html($param);
    if($param!=1)
    $("#container > p").append("<br><h4>more left</h4>");
  else      $("#container > p").append("<br><h4>left</h4>");
  }
  // End of initializare()
  // <------------------->
$(document).ready(function() {
      // Click counter -> %2 == 0 is clockwise, %2 != 0 is counter-clockwise
      var counter = 0;
      // Digits counter, decreases to 0, where the player wins
      var pointcounter = 5;
      // Above mentioned initialization function takes # of digits left as a parameter, to display it
      initializare(pointcounter);
      // Let's store the randomly generated angle of the point in a variable
      var angle = $("#circle2").rotationDegrees();
      // Initial circle spin, on page load
      $("#circle").rotate(2880);
      $('#circle').click(function() {
        // Current rotation stored in a variable
        var unghi = $(this).rotationDegrees();
        // If current rotation matches the random point rotation by a margin of +- 25, the player "hit" it and continues
        if (unghi > angle - 25 && unghi < angle + 25) {
          pointcounter--;
          // If game over, hide the game, display end of game options
          if (!pointcounter) {
            $("#circle").addClass("hidden");
            $("#circle2").addClass("hidden");
            $("#container > p").addClass("hidden");
            $("#retry2").removeClass("hidden");
          }
          // Else, add another point and remember its new angle of rotation
          else initializare(pointcounter);
          angle = $("#circle2").rotationDegrees();
        }
        // Else, the player "missed" and is brought to end of game options
        else {
          $("#circle").addClass("hidden");
          $("#circle2").addClass("hidden");
          $("#container > p").addClass("hidden");
          $("#retry").removeClass("hidden");
        }
        // No of clicks ++
        counter++;
        // Orientation based on click parity
        if (counter % 2) {
          $(this).rotate(-1800);
        } else $(this).rotate(1800);
      });
      $('#retry').click(function() {
          $("#circle").removeClass("hidden");
          $("#circle2").removeClass("hidden");
          $("#container > p").removeClass("hidden");
          $("#retry").addClass("hidden");
          pointcounter=5;
          initializare(pointcounter);
          angle = $("#circle2").rotationDegrees();
          $("#circle").rotate(2440);
          counter=0;
      });
   $('#retry2').click(function() {
       $("#retry2").addClass("hidden");   $("#circle").removeClass("hidden");
          $("#circle2").removeClass("hidden");
          $("#container > p").removeClass("hidden");

          pointcounter=5;
          initializare(pointcounter);
          angle = $("#circle2").rotationDegrees();
          $("#circle").rotate(2440);
          counter=0;
      });
});
