var gulp = require('gulp')
    webpack = require('webpack-stream')
    webpackConfig = require('./webpack.config.js')
    ;

gulp.task('build', function(cb) {
  return gulp.src('')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(''));
});
