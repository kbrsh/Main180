var body = $('body');

$(document).on('mousemove', function(e){
  var x = e.pageX,
      y = e.pageY;
  body.css({'perspective-origin' : x+'px '+y+'px'});
});
