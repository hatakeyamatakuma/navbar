$(function() {
  const win = $(window),
      nav = $('.nav'),
      navTop = nav.offset().top;
  $(window).scroll(function(){
    let winTop = $(this).scrollTop();
    if(winTop >= navTop) {
      nav.addClass("fixed")
    }else if(winTop <= navTop) {
      nav.removeClass("fixed")
    }
  })
});