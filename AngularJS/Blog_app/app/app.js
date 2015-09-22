angular.module('myApp', ['ngRoute', 'controllers'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
				templateUrl: 'views/post.html',
				controller: 'postcontroller'
	}).when('/page/:id', {
		templateUrl: 'views/page.html',
		controller: 'pageController'
	}).when('/post/:id',{
		templateUrl: 'views/singlepost.html',
		controller: 'singlePostController'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);