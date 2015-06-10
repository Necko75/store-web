var home = angular.module('app.home', ['ui.router']);

home.config(function ($stateProvider) {
	$stateProvider.state('home', {
		parent: 'app',
		url: '/',
		views: {
			'': {
				templateUrl: 'home/home.html',
				controller: 'HomeController'
			}
		}
	});
});