// var notify = require("gulp-notify");
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  return browserifySetup();
})

gulp.task('sass', function() {
  gulp.src('./assets/css/main.scss')
    .pipe(sass({style: 'expanded'})
      .on('error', sass.logError))
    .pipe(concat('main.css'))
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
  b.transform(reactify);
  b = watchify(b);
  rebundle(b);

  b.on('update', function() {
    gutil.log('updating dependencies');
    rebundle(b);
  });
};

function rebundle(b) {
  var stream = b.bundle()
  return stream
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./assets/js/'))
};