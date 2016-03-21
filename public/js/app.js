
    // module aanmaken met de naam travelApp
    var travelApp = angular.module('travelApp', 
    ['mainController', 'landController', 'singleLandController', 'landenService', 'userController', 'ngRoute']);

	// De routes
    travelApp.config(function($routeProvider) {
        $routeProvider

            // route naar home
            .when('/', {
                templateUrl : 'pages/home.html',
                controller: 'landController'
            })

            // route naar inloggen
            .when('/inlogform', {
                templateUrl : 'pages/inlogform.html',
                controller: 'mainController'
            })

            // route naar specifieke land pagina
            .when('/ingelogd', {
                templateUrl : 'pages/ingelogd.html',
                controller: 'userController'
            })

            // route naar landen
            .when('/landen', {
                templateUrl : 'pages/landen.html',
                controller: 'landController'
            })

            // route naar specifieke land pagina
            .when('/landInfo', {
                templateUrl : 'pages/landInfo.html',
                controller: 'singleLandController'
            })

            // route naar contact
            .when('/contact', {
                templateUrl : 'pages/contact.html'
            })

            .otherwise({
                redirectTo: '/'
            });
    });