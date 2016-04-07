/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/4/7.
 */

'use strict';

module.exports = {

  'copy': {
    css:{
      src: [],
      dest: [],
    },
    fonts:{
      src: ["src/fonts/*"],
      dest: 'dist/fonts'
    },
    images:{
      src: 'src/images/**/*',
      dest: 'dist/images'
    },
    icon:{
      src: 'src/icon/**/*',
      dest: 'dist/images'
    }
  },
  // dist 的目录
  'dist': {
    root: 'dist'
  }
}