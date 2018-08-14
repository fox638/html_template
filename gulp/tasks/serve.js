'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      open: false,
      cors: true,
      server: $.config.root,
        middleware:[function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            next();
        }]
    });

    $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });
};
