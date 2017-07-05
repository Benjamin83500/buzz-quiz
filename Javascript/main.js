function myFunction() {
    document.getElementById("quiz").classList.remove("hide");
}
function check(){
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var correct = 0;

    if (question1 == "Piotr Ilitch Tchaikovski") {
      correct++;
  }
    if (question2 == "Ludwig Van Beethoven") {
      correct++;
  }
    if (question3.toLowerCase() == "austria") {
      correct++;
  }
    if (question4 == "1918") {
      correct++;
  }
    if (question5 == "7") {
      correct++;
    }

  var messages = ["You are a real MAESTRO !!", "Great !", "I am sure you can do better..  : ("];
  var pictures = ["img/great.gif", "img/good.gif", "img/bad.gif"];

  var range;

  if(correct < 1){
    range = 2;

  }
  if(correct > 0 &&  correct < 3){
    range = 1;

  }
  if(correct > 2){
    range = 0;

  }


document.getElementById("after_submit").style.visibility ="visible";


document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML ="You got " + correct + " correct.";
document.getElementById("picture").src=pictures[range];
}
