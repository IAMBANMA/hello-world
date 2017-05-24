var gulp=require('gulp'),
	less=require('gulp-less'),
	browserSync=require('browser-sync'),
	reload=browserSync.reload;

gulp.task('less',function(){
  gulp.src('app/src/less/index.less')
	  .pipe(less())
	  .pipe(gulp.dest('app/src/css'))
	  .pipe(reload({stream:true}));
});

gulp.task('serve',['less'],function(){
  browserSync({
	  server:{
	    baseDir:'app'
	  }
  });
  gulp.watch('app/src/less/*.less',['less']);
});



gulp.task('default',['serve']);

