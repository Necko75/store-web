myspaceGalleryCreate.controller('GalleryCreateController', function ($scope, Upload) {
	$scope.gallery = {
		files: []
	};

	$scope.upload = function () {
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

	$scope.$watch('afile', function () {
		if (!$scope.afile) return false;

		$scope.gallery.files.push($scope.afile[0]);
		console.log($scope.gallery.files);
		$scope.upload($scope.gallery.files);
	});
});