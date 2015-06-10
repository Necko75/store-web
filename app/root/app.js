var app = angular.module('app', [
	'ui.router'
]);

app.constant('apiUrls', {
	base: '/api'	
});

app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
	$locationProvider.hashPrefix('!');

	$stateProvider.state('app', {
		abstract: true,
		url: '',
		templateUrl: 'root/app.html',
		controller: 'AppController'
	});

	$urlRouterProvider.otherwise('/');
});