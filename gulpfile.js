'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');

var reload = browserSync.reload;
var $ = require('gulp-load-plugins')({
	lazy: true
});
var config = require('./gulp.config')();

gulp.task('wiredep', function () {
	console.log('Wire up bower css js and app js into html');
	var options = config.getWiredepDefaultOptions();
	var wiredep = require('wiredep').stream;
	return gulp
		.src(config.index)
		.pipe(wiredep(options), {
			relative: true
		})
		.pipe($.inject(gulp.src(config.js), {
			relative: true
		}))
		.pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep'], function () {
	console.log('Wire up app css into html');
	return gulp
		.src(config.index)
		.pipe($.inject(gulp.src(config.css), {
			relative: true
		}))
		.pipe(gulp.dest(config.client));
});

gulp.task('nodemon', ['inject'], function (cb) {
	var called = false;
	return $.nodemon({
			script: 'app.js',
			watch: ['app.js'],
			browser: 'google chrome',
			//ext: 'js html',
			env: {
				'NODE_ENV': 'development'
			},
			ignore: [
				'gulpfile.js',
				'node_modules/'
			]
		})
		.on('start', function () {
			if (!called) {
				called = true;
				cb();
			}
		})
		.on('restart', function () {
			setTimeout(function () {
				reload({
					stream: false
				});
			}, 1000);
		});
});

gulp.task('browser-sync', ['nodemon'], function () {
	browserSync.init({
		files: [config.client + '**/*.*'],
		proxy: "http://localhost:3000", // local node app address
		port: 5000 // use *different* port than above
	});
});

gulp.task('default', ['browser-sync'], function () {
	gulp.watch(['client/*.html'], reload);
	gulp.watch(['client/*.js'], reload);
});