app.factory('Sessions', function ($http, apiUrls) {
	return {
		apiLogin: apiUrls.base + '/users',

		loginAction: function (userData) {
			$http.post(this.apiLogin + '/login', { user: userData }).then(function (res) {
				return res.data;
			});
		}
	};
});