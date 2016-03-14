       var myApp = angular.module("caps",[]);
       myApp.controller("capsCtrl",function($rootScope, $scope){
       });
$(function() {
  $('input').on('change', function() {
    var input = $(this);
    if (input.val().length) {
      input.addClass('populated');
    } else {
      input.removeClass('populated');
    }
  });

  setTimeout(function() {
    $('#fname').trigger('focus');
  }, 500);
});
