/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/4/7.
 */
var Home = {
  init: function() {
    this.getHeroes();
  },
  getHeroes: function() {
    jQuery.ajax({
      type: 'GET',
      async: !1,
      url: "http://overwatch.nos.netease.com/1/data/homeHeroes-1104.json",
      jsonp: "callback",
      jsonpCallback: "heroesJson",
      dataType: "jsonp",
      success: function(data){
        console.log(data);
        $(".chars-con .loading").remove();
        $('.tagline').html(data.title);
        var htmlstr = '';
        for(var i =0; i<data.heroes.length; i++ ){
          var item = data.heroes[i];
          htmlstr +='<li class="selection-item">'+
                      '<div class="selection-link-wrap">'+
                        '<a class="selection-link" '+' href='+item.href+
                          ' data-hero-slug='+item.name+' data-hero-role='+item.role+
                          ' data-hero-role-id='+item.id+' data-hero-overlay='+item.overlay+' >'+
                            '<span class="portrait-wrap">'+
                                '<span class="portrait"><img src='+item.icon+' />'+
                            '</span></span>'+
                            '<span class="nametag">'+item.name+'</span>'+
                     '</a></div></li>';

        }
        console.log(htmlstr);
        $(".selection-wrap").html(htmlstr);
        Home.heroSelect();
      }
    });

  },
  heroSelect: function() {
    console.log('???xxx');
    var section = $('.chars.section');
    var overlayWarp = $('#character-overlay-wrap');
    var overlay = $('#character-overlay');
    var overlay_text = $('#character-overlay-text');
    var overlay_text_border = $('#character-overlay-text-border');
    var wrap = $('.selection-wrap');
    var pureMenu = $('.pure-menu');
    var classname = 'overlay-loaded';
    wrap.on('mouseenter', '.selection-link', function(){
      var self = $(this);
      var hero_slug = self.data("hero-slug");
      var hero_role = self.data("hero-role");
      var hrep_role_id= self.data("hero-role-id");
      var herooverlay = self.data('hero-overlay');
      console.log('??xx');
      pureMenu.hasClass('menu-hiddle') || pureMenu.addClass('menu-hiddle');
      Home.timer = setTimeout(function(){
        console.log('//////');
        overlayWarp.addClass('loading');
        $.imgpreload(herooverlay, {
          all: function(){
            console.log('???,,,,,,,');
            overlayWarp.removeClass('loading');
            section.addClass("overlay-ready overlay-loaded");
            overlay.attr('style', 'background-image:url('+herooverlay+')');
            overlay_text_border.addClass(classname);
            overlay_text.addClass(classname).find("h2").html(hero_slug).end().find("i")
                .attr("class", "heroes-icon role-" + hrep_role_id).end().find("p").text(hero_role);
          }
        })
      }, 100);
    });
    wrap.on("mouseleave", ".selection-link",
        function() {
          clearTimeout(Home.timer),
              overlayWarp.removeClass(classname),
              overlay_text_border.removeClass(classname),
              overlayWarp.removeClass("loading"),
              overlay_text.removeClass(classname);
        });
  }
};