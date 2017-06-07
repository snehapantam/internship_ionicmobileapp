/**
 * Created by sreen on 5/31/2017.
 */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var exec = require('child_process').exec;
var gulpSequence = require('gulp-sequence');

gulp.task('server', function () {
  nodemon({
    script: './src/server/server.js'
    , ext: 'js html'
    , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('run', function(){
  exec('ionic-app-scripts serve', function (err, stdout, stderr) {});
});

gulp.task('start', gulpSequence(['server','run']));
