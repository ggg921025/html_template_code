/**
 * This is script for index page
 */

 $(document).ready(function() {
  // Wow init
  new WOW().init();
  // Hamburger
  $('.hamburger').click(function() {
    $(this).toggleClass('active');
    $('.header .nav-items').toggleClass('active');
    if ($(this).hasClass('active')) {
      $('body').append('<div class="overlay"></div>');
    }
    else {
      $('body .overlay').remove();
    }
  });
  // Header menu
  $('.header .nav-link').click(function(e) {
    e.preventDefault();
    let target = $(this).attr('href');
    $('html').animate({
      scrollTop: $(target).offset().top
    }, 800); 
    let width = $(window).width();
    if ( width < 992) {
      $('.hamburger').trigger('click');
    }
  });
  //  $("a").on('click', function(event) {

  //   // Make sure this.hash has a value before overriding default behavior
  //   if (this.hash !== "") {
  //     // Prevent default anchor click behavior
  //     event.preventDefault();

  //     // Store hash
  //     var hash = this.hash;

  //     // Using jQuery's animate() method to add smooth page scroll
  //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  //     $('html, body').animate({
  //       scrollTop: $(hash).offset().top
  //     }, 800, function(){
   
  //       // Add hash (#) to URL when done scrolling (default click behavior)
  //       window.location.hash = hash;
  //     });
  //   } // End if
  // });
 });