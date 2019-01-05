var gulp       = require('gulp'), 
	less         = require('gulp-less'), 
	browserSync  = require('browser-sync'); 


gulp.task('less', function(){ 
	return gulp.src('app/less/main.less') 
		.pipe(less()) 
		.pipe(gulp.dest('app/css')) 
		.pipe(browserSync.reload({stream: true})) 
});

gulp.task('browser-sync', function() { 
	browserSync({ 
		server: { 
			baseDir: 'app' 
		},
		notify: false 
	});
});

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('app/less/*.less', ['less']); 
	gulp.watch('app/*.html', browserSync.reload); 
});


gulp.task('default', ['watch']);