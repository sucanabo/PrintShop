
$(document).ready(function () {
    //slide
    $(".owl-carousel.header-banner").owlCarousel({
        items:1,
        dots:false,
        loop:true, 
        autoplay:true,
        autoplayTimeout:5000,
    });
    $(".owl-carousel.post__container").owlCarousel({
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            }
        },
        dots:true,
        loop:true,
        nav:true
    });
    $(".owl-carousel.slide__container").owlCarousel({
        autoHeight:true,
        items:3,
        margin:10,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            }
        },
        loop:true, 
        autoplay:true,
        autoplayTimeout:5000,
    });
    $(".owl-carousel.galery-container").owlCarousel({
        items:1,
        dots:false,
        loop:true,
        nav:true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash' 
    });
    $(".owl-carousel.product-thumbnail").owlCarousel({
        items:3,
        dots:false,
        loop:true,
        margin:5
    });
});

