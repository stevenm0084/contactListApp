/**
 * Created by PC1 on 21-Nov-15.
 */
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
    console.log("Hello from Controller!");

    $http.get('/contactlist').success(function(response) {
        console.log("I got the data I requested");
        $scope.contactlist = response;
    });



}]);