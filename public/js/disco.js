$('.fun-btn').on('click', function(event) {
  $(this).toggleClass('start-fun');
  var $page = $('.page');
  $page.toggleClass('color-bg-start')
    .toggleClass('bg-animate-color');

  //change text when when button is clicked

  $(this).hasClass('start-fun') ?
    $(this).text('stop the fun') :
    $(this).text('start the fun');

});
