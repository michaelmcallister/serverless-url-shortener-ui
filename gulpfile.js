var gulp = require('gulp');
var install = require("gulp-install");

//include plugins
var $ = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
      replaceString: /\bgulp[\-.]/
});

var dest = 'build/';

gulp.task('install', function() {
  return gulp.src(['./bower.json', './package.json'])
    .pipe(install());
});

gulp.task('favicon', function() {
 return gulp.src('src/favicon.ico')
   .pipe(gulp.dest(dest));
});

gulp.task('css',['install'], function() {
	var cssFiles = [
    'vendor/semantic/dist/semantic.css',
    'src/app.css'
  ];

  return gulp.src(cssFiles)
    .pipe($.cleanCss())
    .pipe($.concat('app.min.css'))
		.pipe(gulp.dest(dest + 'css'));
});

gulp.task('themes',['install'], function() {
  var themeDir = 'vendor/semantic/dist/themes/**/*';
  return gulp.src(themeDir)
    .pipe(gulp.dest(dest + 'css/themes/'));
});

gulp.task('js',['install'], function() {
	var jsFiles = [
    'vendor/jquery/dist/jquery.min.js',
    'vendor/jQuery.serializeObject/dist/jquery.serializeObject.min.js',
    'vendor/semantic/dist/semantic.js',
    'vendor/clipboard/dist/clipboard.min.js',
    'src/app.js',
  ];

	return gulp.src(jsFiles)
    .pipe($.uglify())
		.pipe($.concat('app.min.js'))
		.pipe(gulp.dest(dest + 'js'));
});

gulp.task('html', function() {
	return gulp.src('src/index.html')
  .pipe($.htmlmin())
  .pipe(gulp.dest(dest));
});

gulp.task('default', ['install','favicon','css','themes','js','html']);
