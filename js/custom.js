$(function () {

    //    sticky navbar
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $(".sticky-top");
        if (scrolling >= 110) {
            sticky.addClass("navbg");
        } else {
            sticky.removeClass("navbg");
        }
    });
    // review slider
    $('.review-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: '.caret-left',
        nextArrow: '.caret-right',
        autoplaySpeed: 2000,
    });
});
