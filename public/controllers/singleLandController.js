angular.module('singleLandController', [])
    .controller('singleLandController', ['$scope', '$http', function($scope, $http) {


    	/*
    	//inladen gegevens van 1 land
	   $scope.singleLand = function (id) {

	   	console.log(id);

	   	landenService.getLand().succes(function (data) {
	   		$scope.land = data;
	   	}).
	   	error(function(data, status, headers, config) {
	      console.log(status);
	      console.log(data);
	    });
	  };

	  */

}]);



    /* oude functie

    //inladen gegevens van 1 land
	   $scope.singleLand = function (id) {

	   	console.log(id);

	   	$http.get('/landID/' + id).
	      success(function(data, status, headers, config) {
	        $scope.land = data[0];

	        console.log($scope.land.landnaam);

	      }).
	      error(function(data, status, headers, config) {
	      console.log(status);
	      console.log(data);
	      });
	  };

	  */