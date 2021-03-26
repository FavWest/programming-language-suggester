function calculateResults(answer1, answer2) {
  let pythonScore=0;
  let javaScore=0;
  let jsScore=0;
  let kotlinScore=0;

  //SCORE WHITESPACE QUESTION
  if (answer1==="strongly-agree") {
    pythonScore += 10;
  }
  else if (answer1==="agree") {
    pythonScore += 5;
  }
  else if (answer1==="disagree") {
    pythonScore -= 5
  }
  else if (answer1==="strongly-disagree") {
    pythonScore -= 100;
  }

  //SCORE STRONGLY_TYPED QUESTION
  if (answer2==="strongly-agree") {
    jsScore -=100;
    pythonScore -=100;
    javaScore +=10;
    kotlinScore +=10;
  }
  else if (answer2==="agree") {
    jsScore -=5;
    pythonScore -=5;
    javaScore +=5;
    kotlinScore +=5;
  }
  else if (answer2==="disagree") {
    javaScore -=5;
    kotlinScore -=5;
  }
  else if (answer2==="strongly-disagree") {
    javaScore -=100;
    kotlinScore -=100;
  }

  //RETURN RESULTS
  return("Python Score: "+pythonScore 
  +" JavaScript Score: "+jsScore
  +" Java Score: "+javaScore
  +" Kotlin Score: "+kotlinScore)
}



$(document).ready(function() {
  $("#all-questions").submit(function(event) {
    event.preventDefault();
    const rec1= calculateResults($("input:radio[name=whitespace]:checked").val(),
    $("input:radio[name=strongly-typed]:checked").val());
    $("#rec1").text(rec1);
    $("#recommendation1").show();
  });
});