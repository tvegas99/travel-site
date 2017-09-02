var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');


// this task takes CSS from one location, applies a little magic
// then drops in the styles location magically corrected
gulp.task('styles', function(){
 	return gulp.src('./app/assets/styles/styles.css')
 		.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
 		.on('error', function(errorInfo) {
 			console.log(errorInfo.toString());
 			this.emit('end');
 		})
 		.pipe(gulp.dest('./app/temp/styles'));
 });

