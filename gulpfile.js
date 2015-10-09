// Include gulp & del
var gulp = require('gulp'); 
var del = require('del');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var copy = require('gulp-copy');
var runSequence = require('run-sequence');
var handlebars = require('handlebars');
var gulpHandlebars = require('gulp-handlebars-html')(handlebars);

var dirs = {
    source: 'src',
    release: 'dist'
}

// Clean
gulp.task('clean', function (cb) {
    del([dirs.release], cb);
});

// Copy files
/*gulp.task('copy:html', function() {
    return gulp.src(dirs.source+'/*.html')
        .pipe(copy(dirs.release, {prefix: 1}));
});*/
gulp.task('copy:images', function() {
    return gulp.src(dirs.source+'/images/*')
        .pipe(copy(dirs.release, {prefix: 1}));
});
gulp.task('copy:scripts', function() {
    return gulp.src([
            dirs.source+'/vendor/jquery/dist/jquery.min.js', 
            dirs.source+'/vendor/bootstrap/dist/css/bootstrap.min.css',
            dirs.source+'/vendor/bootstrap/dist/js/bootstrap.min.js',
            dirs.source+'/vendor/font-awesome/css/font-awesome.min.css',
            dirs.source+'/vendor/font-awesome/fonts/*'
        ]).pipe(copy(dirs.release, {prefix: 1}));
});

// Handlerbars taks
gulp.task('handlebars', function(){
    var templateData = {},
        options = {
            partialsDirectory : [dirs.source+'/partials']
        };

    return gulp.src(dirs.source+'/index.hbs')
        .pipe(gulpHandlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(dirs.release+'/'));
});

// Lint Tasks
gulp.task('lint:before', function() {
    return gulp.src(dirs.source+'/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
gulp.task('lint:after', ['minify'], function() {
    return gulp.src([
            dirs.release+'/js/built.min.js',
            dirs.release+'/js/built.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('concat', function() {
    return gulp.src(dirs.source+'/js/*.js')
        .pipe(concat('built.js'))
        .pipe(gulp.dest(dirs.release+'/js'));
});
gulp.task('minify', function() {
    return gulp.src(dirs.release+'/js/built.js')
        .pipe(rename('built.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dirs.release+'/js'));
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src(dirs.source+'/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dirs.release+'/css'));
});

// Watch
gulp.task('watch', function() {
    gulp.watch(dirs.source+'/index.hbs', ['handlebars']);
    gulp.watch(dirs.source+'/partials/*', ['handlebars']);
    gulp.watch(dirs.source+'/js/*.js', ['lint:before', 'concat']);
    gulp.watch(dirs.source+'/scss/*.scss', ['sass']);
});

// Build and release tasks
gulp.task('release', function(callback){
    runSequence('build', ['minify', 'lint:after'], callback);
}); 
gulp.task('build', function(callback){
    runSequence('clean', ['copy:images', 'handlebars', 'copy:scripts', 'sass', 'lint:before', 'concat'], callback);
}); 
gulp.task('default', ['build', 'watch']);