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

$(document).ready(function () {
  $("#span-1").click(
    function () {
      $(".span-1").toggle(500);
    }
  );
  $("#span-2").click(
    function () {
      $(".span-2").toggle(500);
    }
  );
  $("#span-3").click(
    function () {
      $(".span-3").toggle(500);
    }
  );
  $("#span-4").click(
    function () {
      $(".span-4").toggle(500);
    }
  );
  $("#span-5").click(
    function () {
      $(".span-5").toggle(500);
    }
  );
  $("#span-6").click(
    function () {
      $(".span-6").toggle(500);
    }
  );
  $("#span-7").click(
    function () {
      $(".span-7").toggle(500);
    }
  );
});

// scroll page
$(document).ready(function () {
  $(window).scroll(function (event) {
    let pos_body = $("html,body").scrollTop();

    // change color menu desktop
    if (pos_body > 30) {

    } else {

    }
  });
});

// show header contact
$(document).ready(function () {
  $("#show-contact-menu").click(function () {
    $(".header__contact").css({ "right": "0", "visibility": "visible" });
  })
  $(".header__contact-close").click(function () {
    $(".header__contact").css({ "right": "-405px", "visibility": "hidden" });
  })
})

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

