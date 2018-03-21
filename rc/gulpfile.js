var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	rename = require('gulp-rename'),
	livereload = require('gulp-livereload'),
	nib = require('nib');

// Set Files that needs to be generated
var styleDir = 'assets/css/stylus/',
	maincssfile = ['global.styl'];

for(x = 0; x < maincssfile.length; x++) {
	maincssfile[x] = styleDir + maincssfile[x]
}

gulp.task('style-minify', function(){
	return gulp.src(maincssfile)
		    .pipe(stylus({
		    	use: [nib()],
		    	compress: true
		    }))
		    .pipe(rename({
			    suffix: ".min"
			}))
		    .pipe(gulp.dest('assets/css'))
		    .pipe(livereload())
});

// Watch
gulp.task('watch', function(){
	var server = livereload();
	livereload.listen();
	gulp.watch('assets/css/stylus/*.styl', ['style-minify']);
});

gulp.task('default', ['watch', 'style-minify']);
