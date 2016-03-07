// module aanmaken met de naam travelApp
    var travelApp = angular.module('travelApp', ['ngRoute']);

	// De routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route naar home
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route naar inloggen
            .when('/inlogform', {
                templateUrl : 'pages/inlogform.html',
                controller  : 'aboutController'
            })

            // route naar contact
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // controller aanmaken
    travelApp.controller('mainController', function($scope) {
     	// bericht in de view
        $scope.message = 'test bericht';
    });

    travelApp.controller('inlogformController', function($scope) {
        $scope.message = 'inlogpagina';
    });

    travelApp.controller('contactController', function($scope) {
        $scope.message = 'Contact pagina';
    });