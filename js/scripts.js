function calculateResults(answer1) {
  let pythonScore=0;
  let javaScore=0;
  let jsScore=0;
  let kotlinScore=0;

  pythonScore=whitespace(answer1, pythonScore);
  
  if (pythonScore > 0) {
    return "You might like Python";
  }
  else {
    return "Sorry, something went wrong"
  }
}

function whitespace(answer1, pythonScore) {
  if (answer1==="strongly-agree") {
    pythonScore += 10;
  }
  else if (answer1==="agree") {
    pythonScore += 5;
  }
  else if (answer1==="disagree") {
    pythonScore -= 5
  }
  else if (answer1==="nope") {
    pythonScore -= 100;
  }
  return pythonScore;
}

$(document).ready(function() {
  $("#all-questions").submit(function(event) {
    event.preventDefault();
    const rec1= calculateResults($("input:radio[name=whitespace]:checked").val());
    $("#rec1").text(rec1);
    $("#recommendation1").show();
  });
});