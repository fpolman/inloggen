angular.module('landController', [])
    .controller('landController', ['$scope', '$http', function($scope, $http) {


       // het laden van de landen
	  $scope.load = function ()  {
	    $http.get('/landen').
	      success(function(data, status, headers, config) {
	        $scope.landen = data;
	      }).
	      error(function(data, status, headers, config) {
	      console.log(status);
	      console.log(data);
	      });
	  };

	  $scope.load();


	  // toevoegen landen functie, start wanneer addLand button geklikt is
      $scope.addLand = function(){

	      $http.post("/add/land/", $scope.land).success(function(status) {
	        console.log('Data posted successfully');
	        $scope.load();
	      })

    	console.log("addLand")

	   };

}]);