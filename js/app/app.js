$(document).ready(function () {
    'use strict';

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    $('.burger_button').click(function (event) {
        event.preventDefault();


        if (!$(this).hasClass('menu-open')) {
            $('.header').addClass('open');
            $('.header_menu').stop().show(300, function () {
                $('.fade').each(function (index) {
                    $(this).stop(true).delay(100 * index).fadeIn();
                });
            });
        } else {
            $('.fade').stop(true).fadeOut(300);
            $('.header').removeClass('open');
            $('.header_menu').stop().delay(300).hide(0);
        }

        $(this).toggleClass('menu-open');

    });

    $('.menu_link[href="/#map"]').click(function () {
        if (document.getElementById('map')) {
            $('.fade').stop(true).fadeOut(300);
            $('.header').removeClass('open');
            $('.header_menu').stop().delay(300).hide(0);
            $('.burger_button').toggleClass('menu-open');
        }
    });

    $('.phone_input').each(function () {
        $(this).mask('+375 (99) 999-99-99');

        $(this).click(function () {
            if ($(this).val() == '+375 (__) ___-__-__') {
                $(this).setCursorPosition(6);
            }
        });
    });

    // set cursore position
    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    $('.scroll').click(function () {
        var scrollTo = $('.front_page').height();
        var headerHeight = $('.header').height();
        console.log(scrollTo);
        $('html, body').animate({
            scrollTop: scrollTo - headerHeight
        }, 500);
    });

    $('.spin').each(function () {
        var animate = false;
        var spin = $(this);
        var number = spin.data('number');
        var scrollTop = spin.offset().top + 100;

        $(window).scroll(function () {
            if ($(this).scrollTop() + $(this).height() >= scrollTop && animate !== true) {
                spin.animateNumber({
                    number: number
                }, 3000);
                animate = true;
            }
        });
    });

    $('.certificate').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });
});
