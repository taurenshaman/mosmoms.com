$(document)
    .ready(function () {

        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            })
            ;

        // create sidebar and attach to menu open
        //$('.ui.sidebar').sidebar('attach events', '.toc.item');

        // insert footer
        $("<div/>").load("/footer.html").insertAfter($("#footerline"))
    });

// 百度统计
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?15391ff66eb3bee047797a0260c8d331";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();