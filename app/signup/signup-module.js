var signup = angular.module('app.signup', ['ui.router']);

signup.config(function ($stateProvider) {
	$stateProvider.state('signup', {
		parent: 'app',
		url: '/signup',
		views: {
			'': {
				templateUrl: 'signup/signup.html',
				controller: 'SignUpController'
			}
		}
	});
});