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

        $(this).toggleClass('menu-open');
        $('.header').toggleClass('open');
        $('.menu').slideToggle(500, function () {
            $('.fade').each(function (index) {
                $(this).stop().delay(300 * index).fadeToggle();
            });
        });

    });
});
