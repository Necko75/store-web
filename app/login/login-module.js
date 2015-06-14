var login = angular.module('app.login', ['ui.router']);

login.config(function ($stateProvider) {
	$stateProvider.state('login', {
		parent: 'app',
		url: '/login',
		views: {
			'': {
				templateUrl: 'login/login.html',
				controller: 'LoginController'
			}
		}
	});
});