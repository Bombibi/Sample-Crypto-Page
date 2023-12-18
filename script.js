$(".arrow-img").click(function () {
  $(".drop-down-menu").toggleClass("active");
});

$(".drop-down-menu a").click(function (event) {
  event.preventDefault();
  var selectedLang = $(this).attr("data-lang");
  $("#selectedLanguage").text(selectedLang);
});

$(".arrow").click(function () {
  $(this).closest("li").find(".sub-menu").toggleClass("close");
});
