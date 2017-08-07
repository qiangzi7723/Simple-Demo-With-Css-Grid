var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function() {

    browserSync.init({
        proxy: "http://192.168.253.2:8000/",
        notify: false
    });

    gulp.watch("./concept/*.html").on('change', reload);
});


gulp.task('default', ['serve']);
