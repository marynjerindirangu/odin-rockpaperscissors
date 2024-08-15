

let rockChoice = document.getElementById("rock");
let paperChoice = document.getElementById("paper");
let scissorsChoice = document.getElementById("scissors");
let displayResult = document.getElementById("results");
let humanScore = 0;
let computerScore = 0;
rockChoice.addEventListener ('click', () => playGame("rock"));
paperChoice.addEventListener ('click', () => playGame("paper"));
scissorsChoice.addEventListener ('click', () => playGame("scissors"));

let displayScore = document.getElementById("scoreDisplay");

let buttons = document.querySelectorAll(".btn")




function playGame(playersChoice){
     
  const choices = ["rock", "paper", "scissors"]
  const computerChoice = choices[Math.floor(Math.random()*choices.length)];


if (playersChoice === computerChoice) {

      displayResult.textContent = "its a tie";
} 
else if(playersChoice === "rock" && computerChoice === "scissors" ||
        playersChoice === "scissors" && computerChoice === "paper" ||
        playersChoice === "paper" && computerChoice ==="rock") {
          
           humanScore++;

           if(humanScore === 5){
            displayResult.textContent = "Game over! You win with 5 points";
            displayResult.style.color = "palevioletred";
            displayResult.style.fontSize = "Large";
            displayResult.style.fontWeight = "Bold";
            disableBtns();
            endGame();
           } else {
            displayResult.textContent = `you win! ${playersChoice} beats ${computerChoice} `;

           }
  } 
  else{
        
        computerScore++;

        if(computerScore === 5){
            
            displayResult.textContent = "Game over! computer has 5 points";
            displayResult.style.color = "palevioletred";
            displayResult.style.fontSize = "Large";
            displayResult.style.fontWeight = "Bold";
            disableBtns();
            endGame();
        } else {
            displayResult.textContent =`computer wins! ${computerChoice} beats ${playersChoice}`;

        }

}
displayScore.textContent = `Computer score: ${computerScore}  Your score: ${humanScore};`
 
}



      
function endGame(){
      document.getElementById("endGame").style.display = "block";

     
}

function disableBtns() {
      buttons.forEach((button => button.setAttribute("disabled", "")))
}

