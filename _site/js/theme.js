// animate icon/img appearance on scroll
$(window).scroll(function() {
  $('.animateEntry').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+480) {
      $(this).addClass("animated fadeInUp");
    }
  });
  $('.animateEntryLeft').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+480) {
      $(this).addClass("animated fadeInLeft");
    }
  });
  $('.animateEntryRight').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+480) {
      $(this).addClass("animated fadeInRight");
    }
  });
});
