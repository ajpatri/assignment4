(function() {
'use strict';

var categoriesSpec = {
  templateUrl: "js/templates/categories.template.html",
  bindings: {
    categories: "<",
  }
}

angular.module('MenuApp')
  .component('categories', categoriesSpec);

})();