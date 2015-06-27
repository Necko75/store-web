app.service('translationService', function ($resource) {
	
	this.getTranslation = function($scope, language) {
		$resource('../translations/translation_' + language + '.json').get(function (data) {
			$scope.translation = data;
		});
	};
});