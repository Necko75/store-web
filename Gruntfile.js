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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('default', [ 'clean' ]);
};