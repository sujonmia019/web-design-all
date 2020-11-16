$(document).ready(function(){
   
    
    
    
   /*RESPONSIVE MENU */
    $('#nav').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: 1200,
    });
    
    /*MAIN SLIDER*/
       $('.product-active').slick({
           prevArrow:'<button type="button" class="prev-next">Prev</button>',
           nextArrow:'<button type="button" class="next-prev">next</button>', 
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                  infinite: true,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
    
    /*STICKY MENU */
    $(".navigation").sticky({topSpacing:0});
    
     /*scrollTop BUTTON*/  
  $(".scrolltop").click(function(){
      $("html,body").animate({scrollTop: 0}, 800);
  }); 
    
  $(window).scroll(function(){
      if($(this).scrollTop() > 100){
          $(".scrolltop").fadeIn();
      }
      else{
          $(".scrolltop").fadeOut();
      }
  }); 
    
    
});