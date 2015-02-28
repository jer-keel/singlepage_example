var app = angular.module("singlePageApp", [
  "ngRoute",
  "singlepageController"
]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
    when("/", {
      templateUrl: "/html/partials/page1"
    }).
    when("/page2", {
      templateUrl: "/html/partials/page2"
    });
}]);
