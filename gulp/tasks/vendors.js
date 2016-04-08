/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/4/7.
 */
'use strict';
// 创建一个合并 lib(vendors)的任务
var gulp = require('gulp');
var config = require('../config');
var concat = require('gulp-concat');
var rev = require('gulp-rev');
gulp.task("vendors",function(){
  return gulp.src(config.vendors.src)
      .pipe(concat(config.vendors.dist))
      .pipe(gulp.dest(config.vendors.dest))
      .pipe(rev())
      .pipe(gulp.dest(config.vendors.dest))
      .pipe(rev.manifest())
      .pipe(gulp.dest(config.rev.vendor));
});