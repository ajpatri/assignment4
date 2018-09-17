(function() {
'use strict';

angular.module('MenuApp')
  .config(router);

router.$inject = ["$urlRouterProvider", "$stateProvider"];
function router($urlRouterProvider, $stateProvider) {

  var homeState = {
    name: "home",
    url: "/",
    templateUrl: "js/templates/home.template.html"
  }

  var categoriesState = {
    name: "categories",
    url: "/categories",
    component: "categories",
    resolve: {
      categories: ["MenuDataService", resolveCategories]
    }
  }

  var itemsState = {
    name: "items",
    url: "/items/{category}",
    component: "items",
    resolve: {
      items: ["MenuDataService", "$transition$", resolveItems]
    }
  }

  $stateProvider
    .state(homeState)
    .state(categoriesState)
    .state(itemsState);

  $urlRouterProvider
    .otherwise("/")

  function resolveCategories(MenuDataService) {
    return MenuDataService.getAllCategories()
  }

  function resolveItems(MenuDataService, $transition$) {
    return MenuDataService.getItemsForCategory($transition$.params().category);
  }

}

})();