angular.module('mainController', [])
    .controller('mainController', ['$scope', '$http', function($scope, $http) {


      // register functie, start wanneer register button geklikt is
      $scope.register= function(){
	      var user = {
	            naam: $scope.username
	        };

	        console.log(user);

	      $http.post("/user/create/", user).success(function(user, status) {
	        console.log('Data posted successfully');
	      })
	   }

}]);