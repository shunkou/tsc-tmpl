var gulp = require('gulp')
    uglify = require('gulp-uglify')
    rename = require('gulp-rename')
    webpack = require('webpack-stream')
    webpackConfig = require('./webpack.config.js')
    ;

gulp.task('build', () => {
  return gulp.src('')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(''));
});

gulp.task('compress', ['build'], () => {
  return gulp.src('./built/bundle.js')
    .pipe(uglify())
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('./built'));
});
