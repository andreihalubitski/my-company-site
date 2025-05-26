$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        fade: true,
        cssEase: 'linear'
    });

    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        $('#home').css('background-position', 'center ' + (scrollTop * 0.5) + 'px');
    });

    $('#feedback-form').on('submit', function(event) {
        event.preventDefault();
        alert('Спасибо за ваше сообщение!');
        // Здесь можно добавить код для отправки формы на сервер
    });
});
