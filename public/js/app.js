
    // module aanmaken met de naam travelApp
    var travelApp = angular.module('travelApp', ['ngRoute']);

	// De routes
    travelApp.config(function($routeProvider) {
        $routeProvider

            // route naar home
            .when('/', {
                templateUrl : 'pages/home.html'
            })

            // route naar inloggen
            .when('/inlogform', {
                templateUrl : 'pages/inlogform.html'
            })

            // route naar contact
            .when('/contact', {
                templateUrl : 'pages/contact.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

    // controller aanmaken
    travelApp.controller('mainController', function($scope) {
     	// bericht in de view
        $scope.message = 'home pagina';
    });

    travelApp.controller('inlogformController', function($scope) {
        $scope.message = 'Inloggen';
    });

    travelApp.controller('contactController', function($scope) {
        $scope.message = 'Contact pagina';
    });