angular.module('mainController', [])
    .controller('mainController', ['$scope', '$http', function($scope, $http) {

      // register functie, start wanneer register button geklikt is
      $scope.register= function(){

	      $http.post("/user/create/", $scope.data).success(function(status) {
	        console.log('Data posted successfully');
	      })
	   };

	   // toevoegen landen functie, start wanneer addLand button geklikt is
      $scope.addLand= function(){

	      $http.post("/add/land/", $scope.landen).success(function(status) {
	        console.log('Data posted successfully');
	        $scope.load();
	      })

    	console.log("addLand")

	   };

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

}]);