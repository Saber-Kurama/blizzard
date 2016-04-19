var Common = {
  init: function() {
    this.setFastClick(),
        this.setMenu(),
        this.setMobileMenu(),
        this.setShare(),
        this.setWeixinPic(),
        this.setVideoForMobile(),
        this.setBuyBtn()
  },
  project: "ow",
  setBuyBtn: function() {
    var a = $(".pure-menu-item.buy");
    $("body").scrollTop() > 50 && a.css("position", "fixed"),
        $(window).scroll(function() {
          var b = $(this).scrollTop();
          b >= 50 ? a.css("position", "fixed") : a.css("position", "absolute")
        })
  },
  setWeixinPic: function() {
    var a = '<div id="m-weixin_img" style="height:0px;width:0px;overflow:hidden;"><img id="weixin_share_png" src="http://overwatch.nos.netease.com/1/images/common/weichat-share.png" /><img id="weixin_share_jpg" src="http://overwatch.nos.netease.com/1/images/common/wechat-share.jpg" /></div>';
    $("body").prepend(a)
  },
  setVideoForMobile: function() {
    var a = $("video");
    Common.isMobile() && a.removeAttr("autoplay")
  },
  video: {
    setVideoPop: function(a, b, c) {
      var d = this;
      a.on("click",
          function() {
            var a = $(this).attr("data-flv"),
                e = $(this).attr("data-video"),
                f = d.showVideoHtml([a, e], b, c);
            new JV.lightBox(f, {
              model: !0
            })
          })
    },
    showVideoHtml: function(a, b, c) {
      var d, e = this;
      return d = Modernizr.video ? e.showIosVideo(a[1], b, c) : e.showFlvVideo("http://v.163.com/swf/video/NetEaseFlvPlayerV3.swf", b, c, a[0])
    },
    showFlvVideo: function(a, b, c, d) {
      var e = '<div class="hos_lightbox" style="width:' + b + "px; height:" + c + 'px;"><div class="lightBox_bg"><object width="' + b + '" height="' + c + '" id="FPlayer" data="' + a + '" type="application/x-shockwave-flash"><param value="transparent" name="wmode" /><param value="true" name="allowFullScreen" /><param value="always" name="allowscriptaccess" /><param value="' + a + '" allownetworking="all" name="movie" /><param value="' + d + '" name="flashvars" /></object></div></div>';
      return e
    },
    showIosVideo: function(a, b, c) {
      var d = '<video width="' + b + '" height="' + c + '" controls="controls" autoplay="false" preload="auto"><source src="' + a + '" type="video/mp4"> 您的浏览器暂时无法播放此视频.</video>';
      return d
    }
  },
  validate: {
    digits: function(a) {
      var b = /^[0-9]+$/;
      return b.test(a)
    },
    mobile: function(a) {
      var b = /^[1][3-8]\d{9}$/;
      return b.test(a)
    },
    email: function(a) {
      var b = /^[0-9a-zA-Z+_.-]+@[0-9a-zA-Z_-]+\.[0-9a-zA-Z_.-]+$/;
      return b.test(a)
    },
    p_code: function(a) {
      var b = /^\d{6}$/;
      return b.test(a)
    }
  },
  libs: {
    baseSlide: function() {
      var a = $(".ui-slider");
      a.each(function(a, b) {
        var c = $(".ui-slider-pic", $(b)),
            d = c.children(),
            e = $(".ui-slider-txt", $(b)),
            f = e.children(),
            g = $(".prev", $(b)),
            h = $(".next", $(b)),
            i = $(".ui-slider-active", $(b)),
            j = d.index(i);
        g.click(function() {
          return j--,
          0 > j && (j = d.length - 1),
              d.eq(j).siblings().hide().stop(!0, !0).end().fadeIn(),
              f.eq(j).siblings().hide().stop(!0, !0).end().fadeIn(),
              !1
        }),
            h.click(function() {
              return j++,
              j == d.length && (j = 0),
                  d.eq(j).siblings().hide().stop(!0, !0).end().fadeIn(),
                  f.eq(j).siblings().hide().stop(!0, !0).end().fadeIn(),
                  !1
            })
      })
    },
    baseTabs: function(a, b, c) {
      a.live(c,
          function() {
            var c = $(this),
                d = a.index(c);
            c.addClass("active").siblings().removeClass("active"),
                b.eq(d).show().siblings().hide()
          })
    },
    baseLightBox: function(a, b, c) {
      var d = '<div style="width:' + b + "px; height:" + c + 'px;" class="hos_lightbox">' + a + "</div>";
      $.hos.lightBox(d, {
        model: !0
      })
    },
    lightBox: function(a, b, c) {
      var d = Common.getBoxwrap(b, c);
      d[3] = a,
          $.hos.lightBox(d.join(""), {
            model: !0,
            hasClose: !1
          })
    },
    lightImg: function(a, b, c) {
      var d = "",
          e = "";
      "undefined" != typeof b && (d = "width:" + b + "px;"),
      "undefined" != typeof c && (e = "height:" + c + "px");
      var f = '<div style="' + d + e + '" class="hos_lightbox"><img style="' + d + e + '" alt="" src="' + a + '"></div>';
      $.hos.lightBox(f, {
        model: !0
      })
    }
  },
  isObjectNull: function(a) {
    var b = 0;
    for (var c in a) b++;
    return 0 == b ? !0 : !1
  },
  isMobile: function() {
    var a = /(android|iPhone|iPad|iPod|mobile)/gi;
    return a.test(navigator.userAgent)
  },
  getData: function(a, b, c, d) {
    if (Common.isObjectNull(b)) var b = {
      t: (new Date).getTime()
    };
    else b.t = (new Date).getTime();
    var e;
    e = "undefined" == typeof d ? "html": "json",
        $.get(a, b,
            function(a) {
              c(a)
            },
            e)
  },
  addFlash: function(a, b, c, d) {
    var e = {
      menu: "false",
      allowFullScreen: "false",
      allowScriptAccess: "true",
      bgcolor: "#12110f",
      quality: "high",
      wmode: "transparent",
      base: "."
    };
    "music" == arguments[4] && (e.wmode = "window"),
        swfobject.embedSWF(a, b, c, d, "9.0.0", "", "", e)
  },
  formatDate: function(a) {
    var b = new Date(a),
        c = b.getFullYear(),
        d = b.getMonth() + 1,
        e = b.getDate();
    b.getHours(),
        b.getMinutes(),
        b.getSeconds();
    return 10 > d && (d = "0" + d),
    10 > e && (e = "0" + e),
    c + "-" + d + "-" + e
  },
  setFastClick: function() {
    FastClick.attach(document.body)
  },
  setMenu: function() {
    var a = $(".pure-menu"),
        b = $(".menu-main-pin"),
        c = "menu-hidden",
        d = $(".nav-btn"),
        e = 44,
        f = 0;
    $(window).on("scroll",
        function() {
          var b = $(window).scrollTop();
          if (b !== f) {
            var g = b > e;
            g ? a.css("position", "fixed") : a.css("position", "absolute"),
                d.toggleClass("sticky", g),
                g = g && b > f,
                a.toggleClass(c, g),
                f = b
          }
        }),
        b.on("mouseenter",
            function() {
              a.removeClass(c)
            })
  },
  setMobileMenu: function() {
    var a = $(".burger-nav"),
        b = $(".exit"),
        c = $(".wrapper"),
        d = $(".nav-burger-content-wrap"),
        e = "<div id='boxModel'></div>",
        f = "nav-burger-content-wrap-out",
        g = $(window).scrollTop();
    $(window).on("scroll",
        function() {
          g = $(window).scrollTop()
        }),
        a.click(function() {
          var a = $(window).width(),
              b = $(document).height();
          d.css("padding-top", g),
              c.addClass(f),
              $(".wrapper").append(e);
          var h = $("#boxModel");
          h.width(a).height(b).show()
        }),
        b.click(function() {
          c.removeClass(f);
          var a = $("#boxModel");
          a.remove()
        }),
        $("#boxModel").live("click touchstart",
            function() {
              $(this).remove(),
                  c.removeClass(f)
            })
  },
  setShare: function() {
    window.jiathis_config = {
      data_track_clickback: !0,
      summary: "《守望先锋™》是暴雪出品的首款团队射击游戏，现已正式来到中国。游戏以近未来地球为背景，来自全球的超级英雄们将使用自己独特的能力在战场上厮杀，带给玩家顶尖的射击体验。",
      pic: "http://overwatch.nos.netease.com/1/images/home/header-bg.jpg",
      title: "",
      hideMore: !1
    },
        $("body").append('<script src="http://v3.jiathis.com/code/jia.js?uid=1803378"></script>')
  }
};