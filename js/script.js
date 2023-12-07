   (function ($) {
     // smooth scrol
     $("a.smoth-scroll").on("click", function (e) {
       var anchor = $(this);
       $("html, body")
         .stop()
         .animate(
           {
             scrollTop: $(anchor.attr("href")).offset().top - 90,
           },
           1000
         );
       e.preventDefault();
     });

     // our partner slider
     $("#owl-feature-services").owlCarousel({
       loop: true,
       margin: 10,
       nav: true,
       dots: true,
       navText: [
         // "<i class='fa fa-caret-left'></i>",
         // "<i class='fa fa-caret-right'></i>"
       ],
       autoplay: true,

       responsive: {
         0: {
           items: 4,
         },
         600: {
           items: 4,
         },
         1000: {
           items: 6,
         },
       },
     });
   })(jQuery);
