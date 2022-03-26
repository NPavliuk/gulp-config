import versionNumber from 'gulp-version-number'
import Pug from 'gulp-pug'
import pugIncludeGlobal from 'pug-include-glob'

export const pug = () => {
    return app.gulp.src(app.path.src.pug)
        .pipe(
            Pug({
                pretty: true,
                verbose: true,
                plugins: [
                    pugIncludeGlobal()
                ]
            })
        )
        .pipe(app.plugins.replace(/@img\//g, `${app.imageFolderName}/`))
        .pipe(
            app.plugins.ifPlugin(
                app.isBuild,
                versionNumber({
                    'value':'%DT%',
                    'append': {
                        'key': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js'
                        ]
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    }
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.pug))
        .pipe(app.plugins.browserSync.stream())
}
