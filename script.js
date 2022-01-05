//global variables pointing to id's/classes containers in html
let startButton = document.getElementById("start-button");
let mainContainer = document.getElementById("main-container");
let nextButton = document.getElementById("next-button");
let questionCard = document.getElementById("question-card");
let choiceCard = document.getElementById("choice-card");

// Start Button to start game
startButton.addEventListener("click", startGame);

// Show's hidden container when start button is clicked
// Will add timer later
function startGame(){
  startButton.classList.add("hide");
  mainContainer.classList.remove("hide");
  showQuestions();
  //hides next button
  // nextButton.classList.add("hide"); 
}

// Test questions for now

var questionBank = [
    //index[0]
    {
      question: "What is my favorite flavor chips",
      choices: ["Original", "BBQ", "Salt and Vinegar", "Lighty Salted"],
      correct: "Original",
    },
    //index[1]
    {
      question: "2+2",
      choices: ["1", "2", "3", "4"],
      correct: "4",
    },
    //index[2]
    {
      question: "2+2",
      choices: ["1", "2", "3", "4"],
      correct: "4",
    },
    //index[3]
    {
      question: "2+2",
      choices: ["1", "2", "3", "4"],
      correct: "4",
    },
    //index[4]
    {
      question: "2+2",
      choices: ["1", "2", "3", "4"],
      correct: "4",
    },
]

// Populate list in html with array of questions and answers  

function showQuestions(){

  questionCard.innerHTML = "";
  choiceCard.innerHTML = "";
  //print choices in button
  //Need to get question number so it knows what array to print out
  for(var i=0; i<questionBank.length-1; i++){
    let createButton = document.createElement("BUTTON");
  //print question
  console.log(i);
    questionCard.textContent = questionBank[i].question;
    console.log(questionCard);
   // console.log(questionBank.length);
    createButton.innerHTML = questionBank[i].choices[i];
    choiceCard.appendChild(createButton);
  };
}

// Make next button a submit button 
// After clicking next, check to see if chosen button is correct
// Increment some sort of variable if correct
// Next button should show next set of questions
// 

function submitButton(){

}
