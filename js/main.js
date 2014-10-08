$(window).scroll(function(){
    if ($(this).scrollTop() > 2100) {
        $('#sticky-image-container').addClass('fixed');
        $('#sticky-image-container').next('.copy').addClass('after');
    } else {
        $('#sticky-image-container').removeClass('fixed');
        $('#sticky-image-container').next('.copy').removeClass('after');

    }
});
