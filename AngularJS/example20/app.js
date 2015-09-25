var countryApp = angular.module('countryApp', ['ngRoute', 'countryControllers', 'countryDirective', 'countriesFactory']);

countryApp.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'country-list.html',
      controller: 'CountryListController'
    }).
    when('/:countryId', {
      templateUrl: 'country-detail.html',
      controller: 'CountryDetailController'
    }).
    otherwise({
      redirectTo: '/'
    });
});