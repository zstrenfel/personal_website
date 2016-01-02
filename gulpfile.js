// var notify = require("gulp-notify");
var gulp = require('gulp');
var sass = require('gulp-sass');
// var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  return browserifySetup();
})

gulp.task('sass', function() {
  gulp.src('./assets/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'))
});

gulp.task('default', ['browserify'], function() {
  gulp.watch('./assets/css/**/*.scss', ['sass']);
});

//====== helper functions =====//

//finds dependencies and updates on changes with watchify
function browserifySetup() {
  var b = browserify('./assets/js/main.js', {
    cache: {},
    packageCache: {},
    fullPaths: true
  });
  b = watchify(b);
  b.transform(reactify);

  b.on('update', function() {
    rebundle(b);
  });
};

function rebundle(b) {
  var stream = b.bundle()
  return stream
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./assets/js/'))
};