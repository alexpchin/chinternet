module.exports = function(grunt) {
  require('time-grunt')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      src: [
        'src/assets/js/app.js'
      ]
    },
    bower_concat: {
      all: {
        dest: 'src/assets/js/bower.js',
        cssDest: 'src/assets/scss/bower.scss',
        dependencies: {
          'bootstrap': ['jquery', 'tether']
        },
        mainFiles: {
          'bootstrap': ['dist/css/bootstrap.css'],
          'font-awesome': ['/css/font-awesome.css'],
          'animate.css': ['/animate.min.css']
        }
      }
    },
    concat: {
      dist: {
        src: [
          'src/assets/js/bower.js',
          'src/assets/js/app.js',
          'src/assets/js/**/*.js'
        ],
        dest: 'src/js/app.js'
      }
    },
    sass: {
      expanded: {
        options: { outputStyle: 'expanded' },
        files: {
          'src/css/app.css': 'src/assets/scss/style.scss'
        }
      },
      compressed: {
        options: { outputStyle: 'compressed' },
        files: {
          'src/css/app.min.css': 'src/assets/scss/style.scss'
        }
      }
    },
    postcss: {
      options: {
        map: {
          inline: false, // save all sourcemaps as separate files...
          annotation: 'src/css/maps/' // ...to the specified directory
        },
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        ]
      },
      dist: {
        src: 'src/css/*.css'
      },
    },
    uglify: {
      'src/js/app.min.js': 'src/js/app.js'
    },
    watch: {
      configFiles: {
        files: ['Gruntfile.js', 'package.json'],
        options: { reload: true }
      },
      scss: {
        files: ['src/assets/**/*.scss'],
        tasks: ['sass', 'postcss'],
        options: { livereload: true }
      },
      js: {
        files: ['src/assets/js/**/*.js'],
        tasks: ['jshint', 'concat', 'uglify'],
        options: { livereload: true }
      },
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'jshint',
    'bower_concat',
    'concat',
    'uglify',
    'sass',
    'postcss',
    'watch'
  ]);
};
