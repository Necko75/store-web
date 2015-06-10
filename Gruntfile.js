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

		less: {
			build: {
				files: {
					'dist/css/app.css': [
						app + '/root/app-module.less'
					]
				}
			}
		},

		ngtemplates: {
			app: {
				cwd: app,
				src: [
					'**/**.html',
					'!index.html',
				],
				dest: tmp + '/templates.js',
				options: {
					htmlmin: { collapseWhitespace: true, collapseBooleanAttributes: true }
				}
			}
			// vendor: {
			// 	cwd: components + '/angular-ui-bootstrap',
			// 	src: [
			// 		'template/datepicker/*.html',
			// 		'template/pagination/*.html',
			// 		'template/carousel/*.html'
			// 	],
			// 	dest: tmp + '/templates.bootstrap.js',
			// 	options: {
			// 		module: 'app',
			// 		htmlmin: { collapseWhitespace: true, collapseBooleanAttributes: true }
			// 	}
			// }
		},

		copy: {
			app: {
				files: [{
					expand: true,
					flatten: true,
					src: app + '/index.html',
					dest: dist
				}]
			},
			bootstrap: {
				files: [{
					expand: true,
					cwd: components + '/bootstrap',
					src: ['fonts/*.*'],
					dest: dist
				}]
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
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// registered tasks //
	grunt.registerTask('default', [ 'clean', 'less', 'ngtemplates', 'copy', 'concat' ]);
};