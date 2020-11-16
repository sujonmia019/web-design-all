(function ($) {
  "use strict";

  // portfolio-items
  var grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-item'
    }
  })

  // portfolio-button-active
  $('.portofilo-menu button').on('click', function(){
    $(this).addClass('actives').siblings().removeClass('actives')
  })
  
  // portfolio-filter-button
  $('.portofilo-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    grid.isotope({ filter: filterValue });
  })

  // portfolio-hover-icon-click-images-popup
  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  })

  // counter-up
  $('.counter-up').counterUp({
    delay: 15,
    time: 1500
  });

  // letest-blog-active
  $('.blog-active').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // testimonial-active
  $('.tesimonial-active').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // scroll-top -btn
  $(".scroll-top").click(function() {
    $("body,html").animate({ scrollTop: 0 },1000 );
    return false;
  });

  // brand-logo-active
  $('.brand-active').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // right-side-info
  $('.open-info').click(function(){
    $('.right-side-info').addClass('right-show');
  })
  $('.closes').click(function(){
    $('.right-side-info').removeClass('right-show');
  })

  // search-slide-show
  $('.search-open').click(function(){
    $('.search-box').addClass('search-show');
  })
  $('.closed').click(function(){
    $('.search-box').removeClass('search-show');
  })

  // responsive-mobile-menu
  jQuery('#mobile-menu').meanmenu({
    meanMenuContainer: '.menu-active',
    meanScreenWidth: "991"
  });
                
})(jQuery);	 

