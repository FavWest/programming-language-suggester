function whitespace(answer) {
  if (answer==="elegant") {
    return "Python";
  }
  else if (answer==="agree") {
    return "Python";
  }
  else if (answer==="disagree") {
    return "not Python";
  }
  else if (answer==="nope") {
    return "not Python";
  }
}

$(document).ready(function() {
  $("#all-questions").submit(function(event) {
    event.preventDefault();
    const answer = whitespace($("input:radio[name=whitespace]:checked").val());
    $("#rec1").text(answer);
    $("#recommendation1").show();
  });
});