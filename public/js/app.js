
    // module aanmaken met de naam travelApp
    var travelApp = angular.module('travelApp', ['mainController', 'ngRoute']);

	// De routes
    travelApp.config(function($routeProvider) {
        $routeProvider

            // route naar home
            .when('/', {
                templateUrl : 'pages/home.html'
            })

            // route naar inloggen
            .when('/inlogform', {
                templateUrl : 'pages/inlogform.html',
                controller: 'mainController'
            })

            // route naar contact
            .when('/contact', {
                templateUrl : 'pages/contact.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });