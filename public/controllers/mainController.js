angular.module('mainController', [])
    .controller('mainController', ['$scope', '$http', function($scope, $http) {

      // register functie, start wanneer register button geklikt is
      $scope.register= function(){
	      /*var user = {
	            data: $scope.data
	        };*/

	        //console.log(user);

	      /*$http.post("/user/create/", user).success(function(user, status) {
	        console.log('Data posted successfully');
	      })*/

	      $http.post("/user/create/", $scope.data).success(function(status) {
	        console.log('Data posted successfully');
	      })
	   }

}]);