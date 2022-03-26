import webpack from 'webpack-stream'

export const javascript = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
                filename: 'application.min.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream())
}