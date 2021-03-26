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
// $(document).ready(function () {
//   $(window).scroll(function (event) {
//     let pos_body = $("html,body").scrollTop();

//     // change color menu
//     if (pos_body > 100) {
//       $(".header__menu").css({
//         "background-color": "#000",
//         "box-shadow": "0px 0px 8px #00000052",
//       });
//     } else {
//       $(".header__menu").css({
//         "background-color": "transparent",
//         "box-shadow": "none",
//       });
//     }
//   });
// });

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
