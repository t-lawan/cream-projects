const $ = require("jquery");

export const onInitialClientRender = () => {
    $(document).ready(function()
    {
        $(".nav-hitbox-1").hover(
            function()
            {
                $(".nav-item-1").attr("src", "/cream-on.gif");
            },
            function()
            {
                $(".nav-item-1").attr("src", "/cream-off.svg");
            }
        );
        $(".nav-hitbox-2").hover(
            function()
            {
                $(".nav-item-2").attr("src", "/work-on.gif");
            },
            function()
            {
                $(".nav-item-2").attr("src", "/work-off.svg");
            }
        );
        $(".nav-hitbox-3").hover(
            function()
            {
                $(".nav-item-3").attr("src", "/about-on.gif");
            },
            function()
            {
                $(".nav-item-3").attr("src", "/about-off.svg");
            }
        );
        $(".nav-hitbox-4").hover(
            function()
            {
                $(".nav-item-4").attr("src", "/contact-on.gif");
            },
            function()
            {
                $(".nav-item-4").attr("src", "/contact-off.svg");
            }
        );
    });
    
    
    
    
        $(window).scroll(function() {
            // Setting: Start fading halfway up the page
            var startPos = .25;
          
            // Cache window object
            var $w = $(window);
          
            // Basically, we go through each element and check its relative position within the viewport
            $('.fade').each(function() {
          
              // Get current relative position in viewport, based on the top edge
              var pos = $(this).offset().top - $w.scrollTop();
          
              // Get viewport height
              var vh = $w.height();
          
              if (pos < vh * startPos - 150) {
                // If element has past the starting threshold, we fade it
                $(this).css('opacity', pos / (vh * startPos) * 1);
              } else {
                $(this).css('opacity', 1);
              }
            });
          });

}