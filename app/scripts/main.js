$(document).ready(function(){
  //slider
  $('.slider1').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.slider1').on('afterChange', function(event, slick, currentSlide){
    $('.content').removeClass('slide-box');
    $('.content[data-id=' + (currentSlide + 1) + ']').addClass('slide-box');
    console.log(currentSlide);
  });
  $('.content').bind('click', function() {
    console.log($(this).data('id'));
    var index = $(this).data('id')-1;
    $('.slider1').slick('slickGoTo', index, true);
  });

  // menu items
  $('.navbar-toggle').bind('click', function() {
    var el = $(this);
    if (el.hasClass('active')){
      el.addClass('collapsed');
      $('.navbar-collapse').removeClass('in');
      $('body').removeClass('body-scroll');
      $('.overlay').hide();
      el.removeClass('active');
    } else {
      el.removeClass('collapsed');
      $('.navbar-collapse').addClass('in');
      $('body').addClass('body-scroll');
      $('.overlay').show();
      el.addClass('active');
    }
  });

  // Search
  $('#search-icon').bind('click', function() {
    $('.search').show();
  });
  $('#search-close').bind('click', function() {
    $('.search').hide();
  });
});
