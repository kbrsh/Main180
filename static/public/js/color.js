$('.hex-value').on('input', function(){
  var hexValue = Number($(this).val());

  if (hexValue > 127) {
    $('.hex-value').addClass('js-shift-right');
  } else {
    $('.hex-value').removeClass('js-shift-right');
  }

  var r = 0;
  var g = Math.round(hexValue / 3.25);
  var b = hexValue;
  var a = $('.opacity').val().toString(16);

  var chosenColor = 'rgba' + '(' + r + ', ' + g + ', ' + b + ', ' + a + ')';

  $('.inside').css('background', chosenColor);
  $('#color-value').text(chosenColor);
});

$('.opacity').on('input', function() {
  var hexValue = Number($('.hex-value').val());

  var $r = 0;
  var $g = Math.round(hexValue / 3.25);
  var $b = hexValue;
  var $a = $('.opacity').val().toString(16);

  var chosenColor = 'rgba' + '(' + $r + ', ' + $g + ', ' + $b + ', ' + $a + ')';

  $('.inside').css('background', chosenColor);
  $('#color-value').text(chosenColor);
});

$('.inside').on('click', function(e){
  e.preventDefault();

  new Clipboard('.inside');

  $('.sucess-tooltip').addClass('active');

  setTimeout(function() {
  $('.sucess-tooltip').removeClass('active');
}, 3000);;
});
