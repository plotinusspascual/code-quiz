//global variables pointing to id's/classes containers in html
let startButton = document.getElementById("start-button");
let mainContainer = document.getElementById("main-container");
let nextButton = document.getElementById("next-button");
let questionCard = document.getElementById("question-card");
let choiceCard = document.getElementById("choice-card");
let timerCounter = document.querySelector(".timer-counter");

//counters
let questionCounter = 1;
let score = 0;

//timer var
var timer;
var timerCount;
// Will add timer later
function startTimer(){
  timer = setInterval(function(){
    timerCount--;
    timerCounter.textContent = timerCount;

    if(timerCount === 0){
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

//When timer runs out or end of questions
function endGame(){
  console.log("Final Score: " + score);
}

// Start Button to start game
startButton.addEventListener("click", startGame);

// Show's hidden container when start button is clicked

function startGame(){
  timerCount = 20;
  startButton.classList.add("hide");
  mainContainer.classList.remove("hide");
  startTimer();
  showQuestions();
}

// Test questions for now

var questionBank = [
    //index[0]
    {
      question: "What is my favorite flavor chips?",
      choices: ["Original", "BBQ", "Salt and Vinegar", "Lighty Salted"],
      correct: "Original",
    },
    //index[1]
    {
      question: "What is my go to beverage?",
      choices: ["Coffee", "Tea", "Soda", "Water"],
      correct: "Soda",
    },
    //index[2]
    {
      question: "Who is my least favorite marvel character?",
      choices: ["Black Widow", "Hawkeye", "Spiderman", "Nick Fury"],
      correct: "Black Widow",
    },
    //index[3]
    {
      question: "What is my golf handicap?",
      choices: ["0", "10", "15", "20"],
      correct: "20",
    },
    //index[4]
    {
      question: "What is my favorite Soda?",
      choices: ["Pepsi", "Coke", "Dr. Pepper", "Sprite"],
      correct: "Coke",
    },
]

// Populate list in html with array of questions and answers  

function showQuestions(){

  questionCard.innerHTML = "";
  choiceCard.innerHTML = "";
  //set question number so we can use it for questionbank initial index
  //Need to get question number so it knows what array to print out
  //print choices in button
  
  for(var i=0; i<questionBank.length-1; i++){
    //print question
    questionCard.textContent = questionBank[questionCounter-1].question;

    let createButton = document.createElement("BUTTON");
    
    createButton.innerHTML = questionBank[questionCounter-1].choices[i];
    choiceCard.appendChild(createButton);

    createButton.addEventListener("click", submitButton);
  };
}

//compare user selected button to answer
function submitButton(event){
  //console.log(event);
  const userSelectBtn = event.target.innerHTML;
  //console.log(userSelectBtn);
  //console.log(questionBank[questionCounter-1].correct);
  if(userSelectBtn == questionBank[questionCounter-1].correct){
    //console.log(true);
    score++;
    console.log("Score: " + score);
  } else{
    console.log("Incorrect");
  }
  questionCounter++;
  console.log(questionBank.length);
  if(questionCounter <= questionBank.length){
    showQuestions();
  }else{
    endGame();
  }
}
