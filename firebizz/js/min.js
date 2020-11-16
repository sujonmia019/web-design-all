
$(document).ready(function(){
  // MAIN SLIDER
  $('.slider-active').slick({
    dots:true,
    arrows:true,
    prevArrow:'<button type="button" class="prev-next">Prev</button>',
    nextArrow:'<button type="button" class="next-prev">next</button>',
    speed: 1000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false,
        }
      },
  ]
  });

// SERVICES SLIDER
  $('.service-slider').slick({
    dots: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
  });

// VIDEO POPPUP
  $('.video-popup').magnificPopup({
    type: 'iframe'
  });

  // CASES SLIDER
  $('.cases-slider').slick({
    dots: true,
    speed: 300,
    arrows:true,
    prevArrow:'<button type="button" class="prev-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
    nextArrow:'<button type="button" class="next-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,               
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
  });

// TESTIMONIAL SLIDER
  $('.Testimonial-active').slick({
    dots: true,
    speed: 300,
    arrows:true,
    prevArrow:'<button type="button" class="prev-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
    nextArrow:'<button type="button" class="next-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
  });



});
