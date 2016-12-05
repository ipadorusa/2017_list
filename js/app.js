'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/intro', {templateUrl: 'partials/intro.html', controller: GenericViewCtrl});
    $routeProvider.when('/codelist', {templateUrl: 'partials/codelist.html', controller: GenericViewCtrl});
    $routeProvider.when('/edashboard', {templateUrl: 'partials/edashboard.html', controller: GenericViewCtrl});
    $routeProvider.when('/pharosjava', {templateUrl: 'partials/pharosjava.html', controller: GenericViewCtrl});
    $routeProvider.otherwise({redirectTo: '/intro'});
  }]);
