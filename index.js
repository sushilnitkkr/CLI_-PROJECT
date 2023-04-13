var readlineSync = require("readline-sync");

var score = 0;

//List of questions
const questions = [
  {
    question: "Where i do live?",
    answer: "Fatehpur"
  },
  {
    question: "What is my birthday month?",
    answer: "April"
  },
  {
    question: "What is my last qualification?",
    answer: "MCA"
  },
  {
    question: "What is name of my last college?",
    answer: "NIT Kurukshetra"
  },
  {
    question: "Where i do Work?",
    answer: "Trejhara solution"
  },
  {
    question: "Place Name, Where i visited last time?",
    answer: "Lansdowne"
  }
];

function welcome() {
  var name = readlineSync.question("What is your name ?")
  console.log("Welcome " + name + " to DO YOU KNOW sushil")
}

function play(question, answer) {
  userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right.")
    score = score + 1;
  }
  else {
    console.log("You are wrong.")
    console.log("Right answer is ----> " + answer)
  }
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScore() {
  console.log("YAY! Your Scored: " + score)
}

welcome();
game();
showScore();