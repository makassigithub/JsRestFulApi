//import your modules
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    eslint = require('gulp-eslint'),
    gulpMocha = require('gulp-mocha');

var jsFiles = ['*.js', 'src/**/*.js'];

//tsaks for binding nodemon
gulp.task('serve', function () {
    var options = {
        script: 'app.js'
        ,delayTime: 1
        , env: {
            'PORT': 4000
        }
        , watch: jsFiles
    };
    return nodemon(options).on('restart', function (err) {
        if(err) console.log(err);
        console.log('Restarting......');
    });
});

//linting

gulp.task('lint', function () {
    return gulp.src(['app.js','src/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('test',function(){
    gulp
        .src('tests/sp_test.js')
        .pipe(gulpMocha({reporter: 'nyan'}))
        .on('error', function(err){
            if(err) console.log(err);
            this.emit('end');
        });
});

gulp.task('watch',function(){
    gulp.watch('./*js',['test']);
});