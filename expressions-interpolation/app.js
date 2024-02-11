(function (){
'use script';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter)

MsgController.$inject= ['$scope', 'lovesFilter'];

function MsgController ($scope, lovesFilter){
    $scope.name = "Dianne";
    $scope.stateOfBeing = "before";
   
    $scope.drinkCost = 250;
    $scope.drink = function (){
        $scope.stateOfBeing = "after";
    }

    $scope.sayMessage = function () {
        return "Dianne likes to drink water and code.";
    } 

    $scope.sayLovesMessage = function(){
        var msg = "Dianne likes to drink water and code.";
        msg = lovesFilter(msg);
        return msg;
    }
}



function LovesFilter (){
    return function (input) {
        input = input || "";
        input = input.replace("likes", "loves");
        return input;
    }
}

function TruthFilter () {
    return function (input, target, replace) {
        input = input || "";
        input = input.replace(target, replace);
        return input;
    }
}

})();