$(document).ready(function() {
    $.fn.Website_responsive_function();
});
$(window).resize(function() {
    $.fn.Website_responsive_function();
});
$.fn.Website_responsive_function = function() {

    if ($(window).width() >= 751) {
        $(".sm-nav-bar").css("display", "none");
        $(".lg-nav-bar").css("display", "flex");
    } else {
        $(".lg-nav-bar").css("display", "none");
        $(".sm-nav-bar").css("display", "flex");
    }

};
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 1) {
        $('.navigation-bar-container').addClass('position_fixed_vary');

        $('.navigation-bar-container > .tabs > a').addClass('position_fixed_vary_a');

        $('.content').addClass('content-scroll');

    } else {
        $('.navigation-bar-container').removeClass('position_fixed_vary');

        $('.navigation-bar-container > .tabs > a').removeClass('position_fixed_vary_a');

        $('.content').removeClass('content-scroll');

    }
});