
    // module aanmaken met de naam travelApp
    var travelApp = angular.module('travelApp', ['mainController', 'landController', 'ngRoute']);

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

            // route naar landen
            .when('/landen', {
                templateUrl : 'pages/landen.html',
                controller: 'landController'
            })

            // route naar contact
            .when('/contact', {
                templateUrl : 'pages/contact.html'
            })

            .otherwise({
                redirectTo: '/'
            });
    });