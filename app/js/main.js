     (function($){
        $(window).on("load",function(){
           $("body").mCustomScrollbar();
        });
        $(document).ready(function () {
            $(".lazy").lazyload({
                effect : "fadeIn"
            });
        }); 
		 var wh = window.innerHeight,
         $scrolling = $('#new'),
		var ctrl = new ScrollMagic.Controller({
     globalSceneOptions: {
         triggerHook: 'onLeave'
     }
 });
 
 // Создаем сцену
		 $("figure").each(function() {
			
			 new ScrollMagic.Scene({
				 triggerElement: this,
				 duration: '50%'
			 })
			 .setPin(this)
			 .addTo(ctrl);
		 });
		 new ScrollMagic.Scene({
     duration: '70%'
 });
 .setTween(new)
 .triggerElement($('body')[0])
 .addTo(ctrl);
    })(jQuery);
