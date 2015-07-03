app.factory('authInterceptor', function (localStorageService) {
	return {
		request: function (config) {
			var session = JSON.parse(localStorageService.get('session'));

			if (session && session.token) config.headers['token'] = session.token;
			return config;
		}
	}
});