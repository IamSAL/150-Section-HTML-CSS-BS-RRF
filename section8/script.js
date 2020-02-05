$( document ).ready(function() {
    console.log( "document loaded" );
    $(".owl-carousel").owlCarousel({
        animateOut:true,
        items:4,
        autoplay: true,
        loop:true,
        nav:true,
        navText:["<div class='own-navigator'><i class='fas fa-long-arrow-alt-left'></i></div>","<div class='own-navigator'><i class='fas fa-long-arrow-alt-right'></i></div>"],
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                loop:true,
                dots:true,
            },
            480:{
                items:2,
                nav:false,
                dots:true,
                loop:false
            },
            768:{
                items:3,
                nav:false,
                loop:true,
                animateOut:true
            },
            1024:{
                items:4,
                nav:true,
                loop:true,
                animateOut:true
            }
        }


    });
});

$( window ).on( "load", function() {
    console.log( "window loaded" );
});