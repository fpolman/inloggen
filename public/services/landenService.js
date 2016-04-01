

    angular.module('landenService', [])
    .factory('landenService', ['$http', function( $http ) {

    var data = {
        landID: ''
    };


    return { 

        getTopLanden: function () {
            return $http.get('/Toplanden');
        },
        getLanden: function () {
            return $http.get('/landen');
        },
        getID: function () {
            console.log("get " + data.landID);
            return data.landID;
        },
        setID: function (landid) {
            data.landID = landid;
            console.log('set' + landid);
        },
        getLand: function (newValue) {
            console.log(newValue);
            return $http.get('/landID/' + newValue);
        },
        getActivity: function (newValue) {
            return $http.get('/activities/' + newValue);
        },
        getRecenties: function () {
            return $http.get('/recenties/');
        },
        getVisitedCountries: function () {
            return $http.get('/visitedCountries');
        },
        getUser: function () {
            return $http.get('/user');
        },
        create: function (newLand) {
            console.log('create');
        },
        delete: function (id) {
            console.log('delete');
        }
    }
        
}]);