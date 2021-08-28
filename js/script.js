$(document).ready(function() {
    $('.tabs-triggers__item').click(function(e){
        e.preventDefault();

        $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
        $('.tabs-content__item').removeClass('tabs-content__item--active');

        $(this).addClass('tabs-triggers__item--active');
        $($(this).attr('href')).addClass('tabs-content__item--active');
    });
    $('.tabs-triggers__item:first').click();

    $('.slider').slick({
        // centerMode: true,
        focusOnSelect: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: false,
        infinite: false,
        asNavFor: ".sliderbig",
    });
    $('.sliderbig').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        draggable: false,
        asNavFor: ".slider"
    });
});



