$(function () {

    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/arrow-right.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $('.menu__btn').on('click', function () {
        $('.header__top-inner').toggleClass('header__top-inner--active');

    });


    const mixer = mixitup('.portfolio__content');

})
