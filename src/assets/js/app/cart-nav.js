var $ = require('jquery');

module.exports = function() {
  $('.js-cart-nav-btn').on( "click", function(e) {
    e.preventDefault;

    if( $(this).hasClass('is-active') ){
      $(this).removeClass('is-active');
      $('.js-cart-nav').removeClass('is-active');
    } else {
      $(this).addClass('is-active');
      $('.js-cart-nav').addClass('is-active');
    }

    return false;
  });

  // On click outside 
  $(document).mouseup(function (e) {
    var cartCont = $('.js-cart-nav');
    var cartBtn = $('.js-cart-nav-btn');

    if (
      (!cartCont.is(e.target) // if the target of the click isn't the container...
      && cartCont.has(e.target).length === 0) // ... nor a descendant of the container
      &&
      (!cartBtn.is(e.target) // if the target of the click isn't the container...
      && cartBtn.has(e.target).length === 0) // ... nor a descendant of the container
    ){
      $('.js-cart-nav').removeClass('is-active');
      $('.js-cart-nav-btn').removeClass('is-active');
    }
  });
}