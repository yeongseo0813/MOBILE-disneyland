$(document).ready(function () {
    $(".scrollBox").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

});
$(function () {
    $(".naviJs > li > a, .topBtn").click(function () {
        var b = $($(this).attr("href")).position().top;
        var a = $(".gnb").innerHeight();
        $(".scrollBox").stop().animate({scrollTop: b - a}, 1200, "easeInOutExpo");
        return false
    });
    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();
        $(".posNum").text(a);


        if (a >= 225) {
            $("#scene02 .typo").addClass("on");
        } else {
            $("#scene02 .typo").removeClass("on");
        }

        if (a >= 500) {
            $("#scene02 .diagram").addClass("on");
        } else {
            $("#scene02 .diagram").removeClass("on");
        }

        if (a >= 1100) {
            $("#scene03 .typo").addClass("on");
        } else {
            $("#scene03 .typo").removeClass("on");
        }

        if (a >= 1385) {
            $("#scene03 .diagram").addClass("on");
        } else {
            $("#scene03 .diagram").removeClass("on");
        }

        if (a >= 1920) {
            $("#scene04 .typo").addClass("on");
        } else {
            $("#scene04 .typo").removeClass("on");
        }

        if (a >= 2300) {
            $("#main_mockup").addClass("on");
        } else {
            $("#main_mockup").removeClass("on");
        }

        if (a >= 2570) {
            $("#main_mockup .ticket, #main_mockup .bottom").addClass("on");
        } else {
            $("#main_mockup .ticket, #main_mockup .bottom").removeClass("on");
        }

        if (a >= 3020) {
            $("#scene04 .number").addClass("on");
        } else {
            $("#scene04 .number").removeClass("on");
        }

        if (a >= 3995) {
            $("#scene05 .wire .typo").addClass("on");
        } else {
            $("#scene05 .wire .typo").removeClass("on");
        }

        if (a >= 4200) {
            $("#scene05 .frame").addClass("on");
        } else {
            $("#scene05 .frame").removeClass("on");
        }

        if (a >= 5310) {
            $("#scene05 .style .typo").addClass("on");
        } else {
            $("#scene05 .style .typo").removeClass("on");
        }

        if (a >= 5460) {
            $("#scene05 .style .color").addClass("on");
        } else {
            $("#scene05 .style .color").removeClass("on");
        }

        if (a >= 5978) {
            $("#scene05 .style .type").addClass("on");
        } else {
            $("#scene05 .style .type").removeClass("on");
        }

        if (a >= 6629) {
            $("#scene06 .s1").addClass("on");
        } else {
            $("#scene06 .s1").removeClass("on");
        }

        if (a >= 7365) {
            $("#sub_mockup").addClass("on");
        } else {
            $("#sub_mockup").removeClass("on");
        }

        if (a >= 8236) {
            $("#scene06 .s3").addClass("on");
        } else {
            $("#scene06 .s3").removeClass("on");
        }

        if (a >= 9020) {
            $("#scene06 .s4").addClass("on");
        } else {
            $("#scene06 .s4").removeClass("on");
        }

        if (a >= 10410) {
            $("#scene07 .att_theme").addClass("on");
        } else {
            $("#scene07 .att_theme").removeClass("on");
        }

        if (a >= 11050) {
            $("#scene08 .typo").addClass("on");
        } else {
            $("#scene08 .typo").removeClass("on");
        }

        if (a >= 11590) {
            $("#detail_mockup01 .info, #scene08 .d2 .card_typo").addClass("on");
        } else {
            $("#detail_mockup01 .info, #scene08 .d2 .card_typo").removeClass("on");
        }

        if (a >= 12420) {
            $("#scene08 .d3 .ent_typo, #detail_mockup02 .alarm").addClass("on");
        } else {
            $("#scene08 .d3 .ent_typo, #detail_mockup02 .alarm").removeClass("on");
        }

        if (a >= 13230) {
            $("#scene09 .typo").addClass("on");
        } else {
            $("#scene09 .typo").removeClass("on");
        }

        if (a >= 15000) {
            $("#footer .typo").addClass("on");
        } else {
            $("#footer .typo").removeClass("on");
        }


        $(".wrap > div").each(function (c) {
            var d = 100;
            var b = $(".wrap > div:first").position().top;
            var e = $(this).position().top;
            if (a <= b - d) {
                $(".naviJs").each(function () {
                    $("li", this).removeClass("on").eq(0).addClass("on")
                })
            } else {
                if (a >= e - d) {
                    $(".naviJs").each(function () {
                        $("li", this).removeClass("on").eq(c).addClass("on")
                    })
                }
            }
        })
    })
});