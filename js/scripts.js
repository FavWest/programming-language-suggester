function findTopResult(lang) {
  //Array meaning: [javaScore, jsScore, kotlinScore, pythonScore]
  if(lang[0]>=lang[1] && lang[0]>=lang[2] && lang[0]>=lang[3]){
    return "Java";
  }
  else if(lang[1]>=lang[2]&&lang[1]>=lang[3]){
    return "JavaScript";
  }
  else if(lang[2]>=lang[3]){
    return "Kotlin";
  }
  else {
    return "Python";
  }
}

function calculateResults(answer1, answer2, answer3, answer4, answer5, answer6) {
  let pythonScore=0;
  let javaScore=0;
  let jsScore=0;
  let kotlinScore=0;

  //SCORE WHITESPACE QUESTION 1
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

  //SCORE STRONGLY_TYPED QUESTION 2
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

  //SCORE PSEUDOCODE QUESTION 3
  if (answer3==="strongly-agree") {
    pythonScore += 10;
  }
  else if (answer3==="agree") {
    pythonScore += 5;
  }
  else if (answer3==="disagree") {
    pythonScore -= 5
  }
  else if (answer3==="strongly-disagree") {
    pythonScore -= 100;
  }

  //SCORE WEBPAGE QUESTION 4
  if (answer4==="strongly-agree") {
    jsScore += 100;
  }
  else if (answer4==="agree") {
    jsScore += 10;
  }
  else if (answer4==="strongly-disagree") {
    jsScore -= 100;
  }

  //SCORE PHONE QUESTION 5
  if (answer5==="strongly-agree") {
    javaScore += 100;
    kotlinScore +=100;
  }
  else if (answer5==="agree") {
    javaScore += 10;
    kotlinScore += 10;
  }
  else if (answer5==="strongly-disagree") {
    kotlinScore -=100;
  }

  //SCORE COOL NEW LANGUAGE QUESTION
  if (answer6==="strongly-agree") {
    pythonScore -= 100;
    javaScore -= 100;
    jsScore -=100;
    kotlinScore +=100;
  }
  else if (answer6==="agree") {
    pythonScore -= 5;
    javaScore -= 5;
    jsScore -=5;
    kotlinScore +=5;
  }
  else if (answer6==="disagree") {
    pythonScore += 5;
    javaScore += 5;
    jsScore +=5;
    kotlinScore -=5;
  }
  else if (answer6==="strongly-disagree") {
    pythonScore += 5;
    javaScore += 5;
    jsScore +=5;
    kotlinScore -=100;
  }

  //RETURN RESULTS
  return([javaScore, jsScore, kotlinScore, pythonScore]);
}



$(document).ready(function() {
  $("#all-questions").submit(function(event) {
    event.preventDefault();
    const languageScores= calculateResults($("input:radio[name=whitespace]:checked").val(),
    $("input:radio[name=strongly-typed]:checked").val(),
    $("input:radio[name=pseudocode]:checked").val(),
    $("input:radio[name=webpage]:checked").val(),
    $("input:radio[name=phone]:checked").val(),
    $("input:radio[name=cool]:checked").val());
    $("#language-scores").text(languageScores.toString());
    const topResult=findTopResult(languageScores);
    $("#top-result").text(topResult);
    $("#recommendation").show();
  });
});