app.factory('Galleries', function ($http, apiUrls, localStorageService) {
	return {
		apiGalleries: apiUrls.base + '/account',

		create: function (gallery) {
			return $http.post(this.apiGalleries + '/galleries', { gallery: gallery }).then(function (res) {
				return res.data;
			});
		}
	};
});