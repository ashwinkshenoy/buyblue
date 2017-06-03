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
  $('.content').bind('click', function(){
    console.log($(this).data('id'));
    var index = $(this).data('id')-1;
    $('.slider1').slick('slickGoTo', index, true);
  });
});
