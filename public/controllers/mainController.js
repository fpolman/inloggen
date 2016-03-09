angular.module('mainController', [])
    .controller('mainController', ['$scope', '$http', function ($scope, $http) {


      // register functie, start wanneer register button geklikt is
      $scope.register= function(){
	      var data = $.param({
	        book: JSON.stringify({
	            author: $scope.username,
	            title : $scope.password
	        })
	      });

	      $http.post("/user/create/", data).success(function(data, status) {
	        console.log('Data posted successfully');
	      })
	   }



}]);