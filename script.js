
// $(document).ready(function () {
//    $('.header-burger').click(function (event) {
//       $('.header-nav').removeClass('hidden');
//       $('body').css('overflow', 'hidden');
//       $('header-nav').css('z-index', '10');
//       $('slider-image').css('display', 'none');
//    });

//    $('.close-cross').click(function (event) {
//       $('.header-nav').addClass('hidden');
//       $('body').css('overflow', 'auto');
//    });

//    $('.spotlight-list').slick({
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       responsive: [
//          {
//             breakpoint: 1024,
//             settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: true,
//             }
//          },
//          {
//             breakpoint: 900,
//             settings: "unslick",
//          }
//       ]
//    });

// })

$(document).ready(function () {
//    $('.header-burger').click(function (event) {
//       $('.header-nav').removeClass('hidden');
//       $('body').css('overflow', 'hidden');
//       $('header-nav').css('z-index', '10');
//       $('slider-image').css('display', 'none');
//    });

//    $('.close-cross').click(function (event) {
//       $('.header-nav').addClass('hidden');
//       $('body').css('overflow', 'auto');
//    });


   // $('.spotlight-list').slick({
   //    infinite: true,
   //    slidesToShow: 1,
   //    slidesToScroll: 1,
   //    arrows: false,
   //    responsive: [
   //       {
   //          breakpoint: 1024,
   //          settings: {
   //            slidesToShow: 1,
   //            slidesToScroll: 1,
   //            infinite: true,
   //          }
   //         },
   //       {
   //          breakpoint: 900,
   //          settings: "unslick",
   //       }
   //    ]
   // });

   $('.spotlight-list').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
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
         }
      ]
   });

})


