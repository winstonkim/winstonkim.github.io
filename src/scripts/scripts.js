// Smooth Scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

// Fade on scroll
$(window).scroll(function(){
  var windowScrollTop = $(window).scrollTop();
  $( '#landing .wrapper' ).css('opacity', 1 - windowScrollTop / 350);
  $( '#landing .left-bar' ).css('opacity', 1 - windowScrollTop / 350);
});

// Project Modals
window.REMODAL_GLOBALS = {
  NAMESPACE: 'over',
  DEFAULTS: {
    closeOnOutsideClick: false
  }
};