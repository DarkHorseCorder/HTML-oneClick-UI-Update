/**
 * This is script for index page
 */
$(document).scroll(function() {
  if($(window).scrollTop() > 100){
    $($(".header")[0]).addClass("pin");
  }else if($(window).scrollTop() < 100){
    $($(".header")[0]).removeClass("pin");
  }
});

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
  // $('.header .nav-link').click(function(e) {
  //   e.preventDefault();
  //   let target = $(this).attr('href');
  //   $('html').animate({
  //     scrollTop: $(target).offset().top
  //   }, 800); 
  //   let width = $(window).width();
  //   if ( width < 992) {
  //     $('.hamburger').trigger('click');
  //   }
  // });
 });