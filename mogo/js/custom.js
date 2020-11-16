$(document).ready(function(){
  // STICKY MENU SLIDER
   $(".header").sticky({topSpacing:0});

  // COMMENTS SECTON
   $('.comment-active').slick({
     arrows:true,
     prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
     nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
     dots: false,
   });

   // COMPANY SECTION
//    $('.company-active').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:6
//         },
//         1300:{
//             items:6
//         }
//     }
// })

$('.testimonial-active').slick({
  arrows:true,
  prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  dots: false,
});

 });
