var $ = require('jQuery');

module.exports = function() {

  var ink, d, x, y;
  $(".ripplelink").click(function(e){
    if($(this).find(".ripple-ink").length === 0){
        $(this).prepend("<span class='ripple-ink'></span>");
    }
         
    ink = $(this).find(".ripple-ink");
    ink.removeClass("ripple-animate");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).addClass("ripple-animate");
  });

}