const { src, dest, parallel, watch } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

/**
 * Minify & compile scss.
 */
function minifyCSS() {
  return src('src/css/index.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('dist/css'));
}

/**
 * Minify all html pages.
 */
function minifyHTML() {
  return src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

module.exports = {
  build: parallel(minifyCSS, minifyHTML),
  watch: () => {
    watch('src/*.html', minifyHTML);
    watch('src/css/**/*.scss', minifyCSS);
  }
};
