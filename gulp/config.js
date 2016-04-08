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
  },
  'images': {
    'src': ['src/images/**/*'],
    'dest': 'dist/images'
  },
  'vendors': {
    'dist':'vendors.js',
    'src': [
      'bower_components/jquery/dist/jquery.min.js'
    ],
    'dest': 'dist/js'
  },
  'scripts': {
    src: ['src/js/*.js'],
    dest: 'dist/js'
  },
  'styles':{
    'watch':['src/less/*.less','src/less/*/*.less'],
    'src': ['src/less/index.less'],
    'dest': 'dist/css'
  },
  'views': {
    src: ['src/index.html','src/html/**/*.html'],
    dest:'dist'
  },
  lint: {
    js: {
      dest: 'src/js/'
    }
  },
  'rev':{
    vendor: 'rev/vendor'
  },

  server: {
    port: 9300
  }
}