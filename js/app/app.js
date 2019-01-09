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
            $('.menu').stop().slideDown(300, function () {
                $('.front_page_footer').addClass('menu-open');
                $('.fade').each(function (index) {
                    $(this).stop(true).delay(100 * index).fadeIn();
                });
            });
        } else {
            $('.fade').stop(true).fadeOut(500);
            $('.header').removeClass('open');
            $('.front_page_footer').removeClass('menu-open');
            $('.menu').stop().slideUp(300);
        }

        $(this).toggleClass('menu-open');

    });
});
