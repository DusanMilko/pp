var $ = require('jQuery');
var owlCarousel = require('owlCarousel');

module.exports = function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  var productCarousel = $('.product-carousel');

  productCarousel.owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    navText: ["<i class='icon cif-prev'></i>","<i class='icon cif-prev'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    onInitialized: productCarouselCallback
  });

  function productCarouselCallback(event) {
    productCarousel.find('.owl-prev').addClass('is-disabled');
  };
  
  productCarousel.on('changed.owl.carousel', function(event) {
    if( event.item.count - 1 == event.item.index ) {
        productCarousel.find('.owl-next').addClass('is-disabled');
    } else {
        productCarousel.find('.owl-next').removeClass('is-disabled');
    }

    if( 0 == event.item.index ) {
        productCarousel.find('.owl-prev').addClass('is-disabled');
    } else {
        productCarousel.find('.owl-prev').removeClass('is-disabled');
    }
  });
}