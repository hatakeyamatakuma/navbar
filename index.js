// $(function() {
//   const win = $(window),
//       nav = $('.nav'),
//       navTop = nav.offset().top;
//   $(window).scroll(function(){
//     let winTop = $(this).scrollTop();
//     if(winTop >= navTop) {
//       nav.addClass("fixed")
//     }else if(winTop <= navTop) {
//       nav.removeClass("fixed")
//     }
//   })
// });

$(function() {
  let target = $(".nav").offset().top;
  $(window).on("scroll", function() {
    let currentPos = $(window).scrollTop();
    if(currentPos > target) {
      $(".nav").addClass('active');
    } else{
      $(".nav").removeClass('active');
    }
  });
});