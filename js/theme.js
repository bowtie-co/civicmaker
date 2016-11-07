// animate icon/img appearance on scroll
$(window).scroll(function() {
  $('.animateEntry').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+200) {
      $(this).addClass("animated fadeInUp");
    }
  });
});
