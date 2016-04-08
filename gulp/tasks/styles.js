/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/4/7.
 */
'use strict';

var config       = require('../config');
var gulp         = require('gulp');
// var sass         = require('gulp-sass');
var gulpif       = require('gulp-if');
//var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync').get('saber');
var less         = require('gulp-less');
// 自动给 css3 属性加浏览器前缀, 如: `-webkit-`
var autoprefixer = require('gulp-autoprefixer');
//var minifycss    = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var rev = require('gulp-rev');

gulp.task('styles', function () {


  return gulp.src(config.styles.src)
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
      //.on('error', handleErrors)
      //.pipe(minifycss())
      //.pipe(rev())

      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.styles.dest))
      //.pipe( rev.manifest() )
      //.pipe( gulp.dest('rev/css') )
      .pipe(gulpif((browserSync && browserSync.active), browserSync.stream()));

});