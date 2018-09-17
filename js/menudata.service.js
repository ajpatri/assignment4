(function() {
'use strict';

angular.module('data')
  .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', '$q'];
function MenuDataService($http, $q) {
  var service = this;

  service.getAllCategories = getAllCategories;
  service.getItemsForCategory = getItemsForCategory;

  function getAllCategories() {
    return $http({
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    }).then(function(response) {
      return response.data;
    })
  }

  function getItemsForCategory(categoryShortName) {
    return $http({
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
      params: {
        category: categoryShortName
      }
    }).then(function(response) {
      return response.data.menu_items;
    })
  }
}

})();