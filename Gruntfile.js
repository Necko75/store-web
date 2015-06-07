module.exports = function (grunt) {
	var app = 'app';
	var dist = 'dist';
	var tmp = 'tmp';

	var components = 'bower_components';

	grunt.initConfig({
		clean: {
			build: {
				src: [ dist, tmp ]
			}
		},

		concat: {
			build: {
				src: [
					app + '/root/app.js',
					app + '/**/*-module.js',
					app + '/**/*-service.js',
					app + '/**/*-utils.js',
					app + '/**/*-controller.js',
					app + '/**/*-directive.js'

				],
				dest: dist + '/js/app.js'
			},
			vendor: {
				src: [
					components + '/angular/angular.js',
					components + '/angular-ui-router/release/angular-ui-router.js'
				],
				dest: dist + '/js/vendor.js'
			}
		}
	});

	// loaded tasks //
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// registered tasks //
	grunt.registerTask('default', [ 'clean', 'concat' ]);
};