var readlineSync = require("readline-sync");
var userName = readlineSync.question("May I have your name? ");
console.log("Hey " + userName + "!, Welcome to the 'The Office' quiz!!!");
var score = 0;
var questions = [
  {
    question: "What is the name of the company they work at? ",
    answer: "Dunder Mifflin",
  },
  {
    question: "What is the name of their city? ",
    answer: "Scranton",
  },
  {
    question: "In what state? ",
    answer: "Pennsylvania",
  },
  {
    question: "What does Michael's mug say? ",
    answer: "World's best boss",
  },
  {
    question: "Who is the Vice President of Sales who dates Michael? ",
    answer: "Jan",
  },
  {
    question: "Who does Jim ends up with? ",
    answer: "Pam",
  },
];
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Shabash! You are right!");
    score++;
    console.log("Your current score is " + score);
  } else {
    console.log("You are wrong!");
    console.log("Your current score is " + score);
  }
}
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("The game ends here");
console.log("You scored " + score + " points");
