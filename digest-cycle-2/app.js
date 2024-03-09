(function (){
'use script';

angular.module('CounterApp', [])
.controller('CounterController', CounterController)

CounterController.$inject = ['$scope', '$timeout'];

function CounterController ($scope, $timeout) {
    $scope.counter = 0;

    //Implementing $digest
    // $scope.upCounter = function () {
    //     setTimeout(function () {
    //         $scope.counter++;
    //         console.log("Counter incremented. Implemented using $digest");
    //         $scope.$digest();
    //     }, 2000);
    // }

    //Implementing $apply
    // $scope.upCounter = function(){
    //     setTimeout(function (){
    //         $scope.$apply( function(){
    //             $scope.counter++;
    //             console.log("Counter incremented. Implemented using $apply.");
    //         });
    //     }, 2000);
    // };

    //Implementing Angular-specific function
    $scope.upCounter = function () {
        $timeout(function () {
            $scope.counter++;
            console.log("Counter incremented. Implemented using Angular-specific function.")
        },2000);
    };
}


})();