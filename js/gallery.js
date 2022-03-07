// <script>
// $(window).scroll(function() {
//     $('.fade-in').each(function() {
//         var top_of_element = $(this).offset().top;
//         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
//         var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
//         var top_of_screen = $(window).scrollTop();
//
//         if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
//             $(this).addClass('is-visible');
//         }
//     });
// });
// </script>

// $(document).on("scroll", function() {
//   var pageTop = $(document).scrollTop();
//   var pageBottom = pageTop + $(window).height();
//   var tags = $(".tag");
//
//   for (var i = 0; i < tags.length; i++) {
//     var tag = tags[i];
//
//     if ($(tag).position().top < pageBottom) {
//       $(tag).addClass("visible");
//     } else {
//       $(tag).removeClass("visible");
//     }
//   }
// });

// $(function(){  // $(document).ready shorthand
//   $('.monster').fadeIn('slow');
// });

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1500);

            }

        });

    });

});
