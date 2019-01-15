$(document).ready(function () {
    $('.cases_slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.dots')
    });

    $('.prev_button').click(function (event) {
        event.preventDefault();
        $('.cases_slider').slick('slickPrev');
    });

    $('.next_button').click(function (event) {
        event.preventDefault();
        $('.cases_slider').slick('slickNext');
    });
});
