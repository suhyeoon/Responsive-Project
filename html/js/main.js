$(function(){
    /* scroll event */
    $(window).scroll(function(){
        if($(window).scrollTop()>60){
            $('#header').addClass('on');
        }else{
            $('#header').removeClass('on');
        }
    });
    
    /* gnb */
    $('#gnb .depth1>a').on('click', function(event){
        event.stopPropagation();
        $(this).next('ul').slideToggle(200);
    });
    
    /* tnb */
    $('.tnb .lang>a').on('click', function(){
        $('.tnb .lang ul').slideToggle(250);
    });
    
    /* btn */
    $('.btn').on('click', function(){
        $('header').toggleClass('mobile-on');
    });

    /* f-family */
    $('.f-btn').on('click', function(){
        $('.f-family>ul').slideToggle(0,"easeOutQuint");
    });
});
