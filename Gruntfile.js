module.exports = function(grunt) {
	"use strict";

	require('matchdep').filterDev('grunt-!(cli)').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 8911,
					base: 'slides',
					livereload: 35729
				}
			}
		},
		exec: {
			markdown: {
				cmd: 'cd slides/scripts && python render.py'
			},
			less: {
				cmd: 'cd slides/theme/css && lessc --source-map=custom.map custom.less custom.css'
			}
		},
		watch: {
			all: {
				files: ['slides/slides.md', 'slides/scripts/base.html', 'slides/theme/css/custom.less'],
				tasks: ['exec:less', 'exec:markdown'],
			},
			options: {
				livereload: 35729
			}
		}
	});

	grunt.registerTask('default', ['exec:less', 'exec:markdown', 'connect', 'watch']);
};
