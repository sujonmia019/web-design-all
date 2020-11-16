$(document).ready(function(){
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu-active',
        meanScreenWidth: "768"
    });


	$('.advertiser-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText : ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

    $('.video-popup').magnificPopup({
      type: 'iframe'
      // other options
    });

});