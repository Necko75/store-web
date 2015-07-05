myspaceGalleryCreate.controller('GalleryCreateController', function ($scope, apiUrls, Upload) {
	$scope.gallery = {
		files: []
	};

	$scope.upload = function () {
		Upload.upload({
			url: apiUrls.base + '/account/galleries',
			file: $scope.gallery.files,
			fields: { 'galleryName': $scope.gallery.name }
		}).success(function (data) {
		});
	};

	$scope.createGallery = function () {
		if (!$scope.gallery.name || !$scope.gallery.files.length) return false;

		$scope.upload();
	}

	$scope.$watch('afile', function () {
		if (!$scope.afile) return false;

		$scope.gallery.files.push($scope.afile[0]);
	});
});