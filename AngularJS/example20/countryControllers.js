var countryControllers = angular.module('countryControllers', []);
countryControllers.controller('CountryListController', ["$scope", "countries", function ($scope, countries){
          countries.list(function(data){
            $scope.countries = data;
          })
      }]);

      countryControllers.controller('CountryDetailController', ["$scope", "$routeParams", "countries", function ($scope, $routeParams, countries){
        countries.find($routeParams.countryId, function(country) {
          $scope.country = country;
        });
}]);
