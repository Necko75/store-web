var myspaceProfile = angular.module('app.myspaceProfile', ['ui.router']);

myspaceProfile.config(function ($stateProvider) {
	$stateProvider.state('myspace.profile', {
		url: '/profile',
		templateUrl: 'myspace/profile/profile.html',
		controller: 'ProfileController'
	});
});