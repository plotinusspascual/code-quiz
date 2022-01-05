//global variables pointing to id's/classes containers in html

var startButton = document.getElementById("start-button");
let nextButton = document.getElementById("next-button");
let mainContainer = document.getElementById("main-container");
let answerChoices = document.querySelectorAll("#choice");
let askedQuestions = document.getElementById("question");

// Start Button to start game
startButton.addEventListener("click", startGame);

// Show's hidden container when start button is clicked
// Will add timer later
function startGame(){
  startButton.classList.add("hide");
  mainContainer.classList.remove("hide");
  showQuestions();
}

// Test questions for now
let questions = 
  {
    question: "What is 2+2?",
    answers: ['1','2','3','4'],
    correct: 3
  }

// Populate list in html with array of questions and answers  

function showQuestions(){

  askedQuestions.textContent = questions.question;

  answerChoices.forEach(function(element, index){
    element.textContent = questions.answers[index];
  });
}

// Make next button a submit button 
// After clicking next, check to see if chosen button is correct
// Increment some sort of variable if correct
// Next button should show next set of questions
// 