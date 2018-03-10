const exec = require('child_process').exec;
const gulp = require('gulp');
const spawn = require('child_process').spawn;

var node;

const destDir = 'src-prod';

const filesToMove = {
    source: ['./client/js/**/*'],
    server: ['./server/**/*.js'],
    css: ['./client/css/**/*.*'],
    view: ['./client/view/index.ejs']
};

gulp.task('watch', function () {
    gulp.watch(filesToMove.source, ['source']);
    gulp.watch(filesToMove.view, ['view']);
    gulp.watch(filesToMove.server, ['server']);
    gulp.watch(filesToMove.css, ['css']);
    gulp.watch(filesToMove.images, ['images']);
});

gulp.task('prod', function () {
    setTimeout(function () {
        gulp.start('source');
        gulp.start('view');
        gulp.start('css');
    }, 4000);
});

module.exports = {
    filesToMove: filesToMove,
    destDir: destDir
};
