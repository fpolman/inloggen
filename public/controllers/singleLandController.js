angular.module('singleLandController', [])
    .controller('singleLandController', ['landenService', '$scope', '$http', '$routeParams', function(landenService, $scope, $http, $routeParams) {


    	//$scope.aantal = 0;


 	$scope.$watch(function () { return landenService.getID(); }, function (newValue, oldValue) {

        $scope.deID = newValue;

        landenService.getLand(newValue).success(function (data) {
        	$scope.land = data[0];

        	//$scope.land = 'hallo';

        	console.log(data);

      	}).
      	error(function(data, status, headers, config) {
	      console.log(status);
	      console.log(data);
	    });	
    });


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