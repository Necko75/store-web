app.controller('AppController', function ($scope, $state, accountData, localStorageService, translationService) {
	$scope.account = !!(accountData && accountData.accountId); // true, false //
	$scope.selectedLanguage = 'en';

	var initSession = function () {
		$scope.account = JSON.parse(localStorageService.get('session'));
	};

	var goHome = function () {
		$state.go('home');
	};

	if ($scope.account) initSession();
	else $scope.account = {};

	$scope.translate = function () {
		translationService.getTranslation($scope, $scope.selectedLanguage);
	};

	$scope.$on('account-login', function () {
		initSession();
		goHome();
	});

	$scope.$on('account-logout', function () {
		localStorageService.clearAll();
		$scope.account = {};
		goHome();
	});

	$scope.$on('change-language', function (event, language) {
		if (!language && !angular.isObject(language)) return false;

		$scope.selectedLanguage = language.shortName;
		$scope.translate();
	});

	$scope.translate();
});