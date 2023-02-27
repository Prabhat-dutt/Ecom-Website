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
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  //Isotope Filter
  var $grid = $(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
  });

  //filter items on button click
  $(".button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  //new_phones owl carousel
  $("#new_phones .owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  //blogs carousel
  $("#blogs .owl-carousel").owlCarousel({
    loop: true,
    dots: true,

    responsive: {
      0: {
        items: 1,
        autoplay: true,
      },
      600: {
        items: 2,
        autoplay: true,
      },
      800: {
        items: 3,
      },
    },
  });

  //click on qty up button
  $(".qty").on("click", ".qty-up", function (e) {
    let parent = $(this).closest(".qty");
    let input = parent.find(".qty-input");
    if (input.val() >= 1 && input.val() <= 9) {
      input.val(function (i, oldval) {
        return ++oldval;
      });
    }
  });

  // click on qty down button
  $(".qty").on("click", ".qty-down", function (e) {
    let parent = $(this).closest(".qty");
    let input = parent.find(".qty-input");
    if (input.val() > 1 && input.val() <= 10) {
      input.val(function (i, oldVal) {
        return --oldVal;
      });
    }
  });
});
