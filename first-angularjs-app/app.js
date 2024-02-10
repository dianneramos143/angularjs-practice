(function () {
'use strict';

angular.module('myFirstApp', [])
.controller('myFirstController', function ($scope) {
    $scope.name = "dianne";
    $scope.sayHello = function() {
        return "Hello AngularJS";
    };
});
}

)();