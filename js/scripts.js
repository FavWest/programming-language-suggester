$(document).ready(function() {
  $("#all-questions").submit(function(event) {
    event.preventDefault();
    $("#recommendation1").show();
  });
});