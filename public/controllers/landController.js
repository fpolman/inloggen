angular.module('landController', [])
    .controller('landController', ['landenService', '$scope', '$http', function( landenService, $scope, $http ) {

      // het laden van de landen
	  $scope.load = function ()  {
	  	landenService.getLanden().success(function (data) {
        	$scope.landen = data;
      	}).
      	error(function(data, status, headers, config) {
	      console.log(status);
	      console.log(data);
	    });	   

	   /* $http.get('/landen').
	      success(function(data, status, headers, config) {
	        $scope.landen = data;
	      }).
	      error(function(data, status, headers, config) {
	      console.log(status);
	      console.log(data);
	      }); */
	  };

	  $scope.load();


	  // het laden van de landen
	  $scope.loadToplanden = function ()  {
	  	landenService.getTopLanden().success(function (data) {
        	$scope.topLanden = data;
      	}).
      	error(function(data, status, headers, config) {
	      console.log(status);
	      console.log(data);
	    });	   

	   /* $http.get('/landen').
	      success(function(data, status, headers, config) {
	        $scope.landen = data;
	      }).
	      error(function(data, status, headers, config) {
	      console.log(status);
	      console.log(data);
	      }); */
	  };

	  $scope.loadToplanden();


	  //inladen gegevens van 1 land
	   $scope.singleLand = function(id) {

	   landenService.setID(id);

	   //$scope.land = land;

	   /*	

	   	landenService.getLand(id).success(function (data) {
	   		$scope.land = data;

	   	}).
	   	error(function(data, status, headers, config) {
	      console.log(status);
	      console.log(data);
	    }); */

	  };


	  // toevoegen landen functie, start wanneer addLand button geklikt is
      /* $scope.addLand = function (){

	      $http.post("/add/land/", $scope.land).success(function(status) {
	        console.log('Data posted successfully');
	        $scope.load();
	      })

    	console.log("addLand")

	   }; */


	   /*$scope.singleLand = function (id) {

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
	  }; */

}]);