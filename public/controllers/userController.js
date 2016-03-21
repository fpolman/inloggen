angular.module('userController', [])
    .controller('userController', ['$scope', '$http', 'landenService', function($scope, $http, landenService) {

     // het laden van de landen
	  $scope.loadUser = function ()  {
	  	landenService.getUser().success(function (data) {
        	$scope.user = data[0];

        	console.log(data);

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

	  $scope.loadUser();

}]);