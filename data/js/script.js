$(document).ready(function() {
    $(".sm-nav-bar .search-bar").css("display", "none");
    $(".sm-nav-bar .close_search_icon").css("display", "none");

    $(".sm-nav-bar .search_icon").click(function() {
        $(".sm-nav-bar .controls").css("display", "none");
        $(".sm-nav-bar .search-bar").css("display", "block");
        $(".sm-nav-bar .close_search_icon").css("display", "block");

    });

    $(".sm-nav-bar .close_search_icon").click(function() {
        $(".sm-nav-bar .controls").css("display", "flex");
        $(".sm-nav-bar .search-bar").css("display", "none");
        $(".sm-nav-bar .close_search_icon").css("display", "none");

    });


    $(".link-container").not("*[link-id='" + $(".active.krag-link").attr("link-to") + "']").addClass("krag-link-to");

    $(".krag-link").click(function() {
        $(".link-container").addClass("krag-link-to");
        var link_id = $(this).attr("link-to");
        $("*[link-id='" + link_id + "']").removeClass("krag-link-to");
    });

    $("#main-image-video-preview").attr("poster", $("video:eq(0)").attr("poster"));
    $("#main-image-video-preview").find("source").attr("src", $("video:eq(0)").find("source").attr("src"));
    $("#main-image-video-preview").attr("src", $("video:eq(0)").find("source").attr("src"));

    $("#main-image-video-preview").find("source").attr("src", $(".thumblains:eq(0)").find("video").attr("src"));

    if ($(".thumblains:eq(0)").find("source").attr("src") == "" || $(".thumblains:eq(0)").find("source").attr("src") == null) {
        $("#main-image-video-preview").attr("poster", $(".thumblains:eq(0)").find("video").attr("poster"));
        $("#main-image-video-preview").find("source").attr("src", "");
        $("#main-image-video-preview").attr("src", "");
        $("#main-image-video-preview").removeAttr("controls");
    } else {
        $("#main-image-video-preview").attr("poster", $(".thumblains:eq(0)").find("video").attr("poster"));
        $("#main-image-video-preview").find("source").attr("src", $(".thumblains:eq(0)").find("video").attr("src"));
        $("#main-image-video-preview").attr("src", $(".thumblains:eq(0)").find("video").attr("src"));
        $("#main-image-video-preview").attr("controls", "controls");
    }

    $(".thumblains").click(function(e) {
        e.stopPropagation();
        if ($(this).find("source").attr("src") == "" || $(this).find("source").attr("src") == null) {
            $("#main-image-video-preview").attr("poster", $(this).find("video").attr("poster"));
            $("#main-image-video-preview").find("source").attr("src", "");
            $("#main-image-video-preview").attr("src", "");
            document.getElementById("main-image-video-preview").removeAttribute("controls")
        } else {
            $("#main-image-video-preview").attr("poster", $(this).find("video").attr("poster"));
            $("#main-image-video-preview").find("source").attr("src", $(this).find("source").attr("src"));
            $("#main-image-video-preview").attr("src", $(this).find("source").attr("src"));
            document.getElementById("main-image-video-preview").setAttribute("controls", "controls");
        }
    });

    $('.theme-1').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            387: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            800: {
                items: 4,
                nav: false
            },
            1000: {
                items: 6,
                nav: true,
                loop: false
            }
        }
    });

    $('.theme-2').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            387: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            800: {
                items: 4,
                nav: false
            },
            1000: {
                items: 6,
                nav: true,
                loop: false
            }
        }
    });

    $(".owl-next").addClass("vertical_horizontal_align_center");
    $(".owl-prev").addClass("vertical_horizontal_align_center");

    $(".owl-next").html("<span class='material-icons'>arrow_forward_ios</span>");
    $(".owl-prev").html("<span class='material-icons'>arrow_back_ios</span>");


    $(".owl-stage .owl-item").addClass("vertical_horizontal_align_center");

    $(".video-container .video-card .video-card-bg-image .row-field-3 .video-more-details .video-more-details-bt").click(function() {

        $(this).closest(".video-card").find(".video-card-details").toggleClass("video-card-details-click");
        if ($(this).attr("button-data") == "hide") {
            $(this).removeClass("video-more-details-click");
            $(this).html("<div class='material-icons'>more_horiz</div>");
            $(this).attr("button-data", "show");
            $(this).closest(".video-card").find(".video-card-views").css("display", "none");
            $(this).closest(".video-card").find(".video-card-downloads").css("display", "none");
        } else {
            $(this).addClass("video-more-details-click");
            $(this).html("<div class='material-icons'>close</div>");
            $(this).attr("button-data", "hide");
            $(this).closest(".video-card").find(".video-card-views").css("display", "flex");
            $(this).closest(".video-card").find(".video-card-downloads").css("display", "flex");
        }
    });

    $(".category-container .category-title").click(function() {
        $(".category-container .category-title").removeClass("active");
        $(this).addClass("active");
    });

    $(".pagination-container .page-item .page-link").click(function() {
        $(".pagination-container .page-item .page-link").removeClass("active");
        $(this).addClass("active");
    });

    $(".sub-details-row .sub-details-row-inner .details-row").mouseover(function(video) {
        video = document.getElementById("myVideo")
        video.play();
        video.muted = true;
        video.ontimeupdate = function() {

            if (video.currentTime >= 12) {
                video.pause();
                video.currentTime = 0;
            }

        };
    });

    $(".sub-details-row .sub-details-row-inner .details-row").mouseout(function(video) {
        video = this.querySelectorAll('.details-video video');
        video.pause();
        video.currentTime = 0;
    });

    $(".details-row .details-video a").on("click", function(e) {
        e.stopPropagation();
    });

});
$(document).ready(function() {
    $.fn.video_controler();
    $.fn.Sticky_Preview();
});
$(document).resize(function() {
    $.fn.video_controler();
    $.fn.Sticky_Preview();
});
$(window).resize(function() {
    $.fn.video_controler();
    $.fn.Sticky_Preview();
});
$(window).scroll(function() {
    $.fn.Sticky_Preview();
});

$.fn.Sticky_Preview = function() {
    var height = $(window).scrollTop();
    if (height > $('.sub-details-row-inner').height()) {

    } else {

    }
};
$.fn.video_controler = function() {

    function detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }
    if (detectMob() == true) {
        $(".video-container .video-row .video-card-bg-image .row-field-3 .video-more-details").removeClass("col-hide");
    } else if (detectMob() == false) {
        $(".video-container .video-row .video-card-bg-image .row-field-3 .video-more-details").addClass("col-hide");
    } else {
        $(".video-container .video-row .video-card-bg-image .row-field-3 .video-more-details").addClass("col-hide");
    }
};