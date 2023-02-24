$(document).ready(function () {
  //banner owl carousel
  $(document).ready(function () {
    $("#banner-area .owl-carousel").owlCarousel({
      loop: true,
      margin: 0,
      dots: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  });

  //top_sale owl carousel
  $("#top-sale .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 6,
        nav: true,
      }
    }    
  });

  //Isotope Filter
  var $grid = $(".grid").isotope({
    itemSelector:'.grid-item',
    layoutMode:'fitRows'
  });

  //filter items on button click
  $(".button-group").on("click", "button",function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({filter:filterValue});
  })
});