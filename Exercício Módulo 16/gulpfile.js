const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

// Caminhos dos arquivos
const paths = {
  scss: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
  },
  js: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  },
  images: {
    src: 'src/images/**/*.{jpg,jpeg,png,gif,svg,webp}',
    dest: 'dist/images'
  }
};

// Tarefa para compilar SASS
function compileSass() {
  return gulp.src(paths.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.scss.dest));
}

// Tarefa para comprimir imagens
function compressImages() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

// Tarefa para comprimir e concatenar JavaScript
function compressJS() {
  return gulp.src(paths.js.src)
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest));
}

// Tarefa de watch para monitorar mudanças
function watchFiles() {
  gulp.watch(paths.scss.src, compileSass);
  gulp.watch(paths.js.src, compressJS);
  gulp.watch(paths.images.src, compressImages);
}

// Tarefa build que executa todas as tarefas
const build = gulp.series(compileSass, compressJS, compressImages);

// Tarefa watch
const watch = gulp.series(build, watchFiles);

// Exportar tarefas
exports.sass = compileSass;
exports.images = compressImages;
exports.js = compressJS;
exports.watch = watch;
exports.build = build;
exports.default = build;