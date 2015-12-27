$(function(){
  setInterval(function(){
    blinker('.blink');
  }, 2000);

  setInterval(function(){
    blinker('.header__linkedin');
  }, 1000);

  setInterval(scroll, 3000);

  // $('.dont-click').on('click', comicsansify);
  // new BugController({'minBugs':10, 'maxBugs':10, 'mouseOver':'die'});
});

function blinker(selector) {
  $(selector).fadeOut(500).fadeIn(500);
}

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
