var myspaceGalleryList = angular.module('app.myspaceGalleryList', ['ui.router']);

myspaceGalleryList.config(function ($stateProvider) {
	$stateProvider.state('myspace.galleries.list', {
		url: '/list',
		views: {
			'': {
				templateUrl: 'myspace/galleries/list/galleries-list.html',
				controller: 'GalleryListController'
			}
		},
		resolve: {
			galleriesData: ['Galleries', function (Galleries) {
				return Galleries.getAll();
			}]
		}
	});
});