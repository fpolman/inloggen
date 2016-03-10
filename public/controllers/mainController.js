angular.module('mainController', [])
    .controller('mainController', ['$scope', '$http', function($scope, $http) {

      // register functie, start wanneer register button geklikt is
      $scope.register= function(){

	      $http.post("/user/create/", $scope.data).success(function(status) {
	        console.log('Data posted successfully');
	      })
	   }

	   // register functie, start wanneer register button geklikt is
      $scope.addLand= function(){

	      $http.post("/add/land/", $scope.data).success(function(status) {
	        console.log('Data posted successfully');
	      })

    	console.log("addLand")

	   }

}]);