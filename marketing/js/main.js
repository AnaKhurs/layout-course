$(function () {

    $(".menu a, .go-top").on("click", function (event) {
        //отменяет стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забирает идентификатор блока с атрибутом href
        const id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body, html').animate({scrollTop: top}, 1500)
    })


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

    $('.menu__btn, .menu a').on('click', function () {
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });


    const mixer = mixitup('.portfolio__content');

})
