(function (){
'use strict';

angular.module('MsgApp',[])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
    $scope.name = "Dianne";
    $scope.stateOfBeing = "lumipad";
    $scope.sayMessage = function () {
        return "Dianne likes to code";
    };

    $scope.showKaren = function () {
        $scope.stateOfBeing = "karen";
    };
}

})();