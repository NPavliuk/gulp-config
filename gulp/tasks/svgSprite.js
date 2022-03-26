import gulpSvgSprite from 'gulp-svg-sprite'

export const svgSprite = () => {
    return app.gulp.src(app.path.src.svgIconsMono)
        .pipe(gulpSvgSprite({
            mode: {
                symbol: {
                    sprite: `../sprite-mono.svg`,
                    example: false
                }
            },
            shape: {
                transform: [{
                    svgo: {
                        plugins: [
                            {
                                removeAttrs: {
                                    attrs: ['class', 'data-name', 'fill', 'stroke.*']
                                }
                            }
                        ]
                    }
                }]
            }
        }))
        .pipe(app.gulp.dest(app.path.build.svgSprites))
        .pipe(app.gulp.src(app.path.src.svgIconsMulti))
        .pipe(gulpSvgSprite({
            mode: {
                symbol: {
                    sprite: `../sprite-multi.svg`,
                    example: false
                }
            },
            shape: {
                transform: [{
                    svgo: {
                        plugins: [
                            {
                                removeAttrs: {
                                    attrs: ['class', 'data-name']
                                },
                            },
                            {
                                removeUselessStrokeAndFill: false,
                            },
                            {
                                inLineStyles: true,
                            }
                        ]
                    }
                }]
            }
        }))
        .pipe(app.gulp.dest(app.path.build.svgSprites))
}
