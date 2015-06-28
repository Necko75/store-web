app.service('translationService', function ($resource) {
	
	this.getTranslation = function($scope, language) {
		var url = '../translations/translation_' + language + '.json';
		
		return $resource(url, {}, { get: { cache: true, method: 'get' } }).get(function (data) {
			$scope.translation = data;
		});
	};
});