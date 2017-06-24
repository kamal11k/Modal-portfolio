$(function() {
    $('[data-popup-open]').on('click', function(e)  {
        // var targeted_popup_class = $(this).attr('data-popup-open');
        $('.popup').fadeIn(300);
        var src = $(this).children('img').attr('src');
        $('.popup-inner').children('img').attr('src',src);
        var header = $(this).children().attr('alt');
        $('.popup-inner').children('h2').html('<h2>'+header+'</h2>');
        e.preventDefault();
    });

    $('[data-popup-close]').on('click', function(e)  {

        $('.popup').css({"display":"none"});

        e.preventDefault();
    });
});
