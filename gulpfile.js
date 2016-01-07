// var notify = require("gulp-notify");
var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var plumber = require('gulp-plumber');

//file location paths
var path = {
  js: ['./assets/js/main.js'],
  css: ['./assets/css/main.scss']
}

//browserify to import dependencies
gulp.task('browserify', function() {
  return browserifySetup();
})

//sass to compile css
gulp.task('sass', function() {
  gulp.src(path.css)
    .pipe(plumber({
      errorHandler: function (err) {
          gutil.log( gutil.colors.yellow(err.message));
          gutil.beep();
          this.emit('end');
      }
    }))
    .pipe(sassGlob())
    .pipe(sass({style: 'expanded'}))
    .pipe(concat('bundle.css'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./assets/css/'))
});

gulp.task('default', ['browserify'], function() {
  gulp.watch('./assets/css/**/*.scss', ['sass']);
});

//====== helper functions =====//

//finds dependencies and updates on changes with watchify
function browserifySetup() {
  var b = browserify( path.js, {
    transform: [reactify],
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true
  });
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