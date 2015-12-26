$(function(){
  setInterval(blinker, 2000);
  setInterval(scroll, 4000);
  // $('.dont-click').on('click', comicsansify);
});

function blinker() {
  $('.blink').fadeOut(500).fadeIn(500);
}

function scroll(){
  var $container = $(".random");
  var $last = $container.children().last();
  $container.prepend($last.clone());
  $last.fadeOut(300).remove();
}

function comicsansify(){
  $('*').each(function(){
    $(this).css("font-family", "'Comic Sans MS', cursive, sans-serif");
  });
}
