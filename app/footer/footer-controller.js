app.controller('FooterController', function ($scope) {
	$scope.languages = [
		{ shortName: 'en', name: 'English' },
		{ shortName: 'fr', name: 'Français' }
	];

	$scope.myLanguage = $scope.languages[0];

	$scope.changeLanguage = function (myLanguage) {
		$scope.myLanguage = myLanguage;
		$scope.$emit('change-language', $scope.myLanguage);
	};
});