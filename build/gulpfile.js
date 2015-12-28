var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');

gulp.task('browserify', function() {
  return gulp.src('./assets/js/main.js')
    .pipe(browserify());
    .pipe(gulp.dest('./assets/js/bundle.js'))

});