angular.module("countriesFactory",[])
  .factory("countries",["$http", function($http){

  function getData(callback){
      $http({
              url: 'countries.json',
              method: 'GET',
              cache: true
            }).success(callback);
  }
  return { list: function(callback){
                      $http({
                        url: 'countries.json',
                        method: 'GET',
                        cache: true
                      }).success(callback);
                    },
          find: function(id, callback){
                $http({
                        url: 'country_'+id+'.json',
                        method: 'GET',
                        cache: true
                    }).success(callback);
              }
        }
}]);