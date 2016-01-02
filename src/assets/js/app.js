$(function(){
  // setInterval(scroll, 3000);
});

function scroll(){
  var $container = $(".header__random ul");
  var $last = $container.children().last();
  $container.prepend($last.clone());
  $last.fadeOut(300).remove();
}

function comicsansify(){
  $('*').each(function(){
    $(this).css("font-family", "'Comic Sans MS', cursive, sans-serif");
  });
}
