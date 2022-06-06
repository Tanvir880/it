(function($){
    'use strict'



    // slide-nav
    $('.nav-icon span').on('click',function(){
        $('.slide-nav').animate({ right:0})
    })

    $('.close-icon span').on('click',function(){
        $('.slide-nav').animate({ right:-200})
    })


    // active nav
    $('.bzit-nav ul li a').on('click',function(){
        $('.bzit-nav ul li a').removeClass('active')
        $(this).addClass('active')
    })


    // active portfolio
    $('.portfolio-btn button').on('click',function(){
        $('.portfolio-btn button').removeClass('active')
        $(this).addClass('active')
    })




})(jQuery);