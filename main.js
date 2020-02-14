$(document).ready(function() {
  $("#accordion")
    .on("show.bs.collapse", function(e) {
      $(e.target)
        .prev(".panel-heading")
        .find(".panel-title_number")
        .addClass("panel-title_number--active");
      $(e.target)
        .prev(".panel-heading")
        .find(".arrow")
        .addClass("arrow--active");
      $(e.target)
        .find(".panel-body")
        .addClass("panel--bg-active");
    })
    .on("hide.bs.collapse", function(e) {
      $(e.target)
        .prev(".panel-heading")
        .find(".panel-title_number")
        .removeClass("panel-title_number--active");
      $(e.target)
        .prev(".panel-heading")
        .find(".arrow")
        .removeClass("arrow--active");
      $(e.target)
        .find(".panel-body")
        .removeClass("panel--bg-active");
    });
});
//panel-heading change color
$(".panel-collapse").on("show.bs.collapse", function() {
  $(this)
    .siblings(".panel-heading")
    .addClass("panel--bg-active ");
});

$(".panel-collapse").on("hide.bs.collapse", function() {
  $(this)
    .siblings(".panel-heading")
    .removeClass("panel--bg-active ");
});
