myspaceGalleryList.controller('GalleryListController', function ($scope, galleriesData) {
	$scope.galleries = galleriesData;
	console.log($scope.galleries);
});