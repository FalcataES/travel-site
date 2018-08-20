var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

//Watch Task
gulp.task('watch', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir:"app"
    }
  });
  watch('./app/index.html', function () {
    browserSync.reload();
  });
  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('cssInject');
  });
});

// Inject Task
gulp.task('cssInject', ['styles'], function () {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());

});
