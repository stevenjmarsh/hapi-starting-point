var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('lint', function () {
    return gulp.src(['./server.js', './server/**/*.js'])
        .pipe(jshint({ node: true }))
        .pipe(jshint.reporter('default'));
});
