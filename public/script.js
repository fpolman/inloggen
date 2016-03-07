// modeule aanmaken met de naam travelApp
    var travelApp = angular.module('travelApp', []);

    // controller aanmaken
    travelApp.controller('mainController', function($scope) {

        // bericht in de view
        $scope.message = 'test bericht';
    });