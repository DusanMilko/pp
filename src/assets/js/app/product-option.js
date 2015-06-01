var $ = require('jquery');

module.exports = function() {
  // Click to scroll the a[href] value, value will go to the id of that value
  // Ex:
  // <a class="js-scroll-to" href="#hello">Scroll me to hello</a>
  // takes you to ->
  // <div id="hello">Hello Content</div>
  $('.js-product-option').on( "click", "a", function(e) {
    e.preventDefault;

    $(this).parent('li').siblings().removeClass('is-active');

    if( $(this).parent('li').hasClass('is-active') ){
      $(this).parent('li').removeClass('is-active');
    } else {
      $(this).parent('li').addClass('is-active');
    }

    return false;
  });
}