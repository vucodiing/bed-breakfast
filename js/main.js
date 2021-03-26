$(document).ready(function () {
  $(".menu__list li").hover(
    function () {
      $(this).find("ul:first").slideDown(500);
    },
    function () {
      $(this).find("ul:first").hide(300);
    }
  );
});

// scroll page
$(document).ready(function () {
  $(window).scroll(function (event) {
    let pos_body = $("html,body").scrollTop();

    // change color menu
    if (pos_body > 30) {
      $("#logo-home-1").css("display", "none");
      $("#logo-home-2").css("display", "block");
      $(".scroll").css("color", "#000");
      $(".menu__icon-count").css("background-color", "#c59d5f");
      $(".header__menu").css("background-color", "#fff");
      $(".menu__icon svg").css("color", "#000");
      $(".menu__icon-count span").css("color", "#fff");
    } else {
      $("#logo-home-1").css("display", "block");
      $("#logo-home-2").css("display", "none");
      $(".scroll").css("color", "#fff");
      $(".menu__icon-count").css("background-color", "#fff");
      $(".header__menu").css("background-color", "#ffb400");
      $(".menu__icon svg").css("color", "#fff");
      $(".menu__icon-count span").css("color", "#999");
    }
  });
});

// validate
// for email home page
$(document).ready(function () {
  $(".footer__search").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      email: {
        required: "Please enter email",
        email: "Email not true",
      },
    },
  });
});
