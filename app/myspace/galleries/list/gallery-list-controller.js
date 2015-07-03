myspaceGalleryList.controller('GalleryListController', function ($scope, galleriesData) {
	$scope.galleries = galleriesData;
	$scope.coucou = "fdffd";
	console.log($scope.galleries);
});