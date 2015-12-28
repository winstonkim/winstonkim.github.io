/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
uglify = require('gulp-uglify'),
imagemin = require('gulp-imagemin'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
cache = require('gulp-cache'),
del = require('del'),
browserSync = require('browser-sync').create(),
streamqueue = require('streamqueue');

var paths = {
  css: [
        // Remodal
        'node_modules/remodal/dist/remodal.css',
        'node_modules/remodal/dist/remodal-default-theme.css'
        ],
      // SCSS Files
      scss: [
        // Main CSS File
        'src/styles/main.scss'
        ],
      // JavaScript
      js: {
        // Internal Javascript
        internal: 'src/scripts/*.js',
        // Remodal
        external: 'node_modules/remodal/dist/remodal.js',
      }
    };

// Browsersync
gulp.task('browser-sync', ['styles'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Styles
gulp.task('styles', function() {
  return streamqueue({objectMode: true},
    gulp.src(paths.css),
    gulp.src(paths.scss)
    .pipe(sass())
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/styles'))
    )
  .pipe(minifycss())
  .pipe(concat('combined.min.css'))
  .pipe(gulp.dest('dist/styles'))
  .pipe(browserSync.stream());
});

// Scripts
gulp.task('scripts', function() {
  return streamqueue({objectMode: true},
    gulp.src(paths.js.internal),
    gulp.src(paths.js.external)
    )
  .pipe(concat('main.js'))
  .pipe(gulp.dest('dist/scripts'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(uglify())
  .pipe(gulp.dest('dist/scripts'));
});

// Images
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    // .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'));
});

// Clean
gulp.task('clean', function() {
  return del(['dist/styles', 'dist/scripts', 'dist/images']);
});

// Default task
gulp.task('default', ['clean', 'browser-sync'], function() {
  gulp.start('styles', 'scripts', 'images', 'watch');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles']);

  // Watch .html files
  gulp.watch('*.html').on('change', browserSync.reload);

  // Watch .js files
  gulp.watch('src/scripts/*.js', ['scripts']);

  // Watch image files
  gulp.watch('src/images/**/*', ['images']);

});