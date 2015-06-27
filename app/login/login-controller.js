login.controller('LoginController', function ($scope, Sessions, localStorageService) {
	$scope.user = {};

	$scope.submit = function () {
		Sessions.loginAction($scope.user).then(
			function (token) {
				var data = {
					token: token,
					email: $scope.user.email
				}

				localStorageService.set('session', JSON.stringify(data));
				$scope.$emit('account-login');
			},
			function (err) {
				console.log(err);
			}
		);
	};
});