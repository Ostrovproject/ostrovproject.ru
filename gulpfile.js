var gulp = require('gulp');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var useref = require('gulp-useref');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');

var paths = {};
paths.webroot = "./";
paths.frontend_sources = "./src/";

// Less processing
gulp.task('less', function () {
    return gulp.src(paths.frontend_sources + 'less/*.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(autoprefixer({
		    browsers: ['> 1%'],
		    cascade: false
		}))
		.pipe(minifyCss())
		.pipe(gulp.dest(paths.frontend_sources + 'css/'));
});


gulp.task('default', ['less'], function () {
    gulp.watch(paths.frontend_sources + 'less/*.less', ['less']);
});

// minify images
gulp.task('imagemin', function () {
    gulp.src(paths.frontend_sources + 'images/*')
		.pipe(imagemin())
		.pipe(gulp.dest(paths.webroot + 'images'));
});

// build project
gulp.task('build', function () {
    return gulp.src(paths.frontend_sources + '*.html')
		.pipe(useref())
		.pipe(gulp.dest(paths.webroot));
});

// Static server
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./src"
		}
	});
});


// Reload all browsers
gulp.task('bs-reload', function () {
	browserSync.reload();
});

// Task for `gulp` command
gulp.task('default',['less', 'browser-sync'], function() {
	gulp.watch(paths.frontend_sources + '/less/*.less', ['less']);
	gulp.watch(paths.frontend_sources + '*.html', ['bs-reload']);
});