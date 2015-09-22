angular.module('controllers',['myDirectives'])
.controller( 'postcontroller',[ '$scope', '$http', function($scope, $http){
		$http.get('data/posts.json').success(function(data){
			$scope.posts = data;
		});		
}])
.controller('pageController',['$scope', '$http','$routeParams', function($scope,$http,$routeParams){
	$http.get('data/pages.json').success(function(data){
			$scope.page = data[$routeParams.id];
		});	

}])
.controller('singlePostController',['$scope', '$http','$routeParams', function($scope,$http,$routeParams){
	$http.get('data/posts.json').success(function(data){
			$scope.post = data[$routeParams.id];
		});
}])