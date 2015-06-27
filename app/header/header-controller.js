app.controller('HeaderController', function ($scope) {
	$scope.logout = function () {
		$scope.$emit('account-logout');
	}
});