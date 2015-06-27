app.controller('AppController', function ($scope, $state, accountData, localStorageService) {
	$scope.account = !!(accountData && accountData.accountId); // true, false //

	var initSession = function () {
		$scope.account = JSON.parse(localStorageService.get('session'));
	};

	var goHome = function () {
		$state.go('home');
	}

	if ($scope.account) initSession();
	else $scope.account = {};

	$scope.$on('account-login', function () {
		initSession();
		goHome();
	});

	$scope.$on('account-logout', function () {
		localStorageService.clearAll();
		$scope.account = {};
		goHome();
	});
});