app.factory('Galleries', function ($http, apiUrls, localStorageService) {
	return {
		apiGalleries: apiUrls.base + '/account',

		getAll: function () {
			return $http.get(this.apiGalleries + '/galleries').then(function (res) {
				return res.data;
			});
		},

		create: function (gallery) {
			return $http.post(this.apiGalleries + '/galleries', { gallery: gallery }).then(function (res) {
				return res.data;
			});
		}
	};
});