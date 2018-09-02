// to have ESLint turn off nodejs warnings in this file, add this:
/*eslint-env node*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint');
var browserSync = require('browser-sync').create();
 browserSync.init({
     server: "./"
 });
browserSync.stream();

// const {src, task} = require('gulp');


task('default', () => {
    return src(['scripts/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});


function defaultTask(cb) {
  // place code for your default task here
  gulp.task('default', function() {
  	console.log('hello world!');
  });
  cb();
}

function styles(cb) {

  gulp.task('styles', function() {
  	gulp.src('sass/**/*.scss')
  		.pipe(sass().on('error', sass.logError))
  		.pipe(autoprefixer({
  			browsers: ['last 2 versions']
  		}))
  		.pipe(gulp.dest('./css'));
  });
  cb();
}

exports.default = defaultTask
exports.styles = styles



// To run multiple tasks, you can use gulp <task> <othertask>



// In video, code looks like this: (Lesson 18.6 Setting up ESLint)

// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');
// var browserSync = require('browser-sync').create();
// var eslint = require('gulp-eslint');
//
//
// gulp.task('default', ['styles', 'lint'], function() {
//   gulp.watch('sass/**/*.scss', ['styles']);
//   gulp.watch('js/**/*.js', ['lint']);
//
//   browserSync.init({
//       server: './'
//   });
// });
//
//
// gulp.task('styles', function() {
// 	gulp.src('sass/**/*.scss')
//   	.pipe(sass().on('error', sass.logError))
//   	.pipe(autoprefixer({
// 			browsers: ['last 2 versions']
// 		}))
// 		.pipe(gulp.dest('./css'));
// });
//
// browserSync.stream();
