(function (){
'use script';

angular.module('ShoppingListApp', [])
.controller('ShoppingListShowController', ShoppingListShowController)
.controller('ShoppingListAddController', ShoppingListAddController)
.service('ShoppingListService', ShoppingListService);


ShoppingListShowController.$inject =['ShoppingListService'];
function ShoppingListShowController (ShoppingListService){
    var showList = this;
    showList.items = ShoppingListService.getItems();

    showList.removeItem =function(itemIndex){
        ShoppingListService.removeItem(itemIndex);
    }
}

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController (ShoppingListService){
    var itemAdder = this;
    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";

    itemAdder.addItem = function () {
        ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    };
}

function ShoppingListService () {
    var service = this;

    var items = []
    service.addItem = function (itemName, quantity){
        var item = {
            name: itemName,
            quantity: quantity
        };
        items.push(item);
    };

    service.removeItem = function(itemIndex){
        items.splice(itemIndex,1);
    };

    service.getItems = function () {
        return items;
    };


}

})();
