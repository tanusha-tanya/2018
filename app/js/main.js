 
     (function($){
               
          /* $("body").addClass("mCustomScrollbar");*/
        
    AOS.init();     
      $('.felicitation').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true,
        lazyLoad: 'ondemand',
        prevArrow: '<span class="prevArrow arrowSlick"></span>',
        nextArrow: '<span class="nextArrow arrowSlick"></span>'  
      });  
    })(jQuery);
    
        