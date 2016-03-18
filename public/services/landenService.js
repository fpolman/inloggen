

    angular.module('landenService', [])
    .factory('landenService', ['$http', function( $http ) { 

        
        return {
          getLanden: function () {
            return $http.get('/landen');
          },
          getLand: function (id) {

            console.log(id);
            return $http.get('/landID/' + id);

          },
          create: function (newLand) {
            console.log('create');
          },
          delete: function (id) {
            console.log('delete');
          }
        }
        
    }]);