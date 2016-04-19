/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/4/19.
 */

var Common = {
  init:function(){
    this.setFastClick();
    this.setMobileMenu();
  },
  // 设置 FastClick
  setFastClick: function() {
    FastClick.attach(document.body)
  },

  setMobileMenu: function() {

    var burgernav = $('.burger-nav'),
        exit = $('.exit'),
        wrapper = $('.wrapper'),
        burgernavwrap = $('.nav-burger-content-wrap'),
        cssclass = 'nav-burger-content-wrap-out',
        top = $(window).scrollTop();
    $(window).on('scroll', function(){
      top = $(window).scrollTop()
    });
    burgernav.click(function(){
      var w = $(window).width(),
          h = $(document).height();
          boxModel = '<div id="boxModel"></div>',
          burgernavwrap.css('padding-top',top);
          wrapper.addClass(cssclass);
          $('.wrapper').append(boxModel);
          $('#boxModel').width(w).height(h).show();
    });

    exit.click(function(){
      wrapper.removeClass(cssclass);
      $('#boxModel').remove();
    });

    $('.wrapper').on('click touchstart', '#boxModel', function(){
      wrapper.removeClass(cssclass);
      $('#boxModel').remove();
    });
    
  }
};
