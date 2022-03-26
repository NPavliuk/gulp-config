import imageMin from 'gulp-imagemin'

export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(app.plugins.newer(app.path.src.images))
        .pipe(
            app.plugins.ifPlugin(
                app.isBuild,
                imageMin({
                    progressive: true,
                    svgoPlugins: [{removeViewBox: false}],
                    interlaced: true,
                    optimizationLevel: 3 // 0 to 7
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream())
}
