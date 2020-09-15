$(function () {


    $('.team_slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 2000
    });

    //    SmoothScroll

    //    var scroll = new SmoothScroll('a[href*="#"]', {
    //        speed: 600
    //    });
    //counter area
    $('.count').counterUp({
        delay: 10,
        time: 2000,
    });
    //    SmoothScroll end
    //    sticky menu

    //
    //    $(window).on('scroll', function (event) {
    //        var scroll = $(window).scrollTop();
    //        if (scroll < 800) {
    //            $(".nav_menu").removeClass("sticky");
    //        } else {
    //            $(".nav_menu").addClass("sticky");
    //        }
    //    });



    //    //      back-to-top
    //    $(window).on('scroll', function (event) {
    //        if ($(this).scrollTop() > 600) {
    //            $('.back-to-top').fadeIn(200)
    //        } else {
    //            $('.back-to-top').fadeOut(200)
    //        }
    //    });

    //    mixitup
    var mixer = mixitup('.portfolio_area');

    $(document).ready(function () {
        $('.venobox').venobox();
    });;
});
