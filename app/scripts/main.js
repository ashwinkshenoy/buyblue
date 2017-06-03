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
      el.removeClass('active');
      $('.navbar-collapse').removeClass('in');
      $('body').removeClass('body-scroll');
      $('.overlay').hide();
    } else {
      $('body').addClass('body-scroll');
      el.addClass('active');
      $('.navbar-collapse').addClass('in');
      el.removeClass('collapsed');
      $('.overlay').show();
    }
  });

});
