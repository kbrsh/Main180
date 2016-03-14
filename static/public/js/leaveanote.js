var myApp = angular.module("myApp",["firebase"]);

myApp.controller("SampleCtrl", function($scope, $firebaseArray) {
  myApp.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
  var list = $firebaseArray(new Firebase("https://dayseventynine.firebaseio.com/"));

  $scope.list = list;

  $scope.submit = function(){
    var name = document.getElementById("name").value,
       	message = document.getElementById("message").value;

    		list.$add({ name: name, message: message }).then(function(ref) {
          var id = ref.key();
          list.$indexFor(id);
        });
  }

});
