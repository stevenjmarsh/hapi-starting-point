var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    console = require('better-console'),
    stylish = require('jshint-stylish'),
    lab = require('gulp-lab'),
    nodemon = require('gulp-nodemon');

var paths = {
  jsLintFiles: [
    './controllers/**/*.js',
    './knexfile.js',
    './public/**/*.js',
    './routes/**/*.js',
    './server.js',
    './test/**/*.js'
  ],
  allTestSource: [
    './controllers/**/*.js',
    './public/**/*.js',
    './public/**/*.css',
    './routes/**/*.js',
    './server.js',
    './test/**/*.js',
    './views/**/*.html'
  ]
};

gulp.task('clear', function () {
  return console.clear();
});

gulp.task('lint', function () {
  return gulp.src(paths.jsLintFiles)
    .pipe(jshint({ node: true }))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('lintw', ['clear'], function() {
  return gulp.watch(paths.jsLintFiles, ['clear', 'lint']);
});

gulp.task('test', function () {
  return gulp.src('test')
    .pipe(lab('-c'));
});

gulp.task('testw', ['clear'], function () {
  return gulp.watch(paths.allTestSource, ['clear', 'test']);
});

gulp.task('nodemon', ['clear'], function () {
  return nodemon({
    script: './bin/www',
    ext: 'html js css',
    tasks: ['clear']})
  .on('restart', function () {
    console.log('restarted...');
  });
});
