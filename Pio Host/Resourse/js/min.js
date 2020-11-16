$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
        dots:false,
        nav:false,
	    loop:true,
	    margin:30,
	    responsiveClass:true,
	    responsive:{
	       0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
            loop:true
        }
	         
	    }
	})



    $(".navigation").sticky({
        topSpacing:0
    });


});