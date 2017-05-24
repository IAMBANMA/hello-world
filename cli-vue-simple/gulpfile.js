var gulp=require('gulp'),
	browserSync=require('browser-sync'),
	reload=browserSync.reload;

gulp.task('serve',function(){
	browserSync({
		server:{
			baseDir:'./'//此处使用相对路径,使用绝对路径'/'访问不到
		}
	});

	gulp.watch(['*.html'],reload);
});

gulp.task('default',['serve']);

