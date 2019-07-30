function general_animation(){
    var animationClasses = {
        fade_in_down:"fadeInDown",
        fade_in_up:"fadeInUp",
        fade_in_left:"fadeInLeft",
        fade_in_right:"fadeInRight"
    };
    var animateClass = '',
        windowHeight = $(window).height(),
        relativeTopIndent = 0.8,
        absoluteTopIndent = relativeTopIndent * windowHeight;

    $.each(animationClasses, function (key, value) {
        animateClass = '.' + key;
        $(animateClass).css('opacity', '0');
        $('.' + key).each(function () {
            if( $(this).offset().top < $(window).scrollTop() + absoluteTopIndent ||
                $(this).offset().top < $(window).scrollTop() + windowHeight)
            {
                $(this).removeClass(key).addClass(value)
            }
        });
    });
    $(window).scroll(function () {
        $.each(animationClasses, function (key, value) {
            $('.' + key).each(function () {
                if( $(this).offset().top < $(window).scrollTop() + absoluteTopIndent ||
                    $(this).offset().top < $(window).scrollTop() + windowHeight)
                {
                    $(this).removeClass(key).addClass(value)
                }
            });
        });
    });
}
function navbar_animation(){
    var IsMouseOver = 0,
        MenuHover = 0;
    $('.menu').hover(function () {
        IsMouseOver = 1;
        MenuHover = 1;
        $('.navbar-wrapper').removeClass('fadeOutRight').addClass('fadeInLeft d-block');
    });
    $('.mouseleave').hover(function () {
        if(MenuHover)
            IsMouseOver = 1;
    }).mouseleave(function () {
        IsMouseOver = 0;
        setTimeout(function () {
            if(!IsMouseOver)
            {
                $('.navbar-wrapper').removeClass('fadeInLeft').addClass('fadeOutRight');
                MenuHover = 0;
                setTimeout(function () {
                    $('.navbar-wrapper').removeClass('d-block');
                }, 700);
            }
        }, 3000);
    });
}
$(function () {
    //Remove preloader
    setTimeout(function () {
        $("body").css("background",'white').children().css("display","block");
        $("figure").css("display","none");
    }, 500);

    //Animation
    general_animation();
    navbar_animation();
});