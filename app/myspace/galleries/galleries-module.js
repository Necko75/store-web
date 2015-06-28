var myspaceGalleries = angular.module('app.myspaceGalleries', ['ui.router']);

myspaceGalleries.config(function ($stateProvider) {
	$stateProvider.state('myspace.galleries', {
		url: '/galleries',
		templateUrl: 'myspace/galleries/galleries.html',
		controller: 'GalleriesController'
	});
});