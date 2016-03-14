$(document).ready(function () {
  $('#fixer').hide();
	$('.btn').click(function () {
  $('.btn').hide();
  $('#success').hide();
  $('#fixer').fadeIn(1000);
  setTimeout(function () {
      $('#fixer').fadeOut(100);
      $('.btn').show();
      document.getElementById("success").innerHTML = "The Problem Is Fixed. <br> If The Problem Persists, <br> Please Click the Fix It Button Again";
      $('#success').show();

		}, 3000);
	});
  var fixIt = function() {
      $('.btn').hide();
  $('#success').hide();

  };
});
