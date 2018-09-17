(function() {
'use strict';

var itemSpec = {
  templateUrl: "js/templates/items.template.html",
  bindings: {
    items: "<",
  }
}

angular.module("MenuApp")
  .component("items", itemSpec)

})()