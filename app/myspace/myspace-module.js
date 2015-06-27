var myspace = angular.module('app.myspace', ['ui.router']);

myspace.config(function ($stateProvider) {
	$stateProvider.state('myspace', {
		parent: 'app',
		abstract: true,
		url: '/myspace',
		templateUrl: 'myspace/myspace.html',
		controller: 'MySpaceController',
		resolve: {
			hasAccount: ['$q', 'Sessions', function ($q, Sessions) {
				return Sessions.get().then(function (account) {
					if (!account) return $q.reject({
						code: 'REDIRECT',
						state: 'home'
					});
				});
			}]
		}
	});
});