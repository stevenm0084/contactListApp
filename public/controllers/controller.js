/**
 * Created by PC1 on 21-Nov-15.
 */
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
    console.log("Hello from Controller!");

    var refresh = function() {
        $http.get('/contactlist').success(function (response) {
            console.log("I got the data I requested");
            $scope.contactlist = response;
            $scope.contact = "";
        });
    };

    refresh();

    $scope.addContact = function(){
        console.log('adding new contact to db');
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function (response) {
            console.log(response);
            refresh();
        });
    };

    $scope.deleteContact = function (id) {
        console.log('deleting contact: ' + id);
        $http.delete('/contactlist/' + id).success(function (response) {
            console.log(response);
            refresh();
        });

    };

}]);