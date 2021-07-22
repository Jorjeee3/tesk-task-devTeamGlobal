<<<<<<< Updated upstream
=======
$(document).ready(function() {
   $('.header-burger').click(function (event) {
      $('.header-nav').removeClass('hidden')
   });

   $('.close-cross').click(function (event) {
      $('.header-nav').addClass('hidden')
   });

   // $('.slider').slick();

   $(".slider").slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         
         dots: true
         }
      },
      {
         breakpoint: 768,
         settings: "unslick",
         prevArrow: false,
         nextArrow: false,
         draggable: false
      }
   ]
   });
})
>>>>>>> Stashed changes
