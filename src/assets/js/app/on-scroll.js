var $ = require('jQuery');

module.exports = function() {

  $( window ).scroll(function() {
    if( $(window).scrollTop() > 90 ){
      $('body').addClass('is-scrolled');
    } else {
      $('body').removeClass('is-scrolled');
    }
  });

  if( $(window).scrollTop() > 90 ){
    $('body').addClass('is-scrolled');
  } else {
    $('body').removeClass('is-scrolled');
  }

}