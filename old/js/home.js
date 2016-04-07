var Home = {
  init: function() {
    this.getHeroes(), this.setVideo(), this.setHomeProm()
  }, getNews: function() {
    Common.getData("/action/home/main-body", "", function(a) {
      $(".news .g-wrap-limit").html(a), Home.getMoreNews()
    })
  }, getMoreNews: function() {
    var a = $(".morenews"), b = $(".show-for-medium-down").data("totalpage"), c = 1;
    1 == b ? a.hide() : a.show(), a.find("a").live("click", function() {
      c++;
      var b = "/action/article/news/p/" + c;
      a.find("span").html("更多消息"), Common.getData(b, "", function(b) {
        a.find("span").html("加载中");
        var d = juicer(Home.setMdHtml(), b), e = juicer(Home.setLgHtml(), b);
        $(".news-small-list").append(d), $(".hide-for-medium-down .pure-g").append(e), c == b.totalPage ? a.html("<span class='more-btn'>已无更多新闻</span>") : a.find("span").html("更多消息")
      }, "json")
    })
  }, setMdHtml: function() {
    var a = ["{@each articles as item}", '<div class="pure-u-1-1">', '<a href="${item.linkUrl}" class="news-wrap-h" target="_blank">', '<div class="pure-g">', '<div class="pure-u-1-3">', '<span class="news-image-h" style="background-image:url(${item.thumbnailUrl});"></span>', "</div>", '<div class="pure-u-2-3">', '<span class="conWrap">', "<h3>${item.title}</h3>", '<p class="desc">${item.description}</p>', '<p class="date">${item.publishTime|formatDate}</p>', "</span>", "</div>", "</div>", "</a>", "</div>", "{@/each}"].join("");
    return juicer.register("formatDate", Common.formatDate), a
  }, setLgHtml: function() {
    var a = ["{@each articles as item}", '<div class="pure-u-1-3">', '<div class="list">', '<a href="${item.linkUrl}" class="selection-link" target="_blank">', '<span class="news-wrap">', '<span class="con">', "<h3>${item.title}</h3>", '<span class="news-image" style="background-image:url(${item.thumbnailUrl});"></span>', '<span class="desc">${item.description}</span>', '<span class="date">${item.publishTime|formatDate}</span>', "</span>", "</span>", "</a>", "</div>", "</div>", "{@/each}"].join("");
    return juicer.register("formatDate", Common.formatDate), a
  }, setVideo: function() {
    new JV.popSlider(".v-game:visible", {
      isShowNum: !1,
      data: [{
        video: "http://flv.bn.netease.com/videolib3/1511/07/CoPrF6333/SD/CoPrF6333-mobile.mp4",
        title: "游戏介绍",
        info: "",
        width: "100%",
        height: "100%"
      }]
    }), new JV.popSlider(".v-cg:visible", {
      isShowNum: !1,
      data: [{
        video: "http://flv.bn.netease.com/videolib3/1506/26/cJtFW2189/HD/cJtFW2189-mobile.mp4",
        title: "开场动画",
        info: "",
        width: "100%",
        height: "100%"
      }]
    })
  }, getHeroes: function() {
    jQuery.ajax({
      type: "GET",
      async: !1,
      url: "http://overwatch.nos.netease.com/1/data/homeHeroes-1104.json",
      jsonp: "callback",
      jsonpCallback: "heroesJson",
      dataType: "jsonp",
      success: function(a) {
        Home.setProm(a), $(".chars-con .loading").remove(), $(".tagline").html(a.title);
        var b = (a.heroes, ["{@each heroes as item}", '<li class="selection-item">', '<div class="selection-link-wrap">', '<a class="selection-link" href="${item.href}" data-hero-slug="${item.name}" data-hero-role="${item.role}" data-hero-role-id="${item.id}" data-hero-overlay="${item.overlay}">', '<span class="portrait-wrap">', '<span class="portrait"><img src="${item.icon}" /></span>', "</span>", '<span class="nametag">${item.name}</span>', "</a>", "</div>", "</li>", "{@/each}"].join("")), c = juicer(b, a);
        $(".selection-wrap").html(c), Home.heroSelect()
      }
    })
  }, heroSelect: function() {
    var a = $(".chars.section"), b = $("#character-overlay"), c = $("#character-overlay-text"), d = $("#character-overlay-text-border"), e = $("#character-overlay-wrap"), f = $(".selection-wrap"), g = $(".pure-menu"), h = "overlay-loaded";
    f.on("mouseenter", ".selection-link", function() {
      var f = $(this), i = f.data("hero-slug"), j = f.data("hero-role"), k = f.data("hero-role-id"), l = f.data("hero-overlay");
      g.hasClass("menu-hidden") || g.addClass("menu-hidden"), Home.timer = setTimeout(function() {
        e.addClass("loading"), $.imgpreload(l, {
          all: function() {
            e.removeClass("loading"), a.addClass("overlay-ready overlay-loaded"), b.attr("style", "background-image:url(" + l + ")"), d.addClass(h), c.addClass(h).find("h2").html(i).end().find("i").attr("class", "heroes-icon role-" + k).end().find("p").text(j)
          }
        })
      }, 100)
    }), f.on("mouseleave", ".selection-link", function() {
      clearTimeout(Home.timer), a.removeClass(h), c.removeClass(h), e.removeClass("loading"), d.removeClass(h)
    })
  }, setProm: function(a) {
    if (2 == a.newHero.heroesNum)var b = ['<div class="promo overlay" overlay="promo">', '<div class="inner">', '<div class="close x"></div>', '<div class="top">', '<div class="actions">', '<div class="box">', "<h1>新英雄</h1>", "<h2>" + a.newHero.name1 + "</h2>", '<a href="' + a.newHero.href1 + '" class="btn"><span>查看英雄</span></a>', "</div>", "</div>", '<div class="actions h-right">', '<div class="box">', "<h1>新英雄</h1>", "<h2>" + a.newHero.name2 + "</h2>", '<a href="' + a.newHero.href2 + '" class="btn"><span>查看英雄</span></a>', "</div>", "</div>", '<img class="img basic" src="' + a.newHero.src + '" />', "</div>", '<div class="btm">', '<div class="text"><a href="/heroes/" tartget="_blank">查看更多其他英雄</a></div>', "</div>", "</div>", '<div class="blackout close"></div>', "</div>"].join(""); else var b = ['<div class="promo overlay" overlay="promo">', '<div class="inner">', '<div class="close x"></div>', '<div class="top">', '<div class="actions">', '<div class="box">', "<h1>新英雄</h1>", "<h2>" + a.newHero.name1 + "</h2>", '<a href="' + a.newHero.href1 + '" class="btn"><span>查看英雄</span></a>', "</div>", "</div>", '<img class="img basic" src="' + a.newHero.src + '" />', "</div>", '<div class="btm">', '<div class="text"><a href="/heroes/" tartget="_blank">查看更多其他英雄</a></div>', "</div>", "</div>", '<div class="blackout close"></div>', "</div>"].join("");
    var c = a.newHero.showProm;
    Home.setCookies(c, b)
  }, setHomeProm: function() {
    var a = ['<div class="promo overlay" overlay="promo">', '<div class="inner">', '<div class="close x"></div>', '<div class="top">', '<a href="javascript:void(0);" class="showVideo"><img class="img" src="http://overwatch.nos.netease.com/1/images/home/pop_hgf.jpg" /></a>', "</div>", "</div>", '<div class="blackout close"></div>', "</div>"].join(""), b = !0;
    Home.setCookies(b, a)
  }, setVideoHtml: function(a, b, c, d) {
    if (Modernizr.video)var e = ['<video controls autoplay preload="auto">', '<source src="' + a + '" type="video/mp4">', "您的浏览器暂时无法播放此视频.</video>"].join(""); else var f = "http://v.163.com/swf/video/NetEaseFlvPlayerV3.swf", e = ['<object width="' + c + '" height="' + d + '" id="FPlayer" data="' + f + '" type="application/x-shockwave-flash">', '<param value="transparent" name="wmode" />', '<param value="true" name="allowFullScreen" />', '<param value="always" name="allowscriptaccess" />', '<param value="' + f + '" allownetworking="all" name="movie" />', '<param value="' + b + '" name="flashvars" />', "</object>"].join("");
    return e
  }, showPromVideo: function() {
    var a = $(".showVideo");
    a.on("click", function() {
      var a = Home.setVideoHtml("http://flv.bn.netease.com/videolib3/1604/04/JXgVi8886/HD/JXgVi8886-mobile.mp4", "pltype=7&topicid=0031&vid=VBISECGB7&sid=VAS3NO00J&coverpic=http://vimg1.ws.126.net/image/snapshot/2016/4/B/8/VBISECGB8.jpg&autoplay=true&showend=false&hiddenR=true", "100%", "100%");
      $(this).parent(".top").html('<div class="videoWrap">' + a + "</div>"), $(".videoWrap video").css({
        width: "100%",
        height: "100%"
      }), $(".videoWrap").animate({opacity: 1}, 400)
    })
  }, setCookies: function(a, b) {
    function c() {
      $(".promo").removeClass("open"), setTimeout(function() {
        $(".promo").remove()
      }, 200)
    }

    a && ($.cookie("prom_buy_cookie") || ($("body").append(b), Home.showPromVideo(), setTimeout(function() {
      $(".promo").addClass("open")
    }, 200), $.cookie("prom_buy_cookie", "prom", {expires: 2})), $(".blackout,.close").on("click", c).on("click", ".inner", function(a) {
      a.stopPropagation()
    }))
  }
};