// menu toggle desktop
$(document).ready(function () {
  $(".menu-main li").hover(
    function () {
      $(this).find("ul:first").slideDown(500);
      $(this).find("ul:first").css("display", "flex");
    },
    function () {
      $(this).find("ul:first").hide(600);
    }
  );
});
// menu toggle mobile and tablet
$(document).ready(function () {
  $("#span-1").click(function () {
    $(".span-1").toggle(500);
  });
  $("#span-2").click(function () {
    $(".span-2").toggle(500);
  });
  $("#span-3").click(function () {
    $(".span-3").toggle(500);
  });
  $("#span-4").click(function () {
    $(".span-4").toggle(500);
  });
  $("#span-5").click(function () {
    $(".span-5").toggle(500);
  });
  $("#span-6").click(function () {
    $(".span-6").toggle(500);
  });
  $("#span-7").click(function () {
    $(".span-7").toggle(500);
  });
});

// scroll page
$(document).ready(function () {
  $(window).scroll(function (event) {
    let pos_body = $("html,body").scrollTop();

    // change color menu desktop
    if (pos_body > 30) {
      // change logo
      $("#logo-home-1").css("display", "none");
      $("#logo-home-2").css("display", "block");
      // change color of menu
      $(".scroll a").css("color", "#000");
      // change color of header
      $(".header").css("background-color", "#fff");
      // change color icon search, shopping, menu contact
      $(".header__menu-icon svg").css("color", "#000");
      // change color and background of span
      $(".shopping-bag-group span").css({
        "background-color": "#ffb400",
        color: "#fff",
      });
    } else {
      //change logo
      $("#logo-home-1").css("display", "block");
      $("#logo-home-2").css("display", "none");
      // change color of menu
      $(".scroll a").css("color", "#fff");
      // change color of header
      $(".header").css("background-color", "#ffb400");
      // change color icon search, shopping, menu contact
      $(".header__menu-icon svg").css("color", "#fff");
      // change color and background of span
      $(".shopping-bag-group span").css({
        "background-color": "#fff",
        color: "#000",
      });
    }
  });
});

// show header contact
$(document).ready(function () {
  $("#show-contact-menu").click(function () {
    $(".header__contact").css({ right: "0", visibility: "visible" });
  });
  $(".header__contact-close").click(function () {
    $(".header__contact").css({ right: "-405px", visibility: "hidden" });
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

// show menu tablet and mobile
$(document).ready(function () {
  $(".header__nav").click(function () {
    if ($(".header__menu-mobile").css("left") == "-2000px") {
      $(".header__menu-mobile").css("left", "0");
    } else {
      $(".header__menu-mobile").css("left", "-2000px");
    }
  });
});
////////
