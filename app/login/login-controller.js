login.controller('LoginController', function ($scope, Sessions) {
	var user = {};

	$scope.submit = function () {
		Sessions.loginAction(user).then(
			function (user) {
				console.log(user);
			},
			function (err) {
				console.log(err);
			}
		);
	};
});