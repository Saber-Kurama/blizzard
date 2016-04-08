/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/4/7.
 */
'use strict';

var gulp = require('gulp');
var config = require('../config');
//var revCollector = require('gulp-rev-collector');
// 创建一个 views 任务
gulp.task("views",function(){
  return gulp.src(config.views.src)
      // .pipe( revCollector({
      // 	replaceReved: true,
      // 	dirReplacements: {
      //               'css/': "css/"
      //            }
      // }))
      .pipe(gulp.dest(config.views.dest));
})