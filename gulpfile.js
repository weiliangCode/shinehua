var gulp = require('gulp');


var uglify = require('gulp-uglify');

var minifyCss = require('gulp-minify-css');

var concat = require('gulp-concat');

var rename = require('gulp-rename');


gulp.task('copy-index', function(){
	//拷贝index
	gulp.src('src/index.html')
	.pipe(gulp.dest('dist'));
})

//拷贝文件
gulp.task("copy-files",function(){
	//拷贝图片
	gulp.src('src/img/*')
	.pipe(gulp.dest('dist/img'));
	
	gulp.src('src/fonts/*')
	.pipe(gulp.dest('dist/fonts'));
	
	//拷贝资源包
	gulp.src('src/lib/**/*')
	.pipe(gulp.dest('dist/lib'));
	
	//拷贝views
	gulp.src('src/views/**/*')
	.pipe(gulp.dest('dist/views'));
	
})


//处理css
gulp.task('handle-css', function(){
	//得到所有的css文件
	gulp.src('src/css/**/*.css')
	//合并
	.pipe(concat('style.css'))
	.pipe(gulp.dest('dist/css'))
	//压缩
	.pipe(minifyCss())
	//重命名
	.pipe(rename('style.min.css'))
	//保存
	.pipe(gulp.dest('dist/css'));
	
})

//处理js
gulp.task('handle-js', function(){
	gulp.src('src/javascript/**/*.js')
	//合并
	.pipe(concat('bundle.js'))
	.pipe(gulp.dest('dist/javascript'))
	//混淆压缩
	.pipe(uglify())
	//重命名
	.pipe(rename('bundle.min.js'))
	//保存
	.pipe(gulp.dest('dist/javascript'));
	
})

//默认任务
gulp.task('default', ['copy-files', 'handle-css', 'handle-js'],  function(){
	
	console.log('所有任务执行完毕');
	
	
})