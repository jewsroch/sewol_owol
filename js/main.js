$(window).scroll(function(){
    if ($(this).scrollTop() > 2110) {
        $('.image-container.sticky').addClass('fixed');
        $('.sticky-image.second').parent().addClass('after');
    } else {
        $('.image-container.sticky').removeClass('fixed');
        $('.sticky-image.second').parent().removeClass('after');
    }
});
