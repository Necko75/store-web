var app = angular.module('app', [
	'ngResource',
	'ui.router',
	'LocalStorageModule',
	'app.home',
	'app.signup',
	'app.login',
	'app.myspace',
	'app.myspaceProfile'
]);

app.constant('apiUrls', {
	base: '/api'	
});

app.run(function ($location, $rootScope, $state) {
	$rootScope.$on('$stateChangeError', function (e, toState, toParams, fromState, fromParams, error) {
		if (error.code && (error.code == 'REDIRECT')) $state.go(error.state);
	});
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