'use strict';

module.exports = function () {
    
}
//copy bower assets that need copying
$.gulp.task('bower:assets', function() {
    return gulp.src(mainBowerFiles(), {
        base: './bower_components'
    })
        .pipe(filter([
            '**/*.{png,gif,svg,jpeg,jpg,woff,eot,ttf}',
            '!foundation/**/*',
            '!compass-mixins/**/*'
        ]))
        .pipe(gulp.dest('./site/dist'));
});

//generate bower stylesheets with correct asset paths
gulp.task('bower:styles', function() {
    return gulp.src(mainBowerFiles(), {
        base: './bower_components'
    })
        .pipe(filter([
            '**/*.{css,scss}',
            '!foundation/**/*',
            '!compass-mixins/**/*'
        ]))
        .pipe(foreach(function(stream, file) {
            var dirName = path.dirname(file.path);
            return stream
                .pipe(rework(reworkUrl(function(url) {
                    var fullUrl = path.join(dirName, url);
                    if (fs.existsSync(fullUrl)) {
                        bowerCopyFiles.push(fullUrl);
                        console.log(path.relative('css', fullUrl).replace(/bower_components/, 'dist'));
                        return path.relative('css', fullUrl).replace(/bower_components/, 'dist');
                    }
                    return url;
                })));
        }))
        .pipe(sourcemaps.init())
        .pipe(concat('bower.css'))
        .pipe(minifyCss())
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest(stylesDest));
});