var gulp=require('gulp'),
	browserSync=require('browser-sync'),
	reload=browserSync.reload;

gulp.task('serve',function(){
	browserSync({
		server:{
			baseDir:'app'
		}
	});

	gulp.watch(['*.html'],{cwd:'app'},reload);
});

gulp.task('default',['serve']);
