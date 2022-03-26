import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css'
import autoprefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import sassGlob from 'gulp-sass-glob'

const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})
        .pipe(sassGlob())
        .pipe(app.plugins.replace(/@img\//g, `../${app.imageFolderName}/`))
        .pipe(
            sass({
                outputStyle: 'expanded',
                includePaths: ['./node_modules']
            })
        )
        .pipe(
            app.plugins.ifPlugin(
                app.isBuild,
                groupCssMediaQueries()
            )
        )
        .pipe(
            app.plugins.ifPlugin(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserList: ['last 3 version'],
                    cascade: true
                })
            )
        )
        .pipe(
            app.plugins.ifPlugin(
                app.isBuild,
                app.gulp.dest(app.path.build.css)
            )
        )
        .pipe(
            app.plugins.ifPlugin(
                app.isBuild,
                cleanCss()
            )
        )
        .pipe(rename({
                extname: '.min.css'
            })
        )
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}
