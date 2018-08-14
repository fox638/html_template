'use strict';

module.exports = function () {
    $.gulp.task('fontsSync', function () {
        return $.gulp.src('./source/fonts/*.*', {since:$.gulp.lastRun('fontsSync')})
            .pipe($.gp.debug({title:'Font'}))
            // .pipe($.gp.plumber())
            // .pipe($.gp.directorySync($.config.assetsDir + 'fonts/', $.config.root + '/assets/fonts'))
            .pipe($.gulp.dest($.config.root + '/assets/fonts'))
            .pipe($.browserSync.stream());
    })
};
