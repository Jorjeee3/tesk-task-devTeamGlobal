$(document).ready(function() {
   $('.header-burger').click(function (event) {
      $('.header-nav').removeClass('hidden')
   });

   $('.close-cross').click(function (event) {
      $('.header-nav').addClass('hidden')
   });
})