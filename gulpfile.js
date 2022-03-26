// General
import gulp from 'gulp'
// Path
import { path } from './gulp/config/path.js'
// Plugins
import { plugins } from './gulp/config/plugins.js'

// Global variable
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
  // Get access the 'img' folder use src='@img/..' in html files or url('@img/..') in scss files
  imageFolderName: 'img'
}

// Tasks
import { copy } from './gulp/tasks/copy.js'
import { clean } from './gulp/tasks/clean.js'
import { pug } from './gulp/tasks/pug.js'
import { scss } from './gulp/tasks/scss.js'
import { javascript } from './gulp/tasks/javascript.js'
import { images } from './gulp/tasks/images.js'
import { ttfToWoff, fontStyle } from './gulp/tasks/fonts.js'
import { svgSprite } from './gulp/tasks/svgSprite.js'
// import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'

// Watchers
const watcher = () => {
  gulp.watch(path.watch.assets, copy)
  // To use html config use 'html' tack instead of 'pug' task
  // gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.pug, pug)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, javascript)
  gulp.watch(path.watch.js, images)
}

// Fonts ttf to woff/woff2 & create font.scss with connected fonts
const fonts = gulp.series(ttfToWoff, fontStyle)
export { fonts }

// Create sprite.svg file
export { svgSprite }

const mainTasks = gulp.series(fonts, gulp.parallel(copy, pug, scss, javascript, images))

// Gulp development mode
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server))
export { dev }

// Gulp production mode
const build = gulp.series(clean, mainTasks)
export { build }
