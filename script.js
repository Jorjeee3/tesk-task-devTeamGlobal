
$(document).ready(function () {
   $('.header-burger').click(function (event) {
      $('.header-nav').removeClass('hidden');
      $("body").css("overflow", "hidden");
   });

   $('.close-cross').click(function (event) {
      $('.header-nav').addClass('hidden');
      $("body").css("overflow", "auto");
   });




   $('.slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      variableWidth: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
            }
         },
         {
            breakpoint: 900,
            settings: "unslick",
            prevArrow: false,
            nextArrow: false,
            draggable: false
         }
      ]
   });
})

