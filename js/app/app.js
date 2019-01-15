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
            $('.menu').stop().show(300, function () {
                $('.fade').each(function (index) {
                    $(this).stop(true).delay(100 * index).fadeIn();
                });
            });
        } else {
            $('.fade').stop(true).fadeOut(300);
            $('.header').removeClass('open');
            $('.menu').stop().delay(300).hide(0);
        }

        $(this).toggleClass('menu-open');

    });
});
