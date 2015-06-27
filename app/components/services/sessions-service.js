app.factory('Sessions', function ($http, apiUrls, localStorageService) {
	return {
		apiLogin: apiUrls.base + '/account',

		get: function (token) {
			if (!token) {
				var session = JSON.parse(localStorageService.get('session'));

				if (session && session.token) token = session.token;
				else return {};
			}

			return $http.get(this.apiLogin + '/session/' + token).then(function (res) {
				return res.data;
			});
		},

		loginAction: function (userData) {
			return $http.post(this.apiLogin + '/login', { user: userData }).then(function (res) {
				return res.data;
			});
		}
	};
});