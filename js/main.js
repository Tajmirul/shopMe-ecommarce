$(document).ready(function () {

    /* magnificPopup img view */
    // $('.popup-image').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
    // });

    /* magnificPopup video view */
    // $('.popup-video').magnificPopup({
    //     type: 'iframe'
    // });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    
    // WOW active-------------
    wow = new WOW();
    wow.init();

    // elevatezoom
    $("#type-1").elevateZoom({
        gallery:'gal1',
        galleryActiveClass: 'active',
        imageCrossfade: true,
        loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif',
        zoomType: "inner",
        cursor: "crosshair",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 500,
    });

    // slick slider -------------------------
    // for banner 
    $('.banner-slider').slick({
        prevArrow: '<i class="px-4 py-3 arrows prev hover-bg-theme icofont-rounded-up"></i>',
        nextArrow: '<i class="px-4 py-3 arrows next hover-bg-theme icofont-rounded-down"></i>',
        // autoplay: true,
        // fade: true,
        vertical: true
    });

    // slider-type-2
    $('.slider-type-2').slick({
        nextArrow: '<i class="px-4 py-3 fz-small arrows deals next bg-white border rounded text-black-50 hover-bg-theme icofont-rounded-right"></i>',
        prevArrow: '<i class="px-4 py-3 fz-small arrows deals prev bg-white border rounded text-black-50 hover-bg-theme icofont-rounded-left"></i>',
        // autoplay: true,
    });
    // slider-type-3
    $('.slider-type-3').slick({
        nextArrow: '<i class="px-4 py-3 fz-small arrows deals next bg-white border rounded text-black-50 hover-bg-theme icofont-rounded-right"></i>',
        prevArrow: '<i class="px-4 py-3 fz-small arrows deals prev bg-white border rounded text-black-50 hover-bg-theme icofont-rounded-left"></i>',
        autoplay: true,
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1
    });
    // slider-type-4
    $('.slider-type-4').slick({
        nextArrow: '<i class="px-4 py-3 fz-small arrows next bg-white border rounded text-black-50 hover-bg-theme icofont-rounded-right"></i>',
        prevArrow: '<i class="px-4 py-3 fz-small arrows prev bg-white border rounded text-black-50 hover-bg-theme icofont-rounded-left"></i>',
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('.slider-type-5').slick({
        nextArrow: '<i class="px-4 py-3 fz-small arrows deals next bg-white border rounded text-black-50 hover-bg-theme icofont-rounded-right"></i>',
        prevArrow: '<i class="px-4 py-3 fz-small arrows deals prev bg-white border rounded text-black-50 hover-bg-theme icofont-rounded-left"></i>',
        // autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
        $('.slider-type-6').slick({
        nextArrow: '<i class="px-4 py-3 fz-small arrows deals next bg-white border rounded text-black-50 hover-bg-theme icofont-rounded-right"></i>',
        prevArrow: '<i class="px-4 py-3 fz-small arrows deals prev bg-white border rounded text-black-50 hover-bg-theme icofont-rounded-left"></i>',
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        // responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }

        // // You can unslick at a given breakpoint now by adding:
        // // settings: "unslick"
        // // instead of a settings object
        // ]
    });

    // nice number -----------------
    $('.nice-number input[type="number"]').niceNumber({
        buttonDecrement: '<i class="icofont-minus"></i>',
        buttonIncrement: '<i class="icofont-plus"></i>',
    });


    // my code ----------------------------------------------------------------------
    // open mobile menu 
    $('.mobile-nav > .open-mobile-menu').click(function(){
        $('.overlay').css('display', 'block');
        $('.mobile-nav-inner').css({
            'width': '100%',
            'padding': '1rem',
            'overflow-x': 'visible'
        });
    });
    // close mobile menu
    $('.close-mobile-menu').click(function(){
        $('.overlay').css('display', 'none');
        $('.mobile-nav-inner').css({
            'width': '0',
            'padding': '0',
            'overflow-x': 'hidden'
        });
    });
    // toggle submenu
    $('.has-submenu>i').click(function(){
        $(this).parent().find('>ul').slideToggle()
        $(this).toggleClass('icofont-plus icofont-minus')
    });

    // toggle category
    $('.slideDown > .slideDown-inner').click(function(){
        $(this).parent().find('>ul').slideToggle();
    });

    // preloader -----
    $(".preloader").fadeOut();


});    



