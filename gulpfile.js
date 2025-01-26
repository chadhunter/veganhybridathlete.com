var gulp = require('gulp');

// gulp plugins and utils
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var zip = require('gulp-zip');

// postcss plugins
var autoprefixer = require('autoprefixer');
var colorFunction = require('postcss-color-function');
var cssnano = require('cssnano');
var customProperties = require('postcss-custom-properties');
var easyimport = require('postcss-easy-import');

var swallowError = function swallowError(error) {
    gutil.log(error.toString());
    gutil.beep();
    this.emit('end');
};

// Nodemon initialization with proper done callback
var nodemonServerInit = function (done) {
    livereload.listen(1234);
    done();  // Signal that the task is complete
};

// CSS task
function css() {
    var processors = [
        easyimport,
        customProperties,
        colorFunction(),
        autoprefixer(), // Removed browsers option, as autoprefixer will use the default config
        cssnano()
    ];

    return gulp.src('assets/css/*.css')
        .on('error', swallowError)
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/built/'))
        .pipe(livereload());
}

// Watch task
function watch() {
    gulp.watch('assets/css/**', css);
}

// Zip task
function zipTask() {
    var targetDir = 'dist/';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    return gulp.src([
        '**',
        '!node_modules', '!node_modules/**',
        '!dist', '!dist/**'
    ])
        .pipe(zip(filename))
        .pipe(gulp.dest(targetDir));
}

// Build task (runs CSS and then starts the server)
function build(done) {
    gulp.series(css, nodemonServerInit)(done); // Properly handle async task with done
}

// Default task (runs build and watch tasks)
gulp.task('default', gulp.series(build, watch));

// Export tasks to allow running them directly
exports.css = css;
exports.watch = watch;
exports.zip = zipTask;
exports.build = build;
