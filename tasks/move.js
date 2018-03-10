const gulp = require('gulp');
const webpack = require('webpack-stream');
const uglify = require('gulp-uglify');

const { destDir, filesToMove } = require('./start');
const webpackConfig = require('../webpack.prod.config.js');

gulp.task('source', moveFiles(filesToMove.source, `${destDir}/js`, true));
gulp.task('css', moveFiles(filesToMove.css, `${destDir}/css`, false));
gulp.task('view', moveFiles(filesToMove.view, `${destDir}`, false));

function moveFiles(filesToMove, destDir, shouldTranspile, shouldUglify = false) {
    return function () {
        transpile(gulp.src(filesToMove), shouldTranspile, shouldUglify)
            .on('error', handleError)
            .pipe(gulp.dest(destDir));
    };
};

function transpile(source, shouldTranspile, shouldUglify) {
    if (shouldTranspile) {
        return source.pipe(webpack(webpackConfig, require('webpack')));
    } else if (shouldUglify) {
        return source.pipe(uglify());
    } else {
        return source;
    }
};

function handleError(error) {
    console.log(error);
    this.emit('end');
};
