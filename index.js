$(function(){
  const win = $(window),
      main = $("#main"),
      nav = $("#nav"),
      navHeight = nav.outerHeight(),
      navPos = nav.offset().top,
      fixedClass = "is-fixed";

      win.on("load scroll", function(){
        const value = $(this).scrollTop();
        if(value > navPos) {
          nav.addClass(fixedClass);
          main.css("margin-top", navHeight);
          nav.css("background-color", "blue");
        }else {
          nav.removeClass(fixedClass);
          main.css("margin-top", "0");
          nav.css("background-color", "gray")
        }
      })
});