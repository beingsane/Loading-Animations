module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n\n',
		

		less: {
			css: {
				options: {
					banner: '<%= banner %>',
				},
				files: {
					"dist/loading-animations.css" : "src/loading-animations.less",
				}
			},
			min: {
				options: {
					banner: '<%= banner %>',
					cleancss: true,
				},
				files: {
					"dist/loading-animations.min.css" : "src/loading-animations.less",
				},
			},
		},
		
		watch: {
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['less'],
			},
			less: {
				files: 'src/**/*.less',
				tasks: ['less'],
			},
		},
		
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['less']);

};
