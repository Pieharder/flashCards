$(document).ready(function() {
  $(".well").click(function() {
    $("p", this).toggle();
    $("h3", this).toggle();
  })
})