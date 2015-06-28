var myspaceGalleryCreate = angular.module('app.myspaceGalleryCreate', ['ui.router']);

myspaceGalleryCreate.config(function ($stateProvider) {
	$stateProvider.state('myspace.galleries.create', {
		url: '/create',
		views: {
			'': {
				templateUrl: 'myspace/galleries/create/gallery-create.html',
				controller: 'GalleryCreateController'
			}
		}
	});
});