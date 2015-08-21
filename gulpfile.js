var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('default', function() {
   
});

gulp.task('sass', function(){
  return gulp.src('style/sass/**/*.+(scss|sass)')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('style/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browser-sync', function(){
  var files = [
    './style/css/**/*.css',
    './*.php'
  ];

  browserSync.init(files, {
    proxy: "localhost/reneescobar/",
    notify: false,
  });

});

gulp.task('watch', ['browser-sync', 'sass'], function(){
  gulp.watch('app/scss/**/*.+(scss|sass)', ['sass']);
  gulp.watch('./*.php');
})