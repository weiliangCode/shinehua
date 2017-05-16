var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyHTML = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');


//拷贝文件
gulp.task("copy-files", function () {
	//jquery
	gulp.src('src/lib/jquery/jquery.min.js')
		.pipe(rename('jquery.js'))
		.pipe(gulp.dest('dist/lib/jquery'));

	//jquery
	gulp.src('src/lib/bootstrap/js/bootstrap.min.js')
		.pipe(rename('bootstrap.js'))
		.pipe(gulp.dest('dist/lib/bootstrap/js'));

	gulp.src('src/lib/bootstrap/css/bootstrap.min.css')
		.pipe(rename('bootstrap.css'))
		.pipe(gulp.dest('dist/lib/bootstrap/css'));

})


//处理html
gulp.task('handle-html', function () {
	//拷贝index
	gulp.src('src/index.html')
		.pipe(minifyHTML({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist'));

	//拷贝about
	gulp.src('src/about/index.html')
		.pipe(minifyHTML({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist/about'));

	//拷贝case
	gulp.src('src/case/index.html')
		.pipe(minifyHTML({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist/case'));

	//拷贝case-info
	gulp.src('src/case-info/index.html')
		.pipe(minifyHTML({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist/case-info'));

	//拷贝service
	gulp.src('src/service/index.html')
		.pipe(minifyHTML({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist/service'));

	//拷贝solution
	gulp.src('src/solution/index.html')
		.pipe(minifyHTML({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist/solution'));

})

//处理img
gulp.task('handle-img', function () {
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));

	gulp.src('src/index/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/index/images'));

	gulp.src('src/about/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/about/images'));

	gulp.src('src/case/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/case/images'));

	gulp.src('src/case-info/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/case-info/images'));

	gulp.src('src/service/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/service/images'));

	gulp.src('src/solution/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/solution/images'));
})


//处理css
gulp.task('handle-css', function () {
	//style
	//得到所有的css文件
	gulp.src('src/styles/base.css')
		//压缩
		.pipe(minifyCss())
		//保存
		.pipe(gulp.dest('dist/styles'));


	// index
	gulp.src('src/index/css/index.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/index/css/'));


	// about
	gulp.src('src/about/css/index.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/about/css/'));

	// case
	gulp.src('src/case/css/index.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/case/css/'));

	// case
	gulp.src('src/case-info/css/index.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/case-info/css/'));

	// service
	gulp.src('src/service/css/index.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/service/css/'));

	// solution
	gulp.src('src/solution/css/index.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/solution/css/'));

})


//处理js
gulp.task('handle-js', function () {
	// index
	//得到所有的js文件
	gulp.src('src/index/js/index.js')
		//混淆压缩
		.pipe(uglify())
		//保存
		.pipe(gulp.dest('dist/index/js/'));

	// about
	gulp.src('src/about/js/index.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/about/js/'));

	// case
	gulp.src('src/case/js/index.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/case/js/'));

	// case-info
	gulp.src('src/case-info/js/index.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/case-info/js/'));

	// service
	gulp.src('src/service/js/index.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/service/js/'));

	// solution
	gulp.src('src/solution/js/index.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/solution/js/'));

})

//默认任务
gulp.task('default', ['copy-files', 'handle-css', 'handle-js', 'handle-html', 'handle-img'], function () {

	console.log('所有任务执行完毕');


})