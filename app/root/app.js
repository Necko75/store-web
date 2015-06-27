var app = angular.module('app', [
	'ngResource',
	'ui.router',
	'LocalStorageModule',
	'app.home',
	'app.signup',
	'app.login'
]);

app.constant('apiUrls', {
	base: '/api'	
});

app.config(function ($locationProvider, $stateProvider, $urlRouterProvider, localStorageServiceProvider) {
	$locationProvider.hashPrefix('!');

	$stateProvider.state('app', {
		abstract: true,
		url: '',
		templateUrl: 'root/app.html',
		controller: 'AppController',
		resolve: {
			accountData: [ 'Sessions', function (Sessions) {
				return Sessions.get();
			} ],
		}
	});

	$urlRouterProvider.otherwise('/');

	localStorageServiceProvider.setPrefix('seemypaints');
});