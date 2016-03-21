

    angular.module('landenService', [])
    .factory('landenService', ['$http', function( $http ) {

    var data = {
        landID: ''
    };


    return { 

        getLanden: function () {
            return $http.get('/landen');
        },
        getID: function () {

            /*
            return $http.get('/landID/' + id).then(function(response) {

            LandNaam = response.data;

            console.log(LandNaam);

            return LandNaam;

            */
     

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


        create: function (newLand) {
            console.log('create');
        },
        delete: function (id) {
            console.log('delete');
        }
    }
        
}]);