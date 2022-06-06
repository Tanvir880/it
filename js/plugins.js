(function($){
    'use strict'

    $(document).ready(function ($) {
        setTimeout(function(){ 
                  // filter items on button click
        $('.filter-button-group').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        var $grid = $('.grid').isotope({
          // set itemSelector so .grid-sizer is not used in layout
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            // use element for option
            columnWidth: '.grid-item'
          }
        });
             }, 1000);
        });


        new VenoBox();


        // Smooth scrolling
 
    var scrollLink = $('.scroll');
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
      scrollTop: $(this.hash).offset().top
      } );
    });

// Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
 
    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top -50;
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active-menu');//drop this class in li tag
        $(this).parent().siblings().removeClass('active-menu');
      }
    })   
  })
        
})(jQuery)