angular.module('userController', [])
    .controller('userController', ['$scope', '$http', 'landenService', function($scope, $http, landenService) {

      // het laden van de gebruikersinfo
	  $scope.loadUser = function ()  {
	  	landenService.getUser().success(function (data) {
        	$scope.user = data[0];

        	console.log(data);

      	}).
      	error(function(data, status, headers, config) {
	      console.log(status);
	      console.log(data);
	    });	   

	  };
	  $scope.loadUser();


	   // updaten van gebruikersinfo, start wanneer register button geklikt is
      $scope.updateUser = function(){

      	  console.log('updateUser');

	      $http.post("/user/update/", $scope.user).success(function(status) {
	        console.log('Data posted successfully');
	      })

	      $scope.loadUser();

	   };



	  // het laden van de bezochte landen
	  $scope.loadVisitedCountries = function ()  {
	  	landenService.getVisitedCountries().success(function (Landendata) {
        	$scope.landenVisited = Landendata;

        	console.log(Landendata);

      	}).
      	error(function(data, status, headers, config) {
	      console.log(status);
	      console.log(data);
	    });	   

	  };
	  $scope.loadVisitedCountries();


	  // register functie, start wanneer register button geklikt is
      $scope.addVisitedCountry = function(){

      	if ( $scope.data != null ) {

      		  console.log('addaddVisitedCountry');

		      $http.post("/addVisitedCountry/", $scope.data).success(function(status) {
		        console.log('Data posted successfully');
		      })

	      $scope.loadVisitedCountries();

	  	} else {
	  		console.log('ik ben leeg');
	  	}

	   };


	   $scope.deleteVisitedCountry = function (id)  {
	    $http.delete("/visitedCountry/" + id).success(function () {
	    	$scope.loadVisitedCountries();
	    });
	  };








}]);