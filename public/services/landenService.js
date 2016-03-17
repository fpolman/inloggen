

    angular.module('landenService', [])
    .service('landenService', ['$scope', '$http', function($scope, $http) {
        return {
            landen:function () {

            	$http.get('/landen').
			      success(function(data, status, headers, config) {
			        $scope.landen = data;
			      }).
			      error(function(data, status, headers, config) {
			      console.log(status);
			      console.log(data);
			      });


            }
        };
    }]);