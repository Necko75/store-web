app.controller('AppController', function ($scope, $state, accountData, localStorageService) {
	$scope.account = !!(accountData && accountData.accountId); // true, false //

	var initSession = function () {
		$scope.account = JSON.parse(localStorageService.get('session'));
	}

	if ($scope.account) initSession();
	else $scope.account = {};

	$scope.$on('account-login', function () {
		initSession();
		$state.go('home');
	});

	$scope.$on('account-logout', function () {
		localStorageService.clearAll();
		$scope.account = {};
		$state.go('home');
	});
});