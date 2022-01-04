var startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const mainContainer = document.getElementById("main-container");

var choices = document.getElementById("")

startButton.addEventListener("click", startGame);

function startGame(){
  startButton.classList.add("hide");
  mainContainer.classList.remove("hide");
}


const questions = [
  {
    question: 'What is 2+2?',
    answers: [
      { text: '4', correct: true },
      { text: '1', correct: false}
    ]
  }
]