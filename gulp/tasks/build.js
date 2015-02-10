var gulp = require('gulp');
var configs = require('../../build.configs.js');

gulp.task('build', ['browserify', 'markup', 'less', 'fonts', 'muiFonts', 'copy-config-xml']);
