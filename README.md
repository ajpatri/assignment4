# Assignment Four

## Specification

Use the restaurant menu REST API to create a master/detail view pair.

Your application should have 3 views (i.e., 3 view states):
* home (`home`)
* categories list (`categories`)
* items list (`items`)

When the user goes to `/` path in your application, a home screen should be
shown. The home screen should have a link to a list of categories of menu
items in the restaurant. Clicking that link would obviously take the user to
the `/categories` view.

The categories view should list all available categories of items on the
menu. Each listing should be a link. Clicking that link should take the user
to the `/items` view. Note that since what the `items` view state shows is
dependent on which category the user clicked, the URL mapping will need to
have a parameter in it. I.e., don't take the URLs I am listing in the
assignment description as literal URLs. They are just naming hints.

Make sure that if, while viewing the list of menu items for a particular
category, the user copies the URL in the browser's address bar and pastes it
into a new tab or a different browser, that the view is the same as the
original one.

1. Name your app `MenuApp`.
2. You must follow the 1 artifact per file rule.
3. Create a file called `menuapp.module.js` and declare an Angular module to match your `ng-app` declaration.
   * Depends on the `data` module
4. Create `data.module.js` file and declare another module in it called `data`
5. Create `menudata.service.js` file and create a service called `MenuDataService` in it.
   * declare on the `data` module. It should have two methods:
    * `getAllCategories` - returns an `$http` promise from:
      * `https://davids-restaurant.herokuapp.com/categories.json`
    * `getItemsForCategory(categoryShortName)` - returns a `$http` promise:
      * `https://davids-restaurant.herokuapp.com/menu_items.json?category=`
      * `categoryShortName` value was passed in as an argument
6. Create `categories.component.js` with a `categories` component that shows all available categories
7. Create `items.component.js` with a `items` componnent that shows all of the menu items for a particular category.
8. The `categories` and the `items` components should *NOT* directly use the
  `MenuDataService` to fetch their own data. Instead, the proper data should be
  simply passed into the component. (Hint: use the one-way `<` binding).
9. Create `routes.js` file and configure your routes and view states in it. These routes should be defined in the `MenuApp` module.
   * *Hint:* The `home` state will not need a controller. Just a template.
   * *Hint:* The `categories` state can have a `controller` as well as a `resolve`. The resolve will use the `MenuDataService` to retrieve categories and inject them into the controller. The controller can then expose the retrieved categories object such that it can be simply passed into the `categories` component.
   * *Hint:* The `items` state can have the same type of setup as the `categories` state.
