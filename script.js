     window.addEventListener('DOMContentLoaded', (event) => {
         jQuery('section#brand-bar').css("linear-gradient(0deg,rgba(0,0,0,.75),#000)", "rgba(255, 255, 255, 0.2)");
         jQuery(window).scroll(function() {
             if (jQuery(window).scrollTop() > 0) {
                 jQuery('section#brand-bar').css("linear-gradient(0deg,rgba(0,0,0,.75),#000)", "#000");
             } else {
                 jQuery('section#brand-bar').css("linear-gradient(0deg,rgba(0,0,0,.75),#000)", "rgba(255, 255, 255, 0.2)");
             }
         });
     });
     /*^^^^^^^^^^^^^^^^^^^^^^^^^^^ Blurred Effect ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^66*/
     $(document).ready(function() {
         $(window).scroll(function(e) {
             var s = $(window).scrollTop(),
                 opacityVal = (s / 200);

             $('.panel .theme--stone').css('opacity', opacityVal);
         });
     });
     $(document).ready(function() {
         $(window).scroll(function(e) {
             var s = $(window).scrollTop(),
                 opacityVal = (s / 200);

             $('.panel .theme--choco').css('opacity', opacityVal);
         });
     });