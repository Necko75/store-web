myspaceGalleryCreate.controller('GalleryCreateController', function ($scope, apiUrls, Upload) {
	$scope.gallery = {
		files: []
	};

	$scope.upload = function () {
		console.log('uploading');

		Upload.upload({
			url: apiUrls.base + '/account/galleries/create',
			file: $scope.gallery.files,
			method: 'POST'
		});
		// if (files && files.length) {
		// 	for (var i = 0; i < files.length; i++) {
		// 		var file = files[i];
		// 		console.log(file);
		// 		Upload.upload({
		// 			url: 'upload/url',
		// 			fields: {'username': $scope.username},
		// 			file: file
		// 		}).progress(function (evt) {
		// 			var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
		// 			console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
		// 		}).success(function (data, status, headers, config) {
		// 			console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
		// 		});
		// 	}
		// }
	};

	$scope.createGallery = function () {
		if (!$scope.gallery.name || !$scope.gallery.files.length) return false;

		$scope.upload();
	}

	$scope.$watch('afile', function () {
		if (!$scope.afile) return false;

		$scope.gallery.files.push($scope.afile[0]);
		console.log($scope.gallery.files);
	});
});