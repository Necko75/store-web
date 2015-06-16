login.controller('LoginController', function ($scope, Sessions) {
	$scope.user = {};

	$scope.submit = function () {
		Sessions.loginAction($scope.user).then(
			function (user) {
				console.log($scope.user);
			},
			function (err) {
				console.log(err);
			}
		);
	};
});