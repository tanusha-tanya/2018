     (function($){
        $(window).on("load",function(){
           $("body").mCustomScrollbar();
        });
        $(document).ready(function () {
            $(".lazy").lazyload({
                effect : "fadeIn"
            });
        });        
    })(jQuery);
