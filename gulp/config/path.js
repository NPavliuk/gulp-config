// Project folder name
import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './dist'
const srcFolder = './src'

export const path = {
    build: {
        pug: `${buildFolder}/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js:`${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        assets: `${buildFolder}/assets/`,
        svgSprites: `${srcFolder}/images/icons/sprites/`
    },
    src: {
        pug: `${srcFolder}/views/*.pug`,
        html: `${srcFolder}/views/*.html`,
        scss: `${srcFolder}/stylesheets/application.scss`,
        js: `${srcFolder}/javascript/application.js`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/images/**/*.svg`,
        svgIconsMono: `${srcFolder}/images/icons/mono/*.svg`,
        svgIconsMulti: `${srcFolder}/images/icons/multi/*.svg`,
        assets: `${srcFolder}/assets/**/*.*`,
    },
    watch: {
        pug: `${srcFolder}/views/**/*.pug`,
        html: `${srcFolder}/views/**/*.html`,
        scss: `${srcFolder}/stylesheets/**/*.scss`,
        js: `${srcFolder}/javascript/**/*.js`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
        assets: `${srcFolder}/assets/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}
